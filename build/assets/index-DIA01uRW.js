function ow(n,r){for(var s=0;s<r.length;s++){const a=r[s];if(typeof a!="string"&&!Array.isArray(a)){for(const c in a)if(c!=="default"&&!(c in n)){const d=Object.getOwnPropertyDescriptor(a,c);d&&Object.defineProperty(n,c,d.get?d:{enumerable:!0,get:()=>a[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function ah(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ed={exports:{}},Yo={},Rd={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function iw(){if(Qm)return Ge;Qm=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,C={};function k(A,U,H){this.props=A,this.context=U,this.refs=C,this.updater=H||S}k.prototype.isReactComponent={},k.prototype.setState=function(A,U){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,U,"setState")},k.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function E(){}E.prototype=k.prototype;function j(A,U,H){this.props=A,this.context=U,this.refs=C,this.updater=H||S}var M=j.prototype=new E;M.constructor=j,N(M,k.prototype),M.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,W={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function V(A,U,H){var G,re={},X=null,O=null;if(U!=null)for(G in U.ref!==void 0&&(O=U.ref),U.key!==void 0&&(X=""+U.key),U)I.call(U,G)&&!z.hasOwnProperty(G)&&(re[G]=U[G]);var K=arguments.length-2;if(K===1)re.children=H;else if(1<K){for(var ue=Array(K),pe=0;pe<K;pe++)ue[pe]=arguments[pe+2];re.children=ue}if(A&&A.defaultProps)for(G in K=A.defaultProps,K)re[G]===void 0&&(re[G]=K[G]);return{$$typeof:n,type:A,key:X,ref:O,props:re,_owner:W.current}}function ne(A,U){return{$$typeof:n,type:A.type,key:U,ref:A.ref,props:A.props,_owner:A._owner}}function te(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function fe(A){var U={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(H){return U[H]})}var ae=/\/+/g;function he(A,U){return typeof A=="object"&&A!==null&&A.key!=null?fe(""+A.key):U.toString(36)}function me(A,U,H,G,re){var X=typeof A;(X==="undefined"||X==="boolean")&&(A=null);var O=!1;if(A===null)O=!0;else switch(X){case"string":case"number":O=!0;break;case"object":switch(A.$$typeof){case n:case r:O=!0}}if(O)return O=A,re=re(O),A=G===""?"."+he(O,0):G,R(re)?(H="",A!=null&&(H=A.replace(ae,"$&/")+"/"),me(re,U,H,"",function(pe){return pe})):re!=null&&(te(re)&&(re=ne(re,H+(!re.key||O&&O.key===re.key?"":(""+re.key).replace(ae,"$&/")+"/")+A)),U.push(re)),1;if(O=0,G=G===""?".":G+":",R(A))for(var K=0;K<A.length;K++){X=A[K];var ue=G+he(X,K);O+=me(X,U,H,ue,re)}else if(ue=b(A),typeof ue=="function")for(A=ue.call(A),K=0;!(X=A.next()).done;)X=X.value,ue=G+he(X,K++),O+=me(X,U,H,ue,re);else if(X==="object")throw U=String(A),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return O}function ge(A,U,H){if(A==null)return A;var G=[],re=0;return me(A,G,"","",function(X){return U.call(H,X,re++)}),G}function J(A){if(A._status===-1){var U=A._result;U=U(),U.then(function(H){(A._status===0||A._status===-1)&&(A._status=1,A._result=H)},function(H){(A._status===0||A._status===-1)&&(A._status=2,A._result=H)}),A._status===-1&&(A._status=0,A._result=U)}if(A._status===1)return A._result.default;throw A._result}var Q={current:null},_={transition:null},B={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:_,ReactCurrentOwner:W};function q(){throw Error("act(...) is not supported in production builds of React.")}return Ge.Children={map:ge,forEach:function(A,U,H){ge(A,function(){U.apply(this,arguments)},H)},count:function(A){var U=0;return ge(A,function(){U++}),U},toArray:function(A){return ge(A,function(U){return U})||[]},only:function(A){if(!te(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ge.Component=k,Ge.Fragment=s,Ge.Profiler=c,Ge.PureComponent=j,Ge.StrictMode=a,Ge.Suspense=h,Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,Ge.act=q,Ge.cloneElement=function(A,U,H){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var G=N({},A.props),re=A.key,X=A.ref,O=A._owner;if(U!=null){if(U.ref!==void 0&&(X=U.ref,O=W.current),U.key!==void 0&&(re=""+U.key),A.type&&A.type.defaultProps)var K=A.type.defaultProps;for(ue in U)I.call(U,ue)&&!z.hasOwnProperty(ue)&&(G[ue]=U[ue]===void 0&&K!==void 0?K[ue]:U[ue])}var ue=arguments.length-2;if(ue===1)G.children=H;else if(1<ue){K=Array(ue);for(var pe=0;pe<ue;pe++)K[pe]=arguments[pe+2];G.children=K}return{$$typeof:n,type:A.type,key:re,ref:X,props:G,_owner:O}},Ge.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:d,_context:A},A.Consumer=A},Ge.createElement=V,Ge.createFactory=function(A){var U=V.bind(null,A);return U.type=A,U},Ge.createRef=function(){return{current:null}},Ge.forwardRef=function(A){return{$$typeof:m,render:A}},Ge.isValidElement=te,Ge.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:J}},Ge.memo=function(A,U){return{$$typeof:v,type:A,compare:U===void 0?null:U}},Ge.startTransition=function(A){var U=_.transition;_.transition={};try{A()}finally{_.transition=U}},Ge.unstable_act=q,Ge.useCallback=function(A,U){return Q.current.useCallback(A,U)},Ge.useContext=function(A){return Q.current.useContext(A)},Ge.useDebugValue=function(){},Ge.useDeferredValue=function(A){return Q.current.useDeferredValue(A)},Ge.useEffect=function(A,U){return Q.current.useEffect(A,U)},Ge.useId=function(){return Q.current.useId()},Ge.useImperativeHandle=function(A,U,H){return Q.current.useImperativeHandle(A,U,H)},Ge.useInsertionEffect=function(A,U){return Q.current.useInsertionEffect(A,U)},Ge.useLayoutEffect=function(A,U){return Q.current.useLayoutEffect(A,U)},Ge.useMemo=function(A,U){return Q.current.useMemo(A,U)},Ge.useReducer=function(A,U,H){return Q.current.useReducer(A,U,H)},Ge.useRef=function(A){return Q.current.useRef(A)},Ge.useState=function(A){return Q.current.useState(A)},Ge.useSyncExternalStore=function(A,U,H){return Q.current.useSyncExternalStore(A,U,H)},Ge.useTransition=function(){return Q.current.useTransition()},Ge.version="18.3.1",Ge}var qm;function Cu(){return qm||(qm=1,Rd.exports=iw()),Rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function aw(){if(Km)return Yo;Km=1;var n=Cu(),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(m,h,v){var y,x={},b=null,S=null;v!==void 0&&(b=""+v),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(S=h.ref);for(y in h)a.call(h,y)&&!d.hasOwnProperty(y)&&(x[y]=h[y]);if(m&&m.defaultProps)for(y in h=m.defaultProps,h)x[y]===void 0&&(x[y]=h[y]);return{$$typeof:r,type:m,key:b,ref:S,props:x,_owner:c.current}}return Yo.Fragment=s,Yo.jsx=p,Yo.jsxs=p,Yo}var Ym;function lw(){return Ym||(Ym=1,Ed.exports=aw()),Ed.exports}var o=lw(),Da={},Ad={exports:{}},Jt={},Td={exports:{}},Md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function cw(){return Xm||(Xm=1,(function(n){function r(_,B){var q=_.length;_.push(B);e:for(;0<q;){var A=q-1>>>1,U=_[A];if(0<c(U,B))_[A]=B,_[q]=U,q=A;else break e}}function s(_){return _.length===0?null:_[0]}function a(_){if(_.length===0)return null;var B=_[0],q=_.pop();if(q!==B){_[0]=q;e:for(var A=0,U=_.length,H=U>>>1;A<H;){var G=2*(A+1)-1,re=_[G],X=G+1,O=_[X];if(0>c(re,q))X<U&&0>c(O,re)?(_[A]=O,_[X]=q,A=X):(_[A]=re,_[G]=q,A=G);else if(X<U&&0>c(O,q))_[A]=O,_[X]=q,A=X;else break e}}return B}function c(_,B){var q=_.sortIndex-B.sortIndex;return q!==0?q:_.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var p=Date,m=p.now();n.unstable_now=function(){return p.now()-m}}var h=[],v=[],y=1,x=null,b=3,S=!1,N=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(_){for(var B=s(v);B!==null;){if(B.callback===null)a(v);else if(B.startTime<=_)a(v),B.sortIndex=B.expirationTime,r(h,B);else break;B=s(v)}}function R(_){if(C=!1,M(_),!N)if(s(h)!==null)N=!0,J(I);else{var B=s(v);B!==null&&Q(R,B.startTime-_)}}function I(_,B){N=!1,C&&(C=!1,E(V),V=-1),S=!0;var q=b;try{for(M(B),x=s(h);x!==null&&(!(x.expirationTime>B)||_&&!fe());){var A=x.callback;if(typeof A=="function"){x.callback=null,b=x.priorityLevel;var U=A(x.expirationTime<=B);B=n.unstable_now(),typeof U=="function"?x.callback=U:x===s(h)&&a(h),M(B)}else a(h);x=s(h)}if(x!==null)var H=!0;else{var G=s(v);G!==null&&Q(R,G.startTime-B),H=!1}return H}finally{x=null,b=q,S=!1}}var W=!1,z=null,V=-1,ne=5,te=-1;function fe(){return!(n.unstable_now()-te<ne)}function ae(){if(z!==null){var _=n.unstable_now();te=_;var B=!0;try{B=z(!0,_)}finally{B?he():(W=!1,z=null)}}else W=!1}var he;if(typeof j=="function")he=function(){j(ae)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ge=me.port2;me.port1.onmessage=ae,he=function(){ge.postMessage(null)}}else he=function(){k(ae,0)};function J(_){z=_,W||(W=!0,he())}function Q(_,B){V=k(function(){_(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(_){_.callback=null},n.unstable_continueExecution=function(){N||S||(N=!0,J(I))},n.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<_?Math.floor(1e3/_):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return s(h)},n.unstable_next=function(_){switch(b){case 1:case 2:case 3:var B=3;break;default:B=b}var q=b;b=B;try{return _()}finally{b=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(_,B){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var q=b;b=_;try{return B()}finally{b=q}},n.unstable_scheduleCallback=function(_,B,q){var A=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?A+q:A):q=A,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,_={id:y++,callback:B,priorityLevel:_,startTime:q,expirationTime:U,sortIndex:-1},q>A?(_.sortIndex=q,r(v,_),s(h)===null&&_===s(v)&&(C?(E(V),V=-1):C=!0,Q(R,q-A))):(_.sortIndex=U,r(h,_),N||S||(N=!0,J(I))),_},n.unstable_shouldYield=fe,n.unstable_wrapCallback=function(_){var B=b;return function(){var q=b;b=B;try{return _.apply(this,arguments)}finally{b=q}}}})(Md)),Md}var Jm;function dw(){return Jm||(Jm=1,Td.exports=cw()),Td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function uw(){if(Zm)return Jt;Zm=1;var n=Cu(),r=dw();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function d(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(c[e]=t,e=0;e<t.length;e++)a.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function b(e){return h.call(x,e)?!0:h.call(y,e)?!1:v.test(e)?x[e]=!0:(y[e]=!0,!1)}function S(e,t,i,l){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,t,i,l){if(t===null||typeof t>"u"||S(e,t,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,i,l,u,g,w){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=g,this.removeEmptyString=w}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function j(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,j);k[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,j);k[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,j);k[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,t,i,l){var u=k.hasOwnProperty(t)?k[t]:null;(u!==null?u.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N(t,i,u,l)&&(i=null),l||u===null?b(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(t=u.attributeName,l=u.attributeNamespace,i===null?e.removeAttribute(t):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,l?e.setAttributeNS(l,t,i):e.setAttribute(t,i))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),W=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),fe=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),_=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,A;function U(e){if(A===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var H=!1;function G(e,t){if(!e||H)return"";H=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch($){var l=$}Reflect.construct(e,[],t)}else{try{t.call()}catch($){l=$}e.call(t.prototype)}else{try{throw Error()}catch($){l=$}e()}}catch($){if($&&l&&typeof $.stack=="string"){for(var u=$.stack.split(`
`),g=l.stack.split(`
`),w=u.length-1,P=g.length-1;1<=w&&0<=P&&u[w]!==g[P];)P--;for(;1<=w&&0<=P;w--,P--)if(u[w]!==g[P]){if(w!==1||P!==1)do if(w--,P--,0>P||u[w]!==g[P]){var T=`
`+u[w].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=w&&0<=P);break}}}finally{H=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?U(e):""}function re(e){switch(e.tag){case 5:return U(e.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case W:return"Portal";case ne:return"Profiler";case V:return"StrictMode";case he:return"Suspense";case me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fe:return(e.displayName||"Context")+".Consumer";case te:return(e._context.displayName||"Context")+".Provider";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return t=e.displayName||null,t!==null?t:X(e.type)||"Memo";case J:t=e._payload,e=e._init;try{return X(e(t))}catch{}}return null}function O(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function K(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pe(e){var t=ue(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,g=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,g.call(this,w)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Re(e){e._valueTracker||(e._valueTracker=pe(e))}function Oe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=ue(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function Y(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function je(e,t){var i=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Qe(e,t){var i=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;i=K(t.value!=null?t.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mt(e,t){t=t.checked,t!=null&&M(e,"checked",t,!1)}function At(e,t){mt(e,t);var i=K(t.value),l=t.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nn(e,t.type,i):t.hasOwnProperty("defaultValue")&&nn(e,t.type,K(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function st(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function nn(e,t,i){(t!=="number"||Y(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Bt=Array.isArray;function Je(e,t,i,l){if(e=e.options,t){t={};for(var u=0;u<i.length;u++)t["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=t.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&l&&(e[i].defaultSelected=!0)}else{for(i=""+K(i),t=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function rn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tt(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(s(92));if(Bt(i)){if(1<i.length)throw Error(s(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:K(i)}}function $n(e,t){var i=K(t.value),l=K(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ke(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function et(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ke(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ye,Nn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,l,u){MSApp.execUnsafeLocalFunction(function(){return e(t,i,l,u)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ye=Ye||document.createElement("div"),Ye.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ye.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ht(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ho=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){ho.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function bs(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function ws(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var l=i.indexOf("--")===0,u=bs(i,t[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,u):e[i]=u}}var Ss=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mr(e,t){if(t){if(Ss[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function gr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var de=null;function ye(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ae=null,ze=null,Ue=null;function lt(e){if(e=Do(e)){if(typeof Ae!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Yi(t),Ae(e.stateNode,e.type,t))}}function gn(e){ze?Ue?Ue.push(e):Ue=[e]:ze=e}function Wt(){if(ze){var e=ze,t=Ue;if(Ue=ze=null,lt(e),t)for(e=0;e<t.length;e++)lt(t[e])}}function Vt(e,t){return e(t)}function kt(){}var ie=!1;function Ee(e,t,i){if(ie)return e(t,i);ie=!0;try{return Vt(e,t,i)}finally{ie=!1,(ze!==null||Ue!==null)&&(kt(),Wt())}}function _e(e,t){var i=e.stateNode;if(i===null)return null;var l=Yi(i);if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,t,typeof i));return i}var le=!1;if(m)try{var De={};Object.defineProperty(De,"passive",{get:function(){le=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch{le=!1}function Vr(e,t,i,l,u,g,w,P,T){var $=Array.prototype.slice.call(arguments,3);try{t.apply(i,$)}catch(ee){this.onError(ee)}}var sn=!1,Cs=null,Ri=!1,Ql=null,py={onError:function(e){sn=!0,Cs=e}};function fy(e,t,i,l,u,g,w,P,T){sn=!1,Cs=null,Vr.apply(py,arguments)}function my(e,t,i,l,u,g,w,P,T){if(fy.apply(this,arguments),sn){if(sn){var $=Cs;sn=!1,Cs=null}else throw Error(s(198));Ri||(Ri=!0,Ql=$)}}function Ur(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function gp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hp(e){if(Ur(e)!==e)throw Error(s(188))}function gy(e){var t=e.alternate;if(!t){if(t=Ur(e),t===null)throw Error(s(188));return t!==e?null:e}for(var i=e,l=t;;){var u=i.return;if(u===null)break;var g=u.alternate;if(g===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===g.child){for(g=u.child;g;){if(g===i)return hp(u),e;if(g===l)return hp(u),t;g=g.sibling}throw Error(s(188))}if(i.return!==l.return)i=u,l=g;else{for(var w=!1,P=u.child;P;){if(P===i){w=!0,i=u,l=g;break}if(P===l){w=!0,l=u,i=g;break}P=P.sibling}if(!w){for(P=g.child;P;){if(P===i){w=!0,i=g,l=u;break}if(P===l){w=!0,l=g,i=u;break}P=P.sibling}if(!w)throw Error(s(189))}}if(i.alternate!==l)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:t}function vp(e){return e=gy(e),e!==null?xp(e):null}function xp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xp(e);if(t!==null)return t;e=e.sibling}return null}var yp=r.unstable_scheduleCallback,bp=r.unstable_cancelCallback,hy=r.unstable_shouldYield,vy=r.unstable_requestPaint,gt=r.unstable_now,xy=r.unstable_getCurrentPriorityLevel,ql=r.unstable_ImmediatePriority,wp=r.unstable_UserBlockingPriority,Ai=r.unstable_NormalPriority,yy=r.unstable_LowPriority,Sp=r.unstable_IdlePriority,Ti=null,Bn=null;function by(e){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(Ti,e,void 0,(e.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:Cy,wy=Math.log,Sy=Math.LN2;function Cy(e){return e>>>=0,e===0?32:31-(wy(e)/Sy|0)|0}var Mi=64,Ii=4194304;function vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,t){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,g=e.pingedLanes,w=i&268435455;if(w!==0){var P=w&~u;P!==0?l=vo(P):(g&=w,g!==0&&(l=vo(g)))}else w=i&~u,w!==0?l=vo(w):g!==0&&(l=vo(g));if(l===0)return 0;if(t!==0&&t!==l&&(t&u)===0&&(u=l&-l,g=t&-t,u>=g||u===16&&(g&4194240)!==0))return t;if((l&4)!==0&&(l|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)i=31-Pn(t),u=1<<i,l|=e[i],t&=~u;return l}function ky(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ny(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,g=e.pendingLanes;0<g;){var w=31-Pn(g),P=1<<w,T=u[w];T===-1?((P&i)===0||(P&l)!==0)&&(u[w]=ky(P,t)):T<=t&&(e.expiredLanes|=P),g&=~P}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cp(){var e=Mi;return Mi<<=1,(Mi&4194240)===0&&(Mi=64),e}function Yl(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function xo(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pn(t),e[t]=i}function jy(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-Pn(i),g=1<<u;t[u]=0,l[u]=-1,e[u]=-1,i&=~g}}function Xl(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-Pn(i),u=1<<l;u&t|e[l]&t&&(e[l]|=t),i&=~u}}var Ze=0;function kp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Np,Jl,jp,Pp,Ep,Zl=!1,Di=[],hr=null,vr=null,xr=null,yo=new Map,bo=new Map,yr=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":yo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(t.pointerId)}}function wo(e,t,i,l,u,g){return e===null||e.nativeEvent!==g?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:g,targetContainers:[u]},t!==null&&(t=Do(t),t!==null&&Jl(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Ey(e,t,i,l,u){switch(t){case"focusin":return hr=wo(hr,e,t,i,l,u),!0;case"dragenter":return vr=wo(vr,e,t,i,l,u),!0;case"mouseover":return xr=wo(xr,e,t,i,l,u),!0;case"pointerover":var g=u.pointerId;return yo.set(g,wo(yo.get(g)||null,e,t,i,l,u)),!0;case"gotpointercapture":return g=u.pointerId,bo.set(g,wo(bo.get(g)||null,e,t,i,l,u)),!0}return!1}function Ap(e){var t=Gr(e.target);if(t!==null){var i=Ur(t);if(i!==null){if(t=i.tag,t===13){if(t=gp(i),t!==null){e.blockedOn=t,Ep(e.priority,function(){jp(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=tc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);de=l,i.target.dispatchEvent(l),de=null}else return t=Do(i),t!==null&&Jl(t),e.blockedOn=i,!1;t.shift()}return!0}function Tp(e,t,i){Oi(e)&&i.delete(t)}function Ry(){Zl=!1,hr!==null&&Oi(hr)&&(hr=null),vr!==null&&Oi(vr)&&(vr=null),xr!==null&&Oi(xr)&&(xr=null),yo.forEach(Tp),bo.forEach(Tp)}function So(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ry)))}function Co(e){function t(u){return So(u,e)}if(0<Di.length){So(Di[0],e);for(var i=1;i<Di.length;i++){var l=Di[i];l.blockedOn===e&&(l.blockedOn=null)}}for(hr!==null&&So(hr,e),vr!==null&&So(vr,e),xr!==null&&So(xr,e),yo.forEach(t),bo.forEach(t),i=0;i<yr.length;i++)l=yr[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<yr.length&&(i=yr[0],i.blockedOn===null);)Ap(i),i.blockedOn===null&&yr.shift()}var ks=R.ReactCurrentBatchConfig,Li=!0;function Ay(e,t,i,l){var u=Ze,g=ks.transition;ks.transition=null;try{Ze=1,ec(e,t,i,l)}finally{Ze=u,ks.transition=g}}function Ty(e,t,i,l){var u=Ze,g=ks.transition;ks.transition=null;try{Ze=4,ec(e,t,i,l)}finally{Ze=u,ks.transition=g}}function ec(e,t,i,l){if(Li){var u=tc(e,t,i,l);if(u===null)xc(e,t,l,zi,i),Rp(e,l);else if(Ey(u,e,t,i,l))l.stopPropagation();else if(Rp(e,l),t&4&&-1<Py.indexOf(e)){for(;u!==null;){var g=Do(u);if(g!==null&&Np(g),g=tc(e,t,i,l),g===null&&xc(e,t,l,zi,i),g===u)break;u=g}u!==null&&l.stopPropagation()}else xc(e,t,l,null,i)}}var zi=null;function tc(e,t,i,l){if(zi=null,e=ye(l),e=Gr(e),e!==null)if(t=Ur(e),t===null)e=null;else if(i=t.tag,i===13){if(e=gp(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zi=e,null}function Mp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xy()){case ql:return 1;case wp:return 4;case Ai:case yy:return 16;case Sp:return 536870912;default:return 16}default:return 16}}var br=null,nc=null,Fi=null;function Ip(){if(Fi)return Fi;var e,t=nc,i=t.length,l,u="value"in br?br.value:br.textContent,g=u.length;for(e=0;e<i&&t[e]===u[e];e++);var w=i-e;for(l=1;l<=w&&t[i-l]===u[g-l];l++);return Fi=u.slice(e,1<l?1-l:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function _p(){return!1}function on(e){function t(i,l,u,g,w){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var P in e)e.hasOwnProperty(P)&&(i=e[P],this[P]=i?i(g):g[P]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Bi:_p,this.isPropagationStopped=_p,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=on(Ns),ko=q({},Ns,{view:0,detail:0}),My=on(ko),sc,oc,No,Hi=q({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==No&&(No&&e.type==="mousemove"?(sc=e.screenX-No.screenX,oc=e.screenY-No.screenY):oc=sc=0,No=e),sc)},movementY:function(e){return"movementY"in e?e.movementY:oc}}),Dp=on(Hi),Iy=q({},Hi,{dataTransfer:0}),_y=on(Iy),Dy=q({},ko,{relatedTarget:0}),ic=on(Dy),Oy=q({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=on(Oy),zy=q({},Ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fy=on(zy),$y=q({},Ns,{data:0}),Op=on($y),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wy[e])?!!t[e]:!1}function ac(){return Vy}var Uy=q({},ko,{key:function(e){if(e.key){var t=By[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gy=on(Uy),Qy=q({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=on(Qy),qy=q({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),Ky=on(qy),Yy=q({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=on(Yy),Jy=q({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=on(Jy),eb=[9,13,27,32],lc=m&&"CompositionEvent"in window,jo=null;m&&"documentMode"in document&&(jo=document.documentMode);var tb=m&&"TextEvent"in window&&!jo,zp=m&&(!lc||jo&&8<jo&&11>=jo),Fp=" ",$p=!1;function Bp(e,t){switch(e){case"keyup":return eb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var js=!1;function nb(e,t){switch(e){case"compositionend":return Hp(t);case"keypress":return t.which!==32?null:($p=!0,Fp);case"textInput":return e=t.data,e===Fp&&$p?null:e;default:return null}}function rb(e,t){if(js)return e==="compositionend"||!lc&&Bp(e,t)?(e=Ip(),Fi=nc=br=null,js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zp&&t.locale!=="ko"?null:t.data;default:return null}}var sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sb[e.type]:t==="textarea"}function Vp(e,t,i,l){gn(l),t=Qi(t,"onChange"),0<t.length&&(i=new rc("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var Po=null,Eo=null;function ob(e){cf(e,0)}function Wi(e){var t=Ts(e);if(Oe(t))return e}function ib(e,t){if(e==="change")return t}var Up=!1;if(m){var cc;if(m){var dc="oninput"in document;if(!dc){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),dc=typeof Gp.oninput=="function"}cc=dc}else cc=!1;Up=cc&&(!document.documentMode||9<document.documentMode)}function Qp(){Po&&(Po.detachEvent("onpropertychange",qp),Eo=Po=null)}function qp(e){if(e.propertyName==="value"&&Wi(Eo)){var t=[];Vp(t,Eo,e,ye(e)),Ee(ob,t)}}function ab(e,t,i){e==="focusin"?(Qp(),Po=t,Eo=i,Po.attachEvent("onpropertychange",qp)):e==="focusout"&&Qp()}function lb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(Eo)}function cb(e,t){if(e==="click")return Wi(t)}function db(e,t){if(e==="input"||e==="change")return Wi(t)}function ub(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var En=typeof Object.is=="function"?Object.is:ub;function Ro(e,t){if(En(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!h.call(t,u)||!En(e[u],t[u]))return!1}return!0}function Kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,t){var i=Kp(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Kp(i)}}function Xp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jp(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Y(e.document)}return t}function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pb(e){var t=Jp(),i=e.focusedElem,l=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Xp(i.ownerDocument.documentElement,i)){if(l!==null&&uc(i)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,g=Math.min(l.start,u);l=l.end===void 0?g:Math.min(l.end,u),!e.extend&&g>l&&(u=l,l=g,g=u),u=Yp(i,g);var w=Yp(i,l);u&&w&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==w.node||e.focusOffset!==w.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),g>l?(e.addRange(t),e.extend(w.node,w.offset)):(t.setEnd(w.node,w.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fb=m&&"documentMode"in document&&11>=document.documentMode,Ps=null,pc=null,Ao=null,fc=!1;function Zp(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;fc||Ps==null||Ps!==Y(l)||(l=Ps,"selectionStart"in l&&uc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ao&&Ro(Ao,l)||(Ao=l,l=Qi(pc,"onSelect"),0<l.length&&(t=new rc("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=Ps)))}function Vi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Es={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},mc={},ef={};m&&(ef=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Ui(e){if(mc[e])return mc[e];if(!Es[e])return e;var t=Es[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in ef)return mc[e]=t[i];return e}var tf=Ui("animationend"),nf=Ui("animationiteration"),rf=Ui("animationstart"),sf=Ui("transitionend"),of=new Map,af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(e,t){of.set(e,t),d(t,[e])}for(var gc=0;gc<af.length;gc++){var hc=af[gc],mb=hc.toLowerCase(),gb=hc[0].toUpperCase()+hc.slice(1);wr(mb,"on"+gb)}wr(tf,"onAnimationEnd"),wr(nf,"onAnimationIteration"),wr(rf,"onAnimationStart"),wr("dblclick","onDoubleClick"),wr("focusin","onFocus"),wr("focusout","onBlur"),wr(sf,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hb=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function lf(e,t,i){var l=e.type||"unknown-event";e.currentTarget=i,my(l,t,void 0,e),e.currentTarget=null}function cf(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],u=l.event;l=l.listeners;e:{var g=void 0;if(t)for(var w=l.length-1;0<=w;w--){var P=l[w],T=P.instance,$=P.currentTarget;if(P=P.listener,T!==g&&u.isPropagationStopped())break e;lf(u,P,$),g=T}else for(w=0;w<l.length;w++){if(P=l[w],T=P.instance,$=P.currentTarget,P=P.listener,T!==g&&u.isPropagationStopped())break e;lf(u,P,$),g=T}}}if(Ri)throw e=Ql,Ri=!1,Ql=null,e}function it(e,t){var i=t[kc];i===void 0&&(i=t[kc]=new Set);var l=e+"__bubble";i.has(l)||(df(t,e,2,!1),i.add(l))}function vc(e,t,i){var l=0;t&&(l|=4),df(i,e,l,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Mo(e){if(!e[Gi]){e[Gi]=!0,a.forEach(function(i){i!=="selectionchange"&&(hb.has(i)||vc(i,!1,e),vc(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,vc("selectionchange",!1,t))}}function df(e,t,i,l){switch(Mp(t)){case 1:var u=Ay;break;case 4:u=Ty;break;default:u=ec}i=u.bind(null,t,i,e),u=void 0,!le||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,i,{capture:!0,passive:u}):e.addEventListener(t,i,!0):u!==void 0?e.addEventListener(t,i,{passive:u}):e.addEventListener(t,i,!1)}function xc(e,t,i,l,u){var g=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var P=l.stateNode.containerInfo;if(P===u||P.nodeType===8&&P.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var T=w.tag;if((T===3||T===4)&&(T=w.stateNode.containerInfo,T===u||T.nodeType===8&&T.parentNode===u))return;w=w.return}for(;P!==null;){if(w=Gr(P),w===null)return;if(T=w.tag,T===5||T===6){l=g=w;continue e}P=P.parentNode}}l=l.return}Ee(function(){var $=g,ee=ye(i),se=[];e:{var Z=of.get(e);if(Z!==void 0){var xe=rc,Se=e;switch(e){case"keypress":if($i(i)===0)break e;case"keydown":case"keyup":xe=Gy;break;case"focusin":Se="focus",xe=ic;break;case"focusout":Se="blur",xe=ic;break;case"beforeblur":case"afterblur":xe=ic;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=Ky;break;case tf:case nf:case rf:xe=Ly;break;case sf:xe=Xy;break;case"scroll":xe=My;break;case"wheel":xe=Zy;break;case"copy":case"cut":case"paste":xe=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=Lp}var Ne=(t&4)!==0,ht=!Ne&&e==="scroll",L=Ne?Z!==null?Z+"Capture":null:Z;Ne=[];for(var D=$,F;D!==null;){F=D;var ce=F.stateNode;if(F.tag===5&&ce!==null&&(F=ce,L!==null&&(ce=_e(D,L),ce!=null&&Ne.push(Io(D,ce,F)))),ht)break;D=D.return}0<Ne.length&&(Z=new xe(Z,Se,null,i,ee),se.push({event:Z,listeners:Ne}))}}if((t&7)===0){e:{if(Z=e==="mouseover"||e==="pointerover",xe=e==="mouseout"||e==="pointerout",Z&&i!==de&&(Se=i.relatedTarget||i.fromElement)&&(Gr(Se)||Se[tr]))break e;if((xe||Z)&&(Z=ee.window===ee?ee:(Z=ee.ownerDocument)?Z.defaultView||Z.parentWindow:window,xe?(Se=i.relatedTarget||i.toElement,xe=$,Se=Se?Gr(Se):null,Se!==null&&(ht=Ur(Se),Se!==ht||Se.tag!==5&&Se.tag!==6)&&(Se=null)):(xe=null,Se=$),xe!==Se)){if(Ne=Dp,ce="onMouseLeave",L="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(Ne=Lp,ce="onPointerLeave",L="onPointerEnter",D="pointer"),ht=xe==null?Z:Ts(xe),F=Se==null?Z:Ts(Se),Z=new Ne(ce,D+"leave",xe,i,ee),Z.target=ht,Z.relatedTarget=F,ce=null,Gr(ee)===$&&(Ne=new Ne(L,D+"enter",Se,i,ee),Ne.target=F,Ne.relatedTarget=ht,ce=Ne),ht=ce,xe&&Se)t:{for(Ne=xe,L=Se,D=0,F=Ne;F;F=Rs(F))D++;for(F=0,ce=L;ce;ce=Rs(ce))F++;for(;0<D-F;)Ne=Rs(Ne),D--;for(;0<F-D;)L=Rs(L),F--;for(;D--;){if(Ne===L||L!==null&&Ne===L.alternate)break t;Ne=Rs(Ne),L=Rs(L)}Ne=null}else Ne=null;xe!==null&&uf(se,Z,xe,Ne,!1),Se!==null&&ht!==null&&uf(se,ht,Se,Ne,!0)}}e:{if(Z=$?Ts($):window,xe=Z.nodeName&&Z.nodeName.toLowerCase(),xe==="select"||xe==="input"&&Z.type==="file")var Pe=ib;else if(Wp(Z))if(Up)Pe=db;else{Pe=lb;var Te=ab}else(xe=Z.nodeName)&&xe.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(Pe=cb);if(Pe&&(Pe=Pe(e,$))){Vp(se,Pe,i,ee);break e}Te&&Te(e,Z,$),e==="focusout"&&(Te=Z._wrapperState)&&Te.controlled&&Z.type==="number"&&nn(Z,"number",Z.value)}switch(Te=$?Ts($):window,e){case"focusin":(Wp(Te)||Te.contentEditable==="true")&&(Ps=Te,pc=$,Ao=null);break;case"focusout":Ao=pc=Ps=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Zp(se,i,ee);break;case"selectionchange":if(fb)break;case"keydown":case"keyup":Zp(se,i,ee)}var Me;if(lc)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else js?Bp(e,i)&&(Le="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Le="onCompositionStart");Le&&(zp&&i.locale!=="ko"&&(js||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&js&&(Me=Ip()):(br=ee,nc="value"in br?br.value:br.textContent,js=!0)),Te=Qi($,Le),0<Te.length&&(Le=new Op(Le,e,null,i,ee),se.push({event:Le,listeners:Te}),Me?Le.data=Me:(Me=Hp(i),Me!==null&&(Le.data=Me)))),(Me=tb?nb(e,i):rb(e,i))&&($=Qi($,"onBeforeInput"),0<$.length&&(ee=new Op("onBeforeInput","beforeinput",null,i,ee),se.push({event:ee,listeners:$}),ee.data=Me))}cf(se,t)})}function Io(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Qi(e,t){for(var i=t+"Capture",l=[];e!==null;){var u=e,g=u.stateNode;u.tag===5&&g!==null&&(u=g,g=_e(e,i),g!=null&&l.unshift(Io(e,g,u)),g=_e(e,t),g!=null&&l.push(Io(e,g,u))),e=e.return}return l}function Rs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uf(e,t,i,l,u){for(var g=t._reactName,w=[];i!==null&&i!==l;){var P=i,T=P.alternate,$=P.stateNode;if(T!==null&&T===l)break;P.tag===5&&$!==null&&(P=$,u?(T=_e(i,g),T!=null&&w.unshift(Io(i,T,P))):u||(T=_e(i,g),T!=null&&w.push(Io(i,T,P)))),i=i.return}w.length!==0&&e.push({event:t,listeners:w})}var vb=/\r\n?/g,xb=/\u0000|\uFFFD/g;function pf(e){return(typeof e=="string"?e:""+e).replace(vb,`
`).replace(xb,"")}function qi(e,t,i){if(t=pf(t),pf(e)!==t&&i)throw Error(s(425))}function Ki(){}var yc=null,bc=null;function wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,yb=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,bb=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(e){return ff.resolve(null).then(e).catch(wb)}:Sc;function wb(e){setTimeout(function(){throw e})}function Cc(e,t){var i=t,l=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(l===0){e.removeChild(u),Co(t);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=u}while(i);Co(t)}function Sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var As=Math.random().toString(36).slice(2),Hn="__reactFiber$"+As,_o="__reactProps$"+As,tr="__reactContainer$"+As,kc="__reactEvents$"+As,Sb="__reactListeners$"+As,Cb="__reactHandles$"+As;function Gr(e){var t=e[Hn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[tr]||i[Hn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=mf(e);e!==null;){if(i=e[Hn])return i;e=mf(e)}return t}e=i,i=e.parentNode}return null}function Do(e){return e=e[Hn]||e[tr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ts(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Yi(e){return e[_o]||null}var Nc=[],Ms=-1;function Cr(e){return{current:e}}function at(e){0>Ms||(e.current=Nc[Ms],Nc[Ms]=null,Ms--)}function ot(e,t){Ms++,Nc[Ms]=e.current,e.current=t}var kr={},Ot=Cr(kr),Qt=Cr(!1),Qr=kr;function Is(e,t){var i=e.type.contextTypes;if(!i)return kr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var u={},g;for(g in i)u[g]=t[g];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function qt(e){return e=e.childContextTypes,e!=null}function Xi(){at(Qt),at(Ot)}function gf(e,t,i){if(Ot.current!==kr)throw Error(s(168));ot(Ot,t),ot(Qt,i)}function hf(e,t,i){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var u in l)if(!(u in t))throw Error(s(108,O(e)||"Unknown",u));return q({},i,l)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kr,Qr=Ot.current,ot(Ot,e),ot(Qt,Qt.current),!0}function vf(e,t,i){var l=e.stateNode;if(!l)throw Error(s(169));i?(e=hf(e,t,Qr),l.__reactInternalMemoizedMergedChildContext=e,at(Qt),at(Ot),ot(Ot,e)):at(Qt),ot(Qt,i)}var nr=null,Zi=!1,jc=!1;function xf(e){nr===null?nr=[e]:nr.push(e)}function kb(e){Zi=!0,xf(e)}function Nr(){if(!jc&&nr!==null){jc=!0;var e=0,t=Ze;try{var i=nr;for(Ze=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}nr=null,Zi=!1}catch(u){throw nr!==null&&(nr=nr.slice(e+1)),yp(ql,Nr),u}finally{Ze=t,jc=!1}}return null}var _s=[],Ds=0,ea=null,ta=0,hn=[],vn=0,qr=null,rr=1,sr="";function Kr(e,t){_s[Ds++]=ta,_s[Ds++]=ea,ea=e,ta=t}function yf(e,t,i){hn[vn++]=rr,hn[vn++]=sr,hn[vn++]=qr,qr=e;var l=rr;e=sr;var u=32-Pn(l)-1;l&=~(1<<u),i+=1;var g=32-Pn(t)+u;if(30<g){var w=u-u%5;g=(l&(1<<w)-1).toString(32),l>>=w,u-=w,rr=1<<32-Pn(t)+u|i<<u|l,sr=g+e}else rr=1<<g|i<<u|l,sr=e}function Pc(e){e.return!==null&&(Kr(e,1),yf(e,1,0))}function Ec(e){for(;e===ea;)ea=_s[--Ds],_s[Ds]=null,ta=_s[--Ds],_s[Ds]=null;for(;e===qr;)qr=hn[--vn],hn[vn]=null,sr=hn[--vn],hn[vn]=null,rr=hn[--vn],hn[vn]=null}var an=null,ln=null,ct=!1,Rn=null;function bf(e,t){var i=wn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function wf(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,an=e,ln=Sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,an=e,ln=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=qr!==null?{id:rr,overflow:sr}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=wn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,an=e,ln=null,!0):!1;default:return!1}}function Rc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ac(e){if(ct){var t=ln;if(t){var i=t;if(!wf(e,t)){if(Rc(e))throw Error(s(418));t=Sr(i.nextSibling);var l=an;t&&wf(e,t)?bf(l,i):(e.flags=e.flags&-4097|2,ct=!1,an=e)}}else{if(Rc(e))throw Error(s(418));e.flags=e.flags&-4097|2,ct=!1,an=e}}}function Sf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function na(e){if(e!==an)return!1;if(!ct)return Sf(e),ct=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wc(e.type,e.memoizedProps)),t&&(t=ln)){if(Rc(e))throw Cf(),Error(s(418));for(;t;)bf(e,t),t=Sr(t.nextSibling)}if(Sf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){ln=Sr(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}ln=null}}else ln=an?Sr(e.stateNode.nextSibling):null;return!0}function Cf(){for(var e=ln;e;)e=Sr(e.nextSibling)}function Os(){ln=an=null,ct=!1}function Tc(e){Rn===null?Rn=[e]:Rn.push(e)}var Nb=R.ReactCurrentBatchConfig;function Oo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(s(309));var l=i.stateNode}if(!l)throw Error(s(147,e));var u=l,g=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===g?t.ref:(t=function(w){var P=u.refs;w===null?delete P[g]:P[g]=w},t._stringRef=g,t)}if(typeof e!="string")throw Error(s(284));if(!i._owner)throw Error(s(290,e))}return e}function ra(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kf(e){var t=e._init;return t(e._payload)}function Nf(e){function t(L,D){if(e){var F=L.deletions;F===null?(L.deletions=[D],L.flags|=16):F.push(D)}}function i(L,D){if(!e)return null;for(;D!==null;)t(L,D),D=D.sibling;return null}function l(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function u(L,D){return L=Ir(L,D),L.index=0,L.sibling=null,L}function g(L,D,F){return L.index=F,e?(F=L.alternate,F!==null?(F=F.index,F<D?(L.flags|=2,D):F):(L.flags|=2,D)):(L.flags|=1048576,D)}function w(L){return e&&L.alternate===null&&(L.flags|=2),L}function P(L,D,F,ce){return D===null||D.tag!==6?(D=Sd(F,L.mode,ce),D.return=L,D):(D=u(D,F),D.return=L,D)}function T(L,D,F,ce){var Pe=F.type;return Pe===z?ee(L,D,F.props.children,ce,F.key):D!==null&&(D.elementType===Pe||typeof Pe=="object"&&Pe!==null&&Pe.$$typeof===J&&kf(Pe)===D.type)?(ce=u(D,F.props),ce.ref=Oo(L,D,F),ce.return=L,ce):(ce=Pa(F.type,F.key,F.props,null,L.mode,ce),ce.ref=Oo(L,D,F),ce.return=L,ce)}function $(L,D,F,ce){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=Cd(F,L.mode,ce),D.return=L,D):(D=u(D,F.children||[]),D.return=L,D)}function ee(L,D,F,ce,Pe){return D===null||D.tag!==7?(D=rs(F,L.mode,ce,Pe),D.return=L,D):(D=u(D,F),D.return=L,D)}function se(L,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Sd(""+D,L.mode,F),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case I:return F=Pa(D.type,D.key,D.props,null,L.mode,F),F.ref=Oo(L,null,D),F.return=L,F;case W:return D=Cd(D,L.mode,F),D.return=L,D;case J:var ce=D._init;return se(L,ce(D._payload),F)}if(Bt(D)||B(D))return D=rs(D,L.mode,F,null),D.return=L,D;ra(L,D)}return null}function Z(L,D,F,ce){var Pe=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return Pe!==null?null:P(L,D,""+F,ce);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case I:return F.key===Pe?T(L,D,F,ce):null;case W:return F.key===Pe?$(L,D,F,ce):null;case J:return Pe=F._init,Z(L,D,Pe(F._payload),ce)}if(Bt(F)||B(F))return Pe!==null?null:ee(L,D,F,ce,null);ra(L,F)}return null}function xe(L,D,F,ce,Pe){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return L=L.get(F)||null,P(D,L,""+ce,Pe);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case I:return L=L.get(ce.key===null?F:ce.key)||null,T(D,L,ce,Pe);case W:return L=L.get(ce.key===null?F:ce.key)||null,$(D,L,ce,Pe);case J:var Te=ce._init;return xe(L,D,F,Te(ce._payload),Pe)}if(Bt(ce)||B(ce))return L=L.get(F)||null,ee(D,L,ce,Pe,null);ra(D,ce)}return null}function Se(L,D,F,ce){for(var Pe=null,Te=null,Me=D,Le=D=0,Pt=null;Me!==null&&Le<F.length;Le++){Me.index>Le?(Pt=Me,Me=null):Pt=Me.sibling;var Xe=Z(L,Me,F[Le],ce);if(Xe===null){Me===null&&(Me=Pt);break}e&&Me&&Xe.alternate===null&&t(L,Me),D=g(Xe,D,Le),Te===null?Pe=Xe:Te.sibling=Xe,Te=Xe,Me=Pt}if(Le===F.length)return i(L,Me),ct&&Kr(L,Le),Pe;if(Me===null){for(;Le<F.length;Le++)Me=se(L,F[Le],ce),Me!==null&&(D=g(Me,D,Le),Te===null?Pe=Me:Te.sibling=Me,Te=Me);return ct&&Kr(L,Le),Pe}for(Me=l(L,Me);Le<F.length;Le++)Pt=xe(Me,L,Le,F[Le],ce),Pt!==null&&(e&&Pt.alternate!==null&&Me.delete(Pt.key===null?Le:Pt.key),D=g(Pt,D,Le),Te===null?Pe=Pt:Te.sibling=Pt,Te=Pt);return e&&Me.forEach(function(_r){return t(L,_r)}),ct&&Kr(L,Le),Pe}function Ne(L,D,F,ce){var Pe=B(F);if(typeof Pe!="function")throw Error(s(150));if(F=Pe.call(F),F==null)throw Error(s(151));for(var Te=Pe=null,Me=D,Le=D=0,Pt=null,Xe=F.next();Me!==null&&!Xe.done;Le++,Xe=F.next()){Me.index>Le?(Pt=Me,Me=null):Pt=Me.sibling;var _r=Z(L,Me,Xe.value,ce);if(_r===null){Me===null&&(Me=Pt);break}e&&Me&&_r.alternate===null&&t(L,Me),D=g(_r,D,Le),Te===null?Pe=_r:Te.sibling=_r,Te=_r,Me=Pt}if(Xe.done)return i(L,Me),ct&&Kr(L,Le),Pe;if(Me===null){for(;!Xe.done;Le++,Xe=F.next())Xe=se(L,Xe.value,ce),Xe!==null&&(D=g(Xe,D,Le),Te===null?Pe=Xe:Te.sibling=Xe,Te=Xe);return ct&&Kr(L,Le),Pe}for(Me=l(L,Me);!Xe.done;Le++,Xe=F.next())Xe=xe(Me,L,Le,Xe.value,ce),Xe!==null&&(e&&Xe.alternate!==null&&Me.delete(Xe.key===null?Le:Xe.key),D=g(Xe,D,Le),Te===null?Pe=Xe:Te.sibling=Xe,Te=Xe);return e&&Me.forEach(function(sw){return t(L,sw)}),ct&&Kr(L,Le),Pe}function ht(L,D,F,ce){if(typeof F=="object"&&F!==null&&F.type===z&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case I:e:{for(var Pe=F.key,Te=D;Te!==null;){if(Te.key===Pe){if(Pe=F.type,Pe===z){if(Te.tag===7){i(L,Te.sibling),D=u(Te,F.props.children),D.return=L,L=D;break e}}else if(Te.elementType===Pe||typeof Pe=="object"&&Pe!==null&&Pe.$$typeof===J&&kf(Pe)===Te.type){i(L,Te.sibling),D=u(Te,F.props),D.ref=Oo(L,Te,F),D.return=L,L=D;break e}i(L,Te);break}else t(L,Te);Te=Te.sibling}F.type===z?(D=rs(F.props.children,L.mode,ce,F.key),D.return=L,L=D):(ce=Pa(F.type,F.key,F.props,null,L.mode,ce),ce.ref=Oo(L,D,F),ce.return=L,L=ce)}return w(L);case W:e:{for(Te=F.key;D!==null;){if(D.key===Te)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){i(L,D.sibling),D=u(D,F.children||[]),D.return=L,L=D;break e}else{i(L,D);break}else t(L,D);D=D.sibling}D=Cd(F,L.mode,ce),D.return=L,L=D}return w(L);case J:return Te=F._init,ht(L,D,Te(F._payload),ce)}if(Bt(F))return Se(L,D,F,ce);if(B(F))return Ne(L,D,F,ce);ra(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(i(L,D.sibling),D=u(D,F),D.return=L,L=D):(i(L,D),D=Sd(F,L.mode,ce),D.return=L,L=D),w(L)):i(L,D)}return ht}var Ls=Nf(!0),jf=Nf(!1),sa=Cr(null),oa=null,zs=null,Mc=null;function Ic(){Mc=zs=oa=null}function _c(e){var t=sa.current;at(sa),e._currentValue=t}function Dc(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function Fs(e,t){oa=e,Mc=zs=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Kt=!0),e.firstContext=null)}function xn(e){var t=e._currentValue;if(Mc!==e)if(e={context:e,memoizedValue:t,next:null},zs===null){if(oa===null)throw Error(s(308));zs=e,oa.dependencies={lanes:0,firstContext:e}}else zs=zs.next=e;return t}var Yr=null;function Oc(e){Yr===null?Yr=[e]:Yr.push(e)}function Pf(e,t,i,l){var u=t.interleaved;return u===null?(i.next=i,Oc(t)):(i.next=u.next,u.next=i),t.interleaved=i,or(e,l)}function or(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var jr=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ef(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ir(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pr(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,or(e,i)}return u=l.interleaved,u===null?(t.next=t,Oc(l)):(t.next=u.next,u.next=t),l.interleaved=t,or(e,i)}function ia(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Xl(e,i)}}function Rf(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,g=null;if(i=i.firstBaseUpdate,i!==null){do{var w={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};g===null?u=g=w:g=g.next=w,i=i.next}while(i!==null);g===null?u=g=t:g=g.next=t}else u=g=t;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:g,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function aa(e,t,i,l){var u=e.updateQueue;jr=!1;var g=u.firstBaseUpdate,w=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var T=P,$=T.next;T.next=null,w===null?g=$:w.next=$,w=T;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,P=ee.lastBaseUpdate,P!==w&&(P===null?ee.firstBaseUpdate=$:P.next=$,ee.lastBaseUpdate=T))}if(g!==null){var se=u.baseState;w=0,ee=$=T=null,P=g;do{var Z=P.lane,xe=P.eventTime;if((l&Z)===Z){ee!==null&&(ee=ee.next={eventTime:xe,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Se=e,Ne=P;switch(Z=t,xe=i,Ne.tag){case 1:if(Se=Ne.payload,typeof Se=="function"){se=Se.call(xe,se,Z);break e}se=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ne.payload,Z=typeof Se=="function"?Se.call(xe,se,Z):Se,Z==null)break e;se=q({},se,Z);break e;case 2:jr=!0}}P.callback!==null&&P.lane!==0&&(e.flags|=64,Z=u.effects,Z===null?u.effects=[P]:Z.push(P))}else xe={eventTime:xe,lane:Z,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ee===null?($=ee=xe,T=se):ee=ee.next=xe,w|=Z;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;Z=P,P=Z.next,Z.next=null,u.lastBaseUpdate=Z,u.shared.pending=null}}while(!0);if(ee===null&&(T=se),u.baseState=T,u.firstBaseUpdate=$,u.lastBaseUpdate=ee,t=u.shared.interleaved,t!==null){u=t;do w|=u.lane,u=u.next;while(u!==t)}else g===null&&(u.shared.lanes=0);Zr|=w,e.lanes=w,e.memoizedState=se}}function Af(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],u=l.callback;if(u!==null){if(l.callback=null,l=i,typeof u!="function")throw Error(s(191,u));u.call(l)}}}var Lo={},Wn=Cr(Lo),zo=Cr(Lo),Fo=Cr(Lo);function Xr(e){if(e===Lo)throw Error(s(174));return e}function zc(e,t){switch(ot(Fo,t),ot(zo,e),ot(Wn,Lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:et(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=et(t,e)}at(Wn),ot(Wn,t)}function $s(){at(Wn),at(zo),at(Fo)}function Tf(e){Xr(Fo.current);var t=Xr(Wn.current),i=et(t,e.type);t!==i&&(ot(zo,e),ot(Wn,i))}function Fc(e){zo.current===e&&(at(Wn),at(zo))}var dt=Cr(0);function la(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $c=[];function Bc(){for(var e=0;e<$c.length;e++)$c[e]._workInProgressVersionPrimary=null;$c.length=0}var ca=R.ReactCurrentDispatcher,Hc=R.ReactCurrentBatchConfig,Jr=0,ut=null,bt=null,Nt=null,da=!1,$o=!1,Bo=0,jb=0;function Lt(){throw Error(s(321))}function Wc(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!En(e[i],t[i]))return!1;return!0}function Vc(e,t,i,l,u,g){if(Jr=g,ut=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ca.current=e===null||e.memoizedState===null?Ab:Tb,e=i(l,u),$o){g=0;do{if($o=!1,Bo=0,25<=g)throw Error(s(301));g+=1,Nt=bt=null,t.updateQueue=null,ca.current=Mb,e=i(l,u)}while($o)}if(ca.current=fa,t=bt!==null&&bt.next!==null,Jr=0,Nt=bt=ut=null,da=!1,t)throw Error(s(300));return e}function Uc(){var e=Bo!==0;return Bo=0,e}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ut.memoizedState=Nt=e:Nt=Nt.next=e,Nt}function yn(){if(bt===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=bt.next;var t=Nt===null?ut.memoizedState:Nt.next;if(t!==null)Nt=t,bt=e;else{if(e===null)throw Error(s(310));bt=e,e={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Nt===null?ut.memoizedState=Nt=e:Nt=Nt.next=e}return Nt}function Ho(e,t){return typeof t=="function"?t(e):t}function Gc(e){var t=yn(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var l=bt,u=l.baseQueue,g=i.pending;if(g!==null){if(u!==null){var w=u.next;u.next=g.next,g.next=w}l.baseQueue=u=g,i.pending=null}if(u!==null){g=u.next,l=l.baseState;var P=w=null,T=null,$=g;do{var ee=$.lane;if((Jr&ee)===ee)T!==null&&(T=T.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),l=$.hasEagerState?$.eagerState:e(l,$.action);else{var se={lane:ee,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};T===null?(P=T=se,w=l):T=T.next=se,ut.lanes|=ee,Zr|=ee}$=$.next}while($!==null&&$!==g);T===null?w=l:T.next=P,En(l,t.memoizedState)||(Kt=!0),t.memoizedState=l,t.baseState=w,t.baseQueue=T,i.lastRenderedState=l}if(e=i.interleaved,e!==null){u=e;do g=u.lane,ut.lanes|=g,Zr|=g,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Qc(e){var t=yn(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var l=i.dispatch,u=i.pending,g=t.memoizedState;if(u!==null){i.pending=null;var w=u=u.next;do g=e(g,w.action),w=w.next;while(w!==u);En(g,t.memoizedState)||(Kt=!0),t.memoizedState=g,t.baseQueue===null&&(t.baseState=g),i.lastRenderedState=g}return[g,l]}function Mf(){}function If(e,t){var i=ut,l=yn(),u=t(),g=!En(l.memoizedState,u);if(g&&(l.memoizedState=u,Kt=!0),l=l.queue,qc(Of.bind(null,i,l,e),[e]),l.getSnapshot!==t||g||Nt!==null&&Nt.memoizedState.tag&1){if(i.flags|=2048,Wo(9,Df.bind(null,i,l,u,t),void 0,null),jt===null)throw Error(s(349));(Jr&30)!==0||_f(i,t,u)}return u}function _f(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ut.updateQueue,t===null?(t={lastEffect:null,stores:null},ut.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Df(e,t,i,l){t.value=i,t.getSnapshot=l,Lf(t)&&zf(e)}function Of(e,t,i){return i(function(){Lf(t)&&zf(e)})}function Lf(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!En(e,i)}catch{return!0}}function zf(e){var t=or(e,1);t!==null&&In(t,e,1,-1)}function Ff(e){var t=Vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t.queue=e,e=e.dispatch=Rb.bind(null,ut,e),[t.memoizedState,e]}function Wo(e,t,i,l){return e={tag:e,create:t,destroy:i,deps:l,next:null},t=ut.updateQueue,t===null?(t={lastEffect:null,stores:null},ut.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e)),e}function $f(){return yn().memoizedState}function ua(e,t,i,l){var u=Vn();ut.flags|=e,u.memoizedState=Wo(1|t,i,void 0,l===void 0?null:l)}function pa(e,t,i,l){var u=yn();l=l===void 0?null:l;var g=void 0;if(bt!==null){var w=bt.memoizedState;if(g=w.destroy,l!==null&&Wc(l,w.deps)){u.memoizedState=Wo(t,i,g,l);return}}ut.flags|=e,u.memoizedState=Wo(1|t,i,g,l)}function Bf(e,t){return ua(8390656,8,e,t)}function qc(e,t){return pa(2048,8,e,t)}function Hf(e,t){return pa(4,2,e,t)}function Wf(e,t){return pa(4,4,e,t)}function Vf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uf(e,t,i){return i=i!=null?i.concat([e]):null,pa(4,4,Vf.bind(null,t,e),i)}function Kc(){}function Gf(e,t){var i=yn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&Wc(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function Qf(e,t){var i=yn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&Wc(t,l[1])?l[0]:(e=e(),i.memoizedState=[e,t],e)}function qf(e,t,i){return(Jr&21)===0?(e.baseState&&(e.baseState=!1,Kt=!0),e.memoizedState=i):(En(i,t)||(i=Cp(),ut.lanes|=i,Zr|=i,e.baseState=!0),t)}function Pb(e,t){var i=Ze;Ze=i!==0&&4>i?i:4,e(!0);var l=Hc.transition;Hc.transition={};try{e(!1),t()}finally{Ze=i,Hc.transition=l}}function Kf(){return yn().memoizedState}function Eb(e,t,i){var l=Tr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Yf(e))Xf(t,i);else if(i=Pf(e,t,i,l),i!==null){var u=Gt();In(i,e,l,u),Jf(i,t,l)}}function Rb(e,t,i){var l=Tr(e),u={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Yf(e))Xf(t,u);else{var g=e.alternate;if(e.lanes===0&&(g===null||g.lanes===0)&&(g=t.lastRenderedReducer,g!==null))try{var w=t.lastRenderedState,P=g(w,i);if(u.hasEagerState=!0,u.eagerState=P,En(P,w)){var T=t.interleaved;T===null?(u.next=u,Oc(t)):(u.next=T.next,T.next=u),t.interleaved=u;return}}catch{}finally{}i=Pf(e,t,u,l),i!==null&&(u=Gt(),In(i,e,l,u),Jf(i,t,l))}}function Yf(e){var t=e.alternate;return e===ut||t!==null&&t===ut}function Xf(e,t){$o=da=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Jf(e,t,i){if((i&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Xl(e,i)}}var fa={readContext:xn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},Ab={readContext:xn,useCallback:function(e,t){return Vn().memoizedState=[e,t===void 0?null:t],e},useContext:xn,useEffect:Bf,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ua(4194308,4,Vf.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return ua(4,2,e,t)},useMemo:function(e,t){var i=Vn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var l=Vn();return t=i!==void 0?i(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Eb.bind(null,ut,e),[l.memoizedState,e]},useRef:function(e){var t=Vn();return e={current:e},t.memoizedState=e},useState:Ff,useDebugValue:Kc,useDeferredValue:function(e){return Vn().memoizedState=e},useTransition:function(){var e=Ff(!1),t=e[0];return e=Pb.bind(null,e[1]),Vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var l=ut,u=Vn();if(ct){if(i===void 0)throw Error(s(407));i=i()}else{if(i=t(),jt===null)throw Error(s(349));(Jr&30)!==0||_f(l,t,i)}u.memoizedState=i;var g={value:i,getSnapshot:t};return u.queue=g,Bf(Of.bind(null,l,g,e),[e]),l.flags|=2048,Wo(9,Df.bind(null,l,g,i,t),void 0,null),i},useId:function(){var e=Vn(),t=jt.identifierPrefix;if(ct){var i=sr,l=rr;i=(l&~(1<<32-Pn(l)-1)).toString(32)+i,t=":"+t+"R"+i,i=Bo++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=jb++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tb={readContext:xn,useCallback:Gf,useContext:xn,useEffect:qc,useImperativeHandle:Uf,useInsertionEffect:Hf,useLayoutEffect:Wf,useMemo:Qf,useReducer:Gc,useRef:$f,useState:function(){return Gc(Ho)},useDebugValue:Kc,useDeferredValue:function(e){var t=yn();return qf(t,bt.memoizedState,e)},useTransition:function(){var e=Gc(Ho)[0],t=yn().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:If,useId:Kf,unstable_isNewReconciler:!1},Mb={readContext:xn,useCallback:Gf,useContext:xn,useEffect:qc,useImperativeHandle:Uf,useInsertionEffect:Hf,useLayoutEffect:Wf,useMemo:Qf,useReducer:Qc,useRef:$f,useState:function(){return Qc(Ho)},useDebugValue:Kc,useDeferredValue:function(e){var t=yn();return bt===null?t.memoizedState=e:qf(t,bt.memoizedState,e)},useTransition:function(){var e=Qc(Ho)[0],t=yn().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:If,useId:Kf,unstable_isNewReconciler:!1};function An(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Yc(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:q({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var ma={isMounted:function(e){return(e=e._reactInternals)?Ur(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var l=Gt(),u=Tr(e),g=ir(l,u);g.payload=t,i!=null&&(g.callback=i),t=Pr(e,g,u),t!==null&&(In(t,e,u,l),ia(t,e,u))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=Gt(),u=Tr(e),g=ir(l,u);g.tag=1,g.payload=t,i!=null&&(g.callback=i),t=Pr(e,g,u),t!==null&&(In(t,e,u,l),ia(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Gt(),l=Tr(e),u=ir(i,l);u.tag=2,t!=null&&(u.callback=t),t=Pr(e,u,l),t!==null&&(In(t,e,l,i),ia(t,e,l))}};function Zf(e,t,i,l,u,g,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,g,w):t.prototype&&t.prototype.isPureReactComponent?!Ro(i,l)||!Ro(u,g):!0}function em(e,t,i){var l=!1,u=kr,g=t.contextType;return typeof g=="object"&&g!==null?g=xn(g):(u=qt(t)?Qr:Ot.current,l=t.contextTypes,g=(l=l!=null)?Is(e,u):kr),t=new t(i,g),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ma,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=g),t}function tm(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&ma.enqueueReplaceState(t,t.state,null)}function Xc(e,t,i,l){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},Lc(e);var g=t.contextType;typeof g=="object"&&g!==null?u.context=xn(g):(g=qt(t)?Qr:Ot.current,u.context=Is(e,g)),u.state=e.memoizedState,g=t.getDerivedStateFromProps,typeof g=="function"&&(Yc(e,t,g,i),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&ma.enqueueReplaceState(u,u.state,null),aa(e,i,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Bs(e,t){try{var i="",l=t;do i+=re(l),l=l.return;while(l);var u=i}catch(g){u=`
Error generating stack: `+g.message+`
`+g.stack}return{value:e,source:t,stack:u,digest:null}}function Jc(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Zc(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Ib=typeof WeakMap=="function"?WeakMap:Map;function nm(e,t,i){i=ir(-1,i),i.tag=3,i.payload={element:null};var l=t.value;return i.callback=function(){wa||(wa=!0,md=l),Zc(e,t)},i}function rm(e,t,i){i=ir(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=t.value;i.payload=function(){return l(u)},i.callback=function(){Zc(e,t)}}var g=e.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(i.callback=function(){Zc(e,t),typeof l!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var w=t.stack;this.componentDidCatch(t.value,{componentStack:w!==null?w:""})}),i}function sm(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Ib;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(i)||(u.add(i),e=Qb.bind(null,e,t,i),t.then(e,e))}function om(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function im(e,t,i,l,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=ir(-1,1),t.tag=2,Pr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var _b=R.ReactCurrentOwner,Kt=!1;function Ut(e,t,i,l){t.child=e===null?jf(t,null,i,l):Ls(t,e.child,i,l)}function am(e,t,i,l,u){i=i.render;var g=t.ref;return Fs(t,u),l=Vc(e,t,i,l,g,u),i=Uc(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,ar(e,t,u)):(ct&&i&&Pc(t),t.flags|=1,Ut(e,t,l,u),t.child)}function lm(e,t,i,l,u){if(e===null){var g=i.type;return typeof g=="function"&&!wd(g)&&g.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=g,cm(e,t,g,l,u)):(e=Pa(i.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(g=e.child,(e.lanes&u)===0){var w=g.memoizedProps;if(i=i.compare,i=i!==null?i:Ro,i(w,l)&&e.ref===t.ref)return ar(e,t,u)}return t.flags|=1,e=Ir(g,l),e.ref=t.ref,e.return=t,t.child=e}function cm(e,t,i,l,u){if(e!==null){var g=e.memoizedProps;if(Ro(g,l)&&e.ref===t.ref)if(Kt=!1,t.pendingProps=l=g,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Kt=!0);else return t.lanes=e.lanes,ar(e,t,u)}return ed(e,t,i,l,u)}function dm(e,t,i){var l=t.pendingProps,u=l.children,g=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Ws,cn),cn|=i;else{if((i&1073741824)===0)return e=g!==null?g.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ot(Ws,cn),cn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:i,ot(Ws,cn),cn|=l}else g!==null?(l=g.baseLanes|i,t.memoizedState=null):l=i,ot(Ws,cn),cn|=l;return Ut(e,t,u,i),t.child}function um(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function ed(e,t,i,l,u){var g=qt(i)?Qr:Ot.current;return g=Is(t,g),Fs(t,u),i=Vc(e,t,i,l,g,u),l=Uc(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,ar(e,t,u)):(ct&&l&&Pc(t),t.flags|=1,Ut(e,t,i,u),t.child)}function pm(e,t,i,l,u){if(qt(i)){var g=!0;Ji(t)}else g=!1;if(Fs(t,u),t.stateNode===null)ha(e,t),em(t,i,l),Xc(t,i,l,u),l=!0;else if(e===null){var w=t.stateNode,P=t.memoizedProps;w.props=P;var T=w.context,$=i.contextType;typeof $=="object"&&$!==null?$=xn($):($=qt(i)?Qr:Ot.current,$=Is(t,$));var ee=i.getDerivedStateFromProps,se=typeof ee=="function"||typeof w.getSnapshotBeforeUpdate=="function";se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==l||T!==$)&&tm(t,w,l,$),jr=!1;var Z=t.memoizedState;w.state=Z,aa(t,l,w,u),T=t.memoizedState,P!==l||Z!==T||Qt.current||jr?(typeof ee=="function"&&(Yc(t,i,ee,l),T=t.memoizedState),(P=jr||Zf(t,i,P,l,Z,T,$))?(se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(t.flags|=4194308)):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),w.props=l,w.state=T,w.context=$,l=P):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{w=t.stateNode,Ef(e,t),P=t.memoizedProps,$=t.type===t.elementType?P:An(t.type,P),w.props=$,se=t.pendingProps,Z=w.context,T=i.contextType,typeof T=="object"&&T!==null?T=xn(T):(T=qt(i)?Qr:Ot.current,T=Is(t,T));var xe=i.getDerivedStateFromProps;(ee=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==se||Z!==T)&&tm(t,w,l,T),jr=!1,Z=t.memoizedState,w.state=Z,aa(t,l,w,u);var Se=t.memoizedState;P!==se||Z!==Se||Qt.current||jr?(typeof xe=="function"&&(Yc(t,i,xe,l),Se=t.memoizedState),($=jr||Zf(t,i,$,l,Z,Se,T)||!1)?(ee||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,Se,T),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,Se,T)),typeof w.componentDidUpdate=="function"&&(t.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof w.componentDidUpdate!="function"||P===e.memoizedProps&&Z===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&Z===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=Se),w.props=l,w.state=Se,w.context=T,l=$):(typeof w.componentDidUpdate!="function"||P===e.memoizedProps&&Z===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&Z===e.memoizedState||(t.flags|=1024),l=!1)}return td(e,t,i,l,g,u)}function td(e,t,i,l,u,g){um(e,t);var w=(t.flags&128)!==0;if(!l&&!w)return u&&vf(t,i,!1),ar(e,t,g);l=t.stateNode,_b.current=t;var P=w&&typeof i.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&w?(t.child=Ls(t,e.child,null,g),t.child=Ls(t,null,P,g)):Ut(e,t,P,g),t.memoizedState=l.state,u&&vf(t,i,!0),t.child}function fm(e){var t=e.stateNode;t.pendingContext?gf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gf(e,t.context,!1),zc(e,t.containerInfo)}function mm(e,t,i,l,u){return Os(),Tc(u),t.flags|=256,Ut(e,t,i,l),t.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(e){return{baseLanes:e,cachePool:null,transitions:null}}function gm(e,t,i){var l=t.pendingProps,u=dt.current,g=!1,w=(t.flags&128)!==0,P;if((P=w)||(P=e!==null&&e.memoizedState===null?!1:(u&2)!==0),P?(g=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),ot(dt,u&1),e===null)return Ac(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(w=l.children,e=l.fallback,g?(l=t.mode,g=t.child,w={mode:"hidden",children:w},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Ea(w,l,0,null),e=rs(e,l,i,null),g.return=t,e.return=t,g.sibling=e,t.child=g,t.child.memoizedState=rd(i),t.memoizedState=nd,e):sd(t,w));if(u=e.memoizedState,u!==null&&(P=u.dehydrated,P!==null))return Db(e,t,w,l,P,u,i);if(g){g=l.fallback,w=t.mode,u=e.child,P=u.sibling;var T={mode:"hidden",children:l.children};return(w&1)===0&&t.child!==u?(l=t.child,l.childLanes=0,l.pendingProps=T,t.deletions=null):(l=Ir(u,T),l.subtreeFlags=u.subtreeFlags&14680064),P!==null?g=Ir(P,g):(g=rs(g,w,i,null),g.flags|=2),g.return=t,l.return=t,l.sibling=g,t.child=l,l=g,g=t.child,w=e.child.memoizedState,w=w===null?rd(i):{baseLanes:w.baseLanes|i,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=e.childLanes&~i,t.memoizedState=nd,l}return g=e.child,e=g.sibling,l=Ir(g,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=i),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l}function sd(e,t){return t=Ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ga(e,t,i,l){return l!==null&&Tc(l),Ls(t,e.child,null,i),e=sd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Db(e,t,i,l,u,g,w){if(i)return t.flags&256?(t.flags&=-257,l=Jc(Error(s(422))),ga(e,t,w,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(g=l.fallback,u=t.mode,l=Ea({mode:"visible",children:l.children},u,0,null),g=rs(g,u,w,null),g.flags|=2,l.return=t,g.return=t,l.sibling=g,t.child=l,(t.mode&1)!==0&&Ls(t,e.child,null,w),t.child.memoizedState=rd(w),t.memoizedState=nd,g);if((t.mode&1)===0)return ga(e,t,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var P=l.dgst;return l=P,g=Error(s(419)),l=Jc(g,l,void 0),ga(e,t,w,l)}if(P=(w&e.childLanes)!==0,Kt||P){if(l=jt,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==g.retryLane&&(g.retryLane=u,or(e,u),In(l,e,u,-1))}return bd(),l=Jc(Error(s(421))),ga(e,t,w,l)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=qb.bind(null,e),u._reactRetry=t,null):(e=g.treeContext,ln=Sr(u.nextSibling),an=t,ct=!0,Rn=null,e!==null&&(hn[vn++]=rr,hn[vn++]=sr,hn[vn++]=qr,rr=e.id,sr=e.overflow,qr=t),t=sd(t,l.children),t.flags|=4096,t)}function hm(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Dc(e.return,t,i)}function od(e,t,i,l,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=i,g.tailMode=u)}function vm(e,t,i){var l=t.pendingProps,u=l.revealOrder,g=l.tail;if(Ut(e,t,l.children,i),l=dt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,i,t);else if(e.tag===19)hm(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(ot(dt,l),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(i=t.child,u=null;i!==null;)e=i.alternate,e!==null&&la(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=t.child,t.child=null):(u=i.sibling,i.sibling=null),od(t,!1,u,i,g);break;case"backwards":for(i=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&la(e)===null){t.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}od(t,!0,i,null,g);break;case"together":od(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ha(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ar(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Zr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,i=Ir(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ir(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Ob(e,t,i){switch(t.tag){case 3:fm(t),Os();break;case 5:Tf(t);break;case 1:qt(t.type)&&Ji(t);break;case 4:zc(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,u=t.memoizedProps.value;ot(sa,l._currentValue),l._currentValue=u;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(ot(dt,dt.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?gm(e,t,i):(ot(dt,dt.current&1),e=ar(e,t,i),e!==null?e.sibling:null);ot(dt,dt.current&1);break;case 19:if(l=(i&t.childLanes)!==0,(e.flags&128)!==0){if(l)return vm(e,t,i);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ot(dt,dt.current),l)break;return null;case 22:case 23:return t.lanes=0,dm(e,t,i)}return ar(e,t,i)}var xm,id,ym,bm;xm=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},id=function(){},ym=function(e,t,i,l){var u=e.memoizedProps;if(u!==l){e=t.stateNode,Xr(Wn.current);var g=null;switch(i){case"input":u=je(e,u),l=je(e,l),g=[];break;case"select":u=q({},u,{value:void 0}),l=q({},l,{value:void 0}),g=[];break;case"textarea":u=rn(e,u),l=rn(e,l),g=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Ki)}mr(i,l);var w;i=null;for($ in u)if(!l.hasOwnProperty($)&&u.hasOwnProperty($)&&u[$]!=null)if($==="style"){var P=u[$];for(w in P)P.hasOwnProperty(w)&&(i||(i={}),i[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(c.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in l){var T=l[$];if(P=u?.[$],l.hasOwnProperty($)&&T!==P&&(T!=null||P!=null))if($==="style")if(P){for(w in P)!P.hasOwnProperty(w)||T&&T.hasOwnProperty(w)||(i||(i={}),i[w]="");for(w in T)T.hasOwnProperty(w)&&P[w]!==T[w]&&(i||(i={}),i[w]=T[w])}else i||(g||(g=[]),g.push($,i)),i=T;else $==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,P=P?P.__html:void 0,T!=null&&P!==T&&(g=g||[]).push($,T)):$==="children"?typeof T!="string"&&typeof T!="number"||(g=g||[]).push($,""+T):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(c.hasOwnProperty($)?(T!=null&&$==="onScroll"&&it("scroll",e),g||P===T||(g=[])):(g=g||[]).push($,T))}i&&(g=g||[]).push("style",i);var $=g;(t.updateQueue=$)&&(t.flags|=4)}},bm=function(e,t,i,l){i!==l&&(t.flags|=4)};function Vo(e,t){if(!ct)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function zt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function Lb(e,t,i){var l=t.pendingProps;switch(Ec(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(t),null;case 1:return qt(t.type)&&Xi(),zt(t),null;case 3:return l=t.stateNode,$s(),at(Qt),at(Ot),Bc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(na(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Rn!==null&&(vd(Rn),Rn=null))),id(e,t),zt(t),null;case 5:Fc(t);var u=Xr(Fo.current);if(i=t.type,e!==null&&t.stateNode!=null)ym(e,t,i,l,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(s(166));return zt(t),null}if(e=Xr(Wn.current),na(t)){l=t.stateNode,i=t.type;var g=t.memoizedProps;switch(l[Hn]=t,l[_o]=g,e=(t.mode&1)!==0,i){case"dialog":it("cancel",l),it("close",l);break;case"iframe":case"object":case"embed":it("load",l);break;case"video":case"audio":for(u=0;u<To.length;u++)it(To[u],l);break;case"source":it("error",l);break;case"img":case"image":case"link":it("error",l),it("load",l);break;case"details":it("toggle",l);break;case"input":Qe(l,g),it("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},it("invalid",l);break;case"textarea":Tt(l,g),it("invalid",l)}mr(i,g),u=null;for(var w in g)if(g.hasOwnProperty(w)){var P=g[w];w==="children"?typeof P=="string"?l.textContent!==P&&(g.suppressHydrationWarning!==!0&&qi(l.textContent,P,e),u=["children",P]):typeof P=="number"&&l.textContent!==""+P&&(g.suppressHydrationWarning!==!0&&qi(l.textContent,P,e),u=["children",""+P]):c.hasOwnProperty(w)&&P!=null&&w==="onScroll"&&it("scroll",l)}switch(i){case"input":Re(l),st(l,g,!0);break;case"textarea":Re(l),oe(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=Ki)}l=u,t.updateQueue=l,l!==null&&(t.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ke(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=w.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=w.createElement(i,{is:l.is}):(e=w.createElement(i),i==="select"&&(w=e,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):e=w.createElementNS(e,i),e[Hn]=t,e[_o]=l,xm(e,t,!1,!1),t.stateNode=e;e:{switch(w=gr(i,l),i){case"dialog":it("cancel",e),it("close",e),u=l;break;case"iframe":case"object":case"embed":it("load",e),u=l;break;case"video":case"audio":for(u=0;u<To.length;u++)it(To[u],e);u=l;break;case"source":it("error",e),u=l;break;case"img":case"image":case"link":it("error",e),it("load",e),u=l;break;case"details":it("toggle",e),u=l;break;case"input":Qe(e,l),u=je(e,l),it("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=q({},l,{value:void 0}),it("invalid",e);break;case"textarea":Tt(e,l),u=rn(e,l),it("invalid",e);break;default:u=l}mr(i,u),P=u;for(g in P)if(P.hasOwnProperty(g)){var T=P[g];g==="style"?ws(e,T):g==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&Nn(e,T)):g==="children"?typeof T=="string"?(i!=="textarea"||T!=="")&&Ht(e,T):typeof T=="number"&&Ht(e,""+T):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(c.hasOwnProperty(g)?T!=null&&g==="onScroll"&&it("scroll",e):T!=null&&M(e,g,T,w))}switch(i){case"input":Re(e),st(e,l,!1);break;case"textarea":Re(e),oe(e);break;case"option":l.value!=null&&e.setAttribute("value",""+K(l.value));break;case"select":e.multiple=!!l.multiple,g=l.value,g!=null?Je(e,!!l.multiple,g,!1):l.defaultValue!=null&&Je(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Ki)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return zt(t),null;case 6:if(e&&t.stateNode!=null)bm(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(i=Xr(Fo.current),Xr(Wn.current),na(t)){if(l=t.stateNode,i=t.memoizedProps,l[Hn]=t,(g=l.nodeValue!==i)&&(e=an,e!==null))switch(e.tag){case 3:qi(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qi(l.nodeValue,i,(e.mode&1)!==0)}g&&(t.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Hn]=t,t.stateNode=l}return zt(t),null;case 13:if(at(dt),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ct&&ln!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Cf(),Os(),t.flags|=98560,g=!1;else if(g=na(t),l!==null&&l.dehydrated!==null){if(e===null){if(!g)throw Error(s(318));if(g=t.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(s(317));g[Hn]=t}else Os(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;zt(t),g=!1}else Rn!==null&&(vd(Rn),Rn=null),g=!0;if(!g)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(dt.current&1)!==0?wt===0&&(wt=3):bd())),t.updateQueue!==null&&(t.flags|=4),zt(t),null);case 4:return $s(),id(e,t),e===null&&Mo(t.stateNode.containerInfo),zt(t),null;case 10:return _c(t.type._context),zt(t),null;case 17:return qt(t.type)&&Xi(),zt(t),null;case 19:if(at(dt),g=t.memoizedState,g===null)return zt(t),null;if(l=(t.flags&128)!==0,w=g.rendering,w===null)if(l)Vo(g,!1);else{if(wt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(w=la(e),w!==null){for(t.flags|=128,Vo(g,!1),l=w.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=i,i=t.child;i!==null;)g=i,e=l,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=e,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,e=w.dependencies,g.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return ot(dt,dt.current&1|2),t.child}e=e.sibling}g.tail!==null&&gt()>Vs&&(t.flags|=128,l=!0,Vo(g,!1),t.lanes=4194304)}else{if(!l)if(e=la(w),e!==null){if(t.flags|=128,l=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Vo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!ct)return zt(t),null}else 2*gt()-g.renderingStartTime>Vs&&i!==1073741824&&(t.flags|=128,l=!0,Vo(g,!1),t.lanes=4194304);g.isBackwards?(w.sibling=t.child,t.child=w):(i=g.last,i!==null?i.sibling=w:t.child=w,g.last=w)}return g.tail!==null?(t=g.tail,g.rendering=t,g.tail=t.sibling,g.renderingStartTime=gt(),t.sibling=null,i=dt.current,ot(dt,l?i&1|2:i&1),t):(zt(t),null);case 22:case 23:return yd(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(cn&1073741824)!==0&&(zt(t),t.subtreeFlags&6&&(t.flags|=8192)):zt(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function zb(e,t){switch(Ec(t),t.tag){case 1:return qt(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $s(),at(Qt),at(Ot),Bc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Fc(t),null;case 13:if(at(dt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Os()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return at(dt),null;case 4:return $s(),null;case 10:return _c(t.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var va=!1,Ft=!1,Fb=typeof WeakSet=="function"?WeakSet:Set,be=null;function Hs(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){pt(e,t,l)}else i.current=null}function ad(e,t,i){try{i()}catch(l){pt(e,t,l)}}var wm=!1;function $b(e,t){if(yc=Li,e=Jp(),uc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{i.nodeType,g.nodeType}catch{i=null;break e}var w=0,P=-1,T=-1,$=0,ee=0,se=e,Z=null;t:for(;;){for(var xe;se!==i||u!==0&&se.nodeType!==3||(P=w+u),se!==g||l!==0&&se.nodeType!==3||(T=w+l),se.nodeType===3&&(w+=se.nodeValue.length),(xe=se.firstChild)!==null;)Z=se,se=xe;for(;;){if(se===e)break t;if(Z===i&&++$===u&&(P=w),Z===g&&++ee===l&&(T=w),(xe=se.nextSibling)!==null)break;se=Z,Z=se.parentNode}se=xe}i=P===-1||T===-1?null:{start:P,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(bc={focusedElem:e,selectionRange:i},Li=!1,be=t;be!==null;)if(t=be,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,be=e;else for(;be!==null;){t=be;try{var Se=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Se!==null){var Ne=Se.memoizedProps,ht=Se.memoizedState,L=t.stateNode,D=L.getSnapshotBeforeUpdate(t.elementType===t.type?Ne:An(t.type,Ne),ht);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=t.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(ce){pt(t,t.return,ce)}if(e=t.sibling,e!==null){e.return=t.return,be=e;break}be=t.return}return Se=wm,wm=!1,Se}function Uo(e,t,i){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var g=u.destroy;u.destroy=void 0,g!==void 0&&ad(t,i,g)}u=u.next}while(u!==l)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==t)}}function ld(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Sm(e){var t=e.alternate;t!==null&&(e.alternate=null,Sm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Hn],delete t[_o],delete t[kc],delete t[Sb],delete t[Cb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cm(e){return e.tag===5||e.tag===3||e.tag===4}function km(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cd(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Ki));else if(l!==4&&(e=e.child,e!==null))for(cd(e,t,i),e=e.sibling;e!==null;)cd(e,t,i),e=e.sibling}function dd(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(dd(e,t,i),e=e.sibling;e!==null;)dd(e,t,i),e=e.sibling}var Mt=null,Tn=!1;function Er(e,t,i){for(i=i.child;i!==null;)Nm(e,t,i),i=i.sibling}function Nm(e,t,i){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(Ti,i)}catch{}switch(i.tag){case 5:Ft||Hs(i,t);case 6:var l=Mt,u=Tn;Mt=null,Er(e,t,i),Mt=l,Tn=u,Mt!==null&&(Tn?(e=Mt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Mt.removeChild(i.stateNode));break;case 18:Mt!==null&&(Tn?(e=Mt,i=i.stateNode,e.nodeType===8?Cc(e.parentNode,i):e.nodeType===1&&Cc(e,i),Co(e)):Cc(Mt,i.stateNode));break;case 4:l=Mt,u=Tn,Mt=i.stateNode.containerInfo,Tn=!0,Er(e,t,i),Mt=l,Tn=u;break;case 0:case 11:case 14:case 15:if(!Ft&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var g=u,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&ad(i,t,w),u=u.next}while(u!==l)}Er(e,t,i);break;case 1:if(!Ft&&(Hs(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(P){pt(i,t,P)}Er(e,t,i);break;case 21:Er(e,t,i);break;case 22:i.mode&1?(Ft=(l=Ft)||i.memoizedState!==null,Er(e,t,i),Ft=l):Er(e,t,i);break;default:Er(e,t,i)}}function jm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Fb),t.forEach(function(l){var u=Kb.bind(null,e,l);i.has(l)||(i.add(l),l.then(u,u))})}}function Mn(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];try{var g=e,w=t,P=w;e:for(;P!==null;){switch(P.tag){case 5:Mt=P.stateNode,Tn=!1;break e;case 3:Mt=P.stateNode.containerInfo,Tn=!0;break e;case 4:Mt=P.stateNode.containerInfo,Tn=!0;break e}P=P.return}if(Mt===null)throw Error(s(160));Nm(g,w,u),Mt=null,Tn=!1;var T=u.alternate;T!==null&&(T.return=null),u.return=null}catch($){pt(u,t,$)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pm(t,e),t=t.sibling}function Pm(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mn(t,e),Un(e),l&4){try{Uo(3,e,e.return),xa(3,e)}catch(Ne){pt(e,e.return,Ne)}try{Uo(5,e,e.return)}catch(Ne){pt(e,e.return,Ne)}}break;case 1:Mn(t,e),Un(e),l&512&&i!==null&&Hs(i,i.return);break;case 5:if(Mn(t,e),Un(e),l&512&&i!==null&&Hs(i,i.return),e.flags&32){var u=e.stateNode;try{Ht(u,"")}catch(Ne){pt(e,e.return,Ne)}}if(l&4&&(u=e.stateNode,u!=null)){var g=e.memoizedProps,w=i!==null?i.memoizedProps:g,P=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{P==="input"&&g.type==="radio"&&g.name!=null&&mt(u,g),gr(P,w);var $=gr(P,g);for(w=0;w<T.length;w+=2){var ee=T[w],se=T[w+1];ee==="style"?ws(u,se):ee==="dangerouslySetInnerHTML"?Nn(u,se):ee==="children"?Ht(u,se):M(u,ee,se,$)}switch(P){case"input":At(u,g);break;case"textarea":$n(u,g);break;case"select":var Z=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!g.multiple;var xe=g.value;xe!=null?Je(u,!!g.multiple,xe,!1):Z!==!!g.multiple&&(g.defaultValue!=null?Je(u,!!g.multiple,g.defaultValue,!0):Je(u,!!g.multiple,g.multiple?[]:"",!1))}u[_o]=g}catch(Ne){pt(e,e.return,Ne)}}break;case 6:if(Mn(t,e),Un(e),l&4){if(e.stateNode===null)throw Error(s(162));u=e.stateNode,g=e.memoizedProps;try{u.nodeValue=g}catch(Ne){pt(e,e.return,Ne)}}break;case 3:if(Mn(t,e),Un(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Co(t.containerInfo)}catch(Ne){pt(e,e.return,Ne)}break;case 4:Mn(t,e),Un(e);break;case 13:Mn(t,e),Un(e),u=e.child,u.flags&8192&&(g=u.memoizedState!==null,u.stateNode.isHidden=g,!g||u.alternate!==null&&u.alternate.memoizedState!==null||(fd=gt())),l&4&&jm(e);break;case 22:if(ee=i!==null&&i.memoizedState!==null,e.mode&1?(Ft=($=Ft)||ee,Mn(t,e),Ft=$):Mn(t,e),Un(e),l&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!ee&&(e.mode&1)!==0)for(be=e,ee=e.child;ee!==null;){for(se=be=ee;be!==null;){switch(Z=be,xe=Z.child,Z.tag){case 0:case 11:case 14:case 15:Uo(4,Z,Z.return);break;case 1:Hs(Z,Z.return);var Se=Z.stateNode;if(typeof Se.componentWillUnmount=="function"){l=Z,i=Z.return;try{t=l,Se.props=t.memoizedProps,Se.state=t.memoizedState,Se.componentWillUnmount()}catch(Ne){pt(l,i,Ne)}}break;case 5:Hs(Z,Z.return);break;case 22:if(Z.memoizedState!==null){Am(se);continue}}xe!==null?(xe.return=Z,be=xe):Am(se)}ee=ee.sibling}e:for(ee=null,se=e;;){if(se.tag===5){if(ee===null){ee=se;try{u=se.stateNode,$?(g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(P=se.stateNode,T=se.memoizedProps.style,w=T!=null&&T.hasOwnProperty("display")?T.display:null,P.style.display=bs("display",w))}catch(Ne){pt(e,e.return,Ne)}}}else if(se.tag===6){if(ee===null)try{se.stateNode.nodeValue=$?"":se.memoizedProps}catch(Ne){pt(e,e.return,Ne)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===e)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===e)break e;for(;se.sibling===null;){if(se.return===null||se.return===e)break e;ee===se&&(ee=null),se=se.return}ee===se&&(ee=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:Mn(t,e),Un(e),l&4&&jm(e);break;case 21:break;default:Mn(t,e),Un(e)}}function Un(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Cm(i)){var l=i;break e}i=i.return}throw Error(s(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ht(u,""),l.flags&=-33);var g=km(e);dd(e,g,u);break;case 3:case 4:var w=l.stateNode.containerInfo,P=km(e);cd(e,P,w);break;default:throw Error(s(161))}}catch(T){pt(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bb(e,t,i){be=e,Em(e)}function Em(e,t,i){for(var l=(e.mode&1)!==0;be!==null;){var u=be,g=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||va;if(!w){var P=u.alternate,T=P!==null&&P.memoizedState!==null||Ft;P=va;var $=Ft;if(va=w,(Ft=T)&&!$)for(be=u;be!==null;)w=be,T=w.child,w.tag===22&&w.memoizedState!==null?Tm(u):T!==null?(T.return=w,be=T):Tm(u);for(;g!==null;)be=g,Em(g),g=g.sibling;be=u,va=P,Ft=$}Rm(e)}else(u.subtreeFlags&8772)!==0&&g!==null?(g.return=u,be=g):Rm(e)}}function Rm(e){for(;be!==null;){var t=be;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ft||xa(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!Ft)if(i===null)l.componentDidMount();else{var u=t.elementType===t.type?i.memoizedProps:An(t.type,i.memoizedProps);l.componentDidUpdate(u,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=t.updateQueue;g!==null&&Af(t,g,l);break;case 3:var w=t.updateQueue;if(w!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Af(t,w,i)}break;case 5:var P=t.stateNode;if(i===null&&t.flags&4){i=P;var T=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&i.focus();break;case"img":T.src&&(i.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var $=t.alternate;if($!==null){var ee=$.memoizedState;if(ee!==null){var se=ee.dehydrated;se!==null&&Co(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ft||t.flags&512&&ld(t)}catch(Z){pt(t,t.return,Z)}}if(t===e){be=null;break}if(i=t.sibling,i!==null){i.return=t.return,be=i;break}be=t.return}}function Am(e){for(;be!==null;){var t=be;if(t===e){be=null;break}var i=t.sibling;if(i!==null){i.return=t.return,be=i;break}be=t.return}}function Tm(e){for(;be!==null;){var t=be;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{xa(4,t)}catch(T){pt(t,i,T)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var u=t.return;try{l.componentDidMount()}catch(T){pt(t,u,T)}}var g=t.return;try{ld(t)}catch(T){pt(t,g,T)}break;case 5:var w=t.return;try{ld(t)}catch(T){pt(t,w,T)}}}catch(T){pt(t,t.return,T)}if(t===e){be=null;break}var P=t.sibling;if(P!==null){P.return=t.return,be=P;break}be=t.return}}var Hb=Math.ceil,ya=R.ReactCurrentDispatcher,ud=R.ReactCurrentOwner,bn=R.ReactCurrentBatchConfig,qe=0,jt=null,vt=null,It=0,cn=0,Ws=Cr(0),wt=0,Go=null,Zr=0,ba=0,pd=0,Qo=null,Yt=null,fd=0,Vs=1/0,lr=null,wa=!1,md=null,Rr=null,Sa=!1,Ar=null,Ca=0,qo=0,gd=null,ka=-1,Na=0;function Gt(){return(qe&6)!==0?gt():ka!==-1?ka:ka=gt()}function Tr(e){return(e.mode&1)===0?1:(qe&2)!==0&&It!==0?It&-It:Nb.transition!==null?(Na===0&&(Na=Cp()),Na):(e=Ze,e!==0||(e=window.event,e=e===void 0?16:Mp(e.type)),e)}function In(e,t,i,l){if(50<qo)throw qo=0,gd=null,Error(s(185));xo(e,i,l),((qe&2)===0||e!==jt)&&(e===jt&&((qe&2)===0&&(ba|=i),wt===4&&Mr(e,It)),Xt(e,l),i===1&&qe===0&&(t.mode&1)===0&&(Vs=gt()+500,Zi&&Nr()))}function Xt(e,t){var i=e.callbackNode;Ny(e,t);var l=_i(e,e===jt?It:0);if(l===0)i!==null&&bp(i),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(i!=null&&bp(i),t===1)e.tag===0?kb(Im.bind(null,e)):xf(Im.bind(null,e)),bb(function(){(qe&6)===0&&Nr()}),i=null;else{switch(kp(l)){case 1:i=ql;break;case 4:i=wp;break;case 16:i=Ai;break;case 536870912:i=Sp;break;default:i=Ai}i=Bm(i,Mm.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Mm(e,t){if(ka=-1,Na=0,(qe&6)!==0)throw Error(s(327));var i=e.callbackNode;if(Us()&&e.callbackNode!==i)return null;var l=_i(e,e===jt?It:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=ja(e,l);else{t=l;var u=qe;qe|=2;var g=Dm();(jt!==e||It!==t)&&(lr=null,Vs=gt()+500,ts(e,t));do try{Ub();break}catch(P){_m(e,P)}while(!0);Ic(),ya.current=g,qe=u,vt!==null?t=0:(jt=null,It=0,t=wt)}if(t!==0){if(t===2&&(u=Kl(e),u!==0&&(l=u,t=hd(e,u))),t===1)throw i=Go,ts(e,0),Mr(e,l),Xt(e,gt()),i;if(t===6)Mr(e,l);else{if(u=e.current.alternate,(l&30)===0&&!Wb(u)&&(t=ja(e,l),t===2&&(g=Kl(e),g!==0&&(l=g,t=hd(e,g))),t===1))throw i=Go,ts(e,0),Mr(e,l),Xt(e,gt()),i;switch(e.finishedWork=u,e.finishedLanes=l,t){case 0:case 1:throw Error(s(345));case 2:ns(e,Yt,lr);break;case 3:if(Mr(e,l),(l&130023424)===l&&(t=fd+500-gt(),10<t)){if(_i(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){Gt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Sc(ns.bind(null,e,Yt,lr),t);break}ns(e,Yt,lr);break;case 4:if(Mr(e,l),(l&4194240)===l)break;for(t=e.eventTimes,u=-1;0<l;){var w=31-Pn(l);g=1<<w,w=t[w],w>u&&(u=w),l&=~g}if(l=u,l=gt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Hb(l/1960))-l,10<l){e.timeoutHandle=Sc(ns.bind(null,e,Yt,lr),l);break}ns(e,Yt,lr);break;case 5:ns(e,Yt,lr);break;default:throw Error(s(329))}}}return Xt(e,gt()),e.callbackNode===i?Mm.bind(null,e):null}function hd(e,t){var i=Qo;return e.current.memoizedState.isDehydrated&&(ts(e,t).flags|=256),e=ja(e,t),e!==2&&(t=Yt,Yt=i,t!==null&&vd(t)),e}function vd(e){Yt===null?Yt=e:Yt.push.apply(Yt,e)}function Wb(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var u=i[l],g=u.getSnapshot;u=u.value;try{if(!En(g(),u))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mr(e,t){for(t&=~pd,t&=~ba,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Pn(t),l=1<<i;e[i]=-1,t&=~l}}function Im(e){if((qe&6)!==0)throw Error(s(327));Us();var t=_i(e,0);if((t&1)===0)return Xt(e,gt()),null;var i=ja(e,t);if(e.tag!==0&&i===2){var l=Kl(e);l!==0&&(t=l,i=hd(e,l))}if(i===1)throw i=Go,ts(e,0),Mr(e,t),Xt(e,gt()),i;if(i===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ns(e,Yt,lr),Xt(e,gt()),null}function xd(e,t){var i=qe;qe|=1;try{return e(t)}finally{qe=i,qe===0&&(Vs=gt()+500,Zi&&Nr())}}function es(e){Ar!==null&&Ar.tag===0&&(qe&6)===0&&Us();var t=qe;qe|=1;var i=bn.transition,l=Ze;try{if(bn.transition=null,Ze=1,e)return e()}finally{Ze=l,bn.transition=i,qe=t,(qe&6)===0&&Nr()}}function yd(){cn=Ws.current,at(Ws)}function ts(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,yb(i)),vt!==null)for(i=vt.return;i!==null;){var l=i;switch(Ec(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Xi();break;case 3:$s(),at(Qt),at(Ot),Bc();break;case 5:Fc(l);break;case 4:$s();break;case 13:at(dt);break;case 19:at(dt);break;case 10:_c(l.type._context);break;case 22:case 23:yd()}i=i.return}if(jt=e,vt=e=Ir(e.current,null),It=cn=t,wt=0,Go=null,pd=ba=Zr=0,Yt=Qo=null,Yr!==null){for(t=0;t<Yr.length;t++)if(i=Yr[t],l=i.interleaved,l!==null){i.interleaved=null;var u=l.next,g=i.pending;if(g!==null){var w=g.next;g.next=u,l.next=w}i.pending=l}Yr=null}return e}function _m(e,t){do{var i=vt;try{if(Ic(),ca.current=fa,da){for(var l=ut.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}da=!1}if(Jr=0,Nt=bt=ut=null,$o=!1,Bo=0,ud.current=null,i===null||i.return===null){wt=1,Go=t,vt=null;break}e:{var g=e,w=i.return,P=i,T=t;if(t=It,P.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var $=T,ee=P,se=ee.tag;if((ee.mode&1)===0&&(se===0||se===11||se===15)){var Z=ee.alternate;Z?(ee.updateQueue=Z.updateQueue,ee.memoizedState=Z.memoizedState,ee.lanes=Z.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var xe=om(w);if(xe!==null){xe.flags&=-257,im(xe,w,P,g,t),xe.mode&1&&sm(g,$,t),t=xe,T=$;var Se=t.updateQueue;if(Se===null){var Ne=new Set;Ne.add(T),t.updateQueue=Ne}else Se.add(T);break e}else{if((t&1)===0){sm(g,$,t),bd();break e}T=Error(s(426))}}else if(ct&&P.mode&1){var ht=om(w);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),im(ht,w,P,g,t),Tc(Bs(T,P));break e}}g=T=Bs(T,P),wt!==4&&(wt=2),Qo===null?Qo=[g]:Qo.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,t&=-t,g.lanes|=t;var L=nm(g,T,t);Rf(g,L);break e;case 1:P=T;var D=g.type,F=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Rr===null||!Rr.has(F)))){g.flags|=65536,t&=-t,g.lanes|=t;var ce=rm(g,P,t);Rf(g,ce);break e}}g=g.return}while(g!==null)}Lm(i)}catch(Pe){t=Pe,vt===i&&i!==null&&(vt=i=i.return);continue}break}while(!0)}function Dm(){var e=ya.current;return ya.current=fa,e===null?fa:e}function bd(){(wt===0||wt===3||wt===2)&&(wt=4),jt===null||(Zr&268435455)===0&&(ba&268435455)===0||Mr(jt,It)}function ja(e,t){var i=qe;qe|=2;var l=Dm();(jt!==e||It!==t)&&(lr=null,ts(e,t));do try{Vb();break}catch(u){_m(e,u)}while(!0);if(Ic(),qe=i,ya.current=l,vt!==null)throw Error(s(261));return jt=null,It=0,wt}function Vb(){for(;vt!==null;)Om(vt)}function Ub(){for(;vt!==null&&!hy();)Om(vt)}function Om(e){var t=$m(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?Lm(e):vt=t,ud.current=null}function Lm(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=Lb(i,t,cn),i!==null){vt=i;return}}else{if(i=zb(i,t),i!==null){i.flags&=32767,vt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{wt=6,vt=null;return}}if(t=t.sibling,t!==null){vt=t;return}vt=t=e}while(t!==null);wt===0&&(wt=5)}function ns(e,t,i){var l=Ze,u=bn.transition;try{bn.transition=null,Ze=1,Gb(e,t,i,l)}finally{bn.transition=u,Ze=l}return null}function Gb(e,t,i,l){do Us();while(Ar!==null);if((qe&6)!==0)throw Error(s(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var g=i.lanes|i.childLanes;if(jy(e,g),e===jt&&(vt=jt=null,It=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Sa||(Sa=!0,Bm(Ai,function(){return Us(),null})),g=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||g){g=bn.transition,bn.transition=null;var w=Ze;Ze=1;var P=qe;qe|=4,ud.current=null,$b(e,i),Pm(i,e),pb(bc),Li=!!yc,bc=yc=null,e.current=i,Bb(i),vy(),qe=P,Ze=w,bn.transition=g}else e.current=i;if(Sa&&(Sa=!1,Ar=e,Ca=u),g=e.pendingLanes,g===0&&(Rr=null),by(i.stateNode),Xt(e,gt()),t!==null)for(l=e.onRecoverableError,i=0;i<t.length;i++)u=t[i],l(u.value,{componentStack:u.stack,digest:u.digest});if(wa)throw wa=!1,e=md,md=null,e;return(Ca&1)!==0&&e.tag!==0&&Us(),g=e.pendingLanes,(g&1)!==0?e===gd?qo++:(qo=0,gd=e):qo=0,Nr(),null}function Us(){if(Ar!==null){var e=kp(Ca),t=bn.transition,i=Ze;try{if(bn.transition=null,Ze=16>e?16:e,Ar===null)var l=!1;else{if(e=Ar,Ar=null,Ca=0,(qe&6)!==0)throw Error(s(331));var u=qe;for(qe|=4,be=e.current;be!==null;){var g=be,w=g.child;if((be.flags&16)!==0){var P=g.deletions;if(P!==null){for(var T=0;T<P.length;T++){var $=P[T];for(be=$;be!==null;){var ee=be;switch(ee.tag){case 0:case 11:case 15:Uo(8,ee,g)}var se=ee.child;if(se!==null)se.return=ee,be=se;else for(;be!==null;){ee=be;var Z=ee.sibling,xe=ee.return;if(Sm(ee),ee===$){be=null;break}if(Z!==null){Z.return=xe,be=Z;break}be=xe}}}var Se=g.alternate;if(Se!==null){var Ne=Se.child;if(Ne!==null){Se.child=null;do{var ht=Ne.sibling;Ne.sibling=null,Ne=ht}while(Ne!==null)}}be=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,be=w;else e:for(;be!==null;){if(g=be,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Uo(9,g,g.return)}var L=g.sibling;if(L!==null){L.return=g.return,be=L;break e}be=g.return}}var D=e.current;for(be=D;be!==null;){w=be;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,be=F;else e:for(w=D;be!==null;){if(P=be,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:xa(9,P)}}catch(Pe){pt(P,P.return,Pe)}if(P===w){be=null;break e}var ce=P.sibling;if(ce!==null){ce.return=P.return,be=ce;break e}be=P.return}}if(qe=u,Nr(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(Ti,e)}catch{}l=!0}return l}finally{Ze=i,bn.transition=t}}return!1}function zm(e,t,i){t=Bs(i,t),t=nm(e,t,1),e=Pr(e,t,1),t=Gt(),e!==null&&(xo(e,1,t),Xt(e,t))}function pt(e,t,i){if(e.tag===3)zm(e,e,i);else for(;t!==null;){if(t.tag===3){zm(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rr===null||!Rr.has(l))){e=Bs(i,e),e=rm(t,e,1),t=Pr(t,e,1),e=Gt(),t!==null&&(xo(t,1,e),Xt(t,e));break}}t=t.return}}function Qb(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),t=Gt(),e.pingedLanes|=e.suspendedLanes&i,jt===e&&(It&i)===i&&(wt===4||wt===3&&(It&130023424)===It&&500>gt()-fd?ts(e,0):pd|=i),Xt(e,t)}function Fm(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ii,Ii<<=1,(Ii&130023424)===0&&(Ii=4194304)));var i=Gt();e=or(e,t),e!==null&&(xo(e,t,i),Xt(e,i))}function qb(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Fm(e,i)}function Kb(e,t){var i=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(s(314))}l!==null&&l.delete(t),Fm(e,i)}var $m;$m=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qt.current)Kt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Kt=!1,Ob(e,t,i);Kt=(e.flags&131072)!==0}else Kt=!1,ct&&(t.flags&1048576)!==0&&yf(t,ta,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;ha(e,t),e=t.pendingProps;var u=Is(t,Ot.current);Fs(t,i),u=Vc(null,t,l,e,u,i);var g=Uc();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qt(l)?(g=!0,Ji(t)):g=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Lc(t),u.updater=ma,t.stateNode=u,u._reactInternals=t,Xc(t,l,e,i),t=td(null,t,l,!0,g,i)):(t.tag=0,ct&&g&&Pc(t),Ut(null,t,u,i),t=t.child),t;case 16:l=t.elementType;e:{switch(ha(e,t),e=t.pendingProps,u=l._init,l=u(l._payload),t.type=l,u=t.tag=Xb(l),e=An(l,e),u){case 0:t=ed(null,t,l,e,i);break e;case 1:t=pm(null,t,l,e,i);break e;case 11:t=am(null,t,l,e,i);break e;case 14:t=lm(null,t,l,An(l.type,e),i);break e}throw Error(s(306,l,""))}return t;case 0:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:An(l,u),ed(e,t,l,u,i);case 1:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:An(l,u),pm(e,t,l,u,i);case 3:e:{if(fm(t),e===null)throw Error(s(387));l=t.pendingProps,g=t.memoizedState,u=g.element,Ef(e,t),aa(t,l,null,i);var w=t.memoizedState;if(l=w.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},t.updateQueue.baseState=g,t.memoizedState=g,t.flags&256){u=Bs(Error(s(423)),t),t=mm(e,t,l,i,u);break e}else if(l!==u){u=Bs(Error(s(424)),t),t=mm(e,t,l,i,u);break e}else for(ln=Sr(t.stateNode.containerInfo.firstChild),an=t,ct=!0,Rn=null,i=jf(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Os(),l===u){t=ar(e,t,i);break e}Ut(e,t,l,i)}t=t.child}return t;case 5:return Tf(t),e===null&&Ac(t),l=t.type,u=t.pendingProps,g=e!==null?e.memoizedProps:null,w=u.children,wc(l,u)?w=null:g!==null&&wc(l,g)&&(t.flags|=32),um(e,t),Ut(e,t,w,i),t.child;case 6:return e===null&&Ac(t),null;case 13:return gm(e,t,i);case 4:return zc(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ls(t,null,l,i):Ut(e,t,l,i),t.child;case 11:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:An(l,u),am(e,t,l,u,i);case 7:return Ut(e,t,t.pendingProps,i),t.child;case 8:return Ut(e,t,t.pendingProps.children,i),t.child;case 12:return Ut(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(l=t.type._context,u=t.pendingProps,g=t.memoizedProps,w=u.value,ot(sa,l._currentValue),l._currentValue=w,g!==null)if(En(g.value,w)){if(g.children===u.children&&!Qt.current){t=ar(e,t,i);break e}}else for(g=t.child,g!==null&&(g.return=t);g!==null;){var P=g.dependencies;if(P!==null){w=g.child;for(var T=P.firstContext;T!==null;){if(T.context===l){if(g.tag===1){T=ir(-1,i&-i),T.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var ee=$.pending;ee===null?T.next=T:(T.next=ee.next,ee.next=T),$.pending=T}}g.lanes|=i,T=g.alternate,T!==null&&(T.lanes|=i),Dc(g.return,i,t),P.lanes|=i;break}T=T.next}}else if(g.tag===10)w=g.type===t.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(s(341));w.lanes|=i,P=w.alternate,P!==null&&(P.lanes|=i),Dc(w,i,t),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===t){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Ut(e,t,u.children,i),t=t.child}return t;case 9:return u=t.type,l=t.pendingProps.children,Fs(t,i),u=xn(u),l=l(u),t.flags|=1,Ut(e,t,l,i),t.child;case 14:return l=t.type,u=An(l,t.pendingProps),u=An(l.type,u),lm(e,t,l,u,i);case 15:return cm(e,t,t.type,t.pendingProps,i);case 17:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:An(l,u),ha(e,t),t.tag=1,qt(l)?(e=!0,Ji(t)):e=!1,Fs(t,i),em(t,l,u),Xc(t,l,u,i),td(null,t,l,!0,e,i);case 19:return vm(e,t,i);case 22:return dm(e,t,i)}throw Error(s(156,t.tag))};function Bm(e,t){return yp(e,t)}function Yb(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,t,i,l){return new Yb(e,t,i,l)}function wd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xb(e){if(typeof e=="function")return wd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ae)return 11;if(e===ge)return 14}return 2}function Ir(e,t){var i=e.alternate;return i===null?(i=wn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Pa(e,t,i,l,u,g){var w=2;if(l=e,typeof e=="function")wd(e)&&(w=1);else if(typeof e=="string")w=5;else e:switch(e){case z:return rs(i.children,u,g,t);case V:w=8,u|=8;break;case ne:return e=wn(12,i,t,u|2),e.elementType=ne,e.lanes=g,e;case he:return e=wn(13,i,t,u),e.elementType=he,e.lanes=g,e;case me:return e=wn(19,i,t,u),e.elementType=me,e.lanes=g,e;case Q:return Ea(i,u,g,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:w=10;break e;case fe:w=9;break e;case ae:w=11;break e;case ge:w=14;break e;case J:w=16,l=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=wn(w,i,t,u),t.elementType=e,t.type=l,t.lanes=g,t}function rs(e,t,i,l){return e=wn(7,e,l,t),e.lanes=i,e}function Ea(e,t,i,l){return e=wn(22,e,l,t),e.elementType=Q,e.lanes=i,e.stateNode={isHidden:!1},e}function Sd(e,t,i){return e=wn(6,e,null,t),e.lanes=i,e}function Cd(e,t,i){return t=wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jb(e,t,i,l,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function kd(e,t,i,l,u,g,w,P,T){return e=new Jb(e,t,i,P,T),t===1?(t=1,g===!0&&(t|=8)):t=0,g=wn(3,null,null,t),e.current=g,g.stateNode=e,g.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(g),e}function Zb(e,t,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:l==null?null:""+l,children:e,containerInfo:t,implementation:i}}function Hm(e){if(!e)return kr;e=e._reactInternals;e:{if(Ur(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var i=e.type;if(qt(i))return hf(e,i,t)}return t}function Wm(e,t,i,l,u,g,w,P,T){return e=kd(i,l,!0,e,u,g,w,P,T),e.context=Hm(null),i=e.current,l=Gt(),u=Tr(i),g=ir(l,u),g.callback=t??null,Pr(i,g,u),e.current.lanes=u,xo(e,u,l),Xt(e,l),e}function Ra(e,t,i,l){var u=t.current,g=Gt(),w=Tr(u);return i=Hm(i),t.context===null?t.context=i:t.pendingContext=i,t=ir(g,w),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Pr(u,t,w),e!==null&&(In(e,u,w,g),ia(e,u,w)),w}function Aa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Nd(e,t){Vm(e,t),(e=e.alternate)&&Vm(e,t)}function ew(){return null}var Um=typeof reportError=="function"?reportError:function(e){console.error(e)};function jd(e){this._internalRoot=e}Ta.prototype.render=jd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ra(e,t,null,null)},Ta.prototype.unmount=jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;es(function(){Ra(null,e,null,null)}),t[tr]=null}};function Ta(e){this._internalRoot=e}Ta.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pp();e={blockedOn:null,target:e,priority:t};for(var i=0;i<yr.length&&t!==0&&t<yr[i].priority;i++);yr.splice(i,0,e),i===0&&Ap(e)}};function Pd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function tw(e,t,i,l,u){if(u){if(typeof l=="function"){var g=l;l=function(){var $=Aa(w);g.call($)}}var w=Wm(t,l,e,0,null,!1,!1,"",Gm);return e._reactRootContainer=w,e[tr]=w.current,Mo(e.nodeType===8?e.parentNode:e),es(),w}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var P=l;l=function(){var $=Aa(T);P.call($)}}var T=kd(e,0,!1,null,null,!1,!1,"",Gm);return e._reactRootContainer=T,e[tr]=T.current,Mo(e.nodeType===8?e.parentNode:e),es(function(){Ra(t,T,i,l)}),T}function Ia(e,t,i,l,u){var g=i._reactRootContainer;if(g){var w=g;if(typeof u=="function"){var P=u;u=function(){var T=Aa(w);P.call(T)}}Ra(t,w,e,u)}else w=tw(i,t,e,u,l);return Aa(w)}Np=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=vo(t.pendingLanes);i!==0&&(Xl(t,i|1),Xt(t,gt()),(qe&6)===0&&(Vs=gt()+500,Nr()))}break;case 13:es(function(){var l=or(e,1);if(l!==null){var u=Gt();In(l,e,1,u)}}),Nd(e,1)}},Jl=function(e){if(e.tag===13){var t=or(e,134217728);if(t!==null){var i=Gt();In(t,e,134217728,i)}Nd(e,134217728)}},jp=function(e){if(e.tag===13){var t=Tr(e),i=or(e,t);if(i!==null){var l=Gt();In(i,e,t,l)}Nd(e,t)}},Pp=function(){return Ze},Ep=function(e,t){var i=Ze;try{return Ze=e,t()}finally{Ze=i}},Ae=function(e,t,i){switch(t){case"input":if(At(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var u=Yi(l);if(!u)throw Error(s(90));Oe(l),At(l,u)}}}break;case"textarea":$n(e,i);break;case"select":t=i.value,t!=null&&Je(e,!!i.multiple,t,!1)}},Vt=xd,kt=es;var nw={usingClientEntryPoint:!1,Events:[Do,Ts,Yi,gn,Wt,xd]},Ko={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rw={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||ew,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{Ti=_a.inject(rw),Bn=_a}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw,Jt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pd(t))throw Error(s(200));return Zb(e,t,null,i)},Jt.createRoot=function(e,t){if(!Pd(e))throw Error(s(299));var i=!1,l="",u=Um;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=kd(e,1,!1,null,null,i,!1,l,u),e[tr]=t.current,Mo(e.nodeType===8?e.parentNode:e),new jd(t)},Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=vp(t),e=e===null?null:e.stateNode,e},Jt.flushSync=function(e){return es(e)},Jt.hydrate=function(e,t,i){if(!Ma(t))throw Error(s(200));return Ia(null,e,t,!0,i)},Jt.hydrateRoot=function(e,t,i){if(!Pd(e))throw Error(s(405));var l=i!=null&&i.hydratedSources||null,u=!1,g="",w=Um;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(g=i.identifierPrefix),i.onRecoverableError!==void 0&&(w=i.onRecoverableError)),t=Wm(t,null,e,1,i??null,u,!1,g,w),e[tr]=t.current,Mo(e),l)for(e=0;e<l.length;e++)i=l[e],u=i._getVersion,u=u(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,u]:t.mutableSourceEagerHydrationData.push(i,u);return new Ta(t)},Jt.render=function(e,t,i){if(!Ma(t))throw Error(s(200));return Ia(null,e,t,!1,i)},Jt.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(s(40));return e._reactRootContainer?(es(function(){Ia(null,null,e,!1,function(){e._reactRootContainer=null,e[tr]=null})}),!0):!1},Jt.unstable_batchedUpdates=xd,Jt.unstable_renderSubtreeIntoContainer=function(e,t,i,l){if(!Ma(i))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ia(e,t,i,!1,l)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var eg;function lh(){if(eg)return Ad.exports;eg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Ad.exports=uw(),Ad.exports}var tg;function pw(){if(tg)return Da;tg=1;var n=lh();return Da.createRoot=n.createRoot,Da.hydrateRoot=n.hydrateRoot,Da}var fw=pw(),f=Cu();const Zt=ah(f),gl=ow({__proto__:null,default:Zt},[f]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gw=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,a)=>a?a.toUpperCase():s.toLowerCase()),ng=n=>{const r=gw(n);return r.charAt(0).toUpperCase()+r.slice(1)},ch=(...n)=>n.filter((r,s,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=f.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:d,iconNode:p,...m},h)=>f.createElement("svg",{ref:h,...hw,width:r,height:r,stroke:n,strokeWidth:a?Number(s)*24/Number(r):s,className:ch("lucide",c),...m},[...p.map(([v,y])=>f.createElement(v,y)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(n,r)=>{const s=f.forwardRef(({className:a,...c},d)=>f.createElement(vw,{ref:d,iconNode:r,className:ch(`lucide-${mw(ng(n))}`,`lucide-${n}`,a),...c}));return s.displayName=ng(n),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ni=we("arrow-left",xw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bw=we("arrow-right",yw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Sw=we("arrow-up",ww);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],rg=we("book-open",Cw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Nw=we("bookmark",kw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],dh=we("bot",jw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Ew=we("brain",Pw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Aw=we("briefcase",Rw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Mw=we("calendar",Tw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],qa=we("chart-column",Iw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],Dw=we("chart-pie",_w);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],un=we("check",Ow);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ls=we("chevron-down",Lw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Fw=we("chevron-left",zw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cs=we("chevron-right",$w);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Hw=we("chevron-up",Bw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Vw=we("circle-check-big",Ww);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],uh=we("clipboard-list",Uw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Qw=we("cloud",Gw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],Kw=we("code",qw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Xw=we("compass",Yw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ss=we("copy",Jw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ph=we("database",Zw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],t2=we("download",e2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],ps=we("ellipsis",n2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],sg=we("eye-off",r2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Sn=we("file-text",s2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],og=we("folder-open",o2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],fh=we("folder-plus",i2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Zd=we("folder",a2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],mh=we("globe",l2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],d2=we("graduation-cap",c2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],p2=we("grip-vertical",u2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],m2=we("hard-drive",f2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],gh=we("info",g2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],v2=we("lightbulb",h2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],y2=we("mail",x2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],ds=we("message-square",b2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],S2=we("mic",w2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],k2=we("microscope",C2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],j2=we("newspaper",N2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],ig=we("panel-left",P2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],R2=we("paperclip",E2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],eu=we("pencil",A2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],ag=we("pin",T2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],hh=we("plus",M2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],_2=we("presentation",I2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],O2=we("redo-2",D2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],z2=we("scale",L2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],vh=we("search",F2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],tu=we("settings",$2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],lg=we("share-2",B2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],cg=we("shield-check",H2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Za=we("shield",W2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],U2=we("sliders-horizontal",V2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Js=we("square-pen",G2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]],Oa=we("thumbs-down",Q2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],La=we("thumbs-up",q2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],fs=we("trash-2",K2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],X2=we("trending-up",Y2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Z2=we("undo-2",J2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],el=we("upload",e1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],dg=we("user",t1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],nu=we("users",n1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],s1=we("wand-sparkles",r1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ro=we("x",o1);function ug(n,r){if(typeof n=="function")return n(r);n!=null&&(n.current=r)}function fr(...n){return r=>{let s=!1;const a=n.map(c=>{const d=ug(c,r);return!s&&typeof d=="function"&&(s=!0),d});if(s)return()=>{for(let c=0;c<a.length;c++){const d=a[c];typeof d=="function"?d():ug(n[c],null)}}}}function He(...n){return f.useCallback(fr(...n),n)}var i1=Symbol.for("react.lazy"),tl=gl[" use ".trim().toString()];function a1(n){return typeof n=="object"&&n!==null&&"then"in n}function xh(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===i1&&"_payload"in n&&a1(n._payload)}function ku(n){const r=c1(n),s=f.forwardRef((a,c)=>{let{children:d,...p}=a;xh(d)&&typeof tl=="function"&&(d=tl(d._payload));const m=f.Children.toArray(d),h=m.find(u1);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}var l1=ku("Slot");function c1(n){const r=f.forwardRef((s,a)=>{let{children:c,...d}=s;if(xh(c)&&typeof tl=="function"&&(c=tl(c._payload)),f.isValidElement(c)){const p=f1(c),m=p1(d,c.props);return c.type!==f.Fragment&&(m.ref=a?fr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var d1=Symbol("radix.slottable");function u1(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===d1}function p1(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function f1(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function yh(n){var r,s,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(r=0;r<c;r++)n[r]&&(s=yh(n[r]))&&(a&&(a+=" "),a+=s)}else for(s in n)n[s]&&(a&&(a+=" "),a+=s);return a}function bh(){for(var n,r,s=0,a="",c=arguments.length;s<c;s++)(n=arguments[s])&&(r=yh(n))&&(a&&(a+=" "),a+=r);return a}const pg=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,fg=bh,m1=(n,r)=>s=>{var a;if(r?.variants==null)return fg(n,s?.class,s?.className);const{variants:c,defaultVariants:d}=r,p=Object.keys(c).map(v=>{const y=s?.[v],x=d?.[v];if(y===null)return null;const b=pg(y)||pg(x);return c[v][b]}),m=s&&Object.entries(s).reduce((v,y)=>{let[x,b]=y;return b===void 0||(v[x]=b),v},{}),h=r==null||(a=r.compoundVariants)===null||a===void 0?void 0:a.reduce((v,y)=>{let{class:x,className:b,...S}=y;return Object.entries(S).every(N=>{let[C,k]=N;return Array.isArray(k)?k.includes({...d,...m}[C]):{...d,...m}[C]===k})?[...v,x,b]:v},[]);return fg(n,p,h,s?.class,s?.className)},g1=(n,r)=>{const s=new Array(n.length+r.length);for(let a=0;a<n.length;a++)s[a]=n[a];for(let a=0;a<r.length;a++)s[n.length+a]=r[a];return s},h1=(n,r)=>({classGroupId:n,validator:r}),wh=(n=new Map,r=null,s)=>({nextPart:n,validators:r,classGroupId:s}),nl="-",mg=[],v1="arbitrary..",x1=n=>{const r=b1(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:a}=n;return{getClassGroupId:p=>{if(p.startsWith("[")&&p.endsWith("]"))return y1(p);const m=p.split(nl),h=m[0]===""&&m.length>1?1:0;return Sh(m,h,r)},getConflictingClassGroupIds:(p,m)=>{if(m){const h=a[p],v=s[p];return h?v?g1(v,h):h:v||mg}return s[p]||mg}}},Sh=(n,r,s)=>{if(n.length-r===0)return s.classGroupId;const c=n[r],d=s.nextPart.get(c);if(d){const v=Sh(n,r+1,d);if(v)return v}const p=s.validators;if(p===null)return;const m=r===0?n.join(nl):n.slice(r).join(nl),h=p.length;for(let v=0;v<h;v++){const y=p[v];if(y.validator(m))return y.classGroupId}},y1=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=n.slice(1,-1),s=r.indexOf(":"),a=r.slice(0,s);return a?v1+a:void 0})(),b1=n=>{const{theme:r,classGroups:s}=n;return w1(s,r)},w1=(n,r)=>{const s=wh();for(const a in n){const c=n[a];Nu(c,s,a,r)}return s},Nu=(n,r,s,a)=>{const c=n.length;for(let d=0;d<c;d++){const p=n[d];S1(p,r,s,a)}},S1=(n,r,s,a)=>{if(typeof n=="string"){C1(n,r,s);return}if(typeof n=="function"){k1(n,r,s,a);return}N1(n,r,s,a)},C1=(n,r,s)=>{const a=n===""?r:Ch(r,n);a.classGroupId=s},k1=(n,r,s,a)=>{if(j1(n)){Nu(n(a),r,s,a);return}r.validators===null&&(r.validators=[]),r.validators.push(h1(s,n))},N1=(n,r,s,a)=>{const c=Object.entries(n),d=c.length;for(let p=0;p<d;p++){const[m,h]=c[p];Nu(h,Ch(r,m),s,a)}},Ch=(n,r)=>{let s=n;const a=r.split(nl),c=a.length;for(let d=0;d<c;d++){const p=a[d];let m=s.nextPart.get(p);m||(m=wh(),s.nextPart.set(p,m)),s=m}return s},j1=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,P1=n=>{if(n<1)return{get:()=>{},set:()=>{}};let r=0,s=Object.create(null),a=Object.create(null);const c=(d,p)=>{s[d]=p,r++,r>n&&(r=0,a=s,s=Object.create(null))};return{get(d){let p=s[d];if(p!==void 0)return p;if((p=a[d])!==void 0)return c(d,p),p},set(d,p){d in s?s[d]=p:c(d,p)}}},ru="!",gg=":",E1=[],hg=(n,r,s,a,c)=>({modifiers:n,hasImportantModifier:r,baseClassName:s,maybePostfixModifierPosition:a,isExternal:c}),R1=n=>{const{prefix:r,experimentalParseClassName:s}=n;let a=c=>{const d=[];let p=0,m=0,h=0,v;const y=c.length;for(let C=0;C<y;C++){const k=c[C];if(p===0&&m===0){if(k===gg){d.push(c.slice(h,C)),h=C+1;continue}if(k==="/"){v=C;continue}}k==="["?p++:k==="]"?p--:k==="("?m++:k===")"&&m--}const x=d.length===0?c:c.slice(h);let b=x,S=!1;x.endsWith(ru)?(b=x.slice(0,-1),S=!0):x.startsWith(ru)&&(b=x.slice(1),S=!0);const N=v&&v>h?v-h:void 0;return hg(d,S,b,N)};if(r){const c=r+gg,d=a;a=p=>p.startsWith(c)?d(p.slice(c.length)):hg(E1,!1,p,void 0,!0)}if(s){const c=a;a=d=>s({className:d,parseClassName:c})}return a},A1=n=>{const r=new Map;return n.orderSensitiveModifiers.forEach((s,a)=>{r.set(s,1e6+a)}),s=>{const a=[];let c=[];for(let d=0;d<s.length;d++){const p=s[d],m=p[0]==="[",h=r.has(p);m||h?(c.length>0&&(c.sort(),a.push(...c),c=[]),a.push(p)):c.push(p)}return c.length>0&&(c.sort(),a.push(...c)),a}},T1=n=>({cache:P1(n.cacheSize),parseClassName:R1(n),sortModifiers:A1(n),...x1(n)}),M1=/\s+/,I1=(n,r)=>{const{parseClassName:s,getClassGroupId:a,getConflictingClassGroupIds:c,sortModifiers:d}=r,p=[],m=n.trim().split(M1);let h="";for(let v=m.length-1;v>=0;v-=1){const y=m[v],{isExternal:x,modifiers:b,hasImportantModifier:S,baseClassName:N,maybePostfixModifierPosition:C}=s(y);if(x){h=y+(h.length>0?" "+h:h);continue}let k=!!C,E=a(k?N.substring(0,C):N);if(!E){if(!k){h=y+(h.length>0?" "+h:h);continue}if(E=a(N),!E){h=y+(h.length>0?" "+h:h);continue}k=!1}const j=b.length===0?"":b.length===1?b[0]:d(b).join(":"),M=S?j+ru:j,R=M+E;if(p.indexOf(R)>-1)continue;p.push(R);const I=c(E,k);for(let W=0;W<I.length;++W){const z=I[W];p.push(M+z)}h=y+(h.length>0?" "+h:h)}return h},_1=(...n)=>{let r=0,s,a,c="";for(;r<n.length;)(s=n[r++])&&(a=kh(s))&&(c&&(c+=" "),c+=a);return c},kh=n=>{if(typeof n=="string")return n;let r,s="";for(let a=0;a<n.length;a++)n[a]&&(r=kh(n[a]))&&(s&&(s+=" "),s+=r);return s},D1=(n,...r)=>{let s,a,c,d;const p=h=>{const v=r.reduce((y,x)=>x(y),n());return s=T1(v),a=s.cache.get,c=s.cache.set,d=m,m(h)},m=h=>{const v=a(h);if(v)return v;const y=I1(h,s);return c(h,y),y};return d=p,(...h)=>d(_1(...h))},O1=[],St=n=>{const r=s=>s[n]||O1;return r.isThemeGetter=!0,r},Nh=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,jh=/^\((?:(\w[\w-]*):)?(.+)\)$/i,L1=/^\d+\/\d+$/,z1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,F1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,$1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,B1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,H1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Gs=n=>L1.test(n),Ve=n=>!!n&&!Number.isNaN(Number(n)),Dr=n=>!!n&&Number.isInteger(Number(n)),Id=n=>n.endsWith("%")&&Ve(n.slice(0,-1)),cr=n=>z1.test(n),W1=()=>!0,V1=n=>F1.test(n)&&!$1.test(n),Ph=()=>!1,U1=n=>B1.test(n),G1=n=>H1.test(n),Q1=n=>!Ce(n)&&!ke(n),q1=n=>co(n,Ah,Ph),Ce=n=>Nh.test(n),os=n=>co(n,Th,V1),_d=n=>co(n,Z1,Ve),vg=n=>co(n,Eh,Ph),K1=n=>co(n,Rh,G1),za=n=>co(n,Mh,U1),ke=n=>jh.test(n),Xo=n=>uo(n,Th),Y1=n=>uo(n,eS),xg=n=>uo(n,Eh),X1=n=>uo(n,Ah),J1=n=>uo(n,Rh),Fa=n=>uo(n,Mh,!0),co=(n,r,s)=>{const a=Nh.exec(n);return a?a[1]?r(a[1]):s(a[2]):!1},uo=(n,r,s=!1)=>{const a=jh.exec(n);return a?a[1]?r(a[1]):s:!1},Eh=n=>n==="position"||n==="percentage",Rh=n=>n==="image"||n==="url",Ah=n=>n==="length"||n==="size"||n==="bg-size",Th=n=>n==="length",Z1=n=>n==="number",eS=n=>n==="family-name",Mh=n=>n==="shadow",tS=()=>{const n=St("color"),r=St("font"),s=St("text"),a=St("font-weight"),c=St("tracking"),d=St("leading"),p=St("breakpoint"),m=St("container"),h=St("spacing"),v=St("radius"),y=St("shadow"),x=St("inset-shadow"),b=St("text-shadow"),S=St("drop-shadow"),N=St("blur"),C=St("perspective"),k=St("aspect"),E=St("ease"),j=St("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],I=()=>[...R(),ke,Ce],W=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],V=()=>[ke,Ce,h],ne=()=>[Gs,"full","auto",...V()],te=()=>[Dr,"none","subgrid",ke,Ce],fe=()=>["auto",{span:["full",Dr,ke,Ce]},Dr,ke,Ce],ae=()=>[Dr,"auto",ke,Ce],he=()=>["auto","min","max","fr",ke,Ce],me=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ge=()=>["start","end","center","stretch","center-safe","end-safe"],J=()=>["auto",...V()],Q=()=>[Gs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...V()],_=()=>[n,ke,Ce],B=()=>[...R(),xg,vg,{position:[ke,Ce]}],q=()=>["no-repeat",{repeat:["","x","y","space","round"]}],A=()=>["auto","cover","contain",X1,q1,{size:[ke,Ce]}],U=()=>[Id,Xo,os],H=()=>["","none","full",v,ke,Ce],G=()=>["",Ve,Xo,os],re=()=>["solid","dashed","dotted","double"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],O=()=>[Ve,Id,xg,vg],K=()=>["","none",N,ke,Ce],ue=()=>["none",Ve,ke,Ce],pe=()=>["none",Ve,ke,Ce],Re=()=>[Ve,ke,Ce],Oe=()=>[Gs,"full",...V()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[cr],breakpoint:[cr],color:[W1],container:[cr],"drop-shadow":[cr],ease:["in","out","in-out"],font:[Q1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[cr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[cr],shadow:[cr],spacing:["px",Ve],text:[cr],"text-shadow":[cr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Gs,Ce,ke,k]}],container:["container"],columns:[{columns:[Ve,Ce,ke,m]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:I()}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ne()}],"inset-x":[{"inset-x":ne()}],"inset-y":[{"inset-y":ne()}],start:[{start:ne()}],end:[{end:ne()}],top:[{top:ne()}],right:[{right:ne()}],bottom:[{bottom:ne()}],left:[{left:ne()}],visibility:["visible","invisible","collapse"],z:[{z:[Dr,"auto",ke,Ce]}],basis:[{basis:[Gs,"full","auto",m,...V()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ve,Gs,"auto","initial","none",Ce]}],grow:[{grow:["",Ve,ke,Ce]}],shrink:[{shrink:["",Ve,ke,Ce]}],order:[{order:[Dr,"first","last","none",ke,Ce]}],"grid-cols":[{"grid-cols":te()}],"col-start-end":[{col:fe()}],"col-start":[{"col-start":ae()}],"col-end":[{"col-end":ae()}],"grid-rows":[{"grid-rows":te()}],"row-start-end":[{row:fe()}],"row-start":[{"row-start":ae()}],"row-end":[{"row-end":ae()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":he()}],"auto-rows":[{"auto-rows":he()}],gap:[{gap:V()}],"gap-x":[{"gap-x":V()}],"gap-y":[{"gap-y":V()}],"justify-content":[{justify:[...me(),"normal"]}],"justify-items":[{"justify-items":[...ge(),"normal"]}],"justify-self":[{"justify-self":["auto",...ge()]}],"align-content":[{content:["normal",...me()]}],"align-items":[{items:[...ge(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ge(),{baseline:["","last"]}]}],"place-content":[{"place-content":me()}],"place-items":[{"place-items":[...ge(),"baseline"]}],"place-self":[{"place-self":["auto",...ge()]}],p:[{p:V()}],px:[{px:V()}],py:[{py:V()}],ps:[{ps:V()}],pe:[{pe:V()}],pt:[{pt:V()}],pr:[{pr:V()}],pb:[{pb:V()}],pl:[{pl:V()}],m:[{m:J()}],mx:[{mx:J()}],my:[{my:J()}],ms:[{ms:J()}],me:[{me:J()}],mt:[{mt:J()}],mr:[{mr:J()}],mb:[{mb:J()}],ml:[{ml:J()}],"space-x":[{"space-x":V()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":V()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[m,"screen",...Q()]}],"min-w":[{"min-w":[m,"screen","none",...Q()]}],"max-w":[{"max-w":[m,"screen","none","prose",{screen:[p]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",s,Xo,os]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,ke,_d]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Id,Ce]}],"font-family":[{font:[Y1,Ce,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,ke,Ce]}],"line-clamp":[{"line-clamp":[Ve,"none",ke,_d]}],leading:[{leading:[d,...V()]}],"list-image":[{"list-image":["none",ke,Ce]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ke,Ce]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:_()}],"text-color":[{text:_()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...re(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ve,"from-font","auto",ke,os]}],"text-decoration-color":[{decoration:_()}],"underline-offset":[{"underline-offset":[Ve,"auto",ke,Ce]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ke,Ce]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ke,Ce]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:B()}],"bg-repeat":[{bg:q()}],"bg-size":[{bg:A()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Dr,ke,Ce],radial:["",ke,Ce],conic:[Dr,ke,Ce]},J1,K1]}],"bg-color":[{bg:_()}],"gradient-from-pos":[{from:U()}],"gradient-via-pos":[{via:U()}],"gradient-to-pos":[{to:U()}],"gradient-from":[{from:_()}],"gradient-via":[{via:_()}],"gradient-to":[{to:_()}],rounded:[{rounded:H()}],"rounded-s":[{"rounded-s":H()}],"rounded-e":[{"rounded-e":H()}],"rounded-t":[{"rounded-t":H()}],"rounded-r":[{"rounded-r":H()}],"rounded-b":[{"rounded-b":H()}],"rounded-l":[{"rounded-l":H()}],"rounded-ss":[{"rounded-ss":H()}],"rounded-se":[{"rounded-se":H()}],"rounded-ee":[{"rounded-ee":H()}],"rounded-es":[{"rounded-es":H()}],"rounded-tl":[{"rounded-tl":H()}],"rounded-tr":[{"rounded-tr":H()}],"rounded-br":[{"rounded-br":H()}],"rounded-bl":[{"rounded-bl":H()}],"border-w":[{border:G()}],"border-w-x":[{"border-x":G()}],"border-w-y":[{"border-y":G()}],"border-w-s":[{"border-s":G()}],"border-w-e":[{"border-e":G()}],"border-w-t":[{"border-t":G()}],"border-w-r":[{"border-r":G()}],"border-w-b":[{"border-b":G()}],"border-w-l":[{"border-l":G()}],"divide-x":[{"divide-x":G()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":G()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...re(),"hidden","none"]}],"divide-style":[{divide:[...re(),"hidden","none"]}],"border-color":[{border:_()}],"border-color-x":[{"border-x":_()}],"border-color-y":[{"border-y":_()}],"border-color-s":[{"border-s":_()}],"border-color-e":[{"border-e":_()}],"border-color-t":[{"border-t":_()}],"border-color-r":[{"border-r":_()}],"border-color-b":[{"border-b":_()}],"border-color-l":[{"border-l":_()}],"divide-color":[{divide:_()}],"outline-style":[{outline:[...re(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ve,ke,Ce]}],"outline-w":[{outline:["",Ve,Xo,os]}],"outline-color":[{outline:_()}],shadow:[{shadow:["","none",y,Fa,za]}],"shadow-color":[{shadow:_()}],"inset-shadow":[{"inset-shadow":["none",x,Fa,za]}],"inset-shadow-color":[{"inset-shadow":_()}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:_()}],"ring-offset-w":[{"ring-offset":[Ve,os]}],"ring-offset-color":[{"ring-offset":_()}],"inset-ring-w":[{"inset-ring":G()}],"inset-ring-color":[{"inset-ring":_()}],"text-shadow":[{"text-shadow":["none",b,Fa,za]}],"text-shadow-color":[{"text-shadow":_()}],opacity:[{opacity:[Ve,ke,Ce]}],"mix-blend":[{"mix-blend":[...X(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":X()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ve]}],"mask-image-linear-from-pos":[{"mask-linear-from":O()}],"mask-image-linear-to-pos":[{"mask-linear-to":O()}],"mask-image-linear-from-color":[{"mask-linear-from":_()}],"mask-image-linear-to-color":[{"mask-linear-to":_()}],"mask-image-t-from-pos":[{"mask-t-from":O()}],"mask-image-t-to-pos":[{"mask-t-to":O()}],"mask-image-t-from-color":[{"mask-t-from":_()}],"mask-image-t-to-color":[{"mask-t-to":_()}],"mask-image-r-from-pos":[{"mask-r-from":O()}],"mask-image-r-to-pos":[{"mask-r-to":O()}],"mask-image-r-from-color":[{"mask-r-from":_()}],"mask-image-r-to-color":[{"mask-r-to":_()}],"mask-image-b-from-pos":[{"mask-b-from":O()}],"mask-image-b-to-pos":[{"mask-b-to":O()}],"mask-image-b-from-color":[{"mask-b-from":_()}],"mask-image-b-to-color":[{"mask-b-to":_()}],"mask-image-l-from-pos":[{"mask-l-from":O()}],"mask-image-l-to-pos":[{"mask-l-to":O()}],"mask-image-l-from-color":[{"mask-l-from":_()}],"mask-image-l-to-color":[{"mask-l-to":_()}],"mask-image-x-from-pos":[{"mask-x-from":O()}],"mask-image-x-to-pos":[{"mask-x-to":O()}],"mask-image-x-from-color":[{"mask-x-from":_()}],"mask-image-x-to-color":[{"mask-x-to":_()}],"mask-image-y-from-pos":[{"mask-y-from":O()}],"mask-image-y-to-pos":[{"mask-y-to":O()}],"mask-image-y-from-color":[{"mask-y-from":_()}],"mask-image-y-to-color":[{"mask-y-to":_()}],"mask-image-radial":[{"mask-radial":[ke,Ce]}],"mask-image-radial-from-pos":[{"mask-radial-from":O()}],"mask-image-radial-to-pos":[{"mask-radial-to":O()}],"mask-image-radial-from-color":[{"mask-radial-from":_()}],"mask-image-radial-to-color":[{"mask-radial-to":_()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":R()}],"mask-image-conic-pos":[{"mask-conic":[Ve]}],"mask-image-conic-from-pos":[{"mask-conic-from":O()}],"mask-image-conic-to-pos":[{"mask-conic-to":O()}],"mask-image-conic-from-color":[{"mask-conic-from":_()}],"mask-image-conic-to-color":[{"mask-conic-to":_()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:B()}],"mask-repeat":[{mask:q()}],"mask-size":[{mask:A()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ke,Ce]}],filter:[{filter:["","none",ke,Ce]}],blur:[{blur:K()}],brightness:[{brightness:[Ve,ke,Ce]}],contrast:[{contrast:[Ve,ke,Ce]}],"drop-shadow":[{"drop-shadow":["","none",S,Fa,za]}],"drop-shadow-color":[{"drop-shadow":_()}],grayscale:[{grayscale:["",Ve,ke,Ce]}],"hue-rotate":[{"hue-rotate":[Ve,ke,Ce]}],invert:[{invert:["",Ve,ke,Ce]}],saturate:[{saturate:[Ve,ke,Ce]}],sepia:[{sepia:["",Ve,ke,Ce]}],"backdrop-filter":[{"backdrop-filter":["","none",ke,Ce]}],"backdrop-blur":[{"backdrop-blur":K()}],"backdrop-brightness":[{"backdrop-brightness":[Ve,ke,Ce]}],"backdrop-contrast":[{"backdrop-contrast":[Ve,ke,Ce]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ve,ke,Ce]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ve,ke,Ce]}],"backdrop-invert":[{"backdrop-invert":["",Ve,ke,Ce]}],"backdrop-opacity":[{"backdrop-opacity":[Ve,ke,Ce]}],"backdrop-saturate":[{"backdrop-saturate":[Ve,ke,Ce]}],"backdrop-sepia":[{"backdrop-sepia":["",Ve,ke,Ce]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":V()}],"border-spacing-x":[{"border-spacing-x":V()}],"border-spacing-y":[{"border-spacing-y":V()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ke,Ce]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ve,"initial",ke,Ce]}],ease:[{ease:["linear","initial",E,ke,Ce]}],delay:[{delay:[Ve,ke,Ce]}],animate:[{animate:["none",j,ke,Ce]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,ke,Ce]}],"perspective-origin":[{"perspective-origin":I()}],rotate:[{rotate:ue()}],"rotate-x":[{"rotate-x":ue()}],"rotate-y":[{"rotate-y":ue()}],"rotate-z":[{"rotate-z":ue()}],scale:[{scale:pe()}],"scale-x":[{"scale-x":pe()}],"scale-y":[{"scale-y":pe()}],"scale-z":[{"scale-z":pe()}],"scale-3d":["scale-3d"],skew:[{skew:Re()}],"skew-x":[{"skew-x":Re()}],"skew-y":[{"skew-y":Re()}],transform:[{transform:[ke,Ce,"","none","gpu","cpu"]}],"transform-origin":[{origin:I()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Oe()}],"translate-x":[{"translate-x":Oe()}],"translate-y":[{"translate-y":Oe()}],"translate-z":[{"translate-z":Oe()}],"translate-none":["translate-none"],accent:[{accent:_()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:_()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ke,Ce]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ke,Ce]}],fill:[{fill:["none",..._()]}],"stroke-w":[{stroke:[Ve,Xo,os,_d]}],stroke:[{stroke:["none",..._()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},nS=D1(tS);function We(...n){return nS(bh(n))}const rS=m1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",{variants:{variant:{default:"bg-gray-900 text-white border-2 border-gray-900 hover:bg-gray-700 hover:border-gray-700 dark:bg-white dark:text-gray-900 dark:border-white dark:hover:bg-gray-100",outline:"bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-white dark:hover:bg-gray-800",destructive:"bg-red-500 text-white border-2 border-red-500 hover:bg-red-600 hover:border-red-600",secondary:"bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",ghost:"hover:bg-gray-200 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",link:"text-gray-900 underline-offset-4 hover:underline dark:text-white"},size:{default:"h-10 px-4 py-2",sm:"h-8 rounded-lg gap-1.5 px-3 text-xs",lg:"h-12 rounded-lg px-6",icon:"h-10 w-10 rounded-lg"}},defaultVariants:{variant:"default",size:"default"}}),Fe=f.forwardRef(({className:n,variant:r,size:s,asChild:a=!1,...c},d)=>{const p=a?l1:"button";return o.jsx(p,{"data-slot":"button",className:We(rS({variant:r,size:s,className:n})),ref:d,...c})});Fe.displayName="Button";var hi=lh();const sS=ah(hi);function oS(n){const r=iS(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(lS);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function iS(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=dS(c),m=cS(d,c.props);return c.type!==f.Fragment&&(m.ref=a?fr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var aS=Symbol("radix.slottable");function lS(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===aS}function cS(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function dS(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var uS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ie=uS.reduce((n,r)=>{const s=oS(`Primitive.${r}`),a=f.forwardRef((c,d)=>{const{asChild:p,...m}=c,h=p?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(h,{...m,ref:d})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{});function Ih(n,r){n&&hi.flushSync(()=>n.dispatchEvent(r))}var Rt=globalThis?.document?f.useLayoutEffect:()=>{};function pS(n,r){return f.useReducer((s,a)=>r[s][a]??s,n)}var Dt=n=>{const{present:r,children:s}=n,a=fS(r),c=typeof s=="function"?s({present:a.isPresent}):f.Children.only(s),d=He(a.ref,mS(c));return typeof s=="function"||a.isPresent?f.cloneElement(c,{ref:d}):null};Dt.displayName="Presence";function fS(n){const[r,s]=f.useState(),a=f.useRef(null),c=f.useRef(n),d=f.useRef("none"),p=n?"mounted":"unmounted",[m,h]=pS(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.useEffect(()=>{const v=$a(a.current);d.current=m==="mounted"?v:"none"},[m]),Rt(()=>{const v=a.current,y=c.current;if(y!==n){const b=d.current,S=$a(v);n?h("MOUNT"):S==="none"||v?.display==="none"?h("UNMOUNT"):h(y&&b!==S?"ANIMATION_OUT":"UNMOUNT"),c.current=n}},[n,h]),Rt(()=>{if(r){let v;const y=r.ownerDocument.defaultView??window,x=S=>{const C=$a(a.current).includes(CSS.escape(S.animationName));if(S.target===r&&C&&(h("ANIMATION_END"),!c.current)){const k=r.style.animationFillMode;r.style.animationFillMode="forwards",v=y.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=k)})}},b=S=>{S.target===r&&(d.current=$a(a.current))};return r.addEventListener("animationstart",b),r.addEventListener("animationcancel",x),r.addEventListener("animationend",x),()=>{y.clearTimeout(v),r.removeEventListener("animationstart",b),r.removeEventListener("animationcancel",x),r.removeEventListener("animationend",x)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:f.useCallback(v=>{a.current=v?getComputedStyle(v):null,s(v)},[])}}function $a(n){return n?.animationName||"none"}function mS(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function gS(n,r){const s=f.createContext(r),a=d=>{const{children:p,...m}=d,h=f.useMemo(()=>m,Object.values(m));return o.jsx(s.Provider,{value:h,children:p})};a.displayName=n+"Provider";function c(d){const p=f.useContext(s);if(p)return p;if(r!==void 0)return r;throw new Error(`\`${d}\` must be used within \`${n}\``)}return[a,c]}function mn(n,r=[]){let s=[];function a(d,p){const m=f.createContext(p),h=s.length;s=[...s,p];const v=x=>{const{scope:b,children:S,...N}=x,C=b?.[n]?.[h]||m,k=f.useMemo(()=>N,Object.values(N));return o.jsx(C.Provider,{value:k,children:S})};v.displayName=d+"Provider";function y(x,b){const S=b?.[n]?.[h]||m,N=f.useContext(S);if(N)return N;if(p!==void 0)return p;throw new Error(`\`${x}\` must be used within \`${d}\``)}return[v,y]}const c=()=>{const d=s.map(p=>f.createContext(p));return function(m){const h=m?.[n]||d;return f.useMemo(()=>({[`__scope${n}`]:{...m,[n]:h}}),[m,h])}};return c.scopeName=n,[a,hS(c,...r)]}function hS(...n){const r=n[0];if(n.length===1)return r;const s=()=>{const a=n.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(d){const p=a.reduce((m,{useScope:h,scopeName:v})=>{const x=h(d)[`__scope${v}`];return{...m,...x}},{});return f.useMemo(()=>({[`__scope${r.scopeName}`]:p}),[p])}};return s.scopeName=r.scopeName,s}function Et(n){const r=f.useRef(n);return f.useEffect(()=>{r.current=n}),f.useMemo(()=>(...s)=>r.current?.(...s),[])}var vS=f.createContext(void 0);function vi(n){const r=f.useContext(vS);return n||r||"ltr"}function su(n,[r,s]){return Math.min(s,Math.max(r,n))}function ve(n,r,{checkForDefaultPrevented:s=!0}={}){return function(c){if(n?.(c),s===!1||!c.defaultPrevented)return r?.(c)}}function xS(n,r){return f.useReducer((s,a)=>r[s][a]??s,n)}var ju="ScrollArea",[_h]=mn(ju),[yS,kn]=_h(ju),Dh=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,type:a="hover",dir:c,scrollHideDelay:d=600,...p}=n,[m,h]=f.useState(null),[v,y]=f.useState(null),[x,b]=f.useState(null),[S,N]=f.useState(null),[C,k]=f.useState(null),[E,j]=f.useState(0),[M,R]=f.useState(0),[I,W]=f.useState(!1),[z,V]=f.useState(!1),ne=He(r,fe=>h(fe)),te=vi(c);return o.jsx(yS,{scope:s,type:a,dir:te,scrollHideDelay:d,scrollArea:m,viewport:v,onViewportChange:y,content:x,onContentChange:b,scrollbarX:S,onScrollbarXChange:N,scrollbarXEnabled:I,onScrollbarXEnabledChange:W,scrollbarY:C,onScrollbarYChange:k,scrollbarYEnabled:z,onScrollbarYEnabledChange:V,onCornerWidthChange:j,onCornerHeightChange:R,children:o.jsx(Ie.div,{dir:te,...p,ref:ne,style:{position:"relative","--radix-scroll-area-corner-width":E+"px","--radix-scroll-area-corner-height":M+"px",...n.style}})})});Dh.displayName=ju;var Oh="ScrollAreaViewport",Lh=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,children:a,nonce:c,...d}=n,p=kn(Oh,s),m=f.useRef(null),h=He(r,m,p.onViewportChange);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:c}),o.jsx(Ie.div,{"data-radix-scroll-area-viewport":"",...d,ref:h,style:{overflowX:p.scrollbarXEnabled?"scroll":"hidden",overflowY:p.scrollbarYEnabled?"scroll":"hidden",...n.style},children:o.jsx("div",{ref:p.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});Lh.displayName=Oh;var Zn="ScrollAreaScrollbar",zh=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=kn(Zn,n.__scopeScrollArea),{onScrollbarXEnabledChange:d,onScrollbarYEnabledChange:p}=c,m=n.orientation==="horizontal";return f.useEffect(()=>(m?d(!0):p(!0),()=>{m?d(!1):p(!1)}),[m,d,p]),c.type==="hover"?o.jsx(bS,{...a,ref:r,forceMount:s}):c.type==="scroll"?o.jsx(wS,{...a,ref:r,forceMount:s}):c.type==="auto"?o.jsx(Fh,{...a,ref:r,forceMount:s}):c.type==="always"?o.jsx(Pu,{...a,ref:r}):null});zh.displayName=Zn;var bS=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=kn(Zn,n.__scopeScrollArea),[d,p]=f.useState(!1);return f.useEffect(()=>{const m=c.scrollArea;let h=0;if(m){const v=()=>{window.clearTimeout(h),p(!0)},y=()=>{h=window.setTimeout(()=>p(!1),c.scrollHideDelay)};return m.addEventListener("pointerenter",v),m.addEventListener("pointerleave",y),()=>{window.clearTimeout(h),m.removeEventListener("pointerenter",v),m.removeEventListener("pointerleave",y)}}},[c.scrollArea,c.scrollHideDelay]),o.jsx(Dt,{present:s||d,children:o.jsx(Fh,{"data-state":d?"visible":"hidden",...a,ref:r})})}),wS=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=kn(Zn,n.__scopeScrollArea),d=n.orientation==="horizontal",p=vl(()=>h("SCROLL_END"),100),[m,h]=xS("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return f.useEffect(()=>{if(m==="idle"){const v=window.setTimeout(()=>h("HIDE"),c.scrollHideDelay);return()=>window.clearTimeout(v)}},[m,c.scrollHideDelay,h]),f.useEffect(()=>{const v=c.viewport,y=d?"scrollLeft":"scrollTop";if(v){let x=v[y];const b=()=>{const S=v[y];x!==S&&(h("SCROLL"),p()),x=S};return v.addEventListener("scroll",b),()=>v.removeEventListener("scroll",b)}},[c.viewport,d,h,p]),o.jsx(Dt,{present:s||m!=="hidden",children:o.jsx(Pu,{"data-state":m==="hidden"?"hidden":"visible",...a,ref:r,onPointerEnter:ve(n.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:ve(n.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),Fh=f.forwardRef((n,r)=>{const s=kn(Zn,n.__scopeScrollArea),{forceMount:a,...c}=n,[d,p]=f.useState(!1),m=n.orientation==="horizontal",h=vl(()=>{if(s.viewport){const v=s.viewport.offsetWidth<s.viewport.scrollWidth,y=s.viewport.offsetHeight<s.viewport.scrollHeight;p(m?v:y)}},10);return so(s.viewport,h),so(s.content,h),o.jsx(Dt,{present:a||d,children:o.jsx(Pu,{"data-state":d?"visible":"hidden",...c,ref:r})})}),Pu=f.forwardRef((n,r)=>{const{orientation:s="vertical",...a}=n,c=kn(Zn,n.__scopeScrollArea),d=f.useRef(null),p=f.useRef(0),[m,h]=f.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),v=Vh(m.viewport,m.content),y={...a,sizes:m,onSizesChange:h,hasThumb:v>0&&v<1,onThumbChange:b=>d.current=b,onThumbPointerUp:()=>p.current=0,onThumbPointerDown:b=>p.current=b};function x(b,S){return PS(b,p.current,m,S)}return s==="horizontal"?o.jsx(SS,{...y,ref:r,onThumbPositionChange:()=>{if(c.viewport&&d.current){const b=c.viewport.scrollLeft,S=yg(b,m,c.dir);d.current.style.transform=`translate3d(${S}px, 0, 0)`}},onWheelScroll:b=>{c.viewport&&(c.viewport.scrollLeft=b)},onDragScroll:b=>{c.viewport&&(c.viewport.scrollLeft=x(b,c.dir))}}):s==="vertical"?o.jsx(CS,{...y,ref:r,onThumbPositionChange:()=>{if(c.viewport&&d.current){const b=c.viewport.scrollTop,S=yg(b,m);d.current.style.transform=`translate3d(0, ${S}px, 0)`}},onWheelScroll:b=>{c.viewport&&(c.viewport.scrollTop=b)},onDragScroll:b=>{c.viewport&&(c.viewport.scrollTop=x(b))}}):null}),SS=f.forwardRef((n,r)=>{const{sizes:s,onSizesChange:a,...c}=n,d=kn(Zn,n.__scopeScrollArea),[p,m]=f.useState(),h=f.useRef(null),v=He(r,h,d.onScrollbarXChange);return f.useEffect(()=>{h.current&&m(getComputedStyle(h.current))},[h]),o.jsx(Bh,{"data-orientation":"horizontal",...c,ref:v,sizes:s,style:{bottom:0,left:d.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:d.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":hl(s)+"px",...n.style},onThumbPointerDown:y=>n.onThumbPointerDown(y.x),onDragScroll:y=>n.onDragScroll(y.x),onWheelScroll:(y,x)=>{if(d.viewport){const b=d.viewport.scrollLeft+y.deltaX;n.onWheelScroll(b),Gh(b,x)&&y.preventDefault()}},onResize:()=>{h.current&&d.viewport&&p&&a({content:d.viewport.scrollWidth,viewport:d.viewport.offsetWidth,scrollbar:{size:h.current.clientWidth,paddingStart:sl(p.paddingLeft),paddingEnd:sl(p.paddingRight)}})}})}),CS=f.forwardRef((n,r)=>{const{sizes:s,onSizesChange:a,...c}=n,d=kn(Zn,n.__scopeScrollArea),[p,m]=f.useState(),h=f.useRef(null),v=He(r,h,d.onScrollbarYChange);return f.useEffect(()=>{h.current&&m(getComputedStyle(h.current))},[h]),o.jsx(Bh,{"data-orientation":"vertical",...c,ref:v,sizes:s,style:{top:0,right:d.dir==="ltr"?0:void 0,left:d.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":hl(s)+"px",...n.style},onThumbPointerDown:y=>n.onThumbPointerDown(y.y),onDragScroll:y=>n.onDragScroll(y.y),onWheelScroll:(y,x)=>{if(d.viewport){const b=d.viewport.scrollTop+y.deltaY;n.onWheelScroll(b),Gh(b,x)&&y.preventDefault()}},onResize:()=>{h.current&&d.viewport&&p&&a({content:d.viewport.scrollHeight,viewport:d.viewport.offsetHeight,scrollbar:{size:h.current.clientHeight,paddingStart:sl(p.paddingTop),paddingEnd:sl(p.paddingBottom)}})}})}),[kS,$h]=_h(Zn),Bh=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,sizes:a,hasThumb:c,onThumbChange:d,onThumbPointerUp:p,onThumbPointerDown:m,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:y,onResize:x,...b}=n,S=kn(Zn,s),[N,C]=f.useState(null),k=He(r,ne=>C(ne)),E=f.useRef(null),j=f.useRef(""),M=S.viewport,R=a.content-a.viewport,I=Et(y),W=Et(h),z=vl(x,10);function V(ne){if(E.current){const te=ne.clientX-E.current.left,fe=ne.clientY-E.current.top;v({x:te,y:fe})}}return f.useEffect(()=>{const ne=te=>{const fe=te.target;N?.contains(fe)&&I(te,R)};return document.addEventListener("wheel",ne,{passive:!1}),()=>document.removeEventListener("wheel",ne,{passive:!1})},[M,N,R,I]),f.useEffect(W,[a,W]),so(N,z),so(S.content,z),o.jsx(kS,{scope:s,scrollbar:N,hasThumb:c,onThumbChange:Et(d),onThumbPointerUp:Et(p),onThumbPositionChange:W,onThumbPointerDown:Et(m),children:o.jsx(Ie.div,{...b,ref:k,style:{position:"absolute",...b.style},onPointerDown:ve(n.onPointerDown,ne=>{ne.button===0&&(ne.target.setPointerCapture(ne.pointerId),E.current=N.getBoundingClientRect(),j.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),V(ne))}),onPointerMove:ve(n.onPointerMove,V),onPointerUp:ve(n.onPointerUp,ne=>{const te=ne.target;te.hasPointerCapture(ne.pointerId)&&te.releasePointerCapture(ne.pointerId),document.body.style.webkitUserSelect=j.current,S.viewport&&(S.viewport.style.scrollBehavior=""),E.current=null})})})}),rl="ScrollAreaThumb",Hh=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=$h(rl,n.__scopeScrollArea);return o.jsx(Dt,{present:s||c.hasThumb,children:o.jsx(NS,{ref:r,...a})})}),NS=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,style:a,...c}=n,d=kn(rl,s),p=$h(rl,s),{onThumbPositionChange:m}=p,h=He(r,x=>p.onThumbChange(x)),v=f.useRef(void 0),y=vl(()=>{v.current&&(v.current(),v.current=void 0)},100);return f.useEffect(()=>{const x=d.viewport;if(x){const b=()=>{if(y(),!v.current){const S=ES(x,m);v.current=S,m()}};return m(),x.addEventListener("scroll",b),()=>x.removeEventListener("scroll",b)}},[d.viewport,y,m]),o.jsx(Ie.div,{"data-state":p.hasThumb?"visible":"hidden",...c,ref:h,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:ve(n.onPointerDownCapture,x=>{const S=x.target.getBoundingClientRect(),N=x.clientX-S.left,C=x.clientY-S.top;p.onThumbPointerDown({x:N,y:C})}),onPointerUp:ve(n.onPointerUp,p.onThumbPointerUp)})});Hh.displayName=rl;var Eu="ScrollAreaCorner",Wh=f.forwardRef((n,r)=>{const s=kn(Eu,n.__scopeScrollArea),a=!!(s.scrollbarX&&s.scrollbarY);return s.type!=="scroll"&&a?o.jsx(jS,{...n,ref:r}):null});Wh.displayName=Eu;var jS=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,...a}=n,c=kn(Eu,s),[d,p]=f.useState(0),[m,h]=f.useState(0),v=!!(d&&m);return so(c.scrollbarX,()=>{const y=c.scrollbarX?.offsetHeight||0;c.onCornerHeightChange(y),h(y)}),so(c.scrollbarY,()=>{const y=c.scrollbarY?.offsetWidth||0;c.onCornerWidthChange(y),p(y)}),v?o.jsx(Ie.div,{...a,ref:r,style:{width:d,height:m,position:"absolute",right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:0,...n.style}}):null});function sl(n){return n?parseInt(n,10):0}function Vh(n,r){const s=n/r;return isNaN(s)?0:s}function hl(n){const r=Vh(n.viewport,n.content),s=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,a=(n.scrollbar.size-s)*r;return Math.max(a,18)}function PS(n,r,s,a="ltr"){const c=hl(s),d=c/2,p=r||d,m=c-p,h=s.scrollbar.paddingStart+p,v=s.scrollbar.size-s.scrollbar.paddingEnd-m,y=s.content-s.viewport,x=a==="ltr"?[0,y]:[y*-1,0];return Uh([h,v],x)(n)}function yg(n,r,s="ltr"){const a=hl(r),c=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,d=r.scrollbar.size-c,p=r.content-r.viewport,m=d-a,h=s==="ltr"?[0,p]:[p*-1,0],v=su(n,h);return Uh([0,p],[0,m])(v)}function Uh(n,r){return s=>{if(n[0]===n[1]||r[0]===r[1])return r[0];const a=(r[1]-r[0])/(n[1]-n[0]);return r[0]+a*(s-n[0])}}function Gh(n,r){return n>0&&n<r}var ES=(n,r=()=>{})=>{let s={left:n.scrollLeft,top:n.scrollTop},a=0;return(function c(){const d={left:n.scrollLeft,top:n.scrollTop},p=s.left!==d.left,m=s.top!==d.top;(p||m)&&r(),s=d,a=window.requestAnimationFrame(c)})(),()=>window.cancelAnimationFrame(a)};function vl(n,r){const s=Et(n),a=f.useRef(0);return f.useEffect(()=>()=>window.clearTimeout(a.current),[]),f.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(s,r)},[s,r])}function so(n,r){const s=Et(r);Rt(()=>{let a=0;if(n){const c=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(s)});return c.observe(n),()=>{window.cancelAnimationFrame(a),c.unobserve(n)}}},[n,s])}var RS=Dh,AS=Lh,TS=Wh;function MS({className:n,children:r,...s}){return o.jsxs(RS,{"data-slot":"scroll-area",className:We("relative",n),...s,children:[o.jsx(AS,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 h-full w-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 overflow-x-hidden",children:r}),o.jsx(IS,{}),o.jsx(TS,{})]})}function IS({className:n,orientation:r="vertical",...s}){return o.jsx(zh,{"data-slot":"scroll-area-scrollbar",orientation:r,className:We("flex touch-none p-px transition-colors select-none",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",n),...s,children:o.jsx(Hh,{"data-slot":"scroll-area-thumb",className:"bg-gray-300 hover:bg-gray-500 relative flex-1 rounded-full transition-colors"})})}var _S=gl[" useInsertionEffect ".trim().toString()]||Rt;function On({prop:n,defaultProp:r,onChange:s=()=>{},caller:a}){const[c,d,p]=DS({defaultProp:r,onChange:s}),m=n!==void 0,h=m?n:c;{const y=f.useRef(n!==void 0);f.useEffect(()=>{const x=y.current;x!==m&&console.warn(`${a} is changing from ${x?"controlled":"uncontrolled"} to ${m?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=m},[m,a])}const v=f.useCallback(y=>{if(m){const x=OS(y)?y(n):y;x!==n&&p.current?.(x)}else d(y)},[m,n,d,p]);return[h,v]}function DS({defaultProp:n,onChange:r}){const[s,a]=f.useState(n),c=f.useRef(s),d=f.useRef(r);return _S(()=>{d.current=r},[r]),f.useEffect(()=>{c.current!==s&&(d.current?.(s),c.current=s)},[s,c]),[s,a,d]}function OS(n){return typeof n=="function"}function bg(n){const r=LS(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(FS);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function LS(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=BS(c),m=$S(d,c.props);return c.type!==f.Fragment&&(m.ref=a?fr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var zS=Symbol("radix.slottable");function FS(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===zS}function $S(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function BS(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function Ru(n){const r=n+"CollectionProvider",[s,a]=mn(r),[c,d]=s(r,{collectionRef:{current:null},itemMap:new Map}),p=C=>{const{scope:k,children:E}=C,j=Zt.useRef(null),M=Zt.useRef(new Map).current;return o.jsx(c,{scope:k,itemMap:M,collectionRef:j,children:E})};p.displayName=r;const m=n+"CollectionSlot",h=bg(m),v=Zt.forwardRef((C,k)=>{const{scope:E,children:j}=C,M=d(m,E),R=He(k,M.collectionRef);return o.jsx(h,{ref:R,children:j})});v.displayName=m;const y=n+"CollectionItemSlot",x="data-radix-collection-item",b=bg(y),S=Zt.forwardRef((C,k)=>{const{scope:E,children:j,...M}=C,R=Zt.useRef(null),I=He(k,R),W=d(y,E);return Zt.useEffect(()=>(W.itemMap.set(R,{ref:R,...M}),()=>void W.itemMap.delete(R))),o.jsx(b,{[x]:"",ref:I,children:j})});S.displayName=y;function N(C){const k=d(n+"CollectionConsumer",C);return Zt.useCallback(()=>{const j=k.collectionRef.current;if(!j)return[];const M=Array.from(j.querySelectorAll(`[${x}]`));return Array.from(k.itemMap.values()).sort((W,z)=>M.indexOf(W.ref.current)-M.indexOf(z.ref.current))},[k.collectionRef,k.itemMap])}return[{Provider:p,Slot:v,ItemSlot:S},N,a]}function HS(n,r=globalThis?.document){const s=Et(n);f.useEffect(()=>{const a=c=>{c.key==="Escape"&&s(c)};return r.addEventListener("keydown",a,{capture:!0}),()=>r.removeEventListener("keydown",a,{capture:!0})},[s,r])}var WS="DismissableLayer",ou="dismissableLayer.update",VS="dismissableLayer.pointerDownOutside",US="dismissableLayer.focusOutside",wg,Qh=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),xi=f.forwardRef((n,r)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:p,onDismiss:m,...h}=n,v=f.useContext(Qh),[y,x]=f.useState(null),b=y?.ownerDocument??globalThis?.document,[,S]=f.useState({}),N=He(r,z=>x(z)),C=Array.from(v.layers),[k]=[...v.layersWithOutsidePointerEventsDisabled].slice(-1),E=C.indexOf(k),j=y?C.indexOf(y):-1,M=v.layersWithOutsidePointerEventsDisabled.size>0,R=j>=E,I=qS(z=>{const V=z.target,ne=[...v.branches].some(te=>te.contains(V));!R||ne||(c?.(z),p?.(z),z.defaultPrevented||m?.())},b),W=KS(z=>{const V=z.target;[...v.branches].some(te=>te.contains(V))||(d?.(z),p?.(z),z.defaultPrevented||m?.())},b);return HS(z=>{j===v.layers.size-1&&(a?.(z),!z.defaultPrevented&&m&&(z.preventDefault(),m()))},b),f.useEffect(()=>{if(y)return s&&(v.layersWithOutsidePointerEventsDisabled.size===0&&(wg=b.body.style.pointerEvents,b.body.style.pointerEvents="none"),v.layersWithOutsidePointerEventsDisabled.add(y)),v.layers.add(y),Sg(),()=>{s&&v.layersWithOutsidePointerEventsDisabled.size===1&&(b.body.style.pointerEvents=wg)}},[y,b,s,v]),f.useEffect(()=>()=>{y&&(v.layers.delete(y),v.layersWithOutsidePointerEventsDisabled.delete(y),Sg())},[y,v]),f.useEffect(()=>{const z=()=>S({});return document.addEventListener(ou,z),()=>document.removeEventListener(ou,z)},[]),o.jsx(Ie.div,{...h,ref:N,style:{pointerEvents:M?R?"auto":"none":void 0,...n.style},onFocusCapture:ve(n.onFocusCapture,W.onFocusCapture),onBlurCapture:ve(n.onBlurCapture,W.onBlurCapture),onPointerDownCapture:ve(n.onPointerDownCapture,I.onPointerDownCapture)})});xi.displayName=WS;var GS="DismissableLayerBranch",QS=f.forwardRef((n,r)=>{const s=f.useContext(Qh),a=f.useRef(null),c=He(r,a);return f.useEffect(()=>{const d=a.current;if(d)return s.branches.add(d),()=>{s.branches.delete(d)}},[s.branches]),o.jsx(Ie.div,{...n,ref:c})});QS.displayName=GS;function qS(n,r=globalThis?.document){const s=Et(n),a=f.useRef(!1),c=f.useRef(()=>{});return f.useEffect(()=>{const d=m=>{if(m.target&&!a.current){let h=function(){qh(VS,s,v,{discrete:!0})};const v={originalEvent:m};m.pointerType==="touch"?(r.removeEventListener("click",c.current),c.current=h,r.addEventListener("click",c.current,{once:!0})):h()}else r.removeEventListener("click",c.current);a.current=!1},p=window.setTimeout(()=>{r.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(p),r.removeEventListener("pointerdown",d),r.removeEventListener("click",c.current)}},[r,s]),{onPointerDownCapture:()=>a.current=!0}}function KS(n,r=globalThis?.document){const s=Et(n),a=f.useRef(!1);return f.useEffect(()=>{const c=d=>{d.target&&!a.current&&qh(US,s,{originalEvent:d},{discrete:!1})};return r.addEventListener("focusin",c),()=>r.removeEventListener("focusin",c)},[r,s]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}function Sg(){const n=new CustomEvent(ou);document.dispatchEvent(n)}function qh(n,r,s,{discrete:a}){const c=s.originalEvent.target,d=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:s});r&&c.addEventListener(n,r,{once:!0}),a?Ih(c,d):c.dispatchEvent(d)}var Dd=0;function Au(){f.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??Cg()),document.body.insertAdjacentElement("beforeend",n[1]??Cg()),Dd++,()=>{Dd===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Dd--}},[])}function Cg(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var Od="focusScope.autoFocusOnMount",Ld="focusScope.autoFocusOnUnmount",kg={bubbles:!1,cancelable:!0},YS="FocusScope",xl=f.forwardRef((n,r)=>{const{loop:s=!1,trapped:a=!1,onMountAutoFocus:c,onUnmountAutoFocus:d,...p}=n,[m,h]=f.useState(null),v=Et(c),y=Et(d),x=f.useRef(null),b=He(r,C=>h(C)),S=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(a){let C=function(M){if(S.paused||!m)return;const R=M.target;m.contains(R)?x.current=R:Or(x.current,{select:!0})},k=function(M){if(S.paused||!m)return;const R=M.relatedTarget;R!==null&&(m.contains(R)||Or(x.current,{select:!0}))},E=function(M){if(document.activeElement===document.body)for(const I of M)I.removedNodes.length>0&&Or(m)};document.addEventListener("focusin",C),document.addEventListener("focusout",k);const j=new MutationObserver(E);return m&&j.observe(m,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",C),document.removeEventListener("focusout",k),j.disconnect()}}},[a,m,S.paused]),f.useEffect(()=>{if(m){jg.add(S);const C=document.activeElement;if(!m.contains(C)){const E=new CustomEvent(Od,kg);m.addEventListener(Od,v),m.dispatchEvent(E),E.defaultPrevented||(XS(nC(Kh(m)),{select:!0}),document.activeElement===C&&Or(m))}return()=>{m.removeEventListener(Od,v),setTimeout(()=>{const E=new CustomEvent(Ld,kg);m.addEventListener(Ld,y),m.dispatchEvent(E),E.defaultPrevented||Or(C??document.body,{select:!0}),m.removeEventListener(Ld,y),jg.remove(S)},0)}}},[m,v,y,S]);const N=f.useCallback(C=>{if(!s&&!a||S.paused)return;const k=C.key==="Tab"&&!C.altKey&&!C.ctrlKey&&!C.metaKey,E=document.activeElement;if(k&&E){const j=C.currentTarget,[M,R]=JS(j);M&&R?!C.shiftKey&&E===R?(C.preventDefault(),s&&Or(M,{select:!0})):C.shiftKey&&E===M&&(C.preventDefault(),s&&Or(R,{select:!0})):E===j&&C.preventDefault()}},[s,a,S.paused]);return o.jsx(Ie.div,{tabIndex:-1,...p,ref:b,onKeyDown:N})});xl.displayName=YS;function XS(n,{select:r=!1}={}){const s=document.activeElement;for(const a of n)if(Or(a,{select:r}),document.activeElement!==s)return}function JS(n){const r=Kh(n),s=Ng(r,n),a=Ng(r.reverse(),n);return[s,a]}function Kh(n){const r=[],s=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const c=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||c?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)r.push(s.currentNode);return r}function Ng(n,r){for(const s of n)if(!ZS(s,{upTo:r}))return s}function ZS(n,{upTo:r}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(r!==void 0&&n===r)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function eC(n){return n instanceof HTMLInputElement&&"select"in n}function Or(n,{select:r=!1}={}){if(n&&n.focus){const s=document.activeElement;n.focus({preventScroll:!0}),n!==s&&eC(n)&&r&&n.select()}}var jg=tC();function tC(){let n=[];return{add(r){const s=n[0];r!==s&&s?.pause(),n=Pg(n,r),n.unshift(r)},remove(r){n=Pg(n,r),n[0]?.resume()}}}function Pg(n,r){const s=[...n],a=s.indexOf(r);return a!==-1&&s.splice(a,1),s}function nC(n){return n.filter(r=>r.tagName!=="A")}var rC=gl[" useId ".trim().toString()]||(()=>{}),sC=0;function en(n){const[r,s]=f.useState(rC());return Rt(()=>{s(a=>a??String(sC++))},[n]),n||(r?`radix-${r}`:"")}const oC=["top","right","bottom","left"],Fr=Math.min,pn=Math.max,ol=Math.round,Ba=Math.floor,qn=n=>({x:n,y:n}),iC={left:"right",right:"left",bottom:"top",top:"bottom"},aC={start:"end",end:"start"};function iu(n,r,s){return pn(n,Fr(r,s))}function ur(n,r){return typeof n=="function"?n(r):n}function pr(n){return n.split("-")[0]}function po(n){return n.split("-")[1]}function Tu(n){return n==="x"?"y":"x"}function Mu(n){return n==="y"?"height":"width"}const lC=new Set(["top","bottom"]);function Qn(n){return lC.has(pr(n))?"y":"x"}function Iu(n){return Tu(Qn(n))}function cC(n,r,s){s===void 0&&(s=!1);const a=po(n),c=Iu(n),d=Mu(c);let p=c==="x"?a===(s?"end":"start")?"right":"left":a==="start"?"bottom":"top";return r.reference[d]>r.floating[d]&&(p=il(p)),[p,il(p)]}function dC(n){const r=il(n);return[au(n),r,au(r)]}function au(n){return n.replace(/start|end/g,r=>aC[r])}const Eg=["left","right"],Rg=["right","left"],uC=["top","bottom"],pC=["bottom","top"];function fC(n,r,s){switch(n){case"top":case"bottom":return s?r?Rg:Eg:r?Eg:Rg;case"left":case"right":return r?uC:pC;default:return[]}}function mC(n,r,s,a){const c=po(n);let d=fC(pr(n),s==="start",a);return c&&(d=d.map(p=>p+"-"+c),r&&(d=d.concat(d.map(au)))),d}function il(n){return n.replace(/left|right|bottom|top/g,r=>iC[r])}function gC(n){return{top:0,right:0,bottom:0,left:0,...n}}function Yh(n){return typeof n!="number"?gC(n):{top:n,right:n,bottom:n,left:n}}function al(n){const{x:r,y:s,width:a,height:c}=n;return{width:a,height:c,top:s,left:r,right:r+a,bottom:s+c,x:r,y:s}}function Ag(n,r,s){let{reference:a,floating:c}=n;const d=Qn(r),p=Iu(r),m=Mu(p),h=pr(r),v=d==="y",y=a.x+a.width/2-c.width/2,x=a.y+a.height/2-c.height/2,b=a[m]/2-c[m]/2;let S;switch(h){case"top":S={x:y,y:a.y-c.height};break;case"bottom":S={x:y,y:a.y+a.height};break;case"right":S={x:a.x+a.width,y:x};break;case"left":S={x:a.x-c.width,y:x};break;default:S={x:a.x,y:a.y}}switch(po(r)){case"start":S[p]-=b*(s&&v?-1:1);break;case"end":S[p]+=b*(s&&v?-1:1);break}return S}const hC=async(n,r,s)=>{const{placement:a="bottom",strategy:c="absolute",middleware:d=[],platform:p}=s,m=d.filter(Boolean),h=await(p.isRTL==null?void 0:p.isRTL(r));let v=await p.getElementRects({reference:n,floating:r,strategy:c}),{x:y,y:x}=Ag(v,a,h),b=a,S={},N=0;for(let C=0;C<m.length;C++){const{name:k,fn:E}=m[C],{x:j,y:M,data:R,reset:I}=await E({x:y,y:x,initialPlacement:a,placement:b,strategy:c,middlewareData:S,rects:v,platform:p,elements:{reference:n,floating:r}});y=j??y,x=M??x,S={...S,[k]:{...S[k],...R}},I&&N<=50&&(N++,typeof I=="object"&&(I.placement&&(b=I.placement),I.rects&&(v=I.rects===!0?await p.getElementRects({reference:n,floating:r,strategy:c}):I.rects),{x:y,y:x}=Ag(v,b,h)),C=-1)}return{x:y,y:x,placement:b,strategy:c,middlewareData:S}};async function ri(n,r){var s;r===void 0&&(r={});const{x:a,y:c,platform:d,rects:p,elements:m,strategy:h}=n,{boundary:v="clippingAncestors",rootBoundary:y="viewport",elementContext:x="floating",altBoundary:b=!1,padding:S=0}=ur(r,n),N=Yh(S),k=m[b?x==="floating"?"reference":"floating":x],E=al(await d.getClippingRect({element:(s=await(d.isElement==null?void 0:d.isElement(k)))==null||s?k:k.contextElement||await(d.getDocumentElement==null?void 0:d.getDocumentElement(m.floating)),boundary:v,rootBoundary:y,strategy:h})),j=x==="floating"?{x:a,y:c,width:p.floating.width,height:p.floating.height}:p.reference,M=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m.floating)),R=await(d.isElement==null?void 0:d.isElement(M))?await(d.getScale==null?void 0:d.getScale(M))||{x:1,y:1}:{x:1,y:1},I=al(d.convertOffsetParentRelativeRectToViewportRelativeRect?await d.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:j,offsetParent:M,strategy:h}):j);return{top:(E.top-I.top+N.top)/R.y,bottom:(I.bottom-E.bottom+N.bottom)/R.y,left:(E.left-I.left+N.left)/R.x,right:(I.right-E.right+N.right)/R.x}}const vC=n=>({name:"arrow",options:n,async fn(r){const{x:s,y:a,placement:c,rects:d,platform:p,elements:m,middlewareData:h}=r,{element:v,padding:y=0}=ur(n,r)||{};if(v==null)return{};const x=Yh(y),b={x:s,y:a},S=Iu(c),N=Mu(S),C=await p.getDimensions(v),k=S==="y",E=k?"top":"left",j=k?"bottom":"right",M=k?"clientHeight":"clientWidth",R=d.reference[N]+d.reference[S]-b[S]-d.floating[N],I=b[S]-d.reference[S],W=await(p.getOffsetParent==null?void 0:p.getOffsetParent(v));let z=W?W[M]:0;(!z||!await(p.isElement==null?void 0:p.isElement(W)))&&(z=m.floating[M]||d.floating[N]);const V=R/2-I/2,ne=z/2-C[N]/2-1,te=Fr(x[E],ne),fe=Fr(x[j],ne),ae=te,he=z-C[N]-fe,me=z/2-C[N]/2+V,ge=iu(ae,me,he),J=!h.arrow&&po(c)!=null&&me!==ge&&d.reference[N]/2-(me<ae?te:fe)-C[N]/2<0,Q=J?me<ae?me-ae:me-he:0;return{[S]:b[S]+Q,data:{[S]:ge,centerOffset:me-ge-Q,...J&&{alignmentOffset:Q}},reset:J}}}),xC=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(r){var s,a;const{placement:c,middlewareData:d,rects:p,initialPlacement:m,platform:h,elements:v}=r,{mainAxis:y=!0,crossAxis:x=!0,fallbackPlacements:b,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:N="none",flipAlignment:C=!0,...k}=ur(n,r);if((s=d.arrow)!=null&&s.alignmentOffset)return{};const E=pr(c),j=Qn(m),M=pr(m)===m,R=await(h.isRTL==null?void 0:h.isRTL(v.floating)),I=b||(M||!C?[il(m)]:dC(m)),W=N!=="none";!b&&W&&I.push(...mC(m,C,N,R));const z=[m,...I],V=await ri(r,k),ne=[];let te=((a=d.flip)==null?void 0:a.overflows)||[];if(y&&ne.push(V[E]),x){const me=cC(c,p,R);ne.push(V[me[0]],V[me[1]])}if(te=[...te,{placement:c,overflows:ne}],!ne.every(me=>me<=0)){var fe,ae;const me=(((fe=d.flip)==null?void 0:fe.index)||0)+1,ge=z[me];if(ge&&(!(x==="alignment"?j!==Qn(ge):!1)||te.every(_=>Qn(_.placement)===j?_.overflows[0]>0:!0)))return{data:{index:me,overflows:te},reset:{placement:ge}};let J=(ae=te.filter(Q=>Q.overflows[0]<=0).sort((Q,_)=>Q.overflows[1]-_.overflows[1])[0])==null?void 0:ae.placement;if(!J)switch(S){case"bestFit":{var he;const Q=(he=te.filter(_=>{if(W){const B=Qn(_.placement);return B===j||B==="y"}return!0}).map(_=>[_.placement,_.overflows.filter(B=>B>0).reduce((B,q)=>B+q,0)]).sort((_,B)=>_[1]-B[1])[0])==null?void 0:he[0];Q&&(J=Q);break}case"initialPlacement":J=m;break}if(c!==J)return{reset:{placement:J}}}return{}}}};function Tg(n,r){return{top:n.top-r.height,right:n.right-r.width,bottom:n.bottom-r.height,left:n.left-r.width}}function Mg(n){return oC.some(r=>n[r]>=0)}const yC=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(r){const{rects:s}=r,{strategy:a="referenceHidden",...c}=ur(n,r);switch(a){case"referenceHidden":{const d=await ri(r,{...c,elementContext:"reference"}),p=Tg(d,s.reference);return{data:{referenceHiddenOffsets:p,referenceHidden:Mg(p)}}}case"escaped":{const d=await ri(r,{...c,altBoundary:!0}),p=Tg(d,s.floating);return{data:{escapedOffsets:p,escaped:Mg(p)}}}default:return{}}}}},Xh=new Set(["left","top"]);async function bC(n,r){const{placement:s,platform:a,elements:c}=n,d=await(a.isRTL==null?void 0:a.isRTL(c.floating)),p=pr(s),m=po(s),h=Qn(s)==="y",v=Xh.has(p)?-1:1,y=d&&h?-1:1,x=ur(r,n);let{mainAxis:b,crossAxis:S,alignmentAxis:N}=typeof x=="number"?{mainAxis:x,crossAxis:0,alignmentAxis:null}:{mainAxis:x.mainAxis||0,crossAxis:x.crossAxis||0,alignmentAxis:x.alignmentAxis};return m&&typeof N=="number"&&(S=m==="end"?N*-1:N),h?{x:S*y,y:b*v}:{x:b*v,y:S*y}}const wC=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(r){var s,a;const{x:c,y:d,placement:p,middlewareData:m}=r,h=await bC(r,n);return p===((s=m.offset)==null?void 0:s.placement)&&(a=m.arrow)!=null&&a.alignmentOffset?{}:{x:c+h.x,y:d+h.y,data:{...h,placement:p}}}}},SC=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(r){const{x:s,y:a,placement:c}=r,{mainAxis:d=!0,crossAxis:p=!1,limiter:m={fn:k=>{let{x:E,y:j}=k;return{x:E,y:j}}},...h}=ur(n,r),v={x:s,y:a},y=await ri(r,h),x=Qn(pr(c)),b=Tu(x);let S=v[b],N=v[x];if(d){const k=b==="y"?"top":"left",E=b==="y"?"bottom":"right",j=S+y[k],M=S-y[E];S=iu(j,S,M)}if(p){const k=x==="y"?"top":"left",E=x==="y"?"bottom":"right",j=N+y[k],M=N-y[E];N=iu(j,N,M)}const C=m.fn({...r,[b]:S,[x]:N});return{...C,data:{x:C.x-s,y:C.y-a,enabled:{[b]:d,[x]:p}}}}}},CC=function(n){return n===void 0&&(n={}),{options:n,fn(r){const{x:s,y:a,placement:c,rects:d,middlewareData:p}=r,{offset:m=0,mainAxis:h=!0,crossAxis:v=!0}=ur(n,r),y={x:s,y:a},x=Qn(c),b=Tu(x);let S=y[b],N=y[x];const C=ur(m,r),k=typeof C=="number"?{mainAxis:C,crossAxis:0}:{mainAxis:0,crossAxis:0,...C};if(h){const M=b==="y"?"height":"width",R=d.reference[b]-d.floating[M]+k.mainAxis,I=d.reference[b]+d.reference[M]-k.mainAxis;S<R?S=R:S>I&&(S=I)}if(v){var E,j;const M=b==="y"?"width":"height",R=Xh.has(pr(c)),I=d.reference[x]-d.floating[M]+(R&&((E=p.offset)==null?void 0:E[x])||0)+(R?0:k.crossAxis),W=d.reference[x]+d.reference[M]+(R?0:((j=p.offset)==null?void 0:j[x])||0)-(R?k.crossAxis:0);N<I?N=I:N>W&&(N=W)}return{[b]:S,[x]:N}}}},kC=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(r){var s,a;const{placement:c,rects:d,platform:p,elements:m}=r,{apply:h=()=>{},...v}=ur(n,r),y=await ri(r,v),x=pr(c),b=po(c),S=Qn(c)==="y",{width:N,height:C}=d.floating;let k,E;x==="top"||x==="bottom"?(k=x,E=b===(await(p.isRTL==null?void 0:p.isRTL(m.floating))?"start":"end")?"left":"right"):(E=x,k=b==="end"?"top":"bottom");const j=C-y.top-y.bottom,M=N-y.left-y.right,R=Fr(C-y[k],j),I=Fr(N-y[E],M),W=!r.middlewareData.shift;let z=R,V=I;if((s=r.middlewareData.shift)!=null&&s.enabled.x&&(V=M),(a=r.middlewareData.shift)!=null&&a.enabled.y&&(z=j),W&&!b){const te=pn(y.left,0),fe=pn(y.right,0),ae=pn(y.top,0),he=pn(y.bottom,0);S?V=N-2*(te!==0||fe!==0?te+fe:pn(y.left,y.right)):z=C-2*(ae!==0||he!==0?ae+he:pn(y.top,y.bottom))}await h({...r,availableWidth:V,availableHeight:z});const ne=await p.getDimensions(m.floating);return N!==ne.width||C!==ne.height?{reset:{rects:!0}}:{}}}};function yl(){return typeof window<"u"}function fo(n){return Jh(n)?(n.nodeName||"").toLowerCase():"#document"}function fn(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function er(n){var r;return(r=(Jh(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function Jh(n){return yl()?n instanceof Node||n instanceof fn(n).Node:!1}function Ln(n){return yl()?n instanceof Element||n instanceof fn(n).Element:!1}function Jn(n){return yl()?n instanceof HTMLElement||n instanceof fn(n).HTMLElement:!1}function Ig(n){return!yl()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof fn(n).ShadowRoot}const NC=new Set(["inline","contents"]);function yi(n){const{overflow:r,overflowX:s,overflowY:a,display:c}=zn(n);return/auto|scroll|overlay|hidden|clip/.test(r+a+s)&&!NC.has(c)}const jC=new Set(["table","td","th"]);function PC(n){return jC.has(fo(n))}const EC=[":popover-open",":modal"];function bl(n){return EC.some(r=>{try{return n.matches(r)}catch{return!1}})}const RC=["transform","translate","scale","rotate","perspective"],AC=["transform","translate","scale","rotate","perspective","filter"],TC=["paint","layout","strict","content"];function _u(n){const r=Du(),s=Ln(n)?zn(n):n;return RC.some(a=>s[a]?s[a]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!r&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!r&&(s.filter?s.filter!=="none":!1)||AC.some(a=>(s.willChange||"").includes(a))||TC.some(a=>(s.contain||"").includes(a))}function MC(n){let r=$r(n);for(;Jn(r)&&!oo(r);){if(_u(r))return r;if(bl(r))return null;r=$r(r)}return null}function Du(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const IC=new Set(["html","body","#document"]);function oo(n){return IC.has(fo(n))}function zn(n){return fn(n).getComputedStyle(n)}function wl(n){return Ln(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function $r(n){if(fo(n)==="html")return n;const r=n.assignedSlot||n.parentNode||Ig(n)&&n.host||er(n);return Ig(r)?r.host:r}function Zh(n){const r=$r(n);return oo(r)?n.ownerDocument?n.ownerDocument.body:n.body:Jn(r)&&yi(r)?r:Zh(r)}function si(n,r,s){var a;r===void 0&&(r=[]),s===void 0&&(s=!0);const c=Zh(n),d=c===((a=n.ownerDocument)==null?void 0:a.body),p=fn(c);if(d){const m=lu(p);return r.concat(p,p.visualViewport||[],yi(c)?c:[],m&&s?si(m):[])}return r.concat(c,si(c,[],s))}function lu(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function e0(n){const r=zn(n);let s=parseFloat(r.width)||0,a=parseFloat(r.height)||0;const c=Jn(n),d=c?n.offsetWidth:s,p=c?n.offsetHeight:a,m=ol(s)!==d||ol(a)!==p;return m&&(s=d,a=p),{width:s,height:a,$:m}}function Ou(n){return Ln(n)?n:n.contextElement}function eo(n){const r=Ou(n);if(!Jn(r))return qn(1);const s=r.getBoundingClientRect(),{width:a,height:c,$:d}=e0(r);let p=(d?ol(s.width):s.width)/a,m=(d?ol(s.height):s.height)/c;return(!p||!Number.isFinite(p))&&(p=1),(!m||!Number.isFinite(m))&&(m=1),{x:p,y:m}}const _C=qn(0);function t0(n){const r=fn(n);return!Du()||!r.visualViewport?_C:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function DC(n,r,s){return r===void 0&&(r=!1),!s||r&&s!==fn(n)?!1:r}function ms(n,r,s,a){r===void 0&&(r=!1),s===void 0&&(s=!1);const c=n.getBoundingClientRect(),d=Ou(n);let p=qn(1);r&&(a?Ln(a)&&(p=eo(a)):p=eo(n));const m=DC(d,s,a)?t0(d):qn(0);let h=(c.left+m.x)/p.x,v=(c.top+m.y)/p.y,y=c.width/p.x,x=c.height/p.y;if(d){const b=fn(d),S=a&&Ln(a)?fn(a):a;let N=b,C=lu(N);for(;C&&a&&S!==N;){const k=eo(C),E=C.getBoundingClientRect(),j=zn(C),M=E.left+(C.clientLeft+parseFloat(j.paddingLeft))*k.x,R=E.top+(C.clientTop+parseFloat(j.paddingTop))*k.y;h*=k.x,v*=k.y,y*=k.x,x*=k.y,h+=M,v+=R,N=fn(C),C=lu(N)}}return al({width:y,height:x,x:h,y:v})}function Sl(n,r){const s=wl(n).scrollLeft;return r?r.left+s:ms(er(n)).left+s}function n0(n,r){const s=n.getBoundingClientRect(),a=s.left+r.scrollLeft-Sl(n,s),c=s.top+r.scrollTop;return{x:a,y:c}}function OC(n){let{elements:r,rect:s,offsetParent:a,strategy:c}=n;const d=c==="fixed",p=er(a),m=r?bl(r.floating):!1;if(a===p||m&&d)return s;let h={scrollLeft:0,scrollTop:0},v=qn(1);const y=qn(0),x=Jn(a);if((x||!x&&!d)&&((fo(a)!=="body"||yi(p))&&(h=wl(a)),Jn(a))){const S=ms(a);v=eo(a),y.x=S.x+a.clientLeft,y.y=S.y+a.clientTop}const b=p&&!x&&!d?n0(p,h):qn(0);return{width:s.width*v.x,height:s.height*v.y,x:s.x*v.x-h.scrollLeft*v.x+y.x+b.x,y:s.y*v.y-h.scrollTop*v.y+y.y+b.y}}function LC(n){return Array.from(n.getClientRects())}function zC(n){const r=er(n),s=wl(n),a=n.ownerDocument.body,c=pn(r.scrollWidth,r.clientWidth,a.scrollWidth,a.clientWidth),d=pn(r.scrollHeight,r.clientHeight,a.scrollHeight,a.clientHeight);let p=-s.scrollLeft+Sl(n);const m=-s.scrollTop;return zn(a).direction==="rtl"&&(p+=pn(r.clientWidth,a.clientWidth)-c),{width:c,height:d,x:p,y:m}}const _g=25;function FC(n,r){const s=fn(n),a=er(n),c=s.visualViewport;let d=a.clientWidth,p=a.clientHeight,m=0,h=0;if(c){d=c.width,p=c.height;const y=Du();(!y||y&&r==="fixed")&&(m=c.offsetLeft,h=c.offsetTop)}const v=Sl(a);if(v<=0){const y=a.ownerDocument,x=y.body,b=getComputedStyle(x),S=y.compatMode==="CSS1Compat"&&parseFloat(b.marginLeft)+parseFloat(b.marginRight)||0,N=Math.abs(a.clientWidth-x.clientWidth-S);N<=_g&&(d-=N)}else v<=_g&&(d+=v);return{width:d,height:p,x:m,y:h}}const $C=new Set(["absolute","fixed"]);function BC(n,r){const s=ms(n,!0,r==="fixed"),a=s.top+n.clientTop,c=s.left+n.clientLeft,d=Jn(n)?eo(n):qn(1),p=n.clientWidth*d.x,m=n.clientHeight*d.y,h=c*d.x,v=a*d.y;return{width:p,height:m,x:h,y:v}}function Dg(n,r,s){let a;if(r==="viewport")a=FC(n,s);else if(r==="document")a=zC(er(n));else if(Ln(r))a=BC(r,s);else{const c=t0(n);a={x:r.x-c.x,y:r.y-c.y,width:r.width,height:r.height}}return al(a)}function r0(n,r){const s=$r(n);return s===r||!Ln(s)||oo(s)?!1:zn(s).position==="fixed"||r0(s,r)}function HC(n,r){const s=r.get(n);if(s)return s;let a=si(n,[],!1).filter(m=>Ln(m)&&fo(m)!=="body"),c=null;const d=zn(n).position==="fixed";let p=d?$r(n):n;for(;Ln(p)&&!oo(p);){const m=zn(p),h=_u(p);!h&&m.position==="fixed"&&(c=null),(d?!h&&!c:!h&&m.position==="static"&&!!c&&$C.has(c.position)||yi(p)&&!h&&r0(n,p))?a=a.filter(y=>y!==p):c=m,p=$r(p)}return r.set(n,a),a}function WC(n){let{element:r,boundary:s,rootBoundary:a,strategy:c}=n;const p=[...s==="clippingAncestors"?bl(r)?[]:HC(r,this._c):[].concat(s),a],m=p[0],h=p.reduce((v,y)=>{const x=Dg(r,y,c);return v.top=pn(x.top,v.top),v.right=Fr(x.right,v.right),v.bottom=Fr(x.bottom,v.bottom),v.left=pn(x.left,v.left),v},Dg(r,m,c));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function VC(n){const{width:r,height:s}=e0(n);return{width:r,height:s}}function UC(n,r,s){const a=Jn(r),c=er(r),d=s==="fixed",p=ms(n,!0,d,r);let m={scrollLeft:0,scrollTop:0};const h=qn(0);function v(){h.x=Sl(c)}if(a||!a&&!d)if((fo(r)!=="body"||yi(c))&&(m=wl(r)),a){const S=ms(r,!0,d,r);h.x=S.x+r.clientLeft,h.y=S.y+r.clientTop}else c&&v();d&&!a&&c&&v();const y=c&&!a&&!d?n0(c,m):qn(0),x=p.left+m.scrollLeft-h.x-y.x,b=p.top+m.scrollTop-h.y-y.y;return{x,y:b,width:p.width,height:p.height}}function zd(n){return zn(n).position==="static"}function Og(n,r){if(!Jn(n)||zn(n).position==="fixed")return null;if(r)return r(n);let s=n.offsetParent;return er(n)===s&&(s=s.ownerDocument.body),s}function s0(n,r){const s=fn(n);if(bl(n))return s;if(!Jn(n)){let c=$r(n);for(;c&&!oo(c);){if(Ln(c)&&!zd(c))return c;c=$r(c)}return s}let a=Og(n,r);for(;a&&PC(a)&&zd(a);)a=Og(a,r);return a&&oo(a)&&zd(a)&&!_u(a)?s:a||MC(n)||s}const GC=async function(n){const r=this.getOffsetParent||s0,s=this.getDimensions,a=await s(n.floating);return{reference:UC(n.reference,await r(n.floating),n.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function QC(n){return zn(n).direction==="rtl"}const qC={convertOffsetParentRelativeRectToViewportRelativeRect:OC,getDocumentElement:er,getClippingRect:WC,getOffsetParent:s0,getElementRects:GC,getClientRects:LC,getDimensions:VC,getScale:eo,isElement:Ln,isRTL:QC};function o0(n,r){return n.x===r.x&&n.y===r.y&&n.width===r.width&&n.height===r.height}function KC(n,r){let s=null,a;const c=er(n);function d(){var m;clearTimeout(a),(m=s)==null||m.disconnect(),s=null}function p(m,h){m===void 0&&(m=!1),h===void 0&&(h=1),d();const v=n.getBoundingClientRect(),{left:y,top:x,width:b,height:S}=v;if(m||r(),!b||!S)return;const N=Ba(x),C=Ba(c.clientWidth-(y+b)),k=Ba(c.clientHeight-(x+S)),E=Ba(y),M={rootMargin:-N+"px "+-C+"px "+-k+"px "+-E+"px",threshold:pn(0,Fr(1,h))||1};let R=!0;function I(W){const z=W[0].intersectionRatio;if(z!==h){if(!R)return p();z?p(!1,z):a=setTimeout(()=>{p(!1,1e-7)},1e3)}z===1&&!o0(v,n.getBoundingClientRect())&&p(),R=!1}try{s=new IntersectionObserver(I,{...M,root:c.ownerDocument})}catch{s=new IntersectionObserver(I,M)}s.observe(n)}return p(!0),d}function YC(n,r,s,a){a===void 0&&(a={});const{ancestorScroll:c=!0,ancestorResize:d=!0,elementResize:p=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:h=!1}=a,v=Ou(n),y=c||d?[...v?si(v):[],...si(r)]:[];y.forEach(E=>{c&&E.addEventListener("scroll",s,{passive:!0}),d&&E.addEventListener("resize",s)});const x=v&&m?KC(v,s):null;let b=-1,S=null;p&&(S=new ResizeObserver(E=>{let[j]=E;j&&j.target===v&&S&&(S.unobserve(r),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var M;(M=S)==null||M.observe(r)})),s()}),v&&!h&&S.observe(v),S.observe(r));let N,C=h?ms(n):null;h&&k();function k(){const E=ms(n);C&&!o0(C,E)&&s(),C=E,N=requestAnimationFrame(k)}return s(),()=>{var E;y.forEach(j=>{c&&j.removeEventListener("scroll",s),d&&j.removeEventListener("resize",s)}),x?.(),(E=S)==null||E.disconnect(),S=null,h&&cancelAnimationFrame(N)}}const XC=wC,JC=SC,ZC=xC,ek=kC,tk=yC,Lg=vC,nk=CC,rk=(n,r,s)=>{const a=new Map,c={platform:qC,...s},d={...c.platform,_c:a};return hC(n,r,{...c,platform:d})};var sk=typeof document<"u",ok=function(){},Ka=sk?f.useLayoutEffect:ok;function ll(n,r){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(typeof n=="function"&&n.toString()===r.toString())return!0;let s,a,c;if(n&&r&&typeof n=="object"){if(Array.isArray(n)){if(s=n.length,s!==r.length)return!1;for(a=s;a--!==0;)if(!ll(n[a],r[a]))return!1;return!0}if(c=Object.keys(n),s=c.length,s!==Object.keys(r).length)return!1;for(a=s;a--!==0;)if(!{}.hasOwnProperty.call(r,c[a]))return!1;for(a=s;a--!==0;){const d=c[a];if(!(d==="_owner"&&n.$$typeof)&&!ll(n[d],r[d]))return!1}return!0}return n!==n&&r!==r}function i0(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function zg(n,r){const s=i0(n);return Math.round(r*s)/s}function Fd(n){const r=f.useRef(n);return Ka(()=>{r.current=n}),r}function ik(n){n===void 0&&(n={});const{placement:r="bottom",strategy:s="absolute",middleware:a=[],platform:c,elements:{reference:d,floating:p}={},transform:m=!0,whileElementsMounted:h,open:v}=n,[y,x]=f.useState({x:0,y:0,strategy:s,placement:r,middlewareData:{},isPositioned:!1}),[b,S]=f.useState(a);ll(b,a)||S(a);const[N,C]=f.useState(null),[k,E]=f.useState(null),j=f.useCallback(_=>{_!==W.current&&(W.current=_,C(_))},[]),M=f.useCallback(_=>{_!==z.current&&(z.current=_,E(_))},[]),R=d||N,I=p||k,W=f.useRef(null),z=f.useRef(null),V=f.useRef(y),ne=h!=null,te=Fd(h),fe=Fd(c),ae=Fd(v),he=f.useCallback(()=>{if(!W.current||!z.current)return;const _={placement:r,strategy:s,middleware:b};fe.current&&(_.platform=fe.current),rk(W.current,z.current,_).then(B=>{const q={...B,isPositioned:ae.current!==!1};me.current&&!ll(V.current,q)&&(V.current=q,hi.flushSync(()=>{x(q)}))})},[b,r,s,fe,ae]);Ka(()=>{v===!1&&V.current.isPositioned&&(V.current.isPositioned=!1,x(_=>({..._,isPositioned:!1})))},[v]);const me=f.useRef(!1);Ka(()=>(me.current=!0,()=>{me.current=!1}),[]),Ka(()=>{if(R&&(W.current=R),I&&(z.current=I),R&&I){if(te.current)return te.current(R,I,he);he()}},[R,I,he,te,ne]);const ge=f.useMemo(()=>({reference:W,floating:z,setReference:j,setFloating:M}),[j,M]),J=f.useMemo(()=>({reference:R,floating:I}),[R,I]),Q=f.useMemo(()=>{const _={position:s,left:0,top:0};if(!J.floating)return _;const B=zg(J.floating,y.x),q=zg(J.floating,y.y);return m?{..._,transform:"translate("+B+"px, "+q+"px)",...i0(J.floating)>=1.5&&{willChange:"transform"}}:{position:s,left:B,top:q}},[s,m,J.floating,y.x,y.y]);return f.useMemo(()=>({...y,update:he,refs:ge,elements:J,floatingStyles:Q}),[y,he,ge,J,Q])}const ak=n=>{function r(s){return{}.hasOwnProperty.call(s,"current")}return{name:"arrow",options:n,fn(s){const{element:a,padding:c}=typeof n=="function"?n(s):n;return a&&r(a)?a.current!=null?Lg({element:a.current,padding:c}).fn(s):{}:a?Lg({element:a,padding:c}).fn(s):{}}}},lk=(n,r)=>({...XC(n),options:[n,r]}),ck=(n,r)=>({...JC(n),options:[n,r]}),dk=(n,r)=>({...nk(n),options:[n,r]}),uk=(n,r)=>({...ZC(n),options:[n,r]}),pk=(n,r)=>({...ek(n),options:[n,r]}),fk=(n,r)=>({...tk(n),options:[n,r]}),mk=(n,r)=>({...ak(n),options:[n,r]});var gk="Arrow",a0=f.forwardRef((n,r)=>{const{children:s,width:a=10,height:c=5,...d}=n;return o.jsx(Ie.svg,{...d,ref:r,width:a,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?s:o.jsx("polygon",{points:"0,0 30,0 15,10"})})});a0.displayName=gk;var hk=a0;function Lu(n){const[r,s]=f.useState(void 0);return Rt(()=>{if(n){s({width:n.offsetWidth,height:n.offsetHeight});const a=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const d=c[0];let p,m;if("borderBoxSize"in d){const h=d.borderBoxSize,v=Array.isArray(h)?h[0]:h;p=v.inlineSize,m=v.blockSize}else p=n.offsetWidth,m=n.offsetHeight;s({width:p,height:m})});return a.observe(n,{box:"border-box"}),()=>a.unobserve(n)}else s(void 0)},[n]),r}var zu="Popper",[l0,mo]=mn(zu),[vk,c0]=l0(zu),d0=n=>{const{__scopePopper:r,children:s}=n,[a,c]=f.useState(null);return o.jsx(vk,{scope:r,anchor:a,onAnchorChange:c,children:s})};d0.displayName=zu;var u0="PopperAnchor",p0=f.forwardRef((n,r)=>{const{__scopePopper:s,virtualRef:a,...c}=n,d=c0(u0,s),p=f.useRef(null),m=He(r,p),h=f.useRef(null);return f.useEffect(()=>{const v=h.current;h.current=a?.current||p.current,v!==h.current&&d.onAnchorChange(h.current)}),a?null:o.jsx(Ie.div,{...c,ref:m})});p0.displayName=u0;var Fu="PopperContent",[xk,yk]=l0(Fu),f0=f.forwardRef((n,r)=>{const{__scopePopper:s,side:a="bottom",sideOffset:c=0,align:d="center",alignOffset:p=0,arrowPadding:m=0,avoidCollisions:h=!0,collisionBoundary:v=[],collisionPadding:y=0,sticky:x="partial",hideWhenDetached:b=!1,updatePositionStrategy:S="optimized",onPlaced:N,...C}=n,k=c0(Fu,s),[E,j]=f.useState(null),M=He(r,O=>j(O)),[R,I]=f.useState(null),W=Lu(R),z=W?.width??0,V=W?.height??0,ne=a+(d!=="center"?"-"+d:""),te=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},fe=Array.isArray(v)?v:[v],ae=fe.length>0,he={padding:te,boundary:fe.filter(wk),altBoundary:ae},{refs:me,floatingStyles:ge,placement:J,isPositioned:Q,middlewareData:_}=ik({strategy:"fixed",placement:ne,whileElementsMounted:(...O)=>YC(...O,{animationFrame:S==="always"}),elements:{reference:k.anchor},middleware:[lk({mainAxis:c+V,alignmentAxis:p}),h&&ck({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?dk():void 0,...he}),h&&uk({...he}),pk({...he,apply:({elements:O,rects:K,availableWidth:ue,availableHeight:pe})=>{const{width:Re,height:Oe}=K.reference,Y=O.floating.style;Y.setProperty("--radix-popper-available-width",`${ue}px`),Y.setProperty("--radix-popper-available-height",`${pe}px`),Y.setProperty("--radix-popper-anchor-width",`${Re}px`),Y.setProperty("--radix-popper-anchor-height",`${Oe}px`)}}),R&&mk({element:R,padding:m}),Sk({arrowWidth:z,arrowHeight:V}),b&&fk({strategy:"referenceHidden",...he})]}),[B,q]=h0(J),A=Et(N);Rt(()=>{Q&&A?.()},[Q,A]);const U=_.arrow?.x,H=_.arrow?.y,G=_.arrow?.centerOffset!==0,[re,X]=f.useState();return Rt(()=>{E&&X(window.getComputedStyle(E).zIndex)},[E]),o.jsx("div",{ref:me.setFloating,"data-radix-popper-content-wrapper":"",style:{...ge,transform:Q?ge.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:re,"--radix-popper-transform-origin":[_.transformOrigin?.x,_.transformOrigin?.y].join(" "),..._.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:o.jsx(xk,{scope:s,placedSide:B,onArrowChange:I,arrowX:U,arrowY:H,shouldHideArrow:G,children:o.jsx(Ie.div,{"data-side":B,"data-align":q,...C,ref:M,style:{...C.style,animation:Q?void 0:"none"}})})})});f0.displayName=Fu;var m0="PopperArrow",bk={top:"bottom",right:"left",bottom:"top",left:"right"},g0=f.forwardRef(function(r,s){const{__scopePopper:a,...c}=r,d=yk(m0,a),p=bk[d.placedSide];return o.jsx("span",{ref:d.onArrowChange,style:{position:"absolute",left:d.arrowX,top:d.arrowY,[p]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[d.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[d.placedSide],visibility:d.shouldHideArrow?"hidden":void 0},children:o.jsx(hk,{...c,ref:s,style:{...c.style,display:"block"}})})});g0.displayName=m0;function wk(n){return n!==null}var Sk=n=>({name:"transformOrigin",options:n,fn(r){const{placement:s,rects:a,middlewareData:c}=r,p=c.arrow?.centerOffset!==0,m=p?0:n.arrowWidth,h=p?0:n.arrowHeight,[v,y]=h0(s),x={start:"0%",center:"50%",end:"100%"}[y],b=(c.arrow?.x??0)+m/2,S=(c.arrow?.y??0)+h/2;let N="",C="";return v==="bottom"?(N=p?x:`${b}px`,C=`${-h}px`):v==="top"?(N=p?x:`${b}px`,C=`${a.floating.height+h}px`):v==="right"?(N=`${-h}px`,C=p?x:`${S}px`):v==="left"&&(N=`${a.floating.width+h}px`,C=p?x:`${S}px`),{data:{x:N,y:C}}}});function h0(n){const[r,s="center"]=n.split("-");return[r,s]}var Cl=d0,$u=p0,Bu=f0,Hu=g0,Ck="Portal",bi=f.forwardRef((n,r)=>{const{container:s,...a}=n,[c,d]=f.useState(!1);Rt(()=>d(!0),[]);const p=s||c&&globalThis?.document?.body;return p?sS.createPortal(o.jsx(Ie.div,{...a,ref:r}),p):null});bi.displayName=Ck;var $d="rovingFocusGroup.onEntryFocus",kk={bubbles:!1,cancelable:!0},wi="RovingFocusGroup",[cu,v0,Nk]=Ru(wi),[jk,kl]=mn(wi,[Nk]),[Pk,Ek]=jk(wi),x0=f.forwardRef((n,r)=>o.jsx(cu.Provider,{scope:n.__scopeRovingFocusGroup,children:o.jsx(cu.Slot,{scope:n.__scopeRovingFocusGroup,children:o.jsx(Rk,{...n,ref:r})})}));x0.displayName=wi;var Rk=f.forwardRef((n,r)=>{const{__scopeRovingFocusGroup:s,orientation:a,loop:c=!1,dir:d,currentTabStopId:p,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:h,onEntryFocus:v,preventScrollOnEntryFocus:y=!1,...x}=n,b=f.useRef(null),S=He(r,b),N=vi(d),[C,k]=On({prop:p,defaultProp:m??null,onChange:h,caller:wi}),[E,j]=f.useState(!1),M=Et(v),R=v0(s),I=f.useRef(!1),[W,z]=f.useState(0);return f.useEffect(()=>{const V=b.current;if(V)return V.addEventListener($d,M),()=>V.removeEventListener($d,M)},[M]),o.jsx(Pk,{scope:s,orientation:a,dir:N,loop:c,currentTabStopId:C,onItemFocus:f.useCallback(V=>k(V),[k]),onItemShiftTab:f.useCallback(()=>j(!0),[]),onFocusableItemAdd:f.useCallback(()=>z(V=>V+1),[]),onFocusableItemRemove:f.useCallback(()=>z(V=>V-1),[]),children:o.jsx(Ie.div,{tabIndex:E||W===0?-1:0,"data-orientation":a,...x,ref:S,style:{outline:"none",...n.style},onMouseDown:ve(n.onMouseDown,()=>{I.current=!0}),onFocus:ve(n.onFocus,V=>{const ne=!I.current;if(V.target===V.currentTarget&&ne&&!E){const te=new CustomEvent($d,kk);if(V.currentTarget.dispatchEvent(te),!te.defaultPrevented){const fe=R().filter(J=>J.focusable),ae=fe.find(J=>J.active),he=fe.find(J=>J.id===C),ge=[ae,he,...fe].filter(Boolean).map(J=>J.ref.current);w0(ge,y)}}I.current=!1}),onBlur:ve(n.onBlur,()=>j(!1))})})}),y0="RovingFocusGroupItem",b0=f.forwardRef((n,r)=>{const{__scopeRovingFocusGroup:s,focusable:a=!0,active:c=!1,tabStopId:d,children:p,...m}=n,h=en(),v=d||h,y=Ek(y0,s),x=y.currentTabStopId===v,b=v0(s),{onFocusableItemAdd:S,onFocusableItemRemove:N,currentTabStopId:C}=y;return f.useEffect(()=>{if(a)return S(),()=>N()},[a,S,N]),o.jsx(cu.ItemSlot,{scope:s,id:v,focusable:a,active:c,children:o.jsx(Ie.span,{tabIndex:x?0:-1,"data-orientation":y.orientation,...m,ref:r,onMouseDown:ve(n.onMouseDown,k=>{a?y.onItemFocus(v):k.preventDefault()}),onFocus:ve(n.onFocus,()=>y.onItemFocus(v)),onKeyDown:ve(n.onKeyDown,k=>{if(k.key==="Tab"&&k.shiftKey){y.onItemShiftTab();return}if(k.target!==k.currentTarget)return;const E=Mk(k,y.orientation,y.dir);if(E!==void 0){if(k.metaKey||k.ctrlKey||k.altKey||k.shiftKey)return;k.preventDefault();let M=b().filter(R=>R.focusable).map(R=>R.ref.current);if(E==="last")M.reverse();else if(E==="prev"||E==="next"){E==="prev"&&M.reverse();const R=M.indexOf(k.currentTarget);M=y.loop?Ik(M,R+1):M.slice(R+1)}setTimeout(()=>w0(M))}}),children:typeof p=="function"?p({isCurrentTabStop:x,hasTabStop:C!=null}):p})})});b0.displayName=y0;var Ak={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Tk(n,r){return r!=="rtl"?n:n==="ArrowLeft"?"ArrowRight":n==="ArrowRight"?"ArrowLeft":n}function Mk(n,r,s){const a=Tk(n.key,s);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return Ak[a]}function w0(n,r=!1){const s=document.activeElement;for(const a of n)if(a===s||(a.focus({preventScroll:r}),document.activeElement!==s))return}function Ik(n,r){return n.map((s,a)=>n[(r+a)%n.length])}var S0=x0,C0=b0;function _k(n){const r=Dk(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(Lk);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function Dk(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=Fk(c),m=zk(d,c.props);return c.type!==f.Fragment&&(m.ref=a?fr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var Ok=Symbol("radix.slottable");function Lk(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Ok}function zk(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function Fk(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var $k=function(n){if(typeof document>"u")return null;var r=Array.isArray(n)?n[0]:n;return r.ownerDocument.body},Qs=new WeakMap,Ha=new WeakMap,Wa={},Bd=0,k0=function(n){return n&&(n.host||k0(n.parentNode))},Bk=function(n,r){return r.map(function(s){if(n.contains(s))return s;var a=k0(s);return a&&n.contains(a)?a:(console.error("aria-hidden",s,"in not contained inside",n,". Doing nothing"),null)}).filter(function(s){return!!s})},Hk=function(n,r,s,a){var c=Bk(r,Array.isArray(n)?n:[n]);Wa[s]||(Wa[s]=new WeakMap);var d=Wa[s],p=[],m=new Set,h=new Set(c),v=function(x){!x||m.has(x)||(m.add(x),v(x.parentNode))};c.forEach(v);var y=function(x){!x||h.has(x)||Array.prototype.forEach.call(x.children,function(b){if(m.has(b))y(b);else try{var S=b.getAttribute(a),N=S!==null&&S!=="false",C=(Qs.get(b)||0)+1,k=(d.get(b)||0)+1;Qs.set(b,C),d.set(b,k),p.push(b),C===1&&N&&Ha.set(b,!0),k===1&&b.setAttribute(s,"true"),N||b.setAttribute(a,"true")}catch(E){console.error("aria-hidden: cannot operate on ",b,E)}})};return y(r),m.clear(),Bd++,function(){p.forEach(function(x){var b=Qs.get(x)-1,S=d.get(x)-1;Qs.set(x,b),d.set(x,S),b||(Ha.has(x)||x.removeAttribute(a),Ha.delete(x)),S||x.removeAttribute(s)}),Bd--,Bd||(Qs=new WeakMap,Qs=new WeakMap,Ha=new WeakMap,Wa={})}},Wu=function(n,r,s){s===void 0&&(s="data-aria-hidden");var a=Array.from(Array.isArray(n)?n:[n]),c=$k(n);return c?(a.push.apply(a,Array.from(c.querySelectorAll("[aria-live], script"))),Hk(a,c,s,"aria-hidden")):function(){return null}},Gn=function(){return Gn=Object.assign||function(r){for(var s,a=1,c=arguments.length;a<c;a++){s=arguments[a];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(r[d]=s[d])}return r},Gn.apply(this,arguments)};function N0(n,r){var s={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.indexOf(a)<0&&(s[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(n);c<a.length;c++)r.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(n,a[c])&&(s[a[c]]=n[a[c]]);return s}function Wk(n,r,s){if(s||arguments.length===2)for(var a=0,c=r.length,d;a<c;a++)(d||!(a in r))&&(d||(d=Array.prototype.slice.call(r,0,a)),d[a]=r[a]);return n.concat(d||Array.prototype.slice.call(r))}var Ya="right-scroll-bar-position",Xa="width-before-scroll-bar",Vk="with-scroll-bars-hidden",Uk="--removed-body-scroll-bar-size";function Hd(n,r){return typeof n=="function"?n(r):n&&(n.current=r),n}function Gk(n,r){var s=f.useState(function(){return{value:n,callback:r,facade:{get current(){return s.value},set current(a){var c=s.value;c!==a&&(s.value=a,s.callback(a,c))}}}})[0];return s.callback=r,s.facade}var Qk=typeof window<"u"?f.useLayoutEffect:f.useEffect,Fg=new WeakMap;function qk(n,r){var s=Gk(null,function(a){return n.forEach(function(c){return Hd(c,a)})});return Qk(function(){var a=Fg.get(s);if(a){var c=new Set(a),d=new Set(n),p=s.current;c.forEach(function(m){d.has(m)||Hd(m,null)}),d.forEach(function(m){c.has(m)||Hd(m,p)})}Fg.set(s,n)},[n]),s}function Kk(n){return n}function Yk(n,r){r===void 0&&(r=Kk);var s=[],a=!1,c={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return s.length?s[s.length-1]:n},useMedium:function(d){var p=r(d,a);return s.push(p),function(){s=s.filter(function(m){return m!==p})}},assignSyncMedium:function(d){for(a=!0;s.length;){var p=s;s=[],p.forEach(d)}s={push:function(m){return d(m)},filter:function(){return s}}},assignMedium:function(d){a=!0;var p=[];if(s.length){var m=s;s=[],m.forEach(d),p=s}var h=function(){var y=p;p=[],y.forEach(d)},v=function(){return Promise.resolve().then(h)};v(),s={push:function(y){p.push(y),v()},filter:function(y){return p=p.filter(y),s}}}};return c}function Xk(n){n===void 0&&(n={});var r=Yk(null);return r.options=Gn({async:!0,ssr:!1},n),r}var j0=function(n){var r=n.sideCar,s=N0(n,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=r.read();if(!a)throw new Error("Sidecar medium not found");return f.createElement(a,Gn({},s))};j0.isSideCarExport=!0;function Jk(n,r){return n.useMedium(r),j0}var P0=Xk(),Wd=function(){},Nl=f.forwardRef(function(n,r){var s=f.useRef(null),a=f.useState({onScrollCapture:Wd,onWheelCapture:Wd,onTouchMoveCapture:Wd}),c=a[0],d=a[1],p=n.forwardProps,m=n.children,h=n.className,v=n.removeScrollBar,y=n.enabled,x=n.shards,b=n.sideCar,S=n.noRelative,N=n.noIsolation,C=n.inert,k=n.allowPinchZoom,E=n.as,j=E===void 0?"div":E,M=n.gapMode,R=N0(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=b,W=qk([s,r]),z=Gn(Gn({},R),c);return f.createElement(f.Fragment,null,y&&f.createElement(I,{sideCar:P0,removeScrollBar:v,shards:x,noRelative:S,noIsolation:N,inert:C,setCallbacks:d,allowPinchZoom:!!k,lockRef:s,gapMode:M}),p?f.cloneElement(f.Children.only(m),Gn(Gn({},z),{ref:W})):f.createElement(j,Gn({},z,{className:h,ref:W}),m))});Nl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Nl.classNames={fullWidth:Xa,zeroRight:Ya};var Zk=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function eN(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var r=Zk();return r&&n.setAttribute("nonce",r),n}function tN(n,r){n.styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r))}function nN(n){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(n)}var rN=function(){var n=0,r=null;return{add:function(s){n==0&&(r=eN())&&(tN(r,s),nN(r)),n++},remove:function(){n--,!n&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},sN=function(){var n=rN();return function(r,s){f.useEffect(function(){return n.add(r),function(){n.remove()}},[r&&s])}},E0=function(){var n=sN(),r=function(s){var a=s.styles,c=s.dynamic;return n(a,c),null};return r},oN={left:0,top:0,right:0,gap:0},Vd=function(n){return parseInt(n||"",10)||0},iN=function(n){var r=window.getComputedStyle(document.body),s=r[n==="padding"?"paddingLeft":"marginLeft"],a=r[n==="padding"?"paddingTop":"marginTop"],c=r[n==="padding"?"paddingRight":"marginRight"];return[Vd(s),Vd(a),Vd(c)]},aN=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return oN;var r=iN(n),s=document.documentElement.clientWidth,a=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,a-s+r[2]-r[0])}},lN=E0(),to="data-scroll-locked",cN=function(n,r,s,a){var c=n.left,d=n.top,p=n.right,m=n.gap;return s===void 0&&(s="margin"),`
  .`.concat(Vk,` {
   overflow: hidden `).concat(a,`;
   padding-right: `).concat(m,"px ").concat(a,`;
  }
  body[`).concat(to,`] {
    overflow: hidden `).concat(a,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(a,";"),s==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(d,`px;
    padding-right: `).concat(p,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m,"px ").concat(a,`;
    `),s==="padding"&&"padding-right: ".concat(m,"px ").concat(a,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Ya,` {
    right: `).concat(m,"px ").concat(a,`;
  }
  
  .`).concat(Xa,` {
    margin-right: `).concat(m,"px ").concat(a,`;
  }
  
  .`).concat(Ya," .").concat(Ya,` {
    right: 0 `).concat(a,`;
  }
  
  .`).concat(Xa," .").concat(Xa,` {
    margin-right: 0 `).concat(a,`;
  }
  
  body[`).concat(to,`] {
    `).concat(Uk,": ").concat(m,`px;
  }
`)},$g=function(){var n=parseInt(document.body.getAttribute(to)||"0",10);return isFinite(n)?n:0},dN=function(){f.useEffect(function(){return document.body.setAttribute(to,($g()+1).toString()),function(){var n=$g()-1;n<=0?document.body.removeAttribute(to):document.body.setAttribute(to,n.toString())}},[])},uN=function(n){var r=n.noRelative,s=n.noImportant,a=n.gapMode,c=a===void 0?"margin":a;dN();var d=f.useMemo(function(){return aN(c)},[c]);return f.createElement(lN,{styles:cN(d,!r,c,s?"":"!important")})},du=!1;if(typeof window<"u")try{var Va=Object.defineProperty({},"passive",{get:function(){return du=!0,!0}});window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{du=!1}var qs=du?{passive:!1}:!1,pN=function(n){return n.tagName==="TEXTAREA"},R0=function(n,r){if(!(n instanceof Element))return!1;var s=window.getComputedStyle(n);return s[r]!=="hidden"&&!(s.overflowY===s.overflowX&&!pN(n)&&s[r]==="visible")},fN=function(n){return R0(n,"overflowY")},mN=function(n){return R0(n,"overflowX")},Bg=function(n,r){var s=r.ownerDocument,a=r;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var c=A0(n,a);if(c){var d=T0(n,a),p=d[1],m=d[2];if(p>m)return!0}a=a.parentNode}while(a&&a!==s.body);return!1},gN=function(n){var r=n.scrollTop,s=n.scrollHeight,a=n.clientHeight;return[r,s,a]},hN=function(n){var r=n.scrollLeft,s=n.scrollWidth,a=n.clientWidth;return[r,s,a]},A0=function(n,r){return n==="v"?fN(r):mN(r)},T0=function(n,r){return n==="v"?gN(r):hN(r)},vN=function(n,r){return n==="h"&&r==="rtl"?-1:1},xN=function(n,r,s,a,c){var d=vN(n,window.getComputedStyle(r).direction),p=d*a,m=s.target,h=r.contains(m),v=!1,y=p>0,x=0,b=0;do{if(!m)break;var S=T0(n,m),N=S[0],C=S[1],k=S[2],E=C-k-d*N;(N||E)&&A0(n,m)&&(x+=E,b+=N);var j=m.parentNode;m=j&&j.nodeType===Node.DOCUMENT_FRAGMENT_NODE?j.host:j}while(!h&&m!==document.body||h&&(r.contains(m)||r===m));return(y&&Math.abs(x)<1||!y&&Math.abs(b)<1)&&(v=!0),v},Ua=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},Hg=function(n){return[n.deltaX,n.deltaY]},Wg=function(n){return n&&"current"in n?n.current:n},yN=function(n,r){return n[0]===r[0]&&n[1]===r[1]},bN=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},wN=0,Ks=[];function SN(n){var r=f.useRef([]),s=f.useRef([0,0]),a=f.useRef(),c=f.useState(wN++)[0],d=f.useState(E0)[0],p=f.useRef(n);f.useEffect(function(){p.current=n},[n]),f.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(c));var C=Wk([n.lockRef.current],(n.shards||[]).map(Wg),!0).filter(Boolean);return C.forEach(function(k){return k.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),C.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(c))})}}},[n.inert,n.lockRef.current,n.shards]);var m=f.useCallback(function(C,k){if("touches"in C&&C.touches.length===2||C.type==="wheel"&&C.ctrlKey)return!p.current.allowPinchZoom;var E=Ua(C),j=s.current,M="deltaX"in C?C.deltaX:j[0]-E[0],R="deltaY"in C?C.deltaY:j[1]-E[1],I,W=C.target,z=Math.abs(M)>Math.abs(R)?"h":"v";if("touches"in C&&z==="h"&&W.type==="range")return!1;var V=window.getSelection(),ne=V&&V.anchorNode,te=ne?ne===W||ne.contains(W):!1;if(te)return!1;var fe=Bg(z,W);if(!fe)return!0;if(fe?I=z:(I=z==="v"?"h":"v",fe=Bg(z,W)),!fe)return!1;if(!a.current&&"changedTouches"in C&&(M||R)&&(a.current=I),!I)return!0;var ae=a.current||I;return xN(ae,k,C,ae==="h"?M:R)},[]),h=f.useCallback(function(C){var k=C;if(!(!Ks.length||Ks[Ks.length-1]!==d)){var E="deltaY"in k?Hg(k):Ua(k),j=r.current.filter(function(I){return I.name===k.type&&(I.target===k.target||k.target===I.shadowParent)&&yN(I.delta,E)})[0];if(j&&j.should){k.cancelable&&k.preventDefault();return}if(!j){var M=(p.current.shards||[]).map(Wg).filter(Boolean).filter(function(I){return I.contains(k.target)}),R=M.length>0?m(k,M[0]):!p.current.noIsolation;R&&k.cancelable&&k.preventDefault()}}},[]),v=f.useCallback(function(C,k,E,j){var M={name:C,delta:k,target:E,should:j,shadowParent:CN(E)};r.current.push(M),setTimeout(function(){r.current=r.current.filter(function(R){return R!==M})},1)},[]),y=f.useCallback(function(C){s.current=Ua(C),a.current=void 0},[]),x=f.useCallback(function(C){v(C.type,Hg(C),C.target,m(C,n.lockRef.current))},[]),b=f.useCallback(function(C){v(C.type,Ua(C),C.target,m(C,n.lockRef.current))},[]);f.useEffect(function(){return Ks.push(d),n.setCallbacks({onScrollCapture:x,onWheelCapture:x,onTouchMoveCapture:b}),document.addEventListener("wheel",h,qs),document.addEventListener("touchmove",h,qs),document.addEventListener("touchstart",y,qs),function(){Ks=Ks.filter(function(C){return C!==d}),document.removeEventListener("wheel",h,qs),document.removeEventListener("touchmove",h,qs),document.removeEventListener("touchstart",y,qs)}},[]);var S=n.removeScrollBar,N=n.inert;return f.createElement(f.Fragment,null,N?f.createElement(d,{styles:bN(c)}):null,S?f.createElement(uN,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function CN(n){for(var r=null;n!==null;)n instanceof ShadowRoot&&(r=n.host,n=n.host),n=n.parentNode;return r}const kN=Jk(P0,SN);var jl=f.forwardRef(function(n,r){return f.createElement(Nl,Gn({},n,{ref:r,sideCar:kN}))});jl.classNames=Nl.classNames;var uu=["Enter"," "],NN=["ArrowDown","PageUp","Home"],M0=["ArrowUp","PageDown","End"],jN=[...NN,...M0],PN={ltr:[...uu,"ArrowRight"],rtl:[...uu,"ArrowLeft"]},EN={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Si="Menu",[oi,RN,AN]=Ru(Si),[ys,I0]=mn(Si,[AN,mo,kl]),Ci=mo(),_0=kl(),[D0,Br]=ys(Si),[TN,ki]=ys(Si),O0=n=>{const{__scopeMenu:r,open:s=!1,children:a,dir:c,onOpenChange:d,modal:p=!0}=n,m=Ci(r),[h,v]=f.useState(null),y=f.useRef(!1),x=Et(d),b=vi(c);return f.useEffect(()=>{const S=()=>{y.current=!0,document.addEventListener("pointerdown",N,{capture:!0,once:!0}),document.addEventListener("pointermove",N,{capture:!0,once:!0})},N=()=>y.current=!1;return document.addEventListener("keydown",S,{capture:!0}),()=>{document.removeEventListener("keydown",S,{capture:!0}),document.removeEventListener("pointerdown",N,{capture:!0}),document.removeEventListener("pointermove",N,{capture:!0})}},[]),o.jsx(Cl,{...m,children:o.jsx(D0,{scope:r,open:s,onOpenChange:x,content:h,onContentChange:v,children:o.jsx(TN,{scope:r,onClose:f.useCallback(()=>x(!1),[x]),isUsingKeyboardRef:y,dir:b,modal:p,children:a})})})};O0.displayName=Si;var MN="MenuAnchor",Vu=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n,c=Ci(s);return o.jsx($u,{...c,...a,ref:r})});Vu.displayName=MN;var Uu="MenuPortal",[IN,L0]=ys(Uu,{forceMount:void 0}),z0=n=>{const{__scopeMenu:r,forceMount:s,children:a,container:c}=n,d=Br(Uu,r);return o.jsx(IN,{scope:r,forceMount:s,children:o.jsx(Dt,{present:s||d.open,children:o.jsx(bi,{asChild:!0,container:c,children:a})})})};z0.displayName=Uu;var Cn="MenuContent",[_N,Gu]=ys(Cn),F0=f.forwardRef((n,r)=>{const s=L0(Cn,n.__scopeMenu),{forceMount:a=s.forceMount,...c}=n,d=Br(Cn,n.__scopeMenu),p=ki(Cn,n.__scopeMenu);return o.jsx(oi.Provider,{scope:n.__scopeMenu,children:o.jsx(Dt,{present:a||d.open,children:o.jsx(oi.Slot,{scope:n.__scopeMenu,children:p.modal?o.jsx(DN,{...c,ref:r}):o.jsx(ON,{...c,ref:r})})})})}),DN=f.forwardRef((n,r)=>{const s=Br(Cn,n.__scopeMenu),a=f.useRef(null),c=He(r,a);return f.useEffect(()=>{const d=a.current;if(d)return Wu(d)},[]),o.jsx(Qu,{...n,ref:c,trapFocus:s.open,disableOutsidePointerEvents:s.open,disableOutsideScroll:!0,onFocusOutside:ve(n.onFocusOutside,d=>d.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>s.onOpenChange(!1)})}),ON=f.forwardRef((n,r)=>{const s=Br(Cn,n.__scopeMenu);return o.jsx(Qu,{...n,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>s.onOpenChange(!1)})}),LN=_k("MenuContent.ScrollLock"),Qu=f.forwardRef((n,r)=>{const{__scopeMenu:s,loop:a=!1,trapFocus:c,onOpenAutoFocus:d,onCloseAutoFocus:p,disableOutsidePointerEvents:m,onEntryFocus:h,onEscapeKeyDown:v,onPointerDownOutside:y,onFocusOutside:x,onInteractOutside:b,onDismiss:S,disableOutsideScroll:N,...C}=n,k=Br(Cn,s),E=ki(Cn,s),j=Ci(s),M=_0(s),R=RN(s),[I,W]=f.useState(null),z=f.useRef(null),V=He(r,z,k.onContentChange),ne=f.useRef(0),te=f.useRef(""),fe=f.useRef(0),ae=f.useRef(null),he=f.useRef("right"),me=f.useRef(0),ge=N?jl:f.Fragment,J=N?{as:LN,allowPinchZoom:!0}:void 0,Q=B=>{const q=te.current+B,A=R().filter(O=>!O.disabled),U=document.activeElement,H=A.find(O=>O.ref.current===U)?.textValue,G=A.map(O=>O.textValue),re=KN(G,q,H),X=A.find(O=>O.textValue===re)?.ref.current;(function O(K){te.current=K,window.clearTimeout(ne.current),K!==""&&(ne.current=window.setTimeout(()=>O(""),1e3))})(q),X&&setTimeout(()=>X.focus())};f.useEffect(()=>()=>window.clearTimeout(ne.current),[]),Au();const _=f.useCallback(B=>he.current===ae.current?.side&&XN(B,ae.current?.area),[]);return o.jsx(_N,{scope:s,searchRef:te,onItemEnter:f.useCallback(B=>{_(B)&&B.preventDefault()},[_]),onItemLeave:f.useCallback(B=>{_(B)||(z.current?.focus(),W(null))},[_]),onTriggerLeave:f.useCallback(B=>{_(B)&&B.preventDefault()},[_]),pointerGraceTimerRef:fe,onPointerGraceIntentChange:f.useCallback(B=>{ae.current=B},[]),children:o.jsx(ge,{...J,children:o.jsx(xl,{asChild:!0,trapped:c,onMountAutoFocus:ve(d,B=>{B.preventDefault(),z.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:p,children:o.jsx(xi,{asChild:!0,disableOutsidePointerEvents:m,onEscapeKeyDown:v,onPointerDownOutside:y,onFocusOutside:x,onInteractOutside:b,onDismiss:S,children:o.jsx(S0,{asChild:!0,...M,dir:E.dir,orientation:"vertical",loop:a,currentTabStopId:I,onCurrentTabStopIdChange:W,onEntryFocus:ve(h,B=>{E.isUsingKeyboardRef.current||B.preventDefault()}),preventScrollOnEntryFocus:!0,children:o.jsx(Bu,{role:"menu","aria-orientation":"vertical","data-state":nv(k.open),"data-radix-menu-content":"",dir:E.dir,...j,...C,ref:V,style:{outline:"none",...C.style},onKeyDown:ve(C.onKeyDown,B=>{const A=B.target.closest("[data-radix-menu-content]")===B.currentTarget,U=B.ctrlKey||B.altKey||B.metaKey,H=B.key.length===1;A&&(B.key==="Tab"&&B.preventDefault(),!U&&H&&Q(B.key));const G=z.current;if(B.target!==G||!jN.includes(B.key))return;B.preventDefault();const X=R().filter(O=>!O.disabled).map(O=>O.ref.current);M0.includes(B.key)&&X.reverse(),QN(X)}),onBlur:ve(n.onBlur,B=>{B.currentTarget.contains(B.target)||(window.clearTimeout(ne.current),te.current="")}),onPointerMove:ve(n.onPointerMove,ii(B=>{const q=B.target,A=me.current!==B.clientX;if(B.currentTarget.contains(q)&&A){const U=B.clientX>me.current?"right":"left";he.current=U,me.current=B.clientX}}))})})})})})})});F0.displayName=Cn;var zN="MenuGroup",qu=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n;return o.jsx(Ie.div,{role:"group",...a,ref:r})});qu.displayName=zN;var FN="MenuLabel",$0=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n;return o.jsx(Ie.div,{...a,ref:r})});$0.displayName=FN;var cl="MenuItem",Vg="menu.itemSelect",Pl=f.forwardRef((n,r)=>{const{disabled:s=!1,onSelect:a,...c}=n,d=f.useRef(null),p=ki(cl,n.__scopeMenu),m=Gu(cl,n.__scopeMenu),h=He(r,d),v=f.useRef(!1),y=()=>{const x=d.current;if(!s&&x){const b=new CustomEvent(Vg,{bubbles:!0,cancelable:!0});x.addEventListener(Vg,S=>a?.(S),{once:!0}),Ih(x,b),b.defaultPrevented?v.current=!1:p.onClose()}};return o.jsx(B0,{...c,ref:h,disabled:s,onClick:ve(n.onClick,y),onPointerDown:x=>{n.onPointerDown?.(x),v.current=!0},onPointerUp:ve(n.onPointerUp,x=>{v.current||x.currentTarget?.click()}),onKeyDown:ve(n.onKeyDown,x=>{const b=m.searchRef.current!=="";s||b&&x.key===" "||uu.includes(x.key)&&(x.currentTarget.click(),x.preventDefault())})})});Pl.displayName=cl;var B0=f.forwardRef((n,r)=>{const{__scopeMenu:s,disabled:a=!1,textValue:c,...d}=n,p=Gu(cl,s),m=_0(s),h=f.useRef(null),v=He(r,h),[y,x]=f.useState(!1),[b,S]=f.useState("");return f.useEffect(()=>{const N=h.current;N&&S((N.textContent??"").trim())},[d.children]),o.jsx(oi.ItemSlot,{scope:s,disabled:a,textValue:c??b,children:o.jsx(C0,{asChild:!0,...m,focusable:!a,children:o.jsx(Ie.div,{role:"menuitem","data-highlighted":y?"":void 0,"aria-disabled":a||void 0,"data-disabled":a?"":void 0,...d,ref:v,onPointerMove:ve(n.onPointerMove,ii(N=>{a?p.onItemLeave(N):(p.onItemEnter(N),N.defaultPrevented||N.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:ve(n.onPointerLeave,ii(N=>p.onItemLeave(N))),onFocus:ve(n.onFocus,()=>x(!0)),onBlur:ve(n.onBlur,()=>x(!1))})})})}),$N="MenuCheckboxItem",H0=f.forwardRef((n,r)=>{const{checked:s=!1,onCheckedChange:a,...c}=n;return o.jsx(Q0,{scope:n.__scopeMenu,checked:s,children:o.jsx(Pl,{role:"menuitemcheckbox","aria-checked":dl(s)?"mixed":s,...c,ref:r,"data-state":Xu(s),onSelect:ve(c.onSelect,()=>a?.(dl(s)?!0:!s),{checkForDefaultPrevented:!1})})})});H0.displayName=$N;var W0="MenuRadioGroup",[BN,HN]=ys(W0,{value:void 0,onValueChange:()=>{}}),V0=f.forwardRef((n,r)=>{const{value:s,onValueChange:a,...c}=n,d=Et(a);return o.jsx(BN,{scope:n.__scopeMenu,value:s,onValueChange:d,children:o.jsx(qu,{...c,ref:r})})});V0.displayName=W0;var U0="MenuRadioItem",G0=f.forwardRef((n,r)=>{const{value:s,...a}=n,c=HN(U0,n.__scopeMenu),d=s===c.value;return o.jsx(Q0,{scope:n.__scopeMenu,checked:d,children:o.jsx(Pl,{role:"menuitemradio","aria-checked":d,...a,ref:r,"data-state":Xu(d),onSelect:ve(a.onSelect,()=>c.onValueChange?.(s),{checkForDefaultPrevented:!1})})})});G0.displayName=U0;var Ku="MenuItemIndicator",[Q0,WN]=ys(Ku,{checked:!1}),q0=f.forwardRef((n,r)=>{const{__scopeMenu:s,forceMount:a,...c}=n,d=WN(Ku,s);return o.jsx(Dt,{present:a||dl(d.checked)||d.checked===!0,children:o.jsx(Ie.span,{...c,ref:r,"data-state":Xu(d.checked)})})});q0.displayName=Ku;var VN="MenuSeparator",K0=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n;return o.jsx(Ie.div,{role:"separator","aria-orientation":"horizontal",...a,ref:r})});K0.displayName=VN;var UN="MenuArrow",Y0=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n,c=Ci(s);return o.jsx(Hu,{...c,...a,ref:r})});Y0.displayName=UN;var Yu="MenuSub",[GN,X0]=ys(Yu),J0=n=>{const{__scopeMenu:r,children:s,open:a=!1,onOpenChange:c}=n,d=Br(Yu,r),p=Ci(r),[m,h]=f.useState(null),[v,y]=f.useState(null),x=Et(c);return f.useEffect(()=>(d.open===!1&&x(!1),()=>x(!1)),[d.open,x]),o.jsx(Cl,{...p,children:o.jsx(D0,{scope:r,open:a,onOpenChange:x,content:v,onContentChange:y,children:o.jsx(GN,{scope:r,contentId:en(),triggerId:en(),trigger:m,onTriggerChange:h,children:s})})})};J0.displayName=Yu;var Jo="MenuSubTrigger",Z0=f.forwardRef((n,r)=>{const s=Br(Jo,n.__scopeMenu),a=ki(Jo,n.__scopeMenu),c=X0(Jo,n.__scopeMenu),d=Gu(Jo,n.__scopeMenu),p=f.useRef(null),{pointerGraceTimerRef:m,onPointerGraceIntentChange:h}=d,v={__scopeMenu:n.__scopeMenu},y=f.useCallback(()=>{p.current&&window.clearTimeout(p.current),p.current=null},[]);return f.useEffect(()=>y,[y]),f.useEffect(()=>{const x=m.current;return()=>{window.clearTimeout(x),h(null)}},[m,h]),o.jsx(Vu,{asChild:!0,...v,children:o.jsx(B0,{id:c.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":c.contentId,"data-state":nv(s.open),...n,ref:fr(r,c.onTriggerChange),onClick:x=>{n.onClick?.(x),!(n.disabled||x.defaultPrevented)&&(x.currentTarget.focus(),s.open||s.onOpenChange(!0))},onPointerMove:ve(n.onPointerMove,ii(x=>{d.onItemEnter(x),!x.defaultPrevented&&!n.disabled&&!s.open&&!p.current&&(d.onPointerGraceIntentChange(null),p.current=window.setTimeout(()=>{s.onOpenChange(!0),y()},100))})),onPointerLeave:ve(n.onPointerLeave,ii(x=>{y();const b=s.content?.getBoundingClientRect();if(b){const S=s.content?.dataset.side,N=S==="right",C=N?-5:5,k=b[N?"left":"right"],E=b[N?"right":"left"];d.onPointerGraceIntentChange({area:[{x:x.clientX+C,y:x.clientY},{x:k,y:b.top},{x:E,y:b.top},{x:E,y:b.bottom},{x:k,y:b.bottom}],side:S}),window.clearTimeout(m.current),m.current=window.setTimeout(()=>d.onPointerGraceIntentChange(null),300)}else{if(d.onTriggerLeave(x),x.defaultPrevented)return;d.onPointerGraceIntentChange(null)}})),onKeyDown:ve(n.onKeyDown,x=>{const b=d.searchRef.current!=="";n.disabled||b&&x.key===" "||PN[a.dir].includes(x.key)&&(s.onOpenChange(!0),s.content?.focus(),x.preventDefault())})})})});Z0.displayName=Jo;var ev="MenuSubContent",tv=f.forwardRef((n,r)=>{const s=L0(Cn,n.__scopeMenu),{forceMount:a=s.forceMount,...c}=n,d=Br(Cn,n.__scopeMenu),p=ki(Cn,n.__scopeMenu),m=X0(ev,n.__scopeMenu),h=f.useRef(null),v=He(r,h);return o.jsx(oi.Provider,{scope:n.__scopeMenu,children:o.jsx(Dt,{present:a||d.open,children:o.jsx(oi.Slot,{scope:n.__scopeMenu,children:o.jsx(Qu,{id:m.contentId,"aria-labelledby":m.triggerId,...c,ref:v,align:"start",side:p.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:y=>{p.isUsingKeyboardRef.current&&h.current?.focus(),y.preventDefault()},onCloseAutoFocus:y=>y.preventDefault(),onFocusOutside:ve(n.onFocusOutside,y=>{y.target!==m.trigger&&d.onOpenChange(!1)}),onEscapeKeyDown:ve(n.onEscapeKeyDown,y=>{p.onClose(),y.preventDefault()}),onKeyDown:ve(n.onKeyDown,y=>{const x=y.currentTarget.contains(y.target),b=EN[p.dir].includes(y.key);x&&b&&(d.onOpenChange(!1),m.trigger?.focus(),y.preventDefault())})})})})})});tv.displayName=ev;function nv(n){return n?"open":"closed"}function dl(n){return n==="indeterminate"}function Xu(n){return dl(n)?"indeterminate":n?"checked":"unchecked"}function QN(n){const r=document.activeElement;for(const s of n)if(s===r||(s.focus(),document.activeElement!==r))return}function qN(n,r){return n.map((s,a)=>n[(r+a)%n.length])}function KN(n,r,s){const c=r.length>1&&Array.from(r).every(v=>v===r[0])?r[0]:r,d=s?n.indexOf(s):-1;let p=qN(n,Math.max(d,0));c.length===1&&(p=p.filter(v=>v!==s));const h=p.find(v=>v.toLowerCase().startsWith(c.toLowerCase()));return h!==s?h:void 0}function YN(n,r){const{x:s,y:a}=n;let c=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const m=r[d],h=r[p],v=m.x,y=m.y,x=h.x,b=h.y;y>a!=b>a&&s<(x-v)*(a-y)/(b-y)+v&&(c=!c)}return c}function XN(n,r){if(!r)return!1;const s={x:n.clientX,y:n.clientY};return YN(s,r)}function ii(n){return r=>r.pointerType==="mouse"?n(r):void 0}var JN=O0,ZN=Vu,ej=z0,tj=F0,nj=qu,rj=$0,sj=Pl,oj=H0,ij=V0,aj=G0,lj=q0,cj=K0,dj=Y0,uj=J0,pj=Z0,fj=tv,El="DropdownMenu",[mj]=mn(El,[I0]),$t=I0(),[gj,rv]=mj(El),sv=n=>{const{__scopeDropdownMenu:r,children:s,dir:a,open:c,defaultOpen:d,onOpenChange:p,modal:m=!0}=n,h=$t(r),v=f.useRef(null),[y,x]=On({prop:c,defaultProp:d??!1,onChange:p,caller:El});return o.jsx(gj,{scope:r,triggerId:en(),triggerRef:v,contentId:en(),open:y,onOpenChange:x,onOpenToggle:f.useCallback(()=>x(b=>!b),[x]),modal:m,children:o.jsx(JN,{...h,open:y,onOpenChange:x,dir:a,modal:m,children:s})})};sv.displayName=El;var ov="DropdownMenuTrigger",iv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,disabled:a=!1,...c}=n,d=rv(ov,s),p=$t(s);return o.jsx(ZN,{asChild:!0,...p,children:o.jsx(Ie.button,{type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":a?"":void 0,disabled:a,...c,ref:fr(r,d.triggerRef),onPointerDown:ve(n.onPointerDown,m=>{!a&&m.button===0&&m.ctrlKey===!1&&(d.onOpenToggle(),d.open||m.preventDefault())}),onKeyDown:ve(n.onKeyDown,m=>{a||(["Enter"," "].includes(m.key)&&d.onOpenToggle(),m.key==="ArrowDown"&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(m.key)&&m.preventDefault())})})})});iv.displayName=ov;var hj="DropdownMenuPortal",av=n=>{const{__scopeDropdownMenu:r,...s}=n,a=$t(r);return o.jsx(ej,{...a,...s})};av.displayName=hj;var lv="DropdownMenuContent",cv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=rv(lv,s),d=$t(s),p=f.useRef(!1);return o.jsx(tj,{id:c.contentId,"aria-labelledby":c.triggerId,...d,...a,ref:r,onCloseAutoFocus:ve(n.onCloseAutoFocus,m=>{p.current||c.triggerRef.current?.focus(),p.current=!1,m.preventDefault()}),onInteractOutside:ve(n.onInteractOutside,m=>{const h=m.detail.originalEvent,v=h.button===0&&h.ctrlKey===!0,y=h.button===2||v;(!c.modal||y)&&(p.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});cv.displayName=lv;var vj="DropdownMenuGroup",xj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(nj,{...c,...a,ref:r})});xj.displayName=vj;var yj="DropdownMenuLabel",bj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(rj,{...c,...a,ref:r})});bj.displayName=yj;var wj="DropdownMenuItem",dv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(sj,{...c,...a,ref:r})});dv.displayName=wj;var Sj="DropdownMenuCheckboxItem",Cj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(oj,{...c,...a,ref:r})});Cj.displayName=Sj;var kj="DropdownMenuRadioGroup",Nj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(ij,{...c,...a,ref:r})});Nj.displayName=kj;var jj="DropdownMenuRadioItem",Pj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(aj,{...c,...a,ref:r})});Pj.displayName=jj;var Ej="DropdownMenuItemIndicator",Rj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(lj,{...c,...a,ref:r})});Rj.displayName=Ej;var Aj="DropdownMenuSeparator",uv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(cj,{...c,...a,ref:r})});uv.displayName=Aj;var Tj="DropdownMenuArrow",Mj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(dj,{...c,...a,ref:r})});Mj.displayName=Tj;var Ij=n=>{const{__scopeDropdownMenu:r,children:s,open:a,onOpenChange:c,defaultOpen:d}=n,p=$t(r),[m,h]=On({prop:a,defaultProp:d??!1,onChange:c,caller:"DropdownMenuSub"});return o.jsx(uj,{...p,open:m,onOpenChange:h,children:s})},_j="DropdownMenuSubTrigger",pv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(pj,{...c,...a,ref:r})});pv.displayName=_j;var Dj="DropdownMenuSubContent",fv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return o.jsx(fj,{...c,...a,ref:r,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});fv.displayName=Dj;var Oj=sv,Lj=iv,zj=av,Fj=cv,$j=dv,Bj=uv,Hj=Ij,Wj=pv,Vj=fv;function Kn({...n}){return o.jsx(Oj,{"data-slot":"dropdown-menu",...n})}function Yn({...n}){return o.jsx(Lj,{"data-slot":"dropdown-menu-trigger",...n})}function Xn({className:n,sideOffset:r=4,...s}){return o.jsx(zj,{children:o.jsx(Fj,{"data-slot":"dropdown-menu-content",sideOffset:r,className:We("bg-white text-gray-900 dark:bg-gray-900 dark:text-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border-2 border-gray-900 dark:border-white p-1 shadow-md",n),...s})})}function xt({className:n,inset:r,variant:s="default",...a}){return o.jsx($j,{"data-slot":"dropdown-menu-item","data-inset":r,"data-variant":s,className:We("focus:bg-gray-100 dark:focus:bg-gray-800 focus:text-gray-900 dark:focus:text-white data-[variant=destructive]:text-red-500 data-[variant=destructive]:focus:bg-red-50 dark:data-[variant=destructive]:focus:bg-red-900/20 data-[variant=destructive]:focus:text-red-500 [&_svg:not([class*='text-'])]:text-gray-500 relative flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...a})}function Uj({className:n,...r}){return o.jsx(Bj,{"data-slot":"dropdown-menu-separator",className:We("bg-gray-300 dark:bg-gray-700 -mx-1 my-1 h-px",n),...r})}function Gj({...n}){return o.jsx(Hj,{"data-slot":"dropdown-menu-sub",...n})}function Qj({className:n,inset:r,children:s,...a}){return o.jsxs(Wj,{"data-slot":"dropdown-menu-sub-trigger","data-inset":r,className:We("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",n),...a,children:[s,o.jsx(cs,{className:"ml-auto size-4"})]})}function qj({className:n,...r}){return o.jsx(Vj,{"data-slot":"dropdown-menu-sub-content",className:We("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",n),...r})}var Kj=Symbol("radix.slottable");function Yj(n){const r=({children:s})=>o.jsx(o.Fragment,{children:s});return r.displayName=`${n}.Slottable`,r.__radixId=Kj,r}var mv=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Xj="VisuallyHidden",gv=f.forwardRef((n,r)=>o.jsx(Ie.span,{...n,ref:r,style:{...mv,...n.style}}));gv.displayName=Xj;var Jj=gv,[Rl]=mn("Tooltip",[mo]),Al=mo(),hv="TooltipProvider",Zj=700,pu="tooltip.open",[eP,Ju]=Rl(hv),vv=n=>{const{__scopeTooltip:r,delayDuration:s=Zj,skipDelayDuration:a=300,disableHoverableContent:c=!1,children:d}=n,p=f.useRef(!0),m=f.useRef(!1),h=f.useRef(0);return f.useEffect(()=>{const v=h.current;return()=>window.clearTimeout(v)},[]),o.jsx(eP,{scope:r,isOpenDelayedRef:p,delayDuration:s,onOpen:f.useCallback(()=>{window.clearTimeout(h.current),p.current=!1},[]),onClose:f.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>p.current=!0,a)},[a]),isPointerInTransitRef:m,onPointerInTransitChange:f.useCallback(v=>{m.current=v},[]),disableHoverableContent:c,children:d})};vv.displayName=hv;var ai="Tooltip",[tP,Ni]=Rl(ai),xv=n=>{const{__scopeTooltip:r,children:s,open:a,defaultOpen:c,onOpenChange:d,disableHoverableContent:p,delayDuration:m}=n,h=Ju(ai,n.__scopeTooltip),v=Al(r),[y,x]=f.useState(null),b=en(),S=f.useRef(0),N=p??h.disableHoverableContent,C=m??h.delayDuration,k=f.useRef(!1),[E,j]=On({prop:a,defaultProp:c??!1,onChange:z=>{z?(h.onOpen(),document.dispatchEvent(new CustomEvent(pu))):h.onClose(),d?.(z)},caller:ai}),M=f.useMemo(()=>E?k.current?"delayed-open":"instant-open":"closed",[E]),R=f.useCallback(()=>{window.clearTimeout(S.current),S.current=0,k.current=!1,j(!0)},[j]),I=f.useCallback(()=>{window.clearTimeout(S.current),S.current=0,j(!1)},[j]),W=f.useCallback(()=>{window.clearTimeout(S.current),S.current=window.setTimeout(()=>{k.current=!0,j(!0),S.current=0},C)},[C,j]);return f.useEffect(()=>()=>{S.current&&(window.clearTimeout(S.current),S.current=0)},[]),o.jsx(Cl,{...v,children:o.jsx(tP,{scope:r,contentId:b,open:E,stateAttribute:M,trigger:y,onTriggerChange:x,onTriggerEnter:f.useCallback(()=>{h.isOpenDelayedRef.current?W():R()},[h.isOpenDelayedRef,W,R]),onTriggerLeave:f.useCallback(()=>{N?I():(window.clearTimeout(S.current),S.current=0)},[I,N]),onOpen:R,onClose:I,disableHoverableContent:N,children:s})})};xv.displayName=ai;var fu="TooltipTrigger",yv=f.forwardRef((n,r)=>{const{__scopeTooltip:s,...a}=n,c=Ni(fu,s),d=Ju(fu,s),p=Al(s),m=f.useRef(null),h=He(r,m,c.onTriggerChange),v=f.useRef(!1),y=f.useRef(!1),x=f.useCallback(()=>v.current=!1,[]);return f.useEffect(()=>()=>document.removeEventListener("pointerup",x),[x]),o.jsx($u,{asChild:!0,...p,children:o.jsx(Ie.button,{"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute,...a,ref:h,onPointerMove:ve(n.onPointerMove,b=>{b.pointerType!=="touch"&&!y.current&&!d.isPointerInTransitRef.current&&(c.onTriggerEnter(),y.current=!0)}),onPointerLeave:ve(n.onPointerLeave,()=>{c.onTriggerLeave(),y.current=!1}),onPointerDown:ve(n.onPointerDown,()=>{c.open&&c.onClose(),v.current=!0,document.addEventListener("pointerup",x,{once:!0})}),onFocus:ve(n.onFocus,()=>{v.current||c.onOpen()}),onBlur:ve(n.onBlur,c.onClose),onClick:ve(n.onClick,c.onClose)})})});yv.displayName=fu;var Zu="TooltipPortal",[nP,rP]=Rl(Zu,{forceMount:void 0}),bv=n=>{const{__scopeTooltip:r,forceMount:s,children:a,container:c}=n,d=Ni(Zu,r);return o.jsx(nP,{scope:r,forceMount:s,children:o.jsx(Dt,{present:s||d.open,children:o.jsx(bi,{asChild:!0,container:c,children:a})})})};bv.displayName=Zu;var io="TooltipContent",wv=f.forwardRef((n,r)=>{const s=rP(io,n.__scopeTooltip),{forceMount:a=s.forceMount,side:c="top",...d}=n,p=Ni(io,n.__scopeTooltip);return o.jsx(Dt,{present:a||p.open,children:p.disableHoverableContent?o.jsx(Sv,{side:c,...d,ref:r}):o.jsx(sP,{side:c,...d,ref:r})})}),sP=f.forwardRef((n,r)=>{const s=Ni(io,n.__scopeTooltip),a=Ju(io,n.__scopeTooltip),c=f.useRef(null),d=He(r,c),[p,m]=f.useState(null),{trigger:h,onClose:v}=s,y=c.current,{onPointerInTransitChange:x}=a,b=f.useCallback(()=>{m(null),x(!1)},[x]),S=f.useCallback((N,C)=>{const k=N.currentTarget,E={x:N.clientX,y:N.clientY},j=lP(E,k.getBoundingClientRect()),M=cP(E,j),R=dP(C.getBoundingClientRect()),I=pP([...M,...R]);m(I),x(!0)},[x]);return f.useEffect(()=>()=>b(),[b]),f.useEffect(()=>{if(h&&y){const N=k=>S(k,y),C=k=>S(k,h);return h.addEventListener("pointerleave",N),y.addEventListener("pointerleave",C),()=>{h.removeEventListener("pointerleave",N),y.removeEventListener("pointerleave",C)}}},[h,y,S,b]),f.useEffect(()=>{if(p){const N=C=>{const k=C.target,E={x:C.clientX,y:C.clientY},j=h?.contains(k)||y?.contains(k),M=!uP(E,p);j?b():M&&(b(),v())};return document.addEventListener("pointermove",N),()=>document.removeEventListener("pointermove",N)}},[h,y,p,v,b]),o.jsx(Sv,{...n,ref:d})}),[oP,iP]=Rl(ai,{isInside:!1}),aP=Yj("TooltipContent"),Sv=f.forwardRef((n,r)=>{const{__scopeTooltip:s,children:a,"aria-label":c,onEscapeKeyDown:d,onPointerDownOutside:p,...m}=n,h=Ni(io,s),v=Al(s),{onClose:y}=h;return f.useEffect(()=>(document.addEventListener(pu,y),()=>document.removeEventListener(pu,y)),[y]),f.useEffect(()=>{if(h.trigger){const x=b=>{b.target?.contains(h.trigger)&&y()};return window.addEventListener("scroll",x,{capture:!0}),()=>window.removeEventListener("scroll",x,{capture:!0})}},[h.trigger,y]),o.jsx(xi,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:x=>x.preventDefault(),onDismiss:y,children:o.jsxs(Bu,{"data-state":h.stateAttribute,...v,...m,ref:r,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[o.jsx(aP,{children:a}),o.jsx(oP,{scope:s,isInside:!0,children:o.jsx(Jj,{id:h.contentId,role:"tooltip",children:c||a})})]})})});wv.displayName=io;var Cv="TooltipArrow",kv=f.forwardRef((n,r)=>{const{__scopeTooltip:s,...a}=n,c=Al(s);return iP(Cv,s).isInside?null:o.jsx(Hu,{...c,...a,ref:r})});kv.displayName=Cv;function lP(n,r){const s=Math.abs(r.top-n.y),a=Math.abs(r.bottom-n.y),c=Math.abs(r.right-n.x),d=Math.abs(r.left-n.x);switch(Math.min(s,a,c,d)){case d:return"left";case c:return"right";case s:return"top";case a:return"bottom";default:throw new Error("unreachable")}}function cP(n,r,s=5){const a=[];switch(r){case"top":a.push({x:n.x-s,y:n.y+s},{x:n.x+s,y:n.y+s});break;case"bottom":a.push({x:n.x-s,y:n.y-s},{x:n.x+s,y:n.y-s});break;case"left":a.push({x:n.x+s,y:n.y-s},{x:n.x+s,y:n.y+s});break;case"right":a.push({x:n.x-s,y:n.y-s},{x:n.x-s,y:n.y+s});break}return a}function dP(n){const{top:r,right:s,bottom:a,left:c}=n;return[{x:c,y:r},{x:s,y:r},{x:s,y:a},{x:c,y:a}]}function uP(n,r){const{x:s,y:a}=n;let c=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const m=r[d],h=r[p],v=m.x,y=m.y,x=h.x,b=h.y;y>a!=b>a&&s<(x-v)*(a-y)/(b-y)+v&&(c=!c)}return c}function pP(n){const r=n.slice();return r.sort((s,a)=>s.x<a.x?-1:s.x>a.x?1:s.y<a.y?-1:s.y>a.y?1:0),fP(r)}function fP(n){if(n.length<=1)return n.slice();const r=[];for(let a=0;a<n.length;a++){const c=n[a];for(;r.length>=2;){const d=r[r.length-1],p=r[r.length-2];if((d.x-p.x)*(c.y-p.y)>=(d.y-p.y)*(c.x-p.x))r.pop();else break}r.push(c)}r.pop();const s=[];for(let a=n.length-1;a>=0;a--){const c=n[a];for(;s.length>=2;){const d=s[s.length-1],p=s[s.length-2];if((d.x-p.x)*(c.y-p.y)>=(d.y-p.y)*(c.x-p.x))s.pop();else break}s.push(c)}return s.pop(),r.length===1&&s.length===1&&r[0].x===s[0].x&&r[0].y===s[0].y?r:r.concat(s)}var mP=vv,gP=xv,hP=yv,vP=bv,xP=wv,yP=kv;function Ct({delayDuration:n=0,...r}){return o.jsx(mP,{"data-slot":"tooltip-provider",delayDuration:n,...r})}function tt({...n}){return o.jsx(Ct,{children:o.jsx(gP,{"data-slot":"tooltip",...n})})}function nt({...n}){return o.jsx(hP,{"data-slot":"tooltip-trigger",...n})}function rt({className:n,sideOffset:r=0,children:s,...a}){return o.jsx(vP,{children:o.jsxs(xP,{"data-slot":"tooltip-content",sideOffset:r,className:We("bg-gray-900 !text-white dark:bg-white dark:!text-gray-900 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-lg px-4 py-2 text-sm text-balance shadow-md [&_p]:text-white",n),...a,children:[s,o.jsx(yP,{className:"bg-gray-900 fill-gray-900 dark:bg-white dark:fill-white z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}var Tl="Collapsible",[bP]=mn(Tl),[wP,ep]=bP(Tl),Nv=f.forwardRef((n,r)=>{const{__scopeCollapsible:s,open:a,defaultOpen:c,disabled:d,onOpenChange:p,...m}=n,[h,v]=On({prop:a,defaultProp:c??!1,onChange:p,caller:Tl});return o.jsx(wP,{scope:s,disabled:d,contentId:en(),open:h,onOpenToggle:f.useCallback(()=>v(y=>!y),[v]),children:o.jsx(Ie.div,{"data-state":np(h),"data-disabled":d?"":void 0,...m,ref:r})})});Nv.displayName=Tl;var jv="CollapsibleTrigger",Pv=f.forwardRef((n,r)=>{const{__scopeCollapsible:s,...a}=n,c=ep(jv,s);return o.jsx(Ie.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":np(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...a,ref:r,onClick:ve(n.onClick,c.onOpenToggle)})});Pv.displayName=jv;var tp="CollapsibleContent",Ev=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=ep(tp,n.__scopeCollapsible);return o.jsx(Dt,{present:s||c.open,children:({present:d})=>o.jsx(SP,{...a,ref:r,present:d})})});Ev.displayName=tp;var SP=f.forwardRef((n,r)=>{const{__scopeCollapsible:s,present:a,children:c,...d}=n,p=ep(tp,s),[m,h]=f.useState(a),v=f.useRef(null),y=He(r,v),x=f.useRef(0),b=x.current,S=f.useRef(0),N=S.current,C=p.open||m,k=f.useRef(C),E=f.useRef(void 0);return f.useEffect(()=>{const j=requestAnimationFrame(()=>k.current=!1);return()=>cancelAnimationFrame(j)},[]),Rt(()=>{const j=v.current;if(j){E.current=E.current||{transitionDuration:j.style.transitionDuration,animationName:j.style.animationName},j.style.transitionDuration="0s",j.style.animationName="none";const M=j.getBoundingClientRect();x.current=M.height,S.current=M.width,k.current||(j.style.transitionDuration=E.current.transitionDuration,j.style.animationName=E.current.animationName),h(a)}},[p.open,a]),o.jsx(Ie.div,{"data-state":np(p.open),"data-disabled":p.disabled?"":void 0,id:p.contentId,hidden:!C,...d,ref:y,style:{"--radix-collapsible-content-height":b?`${b}px`:void 0,"--radix-collapsible-content-width":N?`${N}px`:void 0,...n.style},children:C&&c})});function np(n){return n?"open":"closed"}var CP=Nv;function Ud({...n}){return o.jsx(CP,{"data-slot":"collapsible",...n})}function Gd({...n}){return o.jsx(Pv,{"data-slot":"collapsible-trigger",...n})}function Qd({...n}){return o.jsx(Ev,{"data-slot":"collapsible-content",...n})}function kP(n){const r=NP(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(PP);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function NP(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=RP(c),m=EP(d,c.props);return c.type!==f.Fragment&&(m.ref=a?fr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var jP=Symbol("radix.slottable");function PP(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===jP}function EP(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function RP(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var Ml="Dialog",[Rv]=mn(Ml),[AP,Fn]=Rv(Ml),Av=n=>{const{__scopeDialog:r,children:s,open:a,defaultOpen:c,onOpenChange:d,modal:p=!0}=n,m=f.useRef(null),h=f.useRef(null),[v,y]=On({prop:a,defaultProp:c??!1,onChange:d,caller:Ml});return o.jsx(AP,{scope:r,triggerRef:m,contentRef:h,contentId:en(),titleId:en(),descriptionId:en(),open:v,onOpenChange:y,onOpenToggle:f.useCallback(()=>y(x=>!x),[y]),modal:p,children:s})};Av.displayName=Ml;var Tv="DialogTrigger",TP=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=Fn(Tv,s),d=He(r,c.triggerRef);return o.jsx(Ie.button,{type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":op(c.open),...a,ref:d,onClick:ve(n.onClick,c.onOpenToggle)})});TP.displayName=Tv;var rp="DialogPortal",[MP,Mv]=Rv(rp,{forceMount:void 0}),Iv=n=>{const{__scopeDialog:r,forceMount:s,children:a,container:c}=n,d=Fn(rp,r);return o.jsx(MP,{scope:r,forceMount:s,children:f.Children.map(a,p=>o.jsx(Dt,{present:s||d.open,children:o.jsx(bi,{asChild:!0,container:c,children:p})}))})};Iv.displayName=rp;var ul="DialogOverlay",_v=f.forwardRef((n,r)=>{const s=Mv(ul,n.__scopeDialog),{forceMount:a=s.forceMount,...c}=n,d=Fn(ul,n.__scopeDialog);return d.modal?o.jsx(Dt,{present:a||d.open,children:o.jsx(_P,{...c,ref:r})}):null});_v.displayName=ul;var IP=kP("DialogOverlay.RemoveScroll"),_P=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=Fn(ul,s);return o.jsx(jl,{as:IP,allowPinchZoom:!0,shards:[c.contentRef],children:o.jsx(Ie.div,{"data-state":op(c.open),...a,ref:r,style:{pointerEvents:"auto",...a.style}})})}),gs="DialogContent",Dv=f.forwardRef((n,r)=>{const s=Mv(gs,n.__scopeDialog),{forceMount:a=s.forceMount,...c}=n,d=Fn(gs,n.__scopeDialog);return o.jsx(Dt,{present:a||d.open,children:d.modal?o.jsx(DP,{...c,ref:r}):o.jsx(OP,{...c,ref:r})})});Dv.displayName=gs;var DP=f.forwardRef((n,r)=>{const s=Fn(gs,n.__scopeDialog),a=f.useRef(null),c=He(r,s.contentRef,a);return f.useEffect(()=>{const d=a.current;if(d)return Wu(d)},[]),o.jsx(Ov,{...n,ref:c,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ve(n.onCloseAutoFocus,d=>{d.preventDefault(),s.triggerRef.current?.focus()}),onPointerDownOutside:ve(n.onPointerDownOutside,d=>{const p=d.detail.originalEvent,m=p.button===0&&p.ctrlKey===!0;(p.button===2||m)&&d.preventDefault()}),onFocusOutside:ve(n.onFocusOutside,d=>d.preventDefault())})}),OP=f.forwardRef((n,r)=>{const s=Fn(gs,n.__scopeDialog),a=f.useRef(!1),c=f.useRef(!1);return o.jsx(Ov,{...n,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:d=>{n.onCloseAutoFocus?.(d),d.defaultPrevented||(a.current||s.triggerRef.current?.focus(),d.preventDefault()),a.current=!1,c.current=!1},onInteractOutside:d=>{n.onInteractOutside?.(d),d.defaultPrevented||(a.current=!0,d.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const p=d.target;s.triggerRef.current?.contains(p)&&d.preventDefault(),d.detail.originalEvent.type==="focusin"&&c.current&&d.preventDefault()}})}),Ov=f.forwardRef((n,r)=>{const{__scopeDialog:s,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:d,...p}=n,m=Fn(gs,s),h=f.useRef(null),v=He(r,h);return Au(),o.jsxs(o.Fragment,{children:[o.jsx(xl,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:c,onUnmountAutoFocus:d,children:o.jsx(xi,{role:"dialog",id:m.contentId,"aria-describedby":m.descriptionId,"aria-labelledby":m.titleId,"data-state":op(m.open),...p,ref:v,onDismiss:()=>m.onOpenChange(!1)})}),o.jsxs(o.Fragment,{children:[o.jsx(LP,{titleId:m.titleId}),o.jsx(FP,{contentRef:h,descriptionId:m.descriptionId})]})]})}),sp="DialogTitle",Lv=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=Fn(sp,s);return o.jsx(Ie.h2,{id:c.titleId,...a,ref:r})});Lv.displayName=sp;var zv="DialogDescription",Fv=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=Fn(zv,s);return o.jsx(Ie.p,{id:c.descriptionId,...a,ref:r})});Fv.displayName=zv;var $v="DialogClose",Bv=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=Fn($v,s);return o.jsx(Ie.button,{type:"button",...a,ref:r,onClick:ve(n.onClick,()=>c.onOpenChange(!1))})});Bv.displayName=$v;function op(n){return n?"open":"closed"}var Hv="DialogTitleWarning",[xR,Wv]=gS(Hv,{contentName:gs,titleName:sp,docsSlug:"dialog"}),LP=({titleId:n})=>{const r=Wv(Hv),s=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return f.useEffect(()=>{n&&(document.getElementById(n)||console.error(s))},[s,n]),null},zP="DialogDescriptionWarning",FP=({contentRef:n,descriptionId:r})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Wv(zP).contentName}}.`;return f.useEffect(()=>{const c=n.current?.getAttribute("aria-describedby");r&&c&&(document.getElementById(r)||console.warn(a))},[a,n,r]),null},$P=Av,BP=Iv,Vv=_v,HP=Dv,WP=Lv,VP=Fv,UP=Bv;function ji({...n}){return o.jsx($P,{"data-slot":"dialog",...n})}function GP({...n}){return o.jsx(BP,{"data-slot":"dialog-portal",...n})}const Uv=f.forwardRef(({className:n,...r},s)=>o.jsx(Vv,{ref:s,"data-slot":"dialog-overlay",className:We("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...r}));Uv.displayName=Vv.displayName;function Pi({className:n,children:r,...s}){return o.jsxs(GP,{"data-slot":"dialog-portal",children:[o.jsx(Uv,{}),o.jsxs(HP,{"data-slot":"dialog-content",className:We("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",n),...s,children:[r,o.jsxs(UP,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[o.jsx(ro,{}),o.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function ao({className:n,...r}){return o.jsx("div",{"data-slot":"dialog-header",className:We("flex flex-col gap-2 text-center sm:text-left",n),...r})}function Gv({className:n,...r}){return o.jsx("div",{"data-slot":"dialog-footer",className:We("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",n),...r})}function lo({className:n,...r}){return o.jsx(WP,{"data-slot":"dialog-title",className:We("text-lg leading-none font-semibold",n),...r})}function mu({className:n,...r}){return o.jsx(VP,{"data-slot":"dialog-description",className:We("text-muted-foreground text-sm",n),...r})}const tn=f.forwardRef(({className:n,type:r,...s},a)=>o.jsx("input",{type:r,"data-slot":"input",className:We("flex h-10 w-full min-w-0 rounded-lg border border-gray-900 bg-white px-3 py-2 text-base text-gray-900 transition-colors placeholder:text-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-semibold dark:border-white dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2","aria-invalid:border-red-500 aria-invalid:ring-red-500/20",n),ref:a,...s}));tn.displayName="Input";const QP=[{id:"marketing-software-aor",title:"Marketing Software AOR"},{id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting"},{id:"pq-response-mnd",title:"PQ Response - MND Housing"},{id:"feature-overview",title:"Feature Overview"},{id:"customer-support",title:"Customer Support"},{id:"feedback-collection",title:"Feedback Collection"},{id:"procurement-rfq",title:"Procurement RFQ to AOR"}];function Ug({open:n,onOpenChange:r,chats:s,onSelectChat:a,onSelectSimulation:c}){const[d,p]=f.useState(""),m=s.filter(x=>x.title.toLowerCase().includes(d.toLowerCase())),h=QP.filter(x=>x.title.toLowerCase().includes(d.toLowerCase())),v=x=>{a(x),r(!1),p("")},y=x=>{c(x),r(!1),p("")};return o.jsx(ji,{open:n,onOpenChange:r,children:o.jsxs(Pi,{className:"sm:max-w-lg bg-white border-2 border-gray-900",children:[o.jsx(ao,{children:o.jsx(lo,{className:"text-gray-900",children:"Search Chats"})}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"relative",children:[o.jsx(vh,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),o.jsx(tn,{placeholder:"Search chats...",value:d,onChange:x=>p(x.target.value),className:"pl-10 bg-white border-gray-300",autoFocus:!0})]}),o.jsxs("div",{className:"max-h-[300px] overflow-y-auto space-y-1",children:[h.map(x=>o.jsxs("button",{onClick:()=>y(x.id),className:"w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left",children:[o.jsx(ds,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-gray-900 truncate",children:x.title})]},x.id)),m.map(x=>o.jsxs("button",{onClick:()=>v(x.id),className:"w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left",children:[o.jsx(ds,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-gray-900 truncate",children:x.title})]},x.id)),m.length===0&&h.length===0&&d&&o.jsx("div",{className:"text-center py-8 text-gray-500",children:o.jsxs("p",{className:"text-sm",children:['No chats found matching "',d,'"']})})]})]})]})})}var qP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],KP=qP.reduce((n,r)=>{const s=ku(`Primitive.${r}`),a=f.forwardRef((c,d)=>{const{asChild:p,...m}=c,h=p?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(h,{...m,ref:d})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{}),YP="Label",Qv=f.forwardRef((n,r)=>o.jsx(KP.label,{...n,ref:r,onMouseDown:s=>{s.target.closest("button, input, select, textarea")||(n.onMouseDown?.(s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));Qv.displayName=YP;var XP=Qv;function _t({className:n,...r}){return o.jsx(XP,{"data-slot":"label",className:We("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...r})}function JP({open:n,onOpenChange:r,onCreateFolder:s}){const[a,c]=f.useState(""),d=m=>{m.preventDefault(),a.trim()&&(s(a.trim()),c(""),r(!1))},p=m=>{m||c(""),r(m)};return o.jsx(ji,{open:n,onOpenChange:p,children:o.jsxs(Pi,{className:"sm:max-w-md bg-white border-2 border-gray-900",children:[o.jsx(ao,{children:o.jsx(lo,{className:"text-gray-900",children:"Create New Folder"})}),o.jsxs("form",{onSubmit:d,children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{htmlFor:"folder-name",className:"text-gray-700",children:"Folder Name"}),o.jsx(tn,{id:"folder-name",placeholder:"Enter folder name...",value:a,onChange:m=>c(m.target.value),className:"bg-white border-gray-300",autoFocus:!0})]}),o.jsxs("div",{className:"flex items-start gap-2 p-3 bg-gray-100 rounded-lg border border-gray-300",children:[o.jsx(gh,{className:"w-4 h-4 text-gray-700 mt-0.5 flex-shrink-0"}),o.jsx("p",{className:"text-xs text-gray-900",children:"Chats within this folder will only reference files, custom instructions, and memories from within this folder by default. You can change this in folder settings after creation."})]})]}),o.jsxs(Gv,{className:"mt-6",children:[o.jsx(Fe,{type:"button",variant:"outline",onClick:()=>p(!1),children:"Cancel"}),o.jsx(Fe,{type:"submit",disabled:!a.trim(),children:"Create Folder"})]})]})]})})}const $e={emailDrafter:{id:"email-drafter",name:"Email Drafter",description:"Draft professional emails with customizable tone and structure.",owner:"Jennifer Lee",tags:["Communication","Email"],icon:y2,uses:"13.5k",classification:"R/SN",type:"Community",assistantType:"email-drafter"},queryGov:{id:"query-gov",name:"Query@Gov",description:"Ask questions and get answers.",owner:"Ministry of Manpower (MOM)",tags:["Q&A"],icon:Sn,uses:"15.2k",classification:"C(CE)/SN",type:"Developer",assistantType:"query"},transcribe:{id:"transcribe",name:"Transcribe Workspace",description:"Creating meeting minutes from your audio file.",owner:"AI Assistant Team",tags:["Meeting","Audio"],icon:S2,uses:"8.3k",classification:"R/SN",type:"Official",assistantType:"transcribe"},deepResearch:{id:"deep-research",name:"Deep Research Assistant",description:"Conduct comprehensive research across multiple sources and synthesize findings.",owner:"AI Assistant Team",tags:["Research","Analysis"],icon:k2,uses:"9.8k",classification:"C(CE)/SN",type:"Official",assistantType:"deep-research-ai"},powerpoint:{id:"powerpoint",name:"Powerpoint Slide Image Generator",description:"Create icons and pictures for your powerpoint slides.",owner:"Suresh",tags:["Slides","Design"],icon:_2,uses:"12.7k",classification:"R/SN",type:"Community",assistantType:"powerpoint"},parliamentaryDrafter:{id:"parliamentary-drafter",name:"Parliamentary Question Drafter",description:"Prepare PQ responses and talking points for Ministers.",owner:"AI Assistant Team",tags:["Parliamentary","Writing"],icon:Sn,uses:"11.4k",classification:"C(CE)/SH",type:"Official",assistantType:"parliamentary"},interAgencyMemo:{id:"inter-agency-memo",name:"Inter-Agency Memo Writer",description:"Draft correspondence for whole-of-government initiatives.",owner:"AI Assistant Team",tags:["Communication","Inter-Agency"],icon:lg,uses:"10.3k",classification:"C(CE)/SN",type:"Official",assistantType:"memo"},socialMediaCampaign:{id:"social-media-campaign",name:"Social Media Campaign Planner",description:"Plan and optimize social media campaigns for government communications.",owner:"AI Assistant Team",tags:["Marketing","Social Media"],icon:lg,uses:"6.2k",classification:"R/SN",type:"Official",assistantType:"social-media-campaign"},contentCalendar:{id:"content-calendar",name:"Content Calendar Manager",description:"Organize and schedule content across multiple channels.",owner:"Communications Team",tags:["Marketing","Planning"],icon:qa,uses:"5.8k",classification:"R/SN",type:"Official",assistantType:"content-calendar"},brandGuidelines:{id:"brand-guidelines",name:"Brand Guidelines Assistant",description:"Ensure consistency with government branding and messaging standards.",owner:"AI Assistant Team",tags:["Marketing","Branding"],icon:Vw,uses:"4.9k",classification:"R/SN",type:"Official",assistantType:"brand-guidelines"},marketResearch:{id:"market-research",name:"Market Research Analyzer",description:"Analyze market trends and public sentiment for strategic planning.",owner:"Strategic Planning Unit",tags:["Marketing","Research"],icon:X2,uses:"7.1k",classification:"R/SN",type:"Official",assistantType:"market-research"},workdayShortlister:{id:"workday-shortlister",name:"HR Recruitment Assistant",description:"Analyzes multiple candidate profiles from Workday against job requirements to identify and shortlist the best-fit candidates for open positions.",owner:"AI Assistant Team",tags:["HR","Recruitment"],icon:nu,uses:"8.4k",classification:"C(CE)/SN",type:"Official",assistantType:"workday-shortlister"},interviewQuestions:{id:"interview-questions",name:"Interview Question Generator",description:"Generate relevant interview questions based on job requirements.",owner:"Human Resources Division",tags:["HR","Recruitment"],icon:Sn,uses:"6.7k",classification:"R/SN",type:"Official",assistantType:"interview-questions"},onboardingGuide:{id:"onboarding-guide",name:"Employee Onboarding Guide",description:"Create personalized onboarding plans for new hires.",owner:"People Operations",tags:["HR","Onboarding"],icon:rg,uses:"5.3k",classification:"R/SN",type:"Official",assistantType:"onboarding-guide"},performanceReview:{id:"performance-review",name:"Performance Review Assistant",description:"Draft performance reviews and development plans for team members.",owner:"AI Assistant Team",tags:["HR","Performance"],icon:qa,uses:"7.9k",classification:"R/SN",type:"Official",assistantType:"performance-review"},budgetPlanning:{id:"budget-planning",name:"Budget Planning Assistant",description:"Calculate budget allocations and prepare financial reports.",owner:"Ministry of Digital Development and Information (MDDI)",tags:["Finance","Budget"],icon:qa,uses:"7.9k",classification:"C(CE)/SN",type:"Developer",assistantType:"budget"},parliamentaryQA:{id:"parliamentary-qa",name:"Parliamentary Question Assistant",description:"Helps draft responses to parliamentary questions with proper formatting, research from official sources, and talking points for Ministers.",owner:"AI Assistant Team",tags:["Parliamentary","Research"],icon:rg,uses:"7.3k",classification:"C(CE)/SN",type:"Official",assistantType:"parliamentary-question"},policyBrief:{id:"policy-brief",name:"Policy Brief Writer",description:"Draft policy papers and cabinet memos with proper structure.",owner:"AI Assistant Team",tags:["Policy","Writing"],icon:Sn,uses:"6.8k",classification:"C(CE)/SH",type:"Official",assistantType:"policy"},procurementHelper:{id:"procurement-helper",name:"Procurement Document Helper",description:"Generate tender documents and evaluation matrices.",owner:"Priya Muthu",tags:["Procurement","Documents"],icon:Aw,uses:"5.6k",classification:"R/SN",type:"Community",assistantType:"procurement"},correctThyEnglish:{id:"correct-thy-english",name:"Correct Thy English",description:"Review and improve grammar, spelling, and writing style in your documents.",owner:"Language Team",tags:["Writing","Grammar"],icon:ds,uses:"9.2k",classification:"R/SN",type:"Community",assistantType:"grammar-checker"},surveyAnalysis:{id:"survey-analysis",name:"Survey Results Analysis",description:"Analyze survey data and generate insights with visualizations.",owner:"Data Analytics Team",tags:["Analytics","Survey"],icon:Dw,uses:"6.5k",classification:"R/SN",type:"Official",assistantType:"survey-analysis"},talkingPointGenerator:{id:"talking-point-generator",name:"Talking Point Generator",description:"Create key talking points and messaging for presentations and meetings.",owner:"Communications Division",tags:["Communication","Meeting"],icon:v2,uses:"8.7k",classification:"R/SN",type:"Official",assistantType:"talking-points"},meetingAgenda:{id:"meeting-agenda",name:"Meeting Agenda Builder",description:"Structure and organize meeting agendas with time allocations.",owner:"AI Assistant Team",tags:["Meeting","Planning"],icon:Mw,uses:"7.4k",classification:"R/SN",type:"Official",assistantType:"meeting-agenda"},reportWriter:{id:"report-writer",name:"Report Writer",description:"Draft comprehensive reports with proper structure and formatting.",owner:"Documentation Team",tags:["Writing","Reports"],icon:uh,uses:"10.1k",classification:"R/SN",type:"Official",assistantType:"report-writer"},pressRelease:{id:"press-release",name:"Press Release Drafter",description:"Create press releases and media statements for public announcements.",owner:"Media Relations",tags:["Communication","Media"],icon:j2,uses:"5.9k",classification:"R/SN",type:"Official",assistantType:"press-release"},trainingMaterial:{id:"training-material",name:"Training Material Creator",description:"Develop training materials and workshop content for teams.",owner:"Learning & Development",tags:["Training","Education"],icon:d2,uses:"6.3k",classification:"R/SN",type:"Official",assistantType:"training-material"},legalReview:{id:"legal-review",name:"Legal Review Assistant",description:"Review documents for legal compliance and flag potential issues.",owner:"Legal Department",tags:["Legal","Compliance"],icon:z2,uses:"4.7k",classification:"C(CE)/SN",type:"Official",assistantType:"legal-review"},translationHelper:{id:"translation-helper",name:"Translation Helper",description:"Translate documents between English and other official languages.",owner:"AI Assistant Team",tags:["Translation","Language"],icon:mh,uses:"8.1k",classification:"R/SN",type:"Official",assistantType:"translation"},interviewAssistant:{id:"interview-assistant",name:"Interview Assistant",description:"Prepare for interviews with practice questions and feedback.",owner:"HR Development",tags:["HR","Interview"],icon:nu,uses:"7.6k",classification:"R/SN",type:"Community",assistantType:"interview-assistant"}},li=[$e.emailDrafter,$e.queryGov,$e.transcribe],ci=[$e.queryGov,$e.emailDrafter,$e.powerpoint,$e.parliamentaryDrafter,$e.interAgencyMemo,$e.deepResearch,$e.correctThyEnglish,$e.surveyAnalysis,$e.talkingPointGenerator,$e.meetingAgenda,$e.reportWriter,$e.pressRelease,$e.trainingMaterial,$e.legalReview,$e.translationHelper,$e.interviewAssistant],di={marketing:[$e.socialMediaCampaign,$e.contentCalendar,$e.brandGuidelines,$e.marketResearch],hr:[$e.workdayShortlister,$e.interviewQuestions,$e.onboardingGuide,$e.performanceReview],"human resources":[$e.workdayShortlister,$e.interviewQuestions,$e.onboardingGuide,$e.performanceReview],policy:[$e.parliamentaryQA,$e.policyBrief,$e.interAgencyMemo],"project manager":[$e.budgetPlanning,$e.policyBrief,$e.procurementHelper],default:[$e.budgetPlanning,$e.policyBrief,$e.procurementHelper]};function ZP({isOpen:n,onClose:r,chats:s,activeChatId:a,onSelectChat:c,onNewChat:d,onNewCCESNChat:p,onNewSHChat:m,onDeleteChat:h,onPinChat:v,onRenameChat:y,colorTheme:x,fontStyle:b,onColorThemeChange:S,onFontStyleChange:N,onSettingsOpen:C,mode:k,onModeChange:E,activeView:j,onExploreClick:M,onStudioClick:R,onHomeClick:I,onViewChange:W,userProfile:z,onSignOut:V,onSelectSimulation:ne,folders:te=[],onCreateFolder:fe,onSelectFolder:ae,onStartAssistantChat:he,onAddChatToFolder:me,searchModalOpen:ge=!1,onSearchModalChange:J,onWalkthroughStart:Q,viewedSimulations:_=[],bookmarkedAssistants:B=[]}){const[q,A]=f.useState(!0),[U,H]=f.useState(!1),[G,re]=f.useState(!1),[X,O]=f.useState(!1),[K,ue]=f.useState(null),[pe,Re]=f.useState(null),[Oe,Y]=f.useState(null),[je,Qe]=f.useState(""),mt=Object.values(di).flat(),At=[...ci,...li,...mt],st=Array.from(new Map(At.map(oe=>[oe.id,oe])).values()),nn=B.length>0?B.map(oe=>st.find(Ke=>Ke.id===oe)).filter(oe=>oe!==void 0):st.filter(oe=>oe.assistantType==="parliamentary-question"||oe.assistantType==="workday-shortlister"),Bt=(oe,Ke)=>{oe.dataTransfer.setData("chatId",Ke),oe.dataTransfer.effectAllowed="move"},Je=(oe,Ke)=>{oe.preventDefault(),oe.dataTransfer.dropEffect="move",ue(Ke)},rn=()=>{ue(null)},Tt=(oe,Ke)=>{oe.preventDefault();const et=oe.dataTransfer.getData("chatId");et&&me&&me(et,Ke),ue(null)},$n=({label:oe,isOpen:Ke,sectionId:et,showInfo:Ye,infoText:Nn})=>{const Ht=pe===et;return o.jsxs("div",{className:"flex items-center gap-1.5 w-full px-2 py-1.5 rounded-lg transition-colors cursor-pointer",onMouseEnter:()=>Re(et),onMouseLeave:()=>Re(null),children:[o.jsx("span",{className:`text-xs font-semibold uppercase tracking-wide transition-colors ${Ht?"text-gray-700":"text-gray-500"}`,children:oe}),Ye&&o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("div",{className:"cursor-help text-gray-400 hover:text-gray-600",onClick:jn=>jn.stopPropagation(),children:o.jsx(gh,{className:"w-3 h-3"})})}),o.jsx(rt,{side:"right",children:o.jsx("p",{children:Nn})})]})}),Ke?o.jsx(ls,{className:`w-3 h-3 flex-shrink-0 transition-opacity ${Ht?"opacity-100 text-gray-800":"opacity-0"}`}):o.jsx(cs,{className:`w-3 h-3 flex-shrink-0 transition-colors ${Ht?"text-gray-800":"text-gray-500"}`})]})};return n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex flex-col h-screen w-[280px] border-r border-gray-300 bg-gray-100 flex-shrink-0",children:[o.jsxs("div",{className:"px-4 py-3 flex items-center justify-between",children:[o.jsx("h2",{className:"text-lg font-bold text-gray-900",children:"AI Assistant Desk (MVP)"}),o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:r,className:"p-1 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700",children:o.jsx(ig,{className:"w-5 h-5"})})}),o.jsx(rt,{side:"right",children:o.jsx("p",{children:"Collapse sidebar"})})]})})]}),o.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:o.jsx(MS,{className:"h-full",children:o.jsx("div",{className:"px-3 py-2",children:k==="desk"?o.jsxs(o.Fragment,{children:[o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsxs(Fe,{"data-tour":"new-chat",className:"w-full justify-start gap-2 px-2 h-9 text-sm group",variant:"ghost",onClick:d,children:[o.jsx(Js,{className:"w-4 h-4"}),o.jsx("span",{className:"flex-1 text-left",children:"New Chat"}),o.jsx("span",{className:"text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity",children:"⇧⌘O"})]})}),o.jsx(rt,{side:"right",children:o.jsx("p",{children:"Start a new chat (⇧⌘O)"})})]})}),o.jsxs(Ud,{open:U,onOpenChange:H,className:"mt-3","data-tour":"custom-assistants",children:[o.jsx(Gd,{className:"w-full",children:o.jsx($n,{label:"Custom Assistants",isOpen:U,sectionId:"assistants"})}),o.jsx(Qd,{children:o.jsxs("div",{className:"space-y-0 mt-0.5",children:[nn.map(oe=>{const Ke=oe.icon;return o.jsxs("button",{onClick:()=>he?.(oe.name,oe.assistantType),className:"w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-normal hover:bg-gray-200 text-left",children:[o.jsx(Ke,{className:"w-4 h-4 text-gray-500"}),o.jsx("span",{className:"truncate",children:oe.name})]},oe.id)}),o.jsxs("button",{onClick:M,className:"w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-semibold hover:bg-gray-200 text-left",children:[o.jsx(Xw,{className:"w-4 h-4 text-gray-500"}),o.jsx("span",{children:"Explore Assistants"})]})]})})]}),o.jsxs(Ud,{open:G,onOpenChange:re,className:"mt-2","data-tour":"folders",children:[o.jsx(Gd,{className:"w-full",children:o.jsx($n,{label:"Folders",isOpen:G,sectionId:"folders"})}),o.jsx(Qd,{children:o.jsxs("div",{className:"space-y-0 mt-0.5",children:[o.jsxs("button",{onClick:()=>O(!0),className:"w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-semibold hover:bg-gray-200 text-left text-gray-700",children:[o.jsx(fh,{className:"w-4 h-4"}),o.jsx("span",{children:"New Folder"})]}),te.map(oe=>o.jsxs("button",{onClick:()=>ae?.(oe.id),onDragOver:Ke=>Je(Ke,oe.id),onDragLeave:rn,onDrop:Ke=>Tt(Ke,oe.id),className:`w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-normal hover:bg-gray-200 text-left ${K===oe.id?"bg-gray-300 border-2 border-gray-900 border-dashed":""}`,children:[o.jsx(Zd,{className:"w-4 h-4 text-gray-500"}),o.jsx("span",{className:"truncate flex-1",children:oe.name}),o.jsx("span",{className:"text-xs text-gray-400",children:oe.chatIds.length})]},oe.id))]})})]}),o.jsxs(Ud,{open:q,onOpenChange:A,className:"mt-2","data-tour":"recent-chats",children:[o.jsx(Gd,{className:"w-full",children:o.jsx($n,{label:"Recent Chats",isOpen:q,sectionId:"recent",showInfo:!0,infoText:"Chats are cleared after 90 days. Drag to folders to organize."})}),o.jsx(Qd,{children:o.jsxs("div",{className:"space-y-0 mt-0.5",children:[[{id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting",classification:"rsn"},{id:"pq-response-mnd",title:"PQ Response - MND Housing",classification:"rsn"},{id:"canvas-demo",title:"Canvas Generation Demo",classification:"rsn"}].filter(oe=>_.includes(oe.id)).map(oe=>{const Ke=oe.title.length>24?oe.title.substring(0,24)+"...":oe.title;return o.jsxs("div",{className:`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${a===`sim-${oe.id}`?"bg-gray-200":"hover:bg-gray-200"}`,onClick:()=>ne?.(oe.id),title:oe.title,children:[o.jsx("span",{className:"flex-1 truncate text-gray-900",children:Ke}),o.jsxs(Kn,{children:[o.jsx(Yn,{asChild:!0,children:o.jsx(Fe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0",onClick:et=>et.stopPropagation(),children:o.jsx(ps,{className:"w-3 h-3"})})}),o.jsxs(Xn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:[o.jsxs(xt,{onClick:et=>{et.stopPropagation()},className:"hover:bg-gray-100 opacity-50 cursor-not-allowed",disabled:!0,children:[o.jsx(eu,{className:"w-4 h-4 mr-2"}),"Rename"]}),o.jsxs(xt,{onClick:et=>{et.stopPropagation()},className:"hover:bg-gray-100 opacity-50 cursor-not-allowed",disabled:!0,children:[o.jsx(ag,{className:"w-4 h-4 mr-2"}),"Pin"]}),o.jsxs(xt,{onClick:et=>{et.stopPropagation()},className:"text-red-500 hover:bg-gray-100 opacity-50 cursor-not-allowed",disabled:!0,children:[o.jsx(fs,{className:"w-4 h-4 mr-2"}),"Delete"]})]})]})]},oe.id)}),s.filter(oe=>oe.classificationType!=="cce-sn"&&oe.classificationType!=="cce-sh").filter(oe=>!te?.some(Ke=>Ke.chatIds.includes(oe.id))).map(oe=>{const Ke=oe.title.length>24?oe.title.substring(0,24)+"...":oe.title,et=Oe===oe.id;return o.jsxs("div",{draggable:!et,onDragStart:Ye=>Bt(Ye,oe.id),className:`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${oe.id===a?"bg-gray-200":"hover:bg-gray-200"}`,onClick:()=>!et&&c(oe.id),title:oe.title,children:[et?o.jsx("input",{type:"text",value:je,onChange:Ye=>Qe(Ye.target.value),onBlur:()=>{je.trim()&&y&&y(oe.id,je.trim()),Y(null)},onKeyDown:Ye=>{Ye.key==="Enter"?(je.trim()&&y&&y(oe.id,je.trim()),Y(null)):Ye.key==="Escape"&&Y(null)},onClick:Ye=>Ye.stopPropagation(),className:"flex-1 bg-white border border-gray-300 rounded px-1 py-0.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400",autoFocus:!0}):o.jsx("span",{className:"flex-1 truncate text-gray-900",onDoubleClick:Ye=>{Ye.stopPropagation(),Qe(oe.title),Y(oe.id)},title:"Double-click to rename",children:Ke}),o.jsxs(Kn,{children:[o.jsx(Yn,{asChild:!0,children:o.jsx(Fe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0",onClick:Ye=>Ye.stopPropagation(),children:o.jsx(ps,{className:"w-3 h-3"})})}),o.jsxs(Xn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:[o.jsxs(xt,{onClick:Ye=>{Ye.stopPropagation(),Qe(oe.title),Y(oe.id)},className:"hover:bg-gray-100",children:[o.jsx(eu,{className:"w-4 h-4 mr-2"}),"Rename"]}),o.jsxs(xt,{onClick:Ye=>{Ye.stopPropagation(),v?.(oe.id)},className:"hover:bg-gray-100",children:[o.jsx(ag,{className:"w-4 h-4 mr-2"}),"Pin"]}),o.jsxs(xt,{onClick:Ye=>{Ye.stopPropagation(),h(oe.id)},className:"text-red-500 hover:bg-gray-100",children:[o.jsx(fs,{className:"w-4 h-4 mr-2"}),"Delete"]})]})]})]},oe.id)}),_.length===0&&s.filter(oe=>oe.classificationType!=="cce-sn"&&oe.classificationType!=="cce-sh").filter(oe=>!te?.some(Ke=>Ke.chatIds.includes(oe.id))).length===0&&o.jsx("div",{className:"px-2 py-4 text-center",children:o.jsxs("div",{className:"flex flex-col items-center gap-2",children:[o.jsx(Js,{className:"w-4 h-4 text-gray-400"}),o.jsx("p",{className:"text-sm text-gray-500",children:"Start a new chat to begin"})]})})]})})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(Fe,{onClick:R,className:`w-full justify-start gap-2 px-2 h-9 text-sm ${j==="studio"?"bg-gray-700":""}`,variant:"outline",children:[o.jsx(Js,{className:"w-4 h-4"}),"New Assistant"]}),o.jsxs(Fe,{variant:"ghost",className:"w-full justify-start gap-2 px-2 h-9 text-sm",children:[o.jsx(nu,{className:"w-4 h-4"}),"My Assistants"]})]})})})}),o.jsxs("div",{className:"px-3 py-2 border-t border-gray-300 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-7 h-7 rounded-full bg-gray-600 flex-shrink-0"}),o.jsx("div",{className:"text-left overflow-hidden",children:o.jsx("div",{className:"text-sm font-medium text-gray-900",children:z.name})})]}),o.jsxs(Kn,{children:[o.jsx(Yn,{asChild:!0,children:o.jsx("button",{"data-tour":"settings",className:"p-1.5 rounded-lg hover:bg-gray-200 transition-colors text-gray-700",children:o.jsx(tu,{size:16})})}),o.jsxs(Xn,{align:"end",className:"w-48 bg-white border-2 border-gray-900 rounded-lg",children:[o.jsx(xt,{onClick:oe=>{oe.stopPropagation(),C()},className:"hover:bg-gray-100",children:"Settings"}),o.jsx(xt,{onClick:oe=>{oe.stopPropagation(),Q?.()},className:"hover:bg-gray-100",children:"Walkthrough Tour"}),o.jsx(xt,{onClick:oe=>{oe.stopPropagation(),V()},className:"hover:bg-gray-100",children:"Sign Out"}),o.jsx(Uj,{}),o.jsx(xt,{className:"text-xs text-gray-400 hover:bg-gray-100",children:"Privacy Settings"}),o.jsx(xt,{className:"text-xs text-gray-400 hover:bg-gray-100",children:"Terms of Use"}),o.jsx(xt,{className:"text-xs text-gray-400 hover:bg-gray-100",children:"Report Vulnerability"})]})]})]})]}),o.jsx(Ug,{open:ge,onOpenChange:J,chats:s,onSelectChat:c,onSelectSimulation:ne||(()=>{})}),o.jsx(JP,{open:X,onOpenChange:O,onCreateFolder:fe||(()=>{})})]}):o.jsxs("div",{className:"flex flex-col h-screen w-[52px] border-r border-gray-300 bg-gray-100 flex-shrink-0",children:[o.jsx("div",{className:"px-2 py-3 flex justify-center",children:o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700",children:o.jsx(ig,{className:"w-5 h-5"})})}),o.jsx(rt,{side:"right",children:o.jsx("p",{children:"Expand sidebar"})})]})})}),o.jsx("div",{className:"flex flex-col items-center gap-1 px-2 py-2",children:o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-700",children:o.jsx(Js,{className:"w-5 h-5"})})}),o.jsx(rt,{side:"right",children:o.jsx("p",{children:"New Chat (⇧⌘O)"})})]})})}),o.jsx("div",{className:"mt-auto px-2 py-3 border-t border-gray-300 flex justify-center",children:o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:C,className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700",children:o.jsx(tu,{className:"w-5 h-5"})})}),o.jsx(rt,{side:"right",children:o.jsx("p",{children:"Settings"})})]})})}),o.jsx(Ug,{open:ge,onOpenChange:J,chats:s,onSelectChat:oe=>{c(oe),J(!1)},onSelectSimulation:oe=>{ne?.(oe),J(!1)}})]})}function ui({className:n,...r}){return o.jsx("div",{"data-slot":"card",className:We("bg-white text-gray-900 flex flex-col gap-6 rounded-lg border-2 border-gray-900 shadow-md dark:bg-gray-900 dark:text-white dark:border-white",n),...r})}function Gg({className:n,...r}){return o.jsx("div",{"data-slot":"card-header",className:We("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",n),...r})}function Qg({className:n,...r}){return o.jsx("h4",{"data-slot":"card-title",className:We("leading-none font-semibold text-gray-900 dark:text-white",n),...r})}function e3({className:n,...r}){return o.jsx("p",{"data-slot":"card-description",className:We("text-gray-500",n),...r})}function pi({className:n,...r}){return o.jsx("div",{"data-slot":"card-content",className:We("px-6 [&:last-child]:pb-6",n),...r})}function qv(n){return{dark:{sidebar:"bg-gray-950 border-gray-800",mainBg:"bg-gray-900",header:"border-gray-800 bg-gray-950",title:"text-white",newChatBtn:"bg-blue-600 hover:bg-blue-700 text-white border-0",incognitoBtn:"bg-gray-700 hover:bg-gray-600 text-white border-0",navItem:"hover:bg-gray-800 text-gray-300",separator:"bg-gray-800",chatItem:"hover:bg-gray-800",chatItemActive:"bg-indigo-900/30",chatItemText:"text-gray-100",userMessage:"bg-blue-600 text-white",aiMessage:"bg-gray-800 text-gray-100",userAvatar:"bg-blue-600",aiAvatar:"bg-green-600",inputBorder:"border border-gray-700 focus-visible:ring-blue-500",sendButton:"bg-blue-600 hover:bg-blue-700",outputPanel:"bg-gray-950 border border-gray-800",chatArea:"bg-gray-900"},light:{sidebar:"bg-white border-gray-200",mainBg:"bg-gray-50",header:"border-gray-200 bg-white",title:"text-gray-900",newChatBtn:"bg-blue-600 hover:bg-blue-700 text-white border-0",incognitoBtn:"bg-gray-600 hover:bg-gray-700 text-white border-0",navItem:"hover:bg-gray-100 text-gray-700",separator:"bg-gray-200",chatItem:"hover:bg-gray-100",chatItemActive:"bg-indigo-50",chatItemText:"text-gray-900",userMessage:"bg-blue-600 text-white",aiMessage:"bg-white text-gray-900 border border-gray-200",userAvatar:"bg-blue-600",aiAvatar:"bg-green-600",inputBorder:"border border-gray-300 focus-visible:ring-blue-500",sendButton:"bg-blue-600 hover:bg-blue-700",outputPanel:"bg-white border border-gray-200",chatArea:"bg-gray-50"},minimal:{sidebar:"bg-white border-gray-100",mainBg:"bg-white",header:"border-gray-100 bg-white",title:"text-gray-900",newChatBtn:"bg-gray-900 hover:bg-gray-800 text-white border-0",incognitoBtn:"bg-gray-700 hover:bg-gray-600 text-white border-0",navItem:"hover:bg-gray-50 text-gray-600",separator:"bg-gray-100",chatItem:"hover:bg-gray-50",chatItemActive:"bg-indigo-50",chatItemText:"text-gray-900",userMessage:"bg-gray-900 text-white",aiMessage:"bg-gray-50 text-gray-900",userAvatar:"bg-gray-900",aiAvatar:"bg-gray-700",inputBorder:"border border-gray-200 focus-visible:ring-gray-400",sendButton:"bg-gray-900 hover:bg-gray-800",outputPanel:"bg-white border border-gray-100",chatArea:"bg-white"},"singapore-red":{sidebar:"bg-gradient-to-br from-red-50 via-white to-red-50 border-red-200",mainBg:"bg-gradient-to-br from-red-50 via-white to-red-50",header:"border-red-200 bg-gradient-to-r from-red-100 to-white",title:"bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0",incognitoBtn:"bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white border-0",navItem:"hover:bg-red-100 text-red-800",separator:"bg-gradient-to-r from-red-300 to-red-200",chatItem:"hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100",chatItemActive:"bg-gradient-to-r from-red-100 to-red-50",chatItemText:"text-red-900",userMessage:"bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md",aiMessage:"bg-white border border-red-200 text-gray-900 shadow-sm",userAvatar:"bg-gradient-to-br from-red-600 to-red-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-red-400 to-red-300 shadow-lg",inputBorder:"border-2 border-red-300 focus-visible:ring-red-500",sendButton:"bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg",outputPanel:"bg-white border border-red-200",chatArea:"bg-gradient-to-br from-red-50 via-white to-red-50"},"pastel-pink":{sidebar:"bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 border-pink-200",mainBg:"bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100",header:"border-pink-200 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100",title:"bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white border-0",incognitoBtn:"bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0",navItem:"hover:bg-pink-100 text-pink-700",separator:"bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300",chatItem:"hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100",chatItemActive:"bg-gradient-to-r from-pink-100 to-rose-100",chatItemText:"text-pink-900",userMessage:"bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md",aiMessage:"bg-white border border-pink-200 text-gray-900 shadow-sm",userAvatar:"bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-pink-300 to-rose-400 shadow-lg",inputBorder:"border-2 border-pink-300 focus-visible:ring-pink-400",sendButton:"bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 shadow-lg",outputPanel:"bg-white border border-pink-200",chatArea:"bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"},"army-green":{sidebar:"bg-gradient-to-br from-green-900 via-green-800 to-green-900 border-green-700",mainBg:"bg-gradient-to-br from-green-900 via-green-800 to-green-900",header:"border-green-700 bg-gradient-to-r from-green-900 to-green-800",title:"text-green-100",newChatBtn:"bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white border-0",incognitoBtn:"bg-gradient-to-r from-green-800 to-green-700 hover:from-green-900 hover:to-green-800 text-white border-0",navItem:"hover:bg-green-800 text-green-200",separator:"bg-green-700",chatItem:"hover:bg-green-800",chatItemActive:"bg-green-800",chatItemText:"text-green-100",userMessage:"bg-gradient-to-r from-green-700 to-green-600 text-white shadow-md",aiMessage:"bg-green-950 border border-green-800 text-green-100 shadow-sm",userAvatar:"bg-gradient-to-br from-green-600 to-green-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-green-700 to-green-600 shadow-lg",inputBorder:"border-2 border-green-700 focus-visible:ring-green-500",sendButton:"bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 shadow-lg",outputPanel:"bg-green-950 border border-green-800",chatArea:"bg-gradient-to-br from-green-900 via-green-800 to-green-900"},rainbow:{sidebar:"bg-gradient-to-br from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100 border-purple-300",mainBg:"bg-gradient-to-br from-red-50 via-yellow-50 via-green-50 via-blue-50 to-purple-50",header:"border-purple-300 bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100",title:"bg-gradient-to-r from-red-600 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:from-red-600 hover:via-yellow-600 hover:via-green-600 hover:via-blue-600 hover:to-purple-600 text-white border-0",incognitoBtn:"bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 text-white border-0",navItem:"hover:bg-gradient-to-r hover:from-red-100 hover:via-yellow-100 hover:to-green-100 text-purple-700",separator:"bg-gradient-to-r from-red-300 via-yellow-300 via-green-300 via-blue-300 to-purple-300",chatItem:"hover:bg-gradient-to-r hover:from-red-100 hover:via-yellow-100 hover:to-purple-100",chatItemActive:"bg-gradient-to-r from-red-100 via-yellow-100 to-purple-100",chatItemText:"text-purple-900",userMessage:"bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-green-500 text-white shadow-md",aiMessage:"bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border border-purple-200 text-gray-900 shadow-md",userAvatar:"bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg",inputBorder:"border-2 border-purple-300 focus-visible:ring-purple-500",sendButton:"bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:from-red-600 hover:to-purple-600 shadow-lg",outputPanel:"bg-white border border-purple-200",chatArea:"bg-gradient-to-br from-red-50 via-yellow-50 via-green-50 via-blue-50 to-purple-50"},"national-day":{sidebar:"bg-gradient-to-br from-red-600 via-red-500 to-white border-red-400",mainBg:"bg-gradient-to-br from-red-500 via-white to-red-500",header:"border-red-400 bg-gradient-to-r from-red-600 via-white to-red-600",title:"bg-gradient-to-r from-red-700 via-yellow-500 to-red-700 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 hover:from-red-700 hover:via-yellow-500 hover:to-red-700 text-white border-2 border-yellow-400",incognitoBtn:"bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-red-800 hover:to-red-800 text-white border-2 border-white",navItem:"hover:bg-red-100 text-red-900",separator:"bg-gradient-to-r from-red-400 via-yellow-300 to-red-400 h-1",chatItem:"hover:bg-gradient-to-r hover:from-red-50 hover:via-yellow-50 hover:to-red-50",chatItemActive:"bg-gradient-to-r from-red-100 via-yellow-50 to-red-100 border-l-4 border-red-600",chatItemText:"text-red-900",userMessage:"bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg border-2 border-yellow-400",aiMessage:"bg-white border-2 border-red-400 text-gray-900 shadow-lg",userAvatar:"bg-gradient-to-br from-red-600 via-yellow-500 to-red-600 shadow-lg border-2 border-white",aiAvatar:"bg-gradient-to-br from-white via-red-200 to-white shadow-lg border-2 border-red-600",inputBorder:"border-2 border-red-400 focus-visible:ring-red-500 focus-visible:ring-offset-2",sendButton:"bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 hover:from-red-700 hover:via-yellow-500 hover:to-red-700 shadow-lg border-2 border-yellow-500",outputPanel:"bg-gradient-to-br from-white via-red-50 to-white border-2 border-red-400",chatArea:"bg-gradient-to-br from-red-100 via-white via-yellow-50 to-red-100"}}[n]}function Il(n){return{modern:{base:"",title:"",message:"",input:""},seniors:{base:"text-lg",title:"text-2xl",message:"text-xl",input:"text-lg"},compact:{base:"text-sm",title:"text-base",message:"text-sm",input:"text-sm"}}[n]}function t3({colorTheme:n,fontStyle:r,onStartAssistantChat:s,userRole:a,bookmarkedAssistants:c=[],onToggleBookmark:d}){const p=Il(r),m=Object.values(di).flat(),h=[...ci,...li,...m],v=Array.from(new Map(h.map(x=>[x.id,x])).values()),y=x=>{const b=x.icon,S=c.includes(x.id);return o.jsx(ui,{className:"hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-300 shadow-sm bg-white overflow-hidden relative",onClick:()=>s(x.name,x.assistantType),children:o.jsxs(pi,{className:"p-6",children:[o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:k=>{k.stopPropagation(),d?.(x.id)},className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 transition-colors",children:o.jsx(Nw,{className:`w-5 h-5 ${S?"fill-gray-900 text-gray-900":"text-gray-400"}`})})}),o.jsx(rt,{children:o.jsx("p",{children:"Bookmark"})})]})}),o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mb-4",children:o.jsx(b,{className:"w-6 h-6 text-gray-700"})}),o.jsxs("div",{className:"mb-4",children:[o.jsx("h3",{className:"text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors",children:x.name}),o.jsx("p",{className:"text-sm text-gray-500 leading-relaxed",children:x.description})]}),o.jsxs("div",{className:"flex items-center text-xs text-gray-500",children:[o.jsx(ph,{className:"w-3.5 h-3.5 mr-1.5 flex-shrink-0"}),o.jsx("span",{className:"truncate",children:x.classification.replace("C(CE)/SN","CCE/SN")})]})]})},x.id)};return o.jsxs("div",{className:`flex-1 flex flex-col bg-gray-100 ${p.base}`,children:[o.jsx("div",{className:"flex items-center gap-2 p-4 bg-gray-100",children:o.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:"Explore Assistants"})}),o.jsx("div",{className:"flex-1 overflow-auto",children:o.jsx("div",{className:"max-w-7xl mx-auto px-4 py-8 space-y-12",children:o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:v.map(y)})})})]})}const Ei=f.forwardRef(({className:n,...r},s)=>o.jsx("textarea",{ref:s,"data-slot":"textarea",className:We("resize-none border-gray-900 dark:border-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 aria-invalid:ring-red-500/20 aria-invalid:border-red-500 flex field-sizing-content min-h-16 w-full rounded-lg border bg-white dark:bg-gray-900 px-3 py-2 text-base text-gray-900 dark:text-white transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50",n),...r}));Ei.displayName="Textarea";function n3({colorTheme:n,fontStyle:r}){const s=qv(n),a=Il(r);return o.jsxs("div",{className:`flex-1 flex flex-col ${s.mainBg} ${a.base}`,children:[o.jsx("div",{className:`flex items-center gap-2 p-4 border-b ${s.header}`,children:o.jsx("h1",{className:s.title+" "+a.title,children:"Create Your Assistant"})}),o.jsx("div",{className:"flex-1 overflow-auto",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-8",children:[o.jsx("div",{className:"space-y-2",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:`p-3 rounded-lg ${s.userAvatar}`,children:o.jsx(s1,{className:"w-6 h-6 text-white"})}),o.jsxs("div",{children:[o.jsx("h2",{className:`text-xs ${s.chatItemText} ${a.title}`,children:"Assistant Studio"}),o.jsx("p",{className:`${s.navItem} opacity-70 text-xs`,children:"Design and configure your custom AI assistant"})]})]})}),o.jsxs(ui,{children:[o.jsxs(Gg,{children:[o.jsx(Qg,{className:"text-xs",children:"Create New Assistant"}),o.jsx(e3,{className:"text-xs",children:"Give your assistant a name and describe what it does"})]}),o.jsxs(pi,{className:"space-y-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{htmlFor:"assistant-name",className:"text-xs",children:"Assistant Name"}),o.jsx(tn,{id:"assistant-name",placeholder:"e.g., Marketing Expert, Code Reviewer, Transcribe Workspace...",className:`text-xs ${s.inputBorder} ${a.input}`})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{htmlFor:"description",className:"text-xs",children:"Description"}),o.jsx(Ei,{id:"description",placeholder:"Describe what your assistant does and how it helps users...",className:`${s.inputBorder} ${a.input} min-h-[120px] text-xs`})]}),o.jsxs("div",{className:"flex gap-3 pt-4",children:[o.jsxs(Fe,{className:`${s.sendButton} text-xs`,children:[o.jsx(hh,{className:"w-4 h-4 mr-2"}),"Create Assistant"]}),o.jsx(Fe,{variant:"outline",className:"text-xs",children:"Cancel"})]})]})]}),o.jsxs(ui,{children:[o.jsx(Gg,{children:o.jsxs(Qg,{className:"flex items-center gap-2 text-xs",children:[o.jsx(dh,{className:"w-5 h-5"}),"Tips for Creating Great Assistants"]})}),o.jsxs(pi,{className:"space-y-3",children:[o.jsxs("div",{className:`${s.navItem} text-xs`,children:[o.jsx("strong",{children:"Be Specific:"})," Give your assistant a clear, descriptive name"]}),o.jsxs("div",{className:`${s.navItem} text-xs`,children:[o.jsx("strong",{children:"Clear Description:"})," Explain what your assistant does and who it's for"]}),o.jsxs("div",{className:`${s.navItem} text-xs`,children:[o.jsx("strong",{children:"Focus on Purpose:"})," Think about the specific tasks your assistant will help with"]}),o.jsxs("div",{className:`${s.navItem} text-xs`,children:[o.jsx("strong",{children:"Keep it Simple:"})," Start with a clear concept, you can always refine it later"]})]})]})]})})]})}function r3(n){const r=s3(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(i3);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function s3(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=l3(c),m=a3(d,c.props);return c.type!==f.Fragment&&(m.ref=a?fr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var o3=Symbol("radix.slottable");function i3(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===o3}function a3(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function l3(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function ip(n){const r=f.useRef({value:n,previous:n});return f.useMemo(()=>(r.current.value!==n&&(r.current.previous=r.current.value,r.current.value=n),r.current.previous),[n])}var c3=[" ","Enter","ArrowUp","ArrowDown"],d3=[" ","Enter"],hs="Select",[_l,Dl,u3]=Ru(hs),[go]=mn(hs,[u3,mo]),Ol=mo(),[p3,Hr]=go(hs),[f3,m3]=go(hs),Kv=n=>{const{__scopeSelect:r,children:s,open:a,defaultOpen:c,onOpenChange:d,value:p,defaultValue:m,onValueChange:h,dir:v,name:y,autoComplete:x,disabled:b,required:S,form:N}=n,C=Ol(r),[k,E]=f.useState(null),[j,M]=f.useState(null),[R,I]=f.useState(!1),W=vi(v),[z,V]=On({prop:a,defaultProp:c??!1,onChange:d,caller:hs}),[ne,te]=On({prop:p,defaultProp:m,onChange:h,caller:hs}),fe=f.useRef(null),ae=k?N||!!k.closest("form"):!0,[he,me]=f.useState(new Set),ge=Array.from(he).map(J=>J.props.value).join(";");return o.jsx(Cl,{...C,children:o.jsxs(p3,{required:S,scope:r,trigger:k,onTriggerChange:E,valueNode:j,onValueNodeChange:M,valueNodeHasChildren:R,onValueNodeHasChildrenChange:I,contentId:en(),value:ne,onValueChange:te,open:z,onOpenChange:V,dir:W,triggerPointerDownPosRef:fe,disabled:b,children:[o.jsx(_l.Provider,{scope:r,children:o.jsx(f3,{scope:n.__scopeSelect,onNativeOptionAdd:f.useCallback(J=>{me(Q=>new Set(Q).add(J))},[]),onNativeOptionRemove:f.useCallback(J=>{me(Q=>{const _=new Set(Q);return _.delete(J),_})},[]),children:s})}),ae?o.jsxs(vx,{"aria-hidden":!0,required:S,tabIndex:-1,name:y,autoComplete:x,value:ne,onChange:J=>te(J.target.value),disabled:b,form:N,children:[ne===void 0?o.jsx("option",{value:""}):null,Array.from(he)]},ge):null]})})};Kv.displayName=hs;var Yv="SelectTrigger",Xv=f.forwardRef((n,r)=>{const{__scopeSelect:s,disabled:a=!1,...c}=n,d=Ol(s),p=Hr(Yv,s),m=p.disabled||a,h=He(r,p.onTriggerChange),v=Dl(s),y=f.useRef("touch"),[x,b,S]=yx(C=>{const k=v().filter(M=>!M.disabled),E=k.find(M=>M.value===p.value),j=bx(k,C,E);j!==void 0&&p.onValueChange(j.value)}),N=C=>{m||(p.onOpenChange(!0),S()),C&&(p.triggerPointerDownPosRef.current={x:Math.round(C.pageX),y:Math.round(C.pageY)})};return o.jsx($u,{asChild:!0,...d,children:o.jsx(Ie.button,{type:"button",role:"combobox","aria-controls":p.contentId,"aria-expanded":p.open,"aria-required":p.required,"aria-autocomplete":"none",dir:p.dir,"data-state":p.open?"open":"closed",disabled:m,"data-disabled":m?"":void 0,"data-placeholder":xx(p.value)?"":void 0,...c,ref:h,onClick:ve(c.onClick,C=>{C.currentTarget.focus(),y.current!=="mouse"&&N(C)}),onPointerDown:ve(c.onPointerDown,C=>{y.current=C.pointerType;const k=C.target;k.hasPointerCapture(C.pointerId)&&k.releasePointerCapture(C.pointerId),C.button===0&&C.ctrlKey===!1&&C.pointerType==="mouse"&&(N(C),C.preventDefault())}),onKeyDown:ve(c.onKeyDown,C=>{const k=x.current!=="";!(C.ctrlKey||C.altKey||C.metaKey)&&C.key.length===1&&b(C.key),!(k&&C.key===" ")&&c3.includes(C.key)&&(N(),C.preventDefault())})})})});Xv.displayName=Yv;var Jv="SelectValue",Zv=f.forwardRef((n,r)=>{const{__scopeSelect:s,className:a,style:c,children:d,placeholder:p="",...m}=n,h=Hr(Jv,s),{onValueNodeHasChildrenChange:v}=h,y=d!==void 0,x=He(r,h.onValueNodeChange);return Rt(()=>{v(y)},[v,y]),o.jsx(Ie.span,{...m,ref:x,style:{pointerEvents:"none"},children:xx(h.value)?o.jsx(o.Fragment,{children:p}):d})});Zv.displayName=Jv;var g3="SelectIcon",ex=f.forwardRef((n,r)=>{const{__scopeSelect:s,children:a,...c}=n;return o.jsx(Ie.span,{"aria-hidden":!0,...c,ref:r,children:a||"▼"})});ex.displayName=g3;var h3="SelectPortal",tx=n=>o.jsx(bi,{asChild:!0,...n});tx.displayName=h3;var vs="SelectContent",nx=f.forwardRef((n,r)=>{const s=Hr(vs,n.__scopeSelect),[a,c]=f.useState();if(Rt(()=>{c(new DocumentFragment)},[]),!s.open){const d=a;return d?hi.createPortal(o.jsx(rx,{scope:n.__scopeSelect,children:o.jsx(_l.Slot,{scope:n.__scopeSelect,children:o.jsx("div",{children:n.children})})}),d):null}return o.jsx(sx,{...n,ref:r})});nx.displayName=vs;var _n=10,[rx,Wr]=go(vs),v3="SelectContentImpl",x3=r3("SelectContent.RemoveScroll"),sx=f.forwardRef((n,r)=>{const{__scopeSelect:s,position:a="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:d,onPointerDownOutside:p,side:m,sideOffset:h,align:v,alignOffset:y,arrowPadding:x,collisionBoundary:b,collisionPadding:S,sticky:N,hideWhenDetached:C,avoidCollisions:k,...E}=n,j=Hr(vs,s),[M,R]=f.useState(null),[I,W]=f.useState(null),z=He(r,O=>R(O)),[V,ne]=f.useState(null),[te,fe]=f.useState(null),ae=Dl(s),[he,me]=f.useState(!1),ge=f.useRef(!1);f.useEffect(()=>{if(M)return Wu(M)},[M]),Au();const J=f.useCallback(O=>{const[K,...ue]=ae().map(Oe=>Oe.ref.current),[pe]=ue.slice(-1),Re=document.activeElement;for(const Oe of O)if(Oe===Re||(Oe?.scrollIntoView({block:"nearest"}),Oe===K&&I&&(I.scrollTop=0),Oe===pe&&I&&(I.scrollTop=I.scrollHeight),Oe?.focus(),document.activeElement!==Re))return},[ae,I]),Q=f.useCallback(()=>J([V,M]),[J,V,M]);f.useEffect(()=>{he&&Q()},[he,Q]);const{onOpenChange:_,triggerPointerDownPosRef:B}=j;f.useEffect(()=>{if(M){let O={x:0,y:0};const K=pe=>{O={x:Math.abs(Math.round(pe.pageX)-(B.current?.x??0)),y:Math.abs(Math.round(pe.pageY)-(B.current?.y??0))}},ue=pe=>{O.x<=10&&O.y<=10?pe.preventDefault():M.contains(pe.target)||_(!1),document.removeEventListener("pointermove",K),B.current=null};return B.current!==null&&(document.addEventListener("pointermove",K),document.addEventListener("pointerup",ue,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",K),document.removeEventListener("pointerup",ue,{capture:!0})}}},[M,_,B]),f.useEffect(()=>{const O=()=>_(!1);return window.addEventListener("blur",O),window.addEventListener("resize",O),()=>{window.removeEventListener("blur",O),window.removeEventListener("resize",O)}},[_]);const[q,A]=yx(O=>{const K=ae().filter(Re=>!Re.disabled),ue=K.find(Re=>Re.ref.current===document.activeElement),pe=bx(K,O,ue);pe&&setTimeout(()=>pe.ref.current.focus())}),U=f.useCallback((O,K,ue)=>{const pe=!ge.current&&!ue;(j.value!==void 0&&j.value===K||pe)&&(ne(O),pe&&(ge.current=!0))},[j.value]),H=f.useCallback(()=>M?.focus(),[M]),G=f.useCallback((O,K,ue)=>{const pe=!ge.current&&!ue;(j.value!==void 0&&j.value===K||pe)&&fe(O)},[j.value]),re=a==="popper"?gu:ox,X=re===gu?{side:m,sideOffset:h,align:v,alignOffset:y,arrowPadding:x,collisionBoundary:b,collisionPadding:S,sticky:N,hideWhenDetached:C,avoidCollisions:k}:{};return o.jsx(rx,{scope:s,content:M,viewport:I,onViewportChange:W,itemRefCallback:U,selectedItem:V,onItemLeave:H,itemTextRefCallback:G,focusSelectedItem:Q,selectedItemText:te,position:a,isPositioned:he,searchRef:q,children:o.jsx(jl,{as:x3,allowPinchZoom:!0,children:o.jsx(xl,{asChild:!0,trapped:j.open,onMountAutoFocus:O=>{O.preventDefault()},onUnmountAutoFocus:ve(c,O=>{j.trigger?.focus({preventScroll:!0}),O.preventDefault()}),children:o.jsx(xi,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:O=>O.preventDefault(),onDismiss:()=>j.onOpenChange(!1),children:o.jsx(re,{role:"listbox",id:j.contentId,"data-state":j.open?"open":"closed",dir:j.dir,onContextMenu:O=>O.preventDefault(),...E,...X,onPlaced:()=>me(!0),ref:z,style:{display:"flex",flexDirection:"column",outline:"none",...E.style},onKeyDown:ve(E.onKeyDown,O=>{const K=O.ctrlKey||O.altKey||O.metaKey;if(O.key==="Tab"&&O.preventDefault(),!K&&O.key.length===1&&A(O.key),["ArrowUp","ArrowDown","Home","End"].includes(O.key)){let pe=ae().filter(Re=>!Re.disabled).map(Re=>Re.ref.current);if(["ArrowUp","End"].includes(O.key)&&(pe=pe.slice().reverse()),["ArrowUp","ArrowDown"].includes(O.key)){const Re=O.target,Oe=pe.indexOf(Re);pe=pe.slice(Oe+1)}setTimeout(()=>J(pe)),O.preventDefault()}})})})})})})});sx.displayName=v3;var y3="SelectItemAlignedPosition",ox=f.forwardRef((n,r)=>{const{__scopeSelect:s,onPlaced:a,...c}=n,d=Hr(vs,s),p=Wr(vs,s),[m,h]=f.useState(null),[v,y]=f.useState(null),x=He(r,z=>y(z)),b=Dl(s),S=f.useRef(!1),N=f.useRef(!0),{viewport:C,selectedItem:k,selectedItemText:E,focusSelectedItem:j}=p,M=f.useCallback(()=>{if(d.trigger&&d.valueNode&&m&&v&&C&&k&&E){const z=d.trigger.getBoundingClientRect(),V=v.getBoundingClientRect(),ne=d.valueNode.getBoundingClientRect(),te=E.getBoundingClientRect();if(d.dir!=="rtl"){const Re=te.left-V.left,Oe=ne.left-Re,Y=z.left-Oe,je=z.width+Y,Qe=Math.max(je,V.width),mt=window.innerWidth-_n,At=su(Oe,[_n,Math.max(_n,mt-Qe)]);m.style.minWidth=je+"px",m.style.left=At+"px"}else{const Re=V.right-te.right,Oe=window.innerWidth-ne.right-Re,Y=window.innerWidth-z.right-Oe,je=z.width+Y,Qe=Math.max(je,V.width),mt=window.innerWidth-_n,At=su(Oe,[_n,Math.max(_n,mt-Qe)]);m.style.minWidth=je+"px",m.style.right=At+"px"}const fe=b(),ae=window.innerHeight-_n*2,he=C.scrollHeight,me=window.getComputedStyle(v),ge=parseInt(me.borderTopWidth,10),J=parseInt(me.paddingTop,10),Q=parseInt(me.borderBottomWidth,10),_=parseInt(me.paddingBottom,10),B=ge+J+he+_+Q,q=Math.min(k.offsetHeight*5,B),A=window.getComputedStyle(C),U=parseInt(A.paddingTop,10),H=parseInt(A.paddingBottom,10),G=z.top+z.height/2-_n,re=ae-G,X=k.offsetHeight/2,O=k.offsetTop+X,K=ge+J+O,ue=B-K;if(K<=G){const Re=fe.length>0&&k===fe[fe.length-1].ref.current;m.style.bottom="0px";const Oe=v.clientHeight-C.offsetTop-C.offsetHeight,Y=Math.max(re,X+(Re?H:0)+Oe+Q),je=K+Y;m.style.height=je+"px"}else{const Re=fe.length>0&&k===fe[0].ref.current;m.style.top="0px";const Y=Math.max(G,ge+C.offsetTop+(Re?U:0)+X)+ue;m.style.height=Y+"px",C.scrollTop=K-G+C.offsetTop}m.style.margin=`${_n}px 0`,m.style.minHeight=q+"px",m.style.maxHeight=ae+"px",a?.(),requestAnimationFrame(()=>S.current=!0)}},[b,d.trigger,d.valueNode,m,v,C,k,E,d.dir,a]);Rt(()=>M(),[M]);const[R,I]=f.useState();Rt(()=>{v&&I(window.getComputedStyle(v).zIndex)},[v]);const W=f.useCallback(z=>{z&&N.current===!0&&(M(),j?.(),N.current=!1)},[M,j]);return o.jsx(w3,{scope:s,contentWrapper:m,shouldExpandOnScrollRef:S,onScrollButtonChange:W,children:o.jsx("div",{ref:h,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:R},children:o.jsx(Ie.div,{...c,ref:x,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});ox.displayName=y3;var b3="SelectPopperPosition",gu=f.forwardRef((n,r)=>{const{__scopeSelect:s,align:a="start",collisionPadding:c=_n,...d}=n,p=Ol(s);return o.jsx(Bu,{...p,...d,ref:r,align:a,collisionPadding:c,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});gu.displayName=b3;var[w3,ap]=go(vs,{}),hu="SelectViewport",ix=f.forwardRef((n,r)=>{const{__scopeSelect:s,nonce:a,...c}=n,d=Wr(hu,s),p=ap(hu,s),m=He(r,d.onViewportChange),h=f.useRef(0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),o.jsx(_l.Slot,{scope:s,children:o.jsx(Ie.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:m,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:ve(c.onScroll,v=>{const y=v.currentTarget,{contentWrapper:x,shouldExpandOnScrollRef:b}=p;if(b?.current&&x){const S=Math.abs(h.current-y.scrollTop);if(S>0){const N=window.innerHeight-_n*2,C=parseFloat(x.style.minHeight),k=parseFloat(x.style.height),E=Math.max(C,k);if(E<N){const j=E+S,M=Math.min(N,j),R=j-M;x.style.height=M+"px",x.style.bottom==="0px"&&(y.scrollTop=R>0?R:0,x.style.justifyContent="flex-end")}}}h.current=y.scrollTop})})})]})});ix.displayName=hu;var ax="SelectGroup",[S3,C3]=go(ax),k3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n,c=en();return o.jsx(S3,{scope:s,id:c,children:o.jsx(Ie.div,{role:"group","aria-labelledby":c,...a,ref:r})})});k3.displayName=ax;var lx="SelectLabel",N3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n,c=C3(lx,s);return o.jsx(Ie.div,{id:c.id,...a,ref:r})});N3.displayName=lx;var pl="SelectItem",[j3,cx]=go(pl),dx=f.forwardRef((n,r)=>{const{__scopeSelect:s,value:a,disabled:c=!1,textValue:d,...p}=n,m=Hr(pl,s),h=Wr(pl,s),v=m.value===a,[y,x]=f.useState(d??""),[b,S]=f.useState(!1),N=He(r,j=>h.itemRefCallback?.(j,a,c)),C=en(),k=f.useRef("touch"),E=()=>{c||(m.onValueChange(a),m.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return o.jsx(j3,{scope:s,value:a,disabled:c,textId:C,isSelected:v,onItemTextChange:f.useCallback(j=>{x(M=>M||(j?.textContent??"").trim())},[]),children:o.jsx(_l.ItemSlot,{scope:s,value:a,disabled:c,textValue:y,children:o.jsx(Ie.div,{role:"option","aria-labelledby":C,"data-highlighted":b?"":void 0,"aria-selected":v&&b,"data-state":v?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...p,ref:N,onFocus:ve(p.onFocus,()=>S(!0)),onBlur:ve(p.onBlur,()=>S(!1)),onClick:ve(p.onClick,()=>{k.current!=="mouse"&&E()}),onPointerUp:ve(p.onPointerUp,()=>{k.current==="mouse"&&E()}),onPointerDown:ve(p.onPointerDown,j=>{k.current=j.pointerType}),onPointerMove:ve(p.onPointerMove,j=>{k.current=j.pointerType,c?h.onItemLeave?.():k.current==="mouse"&&j.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ve(p.onPointerLeave,j=>{j.currentTarget===document.activeElement&&h.onItemLeave?.()}),onKeyDown:ve(p.onKeyDown,j=>{h.searchRef?.current!==""&&j.key===" "||(d3.includes(j.key)&&E(),j.key===" "&&j.preventDefault())})})})})});dx.displayName=pl;var Zo="SelectItemText",ux=f.forwardRef((n,r)=>{const{__scopeSelect:s,className:a,style:c,...d}=n,p=Hr(Zo,s),m=Wr(Zo,s),h=cx(Zo,s),v=m3(Zo,s),[y,x]=f.useState(null),b=He(r,E=>x(E),h.onItemTextChange,E=>m.itemTextRefCallback?.(E,h.value,h.disabled)),S=y?.textContent,N=f.useMemo(()=>o.jsx("option",{value:h.value,disabled:h.disabled,children:S},h.value),[h.disabled,h.value,S]),{onNativeOptionAdd:C,onNativeOptionRemove:k}=v;return Rt(()=>(C(N),()=>k(N)),[C,k,N]),o.jsxs(o.Fragment,{children:[o.jsx(Ie.span,{id:h.textId,...d,ref:b}),h.isSelected&&p.valueNode&&!p.valueNodeHasChildren?hi.createPortal(d.children,p.valueNode):null]})});ux.displayName=Zo;var px="SelectItemIndicator",fx=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n;return cx(px,s).isSelected?o.jsx(Ie.span,{"aria-hidden":!0,...a,ref:r}):null});fx.displayName=px;var vu="SelectScrollUpButton",mx=f.forwardRef((n,r)=>{const s=Wr(vu,n.__scopeSelect),a=ap(vu,n.__scopeSelect),[c,d]=f.useState(!1),p=He(r,a.onScrollButtonChange);return Rt(()=>{if(s.viewport&&s.isPositioned){let m=function(){const v=h.scrollTop>0;d(v)};const h=s.viewport;return m(),h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[s.viewport,s.isPositioned]),c?o.jsx(hx,{...n,ref:p,onAutoScroll:()=>{const{viewport:m,selectedItem:h}=s;m&&h&&(m.scrollTop=m.scrollTop-h.offsetHeight)}}):null});mx.displayName=vu;var xu="SelectScrollDownButton",gx=f.forwardRef((n,r)=>{const s=Wr(xu,n.__scopeSelect),a=ap(xu,n.__scopeSelect),[c,d]=f.useState(!1),p=He(r,a.onScrollButtonChange);return Rt(()=>{if(s.viewport&&s.isPositioned){let m=function(){const v=h.scrollHeight-h.clientHeight,y=Math.ceil(h.scrollTop)<v;d(y)};const h=s.viewport;return m(),h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[s.viewport,s.isPositioned]),c?o.jsx(hx,{...n,ref:p,onAutoScroll:()=>{const{viewport:m,selectedItem:h}=s;m&&h&&(m.scrollTop=m.scrollTop+h.offsetHeight)}}):null});gx.displayName=xu;var hx=f.forwardRef((n,r)=>{const{__scopeSelect:s,onAutoScroll:a,...c}=n,d=Wr("SelectScrollButton",s),p=f.useRef(null),m=Dl(s),h=f.useCallback(()=>{p.current!==null&&(window.clearInterval(p.current),p.current=null)},[]);return f.useEffect(()=>()=>h(),[h]),Rt(()=>{m().find(y=>y.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[m]),o.jsx(Ie.div,{"aria-hidden":!0,...c,ref:r,style:{flexShrink:0,...c.style},onPointerDown:ve(c.onPointerDown,()=>{p.current===null&&(p.current=window.setInterval(a,50))}),onPointerMove:ve(c.onPointerMove,()=>{d.onItemLeave?.(),p.current===null&&(p.current=window.setInterval(a,50))}),onPointerLeave:ve(c.onPointerLeave,()=>{h()})})}),P3="SelectSeparator",E3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n;return o.jsx(Ie.div,{"aria-hidden":!0,...a,ref:r})});E3.displayName=P3;var yu="SelectArrow",R3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n,c=Ol(s),d=Hr(yu,s),p=Wr(yu,s);return d.open&&p.position==="popper"?o.jsx(Hu,{...c,...a,ref:r}):null});R3.displayName=yu;var A3="SelectBubbleInput",vx=f.forwardRef(({__scopeSelect:n,value:r,...s},a)=>{const c=f.useRef(null),d=He(a,c),p=ip(r);return f.useEffect(()=>{const m=c.current;if(!m)return;const h=window.HTMLSelectElement.prototype,y=Object.getOwnPropertyDescriptor(h,"value").set;if(p!==r&&y){const x=new Event("change",{bubbles:!0});y.call(m,r),m.dispatchEvent(x)}},[p,r]),o.jsx(Ie.select,{...s,style:{...mv,...s.style},ref:d,defaultValue:r})});vx.displayName=A3;function xx(n){return n===""||n===void 0}function yx(n){const r=Et(n),s=f.useRef(""),a=f.useRef(0),c=f.useCallback(p=>{const m=s.current+p;r(m),(function h(v){s.current=v,window.clearTimeout(a.current),v!==""&&(a.current=window.setTimeout(()=>h(""),1e3))})(m)},[r]),d=f.useCallback(()=>{s.current="",window.clearTimeout(a.current)},[]);return f.useEffect(()=>()=>window.clearTimeout(a.current),[]),[s,c,d]}function bx(n,r,s){const c=r.length>1&&Array.from(r).every(v=>v===r[0])?r[0]:r,d=s?n.indexOf(s):-1;let p=T3(n,Math.max(d,0));c.length===1&&(p=p.filter(v=>v!==s));const h=p.find(v=>v.textValue.toLowerCase().startsWith(c.toLowerCase()));return h!==s?h:void 0}function T3(n,r){return n.map((s,a)=>n[(r+a)%n.length])}var M3=Kv,I3=Xv,_3=Zv,D3=ex,O3=tx,L3=nx,z3=ix,F3=dx,$3=ux,B3=fx,H3=mx,W3=gx;function Ll({...n}){return o.jsx(M3,{"data-slot":"select",...n})}function lp({...n}){return o.jsx(_3,{"data-slot":"select-value",...n})}function zl({className:n,size:r="default",children:s,...a}){return o.jsxs(I3,{"data-slot":"select-trigger","data-size":r,className:We("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...a,children:[s,o.jsx(D3,{asChild:!0,children:o.jsx(ls,{className:"size-4 opacity-50"})})]})}function Fl({className:n,children:r,position:s="popper",...a}){return o.jsx(O3,{children:o.jsxs(L3,{"data-slot":"select-content",className:We("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",s==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:s,...a,children:[o.jsx(V3,{}),o.jsx(z3,{className:We("p-1",s==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:r}),o.jsx(U3,{})]})})}function yt({className:n,children:r,...s}){return o.jsxs(F3,{"data-slot":"select-item",className:We("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",n),...s,children:[o.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:o.jsx(B3,{children:o.jsx(un,{className:"size-4"})})}),o.jsx($3,{children:r})]})}function V3({className:n,...r}){return o.jsx(H3,{"data-slot":"select-scroll-up-button",className:We("flex cursor-default items-center justify-center py-1",n),...r,children:o.jsx(Hw,{className:"size-4"})})}function U3({className:n,...r}){return o.jsx(W3,{"data-slot":"select-scroll-down-button",className:We("flex cursor-default items-center justify-center py-1",n),...r,children:o.jsx(ls,{className:"size-4"})})}function G3({source:n,showDelete:r,onRemove:s,onUpdate:a}){const[c,d]=Zt.useState(!1),[p,m]=Zt.useState(n.name),[h,v]=Zt.useState(n.files||[]),y=Zt.useRef(null),x=Zt.useRef(null),b=()=>{d(!0),m(n.name)},S=()=>{d(!1),p.trim()?a(n.id,"name",p.trim()):m(n.name)},N=R=>{R.key==="Enter"?y.current?.blur():R.key==="Escape"&&(m(n.name),d(!1))},C=R=>{const I=R.target.value;I.length<=30&&m(I)};Zt.useEffect(()=>{c&&y.current&&(y.current.focus(),y.current.select())},[c]);const k=()=>{const R=p.length||1,I=8,W=24;return Math.max(160,Math.min(R*I+W,30*I+W))},E=R=>{const I=R.target.files;if(I){const W=Array.from(I).map(z=>({id:Date.now().toString()+Math.random().toString(),name:z.name,size:z.size,uploadedAt:new Date}));v([...h,...W])}},j=R=>{const I=h.filter(W=>W.id!==R);v(I)},M=R=>R<1024?R+" B":R<1024*1024?(R/1024).toFixed(1)+" KB":(R/(1024*1024)).toFixed(1)+" MB";return o.jsxs("div",{className:"space-y-4 p-6 border border-gray-300 rounded-lg bg-gray-100",children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsx("div",{className:"flex-shrink-0",style:{minWidth:"160px"},children:c?o.jsx(tn,{ref:y,value:p,onChange:C,onBlur:S,onKeyDown:N,maxLength:30,className:"h-8 px-2 bg-white border-gray-300",style:{width:`${k()}px`}}):o.jsxs("button",{onClick:b,className:"flex items-center gap-2 group hover:bg-gray-200 px-2 py-1 rounded transition-colors",style:{minWidth:"160px"},children:[o.jsx(og,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsx("span",{className:"truncate",children:n.name}),o.jsx(eu,{className:"w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]})}),r&&o.jsx(Fe,{variant:"ghost",size:"sm",onClick:()=>s(n.id),className:"ml-2 h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50",children:o.jsx(fs,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"grid grid-cols-10 gap-4",children:[o.jsxs("div",{className:"col-span-3",children:[o.jsx(_t,{htmlFor:`type-${n.id}`,className:"text-sm",children:"Type"}),o.jsxs(Ll,{value:n.type,onValueChange:R=>a(n.id,"type",R),children:[o.jsx(zl,{className:"mt-2",children:o.jsx(lp,{})}),o.jsxs(Fl,{children:[o.jsx(yt,{value:"sharepoint",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ph,{className:"w-4 h-4"}),"SharePoint"]})}),o.jsx(yt,{value:"gdrive",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(m2,{className:"w-4 h-4"}),"Google Drive"]})}),o.jsx(yt,{value:"aws",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Qw,{className:"w-4 h-4"}),"AWS S3"]})}),o.jsx(yt,{value:"local",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(og,{className:"w-4 h-4"}),"Local"]})}),o.jsx(yt,{value:"upload",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(el,{className:"w-4 h-4"}),"Upload"]})})]})]})]}),o.jsx("div",{className:"col-span-7",children:n.type==="upload"?o.jsxs("div",{children:[o.jsx(_t,{className:"text-sm",children:"Files"}),o.jsxs(Fe,{variant:"outline",onClick:()=>x.current?.click(),className:"mt-2 w-full",children:[o.jsx(el,{className:"w-4 h-4 mr-2"}),"Upload Files"]})]}):o.jsxs(o.Fragment,{children:[o.jsx(_t,{htmlFor:`path-${n.id}`,className:"text-sm",children:"URL or Connection"}),o.jsx(tn,{id:`path-${n.id}`,value:n.path,onChange:R=>a(n.id,"path",R.target.value),placeholder:n.type==="sharepoint"?"https://yourorg.sharepoint.com":n.type==="gdrive"?"https://drive.google.com/...":n.type==="aws"?"s3://bucket-name/path":"/Users/username/documents",className:"mt-2 bg-white border-gray-300"})]})})]}),n.type==="upload"&&o.jsxs("div",{className:"mt-4",children:[o.jsx(tn,{ref:x,type:"file",multiple:!0,accept:".pdf,.doc,.docx,.txt",onChange:E,className:"hidden"}),h.length>0?o.jsx("div",{className:"space-y-2",children:h.map(R=>o.jsxs("div",{className:"flex items-center justify-between gap-3 bg-white p-3 rounded border border-gray-300 hover:border-gray-500 transition-colors",children:[o.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[o.jsx(Sn,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("div",{className:"text-sm truncate",children:R.name}),o.jsx("div",{className:"text-xs text-gray-500",children:M(R.size)})]})]}),o.jsx(Fe,{variant:"ghost",size:"sm",onClick:()=>j(R.id),className:"h-8 w-8 p-0 text-gray-500 hover:text-red-600 hover:bg-red-50 flex-shrink-0",children:o.jsx(ro,{className:"w-4 h-4"})})]},R.id))}):o.jsx("div",{className:"text-sm text-gray-500 italic py-2",children:"No files uploaded yet"})]})]})}function Q3({dataSources:n,onAdd:r,onRemove:s,onUpdate:a,showDescription:c=!0}){return o.jsxs("div",{className:"space-y-6",children:[c&&o.jsx("p",{className:"text-gray-500 text-sm",children:"Create a library to organize documents by topic or project. Your AI assistant will reference these documents to provide contextual responses. You can connect cloud sources or upload files directly."}),o.jsxs("div",{className:"space-y-4",children:[n.map(d=>o.jsx(G3,{source:d,showDelete:n.length>1,onRemove:s,onUpdate:a},d.id)),o.jsxs(Fe,{variant:"outline",onClick:r,className:"w-full border-dashed border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-100 text-gray-500",children:[o.jsx(hh,{className:"w-4 h-4 mr-2"}),"Add Another Library"]})]})]})}function q3({colorTheme:n,fontStyle:r}){const s=Il(r),[a,c]=f.useState([{id:"1",name:"GovTech branding guidelines",type:"upload",path:"",enabled:!0,files:[{id:"file-1",name:"GovTech_Brand_Guidelines_2024.pdf",size:2458624,uploadedAt:new Date(Date.now()-864e5*3)},{id:"file-2",name:"Logo_Usage_Guidelines.pdf",size:1536e3,uploadedAt:new Date(Date.now()-864e5*7)}]},{id:"2",name:"Procurement Guidelines",type:"sharepoint",path:"",enabled:!0},{id:"3",name:"AI Programme Resources",type:"gdrive",path:"https://drive.google.com/drive/folders/ai-programme",enabled:!0},{id:"4",name:"Policy Documents",type:"aws",path:"s3://gov-docs/policy",enabled:!0}]),d=()=>{c([...a,{id:Date.now().toString(),name:"New Library",type:"sharepoint",path:"",enabled:!0}])},p=h=>{c(a.filter(v=>v.id!==h))},m=(h,v,y)=>{c(a.map(x=>x.id===h?{...x,[v]:y}:x))};return o.jsxs("div",{className:`flex-1 flex flex-col bg-gray-100 ${s.base}`,children:[o.jsx("div",{className:"flex items-center gap-2 p-4 bg-gray-100",children:o.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:"Library"})}),o.jsx("div",{className:"flex-1 overflow-auto",children:o.jsx("div",{className:"max-w-4xl mx-auto px-6 py-8",children:o.jsx(Q3,{dataSources:a,onAdd:d,onRemove:p,onUpdate:m,showDescription:!0})})})]})}const K3=[{id:"marketing-software-aor",title:"Marketing Software AOR",preview:"Draft an approval paper for procurement..."},{id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting",preview:"Help me shortlist candidates from Workday..."},{id:"pq-response-mnd",title:"PQ Response - MND Housing",preview:"Draft a parliamentary question response..."},{id:"feature-overview",title:"Feature Overview",preview:"Show me what this AI assistant can do..."},{id:"customer-support",title:"Customer Support",preview:"Help with customer inquiries..."},{id:"feedback-collection",title:"Feedback Collection",preview:"Collect and analyze feedback..."},{id:"procurement-rfq",title:"Procurement RFQ to AOR",preview:"Help with procurement workflow..."}];function Y3({colorTheme:n,fontStyle:r,chats:s,onSelectChat:a,onDeleteChat:c,onSelectSimulation:d}){const p=qv(n),m=Il(r),[h,v]=f.useState(""),y=s.filter(S=>S.title.toLowerCase().includes(h.toLowerCase())),x=K3.filter(S=>S.title.toLowerCase().includes(h.toLowerCase())),b=S=>{const C=Math.abs(new Date().getTime()-S.getTime()),k=Math.floor(C/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:S.toLocaleDateString()};return o.jsxs("div",{className:`flex-1 flex flex-col bg-gray-100 ${m.base}`,children:[o.jsx("div",{className:"flex items-center gap-2 p-4 bg-gray-100",children:o.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:"Chats"})}),o.jsx("div",{className:"flex-1 overflow-auto",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-8",children:[o.jsxs("div",{className:"relative max-w-2xl mx-auto w-full",children:[o.jsx(vh,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),o.jsx(tn,{placeholder:"Search chats...",value:h,onChange:S=>v(S.target.value),className:`pl-10 text-sm py-6 rounded-xl ${p.inputBorder} ${m.input} bg-white shadow-sm`})]}),o.jsxs("div",{className:"space-y-2",children:[x.map(S=>o.jsxs("div",{onClick:()=>d(S.id),className:"flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200",children:[o.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:o.jsx(ds,{className:"w-5 h-5 text-gray-600"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:S.title}),o.jsx("p",{className:"text-sm text-gray-500 truncate",children:S.preview})]}),o.jsx("div",{className:"text-xs text-gray-400 flex-shrink-0",children:"Demo"})]},S.id)),y.map(S=>o.jsxs("div",{onClick:()=>a(S.id),className:"group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200",children:[o.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:o.jsx(ds,{className:"w-5 h-5 text-gray-600"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:S.title}),o.jsx("p",{className:"text-sm text-gray-500 truncate",children:S.messages.length>0?S.messages[S.messages.length-1].content.slice(0,60)+"...":"No messages yet"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xs text-gray-400 flex-shrink-0",children:b(S.createdAt)}),o.jsxs(Kn,{children:[o.jsx(Yn,{asChild:!0,children:o.jsx(Button,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-8 w-8 p-0",onClick:N=>N.stopPropagation(),children:o.jsx(ps,{className:"w-4 h-4"})})}),o.jsx(Xn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:o.jsxs(xt,{onClick:N=>{N.stopPropagation(),c(S.id)},className:"text-red-500 hover:bg-gray-100",children:[o.jsx(fs,{className:"w-4 h-4 mr-2"}),"Delete"]})})]})]})]},S.id)),y.length===0&&x.length===0&&o.jsxs("div",{className:"text-center py-12",children:[o.jsx(ds,{className:"w-12 h-12 text-gray-300 mx-auto mb-4"}),o.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No chats found"}),o.jsx("p",{className:"text-sm text-gray-500",children:h?"Try a different search term":"Start a new chat to get started"})]})]})]})})]})}function bu({onSend:n,colorTheme:r="light",fontStyle:s="modern",showFileUpload:a=!1,autoTypeText:c,showClassification:d=!1,defaultClassification:p="r-sn",value:m,onChange:h,disabled:v=!1,showTypingHint:y=!1,placeholder:x,autoFocus:b=!1,bookmarkedAssistants:S=[],assistantType:N}){const[C,k]=f.useState(""),E=m!==void 0?m:C,j=Y=>{h&&h(Y),k(Y)},[M,R]=f.useState([]),[I,W]=f.useState([]),[z,V]=f.useState([]),[ne,te]=f.useState(!1),[fe,ae]=f.useState(!1),[he,me]=f.useState(!1),[ge,J]=f.useState(p),[Q,_]=f.useState(0),B=v,q=f.useRef(null),A=f.useRef(null),U=[{id:"r-sn",label:"R/SN",fullName:"Restricted / Sensitive Normal"},{id:"cce-sn",label:"C(CE)/SN",fullName:"Confidential (Cloud-Eligible) / Sensitive Normal"}],H=[{id:"web-search",name:"Web Search",icon:mh}],G=Object.values(di).flat(),re=[...ci,...li,...G],O=Array.from(new Map(re.map(Y=>[Y.id,Y])).values()).filter(Y=>S.includes(Y.id)).map(Y=>({id:Y.id,name:Y.name})),K=()=>{E.trim()&&(n(E,d?ge:void 0),j(""))},ue=Y=>{const je=Y.target.files?.[0];je&&(n(`[Uploaded file: ${je.name}]`),q.current&&(q.current.value=""))},pe=Y=>{R(je=>je.includes(Y)?je.filter(Qe=>Qe!==Y):[...je,Y])},Re=Y=>{W(je=>je.includes(Y)?je.filter(Qe=>Qe!==Y):[...je,Y])};f.useEffect(()=>{(c||b)&&A.current?.focus()},[c,b]);const Oe=Y=>{if(!c){Y.key==="Enter"&&!Y.shiftKey&&(Y.preventDefault(),K());return}if(Y.preventDefault(),Y.key==="Enter")j(c),_(c.length),setTimeout(()=>{n(c,d?ge:void 0),j(""),_(0)},100);else if(Y.key==="Backspace"){if(Q>0){const je=Q-1;_(je),j(c.substring(0,je))}}else if(Y.key.length===1&&Q<c.length){const je=Q+1;_(je),j(c.substring(0,je))}};return o.jsxs("div",{className:"rounded-2xl border border-gray-300 p-2 focus-within:ring-2 focus-within:ring-gray-500/20 bg-white",children:[o.jsx("div",{className:"mb-2",children:o.jsx(Ei,{ref:A,value:E,onChange:c?void 0:(Y=>j(Y.target.value)),onKeyDown:Oe,placeholder:x||(c?"Type to continue...":B?"Waiting for response...":"Ask me anything..."),className:`w-full min-h-[64px] max-h-[200px] resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-gray-900 text-base ${B?"text-gray-400":""}`,rows:1,disabled:B})}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx("input",{ref:q,type:"file",className:"hidden",onChange:ue}),o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx(Fe,{onClick:()=>q.current?.click(),size:"icon",variant:"ghost",disabled:B,className:`h-7 w-7 flex-shrink-0 ${B?"opacity-50 cursor-not-allowed":""}`,children:o.jsx(R2,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Add files"})})]})}),!N&&o.jsx(Ct,{children:o.jsx(tt,{children:o.jsxs(Kn,{open:B?!1:fe,onOpenChange:ae,children:[o.jsx(nt,{asChild:!0,children:o.jsx(Yn,{asChild:!0,children:o.jsxs(Fe,{type:"button",size:"icon",variant:"ghost",disabled:B,className:`h-7 w-7 flex-shrink-0 relative ${B?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx(U2,{className:"w-3.5 h-3.5"}),M.length+I.length>0&&o.jsx("span",{className:"absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center",children:M.length+I.length})]})})}),o.jsx(rt,{children:o.jsx("p",{children:"Add tools"})}),o.jsxs(Xn,{className:"w-64 p-0 z-50 bg-white dark:bg-gray-900 overflow-visible",align:"start",side:"top",sideOffset:8,children:[o.jsxs("div",{className:"p-3 border-b bg-white dark:bg-gray-900",children:[o.jsx("h3",{className:"font-medium text-xs",children:"Available Tools"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:"Select tools you would like the assistant to use if needed."})]}),o.jsxs("div",{className:"p-2 bg-white dark:bg-gray-900",children:[H.map(Y=>{const je=Y.icon,Qe=M.includes(Y.id);return o.jsxs("button",{type:"button",onClick:mt=>{mt.preventDefault(),mt.stopPropagation(),pe(Y.id)},className:"w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",children:[o.jsx(je,{className:"w-5 h-5 flex-shrink-0 text-gray-700"}),o.jsx("span",{className:"flex-1 text-left text-xs text-gray-900",children:Y.name}),Qe&&o.jsx(un,{className:"w-4 h-4 text-gray-900"})]},Y.id)}),o.jsxs("div",{className:"relative group/assistants mt-1 border-t border-gray-200 pt-1",children:[o.jsxs("button",{type:"button",className:"w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",children:[o.jsx(dh,{className:"w-5 h-5 flex-shrink-0 text-gray-700"}),o.jsx("span",{className:"flex-1 text-left text-xs text-gray-900",children:"Custom Assistants"}),o.jsx(cs,{className:"w-4 h-4 text-gray-400"})]}),o.jsx("div",{className:"absolute left-full top-0 ml-1 w-56 bg-white border-2 border-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover/assistants:opacity-100 group-hover/assistants:visible transition-all z-[100]",children:o.jsx("div",{className:"p-2",children:O.length===0?o.jsx("div",{className:"px-3 py-4 text-center",children:o.jsx("p",{className:"text-xs text-gray-500",children:"Bookmark a custom assistant for it to appear here"})}):O.map(Y=>{const je=I.includes(Y.id);return o.jsxs("button",{type:"button",onClick:Qe=>{Qe.preventDefault(),Qe.stopPropagation(),Re(Y.id)},className:"w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left",children:[o.jsx("span",{className:"flex-1 text-xs text-gray-900",children:Y.name}),je&&o.jsx(un,{className:"w-4 h-4 text-gray-900"})]},Y.id)})})})]})]})]})]})})})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[d&&o.jsx(Ct,{children:o.jsxs(Kn,{open:he,onOpenChange:me,children:[o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx(Yn,{asChild:!0,children:o.jsxs(Fe,{type:"button",size:"sm",variant:"ghost",className:"h-7 px-2 flex-shrink-0 gap-1 text-xs",children:[o.jsx(Za,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:U.find(Y=>Y.id===ge)?.label}),o.jsx(ls,{className:"w-3 h-3 opacity-50"})]})})}),o.jsx(rt,{side:"top",children:o.jsx("p",{children:U.find(Y=>Y.id===ge)?.fullName})})]}),o.jsxs(Xn,{className:"w-64 p-0 z-50 bg-white dark:bg-gray-900",align:"end",side:"top",sideOffset:8,children:[o.jsxs("div",{className:"p-3 border-b bg-white dark:bg-gray-900",children:[o.jsx("h3",{className:"font-medium text-xs",children:"Data Classification"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:"Select the classification level"})]}),o.jsx("div",{className:"p-2 bg-white dark:bg-gray-900",children:U.map(Y=>{const je=ge===Y.id;return o.jsxs(xt,{onClick:()=>J(Y.id),className:`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${je?"bg-gray-200":""}`,children:[o.jsx(Za,{className:"w-4 h-4 flex-shrink-0 text-gray-700"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"text-xs font-medium text-gray-900",children:Y.label}),o.jsx("div",{className:"text-[10px] text-gray-500",children:Y.fullName})]}),je&&o.jsx("div",{className:"w-2 h-2 rounded-full bg-gray-900"})]},Y.id)})})]})]})}),o.jsx(Fe,{onClick:K,disabled:!E.trim()||B,size:"icon",className:`h-7 w-7 flex-shrink-0 rounded-full ${B?"bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300":""}`,children:o.jsx(Sw,{className:"w-3.5 h-3.5"})})]})]})]})}var X3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],J3=X3.reduce((n,r)=>{const s=ku(`Primitive.${r}`),a=f.forwardRef((c,d)=>{const{asChild:p,...m}=c,h=p?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(h,{...m,ref:d})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{}),Z3="Separator",qg="horizontal",eE=["horizontal","vertical"],wx=f.forwardRef((n,r)=>{const{decorative:s,orientation:a=qg,...c}=n,d=tE(a)?a:qg,m=s?{role:"none"}:{"aria-orientation":d==="vertical"?d:void 0,role:"separator"};return o.jsx(J3.div,{"data-orientation":d,...m,...c,ref:r})});wx.displayName=Z3;function tE(n){return eE.includes(n)}var nE=wx;function fi({className:n,orientation:r="horizontal",decorative:s=!0,...a}){return o.jsx(nE,{"data-slot":"separator-root",decorative:s,orientation:r,className:We("bg-gray-300 dark:bg-gray-700 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",n),...a})}function wu({className:n}){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[o.jsx("path",{d:"M4 10c0-1.5 1.5-3 4-3h8c2.5 0 4 1.5 4 3"}),o.jsx("ellipse",{cx:"12",cy:"10",rx:"8",ry:"2"}),o.jsx("path",{d:"M6 10v1c0 1 1 2 2 2h8c1 0 2-1 2-2v-1"}),o.jsx("circle",{cx:"8",cy:"18",r:"2.5"}),o.jsx("circle",{cx:"16",cy:"18",r:"2.5"}),o.jsx("path",{d:"M10.5 18h3"}),o.jsx("path",{d:"M8 15.5v-1"}),o.jsx("path",{d:"M16 15.5v-1"})]})}const rE=n=>{switch(n){case"HR Officer":return["Help me draft a job description","Shortlist candidates for a position","Create interview questions","Review leave policy updates"];case"Policy Officer":return["Draft a parliamentary question response","Summarize this policy document","Create a policy brief","Analyze regulatory impact"];case"Marketing Officer":return["Draft a marketing campaign brief","Create social media content plan","Analyze campaign performance","Help with procurement AOR"];default:return["Help me draft a document","Summarize this content","Create a project plan","Analyze data trends"]}};function sE({colorTheme:n,fontStyle:r,onSelectChat:s,onNewChat:a,isSidebarOpen:c,userProfile:d,onSelectSimulation:p,onStartChat:m,bookmarkedAssistants:h=[]}){const[v,y]=f.useState(""),[x,b]=f.useState("rsn"),[S,N]=f.useState(!1),C=new Date,k=rE(d.role),E=j=>{y(j)};return o.jsxs("div",{className:"flex-1 h-full flex flex-col bg-gray-100",children:[o.jsx("div",{className:"absolute top-4 right-6",children:o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>N(!S),className:`p-2 rounded-lg transition-colors ${S?"bg-gray-200 text-gray-700":"text-gray-500 hover:text-gray-700 hover:bg-gray-200"}`,children:o.jsx(wu,{className:"w-5 h-5"})})}),o.jsx(rt,{children:o.jsx("p",{children:S?"Exit incognito mode":"Enable incognito mode"})})]})})}),o.jsx("div",{className:"flex-1 overflow-auto flex items-center",children:o.jsxs("div",{className:"flex flex-col w-full max-w-chat mx-auto px-6",children:[o.jsx("div",{className:"pb-8",children:S?o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl mb-1 tracking-tight font-semibold text-gray-900",style:{fontSize:"2rem"},children:"Incognito chat"}),o.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[o.jsx(wu,{className:"w-4 h-4 text-gray-500"}),o.jsx("p",{className:"text-sm text-gray-500",children:"Incognito chat does not reference memories or save to chat history"})]})]}):o.jsxs("h1",{className:"text-2xl mb-1 tracking-tight font-semibold text-gray-900",style:{fontSize:"2rem"},children:["Good ",C.getHours()<12?"Morning":C.getHours()<18?"Afternoon":"Evening",", ",d.name.split(" ")[0]]})}),o.jsxs("div",{className:"mb-2 flex items-center gap-4",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-sm font-medium text-gray-900",children:"Data classification"}),o.jsxs(Ll,{value:x,onValueChange:j=>b(j),children:[o.jsx(zl,{className:"w-auto h-9 bg-white border-gray-300 px-3",children:o.jsxs("div",{className:"flex items-center gap-2",children:[x==="rsn"?o.jsx(Za,{className:"w-4 h-4"}):o.jsx(cg,{className:"w-4 h-4"}),o.jsxs("span",{className:"whitespace-nowrap",children:["Up to ",x==="rsn"?"R/SN":"C(CE)/SN"]})]})}),o.jsxs(Fl,{className:"w-[400px]",children:[o.jsxs("div",{className:"p-3",children:[o.jsx("h3",{className:"font-semibold text-gray-900",children:"Data Classification"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Select the highest classification level allowed"})]}),o.jsx(fi,{}),o.jsxs("div",{className:"p-2",children:[o.jsx(yt,{value:"rsn",className:"cursor-pointer",children:o.jsxs("div",{className:"flex items-start gap-3 py-2",children:[o.jsx(Za,{className:"w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-semibold text-gray-900",children:"R/SN"}),o.jsx("div",{className:"text-sm text-gray-500",children:"Restricted / Sensitive Normal"})]})]})}),o.jsx(yt,{value:"cce-sn",className:"cursor-pointer",children:o.jsxs("div",{className:"flex items-start gap-3 py-2",children:[o.jsx(cg,{className:"w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-semibold text-gray-900",children:"C(CE)/SN"}),o.jsx("div",{className:"text-sm text-gray-500",children:"Confidential (Cloud-Eligible) / Sensitive Normal"}),o.jsx("div",{className:"text-sm font-bold text-gray-900 mt-1",children:"CCE/SN chats will not be saved."})]})]})})]})]})]})]}),o.jsx("p",{className:"text-xs text-gray-500",children:"This setting cannot be changed once the chat begins."})]}),o.jsxs("div",{"data-tour":"chat-interface",children:[o.jsx("div",{className:"rounded-2xl border bg-white border-gray-300",children:o.jsx(bu,{onSend:j=>{m&&m(j,x,S)},colorTheme:n,fontStyle:r,showFileUpload:!0,showClassification:!1,value:v,onChange:y,autoFocus:!0,bookmarkedAssistants:h})}),o.jsx("div",{className:`mt-8 flex flex-wrap gap-2 transition-opacity ${v?"opacity-0 pointer-events-none":"opacity-100"}`,children:k.map((j,M)=>o.jsx("button",{onClick:()=>E(j),className:"px-3 py-2 text-sm rounded-full transition-colors bg-white border border-gray-900 text-gray-900 hover:bg-gray-100",children:j},M))})]})]})})]})}function oE({onLogin:n}){const r=()=>{n({name:"John Doe",email:"john.doe@tech.gov.sg",role:"Product Manager",agency:"GovTech"},!0)};return o.jsx("div",{className:"min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4",children:o.jsx(ui,{className:"w-full max-w-md",children:o.jsxs(pi,{className:"p-8 pb-10 space-y-6 text-center",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("p",{className:"text-gray-500 text-sm",children:"Welcome to the"}),o.jsx("h1",{className:"text-gray-900 text-2xl font-bold leading-tight",children:"AI Assistant Desk (MVP)"})]}),o.jsx(Fe,{className:"w-full h-12",onClick:r,children:"Log In with TechPass"}),o.jsxs("p",{className:"text-sm text-gray-500",children:["Having trouble logging in?"," ",o.jsx("a",{href:"#",className:"text-gray-900 hover:text-gray-700 underline",onClick:s=>s.preventDefault(),children:"Contact support"})]})]})})})}var $l="Checkbox",[iE]=mn($l),[aE,cp]=iE($l);function lE(n){const{__scopeCheckbox:r,checked:s,children:a,defaultChecked:c,disabled:d,form:p,name:m,onCheckedChange:h,required:v,value:y="on",internal_do_not_use_render:x}=n,[b,S]=On({prop:s,defaultProp:c??!1,onChange:h,caller:$l}),[N,C]=f.useState(null),[k,E]=f.useState(null),j=f.useRef(!1),M=N?!!p||!!N.closest("form"):!0,R={checked:b,disabled:d,setChecked:S,control:N,setControl:C,name:m,form:p,value:y,hasConsumerStoppedPropagationRef:j,required:v,defaultChecked:zr(c)?!1:c,isFormControl:M,bubbleInput:k,setBubbleInput:E};return o.jsx(aE,{scope:r,...R,children:cE(x)?x(R):a})}var Sx="CheckboxTrigger",Cx=f.forwardRef(({__scopeCheckbox:n,onKeyDown:r,onClick:s,...a},c)=>{const{control:d,value:p,disabled:m,checked:h,required:v,setControl:y,setChecked:x,hasConsumerStoppedPropagationRef:b,isFormControl:S,bubbleInput:N}=cp(Sx,n),C=He(c,y),k=f.useRef(h);return f.useEffect(()=>{const E=d?.form;if(E){const j=()=>x(k.current);return E.addEventListener("reset",j),()=>E.removeEventListener("reset",j)}},[d,x]),o.jsx(Ie.button,{type:"button",role:"checkbox","aria-checked":zr(h)?"mixed":h,"aria-required":v,"data-state":Rx(h),"data-disabled":m?"":void 0,disabled:m,value:p,...a,ref:C,onKeyDown:ve(r,E=>{E.key==="Enter"&&E.preventDefault()}),onClick:ve(s,E=>{x(j=>zr(j)?!0:!j),N&&S&&(b.current=E.isPropagationStopped(),b.current||E.stopPropagation())})})});Cx.displayName=Sx;var kx=f.forwardRef((n,r)=>{const{__scopeCheckbox:s,name:a,checked:c,defaultChecked:d,required:p,disabled:m,value:h,onCheckedChange:v,form:y,...x}=n;return o.jsx(lE,{__scopeCheckbox:s,checked:c,defaultChecked:d,disabled:m,required:p,onCheckedChange:v,name:a,form:y,value:h,internal_do_not_use_render:({isFormControl:b})=>o.jsxs(o.Fragment,{children:[o.jsx(Cx,{...x,ref:r,__scopeCheckbox:s}),b&&o.jsx(Ex,{__scopeCheckbox:s})]})})});kx.displayName=$l;var Nx="CheckboxIndicator",jx=f.forwardRef((n,r)=>{const{__scopeCheckbox:s,forceMount:a,...c}=n,d=cp(Nx,s);return o.jsx(Dt,{present:a||zr(d.checked)||d.checked===!0,children:o.jsx(Ie.span,{"data-state":Rx(d.checked),"data-disabled":d.disabled?"":void 0,...c,ref:r,style:{pointerEvents:"none",...n.style}})})});jx.displayName=Nx;var Px="CheckboxBubbleInput",Ex=f.forwardRef(({__scopeCheckbox:n,...r},s)=>{const{control:a,hasConsumerStoppedPropagationRef:c,checked:d,defaultChecked:p,required:m,disabled:h,name:v,value:y,form:x,bubbleInput:b,setBubbleInput:S}=cp(Px,n),N=He(s,S),C=ip(d),k=Lu(a);f.useEffect(()=>{const j=b;if(!j)return;const M=window.HTMLInputElement.prototype,I=Object.getOwnPropertyDescriptor(M,"checked").set,W=!c.current;if(C!==d&&I){const z=new Event("click",{bubbles:W});j.indeterminate=zr(d),I.call(j,zr(d)?!1:d),j.dispatchEvent(z)}},[b,C,d,c]);const E=f.useRef(zr(d)?!1:d);return o.jsx(Ie.input,{type:"checkbox","aria-hidden":!0,defaultChecked:p??E.current,required:m,disabled:h,name:v,value:y,form:x,...r,tabIndex:-1,ref:N,style:{...r.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});Ex.displayName=Px;function cE(n){return typeof n=="function"}function zr(n){return n==="indeterminate"}function Rx(n){return zr(n)?"indeterminate":n?"checked":"unchecked"}function dE({className:n,...r}){return o.jsx(kx,{"data-slot":"checkbox",className:We("peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...r,children:o.jsx(jx,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:o.jsx(un,{className:"size-3.5"})})})}const uE=[{id:"Concise",label:"Concise",description:"Brief and to the point"},{id:"Professional",label:"Professional",description:"Formal business tone"},{id:"Academic",label:"Academic",description:"Scholarly and detailed"},{id:"Creative",label:"Creative",description:"Imaginative and expressive"},{id:"Others",label:"Others",description:"Describe your own style"}];function pE({userProfile:n,onUpdateProfile:r,onComplete:s}){const[a,c]=f.useState(1),[d,p]=f.useState("Concise"),[m,h]=f.useState(""),[v,y]=f.useState(n.name),[x,b]=f.useState(""),[S,N]=f.useState(""),[C,k]=f.useState([]),E=()=>{r({...n,name:v.trim()||n.name,role:x==="other"?S:x,aiStyle:d==="other"?m:d,workActivities:C}),s()},j=()=>{a===1?c(2):E()},M=()=>{a===2&&c(1)},R=I=>{k(W=>W.includes(I)?W.filter(z=>z!==I):[...W,I])};return o.jsx("div",{className:"min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4",children:o.jsxs(ui,{className:"w-full max-w-2xl shadow-lg border-gray-300 bg-white",children:[o.jsxs(pi,{className:"p-8",children:[a===1&&o.jsxs("div",{className:"space-y-6 animate-in fade-in duration-300",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-xs text-gray-500 mb-2",children:"Step 1 of 2"}),o.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Tell Us About Yourself"}),o.jsx("p",{className:"text-gray-500",children:"Help us personalize your experience"})]}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx(_t,{htmlFor:"name",children:"What would you like us to call you?"}),o.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-2",children:"Choose something you're comfortable with—your first name, nickname, or preferred title."}),o.jsx(tn,{id:"name",value:v,onChange:I=>y(I.target.value),placeholder:"e.g., Jayden, Jay, Mr. Tan",className:"bg-white border-gray-300"})]}),o.jsx(fi,{className:"bg-gray-300"}),o.jsxs("div",{children:[o.jsx(_t,{htmlFor:"job-role",children:"Which best describes your primary job role?"}),o.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-2",children:"This helps the AI understand your professional context."}),o.jsxs(Ll,{value:x,onValueChange:b,children:[o.jsx(zl,{id:"job-role",className:"bg-white border-gray-300",children:o.jsx(lp,{placeholder:"Select your job role"})}),o.jsxs(Fl,{children:[o.jsx(yt,{value:"policy-strategy",children:"Policy / Strategy"}),o.jsx(yt,{value:"operations",children:"Operations"}),o.jsx(yt,{value:"hr-people",children:"HR / People"}),o.jsx(yt,{value:"finance-procurement",children:"Finance / Procurement"}),o.jsx(yt,{value:"legal-compliance",children:"Legal / Compliance"}),o.jsx(yt,{value:"communications",children:"Communications"}),o.jsx(yt,{value:"data-tech",children:"Data / Tech"}),o.jsx(yt,{value:"other",children:"Other"})]})]}),x==="other"&&o.jsx(tn,{placeholder:"Describe your job role...",value:S,onChange:I=>N(I.target.value),className:"mt-2 bg-white border-gray-300"})]}),o.jsx(fi,{className:"bg-gray-300"}),o.jsxs("div",{children:[o.jsx(_t,{children:"What do you spend most of your time doing?"}),o.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-3",children:"Select all that apply"}),o.jsx("div",{className:"space-y-3",children:[{id:"drafting",label:"Drafting documents"},{id:"reviewing",label:"Reviewing / editing"},{id:"researching",label:"Researching / summarising"},{id:"briefings",label:"Preparing briefings / slides"},{id:"cases",label:"Handling cases"},{id:"queries",label:"Responding to queries"},{id:"analysis",label:"Data analysis"},{id:"planning",label:"Planning / coordination"}].map(I=>o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(dE,{id:I.id,checked:C.includes(I.id),onCheckedChange:()=>R(I.id)}),o.jsx(_t,{htmlFor:I.id,className:"text-sm font-normal cursor-pointer",children:I.label})]},I.id))})]})]})]}),a===2&&o.jsxs("div",{className:"space-y-6 animate-in fade-in duration-300",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-xs text-gray-500 mb-2",children:"Step 2 of 2"}),o.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Choose Your AI Style"}),o.jsx("p",{className:"text-gray-500",children:"Select how you'd like your AI Assistant to communicate with you"})]}),o.jsx("div",{className:"grid grid-cols-2 gap-3",children:uE.map(I=>o.jsxs("button",{onClick:()=>p(I.id),className:We("relative p-4 rounded-lg border-2 text-left transition-all",d===I.id?"border-gray-900 bg-gray-50":"border-gray-300 hover:border-gray-400"),children:[d===I.id&&o.jsx("div",{className:"absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center",children:o.jsx(un,{className:"w-3 h-3 text-white"})}),o.jsx("div",{className:"font-semibold text-gray-900 mb-1",children:I.label}),o.jsx("div",{className:"text-xs text-gray-500",children:I.description})]},I.id))}),d==="Others"&&o.jsx("div",{className:"mt-4",children:o.jsx(tn,{placeholder:"Describe your preferred style...",value:m,onChange:I=>h(I.target.value),className:"bg-white border-gray-300"})})]})]}),o.jsx("div",{className:"p-6 border-t border-gray-300 bg-gray-100",children:o.jsx("div",{className:"flex justify-end items-center gap-4",children:o.jsxs("div",{className:"flex items-center gap-3",children:[a===2&&o.jsxs(Fe,{variant:"outline",onClick:M,className:"gap-2 h-12 text-base border-gray-300 hover:bg-gray-100",children:[o.jsx(ni,{className:"w-4 h-4"}),"Back"]}),o.jsxs(Fe,{onClick:j,className:"bg-gray-900 hover:bg-gray-800 text-white gap-2 h-12 text-base px-8",children:[a===1?"Next":"Complete Setup",o.jsx(bw,{className:"w-4 h-4"})]})]})})})]})})}var Bl="Tabs",[fE]=mn(Bl,[kl]),Ax=kl(),[mE,dp]=fE(Bl),Tx=f.forwardRef((n,r)=>{const{__scopeTabs:s,value:a,onValueChange:c,defaultValue:d,orientation:p="horizontal",dir:m,activationMode:h="automatic",...v}=n,y=vi(m),[x,b]=On({prop:a,onChange:c,defaultProp:d??"",caller:Bl});return o.jsx(mE,{scope:s,baseId:en(),value:x,onValueChange:b,orientation:p,dir:y,activationMode:h,children:o.jsx(Ie.div,{dir:y,"data-orientation":p,...v,ref:r})})});Tx.displayName=Bl;var Mx="TabsList",Ix=f.forwardRef((n,r)=>{const{__scopeTabs:s,loop:a=!0,...c}=n,d=dp(Mx,s),p=Ax(s);return o.jsx(S0,{asChild:!0,...p,orientation:d.orientation,dir:d.dir,loop:a,children:o.jsx(Ie.div,{role:"tablist","aria-orientation":d.orientation,...c,ref:r})})});Ix.displayName=Mx;var _x="TabsTrigger",Dx=f.forwardRef((n,r)=>{const{__scopeTabs:s,value:a,disabled:c=!1,...d}=n,p=dp(_x,s),m=Ax(s),h=zx(p.baseId,a),v=Fx(p.baseId,a),y=a===p.value;return o.jsx(C0,{asChild:!0,...m,focusable:!c,active:y,children:o.jsx(Ie.button,{type:"button",role:"tab","aria-selected":y,"aria-controls":v,"data-state":y?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:h,...d,ref:r,onMouseDown:ve(n.onMouseDown,x=>{!c&&x.button===0&&x.ctrlKey===!1?p.onValueChange(a):x.preventDefault()}),onKeyDown:ve(n.onKeyDown,x=>{[" ","Enter"].includes(x.key)&&p.onValueChange(a)}),onFocus:ve(n.onFocus,()=>{const x=p.activationMode!=="manual";!y&&!c&&x&&p.onValueChange(a)})})})});Dx.displayName=_x;var Ox="TabsContent",Lx=f.forwardRef((n,r)=>{const{__scopeTabs:s,value:a,forceMount:c,children:d,...p}=n,m=dp(Ox,s),h=zx(m.baseId,a),v=Fx(m.baseId,a),y=a===m.value,x=f.useRef(y);return f.useEffect(()=>{const b=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(b)},[]),o.jsx(Dt,{present:c||y,children:({present:b})=>o.jsx(Ie.div,{"data-state":y?"active":"inactive","data-orientation":m.orientation,role:"tabpanel","aria-labelledby":h,hidden:!b,id:v,tabIndex:0,...p,ref:r,style:{...n.style,animationDuration:x.current?"0s":void 0},children:b&&d})})});Lx.displayName=Ox;function zx(n,r){return`${n}-trigger-${r}`}function Fx(n,r){return`${n}-content-${r}`}var gE=Tx,hE=Ix,vE=Dx,xE=Lx;function yE({className:n,...r}){return o.jsx(gE,{"data-slot":"tabs",className:We("flex flex-col gap-2",n),...r})}function bE({className:n,...r}){return o.jsx(hE,{"data-slot":"tabs-list",className:We("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",n),...r})}function Kg({className:n,...r}){return o.jsx(vE,{"data-slot":"tabs-trigger",className:We("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...r})}function Yg({className:n,...r}){return o.jsx(xE,{"data-slot":"tabs-content",className:We("flex-1 outline-none",n),...r})}var Hl="Switch",[wE]=mn(Hl),[SE,CE]=wE(Hl),$x=f.forwardRef((n,r)=>{const{__scopeSwitch:s,name:a,checked:c,defaultChecked:d,required:p,disabled:m,value:h="on",onCheckedChange:v,form:y,...x}=n,[b,S]=f.useState(null),N=He(r,M=>S(M)),C=f.useRef(!1),k=b?y||!!b.closest("form"):!0,[E,j]=On({prop:c,defaultProp:d??!1,onChange:v,caller:Hl});return o.jsxs(SE,{scope:s,checked:E,disabled:m,children:[o.jsx(Ie.button,{type:"button",role:"switch","aria-checked":E,"aria-required":p,"data-state":Vx(E),"data-disabled":m?"":void 0,disabled:m,value:h,...x,ref:N,onClick:ve(n.onClick,M=>{j(R=>!R),k&&(C.current=M.isPropagationStopped(),C.current||M.stopPropagation())})}),k&&o.jsx(Wx,{control:b,bubbles:!C.current,name:a,value:h,checked:E,required:p,disabled:m,form:y,style:{transform:"translateX(-100%)"}})]})});$x.displayName=Hl;var Bx="SwitchThumb",Hx=f.forwardRef((n,r)=>{const{__scopeSwitch:s,...a}=n,c=CE(Bx,s);return o.jsx(Ie.span,{"data-state":Vx(c.checked),"data-disabled":c.disabled?"":void 0,...a,ref:r})});Hx.displayName=Bx;var kE="SwitchBubbleInput",Wx=f.forwardRef(({__scopeSwitch:n,control:r,checked:s,bubbles:a=!0,...c},d)=>{const p=f.useRef(null),m=He(p,d),h=ip(s),v=Lu(r);return f.useEffect(()=>{const y=p.current;if(!y)return;const x=window.HTMLInputElement.prototype,S=Object.getOwnPropertyDescriptor(x,"checked").set;if(h!==s&&S){const N=new Event("click",{bubbles:a});S.call(y,s),y.dispatchEvent(N)}},[h,s,a]),o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...c,tabIndex:-1,ref:m,style:{...c.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});Wx.displayName=kE;function Vx(n){return n?"checked":"unchecked"}var NE=$x,jE=Hx;function PE({className:n,...r}){return o.jsx(NE,{"data-slot":"switch",className:We("peer data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-300 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...r,children:o.jsx(jE,{"data-slot":"switch-thumb",className:We("bg-white pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")})})}function EE({colorTheme:n,fontStyle:r,onColorThemeChange:s,onFontStyleChange:a,userProfile:c,onUpdateProfile:d,open:p,onOpenChange:m}){const[h,v]=f.useState(c.customInstructions||""),[y,x]=f.useState(c.aiStyle||"Concise"),[b,S]=f.useState(""),[N,C]=f.useState(c.name||""),[k,E]=f.useState(c.role||""),[j,M]=f.useState(""),[R,I]=f.useState(c.workActivities||[]),[W,z]=f.useState(!0),[V,ne]=f.useState(!1);return o.jsx(o.Fragment,{children:o.jsx(ji,{open:p,onOpenChange:te=>{te||ne(!1),m?.(te)},children:o.jsx(Pi,{className:"max-w-2xl max-h-[90vh] overflow-y-auto",children:V?o.jsxs(o.Fragment,{children:[o.jsxs(ao,{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>ne(!1),className:"p-1 rounded-lg hover:bg-gray-200 transition-colors",children:o.jsx(ni,{className:"w-5 h-5"})}),o.jsx(lo,{children:"Saved Memories"})]}),o.jsx(mu,{children:"Things AI Assistant has learned about you"})]}),o.jsx("div",{className:"space-y-3 mt-4",children:[{id:"1",text:"Works at GovTech as a Marketing Officer",date:"Jan 15, 2026"},{id:"2",text:"Prefers concise, bullet-point responses",date:"Jan 18, 2026"},{id:"3",text:"Often works on marketing campaigns and content",date:"Jan 20, 2026"}].map(te=>o.jsxs("div",{className:"flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"text-sm text-gray-900",children:te.text}),o.jsx("p",{className:"text-xs text-gray-500 mt-1",children:te.date})]}),o.jsxs(Kn,{children:[o.jsx(Yn,{asChild:!0,children:o.jsx(Fe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-8 w-8 p-0",children:o.jsx(ps,{className:"w-4 h-4"})})}),o.jsx(Xn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:o.jsxs(xt,{onClick:()=>{},className:"text-red-500 hover:bg-gray-100",children:[o.jsx(fs,{className:"w-4 h-4 mr-2"}),"Remove memory"]})})]})]},te.id))})]}):o.jsxs(o.Fragment,{children:[o.jsxs(ao,{children:[o.jsx(lo,{children:"Settings"}),o.jsx(mu,{children:"Customize your AI Assistant experience"})]}),o.jsxs(yE,{defaultValue:"accounts",className:"w-full",children:[o.jsxs(bE,{className:"grid w-full grid-cols-2",children:[o.jsxs(Kg,{value:"accounts",className:"flex items-center gap-2",children:[o.jsx(dg,{className:"w-4 h-4"}),"Accounts"]}),o.jsxs(Kg,{value:"memories",className:"flex items-center gap-2",children:[o.jsx(Ew,{className:"w-4 h-4"}),"Personalisation"]})]}),o.jsxs(Yg,{value:"accounts",className:"space-y-6 mt-6",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"font-semibold",children:"Profile Information"}),o.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gray-50 rounded-lg",children:[o.jsx("div",{className:"w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center",children:o.jsx(dg,{className:"w-8 h-8 text-white"})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h4",{className:"font-medium text-gray-900",children:c.name}),o.jsx("p",{className:"text-sm text-gray-500",children:c.email}),o.jsx("p",{className:"text-sm text-gray-500",children:c.agency})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{htmlFor:"email",children:"Email"}),o.jsx(tn,{id:"email",value:c.email,disabled:!0,className:"bg-gray-100 cursor-not-allowed"})]})]}),o.jsx("div",{className:"flex justify-end pt-4",children:o.jsx(Fe,{onClick:()=>{m?.(!1)},children:"Save Changes"})})]}),o.jsxs(Yg,{value:"memories",className:"space-y-6 mt-6",children:[o.jsx("div",{children:o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"AI personalisation"})}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{htmlFor:"ai-style",children:"Preferred AI style and tone"}),o.jsx("p",{className:"text-sm text-gray-500",children:"Set the style and tone of how your AI Assistant responds to you."}),o.jsxs(Ll,{value:y,onValueChange:x,children:[o.jsx(zl,{id:"ai-style",children:o.jsx(lp,{})}),o.jsxs(Fl,{children:[o.jsx(yt,{value:"Concise",children:"Concise"}),o.jsx(yt,{value:"Professional",children:"Professional"}),o.jsx(yt,{value:"Academic",children:"Academic"}),o.jsx(yt,{value:"Creative",children:"Creative"}),o.jsx(yt,{value:"Others",children:"Others"})]})]}),y==="Others"&&o.jsx(tn,{placeholder:"Describe your preferred style...",value:b,onChange:te=>S(te.target.value),className:"mt-2"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{htmlFor:"custom-instructions",children:"Custom Instructions"}),o.jsx(Ei,{id:"custom-instructions",placeholder:"e.g., Always provide sources, use Singapore English spelling, include relevant policy references...",className:"min-h-[100px]",value:h,onChange:te=>v(te.target.value)})]}),o.jsx(fi,{}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("h3",{className:"font-semibold",children:"Memories"}),o.jsx(Fe,{variant:"outline",size:"sm",onClick:()=>ne(!0),children:"Manage"})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"text-sm text-gray-900",children:"Reference saved memories"}),o.jsx("p",{className:"text-xs text-gray-500",children:"AI Assistant save and use memories when responding."})]}),o.jsx(PE,{checked:W,onCheckedChange:z})]})]}),o.jsx("div",{className:"flex justify-end pt-4",children:o.jsx(Fe,{onClick:()=>{d({...c,customInstructions:h,name:N,aiStyle:y==="Others"?b:y,workActivities:R}),m?.(!1)},children:"Save Changes"})})]})]})]})})})})}const Wl=f.createContext(null);Wl.displayName="PanelGroupContext";const ft={group:"data-panel-group",groupDirection:"data-panel-group-direction",groupId:"data-panel-group-id",panel:"data-panel",panelCollapsible:"data-panel-collapsible",panelId:"data-panel-id",panelSize:"data-panel-size",resizeHandle:"data-resize-handle",resizeHandleActive:"data-resize-handle-active",resizeHandleEnabled:"data-panel-resize-handle-enabled",resizeHandleId:"data-panel-resize-handle-id",resizeHandleState:"data-resize-handle-state"},up=10,us=f.useLayoutEffect,Xg=gl.useId,RE=typeof Xg=="function"?Xg:()=>null;let AE=0;function pp(n=null){const r=RE(),s=f.useRef(n||r||null);return s.current===null&&(s.current=""+AE++),n??s.current}function Ux({children:n,className:r="",collapsedSize:s,collapsible:a,defaultSize:c,forwardedRef:d,id:p,maxSize:m,minSize:h,onCollapse:v,onExpand:y,onResize:x,order:b,style:S,tagName:N="div",...C}){const k=f.useContext(Wl);if(k===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:E,expandPanel:j,getPanelSize:M,getPanelStyle:R,groupId:I,isPanelCollapsed:W,reevaluatePanelConstraints:z,registerPanel:V,resizePanel:ne,unregisterPanel:te}=k,fe=pp(p),ae=f.useRef({callbacks:{onCollapse:v,onExpand:y,onResize:x},constraints:{collapsedSize:s,collapsible:a,defaultSize:c,maxSize:m,minSize:h},id:fe,idIsFromProps:p!==void 0,order:b});f.useRef({didLogMissingDefaultSizeWarning:!1}),us(()=>{const{callbacks:me,constraints:ge}=ae.current,J={...ge};ae.current.id=fe,ae.current.idIsFromProps=p!==void 0,ae.current.order=b,me.onCollapse=v,me.onExpand=y,me.onResize=x,ge.collapsedSize=s,ge.collapsible=a,ge.defaultSize=c,ge.maxSize=m,ge.minSize=h,(J.collapsedSize!==ge.collapsedSize||J.collapsible!==ge.collapsible||J.maxSize!==ge.maxSize||J.minSize!==ge.minSize)&&z(ae.current,J)}),us(()=>{const me=ae.current;return V(me),()=>{te(me)}},[b,fe,V,te]),f.useImperativeHandle(d,()=>({collapse:()=>{E(ae.current)},expand:me=>{j(ae.current,me)},getId(){return fe},getSize(){return M(ae.current)},isCollapsed(){return W(ae.current)},isExpanded(){return!W(ae.current)},resize:me=>{ne(ae.current,me)}}),[E,j,M,W,fe,ne]);const he=R(ae.current,c);return f.createElement(N,{...C,children:n,className:r,id:fe,style:{...he,...S},[ft.groupId]:I,[ft.panel]:"",[ft.panelCollapsible]:a||void 0,[ft.panelId]:fe,[ft.panelSize]:parseFloat(""+he.flexGrow).toFixed(1)})}const Gx=f.forwardRef((n,r)=>f.createElement(Ux,{...n,forwardedRef:r}));Ux.displayName="Panel";Gx.displayName="forwardRef(Panel)";let Su=null,Ja=-1,Lr=null;function TE(n,r){if(r){const s=(r&Xx)!==0,a=(r&Jx)!==0,c=(r&Zx)!==0,d=(r&ey)!==0;if(s)return c?"se-resize":d?"ne-resize":"e-resize";if(a)return c?"sw-resize":d?"nw-resize":"w-resize";if(c)return"s-resize";if(d)return"n-resize"}switch(n){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function ME(){Lr!==null&&(document.head.removeChild(Lr),Su=null,Lr=null,Ja=-1)}function qd(n,r){var s,a;const c=TE(n,r);if(Su!==c){if(Su=c,Lr===null&&(Lr=document.createElement("style"),document.head.appendChild(Lr)),Ja>=0){var d;(d=Lr.sheet)===null||d===void 0||d.removeRule(Ja)}Ja=(s=(a=Lr.sheet)===null||a===void 0?void 0:a.insertRule(`*{cursor: ${c} !important;}`))!==null&&s!==void 0?s:-1}}function Qx(n){return n.type==="keydown"}function qx(n){return n.type.startsWith("pointer")}function Kx(n){return n.type.startsWith("mouse")}function Vl(n){if(qx(n)){if(n.isPrimary)return{x:n.clientX,y:n.clientY}}else if(Kx(n))return{x:n.clientX,y:n.clientY};return{x:1/0,y:1/0}}function IE(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function _E(n,r,s){return n.x<r.x+r.width&&n.x+n.width>r.x&&n.y<r.y+r.height&&n.y+n.height>r.y}function DE(n,r){if(n===r)throw new Error("Cannot compare node with itself");const s={a:eh(n),b:eh(r)};let a;for(;s.a.at(-1)===s.b.at(-1);)n=s.a.pop(),r=s.b.pop(),a=n;Be(a,"Stacking order can only be calculated for elements with a common ancestor");const c={a:Zg(Jg(s.a)),b:Zg(Jg(s.b))};if(c.a===c.b){const d=a.childNodes,p={a:s.a.at(-1),b:s.b.at(-1)};let m=d.length;for(;m--;){const h=d[m];if(h===p.a)return 1;if(h===p.b)return-1}}return Math.sign(c.a-c.b)}const OE=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function LE(n){var r;const s=getComputedStyle((r=Yx(n))!==null&&r!==void 0?r:n).display;return s==="flex"||s==="inline-flex"}function zE(n){const r=getComputedStyle(n);return!!(r.position==="fixed"||r.zIndex!=="auto"&&(r.position!=="static"||LE(n))||+r.opacity<1||"transform"in r&&r.transform!=="none"||"webkitTransform"in r&&r.webkitTransform!=="none"||"mixBlendMode"in r&&r.mixBlendMode!=="normal"||"filter"in r&&r.filter!=="none"||"webkitFilter"in r&&r.webkitFilter!=="none"||"isolation"in r&&r.isolation==="isolate"||OE.test(r.willChange)||r.webkitOverflowScrolling==="touch")}function Jg(n){let r=n.length;for(;r--;){const s=n[r];if(Be(s,"Missing node"),zE(s))return s}return null}function Zg(n){return n&&Number(getComputedStyle(n).zIndex)||0}function eh(n){const r=[];for(;n;)r.push(n),n=Yx(n);return r}function Yx(n){const{parentNode:r}=n;return r&&r instanceof ShadowRoot?r.host:r}const Xx=1,Jx=2,Zx=4,ey=8,FE=IE()==="coarse";let Dn=[],no=!1,as=new Map,Ul=new Map;const mi=new Set;function $E(n,r,s,a,c){var d;const{ownerDocument:p}=r,m={direction:s,element:r,hitAreaMargins:a,setResizeHandlerState:c},h=(d=as.get(p))!==null&&d!==void 0?d:0;return as.set(p,h+1),mi.add(m),fl(),function(){var y;Ul.delete(n),mi.delete(m);const x=(y=as.get(p))!==null&&y!==void 0?y:1;if(as.set(p,x-1),fl(),x===1&&as.delete(p),Dn.includes(m)){const b=Dn.indexOf(m);b>=0&&Dn.splice(b,1),mp(),c("up",!0,null)}}}function BE(n){const{target:r}=n,{x:s,y:a}=Vl(n);no=!0,fp({target:r,x:s,y:a}),fl(),Dn.length>0&&(ml("down",n),n.preventDefault(),ty(r)||n.stopImmediatePropagation())}function Kd(n){const{x:r,y:s}=Vl(n);if(no&&n.buttons===0&&(no=!1,ml("up",n)),!no){const{target:a}=n;fp({target:a,x:r,y:s})}ml("move",n),mp(),Dn.length>0&&n.preventDefault()}function Yd(n){const{target:r}=n,{x:s,y:a}=Vl(n);Ul.clear(),no=!1,Dn.length>0&&(n.preventDefault(),ty(r)||n.stopImmediatePropagation()),ml("up",n),fp({target:r,x:s,y:a}),mp(),fl()}function ty(n){let r=n;for(;r;){if(r.hasAttribute(ft.resizeHandle))return!0;r=r.parentElement}return!1}function fp({target:n,x:r,y:s}){Dn.splice(0);let a=null;(n instanceof HTMLElement||n instanceof SVGElement)&&(a=n),mi.forEach(c=>{const{element:d,hitAreaMargins:p}=c,m=d.getBoundingClientRect(),{bottom:h,left:v,right:y,top:x}=m,b=FE?p.coarse:p.fine;if(r>=v-b&&r<=y+b&&s>=x-b&&s<=h+b){if(a!==null&&document.contains(a)&&d!==a&&!d.contains(a)&&!a.contains(d)&&DE(a,d)>0){let N=a,C=!1;for(;N&&!N.contains(d);){if(_E(N.getBoundingClientRect(),m)){C=!0;break}N=N.parentElement}if(C)return}Dn.push(c)}})}function Xd(n,r){Ul.set(n,r)}function mp(){let n=!1,r=!1;Dn.forEach(a=>{const{direction:c}=a;c==="horizontal"?n=!0:r=!0});let s=0;Ul.forEach(a=>{s|=a}),n&&r?qd("intersection",s):n?qd("horizontal",s):r?qd("vertical",s):ME()}let Jd=new AbortController;function fl(){Jd.abort(),Jd=new AbortController;const n={capture:!0,signal:Jd.signal};mi.size&&(no?(Dn.length>0&&as.forEach((r,s)=>{const{body:a}=s;r>0&&(a.addEventListener("contextmenu",Yd,n),a.addEventListener("pointerleave",Kd,n),a.addEventListener("pointermove",Kd,n))}),window.addEventListener("pointerup",Yd,n),window.addEventListener("pointercancel",Yd,n)):as.forEach((r,s)=>{const{body:a}=s;r>0&&(a.addEventListener("pointerdown",BE,n),a.addEventListener("pointermove",Kd,n))}))}function ml(n,r){mi.forEach(s=>{const{setResizeHandlerState:a}=s,c=Dn.includes(s);a(n,c,r)})}function HE(){const[n,r]=f.useState(0);return f.useCallback(()=>r(s=>s+1),[])}function Be(n,r){if(!n)throw console.error(r),Error(r)}function xs(n,r,s=up){return n.toFixed(s)===r.toFixed(s)?0:n>r?1:-1}function dr(n,r,s=up){return xs(n,r,s)===0}function dn(n,r,s){return xs(n,r,s)===0}function WE(n,r,s){if(n.length!==r.length)return!1;for(let a=0;a<n.length;a++){const c=n[a],d=r[a];if(!dn(c,d,s))return!1}return!0}function Zs({panelConstraints:n,panelIndex:r,size:s}){const a=n[r];Be(a!=null,`Panel constraints not found for index ${r}`);let{collapsedSize:c=0,collapsible:d,maxSize:p=100,minSize:m=0}=a;if(xs(s,m)<0)if(d){const h=(c+m)/2;xs(s,h)<0?s=c:s=m}else s=m;return s=Math.min(p,s),s=parseFloat(s.toFixed(up)),s}function ei({delta:n,initialLayout:r,panelConstraints:s,pivotIndices:a,prevLayout:c,trigger:d}){if(dn(n,0))return r;const p=[...r],[m,h]=a;Be(m!=null,"Invalid first pivot index"),Be(h!=null,"Invalid second pivot index");let v=0;if(d==="keyboard"){{const x=n<0?h:m,b=s[x];Be(b,`Panel constraints not found for index ${x}`);const{collapsedSize:S=0,collapsible:N,minSize:C=0}=b;if(N){const k=r[x];if(Be(k!=null,`Previous layout not found for panel index ${x}`),dn(k,S)){const E=C-k;xs(E,Math.abs(n))>0&&(n=n<0?0-E:E)}}}{const x=n<0?m:h,b=s[x];Be(b,`No panel constraints found for index ${x}`);const{collapsedSize:S=0,collapsible:N,minSize:C=0}=b;if(N){const k=r[x];if(Be(k!=null,`Previous layout not found for panel index ${x}`),dn(k,C)){const E=k-S;xs(E,Math.abs(n))>0&&(n=n<0?0-E:E)}}}}{const x=n<0?1:-1;let b=n<0?h:m,S=0;for(;;){const C=r[b];Be(C!=null,`Previous layout not found for panel index ${b}`);const E=Zs({panelConstraints:s,panelIndex:b,size:100})-C;if(S+=E,b+=x,b<0||b>=s.length)break}const N=Math.min(Math.abs(n),Math.abs(S));n=n<0?0-N:N}{let b=n<0?m:h;for(;b>=0&&b<s.length;){const S=Math.abs(n)-Math.abs(v),N=r[b];Be(N!=null,`Previous layout not found for panel index ${b}`);const C=N-S,k=Zs({panelConstraints:s,panelIndex:b,size:C});if(!dn(N,k)&&(v+=N-k,p[b]=k,v.toPrecision(3).localeCompare(Math.abs(n).toPrecision(3),void 0,{numeric:!0})>=0))break;n<0?b--:b++}}if(WE(c,p))return c;{const x=n<0?h:m,b=r[x];Be(b!=null,`Previous layout not found for panel index ${x}`);const S=b+v,N=Zs({panelConstraints:s,panelIndex:x,size:S});if(p[x]=N,!dn(N,S)){let C=S-N,E=n<0?h:m;for(;E>=0&&E<s.length;){const j=p[E];Be(j!=null,`Previous layout not found for panel index ${E}`);const M=j+C,R=Zs({panelConstraints:s,panelIndex:E,size:M});if(dn(j,R)||(C-=R-j,p[E]=R),dn(C,0))break;n>0?E--:E++}}}const y=p.reduce((x,b)=>b+x,0);return dn(y,100)?p:c}function VE({layout:n,panelsArray:r,pivotIndices:s}){let a=0,c=100,d=0,p=0;const m=s[0];Be(m!=null,"No pivot index found"),r.forEach((x,b)=>{const{constraints:S}=x,{maxSize:N=100,minSize:C=0}=S;b===m?(a=C,c=N):(d+=C,p+=N)});const h=Math.min(c,100-d),v=Math.max(a,100-p),y=n[m];return{valueMax:h,valueMin:v,valueNow:y}}function gi(n,r=document){return Array.from(r.querySelectorAll(`[${ft.resizeHandleId}][data-panel-group-id="${n}"]`))}function ny(n,r,s=document){const c=gi(n,s).findIndex(d=>d.getAttribute(ft.resizeHandleId)===r);return c??null}function ry(n,r,s){const a=ny(n,r,s);return a!=null?[a,a+1]:[-1,-1]}function sy(n,r=document){var s;if(r instanceof HTMLElement&&(r==null||(s=r.dataset)===null||s===void 0?void 0:s.panelGroupId)==n)return r;const a=r.querySelector(`[data-panel-group][data-panel-group-id="${n}"]`);return a||null}function Gl(n,r=document){const s=r.querySelector(`[${ft.resizeHandleId}="${n}"]`);return s||null}function UE(n,r,s,a=document){var c,d,p,m;const h=Gl(r,a),v=gi(n,a),y=h?v.indexOf(h):-1,x=(c=(d=s[y])===null||d===void 0?void 0:d.id)!==null&&c!==void 0?c:null,b=(p=(m=s[y+1])===null||m===void 0?void 0:m.id)!==null&&p!==void 0?p:null;return[x,b]}function GE({committedValuesRef:n,eagerValuesRef:r,groupId:s,layout:a,panelDataArray:c,panelGroupElement:d,setLayout:p}){f.useRef({didWarnAboutMissingResizeHandle:!1}),us(()=>{if(!d)return;const m=gi(s,d);for(let h=0;h<c.length-1;h++){const{valueMax:v,valueMin:y,valueNow:x}=VE({layout:a,panelsArray:c,pivotIndices:[h,h+1]}),b=m[h];if(b!=null){const S=c[h];Be(S,`No panel data found for index "${h}"`),b.setAttribute("aria-controls",S.id),b.setAttribute("aria-valuemax",""+Math.round(v)),b.setAttribute("aria-valuemin",""+Math.round(y)),b.setAttribute("aria-valuenow",x!=null?""+Math.round(x):"")}}return()=>{m.forEach((h,v)=>{h.removeAttribute("aria-controls"),h.removeAttribute("aria-valuemax"),h.removeAttribute("aria-valuemin"),h.removeAttribute("aria-valuenow")})}},[s,a,c,d]),f.useEffect(()=>{if(!d)return;const m=r.current;Be(m,"Eager values not found");const{panelDataArray:h}=m,v=sy(s,d);Be(v!=null,`No group found for id "${s}"`);const y=gi(s,d);Be(y,`No resize handles found for group id "${s}"`);const x=y.map(b=>{const S=b.getAttribute(ft.resizeHandleId);Be(S,"Resize handle element has no handle id attribute");const[N,C]=UE(s,S,h,d);if(N==null||C==null)return()=>{};const k=E=>{if(!E.defaultPrevented)switch(E.key){case"Enter":{E.preventDefault();const j=h.findIndex(M=>M.id===N);if(j>=0){const M=h[j];Be(M,`No panel data found for index ${j}`);const R=a[j],{collapsedSize:I=0,collapsible:W,minSize:z=0}=M.constraints;if(R!=null&&W){const V=ei({delta:dn(R,I)?z-I:I-R,initialLayout:a,panelConstraints:h.map(ne=>ne.constraints),pivotIndices:ry(s,S,d),prevLayout:a,trigger:"keyboard"});a!==V&&p(V)}}break}}};return b.addEventListener("keydown",k),()=>{b.removeEventListener("keydown",k)}});return()=>{x.forEach(b=>b())}},[d,n,r,s,a,c,p])}function th(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!==r[s])return!1;return!0}function oy(n,r){const s=n==="horizontal",{x:a,y:c}=Vl(r);return s?a:c}function QE(n,r,s,a,c){const d=s==="horizontal",p=Gl(r,c);Be(p,`No resize handle element found for id "${r}"`);const m=p.getAttribute(ft.groupId);Be(m,"Resize handle element has no group id attribute");let{initialCursorPosition:h}=a;const v=oy(s,n),y=sy(m,c);Be(y,`No group element found for id "${m}"`);const x=y.getBoundingClientRect(),b=d?x.width:x.height;return(v-h)/b*100}function qE(n,r,s,a,c,d){if(Qx(n)){const p=s==="horizontal";let m=0;n.shiftKey?m=100:c!=null?m=c:m=10;let h=0;switch(n.key){case"ArrowDown":h=p?0:m;break;case"ArrowLeft":h=p?-m:0;break;case"ArrowRight":h=p?m:0;break;case"ArrowUp":h=p?0:-m;break;case"End":h=100;break;case"Home":h=-100;break}return h}else return a==null?0:QE(n,r,s,a,d)}function KE({panelDataArray:n}){const r=Array(n.length),s=n.map(d=>d.constraints);let a=0,c=100;for(let d=0;d<n.length;d++){const p=s[d];Be(p,`Panel constraints not found for index ${d}`);const{defaultSize:m}=p;m!=null&&(a++,r[d]=m,c-=m)}for(let d=0;d<n.length;d++){const p=s[d];Be(p,`Panel constraints not found for index ${d}`);const{defaultSize:m}=p;if(m!=null)continue;const h=n.length-a,v=c/h;a++,r[d]=v,c-=v}return r}function Ys(n,r,s){r.forEach((a,c)=>{const d=n[c];Be(d,`Panel data not found for index ${c}`);const{callbacks:p,constraints:m,id:h}=d,{collapsedSize:v=0,collapsible:y}=m,x=s[h];if(x==null||a!==x){s[h]=a;const{onCollapse:b,onExpand:S,onResize:N}=p;N&&N(a,x),y&&(b||S)&&(S&&(x==null||dr(x,v))&&!dr(a,v)&&S(),b&&(x==null||!dr(x,v))&&dr(a,v)&&b())}})}function Ga(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!=r[s])return!1;return!0}function YE({defaultSize:n,dragState:r,layout:s,panelData:a,panelIndex:c,precision:d=3}){const p=s[c];let m;return p==null?m=n!=null?n.toPrecision(d):"1":a.length===1?m="1":m=p.toPrecision(d),{flexBasis:0,flexGrow:m,flexShrink:1,overflow:"hidden",pointerEvents:r!==null?"none":void 0}}function XE(n,r=10){let s=null;return(...c)=>{s!==null&&clearTimeout(s),s=setTimeout(()=>{n(...c)},r)}}function nh(n){try{if(typeof localStorage<"u")n.getItem=r=>localStorage.getItem(r),n.setItem=(r,s)=>{localStorage.setItem(r,s)};else throw new Error("localStorage not supported in this environment")}catch(r){console.error(r),n.getItem=()=>null,n.setItem=()=>{}}}function iy(n){return`react-resizable-panels:${n}`}function ay(n){return n.map(r=>{const{constraints:s,id:a,idIsFromProps:c,order:d}=r;return c?a:d?`${d}:${JSON.stringify(s)}`:JSON.stringify(s)}).sort((r,s)=>r.localeCompare(s)).join(",")}function ly(n,r){try{const s=iy(n),a=r.getItem(s);if(a){const c=JSON.parse(a);if(typeof c=="object"&&c!=null)return c}}catch{}return null}function JE(n,r,s){var a,c;const d=(a=ly(n,s))!==null&&a!==void 0?a:{},p=ay(r);return(c=d[p])!==null&&c!==void 0?c:null}function ZE(n,r,s,a,c){var d;const p=iy(n),m=ay(r),h=(d=ly(n,c))!==null&&d!==void 0?d:{};h[m]={expandToSizes:Object.fromEntries(s.entries()),layout:a};try{c.setItem(p,JSON.stringify(h))}catch(v){console.error(v)}}function rh({layout:n,panelConstraints:r}){const s=[...n],a=s.reduce((d,p)=>d+p,0);if(s.length!==r.length)throw Error(`Invalid ${r.length} panel layout: ${s.map(d=>`${d}%`).join(", ")}`);if(!dn(a,100)&&s.length>0)for(let d=0;d<r.length;d++){const p=s[d];Be(p!=null,`No layout data found for index ${d}`);const m=100/a*p;s[d]=m}let c=0;for(let d=0;d<r.length;d++){const p=s[d];Be(p!=null,`No layout data found for index ${d}`);const m=Zs({panelConstraints:r,panelIndex:d,size:p});p!=m&&(c+=p-m,s[d]=m)}if(!dn(c,0))for(let d=0;d<r.length;d++){const p=s[d];Be(p!=null,`No layout data found for index ${d}`);const m=p+c,h=Zs({panelConstraints:r,panelIndex:d,size:m});if(p!==h&&(c-=h-p,s[d]=h,dn(c,0)))break}return s}const eR=100,ti={getItem:n=>(nh(ti),ti.getItem(n)),setItem:(n,r)=>{nh(ti),ti.setItem(n,r)}},sh={};function cy({autoSaveId:n=null,children:r,className:s="",direction:a,forwardedRef:c,id:d=null,onLayout:p=null,keyboardResizeBy:m=null,storage:h=ti,style:v,tagName:y="div",...x}){const b=pp(d),S=f.useRef(null),[N,C]=f.useState(null),[k,E]=f.useState([]),j=HE(),M=f.useRef({}),R=f.useRef(new Map),I=f.useRef(0),W=f.useRef({autoSaveId:n,direction:a,dragState:N,id:b,keyboardResizeBy:m,onLayout:p,storage:h}),z=f.useRef({layout:k,panelDataArray:[],panelDataArrayChanged:!1});f.useRef({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),f.useImperativeHandle(c,()=>({getId:()=>W.current.id,getLayout:()=>{const{layout:H}=z.current;return H},setLayout:H=>{const{onLayout:G}=W.current,{layout:re,panelDataArray:X}=z.current,O=rh({layout:H,panelConstraints:X.map(K=>K.constraints)});th(re,O)||(E(O),z.current.layout=O,G&&G(O),Ys(X,O,M.current))}}),[]),us(()=>{W.current.autoSaveId=n,W.current.direction=a,W.current.dragState=N,W.current.id=b,W.current.onLayout=p,W.current.storage=h}),GE({committedValuesRef:W,eagerValuesRef:z,groupId:b,layout:k,panelDataArray:z.current.panelDataArray,setLayout:E,panelGroupElement:S.current}),f.useEffect(()=>{const{panelDataArray:H}=z.current;if(n){if(k.length===0||k.length!==H.length)return;let G=sh[n];G==null&&(G=XE(ZE,eR),sh[n]=G);const re=[...H],X=new Map(R.current);G(n,re,X,k,h)}},[n,k,h]),f.useEffect(()=>{});const V=f.useCallback(H=>{const{onLayout:G}=W.current,{layout:re,panelDataArray:X}=z.current;if(H.constraints.collapsible){const O=X.map(Re=>Re.constraints),{collapsedSize:K=0,panelSize:ue,pivotIndices:pe}=is(X,H,re);if(Be(ue!=null,`Panel size not found for panel "${H.id}"`),!dr(ue,K)){R.current.set(H.id,ue);const Oe=Xs(X,H)===X.length-1?ue-K:K-ue,Y=ei({delta:Oe,initialLayout:re,panelConstraints:O,pivotIndices:pe,prevLayout:re,trigger:"imperative-api"});Ga(re,Y)||(E(Y),z.current.layout=Y,G&&G(Y),Ys(X,Y,M.current))}}},[]),ne=f.useCallback((H,G)=>{const{onLayout:re}=W.current,{layout:X,panelDataArray:O}=z.current;if(H.constraints.collapsible){const K=O.map(je=>je.constraints),{collapsedSize:ue=0,panelSize:pe=0,minSize:Re=0,pivotIndices:Oe}=is(O,H,X),Y=G??Re;if(dr(pe,ue)){const je=R.current.get(H.id),Qe=je!=null&&je>=Y?je:Y,At=Xs(O,H)===O.length-1?pe-Qe:Qe-pe,st=ei({delta:At,initialLayout:X,panelConstraints:K,pivotIndices:Oe,prevLayout:X,trigger:"imperative-api"});Ga(X,st)||(E(st),z.current.layout=st,re&&re(st),Ys(O,st,M.current))}}},[]),te=f.useCallback(H=>{const{layout:G,panelDataArray:re}=z.current,{panelSize:X}=is(re,H,G);return Be(X!=null,`Panel size not found for panel "${H.id}"`),X},[]),fe=f.useCallback((H,G)=>{const{panelDataArray:re}=z.current,X=Xs(re,H);return YE({defaultSize:G,dragState:N,layout:k,panelData:re,panelIndex:X})},[N,k]),ae=f.useCallback(H=>{const{layout:G,panelDataArray:re}=z.current,{collapsedSize:X=0,collapsible:O,panelSize:K}=is(re,H,G);return Be(K!=null,`Panel size not found for panel "${H.id}"`),O===!0&&dr(K,X)},[]),he=f.useCallback(H=>{const{layout:G,panelDataArray:re}=z.current,{collapsedSize:X=0,collapsible:O,panelSize:K}=is(re,H,G);return Be(K!=null,`Panel size not found for panel "${H.id}"`),!O||xs(K,X)>0},[]),me=f.useCallback(H=>{const{panelDataArray:G}=z.current;G.push(H),G.sort((re,X)=>{const O=re.order,K=X.order;return O==null&&K==null?0:O==null?-1:K==null?1:O-K}),z.current.panelDataArrayChanged=!0,j()},[j]);us(()=>{if(z.current.panelDataArrayChanged){z.current.panelDataArrayChanged=!1;const{autoSaveId:H,onLayout:G,storage:re}=W.current,{layout:X,panelDataArray:O}=z.current;let K=null;if(H){const pe=JE(H,O,re);pe&&(R.current=new Map(Object.entries(pe.expandToSizes)),K=pe.layout)}K==null&&(K=KE({panelDataArray:O}));const ue=rh({layout:K,panelConstraints:O.map(pe=>pe.constraints)});th(X,ue)||(E(ue),z.current.layout=ue,G&&G(ue),Ys(O,ue,M.current))}}),us(()=>{const H=z.current;return()=>{H.layout=[]}},[]);const ge=f.useCallback(H=>{let G=!1;const re=S.current;return re&&window.getComputedStyle(re,null).getPropertyValue("direction")==="rtl"&&(G=!0),function(O){O.preventDefault();const K=S.current;if(!K)return()=>null;const{direction:ue,dragState:pe,id:Re,keyboardResizeBy:Oe,onLayout:Y}=W.current,{layout:je,panelDataArray:Qe}=z.current,{initialLayout:mt}=pe??{},At=ry(Re,H,K);let st=qE(O,H,ue,pe,Oe,K);const nn=ue==="horizontal";nn&&G&&(st=-st);const Bt=Qe.map(Tt=>Tt.constraints),Je=ei({delta:st,initialLayout:mt??je,panelConstraints:Bt,pivotIndices:At,prevLayout:je,trigger:Qx(O)?"keyboard":"mouse-or-touch"}),rn=!Ga(je,Je);(qx(O)||Kx(O))&&I.current!=st&&(I.current=st,!rn&&st!==0?nn?Xd(H,st<0?Xx:Jx):Xd(H,st<0?Zx:ey):Xd(H,0)),rn&&(E(Je),z.current.layout=Je,Y&&Y(Je),Ys(Qe,Je,M.current))}},[]),J=f.useCallback((H,G)=>{const{onLayout:re}=W.current,{layout:X,panelDataArray:O}=z.current,K=O.map(je=>je.constraints),{panelSize:ue,pivotIndices:pe}=is(O,H,X);Be(ue!=null,`Panel size not found for panel "${H.id}"`);const Oe=Xs(O,H)===O.length-1?ue-G:G-ue,Y=ei({delta:Oe,initialLayout:X,panelConstraints:K,pivotIndices:pe,prevLayout:X,trigger:"imperative-api"});Ga(X,Y)||(E(Y),z.current.layout=Y,re&&re(Y),Ys(O,Y,M.current))},[]),Q=f.useCallback((H,G)=>{const{layout:re,panelDataArray:X}=z.current,{collapsedSize:O=0,collapsible:K}=G,{collapsedSize:ue=0,collapsible:pe,maxSize:Re=100,minSize:Oe=0}=H.constraints,{panelSize:Y}=is(X,H,re);Y!=null&&(K&&pe&&dr(Y,O)?dr(O,ue)||J(H,ue):Y<Oe?J(H,Oe):Y>Re&&J(H,Re))},[J]),_=f.useCallback((H,G)=>{const{direction:re}=W.current,{layout:X}=z.current;if(!S.current)return;const O=Gl(H,S.current);Be(O,`Drag handle element not found for id "${H}"`);const K=oy(re,G);C({dragHandleId:H,dragHandleRect:O.getBoundingClientRect(),initialCursorPosition:K,initialLayout:X})},[]),B=f.useCallback(()=>{C(null)},[]),q=f.useCallback(H=>{const{panelDataArray:G}=z.current,re=Xs(G,H);re>=0&&(G.splice(re,1),delete M.current[H.id],z.current.panelDataArrayChanged=!0,j())},[j]),A=f.useMemo(()=>({collapsePanel:V,direction:a,dragState:N,expandPanel:ne,getPanelSize:te,getPanelStyle:fe,groupId:b,isPanelCollapsed:ae,isPanelExpanded:he,reevaluatePanelConstraints:Q,registerPanel:me,registerResizeHandle:ge,resizePanel:J,startDragging:_,stopDragging:B,unregisterPanel:q,panelGroupElement:S.current}),[V,N,a,ne,te,fe,b,ae,he,Q,me,ge,J,_,B,q]),U={display:"flex",flexDirection:a==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return f.createElement(Wl.Provider,{value:A},f.createElement(y,{...x,children:r,className:s,id:d,ref:S,style:{...U,...v},[ft.group]:"",[ft.groupDirection]:a,[ft.groupId]:b}))}const dy=f.forwardRef((n,r)=>f.createElement(cy,{...n,forwardedRef:r}));cy.displayName="PanelGroup";dy.displayName="forwardRef(PanelGroup)";function Xs(n,r){return n.findIndex(s=>s===r||s.id===r.id)}function is(n,r,s){const a=Xs(n,r),d=a===n.length-1?[a-1,a]:[a,a+1],p=s[a];return{...r.constraints,panelSize:p,pivotIndices:d}}function tR({disabled:n,handleId:r,resizeHandler:s,panelGroupElement:a}){f.useEffect(()=>{if(n||s==null||a==null)return;const c=Gl(r,a);if(c==null)return;const d=p=>{if(!p.defaultPrevented)switch(p.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{p.preventDefault(),s(p);break}case"F6":{p.preventDefault();const m=c.getAttribute(ft.groupId);Be(m,`No group element found for id "${m}"`);const h=gi(m,a),v=ny(m,r,a);Be(v!==null,`No resize element found for id "${r}"`);const y=p.shiftKey?v>0?v-1:h.length-1:v+1<h.length?v+1:0;h[y].focus();break}}};return c.addEventListener("keydown",d),()=>{c.removeEventListener("keydown",d)}},[a,n,r,s])}function uy({children:n=null,className:r="",disabled:s=!1,hitAreaMargins:a,id:c,onBlur:d,onClick:p,onDragging:m,onFocus:h,onPointerDown:v,onPointerUp:y,style:x={},tabIndex:b=0,tagName:S="div",...N}){var C,k;const E=f.useRef(null),j=f.useRef({onClick:p,onDragging:m,onPointerDown:v,onPointerUp:y});f.useEffect(()=>{j.current.onClick=p,j.current.onDragging=m,j.current.onPointerDown=v,j.current.onPointerUp=y});const M=f.useContext(Wl);if(M===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:R,groupId:I,registerResizeHandle:W,startDragging:z,stopDragging:V,panelGroupElement:ne}=M,te=pp(c),[fe,ae]=f.useState("inactive"),[he,me]=f.useState(!1),[ge,J]=f.useState(null),Q=f.useRef({state:fe});us(()=>{Q.current.state=fe}),f.useEffect(()=>{if(s)J(null);else{const A=W(te);J(()=>A)}},[s,te,W]);const _=(C=a?.coarse)!==null&&C!==void 0?C:15,B=(k=a?.fine)!==null&&k!==void 0?k:5;f.useEffect(()=>{if(s||ge==null)return;const A=E.current;Be(A,"Element ref not attached");let U=!1;return $E(te,A,R,{coarse:_,fine:B},(G,re,X)=>{if(!re){ae("inactive");return}switch(G){case"down":{ae("drag"),U=!1,Be(X,'Expected event to be defined for "down" action'),z(te,X);const{onDragging:O,onPointerDown:K}=j.current;O?.(!0),K?.();break}case"move":{const{state:O}=Q.current;U=!0,O!=="drag"&&ae("hover"),Be(X,'Expected event to be defined for "move" action'),ge(X);break}case"up":{ae("hover"),V();const{onClick:O,onDragging:K,onPointerUp:ue}=j.current;K?.(!1),ue?.(),U||O?.();break}}})},[_,R,s,B,W,te,ge,z,V]),tR({disabled:s,handleId:te,resizeHandler:ge,panelGroupElement:ne});const q={touchAction:"none",userSelect:"none"};return f.createElement(S,{...N,children:n,className:r,id:c,onBlur:()=>{me(!1),d?.()},onFocus:()=>{me(!0),h?.()},ref:E,role:"separator",style:{...q,...x},tabIndex:b,[ft.groupDirection]:R,[ft.groupId]:I,[ft.resizeHandle]:"",[ft.resizeHandleActive]:fe==="drag"?"pointer":he?"keyboard":void 0,[ft.resizeHandleEnabled]:!s,[ft.resizeHandleId]:te,[ft.resizeHandleState]:fe})}uy.displayName="PanelResizeHandle";function nR({className:n,...r}){return o.jsx(dy,{"data-slot":"resizable-panel-group",className:We("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",n),...r})}function oh({...n}){return o.jsx(Gx,{"data-slot":"resizable-panel",...n})}function rR({withHandle:n,className:r,...s}){return o.jsx(uy,{"data-slot":"resizable-handle",className:We("bg-gray-300 focus-visible:ring-gray-500 relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",r),...s,children:n&&o.jsx("div",{className:"bg-white z-10 flex h-6 w-3 items-center justify-center rounded-lg border border-gray-300 shadow-sm",children:o.jsx(p2,{className:"size-3 text-gray-500"})})})}const ih=({data:n,onFormSubmit:r,onComplete:s,onToggleSidebar:a,onBack:c,mode:d="simulator",interactiveMessages:p=[],onSendMessage:m,title:h,classificationType:v,chatId:y,onRenameChat:x,isNewChat:b=!1,isIncognito:S=!1,folders:N=[],onMoveToFolder:C,bookmarkedAssistants:k=[],assistantType:E})=>{const j=d==="interactive",[M,R]=f.useState([]),[I,W]=f.useState(0),[z,V]=f.useState(!1),[ne,te]=f.useState(""),[fe,ae]=f.useState(""),[he,me]=f.useState([]),[ge,J]=f.useState(!1),[Q,_]=f.useState(null),[B,q]=f.useState(!1),[A,U]=f.useState(""),[H,G]=f.useState(!1),[re,X]=f.useState(!1),[O,K]=f.useState(""),[ue,pe]=f.useState(!1),[Re,Oe]=f.useState(!1),[Y,je]=f.useState(!1),[Qe,mt]=f.useState(new Set),[At,st]=f.useState({}),[nn,Bt]=f.useState(!1),[Je,rn]=f.useState(null),[Tt,$n]=f.useState({}),oe=f.useRef(null),Ke=f.useRef(null),et=f.useRef(!1),Ye=f.useRef(null),Nn=f.useRef(null),Ht=f.useRef(null),[jn,ho]=f.useState(0);f.useEffect(()=>{et.current&&(setTimeout(()=>{Ye.current?.scrollIntoView({behavior:"smooth",block:"start"})},50),et.current=!1)},[M,p]),f.useEffect(()=>{const ie=()=>{if(!Nn.current)return;const _e=Nn.current.clientHeight,le=52,De=16,Vr=Ye.current?.offsetHeight||0,sn=Ht.current?.offsetHeight||0,Cs=_e-Vr-sn-le-De;ho(Math.max(0,Cs))};ie();const Ee=setTimeout(ie,50);return window.addEventListener("resize",ie),()=>{window.removeEventListener("resize",ie),clearTimeout(Ee)}},[M,p,fe,he,ge,Re]),f.useEffect(()=>{j||Q&&Q.interactive&&setTimeout(()=>{document.querySelectorAll("form").forEach(Ee=>{Ee.onsubmit=_e=>{_e.preventDefault();const le=new FormData(Ee),De=Object.fromEntries(le);bs(De,Q.title)}})},100)},[Q,j]),f.useEffect(()=>{j||n&&I>=n.messages.length&&!ue&&(pe(!0),s?.())},[I,n?.messages?.length,ue,s,j]),f.useEffect(()=>{Q&&Ke.current&&Ke.current.scrollTo({top:0,behavior:"smooth"})},[Q]);const bs=(ie,Ee)=>{_(null),R(_e=>[..._e,{role:"user",text:"Form submitted ✓"}]),r?r(ie,Ee):setTimeout(async()=>{J(!0),await de(1333),J(!1),R(_e=>[..._e,{type:"text",content:"Thank you for submitting the form! I've received your information and will process it accordingly."}]),W(_e=>_e+1)},333)},ws=ie=>{if(!n||I>=n.messages.length)return;const Ee=n.messages[I];if(Ee.role!=="user")return;const _e=Ee.content.text;et.current=!0,V(!1),R(le=>[...le,{role:"user",text:_e}]),te(""),W(le=>le+1)},Ss=()=>{if(j||!n||I>=n.messages.length)return;const ie=n.messages[I];if(ie.role==="user")return ie.content.text};f.useEffect(()=>{if(j||!n||I>=n.messages.length)return;const ie=n.messages[I];if(ie.role==="user"){const Ee=ie.content;Ee.autoSend&&Ee.text?setTimeout(()=>{R(_e=>[..._e,{role:"user",text:Ee.text}]),W(_e=>_e+1)},500):Ee.formSubmission?W(_e=>_e+1):V(!0)}else{const Ee=ie.content;mr(Ee)}},[I,j,n]);const mr=async ie=>{J(!0),await de(1e3),J(!1);for(const Ee of ie)Ee.type==="thinking"?await gr(Ee):Ee.type==="assistantSwitch"?(Oe(!0),await de(1333),Oe(!1),R(_e=>[..._e,{type:"assistantSwitch",message:Ee.message}]),await de(333)):Ee.type==="text"?(await de(Ee.delayMs?Ee.delayMs/1.5:667),R(_e=>[..._e,{type:"text",content:Ee.content}])):Ee.type==="artifact"&&(await de(Ee.delayMs?Ee.delayMs/1.5:667),R(_e=>[..._e,{type:"artifact",data:Ee}]),_(Ee),je(!0));W(Ee=>Ee+1)},gr=async ie=>{const Ee=(ie.timingMs||1500)/1.5,_e=ie.reasoning||[];for(let le=0;le<_e.length;le++)me(De=>[...De,_e[le]]),await de(Ee/_e.length);ie.thought&&(ae(ie.thought),await de(500)),R(le=>[...le,{type:"thinking",thought:ie.thought||"",reasoning:_e}]),ae(""),me([])},de=ie=>new Promise(Ee=>setTimeout(Ee,ie)),ye=ie=>{switch(ie.toLowerCase()){case"document":return o.jsx(Sn,{className:"w-5 h-5"});case"code":return o.jsx(Kw,{className:"w-5 h-5"});case"chart":return o.jsx(qa,{className:"w-5 h-5"});case"form":return o.jsx(uh,{className:"w-5 h-5"});default:return o.jsx(Sn,{className:"w-5 h-5"})}},Ae=ie=>{mt(Ee=>{const _e=new Set(Ee);return _e.has(ie)?_e.delete(ie):_e.add(ie),_e})},ze=async()=>{if(Q){const ie=document.createElement("div");ie.innerHTML=Q.content;const Ee=ie.textContent||ie.innerText||"";await navigator.clipboard.writeText(Ee),Bt(!0),setTimeout(()=>Bt(!1),2e3)}},Ue=async(ie,Ee)=>{await navigator.clipboard.writeText(Ee),rn(ie),setTimeout(()=>rn(null),2e3)},lt=(ie,Ee)=>{$n(_e=>({..._e,[ie]:_e[ie]===Ee?null:Ee}))},gn=()=>{if(Q){const ie=`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${Q.title}</title>
        </head>
        <body>
          <h1>${Q.title}</h1>
          ${Q.content}
        </body>
        </html>
      `,Ee=new Blob([ie],{type:"application/msword"}),_e=URL.createObjectURL(Ee),le=document.createElement("a");le.href=_e,le.download=`${Q.title.replace(/\s+/g,"_")}.doc`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(_e)}},Wt=()=>Q&&At[Q.title]||1,Vt=()=>{Q&&Wt()>1&&st(ie=>({...ie,[Q.title]:(ie[Q.title]||1)-1}))},kt=()=>{if(Q){const ie=Wt();ie<3&&st(Ee=>({...Ee,[Q.title]:ie+1}))}};return o.jsxs(nR,{direction:"horizontal",className:"h-full bg-gray-50",children:[o.jsx(oh,{defaultSize:Y?50:100,minSize:30,children:o.jsxs("div",{className:"flex-1 flex flex-col h-full",children:[o.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200",children:[o.jsxs("div",{className:`flex items-center gap-3 flex-1 ${S?"justify-center":""}`,children:[S?o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(wu,{className:"w-4 h-4 text-gray-600"}),o.jsx("span",{className:"text-sm font-medium text-gray-900",children:"Incognito chat"})]}):B&&j?o.jsx("input",{type:"text",value:A,onChange:ie=>U(ie.target.value),onBlur:()=>{A.trim()&&y&&x&&x(y,A.trim()),q(!1)},onKeyDown:ie=>{ie.key==="Enter"?(A.trim()&&y&&x&&x(y,A.trim()),q(!1)):ie.key==="Escape"&&q(!1)},className:"text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400",autoFocus:!0}):o.jsx("div",{className:"flex items-center gap-2 group/title",children:o.jsx("span",{className:"text-sm font-medium text-gray-900 cursor-pointer",onDoubleClick:()=>{j&&x&&(U(h||"New Chat"),q(!0))},title:"Double-click to rename",children:j?h||"New Chat":n?.title})}),j?v&&o.jsx("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300",children:v==="cce-sn"?"C(CE) + SN":v==="cce-sh"?"C(CE) + SH":"RSN"}):n?.classificationType&&o.jsx("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300",children:n.classificationType==="cce-sn"?"C(CE) + SN":n.classificationType==="cce-sh"?"C(CE) + SH":"RSN"})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[j&&b&&p.length===0&&o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>G(!H),className:`p-1.5 rounded-lg transition-colors ${H?"bg-gray-100 text-gray-900":"text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`,children:o.jsx(sg,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:H?"Temporary chat enabled - no memory, not saved":"Enable temporary chat"})})]})}),H&&p.length>0&&o.jsxs("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg flex items-center gap-1",children:[o.jsx(sg,{className:"w-3 h-3"}),"Temporary"]}),j&&!b&&y&&!S&&o.jsxs(Kn,{children:[o.jsx(Yn,{asChild:!0,children:o.jsx("button",{className:"p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700",children:o.jsx(ps,{className:"w-5 h-5"})})}),o.jsx(Xn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:!S&&v!=="cce-sn"&&v!=="cce-sh"&&o.jsxs(Gj,{children:[o.jsxs(Qj,{className:"hover:bg-gray-100",children:[o.jsx(fh,{className:"w-4 h-4 mr-2"}),"Move to folder"]}),o.jsx(qj,{className:"bg-white border-2 border-gray-900 rounded-lg",children:N.length===0?o.jsx(xt,{disabled:!0,className:"text-gray-400 text-sm",children:"No folders available"}):N.map(ie=>o.jsx(xt,{onClick:()=>C?.(y,ie.id),className:"hover:bg-gray-100",children:ie.name},ie.id))})]})})]}),!Y&&o.jsx(Ct,{children:o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>je(!0),className:"text-gray-700 hover:text-gray-900 rounded-lg p-1 transition-colors",children:o.jsx(Sn,{className:"w-5 h-5"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Expand canvas"})})]})})]})]}),o.jsx("div",{ref:Nn,className:"flex-1 overflow-y-auto px-6 py-4 bg-gray-50",children:o.jsxs("div",{className:"max-w-chat mx-auto space-y-8",children:[j?(()=>{const ie=p.map(le=>le.role).lastIndexOf("user"),Ee=ie>=0?p.slice(0,ie+1):p,_e=ie>=0?p.slice(ie+1):[];return o.jsxs(o.Fragment,{children:[Ee.map((le,De)=>o.jsx("div",{className:"group",children:le.role==="user"?o.jsxs("div",{ref:De===ie?Ye:null,className:"flex justify-end items-start gap-2 ml-24",children:[o.jsx("button",{onClick:()=>Ue(le.id,le.content),className:"opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded mt-1",title:"Copy message",children:Je===le.id?o.jsx(un,{className:"w-4 h-4 text-green-600"}):o.jsx(ss,{className:"w-4 h-4 text-gray-400"})}),o.jsx("div",{className:"bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl mt-4",style:{fontSize:"16px",lineHeight:"1.7"},children:le.content})]}):o.jsxs("div",{className:"flex flex-col gap-1 mb-2",children:[o.jsx("div",{className:"w-full whitespace-pre-wrap text-gray-900",style:{fontSize:"16px",lineHeight:"1.7"},children:le.content}),o.jsx("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:o.jsxs(Ct,{children:[o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>Ue(le.id,le.content),className:"p-1.5 hover:bg-gray-100 rounded",children:Je===le.id?o.jsx(un,{className:"w-4 h-4 text-green-600"}):o.jsx(ss,{className:"w-4 h-4 text-gray-400"})})}),o.jsx(rt,{children:o.jsx("p",{children:Je===le.id?"Copied":"Copy"})})]}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>lt(le.id,"up"),className:`p-1.5 hover:bg-gray-100 rounded ${Tt[le.id]==="up"?"text-green-600":"text-gray-400"}`,children:o.jsx(La,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Good response"})})]}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>lt(le.id,"down"),className:`p-1.5 hover:bg-gray-100 rounded ${Tt[le.id]==="down"?"text-red-600":"text-gray-400"}`,children:o.jsx(Oa,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Bad response"})})]})]})})]})},le.id)),_e.length>0&&o.jsx("div",{ref:Ht,className:"space-y-8",children:_e.map(le=>o.jsx("div",{className:"group",children:o.jsxs("div",{className:"flex flex-col gap-1 mb-2",children:[o.jsx("div",{className:"w-full whitespace-pre-wrap text-gray-900",style:{fontSize:"16px",lineHeight:"1.7"},children:le.content}),o.jsx("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:o.jsxs(Ct,{children:[o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>Ue(le.id,le.content),className:"p-1.5 hover:bg-gray-100 rounded",children:Je===le.id?o.jsx(un,{className:"w-4 h-4 text-green-600"}):o.jsx(ss,{className:"w-4 h-4 text-gray-400"})})}),o.jsx(rt,{children:o.jsx("p",{children:Je===le.id?"Copied":"Copy"})})]}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>lt(le.id,"up"),className:`p-1.5 hover:bg-gray-100 rounded ${Tt[le.id]==="up"?"text-green-600":"text-gray-400"}`,children:o.jsx(La,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Good response"})})]}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>lt(le.id,"down"),className:`p-1.5 hover:bg-gray-100 rounded ${Tt[le.id]==="down"?"text-red-600":"text-gray-400"}`,children:o.jsx(Oa,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Bad response"})})]})]})})]})},le.id))})]})})():(()=>{const ie=M.map(le=>le.role).lastIndexOf("user"),Ee=ie>=0?M.slice(0,ie+1):M,_e=ie>=0?M.slice(ie+1):[];return o.jsxs(o.Fragment,{children:[Ee.map((le,De)=>o.jsxs("div",{className:"group",children:[le.role==="user"&&o.jsxs("div",{ref:De===ie?Ye:null,className:"flex justify-end items-start gap-2 ml-24",children:[o.jsx("button",{onClick:()=>Ue(`sim-${De}`,le.text),className:"opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded mt-1",title:"Copy message",children:Je===`sim-${De}`?o.jsx(un,{className:"w-4 h-4 text-green-600"}):o.jsx(ss,{className:"w-4 h-4 text-gray-400"})}),o.jsx("div",{className:"bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl mt-4",style:{fontSize:"16px",lineHeight:"1.7"},children:le.text})]}),le.type==="thinking"&&o.jsxs("div",{className:"flex flex-col gap-1 mb-4 p-3 bg-white rounded-lg border border-gray-200",children:[o.jsxs("button",{onClick:()=>Ae(De),className:"flex items-center justify-between w-full text-left hover:opacity-80 transition-opacity",children:[o.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Reasoning"}),o.jsx("div",{className:"text-gray-600",children:Qe.has(De)?o.jsx(ls,{className:"w-4 h-4"}):o.jsx(cs,{className:"w-4 h-4"})})]}),Qe.has(De)&&le.reasoning&&o.jsx("div",{className:"mt-2 space-y-2",children:le.reasoning.map((Vr,sn)=>o.jsxs("div",{className:"flex items-start gap-2 text-sm text-gray-600",children:[o.jsxs("span",{className:"text-gray-400 font-mono text-xs mt-0.5",children:[sn+1,"."]}),o.jsx("span",{children:Vr})]},sn))})]}),le.type==="assistantSwitch"&&o.jsx("div",{className:"flex justify-center",children:o.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300",children:[o.jsx("span",{className:"text-gray-500",children:"Switched to"}),o.jsx("svg",{className:"w-4 h-4 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),o.jsx("span",{className:"font-semibold text-gray-900",children:le.message})]})}),le.type==="text"&&o.jsxs("div",{className:"flex flex-col gap-1 mb-2",children:[o.jsx("div",{className:"w-full whitespace-pre-wrap text-gray-900",style:{fontSize:"16px",lineHeight:"1.7"},children:le.content}),o.jsx("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:o.jsxs(Ct,{children:[o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>Ue(`sim-text-${De}`,le.content),className:"p-1.5 hover:bg-gray-100 rounded",children:Je===`sim-text-${De}`?o.jsx(un,{className:"w-4 h-4 text-green-600"}):o.jsx(ss,{className:"w-4 h-4 text-gray-400"})})}),o.jsx(rt,{children:o.jsx("p",{children:Je===`sim-text-${De}`?"Copied":"Copy"})})]}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>lt(`sim-text-${De}`,"up"),className:`p-1.5 hover:bg-gray-100 rounded ${Tt[`sim-text-${De}`]==="up"?"text-green-600":"text-gray-400"}`,children:o.jsx(La,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Good response"})})]}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>lt(`sim-text-${De}`,"down"),className:`p-1.5 hover:bg-gray-100 rounded ${Tt[`sim-text-${De}`]==="down"?"text-red-600":"text-gray-400"}`,children:o.jsx(Oa,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Bad response"})})]})]})})]}),le.type==="artifact"&&o.jsx("div",{children:o.jsx("button",{onClick:()=>{_(le.data),je(!0)},className:"inline-flex bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 hover:border-gray-400 transition-colors text-left",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"text-gray-500",children:ye(le.data.fileType)}),o.jsxs("div",{children:[o.jsx("div",{className:"font-medium text-gray-900 text-sm",children:le.data.title}),o.jsx("div",{className:"text-xs text-gray-500 mt-0.5",children:le.data.description})]})]})})})]},De)),(_e.length>0||fe||he.length>0||Re||ge)&&o.jsxs("div",{ref:Ht,className:"space-y-8",children:[_e.map((le,De)=>o.jsxs("div",{className:"group",children:[le.type==="thinking"&&o.jsxs("div",{className:"flex flex-col gap-1 mb-4 p-3 bg-white rounded-lg border border-gray-200",children:[o.jsxs("button",{onClick:()=>Ae(De+1e3),className:"flex items-center justify-between w-full text-left hover:opacity-80 transition-opacity",children:[o.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Reasoning"}),o.jsx("div",{className:"text-gray-600",children:Qe.has(De+1e3)?o.jsx(ls,{className:"w-4 h-4"}):o.jsx(cs,{className:"w-4 h-4"})})]}),Qe.has(De+1e3)&&le.reasoning&&o.jsx("div",{className:"mt-2 space-y-2",children:le.reasoning.map((Vr,sn)=>o.jsxs("div",{className:"flex items-start gap-2 text-sm text-gray-600",children:[o.jsxs("span",{className:"text-gray-400 font-mono text-xs mt-0.5",children:[sn+1,"."]}),o.jsx("span",{children:Vr})]},sn))})]}),le.type==="assistantSwitch"&&o.jsx("div",{className:"flex justify-center",children:o.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300",children:[o.jsx("span",{className:"text-gray-500",children:"Switched to"}),o.jsx("svg",{className:"w-4 h-4 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),o.jsx("span",{className:"font-semibold text-gray-900",children:le.message})]})}),le.type==="text"&&o.jsxs("div",{className:"flex flex-col gap-1 mb-2",children:[o.jsx("div",{className:"w-full whitespace-pre-wrap text-gray-900",style:{fontSize:"16px",lineHeight:"1.7"},children:le.content}),o.jsx("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:o.jsxs(Ct,{children:[o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>Ue(`sim-after-${De}`,le.content),className:"p-1.5 hover:bg-gray-100 rounded",children:Je===`sim-after-${De}`?o.jsx(un,{className:"w-4 h-4 text-green-600"}):o.jsx(ss,{className:"w-4 h-4 text-gray-400"})})}),o.jsx(rt,{children:o.jsx("p",{children:Je===`sim-after-${De}`?"Copied":"Copy"})})]}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>lt(`sim-after-${De}`,"up"),className:`p-1.5 hover:bg-gray-100 rounded ${Tt[`sim-after-${De}`]==="up"?"text-green-600":"text-gray-400"}`,children:o.jsx(La,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Good response"})})]}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx("button",{onClick:()=>lt(`sim-after-${De}`,"down"),className:`p-1.5 hover:bg-gray-100 rounded ${Tt[`sim-after-${De}`]==="down"?"text-red-600":"text-gray-400"}`,children:o.jsx(Oa,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Bad response"})})]})]})})]}),le.type==="artifact"&&o.jsx("div",{children:o.jsx("button",{onClick:()=>{_(le.data),je(!0)},className:"inline-flex bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 hover:border-gray-400 transition-colors text-left",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"text-gray-500",children:ye(le.data.fileType)}),o.jsxs("div",{children:[o.jsx("div",{className:"font-medium text-gray-900 text-sm",children:le.data.title}),o.jsx("div",{className:"text-xs text-gray-500 mt-0.5",children:le.data.description})]})]})})})]},`after-${De}`)),(fe||he.length>0)&&o.jsxs("div",{className:"flex flex-col gap-1 mb-4 p-3 bg-white rounded-lg border border-gray-200",children:[o.jsxs("button",{onClick:()=>mt(le=>{const De=new Set(le);return De.has(-1)?De.delete(-1):De.add(-1),De}),className:"flex items-center justify-between w-full text-left hover:opacity-80 transition-opacity",children:[o.jsx("span",{className:"text-sm font-medium text-gray-600",children:he.length>0?he[he.length-1]:fe||"Processing..."}),o.jsx("div",{className:"text-gray-600",children:Qe.has(-1)?o.jsx(ls,{className:"w-4 h-4"}):o.jsx(cs,{className:"w-4 h-4"})})]}),Qe.has(-1)&&he.length>0&&o.jsx("div",{className:"mt-2 space-y-2",children:he.map((le,De)=>o.jsxs("div",{className:"flex items-start gap-2 text-sm text-gray-600",children:[o.jsxs("span",{className:"text-gray-400 font-mono text-xs mt-0.5",children:[De+1,"."]}),o.jsx("span",{className:De===he.length-1?"shimmer-text":"",children:le})]},De))})]}),Re&&o.jsx("div",{className:"flex justify-center",children:o.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300",children:[o.jsx("svg",{className:"w-4 h-4 animate-spin",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),o.jsx("span",{children:"Searching assistants..."})]})}),ge&&o.jsx("div",{className:"flex justify-start",children:o.jsxs("div",{className:"max-w-[80%] space-y-3 py-3",children:[o.jsx("div",{className:"h-4 bg-gray-100 rounded animate-pulse w-3/4"}),o.jsx("div",{className:"h-4 bg-gray-100 rounded animate-pulse w-full"}),o.jsx("div",{className:"h-4 bg-gray-100 rounded animate-pulse w-5/6"})]})})]})]})})(),o.jsx("div",{style:{height:`${jn}px`}}),o.jsx("div",{ref:oe})]})}),o.jsx("div",{className:"px-6 py-4 bg-gray-50",children:o.jsxs("div",{className:"max-w-chat mx-auto",children:[j?o.jsx(bu,{onSend:ie=>{et.current=!0,m?.(ie)},autoFocus:!0,bookmarkedAssistants:k,assistantType:E}):o.jsx(bu,{onSend:ws,value:ne,onChange:te,autoTypeText:Ss(),disabled:!z,assistantType:E}),(j&&p.length>0||!j&&M.length>0)&&o.jsx("p",{className:"text-xs text-gray-400 mt-3 text-center",children:"AI can make mistakes. Check important info."})]})})]})}),Y&&o.jsxs(o.Fragment,{children:[o.jsx(rR,{withHandle:!0,className:"bg-gray-100 hover:bg-gray-100 transition-colors"}),o.jsx(oh,{defaultSize:50,minSize:20,children:o.jsxs("div",{className:"flex flex-col h-full bg-white",children:[o.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-white h-[52px]",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[Q&&o.jsx("button",{onClick:()=>_(null),className:"mr-2 flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors",children:o.jsx(ni,{className:"w-4 h-4"})}),re&&Q?o.jsx("input",{type:"text",value:O,onChange:ie=>K(ie.target.value),onBlur:()=>{X(!1)},onKeyDown:ie=>{(ie.key==="Enter"||ie.key==="Escape")&&X(!1)},className:"text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400",autoFocus:!0}):o.jsx("h2",{className:"text-sm font-semibold text-gray-900 cursor-pointer",onDoubleClick:()=>{Q&&(K(Q.title),X(!0))},title:Q?"Double-click to rename":void 0,children:Q?Q.title:"Canvas"})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[Q&&o.jsx(Ct,{children:o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx(Fe,{variant:"ghost",size:"sm",onClick:ze,className:"h-8 w-8 p-0",children:nn?o.jsx(un,{className:"w-4 h-4 text-green-600"}):o.jsx(ss,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Copy content"})})]}),o.jsx("div",{className:"h-5 w-px bg-gray-100 mx-1"}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx(Fe,{variant:"ghost",size:"sm",onClick:Vt,disabled:Wt()<=1,className:"h-8 w-8 p-0",children:o.jsx(Z2,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Undo"})})]}),o.jsxs(tt,{children:[o.jsx(nt,{asChild:!0,children:o.jsx(Fe,{variant:"ghost",size:"sm",onClick:kt,disabled:Wt()>=3,className:"h-8 w-8 p-0",children:o.jsx(O2,{className:"w-4 h-4"})})}),o.jsx(rt,{children:o.jsx("p",{children:"Redo"})})]}),o.jsx("div",{className:"h-5 w-px bg-gray-100 mx-1"}),o.jsxs(Fe,{variant:"outline",size:"sm",onClick:gn,className:"h-8 px-3 gap-2 border-gray-300",children:[o.jsx(t2,{className:"w-4 h-4"}),o.jsx("span",{className:"text-xs",children:"Download as .docx"})]})]})}),o.jsx("button",{onClick:()=>je(!1),className:"text-gray-500 hover:text-gray-900 transition-colors ml-2",children:o.jsx(ro,{className:"w-5 h-5"})})]})]}),o.jsx("div",{className:"flex-1 overflow-auto",ref:Ke,children:j?o.jsx("div",{className:"h-full flex items-center justify-center",children:o.jsxs("div",{className:"text-center py-12 text-gray-500",children:[o.jsx(Sn,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),o.jsx("p",{className:"text-sm",children:"No output canvas generated yet"}),o.jsx("p",{className:"text-xs mt-1",children:"Canvases created during the chat will appear here"})]})}):Q?o.jsx("div",{className:"h-full bg-white",children:o.jsxs("div",{className:"p-8 max-w-4xl mx-auto",children:[o.jsxs("div",{className:"mb-6 flex items-start gap-3",children:[o.jsx("div",{className:"text-gray-700 mt-1",children:ye(Q.fileType)}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-semibold text-gray-900 mb-1",children:Q.title}),o.jsx("p",{className:"text-xs text-gray-500",children:Q.description})]})]}),o.jsx("div",{className:"prose prose-sm max-w-none prose-lofi",dangerouslySetInnerHTML:{__html:Q.content}})]})}):o.jsx("div",{className:"h-full p-4",children:o.jsxs("div",{className:"mb-4",children:[o.jsx("h3",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",children:"List of Canvas"}),M.filter(ie=>ie.type==="artifact").length>0?o.jsx("div",{className:"space-y-2",children:M.filter(ie=>ie.type==="artifact").map((ie,Ee)=>o.jsxs("button",{onClick:()=>_(ie.data),className:"w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-300 hover:border-gray-900 hover:shadow-sm transition-all text-left",children:[o.jsx("div",{className:"p-2 rounded-lg bg-gray-100 text-gray-700",children:ye(ie.data.fileType)}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"text-sm font-medium text-gray-900",children:ie.data.title}),o.jsx("div",{className:"text-xs text-gray-500 mt-0.5 line-clamp-1",children:ie.data.description})]}),o.jsx("div",{className:"text-gray-500",children:o.jsx(ni,{className:"w-4 h-4 rotate-180"})})]},Ee))}):o.jsxs("div",{className:"text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300",children:[o.jsx(Sn,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),o.jsx("p",{className:"text-sm",children:"No output canvas generated yet"}),o.jsx("p",{className:"text-xs mt-1",children:"Canvases created during the chat will appear here"})]})]})})})]})})]})]})};function sR({folder:n,chats:r,onBack:s,onSelectChat:a,onDeleteFolder:c,onRemoveChatFromFolder:d,onStartNewChatInFolder:p,onUpdateFolder:m}){const[h,v]=f.useState(!1),[y,x]=f.useState(n.name),[b,S]=f.useState(n.customInstructions||""),[N,C]=f.useState(n.memoriesScope),k=r.filter(R=>n.chatIds.includes(R.id)),E=()=>{m&&m(n.id,{name:y.trim()||n.name,customInstructions:b.trim(),memoriesScope:N}),v(!1)},j=()=>{const R={id:Date.now().toString(),name:"document.pdf",size:102400,uploadedAt:new Date};m&&m(n.id,{files:[...n.files||[],R]})},M=R=>{m&&m(n.id,{files:(n.files||[]).filter(I=>I.id!==R)})};return o.jsxs("div",{className:"flex-1 flex flex-col bg-gray-100",children:[o.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200",children:[o.jsx("button",{onClick:s,className:"p-1 rounded-lg hover:bg-gray-200 transition-colors text-gray-600",children:o.jsx(ni,{className:"w-5 h-5"})}),o.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[o.jsx(Zd,{className:"w-5 h-5 text-gray-600"}),o.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:n.name})]}),o.jsxs(Fe,{variant:"ghost",size:"sm",onClick:()=>p?.(n.id),className:"gap-2",children:[o.jsx(Js,{className:"w-4 h-4"}),"New Chat"]}),o.jsxs(Kn,{children:[o.jsx(Yn,{asChild:!0,children:o.jsx(Fe,{variant:"ghost",size:"sm",children:o.jsx(ps,{className:"w-4 h-4"})})}),o.jsxs(Xn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:[o.jsxs(xt,{onClick:()=>v(!0),className:"hover:bg-gray-100",children:[o.jsx(tu,{className:"w-4 h-4 mr-1"}),"Settings"]}),o.jsxs(xt,{onClick:()=>c(n.id),className:"text-red-500 hover:bg-gray-100",children:[o.jsx(fs,{className:"w-4 h-4 mr-1"}),"Delete Folder"]})]})]})]}),o.jsxs("div",{className:"flex-1 overflow-auto flex",children:[o.jsx("div",{className:"flex-1 px-4 py-8",children:o.jsxs("div",{className:"max-w-3xl mx-auto space-y-4",children:[o.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6",children:o.jsx("p",{className:"text-sm text-gray-700",children:"Chats within this folder will only reference files, custom instructions, and memories from within this folder."})}),k.length>0?k.map(R=>o.jsxs("div",{onClick:()=>a(R.id),className:"group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200",children:[o.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:o.jsx(ds,{className:"w-5 h-5 text-gray-600"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:R.title}),o.jsx("p",{className:"text-sm text-gray-500 truncate",children:R.messages.length>0?R.messages[R.messages.length-1].content.slice(0,60)+"...":"No messages yet"})]}),o.jsxs(Kn,{children:[o.jsx(Yn,{asChild:!0,children:o.jsx(Fe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-8 w-8 p-0",onClick:I=>I.stopPropagation(),children:o.jsx(ps,{className:"w-4 h-4"})})}),o.jsx(Xn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:o.jsxs(xt,{onClick:I=>{I.stopPropagation(),d(n.id,R.id)},className:"hover:bg-gray-100",children:[o.jsx(fs,{className:"w-4 h-4 mr-1"}),"Remove from folder"]})})]})]},R.id)):o.jsxs("div",{className:"text-center py-12",children:[o.jsx(Zd,{className:"w-12 h-12 text-gray-300 mx-auto mb-4"}),o.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"This folder is empty"}),o.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"Start a new chat or drag existing chats here to organize them"}),o.jsxs(Fe,{onClick:()=>p?.(n.id),className:"gap-2",children:[o.jsx(Js,{className:"w-4 h-4"}),"Start New Chat"]})]})]})}),o.jsxs("div",{className:"w-80 border-l border-gray-200 bg-white px-4 py-8 space-y-6 overflow-y-auto",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-900",children:"Custom instructions"}),o.jsx("button",{onClick:()=>v(!0),className:"text-xs text-gray-600 hover:text-gray-900 underline",children:"Edit"})]}),n.customInstructions?o.jsx("button",{onClick:()=>v(!0),className:"w-full text-left text-sm text-gray-700 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors",children:o.jsx("div",{className:"line-clamp-3",children:n.customInstructions})}):o.jsx("button",{onClick:()=>v(!0),className:"w-full text-left text-sm text-gray-500 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors",children:"No custom instructions set. Click to add."})]}),o.jsx(fi,{}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-900",children:"Files"}),o.jsxs("div",{className:"space-y-2",children:[(n.files||[]).length>0?(n.files||[]).map(R=>o.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded-lg group",children:[o.jsx(Sn,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-gray-700 flex-1 truncate",children:R.name}),o.jsx("button",{onClick:()=>M(R.id),className:"p-1 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity",children:o.jsx(ro,{className:"w-3 h-3 text-gray-500"})})]},R.id)):o.jsx("p",{className:"text-sm text-gray-500 text-center py-4",children:"No files uploaded"}),o.jsxs(Fe,{variant:"outline",size:"sm",className:"w-full gap-2 mt-2",onClick:j,children:[o.jsx(el,{className:"w-4 h-4"}),"Upload File"]})]})]})]})]}),o.jsx(ji,{open:h,onOpenChange:v,children:o.jsxs(Pi,{className:"sm:max-w-lg bg-white border-2 border-gray-900",children:[o.jsx(ao,{children:o.jsx(lo,{className:"text-gray-900",children:"Folder Settings"})}),o.jsxs("div",{className:"space-y-6 py-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{htmlFor:"folder-name",className:"text-gray-700",children:"Folder Name"}),o.jsx(tn,{id:"folder-name",value:y,onChange:R=>x(R.target.value),className:"bg-white border-gray-300"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{htmlFor:"custom-instructions",className:"text-gray-700",children:"Custom Instructions"}),o.jsx(Ei,{id:"custom-instructions",placeholder:"Add custom instructions for chats in this folder...",value:b,onChange:R=>S(R.target.value),className:"bg-white border-gray-300 min-h-[100px]"}),o.jsx("p",{className:"text-xs text-gray-500",children:"These instructions will apply to all chats within this folder."})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{className:"text-gray-700",children:"Files"}),o.jsxs("div",{className:"border border-gray-200 rounded-lg p-3 space-y-2",children:[(n.files||[]).length>0?(n.files||[]).map(R=>o.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded",children:[o.jsx(Sn,{className:"w-4 h-4 text-gray-500"}),o.jsx("span",{className:"text-sm text-gray-700 flex-1 truncate",children:R.name}),o.jsx("button",{onClick:()=>M(R.id),className:"p-1 hover:bg-gray-200 rounded",children:o.jsx(ro,{className:"w-3 h-3 text-gray-500"})})]},R.id)):o.jsx("p",{className:"text-sm text-gray-500 text-center py-2",children:"No files uploaded"}),o.jsxs(Fe,{variant:"outline",size:"sm",className:"w-full gap-2",onClick:j,children:[o.jsx(el,{className:"w-4 h-4"}),"Upload File"]})]}),o.jsx("p",{className:"text-xs text-gray-500",children:"Files uploaded here will be referenced by chats in this folder."})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(_t,{className:"text-gray-700",children:"Memories Scope"}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",children:[o.jsx("input",{type:"radio",name:"memories-scope",checked:N==="folder-only",onChange:()=>C("folder-only"),className:"mt-0.5"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-sm font-medium text-gray-900",children:"Folder only"}),o.jsx("div",{className:"text-xs text-gray-500",children:"Chats will only reference files and memories from within this folder"})]})]}),o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",children:[o.jsx("input",{type:"radio",name:"memories-scope",checked:N==="include-external",onChange:()=>C("include-external"),className:"mt-0.5"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-sm font-medium text-gray-900",children:"Include external"}),o.jsx("div",{className:"text-xs text-gray-500",children:"Chats can also reference memories and files from outside this folder"})]})]})]})]})]}),o.jsxs(Gv,{children:[o.jsx(Fe,{variant:"outline",onClick:()=>v(!1),children:"Cancel"}),o.jsx(Fe,{onClick:E,children:"Save Changes"})]})]})})]})}const Qa=[{target:'[data-tour="new-chat"]',title:"Start a New Chat",content:"Click here to start a fresh conversation with your personal assistant.",position:"right"},{target:'[data-tour="custom-assistants"]',title:"Custom Assistants",content:"Access specialised assistants tailored for specific tasks like PQ responses, procurement, and HR recruitment.",position:"right"},{target:'[data-tour="folders"]',title:"Organize with Folders",content:"Create folders to organize your chats by project or topic.",position:"right"},{target:'[data-tour="recent-chats"]',title:"Recent Chats",content:"Quickly access your chat history and continue where you left off.",position:"right"},{target:'[data-tour="chat-interface"]',title:"Chat Interface",content:"This is where you interact with your personal assistant — ask questions, upload files, and use tools.",position:"left"},{target:'[data-tour="settings"]',title:"Access Walkthrough Anytime",content:'You can access this walkthrough tour anytime by clicking the settings icon and selecting "Walkthrough Tour".',position:"top"}];function oR({isOpen:n,onClose:r}){const[s,a]=f.useState(0),[c,d]=f.useState(null),[p,m]=f.useState({top:0,left:0}),h=()=>{localStorage.setItem("hasSeenWalkthrough","true"),r()};if(f.useEffect(()=>{if(!n){a(0);return}const N=Qa[s],C=document.querySelector(N.target);if(C){d(C);const k=C.getBoundingClientRect();let E=0,j=0;switch(N.position){case"right":E=k.top+k.height/2-80,j=k.right+20;break;case"left":E=k.top+k.height/2-80,j=k.left-320-20;break;case"top":E=k.top-250,j=k.left+k.width/2-160;break;case"bottom":E=k.bottom+20,j=k.left+k.width/2-160;break}m({top:E,left:j}),C.scrollIntoView({behavior:"smooth",block:"center"})}},[s,n]),!n)return null;const v=Qa[s],y=s===0,x=s===Qa.length-1,b=()=>{x?h():a(s+1)},S=()=>{y||a(s-1)};return o.jsxs(o.Fragment,{children:[c&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed inset-0 z-[9998]",onClick:h}),o.jsx("div",{className:"fixed z-[9999] pointer-events-none",style:{top:c.getBoundingClientRect().top-4,left:c.getBoundingClientRect().left-4,width:c.getBoundingClientRect().width+8,height:c.getBoundingClientRect().height+8,border:"3px solid white",borderRadius:"8px",boxShadow:"0 0 0 9999px rgba(0, 0, 0, 0.6)"}})]}),o.jsxs("div",{className:"fixed z-[10000] bg-white border-2 border-gray-900 rounded-lg shadow-xl p-6 w-80",style:{top:p.top,left:p.left},children:[o.jsxs("div",{className:"flex items-start justify-between mb-3",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:["Step ",s+1," of ",Qa.length]}),o.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:v.title})]}),o.jsx("button",{onClick:h,className:"p-1 rounded-lg hover:bg-gray-100 transition-colors",children:o.jsx(ro,{className:"w-4 h-4 text-gray-500"})})]}),o.jsx("p",{className:"text-sm text-gray-700 mb-6",children:v.content}),o.jsxs("div",{className:"flex items-center justify-end gap-2",children:[!y&&o.jsxs(Fe,{variant:"ghost",size:"sm",onClick:S,className:"gap-1",children:[o.jsx(Fw,{className:"w-4 h-4"}),"Previous"]}),o.jsxs(Fe,{size:"sm",onClick:b,className:"bg-gray-900 hover:bg-gray-800 text-white gap-1",children:[x?"Finish":"Next",!x&&o.jsx(cs,{className:"w-4 h-4"})]})]})]})]})}function iR({open:n,onOpenChange:r,newAssistant:s,bookmarkedAssistants:a,onSwap:c}){const[d,p]=f.useState(null);if(!s)return null;const m=()=>{d&&(c(d,s.id),r(!1),p(null))},h=()=>{r(!1),p(null)};return o.jsx(ji,{open:n,onOpenChange:v=>{v||p(null),r(v)},children:o.jsxs(Pi,{className:"sm:max-w-md",children:[o.jsxs(ao,{children:[o.jsx(lo,{children:"Bookmark Limit Reached"}),o.jsxs(mu,{children:['You can only bookmark up to 3 assistants. Select one to replace with "',s.name,'".']})]}),o.jsx("div",{className:"space-y-2 py-4 overflow-y-auto max-h-[400px]",children:a.map(v=>{const y=v.icon,x=d===v.id;return o.jsxs("button",{onClick:()=>p(v.id),className:`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors text-left ${x?"border-gray-900 border-2 bg-gray-50":"border-gray-300 hover:bg-gray-100"}`,children:[o.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:o.jsx(y,{className:"w-5 h-5 text-gray-700"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("div",{className:"font-medium text-gray-900",children:v.name}),o.jsx("div",{className:"text-sm text-gray-500 truncate",children:v.description})]}),x&&o.jsx(un,{className:"w-5 h-5 text-gray-900 flex-shrink-0"})]},v.id)})}),o.jsxs("div",{className:"flex justify-end gap-2",children:[o.jsx(Fe,{variant:"outline",onClick:h,children:"Cancel"}),o.jsx(Fe,{onClick:m,disabled:!d,children:"Replace Bookmark"})]})]})})}const aR={id:"feature-overview",title:"Feature Overview Demo",description:"Showcasing platform capabilities and documentation",colorScheme:"indigo",messages:[{role:"user",content:{text:"What are the latest features in the platform?"}},{role:"bot",content:[{type:"thinking",thoughts:["Analyzing your question...","Checking latest updates...","Preparing comprehensive overview..."],timingMs:1500},{type:"text",content:"I'll provide you with an overview of our latest features. Let me gather the most up-to-date information for you."},{type:"assistantSwitch",message:"Documentation Assistant"},{type:"text",content:`Here's a detailed breakdown of our new capabilities:

• Advanced Analytics: Real-time data processing
• AI Integration: Enhanced natural language understanding
• Collaboration Tools: Team workspace with live editing
• Security Updates: End-to-end encryption`},{type:"artifact",title:"Feature Overview Document",fileType:"document",description:"Comprehensive feature list with details",interactive:!1,content:`<div class="p-6">
  <h1 class="text-2xl font-bold mb-4 text-indigo-900">Latest Platform Features</h1>
  
  <div class="space-y-4">
    <div class="border-l-4 border-indigo-500 pl-4">
      <h2 class="text-xl font-semibold text-indigo-800">Advanced Analytics</h2>
      <p class="text-gray-700 mt-2">Real-time data processing with interactive visualizations. Track metrics, generate reports, and gain insights instantly.</p>
    </div>
    
    <div class="border-l-4 border-indigo-500 pl-4">
      <h2 class="text-xl font-semibold text-indigo-800">AI Integration</h2>
      <p class="text-gray-700 mt-2">Enhanced natural language understanding with context-aware responses and intelligent automation.</p>
    </div>
    
    <div class="border-l-4 border-indigo-500 pl-4">
      <h2 class="text-xl font-semibold text-indigo-800">Collaboration Tools</h2>
      <p class="text-gray-700 mt-2">Team workspace with live editing, comments, and version control for seamless collaboration.</p>
    </div>
  </div>
</div>`}]}]},lR={id:"customer-support",title:"Customer Support Demo",description:"Handling customer inquiries and troubleshooting",colorScheme:"indigo",messages:[{role:"bot",content:[{type:"text",content:"Hello! I'm your Customer Support Assistant. I'm here to help you with any issues or questions you may have. How can I assist you today?"}]},{role:"user",content:{text:"I'm having trouble logging into my account"}},{role:"bot",content:[{type:"thinking",thoughts:["Identifying the issue...","Checking common login problems...","Preparing troubleshooting steps..."],timingMs:1500},{type:"text",content:"I understand you're having trouble logging in. Let me help you resolve this quickly."},{type:"text",content:`Here are some common solutions:

1. Check if Caps Lock is on
2. Try resetting your password
3. Clear your browser cache
4. Try a different browser`,delayMs:1e3},{type:"artifact",title:"Login Troubleshooting Guide",fileType:"document",description:"Step-by-step troubleshooting instructions",interactive:!1,content:`<div class="p-6">
  <h1 class="text-2xl font-bold mb-4 text-indigo-900">Login Troubleshooting</h1>
  <p class="text-gray-600 mb-4">Follow these steps to resolve common login issues:</p>
  
  <div class="space-y-3">
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
      <h3 class="font-semibold text-indigo-900">Step 1: Verify Credentials</h3>
      <p class="text-sm text-gray-700 mt-1">Double-check your email address and password. Make sure Caps Lock is off.</p>
    </div>
    
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
      <h3 class="font-semibold text-indigo-900">Step 2: Reset Password</h3>
      <p class="text-sm text-gray-700 mt-1">Click "Forgot Password" on the login page and follow the email instructions.</p>
    </div>
    
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
      <h3 class="font-semibold text-indigo-900">Step 3: Clear Browser Cache</h3>
      <p class="text-sm text-gray-700 mt-1">Clear your browser's cache and cookies, then try logging in again.</p>
    </div>
    
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
      <h3 class="font-semibold text-indigo-900">Step 4: Try Different Browser</h3>
      <p class="text-sm text-gray-700 mt-1">If the issue persists, try using a different browser or incognito mode.</p>
    </div>
  </div>
  
  <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
    <p class="text-sm text-blue-900"><strong>Still having issues?</strong> Contact our support team at support@example.com</p>
  </div>
</div>`}]},{role:"user",content:{text:"I tried those but still can't log in"}},{role:"bot",content:[{type:"assistantSwitch",message:"Technical Support Assistant"},{type:"text",content:"I see. Let me escalate this to our technical team. Please fill out this support ticket form so we can investigate your account and resolve this issue quickly."},{type:"artifact",title:"Support Ticket Form",fileType:"form",description:"Help us resolve your login issue",interactive:!0,content:`<div class="p-6">
  <h1 class="text-2xl font-bold mb-2 text-indigo-900">Support Ticket</h1>
  <p class="text-gray-600 mb-6">Please provide the following information so our team can assist you.</p>
  
  <form id="supportForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
      <input type="email" name="email" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
             placeholder="your.email@example.com">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Account Username</label>
      <input type="text" name="username" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
             placeholder="Your username">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">When did this issue start?</label>
      <input type="date" name="issue_date" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Browser You're Using</label>
      <select name="browser" required 
              class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="">Select browser</option>
        <option value="chrome">Chrome</option>
        <option value="firefox">Firefox</option>
        <option value="safari">Safari</option>
        <option value="edge">Edge</option>
        <option value="other">Other</option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Error Message (if any)</label>
      <textarea name="error_message" rows="3" 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Paste any error messages you see..."></textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
      <textarea name="details" rows="3" required 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Any other information that might help us..."></textarea>
    </div>
    
    <button type="submit" 
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium">
      Submit Ticket
    </button>
  </form>
</div>`}]}]},cR={id:"feedback-collection",title:"Feedback Collection Demo",description:"Gathering user feedback and suggestions",colorScheme:"indigo",messages:[{role:"user",content:{text:"I'd like to provide feedback about the platform"}},{role:"bot",content:[{type:"thinking",thoughts:["Great! Preparing feedback form...","Setting up survey questions..."],timingMs:1200},{type:"text",content:"Thank you for wanting to share your feedback! Your input is invaluable in helping us improve our platform. Please take a moment to fill out this survey."},{type:"artifact",title:"User Feedback Survey",fileType:"form",description:"Share your experience and suggestions",interactive:!0,content:`<div class="p-6">
  <h1 class="text-2xl font-bold mb-2 text-indigo-900">We Value Your Feedback</h1>
  <p class="text-gray-600 mb-6">Help us serve you better by sharing your thoughts.</p>
  
  <form id="feedbackForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
      <input type="text" name="name" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
             placeholder="John Doe">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
      <input type="email" name="email" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
             placeholder="your.email@example.com">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Overall Experience</label>
      <select name="experience" required 
              class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="">Select your rating</option>
        <option value="excellent">Excellent - Exceeded expectations</option>
        <option value="good">Good - Met expectations</option>
        <option value="average">Average - Room for improvement</option>
        <option value="poor">Poor - Below expectations</option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">What do you like most about our platform?</label>
      <textarea name="likes" rows="3" required 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Tell us what you love..."></textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">What could we improve?</label>
      <textarea name="improvements" rows="3" required 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Share your suggestions..."></textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Would you recommend us to others?</label>
      <div class="space-y-2">
        <label class="flex items-center">
          <input type="radio" name="recommend" value="yes" required 
                 class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
          <span class="ml-2 text-sm text-gray-700">Yes, definitely</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="recommend" value="maybe" required 
                 class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
          <span class="ml-2 text-sm text-gray-700">Maybe</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="recommend" value="no" required 
                 class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
          <span class="ml-2 text-sm text-gray-700">No</span>
        </label>
      </div>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
      <textarea name="comments" rows="3" 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Anything else you'd like to share..."></textarea>
    </div>
    
    <div class="border-t pt-4">
      <label class="flex items-center">
        <input type="checkbox" name="newsletter" 
               class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
        <span class="ml-2 text-sm text-gray-700">Send me updates and newsletters</span>
      </label>
    </div>
    
    <button type="submit" 
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium">
      Submit Feedback
    </button>
  </form>
</div>`}]}]},dR={id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting Demo",description:"AI-assisted candidate screening and shortlisting for government recruitment with system integrations",colorScheme:"indigo",messages:[{role:"bot",content:[{type:"text",content:"Hello! I'm the Workday Candidate Shortlister Assistant. I can help you efficiently screen and shortlist candidates from your Workday HCM system using AI-powered analysis. What can I do for you today?"}]},{role:"user",content:{text:"Hi! I just received 127 applications for our Senior Software Engineer position (Req ID: GTA-2024-SE-089). I need to shortlist about 10 candidates by end of day tomorrow. Can you help me get started?"}},{role:"bot",content:[{type:"thinking",thoughts:["Analyzing job requisition GTA-2024-SE-089...","Connecting to Workday HCM system...","Retrieving candidate applications...","Preparing shortlisting workflow..."],timingMs:1e3},{type:"text",content:"Good morning, Michelle! I'd be happy to help you with this shortlisting. Let me pull up the candidate data from Workday."},{type:"artifact",title:"Workday System Integration - Data Retrieval",fileType:"document",description:"Connecting to Workday HCM to retrieve candidate profiles",interactive:!1,content:`<div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-300">
  <h2 class="text-xl font-bold text-blue-900 mb-4">🔄 System Status: Workday HCM Integration</h2>
  
  <div class="space-y-3">
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Connected to Workday HCM</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Retrieving Job Requisition: GTA-2024-SE-089</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Fetching candidate applications...</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Downloading 127 candidate profiles and CVs</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Extracting structured data from resumes</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Loading job description and requirements</span>
    </div>
  </div>
  
  <div class="mt-6 bg-white p-4 rounded-lg shadow-md">
    <div class="mb-2">
      <div class="text-sm text-gray-600 mb-1">Progress</div>
      <div class="w-full bg-gray-200 rounded-full h-3">
        <div class="bg-green-600 h-3 rounded-full" style="width: 100%"></div>
      </div>
    </div>
    <p class="text-sm font-semibold text-green-700 mt-2">Status: ✅ Successfully retrieved 127 candidate profiles from Workday</p>
  </div>
</div>`},{type:"text",content:`Perfect! I've successfully retrieved all **127 applications** for **Job Requisition GTA-2024-SE-089** (Senior Software Engineer) from Workday.

Here's what I have:
- ✅ 127 candidate profiles with full CVs
- ✅ Job description and requirements
- ✅ Application timestamps and candidate details
- ✅ Current workflow status for each application`,delayMs:1e3},{type:"text",content:`To get us started efficiently, I have a few questions:

1. **Do you want me to use the standard criteria from the job description**, or would you like to adjust any requirements?
2. **Are there any must-have qualifications** that are non-negotiable for this role?
3. **Should I apply any of your previous preferences** from similar software engineering roles you've screened?

Once you confirm, I'll leverage our AI Platform's Recommendations API to analyze all candidates and have an initial ranked list ready in about 3-5 minutes.`,delayMs:500}]},{role:"user",content:{text:"Yes, please use the standard job description criteria. The must-haves are: minimum 5 years of software development experience, strong backend development skills, and experience with cloud platforms. Also, yes - apply my previous preferences if they're relevant!"}},{role:"bot",content:[{type:"thinking",thoughts:["Processing job description criteria...","Extracting must-have requirements...","Loading saved user preferences...","Connecting to AI Platform's Recommendations API...","Uploading candidate data for analysis...","Running intelligent matching algorithms...","Calculating match scores..."],timingMs:1e3},{type:"text",content:"Perfect! Let me process all 127 applications using our AI-powered analysis system."},{type:"artifact",title:"AI Platform Integration - Candidate Analysis",fileType:"document",description:"AI-powered candidate matching and ranking using Recommendations API",interactive:!1,content:`<div class="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
  <h2 class="text-xl font-bold text-purple-900 mb-4">🤖 AI Analysis in Progress</h2>
  
  <div class="bg-white p-4 rounded-lg shadow-md mb-4">
    <p class="text-sm font-semibold text-gray-700 mb-3">Criteria Configured:</p>
    <ul class="text-sm text-gray-600 space-y-1">
      <li>✓ Standard Job Description Requirements</li>
      <li>✓ Must-have Qualifications</li>
      <li>✓ User's Saved Preferences</li>
    </ul>
  </div>
  
  <div class="space-y-3">
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Connecting to AI Platform's Recommendations API...</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Uploading candidate data for analysis...</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Running intelligent matching algorithms...</span>
    </div>
  </div>
  
  <div class="mt-4 bg-purple-100 p-4 rounded-lg">
    <p class="text-sm font-semibold text-purple-900 mb-2">Analysis Tasks:</p>
    <ul class="text-xs text-purple-800 space-y-1">
      <li>→ Analyzing technical skills and experience levels</li>
      <li>→ Evaluating backend development expertise</li>
      <li>→ Assessing cloud platform proficiency (AWS/Azure/GCP)</li>
      <li>→ Matching against microservices architecture experience</li>
      <li>→ Scoring programming language proficiency</li>
      <li>→ Evaluating government sector exposure</li>
      <li>→ Analyzing leadership and mentoring capabilities</li>
      <li>→ Applying Michelle's saved preferences</li>
      <li>→ Calculating composite match scores</li>
      <li>→ Ranking candidates by fit score</li>
    </ul>
  </div>
  
  <div class="mt-6 bg-white p-4 rounded-lg shadow-md">
    <div class="mb-2">
      <div class="text-sm text-gray-600 mb-1">Analysis Progress</div>
      <div class="w-full bg-gray-200 rounded-full h-3">
        <div class="bg-purple-600 h-3 rounded-full" style="width: 100%"></div>
      </div>
    </div>
    <p class="text-sm font-semibold text-purple-700 mt-2">Status: ✅ AI analysis complete - 127 candidates ranked</p>
  </div>
</div>`},{type:"text",content:`Excellent! The AI Platform's Recommendations API has completed the analysis. Here's what I'm working with:

**Must-Have Requirements (High Priority):**
- ✓ Minimum 5 years software development experience
- ✓ Backend development expertise
- ✓ Cloud platform experience (AWS/Azure/GCP)

**Additional Criteria from Job Description:**
- Bachelor's degree in Computer Science or related field
- Experience with microservices architecture
- Proficiency in Java, Python, or Go
- Database management skills (SQL/NoSQL)
- Agile/Scrum experience

**Your Saved Preferences Applied:**
- Prioritizing candidates with public sector or government experience
- Valuing continuous learning (certifications, recent courses)
- Considering internal mobility candidates favorably`,delayMs:1e3},{type:"text",content:`✅ **Analysis Complete!**

Here's your overview:

📊 **Candidate Distribution:**
- **Highly Qualified (90%+ match):** 12 candidates
- **Well Qualified (75-89% match):** 28 candidates  
- **Moderately Qualified (60-74% match):** 45 candidates
- **Below Threshold (<60% match):** 42 candidates

🎯 **Recommended Shortlist:** I've identified **10 top candidates** who best match your criteria.

Would you like to:
1. **Review the top 10 shortlist** with detailed insights
2. **Adjust the criteria** and re-rank
3. **See candidates by specific strengths** (e.g., strongest cloud experience)`,delayMs:1500}]},{role:"user",content:{text:"Let me review the top 10 shortlist with insights, please!"}},{role:"bot",content:[{type:"text",content:"Excellent! Here are your **Top 10 Shortlisted Candidates** with AI-generated insights:"},{type:"artifact",title:"Top 10 Shortlisted Candidates - Detailed Analysis",fileType:"document",description:"Comprehensive candidate profiles with match scores and recommendations",interactive:!1,content:`<div class="p-6 space-y-6">
  <h1 class="text-3xl font-bold mb-6 text-indigo-900">Top 10 Shortlisted Candidates</h1>
  
  <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-lg border-2 border-yellow-400 shadow-md">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-2xl font-bold text-yellow-900">🥇 Rank 1: David Chen</h2>
      <span class="bg-yellow-600 text-white px-4 py-2 rounded-full font-bold text-lg">96% Match</span>
    </div>
    <div class="space-y-3">
      <div>
        <h3 class="font-semibold text-yellow-900 mb-2">Key Strengths:</h3>
        <ul class="list-disc list-inside text-gray-800 space-y-1">
          <li>8 years backend development (Java, Python, Node.js)</li>
          <li>4 years AWS experience with Solutions Architect certification</li>
          <li>Currently at Government Digital Services - internal candidate advantage</li>
          <li>Led migration of 3 legacy systems to microservices architecture</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="bg-indigo-50 p-5 rounded-lg border border-indigo-300">
    <h2 class="text-xl font-bold text-indigo-900 mb-4">Ranks 2-10: Strong Contenders</h2>
    <div class="space-y-4">
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 2: Sarah Tan (94%)</h3>
        <p class="text-sm text-gray-700">7 years exp | Fintech | Azure expert</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 3: Raj Kumar (93%)</h3>
        <p class="text-sm text-gray-700">6 years exp | Multi-cloud | MOE contractor</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 4: Emily Wong (91%)</h3>
        <p class="text-sm text-gray-700">9 years exp | MOH cluster | Healthcare compliance</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 5: Marcus Lim (90%)</h3>
        <p class="text-sm text-gray-700">6 years exp | E-commerce | High-performance systems</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 6: Priya Sharma (89%)</h3>
        <p class="text-sm text-gray-700">7 years exp | Ex-LTA | Continuous learner</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 7: Jonathan Ng (88%)</h3>
        <p class="text-sm text-gray-700">5 years exp | GovTech | Culture fit</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 8: Linda Koh (87%)</h3>
        <p class="text-sm text-gray-700">8 years exp | Telecom | Legacy systems expert</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 9: Kevin Tan (86%)</h3>
        <p class="text-sm text-gray-700">6 years exp | Ex-IRAS intern | Modern stack</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 10: Amanda Lee (85%)</h3>
        <p class="text-sm text-gray-700">7 years exp | Insurance | Leadership experience</p>
      </div>
    </div>
  </div>
  
  <div class="bg-green-50 p-5 rounded-lg border border-green-300">
    <h2 class="text-xl font-bold text-green-900 mb-3">📊 Quick Statistics</h2>
    <ul class="space-y-2 text-gray-800">
      <li>✓ Average years of experience: 6.8 years</li>
      <li>✓ Government/public sector background: 5 out of 10</li>
      <li>✓ All meet must-have requirements: Yes</li>
      <li>✓ Cloud certifications: 7 out of 10</li>
      <li>✓ Leadership/mentoring experience: 6 out of 10</li>
    </ul>
  </div>
</div>`},{type:"text",content:`**Would you like me to:**
1. **Export this shortlist** to send to your hiring manager
2. **Dive deeper into any specific candidate**
3. **Compare two candidates** side-by-side
4. **Adjust criteria** and see how rankings change
5. **Draft interview invitation emails** for these candidates`,delayMs:1e3}]},{role:"user",content:{text:"This is really helpful! Can you help me draft an email to my hiring manager explaining this shortlist?"}},{role:"bot",content:[{type:"thinking",thoughts:["Drafting professional email for hiring manager...","Structuring shortlist summary...","Including key statistics and recommendations...","Formatting with government communication standards..."],timingMs:1e3},{type:"text",content:"Absolutely! I'll draft a professional summary email for your hiring manager."},{type:"artifact",title:"Email Draft to Hiring Manager",fileType:"document",description:"Professional shortlist summary for James Wong",interactive:!1,content:`<div class="p-6 bg-white">
  <div class="border-b-2 border-indigo-600 pb-4 mb-4">
    <h1 class="text-2xl font-bold text-indigo-900">📧 DRAFT EMAIL</h1>
  </div>
  
  <div class="space-y-3 mb-6">
    <div class="flex"><span class="font-semibold w-20">To:</span><span>James Wong (Hiring Manager - Engineering)</span></div>
    <div class="flex"><span class="font-semibold w-20">From:</span><span>Michelle Lim (HR Officer - Recruitment)</span></div>
    <div class="flex"><span class="font-semibold w-20">Subject:</span><span>Shortlisted Candidates for Senior Software Engineer Role (GTA-2024-SE-089)</span></div>
  </div>
  
  <div class="space-y-4 text-gray-800">
    <p>Dear James,</p>
    
    <p>I've completed the initial screening for the Senior Software Engineer position (Req ID: GTA-2024-SE-089). From 127 applications received, I've shortlisted 10 highly qualified candidates who meet all must-have requirements and align well with our team needs.</p>
    
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200 my-4">
      <h3 class="font-bold text-indigo-900 mb-2">Shortlisting Criteria Applied:</h3>
      <ul class="list-disc list-inside text-sm">
        <li>Minimum 5 years software development experience</li>
        <li>Strong backend development skills</li>
        <li>Cloud platform experience (AWS/Azure/GCP)</li>
        <li>Government/public sector exposure (preferred)</li>
      </ul>
    </div>
    
    <div class="bg-green-50 p-4 rounded-lg border border-green-200 my-4">
      <h3 class="font-bold text-green-900 mb-2">Shortlist Overview:</h3>
      <ul class="text-sm space-y-1">
        <li>Match Scores: 85% - 96%</li>
        <li>Average Experience: 6.8 years</li>
        <li>Government Background: 5 out of 10 candidates</li>
        <li>Cloud Certifications: 7 out of 10 candidates</li>
      </ul>
    </div>
    
    <p>Please review the attached detailed candidate profiles. I'm confident this shortlist represents strong talent aligned with our requirements.</p>
    
    <p class="mt-4">Best regards,<br>Michelle Lim<br>HR Officer (Recruitment)</p>
  </div>
</div>`},{type:"text",content:"I've drafted a comprehensive email that summarizes your methodology professionally. **Would you like me to send this email with all attachments to James?**",delayMs:1e3}]},{role:"user",content:{text:"Yes, please go ahead and send everything to James! This looks great."}},{role:"bot",content:[{type:"thinking",thoughts:["Preparing email package for sending...","Generating PDF documents...","Connecting to email server...","Sending email to james.wong@tech.gov.sg...","Updating Workday with shortlist status...","Recording audit trail..."],timingMs:1e3},{type:"text",content:"Perfect! I'll send the email now with all the attachments and update Workday."},{type:"artifact",title:"Email & System Updates - Processing",fileType:"document",description:"Sending email and updating candidate statuses in Workday",interactive:!1,content:`<div class="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-green-400">
  <h2 class="text-xl font-bold text-green-900 mb-4">🔄 System Operations in Progress</h2>
  
  <div class="bg-white p-4 rounded-lg shadow-md mb-4">
    <h3 class="font-bold text-gray-900 mb-3">Email Delivery:</h3>
    <div class="space-y-2">
      <div class="flex items-center space-x-3">
        <span class="text-green-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">Email delivered successfully</span>
      </div>
      <div class="flex items-center space-x-3">
        <span class="text-green-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">3 attachments sent (11.5 MB total)</span>
      </div>
    </div>
  </div>
  
  <div class="bg-blue-100 p-4 rounded-lg shadow-md">
    <h3 class="font-bold text-blue-900 mb-3">Workday HCM Integration:</h3>
    <div class="space-y-2">
      <div class="flex items-center space-x-3">
        <span class="text-blue-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">10 candidates marked as Shortlisted</span>
      </div>
      <div class="flex items-center space-x-3">
        <span class="text-blue-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">Requisition status updated to Manager Review</span>
      </div>
      <div class="flex items-center space-x-3">
        <span class="text-blue-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">Audit trail recorded for compliance</span>
      </div>
    </div>
  </div>
</div>`},{type:"artifact",title:"Email Delivery Confirmation",fileType:"document",description:"Successful email delivery with tracking details",interactive:!1,content:`<div class="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-400 shadow-lg">
  <div class="flex items-center mb-4">
    <div class="bg-green-500 rounded-full p-3 mr-4">
      <span class="text-white text-2xl">✓</span>
    </div>
    <h1 class="text-2xl font-bold text-green-900">Email Sent Successfully!</h1>
  </div>
  
  <div class="bg-white p-5 rounded-lg shadow-md mb-4">
    <h2 class="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Delivery Confirmation</h2>
    <div class="space-y-2 text-sm">
      <div class="flex">
        <span class="font-semibold w-32 text-gray-700">To:</span>
        <span class="text-gray-900">James Wong</span>
      </div>
      <div class="flex">
        <span class="font-semibold w-32 text-gray-700">Status:</span>
        <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Delivered</span>
      </div>
    </div>
  </div>
  
  <div class="bg-blue-50 p-5 rounded-lg shadow-md">
    <h3 class="font-bold text-blue-900 mb-3">Workday Integration Summary:</h3>
    <ul class="space-y-2 text-sm text-gray-800">
      <li class="flex items-center">
        <span class="text-blue-600 mr-2">✓</span>
        <span>10 candidates marked as Shortlisted in Workday</span>
      </li>
      <li class="flex items-center">
        <span class="text-blue-600 mr-2">✓</span>
        <span>Requisition status updated to Manager Review</span>
      </li>
      <li class="flex items-center">
        <span class="text-blue-600 mr-2">✓</span>
        <span>Audit trail recorded for compliance tracking</span>
      </li>
    </ul>
  </div>
</div>`},{type:"text",content:`All done! I've successfully:

1. ✅ Sent email with all attachments to James
2. ✅ Updated Workday - All 10 shortlisted candidates now have Shortlisted status
3. ✅ Advanced workflow - Requisition moved to Manager Review stage
4. ✅ Maintained compliance - Full audit trail recorded in Workday`,delayMs:800},{type:"text",content:`**Session Summary:**
- ⏱️ Time taken: ~15 minutes (vs. 6-7 hours manually)
- 📊 Candidates processed: 127 applications from Workday
- 🤖 AI analysis: Powered by AI Platform's Recommendations API
- 🎯 Shortlist generated: 10 top candidates (85-96% match)
- 📧 Communication: Email sent with 3 professional attachments
- 💼 System integration: Workday updated with shortlist status
- ✅ End-to-end workflow: Complete from data retrieval to status updates`,delayMs:1e3}]},{role:"user",content:{text:"This is amazing! You've saved me probably 6-7 hours of work and handled everything end-to-end, including the Workday updates! Thank you so much!"}},{role:"bot",content:[{type:"text",content:"You're very welcome, Michelle! 😊"},{type:"text",content:"I'm thrilled I could streamline your entire shortlisting process - from pulling data from Workday, analyzing 127 applications with AI, to delivering a professional package to James and updating all candidate statuses back in Workday. That's exactly what I'm here for!",delayMs:500},{type:"artifact",title:"What We Accomplished Together",fileType:"document",description:"Complete workflow recap",interactive:!1,content:`<div class="p-6 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 rounded-lg border-2 border-purple-300 shadow-lg">
  <div class="text-center mb-5">
    <h1 class="text-3xl font-bold text-purple-900 mb-2">Mission Accomplished!</h1>
    <p class="text-gray-700">Here's everything we achieved together</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
      <h3 class="font-bold text-blue-900 mb-2">Retrieved Data from Workday</h3>
      <p class="text-sm text-gray-700">127 candidate profiles and CVs pulled from Workday HCM</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
      <h3 class="font-bold text-purple-900 mb-2">AI-Powered Analysis</h3>
      <p class="text-sm text-gray-700">Leveraged AI Platform's Recommendations API for intelligent matching</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
      <h3 class="font-bold text-green-900 mb-2">Generated Candidate Insights</h3>
      <p class="text-sm text-gray-700">Detailed profiles with strengths and recommendations</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
      <h3 class="font-bold text-yellow-900 mb-2">Created Professional Documentation</h3>
      <p class="text-sm text-gray-700">Email summary and candidate profiles</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
      <h3 class="font-bold text-orange-900 mb-2">Sent Everything to Hiring Manager</h3>
      <p class="text-sm text-gray-700">Delivered complete package with attachments</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
      <h3 class="font-bold text-red-900 mb-2">Updated Workday System</h3>
      <p class="text-sm text-gray-700">10 candidates marked as Shortlisted with full audit trail</p>
    </div>
  </div>
  
  <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-5 rounded-lg shadow-lg text-center">
    <h2 class="text-2xl font-bold mb-2">Time Saved: 6-7 Hours</h2>
    <p class="text-sm">Completed in just 15 minutes with AI assistance</p>
  </div>
  
  <div class="mt-5 bg-blue-100 p-4 rounded-lg border border-blue-300">
    <h3 class="font-bold text-blue-900 mb-2">I'll Continue Monitoring:</h3>
    <ul class="space-y-1 text-sm text-gray-800">
      <li>James' response to your email</li>
      <li>Follow-up timing</li>
      <li>Next steps in the recruitment workflow</li>
    </ul>
  </div>
  
  <div class="mt-4 text-center">
    <p class="text-gray-700 italic">Feel free to focus on your other priorities!</p>
  </div>
</div>`},{type:"text",content:"Have a productive day! 🎯",delayMs:800}]}]},uR={id:"procurement-rfq",title:"Procurement RFQ to AOR Demo",description:"Request for Quotation process leading to Approval of Requirement",colorScheme:"indigo",messages:[{role:"user",content:{text:"I want to create a RFQ for buying creative software for my team",autoSend:!0}},{role:"bot",content:[{type:"thinking",thought:"Analyzing procurement request for creative software...",reasoning:["Understanding user's request to create RFQ for creative software...","Identifying procurement type: software licenses for team...","Loading relevant RFQ templates and government procurement guidelines...","Checking vendor database for qualified creative software suppliers...","Preparing standardized quotation request form...","Setting up compliance requirements and evaluation criteria..."],timingMs:3500},{type:"text",content:"I'll help you create a Request for Quotation (RFQ) for creative software. Let me prepare the RFQ form with the necessary details to obtain quotes from at least 3 vendors."},{type:"artifact",title:"Request for Quotation (RFQ) Form",fileType:"form",description:"RFQ for Creative Software Purchase",interactive:!0,content:`<div class="p-6">
  <h1 class="text-2xl font-bold mb-2 text-emerald-900">Request for Quotation (RFQ)</h1>
  <p class="text-gray-600 mb-6">Please provide the following information to generate your RFQ.</p>
  
  <form id="rfqForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Department/Agency</label>
      <input type="text" name="department" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             placeholder="e.g., Marketing Department">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Item Description</label>
      <textarea name="itemDescription" rows="3" required 
                class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                placeholder="e.g., Adobe Creative Cloud licenses for graphic design and video editing"></textarea>
    </div>
    
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
        <input type="number" name="quantity" required 
               class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
               placeholder="e.g., 15">
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Unit of Measure</label>
        <select name="unit" required 
                class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
          <option value="">Select unit</option>
          <option value="license">License</option>
          <option value="unit">Unit</option>
          <option value="set">Set</option>
          <option value="package">Package</option>
        </select>
      </div>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Estimated Budget (SGD)</label>
      <input type="number" name="budget" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             placeholder="e.g., 8000">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Required Delivery Date</label>
      <input type="date" name="deliveryDate" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Special Requirements / Technical Specifications</label>
      <textarea name="specifications" rows="3" 
                class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                placeholder="e.g., Must include cloud storage, multi-device access, annual subscription"></textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Evaluation Criteria</label>
      <div class="space-y-2">
        <label class="flex items-center">
          <input type="checkbox" name="criteria" value="price" checked disabled
                 class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500">
          <span class="ml-2 text-sm text-gray-700">Price (Required)</span>
        </label>
        <label class="flex items-center">
          <input type="checkbox" name="criteria" value="quality" checked
                 class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500">
          <span class="ml-2 text-sm text-gray-700">Quality of Product/Service</span>
        </label>
        <label class="flex items-center">
          <input type="checkbox" name="criteria" value="delivery"
                 class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500">
          <span class="ml-2 text-sm text-gray-700">Delivery Timeline</span>
        </label>
        <label class="flex items-center">
          <input type="checkbox" name="criteria" value="support"
                 class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500">
          <span class="ml-2 text-sm text-gray-700">After-sales Support</span>
        </label>
      </div>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Requestor Name</label>
      <input type="text" name="requestorName" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             placeholder="Your full name">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
      <input type="email" name="email" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             placeholder="your.email@agency.gov.sg">
    </div>
    
    <button type="submit" 
            class="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors font-medium">
      Generate RFQ Document
    </button>
  </form>
</div>`}]},{role:"user",content:{formSubmission:!0},delayMs:1300},{role:"bot",content:[{type:"thinking",thought:"Processing RFQ submission and generating vendor quotations...",reasoning:["Analyzing submitted RFQ details from the form...","Validating procurement requirements and budget allocation...","Querying vendor database for qualified creative software suppliers...","Generating quotation requests to 3 pre-qualified vendors...","Receiving and compiling vendor responses...","Preparing comparison analysis with evaluation criteria..."],timingMs:3500},{type:"text",content:"Perfect! I've generated your RFQ and sent it to 3 qualified vendors. Here's the summary of quotes received:"},{type:"assistantSwitch",message:"Procurement Officer Assistant"},{type:"artifact",title:"Vendor Quotations Comparison",fileType:"document",description:"3 Quotes Received for Creative Software",interactive:!1,content:`<div class="p-6">
  <h1 class="text-2xl font-bold mb-4 text-emerald-900">Quotation Comparison</h1>
  <p class="text-gray-600 mb-6">RFQ Reference: RFQ-2025-0324-CS</p>
  
  <div class="space-y-4">
    <!-- Vendor 1 -->
    <div class="border-2 border-emerald-500 bg-emerald-50 rounded-lg p-4">
      <div class="flex justify-between items-start mb-3">
        <div>
          <h2 class="text-lg font-bold text-emerald-900">Vendor A: CreativeSoft Solutions</h2>
          <p class="text-sm text-gray-600">Authorized Adobe Reseller</p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-emerald-700">SGD $7,200</div>
          <div class="text-xs text-gray-500">Total for 15 licenses</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span class="font-medium text-gray-700">Unit Price:</span>
          <span class="ml-2">SGD $480/license</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Delivery:</span>
          <span class="ml-2">2 business days</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">License Type:</span>
          <span class="ml-2">Annual subscription</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Support:</span>
          <span class="ml-2">24/7 email & phone</span>
        </div>
      </div>
      <div class="mt-3 p-2 bg-white rounded border border-emerald-200">
        <p class="text-xs text-gray-600"><strong>Includes:</strong> Adobe Creative Cloud All Apps, 100GB cloud storage, Adobe Fonts, Adobe Portfolio</p>
      </div>
      <div class="mt-2">
        <span class="inline-block px-2 py-1 bg-emerald-600 text-white text-xs rounded">✓ RECOMMENDED</span>
        <span class="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded ml-2">Best Value</span>
      </div>
    </div>
    
    <!-- Vendor 2 -->
    <div class="border border-gray-300 rounded-lg p-4">
      <div class="flex justify-between items-start mb-3">
        <div>
          <h2 class="text-lg font-bold text-gray-900">Vendor B: TechPro Supplies</h2>
          <p class="text-sm text-gray-600">Software Distributor</p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-gray-700">SGD $8,100</div>
          <div class="text-xs text-gray-500">Total for 15 licenses</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span class="font-medium text-gray-700">Unit Price:</span>
          <span class="ml-2">SGD $540/license</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Delivery:</span>
          <span class="ml-2">5 business days</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">License Type:</span>
          <span class="ml-2">Annual subscription</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Support:</span>
          <span class="ml-2">Business hours only</span>
        </div>
      </div>
      <div class="mt-3 p-2 bg-gray-50 rounded border border-gray-200">
        <p class="text-xs text-gray-600"><strong>Includes:</strong> Adobe Creative Cloud All Apps, 100GB cloud storage, Basic training session</p>
      </div>
    </div>
    
    <!-- Vendor 3 -->
    <div class="border border-gray-300 rounded-lg p-4">
      <div class="flex justify-between items-start mb-3">
        <div>
          <h2 class="text-lg font-bold text-gray-900">Vendor C: Digital Media Hub</h2>
          <p class="text-sm text-gray-600">Creative Software Specialist</p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-gray-700">SGD $7,950</div>
          <div class="text-xs text-gray-500">Total for 15 licenses</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span class="font-medium text-gray-700">Unit Price:</span>
          <span class="ml-2">SGD $530/license</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Delivery:</span>
          <span class="ml-2">3 business days</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">License Type:</span>
          <span class="ml-2">Annual subscription</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Support:</span>
          <span class="ml-2">Email support 24/7</span>
        </div>
      </div>
      <div class="mt-3 p-2 bg-gray-50 rounded border border-gray-200">
        <p class="text-xs text-gray-600"><strong>Includes:</strong> Adobe Creative Cloud All Apps, 1TB cloud storage, Extended support</p>
      </div>
      <div class="mt-2">
        <span class="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Best Storage</span>
      </div>
    </div>
  </div>
  
  <div class="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
    <h3 class="font-bold text-emerald-900 mb-2">Procurement Recommendation</h3>
    <p class="text-sm text-gray-700">Based on the evaluation criteria (price, quality, delivery, support), <strong>Vendor A: CreativeSoft Solutions</strong> offers the best overall value at SGD $7,200, with the fastest delivery time and comprehensive 24/7 support.</p>
  </div>
</div>`},{type:"text",content:"Would you like to proceed with Vendor A and generate the Approval of Requirement (AOR) document?"}]},{role:"user",content:{text:"Yes, proceed with Vendor A and generate the AOR"}},{role:"bot",content:[{type:"thinking",thought:"Generating Approval of Requirement document...",reasoning:["Analyzing user's decision to proceed with Vendor A...","Compiling all RFQ and quotation data for AOR document...","Preparing procurement justification and business case...","Calculating budget allocation and cost savings analysis...","Generating approval workflow with stakeholder requirements...","Formatting document to government procurement standards..."],timingMs:3500},{type:"text",content:"Excellent! I'm generating your Approval of Requirement (AOR) document with all the necessary justifications and supporting documentation."},{type:"artifact",title:"Approval of Requirement (AOR)",fileType:"document",description:"Procurement Approval Document",interactive:!1,content:`<div class="p-6">
  <div class="border-b-2 border-emerald-600 pb-4 mb-6">
    <h1 class="text-2xl font-bold text-emerald-900">APPROVAL OF REQUIREMENT (AOR)</h1>
    <p class="text-sm text-gray-600 mt-1">Singapore Government Procurement</p>
  </div>
  
  <div class="grid grid-cols-2 gap-4 mb-6 text-sm">
    <div>
      <span class="font-medium text-gray-700">AOR Reference:</span>
      <span class="ml-2">AOR-2025-0324-CS-001</span>
    </div>
    <div>
      <span class="font-medium text-gray-700">Date:</span>
      <span class="ml-2">25 November 2025</span>
    </div>
    <div>
      <span class="font-medium text-gray-700">Department:</span>
      <span class="ml-2">Marketing Department</span>
    </div>
    <div>
      <span class="font-medium text-gray-700">RFQ Reference:</span>
      <span class="ml-2">RFQ-2025-0324-CS</span>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">1. REQUIREMENT DETAILS</h2>
      <div class="space-y-2 text-sm">
        <div>
          <span class="font-medium">Item Description:</span>
          <p class="mt-1">Adobe Creative Cloud All Apps licenses for graphic design and video editing</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-3">
          <div>
            <span class="font-medium">Quantity:</span> 15 licenses
          </div>
          <div>
            <span class="font-medium">Unit of Measure:</span> License (Annual)
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">2. JUSTIFICATION</h2>
      <p class="text-sm text-gray-700">
        The Marketing Department requires Adobe Creative Cloud licenses to support ongoing digital marketing campaigns, content creation, and branding initiatives. The software suite is essential for producing high-quality graphics, videos, and multimedia content for government communications and public engagement.
      </p>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">3. QUOTATION SUMMARY</h2>
      <table class="w-full text-sm">
        <thead class="bg-emerald-100">
          <tr>
            <th class="text-left p-2 border border-emerald-200">Vendor</th>
            <th class="text-right p-2 border border-emerald-200">Unit Price (SGD)</th>
            <th class="text-right p-2 border border-emerald-200">Total (SGD)</th>
            <th class="text-center p-2 border border-emerald-200">Delivery</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-emerald-50">
            <td class="p-2 border border-gray-200 font-medium">CreativeSoft Solutions ✓</td>
            <td class="p-2 border border-gray-200 text-right">$480.00</td>
            <td class="p-2 border border-gray-200 text-right font-bold">$7,200.00</td>
            <td class="p-2 border border-gray-200 text-center">2 days</td>
          </tr>
          <tr>
            <td class="p-2 border border-gray-200">TechPro Supplies</td>
            <td class="p-2 border border-gray-200 text-right">$540.00</td>
            <td class="p-2 border border-gray-200 text-right">$8,100.00</td>
            <td class="p-2 border border-gray-200 text-center">5 days</td>
          </tr>
          <tr>
            <td class="p-2 border border-gray-200">Digital Media Hub</td>
            <td class="p-2 border border-gray-200 text-right">$530.00</td>
            <td class="p-2 border border-gray-200 text-right">$7,950.00</td>
            <td class="p-2 border border-gray-200 text-center">3 days</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">4. RECOMMENDED VENDOR</h2>
      <div class="bg-white border-2 border-emerald-500 rounded p-3">
        <div class="flex justify-between items-start">
          <div>
            <p class="font-bold text-emerald-900">CreativeSoft Solutions</p>
            <p class="text-sm text-gray-600 mt-1">Authorized Adobe Reseller</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-emerald-700">SGD $7,200.00</p>
            <p class="text-xs text-gray-500">Best Value for Money</p>
          </div>
        </div>
      </div>
      <div class="mt-3 text-sm">
        <p class="font-medium mb-2">Selection Criteria:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li>Lowest quoted price (12.5% below budget)</li>
          <li>Fastest delivery time (2 business days)</li>
          <li>Comprehensive 24/7 support included</li>
          <li>Authorized Adobe partner with proven track record</li>
        </ul>
      </div>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">5. BUDGET ALLOCATION</h2>
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span>Estimated Budget:</span>
          <span class="font-medium">SGD $8,000.00</span>
        </div>
        <div class="flex justify-between">
          <span>Actual Cost:</span>
          <span class="font-medium">SGD $7,200.00</span>
        </div>
        <div class="flex justify-between pt-2 border-t border-gray-300">
          <span class="font-bold">Budget Savings:</span>
          <span class="font-bold text-emerald-700">SGD $800.00 (10%)</span>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-300">
          <span class="font-medium">Cost Center:</span>
          <span class="ml-2">MAR-CC-2025-Q4</span>
        </div>
        <div>
          <span class="font-medium">GL Code:</span>
          <span class="ml-2">5210-SW-LIC</span>
        </div>
      </div>
    </div>
    
    <div class="bg-emerald-50 border-2 border-emerald-500 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-emerald-900 mb-3">6. APPROVAL STATUS</h2>
      <div class="space-y-3">
        <div class="flex items-center justify-between p-2 bg-white rounded border border-emerald-200">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span class="text-white font-bold">✓</span>
            </div>
            <div>
              <p class="font-medium text-sm">Requestor</p>
              <p class="text-xs text-gray-600">John Doe - Product Manager</p>
            </div>
          </div>
          <span class="text-xs text-emerald-700 font-medium">Submitted</span>
        </div>
        
        <div class="flex items-center justify-between p-2 bg-white rounded border border-gray-300">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
              <span class="text-white font-bold">⏳</span>
            </div>
            <div>
              <p class="font-medium text-sm">Department Head</p>
              <p class="text-xs text-gray-600">Pending Review</p>
            </div>
          </div>
          <span class="text-xs text-amber-700 font-medium">Pending</span>
        </div>
        
        <div class="flex items-center justify-between p-2 bg-white rounded border border-gray-300">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span class="text-white font-bold">○</span>
            </div>
            <div>
              <p class="font-medium text-sm">Finance Approver</p>
              <p class="text-xs text-gray-600">Awaiting Department Head</p>
            </div>
          </div>
          <span class="text-xs text-gray-500 font-medium">Awaiting</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mt-6 pt-6 border-t-2 border-gray-300">
    <p class="text-xs text-gray-500">
      This document was generated by AI Assistant Desk on 25 November 2025. 
      All information has been compiled from the RFQ process and vendor quotations.
    </p>
  </div>
</div>`},{type:"text",content:`Your Approval of Requirement (AOR) has been successfully generated! The document has been submitted to your Department Head for review. You'll receive a notification once it's approved. The procurement process typically takes 3-5 business days for final approval.

Key highlights:
• Total cost: SGD $7,200 (10% under budget)
• Vendor: CreativeSoft Solutions
• Expected delivery: 2 business days after approval
• Current status: Pending Department Head review`}]}]},pR={id:"marketing-software-aor",title:"Marketing Software AOR Demo",description:"AI-assisted AOR drafting for marketing automation software procurement",colorScheme:"blue",messages:[{role:"user",content:{text:`I need help drafting an AOR (Approval of Requirement) to procure marketing software for my 15-person team. Our budget is $30,000-$35,000. We need software to create marketing materials for campaigns.

I'm considering these 5 options:
1. HubSpot Marketing Hub
2. Adobe Creative Cloud for Teams
3. Canva for Teams
4. Monday.com Marketing
5. Semrush

Please compare these options based on features, pricing, team collaboration capabilities, and suitability for our needs. Then shortlist the top 3 options and help me draft a comprehensive AOR.`,autoSend:!0}},{role:"bot",content:[{type:"text",content:"Perfect! I'll help you compare all 5 options and shortlist the top 3 for your AOR. Let me do comprehensive research on each option - I'll analyze pricing for 15 users, features, team collaboration capabilities, and how well they fit your marketing materials creation needs. This will take a few minutes."},{type:"thinking",thoughts:["Searching vendor databases for current pricing...","Analyzing HubSpot Marketing Hub for 15 users...","Researching Adobe Creative Cloud Teams pricing...","Evaluating Canva for Teams capabilities...","Assessing Monday.com Marketing features...","Analyzing Semrush pricing and marketing tools...","Comparing feature sets across all 5 vendors...","Evaluating team collaboration capabilities...","Calculating total cost of ownership...","Reviewing government/enterprise pricing models...","Analyzing suitability for marketing materials creation..."],timingMs:1e3},{type:"assistantSwitch",message:"Deep Research Assistant"},{type:"text",content:"I've completed the research on all 5 options. I found some interesting insights - the options vary significantly in their focus and pricing. Let me show you the comprehensive comparison:"},{type:"artifact",title:"Vendor Comparison Summary",fileType:"document",description:"Marketing Automation Software Comparison",interactive:!1,content:`<div class="p-6 bg-white">
  <h1 class="text-2xl font-bold mb-4 text-blue-900">Comprehensive Vendor Comparison</h1>
  <p class="text-gray-600 mb-6">All 5 Options Analyzed for 15 Users</p>
  
  <div class="overflow-x-auto mb-6">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="bg-blue-100">
          <th class="text-left p-3 border border-blue-200 font-semibold">Criteria</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">HubSpot</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">Adobe Creative Cloud</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">Canva for Teams</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">Monday.com</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">Semrush</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Annual Cost (15 users)</td>
          <td class="p-3 border border-gray-200 text-center">~$55,000</td>
          <td class="p-3 border border-gray-200 text-center">~$45,000</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50 font-semibold">~$32,000</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">~$28,000</td>
          <td class="p-3 border border-gray-200 text-center">~$20,000</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 border border-gray-200 font-medium">Budget Fit ($30-35K)</td>
          <td class="p-3 border border-gray-200 text-center">No - 65% over</td>
          <td class="p-3 border border-gray-200 text-center">No - 35% over</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Yes - Within</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Yes - Within</td>
          <td class="p-3 border border-gray-200 text-center">Yes - Under</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Marketing Materials Creation</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center">Basic</td>
          <td class="p-3 border border-gray-200 text-center">None</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 border border-gray-200 font-medium">Email Marketing</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">Basic</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">None</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Campaign Management</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 border border-gray-200 font-medium">Team Collaboration</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center">Basic</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Analytics & Reporting</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Social Media Management</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Full suite</td>
          <td class="p-3 border border-gray-200 text-center">None</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Good</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Primary Strength</td>
          <td class="p-3 border border-gray-200 text-center text-xs">All-in-one marketing</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Professional design</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Easy design + marketing</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Project workflows</td>
          <td class="p-3 border border-gray-200 text-center text-xs">SEO & analytics</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 border border-gray-200 font-medium">Primary Weakness</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Very expensive</td>
          <td class="p-3 border border-gray-200 text-center text-xs">No campaign tools</td>
          <td class="p-3 border border-gray-200 text-center text-xs">-</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Weak design tools</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Not for materials creation</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <p class="text-sm text-gray-700">This comparison shows all 5 vendors you requested. Would you like me to shortlist the top 3 options for your AOR based on your budget and requirements?</p>
  </div>
</div>`}]},{role:"user",content:{text:"Can you shortlist the best 3 for me?"}},{role:"bot",content:[{type:"text",content:"Absolutely! Based on your budget ($30-35K) and need to create marketing materials for campaigns, let me analyze and shortlist the top 3 options."},{type:"thinking",thoughts:["Eliminating HubSpot - 65% over budget at $55K","Eliminating Semrush - not suitable for materials creation","Evaluating Canva for Teams - excellent design + within budget","Evaluating Monday.com - strong workflows + under budget","Evaluating Adobe CC - premium design but over budget","Ranking based on requirements fit and budget alignment"],timingMs:800},{type:"artifact",title:"Top 3 Shortlist for AOR",fileType:"document",description:"Recommended vendors for procurement",interactive:!1,content:`<div class="p-6 bg-white">
  <h1 class="text-2xl font-bold mb-4 text-blue-900">Top 3 Shortlist for AOR</h1>
  <p class="text-gray-600 mb-6">Based on Budget ($30-35K) & Requirements (Marketing Materials Creation)</p>
  
  <div class="mb-6 p-4 bg-yellow-50 border-2 border-yellow-500 rounded-lg">
    <h3 class="font-bold text-yellow-900 mb-3">SHORTLISTED: TOP 3 OPTIONS</h3>
    <p class="text-sm text-gray-700 mb-4">Based on your needs (marketing materials creation + $30-35K budget), here are my top 3 recommendations:</p>
    
    <div class="space-y-3">
      <div class="p-3 bg-white rounded border-2 border-green-500">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
          <div class="flex-1">
            <h4 class="font-bold text-green-900 mb-1">Canva for Teams - $32,000/year</h4>
            <p class="text-sm text-gray-700 mb-2"><strong>Why it's #1:</strong> Perfect balance of excellent design tools + marketing features (email, social, campaigns) + team collaboration. Fits budget perfectly.</p>
            <div class="text-xs text-gray-600">
              <strong>Best for:</strong> Creating marketing materials (graphics, videos, presentations) + running campaigns
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-3 bg-white rounded border-2 border-blue-500">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
          <div class="flex-1">
            <h4 class="font-bold text-blue-900 mb-1">Monday.com Marketing - $28,000/year</h4>
            <p class="text-sm text-gray-700 mb-2"><strong>Why it's #2:</strong> Strong campaign management, email marketing, and team collaboration. Under budget. But weaker on design/content creation.</p>
            <div class="text-xs text-gray-600">
              <strong>Best for:</strong> Campaign workflows + email marketing + team coordination
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-3 bg-white rounded border-2 border-purple-500">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
          <div class="flex-1">
            <h4 class="font-bold text-purple-900 mb-1">Adobe Creative Cloud for Teams - $45,000/year</h4>
            <p class="text-sm text-gray-700 mb-2"><strong>Why it's #3:</strong> Industry-leading professional design tools, excellent collaboration. BUT 35% over budget and lacks campaign management features.</p>
            <div class="text-xs text-gray-600">
              <strong>Best for:</strong> Professional-grade design work (if budget can be increased)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
    <h3 class="font-bold text-red-900 mb-2">Not Shortlisted:</h3>
    <ul class="text-sm text-gray-700 space-y-1">
      <li><strong>HubSpot:</strong> Excellent marketing platform but 65% over budget ($55K vs $30-35K) + weak on design/content creation</li>
      <li><strong>Semrush:</strong> Great for SEO/analytics but NOT suitable for creating marketing materials - it's a research tool, not a creation platform</li>
    </ul>
  </div>
  
  <div class="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg">
    <h3 class="font-bold text-green-900 mb-2">My Recommendation: Canva for Teams</h3>
    <p class="text-sm text-gray-700">For your specific need to "create marketing materials for campaigns" with a 15-person team, Canva for Teams offers the best overall package - excellent design tools + solid campaign management + perfect budget fit.</p>
  </div>
</div>`},{type:"text",content:`These are your top 3 options that will be presented in the AOR. Based on your specific needs:

**#1 Canva for Teams** - Best overall value (materials creation + campaigns + budget fit)
**#2 Monday.com Marketing** - Strong alternative (campaign workflows + under budget, but weaker design)
**#3 Adobe Creative Cloud** - Premium option (professional design, but over budget + no campaign tools)

Which option would you like to proceed with for the AOR?`}]},{role:"user",content:{text:"Let's go with Canva for Teams."}},{role:"bot",content:[{type:"text",content:`Great choice! Now I need a bit more info to draft your AOR:

- What's the campaign/project name?
- What's your cost center code?
- When do you need the software to start?
- What's the main reason you need this software?`}]},{role:"user",content:{text:`Project is called "HealthierSG Awareness Campaign 2025". Cost center is GVT_CC0845. Need it by April 1st. We need it because right now we're using like 4 different tools for email, social media, analytics etc and it's a mess. Really inefficient.`}},{role:"bot",content:[{type:"text",content:"Perfect, that's excellent justification. One more thing - who are the 15 users? Just need roles, not names."}]},{role:"user",content:{text:"3 marketing managers, 6 marketing executives, 4 content creators, 2 social media people."}},{role:"bot",content:[{type:"text",content:"Excellent! I have everything I need. Let me draft your AOR now - this will take about a minute."},{type:"thinking",thoughts:["Loading current AOR template (GovTech 2024)","Structuring document sections","Populating Aim and Background","Generating justification with efficiency rationale","Adding technical specifications","Creating cost breakdown","Drafting vendor selection justification","Including team composition table","Adding compliance declarations","Formatting to GovTech standards"],timingMs:1e3},{type:"text",content:"Your AOR draft is ready! Here's what I've created:"},{type:"artifact",title:"Approval of Requirement (AOR) - Draft",fileType:"document",description:"Marketing Software Procurement AOR",interactive:!1,content:`<div class="p-8 bg-white max-w-5xl mx-auto">
  <div class="border-b-2 border-blue-600 pb-4 mb-6">
    <h1 class="text-3xl font-bold text-blue-900">APPROVAL OF REQUIREMENT (AOR)</h1>
    <p class="text-sm text-gray-600 mt-2">Marketing Automation Software Procurement</p>
  </div>
  
  <div class="mb-6 p-4 bg-blue-50 rounded-lg">
    <h2 class="text-sm font-bold text-blue-900 mb-2">EMAIL TITLE</h2>
    <p class="text-sm">[For Approval] AOR to Procure Marketing Automation Software Licenses for HealthierSG Awareness Campaign 2025</p>
  </div>
  
  <div class="space-y-6">
    <!-- AIM -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">AIM</h2>
      <p class="text-sm text-gray-700">
        This submission seeks approval to procure 15 annual licenses for Canva for Teams marketing automation software at an estimated cost of <strong>SGD $32,000</strong> (excluding GST) for the period from 1 April 2025 to 31 March 2026.
      </p>
    </div>
    
    <!-- BACKGROUND -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">BACKGROUND</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>
          <strong>2.1</strong> The Public Communications & Outreach department is launching the HealthierSG Awareness Campaign 2025, a major public health initiative requiring coordinated marketing efforts across multiple channels.
        </p>
        <p>
          <strong>2.2</strong> Currently, the team operates with fragmented tools across platforms:
        </p>
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li>Email marketing: Basic email client</li>
          <li>Social media: Manual posting without scheduling</li>
          <li>Analytics: Separate tools per channel</li>
          <li>Content creation: Third-party tools with no integration</li>
        </ul>
        <p>
          This fragmentation results in inefficient workflows, duplicated efforts, inconsistent messaging, and inability to track campaign performance holistically.
        </p>
      </div>
    </div>
    
    <!-- JUSTIFICATION -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">JUSTIFICATION FOR PROCUREMENT</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
          <ul class="list-disc list-inside ml-2 space-y-1 text-sm text-gray-700">
            <li>Consolidates 4-5 separate tools into unified platform</li>
            <li>Reduces manual tasks through automation</li>
            <li>Enables management of multiple campaigns from single interface</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-2">Enhanced Campaign Effectiveness</h3>
          <ul class="list-disc list-inside ml-2 space-y-1 text-sm text-gray-700">
            <li>Advanced email personalization and segmentation</li>
            <li>A/B testing capabilities to optimize performance</li>
            <li>Unified analytics for comprehensive insights</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-2">Cost-Effectiveness</h3>
          <ul class="list-disc list-inside ml-2 space-y-1 text-sm text-gray-700">
            <li>Replaces multiple subscriptions with single solution</li>
            <li>Estimated savings: ~$8,000/year from tool consolidation</li>
            <li>Improves ROI through better targeting</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- TECHNICAL SPECIFICATIONS -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">TECHNICAL SPECIFICATIONS</h2>
      <div class="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <span class="font-semibold">Software:</span> Canva for Teams
          </div>
          <div>
            <span class="font-semibold">License Type:</span> Annual Subscription (SaaS)
          </div>
          <div>
            <span class="font-semibold">Number of Licenses:</span> 15 users
          </div>
          <div>
            <span class="font-semibold">Deployment:</span> Cloud-based
          </div>
        </div>
        
        <div class="mt-4">
          <p class="font-semibold mb-2">Key Features:</p>
          <ul class="list-disc list-inside ml-2 space-y-1 text-gray-700">
            <li>Email Marketing: Unlimited sends, automation, personalization</li>
            <li>Landing Pages: Unlimited with drag-and-drop builder</li>
            <li>Social Media: Scheduling for major platforms</li>
            <li>CRM: Built-in contact management</li>
            <li>Analytics: Custom dashboards and performance metrics</li>
            <li>Security: SOC 2 Type II certified, GDPR compliant</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- FUNDING SOURCE -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">FUNDING SOURCE AND COST</h2>
      <div class="space-y-3 text-sm">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-blue-100">
              <th class="text-left p-2 border border-blue-200">Cost Center</th>
              <th class="text-left p-2 border border-blue-200">FY/Period</th>
              <th class="text-right p-2 border border-blue-200">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border border-gray-200">GVT_CC0845</td>
              <td class="p-2 border border-gray-200">FY2025 (Apr 2025 - Mar 2026)</td>
              <td class="p-2 border border-gray-200 text-right font-semibold">SGD $32,000</td>
            </tr>
          </tbody>
        </table>
        
        <div class="bg-blue-50 p-3 rounded">
          <p class="font-semibold mb-2">Cost Breakdown:</p>
          <ul class="space-y-1">
            <li>Canva for Teams (15 licenses): SGD $32,000/year</li>
            <li>GST (9%): SGD $2,880</li>
            <li class="font-bold pt-2 border-t border-blue-200">Total (including GST): SGD $34,880</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- VENDOR SELECTION -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">VENDOR SELECTION</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>
          <strong>6.1</strong> The project team conducted comprehensive market analysis and shortlisted three vendors for evaluation:
        </p>
        <ul class="list-disc list-inside ml-4">
          <li>Canva for Teams (~SGD $32,000/year)</li>
          <li>Monday.com Marketing (~SGD $28,000/year)</li>
          <li>Adobe Creative Cloud for Teams (~SGD $45,000/year)</li>
        </ul>
        
        <p>
          <strong>6.2</strong> Canva for Teams was selected based on:
        </p>
        
        <div class="ml-4 space-y-2">
          <div>
            <p class="font-semibold">Best Fit for Requirements</p>
            <p class="ml-4">Excellent design tools for creating marketing materials + solid campaign management features</p>
          </div>
          <div>
            <p class="font-semibold">Price-to-Value Ratio</p>
            <p class="ml-4">Comprehensive features at optimal price point within budget</p>
          </div>
          <div>
            <p class="font-semibold">Team Collaboration</p>
            <p class="ml-4">Superior collaboration capabilities for 15-person marketing team</p>
          </div>
          <div>
            <p class="font-semibold">Budget Alignment</p>
            <p class="ml-4">Fits within allocated budget of $30,000-35,000</p>
          </div>
        </div>
        
        <p class="mt-3">
          <strong>6.3</strong> Comparison of shortlisted vendors:
        </p>
        
        <div class="ml-4 mt-2">
          <table class="w-full text-xs border-collapse">
            <thead>
              <tr class="bg-blue-50">
                <th class="text-left p-2 border border-gray-300">Vendor</th>
                <th class="text-center p-2 border border-gray-300">Cost</th>
                <th class="text-center p-2 border border-gray-300">Budget Fit</th>
                <th class="text-left p-2 border border-gray-300">Key Strengths</th>
                <th class="text-left p-2 border border-gray-300">Considerations</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-green-50">
                <td class="p-2 border border-gray-300 font-semibold">Canva for Teams</td>
                <td class="p-2 border border-gray-300 text-center">$32,000</td>
                <td class="p-2 border border-gray-300 text-center">Yes - Perfect</td>
                <td class="p-2 border border-gray-300">Excellent design + campaign tools, easy adoption</td>
                <td class="p-2 border border-gray-300">Analytics less advanced</td>
              </tr>
              <tr>
                <td class="p-2 border border-gray-300 font-semibold">Monday.com</td>
                <td class="p-2 border border-gray-300 text-center">$28,000</td>
                <td class="p-2 border border-gray-300 text-center">Yes - Under</td>
                <td class="p-2 border border-gray-300">Strong workflows, advanced analytics</td>
                <td class="p-2 border border-gray-300">Weak design capabilities</td>
              </tr>
              <tr>
                <td class="p-2 border border-gray-300 font-semibold">Adobe CC</td>
                <td class="p-2 border border-gray-300 text-center">$45,000</td>
                <td class="p-2 border border-gray-300 text-center">No - Over</td>
                <td class="p-2 border border-gray-300">Professional-grade design tools</td>
                <td class="p-2 border border-gray-300">35% over budget, no campaign tools</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <!-- TEAM COMPOSITION -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">TEAM COMPOSITION</h2>
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-blue-100">
            <th class="text-left p-2 border border-blue-200">Role</th>
            <th class="text-center p-2 border border-blue-200">Number</th>
            <th class="text-left p-2 border border-blue-200">Primary Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border border-gray-200">Marketing Managers</td>
            <td class="p-2 border border-gray-200 text-center">3</td>
            <td class="p-2 border border-gray-200">Campaign strategy, oversight, reporting</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="p-2 border border-gray-200">Marketing Executives</td>
            <td class="p-2 border border-gray-200 text-center">6</td>
            <td class="p-2 border border-gray-200">Campaign execution, email creation</td>
          </tr>
          <tr>
            <td class="p-2 border border-gray-200">Content Creators</td>
            <td class="p-2 border border-gray-200 text-center">4</td>
            <td class="p-2 border border-gray-200">Digital collateral design, landing pages</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="p-2 border border-gray-200">Social Media Coordinators</td>
            <td class="p-2 border border-gray-200 text-center">2</td>
            <td class="p-2 border border-gray-200">Social scheduling, engagement, analytics</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- DECLARATION -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">DECLARATION OF CONFLICT OF INTEREST</h2>
      <div class="space-y-2 text-sm text-gray-700">
        <p>
          <strong>8.1</strong> This project team has conducted due diligence and declares no conflict of interest.
        </p>
        <p>
          <strong>8.2</strong> There is no prior relationship between the project team and Canva or its resellers.
        </p>
      </div>
    </div>
    
    <!-- APPROVAL -->
    <div class="bg-blue-50 border-2 border-blue-500 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-blue-900 mb-3">APPROVAL</h2>
      <p class="text-sm text-gray-700">For approval for para 1, please.</p>
    </div>
  </div>
  
  <div class="mt-8 pt-4 border-t border-gray-300 text-xs text-gray-500">
    <p>Document generated by AI Assistant on 25 November 2025</p>
  </div>
</div>`}]},{role:"user",content:{text:"Looks good"}},{role:"bot",content:[{type:"text",content:`Your AOR is ready for submission! I can help you with:

1. **Send via email** - I can email the AOR directly to your approving officer with all annexes
2. **Download package** - Get all documents to review and send yourself

Which would you prefer?`}]},{role:"user",content:{text:"Can you send it via email for me?"}},{role:"bot",content:[{type:"text",content:`Absolutely! Who should I send this to? I'll need:
- Your approving officer's name and email
- Your supervisor's email (if you'd like to CC them)`}]},{role:"user",content:{text:"Send it to Sarah Chen, she's my Assistant Director. Her email is sarah.chen@tech.gov.sg. CC my immediate supervisor Mike Lim at mike.lim@tech.gov.sg."}},{role:"bot",content:[{type:"text",content:"Perfect! Let me draft the submission email for your approval before sending."},{type:"thinking",thoughts:["Structuring professional email format","Summarizing key AOR points","Attaching all required documents","Setting up CC recipients"],timingMs:1e3},{type:"artifact",title:"Email Draft for Approval",fileType:"document",description:"Submission email to approving officer",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
    <h2 class="text-sm font-bold text-blue-900 mb-3">EMAIL DRAFT FOR YOUR REVIEW</h2>
    <div class="space-y-2 text-sm">
      <div><strong>To:</strong> Sarah Chen (sarah.chen@tech.gov.sg)</div>
      <div><strong>CC:</strong> Mike Lim (mike.lim@tech.gov.sg)</div>
      <div><strong>Subject:</strong> [For Approval] AOR to Procure Marketing Automation Software for HealthierSG Campaign 2025</div>
    </div>
  </div>
  
  <div class="space-y-4 text-sm text-gray-800">
    <p>Dear Sarah,</p>
    
    <p>I am writing to seek your approval for the procurement of marketing automation software licenses to support the HealthierSG Awareness Campaign 2025.</p>
    
    <div class="my-4 p-4 bg-gray-50 rounded-lg">
      <h3 class="font-bold text-gray-900 mb-3">Summary:</h3>
      <ul class="space-y-2">
        <li><strong>What:</strong> 15 annual licenses for Canva for Teams marketing automation platform</li>
        <li><strong>Cost:</strong> SGD $32,000 (excluding GST) | SGD $34,880 (including GST)</li>
        <li><strong>Duration:</strong> 1 April 2025 to 31 March 2026</li>
        <li><strong>Funding:</strong> Cost Center GVT_CC0845 (FY2025 budget)</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h3 class="font-bold text-gray-900 mb-2">Key Justifications:</h3>
      <ul class="list-disc list-inside space-y-1 ml-2">
        <li><strong>Operational Efficiency:</strong> Consolidates 4-5 fragmented tools into one unified platform, reducing campaign setup time by 40%</li>
        <li><strong>Enhanced Campaign Effectiveness:</strong> Advanced automation, personalization, and analytics capabilities to improve citizen engagement</li>
        <li><strong>Cost Savings:</strong> Estimated SGD $8,000/year savings from tool consolidation</li>
        <li><strong>Budget Alignment:</strong> Selected vendor (Canva for Teams) offers best value at 42% lower cost than enterprise alternatives while meeting all requirements</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h3 class="font-bold text-gray-900 mb-2">Vendor Selection:</h3>
      <p>After comprehensive market analysis of 3 shortlisted vendors (Canva for Teams, Monday.com Marketing, Adobe Creative Cloud), Canva for Teams was selected based on optimal price-to-value ratio, complete feature set matching our requirements, scalability for future needs, and budget alignment.</p>
    </div>
    
    <p>The detailed AOR with vendor comparison, technical specifications, and implementation plan is attached for your review.</p>
    
    <p class="font-semibold">For your approval, please.</p>
    
    <p>Should you have any questions or require additional information, I am happy to provide clarification.</p>
    
    <p>Thank you for your consideration.</p>
    
    <div class="mt-4 pt-4 border-t border-gray-300">
      <p>Best regards,</p>
      <p class="font-semibold">John Doe</p>
      <p>Product Manager</p>
      <p>Public Communications & Outreach Department</p>
      <p>Government Technology Agency</p>
      <p>jayden.tan@tech.gov.sg | +65 6211 2345</p>
    </div>
    
    <div class="mt-6 p-3 bg-gray-100 rounded">
      <h3 class="font-bold text-gray-900 mb-2">Attachments:</h3>
      <ul class="text-xs space-y-1">
        <li>AOR_Marketing_Software_HealthierSG_2025.docx</li>
        <li>Annex_A_Vendor_Comparison.pdf</li>
        <li>Annex_B_Technical_Specifications.pdf</li>
        <li>Annex_C_Team_Allocation.pdf</li>
        <li>Annex_D_Implementation_Timeline.pdf</li>
      </ul>
    </div>
  </div>
</div>`},{type:"text",content:"Does this email look good? I can make any changes before sending."}]},{role:"user",content:{text:"Yes looks good, please send it."}},{role:"bot",content:[{type:"text",content:"Sending now..."},{type:"thinking",thoughts:["Attaching all 5 documents (2.4 MB total)","Verifying recipients: sarah.chen@tech.gov.sg, mike.lim@tech.gov.sg","Sending email..."],timingMs:1e3},{type:"text",content:`**Email sent successfully!**

Your AOR has been sent to:
- **Sarah Chen** (sarah.chen@tech.gov.sg) - Approving Officer
- **Mike Lim** (mike.lim@tech.gov.sg) - CC'd

All 5 attachments included (2.4 MB total)

I'll monitor the status and notify you when there's a response. You can also download a copy of all documents for your records if you'd like.`},{type:"artifact",title:"Session Summary",fileType:"document",description:"AOR Drafting Summary",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-blue-900">SESSION SUMMARY</h1>
  
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div class="text-3xl font-bold text-blue-700 mb-1">~6 hours</div>
      <div class="text-sm text-gray-600">Time Saved vs manual drafting</div>
    </div>
    
    <div class="p-4 bg-green-50 rounded-lg border border-green-200">
      <div class="text-3xl font-bold text-green-700 mb-1">6 docs</div>
      <div class="text-sm text-gray-600">Documents Generated</div>
    </div>
    
    <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <div class="text-3xl font-bold text-purple-700 mb-1">5 vendors</div>
      <div class="text-sm text-gray-600">Analyzed & Shortlisted</div>
    </div>
    
    <div class="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
      <div class="text-3xl font-bold text-emerald-700 mb-1">100%</div>
      <div class="text-sm text-gray-600">Compliance Status</div>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="p-4 bg-gray-50 rounded-lg">
      <h2 class="font-bold text-gray-900 mb-3">Status: Submitted to Sarah Chen for approval</h2>
      <div class="space-y-2 text-sm text-gray-700">
        <div class="flex items-center gap-2">
          <span class="text-green-600 font-bold">Done</span>
          <span>Market research completed (HubSpot, Mailchimp, Canva)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-green-600 font-bold">Done</span>
          <span>AOR document drafted with full compliance</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-green-600 font-bold">Done</span>
          <span>All annexes generated (vendor comparison, technical specs, team allocation, timeline)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-green-600 font-bold">Done</span>
          <span>Email sent to approving officer with all attachments</span>
        </div>
      </div>
    </div>
    
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h3 class="font-bold text-blue-900 mb-2">Next Steps:</h3>
      <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
        <li>Await approval from Sarah Chen (typically 3-5 business days)</li>
        <li>Receive notification when AOR is approved</li>
        <li>Proceed with procurement of Canva for Teams licenses</li>
        <li>Expected software delivery: 2 business days after approval</li>
      </ul>
    </div>
  </div>
</div>`}]},{role:"user",content:{text:"This was so much easier than I expected. Thanks!"}},{role:"bot",content:[{type:"text",content:"You're welcome! Good luck with the approval - I'll be here if you need help with future procurements."}]}]},fR={id:"pq-response-mnd-v3",title:"PQ Response - MND Housing",description:"AI-assisted PQ response research and drafting for policy officer",colorScheme:"purple",messages:[{role:"bot",content:[{type:"text",content:`Good morning, Sarah! 👋

Welcome! I'm your Parliamentary Question Assistant, here to help you with your PQ response drafting.

What would you like help with today?`}]},{role:"user",content:{text:`Hi, I need to respond to this PQ:

"To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers."`}},{role:"bot",content:[{type:"thinking",thought:"Analyzing Parliamentary Question and preparing research strategy...",reasoning:["Understanding the two-part PQ on BTO waiting times...","Identifying key research requirements: statistics and policy measures...","Preparing to search Hansard database for past similar PQs...","Planning comprehensive research across multiple sources...","Setting up data retrieval from internal MND knowledge base..."],timingMs:3500},{type:"text",content:`Got it. This is a two-part question on BTO waiting times and policy measures. Let me start by doing comprehensive research across multiple sources to help you draft a strong response. This will take a few minutes.

I'll search:
1. Past similar PQs from Hansard
2. Your department's internal knowledge base
3. Recent news coverage and ministerial statements on housing policy
4. Relevant statistics on BTO waiting times

Let's begin:`},{type:"assistantSwitch",message:"Deep Research Assistant"},{type:"thinking",thought:"Conducting comprehensive research across multiple sources...",reasoning:["Searching Hansard database for past PQs on BTO waiting times...","Analyzing previous ministerial responses and language on housing policies...","Querying internal MND knowledge base for current policy positions...","Retrieving latest BTO statistics organized by town and flat type...","Scanning recent news coverage for housing policy announcements...","Cross-referencing Minister's recent public statements for consistency...","Identifying implemented and planned policy measures...","Compiling comprehensive data on waiting time trends and patterns..."],timingMs:3500},{type:"artifact",title:"Research Summary",fileType:"document",description:"Comprehensive research findings on BTO waiting times",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-purple-900">📋 RESEARCH SUMMARY</h1>
  
  <div class="mb-6">
    <h2 class="text-xl font-bold mb-3 text-gray-900">Past Similar PQs (from Hansard)</h2>
    <p class="text-sm text-gray-600 mb-3">Found 3 relevant PQs from the past 18 months:</p>
    
    <div class="space-y-3">
      <div class="p-3 bg-blue-50 rounded border border-blue-200">
        <div class="font-semibold text-blue-900">PQ 2284 (Aug 2024)</div>
        <div class="text-sm text-gray-700">Similar question on BTO delivery timelines</div>
        <ul class="text-sm text-gray-600 mt-2 ml-4 list-disc">
          <li>Response emphasized government's efforts to accelerate construction</li>
          <li>Mentioned contractor capacity challenges post-COVID</li>
        </ul>
      </div>
      
      <div class="p-3 bg-blue-50 rounded border border-blue-200">
        <div class="font-semibold text-blue-900">PQ 1856 (Mar 2024)</div>
        <div class="text-sm text-gray-700">Question on housing supply for first-timers</div>
        <ul class="text-sm text-gray-600 mt-2 ml-4 list-disc">
          <li>Response highlighted increased BTO supply and Prime Location Housing</li>
          <li>Referenced "3-4 year" typical waiting time</li>
        </ul>
      </div>
      
      <div class="p-3 bg-blue-50 rounded border border-blue-200">
        <div class="font-semibold text-blue-900">PQ 3102 (Nov 2024)</div>
        <div class="text-sm text-gray-700">Question on construction delays</div>
        <ul class="text-sm text-gray-600 mt-2 ml-4 list-disc">
          <li>Response acknowledged supply chain disruptions</li>
          <li>Mentioned partnerships with builders</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="text-xl font-bold mb-3 text-gray-900">Current Statistics (Internal Database)</h2>
    <div class="p-4 bg-purple-50 rounded border border-purple-200">
      <div class="font-semibold mb-2">Average BTO Waiting Times (Past 12 months):</div>
      <ul class="space-y-1 text-sm">
        <li>• Mature estates (e.g., Queenstown, Kallang): <span class="font-bold">4.2 years</span></li>
        <li>• Non-mature estates (e.g., Tengah, Punggol): <span class="font-bold">3.8 years</span></li>
        <li>• Overall average: <span class="font-bold text-purple-700">3.9 years</span></li>
      </ul>
      <div class="mt-3 pt-3 border-t border-purple-300">
        <span class="font-semibold">Trend:</span> <span class="text-sm">Slight increase from 3.6 years (2023) due to construction delays</span>
      </div>
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="text-xl font-bold mb-3 text-gray-900">Recent Policy Announcements</h2>
    <ol class="space-y-2 text-sm">
      <li class="flex gap-2">
        <span class="font-bold">1.</span>
        <div>
          <span class="font-semibold">National Day Rally 2024</span> - PM mentioned accelerating housing supply
        </div>
      </li>
      <li class="flex gap-2">
        <span class="font-bold">2.</span>
        <div>
          <span class="font-semibold">MND Press Release (Oct 2024)</span> - Announced 100,000 flats over next 5 years
        </div>
      </li>
      <li class="flex gap-2">
        <span class="font-bold">3.</span>
        <div>
          <span class="font-semibold">Minister's Facebook Post (Nov 2024)</span> - Emphasized "commitment to ensuring adequate supply"
        </div>
      </li>
    </ol>
  </div>
  
  <div class="p-4 bg-green-50 rounded border border-green-200">
    <h2 class="text-lg font-bold mb-2 text-green-900">Approved Policy Stance</h2>
    <p class="text-sm text-gray-600 mb-2">From internal knowledge base:</p>
    <ul class="space-y-1 text-sm text-gray-700">
      <li>✓ Acknowledge waiting time concerns with empathy</li>
      <li>✓ Emphasize unprecedented supply ramp-up</li>
      <li>✓ Highlight measures: increased contractor capacity, construction productivity improvements</li>
      <li>✓ Note: Avoid specific future timeline commitments</li>
    </ul>
  </div>
</div>`},{type:"text",content:`Research completed! I've gathered comprehensive information from Hansard, our internal database, and recent policy announcements. Please review the research summary above.

Are you satisfied with the research findings? Would you like me to proceed with creating a structured outline for the PQ response?`}]},{role:"user",content:{text:"Okay. Please proceed with the outline."}},{role:"bot",content:[{type:"assistantSwitch",message:"Parliamentary Question Assistant"},{type:"text",content:"Great! Let me create a structured outline showing how I'll draft the response, with references to the sources I'll be using."},{type:"thinking",thought:"Creating structured response outline...",reasoning:["Analyzing research findings to create response framework...","Mapping statistical data to appropriate response sections...","Identifying and documenting source references for each point...","Structuring content according to Parliamentary Question format...","Ensuring logical flow between parts (a) and (b)..."],timingMs:3e3},{type:"artifact",title:"Response Outline with Source References",fileType:"document",description:"Structured outline showing how the response will be built",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-purple-900">📝 RESPONSE OUTLINE</h1>
  
  <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
    <h2 class="text-lg font-semibold text-blue-900 mb-2">Structure Overview</h2>
    <p class="text-sm text-gray-700">The response will follow the standard two-part PQ format, addressing each component of the question systematically with verified data.</p>
  </div>
  
  <div class="mb-6">
    <h2 class="text-xl font-bold mb-4 text-purple-900">Part (a): Average Waiting Times</h2>
    
    <div class="space-y-3 ml-4">
      <div class="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
        <div class="flex items-center gap-2 mb-1">
          <div class="font-semibold text-gray-900">1. Empathetic Acknowledgment</div>
        </div>
        <p class="text-sm text-gray-700 mb-2">Acknowledge that the Government understands the concerns about waiting times and the challenges faced by homebuyers</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-purple-600 font-semibold">Source:</span>
          <span class="text-gray-600">Internal Policy Stance - "Acknowledge waiting time concerns with empathy"</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
        <div class="font-semibold text-gray-900 mb-1">2. Overall Average</div>
        <p class="text-sm text-gray-700 mb-2">State the overall average waiting time: <span class="font-bold text-purple-700">3.9 years</span></p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-purple-600 font-semibold">Source:</span>
          <span class="text-gray-600">MND Internal Housing Database (Past 12 months data)</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
        <div class="font-semibold text-gray-900 mb-1">3. Breakdown by Estate Maturity</div>
        <p class="text-sm text-gray-700 mb-2">Provide specific breakdown:</p>
        <ul class="text-sm text-gray-700 ml-4 space-y-1">
          <li>• Mature estates (Queenstown, Kallang): <span class="font-bold">4.2 years</span></li>
          <li>• Non-mature estates (Tengah, Punggol): <span class="font-bold">3.8 years</span></li>
        </ul>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-purple-600 font-semibold">Source:</span>
          <span class="text-gray-600">MND Internal Housing Database (Estate-level statistics)</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
        <div class="font-semibold text-gray-900 mb-1">4. Context for Waiting Times</div>
        <p class="text-sm text-gray-700 mb-2">Acknowledge challenges: supply chain disruptions and labour constraints post-pandemic</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-purple-600 font-semibold">Source:</span>
          <span class="text-gray-600">PQ 2284 (Aug 2024) - Similar language used; PQ 3102 (Nov 2024) - Supply chain disruptions acknowledged</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="text-xl font-bold mb-4 text-purple-900">Part (b): Measures to Reduce Waiting Times</h2>
    
    <div class="space-y-3 ml-4">
      <div class="p-3 bg-gray-50 rounded border-l-4 border-green-500">
        <div class="font-semibold text-gray-900 mb-1">1. Increased Housing Supply</div>
        <p class="text-sm text-gray-700 mb-2">HDB will launch approximately <span class="font-bold">100,000 flats</span> over the next five years</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-green-600 font-semibold">Source:</span>
          <span class="text-gray-600">MND Press Release (Oct 2024); Minister's Facebook Post (Nov 2024); PQ 1856 (Mar 2024) referenced increased BTO supply</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-green-500">
        <div class="font-semibold text-gray-900 mb-1">2. Expanding Construction Capacity</div>
        <p class="text-sm text-gray-700 mb-2">Pre-qualifying more contractors and supporting advanced construction technologies</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-green-600 font-semibold">Source:</span>
          <span class="text-gray-600">PQ 2284 (Aug 2024) - Mentioned contractor capacity challenges; PQ 3102 (Nov 2024) - Partnerships with builders</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-green-500">
        <div class="font-semibold text-gray-900 mb-1">3. Improving Productivity through DfMA</div>
        <p class="text-sm text-gray-700 mb-2">Design for Manufacturing and Assembly enables off-site pre-fabrication to reduce construction time</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-green-600 font-semibold">Source:</span>
          <span class="text-gray-600">PQ 3102 (Nov 2024) - Discussed productivity improvements; Internal Policy Stance - Highlighted as key measure</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-green-500">
        <div class="font-semibold text-gray-900 mb-1">4. Closing Statement</div>
        <p class="text-sm text-gray-700 mb-2">Commitment to delivering quality homes within reasonable timeframes and continued monitoring</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-green-600 font-semibold">Source:</span>
          <span class="text-gray-600">Internal Policy Stance - Approved language; Consistent with past ministerial responses</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-purple-50 rounded-lg border border-purple-300">
    <h3 class="font-bold text-purple-900 mb-2">✅ Quality Assurance</h3>
    <div class="grid grid-cols-2 gap-3 text-sm">
      <div class="flex items-start gap-2">
        <span class="text-purple-600">✓</span>
        <span class="text-gray-700">All statistics verified from internal database</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-purple-600">✓</span>
        <span class="text-gray-700">Consistent with 3 past PQ responses</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-purple-600">✓</span>
        <span class="text-gray-700">Aligned with recent policy announcements</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-purple-600">✓</span>
        <span class="text-gray-700">Follows approved policy stance</span>
      </div>
    </div>
  </div>
  
  <div class="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
    <p class="text-sm text-gray-700"><span class="font-semibold">Note:</span> Every point in this outline is traceable to verified sources, ensuring the response will be accurate, consistent, and defensible.</p>
  </div>
</div>`},{type:"text",content:"Here's the outline showing exactly how I'll structure the response. Each point is backed by specific sources from our research. Does this structure look good to you? Would you like me to proceed with drafting the full response?"}]},{role:"user",content:{text:"It looks good but 4. Prime Location Public Housing (PLH) Model seems to be irrelevant. Remove that point from the outline and let me see how it looks"}},{role:"bot",content:[{type:"text",content:"Good catch! You're right - PLH is more about providing housing options rather than directly reducing waiting times. Let me remove that point and update the outline."},{type:"thinking",thought:"Revising outline based on feedback...",reasoning:["Removing PLH (Prime Location Housing) point from Part (b) as requested...","Renumbering remaining policy measures for clarity...","Reviewing content flow to ensure coherence after removal...","Updating quality assurance checklist to reflect changes..."],timingMs:2500},{type:"artifact",title:"Revised Response Outline (Updated)",fileType:"document",description:"Updated outline with PLH removed",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-purple-900">📝 REVISED RESPONSE OUTLINE</h1>
  
  <div class="mb-4 p-3 bg-green-50 rounded-lg border border-green-300">
    <div class="flex items-start gap-2">
      <span class="text-green-600 text-lg">✓</span>
      <div class="flex-1">
        <p class="text-sm font-semibold text-green-900">Updated based on your feedback</p>
        <p class="text-xs text-gray-600">Removed PLH point from Part (b) as it's not directly related to reducing waiting times</p>
      </div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
    <h2 class="text-lg font-semibold text-blue-900 mb-2">Structure Overview</h2>
    <p class="text-sm text-gray-700">The response will follow the standard two-part PQ format, addressing each component of the question systematically with verified data.</p>
  </div>
  
  <div class="mb-6">
    <h2 class="text-xl font-bold mb-4 text-purple-900">Part (a): Average Waiting Times</h2>
    
    <div class="space-y-3 ml-4">
      <div class="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
        <div class="font-semibold text-gray-900 mb-1">1. Overall Average</div>
        <p class="text-sm text-gray-700 mb-2">State the overall average waiting time: <span class="font-bold text-purple-700">3.9 years</span></p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-purple-600 font-semibold">Source:</span>
          <span class="text-gray-600">MND Internal Housing Database (Past 12 months data)</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
        <div class="font-semibold text-gray-900 mb-1">2. Breakdown by Estate Maturity</div>
        <p class="text-sm text-gray-700 mb-2">Provide specific breakdown:</p>
        <ul class="text-sm text-gray-700 ml-4 space-y-1">
          <li>• Mature estates (Queenstown, Kallang): <span class="font-bold">4.2 years</span></li>
          <li>• Non-mature estates (Tengah, Punggol): <span class="font-bold">3.8 years</span></li>
        </ul>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-purple-600 font-semibold">Source:</span>
          <span class="text-gray-600">MND Internal Housing Database (Estate-level statistics)</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
        <div class="font-semibold text-gray-900 mb-1">3. Context for Waiting Times</div>
        <p class="text-sm text-gray-700 mb-2">Acknowledge challenges: supply chain disruptions and labour constraints post-pandemic</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-purple-600 font-semibold">Source:</span>
          <span class="text-gray-600">PQ 2284 (Aug 2024) - Similar language used; PQ 3102 (Nov 2024) - Supply chain disruptions acknowledged</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="text-xl font-bold mb-4 text-purple-900">Part (b): Measures to Reduce Waiting Times</h2>
    
    <div class="space-y-3 ml-4">
      <div class="p-3 bg-gray-50 rounded border-l-4 border-green-500">
        <div class="font-semibold text-gray-900 mb-1">1. Increased Housing Supply</div>
        <p class="text-sm text-gray-700 mb-2">HDB will launch approximately <span class="font-bold">100,000 flats</span> over the next five years</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-green-600 font-semibold">Source:</span>
          <span class="text-gray-600">MND Press Release (Oct 2024); Minister's Facebook Post (Nov 2024); PQ 1856 (Mar 2024) referenced increased BTO supply</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-green-500">
        <div class="font-semibold text-gray-900 mb-1">2. Expanding Construction Capacity</div>
        <p class="text-sm text-gray-700 mb-2">Pre-qualifying more contractors and supporting advanced construction technologies</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-green-600 font-semibold">Source:</span>
          <span class="text-gray-600">PQ 2284 (Aug 2024) - Mentioned contractor capacity challenges; PQ 3102 (Nov 2024) - Partnerships with builders</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-green-500">
        <div class="font-semibold text-gray-900 mb-1">3. Improving Productivity through DfMA</div>
        <p class="text-sm text-gray-700 mb-2">Design for Manufacturing and Assembly enables off-site pre-fabrication to reduce construction time</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-green-600 font-semibold">Source:</span>
          <span class="text-gray-600">PQ 3102 (Nov 2024) - Discussed productivity improvements; Internal Policy Stance - Highlighted as key measure</span>
        </div>
      </div>
      
      <div class="p-3 bg-gray-50 rounded border-l-4 border-green-500">
        <div class="font-semibold text-gray-900 mb-1">4. Closing Statement</div>
        <p class="text-sm text-gray-700 mb-2">Commitment to delivering quality homes within reasonable timeframes and continued monitoring</p>
        <div class="flex items-start gap-2 mt-2 p-2 bg-white rounded text-xs">
          <span class="text-green-600 font-semibold">Source:</span>
          <span class="text-gray-600">Internal Policy Stance - Approved language; Consistent with past ministerial responses</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-purple-50 rounded-lg border border-purple-300">
    <h3 class="font-bold text-purple-900 mb-2">✅ Quality Assurance</h3>
    <div class="grid grid-cols-2 gap-3 text-sm">
      <div class="flex items-start gap-2">
        <span class="text-purple-600">✓</span>
        <span class="text-gray-700">All statistics verified from internal database</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-purple-600">✓</span>
        <span class="text-gray-700">Consistent with 3 past PQ responses</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-purple-600">✓</span>
        <span class="text-gray-700">Aligned with recent policy announcements</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-purple-600">✓</span>
        <span class="text-gray-700">Focused on measures directly reducing wait times</span>
      </div>
    </div>
  </div>
  
  <div class="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
    <p class="text-sm text-gray-700"><span class="font-semibold">Note:</span> Every point in this outline is traceable to verified sources, ensuring the response will be accurate, consistent, and defensible.</p>
  </div>
</div>`},{type:"text",content:"Much better! Now the outline is more focused on measures that directly address waiting times. Part (b) now has 3 concrete policy measures plus the closing statement. Ready to proceed with drafting?"}]},{role:"user",content:{text:"Yes please. Can you draft a response following our usual format?"}},{role:"bot",content:[{type:"text",content:"Absolutely! Let me draft the PQ response for you. I'll follow MND's standard format and ensure consistency with past responses."},{type:"thinking",thought:"Drafting comprehensive PQ response...",reasoning:["Loading MND Parliamentary Question response template...","Structuring two-part answer format for questions (a) and (b)...","Incorporating verified statistics from research findings...","Aligning language and tone with past ministerial responses...","Ensuring formal parliamentary communication style throughout...","Including all relevant policy measures and government initiatives...","Cross-checking content against internal MND guidelines...","Formatting document for official parliamentary submission..."],timingMs:3500},{type:"artifact",title:"Draft PQ Response",fileType:"document",description:"Initial draft of Parliamentary Question response",interactive:!0,content:`<div class="p-8 bg-white max-w-4xl mx-auto">
  <div class="mb-6 pb-4 border-b-2 border-gray-300">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">DRAFT PARLIAMENTARY QUESTION RESPONSE</h1>
    <div class="text-sm text-gray-600 space-y-1">
      <div><span class="font-semibold">Question No.:</span> [To be assigned]</div>
      <div><span class="font-semibold">Date:</span> [Session date]</div>
      <div><span class="font-semibold">Member:</span> [MP name]</div>
      <div><span class="font-semibold">Ministry:</span> Ministry of National Development</div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-blue-50 rounded border border-blue-200">
    <h2 class="font-bold text-blue-900 mb-2">Question:</h2>
    <p class="text-sm text-gray-800">To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers.</p>
  </div>
  
  <div class="mb-6">
    <h2 class="font-bold text-lg text-gray-900 mb-3">Response:</h2>
    
    <div class="mb-5">
      <h3 class="font-semibold text-gray-800 mb-2">(a) Average Waiting Times</h3>
      <p class="text-sm text-gray-700 leading-relaxed">
        The Government understands the concerns about waiting times and the challenges faced by homebuyers. The average waiting time for Build-To-Order (BTO) flats from application to key collection is approximately 3.9 years. This varies by location: mature estates average 4.2 years, while non-mature estates average 3.8 years. These timelines reflect construction sector challenges including supply chain disruptions and labour constraints post-pandemic.
      </p>
    </div>
    
    <div>
      <h3 class="font-semibold text-gray-800 mb-2">(b) Measures to Reduce Waiting Times</h3>
      <p class="text-sm text-gray-700 leading-relaxed mb-3">
        The Government has implemented several measures:
      </p>
      <p class="text-sm text-gray-700 leading-relaxed mb-2">
        First, HDB will launch approximately 100,000 flats over the next five years to ensure adequate supply.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed mb-2">
        Second, we are expanding construction capacity by pre-qualifying more contractors and supporting adoption of advanced construction technologies.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed mb-2">
        Third, we are improving productivity through Design for Manufacturing and Assembly (DfMA), which enables off-site pre-fabrication to reduce construction time.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed mb-2">
        Fourth, we are introducing the Prime Location Public Housing (PLH) model to provide additional options in sought-after locations while maintaining accessibility for first-time buyers.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed">
        We remain committed to delivering quality homes within reasonable timeframes and will continue to monitor and adjust our approach as needed.
      </p>
    </div>
  </div>
  
  <div class="p-4 bg-green-50 rounded border border-green-200">
    <h3 class="font-bold text-green-900 mb-2">Key Features of this draft:</h3>
    <ul class="space-y-1 text-sm text-gray-700">
      <li>✅ Addresses both parts of the question clearly</li>
      <li>✅ Uses actual statistics from research (3.9 years average)</li>
      <li>✅ Formal parliamentary tone</li>
      <li>✅ Aligns with past ministerial responses on housing</li>
      <li>✅ Includes 4 concrete policy measures</li>
      <li>✅ Maintains consistency with recent announcements</li>
    </ul>
  </div>
</div>`},{type:"text",content:"Would you like me to adjust anything?"}]},{role:"user",content:{text:"This is good, but can you make it more formal and succinct? PQ responses need to be quite formal and to the point."}},{role:"bot",content:[{type:"text",content:"Absolutely, let me tighten this up and make it more formal."},{type:"thinking",thought:"Revising response to be more formal and concise...",reasoning:["Analyzing feedback to enhance formality...","Adjusting language to stricter parliamentary tone...","Making response more succinct while retaining key information...","Removing unnecessary phrases and redundancies...","Tightening language for maximum clarity and professionalism..."],timingMs:2500},{type:"artifact",title:"Revised PQ Response (Final)",fileType:"document",description:"Final formal and succinct PQ response",interactive:!0,content:`<div class="p-8 bg-white max-w-4xl mx-auto">
  <div class="mb-6 pb-4 border-b-2 border-purple-300">
    <h1 class="text-2xl font-bold text-purple-900 mb-2">REVISED DRAFT - FINAL</h1>
    <div class="text-sm text-gray-600">
      Parliamentary Question Response (Formal & Succinct)
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="font-bold text-lg text-gray-900 mb-3">Response:</h2>
    
    <div class="mb-5">
      <h3 class="font-semibold text-gray-800 mb-2">(a) Average Waiting Times</h3>
      <p class="text-sm text-gray-700 leading-relaxed">
        The Government understands the concerns about waiting times and the challenges faced by homebuyers. The average waiting time for BTO flats from application to key collection is approximately 3.9 years. This varies by location: mature estates average 4.2 years, while non-mature estates average 3.8 years. These timelines reflect construction sector challenges including supply chain disruptions and labour constraints post-pandemic.
      </p>
    </div>
    
    <div>
      <h3 class="font-semibold text-gray-800 mb-2">(b) Measures to Reduce Waiting Times</h3>
      <p class="text-sm text-gray-700 leading-relaxed mb-3">
        The Government has implemented several measures:
      </p>
      <p class="text-sm text-gray-700 leading-relaxed mb-2">
        First, HDB will launch approximately 100,000 flats over the next five years to ensure adequate supply.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed mb-2">
        Second, we are expanding construction capacity by pre-qualifying more contractors and supporting adoption of advanced construction technologies.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed mb-2">
        Third, we are improving productivity through Design for Manufacturing and Assembly (DfMA), which enables off-site pre-fabrication to reduce construction time.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed mb-2">
        Fourth, we are introducing the Prime Location Public Housing (PLH) model to provide additional options in sought-after locations while maintaining accessibility for first-time buyers.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed">
        We remain committed to delivering quality homes within reasonable timeframes and will continue to monitor and adjust our approach as needed.
      </p>
    </div>
  </div>
  
  <div class="p-4 bg-purple-50 rounded border border-purple-200">
    <h3 class="font-bold text-purple-900 mb-2">Changes made:</h3>
    <ul class="space-y-1 text-sm text-gray-700">
      <li>✅ More formal, parliamentary tone</li>
      <li>✅ Succinct and direct language</li>
      <li>✅ Removed conversational phrases</li>
      <li>✅ Tightened structure while maintaining all key information</li>
      <li>✅ Maintained all key facts and policy measures</li>
    </ul>
  </div>
</div>`},{type:"text",content:"Much better! That's the right tone and length."}]},{role:"user",content:{text:"Looks good. Can you also add a brief cover note I can send to my director when I submit this for review?"}},{role:"bot",content:[{type:"text",content:"Of course! Let me draft a concise cover note for your director."},{type:"thinking",thought:"Drafting cover note for director...",reasoning:["Composing professional cover note for director review...","Highlighting key points, research sources, and recommendations...","Including proposed clearance timeline and next steps...","Formatting in professional yet concise ministry communication style..."],timingMs:2500},{type:"artifact",title:"Cover Note to Director",fileType:"document",description:"Submission cover note for director review",interactive:!0,content:`<div class="p-8 bg-white max-w-4xl mx-auto">
  <div class="mb-6">
    <div class="text-sm space-y-1 mb-4">
      <div><span class="font-semibold">To:</span> Director, Housing Policy Division</div>
      <div><span class="font-semibold">From:</span> Sarah Chen, Policy Officer</div>
      <div><span class="font-semibold">Date:</span> [Today's date]</div>
      <div><span class="font-semibold">Subject:</span> PQ Response - BTO Waiting Times (Due: [Due date])</div>
    </div>
  </div>
  
  <div class="mb-4">
    <h3 class="font-semibold text-gray-900 mb-2">PQ Summary:</h3>
    <p class="text-sm text-gray-700">MP question on (a) average BTO waiting times by town, and (b) measures to reduce waiting times for first-timers.</p>
  </div>
  
  <div class="mb-4">
    <h3 class="font-semibold text-gray-900 mb-2">Key Points in Draft Response:</h3>
    <ol class="text-sm text-gray-700 space-y-1 list-decimal ml-5">
      <li>Provided actual statistics: 3.9 years overall average (4.2 years mature estates, 3.8 years non-mature)</li>
      <li>Acknowledged pandemic-related construction challenges</li>
      <li>Highlighted four key measures: supply ramp-up (100k flats), contractor capacity expansion, productivity improvements (DfMA), and PLH model</li>
      <li>Maintained formal tone consistent with parliamentary standards</li>
    </ol>
  </div>
  
  <div class="mb-4">
    <h3 class="font-semibold text-gray-900 mb-2">Research Conducted:</h3>
    <ul class="text-sm text-gray-700 space-y-1 list-disc ml-5">
      <li>Cross-referenced with 3 similar past PQs (Aug-Nov 2024)</li>
      <li>Verified statistics with internal database</li>
      <li>Aligned with recent policy announcements (NDR 2024, Oct 2024 press release)</li>
      <li>Confirmed stance against specific future timeline commitments</li>
    </ul>
  </div>
  
  <div class="mb-4 p-3 bg-blue-50 rounded border border-blue-200">
    <h3 class="font-semibold text-blue-900 mb-2">Consistency Check:</h3>
    <ul class="text-sm text-gray-700 space-y-1">
      <li>✅ Aligns with PQ 1856 (Mar 2024) on "3-4 year" reference</li>
      <li>✅ Consistent with Minister's recent Facebook post on supply commitment</li>
      <li>✅ References same policy measures mentioned in Oct 2024 press release</li>
    </ul>
  </div>
  
  <div class="mb-4">
    <h3 class="font-semibold text-gray-900 mb-2">Clearance Timeline:</h3>
    <div class="text-sm text-gray-700 space-y-1">
      <div>Current stage: Director review (you)</div>
      <div>Next: Directorate clearance</div>
      <div>Final: Ministry clearance</div>
      <div>Submission deadline: [Due date]</div>
    </div>
  </div>
  
  <div class="mb-4">
    <h3 class="font-semibold text-gray-900 mb-2">Attachments:</h3>
    <ol class="text-sm text-gray-700 list-decimal ml-5">
      <li>Draft PQ Response</li>
      <li>Cover Note</li>
      <li>Annex A - Past PQ References</li>
      <li>Annex B - Statistics Source Documentation</li>
    </ol>
  </div>
  
  <p class="text-sm text-gray-700">Please let me know if you need any revisions or additional information.</p>
</div>`},{type:"text",content:"This gives your director everything they need for a quick review!"}]},{role:"user",content:{text:"Can you now package everything - the PQ response, cover note, and all the supporting annexes?"}},{role:"bot",content:[{type:"text",content:"Absolutely! Let me compile everything for you."},{type:"thinking",thought:"Compiling complete submission package...",reasoning:["Generating final PQ response document in .docx format...","Creating professional cover note in .docx format...","Compiling Annex A: Past PQ references with Hansard links...","Compiling Annex B: Statistical documentation with sources...","Creating Annex C: News coverage and policy statement summary...","Formatting all documents according to MND submission standards...","Packaging components into organized submission bundle..."],timingMs:3500},{type:"artifact",title:"Complete Submission Package",fileType:"document",description:"All documents ready for download",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-purple-900">📦 PACKAGE READY FOR DOWNLOAD</h1>
  
  <div class="mb-6 p-4 bg-purple-50 rounded border border-purple-200">
    <div class="font-bold text-lg mb-2">Submission Package:</div>
    <div class="text-sm">PQ_BTO_Waiting_Times_Package.zip (1.8 MB)</div>
  </div>
  
  <div class="mb-6">
    <h2 class="font-bold text-lg mb-3">Contents:</h2>
    
    <div class="mb-4">
      <h3 class="font-semibold text-gray-800 mb-2">Main Documents:</h3>
      <ul class="space-y-1 text-sm text-gray-700">
        <li>📄 PQ_Response_BTO_Waiting_Times_DRAFT.docx</li>
        <li>📄 Cover_Note_to_Director.docx</li>
      </ul>
    </div>
    
    <div>
      <h3 class="font-semibold text-gray-800 mb-2">Supporting Annexes:</h3>
      <div class="space-y-3">
        <div class="p-3 bg-blue-50 rounded border border-blue-200">
          <div class="font-semibold text-sm">📄 Annex_A_Past_PQ_References.pdf</div>
          <ul class="text-xs text-gray-600 mt-1 ml-4 list-disc">
            <li>PQ 2284 (Aug 2024) - BTO delivery timelines</li>
            <li>PQ 1856 (Mar 2024) - Housing supply for first-timers</li>
            <li>PQ 3102 (Nov 2024) - Construction delays</li>
            <li>Includes Hansard links and key excerpts</li>
          </ul>
        </div>
        
        <div class="p-3 bg-blue-50 rounded border border-blue-200">
          <div class="font-semibold text-sm">📄 Annex_B_Statistics_Documentation.pdf</div>
          <ul class="text-xs text-gray-600 mt-1 ml-4 list-disc">
            <li>Average waiting times by estate (past 12 months)</li>
            <li>Historical trend comparison (2023 vs 2024)</li>
            <li>Data source: MND Internal Housing Database</li>
            <li>Last updated: [Current month]</li>
          </ul>
        </div>
        
        <div class="p-3 bg-blue-50 rounded border border-blue-200">
          <div class="font-semibold text-sm">📄 Annex_C_News_Coverage_Summary.pdf</div>
          <ul class="text-xs text-gray-600 mt-1 ml-4 list-disc">
            <li>National Day Rally 2024 - Housing announcements</li>
            <li>MND Press Release (Oct 2024) - 100k flats commitment</li>
            <li>Minister's public statements (past 6 months)</li>
            <li>Media coverage analysis</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="p-3 bg-green-50 rounded border border-green-200 text-sm">
    All documents formatted to MND standards and ready for internal circulation.
  </div>
</div>`},{type:"artifact",title:"Session Summary",fileType:"document",description:"Complete overview of work accomplished",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-purple-900">📊 SESSION SUMMARY</h1>
  
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="p-4 bg-purple-50 rounded border border-purple-200">
      <div class="text-3xl font-bold text-purple-700 mb-1">~5 hours</div>
      <div class="text-sm text-gray-600">Time Saved vs manual research and drafting</div>
    </div>
    
    <div class="p-4 bg-blue-50 rounded border border-blue-200">
      <div class="text-3xl font-bold text-blue-700 mb-1">8+ sources</div>
      <div class="text-sm text-gray-600">Hansard, database, news, policies</div>
    </div>
    
    <div class="p-4 bg-green-50 rounded border border-green-200">
      <div class="text-3xl font-bold text-green-700 mb-1">6 documents</div>
      <div class="text-sm text-gray-600">Complete documents generated</div>
    </div>
    
    <div class="p-4 bg-emerald-50 rounded border border-emerald-200">
      <div class="text-3xl font-bold text-emerald-700 mb-1">3 PQs</div>
      <div class="text-sm text-gray-600">Relevant precedents analyzed</div>
    </div>
  </div>
  
  <div class="mb-6">
    <div class="p-4 bg-gray-50 rounded border border-gray-200">
      <div class="font-bold text-lg mb-2">✅ 100% aligned with ministry positions</div>
      <div class="text-sm text-gray-600 mb-3">Consistency Status</div>
      <div class="font-bold text-lg">✅ 4 days ahead of submission deadline</div>
      <div class="text-sm text-gray-600">Deadline Buffer</div>
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="font-bold text-lg mb-3">Next Steps:</h2>
    <ol class="space-y-2 text-sm text-gray-700 list-decimal ml-5">
      <li>Download package</li>
      <li>Review documents one final time</li>
      <li>Submit to director for clearance</li>
      <li>Await feedback and incorporate any changes</li>
      <li>Route through directorate and ministry clearance</li>
    </ol>
  </div>
  
  <div class="p-4 bg-purple-50 rounded border border-purple-200">
    <h3 class="font-bold text-purple-900 mb-2">What we accomplished:</h3>
    <ul class="space-y-1 text-sm text-gray-700">
      <li>✅ Comprehensive research across Hansard, internal database, and news coverage</li>
      <li>✅ Drafted accurate, formal response aligned with policy stance</li>
      <li>✅ Revised for appropriate parliamentary tone based on feedback</li>
      <li>✅ Created complete submission package with supporting annexes</li>
    </ul>
  </div>
</div>`},{type:"text",content:"You're all set for submission!"}]},{role:"user",content:{text:"Can you help me send this directly to my director from here?"}},{role:"bot",content:[{type:"text",content:"Yes! I can help you send this to your director. Let me draft the submission email. What's your director's name and email?"}]},{role:"user",content:{text:"His name is Michael Tan, email is michael.tan@mnd.gov.sg. Should I CC anyone else?"}},{role:"bot",content:[{type:"text",content:`Let me draft the email for you:

**To:** michael.tan@mnd.gov.sg
**Subject:** PQ Response Submission - BTO Waiting Times

---

Dear Director Tan,

Please find attached the draft PQ response on BTO waiting times for your review and clearance.

**PQ Summary:** Two-part question on (a) average BTO waiting times by town, and (b) measures to reduce waiting times for first-time homebuyers.

**Key highlights:**
- Comprehensive research across 3 past PQs and internal database
- Consistent with recent ministerial statements and policy announcements
- Formal tone appropriate for parliamentary submission
- Complete documentation package with supporting annexes

**Attachments:**
1. Draft PQ Response
2. Cover Note
3. Annex A - Past PQ References
4. Annex B - Statistics Documentation
5. Annex C - News Coverage Summary

Please let me know if you need any revisions or additional information.

Best regards,
Sarah Chen
Policy Officer, Housing Policy Division

---

For CC, it's common to include your team lead or any colleagues working on housing policy. Would you like to add anyone?`}]},{role:"user",content:{text:"Can you send it now? Just CC jenny.lim@mnd.gov.sg (my team lead)."}},{role:"bot",content:[{type:"text",content:"Of course! Let me send the email now with all the attachments."},{type:"thinking",thought:"Sending submission email with all attachments...",reasoning:["Composing professional email to michael.tan@mnd.gov.sg...","Adding CC recipient jenny.lim@mnd.gov.sg...","Attaching all 6 documents from submission package...","Verifying all attachments are properly formatted and complete...","Processing email send request...","Confirming successful delivery..."],timingMs:3e3},{type:"artifact",title:"Email Sent Confirmation",fileType:"document",description:"Email delivery confirmation",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <div class="mb-6 p-4 bg-green-50 rounded-lg border-2 border-green-500">
    <div class="flex items-center gap-3 mb-2">
      <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h2 class="text-xl font-bold text-green-900">Email Sent Successfully!</h2>
        <p class="text-sm text-green-700">Your submission has been delivered</p>
      </div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-gray-50 rounded border border-gray-200">
    <h3 class="font-semibold text-gray-900 mb-3">Email Details:</h3>
    <div class="space-y-2 text-sm">
      <div class="flex gap-2">
        <span class="font-semibold text-gray-700 min-w-20">To:</span>
        <span class="text-gray-600">michael.tan@mnd.gov.sg</span>
      </div>
      <div class="flex gap-2">
        <span class="font-semibold text-gray-700 min-w-20">CC:</span>
        <span class="text-gray-600">jenny.lim@mnd.gov.sg</span>
      </div>
      <div class="flex gap-2">
        <span class="font-semibold text-gray-700 min-w-20">Subject:</span>
        <span class="text-gray-600">PQ Response Submission - BTO Waiting Times</span>
      </div>
      <div class="flex gap-2">
        <span class="font-semibold text-gray-700 min-w-20">Sent:</span>
        <span class="text-gray-600">Today at 3:42 PM</span>
      </div>
      <div class="flex gap-2">
        <span class="font-semibold text-gray-700 min-w-20">Attachments:</span>
        <span class="text-gray-600">6 files (1.8 MB total)</span>
      </div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-blue-50 rounded border border-blue-200">
    <h3 class="font-semibold text-blue-900 mb-2">📎 Attachments Included:</h3>
    <ul class="space-y-1 text-sm text-gray-700">
      <li>✅ PQ_Response_BTO_Waiting_Times_DRAFT.docx</li>
      <li>✅ Cover_Note_to_Director.docx</li>
      <li>✅ Annex_A_Past_PQ_References.pdf</li>
      <li>✅ Annex_B_Statistics_Documentation.pdf</li>
      <li>✅ Annex_C_News_Coverage_Summary.pdf</li>
      <li>✅ PQ_BTO_Waiting_Times_Package.zip</li>
    </ul>
  </div>
  
  <div class="p-3 bg-purple-50 rounded border border-purple-200 text-sm">
    <p class="text-purple-900"><span class="font-semibold">Next:</span> You'll receive a notification when Director Tan opens the email and downloads the attachments. Typical review time is 1-2 business days.</p>
  </div>
</div>`},{type:"text",content:`Done! ✉️ The email has been sent to Director Tan with Jenny CC'd, along with all 6 attachments.

You're all set, Sarah! The complete submission package is now in your director's inbox. You did great work on this PQ response, and you're well ahead of the deadline. 🎉

Feel free to come back if you need help with any revisions or have other PQs to work on. Good luck with the clearance process!`}]}]},mR={id:"pq-response-mnd-v2",title:"PQ Response - MND Housing (V2)",description:"Enhanced PQ response workflow with contextual assistance and form-based inputs",colorScheme:"purple",messages:[{role:"bot",content:[{type:"text",content:`Good morning! 👋

Welcome to the PQ AI Assistant. I'm here to help you draft Parliamentary Question responses efficiently.

Do you have the Q&A text ready, or would you like to start from scratch?`}]},{role:"user",content:{text:"Yes, I have the PQ text ready."}},{role:"bot",content:[{type:"thinking",thought:"Analyzing user's request and preparing PQ workflow...",reasoning:["Understanding user's confirmation that they have PQ text ready...","Loading Parliamentary Question response templates...","Preparing PQ input form with required fields...","Configuring workflow for MND ministry responses...","Setting up Hansard database connection for past PQ references..."],timingMs:3e3},{type:"text",content:"Great! Please paste your PQ text below, and I'll help you draft a comprehensive response."},{type:"artifact",title:"PQ Input Form",fileType:"form",description:"Enter your Parliamentary Question details",interactive:!0,content:`<div class="p-6">
  <h2 class="text-xl font-bold mb-4 text-purple-900">Parliamentary Question Input</h2>
  <form id="pqInputForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Question Text</label>
      <textarea 
        name="questionText" 
        rows="6" 
        class="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Paste the Parliamentary Question here...">To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers.</textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Ministry/Department</label>
      <select 
        name="ministry" 
        class="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
        <option value="">Select ministry...</option>
        <option value="MND" selected>Ministry of National Development (MND)</option>
        <option value="MOH">Ministry of Health (MOH)</option>
        <option value="MOE">Ministry of Education (MOE)</option>
        <option value="MHA">Ministry of Home Affairs (MHA)</option>
        <option value="MTI">Ministry of Trade and Industry (MTI)</option>
        <option value="Other">Other</option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Classification</label>
      <div class="space-y-2">
        <label class="flex items-center">
          <input type="radio" name="classification" value="SEC" class="mr-2">
          <span class="text-sm">SEC (Sensitive)</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="classification" value="NSC" class="mr-2">
          <span class="text-sm">NSC (Normal Sensitivity)</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="classification" value="UNCLASSIFIED" class="mr-2" checked>
          <span class="text-sm">Unclassified</span>
        </label>
      </div>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
      <input 
        type="date" 
        name="dueDate" 
        value="2025-12-15"
        class="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
    </div>
    
    <button 
      type="submit" 
      class="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
      Start Analysis
    </button>
  </form>
</div>`}]},{role:"user",content:{text:"[Form submitted with PQ details]"}},{role:"bot",content:[{type:"text",content:"Perfect! I've received your PQ. Let me analyze the question structure and identify what we need to address."},{type:"thinking",thought:"Analyzing PQ structure and requirements...",reasoning:["Processing submitted Parliamentary Question details...","Analyzing PQ format and identifying question components (a) and (b)...","Checking classification requirements and ministry alignment...","Determining research scope and data requirements...","Planning comprehensive search strategy across databases..."],timingMs:3e3},{type:"text",content:`✅ **PQ Analysis Complete**

**Question Type:** Two-part question
- Part (a): Statistical data request (BTO waiting times by town)
- Part (b): Policy measures inquiry

**Classification:** Unclassified
**Ministry:** MND - Housing Policy Division

I'll now search for relevant data and past responses. Would you like me to:
1. **Search for similar past PQs** (Recommended - helps maintain consistency)
2. **Skip to data search** (Faster, but may miss important precedents)`}]},{role:"user",content:{text:"Yes, please search for similar past PQs first."}},{role:"bot",content:[{type:"text",content:"Excellent choice. Let me search our Hansard database and internal knowledge base for similar questions."},{type:"thinking",thought:"Searching Hansard database for similar past PQs...",reasoning:["Querying Hansard database for BTO-related Parliamentary Questions...","Filtering results by ministry (MND) and topic (housing policy)...","Analyzing past ministerial responses and language patterns...","Cross-referencing with current policy positions...","Identifying consistent response frameworks...","Compiling relevant precedents and statistical data..."],timingMs:3500},{type:"assistantSwitch",message:"Deep Research Assistant"},{type:"text",content:"Research complete! I found relevant precedents and data. Here's what I discovered:"},{type:"artifact",title:"Past PQ Analysis Report",fileType:"document",description:"Similar PQs and response patterns",interactive:!1,content:`<div class="p-6 bg-white">
  <h1 class="text-2xl font-bold mb-4 text-purple-900">Past PQ Analysis Report</h1>
  
  <div class="mb-6">
    <h2 class="text-lg font-semibold text-purple-800 mb-3">📋 Similar PQs Found (Past 18 months)</h2>
    <div class="space-y-4">
      <div class="border border-purple-200 rounded-lg p-4 bg-purple-50">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-semibold text-purple-900">PQ 2284 (August 2024)</h3>
          <span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">High Relevance</span>
        </div>
        <p class="text-sm text-gray-700 mb-2"><strong>Question:</strong> BTO delivery timelines and construction delays</p>
        <p class="text-sm text-gray-600"><strong>Key Points:</strong></p>
        <ul class="text-sm text-gray-600 list-disc list-inside ml-2 space-y-1">
          <li>Emphasized government efforts to accelerate construction</li>
          <li>Mentioned contractor capacity challenges post-COVID</li>
          <li>Used empathetic language for waiting time concerns</li>
        </ul>
      </div>
      
      <div class="border border-purple-200 rounded-lg p-4 bg-purple-50">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-semibold text-purple-900">PQ 1856 (March 2024)</h3>
          <span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">High Relevance</span>
        </div>
        <p class="text-sm text-gray-700 mb-2"><strong>Question:</strong> Housing supply for first-time buyers</p>
        <p class="text-sm text-gray-600"><strong>Key Points:</strong></p>
        <ul class="text-sm text-gray-600 list-disc list-inside ml-2 space-y-1">
          <li>Referenced "3-4 year" typical waiting time</li>
          <li>Highlighted increased BTO supply plans</li>
          <li>Mentioned Prime Location Housing (PLH) model</li>
        </ul>
      </div>
      
      <div class="border border-purple-200 rounded-lg p-4 bg-purple-50">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-semibold text-purple-900">PQ 3102 (November 2024)</h3>
          <span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">Medium Relevance</span>
        </div>
        <p class="text-sm text-gray-700 mb-2"><strong>Question:</strong> Construction sector challenges</p>
        <p class="text-sm text-gray-600"><strong>Key Points:</strong></p>
        <ul class="text-sm text-gray-600 list-disc list-inside ml-2 space-y-1">
          <li>Acknowledged supply chain disruptions</li>
          <li>Mentioned partnerships with builders</li>
          <li>Discussed productivity improvements (DfMA)</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="text-lg font-semibold text-purple-800 mb-3">📊 Statistical Data Available</h2>
    <div class="bg-gray-50 p-4 rounded-lg">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p class="font-semibold text-gray-900">Overall Average:</p>
          <p class="text-2xl font-bold text-purple-700">3.9 years</p>
        </div>
        <div>
          <p class="font-semibold text-gray-900">Trend:</p>
          <p class="text-sm text-red-600">↑ from 3.6 years (2023)</p>
        </div>
        <div>
          <p class="font-semibold text-gray-900">Mature Estates:</p>
          <p class="text-xl font-bold text-purple-700">4.2 years</p>
          <p class="text-xs text-gray-500">Queenstown, Kallang, Tiong Bahru</p>
        </div>
        <div>
          <p class="font-semibold text-gray-900">Non-Mature Estates:</p>
          <p class="text-xl font-bold text-purple-700">3.8 years</p>
          <p class="text-xs text-gray-500">Tengah, Punggol, Woodlands</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="text-lg font-semibold text-purple-800 mb-3">🎯 Recommended Response Strategy</h2>
    <div class="space-y-3">
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
        <div>
          <p class="font-semibold text-gray-900">Acknowledge with empathy</p>
          <p class="text-sm text-gray-600">Reference the waiting time concerns, consistent with PQ 2284</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
        <div>
          <p class="font-semibold text-gray-900">Provide specific data</p>
          <p class="text-sm text-gray-600">Use the 3.9 years average, with breakdown by estate maturity</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
        <div>
          <p class="font-semibold text-gray-900">Explain context</p>
          <p class="text-sm text-gray-600">Mention pandemic-related construction challenges (aligned with recent responses)</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
        <div>
          <p class="font-semibold text-gray-900">Highlight policy measures</p>
          <p class="text-sm text-gray-600">Reference the 100,000 flats plan, DfMA, PLH model (consistent with PQ 1856)</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
    <h3 class="font-semibold text-purple-900 mb-2">⚠️ Important Notes</h3>
    <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
      <li>Avoid specific future timeline commitments (per internal guidelines)</li>
      <li>Maintain consistency with Minister's recent public statements</li>
      <li>Use formal parliamentary tone throughout</li>
      <li>Ensure all statistics are from verified internal database</li>
    </ul>
  </div>
</div>`},{type:"text",content:`Based on this research, would you like me to:

**Option 1:** Draft a complete response following the recommended strategy
**Option 2:** Let you select specific sections to focus on first
**Option 3:** Search for additional data/evidence before drafting`}]},{role:"user",content:{text:"Option 1 - Please draft a complete response."}},{role:"bot",content:[{type:"text",content:"Excellent! I'll now draft your PQ response, incorporating all the research findings and following MND's standard format."},{type:"thinking",thought:"Drafting comprehensive PQ response...",reasoning:["Loading MND Parliamentary Question response template...","Structuring two-part answer format for parts (a) and (b)...","Incorporating verified statistics (3.9 years average waiting time)...","Aligning language and tone with past ministerial responses...","Ensuring empathetic acknowledgment of waiting time concerns...","Including all four policy measures with proper justification...","Cross-checking content against internal MND guidelines...","Formatting document for official parliamentary submission..."],timingMs:3500},{type:"text",content:"Your draft PQ response is ready! I've created multiple versions for you to choose from:"},{type:"artifact",title:"Draft PQ Response - Version 1 (Recommended)",fileType:"document",description:"Formal, concise parliamentary response",interactive:!1,content:`<div class="p-8 bg-white max-w-5xl mx-auto">
  <div class="border-b-2 border-purple-600 pb-4 mb-6">
    <h1 class="text-2xl font-bold text-purple-900">PARLIAMENTARY QUESTION RESPONSE</h1>
    <p class="text-sm text-gray-600 mt-2">Draft Version 1 (Recommended)</p>
  </div>
  
  <div class="mb-6 p-4 bg-purple-50 rounded-lg">
    <h2 class="text-sm font-semibold text-purple-900 mb-2">QUESTION</h2>
    <p class="text-sm text-gray-800">To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers.</p>
  </div>
  
  <div class="space-y-6">
    <div>
      <h2 class="text-lg font-bold text-purple-900 mb-3">(a) Average Waiting Times</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>The average waiting time for BTO flats from application to key collection is approximately 3.9 years. This varies by location: mature estates average 4.2 years, while non-mature estates average 3.8 years.</p>
        
        <p>These timelines reflect construction sector challenges including supply chain disruptions and labour constraints post-pandemic.</p>
      </div>
    </div>
    
    <div>
      <h2 class="text-lg font-bold text-purple-900 mb-3">(b) Measures to Reduce Waiting Times</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>The Government has implemented several measures:</p>
        
        <p><strong>First,</strong> HDB will launch approximately 100,000 flats over the next five years to ensure adequate supply.</p>
        
        <p><strong>Second,</strong> we are expanding construction capacity by pre-qualifying more contractors and supporting adoption of advanced construction technologies.</p>
        
        <p><strong>Third,</strong> we are improving productivity through Design for Manufacturing and Assembly (DfMA), which enables off-site pre-fabrication to reduce construction time.</p>
        
        <p><strong>Fourth,</strong> the Prime Location Public Housing model provides additional options in sought-after locations while maintaining accessibility for first-time buyers.</p>
        
        <p>We remain committed to delivering quality homes within reasonable timeframes and will continue to monitor and adjust our approach as needed.</p>
      </div>
    </div>
  </div>
  
  <div class="mt-8 p-4 bg-green-50 border border-green-300 rounded-lg">
    <h3 class="font-semibold text-green-900 mb-2">✅ Quality Checks Passed</h3>
    <div class="grid grid-cols-2 gap-2 text-sm">
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Formal parliamentary tone</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Addresses both parts clearly</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Uses verified statistics</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Consistent with past responses</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Includes 4 policy measures</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Empathetic language</span>
      </div>
    </div>
  </div>
  
  <div class="mt-6 p-4 bg-gray-50 rounded-lg">
    <h3 class="font-semibold text-gray-900 mb-2">📝 Metadata</h3>
    <div class="text-sm text-gray-600 space-y-1">
      <p><strong>Word Count:</strong> 156 words</p>
      <p><strong>Reading Time:</strong> ~45 seconds</p>
      <p><strong>Tone:</strong> Formal, Empathetic</p>
      <p><strong>Consistency Score:</strong> 98% (aligned with 3 past PQs)</p>
    </div>
  </div>
</div>`},{type:"artifact",title:"Draft PQ Response - Version 2 (Detailed)",fileType:"document",description:"More detailed response with additional context",interactive:!1,content:`<div class="p-8 bg-white max-w-5xl mx-auto">
  <div class="border-b-2 border-purple-600 pb-4 mb-6">
    <h1 class="text-2xl font-bold text-purple-900">PARLIAMENTARY QUESTION RESPONSE</h1>
    <p class="text-sm text-gray-600 mt-2">Draft Version 2 (Detailed)</p>
  </div>
  
  <div class="mb-6 p-4 bg-purple-50 rounded-lg">
    <h2 class="text-sm font-semibold text-purple-900 mb-2">QUESTION</h2>
    <p class="text-sm text-gray-800">To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers.</p>
  </div>
  
  <div class="space-y-6">
    <div>
      <h2 class="text-lg font-bold text-purple-900 mb-3">(a) Average Waiting Times</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>The average waiting time for Build-To-Order (BTO) flats varies across towns depending on construction complexities, site conditions, and contractor capacity. Over the past year, the average waiting time from application to key collection has been approximately 3.9 years.</p>
        
        <p>For projects in mature estates such as Queenstown and Kallang, the average is 4.2 years. For non-mature estates such as Tengah and Punggol, it is 3.8 years.</p>
        
        <p>These waiting times reflect challenges in the construction sector, including supply chain disruptions and labour constraints in the post-pandemic period. The Government remains committed to addressing these challenges while ensuring the quality of public housing.</p>
      </div>
    </div>
    
    <div>
      <h2 class="text-lg font-bold text-purple-900 mb-3">(b) Measures to Reduce Waiting Times</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>The Government remains committed to ensuring Singaporeans can access quality public housing within a reasonable timeframe. Several measures have been implemented:</p>
        
        <p><strong>First,</strong> housing supply is being significantly increased. HDB will launch approximately 100,000 flats over the next five years, ensuring adequate supply to meet demand from Singaporean households.</p>
        
        <p><strong>Second,</strong> we are working with contractors to expand construction capacity through pre-qualification of more contractors and support for advanced construction technologies. This will help address the current capacity constraints in the construction sector.</p>
        
        <p><strong>Third,</strong> construction productivity is being improved through Design for Manufacturing and Assembly (DfMA), which allows components to be pre-fabricated off-site, reducing on-site construction time and improving efficiency.</p>
        
        <p><strong>Fourth,</strong> the Prime Location Public Housing (PLH) model has been introduced to provide housing options in sought-after areas while maintaining accessibility and affordability for first-time homebuyers through subsidies and resale conditions.</p>
        
        <p>The Government will continue to monitor the situation closely and make necessary adjustments to deliver quality homes within reasonable timeframes.</p>
      </div>
    </div>
  </div>
  
  <div class="mt-8 p-4 bg-amber-50 border border-amber-300 rounded-lg">
    <h3 class="font-semibold text-amber-900 mb-2">⚠️ Note on Detail Level</h3>
    <p class="text-sm text-gray-700">This version provides more context and explanation. Consider using Version 1 if brevity is preferred, or this version if more detailed justification is needed.</p>
  </div>
  
  <div class="mt-6 p-4 bg-gray-50 rounded-lg">
    <h3 class="font-semibold text-gray-900 mb-2">📝 Metadata</h3>
    <div class="text-sm text-gray-600 space-y-1">
      <p><strong>Word Count:</strong> 268 words</p>
      <p><strong>Reading Time:</strong> ~1 minute 20 seconds</p>
      <p><strong>Tone:</strong> Formal, Comprehensive</p>
      <p><strong>Detail Level:</strong> High</p>
    </div>
  </div>
</div>`},{type:"text",content:`I've prepared two versions for you:

**Version 1 (Recommended):** Concise, formal, and directly addresses both parts. This follows the style of recent PQ responses.

**Version 2 (Detailed):** More comprehensive with additional context and explanations. Use this if more justification is needed.

Which version would you like to proceed with, or would you like me to create a hybrid version?`}]},{role:"user",content:{text:"Version 1 looks good. Can you now help me prepare the submission package?"}},{role:"bot",content:[{type:"text",content:"Excellent choice! Let me prepare the complete submission package with all supporting documents."},{type:"thinking",thought:"Preparing complete submission package...",reasoning:["Generating final PQ response document in .docx format...","Creating professional cover note for director review...","Compiling Annex A: Past PQ references with Hansard database links...","Compiling Annex B: Statistical documentation with source verification...","Creating Annex C: Policy alignment checklist for compliance...","Formatting all documents according to MND standards...","Packaging all components into submission-ready bundle..."],timingMs:3500},{type:"artifact",title:"Complete Submission Package",fileType:"document",description:"Ready-to-submit PQ response package",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-purple-900">📦 Submission Package Ready</h1>
  
  <div class="mb-6 p-4 bg-purple-50 border border-purple-300 rounded-lg">
    <h2 class="font-bold text-purple-900 mb-3">Package Contents</h2>
    <div class="space-y-2">
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">📄</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">PQ_Response_BTO_Waiting_Times_FINAL.docx</p>
          <p class="text-xs text-gray-500">Main response document (Version 1)</p>
        </div>
        <span class="text-xs text-gray-500">42 KB</span>
      </div>
      
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">📄</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">Cover_Note_to_Director.docx</p>
          <p class="text-xs text-gray-500">Submission cover note</p>
        </div>
        <span class="text-xs text-gray-500">28 KB</span>
      </div>
      
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">📊</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">Annex_A_Past_PQ_References.pdf</p>
          <p class="text-xs text-gray-500">3 similar PQs with analysis</p>
        </div>
        <span class="text-xs text-gray-500">156 KB</span>
      </div>
      
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">📊</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">Annex_B_Statistics_Documentation.pdf</p>
          <p class="text-xs text-gray-500">Data sources and verification</p>
        </div>
        <span class="text-xs text-gray-500">89 KB</span>
      </div>
      
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">✅</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">Annex_C_Policy_Alignment_Checklist.pdf</p>
          <p class="text-xs text-gray-500">Consistency verification</p>
        </div>
        <span class="text-xs text-gray-500">34 KB</span>
      </div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-green-50 border border-green-300 rounded-lg">
    <h2 class="font-bold text-green-900 mb-3">📊 Package Summary</h2>
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <p class="text-gray-600">Total Documents</p>
        <p class="text-2xl font-bold text-green-700">5</p>
      </div>
      <div>
        <p class="text-gray-600">Package Size</p>
        <p class="text-2xl font-bold text-green-700">349 KB</p>
      </div>
      <div>
        <p class="text-gray-600">Time Saved</p>
        <p class="text-2xl font-bold text-green-700">~5 hours</p>
      </div>
      <div>
        <p class="text-gray-600">Quality Score</p>
        <p class="text-2xl font-bold text-green-700">98%</p>
      </div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-blue-50 border border-blue-300 rounded-lg">
    <h2 class="font-bold text-blue-900 mb-3">📋 Cover Note Preview</h2>
    <div class="text-sm space-y-2 text-gray-700">
      <p><strong>To:</strong> Director, Housing Policy Division</p>
      <p><strong>From:</strong> [Your Name], Policy Officer</p>
      <p><strong>Subject:</strong> PQ Response - BTO Waiting Times</p>
      
      <div class="mt-3 p-3 bg-white rounded border border-blue-200">
        <p class="text-xs text-gray-600 mb-2"><strong>Key Points Highlighted:</strong></p>
        <ul class="text-xs text-gray-600 space-y-1 list-disc list-inside">
          <li>Two-part question on waiting times and policy measures</li>
          <li>Statistics verified: 3.9 years average (4.2 mature, 3.8 non-mature)</li>
          <li>Cross-referenced with 3 past PQs for consistency</li>
          <li>Aligned with recent ministerial statements</li>
          <li>Four concrete policy measures included</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-purple-50 border-2 border-purple-400 rounded-lg">
    <h2 class="font-bold text-purple-900 mb-3">✅ Ready for Submission</h2>
    <p class="text-sm text-gray-700 mb-3">Your PQ response package is complete and ready to submit to your director for review.</p>
    
    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>All quality checks passed</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Consistent with past responses (3 PQs analyzed)</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Statistics verified from internal database</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Formatted to MND standards</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>All supporting annexes included</span>
      </div>
    </div>
  </div>
  
  <div class="mt-6 text-xs text-gray-500 text-center">
    <p>Document package generated on November 25, 2025</p>
  </div>
</div>`},{type:"text",content:`Your complete submission package is ready! 🎉

Would you like me to:
1. **Send via email** to your director
2. **Download** the package for your records
3. **Make final edits** before submission`}]},{role:"user",content:{text:"Option 1 - Please send it via email to my director."}},{role:"bot",content:[{type:"text",content:"Perfect! Let me draft a professional email for your submission."},{type:"thinking",thought:"Composing professional submission email...",reasoning:["Drafting professional email for director submission...","Summarizing key PQ points and recommendations...","Preparing attachment list with all supporting documents...","Formatting email according to ministry communication standards..."],timingMs:2500},{type:"text",content:"I've drafted your submission email. Please review it below:"},{type:"artifact",title:"Email Drafted",fileType:"document",description:"Submission email to director",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <div class="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
    <h2 class="text-sm font-bold text-purple-900 mb-3">📧 EMAIL DRAFT FOR YOUR REVIEW</h2>
    <div class="space-y-2 text-sm">
      <div><strong>To:</strong> [Director's Name]</div>
      <div><strong>CC:</strong> [Optional CC recipients]</div>
      <div><strong>Subject:</strong> [For Review] PQ Response - BTO Waiting Times</div>
    </div>
  </div>
  
  <div class="space-y-4 text-sm text-gray-800">
    <p>Dear [Director's Name],</p>
    
    <p>I am writing to submit the Parliamentary Question response regarding BTO waiting times for your review.</p>
    
    <div class="my-4 p-4 bg-gray-50 rounded-lg">
      <h3 class="font-bold text-gray-900 mb-3">Summary:</h3>
      <ul class="space-y-2">
        <li><strong>Question Type:</strong> Two-part question on BTO waiting times and policy measures</li>
        <li><strong>Classification:</strong> Unclassified</li>
        <li><strong>Ministry:</strong> MND - Housing Policy Division</li>
        <li><strong>Due Date:</strong> 15 December 2025</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h3 class="font-bold text-gray-900 mb-2">Key Points:</h3>
      <ul class="list-disc list-inside space-y-1 ml-2">
        <li><strong>Statistics Verified:</strong> Average waiting time 3.9 years (4.2 years for mature estates, 3.8 years for non-mature)</li>
        <li><strong>Past PQ References:</strong> Cross-referenced with 3 similar PQs for consistency (PQ 2284, 1856, 3102)</li>
        <li><strong>Policy Measures:</strong> Four concrete measures included (100,000 flats plan, contractor expansion, DfMA, PLH model)</li>
        <li><strong>Quality Score:</strong> 98% consistency with past ministerial responses</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h3 class="font-bold text-gray-900 mb-2">Response Strategy:</h3>
      <p>The draft follows the recommended approach of acknowledging concerns empathetically, providing specific verified data, explaining context (post-pandemic construction challenges), and highlighting four policy measures aligned with recent ministerial statements.</p>
    </div>
    
    <p>The complete submission package includes:</p>
    <ul class="list-disc list-inside ml-4 space-y-1">
      <li>Draft PQ Response (Version 1 - Recommended format)</li>
      <li>Past PQ Analysis Report with Hansard references</li>
      <li>Statistical documentation with data sources</li>
      <li>Policy alignment checklist</li>
      <li>Cover note</li>
    </ul>
    
    <p class="font-semibold mt-4">For your review and clearance, please.</p>
    
    <p>Please let me know if you require any revisions or additional information.</p>
    
    <p>Thank you for your consideration.</p>
    
    <div class="mt-4 pt-4 border-t border-gray-300">
      <p>Best regards,</p>
      <p class="font-semibold">[Your Name]</p>
      <p>Policy Officer</p>
      <p>Housing Policy Division</p>
      <p>Ministry of National Development</p>
      <p>📧 [your.email@mnd.gov.sg] | ☎️ [Your Contact]</p>
    </div>
    
    <div class="mt-6 p-3 bg-purple-50 rounded border border-purple-200">
      <h3 class="font-bold text-purple-900 mb-2">📎 Attachments (5 files, 349 KB total):</h3>
      <ul class="text-xs space-y-1">
        <li>📄 PQ_Response_BTO_Waiting_Times_FINAL.docx (42 KB)</li>
        <li>📄 Cover_Note_to_Director.docx (28 KB)</li>
        <li>📊 Annex_A_Past_PQ_References.pdf (156 KB)</li>
        <li>📊 Annex_B_Statistics_Documentation.pdf (89 KB)</li>
        <li>✅ Annex_C_Policy_Alignment_Checklist.pdf (34 KB)</li>
      </ul>
    </div>
  </div>
</div>`},{type:"text",content:"The email draft is ready! Would you like to review it before sending?"}]},{role:"user",content:{text:"This email is too long. Can you just attach the documents instead and keep the email brief?"}},{role:"bot",content:[{type:"text",content:"Great suggestion! Let me create a much shorter email that simply attaches the documents. The detailed information will be in the attached files."},{type:"thinking",thought:"Revising to create concise email...",reasoning:["Analyzing user feedback to simplify email length...","Drafting brief, professional cover email...","Moving detailed information to attached documents...","Ensuring key points remain visible while reducing verbosity..."],timingMs:2500},{type:"artifact",title:"Revised Email (Brief Version)",fileType:"document",description:"Concise submission email with attachments",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <div class="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
    <h2 class="text-sm font-bold text-purple-900 mb-3">📧 REVISED EMAIL DRAFT</h2>
    <div class="space-y-2 text-sm">
      <div><strong>To:</strong> [Director's Name]</div>
      <div><strong>CC:</strong> [Optional CC recipients]</div>
      <div><strong>Subject:</strong> [For Review] PQ Response - BTO Waiting Times</div>
    </div>
  </div>
  
  <div class="space-y-4 text-sm text-gray-800">
    <p>Dear [Director's Name],</p>
    
    <p>Please find attached the PQ response regarding BTO waiting times for your review and clearance.</p>
    
    <p>The submission package includes the draft response, past PQ analysis, statistical documentation, and policy alignment checklist.</p>
    
    <p><strong>Due Date:</strong> 15 December 2025</p>
    
    <p class="font-semibold">For your review and clearance, please.</p>
    
    <p>Please let me know if you require any revisions or additional information.</p>
    
    <p>Thank you.</p>
    
    <div class="mt-4 pt-4 border-t border-gray-300">
      <p>Best regards,</p>
      <p class="font-semibold">[Your Name]</p>
      <p>Policy Officer, Housing Policy Division</p>
      <p>Ministry of National Development</p>
    </div>
    
    <div class="mt-6 p-3 bg-purple-50 rounded border border-purple-200">
      <h3 class="font-bold text-purple-900 mb-2">📎 Attachments (5 files, 349 KB total):</h3>
      <ul class="text-xs space-y-1">
        <li>📄 PQ_Response_BTO_Waiting_Times_FINAL.docx</li>
        <li>📄 Cover_Note_to_Director.docx</li>
        <li>📊 Annex_A_Past_PQ_References.pdf</li>
        <li>📊 Annex_B_Statistics_Documentation.pdf</li>
        <li>✅ Annex_C_Policy_Alignment_Checklist.pdf</li>
      </ul>
    </div>
  </div>
  
  <div class="mt-6 p-3 bg-green-50 rounded border border-green-200">
    <p class="text-sm text-green-900"><strong>✓ Much better!</strong> This brief email keeps it professional while letting the attached documents speak for themselves.</p>
  </div>
</div>`},{type:"text",content:`Perfect! This revised email is much more concise. All the detailed information is in the attached cover note and supporting documents.

Please provide the recipient details to send:
- Director's name and email
- CC recipients (optional)`}]},{role:"user",content:{text:"Michael Tan, michael.tan@mnd.gov.sg, CC rachel.lim@mnd.gov.sg"}},{role:"bot",content:[{type:"text",content:"Perfect! Sending your PQ submission now..."},{type:"thinking",thought:"Sending PQ submission email...",reasoning:["Attaching all 5 documents to email (349 KB total size)...","Verifying recipient addresses: michael.tan@mnd.gov.sg, rachel.lim@mnd.gov.sg...","Formatting professional email with proper ministry protocols...","Processing email send request...","Confirming successful delivery..."],timingMs:3e3},{type:"text",content:`✅ **Email sent successfully!**

Your PQ submission has been sent to:
- **Michael Tan** (michael.tan@mnd.gov.sg) - Director
- **Rachel Lim** (rachel.lim@mnd.gov.sg) - CC'd

All 5 attachments included (349 KB total)`},{type:"artifact",title:"Final Session Summary",fileType:"document",description:"Complete workflow summary",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-purple-900">📊 Session Summary</h1>
  
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <div class="text-3xl font-bold text-purple-700 mb-1">~5 hours</div>
      <div class="text-sm text-gray-600">Time Saved</div>
    </div>
    
    <div class="p-4 bg-green-50 rounded-lg border border-green-200">
      <div class="text-3xl font-bold text-green-700 mb-1">5 docs</div>
      <div class="text-sm text-gray-600">Generated</div>
    </div>
    
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div class="text-3xl font-bold text-blue-700 mb-1">3 PQs</div>
      <div class="text-sm text-gray-600">Analyzed</div>
    </div>
    
    <div class="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
      <div class="text-3xl font-bold text-emerald-700 mb-1">98%</div>
      <div class="text-sm text-gray-600">Quality Score</div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-gray-50 rounded-lg">
    <h2 class="font-bold text-gray-900 mb-3">What We Accomplished</h2>
    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Analyzed PQ structure and classification</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Searched and analyzed 3 similar past PQs from Hansard</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Verified statistics from internal MND database</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Drafted formal response (2 versions)</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Generated complete submission package (5 documents)</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Sent professional email to director with all attachments</span>
      </div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-purple-50 border border-purple-300 rounded-lg">
    <h2 class="font-bold text-purple-900 mb-3">📧 Email Sent To</h2>
    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">MT</div>
        <div>
          <p class="font-semibold">Michael Tan</p>
          <p class="text-xs text-gray-500">michael.tan@mnd.gov.sg (Director)</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">RL</div>
        <div>
          <p class="font-semibold">Rachel Lim</p>
          <p class="text-xs text-gray-500">rachel.lim@mnd.gov.sg (CC'd)</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-blue-50 border border-blue-300 rounded-lg">
    <h2 class="font-bold text-blue-900 mb-3">📝 Next Steps</h2>
    <ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside">
      <li>Director will review your submission (typically 1-2 business days)</li>
      <li>You may receive feedback or approval</li>
      <li>If approved, proceed with directorate clearance</li>
      <li>Final ministry clearance before parliamentary submission</li>
    </ol>
  </div>
  
  <div class="mt-6 text-center">
    <p class="text-sm text-gray-600">Thank you for using PQ AI Assistant! 🎉</p>
    <p class="text-xs text-gray-500 mt-2">Session completed on November 25, 2025</p>
  </div>
</div>`},{type:"text",content:`You're all set! Your PQ response has been submitted to your director. The typical review time is 1-2 business days.

Feel free to come back anytime you need help with future PQs. Good luck! 😊`}]}]},gR={id:"canvas-demo",title:"Canvas Generation Demo",description:"Demonstrating canvas creation and versioning",colorScheme:"blue",classificationType:"rsn",messages:[{role:"user",content:{text:"Help me generate a 1 pager plan for launching a new government digital service",autoSend:!0}},{role:"bot",content:[{type:"thinking",thought:"Analyzing requirements for the 1-pager plan...",reasoning:["Analyzing the user's request and identifying key requirements...","Breaking down the components needed for a government digital service launch plan...","Considering stakeholder engagement, timeline, and governance requirements...","Structuring the plan into clear, actionable sections...","Calling Canvas tool to prepare document workspace...","Preparing to create a comprehensive yet concise 1-pager document..."],timingMs:4500},{type:"text",content:"I'll create a comprehensive 1-pager plan for your government digital service launch. This will include key sections covering objectives, timeline, stakeholders, and success metrics."},{type:"artifact",title:"Digital Service Launch Plan",fileType:"document",description:"1-pager plan for government digital service launch",interactive:!0,version:1,content:`<div class="p-6 space-y-4">
  <h1 class="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2">
    Government Digital Service Launch Plan
  </h1>

  <div class="space-y-3">
    <div>
      <h2 class="text-lg font-semibold text-gray-800">🎯 Objectives</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>Deliver citizen-centric digital service by Q4 2024</li>
        <li>Achieve 80% digital adoption rate within 6 months</li>
        <li>Reduce processing time from 14 days to 48 hours</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">📅 Timeline</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li><strong>Phase 1 (Months 1-2):</strong> Requirements gathering and design</li>
        <li><strong>Phase 2 (Months 3-4):</strong> Development and testing</li>
        <li><strong>Phase 3 (Month 5):</strong> User acceptance testing and pilot</li>
        <li><strong>Phase 4 (Month 6):</strong> Full launch and monitoring</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">👥 Key Stakeholders</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>Project Sponsor: Chief Digital Officer</li>
        <li>Technical Lead: Government Technology Agency</li>
        <li>User Research: Service Design Team</li>
        <li>Governance: Digital Transformation Committee</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">📊 Success Metrics</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>80% digital adoption rate</li>
        <li>90% user satisfaction score</li>
        <li>48-hour average processing time</li>
        <li>Zero critical security incidents</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">⚠️ Risks & Mitigation</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li><strong>Risk:</strong> Low user adoption → <strong>Mitigation:</strong> Comprehensive training program</li>
        <li><strong>Risk:</strong> Technical issues → <strong>Mitigation:</strong> Phased rollout approach</li>
        <li><strong>Risk:</strong> Budget overrun → <strong>Mitigation:</strong> Monthly financial reviews</li>
      </ul>
    </div>
  </div>
</div>`}]},{role:"user",content:{text:"Can you refine the timeline to add more detail on the deliverables for each phase?"}},{role:"bot",content:[{type:"thinking",thought:"Enhancing the timeline section with detailed deliverables...",reasoning:["Analyzing the request to add deliverables to each phase...","Identifying key outputs for each phase of the project...","Ensuring deliverables align with governance requirements...","Maintaining document clarity while adding detail...","Updating the canvas with enhanced timeline information..."],timingMs:4e3},{type:"text",content:"I've updated the plan with detailed deliverables for each phase. The timeline now includes specific outputs and milestones to track progress."},{type:"artifact",title:"Digital Service Launch Plan",fileType:"document",description:"Updated with detailed phase deliverables",interactive:!0,version:2,content:`<div class="p-6 space-y-4">
  <h1 class="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2">
    Government Digital Service Launch Plan
    <span class="text-sm font-normal text-gray-500 ml-2">(v2)</span>
  </h1>

  <div class="space-y-3">
    <div>
      <h2 class="text-lg font-semibold text-gray-800">🎯 Objectives</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>Deliver citizen-centric digital service by Q4 2024</li>
        <li>Achieve 80% digital adoption rate within 6 months</li>
        <li>Reduce processing time from 14 days to 48 hours</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">📅 Timeline & Deliverables</h2>
      <div class="ml-2 mt-1 space-y-3">
        <div class="border-l-4 border-blue-500 pl-3">
          <p class="font-semibold text-gray-800">Phase 1 (Months 1-2): Requirements & Design</p>
          <ul class="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm">
            <li>Stakeholder consultation report</li>
            <li>User research findings and personas</li>
            <li>Service blueprint and user journey maps</li>
            <li>Technical architecture document</li>
            <li>Security and compliance assessment</li>
          </ul>
        </div>

        <div class="border-l-4 border-blue-500 pl-3">
          <p class="font-semibold text-gray-800">Phase 2 (Months 3-4): Development & Testing</p>
          <ul class="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm">
            <li>Working prototype (alpha version)</li>
            <li>Integration with backend systems</li>
            <li>Security penetration testing report</li>
            <li>Accessibility compliance certification (WCAG 2.1 AA)</li>
            <li>Load testing results</li>
          </ul>
        </div>

        <div class="border-l-4 border-blue-500 pl-3">
          <p class="font-semibold text-gray-800">Phase 3 (Month 5): UAT & Pilot</p>
          <ul class="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm">
            <li>User acceptance testing with 50+ users</li>
            <li>Pilot launch with 500 selected citizens</li>
            <li>Feedback analysis and bug fixes</li>
            <li>Training materials and help documentation</li>
            <li>Go-live readiness assessment</li>
          </ul>
        </div>

        <div class="border-l-4 border-blue-500 pl-3">
          <p class="font-semibold text-gray-800">Phase 4 (Month 6): Launch & Monitoring</p>
          <ul class="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm">
            <li>Public launch communications plan</li>
            <li>24/7 support team activation</li>
            <li>Real-time monitoring dashboard</li>
            <li>Weekly performance reports</li>
            <li>Post-launch optimization roadmap</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">👥 Key Stakeholders</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>Project Sponsor: Chief Digital Officer</li>
        <li>Technical Lead: Government Technology Agency</li>
        <li>User Research: Service Design Team</li>
        <li>Governance: Digital Transformation Committee</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">📊 Success Metrics</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>80% digital adoption rate</li>
        <li>90% user satisfaction score</li>
        <li>48-hour average processing time</li>
        <li>Zero critical security incidents</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">⚠️ Risks & Mitigation</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li><strong>Risk:</strong> Low user adoption → <strong>Mitigation:</strong> Comprehensive training program</li>
        <li><strong>Risk:</strong> Technical issues → <strong>Mitigation:</strong> Phased rollout approach</li>
        <li><strong>Risk:</strong> Budget overrun → <strong>Mitigation:</strong> Monthly financial reviews</li>
      </ul>
    </div>
  </div>
</div>`}]}]};function hR(){const[n,r]=f.useState(!1),[s,a]=f.useState(!1),[c,d]=f.useState({name:"John Doe",email:"john.doe@tech.gov.sg",role:"Product Manager",agency:"GovTech"}),[p,m]=f.useState([]),[h,v]=f.useState(null),[y,x]=f.useState(null),[b,S]=f.useState("new-rsn"),[N,C]=f.useState(!0),[k,E]=f.useState("light"),[j,M]=f.useState("modern"),[R,I]=f.useState("home"),[W,z]=f.useState("desk"),[V,ne]=f.useState(!1),[te,fe]=f.useState(0),[ae,he]=f.useState([]),[me,ge]=f.useState(null),[J,Q]=f.useState([]),[_,B]=f.useState([]),[q,A]=f.useState(!1),[U,H]=f.useState(!1),[G,re]=f.useState(!1),[X,O]=f.useState(null),[K,ue]=f.useState(()=>localStorage.getItem("hasSeenWalkthrough")==="true");f.useEffect(()=>{const de=ye=>{ye.shiftKey&&ye.metaKey&&ye.key==="o"&&(ye.preventDefault(),Y()),ye.metaKey&&ye.key==="k"&&(ye.preventDefault(),A(!0))};return window.addEventListener("keydown",de),()=>window.removeEventListener("keydown",de)},[]),f.useEffect(()=>{n&&window.history.pushState({authenticated:!0},"");const de=()=>{r(!1),a(!1)};return window.addEventListener("popstate",de),()=>window.removeEventListener("popstate",de)},[n]);const pe=y&&b===y.id?y:h&&b===h.id?h:b.startsWith("new-")?{id:b,title:b==="new-cce-sn"?"C(CE) Chat":b==="new-cce-sh"?"SH Chat":"New Chat",messages:[],createdAt:new Date,classificationType:b==="new-cce-sn"?"cce-sn":b==="new-cce-sh"?"cce-sh":"rsn"}:p.find(de=>de.id===b),Re=N,Oe=async de=>{if(!pe)return;let ye=p,Ae=b;const ze={id:Date.now().toString(),role:"user",content:de,timestamp:new Date};if(y&&b===y.id)x({...y,messages:[...y.messages,ze]});else if(b.startsWith("preview-")&&h){const Ue=Date.now().toString(),lt={id:(Date.now()-1).toString(),role:"assistant",content:At(h.assistantType||""),timestamp:new Date};ye=[{...h,id:Ue,messages:[lt,ze],classificationType:"rsn"},...p],m(ye),v(null),S(Ue),Ae=Ue}else if(b.startsWith("new-")){const Ue=Date.now().toString(),lt={...pe,id:Ue,title:de.slice(0,30),messages:[ze],classificationType:pe.classificationType};pe.classificationType==="cce-sn"||pe.classificationType==="cce-sh"?(x(lt),Ae=Ue,S(Ue)):(ye=[lt,...p],m(ye),S(Ue),Ae=Ue)}else ye=p.map(Ue=>{if(Ue.id===b){const lt=[...Ue.messages,ze];return{...Ue,messages:lt,title:Ue.messages.length===0?de.slice(0,30):Ue.title}}return Ue}),m(ye);setTimeout(()=>{const Ue=y&&Ae===y.id?y:ye.find(kt=>kt.id===Ae);if(!Ue)return;let lt=vR(de,Ue.assistantType,c),gn=!1,Wt="";Ue.assistantType==="transcribe"&&de.includes("[Uploaded file:")&&(lt="I've transcribed your audio file and generated the meeting minutes.",gn=!0,Wt="Meeting_Minutes_"+new Date().toLocaleDateString().replace(/\//g,"-")+".doc");const Vt={id:(Date.now()+1).toString(),role:"assistant",content:lt,timestamp:new Date,hasFile:gn,fileName:Wt};y&&Ae===y.id?x(kt=>kt&&{...kt,messages:[...kt.messages,Vt]}):m(kt=>kt.map(ie=>ie.id===Ae?{...ie,messages:[...ie.messages,Vt]}:ie))},500)},Y=()=>{v(null),x(null),S("new-rsn"),I("home"),fe(de=>de+1)},je=(de,ye,Ae)=>{if(de.toLowerCase().includes("generate")){oe("canvas-demo");return}const ze=Date.now().toString(),Ue={id:ze,role:"user",content:de,timestamp:new Date},lt={id:ze,title:de.slice(0,30),messages:[Ue],createdAt:new Date,classificationType:ye||"rsn",isIncognito:Ae||!1},gn=ye==="cce-sn"||ye==="cce-sh";if(Ae||gn)x(lt);else{const Wt=[lt,...p];m(Wt)}S(ze),I("chat"),setTimeout(()=>{const Wt={id:(Date.now()+1).toString(),role:"assistant",content:"This is a simulated response for demonstration purposes.",timestamp:new Date};Ae||gn?x(Vt=>Vt&&Vt.id===ze?{...Vt,messages:[...Vt.messages,Wt]}:Vt):m(Vt=>Vt.map(kt=>kt.id===ze?{...kt,messages:[...kt.messages,Wt]}:kt))},500)},Qe=()=>{S("new-cce-sn"),I("chat")},mt=()=>{S("new-cce-sh"),I("chat")},At=de=>({"email-drafter":"I'll help you draft professional emails. What kind of email would you like to write?",query:"Ask me anything! I can help you find information and answer your questions.",transcribe:"Upload an audio file to generate meeting minutes.","deep-research-ai":"I can conduct comprehensive research for you. What topic would you like me to explore?",powerpoint:"I can help you create icons and pictures for your PowerPoint slides. What would you like me to generate?",parliamentary:"I'll help you prepare PQ responses and talking points. What do you need assistance with?",memo:"I can draft inter-agency correspondence for whole-of-government initiatives. What memo do you need?","social-media-campaign":"I'll help you plan and optimize social media campaigns. What's your campaign about?","content-calendar":"I can help you organize and schedule content across channels. What's your timeline?","brand-guidelines":"I'll ensure your content aligns with government branding standards. What do you need to review?","market-research":"I can analyze market trends and public sentiment. What would you like to research?","interview-questions":"I'll generate relevant interview questions. What position are you hiring for?","onboarding-guide":"I can create personalized onboarding plans. Tell me about your new hire.","performance-review":"I'll help you draft performance reviews and development plans. Who are you reviewing?",budget:"I can help with budget allocations and financial reports. What's your budget planning needs?",policy:"I'll help you draft policy papers and cabinet memos. What policy document do you need?",procurement:"I can generate tender documents and evaluation matrices. What procurement need do you have?"})[de]||"Hello! How can I assist you today?",st=(de,ye)=>{if(ye==="workday-shortlister"){oe("hr-candidate-shortlisting");return}if(ye==="parliamentary-question"){oe("pq-response-mnd");return}const Ae=`preview-${Date.now()}`;v({id:Ae,title:de,messages:[],createdAt:new Date,assistantType:ye}),S(Ae),I("chat")},nn=de=>{const ye=p.filter(Ae=>Ae.id!==de);m(ye),he(ae.map(Ae=>({...Ae,chatIds:Ae.chatIds.filter(ze=>ze!==de)}))),b===de&&(ye.length>0?S(ye[0].id):Y())},Bt=(de,ye)=>{m(p.map(Ae=>Ae.id===de?{...Ae,title:ye}:Ae))},Je=de=>{v(null),x(null),S(de),I("chat")},rn=()=>{a(!0),setTimeout(()=>{H(!0)},500)},Tt=()=>{r(!1),a(!1),d({name:"John Doe",email:"john.doe@tech.gov.sg",role:"Product Manager",agency:"GovTech"}),m([]),I("home"),S("new-rsn")},$n=(de,ye)=>{d(de),r(!0),ye&&(a(!0),m([]))},oe=de=>{_.includes(de)||B([..._,de]),S(`sim-${de}`),I("chat")},Ke=de=>{const ye={id:Date.now().toString(),name:de,createdAt:new Date,chatIds:[],memoriesScope:"folder-only"};he([...ae,ye]),ge(ye.id),I("folder")},et=de=>{Q(ye=>ye.includes(de)?ye.filter(Ae=>Ae!==de):ye.length>=3?(O(de),re(!0),ye):[...ye,de])},Ye=(de,ye)=>{Q(Ae=>Ae.map(ze=>ze===de?ye:ze)),O(null)},Nn=(de,ye)=>{he(ae.map(Ae=>Ae.id===ye&&!Ae.chatIds.includes(de)?{...Ae,chatIds:[...Ae.chatIds,de]}:Ae))},Ht=de=>{const ye=Date.now().toString();m([{id:ye,title:"New Chat",messages:[],createdAt:new Date},...p]),he(ae.map(ze=>ze.id===de?{...ze,chatIds:[...ze.chatIds,ye]}:ze)),S(ye),I("chat")},jn=(de,ye)=>{he(ae.map(Ae=>Ae.id===de?{...Ae,...ye}:Ae))},ho=de=>{ge(de),I("folder")},bs=de=>{he(ae.filter(ye=>ye.id!==de)),me===de&&(ge(null),I("home"))},ws=(de,ye)=>{he(ae.map(Ae=>Ae.id===de?{...Ae,chatIds:Ae.chatIds.filter(ze=>ze!==ye)}:Ae))},Ss=me?ae.find(de=>de.id===me):null,mr=b.startsWith("sim-"),gr=mr?b==="sim-feature-overview"?aR:b==="sim-customer-support"?lR:b==="sim-feedback-collection"?cR:b==="sim-hr-candidate-shortlisting"?dR:b==="sim-procurement-rfq"?uR:b==="sim-marketing-software-aor"?pR:b==="sim-pq-response-mnd"?fR:b==="sim-pq-response-mnd-v2"?mR:b==="sim-canvas-demo"?gR:null:null;return n?s?o.jsxs("div",{className:"flex h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-950 dark:to-blue-950",children:[o.jsx(ZP,{isOpen:Re,onClose:()=>C(!N),chats:p,activeChatId:b,onSelectChat:Je,onNewChat:Y,onNewCCESNChat:Qe,onNewSHChat:mt,onDeleteChat:nn,onRenameChat:Bt,colorTheme:k,fontStyle:j,onColorThemeChange:E,onFontStyleChange:M,onSettingsOpen:()=>ne(!0),mode:W,onModeChange:z,activeView:R,onExploreClick:()=>{I("explore"),S("new-rsn")},onStudioClick:()=>I("studio"),onHomeClick:()=>{I("home"),S("new-rsn")},onViewChange:de=>{I(de),de!=="chat"&&S("new-rsn")},userProfile:c,onSignOut:Tt,onSelectSimulation:oe,folders:ae,onCreateFolder:Ke,onSelectFolder:ho,onStartAssistantChat:st,onAddChatToFolder:Nn,searchModalOpen:q,onSearchModalChange:A,onWalkthroughStart:()=>{R!=="home"&&(I("home"),S("new-rsn"),fe(de=>de+1)),H(!0)},viewedSimulations:_,bookmarkedAssistants:J}),R==="chat"?mr&&gr?o.jsx("div",{className:"flex-1 flex flex-col",children:o.jsx(ih,{mode:"simulator",data:gr},b)}):o.jsx("div",{className:"flex-1 flex flex-col",children:o.jsx(ih,{mode:"interactive",title:pe?.title,classificationType:pe?.classificationType,interactiveMessages:pe?.messages||[],onSendMessage:Oe,chatId:pe?.id,onRenameChat:Bt,isNewChat:b.startsWith("new-"),isIncognito:pe?.isIncognito,folders:ae,onMoveToFolder:Nn,bookmarkedAssistants:J,assistantType:pe?.assistantType},b)}):R==="explore"?o.jsx(t3,{colorTheme:k,fontStyle:j,onStartAssistantChat:st,userRole:c?.role,bookmarkedAssistants:J,onToggleBookmark:et}):R==="studio"?o.jsx(n3,{colorTheme:k,fontStyle:j}):R==="library"?o.jsx(q3,{colorTheme:k,fontStyle:j}):R==="chats"?o.jsx(Y3,{colorTheme:k,fontStyle:j,chats:p,onSelectChat:Je,onDeleteChat:nn,onSelectSimulation:oe}):R==="folder"&&Ss?o.jsx(sR,{folder:Ss,chats:p,onBack:()=>I("home"),onSelectChat:Je,onDeleteFolder:bs,onRemoveChatFromFolder:ws,onStartNewChatInFolder:Ht,onUpdateFolder:jn}):o.jsx(sE,{colorTheme:k,fontStyle:j,onSelectChat:Je,onNewChat:Y,onStartChat:je,isSidebarOpen:N,userProfile:c,onSelectSimulation:oe,bookmarkedAssistants:J},te),o.jsx(EE,{colorTheme:k,fontStyle:j,onColorThemeChange:E,onFontStyleChange:M,userProfile:c,onUpdateProfile:d,open:V,onOpenChange:ne}),o.jsx(oR,{isOpen:U,onClose:()=>H(!1)}),o.jsx(iR,{open:G,onOpenChange:re,newAssistant:(()=>{if(!X)return null;const de=Object.values(di).flat(),ye=[...ci,...li,...de];return Array.from(new Map(ye.map(ze=>[ze.id,ze])).values()).find(ze=>ze.id===X)||null})(),bookmarkedAssistants:(()=>{const de=Object.values(di).flat(),ye=[...ci,...li,...de],Ae=Array.from(new Map(ye.map(ze=>[ze.id,ze])).values());return J.map(ze=>Ae.find(Ue=>Ue.id===ze)).filter(ze=>ze!==void 0)})(),onSwap:Ye})]}):o.jsx(pE,{userProfile:c,onUpdateProfile:d,onComplete:rn}):o.jsx(oE,{onLogin:$n})}function vR(n,r,s){if(r==="transcribe"&&(n.toLowerCase().includes("what was the follow up")||n.toLowerCase().includes("follow-up")||n.toLowerCase().includes("action")))return`Based on the meeting minutes, here are the follow-up actions:

1. **John** - Prepare Q3 budget proposal by Friday
2. **Sarah** - Schedule follow-up meeting with design team
3. **Mike** - Review and approve the marketing materials by EOW
4. **Team** - Complete customer feedback survey analysis by next Monday
5. **Lisa** - Send out meeting notes to all stakeholders

All action items have been assigned with clear deadlines.`;const a=s?`Hi ${s.name}! `:"",c=s?.role?` As a ${s.role}, `:"",d=[`${a}I'm a demo AI assistant. In a real implementation, this would connect to an AI API like OpenAI's GPT model to generate responses.${c}you might find this helpful for your work.`,`${a}This is a mock response. To get real AI responses, you would need to integrate with an AI service.`,`${a}I understand you said: "`+n+'". This is a simulated response for demonstration purposes.',`Thanks for your message${s?", "+s.name:""}! This interface mimics ChatGPT, but the responses are pre-generated for demo purposes.`];return d[Math.floor(Math.random()*d.length)]}fw.createRoot(document.getElementById("root")).render(o.jsx(hR,{}));
