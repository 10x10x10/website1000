(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5955],{3349:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},6610:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},5991:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},7608:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},5255:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return o}})},6089:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return i}});var o=n(3349);function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?(0,o.Z)(e):t}},18:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},2167:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var i=o(n(7294)),a=n(9414),c=n(4651),u=n(7426),s={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=(0,c.useRouter)(),f=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=(t=i.Children.only(v))&&"object"===typeof t&&t.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),w=r(x,2),k=w[0],j=w[1],_=i.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);(0,i.useEffect)((function(){var e=j&&n&&(0,a.isLocalURL)(p),t="undefined"!==typeof b?b:o&&o.locale,r=s[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,j,b,n,o]);var E={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:c}))}(e,o,p,d,y,h,m,b)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof b?b:o&&o.locale,O=o&&o.isLocaleDomain&&(0,a.getDomainLocale)(d,L,o&&o.locales,o&&o.domainLocales);E.href=O||(0,a.addBasePath)((0,a.addLocale)(d,L,o&&o.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},1078:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7757),o=n.n(r),i=n(2137),a=n(5893),c=(n(7294),n(5697)),u=n.n(c),s=n(9260),l=n.n(s),f=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":161,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[500,500],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"t":80,"s":[100]}],"ix":1,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":80,"s":[100]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[90]},{"t":80,"s":[270]}],"ix":3,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"m":2,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":2,"ix":4,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":160,"st":0,"bm":0}],"markers":[]}');function p(e){var t=e.isLoading,n=(0,a.jsx)("div",{className:"loading-conatiner",children:(0,a.jsx)(l(),{animationData:f,style:{width:64,height:64},loop:!0,autoplay:!0})});return t?n:null}p.propTypes={isLoading:u().bool.isRequired},p.defaultProps={isLoading:!1},p.getInitialProps=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.defaultProps);case 1:case"end":return e.stop()}}),e)})));var d=p},1e3:function(e,t,n){"use strict";n.r(t);var r=n(7757),o=n.n(r),i=n(2137),a=n(5893),c=n(18),u=n(7294),s=n(4184),l=n.n(s),f=n(1078),p=/(.+)\?\[(\d+)[x*](\d+)\]/;function d(e){var t=e.link,n=e.classes,r=e.position,o=e.enableLoading,i=(0,u.useState)(!0),s=i[0],d=i[1],v=function(e){var t=e.match(p);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(t),y=v.urlLink,h=v.width,m=v.height,b=(0,u.createRef)();return(0,u.useEffect)((function(){var e=function(){d(!1)};switch(b.current.nodeName){case"IMG":var t=b.current;t.complete?e():t.onload=e;break;case"VIDEO":var n=b.current;console.log(),n.readyState>=3?e():n.onloadeddata=e}})),(0,a.jsxs)("div",{ref:e.forwardedRef,style:{position:r,inset:0,paddingTop:"".concat(m/h*100,"%")},className:l()("media-item",{"media-show":!e.forwardedRef||e.enterCount>0}),children:[function(){var e=function(e,t){var n=e.toLowerCase();return t.some((function(e){return n.endsWith(e)}))};return e(y,[".mp4"])?(0,a.jsx)("video",{ref:b,className:l().apply(void 0,["media-video"].concat((0,c.Z)(n),[{loading:s}])),src:y,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):e(y,[".png",".jpg",".jpeg"])?(0,a.jsx)("img",{ref:b,className:l().apply(void 0,["media-img"].concat((0,c.Z)(n),[{loading:s}])),src:y,loading:"lazy",width:"100%",alt:"",title:""}):e(y,[".gif"])?(0,a.jsx)("img",{ref:b,className:l().apply(void 0,["media-gif"].concat((0,c.Z)(n),[{loading:s}])),src:y,loading:"lazy",width:"100%",alt:"",title:""}):null}(),o?(0,a.jsx)(f.default,{isLoading:s}):null]})}d.defaultProps={link:"",classes:[],position:"relative",enableLoading:!0},d.getInitialProps=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.defaultProps);case 1:case"end":return e.stop()}}),e)}))),t.default=d},6822:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),o=n(6610),i=n(5991),a=n(5255),c=n(6089),u=n(7608),s=n(7294),l=n(1664),f=n(9459),p=n(1e3);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}function v(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.filter((function(e){return e.type===t}));if(n>0){var o=[];for(var i in r)o.push(r[i]);return v(r),r.slice(0,n)}return r}var h=function(e){(0,a.Z)(n,e);var t=d(n);function n(e){var r;(0,o.Z)(this,n);var i=(r=t.call(this,e)).props,a=i.projectType,c=i.randomPick;return r.state={showProjects:y(f.o8.projects,a,c)},r}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.state.showProjects;return(0,r.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,r.jsx)(l.default,{href:e.link,children:(0,r.jsxs)("a",{className:"project-view",children:[(0,r.jsx)(p.default,{link:e.cover,classes:["cover"]}),(0,r.jsx)(p.default,{link:e.hover,classes:["hover"],position:"absolute",enableLoading:!1}),(0,r.jsx)("div",{className:"title-container",children:(0,r.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),n}(s.Component)},6870:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ProjectViewList",function(){return n(6822)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[9774,296,126,9459,2888,179],(function(){return t=6870,e(e.s=t);var t}));var t=e.O();_N_E=t}]);