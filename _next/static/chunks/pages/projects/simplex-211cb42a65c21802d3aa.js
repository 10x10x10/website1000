(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4252],{4772:function(t,e,n){"use strict";n.d(e,{W:function(){return r}});var i=n(9459),r=function(t){for(var e=t.split("."),n=i.aT,r=0;r<e.length;r++)n=n[e[r]];return n}},2994:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var i=n(5893),r=n(6156),o=(n(7294),n(4184)),a=n.n(o),s=n(4772),c=n(1e3),l=(0,n(9231).ZP)(c.default);function u(t){var e=t.links,n=void 0===e?"":e,o=t.title,c=void 0===o?"":o,u=t.col,f=void 0===u?0:u,d=t.mCol,h=void 0===d?f:d;return(0,i.jsxs)("div",{className:"media-list-container",children:[c?(0,i.jsx)("div",{className:"project-text-container project-view-title",children:(0,i.jsx)("h2",{children:c})}):null,(0,i.jsx)("div",{className:a()("grid-c",function(t,e){var n,i="grid-c"+t,o="m-grid-c"+e;return n={},(0,r.Z)(n,i,!0),(0,r.Z)(n,o,!0),n}(f,h)),children:function(t){return(!1===Array.isArray(t)?t.split(",").map((function(t){return t.trim()})):t).filter((function(t){return""!==t&&!1===t.startsWith("//")})).map((function(t){return t.startsWith("http")?t:(0,s.W)(t)})).filter((function(t){return void 0!==t}))}(n).map((function(t){return(0,i.jsx)("div",{className:"media-container",children:(0,i.jsx)(l,{link:t})},t)}))})]})}},4410:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var i=n(5893),r=(n(7294),(0,n(8213).zo)("div",{backgroundColor:"#88888820",borderRadius:8,padding:16}));function o(t){var e=t.children;return(0,i.jsx)(r,{children:e})}o.defaultProps={}},3271:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var i=n(5893),r=n(6156),o=n(7294),a=n(8213),s=n(2800),c=(0,a.zo)("div",{display:"flex",flexDirection:"column"}),l=(0,a.zo)("div",{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",transition:"max-height 0.5s",variants:{fold:{true:{maxHeight:200,cursor:"pointer","&::after":(0,r.Z)({content:"",position:"absolute",left:0,right:0,bottom:0,height:150,background:"#0B0C0E"},"background","linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)")},false:{maxHeight:1e4,cursor:"pointer","&::after":{display:"none"}}}}}),u=(0,a.zo)(s.TextStyle),f=(0,a.zo)("button",{fontSize:16,cursor:"pointer",width:80,padding:8,textAlign:"center",border:"1px #ffffff solid",backgroundColor:"#ffffff00",color:"#ffffff",boxSizing:"border-box",marginTop:16,"&:hover":{backgroundColor:"#ffffff",color:"#000000"}});function d(t){var e=t.content,n=t.foldable,r=(0,o.useState)(!1),a=r[0],s=r[1];return(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{fold:!!n&&a,onClick:function(){return s(!a)},children:e.map((function(t,e){return(0,i.jsx)(u,{type:"normal",children:t},e)}))}),n&&(0,i.jsx)(f,{onClick:function(){return s(!1)},children:"More"})]})}d.defaultProps={content:[],foldable:!1}},1569:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var i=n(5893),r=n(6814),o=(n(7294),(0,n(8213).zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:2,margin:"16px 0",backgroundColor:"#ffffff20"}));function a(t){return(0,r.Z)(t),(0,i.jsx)(o,{})}a.defaultProps={}},1507:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var i=n(5893),r=(n(7294),n(4772),(0,n(8213).zo)("div",{position:"relative",width:"100%",paddingTop:"".concat(56.25,"%"),"& iframe":{width:"100%",height:"100%",position:"absolute",top:0,left:0}}));function o(t){var e=t.link,n=void 0===e?"":e;return(0,i.jsx)(r,{children:(0,i.jsx)("iframe",{src:n,scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8919:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var i=n(5893),r=(n(7294),(0,n(8213).zo)("section",{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:10,columnGap:40}));function o(t){var e=t.children,n=t.sCol,o=t.lCol;return(0,i.jsx)(r,{css:{"@s":{gridTemplateColumns:"repeat(".concat(n,", 1fr)")},"@l":{gridTemplateColumns:"repeat(".concat(o,", 1fr)")}},children:e})}o.defaultProps={sCol:1,lCol:1}},2664:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var i=n(5893),r=(n(7294),n(8213)),o=n(2800),a=(0,r.iv)({paddingLeft:24}),s=(0,r.zo)("ul",a,{}),c=(0,r.zo)("ol",a,{}),l=(0,r.zo)("li",o.TextStyle,{});function u(t){var e=t.type,n=t.content,r="order"===e?c:s;return(0,i.jsx)(r,{children:n.map((function(t,e){return(0,i.jsx)(l,{type:"normal",children:t},e)}))})}u.defaultProps={type:"order",content:[]}},522:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var i=n(5893),r=(n(7294),n(8213)),o=(0,r.zo)("section",{boxSizing:"border-box",variants:{size:{s:{margin:"40px 0",padding:0},l:{margin:"80px 0",padding:0}}}});function a(t){var e=t.children;return(0,i.jsx)(o,{size:r.gN,children:e})}a.defaultProps={}},3653:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var i=n(5893),r=n(6814),o=(n(7294),(0,n(8213).zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:32}));function a(t){return(0,r.Z)(t),(0,i.jsx)(o,{})}a.defaultProps={}},2800:function(t,e,n){"use strict";n.r(e),n.d(e,{TextStyle:function(){return o},default:function(){return s}});var i=n(5893),r=(n(7294),n(8213)),o=(0,r.iv)({padding:0,margin:0,marginBottom:8,lineHeight:"26px",wordWrap:"break-word",whiteSpace:"pre-line",variants:{type:{small:{fontSize:14,color:"#ffffff80"},normal:{fontSize:16,color:"#ffffffc0"},big:{fontSize:28,fontWeight:600,color:"#ffffffe0"}}}}),a=(0,r.zo)("p",o,{});function s(t){var e=t.content,n=t.type;return Array.isArray(e)?e.map((function(t,e){return(0,i.jsx)(a,{type:n,children:t},e)})):(0,i.jsx)(a,{type:n,children:e})}s.defaultProps={content:"",type:"normal"}},4974:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var i=n(5893),r=(n(7294),n(8213)),o=(0,r.iv)({padding:0,margin:0,marginBottom:16}),a=(0,r.zo)("h1",o,{fontSize:36,fontWeight:500}),s=(0,r.zo)("h2",o,{fontSize:28,fontWeight:400}),c=(0,r.zo)("h3",o,{fontSize:22,fontWeight:300});function l(t){var e=t.type,n=t.content;switch(e){case"h1":return(0,i.jsx)(a,{className:"convert-selection",children:n});case"h2":return(0,i.jsx)(s,{className:"convert-selection",children:n});case"h3":return(0,i.jsx)(c,{className:"convert-selection",children:n});default:return null}}l.defaultProps={type:"h1",content:""}},747:function(t,e,n){"use strict";n.r(e),n.d(e,{Title:function(){return r.default},List:function(){return o.default},Text:function(){return a.default},Space:function(){return s.default},Divider:function(){return c.default},Section:function(){return l.default},GridLayout:function(){return u.default},Card:function(){return f.default},MediaList:function(){return d.default},Credits:function(){return h.default},EmbedVideo:function(){return p.default},default:function(){return m}});var i=n(5893),r=n(4974),o=n(2664),a=n(2800),s=n(3653),c=n(1569),l=n(522),u=n(8919),f=n(4410),d=n(2994),h=n(3271),p=n(1507);function m(){return(0,i.jsx)("p",{children:"ComponentsV2"})}},1694:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var i=n(5893),r=(n(7294),n(7599)),o=n(9459),a=n(747);function s(t){var e="projectM001",n=o.aT[e];return(0,i.jsxs)(r.default,{id:e,showOtherProject:!1,children:[(0,i.jsx)(a.EmbedVideo,{link:n.video_main}),(0,i.jsxs)(a.Section,{children:[(0,i.jsx)(a.Title,{type:"h1",content:"SIMPLEX"}),(0,i.jsx)(a.Text,{content:["Simplex \u662f simple \u8207 complex \u7684\u8907\u5408\u5b57\uff0c\u5b57\u9762\u4e0a\u7684\u610f\u601d\u662f\u300c\u7c21\u55ae\u7684\u8907\u96dc\u300d\uff0c\u96b1\u542b\u7684\u610f\u601d\u662f\u300c\u4eba\u300d\u3002 \u4f46\u5b83\u540c\u6642\u4e5f\u662f\u6578\u5b78\u4e0a\u7684\u5c08\u6709\u540d\u8a5e\uff0c\u610f\u65e8\u5728 n \u7dad\u7a7a\u9593\u4e2d\uff0c\u53d6 n+1 \u500b\u9ede\uff0c\u8b93\u9019\u4e9b\u9ede\u76f8\u4e92\u9023\u63a5\uff0c\u53ef\u69cb\u6210 Simplex\u3002 \u5728\u96f6\u5230\u4e09\u7dad\u7a7a\u9593\u4e2d\u7684 simplex\uff0c\u5206\u5225\u4ee3\u8868\u9ede\u3001\u7dda\u6bb5\u3001\u4e09\u89d2\u5f62\uff0c\u8207\u56db\u9762\u9ad4\u3002\u800c\u9019\u6b21\u52d5\u756b\u7684\u4e3b\u89d2\u5373\u662f\u4e09\u7dad\u7684 Simplex \u3002 \u4e00\u5982\u5f80\u5e38\u7684\u8a71\u53ea\u8aaa\u4e86\u4e00\u534a\uff0c\u7c21\u800c\u8a00\u4e4b\u662f\u5728\u63cf\u8ff0\u4eba\u8207\u60f3\u6cd5\u7684\u4e92\u52d5\u95dc\u4fc2\u3002",'Simplex is a compound word of simple and complex, literally meaning "simple complexity", implied meaning "people." But it is also a mathematical term, meaning that in n-dimensional space, take n+1 points, and connect these points to each other to form Simplex. Simplex in zero to three-dimensional space, representing points, line segments, triangles, and tetrahedrons. The protagonist of this animation is the 3D Simplex. As usual, I only said half of it. In short, it describes the interaction between people and ideas.']})]}),(0,i.jsxs)(a.Section,{children:[(0,i.jsx)(a.Title,{type:"h2",content:"Motion"}),(0,i.jsx)(a.MediaList,{col:2,mCol:1,links:[n.video_01_s,n.video_02_s,n.video_03_s,n.video_04_s]})]}),(0,i.jsxs)(a.Section,{children:[(0,i.jsx)(a.Title,{type:"h2",content:"Concept"}),(0,i.jsx)(a.MediaList,{col:1,mCol:1,links:[n.image_01]})]}),(0,i.jsx)(a.Section,{children:(0,i.jsx)(a.Text,{content:["\u300c\u4e0d\u8981\u628a\u4f60\u81ea\u5df1\u7684\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\u300d\u662f\u53c3\u8003\u6700\u9ad8\u4f11\u606f\u6cd5\u9019\u672c\u66f8\uff0c\u6211\u64f7\u53d6\u51fa\u6211\u89ba\u5f97\u6709\u8da3\u7684\u5167\u5bb9\uff0c\u66f8\u4e2d\u7684\u6bd4\u55bb\u662f\u8aaa\uff0c\u4f60\u662f\u8eca\u7ad9\uff0c\u800c\u60f3\u6cd5\u662f\u4f86\u4f86\u53bb\u53bb\u7684\u5217\u8eca\uff0c\u4f46\u6211\u5011\u4e0d\u6703\u8aaa\uff0c\u5217\u8eca\u5c31\u662f\u8eca\u7ad9\u672c\u8eab\u3002\u5728\u95b1\u8b80\u9019\u500b\u7bc7\u7ae0\u6642\uff0c\u6211\u806f\u60f3\u5230\u4e00\u500b\u5fc3\u7406\u5b78\u7684\u5c08\u6709\u540d\u8a5e\u300c\u53ef\u611b\u4fb5\u7565\u6027\u300d\uff0c\u662f\u5728\u63cf\u8ff0\u6709\u4e00\u7fa4\u4eba\u6703\u5728\u770b\u5230\u53ef\u611b\u7684\u52d5\u7269\u6642\uff0c\u7522\u751f\u60f3\u8981\u634f\u6b7b\u4ed6\u7684\u5ff5\u982d\uff0c\u4f46\u7814\u7a76\u767c\u73fe\uff0c\u4e26\u4e0d\u662f\u9019\u4e9b\u4eba\u7279\u5225\u6709\u8b8a\u614b\uff0c\u800c\u662f\u56e0\u70ba\u5927\u8166\uff0c\u4e0d\u8ad6\u5728\u958b\u5fc3\u6216\u96e3\u904e\u6642\uff0c\u90fd\u50be\u5411\u8b93\u60c5\u7dd2\u8da8\u65bc\u5e73\u8861\uff0c\u56e0\u6b64\u5728\u958b\u5fc3\u7684\u6642\u5019\uff0c\u7522\u751f\u8ca0\u9762\u5ff5\u982d\uff0c\u53ea\u662f\u5927\u8166\u7684\u4e00\u500b\u6b63\u5e38\u6a5f\u5236\u3002\u6211\u89ba\u5f97\u9019\u4e5f\u61c9\u8b49\u4e86\u300c\u4e0d\u8981\u628a\u4f60\u7684\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\u300d\u3002","\u96d6\u7136\u4e00\u958b\u59cb\u662f\u4ee5\u300c\u4e0d\u8981\u628a\u4f60\u7684\u60f3\u6cd5\u7576\u6210\u4f60\u81ea\u5df1\u70ba\u4e3b\u984c\u300d\uff0c\u4f46\u5f8c\u4f86\u5728\u69cb\u601d\u6545\u4e8b\u7684\u904e\u7a0b\u4e2d\uff0c\u89ba\u5f97\u9019\u672c\u4f86\u5c31\u662f\u63cf\u8ff0\u51a5\u60f3\u7684\u5176\u4e2d\u4e00\u500b\u6982\u5ff5\uff0c\u6240\u4ee5\u5982\u679c\u9650\u7e2e\u5728\u9019\u88e1\uff0c\u6709\u4e9b\u72f9\u9698\uff0c\u56e0\u6b64\u5f8c\u4f86\u9084\u662f\u4ee5\u300c\u51a5\u60f3\u300d\u672c\u8eab\u70ba\u6982\u5ff5\u6838\u5fc3\u3002\u9019\u6b21\u60f3\u7528\u5e7e\u4f55\u5f62\u53bb\u5448\u73fe\u6545\u4e8b\uff0c\u6545\u4e8b\u5927\u7db1\u662f\uff0c\u4e3b\u89d2\u662f\u4e00\u500b\u4e09\u89d2\u5f62\uff0c\u4ed6\u63a5\u89f8\u5230\u8c61\u5fb5\u7684\u60f3\u6cd5\u7684\u5176\u4ed6\u5e7e\u4f55\u5f62\u6642\uff0c\u5c31\u6703\u56e0\u6b64\u8b8a\u5f62\uff0c\u539f\u672c\u5c0d\u60f3\u6cd5\u7684\u614b\u5ea6\u662f\u597d\u5947\u8208\u596e\u7684\uff0c\u4f46\u96a8\u8457\u60f3\u6cd5\u8d8a\u4f86\u8d8a\u591a\uff0c\u4ed6\u8d8a\u4f86\u8d8a\u7121\u6cd5\u5c08\u5fc3\uff0c\u5c31\u56e0\u6b64\u8b8a\u5f62\u5f97\u8d8a\u4f86\u8d8a\u5feb\uff0c\u76f4\u5230\u4ed6\u53d7\u4e0d\u4e86\u5d29\u6f70\u4e4b\u6642\uff0c\u4ed6\u9078\u64c7\u9589\u4e0a\u773c\u775b\uff0c\u56de\u6b78\u81ea\u5df1\u7684\u5167\u5fc3\uff0c\u900f\u904e\u51a5\u60f3\uff0c\u8abf\u6574\u81ea\u5df1\u7684\u547c\u5438\uff0c\u4ed6\u7684\u5167\u5fc3\u4e16\u754c\u624d\u6f38\u6f38\u5e73\u548c\u3002",'"Don\'t treat your thoughts as yourself" is a concept taken from the book "The Highest Resting State", from which I have extracted interesting content. The book uses the metaphor of a train station and trains coming and going to explain that your thoughts are like trains passing through the station, but the trains are not the station itself. While reading this passage, I thought of a psychological term called "cute aggression", which describes the phenomenon of wanting to squeeze cute animals. Research has found that this is not abnormal, but rather a normal mechanism of the brain to balance emotions. Therefore, this also proves the concept of not identifying with one\'s thoughts.','Although the initial theme was "Don\'t treat your thoughts as yourself," during the story conceptualization process, it became clear that this was one of the concepts of meditation. Thus, limiting it to just this concept was too narrow, so I chose to focus on the broader concept of meditation itself. I wanted to use geometric shapes to tell the story. The protagonist is a triangle, and whenever he encounters other geometric shapes that represent thoughts, he transforms accordingly. Initially, he is curious and excited about the thoughts, but as more thoughts come, he becomes increasingly distracted and starts to transform faster and faster until he breaks down. Finally, he decides to close his eyes, go inward, and meditate by regulating his breathing, allowing his inner world to gradually become peaceful.']})}),(0,i.jsxs)(a.Section,{children:[(0,i.jsx)(a.Title,{type:"h2",content:"Storyboard"}),(0,i.jsx)(a.MediaList,{col:2,mCol:1,links:[n.image_02,n.image_03]})]}),(0,i.jsx)(a.Space,{}),(0,i.jsx)(a.Title,{type:"h2",content:"Credits"}),(0,i.jsx)(a.Credits,{content:["Director : \u912d\u8a52\u8b19 1000 Cheng","Music : \u5289\u7ffc\u7fec Yi-Huei Liou"]})]})}},8213:function(t,e,n){"use strict";n.d(e,{zo:function(){return r},iv:function(){return o},gN:function(){return a}});var i=(0,n(4995).Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),r=i.styled,o=i.css,a={"@s":"s","@l":"l"}},2294:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/simplex",function(){return n(1694)}])}},function(t){t.O(0,[9774,296,126,4959,6352,9459,7599,2888,179],(function(){return e=2294,t(t.s=e);var e}));var e=t.O();_N_E=e}]);