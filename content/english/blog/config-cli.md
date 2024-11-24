---
title: CLI
author: "Geofrey Ernest"
categories: ["Guides"]
tags: ["config"]
---

<!--more-->


```shell
❯ vince 
NAME:
   vince - The cloud native web analytics server

USAGE:
   vince [global options] [command [command options]] [arguments...]

VERSION:
   v1.5.2

DESCRIPTION:
   Self hosted web analytics server that respects user privacy

COMMANDS:
   serve    Starts vince web server
   admin    Creates admin account
   help, h  Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```


## admin command

Creates admin account that is used to access the vince instance.

*Example*
```shell
❯ vince admin --name acme --password 1234
```

{{< notice "note" >}}
Only one admin is allowed pervince instance. Changing password is achieved by running the admin command with a different password.
{{< /notice >}}

```shell
❯ vince admin -h
NAME:
   vince admin - Creates admin account

USAGE:
   vince admin [command [command options]] 

OPTIONS:
   --data value      directory to store data (default: "vince-data") [$VINCE_DATA]
   --name value      admin email address [$VINCE_ADMIN_NAME]
   --password value  admin password [$VINCE_ADMIN_PASSWORD]
   --help, -h        show help (default: false)
```

## serve command

Starts vince instance server

*Example*
```shell
❯ vince serve                            
```

{{< notice "tip" >}}
Make sure you start with same `--data` path as the one you created admin account with.
{{< /notice >}}

{{< notice "info" >}}
The `vince admin` command is optional. You can start vince and provide `--adminName` and `--adminPassword` directly and vince will create admin account before starting.

Providing different values for the flags will permanetly override the previous values, we recommend creating admin separately with `vince admin`.
{{< /notice >}}

```shell
❯ vince serve -h
NAME:
   vince serve - Starts vince web server

USAGE:
   vince serve [command [command options]] 

OPTIONS:
   --listen value                       host:port to dind the servser (default: ":8080") [$VINCE_LISTEN]
   --data value                         directory to store data (default: "vince-data") [$VINCE_DATA]
   --autoTLS                            enables automatic tls (default: false) [$VINCE_AUTO_TLS]
   --acmeEmail value                    email address for atomatic tls [$VINCE_ACME_EMAIL]
   --acmeDomain value                   domain for atomatic tls [$VINCE_ACME_DOMAIN]
   --url value                          url resolving to this vince instance (default: "http://localhost:8080") [$VINCE_URL]
   --demo value                         Website to use as a demo (default: "vinceanalytics.com") [$VINCE_DEMO_URL]
   --domains value [ --domains value ]  list of domains to create on startup [$VINCE_DOMAINS]
   --profile                            registrer http profiles on /debug/ path (default: false) [$VINCE_PROFILE]
   --adminName value                    administrator name [$VINCE_ADMIN_NAME]
   --adminPassword value                administrator password [$VINCE_ADMIN_PASSWORD]
   --help, -h                           show help (default: false)
```