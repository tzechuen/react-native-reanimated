"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4119],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>c});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(t),y=o,c=u["".concat(l,".").concat(y)]||u[y]||m[y]||r;return t?a.createElement(c,i(i({ref:n},p),{},{components:t})):a.createElement(c,i({ref:n},p))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=y;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[u]="string"==typeof e?e:o,i[1]=d;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},50821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=t(58168),o=(t(96540),t(15680));const r={id:"useAnimatedKeyboard",title:"useAnimatedKeyboard",sidebar_label:"useAnimatedKeyboard"},i=void 0,d={unversionedId:"api/hooks/useAnimatedKeyboard",id:"version-2.x/api/hooks/useAnimatedKeyboard",title:"useAnimatedKeyboard",description:"useAnimatedKeyboard is available since v2.10.0",source:"@site/versioned_docs/version-2.x/api/hooks/useAnimatedKeyboard.md",sourceDirName:"api/hooks",slug:"/api/hooks/useAnimatedKeyboard",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedKeyboard",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/hooks/useAnimatedKeyboard.md",tags:[],version:"2.x",frontMatter:{id:"useAnimatedKeyboard",title:"useAnimatedKeyboard",sidebar_label:"useAnimatedKeyboard"},sidebar:"docs",previous:{title:"useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedGestureHandler"},next:{title:"useAnimatedProps",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedProps"}},l={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>options</code> AnimatedKeyboardOptions",id:"options-animatedkeyboardoptions",level:4},{value:"Returns",id:"returns",level:3},{value:"Types",id:"types",level:3},{value:"<code>AnimatedKeyboardInfo: [object]</code>",id:"animatedkeyboardinfo-object",level:4},{value:"<code>AnimatedKeyboardOptions: [object]</code>",id:"animatedkeyboardoptions-object",level:4},{value:"Example",id:"example",level:3}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"useAnimatedKeyboard is available since v2.10.0")),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Android implementation of ",(0,o.yg)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," is an experimental feature.")),(0,o.yg)("p",null,"With the ",(0,o.yg)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," hook, you can create animations based on current keyboard position."),(0,o.yg)("p",null,"On Android, make sure to set ",(0,o.yg)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," in your ",(0,o.yg)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"adjustResize"),". Then, using the ",(0,o.yg)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," hook disables\nthe default Android behavior (resizing the view to accommodate keyboard) in the whole app. Using values from ",(0,o.yg)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," hook you can handle the keyboard yourself. Unmounting all components that use ",(0,o.yg)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," hook brings back the default Android behavior."),(0,o.yg)("h3",{id:"arguments"},"Arguments"),(0,o.yg)("h4",{id:"options-animatedkeyboardoptions"},(0,o.yg)("inlineCode",{parentName:"h4"},"options")," ","[AnimatedKeyboardOptions]"),(0,o.yg)("p",null,"Optional object containing additional configuration."),(0,o.yg)("h3",{id:"returns"},"Returns"),(0,o.yg)("p",null,"Hook ",(0,o.yg)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," returns an instance of [",(0,o.yg)("a",{parentName:"p",href:"#animatedkeyboard-object"},"AnimatedKeyboardInfo"),"];"),(0,o.yg)("h3",{id:"types"},"Types"),(0,o.yg)("h4",{id:"animatedkeyboardinfo-object"},(0,o.yg)("inlineCode",{parentName:"h4"},"AnimatedKeyboardInfo: [object]")),(0,o.yg)("p",null,"Properties:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"height"),": [",(0,o.yg)("a",{parentName:"li",href:"/docs/2.x/api/hooks/useSharedValue"},"SharedValue"),"] contains ",(0,o.yg)("inlineCode",{parentName:"li"},"[number]"),"\ncontains current height of the keyboard"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"state"),": [",(0,o.yg)("a",{parentName:"li",href:"/docs/2.x/api/hooks/useSharedValue"},"SharedValue"),"] contains ",(0,o.yg)("inlineCode",{parentName:"li"},"[enum]"),"\ncontains current state of the keyboard. Possible states: ",(0,o.yg)("inlineCode",{parentName:"li"},"{ CLOSED, OPEN, CLOSING, OPENING }"))),(0,o.yg)("h4",{id:"animatedkeyboardoptions-object"},(0,o.yg)("inlineCode",{parentName:"h4"},"AnimatedKeyboardOptions: [object]")),(0,o.yg)("p",null,"Properties:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"isStatusBarTranslucentAndroid"),"[bool]"," - if you want to use translucent status bar on Android, set this option to ",(0,o.yg)("inlineCode",{parentName:"li"},"true"),". Defaults to ",(0,o.yg)("inlineCode",{parentName:"li"},"false"),". Ignored on iOS.")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"function AnimatedKeyboardExample() {\n  const keyboard = useAnimatedKeyboard();\n  const translateStyle = useAnimatedStyle(() => {\n    return {\n      transform: [{ translateY: -keyboard.height.value }],\n    };\n  });\n\n  return (\n    <ScrollView\n      contentContainerStyle={{\n        flex: 1,\n        justifyContent: 'center',\n        alignItems: 'center',\n      }}>\n      <Animated.View style={translateStyle}>\n        <TextInput />\n      </Animated.View>\n    </ScrollView>\n  );\n}\n")))}m.isMDXComponent=!0}}]);