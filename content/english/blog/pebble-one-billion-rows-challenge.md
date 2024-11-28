---
title: Pebble and The One Billion Row Challenge with Roaring Bitmaps
author: "Geofrey Ernest"
categories: ["Blog"]
tags: ["pebble","roaring-bitmaps","storage"]
---


We use [Pebble Key Value Store](https://github.com/cockroachdb/pebble) and  roaring bitmaps at the core of  [vince](https://www.vinceanalytics.com/) - A self hosted alternative to Google analytics. This blog post tackles [The One Billion Row Challenge](https://www.morling.dev/blog/one-billion-row-challenge/)  using `pebble` and roaring bitmaps.

<!--more-->

This challenge has very similar use case like vince, we have two columns, one for weather stations (with low cardinality) and another for temperature (with high cardinality).

{{< notice "info" >}}
[Pebble](https://github.com/cockroachdb/pebble) is the  underlying key value storage for [CocroachDB](https://github.com/cockroachdb/cockroach) and has been used in production since 2020.
{{< /notice >}}


Full source code of the  implementation has been released as [robin](https://github.com/gernest/robin). And can be installed locally with,

```shell
go install github.com/gernest/roabin@latest
```


## Generate data

Instructions taken and followed from [here](https://rmoff.net/2024/01/03/1%EF%B8%8F%E2%83%A3%EF%B8%8F-1brc-in-sql-with-duckdb/#setup)

I am on a Mac

- Fork the [repository](https://github.com/gunnarmorling/1brc) and clone it locally
- install [sdkman](https://sdkman.io/) and setup java
```shell
❯ sdk install java 21.0.1-zulu
❯ sdk use java 21.0.1-zulu
```
- Build the test data generator
```shell
❯ ./mvnw clean verify
```
- Generate the test data
```shell
❯ ./create_measurements.sh 1000000000
```

The last step will create a file  measurements.txt with the 1 billion rows.


## Load data to pebble

```shell
❯ time robin index index ../1brc/measurements.txt
elapsed 3m17.949667333s
robin index index ../1brc/measurements.txt  185.25s user 12.78s system 99% cpu 3:18.99 total
```

The command tells  `robin` to index `../1brc/measurements.txt`  and store the result into a pebble database in `index` directory.

{{< notice "note" >}}
The main goal is to observe efficiency on our index format in terms of storage and query. Most of the time/cpu is spent on parsing, and also we perform compaction after indexing.
{{< /notice >}}

### Index storage efficiency

Origial sounce size on disk

```shell
❯ ls -lh ../1brc/measurements.txt 
-rw-r--r--  1 vince  admin    13G Nov 27 19:49 ../1brc/measurements.txt
```

Index result size on disk

```shell
❯ du -h index 
3.1G    index
```

Interesting result, we were able to reduce `13GB` to only `3.1GB`. 

You can skip the following section ang go directly to [Aggregate Results](#aggregate-results) if you are not interested in techinal details of roaring bitmap indexes, it is a very long read.

### Roaring Bitmap Index

This is the **_only_** index used by vince, and has its roots in Pilosa  which was a global bitmap index. I extracted the [roaring bitmap](https://github.com/gernest/roaring) implementation from pilosa and spent the **last 2 years** researching on how to apply their indexing strategy for web analytics events. 


## Aggregate Results

### All

```shell
❯ time robin  -limit=5 query index
    station   min mean  max elapsed
       Abha -36.6 18.0 66.8 
    Abidjan -29.3 26.0 73.2 
     Abéché -20.4 29.4 81.4 
      Accra -20.9 26.4 75.5 
Addis Ababa -31.1 16.0 67.4 
elapsed 2m47.577293416s
robin -limit=5 query index  761.19s user 133.30s system 533% cpu 2:47.62 total
```

The command computes `min`, `mean` and `max` for all weather station. 


### One
You can compute aggregate for only a specific station 

```shell
❯ time robin  query index Abha         
 station   min mean  max elapsed
    Abha -36.6 18.0 66.8 
elapsed 1.123626083s
robin query index Abha  2.94s user 1.82s system 409% cpu 1.163 total
```

{{< notice "note" >}}
vince does not have global scan filters. The index is designed for extremely fast filters by specific column value, in our case here we aggregated across a billion rows for only `Abha` station under 1 second without any optimizations.
{{< /notice >}}