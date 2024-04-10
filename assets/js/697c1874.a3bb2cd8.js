"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[3944],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>h});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(58168),i=(a(96540),a(15680));const r={slug:"/",title:"About React Native Reanimated",sidebar_label:"About"},o=void 0,l={unversionedId:"about",id:"version-1.x/about",title:"About React Native Reanimated",description:"React Native's Animated library reimplemented.",source:"@site/versioned_docs/version-1.x/about.md",sourceDirName:".",slug:"/",permalink:"/react-native-reanimated/docs/1.x/",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-1.x/about.md",tags:[],version:"1.x",frontMatter:{slug:"/",title:"About React Native Reanimated",sidebar_label:"About"},sidebar:"version-1.x/docs",next:{title:"Getting started",permalink:"/react-native-reanimated/docs/1.x/getting_started"}},s={},d=[{value:"Motivation",id:"motivation",level:3},{value:"Reanimated overview",id:"reanimated-overview",level:3},{value:"At most once evaluation (the algorithm)",id:"at-most-once-evaluation-the-algorithm",level:3},{value:"100% declarative gesture interactions",id:"100-declarative-gesture-interactions",level:3}],m={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.yg)(c,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"React Native's Animated library reimplemented."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Native Performance"),": Declare your animations in JS, but have them run on the native thread! \ud83e\uddd9\u200d\u2642\ufe0f"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Precise Animations"),": The API affords new levels of precision and detailed control of your animations. \ud83d\udd79"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"(mostly) Backwards Compatible"),": Use the same Animated API from React Native that you've been using. You generally don't ",(0,i.yg)("em",{parentName:"li"},"need")," to change anything to get started. \ud83d\udc4d")),(0,i.yg)("p",null,"Reanimated provides a more comprehensive, low level abstraction for the Animated library API, giving you much greater flexibility, control and performance. Combine it with ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/kmagiera/react-native-gesture-handler"},"react-native-gesture-handler")," for performant gesture-based interactions."),(0,i.yg)("h3",{id:"motivation"},"Motivation"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Animated")," library has several limitations that become troubling when it comes to gesture based interactions.\nThis project was initially created to resolve the issue of pan interaction when the object can be dragged along the screen and when released it should snap to some place on the screen.\nThe problem was that despite using ",(0,i.yg)("inlineCode",{parentName:"p"},"Animated.event")," and mapping gesture state to the position of the box, and making this whole interaction run on UI thread with ",(0,i.yg)("inlineCode",{parentName:"p"},"useNativeDriver"),' flag, we still had to call back into JS at the end of the gesture for us to start "snap" animation.\nThis is because ',(0,i.yg)("inlineCode",{parentName:"p"},"Animated.spring({}).start()"),' cannot be used in a "declarative" manner, because when it gets executed it has a "side effect" of starting a process (an animation) that updates the value for some time.\nAdding "side effect" nodes into the current Animated implementation turned out to be a pretty difficult task as the execution model of the Animated API runs all the dependent nodes of each frame for the views that need to update.\nWe don\'t want to run "side effects" more often than necessary as it would, for example, result in the animation starting multiple times.'),(0,i.yg)("p",null,"Another inspiration to redesigning the internals of ",(0,i.yg)("inlineCode",{parentName:"p"},"Animated"),' was Krzysztof\'s work on porting "Animated Tracking" functionality to the native driver.\nApparently, even though the native driver is out for quite a while, it still does not support all the things non-native ',(0,i.yg)("inlineCode",{parentName:"p"},"Animated")," lib can do.\nObviously, it is far more difficult to build three versions of each feature (JS, Android and iOS) instead of one, and the same applies for fixing bugs.\nOne of the goals of ",(0,i.yg)("inlineCode",{parentName:"p"},"react-native-reanimated"),' was to provide a more generic building block for the API that would allow for building more complex features only in JS and make the native codebase as minimal as possible.\nTaking "diffClamp" node as an example, it is currently implemented in three different places in ',(0,i.yg)("inlineCode",{parentName:"p"},"Animated")," core and even though it is pretty useful it actually only has one use case (collapsible scrollview header)."),(0,i.yg)("p",null,"On a similar topic, there's React Native's PR ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/facebook/react-native/pull/18029"},"#18029")," and even though it provides a legitimate use case, maintainers are hesitant about merging it. The ",(0,i.yg)("inlineCode",{parentName:"p"},"Animated")," API shouldn't block people from building things like this and the goal of ",(0,i.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," is to provide lower level access that would allow for implementing that and many more features with no necessary changes to the core of the library."),(0,i.yg)("p",null,"You can watch Krzysztof Magiera's ",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kdq4z2708VM"},"React Europe talk")," where he explains the motivation."),(0,i.yg)("p",null,"The goals:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"More generic primitive node types leading to more code reuse for the library internals therefore making it easier to add new features and fix bugs."),(0,i.yg)("li",{parentName:"ul"},"The new set of base nodes can be used to implement ",(0,i.yg)("inlineCode",{parentName:"li"},"Animated")," compatible API including:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Complex nodes such as \u201cdiffClamp\u201d."),(0,i.yg)("li",{parentName:"ul"},"Interactions such as animated value tracking or animation staggering."))),(0,i.yg)("li",{parentName:"ul"},"Conditional evaluation & nodes with side effects (",(0,i.yg)("inlineCode",{parentName:"li"},"set"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"startClock"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"stopClock"),")."),(0,i.yg)("li",{parentName:"ul"},"No more \u201cuseNativeDriver\u201d \u2013 all animations runs on the UI thread by default")),(0,i.yg)("h3",{id:"reanimated-overview"},"Reanimated overview"),(0,i.yg)("p",null,"We aim to bring this project to be fully compatible with ",(0,i.yg)("inlineCode",{parentName:"p"},"Animated")," API. We believe that the set of base nodes we have selected should make this possible to be done only by writing JS code and does not require significant changes in the native codebases. Here is a list of things that haven't yet been ported from the original version of ",(0,i.yg)("inlineCode",{parentName:"p"},"Animated")," library.\nAll the functionality that missing elements provide in ",(0,i.yg)("inlineCode",{parentName:"p"},"Animated")," can already be achieved with ",(0,i.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," although a different methodology for implementing those may be required (e.g. check ",(0,i.yg)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x/declarative"},'"Declarative Animation API" section')," to see how the implementation may differ)."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"using value offsets"),(0,i.yg)("li",{parentName:"ul"},"value tracking (can be achieved in different way, ",(0,i.yg)("inlineCode",{parentName:"li"},"react-native-reanimated")," also allows for tracking all the animation parameters not only destination params)"),(0,i.yg)("li",{parentName:"ul"},"animation staggering"),(0,i.yg)("li",{parentName:"ul"},"animation delays")),(0,i.yg)("h3",{id:"at-most-once-evaluation-the-algorithm"},"At most once evaluation (the algorithm)"),(0,i.yg)("p",null,"Unlike the original ",(0,i.yg)("inlineCode",{parentName:"p"},"Animated")," library where each node could have been evaluated many times within a single frame, ",(0,i.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," restricts each node to be evaluated at most once in a frame.\nThis restriction is required for nodes that have side-effects to be used (e.g. ",(0,i.yg)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x/nodes/set"},(0,i.yg)("inlineCode",{parentName:"a"},"set"))," or ",(0,i.yg)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x/nodes/startClock"},(0,i.yg)("inlineCode",{parentName:"a"},"startClock")),").\nWhen node is evaluated (e.g. in case of an ",(0,i.yg)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x/nodes/add"},(0,i.yg)("inlineCode",{parentName:"a"},"add"))," node we want to get a sum of the input nodes) its value is cached. If within the next frame there are other nodes that want to use the output of that node instead of evaluating we return cached value.\nThis notion also helps with performance as we can try to evaluate as few nodes as expected.\nThe current algorithm for making decisions of which nodes to evaluate works as follows:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"For each frame we first analyze the generated events (e.g. touch stream). It is possible that events may update some animated values."),(0,i.yg)("li",{parentName:"ol"},"Then we update values that correspond to ",(0,i.yg)("a",{parentName:"li",href:"/react-native-reanimated/docs/1.x/clock"},"clock"),' nodes that are "running".'),(0,i.yg)("li",{parentName:"ol"},"We traverse the node's tree starting from the nodes that have been updated in the current cycle and we look for final nodes that are connected to views."),(0,i.yg)("li",{parentName:"ol"},"If we found nodes connected to view properties we evaluate them. This can recursively trigger an evaluation for their input nodes etc."),(0,i.yg)("li",{parentName:"ol"},'After everything is done we check if some "running" clocks exists. If so we enqueue a callback to be evaluated with the next frame and start over from pt 1. Otherwise we do nothing.')),(0,i.yg)("h3",{id:"100-declarative-gesture-interactions"},"100% declarative gesture interactions"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," works best with the ",(0,i.yg)("a",{parentName:"p",href:"https://kmagiera.github.io/react-native-gesture-handler"},"Gesture Handler"),"\nlibrary. Currently all the examples are made using that library, including the ultimate\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/tree/v1/Example/src/imageViewer"},"ImagePreview app"),"."))}p.isMDXComponent=!0}}]);