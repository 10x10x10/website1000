(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8018:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),i=(t(7294),t(9459));function c(e){var n=i.a5.links,t=i.a5.description,c=i.a5.copyright;return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"link-icon-container",children:n.map((function(e){return(0,r.jsx)("a",{href:e.link,children:(0,r.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,r.jsx)("p",{children:t}),(0,r.jsx)("p",{children:c})]})}},4053:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(5893),i=t(6610),c=t(5991),s=t(3349),a=t(5255),l=t(6089),o=t(7608),u=t(6156),f=t(7294),d=t(1664),h=t(9459),v=t(4184),j=t.n(v);function p(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,o.Z)(e);if(n){var i=(0,o.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)}}var m=function(e){(0,a.Z)(t,e);var n=p(t);function t(e){var r;return(0,i.Z)(this,t),r=n.call(this,e),(0,u.Z)((0,s.Z)(r),"toggleHeaderLinkHandler",(function(){var e=r.state.showHeaderLink;r.setState({showHeaderLink:!e})})),r.state={showHeaderLink:!1},r}return(0,c.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.location,t=(e.title,this.state.showHeaderLink);return(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("div",{className:"title-conatainer",children:(0,r.jsx)(d.default,{href:h.hu.links[0].link,children:(0,r.jsx)("a",{children:(0,r.jsx)("h1",{className:"title",children:"1000 Cheng"})})})}),(0,r.jsx)("div",{className:"flex-space"}),(0,r.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:t?(0,r.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,r.jsx)("img",{src:"/icons/menu.svg"})}),(0,r.jsx)("div",{className:j()("header-link-container",{"m-header-link-container-show":t}),children:h.hu.links.map((function(e){var t=e.link===n;return(0,r.jsx)(d.default,{href:t?"":e.link,children:(0,r.jsx)("a",{className:j()("header-link",{"header-link-acitve":t}),children:e.title})},e.link)}))})]})}}]),t}(f.Component)},6822:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(5893),i=t(6610),c=t(5991),s=t(5255),a=t(6089),l=t(7608),o=t(7294),u=t(1664),f=t(9459);function d(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}function h(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.filter((function(e){return e.type===n}));if(t>0){var i=[];for(var c in r)i.push(r[c]);return h(r),r.slice(0,t)}return r}var j=function(e){(0,s.Z)(t,e);var n=d(t);function t(e){var r;(0,i.Z)(this,t);var c=(r=n.call(this,e)).props,s=c.projectType,a=c.randomPick;return r.state={showProjects:v(f.o8.projects,s,a)},r}return(0,c.Z)(t,[{key:"render",value:function(){var e=this.state.showProjects;return(0,r.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,r.jsx)(u.default,{href:e.link,children:(0,r.jsxs)("a",{className:"project-view",children:[(0,r.jsx)("div",{className:"pseudo-cover"}),(0,r.jsx)("img",{src:e.cover,className:"cover"}),(0,r.jsx)("img",{src:e.hover,className:"hover"}),(0,r.jsx)("div",{className:"title-container",children:(0,r.jsx)("h3",{className:"title",children:e.title})})]})},e.link)}))})}}]),t}(o.Component)},6124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),i=t(9008),c=t(6822),s=t(4053),a=t(8018);function l(){var e="1000 Cheng";return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("link",{rel:"icon",href:"/icons/logo_32.png"})]}),(0,r.jsx)(s.default,{location:"/",title:e}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)(c.default,{type:"default"})}),(0,r.jsx)(a.default,{})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])}},function(e){e.O(0,[149,459,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);