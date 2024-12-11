---
title: Current visitors
categories: ["Guides"]
tags: ["api"]
date: "2024-12-11"
---

<!--more-->

## GET /api/v1/stats/realtime/visitors

This endpoint returns the number of current visitors on your site. A current visitor is defined as a visitor who triggered a pageview on your site
in the last 5 minutes.

```bash
❯  curl "http://localhost:8080/api/v1/stats/realtime/visitors?site_id=$SITE_ID" \
  -H "Authorization: Bearer ${TOKEN}"

119
```

#### Parameters
<hr / >

**site_id** *Required*

Domain of your site on Vince.
<hr / >