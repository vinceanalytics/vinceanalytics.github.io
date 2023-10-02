# add_site

Creates a new site.

Args:
- `domain`: The domain part of the site you add e.g `example.com`
- `description`(optional): Text describing what this site is about

Without description

```shell
mysql> call add_site('example.com');
+--------+
| status |
+--------+
| ok     |
+--------+
1 row in set (0.00 sec)

```


With description

```shell
mysql> call add_site('example.com','Sample site for documentation');
+--------+
| status |
+--------+
| ok     |
+--------+
1 row in set (0.00 sec)
```




