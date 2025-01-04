(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9260],{9260:function(e,t,r){!function(e,t,r){"use strict";function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=_interopDefaultLegacy(t),o=_interopDefaultLegacy(r);function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function _nonIterableRest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}var i=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],useLottie=function(e,t){var a=e.animationData,u=e.loop,l=e.autoplay,s=e.initialSegment,c=e.onComplete,f=e.onLoopComplete,d=e.onEnterFrame,y=e.onSegmentStart,m=e.onConfigReady,p=e.onDataReady,v=e.onDataFailed,g=e.onLoadedImages,b=e.onDOMLoaded,S=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var h=_objectWithoutProperties(e,i),A=_slicedToArray(r.useState(!1),2),_=A[0],P=A[1],j=r.useRef(),L=r.useRef(null),loadAnimation=function(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(L.current){null===(t=j.current)||void 0===t||t.destroy();var o=_objectSpread2(_objectSpread2(_objectSpread2({},e),r),{},{container:L.current});return j.current=n.default.loadAnimation(o),P(!!j.current),function(){var e;null===(e=j.current)||void 0===e||e.destroy(),j.current=void 0}}};return r.useEffect(function(){var e=loadAnimation();return function(){return null==e?void 0:e()}},[a,u]),r.useEffect(function(){j.current&&(j.current.autoplay=!!l)},[l]),r.useEffect(function(){if(j.current){if(!s){j.current.resetSegments(!0);return}Array.isArray(s)&&s.length&&((j.current.currentRawFrame<s[0]||j.current.currentRawFrame>s[1])&&(j.current.currentRawFrame=s[0]),j.current.setSegment(s[0],s[1]))}},[s]),r.useEffect(function(){var e=[{name:"complete",handler:c},{name:"loopComplete",handler:f},{name:"enterFrame",handler:d},{name:"segmentStart",handler:y},{name:"config_ready",handler:m},{name:"data_ready",handler:p},{name:"data_failed",handler:v},{name:"loaded_images",handler:g},{name:"DOMLoaded",handler:b},{name:"destroy",handler:S}].filter(function(e){return null!=e.handler});if(e.length){var t=e.map(function(e){var t;return null===(t=j.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=j.current)||void 0===t||t.removeEventListener(e.name,e.handler)}});return function(){t.forEach(function(e){return e()})}}},[c,f,d,y,m,p,v,g,b,S]),{View:o.default.createElement("div",_objectSpread2({style:t,ref:L},h)),play:function(){var e;null===(e=j.current)||void 0===e||e.play()},stop:function(){var e;null===(e=j.current)||void 0===e||e.stop()},pause:function(){var e;null===(e=j.current)||void 0===e||e.pause()},setSpeed:function(e){var t;null===(t=j.current)||void 0===t||t.setSpeed(e)},goToAndStop:function(e,t){var r;null===(r=j.current)||void 0===r||r.goToAndStop(e,t)},goToAndPlay:function(e,t){var r;null===(r=j.current)||void 0===r||r.goToAndPlay(e,t)},setDirection:function(e){var t;null===(t=j.current)||void 0===t||t.setDirection(e)},playSegments:function(e,t){var r;null===(r=j.current)||void 0===r||r.playSegments(e,t)},setSubframe:function(e){var t;null===(t=j.current)||void 0===t||t.setSubframe(e)},getDuration:function(e){var t;return null===(t=j.current)||void 0===t?void 0:t.getDuration(e)},destroy:function(){var e;null===(e=j.current)||void 0===e||e.destroy(),j.current=void 0},animationContainerRef:L,animationLoaded:_,animationItem:j.current}};function getContainerVisibility(e){var t=e.getBoundingClientRect(),r=t.top,n=t.height;return(window.innerHeight-r)/(window.innerHeight+n)}function getContainerCursorPosition(e,t,r){var n=e.getBoundingClientRect(),o=n.top;return{x:(t-n.left)/n.width,y:(r-o)/n.height}}var useInitInteractivity=function(e){var t=e.wrapperRef,n=e.animationItem,o=e.mode,i=e.actions;r.useEffect(function(){var e,r,a,u,l,s=t.current;if(s&&n&&i.length)switch(n.stop(),o){case"scroll":return e=null,r=function(){var t=getContainerVisibility(s),r=i.find(function(e){var r=e.visibility;return r&&t>=r[0]&&t<=r[1]});if(r){if("seek"===r.type&&r.visibility&&2===r.frames.length){var o=r.frames[0]+Math.ceil((t-r.visibility[0])/(r.visibility[1]-r.visibility[0])*r.frames[1]);n.goToAndStop(o-n.firstFrame-1,!0)}"loop"===r.type&&(null===e?(n.playSegments(r.frames,!0),e=r.frames):e!==r.frames?(n.playSegments(r.frames,!0),e=r.frames):n.isPaused&&(n.playSegments(r.frames,!0),e=r.frames)),"play"===r.type&&n.isPaused&&(n.resetSegments(!0),n.play()),"stop"===r.type&&n.goToAndStop(r.frames[0]-n.firstFrame-1,!0)}},document.addEventListener("scroll",r),function(){document.removeEventListener("scroll",r)};case"cursor":return a=function(e,t){var r=e,o=t;if(-1!==r&&-1!==o){var a=getContainerCursorPosition(s,r,o);r=a.x,o=a.y}var u=i.find(function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?r>=t.x[0]&&r<=t.x[1]&&o>=t.y[0]&&o<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&r===t.x&&o===t.y});if(u){if("seek"===u.type&&u.position&&Array.isArray(u.position.x)&&Array.isArray(u.position.y)&&2===u.frames.length){var l=(r-u.position.x[0])/(u.position.x[1]-u.position.x[0]),c=(o-u.position.y[0])/(u.position.y[1]-u.position.y[0]);n.playSegments(u.frames,!0),n.goToAndStop(Math.ceil((l+c)/2*(u.frames[1]-u.frames[0])),!0)}"loop"===u.type&&n.playSegments(u.frames,!0),"play"===u.type&&(n.isPaused&&n.resetSegments(!1),n.playSegments(u.frames)),"stop"===u.type&&n.goToAndStop(u.frames[0],!0)}},u=function(e){a(e.clientX,e.clientY)},l=function(){a(-1,-1)},s.addEventListener("mousemove",u),s.addEventListener("mouseout",l),function(){s.removeEventListener("mousemove",u),s.removeEventListener("mouseout",l)}}},[o,n])},useLottieInteractivity=function(e){var t=e.actions,r=e.mode,n=e.lottieObj,o=n.animationItem,i=n.View;return useInitInteractivity({actions:t,animationItem:o,mode:r,wrapperRef:n.animationContainerRef}),i},a=["style","interactivity"];Object.defineProperty(e,"LottiePlayer",{enumerable:!0,get:function(){return n.default}}),e.default=function(e){var t,n,o,i=e.style,u=e.interactivity,l=useLottie(_objectWithoutProperties(e,a),i),s=l.View,c=l.play,f=l.stop,d=l.pause,y=l.setSpeed,m=l.goToAndStop,p=l.goToAndPlay,v=l.setDirection,g=l.playSegments,b=l.setSubframe,S=l.getDuration,h=l.destroy,A=l.animationContainerRef,_=l.animationLoaded,P=l.animationItem;return r.useEffect(function(){e.lottieRef&&(e.lottieRef.current={play:c,stop:f,pause:d,setSpeed:y,goToAndPlay:p,goToAndStop:m,setDirection:v,playSegments:g,setSubframe:b,getDuration:S,destroy:h,animationContainerRef:A,animationLoaded:_,animationItem:P})},[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),useLottieInteractivity({lottieObj:{View:s,play:c,stop:f,pause:d,setSpeed:y,goToAndStop:m,goToAndPlay:p,setDirection:v,playSegments:g,setSubframe:b,getDuration:S,destroy:h,animationContainerRef:A,animationLoaded:_,animationItem:P},actions:null!==(n=null==u?void 0:u.actions)&&void 0!==n?n:[],mode:null!==(o=null==u?void 0:u.mode)&&void 0!==o?o:"scroll"})},e.useLottie=useLottie,e.useLottieInteractivity=useLottieInteractivity,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(1248),r(7294))}}]);