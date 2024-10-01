## Configuring data directory for persistence

***Environment vairbla***

```
VINCE_DATA=/path/to/data/directory
```


***Commandline***

```
vince --data=/path/to/data/directory
```

The data directory will be created if it does not yet exists.


## Configuring in memory storage

Omitting data directory will start vince with in memory storage. Please prefer to always provide data directory to avoid losing data.

When vince is started with in memory store, all data will be lost after restarts.