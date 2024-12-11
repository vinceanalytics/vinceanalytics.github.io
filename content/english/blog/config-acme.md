---
title: Automatic tls with acme
author: "Geofrey Ernest"
categories: ["Guides"]
tags: ["config"]
date: "2024-12-11"
---

<!--more-->

## Automatic TLS
`vince` supports automatic tls using acme client with let's encrypt. 

### Enabling automatic tls

*env*
: `VINCE_AUTO_TLS` example `VINCE_AUTO_TLS=true`

*flag*
: `--autoTLS` example `--autoTLS=true`


You need to setup account email address and the domain to generate certificate for, using `acmeEmail` and `acmeDomain` options.

### acmeEmail

This is used by CAs, such as Let's Encrypt, to notify about problems
with issued certificates.

*env*
: `VINCE_ACME_EMAIL` example `VINCE_ACME_EMAIL=example@example.org`

*flag*
: `--acmeEmail` example `--acmeEmail=example@example.org`

### acmeDomain
> `acmeDomain` should be the domain name that is used to point to your server. 
> For example we host demo vince instance on `demo.vinceanalytics.com` so we use this as `acmeDomain`

*env*
: `VINCE_ACME_DOMAIN` example `VINCE_ACME_DOMAIN=example.org`

*flag*
: `--acmeDomain` example `--acmeDomain=example.org`
