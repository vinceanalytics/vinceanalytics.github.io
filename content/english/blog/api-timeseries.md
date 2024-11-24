---
title: Timeseries
author: "Geofrey Ernest"
categories: ["Guides"]
tags: ["api"]
---

<!--more-->

## GET /api/v1/stats/timeseries

This endpoint provides timeseries data over a certain time period. If you are familiar with the vince dashboard, this endpoint corresponds to
the main visitor graph.


```bash
❯ curl -s  "http://localhost:8080/api/v1/stats/timeseries?site_id=$SITE_ID&period=gmo" \
  -H "Authorization: Bearer ${TOKEN}"|jq .
{
  "results": [
    {
      "timetsmap": "2024-10-11 00:00:00",
      "visitors": 120
    }
  ]
}
```


#### Parameters
<hr / >

**site_id** *Required*

Domain of your site on vince.

<hr / >

**period** *Optional*

See [time periods](/blog/api-concepts#time-periods). If not specified, it will default to `30d`.

<hr / >

**filters** *Optional*

See [filtering](/blog/api-concepts#filtering)

<hr / >

**metrics** *Optional*

Comma-separated list of metrics to show for each time bucket. Valid options are `visitors`, `visits`, `pageviews`, `views_per_visit`, `bounce_rate`, `visit_duration`, `events` and `conversion_rate`. If not specified, it will default to `visitors`.

<hr / >


**interval** *Optional*

Choose your reporting interval. Valid options are `day` (always) and `month` (when specified period is longer than one calendar month). Defaults to
`month` for `6mo` and `12mo`, otherwise falls back to `day`.
