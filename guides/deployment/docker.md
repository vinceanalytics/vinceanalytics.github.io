[Choose container image version](https://github.com/vinceanalytics/vince/pkgs/container/vince)


## Deploy with in memory store

```
❯ docker run --rm   -p 8080:8080  ghcr.io/vinceanalytics/vince:v1.3.1 \                           
 --adminName=acme --adminPassword=1234 --adminEmail=trial@vinceanalytics.com
2024/10/11 17:13:14 INFO starting server addr=:8080
2024/10/11 17:13:14 INFO starting gc check loop interval=1m0s
2024/10/11 17:13:14 INFO starting event processing loop
```

## Deploy with persistent store
Use  volume flag and specify data directory for vince with `--data` flag.
```
❯ docker run --rm  -p 8080:8080 -v ./vince-data:/vince-data ghcr.io/vinceanalytics/vince:v1.3.1 \  
 --data=vince-data  --adminName=acme --adminPassword=1234 --adminEmail=trial@vinceanalytics.com
2024/10/11 17:06:28 INFO starting server addr=:8080
2024/10/11 17:06:28 INFO starting gc check loop interval=1m0s
2024/10/11 17:06:28 INFO starting event processing loop
```