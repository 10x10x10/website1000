(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2682],{6207:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Header",function(){return s(2626)}])},2626:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return Header}});var t=s(5893),r=s(7294),a=s(1664),i=s.n(a),l=s(8439),o=s(3967),c=s.n(o);let Header=class Header extends r.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){let{type:e}=this.props,{showHeaderLink:n,hideHeader:s}=this.state;return(0,t.jsxs)("div",{className:c()("header",{"falling-down-header":s}),children:[(0,t.jsx)("div",{className:"title-conatainer",children:(0,t.jsx)(i(),{href:l.hu.links[0].link,children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/logo/logo.png"})})})}),(0,t.jsx)("div",{className:"flex-space"}),(0,t.jsx)("div",{className:"header-link-btn",onClick:this.toggleHeaderLinkHandler,children:n?(0,t.jsx)("img",{src:"/icons/clear.svg",className:"header-link-btn-clear"}):(0,t.jsx)("img",{src:"/icons/menu.svg"})}),(0,t.jsx)("div",{className:c()("header-link-container",{"m-header-link-container-show":n}),onClick:this.toggleHeaderLinkHandler,children:l.hu.links.map((n,s)=>{let r=n.type===e;return(0,t.jsx)("div",{className:"header-link-item",children:(0,t.jsx)(i(),{href:r?"":n.link,children:(0,t.jsx)("a",{className:c()("header-link",{"header-link-active":r}),children:n.title})})},n.link)})})]})}constructor(e){super(e),this.handleScroll=e=>{let n=document.documentElement.scrollTop,s=this.lastScrollTop-n;this.lastScrollTop=n,Math.abs(s)>10&&this.setState({hideHeader:s<=0})},this.toggleHeaderLinkHandler=()=>{let{showHeaderLink:e}=this.state;this.setState({showHeaderLink:!e})},this.state={showHeaderLink:!1,hideHeader:0},this.lastScrollTop=0}}},3967:function(e,n){var s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function classNames(){for(var e="",n=0;n<arguments.length;n++){var s=arguments[n];s&&(e=appendClass(e,parseValue(s)))}return e}function parseValue(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return classNames.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var s in e)t.call(e,s)&&e[s]&&(n=appendClass(n,s));return n}function appendClass(e,n){return n?e?e+" "+n:e+n:e}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(s=(function(){return classNames}).apply(n,[]))&&(e.exports=s)}()}},function(e){e.O(0,[1664,8439,9774,2888,179],function(){return e(e.s=6207)}),_N_E=e.O()}]);