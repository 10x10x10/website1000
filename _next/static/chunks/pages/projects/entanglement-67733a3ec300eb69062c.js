(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{4772:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(9459),i=function(e){for(var t=e.split("."),n=r.aT,i=0;i<t.length;i++)n=n[t[i]];return n}},9390:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(6610),c=n(5991),a=n(3349),s=n(5255),o=n(6089),l=n(7608),d=n(6156),u=n(7294),f=n(4184),h=n.n(f);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var j=function(e){(0,s.Z)(n,e);var t=p(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,d.Z)((0,a.Z)(r),"toggleHandler",(function(e){var t=r.state.isFold;r.setState({isFold:!t})})),r.state={isFold:!0},r}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,n=t.foldable,i=t.children,c=h()("credit-list",n?{fold:e,unfold:!e}:{});return(0,r.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,r.jsx)("h2",{children:"Credits"}),(0,r.jsx)("div",{className:c,children:i}),n&&e?(0,r.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),n}(u.Component);j.defaultProps={foldable:!1}},841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(4772));function c(e){var t=e.link,n=void 0===t?"":t;return(0,r.jsx)("div",{className:"video-container",children:(0,r.jsx)("iframe",{src:(0,i.W)(n),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(9459));function c(e){var t=i.a5.links,n=i.a5.description,c=i.a5.copyright;return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,r.jsx)("a",{href:e.link,children:(0,r.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("p",{children:c})]})}},2374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=(n(7294),n(9008));function c(e){var t="UA-171392879-1";return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,r.jsx)("script",{children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},7810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),i=n(6156),c=(n(7294),n(9008)),a=n(2374),s=n(9459);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t,n=e.type,i=e.id,o=s.Bm.defaultProjectMetaData;switch(n){case"project":(t=s.o8.projects.find((function(e){return e.id==i}))||{}).ogImage=t.cover;break;case"index":t=s.Bm.indexMetaData;break;case"lab":t=s.Bm.labMetaData;break;case"about":t=s.Bm.aboutMetaData;break;default:t={}}var d=l(l(l({},o),t),{},{title:t.title?"".concat(t.title," | ").concat(o.title):"".concat(o.title)||"--"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{}),(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:d.title}),(0,r.jsx)("link",{rel:"icon",href:d.icon}),(0,r.jsx)("meta",{name:"description",content:d.description}),(0,r.jsx)("meta",{name:"author",content:d.author}),(0,r.jsx)("meta",{property:"og:type",content:d.ogType}),(0,r.jsx)("meta",{property:"og:title",content:d.title}),(0,r.jsx)("meta",{property:"og:description",content:d.description}),(0,r.jsx)("meta",{property:"og:image",content:d.ogImage}),(0,r.jsx)("meta",{property:"og:site_name",content:d.ogSiteName}),(0,r.jsx)("meta",{property:"og:url",content:d.ogUrl})]})]})}},4053:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(6610),c=n(5991),a=n(3349),s=n(5255),o=n(6089),l=n(7608),d=n(6156),u=n(7294),f=n(1664),h=n(9459),p=n(4184),j=n.n(p);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var m=function(e){(0,s.Z)(n,e);var t=v(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,d.Z)((0,a.Z)(r),"handleScroll",(function(e){var t=document.documentElement.scrollTop,n=r.lastScrollTop-t;if(r.lastScrollTop=t,Math.abs(n)>10){var i=n<=0;r.setState({hideHeader:i})}})),(0,d.Z)((0,a.Z)(r),"toggleHeaderLinkHandler",(function(){var e=r.state.showHeaderLink;r.setState({showHeaderLink:!e})})),r.state={showHeaderLink:!1,hideHeader:0},r.lastScrollTop=0,r}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.type,t=this.state,n=t.showHeaderLink;t.hideHeader;return(0,r.jsxs)("div",{className:j()("header",{"falling-down-header":this.state.hideHeader}),children:[(0,r.jsx)("div",{className:"title-conatainer",children:(0,r.jsx)(f.default,{href:h.hu.links[0].link,children:(0,r.jsx)("a",{children:(0,r.jsx)("h1",{className:"title",children:"1000 Cheng"})})})}),(0,r.jsx)("div",{className:"flex-space"}),(0,r.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:n?(0,r.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,r.jsx)("img",{src:"/icons/menu.svg"})}),(0,r.jsx)("div",{className:j()("header-link-container",{"m-header-link-container-show":n}),onClick:this.toggleHeaderLinkHandler,children:h.hu.links.map((function(t,n){var i=t.type===e;return(0,r.jsxs)("div",{className:"header-link-item",children:[(0,r.jsx)(f.default,{href:i?"":t.link,children:(0,r.jsx)("a",{className:j()("header-link",{"header-link-active":i}),children:t.title})}),n+1<h.hu.links.length?(0,r.jsx)("span",{className:"header-link-spliter",children:"|"}):null]},t.link)}))})]})}}]),n}(u.Component)},2994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),i=n(6156),c=(n(7294),n(4184)),a=n.n(c),s=n(4772);function o(e){var t=e.links,n=void 0===t?"":t,c=e.title,o=void 0===c?"":c,l=e.col,d=void 0===l?0:l,u=e.mCol,f=void 0===u?d:u,h=/(.+)\?\[(\d+)[x*](\d+)\]/;function p(e){var t=function(e,t){var n=e.toLowerCase();return t.some((function(e){return n.endsWith(e)}))},n=function(e){var t=e.match(h);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(e),i=n.urlLink;n.width,n.height;return t(i,[".mp4"])?(0,r.jsx)("video",{className:"media-video",src:i,loading:"lazy",autoPlay:"true",loop:"true",muted:"true",playsinline:"",width:"100%",type:"video/mp4"}):t(i,[".png",".jpg",".jpeg"])?(0,r.jsx)("img",{className:"media-img",src:i,loading:"lazy",width:"100%",alt:""}):t(i,[".gif"])?(0,r.jsx)("img",{className:"media-gif",src:i,loading:"lazy",width:"100%",alt:""}):null}return(0,r.jsxs)("div",{className:"media-list-container",children:[o?(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:o})}):null,(0,r.jsx)("div",{className:a()("grid-c",function(e,t){var n,r="grid-c"+e,c="m-grid-c"+t;return n={},(0,i.Z)(n,r,!0),(0,i.Z)(n,c,!0),n}(d,f)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,s.W)(e)})).filter((function(e){return void 0!==e}))}(n).map((function(e){return(0,r.jsx)("div",{className:"media-container",children:p(e)},e)}))})]})}},7599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),i=(n(7294),n(4053)),c=n(8018),a=n(7810),s=n(6822);function o(e){var t=e.id,n=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{type:"project",id:t}),(0,r.jsx)(i.default,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"project-container",children:[n,(0,r.jsxs)("div",{className:"related-project-container",children:[(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:"Related Projects"})}),(0,r.jsx)(s.default,{projectType:"default",randomPick:3})]})]})}),(0,r.jsx)(c.default,{})]})}},6822:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(6610),c=n(5991),a=n(5255),s=n(6089),o=n(7608),l=n(7294),d=n(1664),u=n(9459);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.Z)(e);if(t){var i=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}function h(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.filter((function(e){return e.type===t}));if(n>0){var i=[];for(var c in r)i.push(r[c]);return h(r),r.slice(0,n)}return r}var j=function(e){(0,a.Z)(n,e);var t=f(n);function n(e){var r;(0,i.Z)(this,n);var c=(r=t.call(this,e)).props,a=c.projectType,s=c.randomPick;return r.state={showProjects:p(u.o8.projects,a,s)},r}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.state.showProjects;return(0,r.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,r.jsx)(d.default,{href:e.link,children:(0,r.jsxs)("a",{className:"project-view",children:[(0,r.jsx)("div",{className:"pseudo-cover"}),(0,r.jsx)("img",{src:e.cover,className:"cover",alt:"",title:""}),(0,r.jsx)("img",{src:e.hover,className:"hover",alt:"",title:""}),(0,r.jsx)("div",{className:"title-container",children:(0,r.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),n}(l.Component)},5080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"project-text-container",children:t})}},4730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("p",{className:"text-content",children:t})}},3119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("h2",{className:"text-title",children:t})}},897:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),i=(n(7294),n(7599)),c=n(2994),a=n(9390),s=n(841),o=n(5080),l=n(3119),d=n(4730);function u(e){return(0,r.jsxs)(i.default,{id:"projectM002",children:[(0,r.jsx)(s.default,{link:"projectM002.video_main"}),(0,r.jsxs)(o.default,{children:[(0,r.jsx)(l.default,{children:"Entanglement"}),(0,r.jsx)(d.default,{children:"\u300c\u662f\u5426\u6709\u7368\u7acb\u65bc\u60f3\u6cd5\u4e4b\u5916\u7684\u81ea\u6211? \u6216\u662f\u662f\u5426\u6709\u7368\u7acb\u65bc\u81ea\u6211\u4e4b\u5916\u7684\u60f3\u6cd5?\u300d"}),(0,r.jsx)(d.default,{children:"\u5f9e\u63a2\u8a0e\u60f3\u6cd5\u8207\u81ea\u6211\u7684\u95dc\u4fc2\u51fa\u767c\uff0c\u5c07\u60f3\u6cd5\u62c6\u5206\u70ba\u300c\u5b9a\u7fa9\u300d\u8207\u300c\u95dc\u4fc2\u300d\uff0c\u5b9a\u7fa9\u5982\u9ede\uff0c\u95dc\u4fc2\u5982\u7dda\uff0c\u805a\u5408\u800c\u6210\u7684\u7d50\u69cb\u5373\u662f\u300c\u81ea\u6211\u300d\u3002\u63a5\u8457\u5ef6\u4f38\u81f3\u5efa\u7acb\u7a69\u5b9a\u81ea\u6211\u6982\u5ff5\u7684\u904e\u7a0b\uff0c\u81ea\u6211\u7a69\u5b9a\u5f8c\u9032\u800c\u7522\u751f\u8207\u5916\u754c\u7684\u826f\u597d\u9023\u7d50\u3002"}),(0,r.jsx)(d.default,{children:'"Is there a self that is independent of ideas? Or is there an idea that is independent of self?"'}),(0,r.jsx)(d.default,{children:'Starting from exploring the relationship between ideas and ego, I thought the idea is divided into "definition" and "relationship", the definition is like a point, the relationship is like a line, and the aggregated structure is "self". It then extends to the process of establishing a stable self-concept, which leads to a good connection with the outside world after self-stabilization.'})]}),(0,r.jsx)(c.default,{col:2,mCol:2,links:["projectM002.video_01_s","projectM002.video_02_s","projectM002.video_03_s","projectM002.video_04_s","projectM002.video_05_s","projectM002.video_06_s","projectM002.video_07_s","projectM002.video_08_s"]}),(0,r.jsx)(c.default,{col:1,mCol:1,title:"Concept",links:["projectM002.video_09_s"]}),(0,r.jsxs)(o.default,{children:[(0,r.jsx)(d.default,{children:"\u6545\u4e8b\u5927\u7db1\u662f\u5efa\u7acb\u7a69\u5b9a\u81ea\u6211\u6982\u5ff5\u7684\u904e\u7a0b\uff0c\u800c\u6709\u7a69\u5b9a\u7684\u81ea\u6211\u6982\u5ff5\u624d\u6709\u8fa6\u6cd5\u8207\u5916\u754c\u5efa\u7acb\u826f\u597d\u7684\u9023\u7d50\u3002"}),(0,r.jsx)(d.default,{children:"\u9019\u6b21\u7684\u6982\u5ff5\u662f\u7531\u4e0a\u5b78\u671f\u6240\u5ef6\u4f38\uff0c\u4e0a\u5b78\u671f\u7684\u4e3b\u984c\u662f\u4e0d\u8981\u628a\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\uff0c\u800c\u65b0\u5ef6\u4f38\u51fa\u7684\u554f\u984c\u662f\u300c\u8981\u5982\u4f55\u5340\u5206\u81ea\u6211\u8207\u60f3\u6cd5?\u300d\uff0c\u601d\u8003\u904e\u5f8c\u6240\u5f97\u51fa\u7684\u7d50\u8ad6\u662f\uff0c\u5168\u90e8\u7684\u60f3\u6cd5\uff0c\u7686\u53ef\u4ee5\u62c6\u5206\u70ba\u300c\u5b9a\u7fa9\u300d\u8207\u300c\u95dc\u4fc2\u300d\uff0c\u300c\u5b9a\u7fa9\u300d\u662f\u6307\u67d0\u500b\u500b\u9ad4\u3001\u5f62\u8c61\u3001\u6982\u5ff5\u7b49\u7684\u898f\u7bc4\u3001\u7bc4\u570d\uff0c\u6bd4\u5982\u8aaa\uff0c\u300c\u6211\u300d\u53ef\u662f\u8aaa\u662f\u4e00\u7a2e\u5b9a\u7fa9\uff0c\u5340\u5206\u6211\u8207\u4ed6\u8005\u7684\u4e0d\u540c\uff0c\u800c\u300c\u95dc\u4fc2\u300d\u5373\u662f\u6bcf\u500b\u5b9a\u7fa9\u4e4b\u9593\u7684\u95dc\u806f\uff0c\u6bd4\u5982\u8aaa\uff0c\u300c\u6211\u559c\u6b61\u5929\u7a7a\u300d\u5373\u662f\u5169\u500b\u5b9a\u7fa9\u4e4b\u9593\u7684\u95dc\u4fc2\u3002"}),(0,r.jsx)(d.default,{children:"\u5982\u679c\u5c07\u4e0a\u8ff0\u7684\u6587\u5b57\uff0c\u8f49\u5316\u70ba\u5716\u50cf\uff0c\u6bcf\u500b\u300c\u5b9a\u7fa9\u300d\u5373\u662f\u4e00\u500b\u9ede\u6216\u662f\u5713\uff0c\u800c\u300c\u95dc\u4fc2\u300d\u5373\u662f\u4e32\u806f\u8d77\u6bcf\u500b\u9ede\u7684\u7dda\uff0c\u63a5\u8457\uff0c\u5982\u679c\u8a8d\u540c\u300c\u81ea\u6211\u662f\u5168\u90e8\u60f3\u6cd5\u7684\u7e3d\u548c\u300d\uff0c\u9ede\u8207\u7dda\u4e32\u8d77\u4f86\u7684\u7d50\u69cb\uff0c\u5c31\u53ef\u4ee5\u8aaa\u662f\u300c\u81ea\u6211\u300d\u3002"}),(0,r.jsx)(d.default,{children:"\u5f88\u591a\u4eba\u6703\u7528\u300c\u500b\u300d\u7576\u4f5c\u60f3\u6cd5\u7684\u55ae\u4f4d\uff0c\u4f46\u6211\u89ba\u5f97\u4e26\u4e0d\u7cbe\u78ba\uff0c\u56e0\u70ba\u5be6\u969b\u4e0a\u60f3\u6cd5\u7e3d\u662f\u6709\u8457\u524d\u5f8c\u95dc\u4fc2\uff0c\u7121\u6cd5\u78ba\u5207\u7684\u5340\u5206\u4e00\u500b\u60f3\u6cd5\u7684\u754c\u7dda\uff0c\u4ee5\u524d\u5f8c\u95dc\u4fc2\u4f86\u8aaa\u7684\u8a71\uff0c\u7528\u300c\u4e32\u300d\u4f86\u505a\u70ba\u60f3\u6cd5\u7684\u91cf\u8a5e\u66f4\u9069\u7576\uff0c\u4f46\u60f3\u6cd5\u7e3d\u662f\u6703\u6709\u5206\u652f\uff0c\u6216\u8a31\u662f\u7db2\u72c0\u7684\u601d\u8003\u65b9\u5f0f\uff0c\u4f46\u300c\u4e32\u300d\u7684\u5b9a\u7fa9\u4e26\u4e0d\u4fb7\u9650\u5728\u4e00\u689d\u7dda\u4e0a\u3002"})]}),(0,r.jsx)(c.default,{col:1,mCol:1,title:"Storyboard",links:["projectM002.video_10_s"]}),(0,r.jsx)(o.default,{children:(0,r.jsx)(d.default,{children:"\u5916\u754c\u523a\u6fc0\u2192\u81ea\u6211\u751f\u6210\u2192\u521d\u6b21\u5efa\u7acb\u81ea\u6211\u6982\u5ff5\u2192\u8a66\u5716\u8207\u5916\u754c\u63a5\u89f8\u2192\u4e0d\u5920\u7a69\u5b9a\u7684\u81ea\u6211\u9020\u6210\u9023\u7d50\u5931\u6557\u2192\u4e26\u4e14\u5f15\u97ff\u81ea\u6211\u2192\u56de\u6b78\u5167\u5728\u4e16\u754c\u53cd\u8986\u4fee\u6b63\u2192\u5efa\u7acb\u7a69\u5b9a\u7684\u81ea\u6211\u6982\u5ff5\u2192\u6210\u529f\u5efa\u7acb\u826f\u597d\u9023\u7d50"})}),(0,r.jsx)(c.default,{col:1,mCol:1,title:"Styleframe",links:["projectM002.video_11_s"]}),(0,r.jsxs)(a.default,{children:[(0,r.jsx)("p",{children:"Director : \u912d\u8a52\u8b19 1000 Cheng"}),(0,r.jsx)("p",{children:"Music : Trip Music - Deep Inside"})]})]})}},8833:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/entanglement",function(){return n(897)}])}},function(e){e.O(0,[149,459,774,888,179],(function(){return t=8833,e(e.s=t);var t}));var t=e.O();_N_E=t}]);