(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6689],{4772:function(e,n,t){"use strict";t.d(n,{W:function(){return r}});var i=t(9459),r=function(e){for(var n=e.split("."),t=i.aT,r=0;r<n.length;r++)t=t[n[r]];return t}},2994:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i=t(5893),r=t(6156),o=(t(7294),t(4184)),a=t.n(o),s=t(4772),u=t(1e3),c=(0,t(9231).ZP)(u.default);function l(e){var n=e.links,t=void 0===n?"":n,o=e.title,u=void 0===o?"":o,l=e.col,d=void 0===l?0:l,f=e.mCol,p=void 0===f?d:f;return(0,i.jsxs)("div",{className:"media-list-container",children:[u?(0,i.jsx)("div",{className:"project-text-container project-view-title",children:(0,i.jsx)("h2",{children:u})}):null,(0,i.jsx)("div",{className:a()("grid-c",function(e,n){var t,i="grid-c"+e,o="m-grid-c"+n;return t={},(0,r.Z)(t,i,!0),(0,r.Z)(t,o,!0),t}(d,p)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return e.startsWith("http")?e:(0,s.W)(e)})).filter((function(e){return void 0!==e}))}(t).map((function(e){return(0,i.jsx)("div",{className:"media-container",children:(0,i.jsx)(c,{link:e})},e)}))})]})}},4410:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var i=t(5893),r=(t(7294),(0,t(8213).zo)("div",{backgroundColor:"#88888820",borderRadius:8,padding:16}));function o(e){var n=e.children;return(0,i.jsx)(r,{children:n})}o.defaultProps={}},3271:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var i=t(5893),r=t(6156),o=t(7294),a=t(8213),s=t(2800),u=(0,a.zo)("div",{display:"flex",flexDirection:"column"}),c=(0,a.zo)("div",{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",transition:"max-height 0.5s",variants:{fold:{true:{maxHeight:200,cursor:"pointer","&::after":(0,r.Z)({content:"",position:"absolute",left:0,right:0,bottom:0,height:150,background:"#0B0C0E"},"background","linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)")},false:{maxHeight:1e4,cursor:"pointer","&::after":{display:"none"}}}}}),l=(0,a.zo)(s.TextStyle),d=(0,a.zo)("button",{fontSize:16,cursor:"pointer",width:80,padding:8,textAlign:"center",border:"1px #ffffff solid",backgroundColor:"#ffffff00",color:"#ffffff",boxSizing:"border-box",marginTop:16,"&:hover":{backgroundColor:"#ffffff",color:"#000000"}});function f(e){var n=e.content,t=e.foldable,r=(0,o.useState)(!1),a=r[0],s=r[1];return(0,i.jsxs)(u,{children:[(0,i.jsx)(c,{fold:!!t&&a,onClick:function(){return s(!a)},children:n.map((function(e,n){return(0,i.jsx)(l,{type:"normal",children:e},n)}))}),t&&(0,i.jsx)(d,{onClick:function(){return s(!1)},children:"More"})]})}f.defaultProps={content:[],foldable:!1}},1569:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i=t(5893),r=t(6814),o=(t(7294),(0,t(8213).zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:2,margin:"16px 0",backgroundColor:"#ffffff20"}));function a(e){return(0,r.Z)(e),(0,i.jsx)(o,{})}a.defaultProps={}},1507:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var i=t(5893),r=(t(7294),t(4772),(0,t(8213).zo)("div",{position:"relative",width:"100%",paddingTop:"".concat(56.25,"%"),"& iframe":{width:"100%",height:"100%",position:"absolute",top:0,left:0}}));function o(e){var n=e.link,t=void 0===n?"":n;return(0,i.jsx)(r,{children:(0,i.jsx)("iframe",{src:t,scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8919:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var i=t(5893),r=(t(7294),(0,t(8213).zo)("section",{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:10,columnGap:40}));function o(e){var n=e.children,t=e.sCol,o=e.lCol;return(0,i.jsx)(r,{css:{"@s":{gridTemplateColumns:"repeat(".concat(t,", 1fr)")},"@l":{gridTemplateColumns:"repeat(".concat(o,", 1fr)")}},children:n})}o.defaultProps={sCol:1,lCol:1}},2664:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i=t(5893),r=(t(7294),t(8213)),o=t(2800),a=(0,r.iv)({paddingLeft:24}),s=(0,r.zo)("ul",a,{}),u=(0,r.zo)("ol",a,{}),c=(0,r.zo)("li",o.TextStyle,{});function l(e){var n=e.type,t=e.content,r="order"===n?u:s;return(0,i.jsx)(r,{children:t.map((function(e,n){return(0,i.jsx)(c,{type:"normal",children:e},n)}))})}l.defaultProps={type:"order",content:[]}},522:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i=t(5893),r=(t(7294),t(8213)),o=(0,r.zo)("section",{boxSizing:"border-box",variants:{size:{s:{margin:"40px 0",padding:0},l:{margin:"80px 0",padding:0}}}});function a(e){var n=e.children;return(0,i.jsx)(o,{size:r.gN,children:n})}a.defaultProps={}},3653:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i=t(5893),r=t(6814),o=(t(7294),(0,t(8213).zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:32}));function a(e){return(0,r.Z)(e),(0,i.jsx)(o,{})}a.defaultProps={}},2800:function(e,n,t){"use strict";t.r(n),t.d(n,{TextStyle:function(){return o},default:function(){return s}});var i=t(5893),r=(t(7294),t(8213)),o=(0,r.iv)({padding:0,margin:0,marginBottom:8,lineHeight:"26px",wordWrap:"break-word",whiteSpace:"pre-line",variants:{type:{small:{fontSize:14,color:"#ffffff80"},normal:{fontSize:16,color:"#ffffffc0"},big:{fontSize:28,fontWeight:600,color:"#ffffffe0"}}}}),a=(0,r.zo)("p",o,{});function s(e){var n=e.content,t=e.type;return Array.isArray(n)?n.map((function(e,n){return(0,i.jsx)(a,{type:t,children:e},n)})):(0,i.jsx)(a,{type:t,children:n})}s.defaultProps={content:"",type:"normal"}},4974:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var i=t(5893),r=(t(7294),t(8213)),o=(0,r.iv)({padding:0,margin:0,marginBottom:16}),a=(0,r.zo)("h1",o,{fontSize:36,fontWeight:500}),s=(0,r.zo)("h2",o,{fontSize:28,fontWeight:400}),u=(0,r.zo)("h3",o,{fontSize:22,fontWeight:300});function c(e){var n=e.type,t=e.content;switch(n){case"h1":return(0,i.jsx)(a,{className:"convert-selection",children:t});case"h2":return(0,i.jsx)(s,{className:"convert-selection",children:t});case"h3":return(0,i.jsx)(u,{className:"convert-selection",children:t});default:return null}}c.defaultProps={type:"h1",content:""}},747:function(e,n,t){"use strict";t.r(n),t.d(n,{Title:function(){return r.default},List:function(){return o.default},Text:function(){return a.default},Space:function(){return s.default},Divider:function(){return u.default},Section:function(){return c.default},GridLayout:function(){return l.default},Card:function(){return d.default},MediaList:function(){return f.default},Credits:function(){return p.default},EmbedVideo:function(){return h.default},default:function(){return v}});var i=t(5893),r=t(4974),o=t(2664),a=t(2800),s=t(3653),u=t(1569),c=t(522),l=t(8919),d=t(4410),f=t(2994),p=t(3271),h=t(1507);function v(){return(0,i.jsx)("p",{children:"ComponentsV2"})}},254:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var i=t(5893),r=(t(7294),t(7599)),o=t(9459),a=t(747);function s(e){var n="project003",t=o.aT.project003;return(0,i.jsxs)(r.default,{id:n,showOtherProject:!1,children:[(0,i.jsx)(a.EmbedVideo,{link:t.video_main}),(0,i.jsxs)(a.Section,{children:[(0,i.jsx)(a.Title,{type:"h1",content:"2020 \u53f0\u5317\u96fb\u5f71\u7bc0 \u7247\u982d\u52d5\u756b"}),(0,i.jsx)(a.Title,{type:"h1",content:"2020 Taipei Film Festival Opening Animation"}),(0,i.jsx)(a.Text,{content:["\u53f0\u5317\u96fb\u5f71\u7bc0\u662f\u6bcf\u5e74\u65bc\u53f0\u7063\u53f0\u5317\u5e02\u8209\u8fa6\u7684\u96fb\u5f71\u7bc0\uff0c\u4e3b\u8981\u7531\u5169\u5927\u7af6\u8cfd\u55ae\u5143\u300c\u570b\u969b\u65b0\u5c0e\u6f14\u7af6\u8cfd\u300d\u8207\u300c\u81fa\u5317\u96fb\u5f71\u734e\u300d\u4ee5\u53ca\u89c0\u6469\u55ae\u5143\u6240\u7d44\u6210\u3002","\u4eca\u5e74\u53f0\u5317\u96fb\u5f71\u7bc0\u518d\u5ea6\u9080\u8acb\u77e5\u540d\u8a2d\u8a08\u5e2b\u5ed6\u5c0f\u5b50\u5275\u4f5c\u4e3b\u8996\u89ba\uff0c\u7531\u300c\u7d14\u7cb9\u300d\u6b64\u4e00\u6982\u5ff5\u51fa\u767c\uff0c\u904b\u7528\u5149\u7dda\u76f4\u4f86\u76f4\u5f80\u7684\u50b3\u9054\u8207\u63a5\u6536\uff0c\u5448\u73fe\u5275\u4f5c\u8005\u7684\u76f4\u6292\u80f8\u81c6\u8207\u89c0\u773e\u89c0\u5f71\u6642\u7684\u611f\u5b98\u52d5\u54e1\u3002","\u7247\u982d\u52d5\u756b\u7531\u5e73\u9762\u4e3b\u8996\u89ba\u6240\u5ef6\u4f38\uff0c\u900f\u904e 3D \u52d5\u756b\u5448\u73fe\u66f4\u8c50\u7684\u5149\u5f71\u6548\u679c\u8207\u91d1\u5c6c\u8cea\u611f\uff0c\u89c0\u5f71\u9ad4\u9a57\u7336\u5982\u7a7f\u68ad\u5728\u4e09\u7a2e\u611f\u5b98\u4e4b\u4e2d\uff0c\u6642\u800c\u4ea4\u66ff\uff0c\u6642\u800c\u91cd\u758a\uff0c\u6700\u7d42\u7531\u5982\u5feb\u9580\u822c\u7684\u51fa\u53e3\u770b\u5230\u5168\u8c8c\uff0c\u4e5f\u8a31\u89c0\u8005\u5728\u89c0\u5f71\u7684\u540c\u6642\u65bc\u8166\u6d77\u9304\u88fd\u5168\u65b0\u7684\u5f71\u50cf\u3002"]}),(0,i.jsx)(a.Text,{content:['"Taipei Graphic Interflow Festival" was an international design exchange conference held in 2019, inviting top professionals in the fields of graphic design, visual effects, and motion design from around the world to discuss and analyze design face-to-face, absorb new knowledge from different countries, and showcase future design trends.','The Chinese name of the event called \u201c\u53f0\u5317\u8a2d\u8a08\u96fb\u6ce2\u201d (Taipei Design Radiowave). We visited the organizer for the reason for this naming: The word "radio wave" is taken from the book "Darwin Radio Waves". It aims to tell that evolution may not be a gradual change, but an instantaneous evolution. Inspired by this concept, dynamic and design elements were used as visual imagery, representing constant dissemination and breaking of frameworks, with Taipei as the center emitting waves of rays, ultimately creating stunning experimental visual animations.']})]}),(0,i.jsx)(a.Section,{children:(0,i.jsx)(a.MediaList,{col:2,mCol:2,links:[t.video_01_s,t.video_02_s,t.video_03_s,t.video_04_s,t.video_05_s,t.video_06_s]})}),(0,i.jsx)(a.Section,{children:(0,i.jsx)(a.MediaList,{col:4,mCol:2,links:[t.video_08_s,t.video_09_s,t.video_10_s,t.video_11_s,t.video_12_s,t.video_13_s,t.video_14_s]})}),(0,i.jsx)(a.Space,{}),(0,i.jsx)(a.Title,{type:"h2",content:"Credits"}),(0,i.jsx)(a.Credits,{content:["Client : \u53f0\u5317\u96fb\u5f71\u7bc0 Taipei Film Festival","Visual Art Designer : \u5ed6\u5c0f\u5b50 Godkidlla","Production : \u7f61\u98a8\u5275\u610f\u6620\u50cf\u6709\u9650\u516c\u53f8 DCraft Studio\u3001\u5b87\u5b99\u6f54\u7656\u6709\u9650\u516c\u53f8 JP SPACE Studio","Producer : \u56b4\u632f\u6b3d ArChin Yen","Director : \u8523\u627f\u7ff0 Double Jiang","Concept & Storyboard : \u912d\u8a52\u8b19 1000 Cheng","Motion Design : \u912d\u8a52\u8b19 1000 Cheng","Sound Designer : \u5433\u68b5\u9716 Hans Wu"]})]})}},8213:function(e,n,t){"use strict";t.d(n,{zo:function(){return r},iv:function(){return o},gN:function(){return a}});var i=(0,t(4995).Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),r=i.styled,o=i.css,a={"@s":"s","@l":"l"}},9388:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/taipei-film-festival2020",function(){return t(254)}])}},function(e){e.O(0,[9774,296,126,4959,6352,9459,7599,2888,179],(function(){return n=9388,e(e.s=n);var n}));var n=e.O();_N_E=n}]);