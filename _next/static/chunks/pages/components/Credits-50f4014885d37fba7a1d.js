(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{3349:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,{Z:function(){return r}})},6610:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,{Z:function(){return r}})},5991:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,{Z:function(){return o}})},7608:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,{Z:function(){return r}})},5255:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,{Z:function(){return o}})},6089:function(t,n,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,{Z:function(){return i}});var o=e(3349);function i(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?(0,o.Z)(t):n}},4184:function(t,n){var e;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)){if(e.length){var u=o.apply(null,e);u&&t.push(u)}}else if("object"===i)if(e.toString===Object.prototype.toString)for(var c in e)r.call(e,c)&&e[c]&&t.push(c);else t.push(e.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(n,[]))||(t.exports=e)}()},9390:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return h}});var r=e(5893),o=e(6610),i=e(5991),u=e(3349),c=e(5255),f=e(6089),s=e(7608),l=e(6156),a=e(7294),p=e(4184),d=e.n(p);function y(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,f.Z)(this,e)}}var h=function(t){(0,c.Z)(e,t);var n=y(e);function e(t){var r;return(0,o.Z)(this,e),r=n.call(this,t),(0,l.Z)((0,u.Z)(r),"toggleHandler",(function(t){var n=r.state.isFold;r.setState({isFold:!n})})),r.state={isFold:!0},r}return(0,i.Z)(e,[{key:"render",value:function(){var t=this.state.isFold,n=this.props,e=n.foldable,o=n.children,i=d()("credit-list",e?{fold:t,unfold:!t}:{});return(0,r.jsxs)("div",{className:"project-text-container",onClick:this.toggleHandler,children:[(0,r.jsx)("h2",{children:"Credits"}),(0,r.jsx)("div",{className:i,children:o}),e&&t?(0,r.jsx)("p",{className:"credit-more",children:"...More"}):null]})}}]),e}(a.Component);h.defaultProps={foldable:!1}},9501:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Credits",function(){return e(9390)}])}},function(t){t.O(0,[774,888,179],(function(){return n=9501,t(t.s=n);var n}));var n=t.O();_N_E=n}]);