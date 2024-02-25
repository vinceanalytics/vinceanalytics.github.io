(function(){"use strict";var s,i,a,r,c,d,u,h,m,g,n=window.location,e=window.document,t=e.currentScript,O=t.getAttribute("data-api")||w(t);function p(e){console.warn("Ignoring Event: "+e)}function w(e){return new URL(e.src).origin+"/api/event"}function l(s,o){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(n.hostname)||n.protocol==="file:")return p("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return p("localStorage flag")}catch{}var a,r,c,i={};i.n=s,i.u=n.href,i.d=t.getAttribute("data-domain"),i.r=e.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),c=t.getAttributeNames().filter(function(e){return e.substring(0,6)==="event-"}),r=i.p||{},c.forEach(function(e){var n=e.replace("event-",""),s=t.getAttribute(e);r[n]=r[n]||s}),i.p=r,a=new XMLHttpRequest,a.open("POST",O,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&o&&o.callback&&o.callback()}}d=window.vince&&window.vince.q||[],window.vince=l;for(s=0;s<d.length;s++)l.apply(this,d[s]);function o(){if(u===n.pathname)return;u=n.pathname,l("pageview")}i=window.history,i.pushState&&(h=i.pushState,i.pushState=function(){h.apply(this,arguments),o()},window.addEventListener("popstate",o));function v(){!u&&e.visibilityState==="visible"&&o()}e.visibilityState==="prerender"?e.addEventListener("visibilitychange",v):o();function b(e){for(;e&&(typeof e.tagName=="undefined"||!j(e)||!e.href);)e=e.parentNode;return e}function j(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function y(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}m=1;function f(e){if(e.type==="auxclick"&&e.button!==m)return;var t=b(e.target),n=t&&t.href&&t.href.split("?")[0];if(x(n))return _(e,t,{name:"File Download",props:{url:n}})}function _(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}y(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}e.addEventListener("click",f),e.addEventListener("auxclick",f),c=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],r=t.getAttribute("file-types"),a=t.getAttribute("add-file-types"),g=r&&r.split(",")||a&&a.split(",").concat(c)||c;function x(e){if(!e)return!1;var t=e.split(".").pop();return g.some(function(e){return e===t})}})()