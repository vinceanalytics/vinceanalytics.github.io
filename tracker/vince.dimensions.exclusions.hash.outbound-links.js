(function(){"use strict";var s,a,c,d,t=window.location,n=window.document,e=n.currentScript,g=e.getAttribute("data-api")||p(e);function o(e){console.warn("Ignoring Event: "+e)}function p(e){return new URL(e.src).origin+"/api/event"}function i(s,i){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(t.hostname)||t.protocol==="file:")return o("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return o("localStorage flag")}catch{}var a,r,c,u,h,f,l=e&&e.getAttribute("data-include"),d=e&&e.getAttribute("data-exclude");if(s==="pageview"&&(u=!l||l&&l.split(",").some(m),h=d&&d.split(",").some(m),!u||h))return o("exclusion rule");function m(e){var n=t.pathname;return n+=t.hash,n.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}a={},a.n=s,a.u=t.href,a.d=e.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,i&&i.meta&&(a.m=JSON.stringify(i.meta)),i&&i.props&&(a.p=i.props),f=e.getAttributeNames().filter(function(e){return e.substring(0,6)==="event-"}),c=a.p||{},f.forEach(function(t){var n=t.replace("event-",""),s=e.getAttribute(t);c[n]=c[n]||s}),a.p=c,a.h=1,r=new XMLHttpRequest,r.open("POST",g,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){r.readyState===4&&i&&i.callback&&i.callback()}}a=window.vince&&window.vince.q||[],window.vince=i;for(s=0;s<a.length;s++)i.apply(this,a[s]);function r(){d=t.pathname,i("pageview")}window.addEventListener("hashchange",r);function u(){!d&&n.visibilityState==="visible"&&r()}n.visibilityState==="prerender"?n.addEventListener("visibilitychange",u):r();function h(e){for(;e&&(typeof e.tagName=="undefined"||!m(e)||!e.href);)e=e.parentNode;return e}function m(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function f(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}c=1;function l(e){if(e.type==="auxclick"&&e.button!==c)return;var t=h(e.target),n=t&&t.href&&t.href.split("?")[0];if(b(t))return v(e,t,{name:"Outbound Link: Click",props:{url:t.href}})}function v(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}f(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}n.addEventListener("click",l),n.addEventListener("auxclick",l);function b(e){return e&&e.href&&e.host&&e.host!==t.host}})()