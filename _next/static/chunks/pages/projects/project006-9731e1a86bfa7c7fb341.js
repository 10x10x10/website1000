(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{4772:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});var n=r(9459),i=function(e){for(var t=e.split("."),r=n.aT,i=0;i<t.length;i++)r=r[t[i]];return r}},9390:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=r(6610),c=r(5991),a=r(3349),o=r(5255),s=r(6089),l=r(7608),u=r(6156),d=r(7294),f=r(4184),h=r.n(f);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var j=function(e){(0,o.Z)(r,e);var t=p(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,a.Z)(n),"toggleHandler",(function(e){var t=n.state.isFold;n.setState({isFold:!t})})),n.state={isFold:!0},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.state.isFold,t=this.props,r=t.foldable,i=t.children,c=h()("credit-list",r?{fold:e,unfold:!e}:{});return(0,n.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,n.jsx)("h2",{children:"Credits"}),(0,n.jsx)("div",{className:c,children:i}),r&&e?(0,n.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),r}(d.Component);j.defaultProps={foldable:!1}},841:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=(r(7294),r(4772));function c(e){var t=e.link,r=void 0===t?"":t;return(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)("iframe",{src:(0,i.W)(r),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8018:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=(r(7294),r(9459));function c(e){var t=i.a5.links,r=i.a5.description,c=i.a5.copyright;return(0,n.jsxs)("div",{className:"footer",children:[(0,n.jsx)("div",{className:"link-icon-container",children:t.map((function(e){return(0,n.jsx)("a",{href:e.link,children:(0,n.jsx)("img",{src:e.icon,className:"icon"})},e.link)}))}),(0,n.jsx)("p",{children:r}),(0,n.jsx)("p",{children:c})]})}},7810:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),i=r(6156),c=(r(7294),r(9008)),a=r(9459);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){var t,r=e.type,i=e.id,o=a.Bm.defaultProjectMetaData;switch(r){case"project":(t=a.o8.projects.find((function(e){return e.id==i}))||{}).ogImage=t.cover;break;case"index":t=a.Bm.indexMetaData;break;case"lab":t=a.Bm.labMetaData;break;case"about":t=a.Bm.aboutMetaData;break;default:t={}}var l=s(s(s({},o),t),{},{title:t.title?"".concat(t.title," | ").concat(o.title):"".concat(o.title)||"--"});return(0,n.jsxs)(c.default,{children:[(0,n.jsx)("title",{children:l.title}),(0,n.jsx)("link",{rel:"icon",href:l.icon}),(0,n.jsx)("meta",{name:"description",content:l.description}),(0,n.jsx)("meta",{name:"author",content:l.author}),(0,n.jsx)("meta",{property:"og:type",content:l.ogType}),(0,n.jsx)("meta",{property:"og:title",content:l.title}),(0,n.jsx)("meta",{property:"og:description",content:l.description}),(0,n.jsx)("meta",{property:"og:image",content:l.ogImage}),(0,n.jsx)("meta",{property:"og:site_name",content:l.ogSiteName}),(0,n.jsx)("meta",{property:"og:url",content:l.ogUrl})]})}},4053:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),i=r(6610),c=r(5991),a=r(3349),o=r(5255),s=r(6089),l=r(7608),u=r(6156),d=r(7294),f=r(1664),h=r(9459),p=r(4184),j=r.n(p);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var m=function(e){(0,o.Z)(r,e);var t=v(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,a.Z)(n),"toggleHeaderLinkHandler",(function(){var e=n.state.showHeaderLink;n.setState({showHeaderLink:!e})})),n.state={showHeaderLink:!1},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.props.type,t=this.state.showHeaderLink;return(0,n.jsxs)("div",{className:"header",children:[(0,n.jsx)("div",{className:"title-conatainer",children:(0,n.jsx)(f.default,{href:h.hu.links[0].link,children:(0,n.jsx)("a",{children:(0,n.jsx)("h1",{className:"title",children:"1000 Cheng"})})})}),(0,n.jsx)("div",{className:"flex-space"}),(0,n.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:t?(0,n.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,n.jsx)("img",{src:"/icons/menu.svg"})}),(0,n.jsx)("div",{className:j()("header-link-container",{"m-header-link-container-show":t}),children:h.hu.links.map((function(t){var r=t.type===e;return(0,n.jsx)(f.default,{href:r?"":t.link,children:(0,n.jsx)("a",{className:j()("header-link",{"header-link-acitve":r}),children:t.title})},t.link)}))})]})}}]),r}(d.Component)},2994:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),i=r(6156),c=(r(7294),r(4184)),a=r.n(c),o=r(4772);function s(e){var t=e.links,r=void 0===t?"":t,c=e.title,s=void 0===c?"":c,l=e.col,u=void 0===l?0:l,d=e.mCol,f=void 0===d?u:d,h=/(.+)\?\[(\d+)[x*](\d+)\]/;function p(e){var t=function(e,t){var r=e.toLowerCase();return t.some((function(e){return r.endsWith(e)}))},r=function(e){var t=e.match(h);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}}(e),i=r.urlLink;r.width,r.height;return t(i,[".mp4"])?(0,n.jsx)("video",{className:"media-video",src:i,loading:"lazy",autoPlay:"true",loop:"true",muted:"true",playsinline:"",width:"100%",type:"video/mp4"}):t(i,[".png",".jpg",".jpeg"])?(0,n.jsx)("img",{className:"media-img",src:i,loading:"lazy",width:"100%",alt:""}):t(i,[".gif"])?(0,n.jsx)("img",{className:"media-gif",src:i,loading:"lazy",width:"100%",alt:""}):null}return(0,n.jsxs)("div",{className:"media-list-container",children:[s?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:s})}):null,(0,n.jsx)("div",{className:a()("grid-c",function(e,t){var r,n="grid-c"+e,c="m-grid-c"+t;return r={},(0,i.Z)(r,n,!0),(0,i.Z)(r,c,!0),r}(u,f)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return(0,o.W)(e)})).filter((function(e){return void 0!==e}))}(r).map((function(e){return(0,n.jsx)("div",{className:"media-container",children:p(e)},e)}))})]})}},7599:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),i=(r(7294),r(4053)),c=r(8018),a=r(7810),o=r(6822);function s(e){var t=e.id,r=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsx)(a.default,{type:"project",id:t}),(0,n.jsx)(i.default,{}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"project-container",children:[r,(0,n.jsxs)("div",{className:"related-project-container",children:[(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:"Related Projects"})}),(0,n.jsx)(o.default,{projectType:"default",randomPick:3})]})]})}),(0,n.jsx)(c.default,{})]})}},6822:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=r(6610),c=r(5991),a=r(5255),o=r(6089),s=r(7608),l=r(7294),u=r(1664),d=r(9459);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}function h(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.filter((function(e){return e.type===t}));if(r>0){var i=[];for(var c in n)i.push(n[c]);return h(n),n.slice(0,r)}return n}var j=function(e){(0,a.Z)(r,e);var t=f(r);function r(e){var n;(0,i.Z)(this,r);var c=(n=t.call(this,e)).props,a=c.projectType,o=c.randomPick;return n.state={showProjects:p(d.o8.projects,a,o)},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.state.showProjects;return(0,n.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map((function(e){return(0,n.jsx)(u.default,{href:e.link,children:(0,n.jsxs)("a",{className:"project-view",children:[(0,n.jsx)("div",{className:"pseudo-cover"}),(0,n.jsx)("img",{src:e.cover,className:"cover"}),(0,n.jsx)("img",{src:e.hover,className:"hover"}),(0,n.jsx)("div",{className:"title-container",children:(0,n.jsx)("h3",{className:"title",children:e.title})})]})},e.link)}))})}}]),r}(l.Component)},5080:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);r(7294);function i(e){var t=e.children;return(0,n.jsx)("div",{className:"project-text-container",children:t})}},1190:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),i=(r(7294),r(7599)),c=r(2994),a=r(9390),o=r(841),s=r(5080);function l(e){return(0,n.jsxs)(i.default,{id:"project006",children:[(0,n.jsx)(o.default,{link:"project006.video_main"}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)("h1",{children:"DigiWave 2020\u300a\u9059\u8996 Clairvoyance\u300b"}),(0,n.jsx)("p",{children:"\u300c\u9059\u8996\u300d\u4e00\u8a5e\u70ba\u5c08\u6709\u540d\u8a5e\uff0c\u4fc2\u6307\u80fd\u8d85\u8d8a\u6b63\u5e38\u8996\u529b\u770b\u5230\u9059\u9060\u5f7c\u65b9\u3001\u751a\u81f3\u4e0d\u540c\u6642\u7a7a\u5916\u666f\u8c61\u7684\u7279\u6b8a\u73fe\u8c61\uff1b \u6211\u5011\u8a8d\u70ba\u6b64\u7fa9\u8cbc\u5207\u4e86\u5f62\u5bb9\u4e86\u6240\u6709\u5c0d\u65bc\u9059\u9060\u7684\u672a\u4f86\u6709\u8457\u7121\u76e1\u597d\u5947\uff0c\u4e0d\u65b7\u900f\u904e\u60f3\u50cf\u529b\u8207\u79d1\u6280\u63a8\u52d5\u8457\u4e16\u754c\u7684\u4eba\u5011\uff0c\u65bc\u662f\u4ee5\u6b64\u70ba\u4e3b\u984c\u6253\u9020\u4e86\u9019\u4ef6\u5de8\u5927\u7684\u5f71\u50cf\u4f5c\u54c1\u3002 \u9059\u8996\u7684\u8868\u73fe\u5f62\u5f0f\u4ee5\u5bec\u95ca\u7684\u7acb\u9762\u8207\u6975\u9577\u7684\u5730\u9762\u5f71\u50cf\u6240\u7d44\u6210\u3002 \u7acb\u9762\u7684\u9060\u65b9\uff0c\u662f\u6211\u5011\u9059\u671b\u4e9f\u6b32\u6240\u898b\u4e4b\u8655\uff0c\u8173\u4e0b\u7684\u5730\u9762\uff0c\u5247\u662f\u6211\u5011\u6240\u9014\u7d93\u4e4b\u8def\uff1b \u900f\u904e\u5feb\u901f\u5728\u4e0d\u540c\u7a7a\u9593\u3001\u6642\u9593\uff0c\u751a\u81f3\u662f\u7dad\u5ea6\u7684\u91cf\u7d1a\u4e0a\u8df3\u8e8d\uff0c\u5c07\u89c0\u8005\u7684\u5168\u90e8\u89c0\u611f\u62c9\u5165\u300c\u9032\u4f4d\u300d\u7684\u9ad4\u9a57\uff0c\u4e26\u4ee5\u6b64\u4f5c\u54c1\u5411\u5922\u60f3\u5bb6\u5011\u81f4\u656c\u3002"}),(0,n.jsx)("p",{children:"\u70ba\u5b9a\u7fa9\u6b64\u4f5c\u54c1\u7684\u7cbe\u795e\uff0c\u6211\u5011\u7559\u4e0b\u4e86\u4e00\u4e9b\u6587\u5b57\uff1a"}),(0,n.jsx)("p",{children:"\u9762\u524d\u662f\u4e00\u500b\u65b9\u6846\u3002"}),(0,n.jsx)("p",{children:"\u65b9\u6846\u88e1\u6c92\u6709\u6642\u9593\u8207\u7a7a\u9593\u7684\u9650\u5236\uff0c\u4efb\u7531\u4f60\u7684\u610f\u5ff5\u98c4\u79fb\u3002"}),(0,n.jsx)("p",{children:"\u5c07\u51fa\u73fe\u7684\u662f\u672a\u898b\u904e\u7684\u5f7c\u65b9\uff0c\u672a\u89e3\u7684\u8b0e\u5718\u3002"}),(0,n.jsx)("p",{children:"\u7576\u7136\u4e5f\u6709\u95dc\u65bc\u4f60\u81ea\u5df1\uff0c\u90a3\u4e9b\u5df2\u77e5\u7684\u904e\u53bb\u8207\u672a\u77e5\u7684\u672a\u4f86\u3002"}),(0,n.jsx)("p",{children:"\u6700\u5f8c\u756b\u9762\u9700\u8981\u505c\u4e0b\u6642\uff0c\u4f60\u6703\u9078\u64c7\u7559\u5728\u54ea\u4e00\u523b\uff1f"})]}),(0,n.jsx)(c.default,{col:2,links:["project006.video_01_s","project006.video_02_s","project006.video_03_s","project006.video_04_s"]}),(0,n.jsx)(c.default,{col:1,title:"Motion Graphics",links:["project006.video_05_s"]}),(0,n.jsx)(c.default,{col:3,mCol:2,links:["project006.video_06_s","project006.video_07_s","project006.video_08_s","project006.video_09_s","project006.video_10_s","project006.video_11_s"]}),(0,n.jsxs)(a.default,{children:[(0,n.jsx)("p",{children:"Producer : Ke Jyun Wu"}),(0,n.jsx)("p",{children:"Art Director : Ting-An Ho"}),(0,n.jsx)("p",{children:"Motion Graphics : Ting-An Ho, Ke Jyun Wu, 1000 Cheng, Mal Liu"}),(0,n.jsx)("p",{children:"Interaction System Design, Execution : @chwan1"}),(0,n.jsx)("p",{children:"Programming : chia Reng Tsai"}),(0,n.jsx)("p",{children:"Sound Design : Zhen-Yang Huang (Triodust)"})]})]})}},9663:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/project006",function(){return r(1190)}])}},function(e){e.O(0,[149,459,774,888,179],(function(){return t=9663,e(e.s=t);var t}));var t=e.O();_N_E=t}]);