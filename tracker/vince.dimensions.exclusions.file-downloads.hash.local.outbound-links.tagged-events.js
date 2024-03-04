(function(){"use strict";var s,o,i,r,c,l,u,f,j,n=window.location,t=window.document,e=t.currentScript,x=e.getAttribute("data-api")||M(e);function y(e){console.warn("Ignoring Event: "+e)}function M(e){return new URL(e.src).origin+"/api/event"}function a(s,o){try{if(window.localStorage.vince_ignore==="true")return y("localStorage flag")}catch{}var i,a,r,d,u,m,c=e&&e.getAttribute("data-include"),l=e&&e.getAttribute("data-exclude");if(s==="pageview"&&(d=!c||c&&c.split(",").some(h),u=l&&l.split(",").some(h),!d||u))return y("exclusion rule");function h(e){var t=n.pathname;return t+=n.hash,t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}i={},i.n=s,i.u=n.href,i.d=e.getAttribute("data-domain"),i.r=t.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),m=e.getAttributeNames().filter(function(e){return e.substring(0,6)==="event-"}),r=i.p||{},m.forEach(function(t){var n=t.replace("event-",""),s=e.getAttribute(t);r[n]=r[n]||s}),i.p=r,i.h=1,a=new XMLHttpRequest,a.open("POST",x,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&o&&o.callback&&o.callback()}}r=window.vince&&window.vince.q||[],window.vince=a;for(s=0;s<r.length;s++)a.apply(this,r[s]);function d(){f=n.pathname,a("pageview")}window.addEventListener("hashchange",d);function w(){!f&&t.visibilityState==="visible"&&d()}t.visibilityState==="prerender"?t.addEventListener("visibilitychange",w):d();function S(e){for(;e&&(typeof e.tagName=="undefined"||!v(e)||!e.href);)e=e.parentNode;return e}function v(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function A(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}i=1;function g(e){if(e.type==="auxclick"&&e.button!==i)return;var t=S(e.target),n=t&&t.href&&t.href.split("?")[0];if(b(t,0))return;if(k(t))return m(e,t,{name:"Outbound Link: Click",props:{url:t.href}});if(O(n))return m(e,t,{name:"File Download",props:{url:n}})}function m(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}A(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}t.addEventListener("click",g),t.addEventListener("auxclick",g);function k(e){return e&&e.href&&e.host&&e.host!==n.host}l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=e.getAttribute("file-types"),o=e.getAttribute("add-file-types"),j=c&&c.split(",")||o&&o.split(",").concat(l)||l;function O(e){if(!e)return!1;var t=e.split(".").pop();return j.some(function(e){return e===t})}function _(e){var n,s,i,a,c,r=h(e)?e:e&&e.parentNode,t={name:null,props:{}},o=r&&r.classList;if(!o)return t;for(n=0;n<o.length;n++){if(c=o.item(n),s=c.match(/vince-event-(.+)=(.+)/),!s)continue;i=s[1],a=s[2].replace(/\+/g," "),i.toLowerCase()==="name"?t.name=a:t.props[i]=a}return t}function C(e){var n,s=e.target,t=_(s);if(!t.name)return;e.preventDefault(),n=!1;function o(){n||(n=!0,s.submit())}setTimeout(o,5e3),vince(t.name,{props:t.props,callback:o})}function E(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}u=3;function p(e){if(e.type==="auxclick"&&e.button!==i)return;for(var n,s,o,t=e.target,a=0;a<=u;a++){if(!t)break;if(E(t))return;v(t)&&(s=t),h(t)&&(o=t),t=t.parentNode}o&&(n=_(o),s?(n.props.url=s.href,m(e,s,n)):vince(n.name,{props:n.props}))}function h(e){var t,n=e&&e.classList;if(n)for(t=0;t<n.length;t++)if(n.item(t).match(/vince-event-name=(.+)/))return!0;return!1}function b(e,t){return!(!e||t>u)&&(!!h(e)||b(e.parentNode,t+1))}t.addEventListener("submit",C),t.addEventListener("click",p),t.addEventListener("auxclick",p)})()