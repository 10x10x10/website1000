(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572,807,979,149],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},3349:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},2137:function(e,t,r){"use strict";function n(e,t,r,n,o,u,a){try{var i=e[u](a),c=i.value}catch(f){return void r(f)}i.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,u){var a=e.apply(t,r);function i(e){n(a,o,u,i,c,"next",e)}function c(e){n(a,o,u,i,c,"throw",e)}i(void 0)}))}}r.d(t,{Z:function(){return o}})},6610:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:function(){return n}})},5991:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,{Z:function(){return o}})},7608:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,{Z:function(){return n}})},5255:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,{Z:function(){return o}})},6089:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,{Z:function(){return u}});var o=r(3349);function u(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?(0,o.Z)(e):t}},18:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||a()}},4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var u=typeof r;if("string"===u||"number"===u)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===u)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(e){return n.isMemo(e)?a:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=a;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var a=s(r);l&&(a=a.concat(l(r)));for(var i=c(t),v=c(r),b=0;b<a.length;++b){var m=a[b];if(!u[m]&&(!n||!n[m])&&(!v||!v[m])&&(!i||!i[m])){var h=p(r,m);try{f(t,m,h)}catch(g){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,h=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case l:case u:case i:case a:case d:return e;default:switch(e=e&&e.$$typeof){case f:case p:case b:case v:case c:return e;default:return t}}case o:return t}}}function j(e){return w(e)===l}t.AsyncMode=s,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=u,t.Lazy=b,t.Memo=v,t.Portal=o,t.Profiler=i,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return j(e)||w(e)===s},t.isConcurrentMode=j,t.isContextConsumer=function(e){return w(e)===f},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===u},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===v},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===l||e===i||e===a||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===v||e.$$typeof===c||e.$$typeof===f||e.$$typeof===p||e.$$typeof===h||e.$$typeof===g||e.$$typeof===O||e.$$typeof===m)},t.typeOf=w},1296:function(e,t,r){"use strict";e.exports=r(6103)},2167:function(e,t,r){"use strict";var n=r(3038),o=r(862);t.default=void 0;var u=o(r(7294)),a=r(9414),i=r(4651),c=r(7426),f={};function s(e,t,r,n){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var l=function(e){var t,r=!1!==e.prefetch,o=(0,i.useRouter)(),l=u.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),r=n(t,2),u=r[0],i=r[1];return{href:u,as:e.as?(0,a.resolveHref)(o,e.as):i||u}}),[o,e.href,e.as]),p=l.href,d=l.as,y=e.children,v=e.replace,b=e.shallow,m=e.scroll,h=e.locale;"string"===typeof y&&(y=u.default.createElement("a",null,y));var g=(t=u.Children.only(y))&&"object"===typeof t&&t.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),w=n(O,2),j=w[0],S=w[1],P=u.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);(0,u.useEffect)((function(){var e=S&&r&&(0,a.isLocalURL)(p),t="undefined"!==typeof h?h:o&&o.locale,n=f[p+"%"+d+(t?"%"+t:"")];e&&!n&&s(o,p,d,{locale:t})}),[d,p,S,h,r,o]);var M={ref:P,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:u,locale:c,scroll:i}))}(e,o,p,d,v,b,m,h)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof h?h:o&&o.locale,C=o&&o.isLocaleDomain&&(0,a.getDomainLocale)(d,_,o&&o.locales,o&&o.domainLocales);M.href=C||(0,a.addBasePath)((0,a.addLocale)(d,_,o&&o.defaultLocale))}return u.default.cloneElement(t,M)};t.default=l},7426:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,c=(0,o.useRef)(),f=(0,o.useState)(!1),s=n(f,2),l=s[0],p=s[1],d=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),r||l||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){a.delete(e),u.unobserve(e),0===a.size&&(u.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,l]);return(0,o.useEffect)((function(){if(!a&&!l){var e=(0,u.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,u.cancelIdleCallback)(e)}}}),[l]),[d,l]};var o=r(7294),u=r(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},u=r(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,u=e.hasQuery,a=void 0!==u&&u;return r||o&&a}},2775:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var u,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),i=(u=r(3244))&&u.__esModule?u:{default:u},c=r(3398),f=r(1165),s=r(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var y=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var u=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?u=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?u=!1:t.add(o.type);break;case"meta":for(var c=0,f=y.length;c<f;c++){var s=y[c];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?u=!1:r.add(s);else{var l=o.props[s],p=n[s]||new Set;"name"===s&&a||!p.has(l)?(p.add(l),n[s]=p):u=!1}}}return u}}()).reverse().map((function(e,r){var u=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,a.default.cloneElement(e,i)}return a.default.cloneElement(e,{key:u})}))}var b=function(e){var t=e.children,r=(0,a.useContext)(c.AmpStateContext),n=(0,a.useContext)(f.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};t.default=b},3244:function(e,t,r){"use strict";var n=r(319),o=r(4575),u=r(3913),a=(r(1506),r(2205)),i=r(8585),c=r(9754);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var s=r(7294),l=function(e){a(r,e);var t=f(r);function r(e){var u;return o(this,r),(u=t.call(this,e))._hasHeadManager=void 0,u.emitChange=function(){u._hasHeadManager&&u.props.headManager.updateHead(u.props.reduceComponentsToState(n(u.props.headManager.mountedInstances),u.props))},u._hasHeadManager=u.props.headManager&&u.props.headManager.mountedInstances,u}return u(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(s.Component);t.default=l},9008:function(e,t,r){e.exports=r(2775)},1664:function(e,t,r){e.exports=r(2167)},9231:function(e,t,r){"use strict";t.ZP=void 0;var n=o(r(7095));function o(e){return e&&e.__esModule?e:{default:e}}n.default,o(r(2659)).default;var u=n.default;t.ZP=u},7095:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=a(r(8679)),u=a(r(2659));function a(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=()=>{};var d=function(e,t,r){void 0===r&&(r={disconnectOnLeave:!1});var a=(0,n.forwardRef)(((t,r)=>{var o,u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({forwardedRef:r},(o=e).prototype&&o.prototype.isReactComponent&&!(e=>"function"===typeof e&&!(e.prototype&&e.prototype.render))(e)?{ref:r}:{});return n.default.createElement(e,f({},t,u))})),i=e=>{var{onEnterViewport:o=p,onLeaveViewport:i=p}=e,s=c(e,["onEnterViewport","onLeaveViewport"]),l=(0,n.useRef)(),{inViewport:d,enterCount:y,leaveCount:v}=(0,u.default)(l,t,r,{onEnterViewport:o,onLeaveViewport:i});return n.default.createElement(a,f({},s,{inViewport:d,enterCount:y,leaveCount:v,ref:l}))},d=e.displayName||e.name||"Component";return i.displayName="handleViewport("+d+")",(0,o.default)(i,a)};t.default=d},2659:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=r(3935),u=function(e,t,r,u){void 0===r&&(r={disconnectOnLeave:!1});var{onEnterViewport:a,onLeaveViewport:i}=u,[,c]=(0,n.useState)(),f=(0,n.useRef)(),s=(0,n.useRef)(!1),l=(0,n.useRef)(!1),p=(0,n.useRef)(0),d=(0,n.useRef)(0);function y(e){var t=e[0]||{},{isIntersecting:n,intersectionRatio:o}=t,u="undefined"!==typeof n?n:o>0;if(!l.current&&u)return l.current=!0,a&&a(),p.current+=1,s.current=u,void c(u);l.current&&!u&&(l.current=!1,i&&i(),r.disconnectOnLeave&&f.current&&f.current.disconnect(),d.current+=1,s.current=u,c(u))}return(0,n.useEffect)((()=>{var r=f.current;return function(t){var{observerRef:r}=t,n=e.current;if(n){var u=(0,o.findDOMNode)(n);u&&(null==r||r.observe(u))}}({observerRef:r=function(e){var{observerRef:r}=e;return r||(f.current=new IntersectionObserver(y,t),f.current)}({observerRef:r})}),()=>{!function(t){var{observerRef:r}=t,n=e.current;if(n){var u=(0,o.findDOMNode)(n);u&&(null==r||r.unobserve(u))}null==r||r.disconnect(),f.current=null}({observerRef:r})}}),[e.current,t,r,a,i]),{inViewport:s.current,enterCount:p.current,leaveCount:d.current}};t.default=u}}]);