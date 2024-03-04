(function(){"use strict";var s,o,a,r,l,h,n=window.location,e=window.document,t=e.currentScript,b=t.getAttribute("data-api")||m(t);function d(e){console.warn("Ignoring Event: "+e)}function m(e){return new URL(e.src).origin+"/api/event"}function c(s,o){try{if(window.localStorage.vince_ignore==="true")return d("localStorage flag")}catch{}var i,a,l,u,r=t&&t.getAttribute("data-include"),c=t&&t.getAttribute("data-exclude");if(s==="pageview"&&(l=!r||r&&r.split(",").some(h),u=c&&c.split(",").some(h),!l||u))return d("exclusion rule");function h(e){var t=n.pathname;return t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}i={},i.n=s,i.u=n.href,i.d=t.getAttribute("data-domain"),i.r=e.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),a=new XMLHttpRequest,a.open("POST",b,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&o&&o.callback&&o.callback()}}r=window.vince&&window.vince.q||[],window.vince=c;for(s=0;s<r.length;s++)c.apply(this,r[s]);function i(){if(a===n.pathname)return;a=n.pathname,c("pageview")}o=window.history,o.pushState&&(h=o.pushState,o.pushState=function(){h.apply(this,arguments),i()},window.addEventListener("popstate",i));function v(){!a&&e.visibilityState==="visible"&&i()}e.visibilityState==="prerender"?e.addEventListener("visibilitychange",v):i();function f(e){for(;e&&(typeof e.tagName=="undefined"||!p(e)||!e.href);)e=e.parentNode;return e}function p(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function g(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}l=1;function u(e){if(e.type==="auxclick"&&e.button!==l)return;var t=f(e.target),n=t&&t.href&&t.href.split("?")[0];if(y(t))return j(e,t,{name:"Outbound Link: Click",props:{url:t.href}})}function j(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}g(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}e.addEventListener("click",u),e.addEventListener("auxclick",u);function y(e){return e&&e.href&&e.host&&e.host!==n.host}})()