# Getting started


## Installation


### Installation script
```bash
curl -fsSL https://vinceanalytics.com/install.sh | bash
```

### Homebrew
```bash
brew install vinceanalytics/tap/vince
```
### Container image
```bash
docker pull ghcr.io/vinceanalytics/vince
```


### Starting server

```bash
vince --data=vince-data --domains=example.com
```

This will start vince server listening on port `8080`

### Check if your server is up and running

```bash
$ curl http://localhost:8080/version
{
  "version": "v0.0.62"
}
```

## AddScript to your website

To integrate your website with Vince Analytics, you need to be able to update the HTML code of the website you want to track. Paste your Vince Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Your Vince Analytics tracking script code will look something like this.

> **note**:
> `data-api` is the url to where `vince` instance is listening and accept events, the events path is `/api/event`
>  `data-domain` is the site_id/domain name you want to monitor for events


**Development script on localhost**
```html
<script data-domain="example.com" data-api="http://localhost:8080/api/event">
(function(){"use strict";var t,n,o,a,l,r=window.location,e=window.document,c=e.currentScript,h=c.getAttribute("data-api")||d(c);function u(e){console.warn("Ignoring Event: "+e)}function d(e){return new URL(e.src).origin+"/api/event"}function i(t,n){try{if(window.localStorage.vince_ignore==="true")return u("localStorage flag")}catch{}var o,s={};s.n=t,s.u=r.href,s.d=c.getAttribute("data-domain"),s.r=e.referrer||null,s.w=window.innerWidth,n&&n.meta&&(s.m=JSON.stringify(n.meta)),n&&n.props&&(s.p=n.props),o=new XMLHttpRequest,o.open("POST",h,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(s)),o.onreadystatechange=function(){o.readyState===4&&n&&n.callback&&n.callback()}}a=window.vince&&window.vince.q||[],window.vince=i;for(t=0;t<a.length;t++)i.apply(this,a[t]);function s(){if(o===r.pathname)return;o=r.pathname,i("pageview")}n=window.history,n.pushState&&(l=n.pushState,n.pushState=function(){l.apply(this,arguments),s()},window.addEventListener("popstate",s));function m(){!o&&e.visibilityState==="visible"&&s()}e.visibilityState==="prerender"?e.addEventListener("visibilitychange",m):s()})()
</script>
```

**Production script**

```html
<script data-domain="vinceanalytics.com" data-api="http://api.vinceanalytics.com/api/event">
(function(){"use strict";var n,s,i,r,d,t=window.location,e=window.document,c=e.currentScript,h=c.getAttribute("data-api")||u(c);function l(e){console.warn("Ignoring Event: "+e)}function u(e){return new URL(e.src).origin+"/api/event"}function a(n,s){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(t.hostname)||t.protocol==="file:")return l("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return l("localStorage flag")}catch{}var i,o={};o.n=n,o.u=t.href,o.d=c.getAttribute("data-domain"),o.r=e.referrer||null,o.w=window.innerWidth,s&&s.meta&&(o.m=JSON.stringify(s.meta)),s&&s.props&&(o.p=s.props),i=new XMLHttpRequest,i.open("POST",h,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(o)),i.onreadystatechange=function(){i.readyState===4&&s&&s.callback&&s.callback()}}r=window.vince&&window.vince.q||[],window.vince=a;for(n=0;n<r.length;n++)a.apply(this,r[n]);function o(){if(i===t.pathname)return;i=t.pathname,a("pageview")}s=window.history,s.pushState&&(d=s.pushState,s.pushState=function(){d.apply(this,arguments),o()},window.addEventListener("popstate",o));function m(){!i&&e.visibilityState==="visible"&&o()}e.visibilityState==="prerender"?e.addEventListener("visibilitychange",m):o()})()
</script>
```


After adding the script no further configuration on the website is needed. When a user visits the website events will be sent to your Vince Analytics instance.