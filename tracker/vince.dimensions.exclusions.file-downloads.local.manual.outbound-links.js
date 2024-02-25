(function(){"use strict";var t,s,i,a,r,c,h,o=window.location,n=window.document,e=n.currentScript,j=e.getAttribute("data-api")||b(e);function d(e){console.warn("Ignoring Event: "+e)}function b(e){return new URL(e.src).origin+"/api/event"}function l(t,s){try{if(window.localStorage.vince_ignore==="true")return d("localStorage flag")}catch{}var i,a,r,u,h,f,c=e&&e.getAttribute("data-include"),l=e&&e.getAttribute("data-exclude");if(t==="pageview"&&(u=!c||c&&c.split(",").some(m),h=l&&l.split(",").some(m),!u||h))return d("exclusion rule");function m(e){var t=o.pathname;return t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}i={},i.n=t,i.u=s&&s.u?s.u:o.href,i.d=e.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,s&&s.meta&&(i.m=JSON.stringify(s.meta)),s&&s.props&&(i.p=s.props),f=e.getAttributeNames().filter(function(e){return e.substring(0,6)==="event-"}),r=i.p||{},f.forEach(function(t){var n=t.replace("event-",""),s=e.getAttribute(t);r[n]=r[n]||s}),i.p=r,a=new XMLHttpRequest,a.open("POST",j,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&s&&s.callback&&s.callback()}}r=window.vince&&window.vince.q||[],window.vince=l;for(t=0;t<r.length;t++)l.apply(this,r[t]);function v(e){for(;e&&(typeof e.tagName=="undefined"||!f(e)||!e.href);)e=e.parentNode;return e}function f(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function g(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}h=1;function m(e){if(e.type==="auxclick"&&e.button!==h)return;var t=v(e.target),n=t&&t.href&&t.href.split("?")[0];if(p(t))return u(e,t,{name:"Outbound Link: Click",props:{url:t.href}});if(y(n))return u(e,t,{name:"File Download",props:{url:n}})}function u(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}g(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}n.addEventListener("click",m),n.addEventListener("auxclick",m);function p(e){return e&&e.href&&e.host&&e.host!==o.host}s=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],a=e.getAttribute("file-types"),i=e.getAttribute("add-file-types"),c=a&&a.split(",")||i&&i.split(",").concat(s)||s;function y(e){if(!e)return!1;var t=e.split(".").pop();return c.some(function(e){return e===t})}})()