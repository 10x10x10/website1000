(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function a(e){return n.isMemo(e)?c:u[e.$$typeof]||o}u[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[n.Memo]=c;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,v=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(v){var o=p(r);o&&o!==v&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var u=a(t),y=a(r),m=0;m<c.length;++m){var h=c[m];if(!i[h]&&(!n||!n[h])&&(!y||!y[h])&&(!u||!u[h])){var j=d(r,h);try{s(t,h,j)}catch(b){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,j=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case i:case u:case c:case p:return e;default:switch(e=e&&e.$$typeof){case s:case d:case m:case y:case a:return e;default:return t}}case o:return t}}}function O(e){return x(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=s,t.ContextProvider=a,t.Element=n,t.ForwardRef=d,t.Fragment=i,t.Lazy=m,t.Memo=y,t.Portal=o,t.Profiler=u,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return O(e)||x(e)===l},t.isConcurrentMode=O,t.isContextConsumer=function(e){return x(e)===s},t.isContextProvider=function(e){return x(e)===a},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===y},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===u},t.isStrictMode=function(e){return x(e)===c},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===u||e===c||e===p||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===j||e.$$typeof===b||e.$$typeof===g||e.$$typeof===h)},t.typeOf=x},1296:function(e,t,r){"use strict";e.exports=r(6103)},4772:function(e,t,r){"use strict";r.d(t,{W:function(){return o}});var n=r(9459),o=function(e){for(var t=e.split("."),r=n.aT,o=0;o<t.length;o++)r=r[t[o]];return r}},9390:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(5893),o=r(6610),i=r(5991),c=r(3349),u=r(5255),a=r(6089),s=r(7608),l=r(6156),f=r(7294),d=r(4184),p=r.n(d);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var y=function(e){(0,u.Z)(r,e);var t=v(r);function r(e){var n;return(0,o.Z)(this,r),n=t.call(this,e),(0,l.Z)((0,c.Z)(n),"toggleHandler",(function(e){var t=n.state.isFold;n.setState({isFold:!t})})),n.state={isFold:!0},n}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,r=t.foldable,o=t.children,i=p()("credit-list",r?{fold:e,unfold:!e}:{});return(0,n.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,n.jsx)("h2",{children:"Credits"}),(0,n.jsx)("div",{className:i,children:o}),r&&e?(0,n.jsx)("p",{className:"credit-more",children:"More"}):null]})}}]),r}(f.Component);y.defaultProps={foldable:!1}},841:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),o=(r(7294),r(4772));function i(e){var t=e.link,r=void 0===t?"":t;return(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)("iframe",{src:(0,o.W)(r),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},2994:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),o=r(6156),i=(r(7294),r(4184)),c=r.n(i),u=r(4772),a=r(1e3),s=(0,r(9231).ZP)(a.default);function l(e){var t=e.links,r=void 0===t?"":t,i=e.title,a=void 0===i?"":i,l=e.col,f=void 0===l?0:l,d=e.mCol,p=void 0===d?f:d;return(0,n.jsxs)("div",{className:"media-list-container",children:[a?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:a})}):null,(0,n.jsx)("div",{className:c()("grid-c",function(e,t){var r,n="grid-c"+e,i="m-grid-c"+t;return r={},(0,o.Z)(r,n,!0),(0,o.Z)(r,i,!0),r}(f,p)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,u.W)(e)})).filter((function(e){return void 0!==e}))}(r).map((function(e){return(0,n.jsx)("div",{className:"media-container",children:(0,n.jsx)(s,{link:e})},e)}))})]})}},5080:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(e){var t=e.children;return(0,n.jsx)("div",{className:"project-text-container",children:t})}},4730:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(e){var t=e.children;return(0,n.jsx)("p",{className:"text-content convert-selection",children:t})}},3119:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(e){var t=e.children;return(0,n.jsx)("h2",{className:"text-title convert-selection",children:t})}},897:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),o=(r(7294),r(7599)),i=r(2994),c=r(9390),u=r(841),a=r(5080),s=r(3119),l=r(4730);function f(e){return(0,n.jsxs)(o.default,{id:"projectM002",children:[(0,n.jsx)(u.default,{link:"projectM002.video_main"}),(0,n.jsxs)(a.default,{children:[(0,n.jsx)(s.default,{children:"Entanglement"}),(0,n.jsx)(l.default,{children:"\u300c\u662f\u5426\u6709\u7368\u7acb\u65bc\u60f3\u6cd5\u4e4b\u5916\u7684\u81ea\u6211? \u6216\u662f\u662f\u5426\u6709\u7368\u7acb\u65bc\u81ea\u6211\u4e4b\u5916\u7684\u60f3\u6cd5?\u300d"}),(0,n.jsx)(l.default,{children:"\u5f9e\u63a2\u8a0e\u60f3\u6cd5\u8207\u81ea\u6211\u7684\u95dc\u4fc2\u51fa\u767c\uff0c\u5c07\u60f3\u6cd5\u62c6\u5206\u70ba\u300c\u5b9a\u7fa9\u300d\u8207\u300c\u95dc\u4fc2\u300d\uff0c\u5b9a\u7fa9\u5982\u9ede\uff0c\u95dc\u4fc2\u5982\u7dda\uff0c\u805a\u5408\u800c\u6210\u7684\u7d50\u69cb\u5373\u662f\u300c\u81ea\u6211\u300d\u3002\u63a5\u8457\u5ef6\u4f38\u81f3\u5efa\u7acb\u7a69\u5b9a\u81ea\u6211\u6982\u5ff5\u7684\u904e\u7a0b\uff0c\u81ea\u6211\u7a69\u5b9a\u5f8c\u9032\u800c\u7522\u751f\u8207\u5916\u754c\u7684\u826f\u597d\u9023\u7d50\u3002"}),(0,n.jsx)(l.default,{children:'"Is there a self that is independent of ideas? Or is there an idea that is independent of self?"'}),(0,n.jsx)(l.default,{children:'Starting from exploring the relationship between ideas and ego, I thought the idea is divided into "definition" and "relationship", the definition is like a point, the relationship is like a line, and the aggregated structure is "self". It then extends to the process of establishing a stable self-concept, which leads to a good connection with the outside world after self-stabilization.'})]}),(0,n.jsx)(i.default,{col:2,mCol:2,links:["projectM002.video_01_s","projectM002.video_02_s","projectM002.video_03_s","projectM002.video_04_s","projectM002.video_05_s","projectM002.video_06_s","projectM002.video_07_s","projectM002.video_08_s"]}),(0,n.jsx)(i.default,{col:1,mCol:1,title:"Concept",links:["projectM002.video_09_s"]}),(0,n.jsxs)(a.default,{children:[(0,n.jsx)(l.default,{children:"\u6545\u4e8b\u5927\u7db1\u662f\u5efa\u7acb\u7a69\u5b9a\u81ea\u6211\u6982\u5ff5\u7684\u904e\u7a0b\uff0c\u800c\u6709\u7a69\u5b9a\u7684\u81ea\u6211\u6982\u5ff5\u624d\u6709\u8fa6\u6cd5\u8207\u5916\u754c\u5efa\u7acb\u826f\u597d\u7684\u9023\u7d50\u3002"}),(0,n.jsx)(l.default,{children:"\u9019\u6b21\u7684\u6982\u5ff5\u662f\u7531\u4e0a\u5b78\u671f\u6240\u5ef6\u4f38\uff0c\u4e0a\u5b78\u671f\u7684\u4e3b\u984c\u662f\u4e0d\u8981\u628a\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\uff0c\u800c\u65b0\u5ef6\u4f38\u51fa\u7684\u554f\u984c\u662f\u300c\u8981\u5982\u4f55\u5340\u5206\u81ea\u6211\u8207\u60f3\u6cd5?\u300d\uff0c\u601d\u8003\u904e\u5f8c\u6240\u5f97\u51fa\u7684\u7d50\u8ad6\u662f\uff0c\u5168\u90e8\u7684\u60f3\u6cd5\uff0c\u7686\u53ef\u4ee5\u62c6\u5206\u70ba\u300c\u5b9a\u7fa9\u300d\u8207\u300c\u95dc\u4fc2\u300d\uff0c\u300c\u5b9a\u7fa9\u300d\u662f\u6307\u67d0\u500b\u500b\u9ad4\u3001\u5f62\u8c61\u3001\u6982\u5ff5\u7b49\u7684\u898f\u7bc4\u3001\u7bc4\u570d\uff0c\u6bd4\u5982\u8aaa\uff0c\u300c\u6211\u300d\u53ef\u662f\u8aaa\u662f\u4e00\u7a2e\u5b9a\u7fa9\uff0c\u5340\u5206\u6211\u8207\u4ed6\u8005\u7684\u4e0d\u540c\uff0c\u800c\u300c\u95dc\u4fc2\u300d\u5373\u662f\u6bcf\u500b\u5b9a\u7fa9\u4e4b\u9593\u7684\u95dc\u806f\uff0c\u6bd4\u5982\u8aaa\uff0c\u300c\u6211\u559c\u6b61\u5929\u7a7a\u300d\u5373\u662f\u5169\u500b\u5b9a\u7fa9\u4e4b\u9593\u7684\u95dc\u4fc2\u3002"}),(0,n.jsx)(l.default,{children:"\u5982\u679c\u5c07\u4e0a\u8ff0\u7684\u6587\u5b57\uff0c\u8f49\u5316\u70ba\u5716\u50cf\uff0c\u6bcf\u500b\u300c\u5b9a\u7fa9\u300d\u5373\u662f\u4e00\u500b\u9ede\u6216\u662f\u5713\uff0c\u800c\u300c\u95dc\u4fc2\u300d\u5373\u662f\u4e32\u806f\u8d77\u6bcf\u500b\u9ede\u7684\u7dda\uff0c\u63a5\u8457\uff0c\u5982\u679c\u8a8d\u540c\u300c\u81ea\u6211\u662f\u5168\u90e8\u60f3\u6cd5\u7684\u7e3d\u548c\u300d\uff0c\u9ede\u8207\u7dda\u4e32\u8d77\u4f86\u7684\u7d50\u69cb\uff0c\u5c31\u53ef\u4ee5\u8aaa\u662f\u300c\u81ea\u6211\u300d\u3002"}),(0,n.jsx)(l.default,{children:"\u5f88\u591a\u4eba\u6703\u7528\u300c\u500b\u300d\u7576\u4f5c\u60f3\u6cd5\u7684\u55ae\u4f4d\uff0c\u4f46\u6211\u89ba\u5f97\u4e26\u4e0d\u7cbe\u78ba\uff0c\u56e0\u70ba\u5be6\u969b\u4e0a\u60f3\u6cd5\u7e3d\u662f\u6709\u8457\u524d\u5f8c\u95dc\u4fc2\uff0c\u7121\u6cd5\u78ba\u5207\u7684\u5340\u5206\u4e00\u500b\u60f3\u6cd5\u7684\u754c\u7dda\uff0c\u4ee5\u524d\u5f8c\u95dc\u4fc2\u4f86\u8aaa\u7684\u8a71\uff0c\u7528\u300c\u4e32\u300d\u4f86\u505a\u70ba\u60f3\u6cd5\u7684\u91cf\u8a5e\u66f4\u9069\u7576\uff0c\u4f46\u60f3\u6cd5\u7e3d\u662f\u6703\u6709\u5206\u652f\uff0c\u6216\u8a31\u662f\u7db2\u72c0\u7684\u601d\u8003\u65b9\u5f0f\uff0c\u4f46\u300c\u4e32\u300d\u7684\u5b9a\u7fa9\u4e26\u4e0d\u4fb7\u9650\u5728\u4e00\u689d\u7dda\u4e0a\u3002"})]}),(0,n.jsx)(i.default,{col:1,mCol:1,title:"Storyboard",links:["projectM002.video_10_s"]}),(0,n.jsx)(a.default,{children:(0,n.jsx)(l.default,{children:"\u5916\u754c\u523a\u6fc0\u2192\u81ea\u6211\u751f\u6210\u2192\u521d\u6b21\u5efa\u7acb\u81ea\u6211\u6982\u5ff5\u2192\u8a66\u5716\u8207\u5916\u754c\u63a5\u89f8\u2192\u4e0d\u5920\u7a69\u5b9a\u7684\u81ea\u6211\u9020\u6210\u9023\u7d50\u5931\u6557\u2192\u4e26\u4e14\u5f15\u97ff\u81ea\u6211\u2192\u56de\u6b78\u5167\u5728\u4e16\u754c\u53cd\u8986\u4fee\u6b63\u2192\u5efa\u7acb\u7a69\u5b9a\u7684\u81ea\u6211\u6982\u5ff5\u2192\u6210\u529f\u5efa\u7acb\u826f\u597d\u9023\u7d50"})}),(0,n.jsx)(i.default,{col:1,mCol:1,title:"Styleframe",links:["projectM002.video_11_s"]}),(0,n.jsxs)(c.default,{children:[(0,n.jsx)("p",{children:"Director : \u912d\u8a52\u8b19 1000 Cheng"}),(0,n.jsx)("p",{children:"Music : Trip Music - Deep Inside"})]})]})}},8833:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/entanglement",function(){return r(897)}])},9231:function(e,t,r){"use strict";t.ZP=void 0;var n=o(r(7095));function o(e){return e&&e.__esModule?e:{default:e}}n.default,o(r(2659)).default;var i=n.default;t.ZP=i},7095:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=c(r(8679)),i=c(r(2659));function c(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=()=>{};var p=function(e,t,r){void 0===r&&(r={disconnectOnLeave:!1});var c=(0,n.forwardRef)(((t,r)=>{var o,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({forwardedRef:r},(o=e).prototype&&o.prototype.isReactComponent&&!(e=>"function"===typeof e&&!(e.prototype&&e.prototype.render))(e)?{ref:r}:{});return n.default.createElement(e,s({},t,i))})),u=e=>{var{onEnterViewport:o=d,onLeaveViewport:u=d}=e,l=a(e,["onEnterViewport","onLeaveViewport"]),f=(0,n.useRef)(),{inViewport:p,enterCount:v,leaveCount:y}=(0,i.default)(f,t,r,{onEnterViewport:o,onLeaveViewport:u});return n.default.createElement(c,s({},l,{inViewport:p,enterCount:v,leaveCount:y,ref:f}))},p=e.displayName||e.name||"Component";return u.displayName="handleViewport("+p+")",(0,o.default)(u,c)};t.default=p},2659:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=r(3935),i=function(e,t,r,i){void 0===r&&(r={disconnectOnLeave:!1});var{onEnterViewport:c,onLeaveViewport:u}=i,[,a]=(0,n.useState)(),s=(0,n.useRef)(),l=(0,n.useRef)(!1),f=(0,n.useRef)(!1),d=(0,n.useRef)(0),p=(0,n.useRef)(0);function v(e){var t=e[0]||{},{isIntersecting:n,intersectionRatio:o}=t,i="undefined"!==typeof n?n:o>0;if(!f.current&&i)return f.current=!0,c&&c(),d.current+=1,l.current=i,void a(i);f.current&&!i&&(f.current=!1,u&&u(),r.disconnectOnLeave&&s.current&&s.current.disconnect(),p.current+=1,l.current=i,a(i))}return(0,n.useEffect)((()=>{var r=s.current;return function(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.observe(i))}}({observerRef:r=function(e){var{observerRef:r}=e;return r||(s.current=new IntersectionObserver(v,t),s.current)}({observerRef:r})}),()=>{!function(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.unobserve(i))}null==r||r.disconnect(),s.current=null}({observerRef:r})}}),[e.current,t,r,c,u]),{inViewport:l.current,enterCount:d.current,leaveCount:p.current}};t.default=i}},function(e){e.O(0,[774,296,126,959,459,599,888,179],(function(){return t=8833,e(e.s=t);var t}));var t=e.O();_N_E=t}]);