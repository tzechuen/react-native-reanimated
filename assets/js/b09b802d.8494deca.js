"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[458],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,y=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(58168),i=(n(96540),n(15680));const r={id:"decay",title:"Decay",sidebar_label:"Decay"},o=void 0,s={unversionedId:"animations/decay",id:"version-1.x/animations/decay",title:"Decay",description:"Updates position and velocity nodes by running a single step of animation each time this node evaluates. State variable finished is set to 1 when the animation gets to the final point (that is the velocity drops under the level of significance). The time state node is populated automatically by this node and refers to the last clock time this node got evaluated. It is expected to be reset each time we want to restart the animation. Decay animation can be configured using deceleration config param and it controls how fast the animation decelerates. The value should be between 0 and 1 but only values that are close to 1 will yield meaningful results.",source:"@site/versioned_docs/version-1.x/animations/decay.md",sourceDirName:"animations",slug:"/animations/decay",permalink:"/react-native-reanimated/docs/1.x/animations/decay",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-1.x/animations/decay.md",tags:[],version:"1.x",frontMatter:{id:"decay",title:"Decay",sidebar_label:"Decay"},sidebar:"version-1.x/docs",previous:{title:"Timing",permalink:"/react-native-reanimated/docs/1.x/animations/timing"},next:{title:"Spring",permalink:"/react-native-reanimated/docs/1.x/animations/spring"}},c={},l=[],d={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"decay(clock, { finished, velocity, position, time }, { deceleration });\n")),(0,i.yg)("p",null,"Updates ",(0,i.yg)("inlineCode",{parentName:"p"},"position")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"velocity")," nodes by running a single step of animation each time this node evaluates. State variable ",(0,i.yg)("inlineCode",{parentName:"p"},"finished")," is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"1")," when the animation gets to the final point (that is the velocity drops under the level of significance). The ",(0,i.yg)("inlineCode",{parentName:"p"},"time")," state node is populated automatically by this node and refers to the last clock time this node got evaluated. It is expected to be reset each time we want to restart the animation. Decay animation can be configured using ",(0,i.yg)("inlineCode",{parentName:"p"},"deceleration")," config param and it controls how fast the animation decelerates. The value should be between ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"1")," but only values that are close to ",(0,i.yg)("inlineCode",{parentName:"p"},"1")," will yield meaningful results."))}m.isMDXComponent=!0}}]);