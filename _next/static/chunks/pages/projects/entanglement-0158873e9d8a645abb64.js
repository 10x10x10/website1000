(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{4772:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var i=n(9459),o=function(e){for(var t=e.split("."),n=i.aT,o=0;o<t.length;o++)n=n[t[o]];return n}},2994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=n(5893),o=n(6156),r=(n(7294),n(4184)),s=n.n(r),a=n(4772),c=n(1e3),l=(0,n(9231).ZP)(c.default);function d(e){var t=e.links,n=void 0===t?"":t,r=e.title,c=void 0===r?"":r,d=e.col,u=void 0===d?0:d,f=e.mCol,h=void 0===f?u:f;return(0,i.jsxs)("div",{className:"media-list-container",children:[c?(0,i.jsx)("div",{className:"project-text-container project-view-title",children:(0,i.jsx)("h2",{children:c})}):null,(0,i.jsx)("div",{className:s()("grid-c",function(e,t){var n,i="grid-c"+e,r="m-grid-c"+t;return n={},(0,o.Z)(n,i,!0),(0,o.Z)(n,r,!0),n}(u,h)),children:function(e){return(!1===Array.isArray(e)?e.split(",").map((function(e){return e.trim()})):e).filter((function(e){return""!==e&&!1===e.startsWith("//")})).map((function(e){return e.startsWith("http")?e:(0,a.W)(e)})).filter((function(e){return void 0!==e}))}(n).map((function(e){return(0,i.jsx)("div",{className:"media-container",children:(0,i.jsx)(l,{link:e})},e)}))})]})}},4410:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var i=n(5893),o=(n(7294),(0,n(8213).zo)("div",{backgroundColor:"#88888820",borderRadius:8,padding:16}));function r(e){var t=e.children;return(0,i.jsx)(o,{children:t})}r.defaultProps={}},3271:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(5893),o=n(6156),r=n(7294),s=n(8213),a=n(2800),c=(0,s.zo)("div",{display:"flex",flexDirection:"column"}),l=(0,s.zo)("div",{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",transition:"max-height 0.5s",variants:{fold:{true:{maxHeight:200,cursor:"pointer","&::after":(0,o.Z)({content:"",position:"absolute",left:0,right:0,bottom:0,height:150,background:"#0B0C0E"},"background","linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)")},false:{maxHeight:1e4,cursor:"pointer","&::after":{display:"none"}}}}}),d=(0,s.zo)(a.TextStyle),u=(0,s.zo)("button",{fontSize:16,cursor:"pointer",width:80,padding:8,textAlign:"center",border:"1px #ffffff solid",backgroundColor:"#ffffff00",color:"#ffffff",boxSizing:"border-box",marginTop:16,"&:hover":{backgroundColor:"#ffffff",color:"#000000"}});function f(e){var t=e.content,n=e.foldable,o=(0,r.useState)(!1),s=o[0],a=o[1];return(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{fold:!!n&&s,onClick:function(){return a(!s)},children:t.map((function(e,t){return(0,i.jsx)(d,{type:"normal",children:e},t)}))}),n&&(0,i.jsx)(u,{onClick:function(){return a(!1)},children:"More"})]})}f.defaultProps={content:[],foldable:!1}},1569:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i=n(5893),o=n(6814),r=(n(7294),(0,n(8213).zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:2,margin:"16px 0",backgroundColor:"#ffffff20"}));function s(e){return(0,o.Z)(e),(0,i.jsx)(r,{})}s.defaultProps={}},1507:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var i=n(5893),o=(n(7294),n(4772),(0,n(8213).zo)("div",{position:"relative",width:"100%",paddingTop:"".concat(56.25,"%"),"& iframe":{width:"100%",height:"100%",position:"absolute",top:0,left:0}}));function r(e){var t=e.link,n=void 0===t?"":t;return(0,i.jsx)(o,{children:(0,i.jsx)("iframe",{src:n,scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8919:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var i=n(5893),o=(n(7294),(0,n(8213).zo)("section",{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:10,columnGap:40}));function r(e){var t=e.children,n=e.sCol,r=e.lCol;return(0,i.jsx)(o,{css:{"@s":{gridTemplateColumns:"repeat(".concat(n,", 1fr)")},"@l":{gridTemplateColumns:"repeat(".concat(r,", 1fr)")}},children:t})}r.defaultProps={sCol:1,lCol:1}},2664:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=n(5893),o=(n(7294),n(8213)),r=n(2800),s=(0,o.iv)({paddingLeft:24}),a=(0,o.zo)("ul",s,{}),c=(0,o.zo)("ol",s,{}),l=(0,o.zo)("li",r.TextStyle,{});function d(e){var t=e.type,n=e.content,o="order"===t?c:a;return(0,i.jsx)(o,{children:n.map((function(e,t){return(0,i.jsx)(l,{type:"normal",children:e},t)}))})}d.defaultProps={type:"order",content:[]}},522:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i=n(5893),o=(n(7294),n(8213)),r=(0,o.zo)("section",{boxSizing:"border-box",variants:{size:{s:{margin:"40px 0",padding:0},l:{margin:"80px 0",padding:0}}}});function s(e){var t=e.children;return(0,i.jsx)(r,{size:o.gN,children:t})}s.defaultProps={}},3653:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i=n(5893),o=n(6814),r=(n(7294),(0,n(8213).zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:32}));function s(e){return(0,o.Z)(e),(0,i.jsx)(r,{})}s.defaultProps={}},2800:function(e,t,n){"use strict";n.r(t),n.d(t,{TextStyle:function(){return r},default:function(){return a}});var i=n(5893),o=(n(7294),n(8213)),r=(0,o.iv)({padding:0,margin:0,marginBottom:8,lineHeight:"26px",wordWrap:"break-word",whiteSpace:"pre-line",variants:{type:{small:{fontSize:14,color:"#ffffff80"},normal:{fontSize:16,color:"#ffffffc0"},big:{fontSize:28,fontWeight:600,color:"#ffffffe0"}}}}),s=(0,o.zo)("p",r,{});function a(e){var t=e.content,n=e.type;return Array.isArray(t)?t.map((function(e,t){return(0,i.jsx)(s,{type:n,children:e},t)})):(0,i.jsx)(s,{type:n,children:t})}a.defaultProps={content:"",type:"normal"}},4974:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(5893),o=(n(7294),n(8213)),r=(0,o.iv)({padding:0,margin:0,marginBottom:16}),s=(0,o.zo)("h1",r,{fontSize:36,fontWeight:500}),a=(0,o.zo)("h2",r,{fontSize:28,fontWeight:400}),c=(0,o.zo)("h3",r,{fontSize:22,fontWeight:300});function l(e){var t=e.type,n=e.content;switch(t){case"h1":return(0,i.jsx)(s,{className:"convert-selection",children:n});case"h2":return(0,i.jsx)(a,{className:"convert-selection",children:n});case"h3":return(0,i.jsx)(c,{className:"convert-selection",children:n});default:return null}}l.defaultProps={type:"h1",content:""}},747:function(e,t,n){"use strict";n.r(t),n.d(t,{Title:function(){return o.default},List:function(){return r.default},Text:function(){return s.default},Space:function(){return a.default},Divider:function(){return c.default},Section:function(){return l.default},GridLayout:function(){return d.default},Card:function(){return u.default},MediaList:function(){return f.default},Credits:function(){return h.default},EmbedVideo:function(){return p.default},default:function(){return g}});var i=n(5893),o=n(4974),r=n(2664),s=n(2800),a=n(3653),c=n(1569),l=n(522),d=n(8919),u=n(4410),f=n(2994),h=n(3271),p=n(1507);function g(){return(0,i.jsx)("p",{children:"ComponentsV2"})}},897:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(5893),o=(n(7294),n(7599)),r=n(9459),s=n(747);function a(e){var t="projectM002",n=r.aT[t];return(0,i.jsxs)(o.default,{id:t,showOtherProject:!1,children:[(0,i.jsx)(s.EmbedVideo,{link:n.video_main}),(0,i.jsxs)(s.Section,{children:[(0,i.jsx)(s.Title,{type:"h1",content:"Entanglement"}),(0,i.jsx)(s.Text,{content:["\u300c\u662f\u5426\u6709\u7368\u7acb\u65bc\u60f3\u6cd5\u4e4b\u5916\u7684\u81ea\u6211? \u6216\u662f\u662f\u5426\u6709\u7368\u7acb\u65bc\u81ea\u6211\u4e4b\u5916\u7684\u60f3\u6cd5?\u300d","\u5f9e\u63a2\u8a0e\u60f3\u6cd5\u8207\u81ea\u6211\u7684\u95dc\u4fc2\u51fa\u767c\uff0c\u5c07\u60f3\u6cd5\u62c6\u5206\u70ba\u300c\u5b9a\u7fa9\u300d\u8207\u300c\u95dc\u4fc2\u300d\uff0c\u5b9a\u7fa9\u5982\u9ede\uff0c\u95dc\u4fc2\u5982\u7dda\uff0c\u805a\u5408\u800c\u6210\u7684\u7d50\u69cb\u5373\u662f\u300c\u81ea\u6211\u300d\u3002\u63a5\u8457\u5ef6\u4f38\u81f3\u5efa\u7acb\u7a69\u5b9a\u81ea\u6211\u6982\u5ff5\u7684\u904e\u7a0b\uff0c\u81ea\u6211\u7a69\u5b9a\u5f8c\u9032\u800c\u7522\u751f\u8207\u5916\u754c\u7684\u826f\u597d\u9023\u7d50\u3002"]}),(0,i.jsx)(s.Text,{content:['"Is there a self that is independent of ideas? Or is there an idea that is independent of self?"','Starting from exploring the relationship between ideas and ego, I thought the idea is divided into "definition" and "relationship", the definition is like a point, the relationship is like a line, and the aggregated structure is "self". It then extends to the process of establishing a stable self-concept, which leads to a good connection with the outside world after self-stabilization.']})]}),(0,i.jsx)(s.Section,{children:(0,i.jsx)(s.MediaList,{col:2,mCol:2,links:[n.video_01_s,n.video_02_s,n.video_03_s,n.video_04_s,n.video_05_s,n.video_06_s,n.video_07_s,n.video_08_s]})}),(0,i.jsxs)(s.Section,{children:[(0,i.jsx)(s.Title,{type:"h2",content:"Concept"}),(0,i.jsx)(s.MediaList,{col:1,mCol:1,links:[n.video_09_s]})]}),(0,i.jsxs)(s.Section,{children:[(0,i.jsx)(s.Text,{content:["\u6545\u4e8b\u5927\u7db1\u662f\u5efa\u7acb\u7a69\u5b9a\u81ea\u6211\u6982\u5ff5\u7684\u904e\u7a0b\uff0c\u800c\u6709\u7a69\u5b9a\u7684\u81ea\u6211\u6982\u5ff5\u624d\u6709\u8fa6\u6cd5\u8207\u5916\u754c\u5efa\u7acb\u826f\u597d\u7684\u9023\u7d50\u3002","\u9019\u6b21\u7684\u6982\u5ff5\u662f\u7531\u300c\u4e0d\u8981\u628a\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\u300d\u6240\u5ef6\u4f38\uff0c\u800c\u65b0\u7684\u554f\u984c\u662f\u300c\u8981\u5982\u4f55\u5340\u5206\u81ea\u6211\u8207\u60f3\u6cd5?\u300d\uff0c\u601d\u8003\u904e\u5f8c\u6240\u5f97\u51fa\u7684\u7d50\u8ad6\u662f\uff0c\u5168\u90e8\u7684\u60f3\u6cd5\uff0c\u7686\u53ef\u4ee5\u62c6\u5206\u70ba\u300c\u5b9a\u7fa9\u300d\u8207\u300c\u95dc\u4fc2\u300d\uff0c\u300c\u5b9a\u7fa9\u300d\u662f\u6307\u67d0\u500b\u500b\u9ad4\u3001\u5f62\u8c61\u3001\u6982\u5ff5\u7b49\u7684\u898f\u7bc4\u3001\u7bc4\u570d\uff0c\u6bd4\u5982\u8aaa\uff0c\u300c\u6211\u300d\u53ef\u662f\u8aaa\u662f\u4e00\u7a2e\u5b9a\u7fa9\uff0c\u5340\u5206\u6211\u8207\u4ed6\u8005\u7684\u4e0d\u540c\uff0c\u800c\u300c\u95dc\u4fc2\u300d\u5373\u662f\u6bcf\u500b\u5b9a\u7fa9\u4e4b\u9593\u7684\u95dc\u806f\uff0c\u6bd4\u5982\u8aaa\uff0c\u300c\u6211\u559c\u6b61\u5929\u7a7a\u300d\u5373\u662f\u5169\u500b\u5b9a\u7fa9\u4e4b\u9593\u7684\u95dc\u4fc2\u3002\u5982\u679c\u5c07\u4e0a\u8ff0\u7684\u6587\u5b57\uff0c\u8f49\u5316\u70ba\u5716\u50cf\uff0c\u6bcf\u500b\u300c\u5b9a\u7fa9\u300d\u5373\u662f\u4e00\u500b\u9ede\u6216\u662f\u5713\uff0c\u800c\u300c\u95dc\u4fc2\u300d\u5373\u662f\u4e32\u806f\u8d77\u6bcf\u500b\u9ede\u7684\u7dda\uff0c\u63a5\u8457\uff0c\u5982\u679c\u8a8d\u540c\u300c\u81ea\u6211\u662f\u5168\u90e8\u60f3\u6cd5\u7684\u7e3d\u548c\u300d\uff0c\u9ede\u8207\u7dda\u4e32\u8d77\u4f86\u7684\u7d50\u69cb\uff0c\u5c31\u53ef\u4ee5\u8aaa\u662f\u300c\u81ea\u6211\u300d\u3002","\u5f88\u591a\u4eba\u6703\u7528\u300c\u500b\u300d\u7576\u4f5c\u60f3\u6cd5\u7684\u55ae\u4f4d\uff0c\u4f46\u6211\u89ba\u5f97\u4e26\u4e0d\u7cbe\u78ba\uff0c\u56e0\u70ba\u5be6\u969b\u4e0a\u60f3\u6cd5\u7e3d\u662f\u6709\u8457\u524d\u5f8c\u95dc\u4fc2\uff0c\u7121\u6cd5\u78ba\u5207\u7684\u5340\u5206\u4e00\u500b\u60f3\u6cd5\u7684\u754c\u7dda\uff0c\u4ee5\u524d\u5f8c\u95dc\u4fc2\u4f86\u8aaa\u7684\u8a71\uff0c\u7528\u300c\u4e32\u300d\u4f86\u505a\u70ba\u60f3\u6cd5\u7684\u91cf\u8a5e\u66f4\u9069\u7576\uff0c\u4f46\u60f3\u6cd5\u7e3d\u662f\u6703\u6709\u5206\u652f\uff0c\u6216\u8a31\u662f\u7db2\u72c0\u7684\u601d\u8003\u65b9\u5f0f\uff0c\u4f46\u300c\u4e32\u300d\u7684\u5b9a\u7fa9\u4e26\u4e0d\u4fb7\u9650\u5728\u4e00\u689d\u7dda\u4e0a\u3002"]}),(0,i.jsx)(s.Text,{content:['The storyline is about the process of establishing a stable self-concept, and only with a stable self-concept can one establish good connections with the outside world.This concept is extended from "Don\'t identify with your thoughts" , and the new question is "How to distinguish between the self and thoughts?" The new question that has arisen is "how to differentiate between oneself and one\'s thoughts?" After much consideration, the conclusion was reached that all thoughts can be divided into "definitions" and "relationships." "Definitions" refer to the norms and scope of an individual, image, concept, etc. For example, "I" can be said to be a definition that distinguishes oneself from others, while "relationships" refer to the connections between each definition, such as "I like the sky," which is a relationship between two definitions.','If the above text is transformed into an image, each "definition" is a point or circle, and "relationships" are the lines that connect each point. If one agrees that "the self is the sum of all thoughts," the structure of points and lines connected together can be considered the "self."','Many people use "ideas" as the unit of thought, but I believe this is not precise because thoughts always have a before and after relationship and it is difficult to distinguish the boundaries of a single thought. In terms of before and after relationships, it is more appropriate to use "string" as the unit of thought, but thoughts always have branches, perhaps in a networked thinking manner, and the definition of "string" is not limited to a single line.']})]}),(0,i.jsxs)(s.Section,{children:[(0,i.jsx)(s.Title,{type:"h2",content:"Storyboard"}),(0,i.jsx)(s.MediaList,{col:1,mCol:1,links:[n.video_10_s]})]}),(0,i.jsx)(s.Section,{children:(0,i.jsx)(s.Text,{content:["\u5916\u754c\u523a\u6fc0\u2192\u81ea\u6211\u751f\u6210\u2192\u521d\u6b21\u5efa\u7acb\u81ea\u6211\u6982\u5ff5\u2192\u8a66\u5716\u8207\u5916\u754c\u63a5\u89f8\u2192\u4e0d\u5920\u7a69\u5b9a\u7684\u81ea\u6211\u9020\u6210\u9023\u7d50\u5931\u6557\u2192\u4e26\u4e14\u5f15\u97ff\u81ea\u6211\u2192\u56de\u6b78\u5167\u5728\u4e16\u754c\u53cd\u8986\u4fee\u6b63\u2192\u5efa\u7acb\u7a69\u5b9a\u7684\u81ea\u6211\u6982\u5ff5\u2192\u6210\u529f\u5efa\u7acb\u826f\u597d\u9023\u7d50"]})}),(0,i.jsxs)(s.Section,{children:[(0,i.jsx)(s.Title,{type:"h2",content:"Styleframe"}),(0,i.jsx)(s.MediaList,{col:1,mCol:1,links:[n.video_11_s]})]}),(0,i.jsx)(s.Space,{}),(0,i.jsx)(s.Title,{type:"h2",content:"Credits"}),(0,i.jsx)(s.Credits,{content:["Director : \u912d\u8a52\u8b19 1000 Cheng","Music : Trip Music - Deep Inside"]})]})}},8213:function(e,t,n){"use strict";n.d(t,{zo:function(){return o},iv:function(){return r},gN:function(){return s}});var i=(0,n(4995).Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),o=i.styled,r=i.css,s={"@s":"s","@l":"l"}},8833:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/entanglement",function(){return n(897)}])}},function(e){e.O(0,[9774,296,126,4959,6352,9459,7599,2888,179],(function(){return t=8833,e(e.s=t);var t}));var t=e.O();_N_E=t}]);