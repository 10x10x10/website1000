(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{8679:function(e,r,t){"use strict";var n=t(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function a(e){return n.isMemo(e)?c:u[e.$$typeof]||o}u[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[n.Memo]=c;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,v=Object.prototype;e.exports=function e(r,t,n){if("string"!==typeof t){if(v){var o=p(t);o&&o!==v&&e(r,o,n)}var c=l(t);f&&(c=c.concat(f(t)));for(var u=a(r),y=a(t),m=0;m<c.length;++m){var j=c[m];if(!i[j]&&(!n||!n[j])&&(!y||!y[j])&&(!u||!u[j])){var h=d(t,j);try{s(r,j,h)}catch(b){}}}}return r}},6103:function(e,r){"use strict";var t="function"===typeof Symbol&&Symbol.for,n=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,c=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,a=t?Symbol.for("react.provider"):60109,s=t?Symbol.for("react.context"):60110,l=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,d=t?Symbol.for("react.forward_ref"):60112,p=t?Symbol.for("react.suspense"):60113,v=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,m=t?Symbol.for("react.lazy"):60116,j=t?Symbol.for("react.block"):60121,h=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118,x=t?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case l:case f:case i:case u:case c:case p:return e;default:switch(e=e&&e.$$typeof){case s:case d:case m:case y:case a:return e;default:return r}}case o:return r}}}function g(e){return O(e)===f}r.AsyncMode=l,r.ConcurrentMode=f,r.ContextConsumer=s,r.ContextProvider=a,r.Element=n,r.ForwardRef=d,r.Fragment=i,r.Lazy=m,r.Memo=y,r.Portal=o,r.Profiler=u,r.StrictMode=c,r.Suspense=p,r.isAsyncMode=function(e){return g(e)||O(e)===l},r.isConcurrentMode=g,r.isContextConsumer=function(e){return O(e)===s},r.isContextProvider=function(e){return O(e)===a},r.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return O(e)===d},r.isFragment=function(e){return O(e)===i},r.isLazy=function(e){return O(e)===m},r.isMemo=function(e){return O(e)===y},r.isPortal=function(e){return O(e)===o},r.isProfiler=function(e){return O(e)===u},r.isStrictMode=function(e){return O(e)===c},r.isSuspense=function(e){return O(e)===p},r.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===u||e===c||e===p||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===h||e.$$typeof===b||e.$$typeof===x||e.$$typeof===j)},r.typeOf=O},1296:function(e,r,t){"use strict";e.exports=t(6103)},4772:function(e,r,t){"use strict";t.d(r,{W:function(){return o}});var n=t(9459),o=function(e){for(var r=e.split("."),t=n.aT,o=0;o<r.length;o++)t=t[r[o]];return t}},9390:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var n=t(5893),o=t(6610),i=t(5991),c=t(3349),u=t(5255),a=t(6089),s=t(7608),l=t(6156),f=t(7294),d=t(4184),p=t.n(d);function v(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,s.Z)(e);if(r){var o=(0,s.Z)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,a.Z)(this,t)}}var y=function(e){(0,u.Z)(t,e);var r=v(t);function t(e){var n;return(0,o.Z)(this,t),n=r.call(this,e),(0,l.Z)((0,c.Z)(n),"toggleHandler",(function(e){var r=n.state.isFold;n.setState({isFold:!r})})),n.state={isFold:!0},n}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.state.isFold,r=this.props,t=r.foldable,o=r.children,i=p()("credit-list",t?{fold:e,unfold:!e}:{});return(0,n.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,n.jsx)("h2",{children:"Credits"}),(0,n.jsx)("div",{className:i,children:o}),t&&e?(0,n.jsx)("p",{className:"credit-more",children:"More"}):null]})}}]),t}(f.Component);y.defaultProps={foldable:!1}},841:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return i}});var n=t(5893),o=(t(7294),t(4772));function i(e){var r=e.link,t=void 0===r?"":r;return(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)("iframe",{src:(0,o.W)(t),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},2994:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(5893),o=t(6156),i=(t(7294),t(4184)),c=t.n(i),u=t(4772),a=t(1e3),s=(0,t(9231).ZP)(a.default);function l(e){var r=e.links,t=void 0===r?"":r,i=e.title,a=void 0===i?"":i,l=e.col,f=void 0===l?0:l,d=e.mCol,p=void 0===d?f:d;return(0,n.jsxs)("div",{className:"media-list-container",children:[a?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:a})}):null,(0,n.jsx)("div",{className:c()("grid-c",function(e,r){var t,n="grid-c"+e,i="m-grid-c"+r;return t={},(0,o.Z)(t,n,!0),(0,o.Z)(t,i,!0),t}(f,p)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return e.startsWith("http")?e:(0,u.W)(e)})).filter((function(e){return void 0!==e}))}(t).map((function(e){return(0,n.jsx)("div",{className:"media-container",children:(0,n.jsx)(s,{link:e})},e)}))})]})}},5080:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}});var n=t(5893);t(7294);function o(e){var r=e.children;return(0,n.jsx)("div",{className:"project-text-container",children:r})}},4730:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}});var n=t(5893);t(7294);function o(e){var r=e.children;return(0,n.jsx)("p",{className:"text-content convert-selection",children:r})}},3119:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}});var n=t(5893);t(7294);function o(e){var r=e.children;return(0,n.jsx)("h2",{className:"text-title convert-selection",children:r})}},730:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(5893),o=(t(7294),t(7599)),i=t(2994),c=t(9390),u=t(841),a=t(5080),s=t(3119),l=t(4730);function f(e){return(0,n.jsxs)(o.default,{id:"project004",children:[(0,n.jsx)(u.default,{link:"project004.video_main"}),(0,n.jsxs)(a.default,{children:[(0,n.jsx)(s.default,{children:"Pony5ibe - They said ft.\u9673\u5afa\u975c \u3010Animated Music Video\u3011"}),(0,n.jsx)(l.default,{children:"\u4ee5\u5206\u5272\u756b\u9762\u8b93\u89c0\u8005\u5728\u540c\u4e00\u6642\u9593\u770b\u898b\u4e0d\u540c\u6642\u7a7a\u7684\u6545\u4e8b\uff0c\u5973\u4e3b\u8207\u7537\u4e3b\u5728\u4e00\u689d\u76f8\u540c\u7684\u300c\u9053\u8def\u300d\u884c\u8d70\uff0c\u4e0d\u904e\u5f7c\u6b64\u7684\u51fa\u767c\u5730\u3001\u51fa\u767c\u7684\u8d77\u56e0\u3001\u6642\u7a7a\u90fd\u4e0d\u76f8\u540c\u3002\u800c\u4ed6\u5011\u5728\u9053\u8def\u4e2d\u900f\u904e\u5149\u7684\u5f62\u5f0f\u5c0d\u8a71\u3002"}),(0,n.jsx)(l.default,{children:"\u5728\u89c0\u8005\u7684\u6642\u9593\u7dda\u8996\u89d2\u4f86\u770b\uff0c\u7537\u4e3b\u5df2\u7d93\u6b77\u904e\u4e00\u6b21\u6574\u500b\u9053\u8def\uff0c\u5728\u9019\u6bb5\u9053\u8def\u4ed6\u6c92\u6709\u5f97\u5230\u4efb\u4f55\u89ba\u9192\uff0c\u56e0\u6b64\u4ed6\u505a\u4e86\u4e00\u500b\u6c7a\u5b9a\uff0c\u4ed6\u56de\u982d\u518d\u6b21\u7d93\u6b77\u4e00\u5207\u3002\u800c\u5973\u4e3b\u662f\u525b\u525b\u9032\u5165\u9019\u6bb5\u9053\u8def\u7684\u4eba\uff0c\u5f9e\u521d\u59cb\u63a2\u7d22\u3002\u5169\u8005\u5728\u5c0d\u8a71\u7684\u904e\u7a0b\u4e2d\u6709\u8046\u807d\u3001\u6709\u601d\u8faf\u3001\u6709\u53cd\u7701\uff0c\u5f7c\u6b64\u7684\u60f3\u6cd5\u96d6\u4e0d\u540c\uff0c\u537b\u4e5f\u56e0\u70ba\u5f7c\u6b64\u5728\u300c\u9053\u8def\u300d\u4e0a\u7684\u5c0d\u8a71\u800c\u7522\u751f\u8b8a\u5316\u3002"}),(0,n.jsx)(l.default,{children:"\u6211\u8ca0\u8cac\u7684\u90e8\u5206\u662f\u88fd\u4f5c 2D \u7684\u52d5\u614b\u5f71\u50cf\uff0c\u9019\u6b21\u5275\u4f5c\u8a08\u756b\u5e7e\u4e4e\u6c92\u6709\u4efb\u4f55\u7684\u9650\u5236\uff0c\u6211\u7279\u5225\u559c\u6b61\u9019\u7a2e\u72c0\u614b \u2500\u2500\u300c\u5728\u6211\u505a\u51fa\u4f86\u4e4b\u524d\uff0c\u6211\u6c38\u9060\u4e0d\u77e5\u9053\u6211\u6700\u5f8c\u6703\u505a\u51fa\u4ec0\u9ebc\u300d\u7684\u611f\u89ba\u3002\u5c0d\u6211\u4f86\u8aaa\uff0c\u5982\u679c\u88fd\u4f5c\u5f71\u50cf\u6642\u4e0d\u5177\u6709\u5be6\u9a57\u6027\uff0c\u90a3\u5c31\u592a\u904e\u4e4f\u5473\u4e86\u3002"}),(0,n.jsx)(l.default,{children:"\u53cd\u8986\u5730\u807d\u8457\u6b4c\u66f2\uff0c\u8b93\u81ea\u5df1\u6c89\u6d78\u5176\u4e2d\uff0c\u76f4\u5230\u8166\u6d77\u4e2d\u6d6e\u73fe\u5f71\u50cf\uff0c\u6700\u5f8c\u6191\u8457\u76f4\u89ba\u5275\u4f5c\uff0c\u904e\u7a0b\u6240\u5e36\u4f86\u7684\u8208\u596e\u611f\u8207\u6eff\u8db3\u611f\uff0c\u4e5f\u8a31\u662f\u6301\u7e8c\u5275\u4f5c\u6700\u91cd\u8981\u7684\u52d5\u529b\u5427\u3002"})]}),(0,n.jsx)(i.default,{col:2,mCol:1,links:["project004.video_09","project004.video_10"]}),(0,n.jsx)(i.default,{col:1,title:"2D Motion Design",links:["project004.video_01","project004.video_02"]}),(0,n.jsx)(i.default,{col:2,mCol:1,links:["project004.video_03","project004.video_04","project004.video_05","project004.video_06","project004.video_07","project004.video_08"]}),(0,n.jsxs)(c.default,{children:[(0,n.jsx)("p",{children:"Director : Parker Shen \u6c88\u5bb6\u7def"}),(0,n.jsx)("p",{children:"Producer : Xue 0 \u5442\u5b78\u9716"}),(0,n.jsx)("p",{children:"Lead 3D Designer : Roll + \u6881\u82e5\u5609"}),(0,n.jsx)("p",{children:"Character Concept Artist : Xite \u5433\u5609\u9032"}),(0,n.jsx)("p",{children:"Character Designer : LoiSup \u8cf4\u4fca\u5091\u3001River Lin \u6797\u8a60\u9806"}),(0,n.jsx)("p",{children:"Scene Designer : Roll + \u6881\u82e5\u5609\u3001Parker Shen \u6c88\u5bb6\u7def"}),(0,n.jsx)("p",{children:"3D Animator : River Lin \u6797\u8a60\u9806\u3001Parker Shen \u6c88\u5bb6\u7def \u3001Roll + \u6881\u82e5\u5609"}),(0,n.jsx)("p",{children:"2D Motion Designer : 1000 Cheng \u912d\u8a52\u8b19"}),(0,n.jsx)("p",{children:"Compositor : Roll + \u6881\u82e5\u5609 \u3001 Parker Shen \u6c88\u5bb6\u7def"}),(0,n.jsx)("p",{children:"Visual Designer : Xue 0 \u5442\u5b78\u9716"})]})]})}},5407:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/pip-mv-pony5ibe",function(){return t(730)}])},9231:function(e,r,t){"use strict";r.ZP=void 0;var n=o(t(7095));function o(e){return e&&e.__esModule?e:{default:e}}n.default,o(t(2659)).default;var i=n.default;r.ZP=i},7095:function(e,r,t){"use strict";r.__esModule=!0,r.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=u();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(t,o,i):t[o]=e[o]}t.default=e,r&&r.set(e,t);return t}(t(7294)),o=c(t(8679)),i=c(t(2659));function c(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d=()=>{};var p=function(e,r,t){void 0===t&&(t={disconnectOnLeave:!1});var c=(0,n.forwardRef)(((r,t)=>{var o,i=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({forwardedRef:t},(o=e).prototype&&o.prototype.isReactComponent&&!(e=>"function"===typeof e&&!(e.prototype&&e.prototype.render))(e)?{ref:t}:{});return n.default.createElement(e,s({},r,i))})),u=e=>{var{onEnterViewport:o=d,onLeaveViewport:u=d}=e,l=a(e,["onEnterViewport","onLeaveViewport"]),f=(0,n.useRef)(),{inViewport:p,enterCount:v,leaveCount:y}=(0,i.default)(f,r,t,{onEnterViewport:o,onLeaveViewport:u});return n.default.createElement(c,s({},l,{inViewport:p,enterCount:v,leaveCount:y,ref:f}))},p=e.displayName||e.name||"Component";return u.displayName="handleViewport("+p+")",(0,o.default)(u,c)};r.default=p},2659:function(e,r,t){"use strict";r.__esModule=!0,r.default=void 0;var n=t(7294),o=t(3935),i=function(e,r,t,i){void 0===t&&(t={disconnectOnLeave:!1});var{onEnterViewport:c,onLeaveViewport:u}=i,[,a]=(0,n.useState)(),s=(0,n.useRef)(),l=(0,n.useRef)(!1),f=(0,n.useRef)(!1),d=(0,n.useRef)(0),p=(0,n.useRef)(0);function v(e){var r=e[0]||{},{isIntersecting:n,intersectionRatio:o}=r,i="undefined"!==typeof n?n:o>0;if(!f.current&&i)return f.current=!0,c&&c(),d.current+=1,l.current=i,void a(i);f.current&&!i&&(f.current=!1,u&&u(),t.disconnectOnLeave&&s.current&&s.current.disconnect(),p.current+=1,l.current=i,a(i))}return(0,n.useEffect)((()=>{var t=s.current;return function(r){var{observerRef:t}=r,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==t||t.observe(i))}}({observerRef:t=function(e){var{observerRef:t}=e;return t||(s.current=new IntersectionObserver(v,r),s.current)}({observerRef:t})}),()=>{!function(r){var{observerRef:t}=r,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==t||t.unobserve(i))}null==t||t.disconnect(),s.current=null}({observerRef:t})}}),[e.current,r,t,c,u]),{inViewport:l.current,enterCount:d.current,leaveCount:p.current}};r.default=i}},function(e){e.O(0,[9774,296,126,4959,9459,7599,2888,179],(function(){return r=5407,e(e.s=r);var r}));var r=e.O();_N_E=r}]);