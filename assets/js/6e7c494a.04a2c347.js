"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2754],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,y=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(58168),i=(a(96540),a(15680));const r={id:"withDelay",title:"withDelay",sidebar_label:"withDelay"},o=void 0,l={unversionedId:"api/animations/withDelay",id:"version-2.x/api/animations/withDelay",title:"withDelay",description:"Allows for the provided animation to start with a specified delay.",source:"@site/versioned_docs/version-2.x/api/animations/withDelay.md",sourceDirName:"api/animations",slug:"/api/animations/withDelay",permalink:"/react-native-reanimated/docs/2.x/api/animations/withDelay",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/animations/withDelay.md",tags:[],version:"2.x",frontMatter:{id:"withDelay",title:"withDelay",sidebar_label:"withDelay"},sidebar:"docs",previous:{title:"withDecay",permalink:"/react-native-reanimated/docs/2.x/api/animations/withDecay"},next:{title:"withRepeat",permalink:"/react-native-reanimated/docs/2.x/api/animations/withRepeat"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>delayMS</code> number",id:"delayms-number",level:4},{value:"<code>delayedAnimation</code> animation",id:"delayedanimation-animation",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Allows for the provided animation to start with a specified delay."),(0,i.yg)("p",null,"In case the value for which we are starting the delayed animation is running a previous animation, that animation won't be cancelled until the new animation starts after the delay.\nIf you want the animation to cancel immediately, use the ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.x/api/animations/cancelAnimation"},(0,i.yg)("inlineCode",{parentName:"a"},"cancelAnimation"))," method."),(0,i.yg)("h3",{id:"arguments"},"Arguments"),(0,i.yg)("h4",{id:"delayms-number"},(0,i.yg)("inlineCode",{parentName:"h4"},"delayMS")," ","[number]"),(0,i.yg)("p",null,"Delay in milliseconds after which we want the provided animation to start."),(0,i.yg)("h4",{id:"delayedanimation-animation"},(0,i.yg)("inlineCode",{parentName:"h4"},"delayedAnimation")," ","[animation]"),(0,i.yg)("p",null,"The animation that will be started after the delay."),(0,i.yg)("h3",{id:"returns"},"Returns"),(0,i.yg)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.x/api/hooks/useAnimatedStyle"},(0,i.yg)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"The timing animation will start on the ",(0,i.yg)("inlineCode",{parentName:"p"},"sharedValue")," after one second."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"sharedValue.value = withDelay(1000, withTiming(70));\n")))}p.isMDXComponent=!0}}]);