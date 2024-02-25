(function(){"use strict";var s,i,a,r,c,d,u,h,f,v,n=window.location,t=window.document,e=t.currentScript,O=e.getAttribute("data-api")||_(e);function m(e){console.warn("Ignoring Event: "+e)}function _(e){return new URL(e.src).origin+"/api/event"}function l(s,o){try{if(window.localStorage.vince_ignore==="true")return m("localStorage flag")}catch{}var i,a,r,d,u,f,c=e&&e.getAttribute("data-include"),l=e&&e.getAttribute("data-exclude");if(s==="pageview"&&(d=!c||c&&c.split(",").some(h),u=l&&l.split(",").some(h),!d||u))return m("exclusion rule");function h(e){var t=n.pathname;return t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}i={},i.n=s,i.u=n.href,i.d=e.getAttribute("data-domain"),i.r=t.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),f=e.getAttributeNames().filter(function(e){return e.substring(0,6)==="event-"}),r=i.p||{},f.forEach(function(t){var n=t.replace("event-",""),s=e.getAttribute(t);r[n]=r[n]||s}),i.p=r,a=new XMLHttpRequest,a.open("POST",O,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&o&&o.callback&&o.callback()}}d=window.vince&&window.vince.q||[],window.vince=l;for(s=0;s<d.length;s++)l.apply(this,d[s]);function o(){if(u===n.pathname)return;u=n.pathname,l("pageview")}i=window.history,i.pushState&&(h=i.pushState,i.pushState=function(){h.apply(this,arguments),o()},window.addEventListener("popstate",o));function w(){!u&&t.visibilityState==="visible"&&o()}t.visibilityState==="prerender"?t.addEventListener("visibilitychange",w):o();function x(e){for(;e&&(typeof e.tagName=="undefined"||!j(e)||!e.href);)e=e.parentNode;return e}function j(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function b(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}v=1;function g(e){if(e.type==="auxclick"&&e.button!==v)return;var t=x(e.target),n=t&&t.href&&t.href.split("?")[0];if(y(t))return p(e,t,{name:"Outbound Link: Click",props:{url:t.href}});if(C(n))return p(e,t,{name:"File Download",props:{url:n}})}function p(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}b(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}t.addEventListener("click",g),t.addEventListener("auxclick",g);function y(e){return e&&e.href&&e.host&&e.host!==n.host}c=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],r=e.getAttribute("file-types"),a=e.getAttribute("add-file-types"),f=r&&r.split(",")||a&&a.split(",").concat(c)||c;function C(e){if(!e)return!1;var t=e.split(".").pop();return f.some(function(e){return e===t})}})()