!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=47)}([function(e,n,t){e.exports=t.p+"images/43caf8cea1ed6ff67f6f33078415e9d9.svg"},function(e,n,t){e.exports=t.p+"images/9fea14d987f943eb8863b933fd14b7d1.svg"},function(e,n,t){e.exports=t.p+"images/5a2b37e3ad53de87bd3eb9df3587bf0b.svg"},function(e,n){document.querySelectorAll(".menu-list__sublist").forEach(e=>{const n=e.parentNode,t=n.querySelector(".arrow-down");n.addEventListener("touchstart",function(){e.classList.toggle("menu-list__sublist--active"),t.classList.toggle("arrow-down--inactive")})});const t=document.querySelector("button"),i=document.querySelector(".menu-list");t.addEventListener("touchend",()=>{i.classList.toggle("menu-list--active",!0)}),document.addEventListener("touchstart",e=>{const{clientX:n,clientY:t}=e.touches[0],{width:a}=i.getBoundingClientRect();n>a&&i.classList.toggle("menu-list--active",!1)})},function(e,n){const t=document.querySelector(".btn-float"),i=document.querySelector(".menu-list");window.addEventListener("scroll",e=>{window.scrollY>200?(t.style.filter="blur(0)",t.style.transform="scale(1)",t.style.top="30px"):(t.style.filter="blur(20px)",t.style.transform="scale(0)",t.style.top="60px")}),t.addEventListener("touchstart",()=>{i.classList.toggle("menu-list--active",!0)})},function(e,n,t){"use strict";var i=t(9),a=t(20),r=Object.prototype.toString;function s(e){return"[object Array]"===r.call(e)}function o(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===r.call(e)}function l(e,n){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var t=0,i=e.length;t<i;t++)n.call(null,e[t],t,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.call(null,e[a],a,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return o(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var n={};function t(t,i){"object"==typeof n[i]&&"object"==typeof t?n[i]=e(n[i],t):n[i]=t}for(var i=0,a=arguments.length;i<a;i++)l(arguments[i],t);return n},deepMerge:function e(){var n={};function t(t,i){"object"==typeof n[i]&&"object"==typeof t?n[i]=e(n[i],t):n[i]="object"==typeof t?e({},t):t}for(var i=0,a=arguments.length;i<a;i++)l(arguments[i],t);return n},extend:function(e,n,t){return l(n,function(n,a){e[a]=t&&"function"==typeof n?i(n,t):n}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,n,t){e.exports=t.p+"images/cdbd071073466ad55a79c381fccfa0db.svg"},function(e,n,t){e.exports=t(19)},,function(e,n,t){"use strict";e.exports=function(e,n){return function(){for(var t=new Array(arguments.length),i=0;i<t.length;i++)t[i]=arguments[i];return e.apply(n,t)}}},function(e,n,t){"use strict";var i=t(5);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,n,t){if(!n)return e;var r;if(t)r=t(n);else if(i.isURLSearchParams(n))r=n.toString();else{var s=[];i.forEach(n,function(e,n){null!=e&&(i.isArray(e)?n+="[]":e=[e],i.forEach(e,function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),s.push(a(n)+"="+a(e))}))}),r=s.join("&")}if(r){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}},function(e,n,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,n,t){"use strict";(function(n){var i=t(5),a=t(26),r={"Content-Type":"application/x-www-form-urlencoded"};function s(e,n){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}var o,c={adapter:(void 0!==n&&"[object process]"===Object.prototype.toString.call(n)?o=t(13):"undefined"!=typeof XMLHttpRequest&&(o=t(13)),o),transformRequest:[function(e,n){return a(n,"Accept"),a(n,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(s(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(s(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){c.headers[e]={}}),i.forEach(["post","put","patch"],function(e){c.headers[e]=i.merge(r)}),e.exports=c}).call(this,t(25))},function(e,n,t){"use strict";var i=t(5),a=t(27),r=t(10),s=t(29),o=t(30),c=t(14);e.exports=function(e){return new Promise(function(n,l){var u=e.data,d=e.headers;i.isFormData(u)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}if(f.open(e.method.toUpperCase(),r(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in f?s(f.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:t,config:e,request:f};a(n,l,i),f=null}},f.onabort=function(){f&&(l(c("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){l(c("Network Error",e,null,f)),f=null},f.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",f)),f=null},i.isStandardBrowserEnv()){var v=t(31),p=(e.withCredentials||o(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;p&&(d[e.xsrfHeaderName]=p)}if("setRequestHeader"in f&&i.forEach(d,function(e,n){void 0===u&&"content-type"===n.toLowerCase()?delete d[n]:f.setRequestHeader(n,e)}),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(n){if("json"!==e.responseType)throw n}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),l(e),f=null)}),void 0===u&&(u=null),f.send(u)})}},function(e,n,t){"use strict";var i=t(28);e.exports=function(e,n,t,a,r){var s=new Error(e);return i(s,n,t,a,r)}},function(e,n,t){"use strict";var i=t(5);e.exports=function(e,n){n=n||{};var t={};return i.forEach(["url","method","params","data"],function(e){void 0!==n[e]&&(t[e]=n[e])}),i.forEach(["headers","auth","proxy"],function(a){i.isObject(n[a])?t[a]=i.deepMerge(e[a],n[a]):void 0!==n[a]?t[a]=n[a]:i.isObject(e[a])?t[a]=i.deepMerge(e[a]):void 0!==e[a]&&(t[a]=e[a])}),i.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(i){void 0!==n[i]?t[i]=n[i]:void 0!==e[i]&&(t[i]=e[i])}),t}},function(e,n,t){"use strict";function i(e){this.message=e}i.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},i.prototype.__CANCEL__=!0,e.exports=i},,,function(e,n,t){"use strict";var i=t(5),a=t(9),r=t(21),s=t(15);function o(e){var n=new r(e),t=a(r.prototype.request,n);return i.extend(t,r.prototype,n),i.extend(t,n),t}var c=o(t(12));c.Axios=r,c.create=function(e){return o(s(c.defaults,e))},c.Cancel=t(16),c.CancelToken=t(34),c.isCancel=t(11),c.all=function(e){return Promise.all(e)},c.spread=t(35),e.exports=c,e.exports.default=c},function(e,n){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,n,t){"use strict";var i=t(5),a=t(10),r=t(22),s=t(23),o=t(15);function c(e){this.defaults=e,this.interceptors={request:new r,response:new r}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=o(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var n=[s,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){n.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){n.push(e.fulfilled,e.rejected)});n.length;)t=t.then(n.shift(),n.shift());return t},c.prototype.getUri=function(e){return e=o(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},i.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(n,t){return this.request(i.merge(t||{},{method:e,url:n}))}}),i.forEach(["post","put","patch"],function(e){c.prototype[e]=function(n,t,a){return this.request(i.merge(a||{},{method:e,url:n,data:t}))}}),e.exports=c},function(e,n,t){"use strict";var i=t(5);function a(){this.handlers=[]}a.prototype.use=function(e,n){return this.handlers.push({fulfilled:e,rejected:n}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){i.forEach(this.handlers,function(n){null!==n&&e(n)})},e.exports=a},function(e,n,t){"use strict";var i=t(5),a=t(24),r=t(11),s=t(12),o=t(32),c=t(33);function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return l(e),e.baseURL&&!o(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]}),(e.adapter||s.adapter)(e).then(function(n){return l(e),n.data=a(n.data,n.headers,e.transformResponse),n},function(n){return r(n)||(l(e),n&&n.response&&(n.response.data=a(n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})}},function(e,n,t){"use strict";var i=t(5);e.exports=function(e,n,t){return i.forEach(t,function(t){e=t(e,n)}),e}},function(e,n){var t,i,a=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=o(f);u=!0;for(var n=l.length;n;){for(c=l,l=[];++d<n;)c&&c[d].run();d=-1,n=l.length}c=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(n){try{return i.call(null,e)}catch(n){return i.call(this,e)}}}(e)}}function m(e,n){this.fun=e,this.array=n}function v(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new m(e,n)),1!==l.length||u||o(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,n,t){"use strict";var i=t(5);e.exports=function(e,n){i.forEach(e,function(t,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[i])})}},function(e,n,t){"use strict";var i=t(14);e.exports=function(e,n,t){var a=t.config.validateStatus;!a||a(t.status)?e(t):n(i("Request failed with status code "+t.status,t.config,null,t.request,t))}},function(e,n,t){"use strict";e.exports=function(e,n,t,i,a){return e.config=n,t&&(e.code=t),e.request=i,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,n,t){"use strict";var i=t(5),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var n,t,r,s={};return e?(i.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),n=i.trim(e.substr(0,r)).toLowerCase(),t=i.trim(e.substr(r+1)),n){if(s[n]&&a.indexOf(n)>=0)return;s[n]="set-cookie"===n?(s[n]?s[n]:[]).concat([t]):s[n]?s[n]+", "+t:t}}),s):s}},function(e,n,t){"use strict";var i=t(5);e.exports=i.isStandardBrowserEnv()?function(){var e,n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function a(e){var i=e;return n&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=a(window.location.href),function(n){var t=i.isString(n)?a(n):n;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},function(e,n,t){"use strict";var i=t(5);e.exports=i.isStandardBrowserEnv()?{write:function(e,n,t,a,r,s){var o=[];o.push(e+"="+encodeURIComponent(n)),i.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),i.isString(a)&&o.push("path="+a),i.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,n,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,n,t){"use strict";e.exports=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}},function(e,n,t){"use strict";var i=t(16);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(e){n=e});var t=this;e(function(e){t.reason||(t.reason=new i(e),n(t.reason))})}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a(function(n){e=n}),cancel:e}},e.exports=a},function(e,n,t){"use strict";e.exports=function(e){return function(n){return e.apply(null,n)}}},,,,,,,,,,,,function(e,n,t){"use strict";t.r(n);t(48),t(49);var i=t(7),a=t.n(i);t(3),t(4);document.querySelectorAll(".content-cards .content-cards__item").forEach((e,n)=>{const t=e.querySelector("figure"),i=e.querySelector(".overlay"),r=e.querySelector("h2");setTimeout(()=>{a.a.get("https://uinames.com/api/?region=United States&ext").then(({data:e})=>{console.log(e);const{name:n,photo:a,email:s}=e;t.style.backgroundImage=`url(${a})`,i.innerHTML=n,r.innerHTML=s})},100*n)})},function(e,n,t){e.exports='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel="icon" type="image/png" href="https://i.postimg.cc/ryf98PTw/favicon.png">\n  <title>CGHK - Advisory Committee</title>\n</head>\n<body>\n  \x3c!-- Nav --\x3e\n  <header class="header">\n    <div class="nav">\n      <div class="nav__wrapper">\n        <a href="index.html" class="nav__logo"></a>\n        <div class="nav-links">\n          <nav class="nav-links-one">\n            <a href="private-policy.html" class="nav-links-one__item">Private Policy</a>\n            <a href="contact.html" class="nav-links-one__item">Contact Us</a>\n            <a href="media.html" class="nav-links-one__item">Media</a>\n            <a href="donate.html" class="nav-links-one__item">Donate</a>\n            <div class="language">\n              <img class="language__selected" src="'+t(0)+'" alt="">\n              <ul href="" class="language__item">\n                <li class="language__en"><img title="English" width="13px" src="'+t(0)+'" alt=""></li>\n                <li class="language__zh"><img title="中文" width="13px" src="'+t(1)+'" alt=""></li>\n              </ul>\n            </div>\n          </nav>\n          <nav class="nav-links-two">\n            <div class="nav-links-two__item">\n              <a href="about-CGHK.html">About CGHK<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="about.html">About</a></li>\n                <li><a href="about-CGHK.html">Message of President</a></li>\n                <li><a href="about-committee.html">Advisory Committee</a></li>\n                <li><a href="about-committee.html">Commentators & Experts</a></li>\n                <li><a href="about-committee.html">Partners</a></li>\n                <li><a href="about-committee.html">Staff and Interships</a></li>\n                <li><a href="contact.html">Contact Us</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="perspective.html">CGHK\'s Perspective</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="events.html">Events</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="service.html">Service<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service-research.html">Policy and Market Research</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="publication.html">Publication</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service.html">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="membership.html">Membership</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">E-Newsletter</a></li>\n                <li><a href="">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    \x3c!-- 手机版nav --\x3e\n    <div class="nav-mob">\n      <a href="index.html" class="nav-mob__logo"><img src="'+t(2)+'" alt=""></a>\n      <div class="language">\n        <img class="language__selected" src="'+t(0)+'" alt="">\n        <ul href="" class="language__item">\n          <li class="language__en"><a href=""><img title="English" width="13px" src="'+t(0)+'"\n                alt=""></a></li>\n          <li class="language__zh"><a href=""><img title="中文" width="13px" src="'+t(1)+'" alt=""></a>\n          </li>\n        </ul>\n      </div>\n      <div class="menu">\n        <button class="btn-stroke"><i class="icon hamb"></i> Menu</button>\n        <ul class="menu-list">\n          <li class="menu-list__item">\n            <div class="flex-between">About CGHK <i class="icon arrow-down arrow-down--inactive"></i></div>\n            <ul class="menu-list__sublist">\n              <li><a href="about.html">About</a></li>\n              <li><a href="about-CGHK.html">Message of President</a></li>\n              <li><a href="about-committee.html">Advisory Committee</a></li>\n              <li><a href="about-committee.html">Commentators & Experts</a></li>\n              <li><a href="about-committee.html">Partners</a></li>\n              <li><a href="about-committee.html">Staff and Interships</a></li>\n              <li><a href="contact.html">Contact Us</a></li>\n            </ul>\n          </li>\n          <li class="menu-list__item"><a href="perspective.html">CGHK\'s Perspective</a></li>\n          <li class="menu-list__item"><a href="events.html">Events</a></li>\n          <li class="menu-list__item">\n            <div class="flex-between">Service <i class="icon arrow-down arrow-down--inactive"></i></div>\n            <ul class="menu-list__sublist">\n              <li><a href="service.html">E-Newsletter</a></li>\n              <li><a href="service-research.html">Policy and Market Research</a></li>\n            </ul>\n          </li>\n          <li class="menu-list__item"><a href="publication.html">Publication</a></li>\n          <li class="menu-list__item"><a href="membership.html">Membership</a></li>\n          <hr class="divider">\n          <li class="menu-list__item"><a href="private-policy.html">Private Policy</a></li>\n          <li class="menu-list__item"><a href="contact.html">Contact Us</a></li>\n          <li class="menu-list__item"><a href="media.html">Media</a></li>\n          <li class="menu-list__item"><a href="donate.html">Donate</a></li>\n        </ul>\n        \x3c!-- Btn-Float --\x3e\n        <button class="btn-float"><i class="icon hamb"></i></button>\n      </div>\n    </div>\n  </header>\n  \x3c!-- Body --\x3e\n  <article class="body">\n    \x3c!-- Aside --\x3e\n    <aside class="aside">\n      <nav class="aside-bread">\n        <a href="index.html" class="aside-bread__link">Home</a>\n        <a href="" class="aside-bread__link">Advisory Committee</a>\n      </nav>\n      <nav class="aside-nav">\n        <a href="about.html" class="aside-nav__link aside-nav__link">About</a>\n        <a href="about-CGHK.html" class="aside-nav__link aside-nav__link">Message of President</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link--current">Advisory Committee</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Commentators & Experts</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Partners</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Staff and Interships</a>\n        <a href="contact.html" class="aside-nav__link aside-nav__link">Contact Us</a>\n      </nav>\n    </aside>\n    \x3c!-- Content --\x3e\n    <div class="content">\n      \x3c!-- Title --\x3e\n      <h1 class="title content__title"><img src="'+t(6)+'" alt="">Advisory Committee</h1>\n\n      <section class="content-cards">\n        \x3c!-- items --\x3e\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2></h2>\n        </div>\n        \x3c!-- <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay">Angela Perez</div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay">Douglas Morris</div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay">Kyle Crawford</div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div> --\x3e\n\n        <div class="loading">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n      </section>\n    </div>\n  </article>\n  \x3c!-- Footer --\x3e\n  <footer class="footer">\n    Copyrights © 2019 CGHK All Rights Reserved.\n  </footer>\n</body>\n</html>'},function(e,n,t){}]);