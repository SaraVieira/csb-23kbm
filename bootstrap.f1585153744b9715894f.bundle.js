/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
var shimFeatures={"no-bootstrap":!0,"intersection-observer":!1,"resize-observer":!1,"web-animations":!1,"build-fetch":!1,inert:!1};window.DojoHasEnvironment&&window.DojoHasEnvironment.staticFeatures&&Object.keys(window.DojoHasEnvironment.staticFeatures).forEach(function(e){shimFeatures[e]=window.DojoHasEnvironment.staticFeatures[e]}),window.DojoHasEnvironment={staticFeatures:shimFeatures},function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("lib_dojo_codesandbox_template",[],t):"object"==typeof exports?exports.lib_dojo_codesandbox_template=t():e.lib_dojo_codesandbox_template=t()}(window,function(){return function(e){function t(t){for(var n,r,i=t[0],a=t[1],s=0,u=[];s<i.length;s++)r=i[s],o[r]&&u.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(d&&d(t);u.length;)u.shift()()}var n={},r={bootstrap:0},o={bootstrap:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{main:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var r=({main:"main","runtime/IntersectionObserver":"runtime/IntersectionObserver","runtime/ResizeObserver":"runtime/ResizeObserver","runtime/WebAnimations":"runtime/WebAnimations","runtime/blocks":"runtime/blocks","runtime/client":"runtime/client","runtime/fetch":"runtime/fetch","runtime/inert":"runtime/inert","runtime/pointerEvents":"runtime/pointerEvents"}[e]||e)+"."+{main:"e35ff1297e349ea080c7","runtime/IntersectionObserver":"31d6cfe0d16ae931b73c","runtime/ResizeObserver":"31d6cfe0d16ae931b73c","runtime/WebAnimations":"31d6cfe0d16ae931b73c","runtime/blocks":"31d6cfe0d16ae931b73c","runtime/client":"31d6cfe0d16ae931b73c","runtime/fetch":"31d6cfe0d16ae931b73c","runtime/inert":"31d6cfe0d16ae931b73c","runtime/pointerEvents":"31d6cfe0d16ae931b73c"}[e]+".bundle.css",o=i.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=(l=a[s]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){var l;if((u=(l=d[s]).getAttribute("data-href"))===r||u===o)return t()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=t,c.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},c.href=o,document.getElementsByTagName("head")[0].appendChild(c)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=a);var s,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=function(e){return i.p+""+({main:"main","runtime/IntersectionObserver":"runtime/IntersectionObserver","runtime/ResizeObserver":"runtime/ResizeObserver","runtime/WebAnimations":"runtime/WebAnimations","runtime/blocks":"runtime/blocks","runtime/client":"runtime/client","runtime/fetch":"runtime/fetch","runtime/inert":"runtime/inert","runtime/pointerEvents":"runtime/pointerEvents"}[e]||e)+"."+{main:"87728a87dd7e92aa73de","runtime/IntersectionObserver":"f7d2314147745371b940","runtime/ResizeObserver":"257750fe004a03a1643d","runtime/WebAnimations":"edb7670dca1df4cdae45","runtime/blocks":"2d09707025ab9646bd9e","runtime/client":"102ea75994b355dc8fac","runtime/fetch":"4aca0c33c91eed80b26c","runtime/inert":"049987d47c0873717031","runtime/pointerEvents":"914b178b4b1effd76000"}[e]+".bundle.js"}(e),s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,u.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.dojoWebpackJsonpdojo_codesandbox_template=window.dojoWebpackJsonpdojo_codesandbox_template||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=s;return i(i.s=4)}([function(e,t,n){"use strict";n.r(t),function(e){const n="undefined"!=typeof window&&window.navigator.userAgent.indexOf("jsdom")>-1?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:void 0;t.default=n}.call(this,n(3))},function(e,t,n){"use strict";n.r(t),n.d(t,"testCache",function(){return o}),n.d(t,"testFunctions",function(){return i}),n.d(t,"normalize",function(){return u}),n.d(t,"exists",function(){return d}),n.d(t,"add",function(){return l}),n.d(t,"default",function(){return c});var r=n(0);const o={},i={},{staticFeatures:a}=r.default.DojoHasEnvironment||{};"DojoHasEnvironment"in r.default&&delete r.default.DojoHasEnvironment;const s=a?"function"==typeof a?a.apply(r.default):a:{};function u(e,t){const n=e.match(/[\?:]|[^:\?]*/g)||[];let r=0;const o=function e(t){const o=n[r++];return":"===o?null:"?"===n[r++]?!t&&c(o)?e():(e(!0),e(t)):o}();return o&&t(o)}function d(e){const t=e.toLowerCase();return Boolean(t in s||t in o||i[t])}function l(e,t,n=!1){const r=e.toLowerCase();if(d(r)&&!n&&!(r in s))throw new TypeError(`Feature "${e}" exists and overwrite not true.`);"function"==typeof t?i[r]=t:(o[r]=t,delete i[r])}function c(e,t=!1){let n;const r=e.toLowerCase();if(r in s)n=s[r];else if(i[r])n=o[r]=i[r].call(null),delete i[r];else if(r in o)n=o[r];else if(t)throw new TypeError(`Attempt to detect unregistered has feature "${e}"`);return n}l("public-path",void 0),l("dojo-debug",!1),l("host-browser",!0),l("host-jsdom","undefined"!=typeof navigator&&-1!==navigator.userAgent.indexOf("jsdom")),l("host-node",!1),l("fetch",!0),l("es6-array",!0),l("es6-array-fill",!0),l("es7-array",!0),l("es2019-array",!0),l("es6-map",!0),l("es6-iterator",!0),l("es6-math",!0),l("es6-math-imul",!0),l("es6-object",!0),l("es2017-object",!0),l("es-observable",!1),l("es6-promise",!0),l("es2018-promise-finally",()=>void 0!==r.default.Promise.prototype.finally,!0),l("es6-set",!0),l("es6-string",!0),l("es6-string-raw",!0),l("es2017-string",!0),l("es6-symbol",!0),l("es6-weakmap",!0),l("microtasks",!0),l("postmessage",!0),l("raf",!0),l("setimmediate",!1),l("dom-mutationobserver",!0),l("dom-webanimation",()=>void 0!==r.default.Animation&&void 0!==r.default.KeyframeEffect,!0),l("abort-controller",()=>void 0!==r.default.AbortController),l("abort-signal",()=>void 0!==r.default.AbortSignal),l("dom-intersection-observer",()=>void 0!==r.default.IntersectionObserver,!0),l("dom-resize-observer",()=>void 0!==r.default.ResizeObserver,!0),l("dom-pointer-events",()=>void 0!==r.default.onpointerdown,!0),l("dom-css-variables",!0),l("dom-inert",()=>Element.prototype.hasOwnProperty("inert"),!0),l("build-elide",!1),l("test",!1),l("global-this",()=>void 0!==r.default.globalThis)},function(e,t,n){"use strict";n.r(t),n.d(t,"ShimPromise",function(){return i}),n.d(t,"isThenable",function(){return a});var r=n(0),o=n(1);let i=r.default.Promise;const a=function(e){return e&&"function"==typeof e.then};Object(o.default)("es2018-promise-finally")||(r.default.Promise.prototype.finally=function(e){return this.then(e&&(t=>Promise.resolve(e()).then(()=>t)),e&&(t=>Promise.resolve(e()).then(()=>{throw t})))}),t.default=i},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(5),n(2),e.exports=n(7)},function(e,t,n){},,function(e,t,n){var r=n(1),o=n(8).default;n(9);var i=[];r.default("build-serve")&&(i.push(n.e("runtime/client").then(n.t.bind(null,10,7))),i.push(n.e("runtime/client").then(n.t.bind(null,11,7)))),r.default("build-blocks")&&i.push(n.e("runtime/blocks").then(n.t.bind(null,12,7))),r.default("intersection-observer")&&!r.default("dom-intersection-observer")&&i.push(n.e("runtime/IntersectionObserver").then(n.bind(null,13))),r.default("build-fetch"),r.default("web-animations")&&!r.default("dom-webanimation")&&i.push(n.e("runtime/WebAnimations").then(n.bind(null,15))),r.default("resize-observer")&&!r.default("dom-resize-observer")&&i.push(n.e("runtime/ResizeObserver").then(n.bind(null,16))),r.default("inert")&&!r.default("dom-inert")&&i.push(n.e("runtime/inert").then(n.t.bind(null,17,7))),r.default("dom-pointer-events")||i.push(n.e("runtime/pointerEvents").then(n.bind(null,18))),i.push(o),e.exports=Promise.all(i).then(function(){return n.e("main").then(n.bind(null,19))})},function(e,t,n){"use strict";n.r(t),t.default=Promise.resolve()},function(e,t,n){var r=n(1),o=n(0);o.default.dojo_codesandbox_template||(o.default.dojo_codesandbox_template={}),r.exists("build-time-render")||r.add("build-time-render",!1,!1),r.exists("build-serve")||r.add("build-serve",!1,!1);var i=o.default.dojo_codesandbox_template.base?o.default.dojo_codesandbox_template.base:o.default.__app_base__,a=o.default.dojo_codesandbox_template.publicPath?o.default.dojo_codesandbox_template.publicPath:o.default.__public_path__,s=o.default.dojo_codesandbox_template.publicOrigin?o.default.dojo_codesandbox_template.publicOrigin:o.default.__public_origin__;if(r.add("app-base",i||"/",!0),a||s){var u=s||window.location.origin;a&&(u+=a,r.add("public-path",a,!0)),n.p=u}}])});
//# sourceMappingURL=bootstrap.f1585153744b9715894f.bundle.js.map