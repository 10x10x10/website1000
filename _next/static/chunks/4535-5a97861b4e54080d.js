"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4535],{4535:function(e,l,c){c.r(l),c.d(l,{default:function(){return Credits}});var g=c(5893),u=c(7294),h=c(5697),b=c.n(h),y=c(524),B=c(7760);let I=(0,y.zo)("div",{display:"flex",flexDirection:"column"}),W=(0,y.zo)("div",{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",transition:"max-height 0.5s",variants:{fold:{true:{maxHeight:200,cursor:"pointer","&::after":{content:"",position:"absolute",left:0,right:0,bottom:0,height:150,background:"#0B0C0E",background:"linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)"}},false:{maxHeight:1e4,cursor:"pointer","&::after":{display:"none"}}}}}),T=(0,y.zo)(B.TextStyle),w=(0,y.zo)("button",{fontSize:16,cursor:"pointer",width:80,padding:8,textAlign:"center",border:"1px #ffffff solid",backgroundColor:"#ffffff00",color:"#ffffff",boxSizing:"border-box",marginTop:16,"&:hover":{backgroundColor:"#ffffff",color:"#000000"}});function Credits(e){let{content:l,foldable:c}=e,[h,b]=(0,u.useState)(!1);return(0,g.jsxs)(I,{children:[(0,g.jsx)(W,{fold:!!c&&h,onClick:()=>b(!h),children:l.map((e,l)=>(0,g.jsx)(T,{type:"normal",children:e},l))}),c&&(0,g.jsx)(w,{onClick:()=>b(!1),children:"More"})]})}Credits.propTypes={content:b().array,foldable:b().bool},Credits.defaultProps={content:[],foldable:!1}},7760:function(e,l,c){c.r(l),c.d(l,{TextStyle:function(){return y},default:function(){return Text}});var g=c(5893);c(7294);var u=c(5697),h=c.n(u),b=c(524);let y=(0,b.iv)({padding:0,margin:0,marginBottom:8,lineHeight:"26px",wordWrap:"break-word",whiteSpace:"pre-line",variants:{type:{small:{fontSize:14,color:"#ffffff80"},normal:{fontSize:16,color:"#ffffffc0"},big:{fontSize:28,fontWeight:600,color:"#ffffffe0"}}}}),B=(0,b.zo)("p",y,{});function Text(e){let{content:l,type:c}=e;return Array.isArray(l)?l.map((e,l)=>(0,g.jsx)(B,{type:c,children:e},l)):(0,g.jsx)(B,{type:c,children:l})}Text.propTypes={content:h().oneOfType([h().string,h().array]),type:h().oneOf(["normal","small","big"])},Text.defaultProps={content:"",type:"normal"}},524:function(e,l,c){c.d(l,{gN:function(){return b},iv:function(){return h},zo:function(){return u}});var g=c(6744);let{styled:u,css:h}=(0,g.Th)({media:{s:"(min-width: 0px)",l:"(min-width: 1000px)"}}),b={"@s":"s","@l":"l"}},6744:function(e,l,c){c.d(l,{Th:function(){return q}});var g=c(7294),u="colors",h="sizes",b="space",y={gap:b,gridGap:b,columnGap:b,gridColumnGap:b,rowGap:b,gridRowGap:b,inset:b,insetBlock:b,insetBlockEnd:b,insetBlockStart:b,insetInline:b,insetInlineEnd:b,insetInlineStart:b,margin:b,marginTop:b,marginRight:b,marginBottom:b,marginLeft:b,marginBlock:b,marginBlockEnd:b,marginBlockStart:b,marginInline:b,marginInlineEnd:b,marginInlineStart:b,padding:b,paddingTop:b,paddingRight:b,paddingBottom:b,paddingLeft:b,paddingBlock:b,paddingBlockEnd:b,paddingBlockStart:b,paddingInline:b,paddingInlineEnd:b,paddingInlineStart:b,top:b,right:b,bottom:b,left:b,scrollMargin:b,scrollMarginTop:b,scrollMarginRight:b,scrollMarginBottom:b,scrollMarginLeft:b,scrollMarginX:b,scrollMarginY:b,scrollMarginBlock:b,scrollMarginBlockEnd:b,scrollMarginBlockStart:b,scrollMarginInline:b,scrollMarginInlineEnd:b,scrollMarginInlineStart:b,scrollPadding:b,scrollPaddingTop:b,scrollPaddingRight:b,scrollPaddingBottom:b,scrollPaddingLeft:b,scrollPaddingX:b,scrollPaddingY:b,scrollPaddingBlock:b,scrollPaddingBlockEnd:b,scrollPaddingBlockStart:b,scrollPaddingInline:b,scrollPaddingInlineEnd:b,scrollPaddingInlineStart:b,fontSize:"fontSizes",background:u,backgroundColor:u,backgroundImage:u,borderImage:u,border:u,borderBlock:u,borderBlockEnd:u,borderBlockStart:u,borderBottom:u,borderBottomColor:u,borderColor:u,borderInline:u,borderInlineEnd:u,borderInlineStart:u,borderLeft:u,borderLeftColor:u,borderRight:u,borderRightColor:u,borderTop:u,borderTopColor:u,caretColor:u,color:u,columnRuleColor:u,fill:u,outline:u,outlineColor:u,stroke:u,textDecorationColor:u,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:h,minBlockSize:h,maxBlockSize:h,inlineSize:h,minInlineSize:h,maxInlineSize:h,width:h,minWidth:h,maxWidth:h,height:h,minHeight:h,maxHeight:h,flexBasis:h,gridTemplateColumns:h,gridTemplateRows:h,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},i=(e,l)=>"function"==typeof l?{"()":Function.prototype.toString.call(l)}:l,o=()=>{let e=Object.create(null);return(l,c,...g)=>{let u=JSON.stringify(l,i);return u in e?e[u]:e[u]=c(l,...g)}},B=Symbol.for("sxs.internal"),s=(e,l)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)),a=e=>{for(let l in e)return!0;return!1},{hasOwnProperty:I}=Object.prototype,d=e=>e.includes("-")?e:e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),W=/\s+(?![^()]*\))/,p=e=>l=>e(..."string"==typeof l?String(l).split(W):[l]),T={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:p((e,l)=>({marginBlockStart:e,marginBlockEnd:l||e})),marginInline:p((e,l)=>({marginInlineStart:e,marginInlineEnd:l||e})),maxSize:p((e,l)=>({maxBlockSize:e,maxInlineSize:l||e})),minSize:p((e,l)=>({minBlockSize:e,minInlineSize:l||e})),paddingBlock:p((e,l)=>({paddingBlockStart:e,paddingBlockEnd:l||e})),paddingInline:p((e,l)=>({paddingInlineStart:e,paddingInlineEnd:l||e}))},w=/([\d.]+)([^]*)/,f=(e,l)=>e.length?e.reduce((e,c)=>(e.push(...l.map(e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(c)&&/&.*&/.test(e)?`:is(${c})`:c):c+" "+e)),e),[]):l,m=(e,l)=>e in A&&"string"==typeof l?l.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(l,c,g,u)=>c+("stretch"===g?`-moz-available${u};${d(e)}:${c}-webkit-fill-available`:`-moz-fit-content${u};${d(e)}:${c}fit-content`)+u):String(l),A={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},S=e=>e?e+"-":"",k=(e,l,c)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(e,g,u,h,b)=>"$"==h==!!u?e:(g||"--"==h?"calc(":"")+"var(--"+("$"===h?S(l)+(b.includes("$")?"":S(c))+b.replace(/\$/g,"-"):b)+")"+(g||"--"==h?"*"+(g||"")+(u||"1")+")":"")),N=/\s*,\s*(?![^()]*\))/,H=Object.prototype.toString,$=(e,l,c,g,u)=>{let h,b,y;let a=(e,l,c)=>{let B,I;let p=e=>{var W;for(B in e){let A=64===B.charCodeAt(0),G=A&&Array.isArray(e[B])?e[B]:[e[B]];for(I of G){let e=/[A-Z]/.test(W=B)?W:W.replace(/-[^]/g,e=>e[1].toUpperCase()),G="object"==typeof I&&I&&I.toString===H&&(!g.utils[e]||!l.length);if(e in g.utils&&!G){let l=g.utils[e];if(l!==b){b=l,p(l(I)),b=null;continue}}else if(e in T){let l=T[e];if(l!==y){y=l,p(l(I)),y=null;continue}}if(A&&(B=(B.slice(1) in g.media?"@media "+g.media[B.slice(1)]:B).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(e,l,c,g,u,h)=>{let b=w.test(l),y=.0625*(b?-1:1),[B,I]=b?[g,l]:[l,g];return"("+("="===c[0]?"":">"===c[0]===b?"max-":"min-")+B+":"+("="!==c[0]&&1===c.length?I.replace(w,(e,l,g)=>Number(l)+y*(">"===c?1:-1)+g):I)+(u?") and ("+(">"===u[0]?"min-":"max-")+B+":"+(1===u.length?h.replace(w,(e,l,c)=>Number(l)+y*(">"===u?-1:1)+c):h):"")+")"})),G){let e=A?c.concat(B):[...c],g=A?[...l]:f(l,B.split(N));void 0!==h&&u(x(...h)),h=void 0,a(I,g,e)}else void 0===h&&(h=[[],l,c]),B=A||36!==B.charCodeAt(0)?B:`--${S(g.prefix)}${B.slice(1).replace(/\$/g,"-")}`,I=G?I:"number"==typeof I?I&&e in F?String(I)+"px":String(I):k(m(e,null==I?"":I),g.prefix,g.themeMap[e]),h[0].push(`${A?`${B} `:`${d(B)}:`}${I}`)}}};p(e),void 0!==h&&u(x(...h)),h=void 0};a(e,l,c)},x=(e,l,c)=>`${c.map(e=>`${e}{`).join("")}${l.length?`${l.join(",")}{`:""}${e.join(";")}${l.length?"}":""}${Array(c.length?c.length+1:0).join("}")}`,F={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},R=e=>String.fromCharCode(e+(e>25?39:97)),z=e=>(e=>{let l,c="";for(l=Math.abs(e);l>52;l=l/52|0)c=R(l%52)+c;return R(l%52)+c})(((e,l)=>{let c=l.length;for(;c;)e=33*e^l.charCodeAt(--c);return e})(5381,JSON.stringify(e))>>>0),G=["themed","global","styled","onevar","resonevar","allvar","inline"],j=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},E=e=>{let l;let r=()=>{let{cssRules:e}=l.sheet;return[].map.call(e,(c,g)=>{let{cssText:u}=c,h="";if(u.startsWith("--sxs"))return"";if(e[g-1]&&(h=e[g-1].cssText).startsWith("--sxs")){if(!c.cssRules.length)return"";for(let e in l.rules)if(l.rules[e].group===c)return`--sxs{--sxs:${[...l.rules[e].cache].join(" ")}}${u}`;return c.cssRules.length?`${h}${u}`:""}return u}).join("")},n=()=>{if(l){let{rules:e,sheet:c}=l;if(!c.deleteRule){for(;3===Object(Object(c.cssRules)[0]).type;)c.cssRules.splice(0,1);c.cssRules=[]}for(let l in e)delete e[l]}let c=Object(e).styleSheets||[];for(let e of c)if(j(e)){for(let c=0,g=e.cssRules;g[c];++c){let u=Object(g[c]);if(1!==u.type)continue;let h=Object(g[c+1]);if(4!==h.type)continue;++c;let{cssText:b}=u;if(!b.startsWith("--sxs"))continue;let y=b.slice(14,-3).trim().split(/\s+/),B=G[y[0]];B&&(l||(l={sheet:e,reset:n,rules:{},toString:r}),l.rules[B]={group:h,index:c,cache:new Set(y)})}if(l)break}if(!l){let i=(e,l)=>({type:l,cssRules:[],insertRule(e,l){this.cssRules.splice(l,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,e=>e.cssText).join("")}}`:e}});l={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:n,toString:r}}let{sheet:g,rules:u}=l;for(let e=G.length-1;e>=0;--e){let l=G[e];if(!u[l]){let c=G[e+1],h=u[c]?u[c].index:g.cssRules.length;g.insertRule("@media{}",h),g.insertRule(`--sxs{--sxs:${e}}`,h),u[l]={group:g.cssRules[h+1],index:h,cache:new Set([e])}}v(u[l])}};return n(),l},v=e=>{let l=e.group,c=l.cssRules.length;e.apply=e=>{try{l.insertRule(e,c),++c}catch(e){}}},_=Symbol(),U=o(),M=(e,l)=>U(e,()=>(...c)=>{let g={type:null,composers:new Set};for(let l of c)if(null!=l){if(l[B])for(let e of(null==g.type&&(g.type=l[B].type),l[B].composers))g.composers.add(e);else l.constructor!==Object||l.$$typeof?null==g.type&&(g.type=l):g.composers.add(C(l,e))}return null==g.type&&(g.type="span"),g.composers.size||g.composers.add(["PJLV",{},[],[],{},[]]),P(e,g,l)}),C=({variants:e,compoundVariants:l,defaultVariants:c,...g},u)=>{let h=`${S(u.prefix)}c-${z(g)}`,b=[],y=[],B=Object.create(null),W=[];for(let e in c)B[e]=String(c[e]);if("object"==typeof e&&e)for(let l in e){I.call(B,l)||(B[l]="undefined");let c=e[l];for(let e in c){let g={[l]:String(e)};"undefined"===String(e)&&W.push(l);let u=c[e],h=[g,u,!a(u)];b.push(h)}}if("object"==typeof l&&l)for(let e of l){let{css:l,...c}=e;for(let e in l="object"==typeof l&&l||{},c)c[e]=String(c[e]);let g=[c,l,!a(l)];y.push(g)}return[h,g,b,y,B,W]},P=(e,l,c)=>{let[g,u,h,b]=L(l.composers),y="function"==typeof l.type||l.type.$$typeof?(e=>{function t(){for(let l=0;l<t[_].length;l++){let[c,g]=t[_][l];e.rules[c].apply(g)}return t[_]=[],null}return t[_]=[],t.rules={},G.forEach(e=>t.rules[e]={apply:l=>t[_].push([e,l])}),t})(c):null,I=(y||c).rules,W=`.${g}${u.length>1?`:where(.${u.slice(1).join(".")})`:""}`,p=B=>{B="object"==typeof B&&B||Z;let{css:T,...w}=B,A={};for(let e in h)if(delete w[e],e in B){let l=B[e];"object"==typeof l&&l?A[e]={"@initial":h[e],...l}:(l=String(l),A[e]="undefined"!==l||b.has(e)?l:h[e])}else A[e]=h[e];let N=new Set([...u]);for(let[g,u,h,b]of l.composers){c.rules.styled.cache.has(g)||(c.rules.styled.cache.add(g),$(u,[`.${g}`],[],e,e=>{I.styled.apply(e)}));let l=O(h,A,e.media),y=O(b,A,e.media,!0);for(let u of l)if(void 0!==u)for(let[l,h,b]of u){let u=`${g}-${z(h)}-${l}`;N.add(u);let y=(b?c.rules.resonevar:c.rules.onevar).cache,B=b?I.resonevar:I.onevar;y.has(u)||(y.add(u),$(h,[`.${u}`],[],e,e=>{B.apply(e)}))}for(let l of y)if(void 0!==l)for(let[u,h]of l){let l=`${g}-${z(h)}-${u}`;N.add(l),c.rules.allvar.cache.has(l)||(c.rules.allvar.cache.add(l),$(h,[`.${l}`],[],e,e=>{I.allvar.apply(e)}))}}if("object"==typeof T&&T){let l=`${g}-i${z(T)}-css`;N.add(l),c.rules.inline.cache.has(l)||(c.rules.inline.cache.add(l),$(T,[`.${l}`],[],e,e=>{I.inline.apply(e)}))}for(let e of String(B.className||"").trim().split(/\s+/))e&&N.add(e);let H=w.className=[...N].join(" ");return{type:l.type,className:H,selector:W,props:w,toString:()=>H,deferredInjector:y}};return s(p,{className:g,selector:W,[B]:l,toString:()=>(c.rules.styled.cache.has(g)||p(),g)})},L=e=>{let l="",c=[],g={},u=[];for(let[h,,,,b,y]of e)for(let e in""===l&&(l=h),c.push(h),u.push(...y),b){let l=b[e];(void 0===g[e]||"undefined"!==l||y.includes(l))&&(g[e]=l)}return[l,c,g,new Set(u)]},O=(e,l,c,g)=>{let u=[];e:for(let[h,b,y]of e){if(y)continue;let e,B=0,I=!1;for(e in h){let g=h[e],u=l[e];if(u!==g){if("object"!=typeof u||!u)continue e;{let e,l,h=0;for(let b in u){if(g===String(u[b])){if("@initial"!==b){let e=b.slice(1);(l=l||[]).push(e in c?c[e]:b.replace(/^@media ?/,"")),I=!0}B+=h,e=!0}++h}if(l&&l.length&&(b={["@media "+l.join(", ")]:b}),!e)continue e}}}(u[B]=u[B]||[]).push([g?"cv":`${e}-${h[e]}`,b,I])}return u},Z={},X=o(),D=(e,l)=>X(e,()=>(...c)=>{let n=()=>{for(let g of c){let c=z(g="object"==typeof g&&g||{});if(!l.rules.global.cache.has(c)){if(l.rules.global.cache.add(c),"@import"in g){let e=[].indexOf.call(l.sheet.cssRules,l.rules.themed.group)-1;for(let c of[].concat(g["@import"]))c=c.includes('"')||c.includes("'")?c:`"${c}"`,l.sheet.insertRule(`@import ${c};`,e++);delete g["@import"]}$(g,[],[],e,e=>{l.rules.global.apply(e)})}}return""};return s(n,{toString:n})}),Y=o(),V=(e,l)=>Y(e,()=>c=>{let g=`${S(e.prefix)}k-${z(c)}`,i=()=>{if(!l.rules.global.cache.has(g)){l.rules.global.cache.add(g);let u=[];$(c,[],[],e,e=>u.push(e));let h=`@keyframes ${g}{${u.join("")}}`;l.rules.global.apply(h)}return g};return s(i,{get name(){return i()},toString:i})}),K=class{constructor(e,l,c,g){this.token=null==e?"":String(e),this.value=null==l?"":String(l),this.scale=null==c?"":String(c),this.prefix=null==g?"":String(g)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+S(this.prefix)+S(this.scale)+this.token}toString(){return this.computedValue}},Q=o(),J=(e,l)=>Q(e,()=>(c,g)=>{g="object"==typeof c&&c||Object(g);let u=`.${c=(c="string"==typeof c?c:"")||`${S(e.prefix)}t-${z(g)}`}`,h={},b=[];for(let l in g)for(let c in h[l]={},g[l]){let u=`--${S(e.prefix)}${l}-${c}`,y=k(String(g[l][c]),e.prefix,l);h[l][c]=new K(c,y,l,e.prefix),b.push(`${u}:${y}`)}let s=()=>{if(b.length&&!l.rules.themed.cache.has(c)){l.rules.themed.cache.add(c);let u=`${g===e.theme?":root,":""}.${c}{${b.join(";")}}`;l.rules.themed.apply(u)}return c};return{...h,get className(){return s()},selector:u,toString:s}}),ee=o(),et=o(),q=e=>{let l=(e=>{let l=!1,c=ee(e,e=>{l=!0;let c="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",g="object"==typeof e.media&&e.media||{},u="object"==typeof e.root?e.root||null:globalThis.document||null,h="object"==typeof e.theme&&e.theme||{},b={prefix:c,media:g,theme:h,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...y},utils:"object"==typeof e.utils&&e.utils||{}},B=E(u),I={css:M(b,B),globalCss:D(b,B),keyframes:V(b,B),createTheme:J(b,B),reset(){B.reset(),I.theme.toString()},theme:{},sheet:B,config:b,prefix:c,getCssText:B.toString,toString:B.toString};return String(I.theme=I.createTheme(h)),I});return l||c.reset(),c})(e);return l.styled=(({config:e,sheet:l})=>et(e,()=>{let c=M(e,l);return(...e)=>{let l=c(...e),u=l[B].type,h=g.forwardRef((e,c)=>{let h=e&&e.as||u,{props:b,deferredInjector:y}=l(e);return delete b.as,b.ref=c,y?g.createElement(g.Fragment,null,g.createElement(h,b),g.createElement(y,null)):g.createElement(h,b)});return h.className=l.className,h.displayName=`Styled.${u.displayName||u.name||u}`,h.selector=l.selector,h.toString=()=>l.selector,h[B]=l[B],h}}))(l),l}}}]);