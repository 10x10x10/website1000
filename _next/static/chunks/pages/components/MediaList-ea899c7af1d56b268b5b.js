(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[442],{18:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})},4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function c(e){return n.isMemo(e)?a:u[e.$$typeof]||o}u[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[n.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var a=f(r);l&&(a=a.concat(l(r)));for(var u=c(t),m=c(r),v=0;v<a.length;++v){var b=a[v];if(!i[b]&&(!n||!n[b])&&(!m||!m[b])&&(!u||!u[b])){var h=p(r,b);try{s(t,b,h)}catch(g){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,h=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case i:case u:case a:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case v:case m:case c:return e;default:return t}}case o:return t}}}function O(e){return x(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=v,t.Memo=m,t.Portal=o,t.Profiler=u,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return O(e)||x(e)===f},t.isConcurrentMode=O,t.isContextConsumer=function(e){return x(e)===s},t.isContextProvider=function(e){return x(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===p},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===v},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===u},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===l||e===u||e===a||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===c||e.$$typeof===s||e.$$typeof===p||e.$$typeof===h||e.$$typeof===g||e.$$typeof===w||e.$$typeof===b)},t.typeOf=x},1296:function(e,t,r){"use strict";e.exports=r(6103)},4772:function(e,t,r){"use strict";r.d(t,{W:function(){return o}});var n=r(9459),o=function(e){for(var t=e.split("."),r=n.aT,o=0;o<t.length;o++)r=r[t[o]];return r}},1078:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7757),o=r.n(n),i=r(2137),a=r(5893),u=(r(7294),r(5697)),c=r.n(u),s=r(9260),f=r.n(s),l=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":161,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[500,500],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"t":80,"s":[100]}],"ix":1,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":80,"s":[100]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[90]},{"t":80,"s":[270]}],"ix":3,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"m":2,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":2,"ix":4,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":160,"st":0,"bm":0}],"markers":[]}');function p(e){var t=e.isLoading,r=(0,a.jsx)("div",{className:"loading-conatiner",children:(0,a.jsx)(f(),{animationData:l,style:{width:64,height:64},loop:!0,autoplay:!0})});return t?r:null}p.propTypes={isLoading:c().bool.isRequired},p.defaultProps={isLoading:!1},p.getInitialProps=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.defaultProps);case 1:case"end":return e.stop()}}),e)})));var d=p},1e3:function(e,t,r){"use strict";r.r(t);var n=r(7757),o=r.n(n),i=r(2137),a=r(5893),u=r(18),c=r(7294),s=r(4184),f=r.n(s),l=r(1078),p=/(.+)\?\[(\d+)[x*](\d+)\]/;function d(e){var t=e.link,r=e.classes,n=e.position,o=e.enableLoading,i=(0,c.useState)(!0),s=i[0],d=i[1],y=function(e){var t=e.match(p);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(t),m=y.urlLink,v=y.width,b=y.height,h=(0,c.createRef)();return(0,c.useEffect)((function(){var e=function(){d(!1)};switch(h.current.nodeName){case"IMG":var t=h.current;t.complete?e():t.onload=e;break;case"VIDEO":var r=h.current;console.log(),r.readyState>=3?e():r.onloadeddata=e}})),(0,a.jsxs)("div",{ref:e.forwardedRef,style:{position:n,inset:0,paddingTop:"".concat(b/v*100,"%")},className:f()("media-item",{"media-show":!e.forwardedRef||e.enterCount>0}),children:[function(){var e=function(e,t){var r=e.toLowerCase();return t.some((function(e){return r.endsWith(e)}))};return e(m,[".mp4"])?(0,a.jsx)("video",{ref:h,className:f().apply(void 0,["media-video"].concat((0,u.Z)(r),[{loading:s}])),src:m,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):e(m,[".png",".jpg",".jpeg"])?(0,a.jsx)("img",{ref:h,className:f().apply(void 0,["media-img"].concat((0,u.Z)(r),[{loading:s}])),src:m,loading:"lazy",width:"100%",alt:"",title:""}):e(m,[".gif"])?(0,a.jsx)("img",{ref:h,className:f().apply(void 0,["media-gif"].concat((0,u.Z)(r),[{loading:s}])),src:m,loading:"lazy",width:"100%",alt:"",title:""}):null}(),o?(0,a.jsx)(l.default,{isLoading:s}):null]})}d.defaultProps={link:"",classes:[],position:"relative",enableLoading:!0},d.getInitialProps=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.defaultProps);case 1:case"end":return e.stop()}}),e)}))),t.default=d},2994:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),o=r(6156),i=(r(7294),r(4184)),a=r.n(i),u=r(4772),c=r(1e3),s=(0,r(9231).ZP)(c.default);function f(e){var t=e.links,r=void 0===t?"":t,i=e.title,c=void 0===i?"":i,f=e.col,l=void 0===f?0:f,p=e.mCol,d=void 0===p?l:p;return(0,n.jsxs)("div",{className:"media-list-container",children:[c?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:c})}):null,(0,n.jsx)("div",{className:a()("grid-c",function(e,t){var r,n="grid-c"+e,i="m-grid-c"+t;return r={},(0,o.Z)(r,n,!0),(0,o.Z)(r,i,!0),r}(l,d)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,u.W)(e)})).filter((function(e){return void 0!==e}))}(r).map((function(e){return(0,n.jsx)("div",{className:"media-container",children:(0,n.jsx)(s,{link:e})},e)}))})]})}},2727:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/MediaList",function(){return r(2994)}])},9231:function(e,t,r){"use strict";t.ZP=void 0;var n=o(r(7095));function o(e){return e&&e.__esModule?e:{default:e}}n.default,o(r(2659)).default;var i=n.default;t.ZP=i},7095:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=a(r(8679)),i=a(r(2659));function a(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=()=>{};var d=function(e,t,r){void 0===r&&(r={disconnectOnLeave:!1});var a=(0,n.forwardRef)(((t,r)=>{var o,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({forwardedRef:r},(o=e).prototype&&o.prototype.isReactComponent&&!(e=>"function"===typeof e&&!(e.prototype&&e.prototype.render))(e)?{ref:r}:{});return n.default.createElement(e,s({},t,i))})),u=e=>{var{onEnterViewport:o=p,onLeaveViewport:u=p}=e,f=c(e,["onEnterViewport","onLeaveViewport"]),l=(0,n.useRef)(),{inViewport:d,enterCount:y,leaveCount:m}=(0,i.default)(l,t,r,{onEnterViewport:o,onLeaveViewport:u});return n.default.createElement(a,s({},f,{inViewport:d,enterCount:y,leaveCount:m,ref:l}))},d=e.displayName||e.name||"Component";return u.displayName="handleViewport("+d+")",(0,o.default)(u,a)};t.default=d},2659:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=r(3935),i=function(e,t,r,i){void 0===r&&(r={disconnectOnLeave:!1});var{onEnterViewport:a,onLeaveViewport:u}=i,[,c]=(0,n.useState)(),s=(0,n.useRef)(),f=(0,n.useRef)(!1),l=(0,n.useRef)(!1),p=(0,n.useRef)(0),d=(0,n.useRef)(0);function y(e){var t=e[0]||{},{isIntersecting:n,intersectionRatio:o}=t,i="undefined"!==typeof n?n:o>0;if(!l.current&&i)return l.current=!0,a&&a(),p.current+=1,f.current=i,void c(i);l.current&&!i&&(l.current=!1,u&&u(),r.disconnectOnLeave&&s.current&&s.current.disconnect(),d.current+=1,f.current=i,c(i))}return(0,n.useEffect)((()=>{var r=s.current;return function(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.observe(i))}}({observerRef:r=function(e){var{observerRef:r}=e;return r||(s.current=new IntersectionObserver(y,t),s.current)}({observerRef:r})}),()=>{!function(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.unobserve(i))}null==r||r.disconnect(),s.current=null}({observerRef:r})}}),[e.current,t,r,a,u]),{inViewport:f.current,enterCount:p.current,leaveCount:d.current}};t.default=i}},function(e){e.O(0,[774,296,126,459,888,179],(function(){return t=2727,e(e.s=t);var t}));var t=e.O();_N_E=t}]);