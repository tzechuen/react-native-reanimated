"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4881],{33701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>D,contentTitle:()=>w,default:()=>S,frontMatter:()=>v,metadata:()=>k,toc:()=>A});var a=n(83117),i=n(67294),r=n(3905),o=n(67177),l=n(14779),s=n(72862),u=n(10758),c=n(65641),d=n(6328),m=n(68171);const p=1e3,y=500,h=["React","Native","Reanimated"];function f(){const[e,t]=(0,i.useState)(!1),n=(0,u.y)(0),a=(0,u.y)(0),r=(0,u.y)(0);return i.createElement(o.Z,{style:b.container},i.createElement(o.Z,{style:b.text},i.createElement(m.V,{style:{...b.label,opacity:n}},h[0]),i.createElement(m.V,{style:{...b.label,opacity:a}},h[1]),i.createElement(m.V,{style:{...b.label,opacity:r}},h[2])),i.createElement(l.Z,{title:e?"Hide":"Show",onPress:()=>{e?(r.value=(0,c.p)(0*y,(0,d.j)(0,{duration:p})),a.value=(0,c.p)(1*y,(0,d.j)(0,{duration:p})),n.value=(0,c.p)(2*y,(0,d.j)(0,{duration:p}))):(n.value=(0,c.p)(0*y,(0,d.j)(1,{duration:p})),a.value=(0,c.p)(1*y,(0,d.j)(1,{duration:p})),r.value=(0,c.p)(2*y,(0,d.j)(1,{duration:p}))),t(!e)}}))}const b=s.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},text:{flexDirection:"row"},tab:{paddingHorizontal:20,paddingVertical:10},label:{fontSize:42,textAlign:"center",fontWeight:"bold",marginRight:8},divider:{borderRightWidth:1,borderRightColor:"#ddd"},animatedBorder:{height:8,width:64,backgroundColor:"tomato",borderRadius:20}}),g="import React, { useState } from 'react';\nimport { Button, StyleSheet, View } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withDelay,\n  withTiming,\n} from 'react-native-reanimated';\n\nconst DURATION = 1000;\nconst DELAY = 500;\n\nconst text = ['React', 'Native', 'Reanimated'];\n\nexport default function App() {\n  const [isShown, setShown] = useState(false);\n\n  const opacity1 = useSharedValue(0);\n  const opacity2 = useSharedValue(0);\n  const opacity3 = useSharedValue(0);\n\n  // prettier-ignore\n  const show = () => {\n    if (isShown) {\n      opacity3.value = withDelay(0 * DELAY, withTiming(0, { duration: DURATION }));\n      opacity2.value = withDelay(1 * DELAY, withTiming(0, { duration: DURATION }));\n      opacity1.value = withDelay(2 * DELAY, withTiming(0, { duration: DURATION }));\n    } else {\n      opacity1.value = withDelay(0 * DELAY, withTiming(1, { duration: DURATION }));\n      opacity2.value = withDelay(1 * DELAY, withTiming(1, { duration: DURATION }));\n      opacity3.value = withDelay(2 * DELAY, withTiming(1, { duration: DURATION }));\n    }\n\n    setShown(!isShown);\n  };\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.text}>\n        <Animated.Text style={{ ...styles.label, opacity: opacity1 }}>\n          {text[0]}\n        </Animated.Text>\n        <Animated.Text style={{ ...styles.label, opacity: opacity2 }}>\n          {text[1]}\n        </Animated.Text>\n        <Animated.Text style={{ ...styles.label, opacity: opacity3 }}>\n          {text[2]}\n        </Animated.Text>\n      </View>\n      <Button title={isShown ? 'Hide' : 'Show'} onPress={show} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  text: {\n    flexDirection: 'row',\n  },\n  tab: {\n    paddingHorizontal: 20,\n    paddingVertical: 10,\n  },\n  label: {\n    fontSize: 42,\n    textAlign: 'center',\n    fontWeight: 'bold',\n    marginRight: 8,\n  },\n  divider: {\n    borderRightWidth: 1,\n    borderRightColor: '#ddd',\n  },\n  animatedBorder: {\n    height: 8,\n    width: 64,\n    backgroundColor: 'tomato',\n    borderRadius: 20,\n  },\n});\n",v={sidebar_position:6},w="withDelay",k={unversionedId:"animations/withDelay",id:"animations/withDelay",title:"withDelay",description:"withDelay is an animation modifier that lets you start an animation with a delay.",source:"@site/docs/animations/withDelay.mdx",sourceDirName:"animations",slug:"/animations/withDelay",permalink:"/react-native-reanimated/docs/animations/withDelay",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/animations/withDelay.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"withRepeat",permalink:"/react-native-reanimated/docs/animations/withRepeat"},next:{title:"withClamp",permalink:"/react-native-reanimated/docs/animations/withClamp"}},D={},A=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>delayMs</code>",id:"delayms",level:4},{value:"<code>delayedAnimation</code>",id:"delayedanimation",level:4},{value:"<code>reduceMotion</code> <Optional />",id:"reducemotion-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],x=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},T=x("Optional"),N=x("InteractiveExample"),R={toc:A},M="wrapper";function S(e){let{components:t,...n}=e;return(0,r.kt)(M,(0,a.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"withdelay"},"withDelay"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"withDelay")," is an ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-modifier"},"animation modifier")," that lets you start an animation with a delay."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withDelay } from 'react-native-reanimated';\n\nfunction App() {\n  sv.value = withDelay(500, withTiming(0));\n  // ...\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Type definitions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type AnimatableValue = number | string | number[];\n\nfunction withDelay<T extends AnimatableValue>(\n  delayMs: number,\n  delayedAnimation: T,\n  reduceMotion?: ReduceMotion\n): T;\n\nenum ReduceMotion {\n  System = 'system',\n  Always = 'always',\n  Never = 'never',\n}\n"))),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"delayms"},(0,r.kt)("inlineCode",{parentName:"h4"},"delayMs")),(0,r.kt)("p",null,"Duration (in milliseconds) before the animation starts."),(0,r.kt)("h4",{id:"delayedanimation"},(0,r.kt)("inlineCode",{parentName:"h4"},"delayedAnimation")),(0,r.kt)("p",null,"Animation to delay."),(0,r.kt)("h4",{id:"reducemotion-"},(0,r.kt)("inlineCode",{parentName:"h4"},"reduceMotion")," ",(0,r.kt)(T,{mdxType:"Optional"})),(0,r.kt)("p",null,"A parameter that determines how the animation responds to the device's reduced motion accessibility setting."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"withDelay")," returns an ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-object"},"animation object")," which holds the current state of the animation. It can be either assigned directly to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," or can be used as a value for a style object returned from ",(0,r.kt)("a",{parentName:"p",href:"docs/core/useAnimatedStyle"},"useAnimatedStyle"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(N,{src:g,component:(0,r.kt)(f,{mdxType:"DelayText"}),mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,r.kt)("div",{className:"platform-compatibility"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Android"),(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Web"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}S.isMDXComponent=!0},87827:(e,t,n)=>{function a(e,t,n,a){const i=4,r=.001,o=1e-7,l=10,s=11,u=1/(s-1);function c(e,t){return 1-3*t+3*e}function d(e,t){return 3*t-6*e}function m(e){return 3*e}function p(e,t,n){return((c(t,n)*e+d(t,n))*e+m(t))*e}function y(e,t,n){return 3*c(t,n)*e*e+2*d(t,n)*e+m(t)}if(!(e>=0&&e<=1&&n>=0&&n<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(e===t&&n===a)return function(e){return e};const h=new Array(s);for(let b=0;b<s;++b)h[b]=p(b*u,e,n);function f(t){let a=0,c=1;const d=s-1;for(;c!==d&&h[c]<=t;++c)a+=u;--c;const m=a+(t-h[c])/(h[c+1]-h[c])*u,f=y(m,e,n);return f>=r?function(e,t,n,a){for(let r=0;r<i;++r){const i=y(t,n,a);if(0===i)return t;t-=(p(t,n,a)-e)/i}return t}(t,m,e,n):0===f?m:function(e,t,n,a,i){let r,s,u=0;do{s=t+(n-t)/2,r=p(s,a,i)-e,r>0?n=s:t=s}while(Math.abs(r)>o&&++u<l);return s}(t,a,a+u,e,n)}return function(i){return e===t&&n===a?i:0===i?0:1===i?1:p(f(i),t,a)}}n.d(t,{o:()=>i});const i={linear:function(e){return e},ease:function(e){return a(.42,0,1,1)(e)},quad:function(e){return e*e},cubic:function(e){return e*e*e},poly:function(e){return t=>Math.pow(t,e)},sin:function(e){return 1-Math.cos(e*Math.PI/2)},circle:function(e){return 1-Math.sqrt(1-e*e)},exp:function(e){return Math.pow(2,10*(e-1))},elastic:function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return t=>1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*e)},back:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return t=>t*t*((e+1)*t-e)},bounce:function(e){if(e<1/2.75)return 7.5625*e*e;if(e<2/2.75){const t=e-1.5/2.75;return 7.5625*t*t+.75}if(e<2.5/2.75){const t=e-2.25/2.75;return 7.5625*t*t+.9375}const t=e-2.625/2.75;return 7.5625*t*t+.984375},bezier:function(e,t,n,i){return{factory:()=>a(e,t,n,i)}},bezierFn:function(e,t,n,i){return a(e,t,n,i)},steps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n=>{const a=Math.min(Math.max(n,0),1)*e;return t?Math.ceil(a)/e:Math.floor(a)/e}},in:function(e){return e},out:function(e){return t=>1-e(1-t)},inOut:function(e){return t=>t<.5?e(2*t)/2:1-e(2*(1-t))/2}}},65641:(e,t,n)=>{n.d(t,{p:()=>i});var a=n(76933);const i=function(e,t,n){return(0,a.oF)(t,(()=>{const i="function"==typeof t?t():t;return{isHigherOrder:!0,onFrame:function(t,n){const{startTime:a,started:r,previousAnimation:o}=t,l=t.current;if(n-a>e||t.reduceMotion){r||(i.onStart(i,l,n,o),t.previousAnimation=null,t.started=!0);const e=i.onFrame(i,n);return t.current=i.current,e}if(o){const e=o.finished||o.onFrame(o,n);t.current=o.current,e&&(t.previousAnimation=null)}return!1},onStart:function(e,t,n,a){e.startTime=n,e.started=!1,e.current=t,e.previousAnimation=a===e?a.previousAnimation:a,void 0===i.reduceMotion&&(i.reduceMotion=e.reduceMotion)},current:i.current,callback:e=>{i.callback&&i.callback(e)},previousAnimation:null,startTime:0,started:!1,reduceMotion:(0,a.uh)(n)}}))}},6328:(e,t,n)=>{n.d(t,{j:()=>r});var a=n(87827),i=n(76933);const r=function(e,t,n){return(0,i.oF)(e,(()=>{const r={duration:300,easing:a.o.inOut(a.o.quad)};return t&&Object.keys(t).forEach((e=>r[e]=t[e])),{type:"timing",onFrame:function(e,t){const{toValue:n,startTime:a,startValue:i}=e,o=t-a;if(o>=r.duration)return e.startTime=0,e.current=n,!0;const l=e.easing(o/r.duration);return e.current=i+(n-i)*l,!1},onStart:function(t,n,a,i){i&&"timing"===i.type&&i.toValue===e&&i.startTime?(t.startTime=i.startTime,t.startValue=i.startValue):(t.startTime=a,t.startValue=n),t.current=n,"object"==typeof r.easing?t.easing=r.easing.factory():t.easing=r.easing},progress:0,toValue:e,startValue:0,startTime:0,easing:()=>0,current:e,callback:n,reduceMotion:(0,i.uh)(null==t?void 0:t.reduceMotion)}}))}},68171:(e,t,n)=>{n.d(t,{V:()=>i});var a=n(24404);const i=(0,n(33705).F)(a.Z)},14779:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),i=n(72862),r=n(83117),o=n(80102),l=n(16528),s=n(94119),u=n(67177),c=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,i=e.delayPressIn,d=e.delayPressOut,p=e.delayLongPress,y=e.disabled,h=e.focusable,f=e.onLongPress,b=e.onPress,g=e.onPressIn,v=e.onPressOut,w=e.rejectResponderTermination,k=e.style,D=(0,o.Z)(e,c),A=(0,a.useRef)(null),x=(0,l.Z)(t,A),T=(0,a.useState)("0s"),N=T[0],R=T[1],M=(0,a.useState)(null),S=M[0],P=M[1],C=(0,a.useCallback)(((e,t)=>{P(e),R(t?t/1e3+"s":"0s")}),[P,R]),E=(0,a.useCallback)((e=>{C(null!=n?n:.2,e)}),[n,C]),V=(0,a.useCallback)((e=>{C(null,e)}),[C]),I=(0,a.useMemo)((()=>({cancelable:!w,disabled:y,delayLongPress:p,delayPressStart:i,delayPressEnd:d,onLongPress:f,onPress:b,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;E(t?0:150),null!=g&&g(e)},onPressEnd(e){V(250),null!=v&&v(e)}})),[p,i,d,y,f,b,g,v,w,E,V]),O=(0,s.Z)(A,I);return a.createElement(u.Z,(0,r.Z)({},D,O,{accessibilityDisabled:y,focusable:!y&&!1!==h,pointerEvents:y?"none":void 0,ref:x,style:[m.root,!y&&m.actionable,k,null!=S&&{opacity:S},{transitionDuration:N}]}))}var m=i.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=a.memo(a.forwardRef(d));p.displayName="TouchableOpacity";const y=p;var h=n(24404),f=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,i=e.color,r=e.disabled,o=e.onPress,l=e.testID,s=e.title;return a.createElement(y,{accessibilityLabel:n,accessibilityRole:"button",disabled:r,focusable:!r,onPress:o,ref:t,style:[b.button,i&&{backgroundColor:i},r&&b.buttonDisabled],testID:l},a.createElement(h.Z,{style:[b.text,r&&b.textDisabled]},s))}));f.displayName="Button";var b=i.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const g=f}}]);