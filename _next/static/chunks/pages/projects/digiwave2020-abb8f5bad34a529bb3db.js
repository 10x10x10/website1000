(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function s(e){return n.isMemo(e)?c:a[e.$$typeof]||o}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=c;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,v=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(v){var o=p(r);o&&o!==v&&e(t,o,n)}var c=u(r);f&&(c=c.concat(f(r)));for(var a=s(t),h=s(r),m=0;m<c.length;++m){var y=c[m];if(!i[y]&&(!n||!n[y])&&(!h||!h[y])&&(!a||!a[y])){var j=d(r,y);try{l(t,y,j)}catch(g){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,j=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function b(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case i:case a:case c:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case m:case h:case s:return e;default:return t}}case o:return t}}}function w(e){return b(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=i,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=a,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||b(e)===u},t.isConcurrentMode=w,t.isContextConsumer=function(e){return b(e)===l},t.isContextProvider=function(e){return b(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return b(e)===d},t.isFragment=function(e){return b(e)===i},t.isLazy=function(e){return b(e)===m},t.isMemo=function(e){return b(e)===h},t.isPortal=function(e){return b(e)===o},t.isProfiler=function(e){return b(e)===a},t.isStrictMode=function(e){return b(e)===c},t.isSuspense=function(e){return b(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===a||e===c||e===p||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===j||e.$$typeof===g||e.$$typeof===x||e.$$typeof===y)},t.typeOf=b},1296:function(e,t,r){"use strict";e.exports=r(6103)},4772:function(e,t,r){"use strict";r.d(t,{W:function(){return o}});var n=r(9459),o=function(e){for(var t=e.split("."),r=n.aT,o=0;o<t.length;o++)r=r[t[o]];return r}},9390:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),o=r(6610),i=r(5991),c=r(3349),a=r(5255),s=r(6089),l=r(7608),u=r(6156),f=r(7294),d=r(4184),p=r.n(d);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var h=function(e){(0,a.Z)(r,e);var t=v(r);function r(e){var n;return(0,o.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,c.Z)(n),"toggleHandler",(function(e){var t=n.state.isFold;n.setState({isFold:!t})})),n.state={isFold:!0},n}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,r=t.foldable,o=t.children,i=p()("credit-list",r?{fold:e,unfold:!e}:{});return(0,n.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,n.jsx)("h2",{children:"Credits"}),(0,n.jsx)("div",{className:i,children:o}),r&&e?(0,n.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),r}(f.Component);h.defaultProps={foldable:!1}},841:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),o=(r(7294),r(4772));function i(e){var t=e.link,r=void 0===t?"":t;return(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)("iframe",{src:(0,o.W)(r),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8018:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),o=(r(7294),r(9459));function i(e){var t=o.a5.links,r=o.a5.description,i=o.a5.copyright;return(0,n.jsxs)("div",{className:"footer",children:[(0,n.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,n.jsx)("a",{href:e.link,children:(0,n.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,n.jsx)("p",{children:r}),(0,n.jsx)("p",{children:i})]})}},2374:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),o=(r(7294),r(9008));function i(e){var t="UA-171392879-1";return(0,n.jsxs)(o.default,{children:[(0,n.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,n.jsx)("script",{children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},7810:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),o=r(6156),i=(r(7294),r(9008)),c=r(2374),a=r(9459);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){var t,r=e.type,o=e.id,s=a.Bm.defaultProjectMetaData;switch(r){case"project":(t=a.o8.projects.find((function(e){return e.id==o}))||{}).ogImage=t.cover;break;case"index":t=a.Bm.indexMetaData;break;case"lab":t=a.Bm.labMetaData;break;case"about":t=a.Bm.aboutMetaData;break;default:t={}}var u=l(l(l({},s),t),{},{title:t.title?"".concat(t.title," | ").concat(s.title):"".concat(s.title)||"--"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.default,{}),(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:u.title}),(0,n.jsx)("link",{rel:"icon",href:u.icon}),(0,n.jsx)("meta",{name:"description",content:u.description}),(0,n.jsx)("meta",{name:"author",content:u.author}),(0,n.jsx)("meta",{property:"og:type",content:u.ogType}),(0,n.jsx)("meta",{property:"og:title",content:u.title}),(0,n.jsx)("meta",{property:"og:description",content:u.description}),(0,n.jsx)("meta",{property:"og:image",content:u.ogImage}),(0,n.jsx)("meta",{property:"og:site_name",content:u.ogSiteName}),(0,n.jsx)("meta",{property:"og:url",content:u.ogUrl})]})]})}},4053:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(5893),o=r(6610),i=r(5991),c=r(3349),a=r(5255),s=r(6089),l=r(7608),u=r(6156),f=r(7294),d=r(1664),p=r(9459),v=r(4184),h=r.n(v);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var y=function(e){(0,a.Z)(r,e);var t=m(r);function r(e){var n;return(0,o.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,c.Z)(n),"handleScroll",(function(e){var t=document.documentElement.scrollTop,r=n.lastScrollTop-t;if(n.lastScrollTop=t,Math.abs(r)>10){var o=r<=0;n.setState({hideHeader:o})}})),(0,u.Z)((0,c.Z)(n),"toggleHeaderLinkHandler",(function(){var e=n.state.showHeaderLink;n.setState({showHeaderLink:!e})})),n.state={showHeaderLink:!1,hideHeader:0},n.lastScrollTop=0,n}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.type,t=this.state,r=t.showHeaderLink,o=t.hideHeader;return(0,n.jsxs)("div",{className:h()("header",{"falling-down-header":o}),children:[(0,n.jsx)("div",{className:"title-conatainer",children:(0,n.jsx)(d.default,{href:p.hu.links[0].link,children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:"/logo/logo.svg"})})})}),(0,n.jsx)("div",{className:"flex-space"}),(0,n.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:r?(0,n.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,n.jsx)("img",{src:"/icons/menu.svg"})}),(0,n.jsx)("div",{className:h()("header-link-container",{"m-header-link-container-show":r}),onClick:this.toggleHeaderLinkHandler,children:p.hu.links.map((function(t,r){var o=t.type===e;return(0,n.jsxs)("div",{className:"header-link-item",children:[(0,n.jsx)(d.default,{href:o?"":t.link,children:(0,n.jsx)("a",{className:h()("header-link",{"header-link-active":o}),children:t.title})}),r+1<p.hu.links.length?(0,n.jsx)("span",{className:"header-link-spliter",children:"|"}):null]},t.link)}))})]})}}]),r}(f.Component)},1e3:function(e,t,r){"use strict";r.r(t);var n=r(7757),o=r.n(n),i=r(2137),c=r(5893),a=r(18),s=(r(7294),r(4184)),l=r.n(s);function u(e){var t=e.link,r=e.classes,n=void 0===r?[]:r,o=/(.+)\?\[(\d+)[x*](\d+)\]/;return(0,c.jsx)("div",{ref:e.forwardedRef,className:l()("media-item",{"media-show":!e.forwardedRef||e.enterCount>0}),children:function(){var e=function(e,t){var r=e.toLowerCase();return t.some((function(e){return r.endsWith(e)}))},r=function(e){var t=e.match(o);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(t),i=r.urlLink;return r.width,r.height,e(i,[".mp4"])?(0,c.jsx)("video",{className:l().apply(void 0,["media-video"].concat((0,a.Z)(n))),src:i,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):e(i,[".png",".jpg",".jpeg"])?(0,c.jsx)("img",{className:l().apply(void 0,["media-img"].concat((0,a.Z)(n))),src:i,loading:"lazy",width:"100%",alt:"",title:""}):e(i,[".gif"])?(0,c.jsx)("img",{className:l().apply(void 0,["media-gif"].concat((0,a.Z)(n))),src:i,loading:"lazy",width:"100%",alt:"",title:""}):null}()})}u.getInitialProps=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{link:"",classes:[]});case 1:case"end":return e.stop()}}),e)}))),t.default=u},2994:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),o=r(6156),i=(r(7294),r(4184)),c=r.n(i),a=r(4772),s=r(1e3),l=(0,r(9231).ZP)(s.default);function u(e){var t=e.links,r=void 0===t?"":t,i=e.title,s=void 0===i?"":i,u=e.col,f=void 0===u?0:u,d=e.mCol,p=void 0===d?f:d;return(0,n.jsxs)("div",{className:"media-list-container",children:[s?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:s})}):null,(0,n.jsx)("div",{className:c()("grid-c",function(e,t){var r,n="grid-c"+e,i="m-grid-c"+t;return r={},(0,o.Z)(r,n,!0),(0,o.Z)(r,i,!0),r}(f,p)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,a.W)(e)})).filter((function(e){return void 0!==e}))}(r).map((function(e){return(0,n.jsx)("div",{className:"media-container",children:(0,n.jsx)(l,{link:e})},e)}))})]})}},7599:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),o=(r(7294),r(4053)),i=r(8018),c=r(7810),a=r(6822);function s(e){var t=e.id,r=e.children;return(0,n.jsxs)("div",{className:"convert-selection",children:[(0,n.jsx)(c.default,{type:"project",id:t}),(0,n.jsx)(o.default,{}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"project-container",children:[r,(0,n.jsxs)("div",{className:"related-project-container",children:[(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:"Other Projects"})}),(0,n.jsx)(a.default,{projectType:"default",randomPick:3})]})]})}),(0,n.jsx)(i.default,{})]})}},6822:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),o=r(6610),i=r(5991),c=r(5255),a=r(6089),s=r(7608),l=r(7294),u=r(1664),f=r(9459),d=r(1e3);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}function v(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.filter((function(e){return e.type===t}));if(r>0){var o=[];for(var i in n)o.push(n[i]);return v(n),n.slice(0,r)}return n}var m=function(e){(0,c.Z)(r,e);var t=p(r);function r(e){var n;(0,o.Z)(this,r);var i=(n=t.call(this,e)).props,c=i.projectType,a=i.randomPick;return n.state={showProjects:h(f.o8.projects,c,a)},n}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.state.showProjects;return(0,n.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,n.jsx)(u.default,{href:e.link,children:(0,n.jsxs)("a",{className:"project-view",children:[(0,n.jsx)("div",{className:"pseudo-cover"}),(0,n.jsx)(d.default,{link:e.cover,classes:["cover"]}),(0,n.jsx)(d.default,{link:e.hover,classes:["hover"]}),(0,n.jsx)("div",{className:"title-container",children:(0,n.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),r}(l.Component)},5080:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(e){var t=e.children;return(0,n.jsx)("div",{className:"project-text-container",children:t})}},4730:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(e){var t=e.children;return(0,n.jsx)("p",{className:"text-content convert-selection",children:t})}},3119:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(e){var t=e.children;return(0,n.jsx)("h2",{className:"text-title convert-selection",children:t})}},8046:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),o=(r(7294),r(7599)),i=r(2994),c=r(9390),a=r(841),s=r(5080),l=r(3119),u=r(4730);function f(e){return(0,n.jsxs)(o.default,{id:"project006",children:[(0,n.jsx)(a.default,{link:"project006.video_main"}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"DigiWave 2020\u300a\u9059\u8996 Clairvoyance\u300b"}),(0,n.jsx)(u.default,{children:"\u300c\u9059\u8996\u300d\u4e00\u8a5e\u70ba\u5c08\u6709\u540d\u8a5e\uff0c\u4fc2\u6307\u80fd\u8d85\u8d8a\u6b63\u5e38\u8996\u529b\u770b\u5230\u9059\u9060\u5f7c\u65b9\u3001\u751a\u81f3\u4e0d\u540c\u6642\u7a7a\u5916\u666f\u8c61\u7684\u7279\u6b8a\u73fe\u8c61\uff1b \u6211\u5011\u8a8d\u70ba\u6b64\u7fa9\u8cbc\u5207\u4e86\u5f62\u5bb9\u4e86\u6240\u6709\u5c0d\u65bc\u9059\u9060\u7684\u672a\u4f86\u6709\u8457\u7121\u76e1\u597d\u5947\uff0c\u4e0d\u65b7\u900f\u904e\u60f3\u50cf\u529b\u8207\u79d1\u6280\u63a8\u52d5\u8457\u4e16\u754c\u7684\u4eba\u5011\uff0c\u65bc\u662f\u4ee5\u6b64\u70ba\u4e3b\u984c\u6253\u9020\u4e86\u9019\u4ef6\u5de8\u5927\u7684\u5f71\u50cf\u4f5c\u54c1\u3002 \u9059\u8996\u7684\u8868\u73fe\u5f62\u5f0f\u4ee5\u5bec\u95ca\u7684\u7acb\u9762\u8207\u6975\u9577\u7684\u5730\u9762\u5f71\u50cf\u6240\u7d44\u6210\u3002 \u7acb\u9762\u7684\u9060\u65b9\uff0c\u662f\u6211\u5011\u9059\u671b\u4e9f\u6b32\u6240\u898b\u4e4b\u8655\uff0c\u8173\u4e0b\u7684\u5730\u9762\uff0c\u5247\u662f\u6211\u5011\u6240\u9014\u7d93\u4e4b\u8def\uff1b \u900f\u904e\u5feb\u901f\u5728\u4e0d\u540c\u7a7a\u9593\u3001\u6642\u9593\uff0c\u751a\u81f3\u662f\u7dad\u5ea6\u7684\u91cf\u7d1a\u4e0a\u8df3\u8e8d\uff0c\u5c07\u89c0\u8005\u7684\u5168\u90e8\u89c0\u611f\u62c9\u5165\u300c\u9032\u4f4d\u300d\u7684\u9ad4\u9a57\uff0c\u4e26\u4ee5\u6b64\u4f5c\u54c1\u5411\u5922\u60f3\u5bb6\u5011\u81f4\u656c\u3002"}),(0,n.jsx)(u.default,{children:"\u70ba\u5b9a\u7fa9\u6b64\u4f5c\u54c1\u7684\u7cbe\u795e\uff0c\u6211\u5011\u7559\u4e0b\u4e86\u4e00\u4e9b\u6587\u5b57\uff1a"}),(0,n.jsx)(u.default,{children:"\u9762\u524d\u662f\u4e00\u500b\u65b9\u6846\u3002"}),(0,n.jsx)(u.default,{children:"\u65b9\u6846\u88e1\u6c92\u6709\u6642\u9593\u8207\u7a7a\u9593\u7684\u9650\u5236\uff0c\u4efb\u7531\u4f60\u7684\u610f\u5ff5\u98c4\u79fb\u3002"}),(0,n.jsx)(u.default,{children:"\u5c07\u51fa\u73fe\u7684\u662f\u672a\u898b\u904e\u7684\u5f7c\u65b9\uff0c\u672a\u89e3\u7684\u8b0e\u5718\u3002"}),(0,n.jsx)(u.default,{children:"\u7576\u7136\u4e5f\u6709\u95dc\u65bc\u4f60\u81ea\u5df1\uff0c\u90a3\u4e9b\u5df2\u77e5\u7684\u904e\u53bb\u8207\u672a\u77e5\u7684\u672a\u4f86\u3002"}),(0,n.jsx)(u.default,{children:"\u6700\u5f8c\u756b\u9762\u9700\u8981\u505c\u4e0b\u6642\uff0c\u4f60\u6703\u9078\u64c7\u7559\u5728\u54ea\u4e00\u523b\uff1f"})]}),(0,n.jsx)(i.default,{col:2,links:["project006.video_01_s","project006.video_02_s","project006.video_03_s","project006.video_04_s"]}),(0,n.jsx)(i.default,{col:1,title:"Motion Graphics",links:["project006.video_05_s"]}),(0,n.jsx)(i.default,{col:3,mCol:2,links:["project006.video_06_s","project006.video_07_s","project006.video_08_s","project006.video_09_s","project006.video_10_s","project006.video_11_s"]}),(0,n.jsxs)(c.default,{children:[(0,n.jsx)("p",{children:"Producer : Ke Jyun Wu"}),(0,n.jsx)("p",{children:"Art Director : Ting-An Ho"}),(0,n.jsx)("p",{children:"Motion Graphics : Ting-An Ho, Ke Jyun Wu, 1000 Cheng, Mal Liu"}),(0,n.jsx)("p",{children:"Interaction System Design, Execution : @chwan1"}),(0,n.jsx)("p",{children:"Programming : chia Reng Tsai"}),(0,n.jsx)("p",{children:"Sound Design : Zhen-Yang Huang (Triodust)"})]})]})}},1973:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/digiwave2020",function(){return r(8046)}])},9231:function(e,t,r){"use strict";t.ZP=void 0;var n=o(r(7095));function o(e){return e&&e.__esModule?e:{default:e}}n.default,o(r(2659)).default;var i=n.default;t.ZP=i},7095:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=c(r(8679)),i=c(r(2659));function c(e){return e&&e.__esModule?e:{default:e}}function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=()=>{};var p=function(e,t,r){void 0===r&&(r={disconnectOnLeave:!1});var c=(0,n.forwardRef)(((t,r)=>{var o,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({forwardedRef:r},(o=e).prototype&&o.prototype.isReactComponent&&!(e=>"function"===typeof e&&!(e.prototype&&e.prototype.render))(e)?{ref:r}:{});return n.default.createElement(e,l({},t,i))})),a=e=>{var{onEnterViewport:o=d,onLeaveViewport:a=d}=e,u=s(e,["onEnterViewport","onLeaveViewport"]),f=(0,n.useRef)(),{inViewport:p,enterCount:v,leaveCount:h}=(0,i.default)(f,t,r,{onEnterViewport:o,onLeaveViewport:a});return n.default.createElement(c,l({},u,{inViewport:p,enterCount:v,leaveCount:h,ref:f}))},p=e.displayName||e.name||"Component";return a.displayName="handleViewport("+p+")",(0,o.default)(a,c)};t.default=p},2659:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=r(3935),i=function(e,t,r,i){void 0===r&&(r={disconnectOnLeave:!1});var{onEnterViewport:c,onLeaveViewport:a}=i,[,s]=(0,n.useState)(),l=(0,n.useRef)(),u=(0,n.useRef)(!1),f=(0,n.useRef)(!1),d=(0,n.useRef)(0),p=(0,n.useRef)(0);function v(e){var t=e[0]||{},{isIntersecting:n,intersectionRatio:o}=t,i="undefined"!==typeof n?n:o>0;if(!f.current&&i)return f.current=!0,c&&c(),d.current+=1,u.current=i,void s(i);f.current&&!i&&(f.current=!1,a&&a(),r.disconnectOnLeave&&l.current&&l.current.disconnect(),p.current+=1,u.current=i,s(i))}return(0,n.useEffect)((()=>{var r=l.current;return function(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.observe(i))}}({observerRef:r=function(e){var{observerRef:r}=e;return r||(l.current=new IntersectionObserver(v,t),l.current)}({observerRef:r})}),()=>{!function(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.unobserve(i))}null==r||r.disconnect(),l.current=null}({observerRef:r})}}),[e.current,t,r,c,a]),{inViewport:u.current,enterCount:d.current,leaveCount:p.current}};t.default=i}},function(e){e.O(0,[807,459,774,888,179],(function(){return t=1973,e(e.s=t);var t}));var t=e.O();_N_E=t}]);