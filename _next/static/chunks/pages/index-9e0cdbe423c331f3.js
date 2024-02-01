(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5557:function(e,l,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(7052)}])},1626:function(e,l,c){"use strict";c.d(l,{W:function(){return queryLink}});var u=c(8439);let queryLink=function(e){let l=e.split("."),c=u.aT;for(let e=0;e<l.length;e++)c=c[l[e]];return c}},1116:function(e,l,c){"use strict";c.r(l),c.d(l,{default:function(){return EmbedVideo}});var u=c(5893);c(7294);var g=c(1626);function EmbedVideo(e){let{link:l=""}=e;function getLink(){return(0,g.W)(l)}return(0,u.jsx)("div",{className:"video-container",children:(0,u.jsx)("iframe",{src:getLink(),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},5851:function(e,l,c){"use strict";c.r(l),c.d(l,{default:function(){return Header}});var u=c(5893);c(7294);var g=c(8439),h=c(3170);function Header(e){let{links:l,description:c,copyright:b}=g.footerData;return(0,u.jsxs)("div",{className:"footer",children:[(0,u.jsx)("div",{className:"link-icon-container",children:l.map(e=>(0,u.jsx)("a",{href:e.link,target:"_blank",children:(0,u.jsx)("img",{src:e.icon,className:"icon"})},e.link))}),(0,u.jsx)("p",{children:c}),(0,u.jsx)("div",{style:{height:10}}),"   ",(0,u.jsx)("p",{children:b}),(0,u.jsx)(h.default,{})]})}},5479:function(e,l,c){"use strict";c.r(l),c.d(l,{default:function(){return HeadGoogleAnalytics}});var u=c(5893);c(7294);var g=c(4298),h=c.n(g);function HeadGoogleAnalytics(e){let l="UA-171392879-1";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h(),{strategy:"beforeInteractive",async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(l)}),(0,u.jsx)(h(),{id:"headGoogleAnalytics",children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(l,'");\n        ')})]})}},9099:function(e,l,c){"use strict";c.r(l),c.d(l,{default:function(){return HeadMeta}});var u=c(5893);c(7294);var g=c(9008),h=c.n(g),b=c(5479),y=c(8439);function HeadMeta(e){let l,{type:c,id:g}=e,B=y.Bm.defaultProjectMetaData;switch(c){case"project":(l=y.o8.projects.find(e=>e.id==g)||{}).ogImage=l.cover;break;case"index":l=y.Bm.indexMetaData;break;case"lab":l=y.Bm.labMetaData;break;case"about":l=y.Bm.aboutMetaData;break;default:l={}}let w={...B,...l,title:l.title?"".concat(l.title," | ").concat(B.title):"".concat(B.title)||"--"};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(b.default,{}),(0,u.jsxs)(h(),{children:[(0,u.jsx)("title",{children:w.title}),(0,u.jsx)("link",{rel:"icon",href:w.icon}),(0,u.jsx)("meta",{name:"description",content:w.description}),(0,u.jsx)("meta",{name:"author",content:w.author}),(0,u.jsx)("meta",{property:"og:type",content:w.ogType}),(0,u.jsx)("meta",{property:"og:title",content:w.title}),(0,u.jsx)("meta",{property:"og:description",content:w.description}),(0,u.jsx)("meta",{property:"og:image",content:w.ogImage}),(0,u.jsx)("meta",{property:"og:site_name",content:w.ogSiteName}),(0,u.jsx)("meta",{property:"og:url",content:w.ogUrl})]})]})}},2626:function(e,l,c){"use strict";c.r(l),c.d(l,{default:function(){return Header}});var u=c(5893),g=c(7294),h=c(1664),b=c.n(h),y=c(8439),B=c(3967),w=c.n(B);let Header=class Header extends g.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){let{type:e}=this.props,{showHeaderLink:l,hideHeader:c}=this.state;return(0,u.jsxs)("div",{className:w()("header",{"falling-down-header":c}),children:[(0,u.jsx)("div",{className:"title-conatainer",children:(0,u.jsx)(b(),{href:y.hu.links[0].link,children:(0,u.jsx)("a",{children:(0,u.jsx)("img",{src:"/logo/logo.png"})})})}),(0,u.jsx)("div",{className:"flex-space"}),(0,u.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:l?(0,u.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,u.jsx)("img",{src:"/icons/menu.svg"})}),(0,u.jsx)("div",{className:w()("header-link-container",{"m-header-link-container-show":l}),onClick:this.toggleHeaderLinkHandler,children:y.hu.links.map((l,c)=>{let g=l.type===e;return(0,u.jsx)("div",{className:"header-link-item",children:(0,u.jsx)(b(),{href:g?"":l.link,children:(0,u.jsx)("a",{className:w()("header-link",{"header-link-active":g}),children:l.title})})},l.link)})})]})}constructor(e){super(e),this.handleScroll=e=>{let l=document.documentElement.scrollTop,c=this.lastScrollTop-l;this.lastScrollTop=l,Math.abs(c)>10&&this.setState({hideHeader:c<=0})},this.toggleHeaderLinkHandler=()=>{let{showHeaderLink:e}=this.state;this.setState({showHeaderLink:!e})},this.state={showHeaderLink:!1,hideHeader:0},this.lastScrollTop=0}}},4509:function(e,l,c){"use strict";c.r(l),c.d(l,{default:function(){return w}});var u=c(5893);c(7294);var g=c(5697),h=c.n(g),b=c(9260),y=c.n(b),B=JSON.parse('{"v":"5.5.8","fr":30,"ip":0,"op":161,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[500,500],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"t":80,"s":[100]}],"ix":1,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":80,"s":[100]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[90]},{"t":80,"s":[270]}],"ix":3,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"m":2,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":2,"ix":4,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":160,"st":0,"bm":0}],"markers":[]}');function Loading(e){let{isLoading:l}=e,c=(0,u.jsx)("div",{className:"loading-conatiner",children:(0,u.jsx)(y(),{animationData:B,style:{width:64,height:64},loop:!0,autoplay:!0})});return l?c:null}Loading.propTypes={isLoading:h().bool.isRequired},Loading.defaultProps={isLoading:!1},Loading.getInitialProps=async()=>Loading.defaultProps;var w=Loading},1230:function(e,l,c){"use strict";c.r(l);var u=c(5893),g=c(7294),h=c(5697),b=c.n(h),y=c(3967),B=c.n(y),w=c(4509);let I=/(.+)\?\[(\d+)[x*](\d+)\]/,getMediaInfo=e=>{let l=e.match(I);return l?{urlLink:l[1],width:parseInt(l[2]),height:parseInt(l[3])}:{urlLink:e,width:10,height:10}};function Media(e){let{link:l,classes:c,position:h,enableLoading:b}=e,[y,I]=(0,g.useState)(!0),{urlLink:W,width:N,height:T}=getMediaInfo(l),H=(0,g.createRef)();function getMediaContent(){let subExMatch=(e,l)=>{let c=e.toLowerCase();return l.some(e=>c.endsWith(e))};return subExMatch(W,[".mp4"])?(0,u.jsx)("video",{ref:H,className:B()("media-video",...c,{loading:y}),src:W,type:"video/mp4",width:"100%",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}):subExMatch(W,[".png",".jpg",".jpeg"])?(0,u.jsx)("img",{ref:H,className:B()("media-img",...c,{loading:y}),src:W,loading:"lazy",width:"100%",alt:"",title:""}):subExMatch(W,[".gif"])?(0,u.jsx)("img",{ref:H,className:B()("media-gif",...c,{loading:y}),src:W,loading:"lazy",width:"100%",alt:"",title:""}):null}return(0,g.useEffect)(()=>{let UpdateLoadingState=()=>{I(!1)};switch(H.current.nodeName){case"IMG":let e=H.current;e.complete?UpdateLoadingState():e.onload=UpdateLoadingState;break;case"VIDEO":let l=H.current;console.log(),l.readyState>=3?UpdateLoadingState():l.onloadeddata=UpdateLoadingState}}),(0,u.jsxs)("div",{ref:e.forwardedRef,style:{position:h,inset:0,paddingTop:"".concat(T/N*100,"%")},className:B()("media-item",{"media-show":!e.forwardedRef||e.enterCount>0}),children:[getMediaContent(),b?(0,u.jsx)(w.default,{isLoading:y}):null]})}Media.propTypes={link:b().string.isRequired,classes:b().arrayOf(b().string),position:b().oneOf(["relative","absolute"]),enableLoading:b().bool},Media.defaultProps={link:"",classes:[],position:"relative",enableLoading:!0},Media.getInitialProps=async()=>Media.defaultProps,l.default=Media},3170:function(e,l,c){"use strict";c.r(l),c.d(l,{default:function(){return PoweredBy}});var u=c(5893);function PoweredBy(e){let l=(0,u.jsx)("a",{href:"https://ttesttes93405.github.io/OwenCollections/",target:"_blank",children:"Owen Sun"});return(0,u.jsx)("div",{className:"powered-by",children:(0,u.jsxs)("p",{children:["\xa9 2023 Website powered by ",l]})})}c(7294)},2317:function(e,l,c){"use strict";c.r(l),c.d(l,{default:function(){return ProjectViewList}});var u=c(5893),g=c(7294),h=c(1664),b=c.n(h),y=c(8439),B=c(1230);function shuffle(e){for(let l=e.length-1;l>0;l--){let c=Math.floor(Math.random()*(l+1));[e[l],e[c]]=[e[c],e[l]]}}function getProjects(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=e.filter(e=>e.type===l);if(c>0){var g=[];for(var h in u)g.push(u[h]);return shuffle(u),u.slice(0,c)}return u}let ProjectViewList=class ProjectViewList extends g.Component{render(){let{showProjects:e}=this.state;return(0,u.jsx)("div",{className:"project-view-container grid-c grid-c3 m-grid-c m-grid-c1",children:e.map(e=>(0,u.jsx)(b(),{href:e.link,children:(0,u.jsxs)("a",{className:"project-view",children:[(0,u.jsx)(B.default,{link:e.cover,classes:["cover"]}),(0,u.jsx)(B.default,{link:e.hover,classes:["hover"],position:"absolute",enableLoading:!1}),(0,u.jsx)("div",{className:"title-container",children:(0,u.jsx)("h3",{className:"title",children:e.title})})]})},e.id))})}constructor(e){super(e);let{projectType:l,randomPick:c}=this.props;this.state={showProjects:getProjects(y.o8.projects,l,c)}}}},7052:function(e,l,c){"use strict";c.r(l),c.d(l,{default:function(){return HomePage}});var u=c(5893),g=c(2317),h=c(2626),b=c(5851),y=c(9099);c(1116),c(8439);var B=c(524);let w=(0,B.zo)("h1",{display:"flex",flexGrow:1,width:"100%",color:"#fff",fontFamily:"Manrope",fontWeight:700,lineHeight:1.2,whiteSpace:"pre-line",variants:{media:{s:{fontSize:32,margin:"64px 0 32px"},l:{fontSize:64,margin:"120px 0"}}}});function HomePage(){return(0,u.jsxs)("div",{id:"index",children:[(0,u.jsx)(y.default,{type:"index"}),(0,u.jsx)(h.default,{type:"index"}),(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(w,{media:B.gN,children:"Experimental Visual,\nMotion Graphics, Generative Art,\nDigital Product Design"}),(0,u.jsx)(g.default,{type:"default"})]}),(0,u.jsx)(b.default,{})]})}},524:function(e,l,c){"use strict";c.d(l,{gN:function(){return b},iv:function(){return h},zo:function(){return g}});var u=c(6744);let{styled:g,css:h}=(0,u.Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),b={"@s":"s","@l":"l"}},9008:function(e,l,c){e.exports=c(9201)},4298:function(e,l,c){e.exports=c(5354)},3967:function(e,l){var c;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var u={}.hasOwnProperty;function classNames(){for(var e="",l=0;l<arguments.length;l++){var c=arguments[l];c&&(e=appendClass(e,parseValue(c)))}return e}function parseValue(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return classNames.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var l="";for(var c in e)u.call(e,c)&&e[c]&&(l=appendClass(l,c));return l}function appendClass(e,l){return l?e?e+" "+l:e+l:e}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(c=(function(){return classNames}).apply(l,[]))&&(e.exports=c)}()},6744:function(e,l,c){"use strict";c.d(l,{Th:function(){return q}});var u=c(7294),g="colors",h="sizes",b="space",y={gap:b,gridGap:b,columnGap:b,gridColumnGap:b,rowGap:b,gridRowGap:b,inset:b,insetBlock:b,insetBlockEnd:b,insetBlockStart:b,insetInline:b,insetInlineEnd:b,insetInlineStart:b,margin:b,marginTop:b,marginRight:b,marginBottom:b,marginLeft:b,marginBlock:b,marginBlockEnd:b,marginBlockStart:b,marginInline:b,marginInlineEnd:b,marginInlineStart:b,padding:b,paddingTop:b,paddingRight:b,paddingBottom:b,paddingLeft:b,paddingBlock:b,paddingBlockEnd:b,paddingBlockStart:b,paddingInline:b,paddingInlineEnd:b,paddingInlineStart:b,top:b,right:b,bottom:b,left:b,scrollMargin:b,scrollMarginTop:b,scrollMarginRight:b,scrollMarginBottom:b,scrollMarginLeft:b,scrollMarginX:b,scrollMarginY:b,scrollMarginBlock:b,scrollMarginBlockEnd:b,scrollMarginBlockStart:b,scrollMarginInline:b,scrollMarginInlineEnd:b,scrollMarginInlineStart:b,scrollPadding:b,scrollPaddingTop:b,scrollPaddingRight:b,scrollPaddingBottom:b,scrollPaddingLeft:b,scrollPaddingX:b,scrollPaddingY:b,scrollPaddingBlock:b,scrollPaddingBlockEnd:b,scrollPaddingBlockStart:b,scrollPaddingInline:b,scrollPaddingInlineEnd:b,scrollPaddingInlineStart:b,fontSize:"fontSizes",background:g,backgroundColor:g,backgroundImage:g,borderImage:g,border:g,borderBlock:g,borderBlockEnd:g,borderBlockStart:g,borderBottom:g,borderBottomColor:g,borderColor:g,borderInline:g,borderInlineEnd:g,borderInlineStart:g,borderLeft:g,borderLeftColor:g,borderRight:g,borderRightColor:g,borderTop:g,borderTopColor:g,caretColor:g,color:g,columnRuleColor:g,fill:g,outline:g,outlineColor:g,stroke:g,textDecorationColor:g,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:h,minBlockSize:h,maxBlockSize:h,inlineSize:h,minInlineSize:h,maxInlineSize:h,width:h,minWidth:h,maxWidth:h,height:h,minHeight:h,maxHeight:h,flexBasis:h,gridTemplateColumns:h,gridTemplateRows:h,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},i=(e,l)=>"function"==typeof l?{"()":Function.prototype.toString.call(l)}:l,o=()=>{let e=Object.create(null);return(l,c,...u)=>{let g=JSON.stringify(l,i);return g in e?e[g]:e[g]=c(l,...u)}},B=Symbol.for("sxs.internal"),s=(e,l)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)),a=e=>{for(let l in e)return!0;return!1},{hasOwnProperty:w}=Object.prototype,d=e=>e.includes("-")?e:e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),I=/\s+(?![^()]*\))/,p=e=>l=>e(..."string"==typeof l?String(l).split(I):[l]),W={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:p((e,l)=>({marginBlockStart:e,marginBlockEnd:l||e})),marginInline:p((e,l)=>({marginInlineStart:e,marginInlineEnd:l||e})),maxSize:p((e,l)=>({maxBlockSize:e,maxInlineSize:l||e})),minSize:p((e,l)=>({minBlockSize:e,minInlineSize:l||e})),paddingBlock:p((e,l)=>({paddingBlockStart:e,paddingBlockEnd:l||e})),paddingInline:p((e,l)=>({paddingInlineStart:e,paddingInlineEnd:l||e}))},N=/([\d.]+)([^]*)/,f=(e,l)=>e.length?e.reduce((e,c)=>(e.push(...l.map(e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(c)&&/&.*&/.test(e)?`:is(${c})`:c):c+" "+e)),e),[]):l,m=(e,l)=>e in T&&"string"==typeof l?l.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(l,c,u,g)=>c+("stretch"===u?`-moz-available${g};${d(e)}:${c}-webkit-fill-available`:`-moz-fit-content${g};${d(e)}:${c}fit-content`)+g):String(l),T={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},S=e=>e?e+"-":"",k=(e,l,c)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(e,u,g,h,b)=>"$"==h==!!g?e:(u||"--"==h?"calc(":"")+"var(--"+("$"===h?S(l)+(b.includes("$")?"":S(c))+b.replace(/\$/g,"-"):b)+")"+(u||"--"==h?"*"+(u||"")+(g||"1")+")":"")),H=/\s*,\s*(?![^()]*\))/,A=Object.prototype.toString,$=(e,l,c,u,g)=>{let h,b,y;let a=(e,l,c)=>{let B,w;let p=e=>{var I;for(B in e){let T=64===B.charCodeAt(0),G=T&&Array.isArray(e[B])?e[B]:[e[B]];for(w of G){let e=/[A-Z]/.test(I=B)?I:I.replace(/-[^]/g,e=>e[1].toUpperCase()),G="object"==typeof w&&w&&w.toString===A&&(!u.utils[e]||!l.length);if(e in u.utils&&!G){let l=u.utils[e];if(l!==b){b=l,p(l(w)),b=null;continue}}else if(e in W){let l=W[e];if(l!==y){y=l,p(l(w)),y=null;continue}}if(T&&(B=(B.slice(1) in u.media?"@media "+u.media[B.slice(1)]:B).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(e,l,c,u,g,h)=>{let b=N.test(l),y=.0625*(b?-1:1),[B,w]=b?[u,l]:[l,u];return"("+("="===c[0]?"":">"===c[0]===b?"max-":"min-")+B+":"+("="!==c[0]&&1===c.length?w.replace(N,(e,l,u)=>Number(l)+y*(">"===c?1:-1)+u):w)+(g?") and ("+(">"===g[0]?"min-":"max-")+B+":"+(1===g.length?h.replace(N,(e,l,c)=>Number(l)+y*(">"===g?-1:1)+c):h):"")+")"})),G){let e=T?c.concat(B):[...c],u=T?[...l]:f(l,B.split(H));void 0!==h&&g(x(...h)),h=void 0,a(w,u,e)}else void 0===h&&(h=[[],l,c]),B=T||36!==B.charCodeAt(0)?B:`--${S(u.prefix)}${B.slice(1).replace(/\$/g,"-")}`,w=G?w:"number"==typeof w?w&&e in _?String(w)+"px":String(w):k(m(e,null==w?"":w),u.prefix,u.themeMap[e]),h[0].push(`${T?`${B} `:`${d(B)}:`}${w}`)}}};p(e),void 0!==h&&g(x(...h)),h=void 0};a(e,l,c)},x=(e,l,c)=>`${c.map(e=>`${e}{`).join("")}${l.length?`${l.join(",")}{`:""}${e.join(";")}${l.length?"}":""}${Array(c.length?c.length+1:0).join("}")}`,_={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},R=e=>String.fromCharCode(e+(e>25?39:97)),z=e=>(e=>{let l,c="";for(l=Math.abs(e);l>52;l=l/52|0)c=R(l%52)+c;return R(l%52)+c})(((e,l)=>{let c=l.length;for(;c;)e=33*e^l.charCodeAt(--c);return e})(5381,JSON.stringify(e))>>>0),G=["themed","global","styled","onevar","resonevar","allvar","inline"],j=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},E=e=>{let l;let r=()=>{let{cssRules:e}=l.sheet;return[].map.call(e,(c,u)=>{let{cssText:g}=c,h="";if(g.startsWith("--sxs"))return"";if(e[u-1]&&(h=e[u-1].cssText).startsWith("--sxs")){if(!c.cssRules.length)return"";for(let e in l.rules)if(l.rules[e].group===c)return`--sxs{--sxs:${[...l.rules[e].cache].join(" ")}}${g}`;return c.cssRules.length?`${h}${g}`:""}return g}).join("")},n=()=>{if(l){let{rules:e,sheet:c}=l;if(!c.deleteRule){for(;3===Object(Object(c.cssRules)[0]).type;)c.cssRules.splice(0,1);c.cssRules=[]}for(let l in e)delete e[l]}let c=Object(e).styleSheets||[];for(let e of c)if(j(e)){for(let c=0,u=e.cssRules;u[c];++c){let g=Object(u[c]);if(1!==g.type)continue;let h=Object(u[c+1]);if(4!==h.type)continue;++c;let{cssText:b}=g;if(!b.startsWith("--sxs"))continue;let y=b.slice(14,-3).trim().split(/\s+/),B=G[y[0]];B&&(l||(l={sheet:e,reset:n,rules:{},toString:r}),l.rules[B]={group:h,index:c,cache:new Set(y)})}if(l)break}if(!l){let i=(e,l)=>({type:l,cssRules:[],insertRule(e,l){this.cssRules.splice(l,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,e=>e.cssText).join("")}}`:e}});l={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:n,toString:r}}let{sheet:u,rules:g}=l;for(let e=G.length-1;e>=0;--e){let l=G[e];if(!g[l]){let c=G[e+1],h=g[c]?g[c].index:u.cssRules.length;u.insertRule("@media{}",h),u.insertRule(`--sxs{--sxs:${e}}`,h),g[l]={group:u.cssRules[h+1],index:h,cache:new Set([e])}}v(g[l])}};return n(),l},v=e=>{let l=e.group,c=l.cssRules.length;e.apply=e=>{try{l.insertRule(e,c),++c}catch(e){}}},F=Symbol(),U=o(),M=(e,l)=>U(e,()=>(...c)=>{let u={type:null,composers:new Set};for(let l of c)if(null!=l){if(l[B])for(let e of(null==u.type&&(u.type=l[B].type),l[B].composers))u.composers.add(e);else l.constructor!==Object||l.$$typeof?null==u.type&&(u.type=l):u.composers.add(C(l,e))}return null==u.type&&(u.type="span"),u.composers.size||u.composers.add(["PJLV",{},[],[],{},[]]),P(e,u,l)}),C=({variants:e,compoundVariants:l,defaultVariants:c,...u},g)=>{let h=`${S(g.prefix)}c-${z(u)}`,b=[],y=[],B=Object.create(null),I=[];for(let e in c)B[e]=String(c[e]);if("object"==typeof e&&e)for(let l in e){w.call(B,l)||(B[l]="undefined");let c=e[l];for(let e in c){let u={[l]:String(e)};"undefined"===String(e)&&I.push(l);let g=c[e],h=[u,g,!a(g)];b.push(h)}}if("object"==typeof l&&l)for(let e of l){let{css:l,...c}=e;for(let e in l="object"==typeof l&&l||{},c)c[e]=String(c[e]);let u=[c,l,!a(l)];y.push(u)}return[h,u,b,y,B,I]},P=(e,l,c)=>{let[u,g,h,b]=L(l.composers),y="function"==typeof l.type||l.type.$$typeof?(e=>{function t(){for(let l=0;l<t[F].length;l++){let[c,u]=t[F][l];e.rules[c].apply(u)}return t[F]=[],null}return t[F]=[],t.rules={},G.forEach(e=>t.rules[e]={apply:l=>t[F].push([e,l])}),t})(c):null,w=(y||c).rules,I=`.${u}${g.length>1?`:where(.${g.slice(1).join(".")})`:""}`,p=B=>{B="object"==typeof B&&B||X;let{css:W,...N}=B,T={};for(let e in h)if(delete N[e],e in B){let l=B[e];"object"==typeof l&&l?T[e]={"@initial":h[e],...l}:(l=String(l),T[e]="undefined"!==l||b.has(e)?l:h[e])}else T[e]=h[e];let H=new Set([...g]);for(let[u,g,h,b]of l.composers){c.rules.styled.cache.has(u)||(c.rules.styled.cache.add(u),$(g,[`.${u}`],[],e,e=>{w.styled.apply(e)}));let l=O(h,T,e.media),y=O(b,T,e.media,!0);for(let g of l)if(void 0!==g)for(let[l,h,b]of g){let g=`${u}-${z(h)}-${l}`;H.add(g);let y=(b?c.rules.resonevar:c.rules.onevar).cache,B=b?w.resonevar:w.onevar;y.has(g)||(y.add(g),$(h,[`.${g}`],[],e,e=>{B.apply(e)}))}for(let l of y)if(void 0!==l)for(let[g,h]of l){let l=`${u}-${z(h)}-${g}`;H.add(l),c.rules.allvar.cache.has(l)||(c.rules.allvar.cache.add(l),$(h,[`.${l}`],[],e,e=>{w.allvar.apply(e)}))}}if("object"==typeof W&&W){let l=`${u}-i${z(W)}-css`;H.add(l),c.rules.inline.cache.has(l)||(c.rules.inline.cache.add(l),$(W,[`.${l}`],[],e,e=>{w.inline.apply(e)}))}for(let e of String(B.className||"").trim().split(/\s+/))e&&H.add(e);let A=N.className=[...H].join(" ");return{type:l.type,className:A,selector:I,props:N,toString:()=>A,deferredInjector:y}};return s(p,{className:u,selector:I,[B]:l,toString:()=>(c.rules.styled.cache.has(u)||p(),u)})},L=e=>{let l="",c=[],u={},g=[];for(let[h,,,,b,y]of e)for(let e in""===l&&(l=h),c.push(h),g.push(...y),b){let l=b[e];(void 0===u[e]||"undefined"!==l||y.includes(l))&&(u[e]=l)}return[l,c,u,new Set(g)]},O=(e,l,c,u)=>{let g=[];e:for(let[h,b,y]of e){if(y)continue;let e,B=0,w=!1;for(e in h){let u=h[e],g=l[e];if(g!==u){if("object"!=typeof g||!g)continue e;{let e,l,h=0;for(let b in g){if(u===String(g[b])){if("@initial"!==b){let e=b.slice(1);(l=l||[]).push(e in c?c[e]:b.replace(/^@media ?/,"")),w=!0}B+=h,e=!0}++h}if(l&&l.length&&(b={["@media "+l.join(", ")]:b}),!e)continue e}}}(g[B]=g[B]||[]).push([u?"cv":`${e}-${h[e]}`,b,w])}return g},X={},Z=o(),D=(e,l)=>Z(e,()=>(...c)=>{let n=()=>{for(let u of c){let c=z(u="object"==typeof u&&u||{});if(!l.rules.global.cache.has(c)){if(l.rules.global.cache.add(c),"@import"in u){let e=[].indexOf.call(l.sheet.cssRules,l.rules.themed.group)-1;for(let c of[].concat(u["@import"]))c=c.includes('"')||c.includes("'")?c:`"${c}"`,l.sheet.insertRule(`@import ${c};`,e++);delete u["@import"]}$(u,[],[],e,e=>{l.rules.global.apply(e)})}}return""};return s(n,{toString:n})}),Y=o(),V=(e,l)=>Y(e,()=>c=>{let u=`${S(e.prefix)}k-${z(c)}`,i=()=>{if(!l.rules.global.cache.has(u)){l.rules.global.cache.add(u);let g=[];$(c,[],[],e,e=>g.push(e));let h=`@keyframes ${u}{${g.join("")}}`;l.rules.global.apply(h)}return u};return s(i,{get name(){return i()},toString:i})}),K=class{constructor(e,l,c,u){this.token=null==e?"":String(e),this.value=null==l?"":String(l),this.scale=null==c?"":String(c),this.prefix=null==u?"":String(u)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+S(this.prefix)+S(this.scale)+this.token}toString(){return this.computedValue}},Q=o(),J=(e,l)=>Q(e,()=>(c,u)=>{u="object"==typeof c&&c||Object(u);let g=`.${c=(c="string"==typeof c?c:"")||`${S(e.prefix)}t-${z(u)}`}`,h={},b=[];for(let l in u)for(let c in h[l]={},u[l]){let g=`--${S(e.prefix)}${l}-${c}`,y=k(String(u[l][c]),e.prefix,l);h[l][c]=new K(c,y,l,e.prefix),b.push(`${g}:${y}`)}let s=()=>{if(b.length&&!l.rules.themed.cache.has(c)){l.rules.themed.cache.add(c);let g=`${u===e.theme?":root,":""}.${c}{${b.join(";")}}`;l.rules.themed.apply(g)}return c};return{...h,get className(){return s()},selector:g,toString:s}}),ee=o(),et=o(),q=e=>{let l=(e=>{let l=!1,c=ee(e,e=>{l=!0;let c="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",u="object"==typeof e.media&&e.media||{},g="object"==typeof e.root?e.root||null:globalThis.document||null,h="object"==typeof e.theme&&e.theme||{},b={prefix:c,media:u,theme:h,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...y},utils:"object"==typeof e.utils&&e.utils||{}},B=E(g),w={css:M(b,B),globalCss:D(b,B),keyframes:V(b,B),createTheme:J(b,B),reset(){B.reset(),w.theme.toString()},theme:{},sheet:B,config:b,prefix:c,getCssText:B.toString,toString:B.toString};return String(w.theme=w.createTheme(h)),w});return l||c.reset(),c})(e);return l.styled=(({config:e,sheet:l})=>et(e,()=>{let c=M(e,l);return(...e)=>{let l=c(...e),g=l[B].type,h=u.forwardRef((e,c)=>{let h=e&&e.as||g,{props:b,deferredInjector:y}=l(e);return delete b.as,b.ref=c,y?u.createElement(u.Fragment,null,u.createElement(h,b),u.createElement(y,null)):u.createElement(h,b)});return h.className=l.className,h.displayName=`Styled.${g.displayName||g.name||g}`,h.selector=l.selector,h.toString=()=>l.selector,h[B]=l[B],h}}))(l),l}}},function(e){e.O(0,[296,9890,1664,8439,9774,2888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);