---
title: Script extensions for enhanced measurement
categories: ["Guides"]
tags: ["sites"]
---

<!--more-->



## All our script extensions 

Here's the list of all the available extensions at this time:

| Extension                | Explanation                                                                                        |
|--------------------------|----------------------------------------------------------------------------------------------------|
| script.hash.js           | Automatically follow frontend navigation when using [hash-based routing](/blog/website-hash-routing)    |
| script.outbound-links.js | Automatically [track clicks on outbound links](/blog/goals-outbound-links) from your website  |
| script.file-downloads.js | Automatically [track file downloads](/blog/goals-file-downloads)                                   |
| script.tagged-events.js  | Allows you to [track standard custom events](/blog/goals-custom-event) such as link clicks, form submits, and any other HTML element clicks            |
| script.exclusions.js     | [Exclude certain pages from being tracked](/blog/website-exclude-page)                                     |
| script.compat.js         | Compatibility mode for [tracking users on Internet Explorer](#scriptcompatjs) (≥IE11)                      |
| script.local.js          | Allow analytics to track on localhost too which is useful in hybrid apps                           |
| script.manual.js         | [Don't trigger pageviews automatically](#scriptmanualjs). Also allows you to [specify custom locations](/blog/website-custom-location) to redact URLs with identifiers. You can also use it to track [custom query parameters](custom-query-params.md)|


## You can combine extensions according to your needs

If you want to use both our hash-based routing extension and our outbound link click extension, you can combine them as follows:
`script.hash.outbound-links.js`.

In this case, the snippet you need to insert into your site is as follows (make sure to change the data-domain attribute to the domain you added to Vince):

```html
<script defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.hash.outbound-links.js"></script>
```

Or say you want to use our `script.exclusions.js` extension to exclude certain pages from being tracked and our `script.local.js` extension to track localhost traffic, your snippet should look like this:

```html
<script defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.exclusions.local.js"></script>
```

You can mix and match, and combine extensions any way that you wish. And you only need to insert that one snippet into your site, no need for anything else.

## script.compat.js 

_This works only on ≥ IE11_

The default Vince script won't work on Internet Explorer because it uses the [document.currentScript](https://caniuse.com/document-currentscript) API to read configuration options. You can run Vince in compatibility mode by including the `script.compat.js` extension and defining `id="vince"` on the script tag so that it can find itself. Here's how it should look like:

```html
<script id="vince" defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.compat.js"></script>
```

## script.manual.js

By default, the Vince script triggers a pageview when it's first loaded. It also attaches listeners to the History API and will automatically trigger pageviews when you use `history.pushState`. This is useful for most websites but we also offer a manual mode in case you want full control over when pageviews are triggered on your website.

One of the use-cases for this is when you use [Turbo](https://turbo.hotwired.dev/) (formerly [Turbolinks](https://github.com/turbolinks/turbolinks)). In that case, you want to manually trigger Vince pageviews on the `turbo:load` or `turbolinks:load` browser event depending which library you use. Here's how you can do that:

```html
<script defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.manual.js"></script>
<!-- define the `vince` function to manually trigger events -->
<script>window.vince = window.vince || function() { (window.vince.q = window.vince.q || []).push(arguments) }</script>
<!-- trigger pageviews on turbolinks navigation -->
<script>
document.addEventListener("turbo:load", function() {
  vince('pageview')
})
</script>
```

{{< notice "note" >}}
When using turbolinks, make sure that the Vince script isn't loaded and executed during turbo navigation. You may need to move the script to the `<head>` section of your website or use the `data-turbo-eval="false"` attribute.
{{< /notice >}}

### Specify custom locations for your page URLs

Additionally, the manual script extension allows you to provide a special option named `u` with your events. This allows you to specify the URL of the page and can be used to specify custom locations. 

It's especially helpful to redact and aggregate multiple pages whose URLs contain identifiers that are specific to users. [Learn more about specifying custom URLs in your events](/blog/website-custom-location).

### Track custom query parameters for complete page URLs

By default, Vince strips all query parameters for privacy purposes [except](/blog/website-manual-link-tagging) `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`. 

This means that pages like `yoursite.com/blog/index.php?article=some_article&page=11` will be reported as `yoursite.com/blog/index.php` in the Top Pages report of your Vince dashboard.

By using the manual script extension, you can also track custom query parameters and get the complete page URLs in your Top Pages report. Learn here [how to do that](custom-query-params.md).
