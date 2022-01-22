(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{8510:function(e,t,n){"use strict";n.d(t,{E:function(){return k}});var r=n(9642),i=n(7294),o=n(133),a=n(8529),c=n(2659),u=n(852),l=n(2506),s=n(5057),d=n(7587);var f=(0,i.createContext)(null);function p(){var e=(0,i.useContext)(f);if(null===e){var t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,p),t}return e}function m(){var e=(0,i.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,(0,i.useMemo)((function(){return function(e){var t=(0,i.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=(0,i.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return i.createElement(f.Provider,{value:r},e.children)}}),[n])]}var v,g;!function(e){e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption"}(g||(g={}));var b=((v={})[g.RegisterOption]=function(e,t){return(0,r.gY)({},e,{options:[].concat(e.options,[{id:t.id,element:t.element,propsRef:t.propsRef}])})},v[g.UnregisterOption]=function(e,t){var n=e.options.slice(),i=e.options.findIndex((function(e){return e.id===t.id}));return-1===i?e:(n.splice(i,1),(0,r.gY)({},e,{options:n}))},v),h=(0,i.createContext)(null);function y(e){var t=(0,i.useContext)(h);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+k.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,y),n}return t}function w(e,t){return(0,o.E)(t.type,b,e,t)}h.displayName="RadioGroupContext";var E;function k(e){var t=e.value,n=e.onChange,o=e.disabled,f=void 0!==o&&o,p=(0,r.gK)(e,["value","onChange","disabled"]),v=(0,i.useReducer)(w,{options:[]}),b=v[0].options,y=v[1],E=m(),k=E[0],O=E[1],A=(0,d.f)(),S=A[0],R=A[1],C="headlessui-radiogroup-"+(0,l.M)(),x=(0,i.useRef)(null),j=(0,i.useMemo)((function(){return b.find((function(e){return!e.propsRef.current.disabled}))}),[b]),P=(0,i.useMemo)((function(){return b.some((function(e){return e.propsRef.current.value===t}))}),[b,t]),z=(0,i.useCallback)((function(e){var r;if(f)return!1;if(e===t)return!1;var i=null==(r=b.find((function(t){return t.propsRef.current.value===e})))?void 0:r.propsRef.current;return!(null==i?void 0:i.disabled)&&(n(e),!0)}),[n,t,f,b]);!function(e){var t=e.container,n=e.accept,r=e.walk,o=e.enabled,a=void 0===o||o,c=(0,i.useRef)(n),l=(0,i.useRef)(r);(0,i.useEffect)((function(){c.current=n,l.current=r}),[n,r]),(0,u.e)((function(){if(t&&a)for(var e=c.current,n=l.current,r=Object.assign((function(t){return e(t)}),{acceptNode:e}),i=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,r,!1);i.nextNode();)n(i.currentNode)}),[t,a,c,l])}({container:x.current,accept:function(e){return"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var L=(0,i.useCallback)((function(e){if(x.current){var t=b.filter((function(e){return!1===e.propsRef.current.disabled})).map((function(e){return e.element.current}));switch(e.key){case c.R.ArrowLeft:case c.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,s.jA)(t,s.TO.Previous|s.TO.WrapAround)===s.fE.Success){var n=b.find((function(e){return e.element.current===document.activeElement}));n&&z(n.propsRef.current.value)}break;case c.R.ArrowRight:case c.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,s.jA)(t,s.TO.Next|s.TO.WrapAround)===s.fE.Success){var r=b.find((function(e){return e.element.current===document.activeElement}));r&&z(r.propsRef.current.value)}break;case c.R.Space:e.preventDefault(),e.stopPropagation();var i=b.find((function(e){return e.element.current===document.activeElement}));i&&z(i.propsRef.current.value)}}}),[x,b,z]),I=(0,i.useCallback)((function(e){return y((0,r.gY)({type:g.RegisterOption},e)),function(){return y({type:g.UnregisterOption,id:e.id})}}),[y]),_=(0,i.useMemo)((function(){return{registerOption:I,firstOption:j,containsCheckedOption:P,change:z,disabled:f,value:t}}),[I,j,P,z,f,t]),N={ref:x,id:C,role:"radiogroup","aria-labelledby":k,"aria-describedby":S,onKeyDown:L};return i.createElement(R,{name:"RadioGroup.Description"},i.createElement(O,{name:"RadioGroup.Label"},i.createElement(h.Provider,{value:_},(0,a.sY)({props:(0,r.gY)({},p,N),defaultTag:"div",name:"RadioGroup"}))))}!function(e){e[e.Empty=1]="Empty",e[e.Active=2]="Active"}(E||(E={}));k.Option=function e(t){var n=(0,i.useRef)(null),o="headlessui-radiogroup-option-"+(0,l.M)(),c=m(),s=c[0],f=c[1],p=(0,d.f)(),v=p[0],g=p[1],b=function(e){void 0===e&&(e=0);var t=(0,i.useState)(e),n=t[0],r=t[1];return{addFlag:(0,i.useCallback)((function(e){return r((function(t){return t|e}))}),[r]),hasFlag:(0,i.useCallback)((function(e){return Boolean(n&e)}),[n]),removeFlag:(0,i.useCallback)((function(e){return r((function(t){return t&~e}))}),[r]),toggleFlag:(0,i.useCallback)((function(e){return r((function(t){return t^e}))}),[r])}}(E.Empty),h=b.addFlag,w=b.removeFlag,O=b.hasFlag,A=t.value,S=t.disabled,R=void 0!==S&&S,C=(0,r.gK)(t,["value","disabled"]),x=(0,i.useRef)({value:A,disabled:R});(0,u.e)((function(){x.current.value=A}),[A,x]),(0,u.e)((function(){x.current.disabled=R}),[R,x]);var j=y([k.name,e.name].join(".")),P=j.registerOption,z=j.disabled,L=j.change,I=j.firstOption,_=j.containsCheckedOption,N=j.value;(0,u.e)((function(){return P({id:o,element:n,propsRef:x})}),[o,P,n,t]);var T=(0,i.useCallback)((function(){var e;L(A)&&(h(E.Active),null==(e=n.current)||e.focus())}),[h,L,A]),D=(0,i.useCallback)((function(){return h(E.Active)}),[h]),M=(0,i.useCallback)((function(){return w(E.Active)}),[w]),F=(null==I?void 0:I.id)===o,q=z||R,U=N===A,W={ref:n,id:o,role:"radio","aria-checked":U?"true":"false","aria-labelledby":s,"aria-describedby":v,"aria-disabled":!!q||void 0,tabIndex:q?-1:U||!_&&F?0:-1,onClick:q?void 0:T,onFocus:q?void 0:D,onBlur:q?void 0:M},B=(0,i.useMemo)((function(){return{checked:U,disabled:q,active:O(E.Active)}}),[U,q,O]);return i.createElement(g,{name:"RadioGroup.Description"},i.createElement(f,{name:"RadioGroup.Label"},(0,a.sY)({props:(0,r.gY)({},C,W),slot:B,defaultTag:"div",name:"RadioGroup.Option"})))},k.Label=function(e){var t=e.passive,n=void 0!==t&&t,i=(0,r.gK)(e,["passive"]),o=p(),c="headlessui-label-"+(0,l.M)();(0,u.e)((function(){return o.register(c)}),[c,o.register]);var s=(0,r.gY)({},o.props,{id:c}),d=(0,r.gY)({},i,s);return n&&delete d.onClick,(0,a.sY)({props:d,slot:o.slot||{},defaultTag:"label",name:o.name||"Label"})},k.Description=d.d},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,a=void 0!==r&&r,c=e.priority,d=void 0!==c&&c,p=e.loading,m=e.lazyBoundary,h=void 0===m?"200px":m,w=e.className,E=e.quality,k=e.width,O=e.height,A=e.objectFit,S=e.objectPosition,j=e.onLoadingComplete,P=e.loader,z=void 0===P?x:P,L=e.placeholder,I=void 0===L?"empty":L,_=e.blurDataURL,N=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),T=n?"responsive":"intrinsic";"layout"in N&&(N.layout&&(T=N.layout),delete N.layout);var D="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var M=y(t)?t.default:t;if(!M.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(_=_||M.blurDataURL,D=M.src,(!T||"fill"!==T)&&(O=O||M.height,k=k||M.width,!M.height||!M.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))}t="string"===typeof t?t:D;var F=C(k),q=C(O),U=C(E),W=!d&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,W=!1);g.has(t)&&(W=!1);0;var B,Y=o(f.useIntersection({rootMargin:h,disabled:!W}),2),G=Y[0],H=Y[1],K=!W||H,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},V={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,$={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:S},X="blur"===I?{filter:"blur(20px)",backgroundSize:A||"cover",backgroundImage:'url("'.concat(_,'")'),backgroundPosition:S||"0% 0%"}:{};if("fill"===T)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof F&&"undefined"!==typeof q){var Z=q/F,ee=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===T?(J.display="block",J.position="relative",Q=!0,V.paddingTop=ee):"intrinsic"===T?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Q=!0,V.maxWidth="100%",B='<svg width="'.concat(F,'" height="').concat(q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===T&&(J.display="inline-block",J.position="relative",J.width=F,J.height=q)}else 0;var te={src:b,srcSet:void 0,sizes:void 0};K&&(te=R({src:t,unoptimized:a,layout:T,width:F,quality:U,sizes:n,loader:z}));var ne=t;0;var re;0;var ie=(i(re={},"imagesrcset",te.srcSet),i(re,"imagesizes",te.sizes),re);return u.default.createElement("span",{style:J},Q?u.default.createElement("span",{style:V},B?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(B))}):null):null,u.default.createElement("img",Object.assign({},N,te,{decoding:"async","data-nimg":T,className:w,ref:function(e){G(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src!==b&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="",e.style.backgroundSize="",e.style.backgroundImage="",e.style.backgroundPosition=""),g.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,ne,0,I,j)},style:v({},$,X)})),W&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},N,R({src:t,unoptimized:a,layout:T,width:F,quality:U,sizes:n,loader:z}),{decoding:"async","data-nimg":T,style:$,className:w,loading:p||"lazy"}))),d?u.default.createElement(l.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+te.src+te.srcSet+te.sizes,rel:"preload",as:"image",href:te.srcSet?void 0:te.src},ie))):null)};var u=m(n(7294)),l=m(n(5443)),s=n(6978),d=n(5809),f=n(7190);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return e&&e.__esModule?e:{default:e}}function v(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){p(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var g=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||d.imageConfigDefault,E=w.deviceSizes,k=w.imageSizes,O=w.loader,A=w.path,S=(w.domains,a(E).concat(a(k)));function R(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,o=e.quality,c=e.sizes,u=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c,u=.01*(c=Math).min.apply(c,a(o));return{widths:S.filter((function(e){return e>=E[0]*u})),kind:"w"}}return{widths:S,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:E,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return S.find((function(t){return t>=e}))||S[S.length-1]})))),kind:"x"}}(i,r,c),s=l.widths,d=l.kind,f=s.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:s.map((function(e,n){return"".concat(u({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:u({src:t,quality:o,width:s[f]})}}function C(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t=h.get(O);if(t)return t(v({root:A},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(O))}function j(e){return"/"===e[0]?e.slice(1):e}E.sort((function(e,t){return e-t})),S.sort((function(e,t){return e-t}))},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,n){e.exports=n(8045)},591:function(e,t,n){"use strict";n.d(t,{Hs:function(){return u}});var r=n(7294),i=[];function o(e){var t=function(){var e="https://js.paystack.co/v1/inline.js",t=(0,r.useState)({loaded:!1,error:!1}),n=t[0],o=t[1];return(0,r.useEffect)((function(){if(!i.includes(e)){i.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var n=function(){o({loaded:!0,error:!1})},r=function(){var n=i.indexOf(e);n>=0&&i.splice(n,1),t.remove(),o({loaded:!0,error:!0})};return t.addEventListener("load",n),t.addEventListener("complete",n),t.addEventListener("error",r),document.body.appendChild(t),function(){t.removeEventListener("load",n),t.removeEventListener("error",r)}}o({loaded:!0,error:!1})}),[e]),[n.loaded,n.error]}(),n=t[0],o=t[1],a=e.publicKey,c=e.firstname,u=e.lastname,l=e.phone,s=e.email,d=e.amount,f=e.reference,p=e.metadata,m=void 0===p?{}:p,v=e.currency,g=void 0===v?"NGN":v,b=e.channels,h=e.label,y=void 0===h?"":h,w=e.plan,E=void 0===w?"":w,k=e.quantity,O=void 0===k?"":k,A=e.subaccount,S=void 0===A?"":A,R=e.transaction_charge,C=void 0===R?0:R,x=e.bearer,j=void 0===x?"account":x,P=e.split,z=e.split_code;return(0,r.useEffect)((function(){if(o)throw new Error("Unable to load paystack inline script")}),[o]),function(t,r){if(o)throw new Error("Unable to load paystack inline script");n&&function(e){var t=window.PaystackPop&&window.PaystackPop.setup(e);t&&t.openIframe()}({callback:t||function(){return null},onClose:r||function(){return null},key:a,ref:f,email:s,firstname:c,lastname:u,phone:l,amount:d,currency:g,plan:E,quantity:O,"data-custom-button":e["data-custom-button"]||"",channels:b,subaccount:S,transaction_charge:C,bearer:j,label:y,metadata:m,split:P,split_code:z})}}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var u=function(e){var t=e.text,n=e.className,i=e.children,a=e.onSuccess,u=e.onClose,l=o(c(e,["text","className","children","onSuccess","onClose"]));return r.createElement("button",{className:n,onClick:function(){return l(a,u)}},t||i)},l=(0,r.createContext)({initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),s=function(e){var t=e.children,n=e.onSuccess,i=e.onClose,a=o(c(e,["children","onSuccess","onClose"]));return r.createElement(l.Provider,{value:{initializePayment:a,onSuccess:n,onClose:i}},t)},d=function(e){var t=e.children,n=e.ref,i=(0,r.useContext)(l),o=i.initializePayment,a=i.onSuccess,c=i.onClose;return t({initializePayment:function(){return o(a,c)},ref:n})};(0,r.forwardRef)((function(e,t){var n=e.children,i=e.onSuccess,o=e.onClose,u=c(e,["children","onSuccess","onClose"]),l=i||function(){return null},f=o||function(){return null};return r.createElement(s,a({},u,{onSuccess:l,onClose:f}),r.createElement(d,{ref:t},n))}))},3153:function(e,t,n){"use strict";n.d(t,{r7p:function(){return i}});var r=n(7294);var i=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),r.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}))}}}]);