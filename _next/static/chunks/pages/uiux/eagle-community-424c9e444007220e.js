(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1855],{8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function getStatics(e){return n.isMemo(e)?s:l[e.$$typeof]||o}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=s;var a=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;function hoistNonReactStatics(e,t,r){if("string"!=typeof t){if(p){var n=f(t);n&&n!==p&&hoistNonReactStatics(e,n,r)}var o=c(t);u&&(o=o.concat(u(t)));for(var s=getStatics(e),l=getStatics(t),j=0;j<o.length;++j){var x=o[j];if(!i[x]&&!(r&&r[x])&&!(l&&l[x])&&!(s&&s[x])){var m=d(t,x);try{a(e,x,m)}catch(e){}}}}return e}e.exports=hoistNonReactStatics},3761:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uiux/eagle-community",function(){return r(5122)}])},1626:function(e,t,r){"use strict";r.d(t,{W:function(){return queryLink}});var n=r(8439);let queryLink=function(e){let t=e.split("."),r=n.aT;for(let e=0;e<t.length;e++)r=r[t[e]];return r}},2012:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Credits}});var n=r(5893),o=r(7294),i=r(3967),s=r.n(i);let Credits=class Credits extends o.Component{render(){let{isFold:e}=this.state,{foldable:t,children:r}=this.props,o=s()("credit-list",t?{fold:e,unfold:!e}:{});return(0,n.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,n.jsx)("h2",{children:"Credits"}),(0,n.jsx)("div",{className:o,children:r}),t&&e?(0,n.jsx)("p",{className:"credit-more",children:"More"}):null]})}constructor(e){super(e),this.toggleHandler=e=>{let{isFold:t}=this.state;this.setState({isFold:!t})},this.state={isFold:!0}}};Credits.defaultProps={foldable:!1}},1116:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return EmbedVideo}});var n=r(5893);r(7294);var o=r(1626);function EmbedVideo(e){let{link:t=""}=e;function getLink(){return(0,o.W)(t)}return(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)("iframe",{src:getLink(),scrolling:"no",frameBorder:0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},7725:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return MediaList}});var n=r(5893);r(7294);var o=r(3967),i=r.n(o),s=r(1626),l=r(1230),a=r(9231);let c=(0,a.ZP)(l.default);function MediaList(e){let{links:t="",title:r="",col:o=0,mCol:l=o}=e;function getLinks(e){return(!1===Array.isArray(e)?e.split(",").map(e=>e.trim()):e).filter(e=>""!==e&&!1===e.startsWith("//")).map(e=>e.startsWith("http")?e:(0,s.W)(e)).filter(e=>void 0!==e)}function getClass(e,t){return{["grid-c"+e]:!0,["m-grid-c"+t]:!0}}return(0,n.jsxs)("div",{className:"media-list-container",children:[r?(0,n.jsx)("div",{className:"project-text-container project-view-title",children:(0,n.jsx)("h2",{children:r})}):null,(0,n.jsx)("div",{className:i()("grid-c",getClass(o,l)),children:getLinks(t).map(e=>(0,n.jsx)("div",{className:"media-container",children:(0,n.jsx)(c,{link:e})},e))})]})}},3998:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return TextContainer}});var n=r(5893);function TextContainer(e){let{children:t}=e;return(0,n.jsx)("div",{className:"project-text-container",children:t})}r(7294)},7882:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return TextContent}});var n=r(5893);function TextContent(e){let{children:t}=e;return(0,n.jsx)("p",{className:"text-content convert-selection",children:t})}r(7294)},6647:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return TextTitle}});var n=r(5893);function TextTitle(e){let{children:t}=e;return(0,n.jsx)("h2",{className:"text-title convert-selection",children:t})}r(7294)},5122:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ProjectPage}});var n=r(5893);r(7294);var o=r(1804),i=r(7725);r(2012),r(1116);var s=r(3998),l=r(6647),a=r(7882),c=r(8439);function ProjectPage(e){let t="projectU001";return c.aT[t],(0,n.jsxs)(o.default,{id:t,children:[(0,n.jsx)(i.default,{col:1,mCol:1,links:["projectU001.image_01"]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"Eagle Community — 免費的設計資源、靈感社群"}),(0,n.jsx)(a.default,{children:"專案期間：10 個月"}),(0,n.jsx)(a.default,{children:"擔任角色：產品設計師"}),(0,n.jsx)(a.default,{children:"負責內容：完整網站架構規劃與設計完稿"})]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"專案背景"}),(0,n.jsx)(a.default,{children:"公司產品 Eagle App 是一款專為設計師打造的素材管理軟體。為了提升產品的被動流量，因此規劃建立社群平台，讓使用者可以交流收集的素材與靈感，並提升使用者對產品的黏著度。"}),(0,n.jsx)(a.default,{children:"Eagle App 適用於各產業類別的設計師，而社群平台著重於最主要的用戶設計類別，包含 UI 設計、平面設計、插畫設計、遊戲設計、室內設計等，依照上述類別設計師的使用習慣作為主要考量。 網站風格定位為簡潔乾淨，依循原產品官網的調性。網站依主要客群分為三個語系，包含英文、繁中、簡中，不同語系的資料內容為獨立運作、不共享。"})]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"定義需求"}),(0,n.jsx)(a.default,{children:"1. 建立讓 Eagle App 用戶方便分享設計靈感、素材、工具的社群網站。"}),(0,n.jsx)(a.default,{children:"2. 引導潛在用戶了解 Eagle App 的相關資訊，進而下載或購買軟體。"}),(0,n.jsx)(a.default,{children:"3. 培養自主創作者，不須透過官方推動，社群就能長久穩定的運行。"})]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"專案成果"}),(0,n.jsx)(a.default,{children:"上線三個月的網站成效（以簡中網站計算）"}),(0,n.jsx)(a.default,{children:"1. 用戶提交近 1500 個資源投稿。"}),(0,n.jsx)(a.default,{children:"2. 約有 180K 網站總訪問量。"}),(0,n.jsx)(a.default,{children:"3. 網站平均訪問時長 08:42。"})]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"資訊架構"}),(0,n.jsx)(a.default,{children:"以網站資訊架構圖和工程師與主管討論，確認方向正確後開始著手頁面規劃與視覺設計。"})]}),(0,n.jsx)(i.default,{col:1,mCol:1,links:["projectU001.image_02"]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"設計流程"}),(0,n.jsx)(a.default,{children:"定義需求與問題 → 收集資料（用戶、競品研究）→ 思考解決方案 → 介面規劃與設計 → 測試計畫 → 更新迭代"})]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"過程中遇到的問題與解決方案"}),(0,n.jsx)(a.default,{children:"1. 需不需有首頁呢？"}),(0,n.jsx)(a.default,{children:"因為社群網站，包含眾多的設計領域。因此在設計資源的部分，需要考量使用者是否想要看到別的領域的資源，全部顯示可能會造成閱讀上的混亂，但如果太侷限又會無法快速呈現這個網站全貌。 因此我提出需要有首頁統整訊息，在首頁上呈現出主要的領域，以及以不同的區塊呈現各領域的資源，使用者可以由首頁選擇要前往的特定設計領域。"}),(0,n.jsx)(a.default,{children:"然而這個提議並沒有馬上被採納。因為原先社群網站規劃上主要是由官網導流，會在官網的 navigation 上顯示名稱，並且有下拉選單，預期使用者可以直接由選單選擇要前往的設計領域。"}),(0,n.jsx)(a.default,{children:"專案後期，由於社群網站除了官網導流，還會內嵌到軟體介面中，並且考量到首頁可以呈現有更多的資訊，例如 banner 、部落格文章以及推薦設計工具等等，因此最後將首頁納入網站規畫之中。"})]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(a.default,{children:"2. 分類系統該怎麼規劃？"}),(0,n.jsx)(a.default,{children:"設計資源頁可以想像成是一個資料庫，主要可以分成五大設計領域，在各領域之下又會有眾多的子分類， 但是不同領域之間也有可能有共通的子分類，例如：Icons、mockups、插圖等等。 另外，同個素材資源也有可能同時需要在不同子分類之下，這個狀況除了考慮前端該如何呈現，也要考慮後端是否要用同一份資料。"}),(0,n.jsx)(a.default,{children:"最後討論出的解法是，後台資料並非直接分到不同的領域資料夾，而是類似標籤一樣， 單份資料可以標註資料是屬於哪些子分類，並且可以多重選擇。而在不同領域中的共同子分類， 也是採用了一樣的做法，單個子分類可以標註是屬於哪些領域。"}),(0,n.jsx)(a.default,{children:"這個做法的優點是，避免重複的資料，可以節省資料庫的儲存空間，並且有良好的擴充性，不會因為更動資源或是子分類而消耗大幅成本。"})]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(a.default,{children:"3. 篩選器該使用直式還是橫式的呢？"}),(0,n.jsx)(a.default,{children:"設計資源頁的篩選器主要就是呈現分類系統，可以選擇不同的領域以及子分類。"}),(0,n.jsx)(a.default,{children:"最初篩選器設計成直式的，也就是畫面中的側欄，而領域是利用下拉選單切換。優點是結構與 Eagle App 的資料夾結構類似，符合使用者過去的使用習慣。 而且分類名稱的顯示長度較有彈性，且可以有更多層級的分類結構。缺點是會占用畫面左側的空間，壓縮到主要的素材資源顯示區域。 而且領域只能利用下拉選單切換，在頻繁切換領域的狀況上較不夠直覺、方便。"}),(0,n.jsx)(a.default,{children:"後來因為確定分類的層級只會有兩層 — 設計領域與子分類，因此改為橫式篩選器。橫式雖然就沒有直式的優點，但在分類層級不多的情況下切換以及瀏覽更為快速、占用的畫面空間也比較小，還有可以將其他篩選功能一併整合到同個區塊。"})]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"Wireframe"}),(0,n.jsx)(a.default,{})]}),(0,n.jsx)(i.default,{col:2,mCol:1,links:["projectU001.image_03","projectU001.image_04"]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"Guideline"}),(0,n.jsx)(a.default,{})]}),(0,n.jsx)(i.default,{col:1,mCol:1,links:["projectU001.image_05"]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"QA 測試計畫"}),(0,n.jsx)(a.default,{})]}),(0,n.jsx)(i.default,{col:1,mCol:1,links:["projectU001.image_06"]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"最終設計產出"}),(0,n.jsx)(a.default,{})]}),(0,n.jsx)(i.default,{col:1,mCol:1,title:"首頁",links:["projectU001.image_07"]}),(0,n.jsx)(i.default,{col:1,mCol:1,title:"設計資源",links:["projectU001.image_08"]}),(0,n.jsx)(i.default,{col:1,mCol:1,title:"設計工具",links:["projectU001.image_09"]}),(0,n.jsx)(i.default,{col:1,mCol:1,title:"優秀作者",links:["projectU001.image_10"]}),(0,n.jsxs)(s.default,{children:[(0,n.jsx)(l.default,{children:"結語"}),(0,n.jsx)(a.default,{children:"1. UX Writing 的在地化：由於同時規劃多國語言的版本，由於簡體中文的內容初步規劃也是由設計師負責，所以要多參考其他簡體中文網站實際上會使用的用語，避免語意不清。"}),(0,n.jsx)(a.default,{children:"2. 保持迭代的彈性：雖然盡可能的在初期將網站規劃完善，專案過程中免不了會有大幅度的調整，因此保持彈性是很重要的，初期有將畫面中的元件拆分好，會讓版面調整上更有彈性。"}),(0,n.jsx)(a.default,{children:"3. 溝通的重要性：這次專案的團隊雖然規模不大，但偶爾還是會遇到溝通或期待有落差的時刻，執行專案的過程中逐漸學習到如何清楚的表達需求與困境，也很感謝團隊的包容，期許後續運作上能夠更加的順暢。"})]})]})}},9231:function(e,t,r){"use strict";t.ZP=void 0;var n=_interopRequireDefault(r(7095));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}n.default,_interopRequireDefault(r(2659)).default;var o=n.default;t.ZP=o},1319:function(e,t){"use strict";t.__esModule=!0,t.noop=t.defaultProps=t.defaultOptions=t.defaultConfig=void 0,t.defaultOptions={},t.defaultConfig={disconnectOnLeave:!1};var noop=()=>{};t.noop=noop,t.defaultProps={onEnterViewport:noop,onLeaveViewport:noop}},7095:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=_interopRequireDefault(r(8679)),i=_interopRequireDefault(r(2659)),s=r(1319),l=r(5893),a=["onEnterViewport","onLeaveViewport"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var isFunctionalComponent=e=>"function"==typeof e&&!(e.prototype&&e.prototype.render),isReactComponent=e=>e.prototype&&e.prototype.isReactComponent;t.default=function(e,t,r){void 0===t&&(t=s.defaultOptions),void 0===r&&(r=s.defaultConfig);var c=(0,n.forwardRef)((t,r)=>{var n=_extends({forwardedRef:r},isReactComponent(e)&&!isFunctionalComponent(e)?{ref:r}:{});return(0,l.jsx)(e,_extends({},t,n))});function InViewport(e){var{onEnterViewport:o=s.noop,onLeaveViewport:u=s.noop}=e,d=_objectWithoutPropertiesLoose(e,a),f=(0,n.useRef)(),{inViewport:p,enterCount:j,leaveCount:x}=(0,i.default)(f,t,r,{onEnterViewport:o,onLeaveViewport:u}),m=_extends({},d,{inViewport:p,enterCount:j,leaveCount:x});return(0,l.jsx)(c,_extends({},m,{ref:f}))}var u=e.displayName||e.name||"Component";return InViewport.displayName="handleViewport("+u+")",(0,o.default)(InViewport,c)}},2659:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=r(3935),i=r(1319);t.default=function(e,t,r,s){void 0===t&&(t=i.defaultOptions),void 0===r&&(r=i.defaultConfig),void 0===s&&(s=i.defaultProps);var{onEnterViewport:l,onLeaveViewport:a}=s,[,c]=(0,n.useState)(),u=(0,n.useRef)(),d=(0,n.useRef)(!1),f=(0,n.useRef)(!1),p=(0,n.useRef)(0),j=(0,n.useRef)(0);function startObserver(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.observe(i))}}function stopObserver(t){var{observerRef:r}=t,n=e.current;if(n){var i=(0,o.findDOMNode)(n);i&&(null==r||r.unobserve(i))}null==r||r.disconnect(),u.current=null}function handleIntersection(e){var{isIntersecting:t,intersectionRatio:n}=e[0]||{},o=void 0!==t?t:n>0;if(!f.current&&o){f.current=!0,null==l||l(),p.current+=1,d.current=o,c(o);return}f.current&&!o&&(f.current=!1,null==a||a(),r.disconnectOnLeave&&u.current&&u.current.disconnect(),j.current+=1,d.current=o,c(o))}function initIntersectionObserver(e){var{observerRef:r}=e;return r||(u.current=new IntersectionObserver(handleIntersection,t),u.current)}return(0,n.useEffect)(()=>{var e=u.current;return startObserver({observerRef:e=initIntersectionObserver({observerRef:e})}),()=>{stopObserver({observerRef:e})}},[e.current,t,r,l,a]),{inViewport:d.current,enterCount:p.current,leaveCount:j.current}}},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,j=r?Symbol.for("react.suspense_list"):60120,x=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function z(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case d:case i:case l:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case f:case m:case x:case a:return e;default:return t}}case o:return t}}}function A(e){return z(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=a,t.Element=n,t.ForwardRef=f,t.Fragment=i,t.Lazy=m,t.Memo=x,t.Portal=o,t.Profiler=l,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return A(e)||z(e)===u},t.isConcurrentMode=A,t.isContextConsumer=function(e){return z(e)===c},t.isContextProvider=function(e){return z(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return z(e)===f},t.isFragment=function(e){return z(e)===i},t.isLazy=function(e){return z(e)===m},t.isMemo=function(e){return z(e)===x},t.isPortal=function(e){return z(e)===o},t.isProfiler=function(e){return z(e)===l},t.isStrictMode=function(e){return z(e)===s},t.isSuspense=function(e){return z(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===l||e===s||e===p||e===j||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===x||e.$$typeof===a||e.$$typeof===c||e.$$typeof===f||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g||e.$$typeof===h)},t.typeOf=z},9864:function(e,t,r){"use strict";e.exports=r(9921)},3967:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function classNames(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=appendClass(e,parseValue(r)))}return e}function parseValue(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return classNames.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=appendClass(t,r));return t}function appendClass(e,t){return t?e?e+" "+t:e+t:e}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(r=(function(){return classNames}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[296,9890,1664,8439,1804,9774,2888,179],function(){return e(e.s=3761)}),_N_E=e.O()}]);