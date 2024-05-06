"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2309],{83760:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(67294);function r(e){let{sources:t}=e;return o.createElement("div",{style:{flexDirection:"row",justifyContent:"space-between",marginBottom:"16px",display:"flex"}},o.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},o.createElement("source",{src:t.android,type:"video/mp4"}),"Your browser does not support the video tag."),o.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},o.createElement("source",{src:t.ios,type:"video/mp4"}),"Your browser does not support the video tag."))}},11192:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(67294),r=n(67177),a=n(76636),i=n(72400),s=n(28033),c=n(10758),l=n(56389),u=n(6328),d=n(35842),m=n(49638);const p={code:"function anonymous(){const{withTiming,height,isExpanded,duration}=this.__closure;return withTiming(height.value*Number(isExpanded.value),{duration:duration});}"},f={code:"function anonymous(){const{derivedHeight}=this.__closure;return{height:derivedHeight.value};}"};function h(e){let{isExpanded:t,children:n,viewKey:a,style:i,duration:s=500}=e;const h=(0,c.y)(0),y=(0,l.o)(function(){const e=()=>(0,u.j)(h.value*Number(t.value),{duration:s});return e.__closure={withTiming:u.j,height:h,isExpanded:t,duration:s},e.__workletHash=9057268518231,e.__initData=p,e}()),g=(0,d.l)(function(){const e=()=>({height:y.value});return e.__closure={derivedHeight:y},e.__workletHash=0xcf6d94e687a,e.__initData=f,e}());return o.createElement(m.n,{key:`accordionItem_${a}`,style:[w.animatedView,g,i]},o.createElement(r.Z,{onLayout:e=>{h.value=e.nativeEvent.layout.height},style:w.wrapper},n))}function y(){return o.createElement(r.Z,{style:w.box})}function g(e){let{open:t}=e;return o.createElement(r.Z,{style:w.parent},o.createElement(h,{isExpanded:t,viewKey:"Accordion"},o.createElement(y,null)))}function v(){const e=(0,c.y)(!1);return o.createElement(a.Z,{style:w.container},o.createElement(r.Z,{style:w.buttonContainer},o.createElement(i.Z,{onPress:()=>{e.value=!e.value},title:"Click me"})),o.createElement(r.Z,{style:w.content},o.createElement(g,{open:e})))}const w=s.Z.create({container:{flex:1,justifyContent:"center",paddingTop:24},buttonContainer:{flex:1,paddingBottom:"1rem",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},content:{flex:1,justifyContent:"center",alignItems:"center"},parent:{width:200},wrapper:{width:"100%",position:"absolute",display:"flex",alignItems:"center"},animatedView:{width:"100%",overflow:"hidden"},box:{height:120,width:120,color:"#f8f9ff",backgroundColor:"#b58df1",borderRadius:20,alignItems:"center",justifyContent:"center"}})},14151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var o=n(87462),r=(n(67294),n(3905)),a=n(11192),i=n(91969),s=n(83760);const c={slug:"accordion",title:"Accordion"},l=void 0,u={permalink:"/react-native-reanimated/examples/accordion",source:"@site/blog/accordion.md",title:"Accordion",description:'An accordion allows to show and hide a piece of content with a smooth animation. Commonly used in "FAQ" sections.',date:"2024-05-06T12:06:32.000Z",formattedDate:"May 6, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"accordion",title:"Accordion"},nextItem:{title:"Bottom Sheet",permalink:"/react-native-reanimated/examples/bottomsheet"}},d={authorsImageUrls:[]},m=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},f=p("InteractiveExample"),h=p("CollapsibleCode"),y={toc:m},g="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'An accordion allows to show and hide a piece of content with a smooth animation. Commonly used in "FAQ" sections.'),(0,r.kt)(f,{src:i.Z,component:(0,r.kt)(a.Z,{mdxType:"Accordion"}),mdxType:"InteractiveExample"}),(0,r.kt)("p",null,"The following implementation of an accordion relies on ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared values"),". Leveraging shared values helps to prevent unnecessary re-renders. We define shared values using the useSharedValue hook."),(0,r.kt)(h,{src:i.Z,showLines:[16,16],mdxType:"CollapsibleCode"}),(0,r.kt)(s.Z,{sources:{android:"/react-native-reanimated/recordings/examples/accordion_android.mov",ios:"/react-native-reanimated/recordings/examples/accordion_ios.mov"},mdxType:"ExampleVideo"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"AccordionItem")," component encapsulates each item in the accordion. A ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," shared value manages the height of the item. The height dynamically adjusts based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"isExpanded")," prop, resulting in smooth expansion and collapse animations. The ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," prop controls the duration of the animation."),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("strong",{parentName:"p"},"AccordionItem"),", the children represent the content section. It can accommodate various types of content."),(0,r.kt)("samp",{id:"Accordion"},"Accordion"),(0,r.kt)(h,{src:i.Z,showLines:[9,41],mdxType:"CollapsibleCode"}))}v.isMDXComponent=!0},91969:(e,t,n)=>{n.d(t,{Z:()=>o});const o="import React from 'react';\nimport { StyleSheet, View, Button, SafeAreaView } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useDerivedValue,\n  useSharedValue,\n  withTiming,\n} from 'react-native-reanimated';\n\nfunction AccordionItem({\n  isExpanded,\n  children,\n  viewKey,\n  style,\n  duration = 500,\n}) {\n  const height = useSharedValue(0);\n\n  const derivedHeight = useDerivedValue(() =>\n    withTiming(height.value * Number(isExpanded.value), {\n      duration,\n    })\n  );\n  const bodyStyle = useAnimatedStyle(() => ({\n    height: derivedHeight.value,\n  }));\n\n  return (\n    <Animated.View\n      key={`accordionItem_${viewKey}`}\n      style={[styles.animatedView, bodyStyle, style]}>\n      <View\n        onLayout={(e) => {\n          height.value = e.nativeEvent.layout.height;\n        }}\n        style={styles.wrapper}>\n        {children}\n      </View>\n    </Animated.View>\n  );\n}\n\nfunction Item() {\n  return <View style={styles.box} />;\n}\n\nfunction Parent({ open }) {\n  return (\n    <View style={styles.parent}>\n      <AccordionItem isExpanded={open} viewKey=\"Accordion\">\n        <Item />\n      </AccordionItem>\n    </View>\n  );\n}\n\nexport default function App() {\n  const open = useSharedValue(false);\n  const onPress = () => {\n    open.value = !open.value;\n  };\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <View style={styles.buttonContainer}>\n        <Button onPress={onPress} title=\"Click me\" />\n      </View>\n\n      <View style={styles.content}>\n        <Parent open={open} />\n      </View>\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingTop: 24,\n  },\n  buttonContainer: {\n    flex: 1,\n    paddingBottom: '1rem',\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  content: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  parent: {\n    width: 200,\n  },\n  wrapper: {\n    width: '100%',\n    position: 'absolute',\n    display: 'flex',\n    alignItems: 'center',\n  },\n  animatedView: {\n    width: '100%',\n    overflow: 'hidden',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    color: '#f8f9ff',\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n"},87827:(e,t,n)=>{n.d(t,{o:()=>h});const o=4,r=.001,a=1e-7,i=10,s=11,c=1/(s-1);function l(e,t){return 1-3*t+3*e}function u(e,t){return 3*t-6*e}function d(e){return 3*e}function m(e,t,n){return((l(t,n)*e+u(t,n))*e+d(t))*e}function p(e,t,n){return 3*l(t,n)*e*e+2*u(t,n)*e+d(t)}function f(e,t,n,l){if(!(e>=0&&e<=1&&n>=0&&n<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(e===t&&n===l)return function(e){return e};const u=new Array(s);for(let o=0;o<s;++o)u[o]=m(o*c,e,n);function d(t){let l=0,d=1;const f=s-1;for(;d!==f&&u[d]<=t;++d)l+=c;--d;const h=l+(t-u[d])/(u[d+1]-u[d])*c,y=p(h,e,n);return y>=r?function(e,t,n,r){for(let a=0;a<o;++a){const o=p(t,n,r);if(0===o)return t;t-=(m(t,n,r)-e)/o}return t}(t,h,e,n):0===y?h:function(e,t,n,o,r){let s,c,l=0;do{c=t+(n-t)/2,s=m(c,o,r)-e,s>0?n=c:t=c}while(Math.abs(s)>a&&++l<i);return c}(t,l,l+c,e,n)}return function(o){return e===t&&n===l?o:0===o?0:1===o?1:m(d(o),t,l)}}const h={linear:function(e){return e},ease:function(e){return f(.42,0,1,1)(e)},quad:function(e){return e*e},cubic:function(e){return e*e*e},poly:function(e){return t=>Math.pow(t,e)},sin:function(e){return 1-Math.cos(e*Math.PI/2)},circle:function(e){return 1-Math.sqrt(1-e*e)},exp:function(e){return Math.pow(2,10*(e-1))},elastic:function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return t=>1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*e)},back:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return t=>t*t*((e+1)*t-e)},bounce:function(e){if(e<1/2.75)return 7.5625*e*e;if(e<2/2.75){const t=e-1.5/2.75;return 7.5625*t*t+.75}if(e<2.5/2.75){const t=e-2.25/2.75;return 7.5625*t*t+.9375}const t=e-2.625/2.75;return 7.5625*t*t+.984375},bezier:function(e,t,n,o){return{factory:()=>f(e,t,n,o)}},bezierFn:function(e,t,n,o){return f(e,t,n,o)},steps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n=>{const o=Math.min(Math.max(n,0),1)*e;return t?Math.ceil(o)/e:Math.floor(o)/e}},in:function(e){return e},out:function(e){return t=>1-e(1-t)},inOut:function(e){return t=>t<.5?e(2*t)/2:1-e(2*(1-t))/2}}},6328:(e,t,n)=>{n.d(t,{j:()=>a});var o=n(87827),r=n(76933);const a=function(e,t,n){return(0,r.oF)(e,(()=>{const a={duration:300,easing:o.o.inOut(o.o.quad)};return t&&Object.keys(t).forEach((e=>a[e]=t[e])),{type:"timing",onFrame:function(e,t){const{toValue:n,startTime:o,startValue:r}=e,i=t-o;if(i>=a.duration)return e.startTime=0,e.current=n,!0;const s=e.easing(i/a.duration);return e.current=r+(n-r)*s,!1},onStart:function(t,n,o,r){r&&"timing"===r.type&&r.toValue===e&&r.startTime?(t.startTime=r.startTime,t.startValue=r.startValue):(t.startTime=o,t.startValue=n),t.current=n,"object"==typeof a.easing?t.easing=a.easing.factory():t.easing=a.easing},progress:0,toValue:e,startValue:0,startTime:0,easing:()=>0,current:e,callback:n,reduceMotion:(0,r.uh)(null==t?void 0:t.reduceMotion)}}))}},49638:(e,t,n)=>{n.d(t,{n:()=>r});var o=n(67177);const r=(0,n(99435).F)(o.Z)},56389:(e,t,n)=>{n.d(t,{o:()=>c});var o=n(67294),r=n(76933),a=n(96085),i=n(97604),s=n(83442);function c(e,t){const n=(0,o.useRef)(null);let c=Object.values(e.__closure??{});var l;(0,s.Wr)()&&(!c.length&&null!==(l=t)&&void 0!==l&&l.length&&(c=t));void 0===t?t=[...c,e.__workletHash]:t.push(e.__workletHash),null===n.current&&(n.current=(0,a.v)((0,r.AX)(e)));const u=n.current;return(0,o.useEffect)((()=>{const t=(0,i.R)((()=>{u.value=e()}),c,[u]);return()=>{(0,i.B)(t)}}),t),(0,o.useEffect)((()=>()=>{n.current=null}),[]),u}},72400:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(67294),r=n(28033),a=n(88548),i=n(24404),s=o.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,s=e.disabled,l=e.onPress,u=e.testID,d=e.title;return o.createElement(a.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:l,ref:t,style:[c.button,r&&{backgroundColor:r},s&&c.buttonDisabled],testID:u},o.createElement(i.Z,{style:[c.text,s&&c.textDisabled]},d))}));s.displayName="Button";var c=r.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const l=s},76636:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(87462),r=n(63366),a=n(67294),i=n(28033),s=n(67177),c=n(13145),l=["style"],u=c.Z&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",d=a.forwardRef(((e,t)=>{var n=e.style,c=(0,r.Z)(e,l);return a.createElement(s.Z,(0,o.Z)({},c,{ref:t,style:i.Z.compose(m.root,n)}))}));d.displayName="SafeAreaView";var m=i.Z.create({root:{paddingTop:u+"(safe-area-inset-top)",paddingRight:u+"(safe-area-inset-right)",paddingBottom:u+"(safe-area-inset-bottom)",paddingLeft:u+"(safe-area-inset-left)"}});const p=d}}]);