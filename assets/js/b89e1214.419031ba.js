"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5221],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,u=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const i={id:"getting_started",title:"Getting started",sidebar_label:"Getting started"},o=void 0,l={unversionedId:"getting_started",id:"version-1.x/getting_started",title:"Getting started",description:"Before you get started you should definitely familiarize yourself with the original Animated API. It will do you well to be comfortable with how animations are generally done in Animated. (Fun Fact: Reanimated is also backwards compatible with the Animated API. \ud83d\ude4c)",source:"@site/versioned_docs/version-1.x/getting-started.md",sourceDirName:".",slug:"/getting_started",permalink:"/react-native-reanimated/docs/1.x/getting_started",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-1.x/getting-started.md",tags:[],version:"1.x",frontMatter:{id:"getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-1.x/docs",previous:{title:"About",permalink:"/react-native-reanimated/docs/1.x/"},next:{title:"Declarative Animation API",permalink:"/react-native-reanimated/docs/1.x/declarative"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Testing",id:"testing",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Before you get started you should definitely familiarize yourself with the original ",(0,r.yg)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/animated.html"},"Animated API"),". It will do you well to be comfortable with how animations are generally done in ",(0,r.yg)("inlineCode",{parentName:"p"},"Animated"),". (Fun Fact: Reanimated is also backwards compatible with the ",(0,r.yg)("inlineCode",{parentName:"p"},"Animated API"),". \ud83d\ude4c)"),(0,r.yg)("p",null,"Refer to the ",(0,r.yg)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x/#motivation"},"Motivation")," section to understand why this library exists"),(0,r.yg)("p",null,"NOTE: Throughout this document when we refer to classes or methods prefixed with ",(0,r.yg)("inlineCode",{parentName:"p"},"Animated")," we are referring to them being imported from ",(0,r.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," package instead of plain ",(0,r.yg)("inlineCode",{parentName:"p"},"react-native"),", unless otherwise stated."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"I. First install the library from npm repository using ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  yarn add react-native-reanimated\n")),(0,r.yg)("p",null,"II. For iOS, go to ",(0,r.yg)("inlineCode",{parentName:"p"},"ios")," folder and run ",(0,r.yg)("inlineCode",{parentName:"p"},"pod install"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  cd ios\n  pod install\n")),(0,r.yg)("p",null,'III. When you want to use "reanimated" in your project import it from the ',(0,r.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," package:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import Animated from 'react-native-reanimated';\n")),(0,r.yg)("p",null,"Similarly when you need ",(0,r.yg)("inlineCode",{parentName:"p"},"Easing")," import it from the ",(0,r.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," package instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"react-native"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import Animated, { Easing } from 'react-native-reanimated';\n")),(0,r.yg)("h2",{id:"testing"},"Testing"),(0,r.yg)("p",null,"In order to use ",(0,r.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," with Jest, you need to add the following mock implementation at the top of your test:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"jest.mock('react-native-reanimated', () =>\n  require('react-native-reanimated/mock')\n);\n")))}m.isMDXComponent=!0}}]);