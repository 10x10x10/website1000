(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7995],{4772:function(n,t,e){"use strict";e.d(t,{W:function(){return i}});var r=e(9459),i=function(n){for(var t=n.split("."),e=r.aT,i=0;i<t.length;i++)e=e[t[i]];return e}},2994:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return l}});var r=e(5893),i=e(6156),o=(e(7294),e(4184)),c=e.n(o),u=e(4772),a=e(1e3),f=(0,e(9231).ZP)(a.default);function l(n){var t=n.links,e=void 0===t?"":t,o=n.title,a=void 0===o?"":o,l=n.col,d=void 0===l?0:l,s=n.mCol,p=void 0===s?d:s;return(0,r.jsxs)("div",{className:"media-list-container",children:[a?(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:a})}):null,(0,r.jsx)("div",{className:c()("grid-c",function(n,t){var e,r="grid-c"+n,o="m-grid-c"+t;return e={},(0,i.Z)(e,r,!0),(0,i.Z)(e,o,!0),e}(d,p)),children:function(n){return(!1===Array.isArray(n)?n.split(",").map((function(n){return n.trim()})):n).filter((function(n){return""!==n&&!1===n.startsWith("//")})).map((function(n){return n.startsWith("http")?n:(0,u.W)(n)})).filter((function(n){return void 0!==n}))}(e).map((function(n){return(0,r.jsx)("div",{className:"media-container",children:(0,r.jsx)(f,{link:n})},n)}))})]})}},4410:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return o}});var r=e(5893),i=(e(7294),(0,e(8213).zo)("div",{backgroundColor:"#88888820",borderRadius:8,padding:16}));function o(n){var t=n.children;return(0,r.jsx)(i,{children:t})}o.defaultProps={}},3271:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var r=e(5893),i=e(6156),o=e(7294),c=e(8213),u=e(2800),a=(0,c.zo)("div",{display:"flex",flexDirection:"column"}),f=(0,c.zo)("div",{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",transition:"max-height 0.5s",variants:{fold:{true:{maxHeight:200,cursor:"pointer","&::after":(0,i.Z)({content:"",position:"absolute",left:0,right:0,bottom:0,height:150,background:"#0B0C0E"},"background","linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)")},false:{maxHeight:1e4,cursor:"pointer","&::after":{display:"none"}}}}}),l=(0,c.zo)(u.TextStyle),d=(0,c.zo)("button",{fontSize:16,cursor:"pointer",width:80,padding:8,textAlign:"center",border:"1px #ffffff solid",backgroundColor:"#ffffff00",color:"#ffffff",boxSizing:"border-box",marginTop:16,"&:hover":{backgroundColor:"#ffffff",color:"#000000"}});function s(n){var t=n.content,e=n.foldable,i=(0,o.useState)(!1),c=i[0],u=i[1];return(0,r.jsxs)(a,{children:[(0,r.jsx)(f,{fold:!!e&&c,onClick:function(){return u(!c)},children:t.map((function(n,t){return(0,r.jsx)(l,{type:"normal",children:n},t)}))}),e&&(0,r.jsx)(d,{onClick:function(){return u(!1)},children:"More"})]})}s.defaultProps={content:[],foldable:!1}},1569:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var r=e(5893),i=e(6814),o=(e(7294),(0,e(8213).zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:2,margin:"16px 0",backgroundColor:"#ffffff20"}));function c(n){return(0,i.Z)(n),(0,r.jsx)(o,{})}c.defaultProps={}},1507:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return o}});var r=e(5893),i=(e(7294),e(4772),(0,e(8213).zo)("div",{position:"relative",width:"100%",paddingTop:"".concat(56.25,"%"),"& iframe":{width:"100%",height:"100%",position:"absolute",top:0,left:0}}));function o(n){var t=n.link,e=void 0===t?"":t;return(0,r.jsx)(i,{children:(0,r.jsx)("iframe",{src:e,scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8919:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return o}});var r=e(5893),i=(e(7294),(0,e(8213).zo)("section",{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:10,columnGap:40}));function o(n){var t=n.children,e=n.sCol,o=n.lCol;return(0,r.jsx)(i,{css:{"@s":{gridTemplateColumns:"repeat(".concat(e,", 1fr)")},"@l":{gridTemplateColumns:"repeat(".concat(o,", 1fr)")}},children:t})}o.defaultProps={sCol:1,lCol:1}},2664:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return l}});var r=e(5893),i=(e(7294),e(8213)),o=e(2800),c=(0,i.iv)({paddingLeft:24}),u=(0,i.zo)("ul",c,{}),a=(0,i.zo)("ol",c,{}),f=(0,i.zo)("li",o.TextStyle,{});function l(n){var t=n.type,e=n.content,i="order"===t?a:u;return(0,r.jsx)(i,{children:e.map((function(n,t){return(0,r.jsx)(f,{type:"normal",children:n},t)}))})}l.defaultProps={type:"order",content:[]}},522:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var r=e(5893),i=(e(7294),e(8213)),o=(0,i.zo)("section",{boxSizing:"border-box",variants:{size:{s:{margin:"40px 0",padding:0},l:{margin:"80px 0",padding:0}}}});function c(n){var t=n.children;return(0,r.jsx)(o,{size:i.gN,children:t})}c.defaultProps={}},3653:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var r=e(5893),i=e(6814),o=(e(7294),(0,e(8213).zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:32}));function c(n){return(0,i.Z)(n),(0,r.jsx)(o,{})}c.defaultProps={}},2800:function(n,t,e){"use strict";e.r(t),e.d(t,{TextStyle:function(){return o},default:function(){return u}});var r=e(5893),i=(e(7294),e(8213)),o=(0,i.iv)({padding:0,margin:0,marginBottom:8,lineHeight:"26px",wordWrap:"break-word",whiteSpace:"pre-line",variants:{type:{small:{fontSize:14,color:"#ffffff80"},normal:{fontSize:16,color:"#ffffffc0"},big:{fontSize:28,fontWeight:600,color:"#ffffffe0"}}}}),c=(0,i.zo)("p",o,{});function u(n){var t=n.content,e=n.type;return Array.isArray(t)?t.map((function(n,t){return(0,r.jsx)(c,{type:e,children:n},t)})):(0,r.jsx)(c,{type:e,children:t})}u.defaultProps={content:"",type:"normal"}},4974:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var r=e(5893),i=(e(7294),e(8213)),o=(0,i.iv)({padding:0,margin:0,marginBottom:16}),c=(0,i.zo)("h1",o,{fontSize:36,fontWeight:500}),u=(0,i.zo)("h2",o,{fontSize:28,fontWeight:400}),a=(0,i.zo)("h3",o,{fontSize:22,fontWeight:300});function f(n){var t=n.type,e=n.content;switch(t){case"h1":return(0,r.jsx)(c,{className:"convert-selection",children:e});case"h2":return(0,r.jsx)(u,{className:"convert-selection",children:e});case"h3":return(0,r.jsx)(a,{className:"convert-selection",children:e});default:return null}}f.defaultProps={type:"h1",content:""}},747:function(n,t,e){"use strict";e.r(t),e.d(t,{Title:function(){return i.default},List:function(){return o.default},Text:function(){return c.default},Space:function(){return u.default},Divider:function(){return a.default},Section:function(){return f.default},GridLayout:function(){return l.default},Card:function(){return d.default},MediaList:function(){return s.default},Credits:function(){return p.default},EmbedVideo:function(){return h.default},default:function(){return v}});var r=e(5893),i=e(4974),o=e(2664),c=e(2800),u=e(3653),a=e(1569),f=e(522),l=e(8919),d=e(4410),s=e(2994),p=e(3271),h=e(1507);function v(){return(0,r.jsx)("p",{children:"ComponentsV2"})}},3663:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return u}});var r=e(5893),i=(e(7294),e(7599)),o=e(9459),c=e(747);function u(n){var t="project013",e=o.aT.project013;return(0,r.jsxs)(i.default,{id:t,showOtherProject:!1,children:[(0,r.jsx)(c.EmbedVideo,{link:e.video_main}),(0,r.jsxs)(c.Section,{children:[(0,r.jsx)(c.Title,{type:"h1",content:"ROG Phone 5 \u767c\u8868\u6703\u5012\u6578\u5f71\u7247"}),(0,r.jsx)(c.Title,{type:"h1",content:"ROG Phone 5 Launch Event Countdown Video"}),(0,r.jsx)(c.Text,{content:["\u9019\u662f\u4e00\u652f\u5168\u4e16\u754c\u5f15\u9838\u671f\u76fc\u7684\u96fb\u7af6\u624b\u6a5f\u2014\u2014ROG PHONE 5\uff0c\u662f\u4e00\u6b3e\u6548\u80fd\u6975\u4f73\u7684\u96fb\u7af6\u624b\u6a5f\u3002\u9019\u6b21\u7684\u7522\u54c1\u767c\u8868\u5f9e\u5f71\u50cf\u5448\u73fe\u5230\u624b\u6a5f\u7684\u958b\u7bb1\u9ad4\u9a57\uff0c\u5f9e\u5f71\u50cf\u62cd\u651d\u3001\u52d5\u756b\u88fd\u4f5c\u5230\u4e92\u52d5\u88fd\u4f5c\uff0c\u90fd\u6709\u5922\u60f3\u52d5\u756b\u7684\u5168\u9762\u53c3\u8207\uff0c\u52a0\u4e0a\u5c08\u6848\u7e3d\u76e3\u88fd Freaks 4U Gaming \u8207\u5404\u570b KOL \u7684\u806f\u5408\u7af6\u8cfd\uff0c\u5c07\u7dda\u4e0a\u7dda\u4e0b\u7684\u9ad4\u9a57\u9023\u6210\u4e00\u6c23\u3002"]}),(0,r.jsx)(c.Text,{content:["This is the highly anticipated gaming phone worldwide - the ROG PHONE 5, which is an extremely powerful gaming phone. The product launch this time involved Dream Animation's full participation in everything from image presentation to unboxing experience of the phone, from image shooting, animation production to interactive production. In addition, the project director Freaks 4U Gaming and KOLs from various countries were invited to join the joint competition, connecting the online and offline experiences seamlessly."]})]}),(0,r.jsx)(c.Section,{children:(0,r.jsx)(c.MediaList,{col:3,mCol:1,links:[e.video_01,e.video_02,e.video_04,e.video_05,e.video_06,e.video_07,e.video_10,e.video_11,e.video_12,e.video_15,e.video_17,e.video_19]})}),(0,r.jsx)(c.Space,{}),(0,r.jsx)(c.Title,{type:"h2",content:"Credits"}),(0,r.jsx)(c.Credits,{content:["Client : ASUS Republic of Gamers","Production : MoonShine Animation","Motion Design : 1000 Cheng, Li Feng Cheng"]})]})}},8213:function(n,t,e){"use strict";e.d(t,{zo:function(){return i},iv:function(){return o},gN:function(){return c}});var r=(0,e(4995).Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),i=r.styled,o=r.css,c={"@s":"s","@l":"l"}},6776:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/rog-phone5-countdown",function(){return e(3663)}])}},function(n){n.O(0,[9774,296,126,4959,6352,9459,7599,2888,179],(function(){return t=6776,n(n.s=t);var t}));var t=n.O();_N_E=t}]);