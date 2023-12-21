"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7335],{347:(e,t,n)=>{n.d(t,{D:()=>o});var r=n(76933);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return(0,r.oF)(e,(()=>{const i="function"==typeof e?e():e;return{isHigherOrder:!0,onFrame:function(e,r){const o=i.onFrame(i,r);if(e.current=i.current,o){if(e.reps+=1,i.callback&&i.callback(!0,e.current),e.reduceMotion||t>0&&e.reps>=t)return!0;const o=n?i.current:e.startValue;return n&&(i.toValue=e.startValue,e.startValue=o),i.onStart(i,o,r,i.previousAnimation),!1}return!1},onStart:function(e,r,o,a){e.startValue=r,e.reps=0,void 0===i.reduceMotion&&(i.reduceMotion=e.reduceMotion),e.reduceMotion&&n&&(t<=0||t%2==0)?(e.current=e.startValue,e.onFrame=()=>!0):i.onStart(i,r,o,a)},reps:0,current:i.current,callback:e=>{o&&o(e),!e&&i.callback&&i.callback(!1)},startValue:0,reduceMotion:(0,r.uh)(a)}}))}},12448:(e,t,n)=>{n.d(t,{u:()=>o});var r=n(76933);function o(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];let a;return e&&("string"==typeof e?a=e:n.unshift(e)),0===n.length?(console.warn("[Reanimated] No animation was provided for the sequence"),(0,r.oF)(0,(()=>({onStart:(e,t)=>e.current=t,onFrame:()=>!0,current:0,animationIndex:0,reduceMotion:(0,r.uh)(a)})))):(0,r.oF)(n[0],(()=>{const e=n.map((e=>{const t="function"==typeof e?e():e;return t.finished=!1,t}));function t(t){for(;t<e.length-1&&e[t].reduceMotion;)t++;return t}return{isHigherOrder:!0,onFrame:function(n,r){const o=e[n.animationIndex],a=o.onFrame(o,r);if(n.current=o.current,a){if(o.callback&&o.callback(!0),o.finished=!0,n.animationIndex=t(n.animationIndex+1),n.animationIndex<e.length){const t=e[n.animationIndex];return t.onStart(t,o.current,r,o),!1}return!0}return!1},onStart:function(n,r,o,a){e.forEach((e=>{void 0===e.reduceMotion&&(e.reduceMotion=n.reduceMotion)})),n.animationIndex=t(0),void 0===a&&(a=e[e.length-1]);const i=e[n.animationIndex];i.onStart(i,r,o,a)},animationIndex:0,current:e[0].current,callback:t=>{t||e.forEach((e=>{"function"!=typeof e.callback||e.finished||e.callback(t)}))},reduceMotion:(0,r.uh)(a)}}))}},49638:(e,t,n)=>{n.d(t,{n:()=>a});var r=n(67177),o=n(69789);n(67294);const a=(0,o.F)(r.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>v});var r=n(67294),o=n(96085),a=n(97604),i=n(49402),s=n(76933),c=n(10758),l=n(40093),u=n(41956),d=n(83442);const f=!(0,d.Wr)();function m(e,t,n,r){if(Array.isArray(t)&&t.forEach(((t,o)=>{m(e,t,n&&n[o],r&&r[o])})),"object"==typeof t&&t.onFrame){const o=t;let a=o.current;void 0!==r&&("object"==typeof r?void 0!==r.value?a=r.value:void 0!==r.onFrame&&(void 0!==(null==n?void 0:n.current)?a=n.current:void 0!==(null==r?void 0:r.current)&&(a=r.current)):a=r),o.callStart=e=>{o.onStart(o,a,e,n)},o.callStart(e),o.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((o=>m(e,t[o],n&&n[o],r&&r[o])))}function b(e,t,n,r,o){if(!o.value)return!0;if(Array.isArray(e)){r[n]=[];let a=!0;return e.forEach(((e,i)=>{b(e,t,i,r[n],o)||(a=!1)})),a}if("object"==typeof e&&e.onFrame){let o=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),o=e.onFrame(e,t),e.timestamp=t,o&&(e.finished=!0,e.callback&&e.callback(!0))),r[n]=e.current,o}if("object"==typeof e){r[n]={};let a=!0;return Object.keys(e).forEach((i=>{b(e[i],t,i,r[n],o)||(a=!1)})),a}return r[n]=e,!0}function y(e,t){if(Array.isArray(e))for(const n of e)y(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))y(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function v(e,t,v){let h=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const p=(0,u.S)(),g=(0,r.useRef)();let A=Object.values(e.__closure??{});var k;f||!A.length&&null!==(k=t)&&void 0!==k&&k.length&&(A=t);const w=v?Array.isArray(v)?v:[v]:[],j=v?(0,l.Nq)(w):null,R=(0,c.y)(!0),S=(0,r.useRef)({});if(t?t.push(e.__workletHash):t=[...A,e.__workletHash],j&&t.push(j),!g.current){const t=(0,s.AX)(e);(0,l.Dl)(t),g.current={initial:{value:t,updater:e},remoteState:(0,o.I1)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,u.G)()}}const{initial:E,remoteState:P,viewDescriptors:O}=g.current,_=O.shareableViewDescriptors,C=f?void 0:p;return t.push(_),(0,r.useEffect)((()=>{let t,r=e;v&&(r=()=>{const t=e();return w.forEach((e=>{e(t)})),t}),t=(0,d.V5)()?()=>{!function(e,t,r,o,a,s){let c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[];const u=r.animations??{},d=t()??{},f=r.last;let y,v=!1;Object.keys(u).forEach((e=>{const t=d[e];(0,l.mE)(t)||delete u[e]})),Object.keys(d).forEach((e=>{const t=d[e];(0,l.mE)(t)&&(y=n.g.__frameTimestamp||_getAnimationTimestamp(),m(y,t,u[e],f[e]),u[e]=t,v=!0)})),v?(r.animations=u,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,function t(n){const{animations:l,last:u,isAnimationCancelled:d}=r;if(d)return void(r.isAnimationRunning=!1);const f={};let m=!0;Object.keys(l).forEach((e=>{b(l[e],n,e,f,a)?(u[e]=f[e],delete l[e]):m=!1})),Object.keys(f).length&&(0,i.R)(e,f,o,s,c),m?r.isAnimationRunning=!1:requestAnimationFrame(t)}(y))):(r.isAnimationCancelled=!0,r.animations=[]),r.last=d,(0,l.wU)(f,d)||(0,i.R)(e,d,o,s,c)}(_,e,P,C,R,S,w)}:()=>{!function(e,t,r,o,a){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const c=r.animations??{},u=t()??{},d=r.last,f={};let y,v=!1,h=!1;for(const i in u){const e=u[i];(0,l.mE)(e)?(y=n.g.__frameTimestamp||_getAnimationTimestamp(),m(y,e,c[i],d[i]),c[i]=e,v=!0):(h=!0,f[i]=e,delete c[i])}if(v){const t=n=>{const{animations:s,last:c,isAnimationCancelled:l}=r;if(l)return void(r.isAnimationRunning=!1);const u={};let d=!0;for(const e in s)b(s[e],n,e,u,a)?(c[e]=u[e],delete s[e]):d=!1;u&&(0,i.Z)(e,u,o),d?r.isAnimationRunning=!1:requestAnimationFrame(t)};r.animations=c,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,t(y)),h&&(0,i.Z)(e,f,o)}else r.isAnimationCancelled=!0,r.animations=[],(0,l.wU)(d,u)||(0,i.Z)(e,u,o,s);r.last=u}(_,r,P,C,R,h)};const o=(0,a.R)(t,A);return()=>{(0,a.B)(o)}}),t),(0,r.useEffect)((()=>(R.value=!0,()=>{R.value=!1})),[]),y(E.value),(0,d.V5)()?{viewDescriptors:O,initial:E,viewsRef:p,animatedStyle:S}:{viewDescriptors:O,initial:E,viewsRef:p}}},40093:(e,t,n)=>{function r(e){return Object.values(e).reduce(((e,t)=>e+t.__workletHash.toString()),"")}function o(e,t){const n=Object.values(t).filter((e=>void 0!==e));return e?e.push(r(n)):e=n.map((e=>({workletHash:e.__workletHash,closure:e.__closure}))),e}function a(e,t){const n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};return function(e,t){if(!e||!t||t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(!n(e[r],t[r]))return!1;return!0}(e,t)}function i(e){return Array.isArray(e)?e.some(i):"object"==typeof e&&null!==e&&(void 0!==e.onFrame||Object.values(e).some(i))}function s(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(e[n[o]]!==t[n[o]])return!1;return!0}function c(e){if("object"!=typeof e)throw new Error(`[Reanimated] \`useAnimatedStyle\` has to return an object, found ${typeof e} instead.`);if(Array.isArray(e))throw new Error("[Reanimated] `useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.")}n.d(t,{C1:()=>o,Dl:()=>c,Nq:()=>r,mE:()=>i,qD:()=>a,wU:()=>s})},14779:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),o=n(72862),a=n(83117),i=n(80102),s=n(16528),c=n(94119),l=n(67177),u=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,o=e.delayPressIn,d=e.delayPressOut,m=e.delayLongPress,b=e.disabled,y=e.focusable,v=e.onLongPress,h=e.onPress,p=e.onPressIn,g=e.onPressOut,A=e.rejectResponderTermination,k=e.style,w=(0,i.Z)(e,u),j=(0,r.useRef)(null),R=(0,s.Z)(t,j),S=(0,r.useState)("0s"),E=S[0],P=S[1],O=(0,r.useState)(null),_=O[0],C=O[1],D=(0,r.useCallback)(((e,t)=>{C(e),P(t?t/1e3+"s":"0s")}),[C,P]),F=(0,r.useCallback)((e=>{D(null!=n?n:.2,e)}),[n,D]),I=(0,r.useCallback)((e=>{D(null,e)}),[D]),x=(0,r.useMemo)((()=>({cancelable:!A,disabled:b,delayLongPress:m,delayPressStart:o,delayPressEnd:d,onLongPress:v,onPress:h,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;F(t?0:150),null!=p&&p(e)},onPressEnd(e){I(250),null!=g&&g(e)}})),[m,o,d,b,v,h,p,g,A,F,I]),M=(0,c.Z)(j,x);return r.createElement(l.Z,(0,a.Z)({},w,M,{accessibilityDisabled:b,focusable:!b&&!1!==y,pointerEvents:b?"none":void 0,ref:R,style:[f.root,!b&&f.actionable,k,null!=_&&{opacity:_},{transitionDuration:E}]}))}var f=o.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),m=r.memo(r.forwardRef(d));m.displayName="TouchableOpacity";const b=m;var y=n(24404),v=r.forwardRef(((e,t)=>{var n=e.accessibilityLabel,o=e.color,a=e.disabled,i=e.onPress,s=e.testID,c=e.title;return r.createElement(b,{accessibilityLabel:n,accessibilityRole:"button",disabled:a,focusable:!a,onPress:i,ref:t,style:[h.button,o&&{backgroundColor:o},a&&h.buttonDisabled],testID:s},r.createElement(y.Z,{style:[h.text,a&&h.textDisabled]},c))}));v.displayName="Button";var h=o.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const p=v}}]);