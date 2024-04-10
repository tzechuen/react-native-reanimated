"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[416],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),v=a,h=u["".concat(s,".").concat(v)]||u[v]||p[v]||o;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=v;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},97597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(58168),a=(t(96540),t(15680));const o={id:"useEvent",title:"useEvent",sidebar_label:"useEvent"},l=void 0,i={unversionedId:"api/hooks/useEvent",id:"version-2.x/api/hooks/useEvent",title:"useEvent",description:"This is low-level hook returning event handler that will be invoked with native events, which should be used in order to create custom event handler hook like useAnimatedGestureHandler or useAnimatedScrollHandler.",source:"@site/versioned_docs/version-2.x/api/hooks/useEvent.md",sourceDirName:"api/hooks",slug:"/api/hooks/useEvent",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useEvent",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/hooks/useEvent.md",tags:[],version:"2.x",frontMatter:{id:"useEvent",title:"useEvent",sidebar_label:"useEvent"},sidebar:"docs",previous:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useDerivedValue"},next:{title:"useFrameCallback",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useFrameCallback"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>handler</code> function",id:"handler-function",level:4},{value:"<code>eventNames</code> Array",id:"eventnames-array",level:4},{value:"<code>rebuilt</code> boolean",id:"rebuilt-boolean",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This is low-level hook returning event handler that will be invoked with native events, which should be used in order to create custom event handler hook like ",(0,a.yg)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"useAnimatedScrollHandler"),"."),(0,a.yg)("h3",{id:"arguments"},"Arguments"),(0,a.yg)("h4",{id:"handler-function"},(0,a.yg)("inlineCode",{parentName:"h4"},"handler")," ","[function]"),(0,a.yg)("p",null,"Handler will receive event object with native payload, that can be passed to custom handler hook's worklets."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"event")," ","[object]"," - event object.\nThe payload can differ depending on the type of the event.")),(0,a.yg)("h4",{id:"eventnames-array"},(0,a.yg)("inlineCode",{parentName:"h4"},"eventNames")," ","[Array]"),(0,a.yg)("p",null,"Array of event names that will be handled by handler."),(0,a.yg)("h4",{id:"rebuilt-boolean"},(0,a.yg)("inlineCode",{parentName:"h4"},"rebuilt")," ","[boolean]"),(0,a.yg)("p",null,"Value indicating whether handler should be rebuilt."),(0,a.yg)("h3",{id:"returns"},"Returns"),(0,a.yg)("p",null,"The hook returns event handler that will be invoked when native event is dispatched."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"function useAnimatedPagerScrollHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      'worklet';\n      const { onPageScroll } = handlers;\n\n      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {\n        onPageScroll(event, context);\n      }\n    },\n    ['onPageScroll'],\n    doDependenciesDiffer,\n  );\n")))}p.isMDXComponent=!0}}]);