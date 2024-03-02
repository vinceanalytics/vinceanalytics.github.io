
# Fast regular expression index with finite state transducer


###### createdAt 2024-03-02
###### updatedAt 2024-03-02
###### author Geofrey Ernest
###### section architecture

I needed a fast index that supports regular expressions for [vince](https://github.com/vinceanalytics/vince). The data model used by `vince` is append only, no deletes or updates. This means once collected the data is guaranteed not to change, so I wanted an index that will never be updated/changed, my search brought me to [vellum](https://github.com/blevesearch/vellum) a go  library implementing a FST (finite state transducer).

In this post I will explain how `vince` uses `vellum` to offer fast exact and regular expression search that powers property filter feature of `vince` web analytics api.


### Our data model

```
syntax = "proto3";
package v1;

message Data {
  int64 timestamp = 1;
  int64 id = 2;
  optional bool bounce = 3;
  bool session = 4;
  bool view = 5;
  double duration = 6;

  string browser = 19;
  string browser_version = 20;
  string city = 26;
  string country = 23;
  string device = 18;
  string domain = 25;
  string entry_page = 9;
  string event = 7;
  string exit_page = 10;
  string host = 27;
  string os = 21;
  string os_version = 22;
  string page = 8;
  string referrer = 12;
  string region = 24;
  string source = 11;
  string utm_campaign = 15;
  string utm_content = 16;
  string utm_medium = 14;
  string utm_source = 13;
  string utm_term = 17;
  string tenant_id = 28;

  message List { repeated Data items = 1; }
}
```

All `string` fields are referred to as properties/dimensions. They help breakdown and digest web analytics metrics. For instance, `Aggregate visitors by country`.

We use `Apache Arrow` for in memory representation and `Apache Parquet` for on disc (cold) storage. We keep an index for each property. 

Data is collected in big chunks called `granules` before being stored in disc. The size of granule is configurable, by default it is `256MiB`(This is in memory size of `arrow.Record` + index) . When the granule is reached   we convert it into `parquet` file with a single row group. All properties are encoded as dictionaries and all data fields/columns are compressed using `zstd`.

> example snippets below are approximate of the actual implementation in vince. We actually use `array.Dictionary` for property columns.

### Index mapping

Since we store the data in columns and property values are string dictionaries, for faster search we need to map between `value => row_id`, but we know that same value can appear on multiple rows so the mapping is `value => [row_1,row_2,row_n]`

We use `roaring.Bitmap` for efficient storing/serializing of rows mapping. This is how it looks like in Go.

```go
type ColumnIndex struct {
	mapping map[string]*roaring.Bitmap
}
```

We can now add a method to build the mapping

```go
unc (c *ColumnIndex) IndexProperty(prop *array.String) {
	for row := 0; row < prop.Len(); row++ {
		value := prop.Value(row)
		bitmap, ok := c.mapping[value]
		if !ok {
			// Create a new bitmap
			bitmap = new(roaring.Bitmap)
			c.mapping[value] = bitmap
		}
		bitmap.Add(uint32(row))
	}
}
```

### Vellum

Now we have our mapping we can build a vellum fst from it. One  challenge we have is `vellum` only accept `uint64` as values. To work around this we store `bitmaps` together with the the vellum index  so we can use position of the bitmaps as value.

First we need to update `ColumnIndex` to store the `bitmaps` and serialized `vellum` `fst`

```go
type ColumnIndex struct {
	mapping map[string]*roaring.Bitmap
	// bitmaps positioned by sorted keys of mapping
	values []*roaring.Bitmap
	//serialized vellum fst
	fst []byte
}
```

Now, our updated index method will look like this

> error handling is omitted for brevity

```
func (c *ColumnIndex) IndexProperty(prop *array.String) {
	for row := 0; row < prop.Len(); row++ {
		value := prop.Value(row)
		bitmap, ok := c.mapping[value]
		if !ok {
			// Create a new bitmap
			bitmap = new(roaring.Bitmap)
			c.mapping[value] = bitmap
		}
		bitmap.Add(uint32(row))
	}
	var out bytes.Buffer
	index, _ := vellum.New(&out, nil)
	// vellum wants keys to be lexical sorted
	keys := make([]string, 0, len(c.mapping))
	for k := range c.mapping {
		keys = append(keys, k)
	}
	sort.Strings(keys)
	c.values = make([]*roaring.Bitmap, len(keys))
	for i, k := range keys {
		// store the value itmap
		c.values[i] = c.mapping[k]
		// Note we are storing the index where the value bitmap is.
		index.Insert([]byte(k), uint64(i))
	}
	index.Close()
	c.fst = out.Bytes()
}
```


### Regular expression search

With out `[]*roaring.Bitmap` slice and serialized `vellum` `fst` we can build our searching method. Our search goal is to find all rows which a matching term was found.

```go
func (c *ColumnIndex) Search(term string) *roaring.Bitmap {
	// load vellum fst. Please move this out, you only need to load fst once and
	// reuse it multiple times.
	fst, _ := vellum.Load(c.fst)
	// compile regex transducer using github.com/blevesearch/vellum/regexp
	regexTransducer, _ := regexp.New(term)
	var b *roaring.Bitmap
	it, err := fst.Search(regexTransducer, nil, nil)
	for err == nil {
		_, r := it.Current()
		if b == nil {
			b = c.values[r].Clone()
		} else {
			b.And(c.values[r])
		}
		err = it.Next()
	}
	if b == nil {
		b = new(roaring.Bitmap)
	}
	return b
}
```



This is all you need to introduce fast regular expression search in your Go application. Please visit [vellum documentation](https://pkg.go.dev/github.com/couchbase/vellum?utm_source=godoc) for more details on the library and its features.