(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{8018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),c=(n(7294),n(9459));function i(e){var t=c.a5.links,n=c.a5.description,i=c.a5.copyright;return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,r.jsx)("a",{href:e.link,children:(0,r.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("p",{children:i})]})}},2374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),c=(n(7294),n(9008));function i(e){var t="UA-171392879-1";return(0,r.jsxs)(c.default,{children:[(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,r.jsx)("script",{children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},7810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),c=n(6156),i=(n(7294),n(9008)),a=n(2374),s=n(9459);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t,n=e.type,c=e.id,o=s.Bm.defaultProjectMetaData;switch(n){case"project":(t=s.o8.projects.find((function(e){return e.id==c}))||{}).ogImage=t.cover;break;case"index":t=s.Bm.indexMetaData;break;case"lab":t=s.Bm.labMetaData;break;case"about":t=s.Bm.aboutMetaData;break;default:t={}}var u=l(l(l({},o),t),{},{title:t.title?"".concat(t.title," | ").concat(o.title):"".concat(o.title)||"--"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{}),(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("link",{rel:"icon",href:u.icon}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("meta",{name:"author",content:u.author}),(0,r.jsx)("meta",{property:"og:type",content:u.ogType}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:image",content:u.ogImage}),(0,r.jsx)("meta",{property:"og:site_name",content:u.ogSiteName}),(0,r.jsx)("meta",{property:"og:url",content:u.ogUrl})]})]})}},4053:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),c=n(6610),i=n(5991),a=n(3349),s=n(5255),o=n(6089),l=n(7608),u=n(6156),d=n(7294),f=n(1664),h=n(9459),p=n(4184),j=n.n(p);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var c=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var v=function(e){(0,s.Z)(n,e);var t=m(n);function n(e){var r;return(0,c.Z)(this,n),r=t.call(this,e),(0,u.Z)((0,a.Z)(r),"handleScroll",(function(e){var t=document.documentElement.scrollTop,n=r.lastScrollTop-t;if(r.lastScrollTop=t,Math.abs(n)>10){var c=n<=0;r.setState({hideHeader:c})}})),(0,u.Z)((0,a.Z)(r),"toggleHeaderLinkHandler",(function(){var e=r.state.showHeaderLink;r.setState({showHeaderLink:!e})})),r.state={showHeaderLink:!1,hideHeader:0},r.lastScrollTop=0,r}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.type,t=this.state,n=t.showHeaderLink;t.hideHeader;return(0,r.jsxs)("div",{className:j()("header",{"falling-down-header":this.state.hideHeader}),children:[(0,r.jsx)("div",{className:"title-conatainer",children:(0,r.jsx)(f.default,{href:h.hu.links[0].link,children:(0,r.jsx)("a",{children:(0,r.jsx)("h1",{className:"title",children:"1000 Cheng"})})})}),(0,r.jsx)("div",{className:"flex-space"}),(0,r.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:n?(0,r.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,r.jsx)("img",{src:"/icons/menu.svg"})}),(0,r.jsx)("div",{className:j()("header-link-container",{"m-header-link-container-show":n}),onClick:this.toggleHeaderLinkHandler,children:h.hu.links.map((function(t,n){var c=t.type===e;return(0,r.jsxs)("div",{className:"header-link-item",children:[(0,r.jsx)(f.default,{href:c?"":t.link,children:(0,r.jsx)("a",{className:j()("header-link",{"header-link-active":c}),children:t.title})}),n+1<h.hu.links.length?(0,r.jsx)("span",{className:"header-link-spliter",children:"|"}):null]},t.link)}))})]})}}]),n}(d.Component)},7599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),c=(n(7294),n(4053)),i=n(8018),a=n(7810),s=n(6822);function o(e){var t=e.id,n=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{type:"project",id:t}),(0,r.jsx)(c.default,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"project-container",children:[n,(0,r.jsxs)("div",{className:"related-project-container",children:[(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:"Related Projects"})}),(0,r.jsx)(s.default,{projectType:"default",randomPick:3})]})]})}),(0,r.jsx)(i.default,{})]})}},6822:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),c=n(6610),i=n(5991),a=n(5255),s=n(6089),o=n(7608),l=n(7294),u=n(1664),d=n(9459);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.Z)(e);if(t){var c=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}function h(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.filter((function(e){return e.type===t}));if(n>0){var c=[];for(var i in r)c.push(r[i]);return h(r),r.slice(0,n)}return r}var j=function(e){(0,a.Z)(n,e);var t=f(n);function n(e){var r;(0,c.Z)(this,n);var i=(r=t.call(this,e)).props,a=i.projectType,s=i.randomPick;return r.state={showProjects:p(d.o8.projects,a,s)},r}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.state.showProjects;return(0,r.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,r.jsx)(u.default,{href:e.link,children:(0,r.jsxs)("a",{className:"project-view",children:[(0,r.jsx)("div",{className:"pseudo-cover"}),(0,r.jsx)("img",{src:e.cover,className:"cover",alt:"",title:""}),(0,r.jsx)("img",{src:e.hover,className:"hover",alt:"",title:""}),(0,r.jsx)("div",{className:"title-container",children:(0,r.jsx)("h3",{className:"title",children:e.title})})]})},e.id)}))})}}]),n}(l.Component)},9998:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Project",function(){return n(7599)}])}},function(e){e.O(0,[149,459,774,888,179],(function(){return t=9998,e(e.s=t);var t}));var t=e.O();_N_E=t}]);