(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8018:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=(r(7294),r(9459));function c(e){var t=i.a5.links,r=i.a5.description,c=i.a5.copyright;return(0,n.jsxs)("div",{className:"footer",children:[(0,n.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,n.jsx)("a",{href:e.link,children:(0,n.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,n.jsx)("p",{children:r}),(0,n.jsx)("p",{children:c})]})}},7810:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),i=r(6156),c=(r(7294),r(9008)),a=r(9459);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){var t,r=e.type,i=e.id,s=a.Bm.defaultProjectMetaData;switch(r){case"project":(t=a.o8.projects.find((function(e){return e.id==i}))||{}).ogImage=t.cover;break;case"index":t=a.Bm.indexMetaData;break;case"lab":t=a.Bm.labMetaData;break;case"about":t=a.Bm.aboutMetaData;break;default:t={}}var l=o(o(o({},s),t),{},{title:t.title?"".concat(t.title," | ").concat(s.title):"".concat(s.title)||"--"});return(0,n.jsxs)(c.default,{children:[(0,n.jsx)("title",{children:l.title}),(0,n.jsx)("link",{rel:"icon",href:l.icon}),(0,n.jsx)("meta",{name:"description",content:l.description}),(0,n.jsx)("meta",{name:"author",content:l.author}),(0,n.jsx)("meta",{property:"og:type",content:l.ogType}),(0,n.jsx)("meta",{property:"og:title",content:l.title}),(0,n.jsx)("meta",{property:"og:description",content:l.description}),(0,n.jsx)("meta",{property:"og:image",content:l.ogImage}),(0,n.jsx)("meta",{property:"og:site_name",content:l.ogSiteName}),(0,n.jsx)("meta",{property:"og:url",content:l.ogUrl})]})}},4053:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),i=r(6610),c=r(5991),a=r(3349),s=r(5255),o=r(6089),l=r(7608),u=r(6156),f=r(7294),d=r(1664),h=r(9459),p=r(4184),j=r.n(p);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var m=function(e){(0,s.Z)(r,e);var t=v(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,a.Z)(n),"toggleHeaderLinkHandler",(function(){var e=n.state.showHeaderLink;n.setState({showHeaderLink:!e})})),n.state={showHeaderLink:!1},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.props.type,t=this.state.showHeaderLink;return(0,n.jsxs)("div",{className:"header",children:[(0,n.jsx)("div",{className:"title-conatainer",children:(0,n.jsx)(d.default,{href:h.hu.links[0].link,children:(0,n.jsx)("a",{children:(0,n.jsx)("h1",{className:"title",children:"1000 Cheng"})})})}),(0,n.jsx)("div",{className:"flex-space"}),(0,n.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:t?(0,n.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,n.jsx)("img",{src:"/icons/menu.svg"})}),(0,n.jsx)("div",{className:j()("header-link-container",{"m-header-link-container-show":t}),onClick:this.toggleHeaderLinkHandler,children:h.hu.links.map((function(t,r){var i=t.type===e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.default,{href:i?"":t.link,children:(0,n.jsx)("a",{className:j()("header-link",{"header-link-acitve":i}),children:t.title})},t.link),r+1<h.hu.links.length?(0,n.jsx)("span",{className:"header-link-spliter",children:"|"}):null]})}))})]})}}]),r}(f.Component)},6822:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=r(6610),c=r(5991),a=r(5255),s=r(6089),o=r(7608),l=r(7294),u=r(1664),f=r(9459);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,o.Z)(e);if(t){var i=(0,o.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}function h(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.filter((function(e){return e.type===t}));if(r>0){var i=[];for(var c in n)i.push(n[c]);return h(n),n.slice(0,r)}return n}var j=function(e){(0,a.Z)(r,e);var t=d(r);function r(e){var n;(0,i.Z)(this,r);var c=(n=t.call(this,e)).props,a=c.projectType,s=c.randomPick;return n.state={showProjects:p(f.o8.projects,a,s)},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.state.showProjects;return(0,n.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,n.jsx)(u.default,{href:e.link,children:(0,n.jsxs)("a",{className:"project-view",children:[(0,n.jsx)("div",{className:"pseudo-cover"}),(0,n.jsx)("img",{src:e.cover,className:"cover",alt:"",title:""}),(0,n.jsx)("img",{src:e.hover,className:"hover",alt:"",title:""}),(0,n.jsx)("div",{className:"title-container",children:(0,n.jsx)("h3",{className:"title",children:e.title})})]})},e.link)}))})}}]),r}(l.Component)},6124:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893),i=r(6822),c=r(4053),a=r(8018),s=r(7810);function o(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(s.default,{type:"index"}),(0,n.jsx)(c.default,{type:"index"}),(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(i.default,{type:"default"})}),(0,n.jsx)(a.default,{})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6124)}])}},function(e){e.O(0,[702,459,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);