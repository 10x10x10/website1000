(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function a(e){return n.isMemo(e)?c:u[e.$$typeof]||o}u[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[n.Memo]=c;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var u=a(t),v=a(r),m=0;m<c.length;++m){var b=c[m];if(!i[b]&&(!n||!n[b])&&(!v||!v[b])&&(!u||!u[b])){var h=p(r,b);try{s(t,b,h)}catch(j){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,h=r?Symbol.for("react.fundamental"):60117,j=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case i:case u:case c:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case m:case v:case a:return e;default:return t}}case o:return t}}}function g(e){return O(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=s,t.ContextProvider=a,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=m,t.Memo=v,t.Portal=o,t.Profiler=u,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return g(e)||O(e)===l},t.isConcurrentMode=g,t.isContextConsumer=function(e){return O(e)===s},t.isContextProvider=function(e){return O(e)===a},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===p},t.isFragment=function(e){return O(e)===i},t.isLazy=function(e){return O(e)===m},t.isMemo=function(e){return O(e)===v},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===u},t.isStrictMode=function(e){return O(e)===c},t.isSuspense=function(e){return O(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===u||e===c||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===v||e.$$typeof===a||e.$$typeof===s||e.$$typeof===p||e.$$typeof===h||e.$$typeof===j||e.$$typeof===x||e.$$typeof===b)},t.typeOf=O},1296:function(e,t,r){"use strict";e.exports=r(6103)},4772:function(e,t,r){"use strict";r.d(t,{W:function(){return o}});var n=r(9459),o=function(e){for(var t=e.split("."),r=n.aT,o=0;o<t.length;o++)r=r[t[o]];return r}},9390:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),o=r(6610),i=r(5991),c=r(3349),u=r(5255),a=r(6089),s=r(7608),l=r(6156),f=r(7294),p=r(4184),d=r.n(p);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var v=function(e){(0,u.Z)(r,e);var t=y(r);function r(e){var n;return(0,o.Z)(this,r),n=t.call(this,e),(0,l.Z)((0,c.Z)(n),"toggleHandler",(function(e){var t=n.state.isFold;n.setState({isFold:!t})})),n.state={isFold:!0},n}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,r=t.foldable,o=t.children,i=d()("credit-list",r?{fold:e,unfold:!e}:{});return(0,n.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,n.jsx)("h2",{children:"Credits"}),(0,n.jsx)("div",{className:i,children:o}),r&&e?(0,n.jsx)("p",{className:"credit-more",children:"More"}):null]})}}]),r}(f.Component);v.defaultProps={foldable:!1}},841:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),o=(r(7294),r(4772));function i(e){var t=e.link,r=void 0===t?"":t;return(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)("iframe",{src:(0,o.W)(r),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},2994:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),o=r(6156),i=(r(7294),r(4184)),c=r.n(i),u=r(4772),a=r(1e3),s=(0,r(9231).ZP)(a.default);function l(e){var t=e.links,r=void 0===t?"":t,i=e.title,a=void 0===i?"":i,l=e.col,f=void 0===l?0:l,p=e.mCol,d=void 0===p?f:p;return(0,n.jsxs)("div",{className:"media-list-container",children:[a?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:a})}):null,(0,n.jsx)("div",{className:c()("grid-c",function(e,t){var r,n="grid-c"+e,i="m-grid-c"+t;return r={},(0,o.Z)(r,n,!0),(0,o.Z)(r,i,!0),r}(f,d)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,u.W)(e)})).filter((function(e){return void 0!==e}))}(r).map((function(e){return(0,n.jsx)("div",{className:"media-container",children:(0,n.jsx)(s,{link:e})},e)}))})]})}},5080:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(e){var t=e.children;return(0,n.jsx)("div",{className:"project-text-container",children:t})}},4730:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(e){var t=e.children;return(0,n.jsx)("p",{className:"text-content convert-selection",children:t})}},3119:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(e){var t=e.children;return(0,n.jsx)("h2",{className:"text-title convert-selection",children:t})}},1694:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),o=(r(7294),r(7599)),i=r(2994),c=r(9390),u=r(841),a=r(5080),s=r(3119),l=r(4730);function f(e){return(0,n.jsxs)(o.default,{id:"projectM001",children:[(0,n.jsx)(u.default,{link:"projectM001.video_main"}),(0,n.jsxs)(a.default,{children:[(0,n.jsx)(s.default,{children:"SIMPLEX"}),(0,n.jsx)(l.default,{children:"Simplex \u662f simple \u8207 complex \u7684\u8907\u5408\u5b57\uff0c\u5b57\u9762\u4e0a\u7684\u610f\u601d\u662f\u300c\u7c21\u55ae\u7684\u8907\u96dc\u300d\uff0c\u96b1\u542b\u7684\u610f\u601d\u662f\u300c\u4eba\u300d\u3002 \u4f46\u5b83\u540c\u6642\u4e5f\u662f\u6578\u5b78\u4e0a\u7684\u5c08\u6709\u540d\u8a5e\uff0c\u610f\u65e8\u5728 n \u7dad\u7a7a\u9593\u4e2d\uff0c\u53d6 n+1 \u500b\u9ede\uff0c\u8b93\u9019\u4e9b\u9ede\u76f8\u4e92\u9023\u63a5\uff0c\u53ef\u69cb\u6210 Simplex\u3002 \u5728\u96f6\u5230\u4e09\u7dad\u7a7a\u9593\u4e2d\u7684 simplex\uff0c\u5206\u5225\u4ee3\u8868\u9ede\u3001\u7dda\u6bb5\u3001\u4e09\u89d2\u5f62\uff0c\u8207\u56db\u9762\u9ad4\u3002\u800c\u9019\u6b21\u52d5\u756b\u7684\u4e3b\u89d2\u5373\u662f\u4e09\u7dad\u7684 Simplex \u3002 \u4e00\u5982\u5f80\u5e38\u7684\u8a71\u53ea\u8aaa\u4e86\u4e00\u534a\uff0c\u7c21\u800c\u8a00\u4e4b\u662f\u5728\u63cf\u8ff0\u4eba\u8207\u60f3\u6cd5\u7684\u4e92\u52d5\u95dc\u4fc2\u3002"}),(0,n.jsx)(l.default,{children:'Simplex is a compound word of simple and complex, literally meaning "simple complexity", implied meaning "people." But it is also a mathematical term, meaning that in n-dimensional space, take n+1 points, and connect these points to each other to form Simplex. Simplex in zero to three-dimensional space, representing points, line segments, triangles, and tetrahedrons. The protagonist of this animation is the 3D Simplex. As usual, I only said half of it. In short, it describes the interaction between people and ideas.'})]}),(0,n.jsx)(i.default,{col:2,mCol:1,title:"Motion",links:["projectM001.video_01_s","projectM001.video_02_s","projectM001.video_03_s","projectM001.video_04_s"]}),(0,n.jsx)(i.default,{col:1,mCol:1,title:"Concept",links:["projectM001.video_05_s"]}),(0,n.jsxs)(a.default,{children:[(0,n.jsx)(l.default,{children:"\u4e0d\u8981\u628a\u4f60\u81ea\u5df1\u7684\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\uff0c\u662f\u53c3\u8003\u6700\u9ad8\u4f11\u606f\u6cd5\u9019\u672c\u66f8\uff0c\u6211\u64f7\u53d6\u51fa\u6211\u89ba\u5f97\u6709\u8da3\u7684\u5167\u5bb9\uff0c\u66f8\u4e2d\u7684\u6bd4\u55bb\u662f\u8aaa\uff0c\u4f60\u662f\u8eca\u7ad9\uff0c\u800c\u60f3\u6cd5\u662f\u4f86\u4f86\u53bb\u53bb\u7684\u5217\u8eca\uff0c\u4f46\u6211\u5011\u4e0d\u6703\u8aaa\uff0c\u5217\u8eca\u5c31\u662f\u8eca\u7ad9\u672c\u8eab\u3002\u5728\u95b1\u8b80\u9019\u500b\u7bc7\u7ae0\u6642\uff0c\u6211\u806f\u60f3\u5230\u4e00\u500b\u5fc3\u7406\u5b78\u7684\u5c08\u6709\u540d\u8a5e\u300c\u53ef\u611b\u4fb5\u7565\u6027\u300d\uff0c\u662f\u5728\u63cf\u8ff0\u6709\u4e00\u7fa4\u4eba\u6703\u5728\u770b\u5230\u53ef\u611b\u7684\u52d5\u7269\u6642\uff0c\u7522\u751f\u60f3\u8981\u634f\u6b7b\u4ed6\u7684\u5ff5\u982d\uff0c\u4f46\u7814\u7a76\u767c\u73fe\uff0c\u4e26\u4e0d\u662f\u9019\u4e9b\u4eba\u7279\u5225\u6709\u8b8a\u614b\uff0c\u800c\u662f\u56e0\u70ba\u5927\u8166\uff0c\u4e0d\u8ad6\u5728\u958b\u5fc3\u6216\u96e3\u904e\u6642\uff0c\u90fd\u50be\u5411\u8b93\u60c5\u7dd2\u8da8\u65bc\u5e73\u8861\uff0c\u56e0\u6b64\u5728\u958b\u5fc3\u7684\u6642\u5019\uff0c\u7522\u751f\u8ca0\u9762\u5ff5\u982d\uff0c\u53ea\u662f\u5927\u8166\u7684\u4e00\u500b\u6b63\u5e38\u6a5f\u5236\u3002\u6211\u89ba\u5f97\u9019\u4e5f\u61c9\u8b49\u4e86\u300c\u4e0d\u8981\u628a\u4f60\u7684\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\u300d\u3002"}),(0,n.jsx)(l.default,{children:"\u96d6\u7136\u4e00\u958b\u59cb\u662f\u4ee5\u300c\u4e0d\u8981\u628a\u4f60\u7684\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\u70ba\u4e3b\u984c\u300d\uff0c\u4f46\u5f8c\u4f86\u5728\u69cb\u601d\u6545\u4e8b\u7684\u904e\u7a0b\u4e2d\uff0c\u89ba\u5f97\u9019\u672c\u4f86\u5c31\u662f\u63cf\u8ff0\u51a5\u60f3\u7684\u5176\u4e2d\u4e00\u500b\u6982\u5ff5\uff0c\u6240\u4ee5\u5982\u679c\u9650\u7e2e\u5728\u9019\u88e1\uff0c\u6709\u4e9b\u72f9\u9698\uff0c\u56e0\u6b64\u5f8c\u4f86\u9084\u662f\u4ee5\u300c\u51a5\u60f3\u300d\u672c\u8eab\u70ba\u6982\u5ff5\u6838\u5fc3\u3002\u9019\u6b21\u60f3\u7528\u5e7e\u4f55\u5f62\u53bb\u5448\u73fe\u6545\u4e8b\uff0c\u6545\u4e8b\u5927\u7db1\u662f\uff0c\u4e3b\u89d2\u662f\u4e00\u500b\u4e09\u89d2\u5f62\uff0c\u4ed6\u63a5\u89f8\u5230\u8c61\u5fb5\u7684\u60f3\u6cd5\u7684\u5176\u4ed6\u5e7e\u4f55\u5f62\u6642\uff0c\u5c31\u6703\u56e0\u6b64\u8b8a\u5f62\uff0c\u539f\u672c\u5c0d\u60f3\u6cd5\u7684\u614b\u5ea6\u662f\u597d\u5947\u8208\u596e\u7684\uff0c\u4f46\u96a8\u8457\u60f3\u6cd5\u8d8a\u4f86\u8d8a\u591a\uff0c\u4ed6\u8d8a\u4f86\u8d8a\u7121\u6cd5\u5c08\u5fc3\uff0c\u5c31\u56e0\u6b64\u8b8a\u5f62\u5f97\u8d8a\u4f86\u8d8a\u5feb\uff0c\u76f4\u5230\u4ed6\u53d7\u4e0d\u4e86\u5d29\u6f70\u4e4b\u6642\uff0c\u4ed6\u9078\u64c7\u9589\u4e0a\u773c\u775b\uff0c\u56de\u6b78\u81ea\u5df1\u7684\u5167\u5fc3\uff0c\u900f\u904e\u51a5\u60f3\uff0c\u8abf\u6574\u81ea\u5df1\u7684\u547c\u5438\uff0c\u4ed6\u7684\u5167\u5fc3\u4e16\u754c\u624d\u6f38\u6f38\u5e73\u548c\u3002"})]}),(0,n.jsx)(i.default,{col:2,mCol:1,title:"Storyboard",links:["projectM001.video_06_s","projectM001.video_07_s"]}),(0,n.jsxs)(c.default,{children:[(0,n.jsx)("p",{children:"Director : \u912d\u8a52\u8b19 1000 Cheng"}),(0,n.jsx)("p",{children:"Music : \u5289\u7ffc\u7fec Yi-Huei Liou"})]})]})}},2294:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/simplex",function(){return r(1694)}])},9231:function(e,t,r){"use strict";t.ZP=void 0;var n=o(r(7095));function o(e){return e&&e.__esModule?e:{default:e}}n.default,o(r(2659)).default;var i=n.default;t.ZP=i},7095:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=c(r(8679)),i=c(r(2659));function c(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=()=>{};var d=function(e,t,r){void 0===r&&(r={disconnectOnLeave:!1});var c=(0,n.forwardRef)(((t,r)=>{var o,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({forwardedRef:r},(o=e).prototype&&o.prototype.isReactComponent&&!(e=>"function"===typeof e&&!(e.prototype&&e.prototype.render))(e)?{ref:r}:{});return n.default.createElement(e,s({},t,i))})),u=e=>{var{onEnterViewport:o=p,onLeaveViewport:u=p}=e,l=a(e,["onEnterViewport","onLeaveViewport"]),f=(0,n.useRef)(),{inViewport:d,enterCount:y,leaveCount:v}=(0,i.default)(f,t,r,{onEnterViewport:o,onLeaveViewport:u});return n.default.createElement(c,s({},l,{inViewport:d,enterCount:y,leaveCount:v,ref:f}))},d=e.displayName||e.name||"Component";return u.displayName="handleViewport("+d+")",(0,o.default)(u,c)};t.default=d},2659:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=r(3935),i=function(e,t,r,i){void 0===r&&(r={disconnectOnLeave:!1});var{onEnterViewport:c,onLeaveViewport:u}=i,[,a]=(0,n.useState)(),s=(0,n.useRef)(),l=(0,n.useRef)(!1),f=(0,n.useRef)(!1),p=(0,n.useRef)(0),d=(0,n.useRef)(0);function y(e){var t=e[0]||{},{isIntersecting:n,intersectionRatio:o}=t,i="undefined"!==typeof n?n:o>0;if(!f.current&&i)return f.current=!0,c&&c(),p.current+=1,l.current=i,void a(i);f.current&&!i&&(f.current=!1,u&&u(),r.disconnectOnLeave&&s.current&&s.current.disconnect(),d.current+=1,l.current=i,a(i))}return(0,n.useEffect)((()=>{var r=s.current;return function(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.observe(i))}}({observerRef:r=function(e){var{observerRef:r}=e;return r||(s.current=new IntersectionObserver(y,t),s.current)}({observerRef:r})}),()=>{!function(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.unobserve(i))}null==r||r.disconnect(),s.current=null}({observerRef:r})}}),[e.current,t,r,c,u]),{inViewport:l.current,enterCount:p.current,leaveCount:d.current}};t.default=i}},function(e){e.O(0,[774,296,126,959,459,599,888,179],(function(){return t=2294,e(e.s=t);var t}));var t=e.O();_N_E=t}]);