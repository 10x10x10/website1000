(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{4772:function(e,t,n){"use strict";n.d(t,{W:function(){return s},$:function(){return u}});var r=n(5893),i=n(18),c=n(9459),o=n(4184),a=n.n(o),s=function(e){for(var t=e.split("."),n=c.aT,r=0;r<t.length;r++)n=n[t[r]];return n},l=/(.+)\?\[(\d+)[x*](\d+)\]/;function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=function(e){var t=e.match(l);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}},c=function(e,t){var n=e.toLowerCase();return t.some((function(e){return n.endsWith(e)}))},o=n(e),s=o.urlLink;o.width,o.height;return c(s,[".mp4"])?(0,r.jsx)("video",{className:a().apply(void 0,["media-video"].concat((0,i.Z)(t))),src:s,loading:"lazy",autoPlay:!0,loop:!0,muted:!0,playsInline:"",width:"100%",type:"video/mp4"}):c(s,[".png",".jpg",".jpeg"])?(0,r.jsx)("img",{className:a().apply(void 0,["media-img"].concat((0,i.Z)(t))),src:s,loading:"lazy",width:"100%",alt:"",title:""}):c(s,[".gif"])?(0,r.jsx)("img",{className:a().apply(void 0,["media-gif"].concat((0,i.Z)(t))),src:s,loading:"lazy",width:"100%",alt:"",title:""}):null}},9390:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),i=n(6610),c=n(5991),o=n(3349),a=n(5255),s=n(6089),l=n(7608),u=n(6156),d=n(7294),f=n(4184),h=n.n(f);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var v=function(e){(0,a.Z)(n,e);var t=p(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,u.Z)((0,o.Z)(r),"toggleHandler",(function(e){var t=r.state.isFold;r.setState({isFold:!t})})),r.state={isFold:!0},r}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,n=t.foldable,i=t.children,c=h()("credit-list",n?{fold:e,unfold:!e}:{});return(0,r.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,r.jsx)("h2",{children:"Credits"}),(0,r.jsx)("div",{className:c,children:i}),n&&e?(0,r.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),n}(d.Component);v.defaultProps={foldable:!1}},841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(4772));function c(e){var t=e.link,n=void 0===t?"":t;return(0,r.jsx)("div",{className:"video-container",children:(0,r.jsx)("iframe",{src:(0,i.W)(n),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(9459));function c(e){var t=i.a5.links,n=i.a5.description,c=i.a5.copyright;return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,r.jsx)("a",{href:e.link,children:(0,r.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("p",{children:c})]})}},2374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(9008));function c(e){var t="UA-171392879-1";return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,r.jsx)("script",{children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},7810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),i=n(6156),c=(n(7294),n(9008)),o=n(2374),a=n(9459);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t,n=e.type,i=e.id,s=a.Bm.defaultProjectMetaData;switch(n){case"project":(t=a.o8.projects.find((function(e){return e.id==i}))||{}).ogImage=t.cover;break;case"index":t=a.Bm.indexMetaData;break;case"lab":t=a.Bm.labMetaData;break;case"about":t=a.Bm.aboutMetaData;break;default:t={}}var u=l(l(l({},s),t),{},{title:t.title?"".concat(t.title," | ").concat(s.title):"".concat(s.title)||"--"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{}),(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("link",{rel:"icon",href:u.icon}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("meta",{name:"author",content:u.author}),(0,r.jsx)("meta",{property:"og:type",content:u.ogType}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:image",content:u.ogImage}),(0,r.jsx)("meta",{property:"og:site_name",content:u.ogSiteName}),(0,r.jsx)("meta",{property:"og:url",content:u.ogUrl})]})]})}},4053:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(6610),c=n(5991),o=n(3349),a=n(5255),s=n(6089),l=n(7608),u=n(6156),d=n(7294),f=n(1664),h=n(9459),p=n(4184),v=n.n(p);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var m=function(e){(0,a.Z)(n,e);var t=j(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,u.Z)((0,o.Z)(r),"handleScroll",(function(e){var t=document.documentElement.scrollTop,n=r.lastScrollTop-t;if(r.lastScrollTop=t,Math.abs(n)>10){var i=n<=0;r.setState({hideHeader:i})}})),(0,u.Z)((0,o.Z)(r),"toggleHeaderLinkHandler",(function(){var e=r.state.showHeaderLink;r.setState({showHeaderLink:!e})})),r.state={showHeaderLink:!1,hideHeader:0},r.lastScrollTop=0,r}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.type,t=this.state,n=t.showHeaderLink,i=t.hideHeader;return(0,r.jsxs)("div",{className:v()("header",{"falling-down-header":i}),children:[(0,r.jsx)("div",{className:"title-conatainer",children:(0,r.jsx)(f.default,{href:h.hu.links[0].link,children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/logo/logo.svg"})})})}),(0,r.jsx)("div",{className:"flex-space"}),(0,r.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:n?(0,r.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,r.jsx)("img",{src:"/icons/menu.svg"})}),(0,r.jsx)("div",{className:v()("header-link-container",{"m-header-link-container-show":n}),onClick:this.toggleHeaderLinkHandler,children:h.hu.links.map((function(t,n){var i=t.type===e;return(0,r.jsxs)("div",{className:"header-link-item",children:[(0,r.jsx)(f.default,{href:i?"":t.link,children:(0,r.jsx)("a",{className:v()("header-link",{"header-link-active":i}),children:t.title})}),n+1<h.hu.links.length?(0,r.jsx)("span",{className:"header-link-spliter",children:"|"}):null]},t.link)}))})]})}}]),n}(d.Component)},2994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),i=n(6156),c=(n(7294),n(4184)),o=n.n(c),a=n(4772);function s(e){var t=e.links,n=void 0===t?"":t,c=e.title,s=void 0===c?"":c,l=e.col,u=void 0===l?0:l,d=e.mCol,f=void 0===d?u:d;return(0,r.jsxs)("div",{className:"media-list-container",children:[s?(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:s})}):null,(0,r.jsx)("div",{className:o()("grid-c",function(e,t){var n,r="grid-c"+e,c="m-grid-c"+t;return n={},(0,i.Z)(n,r,!0),(0,i.Z)(n,c,!0),n}(u,f)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,a.W)(e)})).filter((function(e){return void 0!==e}))}(n).map((function(e){return(0,r.jsx)("div",{className:"media-container",children:(0,a.$)(e)},e)}))})]})}},7599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),i=(n(7294),n(4053)),c=n(8018),o=n(7810),a=n(6822);function s(e){var t=e.id,n=e.children;return(0,r.jsxs)("div",{className:"convert-selection",children:[(0,r.jsx)(o.default,{type:"project",id:t}),(0,r.jsx)(i.default,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"project-container",children:[n,(0,r.jsxs)("div",{className:"related-project-container",children:[(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:"Other Projects"})}),(0,r.jsx)(a.default,{projectType:"default",randomPick:3})]})]})}),(0,r.jsx)(c.default,{})]})}},6822:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(6610),c=n(5991),o=n(5255),a=n(6089),s=n(7608),l=n(7294),u=n(1664),d=n(9459),f=n(4772);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}function p(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.filter((function(e){return e.type===t}));if(n>0){var i=[];for(var c in r)i.push(r[c]);return p(r),r.slice(0,n)}return r}var j=function(e){(0,o.Z)(n,e);var t=h(n);function n(e){var r;(0,i.Z)(this,n);var c=(r=t.call(this,e)).props,o=c.projectType,a=c.randomPick;return r.state={showProjects:v(d.o8.projects,o,a)},r}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.state.showProjects;return(0,r.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,r.jsx)(u.default,{href:e.link,children:(0,r.jsxs)("a",{className:"project-view",children:[(0,r.jsx)("div",{className:"pseudo-cover"}),(0,r.jsx)("img",{src:e.cover,className:"cover",alt:"",title:""}),(0,f.$)(e.hover,["hover"]),(0,r.jsx)("div",{className:"title-container",children:(0,r.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),n}(l.Component)},5080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"project-text-container",children:t})}},4730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("p",{className:"text-content convert-selection",children:t})}},3119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("h2",{className:"text-title convert-selection",children:t})}},3663:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),i=(n(7294),n(7599)),c=n(2994),o=n(9390),a=n(841),s=n(5080),l=n(3119),u=n(4730);function d(e){return(0,r.jsxs)(i.default,{id:"project013",children:[(0,r.jsx)(a.default,{link:"project013.video_main"}),(0,r.jsxs)(s.default,{children:[(0,r.jsx)(l.default,{children:"ROG Phone 5 Launch Event Countdown Video"}),(0,r.jsx)(u.default,{children:"\u9019\u662f\u4e00\u652f\u5168\u4e16\u754c\u5f15\u9838\u671f\u76fc\u7684\u96fb\u7af6\u624b\u6a5f\u2014\u2014ROG PHONE 5\uff0c\u662f\u4e00\u6b3e\u6548\u80fd\u6975\u4f73\u7684\u96fb\u7af6\u624b\u6a5f\u3002"}),(0,r.jsx)(u.default,{children:"\u9019\u6b21\u7684TextContent\u54c1\u767c\u8868\u5f9e\u5f71\u50cf\u5448\u73fe\u5230\u624b\u6a5f\u7684\u958b\u7bb1\u9ad4\u9a57\uff0c\u5f9e\u5f71\u50cf\u62cd\u651d\u3001\u52d5\u756b\u88fd\u4f5c\u5230\u4e92\u52d5\u88fd\u4f5c\uff0c \u90fd\u6709\u5922\u60f3\u7684\u5168\u9762\u53c3\u8207\uff0c\u52a0\u4e0a\u5c08\u6848\u7e3d\u76e3\u88fd Freaks 4U Gaming \u8207\u5404\u570b KOL \u7684\u806f\u5408\u7af6\u8cfd\uff0c\u5c07\u7dda\u4e0a\u7dda\u4e0b\u7684\u9ad4\u9a57\u9023\u6210\u4e00\u6c23\u3002"})]}),(0,r.jsx)(c.default,{col:3,mCol:1,title:"Motion",links:["project013.video_01","project013.video_02","project013.video_04","project013.video_05","project013.video_06","project013.video_07","project013.video_10","project013.video_11","project013.video_12","project013.video_15","project013.video_17","project013.video_19"]}),(0,r.jsxs)(o.default,{children:[(0,r.jsx)("p",{children:"Client : ASUS Republic of Gamers"}),(0,r.jsx)("p",{children:"Production : MoonShine Animation"}),(0,r.jsx)("p",{children:"Motion Design : 1000 Cheng, Li Feng Cheng"})]})]})}},6776:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/rog-phone5-countdown",function(){return n(3663)}])}},function(e){e.O(0,[515,459,774,888,179],(function(){return t=6776,e(e.s=t);var t}));var t=e.O();_N_E=t}]);