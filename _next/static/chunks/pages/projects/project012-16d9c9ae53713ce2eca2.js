(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{4772:function(e,n,r){"use strict";r.d(n,{W:function(){return i}});var t=r(9459),i=function(e){for(var n=e.split("."),r=t.aT,i=0;i<n.length;i++)r=r[n[i]];return r}},9390:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r(5893),i=r(6610),c=r(5991),o=r(3349),s=r(5255),a=r(6089),l=r(7608),u=r(6156),d=r(7294),h=r(4184),f=r.n(h);function p(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return(0,a.Z)(this,r)}}var j=function(e){(0,s.Z)(r,e);var n=p(r);function r(e){var t;return(0,i.Z)(this,r),t=n.call(this,e),(0,u.Z)((0,o.Z)(t),"toggleHandler",(function(e){var n=t.state.isFold;t.setState({isFold:!n})})),t.state={isFold:!0},t}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.state.isFold,n=this.props,r=n.foldable,i=n.children,c=f()("credit-list",r?{fold:e,unfold:!e}:{});return(0,t.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,t.jsx)("h2",{children:"Credits"}),(0,t.jsx)("div",{className:c,children:i}),r&&e?(0,t.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),r}(d.Component);j.defaultProps={foldable:!1}},841:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r(5893),i=(r(7294),r(4772));function c(e){var n=e.link,r=void 0===n?"":n;return(0,t.jsx)("div",{className:"video-container",children:(0,t.jsx)("iframe",{src:(0,i.W)(r),scrolling:"no",frameBorder:"0",loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"true"})})}},8018:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r(5893),i=(r(7294),r(9459));function c(e){var n=i.a5.links,r=i.a5.description,c=i.a5.copyright;return(0,t.jsxs)("div",{className:"footer",children:[(0,t.jsx)("div",{className:"link-icon-container",children:n.map((function(e){return(0,t.jsx)("a",{href:e.link,children:(0,t.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,t.jsx)("p",{children:r}),(0,t.jsx)("p",{children:c})]})}},4053:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x}});var t=r(5893),i=r(6610),c=r(5991),o=r(3349),s=r(5255),a=r(6089),l=r(7608),u=r(6156),d=r(7294),h=r(1664),f=r(9459),p=r(4184),j=r.n(p);function v(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return(0,a.Z)(this,r)}}var x=function(e){(0,s.Z)(r,e);var n=v(r);function r(e){var t;return(0,i.Z)(this,r),t=n.call(this,e),(0,u.Z)((0,o.Z)(t),"toggleHeaderLinkHandler",(function(){var e=t.state.showHeaderLink;t.setState({showHeaderLink:!e})})),t.state={showHeaderLink:!1},t}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.props,n=e.location,r=(e.title,this.state.showHeaderLink);return(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("div",{className:"title-conatainer",children:(0,t.jsx)(h.default,{href:f.hu.links[0].link,children:(0,t.jsx)("a",{children:(0,t.jsx)("h1",{className:"title",children:"1000 Cheng"})})})}),(0,t.jsx)("div",{className:"flex-space"}),(0,t.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:r?(0,t.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,t.jsx)("img",{src:"/icons/menu.svg"})}),(0,t.jsx)("div",{className:j()("header-link-container",{"m-header-link-container-show":r}),children:f.hu.links.map((function(e){var r=e.link===n;return(0,t.jsx)(h.default,{href:r?"":e.link,children:(0,t.jsx)("a",{className:j()("header-link",{"header-link-acitve":r}),children:e.title})},e.link)}))})]})}}]),r}(d.Component)},2994:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var t=r(5893),i=r(6156),c=(r(7294),r(4184)),o=r.n(c),s=r(4772);function a(e){var n=e.links,r=void 0===n?"":n,c=e.title,a=void 0===c?"":c,l=e.col,u=void 0===l?0:l,d=e.mCol,h=void 0===d?u:d;function f(e){return function(e){var n=e.toLowerCase();return[".mp4"].some((function(e){return n.endsWith(e)}))}(e)?(0,t.jsx)("video",{src:e,loading:"lazy",autoPlay:"true",loop:"true",muted:"true",playsinline:"",width:"100%",type:"video/mp4"}):function(e){var n=e.toLowerCase();return[".gif",".png",".jpg",".jpeg"].some((function(e){return n.endsWith(e)}))}(e)?(0,t.jsx)("img",{src:e,loading:"lazy",width:"100%"}):null}return(0,t.jsxs)("div",{className:"media-list-container",children:[a?(0,t.jsx)("div",{className:"project-text-container project-view-title",children:(0,t.jsx)("h2",{children:a})}):null,(0,t.jsx)("div",{className:o()("grid-c",function(e,n){var r,t="grid-c"+e,c="m-grid-c"+n;return r={},(0,i.Z)(r,t,!0),(0,i.Z)(r,c,!0),r}(u,h)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,s.W)(e)})).filter((function(e){return void 0!==e}))}(r).map((function(e){return(0,t.jsx)("div",{className:"background-video",children:f(e)},e)}))})]})}},7599:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(5893),i=(r(7294),r(9008)),c=r(4053),o=r(8018),s=r(6822),a=r(9459);function l(e){var n=e.id,r=a.o8.projects.find((function(e){return e.id==n}))||{title:"N/A"};return(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:r.title}),(0,t.jsx)("link",{rel:"icon",href:"/icons/logo_32.png"})]}),(0,t.jsx)(c.default,{}),(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"project-container",children:[e.children,(0,t.jsxs)("div",{className:"related-project-container",children:[(0,t.jsx)("div",{className:"project-text-container project-view-title",children:(0,t.jsx)("h2",{children:"Related Projects"})}),(0,t.jsx)(s.default,{projectType:"default",randomPick:3})]})]})}),(0,t.jsx)(o.default,{})]})}},6822:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r(5893),i=r(6610),c=r(5991),o=r(5255),s=r(6089),a=r(7608),l=r(7294),u=r(1664),d=r(9459);function h(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=(0,a.Z)(e);if(n){var i=(0,a.Z)(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return(0,s.Z)(this,r)}}function f(e){for(var n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),t=[e[r],e[n]];e[n]=t[0],e[r]=t[1]}}function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=e.filter((function(e){return e.type===n}));if(r>0){var i=[];for(var c in t)i.push(t[c]);return f(t),t.slice(0,r)}return t}var j=function(e){(0,o.Z)(r,e);var n=h(r);function r(e){var t;(0,i.Z)(this,r);var c=(t=n.call(this,e)).props,o=c.projectType,s=c.randomPick;return t.state={showProjects:p(d.o8.projects,o,s)},t}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.state.showProjects;return(0,t.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,t.jsx)(u.default,{href:e.link,children:(0,t.jsxs)("a",{className:"project-view",children:[(0,t.jsx)("div",{className:"pseudo-cover"}),(0,t.jsx)("img",{src:e.cover,className:"cover"}),(0,t.jsx)("img",{src:e.hover,className:"hover"}),(0,t.jsx)("div",{className:"title-container",children:(0,t.jsx)("h3",{className:"title",children:e.title})})]})},e.link)}))})}}]),r}(l.Component)},5080:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return i}});var t=r(5893);r(7294);function i(e){var n=e.children;return(0,t.jsx)("div",{className:"project-text-container",children:n})}},9993:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(5893),i=(r(7294),r(7599)),c=r(2994),o=r(9390),s=r(841),a=r(5080);function l(e){return(0,t.jsxs)(i.default,{id:"project012",children:[(0,t.jsx)(s.default,{link:"project012.video_main"}),(0,t.jsxs)(a.default,{children:[(0,t.jsx)("h1",{children:"Gogoro VIVA MIX \u65b0\u8eca\u767c\u8868\u6703"}),(0,t.jsx)("p",{children:"2021 \u7b2c\u4e00\u5b63\uff0cGogoro \u767c\u8868\u4e86\u5168\u65b0\u8eca\u6b3e \u2014 VIVA MIX\u3002"}),(0,t.jsx)("p",{children:"\u4e00\u5982\u5176\u540d\u5f37\u8abf\u6df7\u642d\u7cbe\u795e\uff0c\u517c\u5177\u4ee5\u5f80\u8eca\u578b\u7684\u7279\u9ede\uff0c\u4e5f\u4e00\u8cab\u5728\u9a0e\u4e58\u9ad4\u9a57\u79d1\u6280\u4e0a\u6301\u7e8c\u7a81\u7834\uff0c\u66f4\u52a0\u5165 POP \u500b\u6027\u5316\u914d\u4ef6\u7cfb\u7d71\uff0c\u8207\u7d50\u5408\u97f3\u6a02\u4e3b\u984c\u5143\u7d20\u7684\u591a\u6b3e\u8eca\u8272\uff0c\u81ea\u6211\u98a8\u683c\u66f4\u52a0\u9bae\u660e\u3002 VIVA MIX \u662f\u8fd1\u671f Gogoro \u5e73\u8861\u5e02\u5834\u9700\u6c42\u3001\u4f7f\u7528\u8005\u9ad4\u9a57\u8207\u54c1\u724c\u50f9\u503c\u7684\u5dd4\u5cf0\u4e4b\u4f5c\u3002\u800c Gogoro \u9080\u8acb\u5718\u968a\u4e00\u8d77\u5171\u540c\u7b56\u5283\u6b64\u8eca\u6b3e\u767b\u5834\u79c0\u3002"})]}),(0,t.jsx)(c.default,{col:1,links:["project012.video_02","project012.video_01_s"]}),(0,t.jsxs)(o.default,{foldable:!0,children:[(0,t.jsx)("p",{children:"Client : Gogoro"}),(0,t.jsx)("p",{children:"Chief Director : Gogoro Creative Team"}),(0,t.jsx)("p",{children:"Director & Executive : Ultra Combos"}),(0,t.jsx)("p",{children:"Project Manager : William Liu"}),(0,t.jsx)("p",{children:"Producer : Nate Wu"}),(0,t.jsx)("p",{children:"Creative Director : Jay Tseng"}),(0,t.jsx)("p",{children:"Art Director : Ting-An Ho"}),(0,t.jsx)("p",{children:"Motion Designer : Ting-An Ho, Hauzhen Yen, Lynn Chiang, Group.G, 1000 Cheng"}),(0,t.jsx)("p",{children:"Generative Designer : Ke Jyun Wu"}),(0,t.jsx)("p",{children:"Character Design : Mix Code"}),(0,t.jsx)("p",{children:"Motion Capture Operator : MoonShine Animation"}),(0,t.jsx)("p",{children:"Choreographer : Les Petites Choses Production"}),(0,t.jsx)("p",{children:"Technology Director : Nate Wu"}),(0,t.jsx)("p",{children:"Programmer : Nate Wu, Hoba Yang, Wei-An Chen, Reng Tsai"}),(0,t.jsx)("p",{children:"Hardware Director : Herry Chang"}),(0,t.jsx)("p",{children:"Hardware Engineering : Herry Chang, Alex Lu, Chia-Yun Song, Chia-Wei Lin"}),(0,t.jsx)("p",{children:"Executor Team : Prolong Lai, Joyce Huang, Hsin Chen, Chi-feng Ying, Choong-Wei Ng"}),(0,t.jsx)("p",{children:"AGV Trackway Design : Glenn Huang"}),(0,t.jsx)("p",{children:"AGV Programming : Reng Tsai, Wei-An Chen, Chia-Yun Song, Nate Wu"}),(0,t.jsx)("p",{children:"AGV Technology Director : ECON Robot"}),(0,t.jsx)("p",{children:"Spatial Design & Construction : Event Design"}),(0,t.jsx)("p",{children:"Lighting Designer : Rokerfly Design"}),(0,t.jsx)("p",{children:"Music Designer : DJ QuestionMark\uff08Chi-Shuan Ying\uff09"}),(0,t.jsx)("p",{children:"Network Engineer : KlickKlack Communications"}),(0,t.jsx)("p",{children:"Stage Manager : Hsu Cheng Lei"}),(0,t.jsx)("p",{children:"Timecode Programming : Wei-An Chen"}),(0,t.jsx)("p",{children:"Visual Operator : Wei-An Chen"}),(0,t.jsx)("p",{children:"Rider Casting : OOAD"}),(0,t.jsx)("p",{children:"Program Director : YAHOO TV"}),(0,t.jsx)("p",{children:"Filming Team : Asking Gee"}),(0,t.jsx)("p",{children:"Editor : Asking Gee, Nanez Chen"})]})]})}},2876:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/project012",function(){return r(9993)}])}},function(e){e.O(0,[149,459,774,888,179],(function(){return n=2876,e(e.s=n);var n}));var n=e.O();_N_E=n}]);