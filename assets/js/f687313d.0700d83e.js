"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6037],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d[u]="string"==typeof e?e:o,i[1]=d;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},91782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const a={},i=void 0,d={unversionedId:"nodes/debug",id:"version-1.x/nodes/debug",title:"debug",description:"debug",source:"@site/versioned_docs/version-1.x/nodes/debug.md",sourceDirName:"nodes",slug:"/nodes/debug",permalink:"/react-native-reanimated/docs/1.x/nodes/debug",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-1.x/nodes/debug.md",tags:[],version:"1.x",frontMatter:{},sidebar:"version-1.x/docs",previous:{title:"cond",permalink:"/react-native-reanimated/docs/1.x/nodes/cond"},next:{title:"defined",permalink:"/react-native-reanimated/docs/1.x/nodes/defined"}},c={},s=[{value:"<code>debug</code>",id:"debug",level:2}],l={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"debug"},(0,o.yg)("inlineCode",{parentName:"h2"},"debug")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"debug(messageString, valueNode);\n")),(0,o.yg)("p",null,"When the node is evaluated, it prints a string that contains the ",(0,o.yg)("inlineCode",{parentName:"p"},"messageString")," concatenated with the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"valueNode"),". This then returns the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"valueNode"),". Logs are printed in the JS debugger if it's attached, in console if Expo client is being used, or else in the native console. Logs are visible only in ",(0,o.yg)("inlineCode",{parentName:"p"},"DEV")," mode and have no effect on production builds. Note that ",(0,o.yg)("inlineCode",{parentName:"p"},"messageString")," should be a normal string, not an animated node."))}p.isMDXComponent=!0}}]);