(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{4772:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});var n=r(9459),i=function(e){for(var t=e.split("."),r=n.aT,i=0;i<t.length;i++)r=r[t[i]];return r}},9390:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),i=r(6610),c=r(5991),o=r(3349),a=r(5255),s=r(6089),l=r(7608),u=r(6156),d=r(7294),f=r(4184),h=r.n(f);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var v=function(e){(0,a.Z)(r,e);var t=p(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,o.Z)(n),"toggleHandler",(function(e){var t=n.state.isFold;n.setState({isFold:!t})})),n.state={isFold:!0},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,r=t.foldable,i=t.children,c=h()("credit-list",r?{fold:e,unfold:!e}:{});return(0,n.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,n.jsx)("h2",{children:"Credits"}),(0,n.jsx)("div",{className:c,children:i}),r&&e?(0,n.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),r}(d.Component);v.defaultProps={foldable:!1}},841:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=(r(7294),r(4772));function c(e){var t=e.link,r=void 0===t?"":t;return(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)("iframe",{src:(0,i.W)(r),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8018:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=(r(7294),r(9459));function c(e){var t=i.a5.links,r=i.a5.description,c=i.a5.copyright;return(0,n.jsxs)("div",{className:"footer",children:[(0,n.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,n.jsx)("a",{href:e.link,children:(0,n.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,n.jsx)("p",{children:r}),(0,n.jsx)("p",{children:c})]})}},2374:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=(r(7294),r(9008));function c(e){var t="UA-171392879-1";return(0,n.jsxs)(i.default,{children:[(0,n.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,n.jsx)("script",{children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},7810:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),i=r(6156),c=(r(7294),r(9008)),o=r(2374),a=r(9459);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){var t,r=e.type,i=e.id,s=a.Bm.defaultProjectMetaData;switch(r){case"project":(t=a.o8.projects.find((function(e){return e.id==i}))||{}).ogImage=t.cover;break;case"index":t=a.Bm.indexMetaData;break;case"lab":t=a.Bm.labMetaData;break;case"about":t=a.Bm.aboutMetaData;break;default:t={}}var u=l(l(l({},s),t),{},{title:t.title?"".concat(t.title," | ").concat(s.title):"".concat(s.title)||"--"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{}),(0,n.jsxs)(c.default,{children:[(0,n.jsx)("title",{children:u.title}),(0,n.jsx)("link",{rel:"icon",href:u.icon}),(0,n.jsx)("meta",{name:"description",content:u.description}),(0,n.jsx)("meta",{name:"author",content:u.author}),(0,n.jsx)("meta",{property:"og:type",content:u.ogType}),(0,n.jsx)("meta",{property:"og:title",content:u.title}),(0,n.jsx)("meta",{property:"og:description",content:u.description}),(0,n.jsx)("meta",{property:"og:image",content:u.ogImage}),(0,n.jsx)("meta",{property:"og:site_name",content:u.ogSiteName}),(0,n.jsx)("meta",{property:"og:url",content:u.ogUrl})]})]})}},4053:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),i=r(6610),c=r(5991),o=r(3349),a=r(5255),s=r(6089),l=r(7608),u=r(6156),d=r(7294),f=r(1664),h=r(9459),p=r(4184),v=r.n(p);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var m=function(e){(0,a.Z)(r,e);var t=j(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,o.Z)(n),"handleScroll",(function(e){var t=document.documentElement.scrollTop,r=n.lastScrollTop-t;if(n.lastScrollTop=t,Math.abs(r)>10){var i=r<=0;n.setState({hideHeader:i})}})),(0,u.Z)((0,o.Z)(n),"toggleHeaderLinkHandler",(function(){var e=n.state.showHeaderLink;n.setState({showHeaderLink:!e})})),n.state={showHeaderLink:!1,hideHeader:0},n.lastScrollTop=0,n}return(0,c.Z)(r,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.type,t=this.state,r=t.showHeaderLink,i=t.hideHeader;return(0,n.jsxs)("div",{className:v()("header",{"falling-down-header":i}),children:[(0,n.jsx)("div",{className:"title-conatainer",children:(0,n.jsx)(f.default,{href:h.hu.links[0].link,children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:"/logo/logo.svg"})})})}),(0,n.jsx)("div",{className:"flex-space"}),(0,n.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:r?(0,n.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,n.jsx)("img",{src:"/icons/menu.svg"})}),(0,n.jsx)("div",{className:v()("header-link-container",{"m-header-link-container-show":r}),onClick:this.toggleHeaderLinkHandler,children:h.hu.links.map((function(t,r){var i=t.type===e;return(0,n.jsxs)("div",{className:"header-link-item",children:[(0,n.jsx)(f.default,{href:i?"":t.link,children:(0,n.jsx)("a",{className:v()("header-link",{"header-link-active":i}),children:t.title})}),r+1<h.hu.links.length?(0,n.jsx)("span",{className:"header-link-spliter",children:"|"}):null]},t.link)}))})]})}}]),r}(d.Component)},1e3:function(e,t,r){"use strict";r.r(t);var n=r(7757),i=r.n(n),c=r(2137),o=r(5893),a=r(18),s=(r(7294),r(4184)),l=r.n(s);function u(e){var t=e.link,r=e.classes,n=void 0===r?[]:r,i=/(.+)\?\[(\d+)[x*](\d+)\]/;return(0,o.jsx)(o.Fragment,{children:function(){var e=function(e,t){var r=e.toLowerCase();return t.some((function(e){return r.endsWith(e)}))},r=function(e){var t=e.match(i);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(t),c=r.urlLink;return r.width,r.height,e(c,[".mp4"])?(0,o.jsx)("video",{className:l().apply(void 0,["media-video"].concat((0,a.Z)(n))),src:c,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):e(c,[".png",".jpg",".jpeg"])?(0,o.jsx)("img",{className:l().apply(void 0,["media-img"].concat((0,a.Z)(n))),src:c,loading:"lazy",width:"100%",alt:"",title:""}):e(c,[".gif"])?(0,o.jsx)("img",{className:l().apply(void 0,["media-gif"].concat((0,a.Z)(n))),src:c,loading:"lazy",width:"100%",alt:"",title:""}):null}()})}u.getInitialProps=(0,c.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{link:"",classes:[]});case 1:case"end":return e.stop()}}),e)}))),t.default=u},2994:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),i=r(6156),c=(r(7294),r(4184)),o=r.n(c),a=r(4772),s=r(1e3);function l(e){var t=e.links,r=void 0===t?"":t,c=e.title,l=void 0===c?"":c,u=e.col,d=void 0===u?0:u,f=e.mCol,h=void 0===f?d:f;return(0,n.jsxs)("div",{className:"media-list-container",children:[l?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:l})}):null,(0,n.jsx)("div",{className:o()("grid-c",function(e,t){var r,n="grid-c"+e,c="m-grid-c"+t;return r={},(0,i.Z)(r,n,!0),(0,i.Z)(r,c,!0),r}(d,h)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,a.W)(e)})).filter((function(e){return void 0!==e}))}(r).map((function(e){return(0,n.jsx)("div",{className:"media-container",children:(0,n.jsx)(s.default,{link:e})},e)}))})]})}},7599:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),i=(r(7294),r(4053)),c=r(8018),o=r(7810),a=r(6822);function s(e){var t=e.id,r=e.children;return(0,n.jsxs)("div",{className:"convert-selection",children:[(0,n.jsx)(o.default,{type:"project",id:t}),(0,n.jsx)(i.default,{}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"project-container",children:[r,(0,n.jsxs)("div",{className:"related-project-container",children:[(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:"Other Projects"})}),(0,n.jsx)(a.default,{projectType:"default",randomPick:3})]})]})}),(0,n.jsx)(c.default,{})]})}},6822:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=r(6610),c=r(5991),o=r(5255),a=r(6089),s=r(7608),l=r(7294),u=r(1664),d=r(9459),f=r(1e3);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}function p(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.filter((function(e){return e.type===t}));if(r>0){var i=[];for(var c in n)i.push(n[c]);return p(n),n.slice(0,r)}return n}var j=function(e){(0,o.Z)(r,e);var t=h(r);function r(e){var n;(0,i.Z)(this,r);var c=(n=t.call(this,e)).props,o=c.projectType,a=c.randomPick;return n.state={showProjects:v(d.o8.projects,o,a)},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.state.showProjects;return(0,n.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,n.jsx)(u.default,{href:e.link,children:(0,n.jsxs)("a",{className:"project-view",children:[(0,n.jsx)("div",{className:"pseudo-cover"}),(0,n.jsx)(f.default,{link:e.cover,classes:["cover"]}),(0,n.jsx)(f.default,{link:e.hover,classes:["hover"]}),(0,n.jsx)("div",{className:"title-container",children:(0,n.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),r}(l.Component)},5080:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);r(7294);function i(e){var t=e.children;return(0,n.jsx)("div",{className:"project-text-container",children:t})}},4730:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);r(7294);function i(e){var t=e.children;return(0,n.jsx)("p",{className:"text-content convert-selection",children:t})}},3119:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);r(7294);function i(e){var t=e.children;return(0,n.jsx)("h2",{className:"text-title convert-selection",children:t})}},8444:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),i=(r(7294),r(7599)),c=r(2994),o=r(9390),a=r(841),s=r(5080),l=r(3119),u=r(4730);function d(e){return(0,n.jsxs)(i.default,{id:"project001",children:[(0,n.jsx)(a.default,{link:"project001.video_main"}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"TGIF \u53f0\u5317\u8a2d\u8a08\u96fb\u6ce2\uff5c\u570b\u969b\u8a2d\u8a08\u4ea4\u6d41\u5e74\u6703\u4e3b\u8996\u89ba\u5f71\u7247"}),(0,n.jsx)(u.default,{children:"\u300aTGIF \u53f0\u5317\u8a2d\u8a08\u96fb\u6ce2\u300b\u662f\u4e00\u5834\u57282019\u5e74\u8209\u8fa6\u7684\u570b\u969b\u8a2d\u8a08\u4ea4\u6d41\u5e74\u6703\uff0c\u9080\u8acb\u5168\u7403\u6a6b\u8de8\u5e73\u9762\u8a2d\u8a08\u3001\u8996\u89ba\u7279\u6548\u8207\u8207\u52d5\u614b\u8a2d\u8a08\u9818\u57df\u7684\u7ff9\u695a\u8207\u89c0\u773e\u9762\u5c0d\u9762\u5256\u6790\u8a2d\u8a08\uff0c\u5438\u53d6\u4f86\u81ea\u4e0d\u540c\u570b\u754c\u7684\u65b0\u77e5\uff0c\u4e26\u5c55\u793a\u672a\u4f86\u7684\u8a2d\u8a08\u8da8\u52e2\u3002"}),(0,n.jsx)(u.default,{children:"\u8a2d\u8a08\u96fb\u6ce2\u7684\u300c\u96fb\u6ce2\u300d\u4e00\u8a5e\u53d6\u6750\u81ea\u300a\u9054\u723e\u6587\u96fb\u6ce2\u300b\u4e00\u66f8\uff0c\u65e8\u5728\u8b1b\u8ff0\u6f14\u5316\u4e0d\u662f\u6f38\u8b8a\uff0c\u800c\u662f\u4e00\u7a2e\u77ac\u9593\u7684\u9032\u5316\uff0c\u5411\u8d85\u8d8a\u81ea\u8eab\u5e38\u8b58\u5916\u7684\u4e8b\u7269\u5b78\u7fd2\uff0c\u63a2\u7d22\u77e5\u8b58\u7684\u76e1\u982d\u3002\u570d\u7e5e\u6b64\u6982\u5ff5\u505a\u70ba\u767c\u60f3\uff0c\u52d5\u614b\u8207\u8a2d\u8a08\u4f7f\u7528\u4e0d\u65b7\u50b3\u64ad\u3001\u6253\u7834\u6846\u67b6\u4f5c\u70ba\u8996\u89ba\u610f\u8c61\uff0c\u5f9e\u53f0\u5317\u4e8c\u5b57\u51fa\u767c\uff0c\u4ee5\u6b64\u70ba\u4e2d\u5fc3\u767c\u51fa\u4e00\u6ce2\u6ce2\u7684\u5c04\u7dda\u4e0d\u65b7\u767c\u9001\uff0c\u6700\u7d42\u5851\u9020\u51fa\u4ee4\u4eba\u9a5a\u8c54\u7684\u5be6\u9a57\u6027\u8996\u89ba\u52d5\u756b\u3002"})]}),(0,n.jsx)(c.default,{col:2,links:["project001.video_01_s","project001.video_02_s","project001.video_03_s","project001.video_04_s"]}),(0,n.jsx)(c.default,{col:4,mCol:2,links:["project001.video_05_s","project001.video_06_s","project001.video_07_s","project001.video_08_s","project001.video_09_s","project001.video_10_s","project001.video_11_s","project001.video_12_s","project001.video_13_s","project001.video_14_s","project001.video_15_s","project001.video_16_s"]}),(0,n.jsxs)(o.default,{children:[(0,n.jsx)("p",{children:"Production : G.Production"}),(0,n.jsx)("p",{children:"Director : \u6797\u601d\u7ff0 Hans Lin"}),(0,n.jsx)("p",{children:"Storyboard Artist : \u4f55\u5ead\u5b89 Ting-An Ho\u3001\u9673\u67cf\u5c39 Bruce Chen"}),(0,n.jsx)("p",{children:"Designer : \u4f55\u5ead\u5b89 Ting-An Ho"}),(0,n.jsx)("p",{children:"Animator : \u9673\u67cf\u5c39 Bruce Chen"}),(0,n.jsx)("p",{children:"3D Animator : \u912d\u8a52\u8b19 1000 Cheng"}),(0,n.jsxs)("p",{children:["Music ","&"," Sound Production : \u7a7a\u6c23\u8f09\u9ad4 The AirCarrier"]}),(0,n.jsx)("p",{children:"Original Music : \u9ec3\u93ae\u6d0b Triodust"}),(0,n.jsx)("p",{children:"Sound Design : \u9ec3\u93ae\u6d0b Triodust"})]})]})}},6524:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/tgif2019",function(){return r(8444)}])}},function(e){e.O(0,[807,459,774,888,179],(function(){return t=6524,e(e.s=t);var t}));var t=e.O();_N_E=t}]);