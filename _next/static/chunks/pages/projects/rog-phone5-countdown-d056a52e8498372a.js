(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7995],{1868:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/rog-phone5-countdown",function(){return n(5879)}])},1626:function(e,t,n){"use strict";n.d(t,{W:function(){return queryLink}});var r=n(8439);let queryLink=function(e){let t=e.split("."),n=r.aT;for(let e=0;e<t.length;e++)n=n[t[e]];return n}},7725:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return MediaList}});var r=n(5893);n(7294);var i=n(3967),o=n.n(i),a=n(1626),l=n(1230),c=n(9231);let u=(0,c.ZP)(l.default);function MediaList(e){let{links:t="",title:n="",col:i=0,mCol:l=i}=e;function getLinks(e){return(!1===Array.isArray(e)?e.split(",").map(e=>e.trim()):e).filter(e=>""!==e&&!1===e.startsWith("//")).map(e=>e.startsWith("http")?e:(0,a.W)(e)).filter(e=>void 0!==e)}function getClass(e,t){return{["grid-c"+e]:!0,["m-grid-c"+t]:!0}}return(0,r.jsxs)("div",{className:"media-list-container",children:[n?(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:n})}):null,(0,r.jsx)("div",{className:o()("grid-c",getClass(i,l)),children:getLinks(t).map(e=>(0,r.jsx)("div",{className:"media-container",children:(0,r.jsx)(u,{link:e})},e))})]})}},1509:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Card}});var r=n(5893);n(7294);var i=n(524);let o=(0,i.zo)("div",{backgroundColor:"#88888820",borderRadius:8,padding:16});function Card(e){let{children:t}=e;return(0,r.jsx)(o,{children:t})}Card.propTypes={},Card.defaultProps={}},4535:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Credits}});var r=n(5893),i=n(7294),o=n(5697),a=n.n(o),l=n(524),c=n(7760);let u=(0,l.zo)("div",{display:"flex",flexDirection:"column"}),d=(0,l.zo)("div",{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",transition:"max-height 0.5s",variants:{fold:{true:{maxHeight:200,cursor:"pointer","&::after":{content:"",position:"absolute",left:0,right:0,bottom:0,height:150,background:"#0B0C0E",background:"linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)"}},false:{maxHeight:1e4,cursor:"pointer","&::after":{display:"none"}}}}}),s=(0,l.zo)(c.TextStyle),f=(0,l.zo)("button",{fontSize:16,cursor:"pointer",width:80,padding:8,textAlign:"center",border:"1px #ffffff solid",backgroundColor:"#ffffff00",color:"#ffffff",boxSizing:"border-box",marginTop:16,"&:hover":{backgroundColor:"#ffffff",color:"#000000"}});function Credits(e){let{content:t,foldable:n}=e,[o,a]=(0,i.useState)(!1);return(0,r.jsxs)(u,{children:[(0,r.jsx)(d,{fold:!!n&&o,onClick:()=>a(!o),children:t.map((e,t)=>(0,r.jsx)(s,{type:"normal",children:e},t))}),n&&(0,r.jsx)(f,{onClick:()=>a(!1),children:"More"})]})}Credits.propTypes={content:a().array,foldable:a().bool},Credits.defaultProps={content:[],foldable:!1}},1121:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Divider}});var r=n(5893);n(7294);var i=n(524);let o=(0,i.zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:2,margin:"16px 0",backgroundColor:"#ffffff20"});function Divider(e){let{}=e;return(0,r.jsx)(o,{})}Divider.propTypes={},Divider.defaultProps={}},8599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return EmbedVideo}});var r=n(5893);n(7294),n(1626);var i=n(524);let o=(0,i.zo)("div",{position:"relative",width:"100%",paddingTop:"".concat(9/16*100,"%"),"& iframe":{width:"100%",height:"100%",position:"absolute",top:0,left:0}});function EmbedVideo(e){let{link:t=""}=e;return(0,r.jsx)(o,{children:(0,r.jsx)("iframe",{src:t,scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},427:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return GridLayout}});var r=n(5893);n(7294);var i=n(5697),o=n.n(i),a=n(524);let l=(0,a.zo)("section",{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:10,columnGap:40});function GridLayout(e){let{children:t,sCol:n,lCol:i}=e;return(0,r.jsx)(l,{css:{"@s":{gridTemplateColumns:"repeat(".concat(n,", 1fr)")},"@l":{gridTemplateColumns:"repeat(".concat(i,", 1fr)")}},children:t})}GridLayout.propTypes={sCol:o().number,lCol:o().number},GridLayout.defaultProps={sCol:1,lCol:1}},4874:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return List}});var r=n(5893);n(7294);var i=n(5697),o=n.n(i),a=n(524),l=n(7760);let c=(0,a.iv)({paddingLeft:24}),u=(0,a.zo)("ul",c,{}),d=(0,a.zo)("ol",c,{}),s=(0,a.zo)("li",l.TextStyle,{});function List(e){let{type:t,content:n}=e,i="order"===t?d:u;return(0,r.jsx)(i,{children:n.map((e,t)=>(0,r.jsx)(s,{type:"normal",children:e},t))})}List.propTypes={type:o().oneOf(["order","unorder"]),content:o().array},List.defaultProps={type:"order",content:[]}},8256:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Section}});var r=n(5893);n(7294);var i=n(524);let o=(0,i.zo)("section",{boxSizing:"border-box",variants:{size:{s:{margin:"40px 0",padding:0},l:{margin:"80px 0",padding:0}}}});function Section(e){let{children:t}=e;return(0,r.jsx)(o,{size:i.gN,children:t})}Section.propTypes={},Section.defaultProps={}},541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Space}});var r=n(5893);n(7294);var i=n(524);let o=(0,i.zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:32});function Space(e){let{}=e;return(0,r.jsx)(o,{})}Space.propTypes={},Space.defaultProps={}},7760:function(e,t,n){"use strict";n.r(t),n.d(t,{TextStyle:function(){return l},default:function(){return Text}});var r=n(5893);n(7294);var i=n(5697),o=n.n(i),a=n(524);let l=(0,a.iv)({padding:0,margin:0,marginBottom:8,lineHeight:"26px",wordWrap:"break-word",whiteSpace:"pre-line",variants:{type:{small:{fontSize:14,color:"#ffffff80"},normal:{fontSize:16,color:"#ffffffc0"},big:{fontSize:28,fontWeight:600,color:"#ffffffe0"}}}}),c=(0,a.zo)("p",l,{});function Text(e){let{content:t,type:n}=e;return Array.isArray(t)?t.map((e,t)=>(0,r.jsx)(c,{type:n,children:e},t)):(0,r.jsx)(c,{type:n,children:t})}Text.propTypes={content:o().oneOfType([o().string,o().array]),type:o().oneOf(["normal","small","big"])},Text.defaultProps={content:"",type:"normal"}},4496:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Title}});var r=n(5893);n(7294);var i=n(5697),o=n.n(i),a=n(524);let l=(0,a.iv)({padding:0,margin:0,marginBottom:16}),c=(0,a.zo)("h1",l,{fontSize:36,fontWeight:500}),u=(0,a.zo)("h2",l,{fontSize:28,fontWeight:400}),d=(0,a.zo)("h3",l,{fontSize:22,fontWeight:300});function Title(e){let{type:t,content:n}=e;switch(t){case"h1":return(0,r.jsx)(c,{className:"convert-selection",children:n});case"h2":return(0,r.jsx)(u,{className:"convert-selection",children:n});case"h3":return(0,r.jsx)(d,{className:"convert-selection",children:n});default:return null}}Title.propTypes={type:o().oneOf(["h1","h2","h3"]),content:o().string},Title.defaultProps={type:"h1",content:""}},1931:function(e,t,n){"use strict";n.r(t),n.d(t,{Card:function(){return s.default},Credits:function(){return p.default},Divider:function(){return c.default},EmbedVideo:function(){return h.default},GridLayout:function(){return d.default},List:function(){return o.default},MediaList:function(){return f.default},Section:function(){return u.default},Space:function(){return l.default},Text:function(){return a.default},Title:function(){return i.default},default:function(){return ComponentsV2}});var r=n(5893),i=n(4496),o=n(4874),a=n(7760),l=n(541),c=n(1121),u=n(8256),d=n(427),s=n(1509),f=n(7725),p=n(4535),h=n(8599);function ComponentsV2(){return(0,r.jsx)("p",{children:"ComponentsV2"})}},5879:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ProjectPage}});var r=n(5893);n(7294);var i=n(1804),o=n(8439),a=n(1931);function ProjectPage(e){let t="project013",n=o.aT[t];return(0,r.jsxs)(i.default,{id:t,showOtherProject:!1,children:[(0,r.jsx)(a.EmbedVideo,{link:n.video_main}),(0,r.jsxs)(a.Section,{children:[(0,r.jsx)(a.Title,{type:"h1",content:"ROG Phone 5 發表會倒數影片"}),(0,r.jsx)(a.Title,{type:"h1",content:"ROG Phone 5 Launch Event Countdown Video"}),(0,r.jsx)(a.Text,{content:["這是一支全世界引頸期盼的電競手機——ROG PHONE 5，是一款效能極佳的電競手機。這次的產品發表從影像呈現到手機的開箱體驗，從影像拍攝、動畫製作到互動製作，都有夢想動畫的全面參與，加上專案總監製 Freaks 4U Gaming 與各國 KOL 的聯合競賽，將線上線下的體驗連成一氣。"]}),(0,r.jsx)(a.Text,{content:["This is the highly anticipated gaming phone worldwide - the ROG PHONE 5, which is an extremely powerful gaming phone. The product launch this time involved Dream Animation's full participation in everything from image presentation to unboxing experience of the phone, from image shooting, animation production to interactive production. In addition, the project director Freaks 4U Gaming and KOLs from various countries were invited to join the joint competition, connecting the online and offline experiences seamlessly."]})]}),(0,r.jsx)(a.Section,{children:(0,r.jsx)(a.MediaList,{col:3,mCol:1,links:[n.video_01,n.video_02,n.video_04,n.video_05,n.video_06,n.video_07,n.video_10,n.video_11,n.video_12,n.video_15,n.video_17,n.video_19]})}),(0,r.jsx)(a.Space,{}),(0,r.jsx)(a.Title,{type:"h2",content:"Credits"}),(0,r.jsx)(a.Credits,{content:["Client : ASUS Republic of Gamers","Production : MoonShine Animation","Motion Design : 1000 Cheng, Li Feng Cheng"]})]})}},524:function(e,t,n){"use strict";n.d(t,{gN:function(){return a},iv:function(){return o},zo:function(){return i}});var r=n(6744);let{styled:i,css:o}=(0,r.Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),a={"@s":"s","@l":"l"}}},function(e){e.O(0,[296,9890,1664,2898,8439,1804,9774,2888,179],function(){return e(e.s=1868)}),_N_E=e.O()}]);