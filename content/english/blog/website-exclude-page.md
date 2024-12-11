---
title: Exclude specific pages from being tracked
categories: ["Guides"]
tags: ["sites"]
date: "2024-12-11"
---

<!--more-->


By default, Vince Analytics tracks every page you install the snippet on. If you don't want Vince to track specific pages, don't include the snippet on those pages.

Alternatively, you can also manually exclude specific pages from being tracked. When excluding pages manually, the exclusion means that pageviews on the excluded page won't be counted any more from the moment of exclusion. The historical stats will be kept and will stay the same.

Outbound link clicks and other custom events on the excluded page will still track like normal. Only the pageviews will be excluded.

Here's how to exclude pages manually.

## 1. You'll need to use a different Vince script snippet

To manually exclude specific pages from being tracked, you need to change your Vince script snippet `src` attribute from `http://localhost:8080/js/script.js` to `http://localhost:8080/js/script.exclusions.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to your Vince account):

```html
<script defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.exclusions.js"></script>
```

## 2. Add the pages you'd like to exclude or include

The page-specific exclusions rely on two script options: `data-exclude` and `data-include`. To exclude certain pages from being tracked, use the `data-exclude` attribute as follows:

```html
data-exclude="/blog4, /rule/*, /how-to-*, /*/admin, /*/priv/*, /more-paths-here"
```

To exclude **everything except** for some specific pages, use the `data-include` attribute in the exact same way, specifying the only pages you want to track:

```html
data-include="/en**, /es**"
```

You can also use a combination of `data-include` and `data-exclude` options. Do note that when using the two options together, any page path that matches both the exclusion and inclusion rule, is **excluded** from being tracked. For example, the following combination won't track the page `/en/user/*/settings` (even though it matches the inclusion rule).

```html
data-include="/en**" data-exclude="/en/user/*/settings"
```

Any pages listed in this format should be **comma-separated**, with asterisks to indicate unspecified regions of the pathname. All entries must begin with a `/`, and should **not** include the trailing slash as we account for this automatically.

- Asterisks (`*`) expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but **can't** be in the place of slashes.
- Double asterisks (`**`) expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent **any** characters, even slashes.

See below for examples of common page use cases and how they would function.

## 3. Change the snippet on your site to the new snippet

The new snippet would look like this (make sure to change the `data-domain` attribute to the domain you added to your Vince account):

```html
<script defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.exclusions.js" data-exclude="/blog4, /rule/*, /how-to-*, /*/admin, /*/priv/*, /more-paths-here"></script>
```

You can also use `data-include` instead of `data-exclude`, and using both options together, the snippet would look like this:

```html
<script defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.exclusions.js" data-include="/en**" data-exclude="/en/user/*/settings"></script>
```

You need to place your new Vince Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags. Do this for all the websites where you'd like to use page-tracking exclusions.

This is the only tracking script you need. You don't need to keep the default script. Your stats will keep tracking without interruption and you won't lose any of your old data.

You don't have to use the `exclusions` script type exclusively. You can chain various script types, for example:

```html
<script defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.hash.exclusions.outbound-links.js" data-include="/en**"></script>
```

The example above includes both [outbound link clicks tracking](/blog/goals-outbound-links) and tracking for [hash-based routing pages](/blog/website-hash-routing) in addition to the `exclusions` script type.

{{< notice "note" >}}
If you are [tracking custom events](/blog/goals-conversions) on pages excluded with this method, the URLs of those pages will keep showing in your dashboard. You can override and anonymize the URLs reported through custom events by using [our manual script extension](/blog/website-custom-location).
{{< /notice >}}

## Common use cases and examples

| inclusion or exclusion rule | pages that will match |
| ------------- | ------------- |
| `/blog4` | `/blog4` and exactly `/blog4` with nothing before or after it, so not `/blog45` nor `/blog4/new` nor `/blog` |
| `/rule/*` | `/rule/<anything>`, with `<anything>` being any set of characters (length >=0), but not a forward slash - for example, both `/rule/1` as well as `/rule/general-rule-14`, but not `/rule/4/details` nor `/rules` |
| `/how-to-*` | `/how-to-<anything>` - for example, `/how-to-play` or `/how-to-succeed`, but not `how-to-/blog` |
| `/*/admin` | `/<anything>/admin` - for example, `/sites/admin`, but not `/sites/admin/page-2` nor `/sites/2/admin` nor `/admin` |
| `/*/priv/*` | `/<anything>/priv/<anything>` - for example, `/admin/priv/sites`, but not `/priv` nor `/priv/page` nor `/admin/priv` |
| `/rule/*/*` | `/rule/<anything>/<anything>` - for example, `/rule/4/new/` or `/rule/10/edit`, but not `/rule` nor `/rule/10/new/save` |
| `/wp/**` | `/wp<anything, even slashes>` - for example, `/wp/assets/subdirectory/another/image.png` or `/wp/admin`, and everything in between, but not `/page/wp`

This exclusion method currently does not support filtering out specific page [hashes](/blog/website-hash-routing), but may in the future.

## Return to your website to ensure it works

You can test your page-specific exclusions by:

* Visiting a page on your website that you excluded from tracking and ensuring views for it don't show in your Vince dashboard.

* Alternatively, after loading a page, you can check the browser console (press F12 on Firefox or Chrome and then click the "Console" tab). If you've excluded your pages and are browsing on the excluded page, you should see a message saying "Ignoring event in exclusion". You may need to ensure the "Warnings" filter (in the top right in Firefox and top-center under a dropdown in Chrome) is enabled before this message is visible.
