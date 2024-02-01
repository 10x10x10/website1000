(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4252],{6495:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/simplex",function(){return n(1809)}])},1626:function(e,t,n){"use strict";n.d(t,{W:function(){return queryLink}});var i=n(8439);let queryLink=function(e){let t=e.split("."),n=i.aT;for(let e=0;e<t.length;e++)n=n[t[e]];return n}},7725:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return MediaList}});var i=n(5893);n(7294);var r=n(3967),o=n.n(r),a=n(1626),s=n(1230),l=n(9231);let c=(0,l.ZP)(s.default);function MediaList(e){let{links:t="",title:n="",col:r=0,mCol:s=r}=e;function getLinks(e){return(!1===Array.isArray(e)?e.split(",").map(e=>e.trim()):e).filter(e=>""!==e&&!1===e.startsWith("//")).map(e=>e.startsWith("http")?e:(0,a.W)(e)).filter(e=>void 0!==e)}function getClass(e,t){return{["grid-c"+e]:!0,["m-grid-c"+t]:!0}}return(0,i.jsxs)("div",{className:"media-list-container",children:[n?(0,i.jsx)("div",{className:"project-text-container project-view-title",children:(0,i.jsx)("h2",{children:n})}):null,(0,i.jsx)("div",{className:o()("grid-c",getClass(r,s)),children:getLinks(t).map(e=>(0,i.jsx)("div",{className:"media-container",children:(0,i.jsx)(c,{link:e})},e))})]})}},1509:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Card}});var i=n(5893);n(7294);var r=n(524);let o=(0,r.zo)("div",{backgroundColor:"#88888820",borderRadius:8,padding:16});function Card(e){let{children:t}=e;return(0,i.jsx)(o,{children:t})}Card.propTypes={},Card.defaultProps={}},4535:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Credits}});var i=n(5893),r=n(7294),o=n(5697),a=n.n(o),s=n(524),l=n(7760);let c=(0,s.zo)("div",{display:"flex",flexDirection:"column"}),u=(0,s.zo)("div",{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",transition:"max-height 0.5s",variants:{fold:{true:{maxHeight:200,cursor:"pointer","&::after":{content:"",position:"absolute",left:0,right:0,bottom:0,height:150,background:"#0B0C0E",background:"linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)"}},false:{maxHeight:1e4,cursor:"pointer","&::after":{display:"none"}}}}}),d=(0,s.zo)(l.TextStyle),f=(0,s.zo)("button",{fontSize:16,cursor:"pointer",width:80,padding:8,textAlign:"center",border:"1px #ffffff solid",backgroundColor:"#ffffff00",color:"#ffffff",boxSizing:"border-box",marginTop:16,"&:hover":{backgroundColor:"#ffffff",color:"#000000"}});function Credits(e){let{content:t,foldable:n}=e,[o,a]=(0,r.useState)(!1);return(0,i.jsxs)(c,{children:[(0,i.jsx)(u,{fold:!!n&&o,onClick:()=>a(!o),children:t.map((e,t)=>(0,i.jsx)(d,{type:"normal",children:e},t))}),n&&(0,i.jsx)(f,{onClick:()=>a(!1),children:"More"})]})}Credits.propTypes={content:a().array,foldable:a().bool},Credits.defaultProps={content:[],foldable:!1}},1121:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Divider}});var i=n(5893);n(7294);var r=n(524);let o=(0,r.zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:2,margin:"16px 0",backgroundColor:"#ffffff20"});function Divider(e){let{}=e;return(0,i.jsx)(o,{})}Divider.propTypes={},Divider.defaultProps={}},8599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return EmbedVideo}});var i=n(5893);n(7294),n(1626);var r=n(524);let o=(0,r.zo)("div",{position:"relative",width:"100%",paddingTop:"".concat(9/16*100,"%"),"& iframe":{width:"100%",height:"100%",position:"absolute",top:0,left:0}});function EmbedVideo(e){let{link:t=""}=e;return(0,i.jsx)(o,{children:(0,i.jsx)("iframe",{src:t,scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},427:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return GridLayout}});var i=n(5893);n(7294);var r=n(5697),o=n.n(r),a=n(524);let s=(0,a.zo)("section",{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:10,columnGap:40});function GridLayout(e){let{children:t,sCol:n,lCol:r}=e;return(0,i.jsx)(s,{css:{"@s":{gridTemplateColumns:"repeat(".concat(n,", 1fr)")},"@l":{gridTemplateColumns:"repeat(".concat(r,", 1fr)")}},children:t})}GridLayout.propTypes={sCol:o().number,lCol:o().number},GridLayout.defaultProps={sCol:1,lCol:1}},4874:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return List}});var i=n(5893);n(7294);var r=n(5697),o=n.n(r),a=n(524),s=n(7760);let l=(0,a.iv)({paddingLeft:24}),c=(0,a.zo)("ul",l,{}),u=(0,a.zo)("ol",l,{}),d=(0,a.zo)("li",s.TextStyle,{});function List(e){let{type:t,content:n}=e,r="order"===t?u:c;return(0,i.jsx)(r,{children:n.map((e,t)=>(0,i.jsx)(d,{type:"normal",children:e},t))})}List.propTypes={type:o().oneOf(["order","unorder"]),content:o().array},List.defaultProps={type:"order",content:[]}},8256:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Section}});var i=n(5893);n(7294);var r=n(524);let o=(0,r.zo)("section",{boxSizing:"border-box",variants:{size:{s:{margin:"40px 0",padding:0},l:{margin:"80px 0",padding:0}}}});function Section(e){let{children:t}=e;return(0,i.jsx)(o,{size:r.gN,children:t})}Section.propTypes={},Section.defaultProps={}},541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Space}});var i=n(5893);n(7294);var r=n(524);let o=(0,r.zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:32});function Space(e){let{}=e;return(0,i.jsx)(o,{})}Space.propTypes={},Space.defaultProps={}},7760:function(e,t,n){"use strict";n.r(t),n.d(t,{TextStyle:function(){return s},default:function(){return Text}});var i=n(5893);n(7294);var r=n(5697),o=n.n(r),a=n(524);let s=(0,a.iv)({padding:0,margin:0,marginBottom:8,lineHeight:"26px",wordWrap:"break-word",whiteSpace:"pre-line",variants:{type:{small:{fontSize:14,color:"#ffffff80"},normal:{fontSize:16,color:"#ffffffc0"},big:{fontSize:28,fontWeight:600,color:"#ffffffe0"}}}}),l=(0,a.zo)("p",s,{});function Text(e){let{content:t,type:n}=e;return Array.isArray(t)?t.map((e,t)=>(0,i.jsx)(l,{type:n,children:e},t)):(0,i.jsx)(l,{type:n,children:t})}Text.propTypes={content:o().oneOfType([o().string,o().array]),type:o().oneOf(["normal","small","big"])},Text.defaultProps={content:"",type:"normal"}},4496:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Title}});var i=n(5893);n(7294);var r=n(5697),o=n.n(r),a=n(524);let s=(0,a.iv)({padding:0,margin:0,marginBottom:16}),l=(0,a.zo)("h1",s,{fontSize:36,fontWeight:500}),c=(0,a.zo)("h2",s,{fontSize:28,fontWeight:400}),u=(0,a.zo)("h3",s,{fontSize:22,fontWeight:300});function Title(e){let{type:t,content:n}=e;switch(t){case"h1":return(0,i.jsx)(l,{className:"convert-selection",children:n});case"h2":return(0,i.jsx)(c,{className:"convert-selection",children:n});case"h3":return(0,i.jsx)(u,{className:"convert-selection",children:n});default:return null}}Title.propTypes={type:o().oneOf(["h1","h2","h3"]),content:o().string},Title.defaultProps={type:"h1",content:""}},1931:function(e,t,n){"use strict";n.r(t),n.d(t,{Card:function(){return d.default},Credits:function(){return p.default},Divider:function(){return l.default},EmbedVideo:function(){return h.default},GridLayout:function(){return u.default},List:function(){return o.default},MediaList:function(){return f.default},Section:function(){return c.default},Space:function(){return s.default},Text:function(){return a.default},Title:function(){return r.default},default:function(){return ComponentsV2}});var i=n(5893),r=n(4496),o=n(4874),a=n(7760),s=n(541),l=n(1121),c=n(8256),u=n(427),d=n(1509),f=n(7725),p=n(4535),h=n(8599);function ComponentsV2(){return(0,i.jsx)("p",{children:"ComponentsV2"})}},1809:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ProjectPage}});var i=n(5893);n(7294);var r=n(1804),o=n(8439),a=n(1931);function ProjectPage(e){let t="projectM001",n=o.aT[t];return(0,i.jsxs)(r.default,{id:t,showOtherProject:!1,children:[(0,i.jsx)(a.EmbedVideo,{link:n.video_main}),(0,i.jsxs)(a.Section,{children:[(0,i.jsx)(a.Title,{type:"h1",content:"SIMPLEX"}),(0,i.jsx)(a.Text,{content:["Simplex 是 simple 與 complex 的複合字，字面上的意思是「簡單的複雜」，隱含的意思是「人」。 但它同時也是數學上的專有名詞，意旨在 n 維空間中，取 n+1 個點，讓這些點相互連接，可構成 Simplex。 在零到三維空間中的 simplex，分別代表點、線段、三角形，與四面體。而這次動畫的主角即是三維的 Simplex 。 一如往常的話只說了一半，簡而言之是在描述人與想法的互動關係。",'Simplex is a compound word of simple and complex, literally meaning "simple complexity", implied meaning "people." But it is also a mathematical term, meaning that in n-dimensional space, take n+1 points, and connect these points to each other to form Simplex. Simplex in zero to three-dimensional space, representing points, line segments, triangles, and tetrahedrons. The protagonist of this animation is the 3D Simplex. As usual, I only said half of it. In short, it describes the interaction between people and ideas.']})]}),(0,i.jsxs)(a.Section,{children:[(0,i.jsx)(a.Title,{type:"h2",content:"Motion"}),(0,i.jsx)(a.MediaList,{col:2,mCol:1,links:[n.video_01_s,n.video_02_s,n.video_03_s,n.video_04_s]})]}),(0,i.jsxs)(a.Section,{children:[(0,i.jsx)(a.Title,{type:"h2",content:"Concept"}),(0,i.jsx)(a.MediaList,{col:1,mCol:1,links:[n.image_01]})]}),(0,i.jsx)(a.Section,{children:(0,i.jsx)(a.Text,{content:["「不要把你自己的想法當成你自己」是參考最高休息法這本書，我擷取出我覺得有趣的內容，書中的比喻是說，你是車站，而想法是來來去去的列車，但我們不會說，列車就是車站本身。在閱讀這個篇章時，我聯想到一個心理學的專有名詞「可愛侵略性」，是在描述有一群人會在看到可愛的動物時，產生想要捏死他的念頭，但研究發現，並不是這些人特別有變態，而是因為大腦，不論在開心或難過時，都傾向讓情緒趨於平衡，因此在開心的時候，產生負面念頭，只是大腦的一個正常機制。我覺得這也應證了「不要把你的想法當成你自己」。","雖然一開始是以「不要把你的想法當成你自己為主題」，但後來在構思故事的過程中，覺得這本來就是描述冥想的其中一個概念，所以如果限縮在這裡，有些狹隘，因此後來還是以「冥想」本身為概念核心。這次想用幾何形去呈現故事，故事大綱是，主角是一個三角形，他接觸到象徵的想法的其他幾何形時，就會因此變形，原本對想法的態度是好奇興奮的，但隨著想法越來越多，他越來越無法專心，就因此變形得越來越快，直到他受不了崩潰之時，他選擇閉上眼睛，回歸自己的內心，透過冥想，調整自己的呼吸，他的內心世界才漸漸平和。",'"Don\'t treat your thoughts as yourself" is a concept taken from the book "The Highest Resting State", from which I have extracted interesting content. The book uses the metaphor of a train station and trains coming and going to explain that your thoughts are like trains passing through the station, but the trains are not the station itself. While reading this passage, I thought of a psychological term called "cute aggression", which describes the phenomenon of wanting to squeeze cute animals. Research has found that this is not abnormal, but rather a normal mechanism of the brain to balance emotions. Therefore, this also proves the concept of not identifying with one\'s thoughts.','Although the initial theme was "Don\'t treat your thoughts as yourself," during the story conceptualization process, it became clear that this was one of the concepts of meditation. Thus, limiting it to just this concept was too narrow, so I chose to focus on the broader concept of meditation itself. I wanted to use geometric shapes to tell the story. The protagonist is a triangle, and whenever he encounters other geometric shapes that represent thoughts, he transforms accordingly. Initially, he is curious and excited about the thoughts, but as more thoughts come, he becomes increasingly distracted and starts to transform faster and faster until he breaks down. Finally, he decides to close his eyes, go inward, and meditate by regulating his breathing, allowing his inner world to gradually become peaceful.']})}),(0,i.jsxs)(a.Section,{children:[(0,i.jsx)(a.Title,{type:"h2",content:"Storyboard"}),(0,i.jsx)(a.MediaList,{col:2,mCol:1,links:[n.image_02,n.image_03]})]}),(0,i.jsx)(a.Space,{}),(0,i.jsx)(a.Title,{type:"h2",content:"Credits"}),(0,i.jsx)(a.Credits,{content:["Director : 鄭詒謙 1000 Cheng","Music : 劉翼翬 Yi-Huei Liou"]})]})}},524:function(e,t,n){"use strict";n.d(t,{gN:function(){return a},iv:function(){return o},zo:function(){return r}});var i=n(6744);let{styled:r,css:o}=(0,i.Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),a={"@s":"s","@l":"l"}}},function(e){e.O(0,[296,9890,1664,2898,8439,1804,9774,2888,179],function(){return e(e.s=6495)}),_N_E=e.O()}]);