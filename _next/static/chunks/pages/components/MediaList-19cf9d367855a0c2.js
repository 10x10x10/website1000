(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[442],{1960:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/MediaList",function(){return a(7725)}])},1626:function(e,t,a){"use strict";a.d(t,{W:function(){return queryLink}});var i=a(8439);let queryLink=function(e){let t=e.split("."),a=i.aT;for(let e=0;e<t.length;e++)a=a[t[e]];return a}},4509:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var i=a(5893);a(7294);var n=a(5697),s=a.n(n),r=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":161,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[500,500],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"t":80,"s":[100]}],"ix":1,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":80,"s":[100]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[90]},{"t":80,"s":[270]}],"ix":3,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"m":2,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":2,"ix":4,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":160,"st":0,"bm":0}],"markers":[]}'),o=a(5152),l=a.n(o);let d=l()(()=>Promise.all([a.e(296),a.e(9260)]).then(a.t.bind(a,9260,23)),{loadableGenerated:{webpack:()=>[9260]},ssr:!1});function Loading(e){let{isLoading:t}=e,a=(0,i.jsx)("div",{className:"loading-conatiner",children:(0,i.jsx)(d,{animationData:r,style:{width:64,height:64},loop:!0,autoplay:!0})});return t?a:null}Loading.propTypes={isLoading:s().bool.isRequired},Loading.defaultProps={isLoading:!1},Loading.getInitialProps=async()=>Loading.defaultProps;var c=Loading},1230:function(e,t,a){"use strict";a.r(t);var i=a(5893),n=a(7294),s=a(5697),r=a.n(s),o=a(3967),l=a.n(o),d=a(4509);let c=/(.+)\?\[(\d+)[x*](\d+)\]/,getMediaInfo=e=>{let t=e.match(c);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}};function Media(e){let{link:t,classes:a,position:s,enableLoading:r}=e,[o,c]=(0,n.useState)(!0),{urlLink:u,width:p,height:m}=getMediaInfo(t),f=(0,n.createRef)();function getMediaContent(){let subExMatch=(e,t)=>{let a=e.toLowerCase();return t.some(e=>a.endsWith(e))};return subExMatch(u,[".mp4"])?(0,i.jsx)("video",{ref:f,className:l()("media-video",...a,{loading:o}),src:u,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):subExMatch(u,[".png",".jpg",".jpeg"])?(0,i.jsx)("img",{ref:f,className:l()("media-img",...a,{loading:o}),src:u,loading:"lazy",width:"100%",alt:"",title:""}):subExMatch(u,[".gif"])?(0,i.jsx)("img",{ref:f,className:l()("media-gif",...a,{loading:o}),src:u,loading:"lazy",width:"100%",alt:"",title:""}):null}return(0,n.useEffect)(()=>{let UpdateLoadingState=()=>{c(!1)};switch(f.current.nodeName){case"IMG":let e=f.current;e.complete?UpdateLoadingState():e.onload=UpdateLoadingState;break;case"VIDEO":let t=f.current;console.log(),t.readyState>=3?UpdateLoadingState():t.onloadeddata=UpdateLoadingState}}),(0,i.jsxs)("div",{ref:e.forwardedRef,style:{position:s,inset:0,paddingTop:"".concat(m/p*100,"%")},className:l()("media-item",{"media-show":!e.forwardedRef||e.enterCount>0}),children:[getMediaContent(),r?(0,i.jsx)(d.default,{isLoading:o}):null]})}Media.propTypes={link:r().string.isRequired,classes:r().arrayOf(r().string),position:r().oneOf(["relative","absolute"]),enableLoading:r().bool},Media.defaultProps={link:"",classes:[],position:"relative",enableLoading:!0},Media.getInitialProps=async()=>Media.defaultProps,t.default=Media},7725:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return MediaList}});var i=a(5893);a(7294);var n=a(3967),s=a.n(n),r=a(1626),o=a(1230),l=a(9231);let d=(0,l.ZP)(o.default);function MediaList(e){let{links:t="",title:a="",col:n=0,mCol:o=n}=e;function getLinks(e){return(!1===Array.isArray(e)?e.split(",").map(e=>e.trim()):e).filter(e=>""!==e&&!1===e.startsWith("//")).map(e=>e.startsWith("http")?e:(0,r.W)(e)).filter(e=>void 0!==e)}function getClass(e,t){return{["grid-c"+e]:!0,["m-grid-c"+t]:!0}}return(0,i.jsxs)("div",{className:"media-list-container",children:[a?(0,i.jsx)("div",{className:"project-text-container project-view-title",children:(0,i.jsx)("h2",{children:a})}):null,(0,i.jsx)("div",{className:s()("grid-c",getClass(n,o)),children:getLinks(t).map(e=>(0,i.jsx)("div",{className:"media-container",children:(0,i.jsx)(d,{link:e})},e))})]})}}},function(e){e.O(0,[9818,8439,9774,2888,179],function(){return e(e.s=1960)}),_N_E=e.O()}]);