(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[227],{2167:function(e,n,r){"use strict";var t=r(3038),c=r(862);n.default=void 0;var i=c(r(7294)),a=r(9414),o=r(4651),s=r(7426),l={};function u(e,n,r,t){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var c=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(c?"%"+c:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,c=(0,o.useRouter)(),f=i.default.useMemo((function(){var n=(0,a.resolveHref)(c,e.href,!0),r=t(n,2),i=r[0],o=r[1];return{href:i,as:e.as?(0,a.resolveHref)(c,e.as):o||i}}),[c,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,x=e.scroll,j=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=(n=i.Children.only(h))&&"object"===typeof n&&n.ref,b=(0,s.useIntersection)({rootMargin:"200px"}),g=t(b,2),N=g[0],w=g[1],E=i.default.useCallback((function(e){N(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,N]);(0,i.useEffect)((function(){var e=w&&r&&(0,a.isLocalURL)(d),n="undefined"!==typeof j?j:c&&c.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&u(c,d,p,{locale:n})}),[p,d,w,j,r,c]);var L={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,c,i,o,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==o&&t.indexOf("#")>=0&&(o=!1),n[c?"replace":"push"](r,t,{shallow:i,locale:s,scroll:o}))}(e,c,d,p,v,m,x,j)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(c,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var _="undefined"!==typeof j?j:c&&c.locale,k=c&&c.isLocaleDomain&&(0,a.getDomainLocale)(p,_,c&&c.locales,c&&c.domainLocales);L.href=k||(0,a.addBasePath)((0,a.addLocale)(p,_,c&&c.defaultLocale))}return i.default.cloneElement(n,L)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,s=(0,c.useRef)(),l=(0,c.useState)(!1),u=t(l,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=o.get(n);if(r)return r;var t=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return o.set(n,r={id:n,observer:c,elements:t}),r}(r),c=t.id,i=t.observer,a=t.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=r(7294),i=r(3447),a="undefined"!==typeof IntersectionObserver;var o=new Map},8075:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return i}});var t=r(5893),c=(r(7294),r(1664),r(9459));function i(e){var n=c.QL.intro,r=c.QL.contacts,i=c.QL.experiences;return(0,t.jsx)("div",{className:"about-container",children:(0,t.jsxs)("div",{className:"row m-col",children:[(0,t.jsx)("div",{className:"middle",children:(0,t.jsx)("iframe",{className:"draw-view",src:"https://editor.p5js.org/1000cheng/embed/AIYo4-nCa",height:"300px",width:"300px",style:{borderStyle:"none"}})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"intro",children:[(0,t.jsx)("h1",{children:n.title}),n.descriptions.map((function(e){return(0,t.jsx)("p",{className:"description",children:e},e)}))]}),(0,t.jsx)("div",{className:"split-line"}),(0,t.jsxs)("div",{className:"contact",children:[(0,t.jsx)("h1",{children:"Contact me"}),(0,t.jsx)("ul",{children:r.map((function(e){return(0,t.jsxs)("li",{children:[(0,t.jsx)("img",{className:"contact-icon",src:e.icon}),(0,t.jsx)("a",{href:e.link,target:"_blank",children:e.text})]},e.link)}))})]}),(0,t.jsx)("div",{className:"split-line"}),(0,t.jsxs)("div",{className:"experience",children:[(0,t.jsx)("h1",{children:"Experience"}),i.map((function(e){return(0,t.jsxs)("div",{className:"experience-year-container",children:[(0,t.jsx)("h2",{children:e.year}),(0,t.jsx)("ul",{children:e.items.map((function(e){return(0,t.jsx)("div",{children:(0,t.jsx)("li",{children:e.text})},e.text)}))})]},e.year)}))]})]})]})})}},7315:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/About",function(){return r(8075)}])},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[459,774,888,179],(function(){return n=7315,e(e.s=n);var n}));var n=e.O();_N_E=n}]);