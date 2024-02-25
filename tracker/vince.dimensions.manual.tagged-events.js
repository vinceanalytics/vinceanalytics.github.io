(function(){"use strict";var n,o,a,r,i=window.location,e=window.document,t=e.currentScript,y=t.getAttribute("data-api")||p(t);function l(e){console.warn("Ignoring Event: "+e)}function p(e){return new URL(e.src).origin+"/api/event"}function h(n,s){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname)||i.protocol==="file:")return l("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return l("localStorage flag")}catch{}var a,r,c,o={};o.n=n,o.u=s&&s.u?s.u:i.href,o.d=t.getAttribute("data-domain"),o.r=e.referrer||null,o.w=window.innerWidth,s&&s.meta&&(o.m=JSON.stringify(s.meta)),s&&s.props&&(o.p=s.props),c=t.getAttributeNames().filter(function(e){return e.substring(0,6)==="event-"}),r=o.p||{},c.forEach(function(e){var n=e.replace("event-",""),s=t.getAttribute(e);r[n]=r[n]||s}),o.p=r,a=new XMLHttpRequest,a.open("POST",y,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(o)),a.onreadystatechange=function(){a.readyState===4&&s&&s.callback&&s.callback()}}r=window.vince&&window.vince.q||[],window.vince=h;for(n=0;n<r.length;n++)h.apply(this,r[n]);function b(e){for(;e&&(typeof e.tagName=="undefined"||!d(e)||!e.href);)e=e.parentNode;return e}function d(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function _(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}a=1;function m(e){if(e.type==="auxclick"&&e.button!==a)return;var t=b(e.target),n=t&&t.href&&t.href.split("?")[0];if(u(t,0))return}function j(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}_(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}e.addEventListener("click",m),e.addEventListener("auxclick",m);function c(e){var n,o,a,r,l,c=s(e)?e:e&&e.parentNode,t={name:null,props:{}},i=c&&c.classList;if(!i)return t;for(n=0;n<i.length;n++){if(l=i.item(n),o=l.match(/vince-event-(.+)=(.+)/),!o)continue;a=o[1],r=o[2].replace(/\+/g," "),a.toLowerCase()==="name"?t.name=r:t.props[a]=r}return t}function g(e){var n,s=e.target,t=c(s);if(!t.name)return;e.preventDefault(),n=!1;function o(){n||(n=!0,s.submit())}setTimeout(o,5e3),vince(t.name,{props:t.props,callback:o})}function v(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}o=3;function f(e){if(e.type==="auxclick"&&e.button!==a)return;for(var n,i,r,t=e.target,l=0;l<=o;l++){if(!t)break;if(v(t))return;d(t)&&(i=t),s(t)&&(r=t),t=t.parentNode}r&&(n=c(r),i?(n.props.url=i.href,j(e,i,n)):vince(n.name,{props:n.props}))}function s(e){var t,n=e&&e.classList;if(n)for(t=0;t<n.length;t++)if(n.item(t).match(/vince-event-name=(.+)/))return!0;return!1}function u(e,t){return!(!e||t>o)&&(!!s(e)||u(e.parentNode,t+1))}e.addEventListener("submit",g),e.addEventListener("click",f),e.addEventListener("auxclick",f)})()