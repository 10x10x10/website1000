(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4495],{27:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/v2",function(){return n(1931)}])},1626:function(e,t,n){"use strict";n.d(t,{W:function(){return queryLink}});var i=n(8439);let queryLink=function(e){let t=e.split("."),n=i.aT;for(let e=0;e<t.length;e++)n=n[t[e]];return n}},4509:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(5893);n(7294);var r=n(5697),a=n.n(r),o=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":161,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[500,500],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"t":80,"s":[100]}],"ix":1,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":80,"s":[100]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[90]},{"t":80,"s":[270]}],"ix":3,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"m":2,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":2,"ix":4,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":160,"st":0,"bm":0}],"markers":[]}'),s=n(5152),l=n.n(s);let d=l()(()=>Promise.all([n.e(296),n.e(9260)]).then(n.t.bind(n,9260,23)),{loadableGenerated:{webpack:()=>[9260]},ssr:!1});function Loading(e){let{isLoading:t}=e,n=(0,i.jsx)("div",{className:"loading-conatiner",children:(0,i.jsx)(d,{animationData:o,style:{width:64,height:64},loop:!0,autoplay:!0})});return t?n:null}Loading.propTypes={isLoading:a().bool.isRequired},Loading.defaultProps={isLoading:!1},Loading.getInitialProps=async()=>Loading.defaultProps;var u=Loading},1230:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(7294),a=n(5697),o=n.n(a),s=n(3967),l=n.n(s),d=n(4509);let u=/(.+)\?\[(\d+)[x*](\d+)\]/,getMediaInfo=e=>{let t=e.match(u);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}};function Media(e){let{link:t,classes:n,position:a,enableLoading:o}=e,[s,u]=(0,r.useState)(!0),{urlLink:c,width:f,height:p}=getMediaInfo(t),m=(0,r.createRef)();function getMediaContent(){let subExMatch=(e,t)=>{let n=e.toLowerCase();return t.some(e=>n.endsWith(e))};return subExMatch(c,[".mp4"])?(0,i.jsx)("video",{ref:m,className:l()("media-video",...n,{loading:s}),src:c,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):subExMatch(c,[".png",".jpg",".jpeg"])?(0,i.jsx)("img",{ref:m,className:l()("media-img",...n,{loading:s}),src:c,loading:"lazy",width:"100%",alt:"",title:""}):subExMatch(c,[".gif"])?(0,i.jsx)("img",{ref:m,className:l()("media-gif",...n,{loading:s}),src:c,loading:"lazy",width:"100%",alt:"",title:""}):null}return(0,r.useEffect)(()=>{let UpdateLoadingState=()=>{u(!1)};switch(m.current.nodeName){case"IMG":let e=m.current;e.complete?UpdateLoadingState():e.onload=UpdateLoadingState;break;case"VIDEO":let t=m.current;console.log(),t.readyState>=3?UpdateLoadingState():t.onloadeddata=UpdateLoadingState}}),(0,i.jsxs)("div",{ref:e.forwardedRef,style:{position:a,inset:0,paddingTop:"".concat(p/f*100,"%")},className:l()("media-item",{"media-show":!e.forwardedRef||e.enterCount>0}),children:[getMediaContent(),o?(0,i.jsx)(d.default,{isLoading:s}):null]})}Media.propTypes={link:o().string.isRequired,classes:o().arrayOf(o().string),position:o().oneOf(["relative","absolute"]),enableLoading:o().bool},Media.defaultProps={link:"",classes:[],position:"relative",enableLoading:!0},Media.getInitialProps=async()=>Media.defaultProps,t.default=Media},7725:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return MediaList}});var i=n(5893);n(7294);var r=n(3967),a=n.n(r),o=n(1626),s=n(1230),l=n(9231);let d=(0,l.ZP)(s.default);function MediaList(e){let{links:t="",title:n="",col:r=0,mCol:s=r}=e;function getLinks(e){return(!1===Array.isArray(e)?e.split(",").map(e=>e.trim()):e).filter(e=>""!==e&&!1===e.startsWith("//")).map(e=>e.startsWith("http")?e:(0,o.W)(e)).filter(e=>void 0!==e)}function getClass(e,t){return{["grid-c"+e]:!0,["m-grid-c"+t]:!0}}return(0,i.jsxs)("div",{className:"media-list-container",children:[n?(0,i.jsx)("div",{className:"project-text-container project-view-title",children:(0,i.jsx)("h2",{children:n})}):null,(0,i.jsx)("div",{className:a()("grid-c",getClass(r,s)),children:getLinks(t).map(e=>(0,i.jsx)("div",{className:"media-container",children:(0,i.jsx)(d,{link:e})},e))})]})}},1509:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Card}});var i=n(5893);n(7294);var r=n(524);let a=(0,r.zo)("div",{backgroundColor:"#88888820",borderRadius:8,padding:16});function Card(e){let{children:t}=e;return(0,i.jsx)(a,{children:t})}Card.propTypes={},Card.defaultProps={}},1121:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Divider}});var i=n(5893);n(7294);var r=n(524);let a=(0,r.zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:2,margin:"16px 0",backgroundColor:"#ffffff20"});function Divider(e){let{}=e;return(0,i.jsx)(a,{})}Divider.propTypes={},Divider.defaultProps={}},8599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return EmbedVideo}});var i=n(5893);n(7294),n(1626);var r=n(524);let a=(0,r.zo)("div",{position:"relative",width:"100%",paddingTop:"".concat(9/16*100,"%"),"& iframe":{width:"100%",height:"100%",position:"absolute",top:0,left:0}});function EmbedVideo(e){let{link:t=""}=e;return(0,i.jsx)(a,{children:(0,i.jsx)("iframe",{src:t,scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},427:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return GridLayout}});var i=n(5893);n(7294);var r=n(5697),a=n.n(r),o=n(524);let s=(0,o.zo)("section",{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:10,columnGap:40});function GridLayout(e){let{children:t,sCol:n,lCol:r}=e;return(0,i.jsx)(s,{css:{"@s":{gridTemplateColumns:"repeat(".concat(n,", 1fr)")},"@l":{gridTemplateColumns:"repeat(".concat(r,", 1fr)")}},children:t})}GridLayout.propTypes={sCol:a().number,lCol:a().number},GridLayout.defaultProps={sCol:1,lCol:1}},4874:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return List}});var i=n(5893);n(7294);var r=n(5697),a=n.n(r),o=n(524),s=n(7760);let l=(0,o.iv)({paddingLeft:24}),d=(0,o.zo)("ul",l,{}),u=(0,o.zo)("ol",l,{}),c=(0,o.zo)("li",s.TextStyle,{});function List(e){let{type:t,content:n}=e,r="order"===t?u:d;return(0,i.jsx)(r,{children:n.map((e,t)=>(0,i.jsx)(c,{type:"normal",children:e},t))})}List.propTypes={type:a().oneOf(["order","unorder"]),content:a().array},List.defaultProps={type:"order",content:[]}},8256:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Section}});var i=n(5893);n(7294);var r=n(524);let a=(0,r.zo)("section",{boxSizing:"border-box",variants:{size:{s:{margin:"40px 0",padding:0},l:{margin:"80px 0",padding:0}}}});function Section(e){let{children:t}=e;return(0,i.jsx)(a,{size:r.gN,children:t})}Section.propTypes={},Section.defaultProps={}},541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Space}});var i=n(5893);n(7294);var r=n(524);let a=(0,r.zo)("span",{display:"flex",flexGrow:0,flexShrink:0,height:32});function Space(e){let{}=e;return(0,i.jsx)(a,{})}Space.propTypes={},Space.defaultProps={}},4496:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Title}});var i=n(5893);n(7294);var r=n(5697),a=n.n(r),o=n(524);let s=(0,o.iv)({padding:0,margin:0,marginBottom:16}),l=(0,o.zo)("h1",s,{fontSize:36,fontWeight:500}),d=(0,o.zo)("h2",s,{fontSize:28,fontWeight:400}),u=(0,o.zo)("h3",s,{fontSize:22,fontWeight:300});function Title(e){let{type:t,content:n}=e;switch(t){case"h1":return(0,i.jsx)(l,{className:"convert-selection",children:n});case"h2":return(0,i.jsx)(d,{className:"convert-selection",children:n});case"h3":return(0,i.jsx)(u,{className:"convert-selection",children:n});default:return null}}Title.propTypes={type:a().oneOf(["h1","h2","h3"]),content:a().string},Title.defaultProps={type:"h1",content:""}},1931:function(e,t,n){"use strict";n.r(t),n.d(t,{Card:function(){return c.default},Credits:function(){return p.default},Divider:function(){return l.default},EmbedVideo:function(){return m.default},GridLayout:function(){return u.default},List:function(){return a.default},MediaList:function(){return f.default},Section:function(){return d.default},Space:function(){return s.default},Text:function(){return o.default},Title:function(){return r.default},default:function(){return ComponentsV2}});var i=n(5893),r=n(4496),a=n(4874),o=n(7760),s=n(541),l=n(1121),d=n(8256),u=n(427),c=n(1509),f=n(7725),p=n(4535),m=n(8599);function ComponentsV2(){return(0,i.jsx)("p",{children:"ComponentsV2"})}}},function(e){e.O(0,[9818,8439,4535,9774,2888,179],function(){return e(e.s=27)}),_N_E=e.O()}]);