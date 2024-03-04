(function(){"use strict";var s,o,a,c,l,h,m,p,t=window.location,e=window.document,n=e.currentScript,w=n.getAttribute("data-api")||_(n);function d(e){console.warn("Ignoring Event: "+e)}function _(e){return new URL(e.src).origin+"/api/event"}function i(s,o){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(t.hostname)||t.protocol==="file:")return d("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return d("localStorage flag")}catch{}var a,i={};i.n=s,i.u=t.href,i.d=n.getAttribute("data-domain"),i.r=e.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),i.h=1,a=new XMLHttpRequest,a.open("POST",w,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&o&&o.callback&&o.callback()}}a=window.vince&&window.vince.q||[],window.vince=i;for(s=0;s<a.length;s++)i.apply(this,a[s]);function r(){h=t.pathname,i("pageview")}window.addEventListener("hashchange",r);function y(){!h&&e.visibilityState==="visible"&&r()}e.visibilityState==="prerender"?e.addEventListener("visibilitychange",y):r();function g(e){for(;e&&(typeof e.tagName=="undefined"||!j(e)||!e.href);)e=e.parentNode;return e}function j(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function v(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}p=1;function u(e){if(e.type==="auxclick"&&e.button!==p)return;var t=g(e.target),n=t&&t.href&&t.href.split("?")[0];if(b(t))return f(e,t,{name:"Outbound Link: Click",props:{url:t.href}});if(O(n))return f(e,t,{name:"File Download",props:{url:n}})}function f(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}v(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}e.addEventListener("click",u),e.addEventListener("auxclick",u);function b(e){return e&&e.href&&e.host&&e.host!==t.host}l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=n.getAttribute("file-types"),o=n.getAttribute("add-file-types"),m=c&&c.split(",")||o&&o.split(",").concat(l)||l;function O(e){if(!e)return!1;var t=e.split(".").pop();return m.some(function(e){return e===t})}})()