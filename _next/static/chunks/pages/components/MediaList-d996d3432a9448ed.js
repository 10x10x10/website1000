(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[442],{8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function getStatics(e){return n.isMemo(e)?a:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var u=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,p=Object.prototype;function hoistNonReactStatics(e,t,r){if("string"!=typeof t){if(p){var n=d(t);n&&n!==p&&hoistNonReactStatics(e,n,r)}var o=c(t);l&&(o=o.concat(l(t)));for(var a=getStatics(e),s=getStatics(t),m=0;m<o.length;++m){var y=o[m];if(!i[y]&&!(r&&r[y])&&!(s&&s[y])&&!(a&&a[y])){var v=f(t,y);try{u(e,y,v)}catch(e){}}}}return e}e.exports=hoistNonReactStatics},1960:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/MediaList",function(){return r(7725)}])},1626:function(e,t,r){"use strict";r.d(t,{W:function(){return queryLink}});var n=r(8439);let queryLink=function(e){let t=e.split("."),r=n.aT;for(let e=0;e<t.length;e++)r=r[t[e]];return r}},4509:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893);r(7294);var o=r(5697),i=r.n(o),a=r(9260),s=r.n(a),u=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":161,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[500,500],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"t":80,"s":[100]}],"ix":1,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":80,"s":[100]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[90]},{"t":80,"s":[270]}],"ix":3,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"m":2,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":2,"ix":4,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":160,"st":0,"bm":0}],"markers":[]}');function Loading(e){let{isLoading:t}=e,r=(0,n.jsx)("div",{className:"loading-conatiner",children:(0,n.jsx)(s(),{animationData:u,style:{width:64,height:64},loop:!0,autoplay:!0})});return t?r:null}Loading.propTypes={isLoading:i().bool.isRequired},Loading.defaultProps={isLoading:!1},Loading.getInitialProps=async()=>Loading.defaultProps;var c=Loading},1230:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7294),i=r(5697),a=r.n(i),s=r(3967),u=r.n(s),c=r(4509);let l=/(.+)\?\[(\d+)[x*](\d+)\]/,getMediaInfo=e=>{let t=e.match(l);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}};function Media(e){let{link:t,classes:r,position:i,enableLoading:a}=e,[s,l]=(0,o.useState)(!0),{urlLink:f,width:d,height:p}=getMediaInfo(t),m=(0,o.createRef)();function getMediaContent(){let subExMatch=(e,t)=>{let r=e.toLowerCase();return t.some(e=>r.endsWith(e))};return subExMatch(f,[".mp4"])?(0,n.jsx)("video",{ref:m,className:u()("media-video",...r,{loading:s}),src:f,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):subExMatch(f,[".png",".jpg",".jpeg"])?(0,n.jsx)("img",{ref:m,className:u()("media-img",...r,{loading:s}),src:f,loading:"lazy",width:"100%",alt:"",title:""}):subExMatch(f,[".gif"])?(0,n.jsx)("img",{ref:m,className:u()("media-gif",...r,{loading:s}),src:f,loading:"lazy",width:"100%",alt:"",title:""}):null}return(0,o.useEffect)(()=>{let UpdateLoadingState=()=>{l(!1)};switch(m.current.nodeName){case"IMG":let e=m.current;e.complete?UpdateLoadingState():e.onload=UpdateLoadingState;break;case"VIDEO":let t=m.current;console.log(),t.readyState>=3?UpdateLoadingState():t.onloadeddata=UpdateLoadingState}}),(0,n.jsxs)("div",{ref:e.forwardedRef,style:{position:i,inset:0,paddingTop:"".concat(p/d*100,"%")},className:u()("media-item",{"media-show":!e.forwardedRef||e.enterCount>0}),children:[getMediaContent(),a?(0,n.jsx)(c.default,{isLoading:s}):null]})}Media.propTypes={link:a().string.isRequired,classes:a().arrayOf(a().string),position:a().oneOf(["relative","absolute"]),enableLoading:a().bool},Media.defaultProps={link:"",classes:[],position:"relative",enableLoading:!0},Media.getInitialProps=async()=>Media.defaultProps,t.default=Media},7725:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return MediaList}});var n=r(5893);r(7294);var o=r(3967),i=r.n(o),a=r(1626),s=r(1230),u=r(9231);let c=(0,u.ZP)(s.default);function MediaList(e){let{links:t="",title:r="",col:o=0,mCol:s=o}=e;function getLinks(e){return(!1===Array.isArray(e)?e.split(",").map(e=>e.trim()):e).filter(e=>""!==e&&!1===e.startsWith("//")).map(e=>e.startsWith("http")?e:(0,a.W)(e)).filter(e=>void 0!==e)}function getClass(e,t){return{["grid-c"+e]:!0,["m-grid-c"+t]:!0}}return(0,n.jsxs)("div",{className:"media-list-container",children:[r?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:r})}):null,(0,n.jsx)("div",{className:i()("grid-c",getClass(o,s)),children:getLinks(t).map(e=>(0,n.jsx)("div",{className:"media-container",children:(0,n.jsx)(c,{link:e})},e))})]})}},9231:function(e,t,r){"use strict";t.ZP=void 0;var n=_interopRequireDefault(r(7095));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}n.default,_interopRequireDefault(r(2659)).default;var o=n.default;t.ZP=o},1319:function(e,t){"use strict";t.__esModule=!0,t.noop=t.defaultProps=t.defaultOptions=t.defaultConfig=void 0,t.defaultOptions={},t.defaultConfig={disconnectOnLeave:!1};var noop=()=>{};t.noop=noop,t.defaultProps={onEnterViewport:noop,onLeaveViewport:noop}},7095:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=_interopRequireDefault(r(8679)),i=_interopRequireDefault(r(2659)),a=r(1319),s=r(5893),u=["onEnterViewport","onLeaveViewport"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var isFunctionalComponent=e=>"function"==typeof e&&!(e.prototype&&e.prototype.render),isReactComponent=e=>e.prototype&&e.prototype.isReactComponent;t.default=function(e,t,r){void 0===t&&(t=a.defaultOptions),void 0===r&&(r=a.defaultConfig);var c=(0,n.forwardRef)((t,r)=>{var n=_extends({forwardedRef:r},isReactComponent(e)&&!isFunctionalComponent(e)?{ref:r}:{});return(0,s.jsx)(e,_extends({},t,n))});function InViewport(e){var{onEnterViewport:o=a.noop,onLeaveViewport:l=a.noop}=e,f=_objectWithoutPropertiesLoose(e,u),d=(0,n.useRef)(),{inViewport:p,enterCount:m,leaveCount:y}=(0,i.default)(d,t,r,{onEnterViewport:o,onLeaveViewport:l}),v=_extends({},f,{inViewport:p,enterCount:m,leaveCount:y});return(0,s.jsx)(c,_extends({},v,{ref:d}))}var l=e.displayName||e.name||"Component";return InViewport.displayName="handleViewport("+l+")",(0,o.default)(InViewport,c)}},2659:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=r(3935),i=r(1319);t.default=function(e,t,r,a){void 0===t&&(t=i.defaultOptions),void 0===r&&(r=i.defaultConfig),void 0===a&&(a=i.defaultProps);var{onEnterViewport:s,onLeaveViewport:u}=a,[,c]=(0,n.useState)(),l=(0,n.useRef)(),f=(0,n.useRef)(!1),d=(0,n.useRef)(!1),p=(0,n.useRef)(0),m=(0,n.useRef)(0);function startObserver(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.observe(i))}}function stopObserver(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.unobserve(i))}null==r||r.disconnect(),l.current=null}function handleIntersection(e){var{isIntersecting:t,intersectionRatio:n}=e[0]||{},o=void 0!==t?t:n>0;if(!d.current&&o){d.current=!0,null==s||s(),p.current+=1,f.current=o,c(o);return}d.current&&!o&&(d.current=!1,null==u||u(),r.disconnectOnLeave&&l.current&&l.current.disconnect(),m.current+=1,f.current=o,c(o))}function initIntersectionObserver(e){var{observerRef:r}=e;return r||(l.current=new IntersectionObserver(handleIntersection,t),l.current)}return(0,n.useEffect)(()=>{var e=l.current;return startObserver({observerRef:e=initIntersectionObserver({observerRef:e})}),()=>{stopObserver({observerRef:e})}},[e.current,t,r,s,u]),{inViewport:f.current,enterCount:p.current,leaveCount:m.current}}},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,x=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,h=r?Symbol.for("react.scope"):60119;function z(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case i:case s:case a:case p:return e;default:switch(e=e&&e.$$typeof){case c:case d:case v:case y:case u:return e;default:return t}}case o:return t}}}function A(e){return z(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=u,t.Element=n,t.ForwardRef=d,t.Fragment=i,t.Lazy=v,t.Memo=y,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return A(e)||z(e)===l},t.isConcurrentMode=A,t.isContextConsumer=function(e){return z(e)===c},t.isContextProvider=function(e){return z(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return z(e)===d},t.isFragment=function(e){return z(e)===i},t.isLazy=function(e){return z(e)===v},t.isMemo=function(e){return z(e)===y},t.isPortal=function(e){return z(e)===o},t.isProfiler=function(e){return z(e)===s},t.isStrictMode=function(e){return z(e)===a},t.isSuspense=function(e){return z(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===s||e===a||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===u||e.$$typeof===c||e.$$typeof===d||e.$$typeof===x||e.$$typeof===b||e.$$typeof===h||e.$$typeof===g)},t.typeOf=z},9864:function(e,t,r){"use strict";e.exports=r(9921)},3967:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function classNames(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=appendClass(e,parseValue(r)))}return e}function parseValue(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return classNames.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=appendClass(t,r));return t}function appendClass(e,t){return t?e?e+" "+t:e+t:e}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(r=(function(){return classNames}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[296,9890,8439,9774,2888,179],function(){return e(e.s=1960)}),_N_E=e.O()}]);