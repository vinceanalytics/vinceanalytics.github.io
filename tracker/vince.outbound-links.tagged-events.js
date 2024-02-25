(function(){"use strict";var n,o,i,c,d,u,v,t=window.location,e=window.document,a=e.currentScript,E=a.getAttribute("data-api")||_(a);function m(e){console.warn("Ignoring Event: "+e)}function _(e){return new URL(e.src).origin+"/api/event"}function l(n,s){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(t.hostname)||t.protocol==="file:")return m("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return m("localStorage flag")}catch{}var i,o={};o.n=n,o.u=t.href,o.d=a.getAttribute("data-domain"),o.r=e.referrer||null,o.w=window.innerWidth,s&&s.meta&&(o.m=JSON.stringify(s.meta)),s&&s.props&&(o.p=s.props),i=new XMLHttpRequest,i.open("POST",E,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(o)),i.onreadystatechange=function(){i.readyState===4&&s&&s.callback&&s.callback()}}d=window.vince&&window.vince.q||[],window.vince=l;for(n=0;n<d.length;n++)l.apply(this,d[n]);function s(){if(u===t.pathname)return;u=t.pathname,l("pageview")}o=window.history,o.pushState&&(v=o.pushState,o.pushState=function(){v.apply(this,arguments),s()},window.addEventListener("popstate",s));function C(){!u&&e.visibilityState==="visible"&&s()}e.visibilityState==="prerender"?e.addEventListener("visibilitychange",C):s();function k(e){for(;e&&(typeof e.tagName=="undefined"||!p(e)||!e.href);)e=e.parentNode;return e}function p(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function y(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}i=1;function b(e){if(e.type==="auxclick"&&e.button!==i)return;var t=k(e.target),n=t&&t.href&&t.href.split("?")[0];if(f(t,0))return;if(x(t))return j(e,t,{name:"Outbound Link: Click",props:{url:t.href}})}function j(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}y(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}e.addEventListener("click",b),e.addEventListener("auxclick",b);function x(e){return e&&e.href&&e.host&&e.host!==t.host}function h(e){var n,s,i,a,l,c=r(e)?e:e&&e.parentNode,t={name:null,props:{}},o=c&&c.classList;if(!o)return t;for(n=0;n<o.length;n++){if(l=o.item(n),s=l.match(/vince-event-(.+)=(.+)/),!s)continue;i=s[1],a=s[2].replace(/\+/g," "),i.toLowerCase()==="name"?t.name=a:t.props[i]=a}return t}function w(e){var n,s=e.target,t=h(s);if(!t.name)return;e.preventDefault(),n=!1;function o(){n||(n=!0,s.submit())}setTimeout(o,5e3),vince(t.name,{props:t.props,callback:o})}function O(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}c=3;function g(e){if(e.type==="auxclick"&&e.button!==i)return;for(var n,s,o,t=e.target,a=0;a<=c;a++){if(!t)break;if(O(t))return;p(t)&&(s=t),r(t)&&(o=t),t=t.parentNode}o&&(n=h(o),s?(n.props.url=s.href,j(e,s,n)):vince(n.name,{props:n.props}))}function r(e){var t,n=e&&e.classList;if(n)for(t=0;t<n.length;t++)if(n.item(t).match(/vince-event-name=(.+)/))return!0;return!1}function f(e,t){return!(!e||t>c)&&(!!r(e)||f(e.parentNode,t+1))}e.addEventListener("submit",w),e.addEventListener("click",g),e.addEventListener("auxclick",g)})()