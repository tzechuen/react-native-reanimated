"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2507],{97227:(e,n,t)=>{t.d(n,{A:()=>g});var a=t(96540),i=t(9176),o=t(80101),s=t(91691),l=t(72089),r=t(50014),m=t(54133),p=t(70880),d=t(37112);const u=l.b(d.jl),c={code:"function anonymous(){const{withTiming,r}=this.__closure;return{r:withTiming(r.value)};}"};function g(){const e=(0,r.U)(20),n=(0,m.x)(function(){const n=()=>({r:(0,p.f)(e.value)});return n.__closure={withTiming:p.f,r:e},n.__workletHash=0x93bbd75ed9a,n.__initData=c,n}());return a.createElement(i.A,{style:h.container},a.createElement(d.BS,{style:h.svg},a.createElement(u,{cx:"50%",cy:"50%",fill:"#b58df1",animatedProps:n})),a.createElement(o.A,{onPress:()=>{e.value+=10},title:"Click me"}))}const h=s.A.create({container:{flex:1,alignItems:"center"},svg:{height:250,width:"100%"}})},47055:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(96540),i=t(9176),o=t(80101),s=t(91691),l=t(50014),r=t(83562),m=t(27979),p=t(92220);const d={code:"function anonymous(){const{withSpring,translateX}=this.__closure;return{transform:[{translateX:withSpring(translateX.value*2)}]};}"};function u(){const e=(0,l.U)(0),n=(0,r.m)(function(){const n=()=>({transform:[{translateX:(0,m.e)(2*e.value)}]});return n.__closure={withSpring:m.e,translateX:e},n.__workletHash=0xe181fe145b8,n.__initData=d,n}());return a.createElement(a.Fragment,null,a.createElement(p.X,{style:[c.box,n]}),a.createElement(i.A,{style:c.container},a.createElement(o.A,{onPress:()=>{e.value+=50},title:"Click me"})))}const c=s.A.create({container:{flex:1,alignItems:"center",justifyContent:"center"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20,marginVertical:50}})},66431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>w,frontMatter:()=>m,metadata:()=>d,toc:()=>c});var a=t(58168),i=(t(96540),t(15680)),o=t(47055),s=t(36660),l=t(97227),r=t(71238);const m={sidebar_position:3},p="Animating styles and props",d={unversionedId:"fundamentals/animating-styles-and-props",id:"fundamentals/animating-styles-and-props",title:"Animating styles and props",description:"In the last section, we learned how to make simple animations, what shared values are and how to use them. Now, we'll learn a different way of passing animation styles to components. We'll also go over the difference between animating styles and props and how to handle them using useAnimatedStyle and useAnimatedProps.",source:"@site/docs/fundamentals/animating-styles-and-props.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/animating-styles-and-props",permalink:"/react-native-reanimated/docs/fundamentals/animating-styles-and-props",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/fundamentals/animating-styles-and-props.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Your First Animation",permalink:"/react-native-reanimated/docs/fundamentals/your-first-animation"},next:{title:"Customizing animations",permalink:"/react-native-reanimated/docs/fundamentals/customizing-animation"}},u={},c=[{value:"Animating styles",id:"animating-styles",level:2},{value:"Animating props",id:"animating-props",level:2},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",n)},h=g("CollapsibleCode"),y=g("InteractiveExample"),v={toc:c},f="wrapper";function w(e){let{components:n,...t}=e;return(0,i.yg)(f,(0,a.A)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"animating-styles-and-props"},"Animating styles and props"),(0,i.yg)("p",null,"In ",(0,i.yg)("a",{parentName:"p",href:"/docs/fundamentals/your-first-animation"},"the last section"),", we learned how to make simple animations, what shared values are and how to use them. Now, we'll learn a different way of passing animation styles to components. We'll also go over the difference between animating styles and props and how to handle them using ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedStyle")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedProps"),"."),(0,i.yg)("h2",{id:"animating-styles"},"Animating styles"),(0,i.yg)("p",null,"As we learned in the previous section we can animate styles by ",(0,i.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animations-in-inline-styling"},"passing shared values inline")," to the elements' ",(0,i.yg)("inlineCode",{parentName:"p"},"style")," property:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import Animated, { useSharedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(100);\n\n  return <Animated.View style={{ width }} />;\n}\n")),(0,i.yg)("p",null,"In basic cases, this syntax works well but it has one big downside. It doesn't allow to access the value stored in a shared value. For example, it's not possible to build more complex animations by using inline styling to multiply this value (or do any other mathematical operation) before assigning it to the ",(0,i.yg)("inlineCode",{parentName:"p"},"style")," prop."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Animated.View style={{ width: width * 5 }} /> // this won't work\n")),(0,i.yg)("p",null,"Let's suppose we have an example with a box which moves to the right on every button press:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import { View, Button } from 'react-native';\nimport Animated, { useSharedValue, withSpring } from 'react-native-reanimated';\n\nfunction App() {\n  const translateX = useSharedValue(0);\n\n  const handlePress = () => {\n    // highlight-next-line\n    translateX.value = withSpring(translateX.value + 50);\n  };\n\n  return (\n    <View style={styles.container}>\n      {/* highlight-next-line */}\n      <Animated.View style={[styles.box, { transform: [{ translateX }] }]} />\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n")),(0,i.yg)("p",null,"If we would like to customize how our shared value changes based on some user input, (e.g. multiplying it by 2 or following some other mathematical equation) we couldn't use inline styling."),(0,i.yg)("p",null,"Luckily, the ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook comes to the rescue. It adds additional control and flexibility over your animation. This can be really useful when creating a bit more complicated animations which include conditional statements or loops."),(0,i.yg)("p",null,"Let's see it in action:"),(0,i.yg)(h,{showLines:[8,29],src:s.A,mdxType:"CollapsibleCode"}),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedStyle")," lets you access the value stored in a shared value. Thanks to that we could multiply the value by ",(0,i.yg)("inlineCode",{parentName:"p"},"2")," before assigning it to ",(0,i.yg)("inlineCode",{parentName:"p"},"style"),". This hook has one more advantage over passing animations to inline styles. It allows you to keep all the animation-related logic in one place."),(0,i.yg)("p",null,"You can see it in action in the example below:"),(0,i.yg)(y,{src:s.A,component:(0,i.yg)(o.A,{mdxType:"AnimatingStyles"}),mdxType:"InteractiveExample"}),(0,i.yg)("h2",{id:"animating-props"},"Animating props"),(0,i.yg)("p",null,"Most of the values that developers animate (",(0,i.yg)("inlineCode",{parentName:"p"},"width"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"color"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"transform")," etc.) are modified by passing them as an object to the ",(0,i.yg)("inlineCode",{parentName:"p"},"style")," property of an element. But that's not always the case."),(0,i.yg)("p",null,"Sometimes we'd like to animate not just styles but also the props which are passed to the component."),(0,i.yg)("p",null,"For example, let's say we would like to animate SVG elements. Instead of passing values to the ",(0,i.yg)("inlineCode",{parentName:"p"},"style")," property, values are defined as props:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},'<Circle cx="50" cy="50" r="10" fill="blue" />\n')),(0,i.yg)("p",null,"Reanimated comes with just a handful of built-in components like ",(0,i.yg)("inlineCode",{parentName:"p"},"Animated.View")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Animated.ScrollView"),". For components which aren't a part of Reanimated, to make their props animatable, we need to wrap them with ",(0,i.yg)("a",{parentName:"p",href:"/docs/core/createAnimatedComponent"},(0,i.yg)("inlineCode",{parentName:"a"},"createAnimatedComponent")),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import Animated from 'react-native-reanimated';\nimport { Circle } from 'react-native-svg';\n\nconst AnimatedCircle = Animated.createAnimatedComponent(Circle);\n")),(0,i.yg)("p",null,"To animate the radius of the SVG circle we can simply pass the shared value as a prop:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},'import { useSharedValue } from \'react-native-reanimated\';\nimport { Svg } from \'react-native-svg\';\n\nfunction App() {\n  const r = useSharedValue(10);\n\n  return (\n    <Svg>\n      {/* highlight-next-line */}\n      <AnimatedCircle cx="50" cy="50" r={r} fill="blue" />\n    </Svg>\n  );\n}\n')),(0,i.yg)("p",null,"This approach works just fine but same as ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedStyle")," for animating styles we can encapsulate the animation logic and gain access to the ",(0,i.yg)("inlineCode",{parentName:"p"},".value")," property of a shared value by using ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedProps"),"."),(0,i.yg)("p",null,"So if we'd like to smoothly increase the radius of a circle by ",(0,i.yg)("inlineCode",{parentName:"p"},"10px")," on each button press we could use ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedProps"),":"),(0,i.yg)(h,{showLines:[9,39],src:r.A,mdxType:"CollapsibleCode"}),(0,i.yg)("p",null,"In a function which ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedProps")," takes as an argument, we return an object with all the props we'd like to animate. Then we can pass the value which ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedProps")," returns to the ",(0,i.yg)("inlineCode",{parentName:"p"},"animatedProps")," prop of an Animated component."),(0,i.yg)("p",null,"Check out the full example below:"),(0,i.yg)(y,{src:r.A,component:(0,i.yg)(l.A,{mdxType:"AnimatingProps"}),mdxType:"InteractiveExample"}),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("p",null,"In this section, we went through the differences between animating styles and props and how to use ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedStyle")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"useAnimatedProps"),". To sum up:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Passing shared values to inline styles is a simple way of creating animations but it has some limitations."),(0,i.yg)("li",{parentName:"ul"},"Difference between animating ",(0,i.yg)("inlineCode",{parentName:"li"},"props")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"styles")," is that props are not passed to the ",(0,i.yg)("inlineCode",{parentName:"li"},"style")," object, but rather as separate props of the component."),(0,i.yg)("li",{parentName:"ul"},"By using ",(0,i.yg)("inlineCode",{parentName:"li"},"useAnimatedStyle")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"useAnimatedProps"),", you can access the value stored in a shared value. This can add additional control over the animation."),(0,i.yg)("li",{parentName:"ul"},"You can make your own animatable components by wrapping them with ",(0,i.yg)("inlineCode",{parentName:"li"},"Animated.createAnimatedComponent"),".")),(0,i.yg)("h2",{id:"whats-next"},"What's next?"),(0,i.yg)("p",null,"In ",(0,i.yg)("a",{parentName:"p",href:"/docs/fundamentals/customizing-animation"},"the next section"),", we'll learn more about animation functions and how to customize their behavior."))}w.isMDXComponent=!0},71238:(e,n,t)=>{t.d(n,{A:()=>a});const a="import React from 'react';\nimport { Button, View, StyleSheet } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedProps,\n  withTiming,\n} from 'react-native-reanimated';\nimport { Svg, Circle } from 'react-native-svg';\n\nconst AnimatedCircle = Animated.createAnimatedComponent(Circle);\n\nexport default function App() {\n  const r = useSharedValue(20);\n\n  const handlePress = () => {\n    r.value += 10;\n  };\n\n  // highlight-start\n  const animatedProps = useAnimatedProps(() => ({\n    r: withTiming(r.value),\n  }));\n  // highlight-end\n\n  return (\n    <View style={styles.container}>\n      <Svg style={styles.svg}>\n        <AnimatedCircle\n          cx=\"50%\"\n          cy=\"50%\"\n          fill=\"#b58df1\"\n          // highlight-next-line\n          animatedProps={animatedProps}\n        />\n      </Svg>\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  svg: {\n    height: 250,\n    width: '100%',\n  },\n});\n"},36660:(e,n,t)=>{t.d(n,{A:()=>a});const a="import React from 'react';\nimport { Button, View, StyleSheet } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const translateX = useSharedValue(0);\n\n  const handlePress = () => {\n    translateX.value += 50;\n  };\n\n  // highlight-start\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: withSpring(translateX.value * 2) }],\n  }));\n  // highlight-end\n\n  return (\n    <>\n      {/* highlight-next-line */}\n      <Animated.View style={[styles.box, animatedStyles]} />\n      <View style={styles.container}>\n        <Button onPress={handlePress} title=\"Click me\" />\n      </View>\n    </>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 50,\n  },\n});\n"},27979:(e,n,t)=>{t.d(n,{e:()=>o});var a=t(49253);function i(e,n,t){if(n.skipAnimation)return 0;const{stiffness:a,dampingRatio:i,restSpeedThreshold:o,duration:s}=n;return function(e){let{min:n,max:t,func:a,maxIterations:i=20}=e,o=i,s=(t+n)/2;for(;Math.abs(a(s))>5e-5&&o>0;)o-=1,a(s)<0?n=s:t=s,s=(n+t)/2;return s}({min:0,max:100,func:n=>{const l=(n*t*t+a*e*e)/(Math.exp(1-.5*i)*a);return-2*n/(2*i*Math.sqrt(a*n))*1e3*Math.log(.01*o/l)-s}})}const o=(e,n,t)=>(0,a.yK)(e,(()=>{const o={...{damping:10,mass:1,stiffness:100,overshootClamping:!1,restDisplacementThreshold:.01,restSpeedThreshold:2,velocity:0,duration:2e3,dampingRatio:.5,reduceMotion:void 0,clamp:void 0},...n,useDuration:!!(null!=n&&n.duration||null!=n&&n.dampingRatio),skipAnimation:!1};return o.skipAnimation=!function(e){var n,t;let a="";return["stiffness","damping","dampingRatio","restDisplacementThreshold","restSpeedThreshold","mass"].forEach((n=>{const t=e[n];t<=0&&(a+=`, ${n} must be grater than zero but got ${t}`)})),e.duration<0&&(a+=`, duration can't be negative, got ${e.duration}`),null!==(n=e.clamp)&&void 0!==n&&n.min&&null!==(t=e.clamp)&&void 0!==t&&t.max&&e.clamp.min>e.clamp.max&&(a+=`, clamp.min should be lower than clamp.max, got clamp: {min: ${e.clamp.min}, max: ${e.clamp.max}} `),""!==a&&console.warn("[Reanimated] Invalid spring config"+a),""===a}(o),0===o.duration&&(o.skipAnimation=!0),{onFrame:function(e,n){const{toValue:t,startTimestamp:a,current:i}=e,s=n-a;if(o.useDuration&&s>=o.duration)return e.current=t,e.lastTimestamp=0,!0;if(o.skipAnimation)return e.current=t,e.lastTimestamp=0,!0;const{lastTimestamp:l,velocity:r}=e,m=Math.min(n-l,64);e.lastTimestamp=n;const p=m/1e3,d=-r,u=t-i,{zeta:c,omega0:g,omega1:h}=e,{position:y,velocity:v}=c<1?function(e,n){const{toValue:t,current:a,velocity:i}=e,{zeta:o,t:s,omega0:l,omega1:r}=n,m=-i,p=t-a,d=Math.sin(r*s),u=Math.cos(r*s),c=Math.exp(-o*l*s),g=c*(d*((m+o*l*p)/r)+p*u);return{position:t-g,velocity:o*l*g-c*(u*(m+o*l*p)-r*p*d)}}(e,{zeta:c,v0:d,x0:u,omega0:g,omega1:h,t:p}):function(e,n){const{toValue:t}=e,{v0:a,x0:i,omega0:o,t:s}=n,l=Math.exp(-o*s);return{position:t-l*(i+(a+o*i)*s),velocity:l*(a*(s*o-1)+s*i*o*o)}}(e,{v0:d,x0:u,omega0:g,t:p});e.current=y,e.velocity=v;const{isOvershooting:f,isVelocity:w,isDisplacement:b}=function(e,n){const{toValue:t,velocity:a,startValue:i,current:o}=e;return{isOvershooting:!!n.overshootClamping&&(o>t&&i<t||o<t&&i>t),isVelocity:Math.abs(a)<n.restSpeedThreshold,isDisplacement:Math.abs(t-o)<n.restDisplacementThreshold}}(e,o),A=f||w&&b;return!(o.useDuration||!A)&&(e.velocity=0,e.current=t,e.lastTimestamp=0,!0)},onStart:function(e,n,t,a){e.current=n,e.startValue=n;let s=o.mass;const l=function(e,n){return(null==e?void 0:e.lastTimestamp)&&(null==e?void 0:e.startTimestamp)&&(null==e?void 0:e.toValue)===n.toValue&&(null==e?void 0:e.duration)===n.duration&&(null==e?void 0:e.dampingRatio)===n.dampingRatio}(a,e),r=o.duration,m=l?null==a?void 0:a.startValue:Number(e.toValue)-n;if(e.velocity=a?(l?null==a?void 0:a.velocity:(null==a?void 0:a.velocity)+o.velocity)||0:o.velocity||0,l)e.zeta=(null==a?void 0:a.zeta)||0,e.omega0=(null==a?void 0:a.omega0)||0,e.omega1=(null==a?void 0:a.omega1)||0;else{if(o.useDuration){const n=l?r-(((null==a?void 0:a.lastTimestamp)||0)-((null==a?void 0:a.startTimestamp)||0)):r;o.duration=n,s=i(m,o,e.velocity)}const{zeta:n,omega0:t,omega1:p}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;if(n.skipAnimation)return{zeta:0,omega0:0,omega1:0};if(n.useDuration){const{stiffness:t,dampingRatio:a}=n,i=Math.sqrt(t/e);return{zeta:a,omega0:i,omega1:i*Math.sqrt(1-a**2)}}{const{damping:e,mass:t,stiffness:a}=n,i=e/(2*Math.sqrt(a*t)),o=Math.sqrt(a/t);return{zeta:i,omega0:o,omega1:o*Math.sqrt(1-i**2)}}}(s,o);e.zeta=n,e.omega0=t,e.omega1=p,void 0!==o.clamp&&(e.zeta=function(e,n){const{zeta:t,toValue:a,startValue:i}=e,o=Number(a);if(o===i)return t;const[s,l]=o-i>0?[n.min,n.max]:[n.max,n.min],r=void 0!==l?Math.abs((l-o)/(o-i)):void 0,m=void 0!==s?Math.abs((s-o)/(o-i)):void 0,p=[void 0!==r?Math.abs(Math.log(r)/Math.PI):void 0,void 0!==m?Math.abs(Math.log(m)/(2*Math.PI)):void 0].filter((e=>void 0!==e));return Math.max(...p,t)}(e,o.clamp))}e.lastTimestamp=(null==a?void 0:a.lastTimestamp)||t,e.startTimestamp=l&&(null==a?void 0:a.startTimestamp)||t},toValue:e,velocity:o.velocity||0,current:e,startValue:0,callback:t,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:(0,a.AR)(o.reduceMotion)}}))},92220:(e,n,t)=>{t.d(n,{X:()=>i});var a=t(9176);const i=(0,t(72089).b)(a.A)}}]);