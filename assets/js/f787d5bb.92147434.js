"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2148],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>o});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=y(e,["components","mdxType","originalType","parentName"]),d=i(a),N=r,o=d["".concat(p,".").concat(N)]||d[N]||u[N]||l;return a?n.createElement(o,g(g({ref:t},m),{},{components:a})):n.createElement(o,g({ref:t},m))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=N;var y={};for(var p in t)hasOwnProperty.call(t,p)&&(y[p]=t[p]);y.originalType=e,y[d]="string"==typeof e?e:r,g[1]=y;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},28534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>T,frontMatter:()=>l,metadata:()=>y,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={id:"compatibility",sidebar_label:"Compatibility"},g="Compatibility table",y={unversionedId:"guides/compatibility",id:"guides/compatibility",title:"Compatibility table",description:"Currently supported React Native versions (Paper)",source:"@site/docs/guides/compatibility.mdx",sourceDirName:"guides",slug:"/guides/compatibility",permalink:"/react-native-reanimated/docs/guides/compatibility",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/guides/compatibility.mdx",tags:[],version:"current",frontMatter:{id:"compatibility",sidebar_label:"Compatibility"},sidebar:"tutorialSidebar",previous:{title:"Accessibility",permalink:"/react-native-reanimated/docs/guides/accessibility"},next:{title:"Debugging worklets",permalink:"/react-native-reanimated/docs/guides/debugging"}},p={},i=[{value:"Currently supported React Native versions (Paper)",id:"currently-supported-react-native-versions-paper",level:3},{value:"Supported React Native versions on the New Architecture (Fabric)",id:"supported-react-native-versions-on-the-new-architecture-fabric",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},d=m("Version"),u=m("No"),N=m("Yes"),o=m("Spacer"),s={toc:i},x="wrapper";function T(e){let{components:t,...a}=e;return(0,r.yg)(x,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"compatibility-table"},"Compatibility table"),(0,r.yg)("h3",{id:"currently-supported-react-native-versions-paper"},"Currently supported React Native versions (Paper)"),(0,r.yg)("div",{className:"compatibility"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"0.63"),(0,r.yg)("th",{parentName:"tr",align:null},"0.64"),(0,r.yg)("th",{parentName:"tr",align:null},"0.65"),(0,r.yg)("th",{parentName:"tr",align:null},"0.66"),(0,r.yg)("th",{parentName:"tr",align:null},"0.67"),(0,r.yg)("th",{parentName:"tr",align:null},"0.68"),(0,r.yg)("th",{parentName:"tr",align:null},"0.69"),(0,r.yg)("th",{parentName:"tr",align:null},"0.70"),(0,r.yg)("th",{parentName:"tr",align:null},"0.71"),(0,r.yg)("th",{parentName:"tr",align:null},"0.72"),(0,r.yg)("th",{parentName:"tr",align:null},"0.73"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"3.6.x \u2013 3.8.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"3.5.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"3.3.x \u2013 3.4.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"3.0.x \u2013 3.2.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(o,{mdxType:"Spacer"})),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"2.14.x \u2013 2.17.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"2.11.x \u2013 2.13.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"2.10.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"2.5.x \u2013 2.9.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"2.3.x \u2013 2.4.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})))))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Reanimated 2 won't receive support for newest React Native versions. To get the latest React Native features and updates, upgrade to Reanimated 3.")),(0,r.yg)("h3",{id:"supported-react-native-versions-on-the-new-architecture-fabric"},"Supported React Native versions on the New Architecture (Fabric)"),(0,r.yg)("p",null,"To use Reanimated with ",(0,r.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/the-new-architecture/landing-page"},"the experimental New Architecture"),", update the package to at least version 3.0.0. Due to the vast number of breaking-changes related to the New Architecture in each React Native version, as a rule of thumb Reanimated supports the latest stable version of React Native."),(0,r.yg)("div",{className:"compatibility"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"0.63"),(0,r.yg)("th",{parentName:"tr",align:null},"0.64"),(0,r.yg)("th",{parentName:"tr",align:null},"0.65"),(0,r.yg)("th",{parentName:"tr",align:null},"0.66"),(0,r.yg)("th",{parentName:"tr",align:null},"0.67"),(0,r.yg)("th",{parentName:"tr",align:null},"0.68"),(0,r.yg)("th",{parentName:"tr",align:null},"0.69"),(0,r.yg)("th",{parentName:"tr",align:null},"0.70"),(0,r.yg)("th",{parentName:"tr",align:null},"0.71"),(0,r.yg)("th",{parentName:"tr",align:null},"0.72"),(0,r.yg)("th",{parentName:"tr",align:null},"0.73"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"3.6.x - 3.8.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"3.1.x \u2013 3.5.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(d,{version:"3.0.x",mdxType:"Version"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(N,{mdxType:"Yes"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(u,{mdxType:"No"})))))))}T.isMDXComponent=!0}}]);