(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7052)}])},1626:function(e,t,n){"use strict";n.d(t,{W:function(){return queryLink}});var a=n(8439);let queryLink=function(e){let t=e.split("."),n=a.aT;for(let e=0;e<t.length;e++)n=n[t[e]];return n}},1116:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return EmbedVideo}});var a=n(5893);n(7294);var i=n(1626);function EmbedVideo(e){let{link:t=""}=e;function getLink(){return(0,i.W)(t)}return(0,a.jsx)("div",{className:"video-container",children:(0,a.jsx)("iframe",{src:getLink(),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},5851:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Header}});var a=n(5893);n(7294);var i=n(8439),r=n(3170);function Header(e){let{links:t,description:n,copyright:s}=i.footerData;return(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsx)("div",{className:"link-icon-container",children:t.map(e=>(0,a.jsx)("a",{href:e.link,target:"_blank",children:(0,a.jsx)("img",{src:e.icon,className:"icon"})},e.link))}),(0,a.jsx)("p",{children:n}),(0,a.jsx)("div",{style:{height:10}}),"   ",(0,a.jsx)("p",{children:s}),(0,a.jsx)(r.default,{})]})}},5479:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return HeadGoogleAnalytics}});var a=n(5893);n(7294);var i=n(4298),r=n.n(i);function HeadGoogleAnalytics(e){let t="UA-171392879-1";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{strategy:"beforeInteractive",async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,a.jsx)(r(),{id:"headGoogleAnalytics",children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},9099:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return HeadMeta}});var a=n(5893);n(7294);var i=n(9008),r=n.n(i),s=n(5479),o=n(8439);function HeadMeta(e){let t,{type:n,id:i}=e,l=o.Bm.defaultProjectMetaData;switch(n){case"project":(t=o.o8.projects.find(e=>e.id==i)||{}).ogImage=t.cover;break;case"index":t=o.Bm.indexMetaData;break;case"lab":t=o.Bm.labMetaData;break;case"about":t=o.Bm.aboutMetaData;break;default:t={}}let d={...l,...t,title:t.title?"".concat(t.title," | ").concat(l.title):"".concat(l.title)||"--"};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{}),(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:d.title}),(0,a.jsx)("link",{rel:"icon",href:d.icon}),(0,a.jsx)("meta",{name:"description",content:d.description}),(0,a.jsx)("meta",{name:"author",content:d.author}),(0,a.jsx)("meta",{property:"og:type",content:d.ogType}),(0,a.jsx)("meta",{property:"og:title",content:d.title}),(0,a.jsx)("meta",{property:"og:description",content:d.description}),(0,a.jsx)("meta",{property:"og:image",content:d.ogImage}),(0,a.jsx)("meta",{property:"og:site_name",content:d.ogSiteName}),(0,a.jsx)("meta",{property:"og:url",content:d.ogUrl})]})]})}},2626:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Header}});var a=n(5893),i=n(7294),r=n(1664),s=n.n(r),o=n(8439),l=n(3967),d=n.n(l);let Header=class Header extends i.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){let{type:e}=this.props,{showHeaderLink:t,hideHeader:n}=this.state;return(0,a.jsxs)("div",{className:d()("header",{"falling-down-header":n}),children:[(0,a.jsx)("div",{className:"title-conatainer",children:(0,a.jsx)(s(),{href:o.hu.links[0].link,children:(0,a.jsx)("img",{src:"/logo/logo.png"})})}),(0,a.jsx)("div",{className:"flex-space"}),(0,a.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:t?(0,a.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,a.jsx)("img",{src:"/icons/menu.svg"})}),(0,a.jsx)("div",{className:d()("header-link-container",{"m-header-link-container-show":t}),onClick:this.toggleHeaderLinkHandler,children:o.hu.links.map((t,n)=>{let i=t.type===e;return(0,a.jsx)("div",{className:"header-link-item",children:(0,a.jsx)(s(),{href:i?"":t.link,className:d()("header-link",{"header-link-active":i}),children:t.title})},t.link)})})]})}constructor(e){super(e),this.handleScroll=e=>{let t=document.documentElement.scrollTop,n=this.lastScrollTop-t;this.lastScrollTop=t,Math.abs(n)>10&&this.setState({hideHeader:n<=0})},this.toggleHeaderLinkHandler=()=>{let{showHeaderLink:e}=this.state;this.setState({showHeaderLink:!e})},this.state={showHeaderLink:!1,hideHeader:0},this.lastScrollTop=0}}},4509:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(5893);n(7294);var i=n(5697),r=n.n(i),s=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":161,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[500,500],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"t":80,"s":[100]}],"ix":1,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":80,"s":[100]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[90]},{"t":80,"s":[270]}],"ix":3,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"m":2,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":2,"ix":4,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":160,"st":0,"bm":0}],"markers":[]}'),o=n(5152),l=n.n(o);let d=l()(()=>Promise.all([n.e(296),n.e(9260)]).then(n.t.bind(n,9260,23)),{loadableGenerated:{webpack:()=>[9260]},ssr:!1});function Loading(e){let{isLoading:t}=e,n=(0,a.jsx)("div",{className:"loading-conatiner",children:(0,a.jsx)(d,{animationData:s,style:{width:64,height:64},loop:!0,autoplay:!0})});return t?n:null}Loading.propTypes={isLoading:r().bool.isRequired},Loading.defaultProps={isLoading:!1},Loading.getInitialProps=async()=>Loading.defaultProps;var c=Loading},1230:function(e,t,n){"use strict";n.r(t);var a=n(5893),i=n(7294),r=n(5697),s=n.n(r),o=n(3967),l=n.n(o),d=n(4509);let c=/(.+)\?\[(\d+)[x*](\d+)\]/,getMediaInfo=e=>{let t=e.match(c);return t?{urlLink:t[1],width:parseInt(t[2]),height:parseInt(t[3])}:{urlLink:e,width:10,height:10}};function Media(e){let{link:t,classes:n,position:r,enableLoading:s}=e,[o,c]=(0,i.useState)(!0),{urlLink:u,width:h,height:m}=getMediaInfo(t),p=(0,i.createRef)();function getMediaContent(){let subExMatch=(e,t)=>{let n=e.toLowerCase();return t.some(e=>n.endsWith(e))};return subExMatch(u,[".mp4"])?(0,a.jsx)("video",{ref:p,className:l()("media-video",...n,{loading:o}),src:u,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):subExMatch(u,[".png",".jpg",".jpeg"])?(0,a.jsx)("img",{ref:p,className:l()("media-img",...n,{loading:o}),src:u,loading:"lazy",width:"100%",alt:"",title:""}):subExMatch(u,[".gif"])?(0,a.jsx)("img",{ref:p,className:l()("media-gif",...n,{loading:o}),src:u,loading:"lazy",width:"100%",alt:"",title:""}):null}return(0,i.useEffect)(()=>{let UpdateLoadingState=()=>{c(!1)};switch(p.current.nodeName){case"IMG":let e=p.current;e.complete?UpdateLoadingState():e.onload=UpdateLoadingState;break;case"VIDEO":let t=p.current;console.log(),t.readyState>=3?UpdateLoadingState():t.onloadeddata=UpdateLoadingState}}),(0,a.jsxs)("div",{ref:e.forwardedRef,style:{position:r,inset:0,paddingTop:"".concat(m/h*100,"%")},className:l()("media-item",{"media-show":!e.forwardedRef||e.enterCount>0}),children:[getMediaContent(),s?(0,a.jsx)(d.default,{isLoading:o}):null]})}Media.propTypes={link:s().string.isRequired,classes:s().arrayOf(s().string),position:s().oneOf(["relative","absolute"]),enableLoading:s().bool},Media.defaultProps={link:"",classes:[],position:"relative",enableLoading:!0},Media.getInitialProps=async()=>Media.defaultProps,t.default=Media},3170:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return PoweredBy}});var a=n(5893);function PoweredBy(e){let t=(0,a.jsx)("a",{href:"https://ttesttes93405.github.io/OwenCollections/",target:"_blank",children:"Owen Sun"});return(0,a.jsx)("div",{className:"powered-by",children:(0,a.jsxs)("p",{children:["\xa9 2023 Website powered by ",t]})})}n(7294)},2317:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ProjectViewList}});var a=n(5893),i=n(7294),r=n(1664),s=n.n(r),o=n(8439),l=n(1230);function shuffle(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function getProjects(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.filter(e=>e.type===t);if(n>0){var i=[];for(var r in a)i.push(a[r]);return shuffle(a),a.slice(0,n)}return a}let ProjectViewList=class ProjectViewList extends i.Component{render(){let{showProjects:e}=this.state;return(0,a.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map(e=>(0,a.jsxs)(s(),{href:e.link,className:"project-view",children:[(0,a.jsx)(l.default,{link:e.cover,classes:["cover"]}),(0,a.jsx)(l.default,{link:e.hover,classes:["hover"],position:"absolute",enableLoading:!1}),(0,a.jsx)("div",{className:"title-container",children:(0,a.jsx)("h3",{className:"title",children:e.title})})]},e.id))})}constructor(e){super(e);let{projectType:t,randomPick:n}=this.props;this.state={showProjects:getProjects(o.o8.projects,t,n)}}}},7052:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return HomePage}});var a=n(5893),i=n(2317),r=n(2626),s=n(5851),o=n(9099);n(1116),n(8439);var l=n(524);let d=(0,l.zo)("h1",{display:"flex",flexGrow:1,width:"100%",color:"#fff",fontFamily:"Manrope",fontWeight:700,lineHeight:1.2,whiteSpace:"pre-line",variants:{media:{s:{fontSize:32,margin:"64px 0 32px"},l:{fontSize:64,margin:"120px 0"}}}});function HomePage(){return(0,a.jsxs)("div",{id:"index",children:[(0,a.jsx)(o.default,{type:"index"}),(0,a.jsx)(r.default,{type:"index"}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(d,{media:l.gN,children:"Experimental Visual,\nMotion Graphics, Generative Art,\nDigital Product Design"}),(0,a.jsx)(i.default,{type:"default"})]}),(0,a.jsx)(s.default,{})]})}},524:function(e,t,n){"use strict";n.d(t,{gN:function(){return s},iv:function(){return r},zo:function(){return i}});var a=n(6744);let{styled:i,css:r}=(0,a.Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),s={"@s":"s","@l":"l"}}},function(e){e.O(0,[1664,1363,8439,9774,2888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);