(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4772:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(9459),a=function(e){for(var t=e.split("."),n=r.aT,a=0;a<t.length;a++)n=n[t[a]];return n}},841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),a=(n(7294),n(4772));function i(e){var t=e.link,n=void 0===t?"":t;return(0,r.jsx)("div",{className:"video-container",children:(0,r.jsx)("iframe",{src:(0,a.W)(n),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),a=(n(7294),n(9459)),i=n(9882);function o(e){var t=a.a5.links,n=a.a5.description,o=a.a5.copyright;return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,r.jsx)("a",{href:e.link,target:"_blank",children:(0,r.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("div",{style:{height:10}}),"   ",(0,r.jsx)("p",{children:o}),(0,r.jsx)(i.default,{})]})}},2374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),a=(n(7294),n(4298));function i(e){var t="UA-171392879-1";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{strategy:"beforeInteractive",async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,r.jsx)(a.default,{id:"headGoogleAnalytics",children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},7810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),a=n(6156),i=(n(7294),n(9008)),o=n(2374),s=n(9459);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t,n=e.type,a=e.id,c=s.Bm.defaultProjectMetaData;switch(n){case"project":(t=s.o8.projects.find((function(e){return e.id==a}))||{}).ogImage=t.cover;break;case"index":t=s.Bm.indexMetaData;break;case"lab":t=s.Bm.labMetaData;break;case"about":t=s.Bm.aboutMetaData;break;default:t={}}var u=l(l(l({},c),t),{},{title:t.title?"".concat(t.title," | ").concat(c.title):"".concat(c.title)||"--"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{}),(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("link",{rel:"icon",href:u.icon}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("meta",{name:"author",content:u.author}),(0,r.jsx)("meta",{property:"og:type",content:u.ogType}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:image",content:u.ogImage}),(0,r.jsx)("meta",{property:"og:site_name",content:u.ogSiteName}),(0,r.jsx)("meta",{property:"og:url",content:u.ogUrl})]})]})}},4053:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),a=n(6610),i=n(5991),o=n(3349),s=n(5255),c=n(6089),l=n(7608),u=n(6156),d=n(7294),f=n(1664),p=n(9459),h=n(4184),m=n.n(h);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var x=function(e){(0,s.Z)(n,e);var t=v(n);function n(e){var r;return(0,a.Z)(this,n),r=t.call(this,e),(0,u.Z)((0,o.Z)(r),"handleScroll",(function(e){var t=document.documentElement.scrollTop,n=r.lastScrollTop-t;if(r.lastScrollTop=t,Math.abs(n)>10){var a=n<=0;r.setState({hideHeader:a})}})),(0,u.Z)((0,o.Z)(r),"toggleHeaderLinkHandler",(function(){var e=r.state.showHeaderLink;r.setState({showHeaderLink:!e})})),r.state={showHeaderLink:!1,hideHeader:0},r.lastScrollTop=0,r}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.type,t=this.state,n=t.showHeaderLink,a=t.hideHeader;return(0,r.jsxs)("div",{className:m()("header",{"falling-down-header":a}),children:[(0,r.jsx)("div",{className:"title-conatainer",children:(0,r.jsx)(f.default,{href:p.hu.links[0].link,children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/logo/logo.svg"})})})}),(0,r.jsx)("div",{className:"flex-space"}),(0,r.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:n?(0,r.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,r.jsx)("img",{src:"/icons/menu.svg"})}),(0,r.jsx)("div",{className:m()("header-link-container",{"m-header-link-container-show":n}),onClick:this.toggleHeaderLinkHandler,children:p.hu.links.map((function(t,n){var a=t.type===e;return(0,r.jsxs)("div",{className:"header-link-item",children:[(0,r.jsx)(f.default,{href:a?"":t.link,children:(0,r.jsx)("a",{className:m()("header-link",{"header-link-active":a}),children:t.title})}),n+1<p.hu.links.length?(0,r.jsx)("span",{className:"header-link-spliter",children:"|"}):null]},t.link)}))})]})}}]),n}(d.Component)},1078:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7757),a=n.n(r),i=n(2137),o=n(5893),s=(n(7294),n(5697)),c=n.n(s),l=n(9260),u=n.n(l),d=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":161,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[500,500],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"t":80,"s":[100]}],"ix":1,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":80,"s":[100]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[90]},{"t":80,"s":[270]}],"ix":3,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"m":2,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":2,"ix":4,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":160,"st":0,"bm":0}],"markers":[]}');function f(e){var t=e.isLoading,n=(0,o.jsx)("div",{className:"loading-conatiner",children:(0,o.jsx)(u(),{animationData:d,style:{width:64,height:64},loop:!0,autoplay:!0})});return t?n:null}f.propTypes={isLoading:c().bool.isRequired},f.defaultProps={isLoading:!1},f.getInitialProps=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.defaultProps);case 1:case"end":return e.stop()}}),e)})));var p=f},1e3:function(e,t,n){"use strict";n.r(t);var r=n(7757),a=n.n(r),i=n(2137),o=n(5893),s=n(18),c=n(7294),l=n(4184),u=n.n(l),d=n(1078),f=/(.+)\?\[(\d+)[x*](\d+)\]/;function p(e){var t=e.link,n=e.classes,r=e.position,a=e.enableLoading,i=(0,c.useState)(!0),l=i[0],p=i[1],h=function(e){var t=e.match(f);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(t),m=h.urlLink,v=h.width,x=h.height,g=(0,c.createRef)();return(0,c.useEffect)((function(){var e=function(){p(!1)};switch(g.current.nodeName){case"IMG":var t=g.current;t.complete?e():t.onload=e;break;case"VIDEO":var n=g.current;console.log(),n.readyState>=3?e():n.onloadeddata=e}})),(0,o.jsxs)("div",{ref:e.forwardedRef,style:{position:r,inset:0,paddingTop:"".concat(x/v*100,"%")},className:u()("media-item",{"media-show":!e.forwardedRef||e.enterCount>0}),children:[function(){var e=function(e,t){var n=e.toLowerCase();return t.some((function(e){return n.endsWith(e)}))};return e(m,[".mp4"])?(0,o.jsx)("video",{ref:g,className:u().apply(void 0,["media-video"].concat((0,s.Z)(n),[{loading:l}])),src:m,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):e(m,[".png",".jpg",".jpeg"])?(0,o.jsx)("img",{ref:g,className:u().apply(void 0,["media-img"].concat((0,s.Z)(n),[{loading:l}])),src:m,loading:"lazy",width:"100%",alt:"",title:""}):e(m,[".gif"])?(0,o.jsx)("img",{ref:g,className:u().apply(void 0,["media-gif"].concat((0,s.Z)(n),[{loading:l}])),src:m,loading:"lazy",width:"100%",alt:"",title:""}):null}(),a?(0,o.jsx)(d.default,{isLoading:l}):null]})}p.defaultProps={link:"",classes:[],position:"relative",enableLoading:!0},p.getInitialProps=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.defaultProps);case 1:case"end":return e.stop()}}),e)}))),t.default=p},9882:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);n(7294);function a(e){var t=(0,r.jsx)("a",{href:"https://ttesttes93405.github.io/OwenCollections/",target:"_blank",children:"Owen Sun"});return(0,r.jsx)("div",{className:"powered-by",children:(0,r.jsxs)("p",{children:["\xa9 2021 Website powered by ",t]})})}},6822:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),a=n(6610),i=n(5991),o=n(5255),s=n(6089),c=n(7608),l=n(7294),u=n(1664),d=n(9459),f=n(1e3);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}function h(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.filter((function(e){return e.type===t}));if(n>0){var a=[];for(var i in r)a.push(r[i]);return h(r),r.slice(0,n)}return r}var v=function(e){(0,o.Z)(n,e);var t=p(n);function n(e){var r;(0,a.Z)(this,n);var i=(r=t.call(this,e)).props,o=i.projectType,s=i.randomPick;return r.state={showProjects:m(d.o8.projects,o,s)},r}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.state.showProjects;return(0,r.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,r.jsx)(u.default,{href:e.link,children:(0,r.jsxs)("a",{className:"project-view",children:[(0,r.jsx)(f.default,{link:e.cover,classes:["cover"]}),(0,r.jsx)(f.default,{link:e.hover,classes:["hover"],position:"absolute",enableLoading:!1}),(0,r.jsx)("div",{className:"title-container",children:(0,r.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),n}(l.Component)},6124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),a=n(6822),i=n(4053),o=n(8018),s=n(7810);n(841),n(9459);function c(){return(0,r.jsxs)("div",{id:"index",children:[(0,r.jsx)(s.default,{type:"index"}),(0,r.jsx)(i.default,{type:"index"}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)(a.default,{type:"default"})}),(0,r.jsx)(o.default,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])}},function(e){e.O(0,[774,296,126,643,459,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);