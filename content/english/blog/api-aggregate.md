---
title: Aggregate
author: "Geofrey Ernest"
categories: ["Guides"]
tags: ["api"]
---

<!--more-->


## GET /api/v1/stats/aggregate

This endpoint aggregates metrics over a certain time period. If you are familiar with the vince dashboard, this endpoint corresponds to the top row of stats that include `Unique Visitors` Pageviews, `Bounce rate` and `Visit duration`. You can retrieve any number and combination of these metrics in one request.


```bash
❯ curl -s  "http://localhost:8080/api/v1/stats/aggregate?site_id=$SITE_ID&period=6mo&property=visit:source&metrics=visitors,bounce_rate" \
  -H "Authorization: Bearer ${TOKEN}" |jq .
{
  "bounce_rate": 0,
  "visitors": 120
}
```

### Parameters
<hr / >

**site_id** *Required*

Domain of your site on vince.

<hr / >

**period** *Optional*

See [time periods](/blog/api-concepts#time-periods). If not specified, it will default to `30d`.

<hr / >

**metrics** *Optional*

Comma-separated list of metrics to aggregate, e.g. `visitors,pageviews,bounce_rate`. See the [list of available metrics](/blog/api-concepts#metrics) above.

If not specified, will default to `visitors`.

{{< notice "tip" >}}
Some metrics can only be queried with a certain filter. For example, the `conversion_rate` metric can only be queried with a filter on `event:goal`. Similarly, `time_on_page` can only be queried with an `event:page` filter.
{{< /notice >}}


**filters** *Optional*

See [filtering](/blog/api-concepts#filtering)