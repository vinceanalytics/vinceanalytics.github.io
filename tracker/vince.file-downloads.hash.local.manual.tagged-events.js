(function(){"use strict";var n,s,i,a,r,c,l,u,x=window.location,e=window.document,t=e.currentScript,C=t.getAttribute("data-api")||y(t);function O(e){console.warn("Ignoring Event: "+e)}function y(e){return new URL(e.src).origin+"/api/event"}function d(n,s){try{if(window.localStorage.vince_ignore==="true")return O("localStorage flag")}catch{}var i,o={};o.n=n,o.u=s&&s.u?s.u:x.href,o.d=t.getAttribute("data-domain"),o.r=e.referrer||null,o.w=window.innerWidth,s&&s.meta&&(o.m=JSON.stringify(s.meta)),s&&s.props&&(o.p=s.props),o.h=1,i=new XMLHttpRequest,i.open("POST",C,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(o)),i.onreadystatechange=function(){i.readyState===4&&s&&s.callback&&s.callback()}}c=window.vince&&window.vince.q||[],window.vince=d;for(n=0;n<c.length;n++)d.apply(this,c[n]);function E(e){for(;e&&(typeof e.tagName=="undefined"||!h(e)||!e.href);)e=e.parentNode;return e}function h(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function j(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}s=1;function m(e){if(e.type==="auxclick"&&e.button!==s)return;var t=E(e.target),n=t&&t.href&&t.href.split("?")[0];if(p(t,0))return;if(b(n))return f(e,t,{name:"File Download",props:{url:n}})}function f(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}j(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}e.addEventListener("click",m),e.addEventListener("auxclick",m),l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],r=t.getAttribute("file-types"),a=t.getAttribute("add-file-types"),u=r&&r.split(",")||a&&a.split(",").concat(l)||l;function b(e){if(!e)return!1;var t=e.split(".").pop();return u.some(function(e){return e===t})}function v(e){var n,s,a,r,l,c=o(e)?e:e&&e.parentNode,t={name:null,props:{}},i=c&&c.classList;if(!i)return t;for(n=0;n<i.length;n++){if(l=i.item(n),s=l.match(/vince-event-(.+)=(.+)/),!s)continue;a=s[1],r=s[2].replace(/\+/g," "),a.toLowerCase()==="name"?t.name=r:t.props[a]=r}return t}function _(e){var n,s=e.target,t=v(s);if(!t.name)return;e.preventDefault(),n=!1;function o(){n||(n=!0,s.submit())}setTimeout(o,5e3),vince(t.name,{props:t.props,callback:o})}function w(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}i=3;function g(e){if(e.type==="auxclick"&&e.button!==s)return;for(var n,a,r,t=e.target,c=0;c<=i;c++){if(!t)break;if(w(t))return;h(t)&&(a=t),o(t)&&(r=t),t=t.parentNode}r&&(n=v(r),a?(n.props.url=a.href,f(e,a,n)):vince(n.name,{props:n.props}))}function o(e){var t,n=e&&e.classList;if(n)for(t=0;t<n.length;t++)if(n.item(t).match(/vince-event-name=(.+)/))return!0;return!1}function p(e,t){return!(!e||t>i)&&(!!o(e)||p(e.parentNode,t+1))}e.addEventListener("submit",_),e.addEventListener("click",g),e.addEventListener("auxclick",g)})()