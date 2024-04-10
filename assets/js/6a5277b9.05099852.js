"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7700],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>c});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),y=l(t),u=i,c=y["".concat(s,".").concat(u)]||y[u]||p[u]||o;return t?a.createElement(c,r(r({ref:n},d),{},{components:t})):a.createElement(c,r({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m[y]="string"==typeof e?e:i,r[1]=m;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var a=t(58168),i=(t(96540),t(15680));const o={id:"keyframeAnimations",title:"Keyframe Animations",sidebar_label:"Keyframe Animations"},r=void 0,m={unversionedId:"api/LayoutAnimations/keyframeAnimations",id:"version-2.x/api/LayoutAnimations/keyframeAnimations",title:"Keyframe Animations",description:"Layout Animations are available since v2.3.0",source:"@site/versioned_docs/version-2.x/api/LayoutAnimations/KeyframeAnimations.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/keyframeAnimations",permalink:"/react-native-reanimated/docs/2.x/api/LayoutAnimations/keyframeAnimations",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/LayoutAnimations/KeyframeAnimations.md",tags:[],version:"2.x",frontMatter:{id:"keyframeAnimations",title:"Keyframe Animations",sidebar_label:"Keyframe Animations"},sidebar:"docs",previous:{title:"Exiting Animations",permalink:"/react-native-reanimated/docs/2.x/api/LayoutAnimations/exitAnimations"},next:{title:"Layout Transitions",permalink:"/react-native-reanimated/docs/2.x/api/LayoutAnimations/layoutTransitions"}},s={},l=[{value:"How to define Keyframe animation?",id:"how-to-define-keyframe-animation",level:2},{value:"1. Import Keyframe",id:"1-import-keyframe",level:3},{value:"2. Create Keyframe object, define initial and final state",id:"2-create-keyframe-object-define-initial-and-final-state",level:3},{value:"3. Add middle points",id:"3-add-middle-points",level:3},{value:"4. Customize transitions using an easing function",id:"4-customize-transitions-using-an-easing-function",level:3},{value:"How to use keyframe animations?",id:"how-to-use-keyframe-animations",level:2},{value:"1. Choose Animated Component which entering or exiting you want to animate",id:"1-choose-animated-component-which-entering-or-exiting-you-want-to-animate",level:3},{value:"2. Customize the animation",id:"2-customize-the-animation",level:3},{value:"Available modifiers",id:"available-modifiers",level:2},{value:"duration",id:"duration",level:3},{value:"delay",id:"delay",level:3},{value:"withCallback",id:"withcallback",level:3},{value:"Example",id:"example",level:2}],d={toc:l},y="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(y,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Layout Animations are available since v2.3.0")),(0,i.yg)("p",null,"The document explains how you can define complex animation using simple and popular animation definitions schema - Keyframes."),(0,i.yg)("h2",{id:"how-to-define-keyframe-animation"},"How to define Keyframe animation?"),(0,i.yg)("h3",{id:"1-import-keyframe"},"1. Import Keyframe"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { Keyframe } from 'react-native-reanimated';\n")),(0,i.yg)("h3",{id:"2-create-keyframe-object-define-initial-and-final-state"},"2. Create Keyframe object, define initial and final state"),(0,i.yg)("p",null,"In Keyframe's constructor pass object with definitions of your animation. Object keys should be within range ",(0,i.yg)("inlineCode",{parentName:"p"},"0-100")," and correspond to animation progress,\nso to ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," assign the style, you want for your object at the beginning of the animation and to ",(0,i.yg)("inlineCode",{parentName:"p"},"100")," assign the style you want for your object to have at the end of the animation."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { Keyframe } from 'react-native-reanimated';\n\nconst keyframe = new Keyframe({\n  0: {\n    transform: [{ rotate: '0deg' }],\n  },\n  100: {\n    transform: [{ rotate: '45deg' }],\n  },\n});\n")),(0,i.yg)("p",null,"Instead of using ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"100"),", you can define edge points using ",(0,i.yg)("inlineCode",{parentName:"p"},"from")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"to")," keywords. The result will be the same."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { Keyframe } from 'react-native-reanimated';\n\nconst keyframe = new Keyframe({\n  from: {\n    transform: [{ rotate: '0deg' }],\n  },\n  to: {\n    transform: [{ rotate: '45deg' }],\n  },\n});\n")),(0,i.yg)("p",null,"Providing keyframe ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"from")," is required as it contains the initial state of the object you want to animate.\nMake sure you provided the initial value for all style properties you want to animate in other keyframes.\nRemember not to provide both ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"from"),", or ",(0,i.yg)("inlineCode",{parentName:"p"},"100")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"to")," keyframe as it will result in parsing conflict."),(0,i.yg)("h3",{id:"3-add-middle-points"},"3. Add middle points"),(0,i.yg)("p",null,"Between edge points, you can define middle points in which you want your object to have certain style properties.\nRemember that you can specify style only for those properties that you set the initial value in ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"from")," keyframe.\nIf you want to animate transform style, make sure that all properties in the transformation array are in the same order in all keyframes."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { Keyframe } from 'react-native-reanimated';\n\nconst keyframe = new Keyframe({\n  0: {\n    transform: [{ rotate: '0deg' }],\n  },\n  45: {\n    transform: [{ rotate: '100deg' }],\n  },\n  100: {\n    transform: [{ rotate: '45deg' }],\n  },\n});\n")),(0,i.yg)("h3",{id:"4-customize-transitions-using-an-easing-function"},"4. Customize transitions using an easing function"),(0,i.yg)("p",null,"If easing property is not provided, it defaults to linear easing function."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { Keyframe, Easing } from 'react-native-reanimated';\n\nconst keyframe = new Keyframe({\n  0: {\n    transform: [{ rotate: '0deg' }],\n  },\n  45: {\n    transform: [{ rotate: '100deg' }],\n    easing: Easing.exp,\n  },\n  100: {\n    transform: [{ rotate: '45deg' }],\n  },\n});\n")),(0,i.yg)("h2",{id:"how-to-use-keyframe-animations"},"How to use keyframe animations?"),(0,i.yg)("p",null,"Currently, you can define animations using keyframes only for entry and exit animations."),(0,i.yg)("h3",{id:"1-choose-animated-component-which-entering-or-exiting-you-want-to-animate"},"1. Choose Animated Component which entering or exiting you want to animate"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"// AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n// keyframe - Keyframe object\n<AnimatedComponent exiting={keyframe} />\n")),(0,i.yg)("h3",{id:"2-customize-the-animation"},"2. Customize the animation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"<AnimatedComponent exiting={keyframe.duration(3000).delay(200)} />\n")),(0,i.yg)("h2",{id:"available-modifiers"},"Available modifiers"),(0,i.yg)("p",null,"The order of modifiers doesn't matter."),(0,i.yg)("h3",{id:"duration"},"duration"),(0,i.yg)("p",null,"default: 500\nHow long the animation should last."),(0,i.yg)("h3",{id:"delay"},"delay"),(0,i.yg)("p",null,"default: 0\nAllows to start with a specified delay."),(0,i.yg)("h3",{id:"withcallback"},"withCallback"),(0,i.yg)("p",null,"Allows to execute code when keyframe animation ends."),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"export function KeyframeAnimation() {\n  const [show, setShow] = useState(false);\n\n  const enteringAnimation = new Keyframe({\n    0: {\n      originX: 50,\n      transform: [{ rotate: '45deg' }],\n    },\n    30: {\n      originX: 10,\n      transform: [{ rotate: '-90deg' }],\n    },\n    100: {\n      originX: 0,\n      transform: [{ rotate: '0deg' }],\n      easing: Easing.quad,\n    },\n  }).duration(2000);\n\n  const exitingAnimation = new Keyframe({\n    0: {\n      opacity: 1,\n      transform: [{ skewX: '0deg' }],\n    },\n    30: {\n      opacity: 0.5,\n      transform: [{ skewX: '40deg' }],\n      easing: Easing.exp,\n    },\n    100: {\n      opacity: 0,\n      transform: [{ skewX: '-10deg' }],\n    },\n  }).duration(2000);\n\n  return (\n    <View style={{ flexDirection: 'column-reverse' }}>\n      <Button\n        title=\"animate\"\n        onPress={() => {\n          setShow((last) => !last);\n        }}\n      />\n      <View\n        style={{ height: 400, alignItems: 'center', justifyContent: 'center' }}>\n        {show && (\n          <Animated.View\n            entering={enteringAnimation}\n            exiting={exitingAnimation}\n            style={{\n              height: 100,\n              width: 200,\n              backgroundColor: 'blue',\n              alignItems: 'center',\n              justifyContent: 'center',\n            }}\n          />\n        )}\n      </View>\n    </View>\n  );\n}\n")),(0,i.yg)("video",{src:"https://user-images.githubusercontent.com/48885911/125463255-04502655-3147-4d15-ae5b-f327666eadff.mov",controls:"controls",muted:"muted"}))}p.isMDXComponent=!0}}]);