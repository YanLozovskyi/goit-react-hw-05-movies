/*! For license information please see 941.48a17df5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[941],{480:function(t,e,r){r.d(e,{z:function(){return f}});var n,o,i,a,c,u=r(861),s=r(243);function l(){l=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var x={};s(x,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(G([])));j&&j!==r&&n.call(j,a)&&(x=j);var L=w.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(E.prototype),s(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}var h="28909b5df6d6afd9591e6fc0c7cef11e";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var f={getTrendMoviesByParam:function(t,e){return(n=n||(0,u.Z)(l().mark((function t(e,r){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/movie/".concat(e),{params:{api_key:h},signal:r.signal});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},SearchMoviesByQuery:function(t,e,r){return(c=c||(0,u.Z)(l().mark((function t(e,r,n){var o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie",{params:{query:e,page:r,api_key:h},signal:n.signal});case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},getMovieDetailsById:function(t,e){return(o=o||(0,u.Z)(l().mark((function t(e,r){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e),{params:{api_key:h},signal:r.signal});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},getMovieCastById:function(t,e){return(i=i||(0,u.Z)(l().mark((function t(e,r){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/credits"),{params:{api_key:h},signal:r.signal});case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},getMovieReviewsById:function(t,e){return(a=a||(0,u.Z)(l().mark((function t(e,r){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:h},signal:r.signal});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}},517:function(t,e,r){r.d(e,{u:function(){return u}});var n,o=r(168),i=(r(791),r(881)),a=r(867),c=r(184),u=function(){return(0,c.jsx)(s,{children:(0,c.jsx)(i.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0,ariaLabel:"rotating-lines-loading"})})},s=a.ZP.div(n||(n=(0,o.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: 'translate(-50%, -50%)';\n"])))},506:function(t,e,r){r.d(e,{Z:function(){return c}});var n,o=r(168),i=r(867).ZP.p(n||(n=(0,o.Z)(["\n  color: black;\n  text-align: left;\n  font-weight: 700;\n  font-size: 38px;\n  margin-bottom: 20px;\n"]))),a=r(184),c=function(t){var e=t.message;return(0,a.jsx)(i,{children:e})}},941:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(861),o=r(439),i=r(480),a=r(566),c=r(791),u=r(689),s=r(87),l=r(76),h=r(184),f=function(t){var e=t.movie,r=e.backdrop_path,n=e.original_title,o=e.release_date,i=e.vote_average,a=e.vote_count,c=e.popularity,u=e.genres,s=e.overview,f=u.map((function(t){return t.name})).join(", ");return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{loading:"lazy",width:"704",height:"400",src:r?"https://image.tmdb.org/t/p/w500/".concat(r):l,alt:n})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:n}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"Release date"}),(0,h.jsx)("li",{children:"Vote / Votes"})]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:o}),(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:i})," / ",(0,h.jsx)("span",{children:a})]})]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"Popularity"}),(0,h.jsx)("li",{children:"Genre"})]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:c}),(0,h.jsx)("li",{children:f})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"About"}),(0,h.jsx)("p",{children:s})]})]})]})},p=r(517),v=r(506);function d(){d=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",p="executing",v="completed",y={};function g(){}function m(){}function w(){}var x={};s(x,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(G([])));j&&j!==r&&n.call(j,a)&&(x=j);var L=w.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(E.prototype),s(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}var y=function(){var t,e,r=(0,c.useState)(),l=(0,o.Z)(r,2),y=l[0],g=l[1],m=(0,c.useState)(null),w=(0,o.Z)(m,2),x=w[0],b=w[1],j=(0,c.useState)(!1),L=(0,o.Z)(j,2),_=L[0],E=L[1],k=(0,u.UO)().movieId,O=(0,u.TH)(),Z=(0,c.useRef)(null!==(t=null===(e=O.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/");return(0,c.useEffect)((function(){var t;if(k){var e=new AbortController;!function(){(t=t||(0,n.Z)(d().mark((function t(){var r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(!0),t.next=4,i.z.getMovieDetailsById(k,e);case 4:r=t.sent,g(r),b(!1),E(!1),t.next=16;break;case 10:if(t.prev=10,t.t0=t.catch(0),"canceled"!==t.t0.message){t.next=14;break}return t.abrupt("return");case 14:b(t.t0.message),E(!1);case 16:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}()}}),[k]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.Link,{to:Z.current,children:(0,h.jsx)("button",{children:"back"})}),x&&(0,h.jsx)(v.Z,{message:"Sorry, but something went wrong while attempting to generate the movie. We are working to resolve this issue as soon as possible. Please try again later or contact our support team for further assistance. Thank you for your patience and understanding!"}),y&&!_&&(0,h.jsx)(f,{movie:y}),_&&(0,h.jsx)(p.u,{}),!x&&!_&&(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.Link,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.Link,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(c.Suspense,{fallback:(0,h.jsx)(a.w,{}),children:(0,h.jsx)(u.j3,{})})]})}},76:function(t,e,r){t.exports=r.p+"static/media/default_poster_path.c2a1de32b81aca223e04.jpg"}}]);
//# sourceMappingURL=941.48a17df5.chunk.js.map