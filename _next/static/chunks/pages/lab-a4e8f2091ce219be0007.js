(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{4772:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(9459),a=function(e){for(var t=e.split("."),n=r.aT,a=0;a<t.length;a++)n=n[t[a]];return n}},8018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),a=(n(7294),n(9459));function i(e){var t=a.a5.links,n=a.a5.description,i=a.a5.copyright;return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,r.jsx)("a",{href:e.link,children:(0,r.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("p",{children:i})]})}},2374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),a=(n(7294),n(9008));function i(e){var t="UA-171392879-1";return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,r.jsx)("script",{children:"\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', '".concat(t,"');\n        ")})]})}},7810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),a=n(6156),i=(n(7294),n(9008)),c=n(2374),s=n(9459);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t,n=e.type,a=e.id,l=s.Bm.defaultProjectMetaData;switch(n){case"project":(t=s.o8.projects.find((function(e){return e.id==a}))||{}).ogImage=t.cover;break;case"index":t=s.Bm.indexMetaData;break;case"lab":t=s.Bm.labMetaData;break;case"about":t=s.Bm.aboutMetaData;break;default:t={}}var u=o(o(o({},l),t),{},{title:t.title?"".concat(t.title," | ").concat(l.title):"".concat(l.title)||"--"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{}),(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("link",{rel:"icon",href:u.icon}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("meta",{name:"author",content:u.author}),(0,r.jsx)("meta",{property:"og:type",content:u.ogType}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:image",content:u.ogImage}),(0,r.jsx)("meta",{property:"og:site_name",content:u.ogSiteName}),(0,r.jsx)("meta",{property:"og:url",content:u.ogUrl})]})]})}},4053:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893),a=n(6610),i=n(5991),c=n(3349),s=n(5255),l=n(6089),o=n(7608),u=n(6156),d=n(7294),f=n(1664),h=n(9459),p=n(4184),m=n.n(p);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.Z)(e);if(t){var a=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var g=function(e){(0,s.Z)(n,e);var t=j(n);function n(e){var r;return(0,a.Z)(this,n),r=t.call(this,e),(0,u.Z)((0,c.Z)(r),"toggleHeaderLinkHandler",(function(){var e=r.state.showHeaderLink;r.setState({showHeaderLink:!e})})),r.state={showHeaderLink:!1},r}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props.type,t=this.state.showHeaderLink;return(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("div",{className:"title-conatainer",children:(0,r.jsx)(f.default,{href:h.hu.links[0].link,children:(0,r.jsx)("a",{children:(0,r.jsx)("h1",{className:"title",children:"1000 Cheng"})})})}),(0,r.jsx)("div",{className:"flex-space"}),(0,r.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:t?(0,r.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,r.jsx)("img",{src:"/icons/menu.svg"})}),(0,r.jsx)("div",{className:m()("header-link-container",{"m-header-link-container-show":t}),onClick:this.toggleHeaderLinkHandler,children:h.hu.links.map((function(t,n){var a=t.type===e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.default,{href:a?"":t.link,children:(0,r.jsx)("a",{className:m()("header-link",{"header-link-acitve":a}),children:t.title})},t.link),n+1<h.hu.links.length?(0,r.jsx)("span",{className:"header-link-spliter",children:"|"}):null]})}))})]})}}]),n}(d.Component)},2994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),a=n(6156),i=(n(7294),n(4184)),c=n.n(i),s=n(4772);function l(e){var t=e.links,n=void 0===t?"":t,i=e.title,l=void 0===i?"":i,o=e.col,u=void 0===o?0:o,d=e.mCol,f=void 0===d?u:d,h=/(.+)\?\[(\d+)[x*](\d+)\]/;function p(e){var t=function(e,t){var n=e.toLowerCase();return t.some((function(e){return n.endsWith(e)}))},n=function(e){var t=e.match(h);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(e),a=n.urlLink;n.width,n.height;return t(a,[".mp4"])?(0,r.jsx)("video",{className:"media-video",src:a,loading:"lazy",autoPlay:"true",loop:"true",muted:"true",playsinline:"",width:"100%",type:"video/mp4"}):t(a,[".png",".jpg",".jpeg"])?(0,r.jsx)("img",{className:"media-img",src:a,loading:"lazy",width:"100%",alt:""}):t(a,[".gif"])?(0,r.jsx)("img",{className:"media-gif",src:a,loading:"lazy",width:"100%",alt:""}):null}return(0,r.jsxs)("div",{className:"media-list-container",children:[l?(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:l})}):null,(0,r.jsx)("div",{className:c()("grid-c",function(e,t){var n,r="grid-c"+e,i="m-grid-c"+t;return n={},(0,a.Z)(n,r,!0),(0,a.Z)(n,i,!0),n}(u,f)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,s.W)(e)})).filter((function(e){return void 0!==e}))}(n).map((function(e){return(0,r.jsx)("div",{className:"media-container",children:p(e)},e)}))})]})}},8782:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),a=n(2994),i=n(4053),c=n(8018),s=n(7810);function l(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.default,{type:"lab"}),(0,r.jsx)(i.default,{type:"lab"}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"project-container",children:(0,r.jsx)(a.default,{col:4,mCol:2,links:["lab.lab01","lab.lab02","lab.lab04","lab.lab05","lab.lab06","lab.lab07","lab.lab08","lab.lab09","lab.lab10","lab.lab11","lab.lab12"]})})}),(0,r.jsx)(c.default,{})]})}},5291:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab",function(){return n(8782)}])}},function(e){e.O(0,[65,459,774,888,179],(function(){return t=5291,e(e.s=t);var t}));var t=e.O();_N_E=t}]);