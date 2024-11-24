---
title: "Deploy vince locally"
categories: ["Guides"]
author: "Geofrey Ernest"
tags: ["deployment"]
draft: false
---

Vince ships a single executable without any dependencies.

<!--more-->

## Installing

### MacOS and Linux

```shell
curl -fsSL https://vinceanalytics.com/install.sh | bash
```

### Docker

```shell
docker pull ghcr.io/vinceanalytics/vince
```



### Download 

[see release page](https://github.com/vinceanalytics/vince/releases)


## Checking installation

```shell
vince --version
```

## Start vince


*create admin*

```shell
❯ vince admin --name acme --password 1234
```

*start server*
```shell
❯ vince serve                            
2024/10/23 15:32:08 [JOB 1] WAL file vince-data/pebble/000002.log with log number 000002 stopped reading at offset: 124; replayed 1 keys in 1 batches
2024/10/23 15:32:08 INFO starting event processing loop
2024/10/23 15:32:08 INFO starting server addr=:8080
```

See [Cli](/blog/config-cli) guide for full commandline options