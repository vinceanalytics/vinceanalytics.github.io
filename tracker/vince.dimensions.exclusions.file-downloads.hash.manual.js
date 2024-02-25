(function(){"use strict";var s,o,i,r,c,l,h,t=window.location,n=window.document,e=n.currentScript,b=e.getAttribute("data-api")||m(e);function a(e){console.warn("Ignoring Event: "+e)}function m(e){return new URL(e.src).origin+"/api/event"}function d(s,o){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(t.hostname)||t.protocol==="file:")return a("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return a("localStorage flag")}catch{}var i,r,c,u,h,f,l=e&&e.getAttribute("data-include"),d=e&&e.getAttribute("data-exclude");if(s==="pageview"&&(u=!l||l&&l.split(",").some(m),h=d&&d.split(",").some(m),!u||h))return a("exclusion rule");function m(e){var n=t.pathname;return n+=t.hash,n.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}i={},i.n=s,i.u=o&&o.u?o.u:t.href,i.d=e.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),f=e.getAttributeNames().filter(function(e){return e.substring(0,6)==="event-"}),c=i.p||{},f.forEach(function(t){var n=t.replace("event-",""),s=e.getAttribute(t);c[n]=c[n]||s}),i.p=c,i.h=1,r=new XMLHttpRequest,r.open("POST",b,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(i)),r.onreadystatechange=function(){r.readyState===4&&o&&o.callback&&o.callback()}}c=window.vince&&window.vince.q||[],window.vince=d;for(s=0;s<c.length;s++)d.apply(this,c[s]);function v(e){for(;e&&(typeof e.tagName=="undefined"||!g(e)||!e.href);)e=e.parentNode;return e}function g(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function p(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}h=1;function u(e){if(e.type==="auxclick"&&e.button!==h)return;var t=v(e.target),n=t&&t.href&&t.href.split("?")[0];if(j(n))return f(e,t,{name:"File Download",props:{url:n}})}function f(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}p(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}n.addEventListener("click",u),n.addEventListener("auxclick",u),i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],r=e.getAttribute("file-types"),o=e.getAttribute("add-file-types"),l=r&&r.split(",")||o&&o.split(",").concat(i)||i;function j(e){if(!e)return!1;var t=e.split(".").pop();return l.some(function(e){return e===t})}})()