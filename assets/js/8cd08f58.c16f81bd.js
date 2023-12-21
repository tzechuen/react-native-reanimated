"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6819],{45062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>S,default:()=>C,frontMatter:()=>k,metadata:()=>R,toc:()=>b});var r=t(83117),a=t(67294),o=t(3905),l=t(24404),i=t(67177),s=t(72862),d=t(82334),u=t(12717),c=t(26503);const p={code:"function anonymous(){const{measure,animatedRef,runOnJS,onPress}=this.__closure;const measurements=measure(animatedRef);runOnJS(onPress)(measurements);}"};function m(e){const{children:n,onPress:t}=e,r=(0,d.m)();return a.createElement(l.Z,{style:f.title,onPress:()=>{(0,u.m_)(function(){const e=function(){const e=(0,c.L)(r);(0,u.tC)(t)(e)};return e.__closure={measure:c.L,animatedRef:r,runOnJS:u.tC,onPress:t},e.__initData=p,e.__workletHash=0xebf29c746b8,e}())()},ref:r},n)}function h(){const[e,n]=a.useState(0),t=e=>{n(Math.floor(e.width))};return a.createElement(i.Z,{style:f.container},["React","Native","Reanimated"].map((e=>a.createElement(m,{key:e,onPress:t},e))),a.createElement(l.Z,{style:f.label},"width: ",e))}const f=s.Z.create({container:{flex:1,alignItems:"center"},box:{height:100,width:100,backgroundColor:"#b58df1",borderRadius:20,marginVertical:64,alignSelf:"center"},title:{fontSize:42,textAlign:"center",fontWeight:"bold",marginRight:8},label:{fontSize:24,marginVertical:16,color:"#b58df1"}}),g="import React from 'react';\nimport { View, StyleSheet, Text } from 'react-native';\nimport {\n  runOnJS,\n  measure,\n  useAnimatedRef,\n  runOnUI,\n} from 'react-native-reanimated';\n\nfunction MeasurableText(props) {\n  const { children, onPress } = props;\n  const animatedRef = useAnimatedRef();\n\n  const handleMeasure = () => {\n    // highlight-next-line\n    runOnUI(() => {\n      const measurements = measure(animatedRef);\n      runOnJS(onPress)(measurements);\n      // highlight-next-line\n    })();\n  };\n\n  return (\n    <Text style={styles.title} onPress={handleMeasure} ref={animatedRef}>\n      {children}\n    </Text>\n  );\n}\n\nexport default function App() {\n  const [text, setText] = React.useState(0);\n\n  const handlePress = (measurements) => {\n    setText(Math.floor(measurements.width));\n  };\n\n  return (\n    <View style={styles.container}>\n      {['React', 'Native', 'Reanimated'].map((word) => (\n        <MeasurableText key={word} onPress={handlePress}>\n          {word}\n        </MeasurableText>\n      ))}\n      <Text style={styles.label}>width: {text}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    width: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 64,\n    alignSelf: 'center',\n  },\n  title: {\n    fontSize: 42,\n    textAlign: 'center',\n    fontWeight: 'bold',\n    marginRight: 8,\n  },\n  label: {\n    fontSize: 24,\n    marginVertical: 16,\n    color: '#b58df1',\n  },\n});\n",k={sidebar_position:2},S="runOnUI",R={unversionedId:"threading/runOnUI",id:"threading/runOnUI",title:"runOnUI",description:"runOnUI lets you asynchronously run workletized functions on the UI thread.",source:"@site/docs/threading/runOnUI.mdx",sourceDirName:"threading",slug:"/threading/runOnUI",permalink:"/react-native-reanimated/docs/threading/runOnUI",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/threading/runOnUI.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"runOnJS",permalink:"/react-native-reanimated/docs/threading/runOnJS"},next:{title:"createWorkletRuntime",permalink:"/react-native-reanimated/docs/threading/createWorkletRuntime"}},v={},b=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"fn",id:"fn",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],y=(w="InteractiveExample",function(e){return console.warn("Component "+w+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var w;const x={toc:b},N="wrapper";function C(e){let{components:n,...t}=e;return(0,o.kt)(N,(0,r.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runonui"},"runOnUI"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI")," lets you asynchronously run ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," functions on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),"."),(0,o.kt)("p",null,"Most commonly used either with an ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," to start an animation on component mount/unmount or with ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/measure"},(0,o.kt)("inlineCode",{parentName:"a"},"measure"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/scroll/scrollTo"},(0,o.kt)("inlineCode",{parentName:"a"},"scrollTo"))," functions which have implementations only on the UI thread."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { runOnUI } from 'react-native-reanimated';\n\nfunction App() {\n  // E.g. in event handler or in an effect\n  // highlight-next-line\n  runOnUI((greeting) => {\n    console.log(`${greeting} from the UI thread`);\n    // highlight-next-line\n  })('Howdy');\n\n  // ...\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Type definitions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function runOnUI<A extends any[], R>(\n  fn: (...args: A) => R\n): (...args: Parameters<typeof fn>) => void;\n"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"fn"},"fn"),(0,o.kt)("p",null,"A reference to a function you want to execute on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread")," from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread"),". Arguments to your function have to be passed to the function returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI")," i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI(myWorklet)(10);"),"."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI")," returns a function that accepts arguments for the function passed as the first argument."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Don't forget to call the function returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI"),".")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(y,{src:g,component:(0,o.kt)(h,{mdxType:"RunOnUI"}),label:"Tap each word",mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When implementing your animations you should first reach for more general solutions such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/useDerivedValue"},(0,o.kt)("inlineCode",{parentName:"a"},"useDerivedValue")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/useAnimatedReaction"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedReaction"))," or running code in gesture callbacks and only use ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI")," after you've tried other methods.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It's a common mistake to execute function inside of runOnUI like this: ",(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"runOnUI(myWorklet(10))()")),". Here, the correct usage would be ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI(myWorklet)(10)"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The callback passed as the argument is automatically ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," and ready to be run on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure not to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI")," on the UI thread as this will result in an error."))),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.kt)("div",{className:"platform-compatibility"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Android"),(0,o.kt)("th",{parentName:"tr",align:null},"iOS"),(0,o.kt)("th",{parentName:"tr",align:null},"Web"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}C.isMDXComponent=!0},82334:(e,n,t)=>{t.d(n,{m:()=>c});var r=t(67294),a=t(10758),o=t(7737),l=t(86425),i=t(82747),s=t(22805);const d=(0,t(83442).aw)();const u=d?o.b:i.Z;function c(){const e=(0,a.y)(-1),n=(0,a.y)(null),t=(0,r.useRef)();if(!t.current){const r=t=>{var a;t&&(e.value=u(function(e){return d&&e.getNativeScrollRef?e.getNativeScrollRef():!d&&e.getScrollableNode?e.getScrollableNode():e}(t)),r.current=t,"ios"!==s.Z.OS||d||(n.value=(null==t||null===(a=t.viewConfig)||void 0===a?void 0:a.uiViewClassName)||"RCTView"));return e.value};r.current=null;const a=(0,l.wH)({__init:()=>{const t=()=>e.value;return t.viewName=n,t}});(0,l.K_)(r,a),t.current=r}return t.current}},26503:(e,n,t)=>{function r(e){const n=e();if(-1===n)return console.warn(`[Reanimated] The view with tag ${n} is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).`),null;const t=n.getBoundingClientRect();return{width:n.offsetWidth,height:n.offsetHeight,x:n.offsetLeft,y:n.offsetTop,pageX:t.left,pageY:t.top}}t.d(n,{L:()=>r})},24404:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(3058),a=t(80102),o=t(67294),l=t(37353),i=t(13250),s=t(45819),d=t(30042),u=t(16528),c=t(60091),p=t(72359),m=t(72862),h=t(84370),f=t(72931),g=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],k=Object.assign({},i.lG,i.LO,i._T,i.YB,i.Uy,i.hJ,i.E5,i.vr,{href:!0,lang:!0,pointerEvents:!0}),S=o.forwardRef(((e,n)=>{var t=e.hrefAttrs,r=e.numberOfLines,i=e.onClick,m=e.onLayout,S=e.onPress,R=e.onMoveShouldSetResponder,b=e.onMoveShouldSetResponderCapture,y=e.onResponderEnd,w=e.onResponderGrant,x=e.onResponderMove,N=e.onResponderReject,C=e.onResponderRelease,O=e.onResponderStart,I=e.onResponderTerminate,U=e.onResponderTerminationRequest,T=e.onScrollShouldSetResponder,M=e.onScrollShouldSetResponderCapture,_=e.onSelectionChangeShouldSetResponder,P=e.onSelectionChangeShouldSetResponderCapture,A=e.onStartShouldSetResponder,Z=e.onStartShouldSetResponderCapture,E=e.selectable,L=(0,a.Z)(e,g),W=o.useContext(h.Z),V=o.useRef(null),z=(0,f.PE)().direction;(0,d.Z)(V,m),(0,p.Z)(V,{onMoveShouldSetResponder:R,onMoveShouldSetResponderCapture:b,onResponderEnd:y,onResponderGrant:w,onResponderMove:x,onResponderReject:N,onResponderRelease:C,onResponderStart:O,onResponderTerminate:I,onResponderTerminationRequest:U,onScrollShouldSetResponder:T,onScrollShouldSetResponderCapture:M,onSelectionChangeShouldSetResponder:_,onSelectionChangeShouldSetResponderCapture:P,onStartShouldSetResponder:A,onStartShouldSetResponderCapture:Z});var D=o.useCallback((e=>{null!=i?i(e):null!=S&&(e.stopPropagation(),S(e))}),[i,S]),J=W?"span":"div",H=null!=e.lang?(0,f.w1)(e.lang):null,j=e.dir||H,$=j||z,G=(e=>(0,s.Z)(e,k))(L);if(G.dir=j,W||(G.dir=null!=j?j:"auto"),(i||S)&&(G.onClick=D),G.style=[null!=r&&r>1&&{WebkitLineClamp:r},!0===W?v.textHasAncestor$raw:v.text$raw,1===r&&v.textOneLine,null!=r&&r>1&&v.textMultiLine,e.style,!0===E&&v.selectable,!1===E&&v.notSelectable,S&&v.pressable],null!=e.href&&(J="a",null!=t)){var X=t.download,q=t.rel,B=t.target;null!=X&&(G.download=X),null!=q&&(G.rel=q),"string"==typeof B&&(G.target="_"!==B.charAt(0)?"_"+B:B)}var Y=(0,c.Z)(G),F=(0,u.Z)(V,Y,n);G.ref=F;var K=(0,l.Z)(J,G,{writingDirection:$});return W?K:o.createElement(h.Z.Provider,{value:!0},K)}));S.displayName="Text";var R={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,textAlign:"inherit",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},v=m.Z.create({text$raw:R,textHasAncestor$raw:(0,r.Z)((0,r.Z)({},R),{},{color:"inherit",font:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const b=S}}]);