(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{4772:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(9459),i=function(e){for(var t=e.split("."),n=r.aT,i=0;i<t.length;i++)n=n[t[i]];return n}},9390:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(6610),c=n(5991),a=n(3349),o=n(5255),s=n(6089),l=n(7608),u=n(6156),d=n(7294),f=n(4184),h=n.n(f);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var m=function(e){(0,o.Z)(n,e);var t=p(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,u.Z)((0,a.Z)(r),"toggleHandler",(function(e){var t=r.state.isFold;r.setState({isFold:!t})})),r.state={isFold:!0},r}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,n=t.foldable,i=t.children,c=h()("credit-list",n?{fold:e,unfold:!e}:{});return(0,r.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,r.jsx)("h2",{children:"Credits"}),(0,r.jsx)("div",{className:c,children:i}),n&&e?(0,r.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),n}(d.Component);m.defaultProps={foldable:!1}},841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(4772));function c(e){var t=e.link,n=void 0===t?"":t;return(0,r.jsx)("div",{className:"video-container",children:(0,r.jsx)("iframe",{src:(0,i.W)(n),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(9459));function c(e){var t=i.a5.links,n=i.a5.description,c=i.a5.copyright;return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,r.jsx)("a",{href:e.link,children:(0,r.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("p",{children:c})]})}},2374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(9008));function c(e){var t="UA-171392879-1";return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,r.jsx)("script",{children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},7810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),i=n(6156),c=(n(7294),n(9008)),a=n(2374),o=n(9459);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t,n=e.type,i=e.id,s=o.Bm.defaultProjectMetaData;switch(n){case"project":(t=o.o8.projects.find((function(e){return e.id==i}))||{}).ogImage=t.cover;break;case"index":t=o.Bm.indexMetaData;break;case"lab":t=o.Bm.labMetaData;break;case"about":t=o.Bm.aboutMetaData;break;default:t={}}var u=l(l(l({},s),t),{},{title:t.title?"".concat(t.title," | ").concat(s.title):"".concat(s.title)||"--"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{}),(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("link",{rel:"icon",href:u.icon}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("meta",{name:"author",content:u.author}),(0,r.jsx)("meta",{property:"og:type",content:u.ogType}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:image",content:u.ogImage}),(0,r.jsx)("meta",{property:"og:site_name",content:u.ogSiteName}),(0,r.jsx)("meta",{property:"og:url",content:u.ogUrl})]})]})}},4053:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),i=n(6610),c=n(5991),a=n(3349),o=n(5255),s=n(6089),l=n(7608),u=n(6156),d=n(7294),f=n(1664),h=n(9459),p=n(4184),m=n.n(p);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var v=function(e){(0,o.Z)(n,e);var t=j(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,u.Z)((0,a.Z)(r),"handleScroll",(function(e){var t=document.documentElement.scrollTop,n=r.lastScrollTop-t;if(r.lastScrollTop=t,Math.abs(n)>10){var i=n<=0;r.setState({hideHeader:i})}})),(0,u.Z)((0,a.Z)(r),"toggleHeaderLinkHandler",(function(){var e=r.state.showHeaderLink;r.setState({showHeaderLink:!e})})),r.state={showHeaderLink:!1,hideHeader:0},r.lastScrollTop=0,r}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.type,t=this.state,n=t.showHeaderLink;t.hideHeader;return(0,r.jsxs)("div",{className:m()("header",{"falling-down-header":this.state.hideHeader}),children:[(0,r.jsx)("div",{className:"title-conatainer",children:(0,r.jsx)(f.default,{href:h.hu.links[0].link,children:(0,r.jsx)("a",{children:(0,r.jsx)("h1",{className:"title",children:"1000 Cheng"})})})}),(0,r.jsx)("div",{className:"flex-space"}),(0,r.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:n?(0,r.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,r.jsx)("img",{src:"/icons/menu.svg"})}),(0,r.jsx)("div",{className:m()("header-link-container",{"m-header-link-container-show":n}),onClick:this.toggleHeaderLinkHandler,children:h.hu.links.map((function(t,n){var i=t.type===e;return(0,r.jsxs)("div",{className:"header-link-item",children:[(0,r.jsx)(f.default,{href:i?"":t.link,children:(0,r.jsx)("a",{className:m()("header-link",{"header-link-active":i}),children:t.title})}),n+1<h.hu.links.length?(0,r.jsx)("span",{className:"header-link-spliter",children:"|"}):null]},t.link)}))})]})}}]),n}(d.Component)},2994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),i=n(6156),c=(n(7294),n(4184)),a=n.n(c),o=n(4772);function s(e){var t=e.links,n=void 0===t?"":t,c=e.title,s=void 0===c?"":c,l=e.col,u=void 0===l?0:l,d=e.mCol,f=void 0===d?u:d,h=/(.+)\?\[(\d+)[x*](\d+)\]/;function p(e){var t=function(e,t){var n=e.toLowerCase();return t.some((function(e){return n.endsWith(e)}))},n=function(e){var t=e.match(h);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(e),i=n.urlLink;n.width,n.height;return t(i,[".mp4"])?(0,r.jsx)("video",{className:"media-video",src:i,loading:"lazy",autoPlay:"true",loop:"true",muted:"true",playsinline:"",width:"100%",type:"video/mp4"}):t(i,[".png",".jpg",".jpeg"])?(0,r.jsx)("img",{className:"media-img",src:i,loading:"lazy",width:"100%",alt:""}):t(i,[".gif"])?(0,r.jsx)("img",{className:"media-gif",src:i,loading:"lazy",width:"100%",alt:""}):null}return(0,r.jsxs)("div",{className:"media-list-container",children:[s?(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:s})}):null,(0,r.jsx)("div",{className:a()("grid-c",function(e,t){var n,r="grid-c"+e,c="m-grid-c"+t;return n={},(0,i.Z)(n,r,!0),(0,i.Z)(n,c,!0),n}(u,f)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,o.W)(e)})).filter((function(e){return void 0!==e}))}(n).map((function(e){return(0,r.jsx)("div",{className:"media-container",children:p(e)},e)}))})]})}},7599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),i=(n(7294),n(4053)),c=n(8018),a=n(7810),o=n(6822);function s(e){var t=e.id,n=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{type:"project",id:t}),(0,r.jsx)(i.default,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"project-container",children:[n,(0,r.jsxs)("div",{className:"related-project-container",children:[(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:"Related Projects"})}),(0,r.jsx)(o.default,{projectType:"default",randomPick:3})]})]})}),(0,r.jsx)(c.default,{})]})}},6822:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(6610),c=n(5991),a=n(5255),o=n(6089),s=n(7608),l=n(7294),u=n(1664),d=n(9459);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}function h(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.filter((function(e){return e.type===t}));if(n>0){var i=[];for(var c in r)i.push(r[c]);return h(r),r.slice(0,n)}return r}var m=function(e){(0,a.Z)(n,e);var t=f(n);function n(e){var r;(0,i.Z)(this,n);var c=(r=t.call(this,e)).props,a=c.projectType,o=c.randomPick;return r.state={showProjects:p(d.o8.projects,a,o)},r}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.state.showProjects;return(0,r.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,r.jsx)(u.default,{href:e.link,children:(0,r.jsxs)("a",{className:"project-view",children:[(0,r.jsx)("div",{className:"pseudo-cover"}),(0,r.jsx)("img",{src:e.cover,className:"cover",alt:"",title:""}),(0,r.jsx)("img",{src:e.hover,className:"hover",alt:"",title:""}),(0,r.jsx)("div",{className:"title-container",children:(0,r.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),n}(l.Component)},5080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"project-text-container",children:t})}},4730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("p",{className:"text-content",children:t})}},3119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("h2",{className:"text-title",children:t})}},1694:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),i=(n(7294),n(7599)),c=n(2994),a=n(9390),o=n(841),s=n(5080),l=n(3119),u=n(4730);function d(e){return(0,r.jsxs)(i.default,{id:"projectM001",children:[(0,r.jsx)(o.default,{link:"projectM001.video_main"}),(0,r.jsxs)(s.default,{children:[(0,r.jsx)(l.default,{children:"SIMPLEX"}),(0,r.jsx)(u.default,{children:"Simplex \u662f simple \u8207 complex \u7684\u8907\u5408\u5b57\uff0c\u5b57\u9762\u4e0a\u7684\u610f\u601d\u662f\u300c\u7c21\u55ae\u7684\u8907\u96dc\u300d\uff0c\u96b1\u542b\u7684\u610f\u601d\u662f\u300c\u4eba\u300d\u3002 \u4f46\u5b83\u540c\u6642\u4e5f\u662f\u6578\u5b78\u4e0a\u7684\u5c08\u6709\u540d\u8a5e\uff0c\u610f\u65e8\u5728 n \u7dad\u7a7a\u9593\u4e2d\uff0c\u53d6 n+1 \u500b\u9ede\uff0c\u8b93\u9019\u4e9b\u9ede\u76f8\u4e92\u9023\u63a5\uff0c\u53ef\u69cb\u6210 Simplex\u3002 \u5728\u96f6\u5230\u4e09\u7dad\u7a7a\u9593\u4e2d\u7684 simplex\uff0c\u5206\u5225\u4ee3\u8868\u9ede\u3001\u7dda\u6bb5\u3001\u4e09\u89d2\u5f62\uff0c\u8207\u56db\u9762\u9ad4\u3002\u800c\u9019\u6b21\u52d5\u756b\u7684\u4e3b\u89d2\u5373\u662f\u4e09\u7dad\u7684 Simplex \u3002 \u4e00\u5982\u5f80\u5e38\u7684\u8a71\u53ea\u8aaa\u4e86\u4e00\u534a\uff0c\u7c21\u800c\u8a00\u4e4b\u662f\u5728\u63cf\u8ff0\u4eba\u8207\u60f3\u6cd5\u7684\u4e92\u52d5\u95dc\u4fc2\u3002"}),(0,r.jsx)(u.default,{children:'Simplex is a compound word of simple and complex, literally meaning "simple complexity", implied meaning "people." But it is also a mathematical term, meaning that in n-dimensional space, take n+1 points, and connect these points to each other to form Simplex. Simplex in zero to three-dimensional space, representing points, line segments, triangles, and tetrahedrons. The protagonist of this animation is the 3D Simplex. As usual, I only said half of it. In short, it describes the interaction between people and ideas.'})]}),(0,r.jsx)(c.default,{col:2,mCol:1,title:"Motion",links:["projectM001.video_01_s","projectM001.video_02_s","projectM001.video_03_s","projectM001.video_04_s"]}),(0,r.jsx)(c.default,{col:1,mCol:1,title:"Concept",links:["projectM001.video_05_s"]}),(0,r.jsxs)(s.default,{children:[(0,r.jsx)(u.default,{children:"\u4e0d\u8981\u628a\u4f60\u81ea\u5df1\u7684\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\uff0c\u662f\u53c3\u8003\u6700\u9ad8\u4f11\u606f\u6cd5\u9019\u672c\u66f8\uff0c\u6211\u64f7\u53d6\u51fa\u6211\u89ba\u5f97\u6709\u8da3\u7684\u5167\u5bb9\uff0c\u66f8\u4e2d\u7684\u6bd4\u55bb\u662f\u8aaa\uff0c\u4f60\u662f\u8eca\u7ad9\uff0c\u800c\u60f3\u6cd5\u662f\u4f86\u4f86\u53bb\u53bb\u7684\u5217\u8eca\uff0c\u4f46\u6211\u5011\u4e0d\u6703\u8aaa\uff0c\u5217\u8eca\u5c31\u662f\u8eca\u7ad9\u672c\u8eab\u3002\u5728\u95b1\u8b80\u9019\u500b\u7bc7\u7ae0\u6642\uff0c\u6211\u806f\u60f3\u5230\u4e00\u500b\u5fc3\u7406\u5b78\u7684\u5c08\u6709\u540d\u8a5e\u300c\u53ef\u611b\u4fb5\u7565\u6027\u300d\uff0c\u662f\u5728\u63cf\u8ff0\u6709\u4e00\u7fa4\u4eba\u6703\u5728\u770b\u5230\u53ef\u611b\u7684\u52d5\u7269\u6642\uff0c\u7522\u751f\u60f3\u8981\u634f\u6b7b\u4ed6\u7684\u5ff5\u982d\uff0c\u4f46\u7814\u7a76\u767c\u73fe\uff0c\u4e26\u4e0d\u662f\u9019\u4e9b\u4eba\u7279\u5225\u6709\u8b8a\u614b\uff0c\u800c\u662f\u56e0\u70ba\u5927\u8166\uff0c\u4e0d\u8ad6\u5728\u958b\u5fc3\u6216\u96e3\u904e\u6642\uff0c\u90fd\u50be\u5411\u8b93\u60c5\u7dd2\u8da8\u65bc\u5e73\u8861\uff0c\u56e0\u6b64\u5728\u958b\u5fc3\u7684\u6642\u5019\uff0c\u7522\u751f\u8ca0\u9762\u5ff5\u982d\uff0c\u53ea\u662f\u5927\u8166\u7684\u4e00\u500b\u6b63\u5e38\u6a5f\u5236\u3002\u6211\u89ba\u5f97\u9019\u4e5f\u61c9\u8b49\u4e86\u300c\u4e0d\u8981\u628a\u4f60\u7684\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\u300d\u3002"}),(0,r.jsx)(u.default,{children:"\u96d6\u7136\u4e00\u958b\u59cb\u662f\u4ee5\u300c\u4e0d\u8981\u628a\u4f60\u7684\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\u70ba\u4e3b\u984c\u300d\uff0c\u4f46\u5f8c\u4f86\u5728\u69cb\u601d\u6545\u4e8b\u7684\u904e\u7a0b\u4e2d\uff0c\u89ba\u5f97\u9019\u672c\u4f86\u5c31\u662f\u63cf\u8ff0\u51a5\u60f3\u7684\u5176\u4e2d\u4e00\u500b\u6982\u5ff5\uff0c\u6240\u4ee5\u5982\u679c\u9650\u7e2e\u5728\u9019\u88e1\uff0c\u6709\u4e9b\u72f9\u9698\uff0c\u56e0\u6b64\u5f8c\u4f86\u9084\u662f\u4ee5\u300c\u51a5\u60f3\u300d\u672c\u8eab\u70ba\u6982\u5ff5\u6838\u5fc3\u3002\u9019\u6b21\u60f3\u7528\u5e7e\u4f55\u5f62\u53bb\u5448\u73fe\u6545\u4e8b\uff0c\u6545\u4e8b\u5927\u7db1\u662f\uff0c\u4e3b\u89d2\u662f\u4e00\u500b\u4e09\u89d2\u5f62\uff0c\u4ed6\u63a5\u89f8\u5230\u8c61\u5fb5\u7684\u60f3\u6cd5\u7684\u5176\u4ed6\u5e7e\u4f55\u5f62\u6642\uff0c\u5c31\u6703\u56e0\u6b64\u8b8a\u5f62\uff0c\u539f\u672c\u5c0d\u60f3\u6cd5\u7684\u614b\u5ea6\u662f\u597d\u5947\u8208\u596e\u7684\uff0c\u4f46\u96a8\u8457\u60f3\u6cd5\u8d8a\u4f86\u8d8a\u591a\uff0c\u4ed6\u8d8a\u4f86\u8d8a\u7121\u6cd5\u5c08\u5fc3\uff0c\u5c31\u56e0\u6b64\u8b8a\u5f62\u5f97\u8d8a\u4f86\u8d8a\u5feb\uff0c\u76f4\u5230\u4ed6\u53d7\u4e0d\u4e86\u5d29\u6f70\u4e4b\u6642\uff0c\u4ed6\u9078\u64c7\u9589\u4e0a\u773c\u775b\uff0c\u56de\u6b78\u81ea\u5df1\u7684\u5167\u5fc3\uff0c\u900f\u904e\u51a5\u60f3\uff0c\u8abf\u6574\u81ea\u5df1\u7684\u547c\u5438\uff0c\u4ed6\u7684\u5167\u5fc3\u4e16\u754c\u624d\u6f38\u6f38\u5e73\u548c\u3002"})]}),(0,r.jsx)(c.default,{col:2,mCol:1,title:"Storyboard",links:["projectM001.video_06_s","projectM001.video_07_s"]}),(0,r.jsxs)(a.default,{children:[(0,r.jsx)("p",{children:"Director : \u912d\u8a52\u8b19 1000 Cheng"}),(0,r.jsx)("p",{children:"Music : \u5289\u7ffc\u7fec Yi-Huei Liou"})]})]})}},2294:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/simplex",function(){return n(1694)}])}},function(e){e.O(0,[149,459,774,888,179],(function(){return t=2294,e(e.s=t);var t}));var t=e.O();_N_E=t}]);