```shell
NAME:
   vince - The cloud native web analytics server

USAGE:
   vince [global options] [command [command options]] [arguments...]

VERSION:
   v1.1.0

DESCRIPTION:
   Self hosted web analytics server that respects user privacy

COMMANDS:
   help, h  Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --listen value                       host:port to dind the servser (default: ":8080") [$VINCE_LISTEN]
   --data value                         directory to store data [$VINCE_DATA]
   --autoTLS                            enables automatic tls (default: false) [$VINCE_AUTO_TLS]
   --acmeEmail value                    email address for atomatic tls [$VINCE_ACME_EMAIL]
   --acmeDomain value                   domain for atomatic tls [$VINCE_ACME_DOMAIN]
   --adminName value                    admin user name [$VINCE_ADMIN_NAME]
   --adminEmail value                   admin email address [$VINCE_ADMIN_EMAIL]
   --adminPassword value                admin password [$VINCE_ADMIN_PASSWORD]
   --url value                          url resolving to this vince instance (default: "http://localhost:8080") [$VINCE_URL]
   --domains value [ --domains value ]  list of domains to create on startup [$VINCE_DOMAINS]
   --profile                            registrer http profiles on /debug/ path (default: false) [$VINCE_PROFILE]
   --help, -h                           show help (default: false)
   --version, -v                        print the version (default: false)
```