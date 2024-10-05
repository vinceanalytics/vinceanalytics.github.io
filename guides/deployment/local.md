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

### From source

```
go install github.com/vinceanalytics/vince@latest
```

### Download 

[see release page](https://github.com/vinceanalytics/vince/releases)


## Checking installation

```
vince --version
```

## Start vince

```shell
vince serve --adminName=acme \
  --adminPassword=1234\
  --adminEmail=acme@example.com 
```

This command will start vince on `localhost:8080`. You can automatically add sites on startup with `--domains` flag.