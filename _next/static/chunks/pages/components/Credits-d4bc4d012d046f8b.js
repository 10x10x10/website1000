(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7802],{2742:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Credits",function(){return s(2012)}])},2012:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return Credits}});var r=s(5893),n=s(7294),a=s(3967),i=s.n(a);let Credits=class Credits extends n.Component{render(){let{isFold:t}=this.state,{foldable:e,children:s}=this.props,n=i()("credit-list",e?{fold:t,unfold:!t}:{});return(0,r.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,r.jsx)("h2",{children:"Credits"}),(0,r.jsx)("div",{className:n,children:s}),e&&t?(0,r.jsx)("p",{className:"credit-more",children:"More"}):null]})}constructor(t){super(t),this.toggleHandler=t=>{let{isFold:e}=this.state;this.setState({isFold:!e})},this.state={isFold:!0}}};Credits.defaultProps={foldable:!1}},3967:function(t,e){var s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function classNames(){for(var t="",e=0;e<arguments.length;e++){var s=arguments[e];s&&(t=appendClass(t,parseValue(s)))}return t}function parseValue(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return classNames.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var s in t)r.call(t,s)&&t[s]&&(e=appendClass(e,s));return e}function appendClass(t,e){return e?t?t+" "+e:t+e:t}t.exports?(classNames.default=classNames,t.exports=classNames):void 0!==(s=(function(){return classNames}).apply(e,[]))&&(t.exports=s)}()}},function(t){t.O(0,[9774,2888,179],function(){return t(t.s=2742)}),_N_E=t.O()}]);