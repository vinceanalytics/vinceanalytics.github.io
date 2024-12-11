---
title: Hash-based routing
category: Guides
categories: ["Guides"]
tags: ["sites"]
date: "2024-12-11"
---

<!--more-->


Vince Analytics integrates automatically with `pushState` based frontend routers. However, if you're using a frontend
framework that uses the URL hash for routing, you need to take an extra step to install the hash-based tracker instead of the default one. 

The hash-based tracker is available by changing your script to load `http://localhost:8080/js/script.hash.js` instead of
the default `http://localhost:8080/js/script.js`.

Here's what the full script tag will look like:

```html
<script defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.hash.js"></script>
```


This tracker will change two things about how events are collected:

* Trigger pageviews on the `hashchange` event
* Normally the hash part of the URL is discarded in your Vince dashboard. In hash-mode, the hash part is preserved in your stats so you can see the different pages your visitors have viewed.
