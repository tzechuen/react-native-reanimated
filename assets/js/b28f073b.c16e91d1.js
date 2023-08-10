"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const o={id:"web-support",title:"Web Support",sidebar_label:"Web Support"},l=void 0,i={unversionedId:"guides/web-support",id:"guides/web-support",title:"Web Support",description:"This page was ported from an old version of the documentation.",source:"@site/docs/guides/web-support.md",sourceDirName:"guides",slug:"/guides/web-support",permalink:"/react-native-reanimated/docs/guides/web-support",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/docs/guides/web-support.md",tags:[],version:"current",frontMatter:{id:"web-support",title:"Web Support",sidebar_label:"Web Support"},sidebar:"tutorialSidebar",previous:{title:"Testing with Jest",permalink:"/react-native-reanimated/docs/guides/testing"}},p={},s=[{value:"Webpack support",id:"webpack-support",level:2},{value:"Web without a Babel plugin",id:"web-without-a-babel-plugin",level:2},{value:"ESLint Support",id:"eslint-support",level:3},{value:"Solito / Next.js Compatibility",id:"solito--nextjs-compatibility",level:2},{value:"Next.js Polyfill",id:"nextjs-polyfill",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page was ported from an old version of the documentation."),(0,r.kt)("p",{parentName:"admonition"},"As we're rewriting the documentation some of the pages might be a little outdated.")),(0,r.kt)("p",null,"It's possible to launch Reanimated in a web browser. For that case all of the functionalities are implemented purely in JavaScript, hence the efficiency of the animations might be lower."),(0,r.kt)("p",null,"Reanimated for Web requires the following configuration steps. You need to add ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-export-namespace-from"},(0,r.kt)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-export-namespace-from"))," as well as Reanimated Babel plugin to your ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @babel/plugin-proposal-export-namespace-from\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5,6}","{5,6}":!0},"module.exports = {\n  presets: [\n      ...\n  ],\n  plugins: [\n    ...\n    '@babel/plugin-proposal-export-namespace-from',\n    'react-native-reanimated/plugin',\n  ],\n};\n")),(0,r.kt)("p",null,"If you use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"playground"),"\napp and want to start it in the browser just type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn web\n")),(0,r.kt)("p",null,"If you want to start the example applications from the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"reanimated repository"),"\nyou need to run the following command inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Example")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start-web\n")),(0,r.kt)("h2",{id:"webpack-support"},"Webpack support"),(0,r.kt)("p",null,"If you want to use Reanimated in a ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," app you should adjust your ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," config."),(0,r.kt)("p",null,"Example webpack config file with Reanimated support:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6,14,15,34}","{6,14,15,34}":!0},"const HtmlWebpackPlugin = require('html-webpack-plugin');\nconst webpack = require('webpack');\n\nmodule.exports = {\n  entry: ['babel-polyfill', './index.js'],\n  plugins: [\n    new HtmlWebpackPlugin({\n      filename: 'index.html',\n      template: './index.html',\n    }),\n    new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),\n    new webpack.DefinePlugin({ process: { env: {} } }),\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.(js|jsx)$/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: [\n              '@babel/preset-react',\n              { plugins: ['@babel/plugin-proposal-class-properties'] },\n            ],\n          },\n        },\n      },\n    ],\n  },\n  resolve: {\n    alias: { 'react-native$': 'react-native-web' },\n    extensions: ['.web.js', '.js'],\n  },\n};\n")),(0,r.kt)("h2",{id:"web-without-a-babel-plugin"},"Web without a Babel plugin"),(0,r.kt)("p",null,"It is possible to use Reanimated without the Babel plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated/plugin")," on the Web, with some additional configuration."),(0,r.kt)("p",null,"Reanimated hooks all accept optional dependency arrays. Under the hood, the Reanimated Babel plugin inserts these for you."),(0,r.kt)("p",null,"In order to use Reanimated without a Babel/SWC plugin, you need to explicitly pass the dependency array whenever you use a Reanimated hook."),(0,r.kt)("p",null,"Passing a dependency array is valid on both Web and native. Adding them will not negatively impact iOS or Android."),(0,r.kt)("p",null,"Make sure the following hooks have a dependency array as the last argument:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useDerivedValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useAnimatedStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useAnimatedProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useAnimatedReaction"))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const sv = useSharedValue(0);\nconst dv = useDerivedValue(\n  () => sv.value + 1,\n  [sv] // dependency array here\n);\n")),(0,r.kt)("p",null,"Be sure to pass the dependency itself (",(0,r.kt)("inlineCode",{parentName:"p"},"sv"),") and not ",(0,r.kt)("inlineCode",{parentName:"p"},"sv.value")," to the dependency array."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Babel users will still need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-class-properties")," plugin.")),(0,r.kt)("h3",{id:"eslint-support"},"ESLint Support"),(0,r.kt)("p",null,"When you use hooks from React, they give you nice suggestions from ESLint to include all dependencies. In order to add this support to Reanimated hooks, add the following to your ESLint config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rules": {\n    "react-hooks/exhaustive-deps": [\n      "error",\n      {\n        "additionalHooks": "(useAnimatedStyle|useDerivedValue|useAnimatedProps)"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"This assumes you've already installed the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-hooks")," eslint ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"plugin"),"."),(0,r.kt)("p",null,"If you're using ESLint autofix, the ESLint plugin may add ",(0,r.kt)("inlineCode",{parentName:"p"},".value")," to the dependency arrays, rather than the root dependency. In these cases, you should update the array yourself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const sv = useSharedValue(0);\n\n// \ud83d\udea8 bad, sv.value is in the array\nconst dv = useDerivedValue(() => sv.value, [sv.value]);\n\n// \u2705 good, sv is in the array\nconst dv = useDerivedValue(() => sv.value, [sv]);\n")),(0,r.kt)("h2",{id:"solito--nextjs-compatibility"},"Solito / Next.js Compatibility"),(0,r.kt)("p",null,"There is an experimental SWC plugin in the works. However, given that this may not work properly, you can use the ",(0,r.kt)("a",{parentName:"p",href:"#web-without-a-babel-plugin"},'"Web without a Babel plugin"')," instructions above."),(0,r.kt)("h3",{id:"nextjs-polyfill"},"Next.js Polyfill"),(0,r.kt)("p",null,"In order to use Reanimated with Next.js / Solito, you'll need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"raf")," polyfill for ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," to not throw on the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add raf\n")),(0,r.kt)("p",null,"Add the following to the top of your ",(0,r.kt)("inlineCode",{parentName:"p"},"_app.tsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import 'raf/polyfill';\n")))}c.isMDXComponent=!0}}]);