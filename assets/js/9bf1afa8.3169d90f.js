"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[3271],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>S,default:()=>C,frontMatter:()=>O,metadata:()=>A,toc:()=>w});var a=n(58168),r=n(96540),i=n(15680),o=n(9176),s=n(80101),l=n(78506),c=n(91691),u=n(50014),m=n(27979),d=n(46096),p=n(92220),f=n(83562);const g={code:"function anonymous(){const{runOnJS,setFinished}=this.__closure;runOnJS(setFinished)(true);}"},y={code:"function anonymous(){const{scale}=this.__closure;return{transform:[{scale:scale.value}]};}"};function h(){const e=(0,u.U)(1),[t,n]=r.useState(!1),a=(0,f.m)(function(){const t=()=>({transform:[{scale:e.value}]});return t.__closure={scale:e},t.__workletHash=4183451682571,t.__initData=y,t}());return r.createElement(o.A,{style:v.container},r.createElement(p.X,{style:[v.box,a]}),r.createElement(s.A,{onPress:()=>{e.value=(0,m.e)(2,{},function(){const e=function(){(0,d.OG)(n)(!0)};return e.__closure={runOnJS:d.OG,setFinished:n},e.__workletHash=797798132172,e.__initData=g,e}())},title:"Click me",disabled:t}),t&&r.createElement(l.A,null,"Finished! \ud83c\udf89"))}const v=c.A.create({container:{flex:1,alignItems:"center"},box:{height:100,width:100,backgroundColor:"#b58df1",borderRadius:20,marginVertical:64,alignSelf:"center"}}),b="import React from 'react';\nimport { Button, View, StyleSheet, Text } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withSpring,\n  runOnJS,\n} from 'react-native-reanimated';\nimport { useAnimatedStyle } from 'react-native-reanimated';\n\nexport default function App() {\n  const scale = useSharedValue(1);\n  const [finished, setFinished] = React.useState(false);\n\n  const handlePress = () => {\n    scale.value = withSpring(2, {}, () => {\n      // highlight-next-line\n      runOnJS(setFinished)(true);\n    });\n  };\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [{ scale: scale.value }],\n  }));\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n      <Button onPress={handlePress} title=\"Click me\" disabled={finished} />\n      {finished && <Text>Finished! \ud83c\udf89</Text>}\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    width: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 64,\n    alignSelf: 'center',\n  },\n});\n",O={sidebar_position:1},S="runOnJS",A={unversionedId:"threading/runOnJS",id:"threading/runOnJS",title:"runOnJS",description:"runOnJS lets you asynchronously run non-workletized functions that couldn't otherwise run on the UI thread. This applies to most external libraries as they don't have their functions marked with \"worklet\"; directive.",source:"@site/docs/threading/runOnJS.mdx",sourceDirName:"threading",slug:"/threading/runOnJS",permalink:"/react-native-reanimated/docs/threading/runOnJS",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/threading/runOnJS.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Threading",permalink:"/react-native-reanimated/docs/category/threading"},next:{title:"runOnUI",permalink:"/react-native-reanimated/docs/threading/runOnUI"}},x={},w=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"fn",id:"fn",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",t)},N=k("InteractiveExample"),T=k("Indent"),P={toc:w},R="wrapper";function C(e){let{components:t,...n}=e;return(0,i.yg)(R,(0,a.A)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"runonjs"},"runOnJS"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"runOnJS")," lets you asynchronously run non-",(0,i.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," functions that couldn't otherwise run on the ",(0,i.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". This applies to most external libraries as they don't have their functions marked with ",(0,i.yg)("inlineCode",{parentName:"p"},'"worklet";')," directive."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"runOnJS")," is usually used to update React state either on animation finish or conditionally within a gesture."),(0,i.yg)("h2",{id:"reference"},"Reference"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"import { runOnJS } from 'react-native-reanimated';\n\nfunction App() {\n  // While on the UI thread\n  runOnJS(navigation.goBack)();\n}\n")),(0,i.yg)("details",null,(0,i.yg)("summary",null,"Type definitions"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"function runOnJS<A extends any[], R>(\n  fn: (...args: A) => R\n): (...args: Parameters<typeof fn>) => void;\n"))),(0,i.yg)("h3",{id:"arguments"},"Arguments"),(0,i.yg)("h4",{id:"fn"},"fn"),(0,i.yg)("p",null,"A reference to a function you want to execute on the ",(0,i.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread")," from the ",(0,i.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". Arguments to your function have to be passed to the function returned from ",(0,i.yg)("inlineCode",{parentName:"p"},"runOnJS")," i.e. ",(0,i.yg)("inlineCode",{parentName:"p"},"runOnJS(setValue)(10);"),"."),(0,i.yg)("h3",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"runOnJS")," returns a function that accepts arguments for the function passed as the first argument. This function can be safely executed on the UI thread."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Don't forget to call the function returned from ",(0,i.yg)("inlineCode",{parentName:"p"},"runOnJS"),".")),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)(N,{src:b,component:(0,i.yg)(h,{mdxType:"RunOnJS"}),mdxType:"InteractiveExample"}),(0,i.yg)("h2",{id:"remarks"},"Remarks"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Functions passed to ",(0,i.yg)("inlineCode",{parentName:"li"},"runOnJS")," must be defined in the ",(0,i.yg)("a",{parentName:"li",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread")," scope, i.e. in the component body or the global scope. This code won't work because ",(0,i.yg)("inlineCode",{parentName:"li"},"myFunction")," is defined in the ",(0,i.yg)("inlineCode",{parentName:"li"},"withTiming")," callback, which is only executed in the ",(0,i.yg)("a",{parentName:"li",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),":")),(0,i.yg)(T,{mdxType:"Indent"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"withTiming(0, {}, () => {\n  // myFunction is defined on the UI thread\n  const myFunction = () => {\n    // ...\n  };\n  runOnJS(myFunction)(); // \ud83d\udca5\n});\n"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"It's a common mistake to execute function inside of runOnJS like this: ",(0,i.yg)("del",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"del"},"runOnJS(setValue(10))()")),". Here, the correct usage would be ",(0,i.yg)("inlineCode",{parentName:"p"},"runOnJS(setValue)(10)"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"It's safe to run functions via ",(0,i.yg)("inlineCode",{parentName:"p"},"runOnJS")," on the ",(0,i.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread"),", as this has no effect."))),(0,i.yg)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.yg)("div",{className:"platform-compatibility"},(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Android"),(0,i.yg)("th",{parentName:"tr",align:null},"iOS"),(0,i.yg)("th",{parentName:"tr",align:null},"Web"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,i.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,i.yg)("td",{parentName:"tr",align:null},"\u2705"))))))}C.isMDXComponent=!0},27979:(e,t,n)=>{n.d(t,{e:()=>i});var a=n(49253);function r(e,t,n){if(t.skipAnimation)return 0;const{stiffness:a,dampingRatio:r,restSpeedThreshold:i,duration:o}=t;return function(e){let{min:t,max:n,func:a,maxIterations:r=20}=e,i=r,o=(n+t)/2;for(;Math.abs(a(o))>5e-5&&i>0;)i-=1,a(o)<0?t=o:n=o,o=(t+n)/2;return o}({min:0,max:100,func:t=>{const s=(t*n*n+a*e*e)/(Math.exp(1-.5*r)*a);return-2*t/(2*r*Math.sqrt(a*t))*1e3*Math.log(.01*i/s)-o}})}const i=(e,t,n)=>(0,a.yK)(e,(()=>{const i={...{damping:10,mass:1,stiffness:100,overshootClamping:!1,restDisplacementThreshold:.01,restSpeedThreshold:2,velocity:0,duration:2e3,dampingRatio:.5,reduceMotion:void 0,clamp:void 0},...t,useDuration:!!(null!=t&&t.duration||null!=t&&t.dampingRatio),skipAnimation:!1};return i.skipAnimation=!function(e){var t,n;let a="";return["stiffness","damping","dampingRatio","restDisplacementThreshold","restSpeedThreshold","mass"].forEach((t=>{const n=e[t];n<=0&&(a+=`, ${t} must be grater than zero but got ${n}`)})),e.duration<0&&(a+=`, duration can't be negative, got ${e.duration}`),null!==(t=e.clamp)&&void 0!==t&&t.min&&null!==(n=e.clamp)&&void 0!==n&&n.max&&e.clamp.min>e.clamp.max&&(a+=`, clamp.min should be lower than clamp.max, got clamp: {min: ${e.clamp.min}, max: ${e.clamp.max}} `),""!==a&&console.warn("[Reanimated] Invalid spring config"+a),""===a}(i),0===i.duration&&(i.skipAnimation=!0),{onFrame:function(e,t){const{toValue:n,startTimestamp:a,current:r}=e,o=t-a;if(i.useDuration&&o>=i.duration)return e.current=n,e.lastTimestamp=0,!0;if(i.skipAnimation)return e.current=n,e.lastTimestamp=0,!0;const{lastTimestamp:s,velocity:l}=e,c=Math.min(t-s,64);e.lastTimestamp=t;const u=c/1e3,m=-l,d=n-r,{zeta:p,omega0:f,omega1:g}=e,{position:y,velocity:h}=p<1?function(e,t){const{toValue:n,current:a,velocity:r}=e,{zeta:i,t:o,omega0:s,omega1:l}=t,c=-r,u=n-a,m=Math.sin(l*o),d=Math.cos(l*o),p=Math.exp(-i*s*o),f=p*(m*((c+i*s*u)/l)+u*d);return{position:n-f,velocity:i*s*f-p*(d*(c+i*s*u)-l*u*m)}}(e,{zeta:p,v0:m,x0:d,omega0:f,omega1:g,t:u}):function(e,t){const{toValue:n}=e,{v0:a,x0:r,omega0:i,t:o}=t,s=Math.exp(-i*o);return{position:n-s*(r+(a+i*r)*o),velocity:s*(a*(o*i-1)+o*r*i*i)}}(e,{v0:m,x0:d,omega0:f,t:u});e.current=y,e.velocity=h;const{isOvershooting:v,isVelocity:b,isDisplacement:O}=function(e,t){const{toValue:n,velocity:a,startValue:r,current:i}=e;return{isOvershooting:!!t.overshootClamping&&(i>n&&r<n||i<n&&r>n),isVelocity:Math.abs(a)<t.restSpeedThreshold,isDisplacement:Math.abs(n-i)<t.restDisplacementThreshold}}(e,i),S=v||b&&O;return!(i.useDuration||!S)&&(e.velocity=0,e.current=n,e.lastTimestamp=0,!0)},onStart:function(e,t,n,a){e.current=t,e.startValue=t;let o=i.mass;const s=function(e,t){return(null==e?void 0:e.lastTimestamp)&&(null==e?void 0:e.startTimestamp)&&(null==e?void 0:e.toValue)===t.toValue&&(null==e?void 0:e.duration)===t.duration&&(null==e?void 0:e.dampingRatio)===t.dampingRatio}(a,e),l=i.duration,c=s?null==a?void 0:a.startValue:Number(e.toValue)-t;if(e.velocity=a?(s?null==a?void 0:a.velocity:(null==a?void 0:a.velocity)+i.velocity)||0:i.velocity||0,s)e.zeta=(null==a?void 0:a.zeta)||0,e.omega0=(null==a?void 0:a.omega0)||0,e.omega1=(null==a?void 0:a.omega1)||0;else{if(i.useDuration){const t=s?l-(((null==a?void 0:a.lastTimestamp)||0)-((null==a?void 0:a.startTimestamp)||0)):l;i.duration=t,o=r(c,i,e.velocity)}const{zeta:t,omega0:n,omega1:u}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;if(t.skipAnimation)return{zeta:0,omega0:0,omega1:0};if(t.useDuration){const{stiffness:n,dampingRatio:a}=t,r=Math.sqrt(n/e);return{zeta:a,omega0:r,omega1:r*Math.sqrt(1-a**2)}}{const{damping:e,mass:n,stiffness:a}=t,r=e/(2*Math.sqrt(a*n)),i=Math.sqrt(a/n);return{zeta:r,omega0:i,omega1:i*Math.sqrt(1-r**2)}}}(o,i);e.zeta=t,e.omega0=n,e.omega1=u,void 0!==i.clamp&&(e.zeta=function(e,t){const{zeta:n,toValue:a,startValue:r}=e,i=Number(a);if(i===r)return n;const[o,s]=i-r>0?[t.min,t.max]:[t.max,t.min],l=void 0!==s?Math.abs((s-i)/(i-r)):void 0,c=void 0!==o?Math.abs((o-i)/(i-r)):void 0,u=[void 0!==l?Math.abs(Math.log(l)/Math.PI):void 0,void 0!==c?Math.abs(Math.log(c)/(2*Math.PI)):void 0].filter((e=>void 0!==e));return Math.max(...u,n)}(e,i.clamp))}e.lastTimestamp=(null==a?void 0:a.lastTimestamp)||n,e.startTimestamp=s&&(null==a?void 0:a.startTimestamp)||n},toValue:e,velocity:i.velocity||0,current:e,startValue:0,callback:n,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:(0,a.AR)(i.reduceMotion)}}))},92220:(e,t,n)=>{n.d(t,{X:()=>r});var a=n(9176);const r=(0,n(72089).b)(a.A)},83562:(e,t,n)=>{n.d(t,{m:()=>y});var a=n(96540),r=n(30221),i=n(10579),o=n(58544),s=n(49253),l=n(50014),c=n(13404),u=n(56166),m=n(38507);const d=(0,m.IP)();function p(e,t,n,a){if(Array.isArray(t)&&t.forEach(((t,r)=>{p(e,t,n&&n[r],a&&a[r])})),"object"==typeof t&&t.onFrame){const r=t;let i=r.current;null!=a&&("object"==typeof a?void 0!==a.value?i=a.value:void 0!==a.onFrame&&(void 0!==(null==n?void 0:n.current)?i=n.current:void 0!==(null==a?void 0:a.current)&&(i=a.current)):i=a),r.callStart=e=>{r.onStart(r,i,e,n)},r.callStart(e),r.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((r=>p(e,t[r],n&&n[r],a&&a[r])))}function f(e,t,n,a,r){if(!r.value)return!0;if(Array.isArray(e)){a[n]=[];let i=!0;return e.forEach(((e,o)=>{f(e,t,o,a[n],r)||(i=!1)})),i}if("object"==typeof e&&e.onFrame){let r=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),r=e.onFrame(e,t),e.timestamp=t,r&&(e.finished=!0,e.callback&&e.callback(!0))),a[n]=e.current,r}if("object"==typeof e){a[n]={};let i=!0;return Object.keys(e).forEach((o=>{f(e[o],t,o,a[n],r)||(i=!1)})),i}return a[n]=e,!0}function g(e,t){if(Array.isArray(e))for(const n of e)g(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))g(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function y(e,t,y){let h=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const v=(0,u.w)(),b=(0,a.useRef)();let O=Object.values(e.__closure??{});var S;d&&(!O.length&&null!==(S=t)&&void 0!==S&&S.length&&(O=t));const A=y?Array.isArray(y)?y:[y]:[],x=y?(0,c.eW)(A):null,w=(0,l.U)(!0),k=(0,a.useRef)({});if(t?t.push(e.__workletHash):t=[...O,e.__workletHash],x&&t.push(x),!b.current){const t=(0,s.xu)(e);0,b.current={initial:{value:t,updater:e},remoteState:(0,r.WD)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,u.m)()}}const{initial:N,remoteState:T,viewDescriptors:P}=b.current,R=P.shareableViewDescriptors;t.push(R),(0,a.useEffect)((()=>{let t,a=e;y&&(a=()=>{const t=e();return A.forEach((e=>{e(t)})),t}),t=(0,m.n4)()?()=>{!function(e,t,a,r,i,s,l){const u=a.animations??{},m=t()??{},d=a.last;let g,y=!1;Object.keys(u).forEach((e=>{const t=m[e];(0,c.Sm)(t)||delete u[e]})),Object.keys(m).forEach((e=>{const t=m[e];(0,c.Sm)(t)&&(g=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),p(g,t,u[e],d[e]),u[e]=t,y=!0)})),y?(a.animations=u,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,function t(n){const{animations:c,last:u,isAnimationCancelled:m}=a;if(m)return void(a.isAnimationRunning=!1);const d={};let p=!0;Object.keys(c).forEach((e=>{f(c[e],n,e,d,i)?(u[e]=d[e],delete c[e]):p=!1})),Object.keys(d).length&&(0,o.v)(e,d,r,s,l),p?a.isAnimationRunning=!1:requestAnimationFrame(t)}(g))):(a.isAnimationCancelled=!0,a.animations=[]),a.last=m,(0,c.bN)(d,m)||(0,o.v)(e,m,r,s,l)}(R,e,T,v,w,k,A)}:()=>{!function(e,t,a,r,i){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=a.animations??{},u=t()??{},m=a.last,d={};let g,y=!1,h=!1;for(const o in u){const e=u[o];(0,c.Sm)(e)?(g=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),p(g,e,l[o],m[o]),l[o]=e,y=!0):(h=!0,d[o]=e,delete l[o])}if(y){const t=n=>{const{animations:s,last:l,isAnimationCancelled:c}=a;if(c)return void(a.isAnimationRunning=!1);const u={};let m=!0;for(const e in s)f(s[e],n,e,u,i)?(l[e]=u[e],delete s[e]):m=!1;u&&(0,o.A)(e,u,r),m?a.isAnimationRunning=!1:requestAnimationFrame(t)};a.animations=l,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,t(g)),h&&(0,o.A)(e,d,r)}else a.isAnimationCancelled=!0,a.animations=[],(0,c.bN)(m,u)||(0,o.A)(e,u,r,s);a.last=u}(R,a,T,v,w,h)};const r=(0,i.I)(t,O);return()=>{(0,i.e)(r)}}),t),(0,a.useEffect)((()=>(w.value=!0,()=>{w.value=!1})),[w]),g(N.value);const C=(0,a.useRef)(null);return C.current||(C.current=(0,m.n4)()?{viewDescriptors:P,initial:N,viewsRef:v,jestAnimatedStyle:k}:{initial:N,viewsRef:v,viewDescriptors:P}),C.current}},80101:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(96540),r=n(91691),i=n(58168),o=n(98587),s=n(11804),l=n(17069),c=n(9176),u=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function m(e,t){var n=e.activeOpacity,r=e.delayPressIn,m=e.delayPressOut,p=e.delayLongPress,f=e.disabled,g=e.focusable,y=e.onLongPress,h=e.onPress,v=e.onPressIn,b=e.onPressOut,O=e.rejectResponderTermination,S=e.style,A=(0,o.A)(e,u),x=(0,a.useRef)(null),w=(0,s.A)(t,x),k=(0,a.useState)("0s"),N=k[0],T=k[1],P=(0,a.useState)(null),R=P[0],C=P[1],j=(0,a.useCallback)(((e,t)=>{C(e),T(t?t/1e3+"s":"0s")}),[C,T]),D=(0,a.useCallback)((e=>{j(null!=n?n:.2,e)}),[n,j]),E=(0,a.useCallback)((e=>{j(null,e)}),[j]),_=(0,a.useMemo)((()=>({cancelable:!O,disabled:f,delayLongPress:p,delayPressStart:r,delayPressEnd:m,onLongPress:y,onPress:h,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;D(t?0:150),null!=v&&v(e)},onPressEnd(e){E(250),null!=b&&b(e)}})),[p,r,m,f,y,h,v,b,O,D,E]),M=(0,l.A)(x,_);return a.createElement(c.A,(0,i.A)({},A,M,{accessibilityDisabled:f,focusable:!f&&!1!==g,pointerEvents:f?"none":void 0,ref:w,style:[d.root,!f&&d.actionable,S,null!=R&&{opacity:R},{transitionDuration:N}]}))}var d=r.A.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=a.memo(a.forwardRef(m));p.displayName="TouchableOpacity";const f=p;var g=n(78506),y=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,i=e.disabled,o=e.onPress,s=e.testID,l=e.title;return a.createElement(f,{accessibilityLabel:n,accessibilityRole:"button",disabled:i,focusable:!i,onPress:o,ref:t,style:[h.button,r&&{backgroundColor:r},i&&h.buttonDisabled],testID:s},a.createElement(g.A,{style:[h.text,i&&h.textDisabled]},l))}));y.displayName="Button";var h=r.A.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const v=y}}]);