# Installation

Vince ships a single executable without any dependencies.


## Installing

### MacOS and Linux

```
curl -fsSL https://vinceanalytics.com/install.sh | bash
```

### Docker

```
docker pull ghcr.io/vinceanalytics/vince
```



### Download 

[see release page](https://github.com/vinceanalytics/vince/releases)


## Checking installation

```
vince --version
```

## Start vince


*create admin*
```
❯ vince admin --name acme --password 1234
```

*start server*
```
❯ vince serve                            
2024/10/23 15:32:08 [JOB 1] WAL file vince-data/pebble/000002.log with log number 000002 stopped reading at offset: 124; replayed 1 keys in 1 batches
2024/10/23 15:32:08 INFO starting event processing loop
2024/10/23 15:32:08 INFO starting server addr=:8080
```

See [Cli](/guides/config/cli) guide for full commandline options