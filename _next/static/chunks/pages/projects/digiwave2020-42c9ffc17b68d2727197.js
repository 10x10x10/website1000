(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{4772:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(9459),i=function(e){for(var t=e.split("."),n=r.aT,i=0;i<t.length;i++)n=n[t[i]];return n}},9390:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),i=n(6610),c=n(5991),a=n(3349),o=n(5255),s=n(6089),l=n(7608),u=n(6156),d=n(7294),f=n(4184),h=n.n(f);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var v=function(e){(0,o.Z)(n,e);var t=p(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,u.Z)((0,a.Z)(r),"toggleHandler",(function(e){var t=r.state.isFold;r.setState({isFold:!t})})),r.state={isFold:!0},r}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,n=t.foldable,i=t.children,c=h()("credit-list",n?{fold:e,unfold:!e}:{});return(0,r.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,r.jsx)("h2",{children:"Credits"}),(0,r.jsx)("div",{className:c,children:i}),n&&e?(0,r.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),n}(d.Component);v.defaultProps={foldable:!1}},841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(4772));function c(e){var t=e.link,n=void 0===t?"":t;return(0,r.jsx)("div",{className:"video-container",children:(0,r.jsx)("iframe",{src:(0,i.W)(n),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(9459));function c(e){var t=i.a5.links,n=i.a5.description,c=i.a5.copyright;return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,r.jsx)("a",{href:e.link,children:(0,r.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("p",{children:c})]})}},2374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(9008));function c(e){var t="UA-171392879-1";return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,r.jsx)("script",{children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},7810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),i=n(6156),c=(n(7294),n(9008)),a=n(2374),o=n(9459);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t,n=e.type,i=e.id,s=o.Bm.defaultProjectMetaData;switch(n){case"project":(t=o.o8.projects.find((function(e){return e.id==i}))||{}).ogImage=t.cover;break;case"index":t=o.Bm.indexMetaData;break;case"lab":t=o.Bm.labMetaData;break;case"about":t=o.Bm.aboutMetaData;break;default:t={}}var u=l(l(l({},s),t),{},{title:t.title?"".concat(t.title," | ").concat(s.title):"".concat(s.title)||"--"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{}),(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("link",{rel:"icon",href:u.icon}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("meta",{name:"author",content:u.author}),(0,r.jsx)("meta",{property:"og:type",content:u.ogType}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:image",content:u.ogImage}),(0,r.jsx)("meta",{property:"og:site_name",content:u.ogSiteName}),(0,r.jsx)("meta",{property:"og:url",content:u.ogUrl})]})]})}},4053:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(6610),c=n(5991),a=n(3349),o=n(5255),s=n(6089),l=n(7608),u=n(6156),d=n(7294),f=n(1664),h=n(9459),p=n(4184),v=n.n(p);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var m=function(e){(0,o.Z)(n,e);var t=j(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,u.Z)((0,a.Z)(r),"handleScroll",(function(e){var t=document.documentElement.scrollTop,n=r.lastScrollTop-t;if(r.lastScrollTop=t,Math.abs(n)>10){var i=n<=0;r.setState({hideHeader:i})}})),(0,u.Z)((0,a.Z)(r),"toggleHeaderLinkHandler",(function(){var e=r.state.showHeaderLink;r.setState({showHeaderLink:!e})})),r.state={showHeaderLink:!1,hideHeader:0},r.lastScrollTop=0,r}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.type,t=this.state,n=t.showHeaderLink,i=t.hideHeader;return(0,r.jsxs)("div",{className:v()("header",{"falling-down-header":i}),children:[(0,r.jsx)("div",{className:"title-conatainer",children:(0,r.jsx)(f.default,{href:h.hu.links[0].link,children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/logo/logo.svg"})})})}),(0,r.jsx)("div",{className:"flex-space"}),(0,r.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:n?(0,r.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,r.jsx)("img",{src:"/icons/menu.svg"})}),(0,r.jsx)("div",{className:v()("header-link-container",{"m-header-link-container-show":n}),onClick:this.toggleHeaderLinkHandler,children:h.hu.links.map((function(t,n){var i=t.type===e;return(0,r.jsxs)("div",{className:"header-link-item",children:[(0,r.jsx)(f.default,{href:i?"":t.link,children:(0,r.jsx)("a",{className:v()("header-link",{"header-link-active":i}),children:t.title})}),n+1<h.hu.links.length?(0,r.jsx)("span",{className:"header-link-spliter",children:"|"}):null]},t.link)}))})]})}}]),n}(d.Component)},2994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),i=n(6156),c=(n(7294),n(4184)),a=n.n(c),o=n(4772);function s(e){var t=e.links,n=void 0===t?"":t,c=e.title,s=void 0===c?"":c,l=e.col,u=void 0===l?0:l,d=e.mCol,f=void 0===d?u:d,h=/(.+)\?\[(\d+)[x*](\d+)\]/;function p(e){var t=function(e,t){var n=e.toLowerCase();return t.some((function(e){return n.endsWith(e)}))},n=function(e){var t=e.match(h);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(e),i=n.urlLink;n.width,n.height;return t(i,[".mp4"])?(0,r.jsx)("video",{className:"media-video",src:i,loading:"lazy",autoPlay:"true",loop:"true",muted:"true",playsinline:"",width:"100%",type:"video/mp4"}):t(i,[".png",".jpg",".jpeg"])?(0,r.jsx)("img",{className:"media-img",src:i,loading:"lazy",width:"100%",alt:""}):t(i,[".gif"])?(0,r.jsx)("img",{className:"media-gif",src:i,loading:"lazy",width:"100%",alt:""}):null}return(0,r.jsxs)("div",{className:"media-list-container",children:[s?(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:s})}):null,(0,r.jsx)("div",{className:a()("grid-c",function(e,t){var n,r="grid-c"+e,c="m-grid-c"+t;return n={},(0,i.Z)(n,r,!0),(0,i.Z)(n,c,!0),n}(u,f)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,o.W)(e)})).filter((function(e){return void 0!==e}))}(n).map((function(e){return(0,r.jsx)("div",{className:"media-container",children:p(e)},e)}))})]})}},7599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),i=(n(7294),n(4053)),c=n(8018),a=n(7810),o=n(6822);function s(e){var t=e.id,n=e.children;return(0,r.jsxs)("div",{className:"convert-selection",children:[(0,r.jsx)(a.default,{type:"project",id:t}),(0,r.jsx)(i.default,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"project-container",children:[n,(0,r.jsxs)("div",{className:"related-project-container",children:[(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:"Other Projects"})}),(0,r.jsx)(o.default,{projectType:"default",randomPick:3})]})]})}),(0,r.jsx)(c.default,{})]})}},6822:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),i=n(6610),c=n(5991),a=n(5255),o=n(6089),s=n(7608),l=n(7294),u=n(1664),d=n(9459);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}function h(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.filter((function(e){return e.type===t}));if(n>0){var i=[];for(var c in r)i.push(r[c]);return h(r),r.slice(0,n)}return r}var v=function(e){(0,a.Z)(n,e);var t=f(n);function n(e){var r;(0,i.Z)(this,n);var c=(r=t.call(this,e)).props,a=c.projectType,o=c.randomPick;return r.state={showProjects:p(d.o8.projects,a,o)},r}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.state.showProjects;return(0,r.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,r.jsx)(u.default,{href:e.link,children:(0,r.jsxs)("a",{className:"project-view",children:[(0,r.jsx)("div",{className:"pseudo-cover"}),(0,r.jsx)("img",{src:e.cover,className:"cover",alt:"",title:""}),(0,r.jsx)("img",{src:e.hover,className:"hover",alt:"",title:""}),(0,r.jsx)("div",{className:"title-container",children:(0,r.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),n}(l.Component)},5080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"project-text-container",children:t})}},4730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("p",{className:"text-content convert-selection",children:t})}},3119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("h2",{className:"text-title convert-selection",children:t})}},8046:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),i=(n(7294),n(7599)),c=n(2994),a=n(9390),o=n(841),s=n(5080),l=n(3119),u=n(4730);function d(e){return(0,r.jsxs)(i.default,{id:"project006",children:[(0,r.jsx)(o.default,{link:"project006.video_main"}),(0,r.jsxs)(s.default,{children:[(0,r.jsx)(l.default,{children:"DigiWave 2020\u300a\u9059\u8996 Clairvoyance\u300b"}),(0,r.jsx)(u.default,{children:"\u300c\u9059\u8996\u300d\u4e00\u8a5e\u70ba\u5c08\u6709\u540d\u8a5e\uff0c\u4fc2\u6307\u80fd\u8d85\u8d8a\u6b63\u5e38\u8996\u529b\u770b\u5230\u9059\u9060\u5f7c\u65b9\u3001\u751a\u81f3\u4e0d\u540c\u6642\u7a7a\u5916\u666f\u8c61\u7684\u7279\u6b8a\u73fe\u8c61\uff1b \u6211\u5011\u8a8d\u70ba\u6b64\u7fa9\u8cbc\u5207\u4e86\u5f62\u5bb9\u4e86\u6240\u6709\u5c0d\u65bc\u9059\u9060\u7684\u672a\u4f86\u6709\u8457\u7121\u76e1\u597d\u5947\uff0c\u4e0d\u65b7\u900f\u904e\u60f3\u50cf\u529b\u8207\u79d1\u6280\u63a8\u52d5\u8457\u4e16\u754c\u7684\u4eba\u5011\uff0c\u65bc\u662f\u4ee5\u6b64\u70ba\u4e3b\u984c\u6253\u9020\u4e86\u9019\u4ef6\u5de8\u5927\u7684\u5f71\u50cf\u4f5c\u54c1\u3002 \u9059\u8996\u7684\u8868\u73fe\u5f62\u5f0f\u4ee5\u5bec\u95ca\u7684\u7acb\u9762\u8207\u6975\u9577\u7684\u5730\u9762\u5f71\u50cf\u6240\u7d44\u6210\u3002 \u7acb\u9762\u7684\u9060\u65b9\uff0c\u662f\u6211\u5011\u9059\u671b\u4e9f\u6b32\u6240\u898b\u4e4b\u8655\uff0c\u8173\u4e0b\u7684\u5730\u9762\uff0c\u5247\u662f\u6211\u5011\u6240\u9014\u7d93\u4e4b\u8def\uff1b \u900f\u904e\u5feb\u901f\u5728\u4e0d\u540c\u7a7a\u9593\u3001\u6642\u9593\uff0c\u751a\u81f3\u662f\u7dad\u5ea6\u7684\u91cf\u7d1a\u4e0a\u8df3\u8e8d\uff0c\u5c07\u89c0\u8005\u7684\u5168\u90e8\u89c0\u611f\u62c9\u5165\u300c\u9032\u4f4d\u300d\u7684\u9ad4\u9a57\uff0c\u4e26\u4ee5\u6b64\u4f5c\u54c1\u5411\u5922\u60f3\u5bb6\u5011\u81f4\u656c\u3002"}),(0,r.jsx)(u.default,{children:"\u70ba\u5b9a\u7fa9\u6b64\u4f5c\u54c1\u7684\u7cbe\u795e\uff0c\u6211\u5011\u7559\u4e0b\u4e86\u4e00\u4e9b\u6587\u5b57\uff1a"}),(0,r.jsx)(u.default,{children:"\u9762\u524d\u662f\u4e00\u500b\u65b9\u6846\u3002"}),(0,r.jsx)(u.default,{children:"\u65b9\u6846\u88e1\u6c92\u6709\u6642\u9593\u8207\u7a7a\u9593\u7684\u9650\u5236\uff0c\u4efb\u7531\u4f60\u7684\u610f\u5ff5\u98c4\u79fb\u3002"}),(0,r.jsx)(u.default,{children:"\u5c07\u51fa\u73fe\u7684\u662f\u672a\u898b\u904e\u7684\u5f7c\u65b9\uff0c\u672a\u89e3\u7684\u8b0e\u5718\u3002"}),(0,r.jsx)(u.default,{children:"\u7576\u7136\u4e5f\u6709\u95dc\u65bc\u4f60\u81ea\u5df1\uff0c\u90a3\u4e9b\u5df2\u77e5\u7684\u904e\u53bb\u8207\u672a\u77e5\u7684\u672a\u4f86\u3002"}),(0,r.jsx)(u.default,{children:"\u6700\u5f8c\u756b\u9762\u9700\u8981\u505c\u4e0b\u6642\uff0c\u4f60\u6703\u9078\u64c7\u7559\u5728\u54ea\u4e00\u523b\uff1f"})]}),(0,r.jsx)(c.default,{col:2,links:["project006.video_01_s","project006.video_02_s","project006.video_03_s","project006.video_04_s"]}),(0,r.jsx)(c.default,{col:1,title:"Motion Graphics",links:["project006.video_05_s"]}),(0,r.jsx)(c.default,{col:3,mCol:2,links:["project006.video_06_s","project006.video_07_s","project006.video_08_s","project006.video_09_s","project006.video_10_s","project006.video_11_s"]}),(0,r.jsxs)(a.default,{children:[(0,r.jsx)("p",{children:"Producer : Ke Jyun Wu"}),(0,r.jsx)("p",{children:"Art Director : Ting-An Ho"}),(0,r.jsx)("p",{children:"Motion Graphics : Ting-An Ho, Ke Jyun Wu, 1000 Cheng, Mal Liu"}),(0,r.jsx)("p",{children:"Interaction System Design, Execution : @chwan1"}),(0,r.jsx)("p",{children:"Programming : chia Reng Tsai"}),(0,r.jsx)("p",{children:"Sound Design : Zhen-Yang Huang (Triodust)"})]})]})}},1973:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/digiwave2020",function(){return n(8046)}])}},function(e){e.O(0,[149,459,774,888,179],(function(){return t=1973,e(e.s=t);var t}));var t=e.O();_N_E=t}]);