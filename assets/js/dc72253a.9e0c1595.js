"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2711],{19249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>R,contentTitle:()=>N,default:()=>T,frontMatter:()=>y,metadata:()=>C,toc:()=>w});var a=n(83117),r=n(67294),i=n(3905),s=n(67177),o=n(24404),l=n(14779),d=n(72862),m=n(82334),u=n(10758),c=n(6328),p=n(38404),h=n(12717),f=n(49638);const k={code:"function anonymous(){const{measure,animatedRef,runOnJS,setText}=this.__closure;const measurement=measure(animatedRef);if(measurement===null){return;}runOnJS(setText)(Math.floor(measurement.width));}"};function g(){const e=(0,m.m)(),t=(0,u.y)(100),[n,a]=r.useState(t.value);return r.createElement(s.Z,{style:b.container},r.createElement(f.n,{ref:e,style:{...b.box,width:t}}),r.createElement(o.Z,{style:b.label},"width: ",n),r.createElement(l.Z,{onPress:()=>{t.value=(0,c.j)(t.value+50,{},function(){const t=function(){const t=(0,p.L8)(e);null!==t&&(0,h.tC)(a)(Math.floor(t.width))};return t.__closure={measure:p.L8,animatedRef:e,runOnJS:h.tC,setText:a},t.__initData=k,t.__workletHash=3140290373826,t}())},title:"Click me"}))}const b=d.Z.create({container:{flex:1,alignItems:"center"},box:{height:100,backgroundColor:"#b58df1",borderRadius:20},label:{fontSize:24,marginVertical:16,color:"#b58df1"}}),v="import React from 'react';\nimport { Button, StyleSheet, View, Text } from 'react-native';\nimport Animated, {\n  measure,\n  runOnJS,\n  useAnimatedRef,\n  useSharedValue,\n  withTiming,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const animatedRef = useAnimatedRef();\n  const width = useSharedValue(100);\n  const [text, setText] = React.useState(width.value);\n\n  const handlePress = () => {\n    width.value = withTiming(width.value + 50, {}, () => {\n      // highlight-next-line\n      const measurement = measure(animatedRef);\n      if (measurement === null) {\n        return;\n      }\n\n      runOnJS(setText)(Math.floor(measurement.width));\n    });\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View ref={animatedRef} style={{ ...styles.box, width }} />\n      <Text style={styles.label}>width: {text}</Text>\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n  },\n  label: {\n    fontSize: 24,\n    marginVertical: 16,\n    color: '#b58df1',\n  },\n});\n",y={sidebar_position:1},N="measure",C={unversionedId:"advanced/measure",id:"advanced/measure",title:"measure",description:"measure lets you synchronously get the dimensions and position of a view on the screen, all on the UI thread.",source:"@site/docs/advanced/measure.mdx",sourceDirName:"advanced",slug:"/advanced/measure",permalink:"/react-native-reanimated/docs/advanced/measure",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/advanced/measure.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced APIs",permalink:"/react-native-reanimated/docs/category/advanced-apis"},next:{title:"useAnimatedReaction",permalink:"/react-native-reanimated/docs/advanced/useAnimatedReaction"}},R={},w=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>animatedRef</code>",id:"animatedref",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],x=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},S=x("InteractiveExample"),P=x("Indent"),I={toc:w},A="wrapper";function T(e){let{components:t,...n}=e;return(0,i.kt)(A,(0,a.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"measure"},"measure"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"measure")," lets you synchronously get the dimensions and position of a view on the screen, all on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),"."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { measure } from 'react-native-reanimated';\n\nfunction App() {\n  const animatedRef = useAnimatedRef();\n\n  const handlePress = () => {\n    runOnUI(() => {\n      // highlight-next-line\n      const measurement = measure(animatedRef);\n      if (measurement === null) {\n        return;\n      }\n      // ...\n    })();\n  };\n\n  return <Animated.View ref={animatedRef} />;\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MeasuredDimensions {\n  x: number;\n  y: number;\n  width: number;\n  height: number;\n  pageX: number;\n  pageY: number;\n}\n\nfunction measure<T extends Component>(\n  animatedRef: AnimatedRef<T>\n): MeasuredDimensions | null;\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"animatedref"},(0,i.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedRef#returns"},"animated ref")," connected to the component you'd want to get the measurements from. The animated ref has to be passed either to an ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component")," or a React Native built-in component."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"measure")," returns an object containing these fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," a number representing X coordinate relative to the parent component,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," a number representing Y coordinate relative to the parent component,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")," a number representing the width of the component,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height")," a number representing the height of the component,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageX")," a number representing X coordinate relative to the screen,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageY")," a number representing Y coordinate relative to the screen,")),(0,i.kt)("p",null,"or returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," when the measurement couldn't be performed."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(S,{src:v,component:(0,i.kt)(g,{mdxType:"MeasureBasic"}),mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"measure")," is implemented only on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". When using ",(0,i.kt)("inlineCode",{parentName:"p"},"measure")," inside ",(0,i.kt)("a",{parentName:"p",href:"https://react.dev/learn/responding-to-events#adding-event-handlers"},"event handlers"),", it has to be wrapped with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/threading/runOnUI"},(0,i.kt)("inlineCode",{parentName:"a"},"runOnUI"))," function.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," function is first evaluated on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread")," just before the views are attached to the native side. For this reason, to safely use the measure within ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle"),", a condition similar to the one below must be added to the code:"))),(0,i.kt)(P,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const animatedStyles = useAnimatedStyle(() => {\n    // highlight-next-line\n    if (_WORKLET) {\n      // safely use measure\n      const measurement = measure(animatedRef);\n    }\n  });\n}\n")),(0,i.kt)("p",null,"Consecutive runs of ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are executed on the UI thread.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When you only need the dimensions of the component and won't use the measurements during animation, consider using the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#onlayout"},(0,i.kt)("inlineCode",{parentName:"a"},"onLayout"))," property instead.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sometimes, ",(0,i.kt)("inlineCode",{parentName:"p"},"measure")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," (e.g., when the ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," hasn't yet attached to the view). It's best to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," check after the measurement for added safety."))),(0,i.kt)(P,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const animatedRef = useAnimatedRef();\n\nconst handlePress = () => {\n  runOnUI(() => {\n    const measurement = measure(animatedRef);\n\n    // highlight-start\n    if (measurement === null) {\n      return;\n    }\n    // highlight-end\n    // ...\n  })();\n};\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"measure")," can be used only on rendered components. For instance, attempting to ",(0,i.kt)("inlineCode",{parentName:"p"},"measure")," off-screen items in a ",(0,i.kt)("inlineCode",{parentName:"p"},"FlatList")," will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"measure")," isn't available with the Remote JS Debugger. We highly recommend using Chrome DevTools (also known as ",(0,i.kt)("inlineCode",{parentName:"p"},"chrome://inspect"),") for debugging React Native apps."))),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.kt)("div",{className:"platform-compatibility"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Web"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}T.isMDXComponent=!0},49638:(e,t,n)=>{n.d(t,{n:()=>i});var a=n(67177),r=n(69789);n(67294);const i=(0,r.F)(a.Z)},82334:(e,t,n)=>{n.d(t,{m:()=>m});var a=n(67294),r=n(10758),i=n(7737),s=n(86425),o=n(82747),l=n(22805);const d=n.g._IS_FABRIC?i.b:o.Z;function m(){const e=(0,r.y)(-1),t=(0,r.y)(null),i=(0,a.useRef)();if(!i.current){const a=r=>{var i;r&&(e.value=d(function(e){return n.g._IS_FABRIC&&e.getNativeScrollRef?e.getNativeScrollRef():!n.g._IS_FABRIC&&e.getScrollableNode?e.getScrollableNode():e}(r)),a.current=r,"ios"!==l.Z.OS||n.g._IS_FABRIC||(t.value=(null==r||null===(i=r.viewConfig)||void 0===i?void 0:i.uiViewClassName)||"RCTView"));return e.value};a.current=null;const r=(0,s.wH)({__init:()=>{const n=()=>e.value;return n.viewName=t,n}});(0,s.K_)(a,r),i.current=a}return i.current}},14779:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(67294),r=n(72862),i=n(83117),s=n(80102),o=n(16528),l=n(94119),d=n(67177),m=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function u(e,t){var n=e.activeOpacity,r=e.delayPressIn,u=e.delayPressOut,p=e.delayLongPress,h=e.disabled,f=e.focusable,k=e.onLongPress,g=e.onPress,b=e.onPressIn,v=e.onPressOut,y=e.rejectResponderTermination,N=e.style,C=(0,s.Z)(e,m),R=(0,a.useRef)(null),w=(0,o.Z)(t,R),x=(0,a.useState)("0s"),S=x[0],P=x[1],I=(0,a.useState)(null),A=I[0],T=I[1],_=(0,a.useCallback)(((e,t)=>{T(e),P(t?t/1e3+"s":"0s")}),[T,P]),O=(0,a.useCallback)((e=>{_(null!=n?n:.2,e)}),[n,_]),D=(0,a.useCallback)((e=>{_(null,e)}),[_]),Z=(0,a.useMemo)((()=>({cancelable:!y,disabled:h,delayLongPress:p,delayPressStart:r,delayPressEnd:u,onLongPress:k,onPress:g,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;O(t?0:150),null!=b&&b(e)},onPressEnd(e){D(250),null!=v&&v(e)}})),[p,r,u,h,k,g,b,v,y,O,D]),E=(0,l.Z)(R,Z);return a.createElement(d.Z,(0,i.Z)({},C,E,{accessibilityDisabled:h,focusable:!h&&!1!==f,pointerEvents:h?"none":void 0,ref:w,style:[c.root,!h&&c.actionable,N,null!=A&&{opacity:A},{transitionDuration:S}]}))}var c=r.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=a.memo(a.forwardRef(u));p.displayName="TouchableOpacity";const h=p;var f=n(24404),k=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,i=e.disabled,s=e.onPress,o=e.testID,l=e.title;return a.createElement(h,{accessibilityLabel:n,accessibilityRole:"button",disabled:i,focusable:!i,onPress:s,ref:t,style:[g.button,r&&{backgroundColor:r},i&&g.buttonDisabled],testID:o},a.createElement(f.Z,{style:[g.text,i&&g.textDisabled]},l))}));k.displayName="Button";var g=r.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const b=k}}]);