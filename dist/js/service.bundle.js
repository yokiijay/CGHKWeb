!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=59)}([function(e,n,t){e.exports=t.p+"images/43caf8cea1ed6ff67f6f33078415e9d9.svg"},function(e,n,t){e.exports=t.p+"images/9fea14d987f943eb8863b933fd14b7d1.svg"},function(e,n,t){"use strict";var a=t(6),i=t(17),r=Object.prototype.toString;function s(e){return"[object Array]"===r.call(e)}function o(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===r.call(e)}function l(e,n){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var t=0,a=e.length;t<a;t++)n.call(null,e[t],t,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.call(null,e[i],i,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:i,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return o(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var n={};function t(t,a){"object"==typeof n[a]&&"object"==typeof t?n[a]=e(n[a],t):n[a]=t}for(var a=0,i=arguments.length;a<i;a++)l(arguments[a],t);return n},deepMerge:function e(){var n={};function t(t,a){"object"==typeof n[a]&&"object"==typeof t?n[a]=e(n[a],t):n[a]="object"==typeof t?e({},t):t}for(var a=0,i=arguments.length;a<i;a++)l(arguments[a],t);return n},extend:function(e,n,t){return l(n,function(n,i){e[i]=t&&"function"==typeof n?a(n,t):n}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,n,t){e.exports=t.p+"images/cdbd071073466ad55a79c381fccfa0db.svg"},function(e,n,t){e.exports=t(16)},,function(e,n,t){"use strict";e.exports=function(e,n){return function(){for(var t=new Array(arguments.length),a=0;a<t.length;a++)t[a]=arguments[a];return e.apply(n,t)}}},function(e,n,t){"use strict";var a=t(2);function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,n,t){if(!n)return e;var r;if(t)r=t(n);else if(a.isURLSearchParams(n))r=n.toString();else{var s=[];a.forEach(n,function(e,n){null!=e&&(a.isArray(e)?n+="[]":e=[e],a.forEach(e,function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),s.push(i(n)+"="+i(e))}))}),r=s.join("&")}if(r){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}},function(e,n,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,n,t){"use strict";(function(n){var a=t(2),i=t(23),r={"Content-Type":"application/x-www-form-urlencoded"};function s(e,n){!a.isUndefined(e)&&a.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}var o,c={adapter:(void 0!==n&&"[object process]"===Object.prototype.toString.call(n)?o=t(10):"undefined"!=typeof XMLHttpRequest&&(o=t(10)),o),transformRequest:[function(e,n){return i(n,"Accept"),i(n,"Content-Type"),a.isFormData(e)||a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e)?e:a.isArrayBufferView(e)?e.buffer:a.isURLSearchParams(e)?(s(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):a.isObject(e)?(s(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],function(e){c.headers[e]={}}),a.forEach(["post","put","patch"],function(e){c.headers[e]=a.merge(r)}),e.exports=c}).call(this,t(22))},function(e,n,t){"use strict";var a=t(2),i=t(24),r=t(7),s=t(26),o=t(27),c=t(11);e.exports=function(e){return new Promise(function(n,l){var u=e.data,d=e.headers;a.isFormData(u)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",p=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+p)}if(f.open(e.method.toUpperCase(),r(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in f?s(f.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:t,config:e,request:f};i(n,l,a),f=null}},f.onabort=function(){f&&(l(c("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){l(c("Network Error",e,null,f)),f=null},f.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",f)),f=null},a.isStandardBrowserEnv()){var m=t(28),v=(e.withCredentials||o(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in f&&a.forEach(d,function(e,n){void 0===u&&"content-type"===n.toLowerCase()?delete d[n]:f.setRequestHeader(n,e)}),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(n){if("json"!==e.responseType)throw n}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),l(e),f=null)}),void 0===u&&(u=null),f.send(u)})}},function(e,n,t){"use strict";var a=t(25);e.exports=function(e,n,t,i,r){var s=new Error(e);return a(s,n,t,i,r)}},function(e,n,t){"use strict";var a=t(2);e.exports=function(e,n){n=n||{};var t={};return a.forEach(["url","method","params","data"],function(e){void 0!==n[e]&&(t[e]=n[e])}),a.forEach(["headers","auth","proxy"],function(i){a.isObject(n[i])?t[i]=a.deepMerge(e[i],n[i]):void 0!==n[i]?t[i]=n[i]:a.isObject(e[i])?t[i]=a.deepMerge(e[i]):void 0!==e[i]&&(t[i]=e[i])}),a.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(a){void 0!==n[a]?t[a]=n[a]:void 0!==e[a]&&(t[a]=e[a])}),t}},function(e,n,t){"use strict";function a(e){this.message=e}a.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},a.prototype.__CANCEL__=!0,e.exports=a},,,function(e,n,t){"use strict";var a=t(2),i=t(6),r=t(18),s=t(12);function o(e){var n=new r(e),t=i(r.prototype.request,n);return a.extend(t,r.prototype,n),a.extend(t,n),t}var c=o(t(9));c.Axios=r,c.create=function(e){return o(s(c.defaults,e))},c.Cancel=t(13),c.CancelToken=t(31),c.isCancel=t(8),c.all=function(e){return Promise.all(e)},c.spread=t(32),e.exports=c,e.exports.default=c},function(e,n){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,n,t){"use strict";var a=t(2),i=t(7),r=t(19),s=t(20),o=t(12);function c(e){this.defaults=e,this.interceptors={request:new r,response:new r}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=o(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var n=[s,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){n.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){n.push(e.fulfilled,e.rejected)});n.length;)t=t.then(n.shift(),n.shift());return t},c.prototype.getUri=function(e){return e=o(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},a.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(n,t){return this.request(a.merge(t||{},{method:e,url:n}))}}),a.forEach(["post","put","patch"],function(e){c.prototype[e]=function(n,t,i){return this.request(a.merge(i||{},{method:e,url:n,data:t}))}}),e.exports=c},function(e,n,t){"use strict";var a=t(2);function i(){this.handlers=[]}i.prototype.use=function(e,n){return this.handlers.push({fulfilled:e,rejected:n}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){a.forEach(this.handlers,function(n){null!==n&&e(n)})},e.exports=i},function(e,n,t){"use strict";var a=t(2),i=t(21),r=t(8),s=t(9),o=t(29),c=t(30);function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return l(e),e.baseURL&&!o(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]}),(e.adapter||s.adapter)(e).then(function(n){return l(e),n.data=i(n.data,n.headers,e.transformResponse),n},function(n){return r(n)||(l(e),n&&n.response&&(n.response.data=i(n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})}},function(e,n,t){"use strict";var a=t(2);e.exports=function(e,n,t){return a.forEach(t,function(t){e=t(e,n)}),e}},function(e,n){var t,a,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{a="function"==typeof clearTimeout?clearTimeout:s}catch(e){a=s}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=o(f);u=!0;for(var n=l.length;n;){for(c=l,l=[];++d<n;)c&&c[d].run();d=-1,n=l.length}c=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===s||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(n){try{return a.call(null,e)}catch(n){return a.call(this,e)}}}(e)}}function p(e,n){this.fun=e,this.array=n}function m(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new p(e,n)),1!==l.length||u||o(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,n,t){"use strict";var a=t(2);e.exports=function(e,n){a.forEach(e,function(t,a){a!==n&&a.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[a])})}},function(e,n,t){"use strict";var a=t(11);e.exports=function(e,n,t){var i=t.config.validateStatus;!i||i(t.status)?e(t):n(a("Request failed with status code "+t.status,t.config,null,t.request,t))}},function(e,n,t){"use strict";e.exports=function(e,n,t,a,i){return e.config=n,t&&(e.code=t),e.request=a,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,n,t){"use strict";var a=t(2),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var n,t,r,s={};return e?(a.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),n=a.trim(e.substr(0,r)).toLowerCase(),t=a.trim(e.substr(r+1)),n){if(s[n]&&i.indexOf(n)>=0)return;s[n]="set-cookie"===n?(s[n]?s[n]:[]).concat([t]):s[n]?s[n]+", "+t:t}}),s):s}},function(e,n,t){"use strict";var a=t(2);e.exports=a.isStandardBrowserEnv()?function(){var e,n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function i(e){var a=e;return n&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=i(window.location.href),function(n){var t=a.isString(n)?i(n):n;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},function(e,n,t){"use strict";var a=t(2);e.exports=a.isStandardBrowserEnv()?{write:function(e,n,t,i,r,s){var o=[];o.push(e+"="+encodeURIComponent(n)),a.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),a.isString(i)&&o.push("path="+i),a.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,n,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,n,t){"use strict";e.exports=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}},function(e,n,t){"use strict";var a=t(13);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(e){n=e});var t=this;e(function(e){t.reason||(t.reason=new a(e),n(t.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i(function(n){e=n}),cancel:e}},e.exports=i},function(e,n,t){"use strict";e.exports=function(e){return function(n){return e.apply(null,n)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";t.r(n);t(60),t(61);var a=t(4),i=t.n(a);const r=document.querySelectorAll(".content-tab__item"),s=document.querySelector(".content-cards");let o=document.querySelector(".content-tab__item--current");r.forEach((e,n)=>{e.onclick=function(){switch(o.classList.remove("content-tab__item--current"),e.classList.toggle("content-tab__item--current"),o=e,n){case 0:h();break;case 1:s.innerHTML=f,i.a.get(l).then(({data:e,status:n})=>{200==n&&e.list.forEach(({riqi:e,caption:n,img:t,url:a})=>{s.innerHTML+=`\n          <div class="content-cards__item">\n            <a href='${a}' class="content-cards__item-img">\n              <figure style='background-image:url(${t})'></figure>\n              <span><i class="icon date"></i>${e}</span>\n              <div class="overlay"></div>\n            </a>\n            <h2>${n}</h2>\n          </div>\n        `,document.querySelector(".loading").classList.toggle("loading--hide",!0)})});break;case 2:s.innerHTML=f,i.a.get(u).then(({data:e,status:n})=>{200==n&&e.list.forEach(({riqi:e,caption:n,img:t,url:a})=>{s.innerHTML+=`\n          <div class="content-cards__item">\n            <a href='${a}' class="content-cards__item-img">\n              <figure style='background-image:url(${t})'></figure>\n              <span><i class="icon date"></i>${e}</span>\n              <div class="overlay"></div>\n            </a>\n            <h2>${n}</h2>\n          </div>\n        `,document.querySelector(".loading").classList.toggle("loading--hide",!0)})});break;case 3:s.innerHTML=f,i.a.get(d).then(({data:e,status:n})=>{200==n&&e.list.forEach(({riqi:e,caption:n,img:t,url:a})=>{s.innerHTML+=`\n          <div class="content-cards__item">\n            <a href='${a}' class="content-cards__item-img">\n              <figure style='background-image:url(${t})'></figure>\n              <span><i class="icon date"></i>${e}</span>\n              <div class="overlay"></div>\n            </a>\n            <h2>${n}</h2>\n          </div>\n        `,document.querySelector(".loading").classList.toggle("loading--hide",!0)})})}return!1}});const c="https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getAll",l="https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getFree",u="https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getStandard",d="https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getPreminum",f='\n    <div class="loading">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  ';function h(){s.innerHTML=f,i.a.get(c).then(({data:e,status:n})=>{if(200==n){const{riqi:n,img:t,title:a,caption:i,url:r}=e.first;s.innerHTML+=`\n        <div class="content-cards__first">\n          <div class="content-cards__first-left">\n            <span><i class="icon date"></i>${n}</span>\n            <h2><a class="hr" href="${r}">${a}</a></h2>\n            <p>${i}</p>\n          </div>\n          <a href="${r}" class="content-cards__first-right">\n            <figure style='background-image:url(${t})'></figure>\n          </a>\n        </div>\n      `,e.list.forEach(({riqi:e,caption:n,img:t,url:a})=>{s.innerHTML+=`\n          <div class="content-cards__item">\n            <a href='${a}' class="content-cards__item-img">\n              <figure style='background-image:url(${t})'></figure>\n              <span><i class="icon date"></i>${e}</span>\n              <div class="overlay"></div>\n            </a>\n            <h2>${n}</h2>\n          </div>\n        `}),document.querySelector(".loading").classList.toggle("loading--hide",!0)}})}h(),window.addEventListener("scroll",function(){const e=window.innerHeight-s.getBoundingClientRect().bottom;let n=!0;if(e>300&&s.offsetHeight>window.innerHeight/2&&n)switch(n=!1,o.innerHTML){case"All":document.querySelector(".loading").classList.toggle("loading--hide",!1),i.a.get(c).then(({data:e,status:t})=>{200==t&&(e.more.forEach(({riqi:e,caption:n,img:t,url:a})=>{s.innerHTML+=`\n            <div class="content-cards__item">\n              <a href='${a}' class="content-cards__item-img">\n                <figure style='background-image:url(${t})'></figure>\n                <span><i class="icon date"></i>${e}</span>\n                <div class="overlay"></div>\n              </a>\n              <h2>${n}</h2>\n            </div>\n          `}),document.querySelector(".loading").classList.toggle("loading--hide",!0),n=!0)});break;case"Free":document.querySelector(".loading").classList.toggle("loading--hide",!1),i.a.get(l).then(({data:e,status:t})=>{200==t&&(e.more.forEach(({riqi:e,caption:n,img:t,url:a})=>{s.innerHTML+=`\n            <div class="content-cards__item">\n              <a href='${a}' class="content-cards__item-img">\n                <figure style='background-image:url(${t})'></figure>\n                <span><i class="icon date"></i>${e}</span>\n                <div class="overlay"></div>\n              </a>\n              <h2>${n}</h2>\n            </div>\n          `}),document.querySelector(".loading").classList.toggle("loading--hide",!0),n=!0)});break;case"Standard":document.querySelector(".loading").classList.toggle("loading--hide",!1),i.a.get(u).then(({data:e,status:t})=>{200==t&&(e.more.forEach(({riqi:e,caption:n,img:t,url:a})=>{s.innerHTML+=`\n            <div class="content-cards__item">\n              <a href='${a}' class="content-cards__item-img">\n                <figure style='background-image:url(${t})'></figure>\n                <span><i class="icon date"></i>${e}</span>\n                <div class="overlay"></div>\n              </a>\n              <h2>${n}</h2>\n            </div>\n          `}),document.querySelector(".loading").classList.toggle("loading--hide",!0),n=!0)});break;case"Preminum":document.querySelector(".loading").classList.toggle("loading--hide",!1),i.a.get(d).then(({data:e,status:t})=>{200==t&&(e.more.forEach(({riqi:e,caption:n,img:t,url:a})=>{s.innerHTML+=`\n            <div class="content-cards__item">\n              <a href='${a}' class="content-cards__item-img">\n                <figure style='background-image:url(${t})'></figure>\n                <span><i class="icon date"></i>${e}</span>\n                <div class="overlay"></div>\n              </a>\n              <h2>${n}</h2>\n            </div>\n          `}),document.querySelector(".loading").classList.toggle("loading--hide",!0),n=!0)})}})},function(e,n,t){e.exports='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel="icon" type="image/png" href="https://i.postimg.cc/ryf98PTw/favicon.png">\n  <title>CGHK - Service</title>\n</head>\n<body>\n  \x3c!-- Nav --\x3e\n  <header class="header">\n    <div class="nav">\n      <div class="nav__wrapper">\n        <a href="index.html" class="nav__logo"></a>\n        <div class="nav-links">\n          <nav class="nav-links-one">\n            <a href="private-policy.html" class="nav-links-one__item">Private Policy</a>\n            <a href="contact.html" class="nav-links-one__item">Contact Us</a>\n            <a href="media.html" class="nav-links-one__item">Media</a>\n            <a href="donate.html" class="nav-links-one__item">Donate</a>\n            <div class="language">\n              <img class="language__selected" src="'+t(0)+'" alt="">\n              <ul href="" class="language__item">\n                <li class="language__en"><img title="English" width="13px" src="'+t(0)+'" alt=""></li>\n                <li class="language__zh"><img title="中文" width="13px" src="'+t(1)+'" alt=""></li>\n              </ul>\n            </div>\n          </nav>\n          <nav class="nav-links-two">\n            <div class="nav-links-two__item">\n              <a href="about-CGHK.html">About CGHK<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="about.html">About</a></li>\n                <li><a href="about-CGHK.html">Message of President</a></li>\n                <li><a href="about-committee.html">Advisory Committee</a></li>\n                <li><a href="about-committee.html">Commentators & Experts</a></li>\n                <li><a href="about-committee.html">Partners</a></li>\n                <li><a href="about-committee.html">Staff and Interships</a></li>\n                <li><a href="contact.html">Contact Us</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="perspective.html">CGHK\'s Perspective</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="events.html">Events</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="service.html">Service<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service-research.html">Policy and Market Research</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="publication.html">Publication</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service.html">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="membership.html">Membership</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">E-Newsletter</a></li>\n                <li><a href="">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </header>\n  \x3c!-- Body --\x3e\n  <article class="body">\n    \x3c!-- Aside --\x3e\n    <aside class="aside">\n      <nav class="aside-bread">\n        <a href="index.html" class="aside-bread__link">Home</a>\n        <a href="" class="aside-bread__link">Service</a>\n      </nav>\n      <nav class="aside-nav">\n        <a href="service.html" class="aside-nav__link aside-nav__link--current">E-Newsletter</a>\n        <a href="service-research.html" class="aside-nav__link aside-nav__link">Policy and Market Research</a>\n      </nav>\n    </aside>\n    \x3c!-- Content --\x3e\n    <div class="content">\n      \x3c!-- Title --\x3e\n      <h1 class="title content__title"><img src="'+t(3)+'" alt="">E-Newsletter</h1>\n\n      <nav class="content-tab">\n        <a class="content-tab__item content-tab__item--current">All</a>\n        <a class="content-tab__item">Free</a>\n        <a class="content-tab__item">Standard</a>\n        <a class="content-tab__item">Preminum</a>\n      </nav>\n      <section class="content-cards">\n        <div class="content-cards__first">\n          <div class="content-cards__first-left">\n            <span><i class="icon date"></i>2019/06/25</span>\n            <h2><a class="hr" href="">Heritage Applauds EPA’s Replacement of the Clean Power Plan</a></h2>\n            <p>“The Affordable Clean Energy rule is a sensible alternative to the Obama administration’s climate\n              alarmist agenda, the Clean Power Plan," said Heritage expert Nick Loris. "The U.S. Supreme Court agreed\n              that the proposed Obama-era regulation unacceptably exceeded EPA’s statutory authority and disregarded\n              states’ concerns that the rule abandoned federalism, so the CPP never went into effect." \n            </p>\n          </div>\n          <a href="" class="content-cards__first-right">\n            <figure></figure>\n          </a>\n        </div>\n        \x3c!-- items --\x3e\n        \x3c!-- <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <span><i class="icon date"></i>2019/06/25</span>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div> --\x3e\n\n        \x3c!-- <div class="loading">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div> --\x3e\n      </section>\n    </div>\n  </article>\n  \x3c!-- Footer --\x3e\n  <footer class="footer">\n    Copyrights © 2019 CGHK All Rights Reserved.\n  </footer>\n</body>\n</html>'},function(e,n,t){}]);