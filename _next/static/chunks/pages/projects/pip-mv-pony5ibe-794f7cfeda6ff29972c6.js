(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{4772:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});var n=r(9459),i=function(e){for(var t=e.split("."),r=n.aT,i=0;i<t.length;i++)r=r[t[i]];return r}},9390:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=r(6610),c=r(5991),a=r(3349),o=r(5255),s=r(6089),l=r(7608),u=r(6156),d=r(7294),f=r(4184),h=r.n(f);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var j=function(e){(0,o.Z)(r,e);var t=p(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,a.Z)(n),"toggleHandler",(function(e){var t=n.state.isFold;n.setState({isFold:!t})})),n.state={isFold:!0},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,r=t.foldable,i=t.children,c=h()("credit-list",r?{fold:e,unfold:!e}:{});return(0,n.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,n.jsx)("h2",{children:"Credits"}),(0,n.jsx)("div",{className:c,children:i}),r&&e?(0,n.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),r}(d.Component);j.defaultProps={foldable:!1}},841:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=(r(7294),r(4772));function c(e){var t=e.link,r=void 0===t?"":t;return(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)("iframe",{src:(0,i.W)(r),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8018:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=(r(7294),r(9459));function c(e){var t=i.a5.links,r=i.a5.description,c=i.a5.copyright;return(0,n.jsxs)("div",{className:"footer",children:[(0,n.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,n.jsx)("a",{href:e.link,children:(0,n.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,n.jsx)("p",{children:r}),(0,n.jsx)("p",{children:c})]})}},2374:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=(r(7294),r(9008));function c(e){var t="UA-171392879-1";return(0,n.jsxs)(i.default,{children:[(0,n.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,n.jsx)("script",{children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},7810:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),i=r(6156),c=(r(7294),r(9008)),a=r(2374),o=r(9459);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){var t,r=e.type,i=e.id,s=o.Bm.defaultProjectMetaData;switch(r){case"project":(t=o.o8.projects.find((function(e){return e.id==i}))||{}).ogImage=t.cover;break;case"index":t=o.Bm.indexMetaData;break;case"lab":t=o.Bm.labMetaData;break;case"about":t=o.Bm.aboutMetaData;break;default:t={}}var u=l(l(l({},s),t),{},{title:t.title?"".concat(t.title," | ").concat(s.title):"".concat(s.title)||"--"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{}),(0,n.jsxs)(c.default,{children:[(0,n.jsx)("title",{children:u.title}),(0,n.jsx)("link",{rel:"icon",href:u.icon}),(0,n.jsx)("meta",{name:"description",content:u.description}),(0,n.jsx)("meta",{name:"author",content:u.author}),(0,n.jsx)("meta",{property:"og:type",content:u.ogType}),(0,n.jsx)("meta",{property:"og:title",content:u.title}),(0,n.jsx)("meta",{property:"og:description",content:u.description}),(0,n.jsx)("meta",{property:"og:image",content:u.ogImage}),(0,n.jsx)("meta",{property:"og:site_name",content:u.ogSiteName}),(0,n.jsx)("meta",{property:"og:url",content:u.ogUrl})]})]})}},4053:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),i=r(6610),c=r(5991),a=r(3349),o=r(5255),s=r(6089),l=r(7608),u=r(6156),d=r(7294),f=r(1664),h=r(9459),p=r(4184),j=r.n(p);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var m=function(e){(0,o.Z)(r,e);var t=v(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,a.Z)(n),"handleScroll",(function(e){var t=document.documentElement.scrollTop,r=n.lastScrollTop-t;if(n.lastScrollTop=t,Math.abs(r)>10){var i=r<=0;n.setState({hideHeader:i})}})),(0,u.Z)((0,a.Z)(n),"toggleHeaderLinkHandler",(function(){var e=n.state.showHeaderLink;n.setState({showHeaderLink:!e})})),n.state={showHeaderLink:!1,hideHeader:0},n.lastScrollTop=0,n}return(0,c.Z)(r,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.type,t=this.state,r=t.showHeaderLink;t.hideHeader;return(0,n.jsxs)("div",{className:j()("header",{"falling-down-header":this.state.hideHeader}),children:[(0,n.jsx)("div",{className:"title-conatainer",children:(0,n.jsx)(f.default,{href:h.hu.links[0].link,children:(0,n.jsx)("a",{children:(0,n.jsx)("h1",{className:"title",children:"1000 Cheng"})})})}),(0,n.jsx)("div",{className:"flex-space"}),(0,n.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:r?(0,n.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,n.jsx)("img",{src:"/icons/menu.svg"})}),(0,n.jsx)("div",{className:j()("header-link-container",{"m-header-link-container-show":r}),onClick:this.toggleHeaderLinkHandler,children:h.hu.links.map((function(t,r){var i=t.type===e;return(0,n.jsxs)("div",{className:"header-link-item",children:[(0,n.jsx)(f.default,{href:i?"":t.link,children:(0,n.jsx)("a",{className:j()("header-link",{"header-link-active":i}),children:t.title})}),r+1<h.hu.links.length?(0,n.jsx)("span",{className:"header-link-spliter",children:"|"}):null]},t.link)}))})]})}}]),r}(d.Component)},2994:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),i=r(6156),c=(r(7294),r(4184)),a=r.n(c),o=r(4772);function s(e){var t=e.links,r=void 0===t?"":t,c=e.title,s=void 0===c?"":c,l=e.col,u=void 0===l?0:l,d=e.mCol,f=void 0===d?u:d,h=/(.+)\?\[(\d+)[x*](\d+)\]/;function p(e){var t=function(e,t){var r=e.toLowerCase();return t.some((function(e){return r.endsWith(e)}))},r=function(e){var t=e.match(h);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(e),i=r.urlLink;r.width,r.height;return t(i,[".mp4"])?(0,n.jsx)("video",{className:"media-video",src:i,loading:"lazy",autoPlay:"true",loop:"true",muted:"true",playsinline:"",width:"100%",type:"video/mp4"}):t(i,[".png",".jpg",".jpeg"])?(0,n.jsx)("img",{className:"media-img",src:i,loading:"lazy",width:"100%",alt:""}):t(i,[".gif"])?(0,n.jsx)("img",{className:"media-gif",src:i,loading:"lazy",width:"100%",alt:""}):null}return(0,n.jsxs)("div",{className:"media-list-container",children:[s?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:s})}):null,(0,n.jsx)("div",{className:a()("grid-c",function(e,t){var r,n="grid-c"+e,c="m-grid-c"+t;return r={},(0,i.Z)(r,n,!0),(0,i.Z)(r,c,!0),r}(u,f)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,o.W)(e)})).filter((function(e){return void 0!==e}))}(r).map((function(e){return(0,n.jsx)("div",{className:"media-container",children:p(e)},e)}))})]})}},7599:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),i=(r(7294),r(4053)),c=r(8018),a=r(7810),o=r(6822);function s(e){var t=e.id,r=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsx)(a.default,{type:"project",id:t}),(0,n.jsx)(i.default,{}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"project-container",children:[r,(0,n.jsxs)("div",{className:"related-project-container",children:[(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:"Related Projects"})}),(0,n.jsx)(o.default,{projectType:"default",randomPick:3})]})]})}),(0,n.jsx)(c.default,{})]})}},6822:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=r(6610),c=r(5991),a=r(5255),o=r(6089),s=r(7608),l=r(7294),u=r(1664),d=r(9459);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}function h(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.filter((function(e){return e.type===t}));if(r>0){var i=[];for(var c in n)i.push(n[c]);return h(n),n.slice(0,r)}return n}var j=function(e){(0,a.Z)(r,e);var t=f(r);function r(e){var n;(0,i.Z)(this,r);var c=(n=t.call(this,e)).props,a=c.projectType,o=c.randomPick;return n.state={showProjects:p(d.o8.projects,a,o)},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.state.showProjects;return(0,n.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,n.jsx)(u.default,{href:e.link,children:(0,n.jsxs)("a",{className:"project-view",children:[(0,n.jsx)("div",{className:"pseudo-cover"}),(0,n.jsx)("img",{src:e.cover,className:"cover",alt:"",title:""}),(0,n.jsx)("img",{src:e.hover,className:"hover",alt:"",title:""}),(0,n.jsx)("div",{className:"title-container",children:(0,n.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),r}(l.Component)},5080:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);r(7294);function i(e){var t=e.children;return(0,n.jsx)("div",{className:"project-text-container",children:t})}},4730:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);r(7294);function i(e){var t=e.children;return(0,n.jsx)("p",{className:"text-content",children:t})}},3119:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);r(7294);function i(e){var t=e.children;return(0,n.jsx)("h2",{className:"text-title",children:t})}},730:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),i=(r(7294),r(7599)),c=r(2994),a=r(9390),o=r(841),s=r(5080),l=r(3119),u=r(4730);function d(e){return(0,n.jsxs)(i.default,{id:"project004",children:[(0,n.jsx)(o.default,{link:"project004.video_main"}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"Pony5ibe - They said ft.\u9673\u5afa\u975c \u3010Animated Music Video\u3011"}),(0,n.jsx)(u.default,{children:"\u4ee5\u5206\u5272\u756b\u9762\u8b93\u89c0\u8005\u5728\u540c\u4e00\u6642\u9593\u770b\u898b\u4e0d\u540c\u6642\u7a7a\u7684\u6545\u4e8b\uff0c\u5973\u4e3b\u8207\u7537\u4e3b\u5728\u4e00\u689d\u76f8\u540c\u7684\u300c\u9053\u8def\u300d\u884c\u8d70\uff0c\u4e0d\u904e\u5f7c\u6b64\u7684\u51fa\u767c\u5730\u3001\u51fa\u767c\u7684\u8d77\u56e0\u3001\u6642\u7a7a\u90fd\u4e0d\u76f8\u540c\u3002\u800c\u4ed6\u5011\u5728\u9053\u8def\u4e2d\u900f\u904e\u5149\u7684\u5f62\u5f0f\u5c0d\u8a71\u3002"}),(0,n.jsx)(u.default,{children:"\u5728\u89c0\u8005\u7684\u6642\u9593\u7dda\u8996\u89d2\u4f86\u770b\uff0c\u7537\u4e3b\u5df2\u7d93\u6b77\u904e\u4e00\u6b21\u6574\u500b\u9053\u8def\uff0c\u5728\u9019\u6bb5\u9053\u8def\u4ed6\u6c92\u6709\u5f97\u5230\u4efb\u4f55\u89ba\u9192\uff0c\u56e0\u6b64\u4ed6\u505a\u4e86\u4e00\u500b\u6c7a\u5b9a\uff0c\u4ed6\u56de\u982d\u518d\u6b21\u7d93\u6b77\u4e00\u5207\u3002\u800c\u5973\u4e3b\u662f\u525b\u525b\u9032\u5165\u9019\u6bb5\u9053\u8def\u7684\u4eba\uff0c\u5f9e\u521d\u59cb\u63a2\u7d22\u3002\u5169\u8005\u5728\u5c0d\u8a71\u7684\u904e\u7a0b\u4e2d\u6709\u8046\u807d\u3001\u6709\u601d\u8faf\u3001\u6709\u53cd\u7701\uff0c\u5f7c\u6b64\u7684\u60f3\u6cd5\u96d6\u4e0d\u540c\uff0c\u537b\u4e5f\u56e0\u70ba\u5f7c\u6b64\u5728\u300c\u9053\u8def\u300d\u4e0a\u7684\u5c0d\u8a71\u800c\u7522\u751f\u8b8a\u5316\u3002"}),(0,n.jsx)(u.default,{children:"\u6211\u8ca0\u8cac\u7684\u90e8\u5206\u662f\u88fd\u4f5c 2D \u7684\u52d5\u614b\u5f71\u50cf\uff0c\u9019\u6b21\u5275\u4f5c\u8a08\u756b\u5e7e\u4e4e\u6c92\u6709\u4efb\u4f55\u7684\u9650\u5236\uff0c\u6211\u7279\u5225\u559c\u6b61\u9019\u7a2e\u72c0\u614b \u2500\u2500\u300c\u5728\u6211\u505a\u51fa\u4f86\u4e4b\u524d\uff0c\u6211\u6c38\u9060\u4e0d\u77e5\u9053\u6211\u6700\u5f8c\u6703\u505a\u51fa\u4ec0\u9ebc\u300d\u7684\u611f\u89ba\u3002\u5c0d\u6211\u4f86\u8aaa\uff0c\u5982\u679c\u88fd\u4f5c\u5f71\u50cf\u6642\u4e0d\u5177\u6709\u5be6\u9a57\u6027\uff0c\u90a3\u5c31\u592a\u904e\u4e4f\u5473\u4e86\u3002"}),(0,n.jsx)(u.default,{children:"\u53cd\u8986\u5730\u807d\u8457\u6b4c\u66f2\uff0c\u8b93\u81ea\u5df1\u6c89\u6d78\u5176\u4e2d\uff0c\u76f4\u5230\u8166\u6d77\u4e2d\u6d6e\u73fe\u5f71\u50cf\uff0c\u6700\u5f8c\u6191\u8457\u76f4\u89ba\u5275\u4f5c\uff0c\u904e\u7a0b\u6240\u5e36\u4f86\u7684\u8208\u596e\u611f\u8207\u6eff\u8db3\u611f\uff0c\u4e5f\u8a31\u662f\u6301\u7e8c\u5275\u4f5c\u6700\u91cd\u8981\u7684\u52d5\u529b\u5427\u3002"})]}),(0,n.jsx)(c.default,{col:2,links:["project004.video_01_s","project004.video_02_s"]}),(0,n.jsx)(c.default,{col:3,mCol:2,title:"2D Motion Design",links:["project004.video_05_s","project004.video_06_s","project004.video_07_s","project004.video_08_s","project004.video_09_s","project004.video_10_s"]}),(0,n.jsxs)(a.default,{children:[(0,n.jsx)("p",{children:"Director : Parker Shen \u6c88\u5bb6\u7def"}),(0,n.jsx)("p",{children:"Producer : Xue 0 \u5442\u5b78\u9716"}),(0,n.jsx)("p",{children:"Lead 3D Designer : Roll + \u6881\u82e5\u5609"}),(0,n.jsx)("p",{children:"Character Concept Artist : Xite \u5433\u5609\u9032"}),(0,n.jsx)("p",{children:"Character Designer : LoiSup \u8cf4\u4fca\u5091\u3001River Lin \u6797\u8a60\u9806"}),(0,n.jsx)("p",{children:"Scene Designer : Roll + \u6881\u82e5\u5609\u3001Parker Shen \u6c88\u5bb6\u7def"}),(0,n.jsx)("p",{children:"3D Animator : River Lin \u6797\u8a60\u9806\u3001Parker Shen \u6c88\u5bb6\u7def \u3001Roll + \u6881\u82e5\u5609"}),(0,n.jsx)("p",{children:"2D Motion Designer : 1000 Cheng \u912d\u8a52\u8b19"}),(0,n.jsx)("p",{children:"Compositor : Roll + \u6881\u82e5\u5609 \u3001 Parker Shen \u6c88\u5bb6\u7def"}),(0,n.jsx)("p",{children:"Visual Designer : Xue 0 \u5442\u5b78\u9716"})]})]})}},5407:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/pip-mv-pony5ibe",function(){return r(730)}])}},function(e){e.O(0,[149,459,774,888,179],(function(){return t=5407,e(e.s=t);var t}));var t=e.O();_N_E=t}]);