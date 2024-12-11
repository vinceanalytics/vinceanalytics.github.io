---
title: Breakdown
author: "Geofrey Ernest"
categories: ["Guides"]
tags: ["api"]
date: "2024-12-11"
---

<!--more-->

## GET /api/v1/stats/breakdown

This endpoint allows you to break down your stats by some property. If you are familiar with SQL family databases, this endpoint corresponds to
running `GROUP BY` on a certain property in your stats, then ordering by the count.

Check out the [properties](/blog/api-concepts#properties) section for a reference of all the properties you can use in this query.

This endpoint can be used to fetch data for `Top sources`, `Top pages`, `Top countries` and similar reports.

```bash
❯ curl -s  "http://localhost:8080/api/v1/stats/breakdown?site_id=$SITE_ID&period=6mo&property=visit:source&metrics=visitors,bounce_rate&limit=5" \
  -H "Authorization: Bearer ${TOKEN}" |jq .
{
  "results": [
    {
      "bounce_rate": 0,
      "source": "Pocket",
      "visitors": 120
    },
    {
      "bounce_rate": 45,
      "source": "maailm",
      "visitors": 120
    },
    {
      "bounce_rate": 0,
      "source": "Search.com",
      "visitors": 120
    },
    {
      "bounce_rate": 0,
      "source": "Google",
      "visitors": 120
    },
    {
      "bounce_rate": 0,
      "source": "DuckDuckGo",
      "visitors": 120
    },
    {
      "bounce_rate": 16,
      "source": "Twitter",
      "visitors": 120
    },
    {
      "bounce_rate": 0,
      "source": "Facebook",
      "visitors": 120
    },
    {
      "bounce_rate": 0,
      "source": "Hooseek.com",
      "visitors": 120
    },
    {
      "bounce_rate": 0,
      "source": "Naver Images",
      "visitors": 112
    },
    {
      "bounce_rate": 33,
      "source": "Mail.ru",
      "visitors": 111
    },
    {
      "bounce_rate": 26,
      "source": "Search.ch",
      "visitors": 111
    },
    {
      "bounce_rate": 38,
      "source": "Flickr",
      "visitors": 110
    },
    {
      "bounce_rate": 0,
      "source": "Outbrain",
      "visitors": 34
    },
    {
      "bounce_rate": 0,
      "source": "Tiscali",
      "visitors": 32
    },
    {
      "bounce_rate": 0,
      "source": "SoSoDesk",
      "visitors": 32
    },
    {
      "bounce_rate": 0,
      "source": "Bebo",
      "visitors": 29
    }
  ]
}
```

#### Parameters
<hr / >

**site_id** *Required*

Domain of your site on vince.

<hr / >

**property** *Required*

Which property to break down the stats by. Valid options are listed in the [properties](/blog/api-concepts#properties) section above. Note that the `event:hostname` property is unsupported as a breakdown property at this stage.

<hr / >

**period** *Optional*

See [time periods](/blog/api-concepts#time-periods). If not specified, it will default to `30d`.

<hr / >

**metrics** *Optional*

Comma-separated list of metrics to show for each item in breakdown. See the [list of available metrics](/blog/api-concepts#metrics) above. If not specified, it will default to `visitors`.

{{< notice "tip" >}}
Some metrics require a certain filter or breakdown property. For example `conversion_rate` can be queried with a filter on `event:goal` or in a breakdown by`event:goal`.
{{< /notice >}}

<hr / >

**filters** <Optional />

See [filtering](/blog/api-concepts#filtering)
