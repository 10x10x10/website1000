(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4495],{27:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/v2",function(){return n(1931)}])},1626:function(t,e,n){"use strict";n.d(e,{W:function(){return queryLink}});var r=n(8439);let queryLink=function(t){let e=t.split("."),n=r.aT;for(let t=0;t<e.length;t++)n=n[e[t]];return n}},4509:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(5893);n(7294);var i=n(5697),o=n.n(i),a=n(9260),l=n.n(a),s=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":161,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[500,500],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"t":80,"s":[100]}],"ix":1,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":80,"s":[100]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[90]},{"t":80,"s":[270]}],"ix":3,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"m":2,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":2,"ix":4,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":160,"st":0,"bm":0}],"markers":[]}');function Loading(t){let{isLoading:e}=t,n=(0,r.jsx)("div",{className:"loading-conatiner",children:(0,r.jsx)(l(),{animationData:s,style:{width:64,height:64},loop:!0,autoplay:!0})});return e?n:null}Loading.propTypes={isLoading:o().bool.isRequired},Loading.defaultProps={isLoading:!1},Loading.getInitialProps=async()=>Loading.defaultProps;var d=Loading},1230:function(t,e,n){"use strict";n.r(e);var r=n(5893),i=n(7294),o=n(5697),a=n.n(o),l=n(3967),s=n.n(l),d=n(4509);let u=/(.+)\?\[(\d+)[x*](\d+)\]/,getMediaInfo=t=>{let e=t.match(u);return e?{urlLink:e[1],width:parseInt(e[2]),height:parseInt(e[3])}:{urlLink:t,width:10,height:10}};function Media(t){let{link:e,classes:n,position:o,enableLoading:a}=t,[l,u]=(0,i.useState)(!0),{urlLink:c,width:f,height:p}=getMediaInfo(e),m=(0,i.createRef)();function getMediaContent(){let subExMatch=(t,e)=>{let n=t.toLowerCase();return e.some(t=>n.endsWith(t))};return subExMatch(c,[".mp4"])?(0,r.jsx)("video",{ref:m,className:s()("media-video",...n,{loading:l}),src:c,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):subExMatch(c,[".png",".jpg",".jpeg"])?(0,r.jsx)("img",{ref:m,className:s()("media-img",...n,{loading:l}),src:c,loading:"lazy",width:"100%",alt:"",title:""}):subExMatch(c,[".gif"])?(0,r.jsx)("img",{ref:m,className:s()("media-gif",...n,{loading:l}),src:c,loading:"lazy",width:"100%",alt:"",title:""}):null}return(0,i.useEffect)(()=>{let UpdateLoadingState=()=>{u(!1)};switch(m.current.nodeName){case"IMG":let t=m.current;t.complete?UpdateLoadingState():t.onload=UpdateLoadingState;break;case"VIDEO":let e=m.current;console.log(),e.readyState>=3?UpdateLoadingState():e.onloadeddata=UpdateLoadingState}}),(0,r.jsxs)("div",{ref:t.forwardedRef,style:{position:o,inset:0,paddingTop:"".concat(p/f*100,"%")},className:s()("media-item",{"media-show":!t.forwardedRef||t.enterCount>0}),children:[getMediaContent(),a?(0,r.jsx)(d.default,{isLoading:l}):null]})}Media.propTypes={link:a().string.isRequired,classes:a().arrayOf(a().string),position:a().oneOf(["relative","absolute"]),enableLoading:a().bool},Media.defaultProps={link:"",classes:[],position:"relative",enableLoading:!0},Media.getInitialProps=async()=>Media.defaultProps,e.default=Media},7725:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return MediaList}});var r=n(5893);n(7294);var i=n(3967),o=n.n(i),a=n(1626),l=n(1230),s=n(9231);let d=(0,s.ZP)(l.default);function MediaList(t){let{links:e="",title:n="",col:i=0,mCol:l=i}=t;function getLinks(t){return(!1===Array.isArray(t)?t.split(",").map(t=>t.trim()):t).filter(t=>""!==t&&!1===t.startsWith("//")).map(t=>t.startsWith("http")?t:(0,a.W)(t)).filter(t=>void 0!==t)}function getClass(t,e){return{["grid-c"+t]:!0,["m-grid-c"+e]:!0}}return(0,r.jsxs)("div",{className:"media-list-container",children:[n?(0,r.jsx)("div",{className:"project-text-container project-view-title",children:(0,r.jsx)("h2",{children:n})}):null,(0,r.jsx)("div",{className:o()("grid-c",getClass(i,l)),children:getLinks(e).map(t=>(0,r.jsx)("div",{className:"media-container",children:(0,r.jsx)(d,{link:t})},t))})]})}},1509:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Card}});var r=n(5893);n(7294);var i=n(524);let o=(0,i.zo)("div",{backgroundColor:"#88888820",borderRadius:8,padding:16});function Card(t){let{children:e}=t;return(0,r.jsx)(o,{children:e})}Card.propTypes={},Card.defaultProps={}},4535:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Credits}});var r=n(5893),i=n(7294),o=n(5697),a=n.n(o),l=n(524),s=n(7760);let d=(0,l.zo)("div",{display:"flex",flexDirection:"column"}),u=(0,l.zo)("div",{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",transition:"max-height 0.5s",variants:{fold:{true:{maxHeight:200,cursor:"pointer","&::after":{content:"",position:"absolute",left:0,right:0,bottom:0,height:150,background:"#0B0C0E",background:"linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)"}},false:{maxHeight:1e4,cursor:"pointer","&::after":{display:"none"}}}}}),c=(0,l.zo)(s.TextStyle),f=(0,l.zo)("button",{fontSize:16,cursor:"pointer",width:80,padding:8,textAlign:"center",border:"1px #ffffff solid",backgroundColor:"#ffffff00",color:"#ffffff",boxSizing:"border-box",marginTop:16,"&:hover":{backgroundColor:"#ffffff",color:"#000000"}});function Credits(t){let{content:e,foldable:n}=t,[o,a]=(0,i.useState)(!1);return(0,r.jsxs)(d,{children:[(0,r.jsx)(u,{fold:!!n&&o,onClick:()=>a(!o),children:e.map((t,e)=>(0,r.jsx)(c,{type:"normal",children:t},e))}),n&&(0,r.jsx)(f,{onClick:()=>a(!1),children:"More"})]})}Credits.propTypes={content:a().array,foldable:a().bool},Credits.defaultProps={content:[],foldable:!1}},1121:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Divider}});var r=n(5893);n(7294);var i=n(524);let o=(0,i.zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:2,margin:"16px 0",backgroundColor:"#ffffff20"});function Divider(t){let{}=t;return(0,r.jsx)(o,{})}Divider.propTypes={},Divider.defaultProps={}},8599:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return EmbedVideo}});var r=n(5893);n(7294),n(1626);var i=n(524);let o=(0,i.zo)("div",{position:"relative",width:"100%",paddingTop:"".concat(9/16*100,"%"),"& iframe":{width:"100%",height:"100%",position:"absolute",top:0,left:0}});function EmbedVideo(t){let{link:e=""}=t;return(0,r.jsx)(o,{children:(0,r.jsx)("iframe",{src:e,scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},427:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return GridLayout}});var r=n(5893);n(7294);var i=n(5697),o=n.n(i),a=n(524);let l=(0,a.zo)("section",{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:10,columnGap:40});function GridLayout(t){let{children:e,sCol:n,lCol:i}=t;return(0,r.jsx)(l,{css:{"@s":{gridTemplateColumns:"repeat(".concat(n,", 1fr)")},"@l":{gridTemplateColumns:"repeat(".concat(i,", 1fr)")}},children:e})}GridLayout.propTypes={sCol:o().number,lCol:o().number},GridLayout.defaultProps={sCol:1,lCol:1}},4874:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return List}});var r=n(5893);n(7294);var i=n(5697),o=n.n(i),a=n(524),l=n(7760);let s=(0,a.iv)({paddingLeft:24}),d=(0,a.zo)("ul",s,{}),u=(0,a.zo)("ol",s,{}),c=(0,a.zo)("li",l.TextStyle,{});function List(t){let{type:e,content:n}=t,i="order"===e?u:d;return(0,r.jsx)(i,{children:n.map((t,e)=>(0,r.jsx)(c,{type:"normal",children:t},e))})}List.propTypes={type:o().oneOf(["order","unorder"]),content:o().array},List.defaultProps={type:"order",content:[]}},8256:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Section}});var r=n(5893);n(7294);var i=n(524);let o=(0,i.zo)("section",{boxSizing:"border-box",variants:{size:{s:{margin:"40px 0",padding:0},l:{margin:"80px 0",padding:0}}}});function Section(t){let{children:e}=t;return(0,r.jsx)(o,{size:i.gN,children:e})}Section.propTypes={},Section.defaultProps={}},541:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Space}});var r=n(5893);n(7294);var i=n(524);let o=(0,i.zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:32});function Space(t){let{}=t;return(0,r.jsx)(o,{})}Space.propTypes={},Space.defaultProps={}},7760:function(t,e,n){"use strict";n.r(e),n.d(e,{TextStyle:function(){return l},default:function(){return Text}});var r=n(5893);n(7294);var i=n(5697),o=n.n(i),a=n(524);let l=(0,a.iv)({padding:0,margin:0,marginBottom:8,lineHeight:"26px",wordWrap:"break-word",whiteSpace:"pre-line",variants:{type:{small:{fontSize:14,color:"#ffffff80"},normal:{fontSize:16,color:"#ffffffc0"},big:{fontSize:28,fontWeight:600,color:"#ffffffe0"}}}}),s=(0,a.zo)("p",l,{});function Text(t){let{content:e,type:n}=t;return Array.isArray(e)?e.map((t,e)=>(0,r.jsx)(s,{type:n,children:t},e)):(0,r.jsx)(s,{type:n,children:e})}Text.propTypes={content:o().oneOfType([o().string,o().array]),type:o().oneOf(["normal","small","big"])},Text.defaultProps={content:"",type:"normal"}},4496:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Title}});var r=n(5893);n(7294);var i=n(5697),o=n.n(i),a=n(524);let l=(0,a.iv)({padding:0,margin:0,marginBottom:16}),s=(0,a.zo)("h1",l,{fontSize:36,fontWeight:500}),d=(0,a.zo)("h2",l,{fontSize:28,fontWeight:400}),u=(0,a.zo)("h3",l,{fontSize:22,fontWeight:300});function Title(t){let{type:e,content:n}=t;switch(e){case"h1":return(0,r.jsx)(s,{className:"convert-selection",children:n});case"h2":return(0,r.jsx)(d,{className:"convert-selection",children:n});case"h3":return(0,r.jsx)(u,{className:"convert-selection",children:n});default:return null}}Title.propTypes={type:o().oneOf(["h1","h2","h3"]),content:o().string},Title.defaultProps={type:"h1",content:""}},1931:function(t,e,n){"use strict";n.r(e),n.d(e,{Card:function(){return c.default},Credits:function(){return p.default},Divider:function(){return s.default},EmbedVideo:function(){return m.default},GridLayout:function(){return u.default},List:function(){return o.default},MediaList:function(){return f.default},Section:function(){return d.default},Space:function(){return l.default},Text:function(){return a.default},Title:function(){return i.default},default:function(){return ComponentsV2}});var r=n(5893),i=n(4496),o=n(4874),a=n(7760),l=n(541),s=n(1121),d=n(8256),u=n(427),c=n(1509),f=n(7725),p=n(4535),m=n(8599);function ComponentsV2(){return(0,r.jsx)("p",{children:"ComponentsV2"})}},524:function(t,e,n){"use strict";n.d(e,{gN:function(){return a},iv:function(){return o},zo:function(){return i}});var r=n(6744);let{styled:i,css:o}=(0,r.Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),a={"@s":"s","@l":"l"}}},function(t){t.O(0,[296,9890,2898,8439,9774,2888,179],function(){return t(t.s=27)}),_N_E=t.O()}]);