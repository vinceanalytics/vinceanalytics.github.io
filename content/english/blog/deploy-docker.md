---
title: "Deploy vince with docker"
categories: ["Guides"]
author: "Geofrey Ernest"
tags: ["deployment"]
draft: false
---

vince uses github container registry to distribute container images.

<!--more-->


## Pull latest image

```shell
❯ docker pull ghcr.io/vinceanalytics/vince
```

## Run container 

***Prepare data directory***
```shell
❯ mkdir vince-data
```

***Start docker container with mounted data directory***
```shell
❯ docker run --rm  -p 8080:8080 -v ./vince-data:/vince-data ghcr.io/vinceanalytics/vince serve  --adminName acme --adminPassword 1234 --domains vinceanalytics.com --profile
2024/10/31 04:24:24 [JOB 1] WAL file vince-data/pebble/000081.log with log number 000081 stopped reading at offset: 124; replayed 1 keys in 1 batches
2024/10/31 04:24:25 INFO loading translation data
2024/10/31 04:24:25 INFO complete loading translation elapsed=202.690208ms keys=1237
2024/10/31 04:24:25 INFO starting server addr=:8080
2024/10/31 04:24:25 INFO starting event processing loop
```
