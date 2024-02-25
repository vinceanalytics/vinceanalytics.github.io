(function(){"use strict";var n,i,a,r,l,d,u,f,s=window.location,t=window.document,e=t.currentScript,_=e.getAttribute("data-api")||y(e);function m(e){console.warn("Ignoring Event: "+e)}function y(e){return new URL(e.src).origin+"/api/event"}function c(n,o){try{if(window.localStorage.vince_ignore==="true")return m("localStorage flag")}catch{}var i,a,r,d,u,f,c=e&&e.getAttribute("data-include"),l=e&&e.getAttribute("data-exclude");if(n==="pageview"&&(d=!c||c&&c.split(",").some(h),u=l&&l.split(",").some(h),!d||u))return m("exclusion rule");function h(e){var t=s.pathname;return t+=s.hash,t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}i={},i.n=n,i.u=s.href,i.d=e.getAttribute("data-domain"),i.r=t.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),f=e.getAttributeNames().filter(function(e){return e.substring(0,6)==="event-"}),r=i.p||{},f.forEach(function(t){var n=t.replace("event-",""),s=e.getAttribute(t);r[n]=r[n]||s}),i.p=r,i.h=1,a=new XMLHttpRequest,a.open("POST",_,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&o&&o.callback&&o.callback()}}l=window.vince&&window.vince.q||[],window.vince=c;for(n=0;n<l.length;n++)c.apply(this,l[n]);function o(){u=s.pathname,c("pageview")}window.addEventListener("hashchange",o);function p(){!u&&t.visibilityState==="visible"&&o()}t.visibilityState==="prerender"?t.addEventListener("visibilitychange",p):o();function g(e){for(;e&&(typeof e.tagName=="undefined"||!v(e)||!e.href);)e=e.parentNode;return e}function v(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function b(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}d=1;function h(e){if(e.type==="auxclick"&&e.button!==d)return;var t=g(e.target),n=t&&t.href&&t.href.split("?")[0];if(w(n))return j(e,t,{name:"File Download",props:{url:n}})}function j(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}b(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}t.addEventListener("click",h),t.addEventListener("auxclick",h),r=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],a=e.getAttribute("file-types"),i=e.getAttribute("add-file-types"),f=a&&a.split(",")||i&&i.split(",").concat(r)||r;function w(e){if(!e)return!1;var t=e.split(".").pop();return f.some(function(e){return e===t})}})()