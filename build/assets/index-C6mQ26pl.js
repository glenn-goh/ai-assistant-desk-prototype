function ow(n,r){for(var s=0;s<r.length;s++){const a=r[s];if(typeof a!="string"&&!Array.isArray(a)){for(const c in a)if(c!=="default"&&!(c in n)){const d=Object.getOwnPropertyDescriptor(a,c);d&&Object.defineProperty(n,c,d.get?d:{enumerable:!0,get:()=>a[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function ih(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Cd={exports:{}},Uo={},kd={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function iw(){if(Gm)return He;Gm=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,C={};function k(A,U,B){this.props=A,this.context=U,this.refs=C,this.updater=B||S}k.prototype.isReactComponent={},k.prototype.setState=function(A,U){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,U,"setState")},k.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function P(){}P.prototype=k.prototype;function j(A,U,B){this.props=A,this.context=U,this.refs=C,this.updater=B||S}var M=j.prototype=new P;M.constructor=j,N(M,k.prototype),M.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,W={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function V(A,U,B){var q,oe={},K=null,O=null;if(U!=null)for(q in U.ref!==void 0&&(O=U.ref),U.key!==void 0&&(K=""+U.key),U)I.call(U,q)&&!z.hasOwnProperty(q)&&(oe[q]=U[q]);var X=arguments.length-2;if(X===1)oe.children=B;else if(1<X){for(var le=Array(X),he=0;he<X;he++)le[he]=arguments[he+2];oe.children=le}if(A&&A.defaultProps)for(q in X=A.defaultProps,X)oe[q]===void 0&&(oe[q]=X[q]);return{$$typeof:n,type:A,key:K,ref:O,props:oe,_owner:W.current}}function re(A,U){return{$$typeof:n,type:A.type,key:U,ref:A.ref,props:A.props,_owner:A._owner}}function Q(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function de(A){var U={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(B){return U[B]})}var ie=/\/+/g;function me(A,U){return typeof A=="object"&&A!==null&&A.key!=null?de(""+A.key):U.toString(36)}function ue(A,U,B,q,oe){var K=typeof A;(K==="undefined"||K==="boolean")&&(A=null);var O=!1;if(A===null)O=!0;else switch(K){case"string":case"number":O=!0;break;case"object":switch(A.$$typeof){case n:case r:O=!0}}if(O)return O=A,oe=oe(O),A=q===""?"."+me(O,0):q,R(oe)?(B="",A!=null&&(B=A.replace(ie,"$&/")+"/"),ue(oe,U,B,"",function(he){return he})):oe!=null&&(Q(oe)&&(oe=re(oe,B+(!oe.key||O&&O.key===oe.key?"":(""+oe.key).replace(ie,"$&/")+"/")+A)),U.push(oe)),1;if(O=0,q=q===""?".":q+":",R(A))for(var X=0;X<A.length;X++){K=A[X];var le=q+me(K,X);O+=ue(K,U,B,le,oe)}else if(le=b(A),typeof le=="function")for(A=le.call(A),X=0;!(K=A.next()).done;)K=K.value,le=q+me(K,X++),O+=ue(K,U,B,le,oe);else if(K==="object")throw U=String(A),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return O}function fe(A,U,B){if(A==null)return A;var q=[],oe=0;return ue(A,q,"","",function(K){return U.call(B,K,oe++)}),q}function ee(A){if(A._status===-1){var U=A._result;U=U(),U.then(function(B){(A._status===0||A._status===-1)&&(A._status=1,A._result=B)},function(B){(A._status===0||A._status===-1)&&(A._status=2,A._result=B)}),A._status===-1&&(A._status=0,A._result=U)}if(A._status===1)return A._result.default;throw A._result}var Y={current:null},_={transition:null},H={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:_,ReactCurrentOwner:W};function J(){throw Error("act(...) is not supported in production builds of React.")}return He.Children={map:fe,forEach:function(A,U,B){fe(A,function(){U.apply(this,arguments)},B)},count:function(A){var U=0;return fe(A,function(){U++}),U},toArray:function(A){return fe(A,function(U){return U})||[]},only:function(A){if(!Q(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},He.Component=k,He.Fragment=s,He.Profiler=c,He.PureComponent=j,He.StrictMode=a,He.Suspense=h,He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,He.act=J,He.cloneElement=function(A,U,B){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var q=N({},A.props),oe=A.key,K=A.ref,O=A._owner;if(U!=null){if(U.ref!==void 0&&(K=U.ref,O=W.current),U.key!==void 0&&(oe=""+U.key),A.type&&A.type.defaultProps)var X=A.type.defaultProps;for(le in U)I.call(U,le)&&!z.hasOwnProperty(le)&&(q[le]=U[le]===void 0&&X!==void 0?X[le]:U[le])}var le=arguments.length-2;if(le===1)q.children=B;else if(1<le){X=Array(le);for(var he=0;he<le;he++)X[he]=arguments[he+2];q.children=X}return{$$typeof:n,type:A.type,key:oe,ref:K,props:q,_owner:O}},He.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:d,_context:A},A.Consumer=A},He.createElement=V,He.createFactory=function(A){var U=V.bind(null,A);return U.type=A,U},He.createRef=function(){return{current:null}},He.forwardRef=function(A){return{$$typeof:m,render:A}},He.isValidElement=Q,He.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:ee}},He.memo=function(A,U){return{$$typeof:v,type:A,compare:U===void 0?null:U}},He.startTransition=function(A){var U=_.transition;_.transition={};try{A()}finally{_.transition=U}},He.unstable_act=J,He.useCallback=function(A,U){return Y.current.useCallback(A,U)},He.useContext=function(A){return Y.current.useContext(A)},He.useDebugValue=function(){},He.useDeferredValue=function(A){return Y.current.useDeferredValue(A)},He.useEffect=function(A,U){return Y.current.useEffect(A,U)},He.useId=function(){return Y.current.useId()},He.useImperativeHandle=function(A,U,B){return Y.current.useImperativeHandle(A,U,B)},He.useInsertionEffect=function(A,U){return Y.current.useInsertionEffect(A,U)},He.useLayoutEffect=function(A,U){return Y.current.useLayoutEffect(A,U)},He.useMemo=function(A,U){return Y.current.useMemo(A,U)},He.useReducer=function(A,U,B){return Y.current.useReducer(A,U,B)},He.useRef=function(A){return Y.current.useRef(A)},He.useState=function(A){return Y.current.useState(A)},He.useSyncExternalStore=function(A,U,B){return Y.current.useSyncExternalStore(A,U,B)},He.useTransition=function(){return Y.current.useTransition()},He.version="18.3.1",He}var Qm;function yu(){return Qm||(Qm=1,kd.exports=iw()),kd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function aw(){if(qm)return Uo;qm=1;var n=yu(),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(m,h,v){var y,x={},b=null,S=null;v!==void 0&&(b=""+v),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(S=h.ref);for(y in h)a.call(h,y)&&!d.hasOwnProperty(y)&&(x[y]=h[y]);if(m&&m.defaultProps)for(y in h=m.defaultProps,h)x[y]===void 0&&(x[y]=h[y]);return{$$typeof:r,type:m,key:b,ref:S,props:x,_owner:c.current}}return Uo.Fragment=s,Uo.jsx=p,Uo.jsxs=p,Uo}var Km;function lw(){return Km||(Km=1,Cd.exports=aw()),Cd.exports}var o=lw(),Ra={},Nd={exports:{}},Yt={},jd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function cw(){return Ym||(Ym=1,(function(n){function r(_,H){var J=_.length;_.push(H);e:for(;0<J;){var A=J-1>>>1,U=_[A];if(0<c(U,H))_[A]=H,_[J]=U,J=A;else break e}}function s(_){return _.length===0?null:_[0]}function a(_){if(_.length===0)return null;var H=_[0],J=_.pop();if(J!==H){_[0]=J;e:for(var A=0,U=_.length,B=U>>>1;A<B;){var q=2*(A+1)-1,oe=_[q],K=q+1,O=_[K];if(0>c(oe,J))K<U&&0>c(O,oe)?(_[A]=O,_[K]=J,A=K):(_[A]=oe,_[q]=J,A=q);else if(K<U&&0>c(O,J))_[A]=O,_[K]=J,A=K;else break e}}return H}function c(_,H){var J=_.sortIndex-H.sortIndex;return J!==0?J:_.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var p=Date,m=p.now();n.unstable_now=function(){return p.now()-m}}var h=[],v=[],y=1,x=null,b=3,S=!1,N=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(_){for(var H=s(v);H!==null;){if(H.callback===null)a(v);else if(H.startTime<=_)a(v),H.sortIndex=H.expirationTime,r(h,H);else break;H=s(v)}}function R(_){if(C=!1,M(_),!N)if(s(h)!==null)N=!0,ee(I);else{var H=s(v);H!==null&&Y(R,H.startTime-_)}}function I(_,H){N=!1,C&&(C=!1,P(V),V=-1),S=!0;var J=b;try{for(M(H),x=s(h);x!==null&&(!(x.expirationTime>H)||_&&!de());){var A=x.callback;if(typeof A=="function"){x.callback=null,b=x.priorityLevel;var U=A(x.expirationTime<=H);H=n.unstable_now(),typeof U=="function"?x.callback=U:x===s(h)&&a(h),M(H)}else a(h);x=s(h)}if(x!==null)var B=!0;else{var q=s(v);q!==null&&Y(R,q.startTime-H),B=!1}return B}finally{x=null,b=J,S=!1}}var W=!1,z=null,V=-1,re=5,Q=-1;function de(){return!(n.unstable_now()-Q<re)}function ie(){if(z!==null){var _=n.unstable_now();Q=_;var H=!0;try{H=z(!0,_)}finally{H?me():(W=!1,z=null)}}else W=!1}var me;if(typeof j=="function")me=function(){j(ie)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=ie,me=function(){fe.postMessage(null)}}else me=function(){k(ie,0)};function ee(_){z=_,W||(W=!0,me())}function Y(_,H){V=k(function(){_(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(_){_.callback=null},n.unstable_continueExecution=function(){N||S||(N=!0,ee(I))},n.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<_?Math.floor(1e3/_):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return s(h)},n.unstable_next=function(_){switch(b){case 1:case 2:case 3:var H=3;break;default:H=b}var J=b;b=H;try{return _()}finally{b=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(_,H){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var J=b;b=_;try{return H()}finally{b=J}},n.unstable_scheduleCallback=function(_,H,J){var A=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?A+J:A):J=A,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=J+U,_={id:y++,callback:H,priorityLevel:_,startTime:J,expirationTime:U,sortIndex:-1},J>A?(_.sortIndex=J,r(v,_),s(h)===null&&_===s(v)&&(C?(P(V),V=-1):C=!0,Y(R,J-A))):(_.sortIndex=U,r(h,_),N||S||(N=!0,ee(I))),_},n.unstable_shouldYield=de,n.unstable_wrapCallback=function(_){var H=b;return function(){var J=b;b=H;try{return _.apply(this,arguments)}finally{b=J}}}})(Pd)),Pd}var Xm;function dw(){return Xm||(Xm=1,jd.exports=cw()),jd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function uw(){if(Jm)return Yt;Jm=1;var n=yu(),r=dw();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function d(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(c[e]=t,e=0;e<t.length;e++)a.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function b(e){return h.call(x,e)?!0:h.call(y,e)?!1:v.test(e)?x[e]=!0:(y[e]=!0,!1)}function S(e,t,i,l){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,t,i,l){if(t===null||typeof t>"u"||S(e,t,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,i,l,u,g,w){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=g,this.removeEmptyString=w}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function j(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,j);k[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,j);k[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,j);k[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,t,i,l){var u=k.hasOwnProperty(t)?k[t]:null;(u!==null?u.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N(t,i,u,l)&&(i=null),l||u===null?b(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(t=u.attributeName,l=u.attributeNamespace,i===null?e.removeAttribute(t):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,l?e.setAttributeNS(l,t,i):e.setAttribute(t,i))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),W=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),de=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),_=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,A;function U(e){if(A===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var B=!1;function q(e,t){if(!e||B)return"";B=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch($){var l=$}Reflect.construct(e,[],t)}else{try{t.call()}catch($){l=$}e.call(t.prototype)}else{try{throw Error()}catch($){l=$}e()}}catch($){if($&&l&&typeof $.stack=="string"){for(var u=$.stack.split(`
`),g=l.stack.split(`
`),w=u.length-1,E=g.length-1;1<=w&&0<=E&&u[w]!==g[E];)E--;for(;1<=w&&0<=E;w--,E--)if(u[w]!==g[E]){if(w!==1||E!==1)do if(w--,E--,0>E||u[w]!==g[E]){var T=`
`+u[w].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=w&&0<=E);break}}}finally{B=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?U(e):""}function oe(e){switch(e.tag){case 5:return U(e.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function K(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case W:return"Portal";case re:return"Profiler";case V:return"StrictMode";case me:return"Suspense";case ue:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case de:return(e.displayName||"Context")+".Consumer";case Q:return(e._context.displayName||"Context")+".Provider";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fe:return t=e.displayName||null,t!==null?t:K(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return K(e(t))}catch{}}return null}function O(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function X(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function he(e){var t=le(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,g=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,g.call(this,w)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ee(e){e._valueTracker||(e._valueTracker=he(e))}function Re(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=le(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function Z(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function je(e,t){var i=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ge(e,t){var i=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;i=X(t.value!=null?t.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pt(e,t){t=t.checked,t!=null&&M(e,"checked",t,!1)}function vt(e,t){pt(e,t);var i=X(t.value),l=t.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dn(e,t.type,i):t.hasOwnProperty("defaultValue")&&dn(e,t.type,X(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function at(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function dn(e,t,i){(t!=="number"||Z(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Vt=Array.isArray;function Xe(e,t,i,l){if(e=e.options,t){t={};for(var u=0;u<i.length;u++)t["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=t.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&l&&(e[i].defaultSelected=!0)}else{for(i=""+X(i),t=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function $t(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ce(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(s(92));if(Vt(i)){if(1<i.length)throw Error(s(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:X(i)}}function Je(e,t){var i=X(t.value),l=X(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function et(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ke(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ke(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var un,ur=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,l,u){MSApp.execUnsafeLocalFunction(function(){return e(t,i,l,u)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(un=un||document.createElement("div"),un.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=un.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _n(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zt=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Zt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function xe(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Pe(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var l=i.indexOf("--")===0,u=xe(i,t[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,u):e[i]=u}}var _e=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(e,t){if(t){if(_e[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Ve(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function Ht(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var en=null,wt=null,G=null;function pe(e){if(e=Ao(e)){if(typeof en!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Vi(t),en(e.stateNode,e.type,t))}}function De(e){wt?G?G.push(e):G=[e]:wt=e}function ct(){if(wt){var e=wt,t=G;if(G=wt=null,pe(e),t)for(e=0;e<t.length;e++)pe(t[e])}}function gs(e,t){return e(t)}function pp(){}var $l=!1;function fp(e,t,i){if($l)return e(t,i);$l=!0;try{return gs(e,t,i)}finally{$l=!1,(wt!==null||G!==null)&&(pp(),ct())}}function lo(e,t){var i=e.stateNode;if(i===null)return null;var l=Vi(i);if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,t,typeof i));return i}var Hl=!1;if(m)try{var co={};Object.defineProperty(co,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Hl=!1}function uy(e,t,i,l,u,g,w,E,T){var $=Array.prototype.slice.call(arguments,3);try{t.apply(i,$)}catch(ne){this.onError(ne)}}var uo=!1,Si=null,Ci=!1,Bl=null,py={onError:function(e){uo=!0,Si=e}};function fy(e,t,i,l,u,g,w,E,T){uo=!1,Si=null,uy.apply(py,arguments)}function my(e,t,i,l,u,g,w,E,T){if(fy.apply(this,arguments),uo){if(uo){var $=Si;uo=!1,Si=null}else throw Error(s(198));Ci||(Ci=!0,Bl=$)}}function $r(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function mp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gp(e){if($r(e)!==e)throw Error(s(188))}function gy(e){var t=e.alternate;if(!t){if(t=$r(e),t===null)throw Error(s(188));return t!==e?null:e}for(var i=e,l=t;;){var u=i.return;if(u===null)break;var g=u.alternate;if(g===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===g.child){for(g=u.child;g;){if(g===i)return gp(u),e;if(g===l)return gp(u),t;g=g.sibling}throw Error(s(188))}if(i.return!==l.return)i=u,l=g;else{for(var w=!1,E=u.child;E;){if(E===i){w=!0,i=u,l=g;break}if(E===l){w=!0,l=u,i=g;break}E=E.sibling}if(!w){for(E=g.child;E;){if(E===i){w=!0,i=g,l=u;break}if(E===l){w=!0,l=g,i=u;break}E=E.sibling}if(!w)throw Error(s(189))}}if(i.alternate!==l)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:t}function hp(e){return e=gy(e),e!==null?vp(e):null}function vp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vp(e);if(t!==null)return t;e=e.sibling}return null}var xp=r.unstable_scheduleCallback,yp=r.unstable_cancelCallback,hy=r.unstable_shouldYield,vy=r.unstable_requestPaint,gt=r.unstable_now,xy=r.unstable_getCurrentPriorityLevel,Wl=r.unstable_ImmediatePriority,bp=r.unstable_UserBlockingPriority,ki=r.unstable_NormalPriority,yy=r.unstable_LowPriority,wp=r.unstable_IdlePriority,Ni=null,On=null;function by(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:Cy,wy=Math.log,Sy=Math.LN2;function Cy(e){return e>>>=0,e===0?32:31-(wy(e)/Sy|0)|0}var ji=64,Pi=4194304;function po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ei(e,t){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,g=e.pingedLanes,w=i&268435455;if(w!==0){var E=w&~u;E!==0?l=po(E):(g&=w,g!==0&&(l=po(g)))}else w=i&~u,w!==0?l=po(w):g!==0&&(l=po(g));if(l===0)return 0;if(t!==0&&t!==l&&(t&u)===0&&(u=l&-l,g=t&-t,u>=g||u===16&&(g&4194240)!==0))return t;if((l&4)!==0&&(l|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)i=31-wn(t),u=1<<i,l|=e[i],t&=~u;return l}function ky(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ny(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,g=e.pendingLanes;0<g;){var w=31-wn(g),E=1<<w,T=u[w];T===-1?((E&i)===0||(E&l)!==0)&&(u[w]=ky(E,t)):T<=t&&(e.expiredLanes|=E),g&=~E}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sp(){var e=ji;return ji<<=1,(ji&4194240)===0&&(ji=64),e}function Ul(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function fo(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wn(t),e[t]=i}function jy(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-wn(i),g=1<<u;t[u]=0,l[u]=-1,e[u]=-1,i&=~g}}function Gl(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-wn(i),u=1<<l;u&t|e[l]&t&&(e[l]|=t),i&=~u}}var Ye=0;function Cp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var kp,Ql,Np,jp,Pp,ql=!1,Ri=[],pr=null,fr=null,mr=null,mo=new Map,go=new Map,gr=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(e,t){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(t.pointerId)}}function ho(e,t,i,l,u,g){return e===null||e.nativeEvent!==g?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:g,targetContainers:[u]},t!==null&&(t=Ao(t),t!==null&&Ql(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Ey(e,t,i,l,u){switch(t){case"focusin":return pr=ho(pr,e,t,i,l,u),!0;case"dragenter":return fr=ho(fr,e,t,i,l,u),!0;case"mouseover":return mr=ho(mr,e,t,i,l,u),!0;case"pointerover":var g=u.pointerId;return mo.set(g,ho(mo.get(g)||null,e,t,i,l,u)),!0;case"gotpointercapture":return g=u.pointerId,go.set(g,ho(go.get(g)||null,e,t,i,l,u)),!0}return!1}function Rp(e){var t=Hr(e.target);if(t!==null){var i=$r(t);if(i!==null){if(t=i.tag,t===13){if(t=mp(i),t!==null){e.blockedOn=t,Pp(e.priority,function(){Np(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);At=l,i.target.dispatchEvent(l),At=null}else return t=Ao(i),t!==null&&Ql(t),e.blockedOn=i,!1;t.shift()}return!0}function Ap(e,t,i){Ai(e)&&i.delete(t)}function Ry(){ql=!1,pr!==null&&Ai(pr)&&(pr=null),fr!==null&&Ai(fr)&&(fr=null),mr!==null&&Ai(mr)&&(mr=null),mo.forEach(Ap),go.forEach(Ap)}function vo(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ry)))}function xo(e){function t(u){return vo(u,e)}if(0<Ri.length){vo(Ri[0],e);for(var i=1;i<Ri.length;i++){var l=Ri[i];l.blockedOn===e&&(l.blockedOn=null)}}for(pr!==null&&vo(pr,e),fr!==null&&vo(fr,e),mr!==null&&vo(mr,e),mo.forEach(t),go.forEach(t),i=0;i<gr.length;i++)l=gr[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<gr.length&&(i=gr[0],i.blockedOn===null);)Rp(i),i.blockedOn===null&&gr.shift()}var hs=R.ReactCurrentBatchConfig,Ti=!0;function Ay(e,t,i,l){var u=Ye,g=hs.transition;hs.transition=null;try{Ye=1,Kl(e,t,i,l)}finally{Ye=u,hs.transition=g}}function Ty(e,t,i,l){var u=Ye,g=hs.transition;hs.transition=null;try{Ye=4,Kl(e,t,i,l)}finally{Ye=u,hs.transition=g}}function Kl(e,t,i,l){if(Ti){var u=Yl(e,t,i,l);if(u===null)fc(e,t,l,Mi,i),Ep(e,l);else if(Ey(u,e,t,i,l))l.stopPropagation();else if(Ep(e,l),t&4&&-1<Py.indexOf(e)){for(;u!==null;){var g=Ao(u);if(g!==null&&kp(g),g=Yl(e,t,i,l),g===null&&fc(e,t,l,Mi,i),g===u)break;u=g}u!==null&&l.stopPropagation()}else fc(e,t,l,null,i)}}var Mi=null;function Yl(e,t,i,l){if(Mi=null,e=Ht(l),e=Hr(e),e!==null)if(t=$r(e),t===null)e=null;else if(i=t.tag,i===13){if(e=mp(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function Tp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xy()){case Wl:return 1;case bp:return 4;case ki:case yy:return 16;case wp:return 536870912;default:return 16}default:return 16}}var hr=null,Xl=null,Ii=null;function Mp(){if(Ii)return Ii;var e,t=Xl,i=t.length,l,u="value"in hr?hr.value:hr.textContent,g=u.length;for(e=0;e<i&&t[e]===u[e];e++);var w=i-e;for(l=1;l<=w&&t[i-l]===u[g-l];l++);return Ii=u.slice(e,1<l?1-l:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function Ip(){return!1}function tn(e){function t(i,l,u,g,w){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(i=e[E],this[E]=i?i(g):g[E]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Di:Ip,this.isPropagationStopped=Ip,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=tn(vs),yo=J({},vs,{view:0,detail:0}),My=tn(yo),Zl,ec,bo,Oi=J({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(Zl=e.screenX-bo.screenX,ec=e.screenY-bo.screenY):ec=Zl=0,bo=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:ec}}),_p=tn(Oi),Iy=J({},Oi,{dataTransfer:0}),_y=tn(Iy),Dy=J({},yo,{relatedTarget:0}),tc=tn(Dy),Oy=J({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=tn(Oy),zy=J({},vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fy=tn(zy),$y=J({},vs,{data:0}),Dp=tn($y),Hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},By={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wy[e])?!!t[e]:!1}function nc(){return Vy}var Uy=J({},yo,{key:function(e){if(e.key){var t=Hy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?By[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gy=tn(Uy),Qy=J({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=tn(Qy),qy=J({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),Ky=tn(qy),Yy=J({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=tn(Yy),Jy=J({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=tn(Jy),eb=[9,13,27,32],rc=m&&"CompositionEvent"in window,wo=null;m&&"documentMode"in document&&(wo=document.documentMode);var tb=m&&"TextEvent"in window&&!wo,Lp=m&&(!rc||wo&&8<wo&&11>=wo),zp=" ",Fp=!1;function $p(e,t){switch(e){case"keyup":return eb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xs=!1;function nb(e,t){switch(e){case"compositionend":return Hp(t);case"keypress":return t.which!==32?null:(Fp=!0,zp);case"textInput":return e=t.data,e===zp&&Fp?null:e;default:return null}}function rb(e,t){if(xs)return e==="compositionend"||!rc&&$p(e,t)?(e=Mp(),Ii=Xl=hr=null,xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lp&&t.locale!=="ko"?null:t.data;default:return null}}var sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sb[e.type]:t==="textarea"}function Wp(e,t,i,l){De(l),t=Hi(t,"onChange"),0<t.length&&(i=new Jl("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var So=null,Co=null;function ob(e){lf(e,0)}function Li(e){var t=Cs(e);if(Re(t))return e}function ib(e,t){if(e==="change")return t}var Vp=!1;if(m){var sc;if(m){var oc="oninput"in document;if(!oc){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),oc=typeof Up.oninput=="function"}sc=oc}else sc=!1;Vp=sc&&(!document.documentMode||9<document.documentMode)}function Gp(){So&&(So.detachEvent("onpropertychange",Qp),Co=So=null)}function Qp(e){if(e.propertyName==="value"&&Li(Co)){var t=[];Wp(t,Co,e,Ht(e)),fp(ob,t)}}function ab(e,t,i){e==="focusin"?(Gp(),So=t,Co=i,So.attachEvent("onpropertychange",Qp)):e==="focusout"&&Gp()}function lb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Co)}function cb(e,t){if(e==="click")return Li(t)}function db(e,t){if(e==="input"||e==="change")return Li(t)}function ub(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Sn=typeof Object.is=="function"?Object.is:ub;function ko(e,t){if(Sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!h.call(t,u)||!Sn(e[u],t[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kp(e,t){var i=qp(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=qp(i)}}function Yp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xp(){for(var e=window,t=Z();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Z(e.document)}return t}function ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pb(e){var t=Xp(),i=e.focusedElem,l=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Yp(i.ownerDocument.documentElement,i)){if(l!==null&&ic(i)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,g=Math.min(l.start,u);l=l.end===void 0?g:Math.min(l.end,u),!e.extend&&g>l&&(u=l,l=g,g=u),u=Kp(i,g);var w=Kp(i,l);u&&w&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==w.node||e.focusOffset!==w.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),g>l?(e.addRange(t),e.extend(w.node,w.offset)):(t.setEnd(w.node,w.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fb=m&&"documentMode"in document&&11>=document.documentMode,ys=null,ac=null,No=null,lc=!1;function Jp(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;lc||ys==null||ys!==Z(l)||(l=ys,"selectionStart"in l&&ic(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&ko(No,l)||(No=l,l=Hi(ac,"onSelect"),0<l.length&&(t=new Jl("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=ys)))}function zi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var bs={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},cc={},Zp={};m&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Fi(e){if(cc[e])return cc[e];if(!bs[e])return e;var t=bs[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Zp)return cc[e]=t[i];return e}var ef=Fi("animationend"),tf=Fi("animationiteration"),nf=Fi("animationstart"),rf=Fi("transitionend"),sf=new Map,of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(e,t){sf.set(e,t),d(t,[e])}for(var dc=0;dc<of.length;dc++){var uc=of[dc],mb=uc.toLowerCase(),gb=uc[0].toUpperCase()+uc.slice(1);vr(mb,"on"+gb)}vr(ef,"onAnimationEnd"),vr(tf,"onAnimationIteration"),vr(nf,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(rf,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hb=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function af(e,t,i){var l=e.type||"unknown-event";e.currentTarget=i,my(l,t,void 0,e),e.currentTarget=null}function lf(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],u=l.event;l=l.listeners;e:{var g=void 0;if(t)for(var w=l.length-1;0<=w;w--){var E=l[w],T=E.instance,$=E.currentTarget;if(E=E.listener,T!==g&&u.isPropagationStopped())break e;af(u,E,$),g=T}else for(w=0;w<l.length;w++){if(E=l[w],T=E.instance,$=E.currentTarget,E=E.listener,T!==g&&u.isPropagationStopped())break e;af(u,E,$),g=T}}}if(Ci)throw e=Bl,Ci=!1,Bl=null,e}function tt(e,t){var i=t[yc];i===void 0&&(i=t[yc]=new Set);var l=e+"__bubble";i.has(l)||(cf(t,e,2,!1),i.add(l))}function pc(e,t,i){var l=0;t&&(l|=4),cf(i,e,l,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[$i]){e[$i]=!0,a.forEach(function(i){i!=="selectionchange"&&(hb.has(i)||pc(i,!1,e),pc(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,pc("selectionchange",!1,t))}}function cf(e,t,i,l){switch(Tp(t)){case 1:var u=Ay;break;case 4:u=Ty;break;default:u=Kl}i=u.bind(null,t,i,e),u=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,i,{capture:!0,passive:u}):e.addEventListener(t,i,!0):u!==void 0?e.addEventListener(t,i,{passive:u}):e.addEventListener(t,i,!1)}function fc(e,t,i,l,u){var g=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var E=l.stateNode.containerInfo;if(E===u||E.nodeType===8&&E.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var T=w.tag;if((T===3||T===4)&&(T=w.stateNode.containerInfo,T===u||T.nodeType===8&&T.parentNode===u))return;w=w.return}for(;E!==null;){if(w=Hr(E),w===null)return;if(T=w.tag,T===5||T===6){l=g=w;continue e}E=E.parentNode}}l=l.return}fp(function(){var $=g,ne=Ht(i),se=[];e:{var te=sf.get(e);if(te!==void 0){var ve=Jl,be=e;switch(e){case"keypress":if(_i(i)===0)break e;case"keydown":case"keyup":ve=Gy;break;case"focusin":be="focus",ve=tc;break;case"focusout":be="blur",ve=tc;break;case"beforeblur":case"afterblur":ve=tc;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=Ky;break;case ef:case tf:case nf:ve=Ly;break;case rf:ve=Xy;break;case"scroll":ve=My;break;case"wheel":ve=Zy;break;case"copy":case"cut":case"paste":ve=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=Op}var Ce=(t&4)!==0,ht=!Ce&&e==="scroll",L=Ce?te!==null?te+"Capture":null:te;Ce=[];for(var D=$,F;D!==null;){F=D;var ae=F.stateNode;if(F.tag===5&&ae!==null&&(F=ae,L!==null&&(ae=lo(D,L),ae!=null&&Ce.push(Eo(D,ae,F)))),ht)break;D=D.return}0<Ce.length&&(te=new ve(te,be,null,i,ne),se.push({event:te,listeners:Ce}))}}if((t&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",te&&i!==At&&(be=i.relatedTarget||i.fromElement)&&(Hr(be)||be[Jn]))break e;if((ve||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,ve?(be=i.relatedTarget||i.toElement,ve=$,be=be?Hr(be):null,be!==null&&(ht=$r(be),be!==ht||be.tag!==5&&be.tag!==6)&&(be=null)):(ve=null,be=$),ve!==be)){if(Ce=_p,ae="onMouseLeave",L="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=Op,ae="onPointerLeave",L="onPointerEnter",D="pointer"),ht=ve==null?te:Cs(ve),F=be==null?te:Cs(be),te=new Ce(ae,D+"leave",ve,i,ne),te.target=ht,te.relatedTarget=F,ae=null,Hr(ne)===$&&(Ce=new Ce(L,D+"enter",be,i,ne),Ce.target=F,Ce.relatedTarget=ht,ae=Ce),ht=ae,ve&&be)t:{for(Ce=ve,L=be,D=0,F=Ce;F;F=ws(F))D++;for(F=0,ae=L;ae;ae=ws(ae))F++;for(;0<D-F;)Ce=ws(Ce),D--;for(;0<F-D;)L=ws(L),F--;for(;D--;){if(Ce===L||L!==null&&Ce===L.alternate)break t;Ce=ws(Ce),L=ws(L)}Ce=null}else Ce=null;ve!==null&&df(se,te,ve,Ce,!1),be!==null&&ht!==null&&df(se,ht,be,Ce,!0)}}e:{if(te=$?Cs($):window,ve=te.nodeName&&te.nodeName.toLowerCase(),ve==="select"||ve==="input"&&te.type==="file")var Ne=ib;else if(Bp(te))if(Vp)Ne=db;else{Ne=lb;var Ae=ab}else(ve=te.nodeName)&&ve.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(Ne=cb);if(Ne&&(Ne=Ne(e,$))){Wp(se,Ne,i,ne);break e}Ae&&Ae(e,te,$),e==="focusout"&&(Ae=te._wrapperState)&&Ae.controlled&&te.type==="number"&&dn(te,"number",te.value)}switch(Ae=$?Cs($):window,e){case"focusin":(Bp(Ae)||Ae.contentEditable==="true")&&(ys=Ae,ac=$,No=null);break;case"focusout":No=ac=ys=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,Jp(se,i,ne);break;case"selectionchange":if(fb)break;case"keydown":case"keyup":Jp(se,i,ne)}var Te;if(rc)e:{switch(e){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else xs?$p(e,i)&&(Ie="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ie="onCompositionStart");Ie&&(Lp&&i.locale!=="ko"&&(xs||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&xs&&(Te=Mp()):(hr=ne,Xl="value"in hr?hr.value:hr.textContent,xs=!0)),Ae=Hi($,Ie),0<Ae.length&&(Ie=new Dp(Ie,e,null,i,ne),se.push({event:Ie,listeners:Ae}),Te?Ie.data=Te:(Te=Hp(i),Te!==null&&(Ie.data=Te)))),(Te=tb?nb(e,i):rb(e,i))&&($=Hi($,"onBeforeInput"),0<$.length&&(ne=new Dp("onBeforeInput","beforeinput",null,i,ne),se.push({event:ne,listeners:$}),ne.data=Te))}lf(se,t)})}function Eo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Hi(e,t){for(var i=t+"Capture",l=[];e!==null;){var u=e,g=u.stateNode;u.tag===5&&g!==null&&(u=g,g=lo(e,i),g!=null&&l.unshift(Eo(e,g,u)),g=lo(e,t),g!=null&&l.push(Eo(e,g,u))),e=e.return}return l}function ws(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function df(e,t,i,l,u){for(var g=t._reactName,w=[];i!==null&&i!==l;){var E=i,T=E.alternate,$=E.stateNode;if(T!==null&&T===l)break;E.tag===5&&$!==null&&(E=$,u?(T=lo(i,g),T!=null&&w.unshift(Eo(i,T,E))):u||(T=lo(i,g),T!=null&&w.push(Eo(i,T,E)))),i=i.return}w.length!==0&&e.push({event:t,listeners:w})}var vb=/\r\n?/g,xb=/\u0000|\uFFFD/g;function uf(e){return(typeof e=="string"?e:""+e).replace(vb,`
`).replace(xb,"")}function Bi(e,t,i){if(t=uf(t),uf(e)!==t&&i)throw Error(s(425))}function Wi(){}var mc=null,gc=null;function hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=typeof setTimeout=="function"?setTimeout:void 0,yb=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,bb=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(e){return pf.resolve(null).then(e).catch(wb)}:vc;function wb(e){setTimeout(function(){throw e})}function xc(e,t){var i=t,l=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(l===0){e.removeChild(u),xo(t);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=u}while(i);xo(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Ss,Ro="__reactProps$"+Ss,Jn="__reactContainer$"+Ss,yc="__reactEvents$"+Ss,Sb="__reactListeners$"+Ss,Cb="__reactHandles$"+Ss;function Hr(e){var t=e[Ln];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Jn]||i[Ln]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=ff(e);e!==null;){if(i=e[Ln])return i;e=ff(e)}return t}e=i,i=e.parentNode}return null}function Ao(e){return e=e[Ln]||e[Jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Vi(e){return e[Ro]||null}var bc=[],ks=-1;function yr(e){return{current:e}}function nt(e){0>ks||(e.current=bc[ks],bc[ks]=null,ks--)}function Ze(e,t){ks++,bc[ks]=e.current,e.current=t}var br={},_t=yr(br),Ut=yr(!1),Br=br;function Ns(e,t){var i=e.type.contextTypes;if(!i)return br;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var u={},g;for(g in i)u[g]=t[g];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function Gt(e){return e=e.childContextTypes,e!=null}function Ui(){nt(Ut),nt(_t)}function mf(e,t,i){if(_t.current!==br)throw Error(s(168));Ze(_t,t),Ze(Ut,i)}function gf(e,t,i){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var u in l)if(!(u in t))throw Error(s(108,O(e)||"Unknown",u));return J({},i,l)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||br,Br=_t.current,Ze(_t,e),Ze(Ut,Ut.current),!0}function hf(e,t,i){var l=e.stateNode;if(!l)throw Error(s(169));i?(e=gf(e,t,Br),l.__reactInternalMemoizedMergedChildContext=e,nt(Ut),nt(_t),Ze(_t,e)):nt(Ut),Ze(Ut,i)}var Zn=null,Qi=!1,wc=!1;function vf(e){Zn===null?Zn=[e]:Zn.push(e)}function kb(e){Qi=!0,vf(e)}function wr(){if(!wc&&Zn!==null){wc=!0;var e=0,t=Ye;try{var i=Zn;for(Ye=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Zn=null,Qi=!1}catch(u){throw Zn!==null&&(Zn=Zn.slice(e+1)),xp(Wl,wr),u}finally{Ye=t,wc=!1}}return null}var js=[],Ps=0,qi=null,Ki=0,pn=[],fn=0,Wr=null,er=1,tr="";function Vr(e,t){js[Ps++]=Ki,js[Ps++]=qi,qi=e,Ki=t}function xf(e,t,i){pn[fn++]=er,pn[fn++]=tr,pn[fn++]=Wr,Wr=e;var l=er;e=tr;var u=32-wn(l)-1;l&=~(1<<u),i+=1;var g=32-wn(t)+u;if(30<g){var w=u-u%5;g=(l&(1<<w)-1).toString(32),l>>=w,u-=w,er=1<<32-wn(t)+u|i<<u|l,tr=g+e}else er=1<<g|i<<u|l,tr=e}function Sc(e){e.return!==null&&(Vr(e,1),xf(e,1,0))}function Cc(e){for(;e===qi;)qi=js[--Ps],js[Ps]=null,Ki=js[--Ps],js[Ps]=null;for(;e===Wr;)Wr=pn[--fn],pn[fn]=null,tr=pn[--fn],pn[fn]=null,er=pn[--fn],pn[fn]=null}var nn=null,rn=null,lt=!1,Cn=null;function yf(e,t){var i=vn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function bf(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nn=e,rn=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nn=e,rn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Wr!==null?{id:er,overflow:tr}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=vn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,nn=e,rn=null,!0):!1;default:return!1}}function kc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nc(e){if(lt){var t=rn;if(t){var i=t;if(!bf(e,t)){if(kc(e))throw Error(s(418));t=xr(i.nextSibling);var l=nn;t&&bf(e,t)?yf(l,i):(e.flags=e.flags&-4097|2,lt=!1,nn=e)}}else{if(kc(e))throw Error(s(418));e.flags=e.flags&-4097|2,lt=!1,nn=e}}}function wf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nn=e}function Yi(e){if(e!==nn)return!1;if(!lt)return wf(e),lt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hc(e.type,e.memoizedProps)),t&&(t=rn)){if(kc(e))throw Sf(),Error(s(418));for(;t;)yf(e,t),t=xr(t.nextSibling)}if(wf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){rn=xr(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}rn=null}}else rn=nn?xr(e.stateNode.nextSibling):null;return!0}function Sf(){for(var e=rn;e;)e=xr(e.nextSibling)}function Es(){rn=nn=null,lt=!1}function jc(e){Cn===null?Cn=[e]:Cn.push(e)}var Nb=R.ReactCurrentBatchConfig;function To(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(s(309));var l=i.stateNode}if(!l)throw Error(s(147,e));var u=l,g=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===g?t.ref:(t=function(w){var E=u.refs;w===null?delete E[g]:E[g]=w},t._stringRef=g,t)}if(typeof e!="string")throw Error(s(284));if(!i._owner)throw Error(s(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cf(e){var t=e._init;return t(e._payload)}function kf(e){function t(L,D){if(e){var F=L.deletions;F===null?(L.deletions=[D],L.flags|=16):F.push(D)}}function i(L,D){if(!e)return null;for(;D!==null;)t(L,D),D=D.sibling;return null}function l(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function u(L,D){return L=Rr(L,D),L.index=0,L.sibling=null,L}function g(L,D,F){return L.index=F,e?(F=L.alternate,F!==null?(F=F.index,F<D?(L.flags|=2,D):F):(L.flags|=2,D)):(L.flags|=1048576,D)}function w(L){return e&&L.alternate===null&&(L.flags|=2),L}function E(L,D,F,ae){return D===null||D.tag!==6?(D=vd(F,L.mode,ae),D.return=L,D):(D=u(D,F),D.return=L,D)}function T(L,D,F,ae){var Ne=F.type;return Ne===z?ne(L,D,F.props.children,ae,F.key):D!==null&&(D.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ee&&Cf(Ne)===D.type)?(ae=u(D,F.props),ae.ref=To(L,D,F),ae.return=L,ae):(ae=wa(F.type,F.key,F.props,null,L.mode,ae),ae.ref=To(L,D,F),ae.return=L,ae)}function $(L,D,F,ae){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=xd(F,L.mode,ae),D.return=L,D):(D=u(D,F.children||[]),D.return=L,D)}function ne(L,D,F,ae,Ne){return D===null||D.tag!==7?(D=Jr(F,L.mode,ae,Ne),D.return=L,D):(D=u(D,F),D.return=L,D)}function se(L,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=vd(""+D,L.mode,F),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case I:return F=wa(D.type,D.key,D.props,null,L.mode,F),F.ref=To(L,null,D),F.return=L,F;case W:return D=xd(D,L.mode,F),D.return=L,D;case ee:var ae=D._init;return se(L,ae(D._payload),F)}if(Vt(D)||H(D))return D=Jr(D,L.mode,F,null),D.return=L,D;Xi(L,D)}return null}function te(L,D,F,ae){var Ne=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return Ne!==null?null:E(L,D,""+F,ae);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case I:return F.key===Ne?T(L,D,F,ae):null;case W:return F.key===Ne?$(L,D,F,ae):null;case ee:return Ne=F._init,te(L,D,Ne(F._payload),ae)}if(Vt(F)||H(F))return Ne!==null?null:ne(L,D,F,ae,null);Xi(L,F)}return null}function ve(L,D,F,ae,Ne){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return L=L.get(F)||null,E(D,L,""+ae,Ne);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:return L=L.get(ae.key===null?F:ae.key)||null,T(D,L,ae,Ne);case W:return L=L.get(ae.key===null?F:ae.key)||null,$(D,L,ae,Ne);case ee:var Ae=ae._init;return ve(L,D,F,Ae(ae._payload),Ne)}if(Vt(ae)||H(ae))return L=L.get(F)||null,ne(D,L,ae,Ne,null);Xi(D,ae)}return null}function be(L,D,F,ae){for(var Ne=null,Ae=null,Te=D,Ie=D=0,Pt=null;Te!==null&&Ie<F.length;Ie++){Te.index>Ie?(Pt=Te,Te=null):Pt=Te.sibling;var Ue=te(L,Te,F[Ie],ae);if(Ue===null){Te===null&&(Te=Pt);break}e&&Te&&Ue.alternate===null&&t(L,Te),D=g(Ue,D,Ie),Ae===null?Ne=Ue:Ae.sibling=Ue,Ae=Ue,Te=Pt}if(Ie===F.length)return i(L,Te),lt&&Vr(L,Ie),Ne;if(Te===null){for(;Ie<F.length;Ie++)Te=se(L,F[Ie],ae),Te!==null&&(D=g(Te,D,Ie),Ae===null?Ne=Te:Ae.sibling=Te,Ae=Te);return lt&&Vr(L,Ie),Ne}for(Te=l(L,Te);Ie<F.length;Ie++)Pt=ve(Te,L,Ie,F[Ie],ae),Pt!==null&&(e&&Pt.alternate!==null&&Te.delete(Pt.key===null?Ie:Pt.key),D=g(Pt,D,Ie),Ae===null?Ne=Pt:Ae.sibling=Pt,Ae=Pt);return e&&Te.forEach(function(Ar){return t(L,Ar)}),lt&&Vr(L,Ie),Ne}function Ce(L,D,F,ae){var Ne=H(F);if(typeof Ne!="function")throw Error(s(150));if(F=Ne.call(F),F==null)throw Error(s(151));for(var Ae=Ne=null,Te=D,Ie=D=0,Pt=null,Ue=F.next();Te!==null&&!Ue.done;Ie++,Ue=F.next()){Te.index>Ie?(Pt=Te,Te=null):Pt=Te.sibling;var Ar=te(L,Te,Ue.value,ae);if(Ar===null){Te===null&&(Te=Pt);break}e&&Te&&Ar.alternate===null&&t(L,Te),D=g(Ar,D,Ie),Ae===null?Ne=Ar:Ae.sibling=Ar,Ae=Ar,Te=Pt}if(Ue.done)return i(L,Te),lt&&Vr(L,Ie),Ne;if(Te===null){for(;!Ue.done;Ie++,Ue=F.next())Ue=se(L,Ue.value,ae),Ue!==null&&(D=g(Ue,D,Ie),Ae===null?Ne=Ue:Ae.sibling=Ue,Ae=Ue);return lt&&Vr(L,Ie),Ne}for(Te=l(L,Te);!Ue.done;Ie++,Ue=F.next())Ue=ve(Te,L,Ie,Ue.value,ae),Ue!==null&&(e&&Ue.alternate!==null&&Te.delete(Ue.key===null?Ie:Ue.key),D=g(Ue,D,Ie),Ae===null?Ne=Ue:Ae.sibling=Ue,Ae=Ue);return e&&Te.forEach(function(sw){return t(L,sw)}),lt&&Vr(L,Ie),Ne}function ht(L,D,F,ae){if(typeof F=="object"&&F!==null&&F.type===z&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case I:e:{for(var Ne=F.key,Ae=D;Ae!==null;){if(Ae.key===Ne){if(Ne=F.type,Ne===z){if(Ae.tag===7){i(L,Ae.sibling),D=u(Ae,F.props.children),D.return=L,L=D;break e}}else if(Ae.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ee&&Cf(Ne)===Ae.type){i(L,Ae.sibling),D=u(Ae,F.props),D.ref=To(L,Ae,F),D.return=L,L=D;break e}i(L,Ae);break}else t(L,Ae);Ae=Ae.sibling}F.type===z?(D=Jr(F.props.children,L.mode,ae,F.key),D.return=L,L=D):(ae=wa(F.type,F.key,F.props,null,L.mode,ae),ae.ref=To(L,D,F),ae.return=L,L=ae)}return w(L);case W:e:{for(Ae=F.key;D!==null;){if(D.key===Ae)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){i(L,D.sibling),D=u(D,F.children||[]),D.return=L,L=D;break e}else{i(L,D);break}else t(L,D);D=D.sibling}D=xd(F,L.mode,ae),D.return=L,L=D}return w(L);case ee:return Ae=F._init,ht(L,D,Ae(F._payload),ae)}if(Vt(F))return be(L,D,F,ae);if(H(F))return Ce(L,D,F,ae);Xi(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(i(L,D.sibling),D=u(D,F),D.return=L,L=D):(i(L,D),D=vd(F,L.mode,ae),D.return=L,L=D),w(L)):i(L,D)}return ht}var Rs=kf(!0),Nf=kf(!1),Ji=yr(null),Zi=null,As=null,Pc=null;function Ec(){Pc=As=Zi=null}function Rc(e){var t=Ji.current;nt(Ji),e._currentValue=t}function Ac(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function Ts(e,t){Zi=e,Pc=As=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qt=!0),e.firstContext=null)}function mn(e){var t=e._currentValue;if(Pc!==e)if(e={context:e,memoizedValue:t,next:null},As===null){if(Zi===null)throw Error(s(308));As=e,Zi.dependencies={lanes:0,firstContext:e}}else As=As.next=e;return t}var Ur=null;function Tc(e){Ur===null?Ur=[e]:Ur.push(e)}function jf(e,t,i,l){var u=t.interleaved;return u===null?(i.next=i,Tc(t)):(i.next=u.next,u.next=i),t.interleaved=i,nr(e,l)}function nr(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Sr=!1;function Mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(We&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,nr(e,i)}return u=l.interleaved,u===null?(t.next=t,Tc(l)):(t.next=u.next,u.next=t),l.interleaved=t,nr(e,i)}function ea(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Gl(e,i)}}function Ef(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,g=null;if(i=i.firstBaseUpdate,i!==null){do{var w={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};g===null?u=g=w:g=g.next=w,i=i.next}while(i!==null);g===null?u=g=t:g=g.next=t}else u=g=t;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:g,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function ta(e,t,i,l){var u=e.updateQueue;Sr=!1;var g=u.firstBaseUpdate,w=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var T=E,$=T.next;T.next=null,w===null?g=$:w.next=$,w=T;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,E=ne.lastBaseUpdate,E!==w&&(E===null?ne.firstBaseUpdate=$:E.next=$,ne.lastBaseUpdate=T))}if(g!==null){var se=u.baseState;w=0,ne=$=T=null,E=g;do{var te=E.lane,ve=E.eventTime;if((l&te)===te){ne!==null&&(ne=ne.next={eventTime:ve,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var be=e,Ce=E;switch(te=t,ve=i,Ce.tag){case 1:if(be=Ce.payload,typeof be=="function"){se=be.call(ve,se,te);break e}se=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Ce.payload,te=typeof be=="function"?be.call(ve,se,te):be,te==null)break e;se=J({},se,te);break e;case 2:Sr=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,te=u.effects,te===null?u.effects=[E]:te.push(E))}else ve={eventTime:ve,lane:te,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ne===null?($=ne=ve,T=se):ne=ne.next=ve,w|=te;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;te=E,E=te.next,te.next=null,u.lastBaseUpdate=te,u.shared.pending=null}}while(!0);if(ne===null&&(T=se),u.baseState=T,u.firstBaseUpdate=$,u.lastBaseUpdate=ne,t=u.shared.interleaved,t!==null){u=t;do w|=u.lane,u=u.next;while(u!==t)}else g===null&&(u.shared.lanes=0);qr|=w,e.lanes=w,e.memoizedState=se}}function Rf(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],u=l.callback;if(u!==null){if(l.callback=null,l=i,typeof u!="function")throw Error(s(191,u));u.call(l)}}}var Mo={},zn=yr(Mo),Io=yr(Mo),_o=yr(Mo);function Gr(e){if(e===Mo)throw Error(s(174));return e}function Ic(e,t){switch(Ze(_o,t),Ze(Io,e),Ze(zn,Mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xn(t,e)}nt(zn),Ze(zn,t)}function Ms(){nt(zn),nt(Io),nt(_o)}function Af(e){Gr(_o.current);var t=Gr(zn.current),i=Xn(t,e.type);t!==i&&(Ze(Io,e),Ze(zn,i))}function _c(e){Io.current===e&&(nt(zn),nt(Io))}var dt=yr(0);function na(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dc=[];function Oc(){for(var e=0;e<Dc.length;e++)Dc[e]._workInProgressVersionPrimary=null;Dc.length=0}var ra=R.ReactCurrentDispatcher,Lc=R.ReactCurrentBatchConfig,Qr=0,ut=null,St=null,Nt=null,sa=!1,Do=!1,Oo=0,jb=0;function Dt(){throw Error(s(321))}function zc(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Sn(e[i],t[i]))return!1;return!0}function Fc(e,t,i,l,u,g){if(Qr=g,ut=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ra.current=e===null||e.memoizedState===null?Ab:Tb,e=i(l,u),Do){g=0;do{if(Do=!1,Oo=0,25<=g)throw Error(s(301));g+=1,Nt=St=null,t.updateQueue=null,ra.current=Mb,e=i(l,u)}while(Do)}if(ra.current=aa,t=St!==null&&St.next!==null,Qr=0,Nt=St=ut=null,sa=!1,t)throw Error(s(300));return e}function $c(){var e=Oo!==0;return Oo=0,e}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ut.memoizedState=Nt=e:Nt=Nt.next=e,Nt}function gn(){if(St===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=Nt===null?ut.memoizedState:Nt.next;if(t!==null)Nt=t,St=e;else{if(e===null)throw Error(s(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Nt===null?ut.memoizedState=Nt=e:Nt=Nt.next=e}return Nt}function Lo(e,t){return typeof t=="function"?t(e):t}function Hc(e){var t=gn(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var l=St,u=l.baseQueue,g=i.pending;if(g!==null){if(u!==null){var w=u.next;u.next=g.next,g.next=w}l.baseQueue=u=g,i.pending=null}if(u!==null){g=u.next,l=l.baseState;var E=w=null,T=null,$=g;do{var ne=$.lane;if((Qr&ne)===ne)T!==null&&(T=T.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),l=$.hasEagerState?$.eagerState:e(l,$.action);else{var se={lane:ne,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};T===null?(E=T=se,w=l):T=T.next=se,ut.lanes|=ne,qr|=ne}$=$.next}while($!==null&&$!==g);T===null?w=l:T.next=E,Sn(l,t.memoizedState)||(Qt=!0),t.memoizedState=l,t.baseState=w,t.baseQueue=T,i.lastRenderedState=l}if(e=i.interleaved,e!==null){u=e;do g=u.lane,ut.lanes|=g,qr|=g,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Bc(e){var t=gn(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var l=i.dispatch,u=i.pending,g=t.memoizedState;if(u!==null){i.pending=null;var w=u=u.next;do g=e(g,w.action),w=w.next;while(w!==u);Sn(g,t.memoizedState)||(Qt=!0),t.memoizedState=g,t.baseQueue===null&&(t.baseState=g),i.lastRenderedState=g}return[g,l]}function Tf(){}function Mf(e,t){var i=ut,l=gn(),u=t(),g=!Sn(l.memoizedState,u);if(g&&(l.memoizedState=u,Qt=!0),l=l.queue,Wc(Df.bind(null,i,l,e),[e]),l.getSnapshot!==t||g||Nt!==null&&Nt.memoizedState.tag&1){if(i.flags|=2048,zo(9,_f.bind(null,i,l,u,t),void 0,null),jt===null)throw Error(s(349));(Qr&30)!==0||If(i,t,u)}return u}function If(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ut.updateQueue,t===null?(t={lastEffect:null,stores:null},ut.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function _f(e,t,i,l){t.value=i,t.getSnapshot=l,Of(t)&&Lf(e)}function Df(e,t,i){return i(function(){Of(t)&&Lf(e)})}function Of(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Sn(e,i)}catch{return!0}}function Lf(e){var t=nr(e,1);t!==null&&Pn(t,e,1,-1)}function zf(e){var t=Fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t.queue=e,e=e.dispatch=Rb.bind(null,ut,e),[t.memoizedState,e]}function zo(e,t,i,l){return e={tag:e,create:t,destroy:i,deps:l,next:null},t=ut.updateQueue,t===null?(t={lastEffect:null,stores:null},ut.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e)),e}function Ff(){return gn().memoizedState}function oa(e,t,i,l){var u=Fn();ut.flags|=e,u.memoizedState=zo(1|t,i,void 0,l===void 0?null:l)}function ia(e,t,i,l){var u=gn();l=l===void 0?null:l;var g=void 0;if(St!==null){var w=St.memoizedState;if(g=w.destroy,l!==null&&zc(l,w.deps)){u.memoizedState=zo(t,i,g,l);return}}ut.flags|=e,u.memoizedState=zo(1|t,i,g,l)}function $f(e,t){return oa(8390656,8,e,t)}function Wc(e,t){return ia(2048,8,e,t)}function Hf(e,t){return ia(4,2,e,t)}function Bf(e,t){return ia(4,4,e,t)}function Wf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vf(e,t,i){return i=i!=null?i.concat([e]):null,ia(4,4,Wf.bind(null,t,e),i)}function Vc(){}function Uf(e,t){var i=gn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&zc(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function Gf(e,t){var i=gn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&zc(t,l[1])?l[0]:(e=e(),i.memoizedState=[e,t],e)}function Qf(e,t,i){return(Qr&21)===0?(e.baseState&&(e.baseState=!1,Qt=!0),e.memoizedState=i):(Sn(i,t)||(i=Sp(),ut.lanes|=i,qr|=i,e.baseState=!0),t)}function Pb(e,t){var i=Ye;Ye=i!==0&&4>i?i:4,e(!0);var l=Lc.transition;Lc.transition={};try{e(!1),t()}finally{Ye=i,Lc.transition=l}}function qf(){return gn().memoizedState}function Eb(e,t,i){var l=Pr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Kf(e))Yf(t,i);else if(i=jf(e,t,i,l),i!==null){var u=Wt();Pn(i,e,l,u),Xf(i,t,l)}}function Rb(e,t,i){var l=Pr(e),u={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Yf(t,u);else{var g=e.alternate;if(e.lanes===0&&(g===null||g.lanes===0)&&(g=t.lastRenderedReducer,g!==null))try{var w=t.lastRenderedState,E=g(w,i);if(u.hasEagerState=!0,u.eagerState=E,Sn(E,w)){var T=t.interleaved;T===null?(u.next=u,Tc(t)):(u.next=T.next,T.next=u),t.interleaved=u;return}}catch{}finally{}i=jf(e,t,u,l),i!==null&&(u=Wt(),Pn(i,e,l,u),Xf(i,t,l))}}function Kf(e){var t=e.alternate;return e===ut||t!==null&&t===ut}function Yf(e,t){Do=sa=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Xf(e,t,i){if((i&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Gl(e,i)}}var aa={readContext:mn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Ab={readContext:mn,useCallback:function(e,t){return Fn().memoizedState=[e,t===void 0?null:t],e},useContext:mn,useEffect:$f,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,oa(4194308,4,Wf.bind(null,t,e),i)},useLayoutEffect:function(e,t){return oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return oa(4,2,e,t)},useMemo:function(e,t){var i=Fn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var l=Fn();return t=i!==void 0?i(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Eb.bind(null,ut,e),[l.memoizedState,e]},useRef:function(e){var t=Fn();return e={current:e},t.memoizedState=e},useState:zf,useDebugValue:Vc,useDeferredValue:function(e){return Fn().memoizedState=e},useTransition:function(){var e=zf(!1),t=e[0];return e=Pb.bind(null,e[1]),Fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var l=ut,u=Fn();if(lt){if(i===void 0)throw Error(s(407));i=i()}else{if(i=t(),jt===null)throw Error(s(349));(Qr&30)!==0||If(l,t,i)}u.memoizedState=i;var g={value:i,getSnapshot:t};return u.queue=g,$f(Df.bind(null,l,g,e),[e]),l.flags|=2048,zo(9,_f.bind(null,l,g,i,t),void 0,null),i},useId:function(){var e=Fn(),t=jt.identifierPrefix;if(lt){var i=tr,l=er;i=(l&~(1<<32-wn(l)-1)).toString(32)+i,t=":"+t+"R"+i,i=Oo++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=jb++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tb={readContext:mn,useCallback:Uf,useContext:mn,useEffect:Wc,useImperativeHandle:Vf,useInsertionEffect:Hf,useLayoutEffect:Bf,useMemo:Gf,useReducer:Hc,useRef:Ff,useState:function(){return Hc(Lo)},useDebugValue:Vc,useDeferredValue:function(e){var t=gn();return Qf(t,St.memoizedState,e)},useTransition:function(){var e=Hc(Lo)[0],t=gn().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Mf,useId:qf,unstable_isNewReconciler:!1},Mb={readContext:mn,useCallback:Uf,useContext:mn,useEffect:Wc,useImperativeHandle:Vf,useInsertionEffect:Hf,useLayoutEffect:Bf,useMemo:Gf,useReducer:Bc,useRef:Ff,useState:function(){return Bc(Lo)},useDebugValue:Vc,useDeferredValue:function(e){var t=gn();return St===null?t.memoizedState=e:Qf(t,St.memoizedState,e)},useTransition:function(){var e=Bc(Lo)[0],t=gn().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Mf,useId:qf,unstable_isNewReconciler:!1};function kn(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Uc(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:J({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var la={isMounted:function(e){return(e=e._reactInternals)?$r(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var l=Wt(),u=Pr(e),g=rr(l,u);g.payload=t,i!=null&&(g.callback=i),t=Cr(e,g,u),t!==null&&(Pn(t,e,u,l),ea(t,e,u))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=Wt(),u=Pr(e),g=rr(l,u);g.tag=1,g.payload=t,i!=null&&(g.callback=i),t=Cr(e,g,u),t!==null&&(Pn(t,e,u,l),ea(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Wt(),l=Pr(e),u=rr(i,l);u.tag=2,t!=null&&(u.callback=t),t=Cr(e,u,l),t!==null&&(Pn(t,e,l,i),ea(t,e,l))}};function Jf(e,t,i,l,u,g,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,g,w):t.prototype&&t.prototype.isPureReactComponent?!ko(i,l)||!ko(u,g):!0}function Zf(e,t,i){var l=!1,u=br,g=t.contextType;return typeof g=="object"&&g!==null?g=mn(g):(u=Gt(t)?Br:_t.current,l=t.contextTypes,g=(l=l!=null)?Ns(e,u):br),t=new t(i,g),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=la,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=g),t}function em(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&la.enqueueReplaceState(t,t.state,null)}function Gc(e,t,i,l){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},Mc(e);var g=t.contextType;typeof g=="object"&&g!==null?u.context=mn(g):(g=Gt(t)?Br:_t.current,u.context=Ns(e,g)),u.state=e.memoizedState,g=t.getDerivedStateFromProps,typeof g=="function"&&(Uc(e,t,g,i),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&la.enqueueReplaceState(u,u.state,null),ta(e,i,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Is(e,t){try{var i="",l=t;do i+=oe(l),l=l.return;while(l);var u=i}catch(g){u=`
Error generating stack: `+g.message+`
`+g.stack}return{value:e,source:t,stack:u,digest:null}}function Qc(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function qc(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Ib=typeof WeakMap=="function"?WeakMap:Map;function tm(e,t,i){i=rr(-1,i),i.tag=3,i.payload={element:null};var l=t.value;return i.callback=function(){ga||(ga=!0,cd=l),qc(e,t)},i}function nm(e,t,i){i=rr(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=t.value;i.payload=function(){return l(u)},i.callback=function(){qc(e,t)}}var g=e.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(i.callback=function(){qc(e,t),typeof l!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var w=t.stack;this.componentDidCatch(t.value,{componentStack:w!==null?w:""})}),i}function rm(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Ib;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(i)||(u.add(i),e=Qb.bind(null,e,t,i),t.then(e,e))}function sm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function om(e,t,i,l,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=rr(-1,1),t.tag=2,Cr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var _b=R.ReactCurrentOwner,Qt=!1;function Bt(e,t,i,l){t.child=e===null?Nf(t,null,i,l):Rs(t,e.child,i,l)}function im(e,t,i,l,u){i=i.render;var g=t.ref;return Ts(t,u),l=Fc(e,t,i,l,g,u),i=$c(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,sr(e,t,u)):(lt&&i&&Sc(t),t.flags|=1,Bt(e,t,l,u),t.child)}function am(e,t,i,l,u){if(e===null){var g=i.type;return typeof g=="function"&&!hd(g)&&g.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=g,lm(e,t,g,l,u)):(e=wa(i.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(g=e.child,(e.lanes&u)===0){var w=g.memoizedProps;if(i=i.compare,i=i!==null?i:ko,i(w,l)&&e.ref===t.ref)return sr(e,t,u)}return t.flags|=1,e=Rr(g,l),e.ref=t.ref,e.return=t,t.child=e}function lm(e,t,i,l,u){if(e!==null){var g=e.memoizedProps;if(ko(g,l)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=l=g,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Qt=!0);else return t.lanes=e.lanes,sr(e,t,u)}return Kc(e,t,i,l,u)}function cm(e,t,i){var l=t.pendingProps,u=l.children,g=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Ds,sn),sn|=i;else{if((i&1073741824)===0)return e=g!==null?g.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(Ds,sn),sn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:i,Ze(Ds,sn),sn|=l}else g!==null?(l=g.baseLanes|i,t.memoizedState=null):l=i,Ze(Ds,sn),sn|=l;return Bt(e,t,u,i),t.child}function dm(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Kc(e,t,i,l,u){var g=Gt(i)?Br:_t.current;return g=Ns(t,g),Ts(t,u),i=Fc(e,t,i,l,g,u),l=$c(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,sr(e,t,u)):(lt&&l&&Sc(t),t.flags|=1,Bt(e,t,i,u),t.child)}function um(e,t,i,l,u){if(Gt(i)){var g=!0;Gi(t)}else g=!1;if(Ts(t,u),t.stateNode===null)da(e,t),Zf(t,i,l),Gc(t,i,l,u),l=!0;else if(e===null){var w=t.stateNode,E=t.memoizedProps;w.props=E;var T=w.context,$=i.contextType;typeof $=="object"&&$!==null?$=mn($):($=Gt(i)?Br:_t.current,$=Ns(t,$));var ne=i.getDerivedStateFromProps,se=typeof ne=="function"||typeof w.getSnapshotBeforeUpdate=="function";se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(E!==l||T!==$)&&em(t,w,l,$),Sr=!1;var te=t.memoizedState;w.state=te,ta(t,l,w,u),T=t.memoizedState,E!==l||te!==T||Ut.current||Sr?(typeof ne=="function"&&(Uc(t,i,ne,l),T=t.memoizedState),(E=Sr||Jf(t,i,E,l,te,T,$))?(se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(t.flags|=4194308)):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),w.props=l,w.state=T,w.context=$,l=E):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{w=t.stateNode,Pf(e,t),E=t.memoizedProps,$=t.type===t.elementType?E:kn(t.type,E),w.props=$,se=t.pendingProps,te=w.context,T=i.contextType,typeof T=="object"&&T!==null?T=mn(T):(T=Gt(i)?Br:_t.current,T=Ns(t,T));var ve=i.getDerivedStateFromProps;(ne=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(E!==se||te!==T)&&em(t,w,l,T),Sr=!1,te=t.memoizedState,w.state=te,ta(t,l,w,u);var be=t.memoizedState;E!==se||te!==be||Ut.current||Sr?(typeof ve=="function"&&(Uc(t,i,ve,l),be=t.memoizedState),($=Sr||Jf(t,i,$,l,te,be,T)||!1)?(ne||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,be,T),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,be,T)),typeof w.componentDidUpdate=="function"&&(t.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof w.componentDidUpdate!="function"||E===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=be),w.props=l,w.state=be,w.context=T,l=$):(typeof w.componentDidUpdate!="function"||E===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),l=!1)}return Yc(e,t,i,l,g,u)}function Yc(e,t,i,l,u,g){dm(e,t);var w=(t.flags&128)!==0;if(!l&&!w)return u&&hf(t,i,!1),sr(e,t,g);l=t.stateNode,_b.current=t;var E=w&&typeof i.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&w?(t.child=Rs(t,e.child,null,g),t.child=Rs(t,null,E,g)):Bt(e,t,E,g),t.memoizedState=l.state,u&&hf(t,i,!0),t.child}function pm(e){var t=e.stateNode;t.pendingContext?mf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mf(e,t.context,!1),Ic(e,t.containerInfo)}function fm(e,t,i,l,u){return Es(),jc(u),t.flags|=256,Bt(e,t,i,l),t.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function Jc(e){return{baseLanes:e,cachePool:null,transitions:null}}function mm(e,t,i){var l=t.pendingProps,u=dt.current,g=!1,w=(t.flags&128)!==0,E;if((E=w)||(E=e!==null&&e.memoizedState===null?!1:(u&2)!==0),E?(g=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Ze(dt,u&1),e===null)return Nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(w=l.children,e=l.fallback,g?(l=t.mode,g=t.child,w={mode:"hidden",children:w},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Sa(w,l,0,null),e=Jr(e,l,i,null),g.return=t,e.return=t,g.sibling=e,t.child=g,t.child.memoizedState=Jc(i),t.memoizedState=Xc,e):Zc(t,w));if(u=e.memoizedState,u!==null&&(E=u.dehydrated,E!==null))return Db(e,t,w,l,E,u,i);if(g){g=l.fallback,w=t.mode,u=e.child,E=u.sibling;var T={mode:"hidden",children:l.children};return(w&1)===0&&t.child!==u?(l=t.child,l.childLanes=0,l.pendingProps=T,t.deletions=null):(l=Rr(u,T),l.subtreeFlags=u.subtreeFlags&14680064),E!==null?g=Rr(E,g):(g=Jr(g,w,i,null),g.flags|=2),g.return=t,l.return=t,l.sibling=g,t.child=l,l=g,g=t.child,w=e.child.memoizedState,w=w===null?Jc(i):{baseLanes:w.baseLanes|i,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=e.childLanes&~i,t.memoizedState=Xc,l}return g=e.child,e=g.sibling,l=Rr(g,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=i),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l}function Zc(e,t){return t=Sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ca(e,t,i,l){return l!==null&&jc(l),Rs(t,e.child,null,i),e=Zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Db(e,t,i,l,u,g,w){if(i)return t.flags&256?(t.flags&=-257,l=Qc(Error(s(422))),ca(e,t,w,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(g=l.fallback,u=t.mode,l=Sa({mode:"visible",children:l.children},u,0,null),g=Jr(g,u,w,null),g.flags|=2,l.return=t,g.return=t,l.sibling=g,t.child=l,(t.mode&1)!==0&&Rs(t,e.child,null,w),t.child.memoizedState=Jc(w),t.memoizedState=Xc,g);if((t.mode&1)===0)return ca(e,t,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var E=l.dgst;return l=E,g=Error(s(419)),l=Qc(g,l,void 0),ca(e,t,w,l)}if(E=(w&e.childLanes)!==0,Qt||E){if(l=jt,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==g.retryLane&&(g.retryLane=u,nr(e,u),Pn(l,e,u,-1))}return gd(),l=Qc(Error(s(421))),ca(e,t,w,l)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=qb.bind(null,e),u._reactRetry=t,null):(e=g.treeContext,rn=xr(u.nextSibling),nn=t,lt=!0,Cn=null,e!==null&&(pn[fn++]=er,pn[fn++]=tr,pn[fn++]=Wr,er=e.id,tr=e.overflow,Wr=t),t=Zc(t,l.children),t.flags|=4096,t)}function gm(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ac(e.return,t,i)}function ed(e,t,i,l,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=i,g.tailMode=u)}function hm(e,t,i){var l=t.pendingProps,u=l.revealOrder,g=l.tail;if(Bt(e,t,l.children,i),l=dt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gm(e,i,t);else if(e.tag===19)gm(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ze(dt,l),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(i=t.child,u=null;i!==null;)e=i.alternate,e!==null&&na(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=t.child,t.child=null):(u=i.sibling,i.sibling=null),ed(t,!1,u,i,g);break;case"backwards":for(i=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&na(e)===null){t.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}ed(t,!0,i,null,g);break;case"together":ed(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function da(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sr(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),qr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,i=Rr(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Rr(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Ob(e,t,i){switch(t.tag){case 3:pm(t),Es();break;case 5:Af(t);break;case 1:Gt(t.type)&&Gi(t);break;case 4:Ic(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,u=t.memoizedProps.value;Ze(Ji,l._currentValue),l._currentValue=u;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Ze(dt,dt.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?mm(e,t,i):(Ze(dt,dt.current&1),e=sr(e,t,i),e!==null?e.sibling:null);Ze(dt,dt.current&1);break;case 19:if(l=(i&t.childLanes)!==0,(e.flags&128)!==0){if(l)return hm(e,t,i);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ze(dt,dt.current),l)break;return null;case 22:case 23:return t.lanes=0,cm(e,t,i)}return sr(e,t,i)}var vm,td,xm,ym;vm=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},td=function(){},xm=function(e,t,i,l){var u=e.memoizedProps;if(u!==l){e=t.stateNode,Gr(zn.current);var g=null;switch(i){case"input":u=je(e,u),l=je(e,l),g=[];break;case"select":u=J({},u,{value:void 0}),l=J({},l,{value:void 0}),g=[];break;case"textarea":u=$t(e,u),l=$t(e,l),g=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Wi)}Qe(i,l);var w;i=null;for($ in u)if(!l.hasOwnProperty($)&&u.hasOwnProperty($)&&u[$]!=null)if($==="style"){var E=u[$];for(w in E)E.hasOwnProperty(w)&&(i||(i={}),i[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(c.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in l){var T=l[$];if(E=u?.[$],l.hasOwnProperty($)&&T!==E&&(T!=null||E!=null))if($==="style")if(E){for(w in E)!E.hasOwnProperty(w)||T&&T.hasOwnProperty(w)||(i||(i={}),i[w]="");for(w in T)T.hasOwnProperty(w)&&E[w]!==T[w]&&(i||(i={}),i[w]=T[w])}else i||(g||(g=[]),g.push($,i)),i=T;else $==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,E=E?E.__html:void 0,T!=null&&E!==T&&(g=g||[]).push($,T)):$==="children"?typeof T!="string"&&typeof T!="number"||(g=g||[]).push($,""+T):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(c.hasOwnProperty($)?(T!=null&&$==="onScroll"&&tt("scroll",e),g||E===T||(g=[])):(g=g||[]).push($,T))}i&&(g=g||[]).push("style",i);var $=g;(t.updateQueue=$)&&(t.flags|=4)}},ym=function(e,t,i,l){i!==l&&(t.flags|=4)};function Fo(e,t){if(!lt)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function Lb(e,t,i){var l=t.pendingProps;switch(Cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Gt(t.type)&&Ui(),Ot(t),null;case 3:return l=t.stateNode,Ms(),nt(Ut),nt(_t),Oc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cn!==null&&(pd(Cn),Cn=null))),td(e,t),Ot(t),null;case 5:_c(t);var u=Gr(_o.current);if(i=t.type,e!==null&&t.stateNode!=null)xm(e,t,i,l,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ot(t),null}if(e=Gr(zn.current),Yi(t)){l=t.stateNode,i=t.type;var g=t.memoizedProps;switch(l[Ln]=t,l[Ro]=g,e=(t.mode&1)!==0,i){case"dialog":tt("cancel",l),tt("close",l);break;case"iframe":case"object":case"embed":tt("load",l);break;case"video":case"audio":for(u=0;u<jo.length;u++)tt(jo[u],l);break;case"source":tt("error",l);break;case"img":case"image":case"link":tt("error",l),tt("load",l);break;case"details":tt("toggle",l);break;case"input":Ge(l,g),tt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},tt("invalid",l);break;case"textarea":ce(l,g),tt("invalid",l)}Qe(i,g),u=null;for(var w in g)if(g.hasOwnProperty(w)){var E=g[w];w==="children"?typeof E=="string"?l.textContent!==E&&(g.suppressHydrationWarning!==!0&&Bi(l.textContent,E,e),u=["children",E]):typeof E=="number"&&l.textContent!==""+E&&(g.suppressHydrationWarning!==!0&&Bi(l.textContent,E,e),u=["children",""+E]):c.hasOwnProperty(w)&&E!=null&&w==="onScroll"&&tt("scroll",l)}switch(i){case"input":Ee(l),at(l,g,!0);break;case"textarea":Ee(l),et(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=Wi)}l=u,t.updateQueue=l,l!==null&&(t.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ke(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=w.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=w.createElement(i,{is:l.is}):(e=w.createElement(i),i==="select"&&(w=e,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):e=w.createElementNS(e,i),e[Ln]=t,e[Ro]=l,vm(e,t,!1,!1),t.stateNode=e;e:{switch(w=Ve(i,l),i){case"dialog":tt("cancel",e),tt("close",e),u=l;break;case"iframe":case"object":case"embed":tt("load",e),u=l;break;case"video":case"audio":for(u=0;u<jo.length;u++)tt(jo[u],e);u=l;break;case"source":tt("error",e),u=l;break;case"img":case"image":case"link":tt("error",e),tt("load",e),u=l;break;case"details":tt("toggle",e),u=l;break;case"input":Ge(e,l),u=je(e,l),tt("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=J({},l,{value:void 0}),tt("invalid",e);break;case"textarea":ce(e,l),u=$t(e,l),tt("invalid",e);break;default:u=l}Qe(i,u),E=u;for(g in E)if(E.hasOwnProperty(g)){var T=E[g];g==="style"?Pe(e,T):g==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&ur(e,T)):g==="children"?typeof T=="string"?(i!=="textarea"||T!=="")&&_n(e,T):typeof T=="number"&&_n(e,""+T):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(c.hasOwnProperty(g)?T!=null&&g==="onScroll"&&tt("scroll",e):T!=null&&M(e,g,T,w))}switch(i){case"input":Ee(e),at(e,l,!1);break;case"textarea":Ee(e),et(e);break;case"option":l.value!=null&&e.setAttribute("value",""+X(l.value));break;case"select":e.multiple=!!l.multiple,g=l.value,g!=null?Xe(e,!!l.multiple,g,!1):l.defaultValue!=null&&Xe(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Wi)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)ym(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(i=Gr(_o.current),Gr(zn.current),Yi(t)){if(l=t.stateNode,i=t.memoizedProps,l[Ln]=t,(g=l.nodeValue!==i)&&(e=nn,e!==null))switch(e.tag){case 3:Bi(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bi(l.nodeValue,i,(e.mode&1)!==0)}g&&(t.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Ln]=t,t.stateNode=l}return Ot(t),null;case 13:if(nt(dt),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(lt&&rn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Sf(),Es(),t.flags|=98560,g=!1;else if(g=Yi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!g)throw Error(s(318));if(g=t.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(s(317));g[Ln]=t}else Es(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ot(t),g=!1}else Cn!==null&&(pd(Cn),Cn=null),g=!0;if(!g)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(dt.current&1)!==0?Ct===0&&(Ct=3):gd())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return Ms(),td(e,t),e===null&&Po(t.stateNode.containerInfo),Ot(t),null;case 10:return Rc(t.type._context),Ot(t),null;case 17:return Gt(t.type)&&Ui(),Ot(t),null;case 19:if(nt(dt),g=t.memoizedState,g===null)return Ot(t),null;if(l=(t.flags&128)!==0,w=g.rendering,w===null)if(l)Fo(g,!1);else{if(Ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(w=na(e),w!==null){for(t.flags|=128,Fo(g,!1),l=w.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=i,i=t.child;i!==null;)g=i,e=l,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=e,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,e=w.dependencies,g.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ze(dt,dt.current&1|2),t.child}e=e.sibling}g.tail!==null&&gt()>Os&&(t.flags|=128,l=!0,Fo(g,!1),t.lanes=4194304)}else{if(!l)if(e=na(w),e!==null){if(t.flags|=128,l=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Fo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!lt)return Ot(t),null}else 2*gt()-g.renderingStartTime>Os&&i!==1073741824&&(t.flags|=128,l=!0,Fo(g,!1),t.lanes=4194304);g.isBackwards?(w.sibling=t.child,t.child=w):(i=g.last,i!==null?i.sibling=w:t.child=w,g.last=w)}return g.tail!==null?(t=g.tail,g.rendering=t,g.tail=t.sibling,g.renderingStartTime=gt(),t.sibling=null,i=dt.current,Ze(dt,l?i&1|2:i&1),t):(Ot(t),null);case 22:case 23:return md(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(sn&1073741824)!==0&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function zb(e,t){switch(Cc(t),t.tag){case 1:return Gt(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ms(),nt(Ut),nt(_t),Oc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return _c(t),null;case 13:if(nt(dt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Es()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return nt(dt),null;case 4:return Ms(),null;case 10:return Rc(t.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var ua=!1,Lt=!1,Fb=typeof WeakSet=="function"?WeakSet:Set,ye=null;function _s(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){ft(e,t,l)}else i.current=null}function nd(e,t,i){try{i()}catch(l){ft(e,t,l)}}var bm=!1;function $b(e,t){if(mc=Ti,e=Xp(),ic(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{i.nodeType,g.nodeType}catch{i=null;break e}var w=0,E=-1,T=-1,$=0,ne=0,se=e,te=null;t:for(;;){for(var ve;se!==i||u!==0&&se.nodeType!==3||(E=w+u),se!==g||l!==0&&se.nodeType!==3||(T=w+l),se.nodeType===3&&(w+=se.nodeValue.length),(ve=se.firstChild)!==null;)te=se,se=ve;for(;;){if(se===e)break t;if(te===i&&++$===u&&(E=w),te===g&&++ne===l&&(T=w),(ve=se.nextSibling)!==null)break;se=te,te=se.parentNode}se=ve}i=E===-1||T===-1?null:{start:E,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(gc={focusedElem:e,selectionRange:i},Ti=!1,ye=t;ye!==null;)if(t=ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ye=e;else for(;ye!==null;){t=ye;try{var be=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(be!==null){var Ce=be.memoizedProps,ht=be.memoizedState,L=t.stateNode,D=L.getSnapshotBeforeUpdate(t.elementType===t.type?Ce:kn(t.type,Ce),ht);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=t.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(ae){ft(t,t.return,ae)}if(e=t.sibling,e!==null){e.return=t.return,ye=e;break}ye=t.return}return be=bm,bm=!1,be}function $o(e,t,i){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var g=u.destroy;u.destroy=void 0,g!==void 0&&nd(t,i,g)}u=u.next}while(u!==l)}}function pa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==t)}}function rd(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function wm(e){var t=e.alternate;t!==null&&(e.alternate=null,wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ln],delete t[Ro],delete t[yc],delete t[Sb],delete t[Cb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sm(e){return e.tag===5||e.tag===3||e.tag===4}function Cm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sd(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Wi));else if(l!==4&&(e=e.child,e!==null))for(sd(e,t,i),e=e.sibling;e!==null;)sd(e,t,i),e=e.sibling}function od(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(od(e,t,i),e=e.sibling;e!==null;)od(e,t,i),e=e.sibling}var Tt=null,Nn=!1;function kr(e,t,i){for(i=i.child;i!==null;)km(e,t,i),i=i.sibling}function km(e,t,i){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Ni,i)}catch{}switch(i.tag){case 5:Lt||_s(i,t);case 6:var l=Tt,u=Nn;Tt=null,kr(e,t,i),Tt=l,Nn=u,Tt!==null&&(Nn?(e=Tt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Tt.removeChild(i.stateNode));break;case 18:Tt!==null&&(Nn?(e=Tt,i=i.stateNode,e.nodeType===8?xc(e.parentNode,i):e.nodeType===1&&xc(e,i),xo(e)):xc(Tt,i.stateNode));break;case 4:l=Tt,u=Nn,Tt=i.stateNode.containerInfo,Nn=!0,kr(e,t,i),Tt=l,Nn=u;break;case 0:case 11:case 14:case 15:if(!Lt&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var g=u,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&nd(i,t,w),u=u.next}while(u!==l)}kr(e,t,i);break;case 1:if(!Lt&&(_s(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(E){ft(i,t,E)}kr(e,t,i);break;case 21:kr(e,t,i);break;case 22:i.mode&1?(Lt=(l=Lt)||i.memoizedState!==null,kr(e,t,i),Lt=l):kr(e,t,i);break;default:kr(e,t,i)}}function Nm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Fb),t.forEach(function(l){var u=Kb.bind(null,e,l);i.has(l)||(i.add(l),l.then(u,u))})}}function jn(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];try{var g=e,w=t,E=w;e:for(;E!==null;){switch(E.tag){case 5:Tt=E.stateNode,Nn=!1;break e;case 3:Tt=E.stateNode.containerInfo,Nn=!0;break e;case 4:Tt=E.stateNode.containerInfo,Nn=!0;break e}E=E.return}if(Tt===null)throw Error(s(160));km(g,w,u),Tt=null,Nn=!1;var T=u.alternate;T!==null&&(T.return=null),u.return=null}catch($){ft(u,t,$)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jm(t,e),t=t.sibling}function jm(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jn(t,e),$n(e),l&4){try{$o(3,e,e.return),pa(3,e)}catch(Ce){ft(e,e.return,Ce)}try{$o(5,e,e.return)}catch(Ce){ft(e,e.return,Ce)}}break;case 1:jn(t,e),$n(e),l&512&&i!==null&&_s(i,i.return);break;case 5:if(jn(t,e),$n(e),l&512&&i!==null&&_s(i,i.return),e.flags&32){var u=e.stateNode;try{_n(u,"")}catch(Ce){ft(e,e.return,Ce)}}if(l&4&&(u=e.stateNode,u!=null)){var g=e.memoizedProps,w=i!==null?i.memoizedProps:g,E=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{E==="input"&&g.type==="radio"&&g.name!=null&&pt(u,g),Ve(E,w);var $=Ve(E,g);for(w=0;w<T.length;w+=2){var ne=T[w],se=T[w+1];ne==="style"?Pe(u,se):ne==="dangerouslySetInnerHTML"?ur(u,se):ne==="children"?_n(u,se):M(u,ne,se,$)}switch(E){case"input":vt(u,g);break;case"textarea":Je(u,g);break;case"select":var te=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!g.multiple;var ve=g.value;ve!=null?Xe(u,!!g.multiple,ve,!1):te!==!!g.multiple&&(g.defaultValue!=null?Xe(u,!!g.multiple,g.defaultValue,!0):Xe(u,!!g.multiple,g.multiple?[]:"",!1))}u[Ro]=g}catch(Ce){ft(e,e.return,Ce)}}break;case 6:if(jn(t,e),$n(e),l&4){if(e.stateNode===null)throw Error(s(162));u=e.stateNode,g=e.memoizedProps;try{u.nodeValue=g}catch(Ce){ft(e,e.return,Ce)}}break;case 3:if(jn(t,e),$n(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{xo(t.containerInfo)}catch(Ce){ft(e,e.return,Ce)}break;case 4:jn(t,e),$n(e);break;case 13:jn(t,e),$n(e),u=e.child,u.flags&8192&&(g=u.memoizedState!==null,u.stateNode.isHidden=g,!g||u.alternate!==null&&u.alternate.memoizedState!==null||(ld=gt())),l&4&&Nm(e);break;case 22:if(ne=i!==null&&i.memoizedState!==null,e.mode&1?(Lt=($=Lt)||ne,jn(t,e),Lt=$):jn(t,e),$n(e),l&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!ne&&(e.mode&1)!==0)for(ye=e,ne=e.child;ne!==null;){for(se=ye=ne;ye!==null;){switch(te=ye,ve=te.child,te.tag){case 0:case 11:case 14:case 15:$o(4,te,te.return);break;case 1:_s(te,te.return);var be=te.stateNode;if(typeof be.componentWillUnmount=="function"){l=te,i=te.return;try{t=l,be.props=t.memoizedProps,be.state=t.memoizedState,be.componentWillUnmount()}catch(Ce){ft(l,i,Ce)}}break;case 5:_s(te,te.return);break;case 22:if(te.memoizedState!==null){Rm(se);continue}}ve!==null?(ve.return=te,ye=ve):Rm(se)}ne=ne.sibling}e:for(ne=null,se=e;;){if(se.tag===5){if(ne===null){ne=se;try{u=se.stateNode,$?(g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(E=se.stateNode,T=se.memoizedProps.style,w=T!=null&&T.hasOwnProperty("display")?T.display:null,E.style.display=xe("display",w))}catch(Ce){ft(e,e.return,Ce)}}}else if(se.tag===6){if(ne===null)try{se.stateNode.nodeValue=$?"":se.memoizedProps}catch(Ce){ft(e,e.return,Ce)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===e)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===e)break e;for(;se.sibling===null;){if(se.return===null||se.return===e)break e;ne===se&&(ne=null),se=se.return}ne===se&&(ne=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:jn(t,e),$n(e),l&4&&Nm(e);break;case 21:break;default:jn(t,e),$n(e)}}function $n(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Sm(i)){var l=i;break e}i=i.return}throw Error(s(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(_n(u,""),l.flags&=-33);var g=Cm(e);od(e,g,u);break;case 3:case 4:var w=l.stateNode.containerInfo,E=Cm(e);sd(e,E,w);break;default:throw Error(s(161))}}catch(T){ft(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hb(e,t,i){ye=e,Pm(e)}function Pm(e,t,i){for(var l=(e.mode&1)!==0;ye!==null;){var u=ye,g=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||ua;if(!w){var E=u.alternate,T=E!==null&&E.memoizedState!==null||Lt;E=ua;var $=Lt;if(ua=w,(Lt=T)&&!$)for(ye=u;ye!==null;)w=ye,T=w.child,w.tag===22&&w.memoizedState!==null?Am(u):T!==null?(T.return=w,ye=T):Am(u);for(;g!==null;)ye=g,Pm(g),g=g.sibling;ye=u,ua=E,Lt=$}Em(e)}else(u.subtreeFlags&8772)!==0&&g!==null?(g.return=u,ye=g):Em(e)}}function Em(e){for(;ye!==null;){var t=ye;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Lt||pa(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!Lt)if(i===null)l.componentDidMount();else{var u=t.elementType===t.type?i.memoizedProps:kn(t.type,i.memoizedProps);l.componentDidUpdate(u,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=t.updateQueue;g!==null&&Rf(t,g,l);break;case 3:var w=t.updateQueue;if(w!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Rf(t,w,i)}break;case 5:var E=t.stateNode;if(i===null&&t.flags&4){i=E;var T=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&i.focus();break;case"img":T.src&&(i.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var $=t.alternate;if($!==null){var ne=$.memoizedState;if(ne!==null){var se=ne.dehydrated;se!==null&&xo(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Lt||t.flags&512&&rd(t)}catch(te){ft(t,t.return,te)}}if(t===e){ye=null;break}if(i=t.sibling,i!==null){i.return=t.return,ye=i;break}ye=t.return}}function Rm(e){for(;ye!==null;){var t=ye;if(t===e){ye=null;break}var i=t.sibling;if(i!==null){i.return=t.return,ye=i;break}ye=t.return}}function Am(e){for(;ye!==null;){var t=ye;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{pa(4,t)}catch(T){ft(t,i,T)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var u=t.return;try{l.componentDidMount()}catch(T){ft(t,u,T)}}var g=t.return;try{rd(t)}catch(T){ft(t,g,T)}break;case 5:var w=t.return;try{rd(t)}catch(T){ft(t,w,T)}}}catch(T){ft(t,t.return,T)}if(t===e){ye=null;break}var E=t.sibling;if(E!==null){E.return=t.return,ye=E;break}ye=t.return}}var Bb=Math.ceil,fa=R.ReactCurrentDispatcher,id=R.ReactCurrentOwner,hn=R.ReactCurrentBatchConfig,We=0,jt=null,xt=null,Mt=0,sn=0,Ds=yr(0),Ct=0,Ho=null,qr=0,ma=0,ad=0,Bo=null,qt=null,ld=0,Os=1/0,or=null,ga=!1,cd=null,Nr=null,ha=!1,jr=null,va=0,Wo=0,dd=null,xa=-1,ya=0;function Wt(){return(We&6)!==0?gt():xa!==-1?xa:xa=gt()}function Pr(e){return(e.mode&1)===0?1:(We&2)!==0&&Mt!==0?Mt&-Mt:Nb.transition!==null?(ya===0&&(ya=Sp()),ya):(e=Ye,e!==0||(e=window.event,e=e===void 0?16:Tp(e.type)),e)}function Pn(e,t,i,l){if(50<Wo)throw Wo=0,dd=null,Error(s(185));fo(e,i,l),((We&2)===0||e!==jt)&&(e===jt&&((We&2)===0&&(ma|=i),Ct===4&&Er(e,Mt)),Kt(e,l),i===1&&We===0&&(t.mode&1)===0&&(Os=gt()+500,Qi&&wr()))}function Kt(e,t){var i=e.callbackNode;Ny(e,t);var l=Ei(e,e===jt?Mt:0);if(l===0)i!==null&&yp(i),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(i!=null&&yp(i),t===1)e.tag===0?kb(Mm.bind(null,e)):vf(Mm.bind(null,e)),bb(function(){(We&6)===0&&wr()}),i=null;else{switch(Cp(l)){case 1:i=Wl;break;case 4:i=bp;break;case 16:i=ki;break;case 536870912:i=wp;break;default:i=ki}i=$m(i,Tm.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Tm(e,t){if(xa=-1,ya=0,(We&6)!==0)throw Error(s(327));var i=e.callbackNode;if(Ls()&&e.callbackNode!==i)return null;var l=Ei(e,e===jt?Mt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=ba(e,l);else{t=l;var u=We;We|=2;var g=_m();(jt!==e||Mt!==t)&&(or=null,Os=gt()+500,Yr(e,t));do try{Ub();break}catch(E){Im(e,E)}while(!0);Ec(),fa.current=g,We=u,xt!==null?t=0:(jt=null,Mt=0,t=Ct)}if(t!==0){if(t===2&&(u=Vl(e),u!==0&&(l=u,t=ud(e,u))),t===1)throw i=Ho,Yr(e,0),Er(e,l),Kt(e,gt()),i;if(t===6)Er(e,l);else{if(u=e.current.alternate,(l&30)===0&&!Wb(u)&&(t=ba(e,l),t===2&&(g=Vl(e),g!==0&&(l=g,t=ud(e,g))),t===1))throw i=Ho,Yr(e,0),Er(e,l),Kt(e,gt()),i;switch(e.finishedWork=u,e.finishedLanes=l,t){case 0:case 1:throw Error(s(345));case 2:Xr(e,qt,or);break;case 3:if(Er(e,l),(l&130023424)===l&&(t=ld+500-gt(),10<t)){if(Ei(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){Wt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=vc(Xr.bind(null,e,qt,or),t);break}Xr(e,qt,or);break;case 4:if(Er(e,l),(l&4194240)===l)break;for(t=e.eventTimes,u=-1;0<l;){var w=31-wn(l);g=1<<w,w=t[w],w>u&&(u=w),l&=~g}if(l=u,l=gt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Bb(l/1960))-l,10<l){e.timeoutHandle=vc(Xr.bind(null,e,qt,or),l);break}Xr(e,qt,or);break;case 5:Xr(e,qt,or);break;default:throw Error(s(329))}}}return Kt(e,gt()),e.callbackNode===i?Tm.bind(null,e):null}function ud(e,t){var i=Bo;return e.current.memoizedState.isDehydrated&&(Yr(e,t).flags|=256),e=ba(e,t),e!==2&&(t=qt,qt=i,t!==null&&pd(t)),e}function pd(e){qt===null?qt=e:qt.push.apply(qt,e)}function Wb(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var u=i[l],g=u.getSnapshot;u=u.value;try{if(!Sn(g(),u))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Er(e,t){for(t&=~ad,t&=~ma,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-wn(t),l=1<<i;e[i]=-1,t&=~l}}function Mm(e){if((We&6)!==0)throw Error(s(327));Ls();var t=Ei(e,0);if((t&1)===0)return Kt(e,gt()),null;var i=ba(e,t);if(e.tag!==0&&i===2){var l=Vl(e);l!==0&&(t=l,i=ud(e,l))}if(i===1)throw i=Ho,Yr(e,0),Er(e,t),Kt(e,gt()),i;if(i===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xr(e,qt,or),Kt(e,gt()),null}function fd(e,t){var i=We;We|=1;try{return e(t)}finally{We=i,We===0&&(Os=gt()+500,Qi&&wr())}}function Kr(e){jr!==null&&jr.tag===0&&(We&6)===0&&Ls();var t=We;We|=1;var i=hn.transition,l=Ye;try{if(hn.transition=null,Ye=1,e)return e()}finally{Ye=l,hn.transition=i,We=t,(We&6)===0&&wr()}}function md(){sn=Ds.current,nt(Ds)}function Yr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,yb(i)),xt!==null)for(i=xt.return;i!==null;){var l=i;switch(Cc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ui();break;case 3:Ms(),nt(Ut),nt(_t),Oc();break;case 5:_c(l);break;case 4:Ms();break;case 13:nt(dt);break;case 19:nt(dt);break;case 10:Rc(l.type._context);break;case 22:case 23:md()}i=i.return}if(jt=e,xt=e=Rr(e.current,null),Mt=sn=t,Ct=0,Ho=null,ad=ma=qr=0,qt=Bo=null,Ur!==null){for(t=0;t<Ur.length;t++)if(i=Ur[t],l=i.interleaved,l!==null){i.interleaved=null;var u=l.next,g=i.pending;if(g!==null){var w=g.next;g.next=u,l.next=w}i.pending=l}Ur=null}return e}function Im(e,t){do{var i=xt;try{if(Ec(),ra.current=aa,sa){for(var l=ut.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}sa=!1}if(Qr=0,Nt=St=ut=null,Do=!1,Oo=0,id.current=null,i===null||i.return===null){Ct=1,Ho=t,xt=null;break}e:{var g=e,w=i.return,E=i,T=t;if(t=Mt,E.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var $=T,ne=E,se=ne.tag;if((ne.mode&1)===0&&(se===0||se===11||se===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var ve=sm(w);if(ve!==null){ve.flags&=-257,om(ve,w,E,g,t),ve.mode&1&&rm(g,$,t),t=ve,T=$;var be=t.updateQueue;if(be===null){var Ce=new Set;Ce.add(T),t.updateQueue=Ce}else be.add(T);break e}else{if((t&1)===0){rm(g,$,t),gd();break e}T=Error(s(426))}}else if(lt&&E.mode&1){var ht=sm(w);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),om(ht,w,E,g,t),jc(Is(T,E));break e}}g=T=Is(T,E),Ct!==4&&(Ct=2),Bo===null?Bo=[g]:Bo.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,t&=-t,g.lanes|=t;var L=tm(g,T,t);Ef(g,L);break e;case 1:E=T;var D=g.type,F=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Nr===null||!Nr.has(F)))){g.flags|=65536,t&=-t,g.lanes|=t;var ae=nm(g,E,t);Ef(g,ae);break e}}g=g.return}while(g!==null)}Om(i)}catch(Ne){t=Ne,xt===i&&i!==null&&(xt=i=i.return);continue}break}while(!0)}function _m(){var e=fa.current;return fa.current=aa,e===null?aa:e}function gd(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),jt===null||(qr&268435455)===0&&(ma&268435455)===0||Er(jt,Mt)}function ba(e,t){var i=We;We|=2;var l=_m();(jt!==e||Mt!==t)&&(or=null,Yr(e,t));do try{Vb();break}catch(u){Im(e,u)}while(!0);if(Ec(),We=i,fa.current=l,xt!==null)throw Error(s(261));return jt=null,Mt=0,Ct}function Vb(){for(;xt!==null;)Dm(xt)}function Ub(){for(;xt!==null&&!hy();)Dm(xt)}function Dm(e){var t=Fm(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?Om(e):xt=t,id.current=null}function Om(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=Lb(i,t,sn),i!==null){xt=i;return}}else{if(i=zb(i,t),i!==null){i.flags&=32767,xt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ct=6,xt=null;return}}if(t=t.sibling,t!==null){xt=t;return}xt=t=e}while(t!==null);Ct===0&&(Ct=5)}function Xr(e,t,i){var l=Ye,u=hn.transition;try{hn.transition=null,Ye=1,Gb(e,t,i,l)}finally{hn.transition=u,Ye=l}return null}function Gb(e,t,i,l){do Ls();while(jr!==null);if((We&6)!==0)throw Error(s(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var g=i.lanes|i.childLanes;if(jy(e,g),e===jt&&(xt=jt=null,Mt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||ha||(ha=!0,$m(ki,function(){return Ls(),null})),g=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||g){g=hn.transition,hn.transition=null;var w=Ye;Ye=1;var E=We;We|=4,id.current=null,$b(e,i),jm(i,e),pb(gc),Ti=!!mc,gc=mc=null,e.current=i,Hb(i),vy(),We=E,Ye=w,hn.transition=g}else e.current=i;if(ha&&(ha=!1,jr=e,va=u),g=e.pendingLanes,g===0&&(Nr=null),by(i.stateNode),Kt(e,gt()),t!==null)for(l=e.onRecoverableError,i=0;i<t.length;i++)u=t[i],l(u.value,{componentStack:u.stack,digest:u.digest});if(ga)throw ga=!1,e=cd,cd=null,e;return(va&1)!==0&&e.tag!==0&&Ls(),g=e.pendingLanes,(g&1)!==0?e===dd?Wo++:(Wo=0,dd=e):Wo=0,wr(),null}function Ls(){if(jr!==null){var e=Cp(va),t=hn.transition,i=Ye;try{if(hn.transition=null,Ye=16>e?16:e,jr===null)var l=!1;else{if(e=jr,jr=null,va=0,(We&6)!==0)throw Error(s(331));var u=We;for(We|=4,ye=e.current;ye!==null;){var g=ye,w=g.child;if((ye.flags&16)!==0){var E=g.deletions;if(E!==null){for(var T=0;T<E.length;T++){var $=E[T];for(ye=$;ye!==null;){var ne=ye;switch(ne.tag){case 0:case 11:case 15:$o(8,ne,g)}var se=ne.child;if(se!==null)se.return=ne,ye=se;else for(;ye!==null;){ne=ye;var te=ne.sibling,ve=ne.return;if(wm(ne),ne===$){ye=null;break}if(te!==null){te.return=ve,ye=te;break}ye=ve}}}var be=g.alternate;if(be!==null){var Ce=be.child;if(Ce!==null){be.child=null;do{var ht=Ce.sibling;Ce.sibling=null,Ce=ht}while(Ce!==null)}}ye=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ye=w;else e:for(;ye!==null;){if(g=ye,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:$o(9,g,g.return)}var L=g.sibling;if(L!==null){L.return=g.return,ye=L;break e}ye=g.return}}var D=e.current;for(ye=D;ye!==null;){w=ye;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,ye=F;else e:for(w=D;ye!==null;){if(E=ye,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:pa(9,E)}}catch(Ne){ft(E,E.return,Ne)}if(E===w){ye=null;break e}var ae=E.sibling;if(ae!==null){ae.return=E.return,ye=ae;break e}ye=E.return}}if(We=u,wr(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Ni,e)}catch{}l=!0}return l}finally{Ye=i,hn.transition=t}}return!1}function Lm(e,t,i){t=Is(i,t),t=tm(e,t,1),e=Cr(e,t,1),t=Wt(),e!==null&&(fo(e,1,t),Kt(e,t))}function ft(e,t,i){if(e.tag===3)Lm(e,e,i);else for(;t!==null;){if(t.tag===3){Lm(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Nr===null||!Nr.has(l))){e=Is(i,e),e=nm(t,e,1),t=Cr(t,e,1),e=Wt(),t!==null&&(fo(t,1,e),Kt(t,e));break}}t=t.return}}function Qb(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),t=Wt(),e.pingedLanes|=e.suspendedLanes&i,jt===e&&(Mt&i)===i&&(Ct===4||Ct===3&&(Mt&130023424)===Mt&&500>gt()-ld?Yr(e,0):ad|=i),Kt(e,t)}function zm(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pi,Pi<<=1,(Pi&130023424)===0&&(Pi=4194304)));var i=Wt();e=nr(e,t),e!==null&&(fo(e,t,i),Kt(e,i))}function qb(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),zm(e,i)}function Kb(e,t){var i=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(s(314))}l!==null&&l.delete(t),zm(e,i)}var Fm;Fm=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ut.current)Qt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Qt=!1,Ob(e,t,i);Qt=(e.flags&131072)!==0}else Qt=!1,lt&&(t.flags&1048576)!==0&&xf(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;da(e,t),e=t.pendingProps;var u=Ns(t,_t.current);Ts(t,i),u=Fc(null,t,l,e,u,i);var g=$c();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Gt(l)?(g=!0,Gi(t)):g=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Mc(t),u.updater=la,t.stateNode=u,u._reactInternals=t,Gc(t,l,e,i),t=Yc(null,t,l,!0,g,i)):(t.tag=0,lt&&g&&Sc(t),Bt(null,t,u,i),t=t.child),t;case 16:l=t.elementType;e:{switch(da(e,t),e=t.pendingProps,u=l._init,l=u(l._payload),t.type=l,u=t.tag=Xb(l),e=kn(l,e),u){case 0:t=Kc(null,t,l,e,i);break e;case 1:t=um(null,t,l,e,i);break e;case 11:t=im(null,t,l,e,i);break e;case 14:t=am(null,t,l,kn(l.type,e),i);break e}throw Error(s(306,l,""))}return t;case 0:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:kn(l,u),Kc(e,t,l,u,i);case 1:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:kn(l,u),um(e,t,l,u,i);case 3:e:{if(pm(t),e===null)throw Error(s(387));l=t.pendingProps,g=t.memoizedState,u=g.element,Pf(e,t),ta(t,l,null,i);var w=t.memoizedState;if(l=w.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},t.updateQueue.baseState=g,t.memoizedState=g,t.flags&256){u=Is(Error(s(423)),t),t=fm(e,t,l,i,u);break e}else if(l!==u){u=Is(Error(s(424)),t),t=fm(e,t,l,i,u);break e}else for(rn=xr(t.stateNode.containerInfo.firstChild),nn=t,lt=!0,Cn=null,i=Nf(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Es(),l===u){t=sr(e,t,i);break e}Bt(e,t,l,i)}t=t.child}return t;case 5:return Af(t),e===null&&Nc(t),l=t.type,u=t.pendingProps,g=e!==null?e.memoizedProps:null,w=u.children,hc(l,u)?w=null:g!==null&&hc(l,g)&&(t.flags|=32),dm(e,t),Bt(e,t,w,i),t.child;case 6:return e===null&&Nc(t),null;case 13:return mm(e,t,i);case 4:return Ic(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Rs(t,null,l,i):Bt(e,t,l,i),t.child;case 11:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:kn(l,u),im(e,t,l,u,i);case 7:return Bt(e,t,t.pendingProps,i),t.child;case 8:return Bt(e,t,t.pendingProps.children,i),t.child;case 12:return Bt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(l=t.type._context,u=t.pendingProps,g=t.memoizedProps,w=u.value,Ze(Ji,l._currentValue),l._currentValue=w,g!==null)if(Sn(g.value,w)){if(g.children===u.children&&!Ut.current){t=sr(e,t,i);break e}}else for(g=t.child,g!==null&&(g.return=t);g!==null;){var E=g.dependencies;if(E!==null){w=g.child;for(var T=E.firstContext;T!==null;){if(T.context===l){if(g.tag===1){T=rr(-1,i&-i),T.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var ne=$.pending;ne===null?T.next=T:(T.next=ne.next,ne.next=T),$.pending=T}}g.lanes|=i,T=g.alternate,T!==null&&(T.lanes|=i),Ac(g.return,i,t),E.lanes|=i;break}T=T.next}}else if(g.tag===10)w=g.type===t.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(s(341));w.lanes|=i,E=w.alternate,E!==null&&(E.lanes|=i),Ac(w,i,t),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===t){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Bt(e,t,u.children,i),t=t.child}return t;case 9:return u=t.type,l=t.pendingProps.children,Ts(t,i),u=mn(u),l=l(u),t.flags|=1,Bt(e,t,l,i),t.child;case 14:return l=t.type,u=kn(l,t.pendingProps),u=kn(l.type,u),am(e,t,l,u,i);case 15:return lm(e,t,t.type,t.pendingProps,i);case 17:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:kn(l,u),da(e,t),t.tag=1,Gt(l)?(e=!0,Gi(t)):e=!1,Ts(t,i),Zf(t,l,u),Gc(t,l,u,i),Yc(null,t,l,!0,e,i);case 19:return hm(e,t,i);case 22:return cm(e,t,i)}throw Error(s(156,t.tag))};function $m(e,t){return xp(e,t)}function Yb(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,t,i,l){return new Yb(e,t,i,l)}function hd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xb(e){if(typeof e=="function")return hd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ie)return 11;if(e===fe)return 14}return 2}function Rr(e,t){var i=e.alternate;return i===null?(i=vn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function wa(e,t,i,l,u,g){var w=2;if(l=e,typeof e=="function")hd(e)&&(w=1);else if(typeof e=="string")w=5;else e:switch(e){case z:return Jr(i.children,u,g,t);case V:w=8,u|=8;break;case re:return e=vn(12,i,t,u|2),e.elementType=re,e.lanes=g,e;case me:return e=vn(13,i,t,u),e.elementType=me,e.lanes=g,e;case ue:return e=vn(19,i,t,u),e.elementType=ue,e.lanes=g,e;case Y:return Sa(i,u,g,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:w=10;break e;case de:w=9;break e;case ie:w=11;break e;case fe:w=14;break e;case ee:w=16,l=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=vn(w,i,t,u),t.elementType=e,t.type=l,t.lanes=g,t}function Jr(e,t,i,l){return e=vn(7,e,l,t),e.lanes=i,e}function Sa(e,t,i,l){return e=vn(22,e,l,t),e.elementType=Y,e.lanes=i,e.stateNode={isHidden:!1},e}function vd(e,t,i){return e=vn(6,e,null,t),e.lanes=i,e}function xd(e,t,i){return t=vn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jb(e,t,i,l,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function yd(e,t,i,l,u,g,w,E,T){return e=new Jb(e,t,i,E,T),t===1?(t=1,g===!0&&(t|=8)):t=0,g=vn(3,null,null,t),e.current=g,g.stateNode=e,g.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(g),e}function Zb(e,t,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:l==null?null:""+l,children:e,containerInfo:t,implementation:i}}function Hm(e){if(!e)return br;e=e._reactInternals;e:{if($r(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var i=e.type;if(Gt(i))return gf(e,i,t)}return t}function Bm(e,t,i,l,u,g,w,E,T){return e=yd(i,l,!0,e,u,g,w,E,T),e.context=Hm(null),i=e.current,l=Wt(),u=Pr(i),g=rr(l,u),g.callback=t??null,Cr(i,g,u),e.current.lanes=u,fo(e,u,l),Kt(e,l),e}function Ca(e,t,i,l){var u=t.current,g=Wt(),w=Pr(u);return i=Hm(i),t.context===null?t.context=i:t.pendingContext=i,t=rr(g,w),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Cr(u,t,w),e!==null&&(Pn(e,u,w,g),ea(e,u,w)),w}function ka(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function bd(e,t){Wm(e,t),(e=e.alternate)&&Wm(e,t)}function ew(){return null}var Vm=typeof reportError=="function"?reportError:function(e){console.error(e)};function wd(e){this._internalRoot=e}Na.prototype.render=wd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ca(e,t,null,null)},Na.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){Ca(null,e,null,null)}),t[Jn]=null}};function Na(e){this._internalRoot=e}Na.prototype.unstable_scheduleHydration=function(e){if(e){var t=jp();e={blockedOn:null,target:e,priority:t};for(var i=0;i<gr.length&&t!==0&&t<gr[i].priority;i++);gr.splice(i,0,e),i===0&&Rp(e)}};function Sd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Um(){}function tw(e,t,i,l,u){if(u){if(typeof l=="function"){var g=l;l=function(){var $=ka(w);g.call($)}}var w=Bm(t,l,e,0,null,!1,!1,"",Um);return e._reactRootContainer=w,e[Jn]=w.current,Po(e.nodeType===8?e.parentNode:e),Kr(),w}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var E=l;l=function(){var $=ka(T);E.call($)}}var T=yd(e,0,!1,null,null,!1,!1,"",Um);return e._reactRootContainer=T,e[Jn]=T.current,Po(e.nodeType===8?e.parentNode:e),Kr(function(){Ca(t,T,i,l)}),T}function Pa(e,t,i,l,u){var g=i._reactRootContainer;if(g){var w=g;if(typeof u=="function"){var E=u;u=function(){var T=ka(w);E.call(T)}}Ca(t,w,e,u)}else w=tw(i,t,e,u,l);return ka(w)}kp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=po(t.pendingLanes);i!==0&&(Gl(t,i|1),Kt(t,gt()),(We&6)===0&&(Os=gt()+500,wr()))}break;case 13:Kr(function(){var l=nr(e,1);if(l!==null){var u=Wt();Pn(l,e,1,u)}}),bd(e,1)}},Ql=function(e){if(e.tag===13){var t=nr(e,134217728);if(t!==null){var i=Wt();Pn(t,e,134217728,i)}bd(e,134217728)}},Np=function(e){if(e.tag===13){var t=Pr(e),i=nr(e,t);if(i!==null){var l=Wt();Pn(i,e,t,l)}bd(e,t)}},jp=function(){return Ye},Pp=function(e,t){var i=Ye;try{return Ye=e,t()}finally{Ye=i}},en=function(e,t,i){switch(t){case"input":if(vt(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var u=Vi(l);if(!u)throw Error(s(90));Re(l),vt(l,u)}}}break;case"textarea":Je(e,i);break;case"select":t=i.value,t!=null&&Xe(e,!!i.multiple,t,!1)}},gs=fd,pp=Kr;var nw={usingClientEntryPoint:!1,Events:[Ao,Cs,Vi,De,ct,fd]},Vo={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rw={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hp(e),e===null?null:e.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||ew,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Ni=Ea.inject(rw),On=Ea}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw,Yt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(t))throw Error(s(200));return Zb(e,t,null,i)},Yt.createRoot=function(e,t){if(!Sd(e))throw Error(s(299));var i=!1,l="",u=Vm;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=yd(e,1,!1,null,null,i,!1,l,u),e[Jn]=t.current,Po(e.nodeType===8?e.parentNode:e),new wd(t)},Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=hp(t),e=e===null?null:e.stateNode,e},Yt.flushSync=function(e){return Kr(e)},Yt.hydrate=function(e,t,i){if(!ja(t))throw Error(s(200));return Pa(null,e,t,!0,i)},Yt.hydrateRoot=function(e,t,i){if(!Sd(e))throw Error(s(405));var l=i!=null&&i.hydratedSources||null,u=!1,g="",w=Vm;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(g=i.identifierPrefix),i.onRecoverableError!==void 0&&(w=i.onRecoverableError)),t=Bm(t,null,e,1,i??null,u,!1,g,w),e[Jn]=t.current,Po(e),l)for(e=0;e<l.length;e++)i=l[e],u=i._getVersion,u=u(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,u]:t.mutableSourceEagerHydrationData.push(i,u);return new Na(t)},Yt.render=function(e,t,i){if(!ja(t))throw Error(s(200));return Pa(null,e,t,!1,i)},Yt.unmountComponentAtNode=function(e){if(!ja(e))throw Error(s(40));return e._reactRootContainer?(Kr(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[Jn]=null})}),!0):!1},Yt.unstable_batchedUpdates=fd,Yt.unstable_renderSubtreeIntoContainer=function(e,t,i,l){if(!ja(i))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Pa(e,t,i,!1,l)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Zm;function ah(){if(Zm)return Nd.exports;Zm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Nd.exports=uw(),Nd.exports}var eg;function pw(){if(eg)return Ra;eg=1;var n=ah();return Ra.createRoot=n.createRoot,Ra.hydrateRoot=n.hydrateRoot,Ra}var fw=pw(),f=yu();const Xt=ih(f),cl=ow({__proto__:null,default:Xt},[f]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gw=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,a)=>a?a.toUpperCase():s.toLowerCase()),tg=n=>{const r=gw(n);return r.charAt(0).toUpperCase()+r.slice(1)},lh=(...n)=>n.filter((r,s,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=f.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:d,iconNode:p,...m},h)=>f.createElement("svg",{ref:h,...hw,width:r,height:r,stroke:n,strokeWidth:a?Number(s)*24/Number(r):s,className:lh("lucide",c),...m},[...p.map(([v,y])=>f.createElement(v,y)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(n,r)=>{const s=f.forwardRef(({className:a,...c},d)=>f.createElement(vw,{ref:d,iconNode:r,className:lh(`lucide-${mw(tg(n))}`,`lucide-${n}`,a),...c}));return s.displayName=tg(n),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Zo=ke("arrow-left",xw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bw=ke("arrow-right",yw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Sw=ke("arrow-up",ww);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],kw=ke("bell",Cw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ng=ke("book-open",Nw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Pw=ke("bookmark",jw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],ch=ke("bot",Ew);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Aw=ke("brain",Rw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Mw=ke("briefcase",Tw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],$a=ke("chart-column",Iw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Hn=ke("check",_w);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ys=ke("chevron-down",Dw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Lw=ke("chevron-left",Ow);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xs=ke("chevron-right",zw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],$w=ke("chevron-up",Fw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Bw=ke("circle-check-big",Hw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Vw=ke("clipboard-list",Ww);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Gw=ke("cloud",Uw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],qw=ke("code",Qw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Yw=ke("compass",Kw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Go=ke("copy",Xw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dh=ke("database",Jw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],e2=ke("download",Zw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],as=ke("ellipsis",t2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],rg=ke("eye-off",n2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xn=ke("file-text",r2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ua=ke("folder-open",s2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],uh=ke("folder-plus",o2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Xd=ke("folder",i2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],l2=ke("globe",a2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],d2=ke("grip-vertical",c2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],p2=ke("hard-drive",u2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],ph=ke("info",f2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],g2=ke("mail",m2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Gs=ke("message-square",h2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],x2=ke("mic",v2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],b2=ke("microscope",y2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],sg=ke("panel-left",w2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],C2=ke("panel-right",S2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Jd=ke("pencil",k2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],og=ke("pin",N2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],bu=ke("plus",j2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],E2=ke("presentation",P2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],A2=ke("redo-2",R2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Ga=ke("search",T2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zd=ke("settings",M2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],ig=ke("share-2",I2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ag=ke("shield-check",_2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Qa=ke("shield",D2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],L2=ke("sliders-horizontal",O2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],F2=ke("sparkles",z2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Jo=ke("square-pen",$2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]],lg=ke("thumbs-down",H2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],cg=ke("thumbs-up",B2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],ls=ke("trash-2",W2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],U2=ke("trending-up",V2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Q2=ke("undo-2",G2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],qa=ke("upload",q2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],dg=ke("user",K2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],fh=ke("users",Y2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],J2=ke("wand-sparkles",X2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Js=ke("x",Z2);function ug(n,r){if(typeof n=="function")return n(r);n!=null&&(n.current=r)}function dr(...n){return r=>{let s=!1;const a=n.map(c=>{const d=ug(c,r);return!s&&typeof d=="function"&&(s=!0),d});if(s)return()=>{for(let c=0;c<a.length;c++){const d=a[c];typeof d=="function"?d():ug(n[c],null)}}}}function ze(...n){return f.useCallback(dr(...n),n)}var e1=Symbol.for("react.lazy"),Ka=cl[" use ".trim().toString()];function t1(n){return typeof n=="object"&&n!==null&&"then"in n}function mh(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===e1&&"_payload"in n&&t1(n._payload)}function wu(n){const r=r1(n),s=f.forwardRef((a,c)=>{let{children:d,...p}=a;mh(d)&&typeof Ka=="function"&&(d=Ka(d._payload));const m=f.Children.toArray(d),h=m.find(o1);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}var n1=wu("Slot");function r1(n){const r=f.forwardRef((s,a)=>{let{children:c,...d}=s;if(mh(c)&&typeof Ka=="function"&&(c=Ka(c._payload)),f.isValidElement(c)){const p=a1(c),m=i1(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var s1=Symbol("radix.slottable");function o1(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===s1}function i1(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function a1(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function gh(n){var r,s,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(r=0;r<c;r++)n[r]&&(s=gh(n[r]))&&(a&&(a+=" "),a+=s)}else for(s in n)n[s]&&(a&&(a+=" "),a+=s);return a}function hh(){for(var n,r,s=0,a="",c=arguments.length;s<c;s++)(n=arguments[s])&&(r=gh(n))&&(a&&(a+=" "),a+=r);return a}const pg=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,fg=hh,l1=(n,r)=>s=>{var a;if(r?.variants==null)return fg(n,s?.class,s?.className);const{variants:c,defaultVariants:d}=r,p=Object.keys(c).map(v=>{const y=s?.[v],x=d?.[v];if(y===null)return null;const b=pg(y)||pg(x);return c[v][b]}),m=s&&Object.entries(s).reduce((v,y)=>{let[x,b]=y;return b===void 0||(v[x]=b),v},{}),h=r==null||(a=r.compoundVariants)===null||a===void 0?void 0:a.reduce((v,y)=>{let{class:x,className:b,...S}=y;return Object.entries(S).every(N=>{let[C,k]=N;return Array.isArray(k)?k.includes({...d,...m}[C]):{...d,...m}[C]===k})?[...v,x,b]:v},[]);return fg(n,p,h,s?.class,s?.className)},c1=(n,r)=>{const s=new Array(n.length+r.length);for(let a=0;a<n.length;a++)s[a]=n[a];for(let a=0;a<r.length;a++)s[n.length+a]=r[a];return s},d1=(n,r)=>({classGroupId:n,validator:r}),vh=(n=new Map,r=null,s)=>({nextPart:n,validators:r,classGroupId:s}),Ya="-",mg=[],u1="arbitrary..",p1=n=>{const r=m1(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:a}=n;return{getClassGroupId:p=>{if(p.startsWith("[")&&p.endsWith("]"))return f1(p);const m=p.split(Ya),h=m[0]===""&&m.length>1?1:0;return xh(m,h,r)},getConflictingClassGroupIds:(p,m)=>{if(m){const h=a[p],v=s[p];return h?v?c1(v,h):h:v||mg}return s[p]||mg}}},xh=(n,r,s)=>{if(n.length-r===0)return s.classGroupId;const c=n[r],d=s.nextPart.get(c);if(d){const v=xh(n,r+1,d);if(v)return v}const p=s.validators;if(p===null)return;const m=r===0?n.join(Ya):n.slice(r).join(Ya),h=p.length;for(let v=0;v<h;v++){const y=p[v];if(y.validator(m))return y.classGroupId}},f1=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=n.slice(1,-1),s=r.indexOf(":"),a=r.slice(0,s);return a?u1+a:void 0})(),m1=n=>{const{theme:r,classGroups:s}=n;return g1(s,r)},g1=(n,r)=>{const s=vh();for(const a in n){const c=n[a];Su(c,s,a,r)}return s},Su=(n,r,s,a)=>{const c=n.length;for(let d=0;d<c;d++){const p=n[d];h1(p,r,s,a)}},h1=(n,r,s,a)=>{if(typeof n=="string"){v1(n,r,s);return}if(typeof n=="function"){x1(n,r,s,a);return}y1(n,r,s,a)},v1=(n,r,s)=>{const a=n===""?r:yh(r,n);a.classGroupId=s},x1=(n,r,s,a)=>{if(b1(n)){Su(n(a),r,s,a);return}r.validators===null&&(r.validators=[]),r.validators.push(d1(s,n))},y1=(n,r,s,a)=>{const c=Object.entries(n),d=c.length;for(let p=0;p<d;p++){const[m,h]=c[p];Su(h,yh(r,m),s,a)}},yh=(n,r)=>{let s=n;const a=r.split(Ya),c=a.length;for(let d=0;d<c;d++){const p=a[d];let m=s.nextPart.get(p);m||(m=vh(),s.nextPart.set(p,m)),s=m}return s},b1=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,w1=n=>{if(n<1)return{get:()=>{},set:()=>{}};let r=0,s=Object.create(null),a=Object.create(null);const c=(d,p)=>{s[d]=p,r++,r>n&&(r=0,a=s,s=Object.create(null))};return{get(d){let p=s[d];if(p!==void 0)return p;if((p=a[d])!==void 0)return c(d,p),p},set(d,p){d in s?s[d]=p:c(d,p)}}},eu="!",gg=":",S1=[],hg=(n,r,s,a,c)=>({modifiers:n,hasImportantModifier:r,baseClassName:s,maybePostfixModifierPosition:a,isExternal:c}),C1=n=>{const{prefix:r,experimentalParseClassName:s}=n;let a=c=>{const d=[];let p=0,m=0,h=0,v;const y=c.length;for(let C=0;C<y;C++){const k=c[C];if(p===0&&m===0){if(k===gg){d.push(c.slice(h,C)),h=C+1;continue}if(k==="/"){v=C;continue}}k==="["?p++:k==="]"?p--:k==="("?m++:k===")"&&m--}const x=d.length===0?c:c.slice(h);let b=x,S=!1;x.endsWith(eu)?(b=x.slice(0,-1),S=!0):x.startsWith(eu)&&(b=x.slice(1),S=!0);const N=v&&v>h?v-h:void 0;return hg(d,S,b,N)};if(r){const c=r+gg,d=a;a=p=>p.startsWith(c)?d(p.slice(c.length)):hg(S1,!1,p,void 0,!0)}if(s){const c=a;a=d=>s({className:d,parseClassName:c})}return a},k1=n=>{const r=new Map;return n.orderSensitiveModifiers.forEach((s,a)=>{r.set(s,1e6+a)}),s=>{const a=[];let c=[];for(let d=0;d<s.length;d++){const p=s[d],m=p[0]==="[",h=r.has(p);m||h?(c.length>0&&(c.sort(),a.push(...c),c=[]),a.push(p)):c.push(p)}return c.length>0&&(c.sort(),a.push(...c)),a}},N1=n=>({cache:w1(n.cacheSize),parseClassName:C1(n),sortModifiers:k1(n),...p1(n)}),j1=/\s+/,P1=(n,r)=>{const{parseClassName:s,getClassGroupId:a,getConflictingClassGroupIds:c,sortModifiers:d}=r,p=[],m=n.trim().split(j1);let h="";for(let v=m.length-1;v>=0;v-=1){const y=m[v],{isExternal:x,modifiers:b,hasImportantModifier:S,baseClassName:N,maybePostfixModifierPosition:C}=s(y);if(x){h=y+(h.length>0?" "+h:h);continue}let k=!!C,P=a(k?N.substring(0,C):N);if(!P){if(!k){h=y+(h.length>0?" "+h:h);continue}if(P=a(N),!P){h=y+(h.length>0?" "+h:h);continue}k=!1}const j=b.length===0?"":b.length===1?b[0]:d(b).join(":"),M=S?j+eu:j,R=M+P;if(p.indexOf(R)>-1)continue;p.push(R);const I=c(P,k);for(let W=0;W<I.length;++W){const z=I[W];p.push(M+z)}h=y+(h.length>0?" "+h:h)}return h},E1=(...n)=>{let r=0,s,a,c="";for(;r<n.length;)(s=n[r++])&&(a=bh(s))&&(c&&(c+=" "),c+=a);return c},bh=n=>{if(typeof n=="string")return n;let r,s="";for(let a=0;a<n.length;a++)n[a]&&(r=bh(n[a]))&&(s&&(s+=" "),s+=r);return s},R1=(n,...r)=>{let s,a,c,d;const p=h=>{const v=r.reduce((y,x)=>x(y),n());return s=N1(v),a=s.cache.get,c=s.cache.set,d=m,m(h)},m=h=>{const v=a(h);if(v)return v;const y=P1(h,s);return c(h,y),y};return d=p,(...h)=>d(E1(...h))},A1=[],kt=n=>{const r=s=>s[n]||A1;return r.isThemeGetter=!0,r},wh=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Sh=/^\((?:(\w[\w-]*):)?(.+)\)$/i,T1=/^\d+\/\d+$/,M1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,I1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,D1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,O1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,zs=n=>T1.test(n),$e=n=>!!n&&!Number.isNaN(Number(n)),Tr=n=>!!n&&Number.isInteger(Number(n)),Ed=n=>n.endsWith("%")&&$e(n.slice(0,-1)),ir=n=>M1.test(n),L1=()=>!0,z1=n=>I1.test(n)&&!_1.test(n),Ch=()=>!1,F1=n=>D1.test(n),$1=n=>O1.test(n),H1=n=>!we(n)&&!Se(n),B1=n=>no(n,jh,Ch),we=n=>wh.test(n),Zr=n=>no(n,Ph,z1),Rd=n=>no(n,Q1,$e),vg=n=>no(n,kh,Ch),W1=n=>no(n,Nh,$1),Aa=n=>no(n,Eh,F1),Se=n=>Sh.test(n),Qo=n=>ro(n,Ph),V1=n=>ro(n,q1),xg=n=>ro(n,kh),U1=n=>ro(n,jh),G1=n=>ro(n,Nh),Ta=n=>ro(n,Eh,!0),no=(n,r,s)=>{const a=wh.exec(n);return a?a[1]?r(a[1]):s(a[2]):!1},ro=(n,r,s=!1)=>{const a=Sh.exec(n);return a?a[1]?r(a[1]):s:!1},kh=n=>n==="position"||n==="percentage",Nh=n=>n==="image"||n==="url",jh=n=>n==="length"||n==="size"||n==="bg-size",Ph=n=>n==="length",Q1=n=>n==="number",q1=n=>n==="family-name",Eh=n=>n==="shadow",K1=()=>{const n=kt("color"),r=kt("font"),s=kt("text"),a=kt("font-weight"),c=kt("tracking"),d=kt("leading"),p=kt("breakpoint"),m=kt("container"),h=kt("spacing"),v=kt("radius"),y=kt("shadow"),x=kt("inset-shadow"),b=kt("text-shadow"),S=kt("drop-shadow"),N=kt("blur"),C=kt("perspective"),k=kt("aspect"),P=kt("ease"),j=kt("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],I=()=>[...R(),Se,we],W=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],V=()=>[Se,we,h],re=()=>[zs,"full","auto",...V()],Q=()=>[Tr,"none","subgrid",Se,we],de=()=>["auto",{span:["full",Tr,Se,we]},Tr,Se,we],ie=()=>[Tr,"auto",Se,we],me=()=>["auto","min","max","fr",Se,we],ue=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],fe=()=>["start","end","center","stretch","center-safe","end-safe"],ee=()=>["auto",...V()],Y=()=>[zs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...V()],_=()=>[n,Se,we],H=()=>[...R(),xg,vg,{position:[Se,we]}],J=()=>["no-repeat",{repeat:["","x","y","space","round"]}],A=()=>["auto","cover","contain",U1,B1,{size:[Se,we]}],U=()=>[Ed,Qo,Zr],B=()=>["","none","full",v,Se,we],q=()=>["",$e,Qo,Zr],oe=()=>["solid","dashed","dotted","double"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],O=()=>[$e,Ed,xg,vg],X=()=>["","none",N,Se,we],le=()=>["none",$e,Se,we],he=()=>["none",$e,Se,we],Ee=()=>[$e,Se,we],Re=()=>[zs,"full",...V()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ir],breakpoint:[ir],color:[L1],container:[ir],"drop-shadow":[ir],ease:["in","out","in-out"],font:[H1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ir],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ir],shadow:[ir],spacing:["px",$e],text:[ir],"text-shadow":[ir],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",zs,we,Se,k]}],container:["container"],columns:[{columns:[$e,we,Se,m]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:I()}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:re()}],"inset-x":[{"inset-x":re()}],"inset-y":[{"inset-y":re()}],start:[{start:re()}],end:[{end:re()}],top:[{top:re()}],right:[{right:re()}],bottom:[{bottom:re()}],left:[{left:re()}],visibility:["visible","invisible","collapse"],z:[{z:[Tr,"auto",Se,we]}],basis:[{basis:[zs,"full","auto",m,...V()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,zs,"auto","initial","none",we]}],grow:[{grow:["",$e,Se,we]}],shrink:[{shrink:["",$e,Se,we]}],order:[{order:[Tr,"first","last","none",Se,we]}],"grid-cols":[{"grid-cols":Q()}],"col-start-end":[{col:de()}],"col-start":[{"col-start":ie()}],"col-end":[{"col-end":ie()}],"grid-rows":[{"grid-rows":Q()}],"row-start-end":[{row:de()}],"row-start":[{"row-start":ie()}],"row-end":[{"row-end":ie()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":me()}],"auto-rows":[{"auto-rows":me()}],gap:[{gap:V()}],"gap-x":[{"gap-x":V()}],"gap-y":[{"gap-y":V()}],"justify-content":[{justify:[...ue(),"normal"]}],"justify-items":[{"justify-items":[...fe(),"normal"]}],"justify-self":[{"justify-self":["auto",...fe()]}],"align-content":[{content:["normal",...ue()]}],"align-items":[{items:[...fe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...fe(),{baseline:["","last"]}]}],"place-content":[{"place-content":ue()}],"place-items":[{"place-items":[...fe(),"baseline"]}],"place-self":[{"place-self":["auto",...fe()]}],p:[{p:V()}],px:[{px:V()}],py:[{py:V()}],ps:[{ps:V()}],pe:[{pe:V()}],pt:[{pt:V()}],pr:[{pr:V()}],pb:[{pb:V()}],pl:[{pl:V()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":V()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":V()}],"space-y-reverse":["space-y-reverse"],size:[{size:Y()}],w:[{w:[m,"screen",...Y()]}],"min-w":[{"min-w":[m,"screen","none",...Y()]}],"max-w":[{"max-w":[m,"screen","none","prose",{screen:[p]},...Y()]}],h:[{h:["screen","lh",...Y()]}],"min-h":[{"min-h":["screen","lh","none",...Y()]}],"max-h":[{"max-h":["screen","lh",...Y()]}],"font-size":[{text:["base",s,Qo,Zr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,Se,Rd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ed,we]}],"font-family":[{font:[V1,we,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,Se,we]}],"line-clamp":[{"line-clamp":[$e,"none",Se,Rd]}],leading:[{leading:[d,...V()]}],"list-image":[{"list-image":["none",Se,we]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Se,we]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:_()}],"text-color":[{text:_()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...oe(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",Se,Zr]}],"text-decoration-color":[{decoration:_()}],"underline-offset":[{"underline-offset":[$e,"auto",Se,we]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Se,we]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Se,we]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:H()}],"bg-repeat":[{bg:J()}],"bg-size":[{bg:A()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Tr,Se,we],radial:["",Se,we],conic:[Tr,Se,we]},G1,W1]}],"bg-color":[{bg:_()}],"gradient-from-pos":[{from:U()}],"gradient-via-pos":[{via:U()}],"gradient-to-pos":[{to:U()}],"gradient-from":[{from:_()}],"gradient-via":[{via:_()}],"gradient-to":[{to:_()}],rounded:[{rounded:B()}],"rounded-s":[{"rounded-s":B()}],"rounded-e":[{"rounded-e":B()}],"rounded-t":[{"rounded-t":B()}],"rounded-r":[{"rounded-r":B()}],"rounded-b":[{"rounded-b":B()}],"rounded-l":[{"rounded-l":B()}],"rounded-ss":[{"rounded-ss":B()}],"rounded-se":[{"rounded-se":B()}],"rounded-ee":[{"rounded-ee":B()}],"rounded-es":[{"rounded-es":B()}],"rounded-tl":[{"rounded-tl":B()}],"rounded-tr":[{"rounded-tr":B()}],"rounded-br":[{"rounded-br":B()}],"rounded-bl":[{"rounded-bl":B()}],"border-w":[{border:q()}],"border-w-x":[{"border-x":q()}],"border-w-y":[{"border-y":q()}],"border-w-s":[{"border-s":q()}],"border-w-e":[{"border-e":q()}],"border-w-t":[{"border-t":q()}],"border-w-r":[{"border-r":q()}],"border-w-b":[{"border-b":q()}],"border-w-l":[{"border-l":q()}],"divide-x":[{"divide-x":q()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":q()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...oe(),"hidden","none"]}],"divide-style":[{divide:[...oe(),"hidden","none"]}],"border-color":[{border:_()}],"border-color-x":[{"border-x":_()}],"border-color-y":[{"border-y":_()}],"border-color-s":[{"border-s":_()}],"border-color-e":[{"border-e":_()}],"border-color-t":[{"border-t":_()}],"border-color-r":[{"border-r":_()}],"border-color-b":[{"border-b":_()}],"border-color-l":[{"border-l":_()}],"divide-color":[{divide:_()}],"outline-style":[{outline:[...oe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,Se,we]}],"outline-w":[{outline:["",$e,Qo,Zr]}],"outline-color":[{outline:_()}],shadow:[{shadow:["","none",y,Ta,Aa]}],"shadow-color":[{shadow:_()}],"inset-shadow":[{"inset-shadow":["none",x,Ta,Aa]}],"inset-shadow-color":[{"inset-shadow":_()}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:_()}],"ring-offset-w":[{"ring-offset":[$e,Zr]}],"ring-offset-color":[{"ring-offset":_()}],"inset-ring-w":[{"inset-ring":q()}],"inset-ring-color":[{"inset-ring":_()}],"text-shadow":[{"text-shadow":["none",b,Ta,Aa]}],"text-shadow-color":[{"text-shadow":_()}],opacity:[{opacity:[$e,Se,we]}],"mix-blend":[{"mix-blend":[...K(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":K()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":O()}],"mask-image-linear-to-pos":[{"mask-linear-to":O()}],"mask-image-linear-from-color":[{"mask-linear-from":_()}],"mask-image-linear-to-color":[{"mask-linear-to":_()}],"mask-image-t-from-pos":[{"mask-t-from":O()}],"mask-image-t-to-pos":[{"mask-t-to":O()}],"mask-image-t-from-color":[{"mask-t-from":_()}],"mask-image-t-to-color":[{"mask-t-to":_()}],"mask-image-r-from-pos":[{"mask-r-from":O()}],"mask-image-r-to-pos":[{"mask-r-to":O()}],"mask-image-r-from-color":[{"mask-r-from":_()}],"mask-image-r-to-color":[{"mask-r-to":_()}],"mask-image-b-from-pos":[{"mask-b-from":O()}],"mask-image-b-to-pos":[{"mask-b-to":O()}],"mask-image-b-from-color":[{"mask-b-from":_()}],"mask-image-b-to-color":[{"mask-b-to":_()}],"mask-image-l-from-pos":[{"mask-l-from":O()}],"mask-image-l-to-pos":[{"mask-l-to":O()}],"mask-image-l-from-color":[{"mask-l-from":_()}],"mask-image-l-to-color":[{"mask-l-to":_()}],"mask-image-x-from-pos":[{"mask-x-from":O()}],"mask-image-x-to-pos":[{"mask-x-to":O()}],"mask-image-x-from-color":[{"mask-x-from":_()}],"mask-image-x-to-color":[{"mask-x-to":_()}],"mask-image-y-from-pos":[{"mask-y-from":O()}],"mask-image-y-to-pos":[{"mask-y-to":O()}],"mask-image-y-from-color":[{"mask-y-from":_()}],"mask-image-y-to-color":[{"mask-y-to":_()}],"mask-image-radial":[{"mask-radial":[Se,we]}],"mask-image-radial-from-pos":[{"mask-radial-from":O()}],"mask-image-radial-to-pos":[{"mask-radial-to":O()}],"mask-image-radial-from-color":[{"mask-radial-from":_()}],"mask-image-radial-to-color":[{"mask-radial-to":_()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":R()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":O()}],"mask-image-conic-to-pos":[{"mask-conic-to":O()}],"mask-image-conic-from-color":[{"mask-conic-from":_()}],"mask-image-conic-to-color":[{"mask-conic-to":_()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:H()}],"mask-repeat":[{mask:J()}],"mask-size":[{mask:A()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Se,we]}],filter:[{filter:["","none",Se,we]}],blur:[{blur:X()}],brightness:[{brightness:[$e,Se,we]}],contrast:[{contrast:[$e,Se,we]}],"drop-shadow":[{"drop-shadow":["","none",S,Ta,Aa]}],"drop-shadow-color":[{"drop-shadow":_()}],grayscale:[{grayscale:["",$e,Se,we]}],"hue-rotate":[{"hue-rotate":[$e,Se,we]}],invert:[{invert:["",$e,Se,we]}],saturate:[{saturate:[$e,Se,we]}],sepia:[{sepia:["",$e,Se,we]}],"backdrop-filter":[{"backdrop-filter":["","none",Se,we]}],"backdrop-blur":[{"backdrop-blur":X()}],"backdrop-brightness":[{"backdrop-brightness":[$e,Se,we]}],"backdrop-contrast":[{"backdrop-contrast":[$e,Se,we]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,Se,we]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,Se,we]}],"backdrop-invert":[{"backdrop-invert":["",$e,Se,we]}],"backdrop-opacity":[{"backdrop-opacity":[$e,Se,we]}],"backdrop-saturate":[{"backdrop-saturate":[$e,Se,we]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,Se,we]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":V()}],"border-spacing-x":[{"border-spacing-x":V()}],"border-spacing-y":[{"border-spacing-y":V()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Se,we]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",Se,we]}],ease:[{ease:["linear","initial",P,Se,we]}],delay:[{delay:[$e,Se,we]}],animate:[{animate:["none",j,Se,we]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,Se,we]}],"perspective-origin":[{"perspective-origin":I()}],rotate:[{rotate:le()}],"rotate-x":[{"rotate-x":le()}],"rotate-y":[{"rotate-y":le()}],"rotate-z":[{"rotate-z":le()}],scale:[{scale:he()}],"scale-x":[{"scale-x":he()}],"scale-y":[{"scale-y":he()}],"scale-z":[{"scale-z":he()}],"scale-3d":["scale-3d"],skew:[{skew:Ee()}],"skew-x":[{"skew-x":Ee()}],"skew-y":[{"skew-y":Ee()}],transform:[{transform:[Se,we,"","none","gpu","cpu"]}],"transform-origin":[{origin:I()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Re()}],"translate-x":[{"translate-x":Re()}],"translate-y":[{"translate-y":Re()}],"translate-z":[{"translate-z":Re()}],"translate-none":["translate-none"],accent:[{accent:_()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:_()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Se,we]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Se,we]}],fill:[{fill:["none",..._()]}],"stroke-w":[{stroke:[$e,Qo,Zr,Rd]}],stroke:[{stroke:["none",..._()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Y1=R1(K1);function Fe(...n){return Y1(hh(n))}const X1=l1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",{variants:{variant:{default:"bg-gray-900 text-white border-2 border-gray-900 hover:bg-gray-700 hover:border-gray-700 dark:bg-white dark:text-gray-900 dark:border-white dark:hover:bg-gray-100",outline:"bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-white dark:hover:bg-gray-800",destructive:"bg-red-500 text-white border-2 border-red-500 hover:bg-red-600 hover:border-red-600",secondary:"bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",ghost:"hover:bg-gray-200 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",link:"text-gray-900 underline-offset-4 hover:underline dark:text-white"},size:{default:"h-10 px-4 py-2",sm:"h-8 rounded-lg gap-1.5 px-3 text-xs",lg:"h-12 rounded-lg px-6",icon:"h-10 w-10 rounded-lg"}},defaultVariants:{variant:"default",size:"default"}}),Oe=f.forwardRef(({className:n,variant:r,size:s,asChild:a=!1,...c},d)=>{const p=a?n1:"button";return o.jsx(p,{"data-slot":"button",className:Fe(X1({variant:r,size:s,className:n})),ref:d,...c})});Oe.displayName="Button";var ui=ah();const J1=ih(ui);function Z1(n){const r=eS(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(nS);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function eS(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=sS(c),m=rS(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var tS=Symbol("radix.slottable");function nS(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===tS}function rS(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function sS(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var oS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Me=oS.reduce((n,r)=>{const s=Z1(`Primitive.${r}`),a=f.forwardRef((c,d)=>{const{asChild:p,...m}=c,h=p?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(h,{...m,ref:d})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{});function Rh(n,r){n&&ui.flushSync(()=>n.dispatchEvent(r))}var Rt=globalThis?.document?f.useLayoutEffect:()=>{};function iS(n,r){return f.useReducer((s,a)=>r[s][a]??s,n)}var It=n=>{const{present:r,children:s}=n,a=aS(r),c=typeof s=="function"?s({present:a.isPresent}):f.Children.only(s),d=ze(a.ref,lS(c));return typeof s=="function"||a.isPresent?f.cloneElement(c,{ref:d}):null};It.displayName="Presence";function aS(n){const[r,s]=f.useState(),a=f.useRef(null),c=f.useRef(n),d=f.useRef("none"),p=n?"mounted":"unmounted",[m,h]=iS(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.useEffect(()=>{const v=Ma(a.current);d.current=m==="mounted"?v:"none"},[m]),Rt(()=>{const v=a.current,y=c.current;if(y!==n){const b=d.current,S=Ma(v);n?h("MOUNT"):S==="none"||v?.display==="none"?h("UNMOUNT"):h(y&&b!==S?"ANIMATION_OUT":"UNMOUNT"),c.current=n}},[n,h]),Rt(()=>{if(r){let v;const y=r.ownerDocument.defaultView??window,x=S=>{const C=Ma(a.current).includes(CSS.escape(S.animationName));if(S.target===r&&C&&(h("ANIMATION_END"),!c.current)){const k=r.style.animationFillMode;r.style.animationFillMode="forwards",v=y.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=k)})}},b=S=>{S.target===r&&(d.current=Ma(a.current))};return r.addEventListener("animationstart",b),r.addEventListener("animationcancel",x),r.addEventListener("animationend",x),()=>{y.clearTimeout(v),r.removeEventListener("animationstart",b),r.removeEventListener("animationcancel",x),r.removeEventListener("animationend",x)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:f.useCallback(v=>{a.current=v?getComputedStyle(v):null,s(v)},[])}}function Ma(n){return n?.animationName||"none"}function lS(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function cS(n,r){const s=f.createContext(r),a=d=>{const{children:p,...m}=d,h=f.useMemo(()=>m,Object.values(m));return o.jsx(s.Provider,{value:h,children:p})};a.displayName=n+"Provider";function c(d){const p=f.useContext(s);if(p)return p;if(r!==void 0)return r;throw new Error(`\`${d}\` must be used within \`${n}\``)}return[a,c]}function cn(n,r=[]){let s=[];function a(d,p){const m=f.createContext(p),h=s.length;s=[...s,p];const v=x=>{const{scope:b,children:S,...N}=x,C=b?.[n]?.[h]||m,k=f.useMemo(()=>N,Object.values(N));return o.jsx(C.Provider,{value:k,children:S})};v.displayName=d+"Provider";function y(x,b){const S=b?.[n]?.[h]||m,N=f.useContext(S);if(N)return N;if(p!==void 0)return p;throw new Error(`\`${x}\` must be used within \`${d}\``)}return[v,y]}const c=()=>{const d=s.map(p=>f.createContext(p));return function(m){const h=m?.[n]||d;return f.useMemo(()=>({[`__scope${n}`]:{...m,[n]:h}}),[m,h])}};return c.scopeName=n,[a,dS(c,...r)]}function dS(...n){const r=n[0];if(n.length===1)return r;const s=()=>{const a=n.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(d){const p=a.reduce((m,{useScope:h,scopeName:v})=>{const x=h(d)[`__scope${v}`];return{...m,...x}},{});return f.useMemo(()=>({[`__scope${r.scopeName}`]:p}),[p])}};return s.scopeName=r.scopeName,s}function Et(n){const r=f.useRef(n);return f.useEffect(()=>{r.current=n}),f.useMemo(()=>(...s)=>r.current?.(...s),[])}var uS=f.createContext(void 0);function pi(n){const r=f.useContext(uS);return n||r||"ltr"}function tu(n,[r,s]){return Math.min(s,Math.max(r,n))}function ge(n,r,{checkForDefaultPrevented:s=!0}={}){return function(c){if(n?.(c),s===!1||!c.defaultPrevented)return r?.(c)}}function pS(n,r){return f.useReducer((s,a)=>r[s][a]??s,n)}var Cu="ScrollArea",[Ah]=cn(Cu),[fS,bn]=Ah(Cu),Th=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,type:a="hover",dir:c,scrollHideDelay:d=600,...p}=n,[m,h]=f.useState(null),[v,y]=f.useState(null),[x,b]=f.useState(null),[S,N]=f.useState(null),[C,k]=f.useState(null),[P,j]=f.useState(0),[M,R]=f.useState(0),[I,W]=f.useState(!1),[z,V]=f.useState(!1),re=ze(r,de=>h(de)),Q=pi(c);return o.jsx(fS,{scope:s,type:a,dir:Q,scrollHideDelay:d,scrollArea:m,viewport:v,onViewportChange:y,content:x,onContentChange:b,scrollbarX:S,onScrollbarXChange:N,scrollbarXEnabled:I,onScrollbarXEnabledChange:W,scrollbarY:C,onScrollbarYChange:k,scrollbarYEnabled:z,onScrollbarYEnabledChange:V,onCornerWidthChange:j,onCornerHeightChange:R,children:o.jsx(Me.div,{dir:Q,...p,ref:re,style:{position:"relative","--radix-scroll-area-corner-width":P+"px","--radix-scroll-area-corner-height":M+"px",...n.style}})})});Th.displayName=Cu;var Mh="ScrollAreaViewport",Ih=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,children:a,nonce:c,...d}=n,p=bn(Mh,s),m=f.useRef(null),h=ze(r,m,p.onViewportChange);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:c}),o.jsx(Me.div,{"data-radix-scroll-area-viewport":"",...d,ref:h,style:{overflowX:p.scrollbarXEnabled?"scroll":"hidden",overflowY:p.scrollbarYEnabled?"scroll":"hidden",...n.style},children:o.jsx("div",{ref:p.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});Ih.displayName=Mh;var Kn="ScrollAreaScrollbar",_h=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=bn(Kn,n.__scopeScrollArea),{onScrollbarXEnabledChange:d,onScrollbarYEnabledChange:p}=c,m=n.orientation==="horizontal";return f.useEffect(()=>(m?d(!0):p(!0),()=>{m?d(!1):p(!1)}),[m,d,p]),c.type==="hover"?o.jsx(mS,{...a,ref:r,forceMount:s}):c.type==="scroll"?o.jsx(gS,{...a,ref:r,forceMount:s}):c.type==="auto"?o.jsx(Dh,{...a,ref:r,forceMount:s}):c.type==="always"?o.jsx(ku,{...a,ref:r}):null});_h.displayName=Kn;var mS=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=bn(Kn,n.__scopeScrollArea),[d,p]=f.useState(!1);return f.useEffect(()=>{const m=c.scrollArea;let h=0;if(m){const v=()=>{window.clearTimeout(h),p(!0)},y=()=>{h=window.setTimeout(()=>p(!1),c.scrollHideDelay)};return m.addEventListener("pointerenter",v),m.addEventListener("pointerleave",y),()=>{window.clearTimeout(h),m.removeEventListener("pointerenter",v),m.removeEventListener("pointerleave",y)}}},[c.scrollArea,c.scrollHideDelay]),o.jsx(It,{present:s||d,children:o.jsx(Dh,{"data-state":d?"visible":"hidden",...a,ref:r})})}),gS=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=bn(Kn,n.__scopeScrollArea),d=n.orientation==="horizontal",p=ul(()=>h("SCROLL_END"),100),[m,h]=pS("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return f.useEffect(()=>{if(m==="idle"){const v=window.setTimeout(()=>h("HIDE"),c.scrollHideDelay);return()=>window.clearTimeout(v)}},[m,c.scrollHideDelay,h]),f.useEffect(()=>{const v=c.viewport,y=d?"scrollLeft":"scrollTop";if(v){let x=v[y];const b=()=>{const S=v[y];x!==S&&(h("SCROLL"),p()),x=S};return v.addEventListener("scroll",b),()=>v.removeEventListener("scroll",b)}},[c.viewport,d,h,p]),o.jsx(It,{present:s||m!=="hidden",children:o.jsx(ku,{"data-state":m==="hidden"?"hidden":"visible",...a,ref:r,onPointerEnter:ge(n.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:ge(n.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),Dh=f.forwardRef((n,r)=>{const s=bn(Kn,n.__scopeScrollArea),{forceMount:a,...c}=n,[d,p]=f.useState(!1),m=n.orientation==="horizontal",h=ul(()=>{if(s.viewport){const v=s.viewport.offsetWidth<s.viewport.scrollWidth,y=s.viewport.offsetHeight<s.viewport.scrollHeight;p(m?v:y)}},10);return Zs(s.viewport,h),Zs(s.content,h),o.jsx(It,{present:a||d,children:o.jsx(ku,{"data-state":d?"visible":"hidden",...c,ref:r})})}),ku=f.forwardRef((n,r)=>{const{orientation:s="vertical",...a}=n,c=bn(Kn,n.__scopeScrollArea),d=f.useRef(null),p=f.useRef(0),[m,h]=f.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),v=$h(m.viewport,m.content),y={...a,sizes:m,onSizesChange:h,hasThumb:v>0&&v<1,onThumbChange:b=>d.current=b,onThumbPointerUp:()=>p.current=0,onThumbPointerDown:b=>p.current=b};function x(b,S){return wS(b,p.current,m,S)}return s==="horizontal"?o.jsx(hS,{...y,ref:r,onThumbPositionChange:()=>{if(c.viewport&&d.current){const b=c.viewport.scrollLeft,S=yg(b,m,c.dir);d.current.style.transform=`translate3d(${S}px, 0, 0)`}},onWheelScroll:b=>{c.viewport&&(c.viewport.scrollLeft=b)},onDragScroll:b=>{c.viewport&&(c.viewport.scrollLeft=x(b,c.dir))}}):s==="vertical"?o.jsx(vS,{...y,ref:r,onThumbPositionChange:()=>{if(c.viewport&&d.current){const b=c.viewport.scrollTop,S=yg(b,m);d.current.style.transform=`translate3d(0, ${S}px, 0)`}},onWheelScroll:b=>{c.viewport&&(c.viewport.scrollTop=b)},onDragScroll:b=>{c.viewport&&(c.viewport.scrollTop=x(b))}}):null}),hS=f.forwardRef((n,r)=>{const{sizes:s,onSizesChange:a,...c}=n,d=bn(Kn,n.__scopeScrollArea),[p,m]=f.useState(),h=f.useRef(null),v=ze(r,h,d.onScrollbarXChange);return f.useEffect(()=>{h.current&&m(getComputedStyle(h.current))},[h]),o.jsx(Lh,{"data-orientation":"horizontal",...c,ref:v,sizes:s,style:{bottom:0,left:d.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:d.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":dl(s)+"px",...n.style},onThumbPointerDown:y=>n.onThumbPointerDown(y.x),onDragScroll:y=>n.onDragScroll(y.x),onWheelScroll:(y,x)=>{if(d.viewport){const b=d.viewport.scrollLeft+y.deltaX;n.onWheelScroll(b),Bh(b,x)&&y.preventDefault()}},onResize:()=>{h.current&&d.viewport&&p&&a({content:d.viewport.scrollWidth,viewport:d.viewport.offsetWidth,scrollbar:{size:h.current.clientWidth,paddingStart:Ja(p.paddingLeft),paddingEnd:Ja(p.paddingRight)}})}})}),vS=f.forwardRef((n,r)=>{const{sizes:s,onSizesChange:a,...c}=n,d=bn(Kn,n.__scopeScrollArea),[p,m]=f.useState(),h=f.useRef(null),v=ze(r,h,d.onScrollbarYChange);return f.useEffect(()=>{h.current&&m(getComputedStyle(h.current))},[h]),o.jsx(Lh,{"data-orientation":"vertical",...c,ref:v,sizes:s,style:{top:0,right:d.dir==="ltr"?0:void 0,left:d.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":dl(s)+"px",...n.style},onThumbPointerDown:y=>n.onThumbPointerDown(y.y),onDragScroll:y=>n.onDragScroll(y.y),onWheelScroll:(y,x)=>{if(d.viewport){const b=d.viewport.scrollTop+y.deltaY;n.onWheelScroll(b),Bh(b,x)&&y.preventDefault()}},onResize:()=>{h.current&&d.viewport&&p&&a({content:d.viewport.scrollHeight,viewport:d.viewport.offsetHeight,scrollbar:{size:h.current.clientHeight,paddingStart:Ja(p.paddingTop),paddingEnd:Ja(p.paddingBottom)}})}})}),[xS,Oh]=Ah(Kn),Lh=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,sizes:a,hasThumb:c,onThumbChange:d,onThumbPointerUp:p,onThumbPointerDown:m,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:y,onResize:x,...b}=n,S=bn(Kn,s),[N,C]=f.useState(null),k=ze(r,re=>C(re)),P=f.useRef(null),j=f.useRef(""),M=S.viewport,R=a.content-a.viewport,I=Et(y),W=Et(h),z=ul(x,10);function V(re){if(P.current){const Q=re.clientX-P.current.left,de=re.clientY-P.current.top;v({x:Q,y:de})}}return f.useEffect(()=>{const re=Q=>{const de=Q.target;N?.contains(de)&&I(Q,R)};return document.addEventListener("wheel",re,{passive:!1}),()=>document.removeEventListener("wheel",re,{passive:!1})},[M,N,R,I]),f.useEffect(W,[a,W]),Zs(N,z),Zs(S.content,z),o.jsx(xS,{scope:s,scrollbar:N,hasThumb:c,onThumbChange:Et(d),onThumbPointerUp:Et(p),onThumbPositionChange:W,onThumbPointerDown:Et(m),children:o.jsx(Me.div,{...b,ref:k,style:{position:"absolute",...b.style},onPointerDown:ge(n.onPointerDown,re=>{re.button===0&&(re.target.setPointerCapture(re.pointerId),P.current=N.getBoundingClientRect(),j.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),V(re))}),onPointerMove:ge(n.onPointerMove,V),onPointerUp:ge(n.onPointerUp,re=>{const Q=re.target;Q.hasPointerCapture(re.pointerId)&&Q.releasePointerCapture(re.pointerId),document.body.style.webkitUserSelect=j.current,S.viewport&&(S.viewport.style.scrollBehavior=""),P.current=null})})})}),Xa="ScrollAreaThumb",zh=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=Oh(Xa,n.__scopeScrollArea);return o.jsx(It,{present:s||c.hasThumb,children:o.jsx(yS,{ref:r,...a})})}),yS=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,style:a,...c}=n,d=bn(Xa,s),p=Oh(Xa,s),{onThumbPositionChange:m}=p,h=ze(r,x=>p.onThumbChange(x)),v=f.useRef(void 0),y=ul(()=>{v.current&&(v.current(),v.current=void 0)},100);return f.useEffect(()=>{const x=d.viewport;if(x){const b=()=>{if(y(),!v.current){const S=SS(x,m);v.current=S,m()}};return m(),x.addEventListener("scroll",b),()=>x.removeEventListener("scroll",b)}},[d.viewport,y,m]),o.jsx(Me.div,{"data-state":p.hasThumb?"visible":"hidden",...c,ref:h,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:ge(n.onPointerDownCapture,x=>{const S=x.target.getBoundingClientRect(),N=x.clientX-S.left,C=x.clientY-S.top;p.onThumbPointerDown({x:N,y:C})}),onPointerUp:ge(n.onPointerUp,p.onThumbPointerUp)})});zh.displayName=Xa;var Nu="ScrollAreaCorner",Fh=f.forwardRef((n,r)=>{const s=bn(Nu,n.__scopeScrollArea),a=!!(s.scrollbarX&&s.scrollbarY);return s.type!=="scroll"&&a?o.jsx(bS,{...n,ref:r}):null});Fh.displayName=Nu;var bS=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,...a}=n,c=bn(Nu,s),[d,p]=f.useState(0),[m,h]=f.useState(0),v=!!(d&&m);return Zs(c.scrollbarX,()=>{const y=c.scrollbarX?.offsetHeight||0;c.onCornerHeightChange(y),h(y)}),Zs(c.scrollbarY,()=>{const y=c.scrollbarY?.offsetWidth||0;c.onCornerWidthChange(y),p(y)}),v?o.jsx(Me.div,{...a,ref:r,style:{width:d,height:m,position:"absolute",right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:0,...n.style}}):null});function Ja(n){return n?parseInt(n,10):0}function $h(n,r){const s=n/r;return isNaN(s)?0:s}function dl(n){const r=$h(n.viewport,n.content),s=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,a=(n.scrollbar.size-s)*r;return Math.max(a,18)}function wS(n,r,s,a="ltr"){const c=dl(s),d=c/2,p=r||d,m=c-p,h=s.scrollbar.paddingStart+p,v=s.scrollbar.size-s.scrollbar.paddingEnd-m,y=s.content-s.viewport,x=a==="ltr"?[0,y]:[y*-1,0];return Hh([h,v],x)(n)}function yg(n,r,s="ltr"){const a=dl(r),c=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,d=r.scrollbar.size-c,p=r.content-r.viewport,m=d-a,h=s==="ltr"?[0,p]:[p*-1,0],v=tu(n,h);return Hh([0,p],[0,m])(v)}function Hh(n,r){return s=>{if(n[0]===n[1]||r[0]===r[1])return r[0];const a=(r[1]-r[0])/(n[1]-n[0]);return r[0]+a*(s-n[0])}}function Bh(n,r){return n>0&&n<r}var SS=(n,r=()=>{})=>{let s={left:n.scrollLeft,top:n.scrollTop},a=0;return(function c(){const d={left:n.scrollLeft,top:n.scrollTop},p=s.left!==d.left,m=s.top!==d.top;(p||m)&&r(),s=d,a=window.requestAnimationFrame(c)})(),()=>window.cancelAnimationFrame(a)};function ul(n,r){const s=Et(n),a=f.useRef(0);return f.useEffect(()=>()=>window.clearTimeout(a.current),[]),f.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(s,r)},[s,r])}function Zs(n,r){const s=Et(r);Rt(()=>{let a=0;if(n){const c=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(s)});return c.observe(n),()=>{window.cancelAnimationFrame(a),c.unobserve(n)}}},[n,s])}var CS=Th,kS=Ih,NS=Fh;function jS({className:n,children:r,...s}){return o.jsxs(CS,{"data-slot":"scroll-area",className:Fe("relative",n),...s,children:[o.jsx(kS,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 h-full w-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 overflow-x-hidden",children:r}),o.jsx(PS,{}),o.jsx(NS,{})]})}function PS({className:n,orientation:r="vertical",...s}){return o.jsx(_h,{"data-slot":"scroll-area-scrollbar",orientation:r,className:Fe("flex touch-none p-px transition-colors select-none",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",n),...s,children:o.jsx(zh,{"data-slot":"scroll-area-thumb",className:"bg-gray-300 hover:bg-gray-500 relative flex-1 rounded-full transition-colors"})})}var ES=cl[" useInsertionEffect ".trim().toString()]||Rt;function An({prop:n,defaultProp:r,onChange:s=()=>{},caller:a}){const[c,d,p]=RS({defaultProp:r,onChange:s}),m=n!==void 0,h=m?n:c;{const y=f.useRef(n!==void 0);f.useEffect(()=>{const x=y.current;x!==m&&console.warn(`${a} is changing from ${x?"controlled":"uncontrolled"} to ${m?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=m},[m,a])}const v=f.useCallback(y=>{if(m){const x=AS(y)?y(n):y;x!==n&&p.current?.(x)}else d(y)},[m,n,d,p]);return[h,v]}function RS({defaultProp:n,onChange:r}){const[s,a]=f.useState(n),c=f.useRef(s),d=f.useRef(r);return ES(()=>{d.current=r},[r]),f.useEffect(()=>{c.current!==s&&(d.current?.(s),c.current=s)},[s,c]),[s,a,d]}function AS(n){return typeof n=="function"}function bg(n){const r=TS(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(IS);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function TS(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=DS(c),m=_S(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var MS=Symbol("radix.slottable");function IS(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===MS}function _S(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function DS(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function ju(n){const r=n+"CollectionProvider",[s,a]=cn(r),[c,d]=s(r,{collectionRef:{current:null},itemMap:new Map}),p=C=>{const{scope:k,children:P}=C,j=Xt.useRef(null),M=Xt.useRef(new Map).current;return o.jsx(c,{scope:k,itemMap:M,collectionRef:j,children:P})};p.displayName=r;const m=n+"CollectionSlot",h=bg(m),v=Xt.forwardRef((C,k)=>{const{scope:P,children:j}=C,M=d(m,P),R=ze(k,M.collectionRef);return o.jsx(h,{ref:R,children:j})});v.displayName=m;const y=n+"CollectionItemSlot",x="data-radix-collection-item",b=bg(y),S=Xt.forwardRef((C,k)=>{const{scope:P,children:j,...M}=C,R=Xt.useRef(null),I=ze(k,R),W=d(y,P);return Xt.useEffect(()=>(W.itemMap.set(R,{ref:R,...M}),()=>void W.itemMap.delete(R))),o.jsx(b,{[x]:"",ref:I,children:j})});S.displayName=y;function N(C){const k=d(n+"CollectionConsumer",C);return Xt.useCallback(()=>{const j=k.collectionRef.current;if(!j)return[];const M=Array.from(j.querySelectorAll(`[${x}]`));return Array.from(k.itemMap.values()).sort((W,z)=>M.indexOf(W.ref.current)-M.indexOf(z.ref.current))},[k.collectionRef,k.itemMap])}return[{Provider:p,Slot:v,ItemSlot:S},N,a]}function OS(n,r=globalThis?.document){const s=Et(n);f.useEffect(()=>{const a=c=>{c.key==="Escape"&&s(c)};return r.addEventListener("keydown",a,{capture:!0}),()=>r.removeEventListener("keydown",a,{capture:!0})},[s,r])}var LS="DismissableLayer",nu="dismissableLayer.update",zS="dismissableLayer.pointerDownOutside",FS="dismissableLayer.focusOutside",wg,Wh=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),fi=f.forwardRef((n,r)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:p,onDismiss:m,...h}=n,v=f.useContext(Wh),[y,x]=f.useState(null),b=y?.ownerDocument??globalThis?.document,[,S]=f.useState({}),N=ze(r,z=>x(z)),C=Array.from(v.layers),[k]=[...v.layersWithOutsidePointerEventsDisabled].slice(-1),P=C.indexOf(k),j=y?C.indexOf(y):-1,M=v.layersWithOutsidePointerEventsDisabled.size>0,R=j>=P,I=BS(z=>{const V=z.target,re=[...v.branches].some(Q=>Q.contains(V));!R||re||(c?.(z),p?.(z),z.defaultPrevented||m?.())},b),W=WS(z=>{const V=z.target;[...v.branches].some(Q=>Q.contains(V))||(d?.(z),p?.(z),z.defaultPrevented||m?.())},b);return OS(z=>{j===v.layers.size-1&&(a?.(z),!z.defaultPrevented&&m&&(z.preventDefault(),m()))},b),f.useEffect(()=>{if(y)return s&&(v.layersWithOutsidePointerEventsDisabled.size===0&&(wg=b.body.style.pointerEvents,b.body.style.pointerEvents="none"),v.layersWithOutsidePointerEventsDisabled.add(y)),v.layers.add(y),Sg(),()=>{s&&v.layersWithOutsidePointerEventsDisabled.size===1&&(b.body.style.pointerEvents=wg)}},[y,b,s,v]),f.useEffect(()=>()=>{y&&(v.layers.delete(y),v.layersWithOutsidePointerEventsDisabled.delete(y),Sg())},[y,v]),f.useEffect(()=>{const z=()=>S({});return document.addEventListener(nu,z),()=>document.removeEventListener(nu,z)},[]),o.jsx(Me.div,{...h,ref:N,style:{pointerEvents:M?R?"auto":"none":void 0,...n.style},onFocusCapture:ge(n.onFocusCapture,W.onFocusCapture),onBlurCapture:ge(n.onBlurCapture,W.onBlurCapture),onPointerDownCapture:ge(n.onPointerDownCapture,I.onPointerDownCapture)})});fi.displayName=LS;var $S="DismissableLayerBranch",HS=f.forwardRef((n,r)=>{const s=f.useContext(Wh),a=f.useRef(null),c=ze(r,a);return f.useEffect(()=>{const d=a.current;if(d)return s.branches.add(d),()=>{s.branches.delete(d)}},[s.branches]),o.jsx(Me.div,{...n,ref:c})});HS.displayName=$S;function BS(n,r=globalThis?.document){const s=Et(n),a=f.useRef(!1),c=f.useRef(()=>{});return f.useEffect(()=>{const d=m=>{if(m.target&&!a.current){let h=function(){Vh(zS,s,v,{discrete:!0})};const v={originalEvent:m};m.pointerType==="touch"?(r.removeEventListener("click",c.current),c.current=h,r.addEventListener("click",c.current,{once:!0})):h()}else r.removeEventListener("click",c.current);a.current=!1},p=window.setTimeout(()=>{r.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(p),r.removeEventListener("pointerdown",d),r.removeEventListener("click",c.current)}},[r,s]),{onPointerDownCapture:()=>a.current=!0}}function WS(n,r=globalThis?.document){const s=Et(n),a=f.useRef(!1);return f.useEffect(()=>{const c=d=>{d.target&&!a.current&&Vh(FS,s,{originalEvent:d},{discrete:!1})};return r.addEventListener("focusin",c),()=>r.removeEventListener("focusin",c)},[r,s]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}function Sg(){const n=new CustomEvent(nu);document.dispatchEvent(n)}function Vh(n,r,s,{discrete:a}){const c=s.originalEvent.target,d=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:s});r&&c.addEventListener(n,r,{once:!0}),a?Rh(c,d):c.dispatchEvent(d)}var Ad=0;function Pu(){f.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??Cg()),document.body.insertAdjacentElement("beforeend",n[1]??Cg()),Ad++,()=>{Ad===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Ad--}},[])}function Cg(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var Td="focusScope.autoFocusOnMount",Md="focusScope.autoFocusOnUnmount",kg={bubbles:!1,cancelable:!0},VS="FocusScope",pl=f.forwardRef((n,r)=>{const{loop:s=!1,trapped:a=!1,onMountAutoFocus:c,onUnmountAutoFocus:d,...p}=n,[m,h]=f.useState(null),v=Et(c),y=Et(d),x=f.useRef(null),b=ze(r,C=>h(C)),S=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(a){let C=function(M){if(S.paused||!m)return;const R=M.target;m.contains(R)?x.current=R:Mr(x.current,{select:!0})},k=function(M){if(S.paused||!m)return;const R=M.relatedTarget;R!==null&&(m.contains(R)||Mr(x.current,{select:!0}))},P=function(M){if(document.activeElement===document.body)for(const I of M)I.removedNodes.length>0&&Mr(m)};document.addEventListener("focusin",C),document.addEventListener("focusout",k);const j=new MutationObserver(P);return m&&j.observe(m,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",C),document.removeEventListener("focusout",k),j.disconnect()}}},[a,m,S.paused]),f.useEffect(()=>{if(m){jg.add(S);const C=document.activeElement;if(!m.contains(C)){const P=new CustomEvent(Td,kg);m.addEventListener(Td,v),m.dispatchEvent(P),P.defaultPrevented||(US(YS(Uh(m)),{select:!0}),document.activeElement===C&&Mr(m))}return()=>{m.removeEventListener(Td,v),setTimeout(()=>{const P=new CustomEvent(Md,kg);m.addEventListener(Md,y),m.dispatchEvent(P),P.defaultPrevented||Mr(C??document.body,{select:!0}),m.removeEventListener(Md,y),jg.remove(S)},0)}}},[m,v,y,S]);const N=f.useCallback(C=>{if(!s&&!a||S.paused)return;const k=C.key==="Tab"&&!C.altKey&&!C.ctrlKey&&!C.metaKey,P=document.activeElement;if(k&&P){const j=C.currentTarget,[M,R]=GS(j);M&&R?!C.shiftKey&&P===R?(C.preventDefault(),s&&Mr(M,{select:!0})):C.shiftKey&&P===M&&(C.preventDefault(),s&&Mr(R,{select:!0})):P===j&&C.preventDefault()}},[s,a,S.paused]);return o.jsx(Me.div,{tabIndex:-1,...p,ref:b,onKeyDown:N})});pl.displayName=VS;function US(n,{select:r=!1}={}){const s=document.activeElement;for(const a of n)if(Mr(a,{select:r}),document.activeElement!==s)return}function GS(n){const r=Uh(n),s=Ng(r,n),a=Ng(r.reverse(),n);return[s,a]}function Uh(n){const r=[],s=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const c=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||c?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)r.push(s.currentNode);return r}function Ng(n,r){for(const s of n)if(!QS(s,{upTo:r}))return s}function QS(n,{upTo:r}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(r!==void 0&&n===r)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function qS(n){return n instanceof HTMLInputElement&&"select"in n}function Mr(n,{select:r=!1}={}){if(n&&n.focus){const s=document.activeElement;n.focus({preventScroll:!0}),n!==s&&qS(n)&&r&&n.select()}}var jg=KS();function KS(){let n=[];return{add(r){const s=n[0];r!==s&&s?.pause(),n=Pg(n,r),n.unshift(r)},remove(r){n=Pg(n,r),n[0]?.resume()}}}function Pg(n,r){const s=[...n],a=s.indexOf(r);return a!==-1&&s.splice(a,1),s}function YS(n){return n.filter(r=>r.tagName!=="A")}var XS=cl[" useId ".trim().toString()]||(()=>{}),JS=0;function Jt(n){const[r,s]=f.useState(XS());return Rt(()=>{s(a=>a??String(JS++))},[n]),n||(r?`radix-${r}`:"")}const ZS=["top","right","bottom","left"],Dr=Math.min,an=Math.max,Za=Math.round,Ia=Math.floor,Vn=n=>({x:n,y:n}),eC={left:"right",right:"left",bottom:"top",top:"bottom"},tC={start:"end",end:"start"};function ru(n,r,s){return an(n,Dr(r,s))}function lr(n,r){return typeof n=="function"?n(r):n}function cr(n){return n.split("-")[0]}function so(n){return n.split("-")[1]}function Eu(n){return n==="x"?"y":"x"}function Ru(n){return n==="y"?"height":"width"}const nC=new Set(["top","bottom"]);function Wn(n){return nC.has(cr(n))?"y":"x"}function Au(n){return Eu(Wn(n))}function rC(n,r,s){s===void 0&&(s=!1);const a=so(n),c=Au(n),d=Ru(c);let p=c==="x"?a===(s?"end":"start")?"right":"left":a==="start"?"bottom":"top";return r.reference[d]>r.floating[d]&&(p=el(p)),[p,el(p)]}function sC(n){const r=el(n);return[su(n),r,su(r)]}function su(n){return n.replace(/start|end/g,r=>tC[r])}const Eg=["left","right"],Rg=["right","left"],oC=["top","bottom"],iC=["bottom","top"];function aC(n,r,s){switch(n){case"top":case"bottom":return s?r?Rg:Eg:r?Eg:Rg;case"left":case"right":return r?oC:iC;default:return[]}}function lC(n,r,s,a){const c=so(n);let d=aC(cr(n),s==="start",a);return c&&(d=d.map(p=>p+"-"+c),r&&(d=d.concat(d.map(su)))),d}function el(n){return n.replace(/left|right|bottom|top/g,r=>eC[r])}function cC(n){return{top:0,right:0,bottom:0,left:0,...n}}function Gh(n){return typeof n!="number"?cC(n):{top:n,right:n,bottom:n,left:n}}function tl(n){const{x:r,y:s,width:a,height:c}=n;return{width:a,height:c,top:s,left:r,right:r+a,bottom:s+c,x:r,y:s}}function Ag(n,r,s){let{reference:a,floating:c}=n;const d=Wn(r),p=Au(r),m=Ru(p),h=cr(r),v=d==="y",y=a.x+a.width/2-c.width/2,x=a.y+a.height/2-c.height/2,b=a[m]/2-c[m]/2;let S;switch(h){case"top":S={x:y,y:a.y-c.height};break;case"bottom":S={x:y,y:a.y+a.height};break;case"right":S={x:a.x+a.width,y:x};break;case"left":S={x:a.x-c.width,y:x};break;default:S={x:a.x,y:a.y}}switch(so(r)){case"start":S[p]-=b*(s&&v?-1:1);break;case"end":S[p]+=b*(s&&v?-1:1);break}return S}const dC=async(n,r,s)=>{const{placement:a="bottom",strategy:c="absolute",middleware:d=[],platform:p}=s,m=d.filter(Boolean),h=await(p.isRTL==null?void 0:p.isRTL(r));let v=await p.getElementRects({reference:n,floating:r,strategy:c}),{x:y,y:x}=Ag(v,a,h),b=a,S={},N=0;for(let C=0;C<m.length;C++){const{name:k,fn:P}=m[C],{x:j,y:M,data:R,reset:I}=await P({x:y,y:x,initialPlacement:a,placement:b,strategy:c,middlewareData:S,rects:v,platform:p,elements:{reference:n,floating:r}});y=j??y,x=M??x,S={...S,[k]:{...S[k],...R}},I&&N<=50&&(N++,typeof I=="object"&&(I.placement&&(b=I.placement),I.rects&&(v=I.rects===!0?await p.getElementRects({reference:n,floating:r,strategy:c}):I.rects),{x:y,y:x}=Ag(v,b,h)),C=-1)}return{x:y,y:x,placement:b,strategy:c,middlewareData:S}};async function ei(n,r){var s;r===void 0&&(r={});const{x:a,y:c,platform:d,rects:p,elements:m,strategy:h}=n,{boundary:v="clippingAncestors",rootBoundary:y="viewport",elementContext:x="floating",altBoundary:b=!1,padding:S=0}=lr(r,n),N=Gh(S),k=m[b?x==="floating"?"reference":"floating":x],P=tl(await d.getClippingRect({element:(s=await(d.isElement==null?void 0:d.isElement(k)))==null||s?k:k.contextElement||await(d.getDocumentElement==null?void 0:d.getDocumentElement(m.floating)),boundary:v,rootBoundary:y,strategy:h})),j=x==="floating"?{x:a,y:c,width:p.floating.width,height:p.floating.height}:p.reference,M=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m.floating)),R=await(d.isElement==null?void 0:d.isElement(M))?await(d.getScale==null?void 0:d.getScale(M))||{x:1,y:1}:{x:1,y:1},I=tl(d.convertOffsetParentRelativeRectToViewportRelativeRect?await d.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:j,offsetParent:M,strategy:h}):j);return{top:(P.top-I.top+N.top)/R.y,bottom:(I.bottom-P.bottom+N.bottom)/R.y,left:(P.left-I.left+N.left)/R.x,right:(I.right-P.right+N.right)/R.x}}const uC=n=>({name:"arrow",options:n,async fn(r){const{x:s,y:a,placement:c,rects:d,platform:p,elements:m,middlewareData:h}=r,{element:v,padding:y=0}=lr(n,r)||{};if(v==null)return{};const x=Gh(y),b={x:s,y:a},S=Au(c),N=Ru(S),C=await p.getDimensions(v),k=S==="y",P=k?"top":"left",j=k?"bottom":"right",M=k?"clientHeight":"clientWidth",R=d.reference[N]+d.reference[S]-b[S]-d.floating[N],I=b[S]-d.reference[S],W=await(p.getOffsetParent==null?void 0:p.getOffsetParent(v));let z=W?W[M]:0;(!z||!await(p.isElement==null?void 0:p.isElement(W)))&&(z=m.floating[M]||d.floating[N]);const V=R/2-I/2,re=z/2-C[N]/2-1,Q=Dr(x[P],re),de=Dr(x[j],re),ie=Q,me=z-C[N]-de,ue=z/2-C[N]/2+V,fe=ru(ie,ue,me),ee=!h.arrow&&so(c)!=null&&ue!==fe&&d.reference[N]/2-(ue<ie?Q:de)-C[N]/2<0,Y=ee?ue<ie?ue-ie:ue-me:0;return{[S]:b[S]+Y,data:{[S]:fe,centerOffset:ue-fe-Y,...ee&&{alignmentOffset:Y}},reset:ee}}}),pC=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(r){var s,a;const{placement:c,middlewareData:d,rects:p,initialPlacement:m,platform:h,elements:v}=r,{mainAxis:y=!0,crossAxis:x=!0,fallbackPlacements:b,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:N="none",flipAlignment:C=!0,...k}=lr(n,r);if((s=d.arrow)!=null&&s.alignmentOffset)return{};const P=cr(c),j=Wn(m),M=cr(m)===m,R=await(h.isRTL==null?void 0:h.isRTL(v.floating)),I=b||(M||!C?[el(m)]:sC(m)),W=N!=="none";!b&&W&&I.push(...lC(m,C,N,R));const z=[m,...I],V=await ei(r,k),re=[];let Q=((a=d.flip)==null?void 0:a.overflows)||[];if(y&&re.push(V[P]),x){const ue=rC(c,p,R);re.push(V[ue[0]],V[ue[1]])}if(Q=[...Q,{placement:c,overflows:re}],!re.every(ue=>ue<=0)){var de,ie;const ue=(((de=d.flip)==null?void 0:de.index)||0)+1,fe=z[ue];if(fe&&(!(x==="alignment"?j!==Wn(fe):!1)||Q.every(_=>Wn(_.placement)===j?_.overflows[0]>0:!0)))return{data:{index:ue,overflows:Q},reset:{placement:fe}};let ee=(ie=Q.filter(Y=>Y.overflows[0]<=0).sort((Y,_)=>Y.overflows[1]-_.overflows[1])[0])==null?void 0:ie.placement;if(!ee)switch(S){case"bestFit":{var me;const Y=(me=Q.filter(_=>{if(W){const H=Wn(_.placement);return H===j||H==="y"}return!0}).map(_=>[_.placement,_.overflows.filter(H=>H>0).reduce((H,J)=>H+J,0)]).sort((_,H)=>_[1]-H[1])[0])==null?void 0:me[0];Y&&(ee=Y);break}case"initialPlacement":ee=m;break}if(c!==ee)return{reset:{placement:ee}}}return{}}}};function Tg(n,r){return{top:n.top-r.height,right:n.right-r.width,bottom:n.bottom-r.height,left:n.left-r.width}}function Mg(n){return ZS.some(r=>n[r]>=0)}const fC=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(r){const{rects:s}=r,{strategy:a="referenceHidden",...c}=lr(n,r);switch(a){case"referenceHidden":{const d=await ei(r,{...c,elementContext:"reference"}),p=Tg(d,s.reference);return{data:{referenceHiddenOffsets:p,referenceHidden:Mg(p)}}}case"escaped":{const d=await ei(r,{...c,altBoundary:!0}),p=Tg(d,s.floating);return{data:{escapedOffsets:p,escaped:Mg(p)}}}default:return{}}}}},Qh=new Set(["left","top"]);async function mC(n,r){const{placement:s,platform:a,elements:c}=n,d=await(a.isRTL==null?void 0:a.isRTL(c.floating)),p=cr(s),m=so(s),h=Wn(s)==="y",v=Qh.has(p)?-1:1,y=d&&h?-1:1,x=lr(r,n);let{mainAxis:b,crossAxis:S,alignmentAxis:N}=typeof x=="number"?{mainAxis:x,crossAxis:0,alignmentAxis:null}:{mainAxis:x.mainAxis||0,crossAxis:x.crossAxis||0,alignmentAxis:x.alignmentAxis};return m&&typeof N=="number"&&(S=m==="end"?N*-1:N),h?{x:S*y,y:b*v}:{x:b*v,y:S*y}}const gC=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(r){var s,a;const{x:c,y:d,placement:p,middlewareData:m}=r,h=await mC(r,n);return p===((s=m.offset)==null?void 0:s.placement)&&(a=m.arrow)!=null&&a.alignmentOffset?{}:{x:c+h.x,y:d+h.y,data:{...h,placement:p}}}}},hC=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(r){const{x:s,y:a,placement:c}=r,{mainAxis:d=!0,crossAxis:p=!1,limiter:m={fn:k=>{let{x:P,y:j}=k;return{x:P,y:j}}},...h}=lr(n,r),v={x:s,y:a},y=await ei(r,h),x=Wn(cr(c)),b=Eu(x);let S=v[b],N=v[x];if(d){const k=b==="y"?"top":"left",P=b==="y"?"bottom":"right",j=S+y[k],M=S-y[P];S=ru(j,S,M)}if(p){const k=x==="y"?"top":"left",P=x==="y"?"bottom":"right",j=N+y[k],M=N-y[P];N=ru(j,N,M)}const C=m.fn({...r,[b]:S,[x]:N});return{...C,data:{x:C.x-s,y:C.y-a,enabled:{[b]:d,[x]:p}}}}}},vC=function(n){return n===void 0&&(n={}),{options:n,fn(r){const{x:s,y:a,placement:c,rects:d,middlewareData:p}=r,{offset:m=0,mainAxis:h=!0,crossAxis:v=!0}=lr(n,r),y={x:s,y:a},x=Wn(c),b=Eu(x);let S=y[b],N=y[x];const C=lr(m,r),k=typeof C=="number"?{mainAxis:C,crossAxis:0}:{mainAxis:0,crossAxis:0,...C};if(h){const M=b==="y"?"height":"width",R=d.reference[b]-d.floating[M]+k.mainAxis,I=d.reference[b]+d.reference[M]-k.mainAxis;S<R?S=R:S>I&&(S=I)}if(v){var P,j;const M=b==="y"?"width":"height",R=Qh.has(cr(c)),I=d.reference[x]-d.floating[M]+(R&&((P=p.offset)==null?void 0:P[x])||0)+(R?0:k.crossAxis),W=d.reference[x]+d.reference[M]+(R?0:((j=p.offset)==null?void 0:j[x])||0)-(R?k.crossAxis:0);N<I?N=I:N>W&&(N=W)}return{[b]:S,[x]:N}}}},xC=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(r){var s,a;const{placement:c,rects:d,platform:p,elements:m}=r,{apply:h=()=>{},...v}=lr(n,r),y=await ei(r,v),x=cr(c),b=so(c),S=Wn(c)==="y",{width:N,height:C}=d.floating;let k,P;x==="top"||x==="bottom"?(k=x,P=b===(await(p.isRTL==null?void 0:p.isRTL(m.floating))?"start":"end")?"left":"right"):(P=x,k=b==="end"?"top":"bottom");const j=C-y.top-y.bottom,M=N-y.left-y.right,R=Dr(C-y[k],j),I=Dr(N-y[P],M),W=!r.middlewareData.shift;let z=R,V=I;if((s=r.middlewareData.shift)!=null&&s.enabled.x&&(V=M),(a=r.middlewareData.shift)!=null&&a.enabled.y&&(z=j),W&&!b){const Q=an(y.left,0),de=an(y.right,0),ie=an(y.top,0),me=an(y.bottom,0);S?V=N-2*(Q!==0||de!==0?Q+de:an(y.left,y.right)):z=C-2*(ie!==0||me!==0?ie+me:an(y.top,y.bottom))}await h({...r,availableWidth:V,availableHeight:z});const re=await p.getDimensions(m.floating);return N!==re.width||C!==re.height?{reset:{rects:!0}}:{}}}};function fl(){return typeof window<"u"}function oo(n){return qh(n)?(n.nodeName||"").toLowerCase():"#document"}function ln(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function Yn(n){var r;return(r=(qh(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function qh(n){return fl()?n instanceof Node||n instanceof ln(n).Node:!1}function Tn(n){return fl()?n instanceof Element||n instanceof ln(n).Element:!1}function qn(n){return fl()?n instanceof HTMLElement||n instanceof ln(n).HTMLElement:!1}function Ig(n){return!fl()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof ln(n).ShadowRoot}const yC=new Set(["inline","contents"]);function mi(n){const{overflow:r,overflowX:s,overflowY:a,display:c}=Mn(n);return/auto|scroll|overlay|hidden|clip/.test(r+a+s)&&!yC.has(c)}const bC=new Set(["table","td","th"]);function wC(n){return bC.has(oo(n))}const SC=[":popover-open",":modal"];function ml(n){return SC.some(r=>{try{return n.matches(r)}catch{return!1}})}const CC=["transform","translate","scale","rotate","perspective"],kC=["transform","translate","scale","rotate","perspective","filter"],NC=["paint","layout","strict","content"];function Tu(n){const r=Mu(),s=Tn(n)?Mn(n):n;return CC.some(a=>s[a]?s[a]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!r&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!r&&(s.filter?s.filter!=="none":!1)||kC.some(a=>(s.willChange||"").includes(a))||NC.some(a=>(s.contain||"").includes(a))}function jC(n){let r=Or(n);for(;qn(r)&&!eo(r);){if(Tu(r))return r;if(ml(r))return null;r=Or(r)}return null}function Mu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const PC=new Set(["html","body","#document"]);function eo(n){return PC.has(oo(n))}function Mn(n){return ln(n).getComputedStyle(n)}function gl(n){return Tn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Or(n){if(oo(n)==="html")return n;const r=n.assignedSlot||n.parentNode||Ig(n)&&n.host||Yn(n);return Ig(r)?r.host:r}function Kh(n){const r=Or(n);return eo(r)?n.ownerDocument?n.ownerDocument.body:n.body:qn(r)&&mi(r)?r:Kh(r)}function ti(n,r,s){var a;r===void 0&&(r=[]),s===void 0&&(s=!0);const c=Kh(n),d=c===((a=n.ownerDocument)==null?void 0:a.body),p=ln(c);if(d){const m=ou(p);return r.concat(p,p.visualViewport||[],mi(c)?c:[],m&&s?ti(m):[])}return r.concat(c,ti(c,[],s))}function ou(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function Yh(n){const r=Mn(n);let s=parseFloat(r.width)||0,a=parseFloat(r.height)||0;const c=qn(n),d=c?n.offsetWidth:s,p=c?n.offsetHeight:a,m=Za(s)!==d||Za(a)!==p;return m&&(s=d,a=p),{width:s,height:a,$:m}}function Iu(n){return Tn(n)?n:n.contextElement}function Qs(n){const r=Iu(n);if(!qn(r))return Vn(1);const s=r.getBoundingClientRect(),{width:a,height:c,$:d}=Yh(r);let p=(d?Za(s.width):s.width)/a,m=(d?Za(s.height):s.height)/c;return(!p||!Number.isFinite(p))&&(p=1),(!m||!Number.isFinite(m))&&(m=1),{x:p,y:m}}const EC=Vn(0);function Xh(n){const r=ln(n);return!Mu()||!r.visualViewport?EC:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function RC(n,r,s){return r===void 0&&(r=!1),!s||r&&s!==ln(n)?!1:r}function cs(n,r,s,a){r===void 0&&(r=!1),s===void 0&&(s=!1);const c=n.getBoundingClientRect(),d=Iu(n);let p=Vn(1);r&&(a?Tn(a)&&(p=Qs(a)):p=Qs(n));const m=RC(d,s,a)?Xh(d):Vn(0);let h=(c.left+m.x)/p.x,v=(c.top+m.y)/p.y,y=c.width/p.x,x=c.height/p.y;if(d){const b=ln(d),S=a&&Tn(a)?ln(a):a;let N=b,C=ou(N);for(;C&&a&&S!==N;){const k=Qs(C),P=C.getBoundingClientRect(),j=Mn(C),M=P.left+(C.clientLeft+parseFloat(j.paddingLeft))*k.x,R=P.top+(C.clientTop+parseFloat(j.paddingTop))*k.y;h*=k.x,v*=k.y,y*=k.x,x*=k.y,h+=M,v+=R,N=ln(C),C=ou(N)}}return tl({width:y,height:x,x:h,y:v})}function hl(n,r){const s=gl(n).scrollLeft;return r?r.left+s:cs(Yn(n)).left+s}function Jh(n,r){const s=n.getBoundingClientRect(),a=s.left+r.scrollLeft-hl(n,s),c=s.top+r.scrollTop;return{x:a,y:c}}function AC(n){let{elements:r,rect:s,offsetParent:a,strategy:c}=n;const d=c==="fixed",p=Yn(a),m=r?ml(r.floating):!1;if(a===p||m&&d)return s;let h={scrollLeft:0,scrollTop:0},v=Vn(1);const y=Vn(0),x=qn(a);if((x||!x&&!d)&&((oo(a)!=="body"||mi(p))&&(h=gl(a)),qn(a))){const S=cs(a);v=Qs(a),y.x=S.x+a.clientLeft,y.y=S.y+a.clientTop}const b=p&&!x&&!d?Jh(p,h):Vn(0);return{width:s.width*v.x,height:s.height*v.y,x:s.x*v.x-h.scrollLeft*v.x+y.x+b.x,y:s.y*v.y-h.scrollTop*v.y+y.y+b.y}}function TC(n){return Array.from(n.getClientRects())}function MC(n){const r=Yn(n),s=gl(n),a=n.ownerDocument.body,c=an(r.scrollWidth,r.clientWidth,a.scrollWidth,a.clientWidth),d=an(r.scrollHeight,r.clientHeight,a.scrollHeight,a.clientHeight);let p=-s.scrollLeft+hl(n);const m=-s.scrollTop;return Mn(a).direction==="rtl"&&(p+=an(r.clientWidth,a.clientWidth)-c),{width:c,height:d,x:p,y:m}}const _g=25;function IC(n,r){const s=ln(n),a=Yn(n),c=s.visualViewport;let d=a.clientWidth,p=a.clientHeight,m=0,h=0;if(c){d=c.width,p=c.height;const y=Mu();(!y||y&&r==="fixed")&&(m=c.offsetLeft,h=c.offsetTop)}const v=hl(a);if(v<=0){const y=a.ownerDocument,x=y.body,b=getComputedStyle(x),S=y.compatMode==="CSS1Compat"&&parseFloat(b.marginLeft)+parseFloat(b.marginRight)||0,N=Math.abs(a.clientWidth-x.clientWidth-S);N<=_g&&(d-=N)}else v<=_g&&(d+=v);return{width:d,height:p,x:m,y:h}}const _C=new Set(["absolute","fixed"]);function DC(n,r){const s=cs(n,!0,r==="fixed"),a=s.top+n.clientTop,c=s.left+n.clientLeft,d=qn(n)?Qs(n):Vn(1),p=n.clientWidth*d.x,m=n.clientHeight*d.y,h=c*d.x,v=a*d.y;return{width:p,height:m,x:h,y:v}}function Dg(n,r,s){let a;if(r==="viewport")a=IC(n,s);else if(r==="document")a=MC(Yn(n));else if(Tn(r))a=DC(r,s);else{const c=Xh(n);a={x:r.x-c.x,y:r.y-c.y,width:r.width,height:r.height}}return tl(a)}function Zh(n,r){const s=Or(n);return s===r||!Tn(s)||eo(s)?!1:Mn(s).position==="fixed"||Zh(s,r)}function OC(n,r){const s=r.get(n);if(s)return s;let a=ti(n,[],!1).filter(m=>Tn(m)&&oo(m)!=="body"),c=null;const d=Mn(n).position==="fixed";let p=d?Or(n):n;for(;Tn(p)&&!eo(p);){const m=Mn(p),h=Tu(p);!h&&m.position==="fixed"&&(c=null),(d?!h&&!c:!h&&m.position==="static"&&!!c&&_C.has(c.position)||mi(p)&&!h&&Zh(n,p))?a=a.filter(y=>y!==p):c=m,p=Or(p)}return r.set(n,a),a}function LC(n){let{element:r,boundary:s,rootBoundary:a,strategy:c}=n;const p=[...s==="clippingAncestors"?ml(r)?[]:OC(r,this._c):[].concat(s),a],m=p[0],h=p.reduce((v,y)=>{const x=Dg(r,y,c);return v.top=an(x.top,v.top),v.right=Dr(x.right,v.right),v.bottom=Dr(x.bottom,v.bottom),v.left=an(x.left,v.left),v},Dg(r,m,c));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function zC(n){const{width:r,height:s}=Yh(n);return{width:r,height:s}}function FC(n,r,s){const a=qn(r),c=Yn(r),d=s==="fixed",p=cs(n,!0,d,r);let m={scrollLeft:0,scrollTop:0};const h=Vn(0);function v(){h.x=hl(c)}if(a||!a&&!d)if((oo(r)!=="body"||mi(c))&&(m=gl(r)),a){const S=cs(r,!0,d,r);h.x=S.x+r.clientLeft,h.y=S.y+r.clientTop}else c&&v();d&&!a&&c&&v();const y=c&&!a&&!d?Jh(c,m):Vn(0),x=p.left+m.scrollLeft-h.x-y.x,b=p.top+m.scrollTop-h.y-y.y;return{x,y:b,width:p.width,height:p.height}}function Id(n){return Mn(n).position==="static"}function Og(n,r){if(!qn(n)||Mn(n).position==="fixed")return null;if(r)return r(n);let s=n.offsetParent;return Yn(n)===s&&(s=s.ownerDocument.body),s}function e0(n,r){const s=ln(n);if(ml(n))return s;if(!qn(n)){let c=Or(n);for(;c&&!eo(c);){if(Tn(c)&&!Id(c))return c;c=Or(c)}return s}let a=Og(n,r);for(;a&&wC(a)&&Id(a);)a=Og(a,r);return a&&eo(a)&&Id(a)&&!Tu(a)?s:a||jC(n)||s}const $C=async function(n){const r=this.getOffsetParent||e0,s=this.getDimensions,a=await s(n.floating);return{reference:FC(n.reference,await r(n.floating),n.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function HC(n){return Mn(n).direction==="rtl"}const BC={convertOffsetParentRelativeRectToViewportRelativeRect:AC,getDocumentElement:Yn,getClippingRect:LC,getOffsetParent:e0,getElementRects:$C,getClientRects:TC,getDimensions:zC,getScale:Qs,isElement:Tn,isRTL:HC};function t0(n,r){return n.x===r.x&&n.y===r.y&&n.width===r.width&&n.height===r.height}function WC(n,r){let s=null,a;const c=Yn(n);function d(){var m;clearTimeout(a),(m=s)==null||m.disconnect(),s=null}function p(m,h){m===void 0&&(m=!1),h===void 0&&(h=1),d();const v=n.getBoundingClientRect(),{left:y,top:x,width:b,height:S}=v;if(m||r(),!b||!S)return;const N=Ia(x),C=Ia(c.clientWidth-(y+b)),k=Ia(c.clientHeight-(x+S)),P=Ia(y),M={rootMargin:-N+"px "+-C+"px "+-k+"px "+-P+"px",threshold:an(0,Dr(1,h))||1};let R=!0;function I(W){const z=W[0].intersectionRatio;if(z!==h){if(!R)return p();z?p(!1,z):a=setTimeout(()=>{p(!1,1e-7)},1e3)}z===1&&!t0(v,n.getBoundingClientRect())&&p(),R=!1}try{s=new IntersectionObserver(I,{...M,root:c.ownerDocument})}catch{s=new IntersectionObserver(I,M)}s.observe(n)}return p(!0),d}function VC(n,r,s,a){a===void 0&&(a={});const{ancestorScroll:c=!0,ancestorResize:d=!0,elementResize:p=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:h=!1}=a,v=Iu(n),y=c||d?[...v?ti(v):[],...ti(r)]:[];y.forEach(P=>{c&&P.addEventListener("scroll",s,{passive:!0}),d&&P.addEventListener("resize",s)});const x=v&&m?WC(v,s):null;let b=-1,S=null;p&&(S=new ResizeObserver(P=>{let[j]=P;j&&j.target===v&&S&&(S.unobserve(r),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var M;(M=S)==null||M.observe(r)})),s()}),v&&!h&&S.observe(v),S.observe(r));let N,C=h?cs(n):null;h&&k();function k(){const P=cs(n);C&&!t0(C,P)&&s(),C=P,N=requestAnimationFrame(k)}return s(),()=>{var P;y.forEach(j=>{c&&j.removeEventListener("scroll",s),d&&j.removeEventListener("resize",s)}),x?.(),(P=S)==null||P.disconnect(),S=null,h&&cancelAnimationFrame(N)}}const UC=gC,GC=hC,QC=pC,qC=xC,KC=fC,Lg=uC,YC=vC,XC=(n,r,s)=>{const a=new Map,c={platform:BC,...s},d={...c.platform,_c:a};return dC(n,r,{...c,platform:d})};var JC=typeof document<"u",ZC=function(){},Ha=JC?f.useLayoutEffect:ZC;function nl(n,r){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(typeof n=="function"&&n.toString()===r.toString())return!0;let s,a,c;if(n&&r&&typeof n=="object"){if(Array.isArray(n)){if(s=n.length,s!==r.length)return!1;for(a=s;a--!==0;)if(!nl(n[a],r[a]))return!1;return!0}if(c=Object.keys(n),s=c.length,s!==Object.keys(r).length)return!1;for(a=s;a--!==0;)if(!{}.hasOwnProperty.call(r,c[a]))return!1;for(a=s;a--!==0;){const d=c[a];if(!(d==="_owner"&&n.$$typeof)&&!nl(n[d],r[d]))return!1}return!0}return n!==n&&r!==r}function n0(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function zg(n,r){const s=n0(n);return Math.round(r*s)/s}function _d(n){const r=f.useRef(n);return Ha(()=>{r.current=n}),r}function ek(n){n===void 0&&(n={});const{placement:r="bottom",strategy:s="absolute",middleware:a=[],platform:c,elements:{reference:d,floating:p}={},transform:m=!0,whileElementsMounted:h,open:v}=n,[y,x]=f.useState({x:0,y:0,strategy:s,placement:r,middlewareData:{},isPositioned:!1}),[b,S]=f.useState(a);nl(b,a)||S(a);const[N,C]=f.useState(null),[k,P]=f.useState(null),j=f.useCallback(_=>{_!==W.current&&(W.current=_,C(_))},[]),M=f.useCallback(_=>{_!==z.current&&(z.current=_,P(_))},[]),R=d||N,I=p||k,W=f.useRef(null),z=f.useRef(null),V=f.useRef(y),re=h!=null,Q=_d(h),de=_d(c),ie=_d(v),me=f.useCallback(()=>{if(!W.current||!z.current)return;const _={placement:r,strategy:s,middleware:b};de.current&&(_.platform=de.current),XC(W.current,z.current,_).then(H=>{const J={...H,isPositioned:ie.current!==!1};ue.current&&!nl(V.current,J)&&(V.current=J,ui.flushSync(()=>{x(J)}))})},[b,r,s,de,ie]);Ha(()=>{v===!1&&V.current.isPositioned&&(V.current.isPositioned=!1,x(_=>({..._,isPositioned:!1})))},[v]);const ue=f.useRef(!1);Ha(()=>(ue.current=!0,()=>{ue.current=!1}),[]),Ha(()=>{if(R&&(W.current=R),I&&(z.current=I),R&&I){if(Q.current)return Q.current(R,I,me);me()}},[R,I,me,Q,re]);const fe=f.useMemo(()=>({reference:W,floating:z,setReference:j,setFloating:M}),[j,M]),ee=f.useMemo(()=>({reference:R,floating:I}),[R,I]),Y=f.useMemo(()=>{const _={position:s,left:0,top:0};if(!ee.floating)return _;const H=zg(ee.floating,y.x),J=zg(ee.floating,y.y);return m?{..._,transform:"translate("+H+"px, "+J+"px)",...n0(ee.floating)>=1.5&&{willChange:"transform"}}:{position:s,left:H,top:J}},[s,m,ee.floating,y.x,y.y]);return f.useMemo(()=>({...y,update:me,refs:fe,elements:ee,floatingStyles:Y}),[y,me,fe,ee,Y])}const tk=n=>{function r(s){return{}.hasOwnProperty.call(s,"current")}return{name:"arrow",options:n,fn(s){const{element:a,padding:c}=typeof n=="function"?n(s):n;return a&&r(a)?a.current!=null?Lg({element:a.current,padding:c}).fn(s):{}:a?Lg({element:a,padding:c}).fn(s):{}}}},nk=(n,r)=>({...UC(n),options:[n,r]}),rk=(n,r)=>({...GC(n),options:[n,r]}),sk=(n,r)=>({...YC(n),options:[n,r]}),ok=(n,r)=>({...QC(n),options:[n,r]}),ik=(n,r)=>({...qC(n),options:[n,r]}),ak=(n,r)=>({...KC(n),options:[n,r]}),lk=(n,r)=>({...tk(n),options:[n,r]});var ck="Arrow",r0=f.forwardRef((n,r)=>{const{children:s,width:a=10,height:c=5,...d}=n;return o.jsx(Me.svg,{...d,ref:r,width:a,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?s:o.jsx("polygon",{points:"0,0 30,0 15,10"})})});r0.displayName=ck;var dk=r0;function _u(n){const[r,s]=f.useState(void 0);return Rt(()=>{if(n){s({width:n.offsetWidth,height:n.offsetHeight});const a=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const d=c[0];let p,m;if("borderBoxSize"in d){const h=d.borderBoxSize,v=Array.isArray(h)?h[0]:h;p=v.inlineSize,m=v.blockSize}else p=n.offsetWidth,m=n.offsetHeight;s({width:p,height:m})});return a.observe(n,{box:"border-box"}),()=>a.unobserve(n)}else s(void 0)},[n]),r}var Du="Popper",[s0,io]=cn(Du),[uk,o0]=s0(Du),i0=n=>{const{__scopePopper:r,children:s}=n,[a,c]=f.useState(null);return o.jsx(uk,{scope:r,anchor:a,onAnchorChange:c,children:s})};i0.displayName=Du;var a0="PopperAnchor",l0=f.forwardRef((n,r)=>{const{__scopePopper:s,virtualRef:a,...c}=n,d=o0(a0,s),p=f.useRef(null),m=ze(r,p),h=f.useRef(null);return f.useEffect(()=>{const v=h.current;h.current=a?.current||p.current,v!==h.current&&d.onAnchorChange(h.current)}),a?null:o.jsx(Me.div,{...c,ref:m})});l0.displayName=a0;var Ou="PopperContent",[pk,fk]=s0(Ou),c0=f.forwardRef((n,r)=>{const{__scopePopper:s,side:a="bottom",sideOffset:c=0,align:d="center",alignOffset:p=0,arrowPadding:m=0,avoidCollisions:h=!0,collisionBoundary:v=[],collisionPadding:y=0,sticky:x="partial",hideWhenDetached:b=!1,updatePositionStrategy:S="optimized",onPlaced:N,...C}=n,k=o0(Ou,s),[P,j]=f.useState(null),M=ze(r,O=>j(O)),[R,I]=f.useState(null),W=_u(R),z=W?.width??0,V=W?.height??0,re=a+(d!=="center"?"-"+d:""),Q=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},de=Array.isArray(v)?v:[v],ie=de.length>0,me={padding:Q,boundary:de.filter(gk),altBoundary:ie},{refs:ue,floatingStyles:fe,placement:ee,isPositioned:Y,middlewareData:_}=ek({strategy:"fixed",placement:re,whileElementsMounted:(...O)=>VC(...O,{animationFrame:S==="always"}),elements:{reference:k.anchor},middleware:[nk({mainAxis:c+V,alignmentAxis:p}),h&&rk({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?sk():void 0,...me}),h&&ok({...me}),ik({...me,apply:({elements:O,rects:X,availableWidth:le,availableHeight:he})=>{const{width:Ee,height:Re}=X.reference,Z=O.floating.style;Z.setProperty("--radix-popper-available-width",`${le}px`),Z.setProperty("--radix-popper-available-height",`${he}px`),Z.setProperty("--radix-popper-anchor-width",`${Ee}px`),Z.setProperty("--radix-popper-anchor-height",`${Re}px`)}}),R&&lk({element:R,padding:m}),hk({arrowWidth:z,arrowHeight:V}),b&&ak({strategy:"referenceHidden",...me})]}),[H,J]=p0(ee),A=Et(N);Rt(()=>{Y&&A?.()},[Y,A]);const U=_.arrow?.x,B=_.arrow?.y,q=_.arrow?.centerOffset!==0,[oe,K]=f.useState();return Rt(()=>{P&&K(window.getComputedStyle(P).zIndex)},[P]),o.jsx("div",{ref:ue.setFloating,"data-radix-popper-content-wrapper":"",style:{...fe,transform:Y?fe.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:oe,"--radix-popper-transform-origin":[_.transformOrigin?.x,_.transformOrigin?.y].join(" "),..._.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:o.jsx(pk,{scope:s,placedSide:H,onArrowChange:I,arrowX:U,arrowY:B,shouldHideArrow:q,children:o.jsx(Me.div,{"data-side":H,"data-align":J,...C,ref:M,style:{...C.style,animation:Y?void 0:"none"}})})})});c0.displayName=Ou;var d0="PopperArrow",mk={top:"bottom",right:"left",bottom:"top",left:"right"},u0=f.forwardRef(function(r,s){const{__scopePopper:a,...c}=r,d=fk(d0,a),p=mk[d.placedSide];return o.jsx("span",{ref:d.onArrowChange,style:{position:"absolute",left:d.arrowX,top:d.arrowY,[p]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[d.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[d.placedSide],visibility:d.shouldHideArrow?"hidden":void 0},children:o.jsx(dk,{...c,ref:s,style:{...c.style,display:"block"}})})});u0.displayName=d0;function gk(n){return n!==null}var hk=n=>({name:"transformOrigin",options:n,fn(r){const{placement:s,rects:a,middlewareData:c}=r,p=c.arrow?.centerOffset!==0,m=p?0:n.arrowWidth,h=p?0:n.arrowHeight,[v,y]=p0(s),x={start:"0%",center:"50%",end:"100%"}[y],b=(c.arrow?.x??0)+m/2,S=(c.arrow?.y??0)+h/2;let N="",C="";return v==="bottom"?(N=p?x:`${b}px`,C=`${-h}px`):v==="top"?(N=p?x:`${b}px`,C=`${a.floating.height+h}px`):v==="right"?(N=`${-h}px`,C=p?x:`${S}px`):v==="left"&&(N=`${a.floating.width+h}px`,C=p?x:`${S}px`),{data:{x:N,y:C}}}});function p0(n){const[r,s="center"]=n.split("-");return[r,s]}var vl=i0,Lu=l0,zu=c0,Fu=u0,vk="Portal",gi=f.forwardRef((n,r)=>{const{container:s,...a}=n,[c,d]=f.useState(!1);Rt(()=>d(!0),[]);const p=s||c&&globalThis?.document?.body;return p?J1.createPortal(o.jsx(Me.div,{...a,ref:r}),p):null});gi.displayName=vk;var Dd="rovingFocusGroup.onEntryFocus",xk={bubbles:!1,cancelable:!0},hi="RovingFocusGroup",[iu,f0,yk]=ju(hi),[bk,xl]=cn(hi,[yk]),[wk,Sk]=bk(hi),m0=f.forwardRef((n,r)=>o.jsx(iu.Provider,{scope:n.__scopeRovingFocusGroup,children:o.jsx(iu.Slot,{scope:n.__scopeRovingFocusGroup,children:o.jsx(Ck,{...n,ref:r})})}));m0.displayName=hi;var Ck=f.forwardRef((n,r)=>{const{__scopeRovingFocusGroup:s,orientation:a,loop:c=!1,dir:d,currentTabStopId:p,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:h,onEntryFocus:v,preventScrollOnEntryFocus:y=!1,...x}=n,b=f.useRef(null),S=ze(r,b),N=pi(d),[C,k]=An({prop:p,defaultProp:m??null,onChange:h,caller:hi}),[P,j]=f.useState(!1),M=Et(v),R=f0(s),I=f.useRef(!1),[W,z]=f.useState(0);return f.useEffect(()=>{const V=b.current;if(V)return V.addEventListener(Dd,M),()=>V.removeEventListener(Dd,M)},[M]),o.jsx(wk,{scope:s,orientation:a,dir:N,loop:c,currentTabStopId:C,onItemFocus:f.useCallback(V=>k(V),[k]),onItemShiftTab:f.useCallback(()=>j(!0),[]),onFocusableItemAdd:f.useCallback(()=>z(V=>V+1),[]),onFocusableItemRemove:f.useCallback(()=>z(V=>V-1),[]),children:o.jsx(Me.div,{tabIndex:P||W===0?-1:0,"data-orientation":a,...x,ref:S,style:{outline:"none",...n.style},onMouseDown:ge(n.onMouseDown,()=>{I.current=!0}),onFocus:ge(n.onFocus,V=>{const re=!I.current;if(V.target===V.currentTarget&&re&&!P){const Q=new CustomEvent(Dd,xk);if(V.currentTarget.dispatchEvent(Q),!Q.defaultPrevented){const de=R().filter(ee=>ee.focusable),ie=de.find(ee=>ee.active),me=de.find(ee=>ee.id===C),fe=[ie,me,...de].filter(Boolean).map(ee=>ee.ref.current);v0(fe,y)}}I.current=!1}),onBlur:ge(n.onBlur,()=>j(!1))})})}),g0="RovingFocusGroupItem",h0=f.forwardRef((n,r)=>{const{__scopeRovingFocusGroup:s,focusable:a=!0,active:c=!1,tabStopId:d,children:p,...m}=n,h=Jt(),v=d||h,y=Sk(g0,s),x=y.currentTabStopId===v,b=f0(s),{onFocusableItemAdd:S,onFocusableItemRemove:N,currentTabStopId:C}=y;return f.useEffect(()=>{if(a)return S(),()=>N()},[a,S,N]),o.jsx(iu.ItemSlot,{scope:s,id:v,focusable:a,active:c,children:o.jsx(Me.span,{tabIndex:x?0:-1,"data-orientation":y.orientation,...m,ref:r,onMouseDown:ge(n.onMouseDown,k=>{a?y.onItemFocus(v):k.preventDefault()}),onFocus:ge(n.onFocus,()=>y.onItemFocus(v)),onKeyDown:ge(n.onKeyDown,k=>{if(k.key==="Tab"&&k.shiftKey){y.onItemShiftTab();return}if(k.target!==k.currentTarget)return;const P=jk(k,y.orientation,y.dir);if(P!==void 0){if(k.metaKey||k.ctrlKey||k.altKey||k.shiftKey)return;k.preventDefault();let M=b().filter(R=>R.focusable).map(R=>R.ref.current);if(P==="last")M.reverse();else if(P==="prev"||P==="next"){P==="prev"&&M.reverse();const R=M.indexOf(k.currentTarget);M=y.loop?Pk(M,R+1):M.slice(R+1)}setTimeout(()=>v0(M))}}),children:typeof p=="function"?p({isCurrentTabStop:x,hasTabStop:C!=null}):p})})});h0.displayName=g0;var kk={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Nk(n,r){return r!=="rtl"?n:n==="ArrowLeft"?"ArrowRight":n==="ArrowRight"?"ArrowLeft":n}function jk(n,r,s){const a=Nk(n.key,s);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return kk[a]}function v0(n,r=!1){const s=document.activeElement;for(const a of n)if(a===s||(a.focus({preventScroll:r}),document.activeElement!==s))return}function Pk(n,r){return n.map((s,a)=>n[(r+a)%n.length])}var x0=m0,y0=h0;function Ek(n){const r=Rk(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(Tk);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function Rk(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=Ik(c),m=Mk(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var Ak=Symbol("radix.slottable");function Tk(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Ak}function Mk(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function Ik(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var _k=function(n){if(typeof document>"u")return null;var r=Array.isArray(n)?n[0]:n;return r.ownerDocument.body},Fs=new WeakMap,_a=new WeakMap,Da={},Od=0,b0=function(n){return n&&(n.host||b0(n.parentNode))},Dk=function(n,r){return r.map(function(s){if(n.contains(s))return s;var a=b0(s);return a&&n.contains(a)?a:(console.error("aria-hidden",s,"in not contained inside",n,". Doing nothing"),null)}).filter(function(s){return!!s})},Ok=function(n,r,s,a){var c=Dk(r,Array.isArray(n)?n:[n]);Da[s]||(Da[s]=new WeakMap);var d=Da[s],p=[],m=new Set,h=new Set(c),v=function(x){!x||m.has(x)||(m.add(x),v(x.parentNode))};c.forEach(v);var y=function(x){!x||h.has(x)||Array.prototype.forEach.call(x.children,function(b){if(m.has(b))y(b);else try{var S=b.getAttribute(a),N=S!==null&&S!=="false",C=(Fs.get(b)||0)+1,k=(d.get(b)||0)+1;Fs.set(b,C),d.set(b,k),p.push(b),C===1&&N&&_a.set(b,!0),k===1&&b.setAttribute(s,"true"),N||b.setAttribute(a,"true")}catch(P){console.error("aria-hidden: cannot operate on ",b,P)}})};return y(r),m.clear(),Od++,function(){p.forEach(function(x){var b=Fs.get(x)-1,S=d.get(x)-1;Fs.set(x,b),d.set(x,S),b||(_a.has(x)||x.removeAttribute(a),_a.delete(x)),S||x.removeAttribute(s)}),Od--,Od||(Fs=new WeakMap,Fs=new WeakMap,_a=new WeakMap,Da={})}},$u=function(n,r,s){s===void 0&&(s="data-aria-hidden");var a=Array.from(Array.isArray(n)?n:[n]),c=_k(n);return c?(a.push.apply(a,Array.from(c.querySelectorAll("[aria-live], script"))),Ok(a,c,s,"aria-hidden")):function(){return null}},Bn=function(){return Bn=Object.assign||function(r){for(var s,a=1,c=arguments.length;a<c;a++){s=arguments[a];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(r[d]=s[d])}return r},Bn.apply(this,arguments)};function w0(n,r){var s={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.indexOf(a)<0&&(s[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(n);c<a.length;c++)r.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(n,a[c])&&(s[a[c]]=n[a[c]]);return s}function Lk(n,r,s){if(s||arguments.length===2)for(var a=0,c=r.length,d;a<c;a++)(d||!(a in r))&&(d||(d=Array.prototype.slice.call(r,0,a)),d[a]=r[a]);return n.concat(d||Array.prototype.slice.call(r))}var Ba="right-scroll-bar-position",Wa="width-before-scroll-bar",zk="with-scroll-bars-hidden",Fk="--removed-body-scroll-bar-size";function Ld(n,r){return typeof n=="function"?n(r):n&&(n.current=r),n}function $k(n,r){var s=f.useState(function(){return{value:n,callback:r,facade:{get current(){return s.value},set current(a){var c=s.value;c!==a&&(s.value=a,s.callback(a,c))}}}})[0];return s.callback=r,s.facade}var Hk=typeof window<"u"?f.useLayoutEffect:f.useEffect,Fg=new WeakMap;function Bk(n,r){var s=$k(null,function(a){return n.forEach(function(c){return Ld(c,a)})});return Hk(function(){var a=Fg.get(s);if(a){var c=new Set(a),d=new Set(n),p=s.current;c.forEach(function(m){d.has(m)||Ld(m,null)}),d.forEach(function(m){c.has(m)||Ld(m,p)})}Fg.set(s,n)},[n]),s}function Wk(n){return n}function Vk(n,r){r===void 0&&(r=Wk);var s=[],a=!1,c={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return s.length?s[s.length-1]:n},useMedium:function(d){var p=r(d,a);return s.push(p),function(){s=s.filter(function(m){return m!==p})}},assignSyncMedium:function(d){for(a=!0;s.length;){var p=s;s=[],p.forEach(d)}s={push:function(m){return d(m)},filter:function(){return s}}},assignMedium:function(d){a=!0;var p=[];if(s.length){var m=s;s=[],m.forEach(d),p=s}var h=function(){var y=p;p=[],y.forEach(d)},v=function(){return Promise.resolve().then(h)};v(),s={push:function(y){p.push(y),v()},filter:function(y){return p=p.filter(y),s}}}};return c}function Uk(n){n===void 0&&(n={});var r=Vk(null);return r.options=Bn({async:!0,ssr:!1},n),r}var S0=function(n){var r=n.sideCar,s=w0(n,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=r.read();if(!a)throw new Error("Sidecar medium not found");return f.createElement(a,Bn({},s))};S0.isSideCarExport=!0;function Gk(n,r){return n.useMedium(r),S0}var C0=Uk(),zd=function(){},yl=f.forwardRef(function(n,r){var s=f.useRef(null),a=f.useState({onScrollCapture:zd,onWheelCapture:zd,onTouchMoveCapture:zd}),c=a[0],d=a[1],p=n.forwardProps,m=n.children,h=n.className,v=n.removeScrollBar,y=n.enabled,x=n.shards,b=n.sideCar,S=n.noRelative,N=n.noIsolation,C=n.inert,k=n.allowPinchZoom,P=n.as,j=P===void 0?"div":P,M=n.gapMode,R=w0(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=b,W=Bk([s,r]),z=Bn(Bn({},R),c);return f.createElement(f.Fragment,null,y&&f.createElement(I,{sideCar:C0,removeScrollBar:v,shards:x,noRelative:S,noIsolation:N,inert:C,setCallbacks:d,allowPinchZoom:!!k,lockRef:s,gapMode:M}),p?f.cloneElement(f.Children.only(m),Bn(Bn({},z),{ref:W})):f.createElement(j,Bn({},z,{className:h,ref:W}),m))});yl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};yl.classNames={fullWidth:Wa,zeroRight:Ba};var Qk=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function qk(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var r=Qk();return r&&n.setAttribute("nonce",r),n}function Kk(n,r){n.styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r))}function Yk(n){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(n)}var Xk=function(){var n=0,r=null;return{add:function(s){n==0&&(r=qk())&&(Kk(r,s),Yk(r)),n++},remove:function(){n--,!n&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},Jk=function(){var n=Xk();return function(r,s){f.useEffect(function(){return n.add(r),function(){n.remove()}},[r&&s])}},k0=function(){var n=Jk(),r=function(s){var a=s.styles,c=s.dynamic;return n(a,c),null};return r},Zk={left:0,top:0,right:0,gap:0},Fd=function(n){return parseInt(n||"",10)||0},eN=function(n){var r=window.getComputedStyle(document.body),s=r[n==="padding"?"paddingLeft":"marginLeft"],a=r[n==="padding"?"paddingTop":"marginTop"],c=r[n==="padding"?"paddingRight":"marginRight"];return[Fd(s),Fd(a),Fd(c)]},tN=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return Zk;var r=eN(n),s=document.documentElement.clientWidth,a=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,a-s+r[2]-r[0])}},nN=k0(),qs="data-scroll-locked",rN=function(n,r,s,a){var c=n.left,d=n.top,p=n.right,m=n.gap;return s===void 0&&(s="margin"),`
  .`.concat(zk,` {
   overflow: hidden `).concat(a,`;
   padding-right: `).concat(m,"px ").concat(a,`;
  }
  body[`).concat(qs,`] {
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
  
  .`).concat(Ba,` {
    right: `).concat(m,"px ").concat(a,`;
  }
  
  .`).concat(Wa,` {
    margin-right: `).concat(m,"px ").concat(a,`;
  }
  
  .`).concat(Ba," .").concat(Ba,` {
    right: 0 `).concat(a,`;
  }
  
  .`).concat(Wa," .").concat(Wa,` {
    margin-right: 0 `).concat(a,`;
  }
  
  body[`).concat(qs,`] {
    `).concat(Fk,": ").concat(m,`px;
  }
`)},$g=function(){var n=parseInt(document.body.getAttribute(qs)||"0",10);return isFinite(n)?n:0},sN=function(){f.useEffect(function(){return document.body.setAttribute(qs,($g()+1).toString()),function(){var n=$g()-1;n<=0?document.body.removeAttribute(qs):document.body.setAttribute(qs,n.toString())}},[])},oN=function(n){var r=n.noRelative,s=n.noImportant,a=n.gapMode,c=a===void 0?"margin":a;sN();var d=f.useMemo(function(){return tN(c)},[c]);return f.createElement(nN,{styles:rN(d,!r,c,s?"":"!important")})},au=!1;if(typeof window<"u")try{var Oa=Object.defineProperty({},"passive",{get:function(){return au=!0,!0}});window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{au=!1}var $s=au?{passive:!1}:!1,iN=function(n){return n.tagName==="TEXTAREA"},N0=function(n,r){if(!(n instanceof Element))return!1;var s=window.getComputedStyle(n);return s[r]!=="hidden"&&!(s.overflowY===s.overflowX&&!iN(n)&&s[r]==="visible")},aN=function(n){return N0(n,"overflowY")},lN=function(n){return N0(n,"overflowX")},Hg=function(n,r){var s=r.ownerDocument,a=r;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var c=j0(n,a);if(c){var d=P0(n,a),p=d[1],m=d[2];if(p>m)return!0}a=a.parentNode}while(a&&a!==s.body);return!1},cN=function(n){var r=n.scrollTop,s=n.scrollHeight,a=n.clientHeight;return[r,s,a]},dN=function(n){var r=n.scrollLeft,s=n.scrollWidth,a=n.clientWidth;return[r,s,a]},j0=function(n,r){return n==="v"?aN(r):lN(r)},P0=function(n,r){return n==="v"?cN(r):dN(r)},uN=function(n,r){return n==="h"&&r==="rtl"?-1:1},pN=function(n,r,s,a,c){var d=uN(n,window.getComputedStyle(r).direction),p=d*a,m=s.target,h=r.contains(m),v=!1,y=p>0,x=0,b=0;do{if(!m)break;var S=P0(n,m),N=S[0],C=S[1],k=S[2],P=C-k-d*N;(N||P)&&j0(n,m)&&(x+=P,b+=N);var j=m.parentNode;m=j&&j.nodeType===Node.DOCUMENT_FRAGMENT_NODE?j.host:j}while(!h&&m!==document.body||h&&(r.contains(m)||r===m));return(y&&Math.abs(x)<1||!y&&Math.abs(b)<1)&&(v=!0),v},La=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},Bg=function(n){return[n.deltaX,n.deltaY]},Wg=function(n){return n&&"current"in n?n.current:n},fN=function(n,r){return n[0]===r[0]&&n[1]===r[1]},mN=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},gN=0,Hs=[];function hN(n){var r=f.useRef([]),s=f.useRef([0,0]),a=f.useRef(),c=f.useState(gN++)[0],d=f.useState(k0)[0],p=f.useRef(n);f.useEffect(function(){p.current=n},[n]),f.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(c));var C=Lk([n.lockRef.current],(n.shards||[]).map(Wg),!0).filter(Boolean);return C.forEach(function(k){return k.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),C.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(c))})}}},[n.inert,n.lockRef.current,n.shards]);var m=f.useCallback(function(C,k){if("touches"in C&&C.touches.length===2||C.type==="wheel"&&C.ctrlKey)return!p.current.allowPinchZoom;var P=La(C),j=s.current,M="deltaX"in C?C.deltaX:j[0]-P[0],R="deltaY"in C?C.deltaY:j[1]-P[1],I,W=C.target,z=Math.abs(M)>Math.abs(R)?"h":"v";if("touches"in C&&z==="h"&&W.type==="range")return!1;var V=window.getSelection(),re=V&&V.anchorNode,Q=re?re===W||re.contains(W):!1;if(Q)return!1;var de=Hg(z,W);if(!de)return!0;if(de?I=z:(I=z==="v"?"h":"v",de=Hg(z,W)),!de)return!1;if(!a.current&&"changedTouches"in C&&(M||R)&&(a.current=I),!I)return!0;var ie=a.current||I;return pN(ie,k,C,ie==="h"?M:R)},[]),h=f.useCallback(function(C){var k=C;if(!(!Hs.length||Hs[Hs.length-1]!==d)){var P="deltaY"in k?Bg(k):La(k),j=r.current.filter(function(I){return I.name===k.type&&(I.target===k.target||k.target===I.shadowParent)&&fN(I.delta,P)})[0];if(j&&j.should){k.cancelable&&k.preventDefault();return}if(!j){var M=(p.current.shards||[]).map(Wg).filter(Boolean).filter(function(I){return I.contains(k.target)}),R=M.length>0?m(k,M[0]):!p.current.noIsolation;R&&k.cancelable&&k.preventDefault()}}},[]),v=f.useCallback(function(C,k,P,j){var M={name:C,delta:k,target:P,should:j,shadowParent:vN(P)};r.current.push(M),setTimeout(function(){r.current=r.current.filter(function(R){return R!==M})},1)},[]),y=f.useCallback(function(C){s.current=La(C),a.current=void 0},[]),x=f.useCallback(function(C){v(C.type,Bg(C),C.target,m(C,n.lockRef.current))},[]),b=f.useCallback(function(C){v(C.type,La(C),C.target,m(C,n.lockRef.current))},[]);f.useEffect(function(){return Hs.push(d),n.setCallbacks({onScrollCapture:x,onWheelCapture:x,onTouchMoveCapture:b}),document.addEventListener("wheel",h,$s),document.addEventListener("touchmove",h,$s),document.addEventListener("touchstart",y,$s),function(){Hs=Hs.filter(function(C){return C!==d}),document.removeEventListener("wheel",h,$s),document.removeEventListener("touchmove",h,$s),document.removeEventListener("touchstart",y,$s)}},[]);var S=n.removeScrollBar,N=n.inert;return f.createElement(f.Fragment,null,N?f.createElement(d,{styles:mN(c)}):null,S?f.createElement(oN,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function vN(n){for(var r=null;n!==null;)n instanceof ShadowRoot&&(r=n.host,n=n.host),n=n.parentNode;return r}const xN=Gk(C0,hN);var bl=f.forwardRef(function(n,r){return f.createElement(yl,Bn({},n,{ref:r,sideCar:xN}))});bl.classNames=yl.classNames;var lu=["Enter"," "],yN=["ArrowDown","PageUp","Home"],E0=["ArrowUp","PageDown","End"],bN=[...yN,...E0],wN={ltr:[...lu,"ArrowRight"],rtl:[...lu,"ArrowLeft"]},SN={ltr:["ArrowLeft"],rtl:["ArrowRight"]},vi="Menu",[ni,CN,kN]=ju(vi),[ms,R0]=cn(vi,[kN,io,xl]),xi=io(),A0=xl(),[T0,Lr]=ms(vi),[NN,yi]=ms(vi),M0=n=>{const{__scopeMenu:r,open:s=!1,children:a,dir:c,onOpenChange:d,modal:p=!0}=n,m=xi(r),[h,v]=f.useState(null),y=f.useRef(!1),x=Et(d),b=pi(c);return f.useEffect(()=>{const S=()=>{y.current=!0,document.addEventListener("pointerdown",N,{capture:!0,once:!0}),document.addEventListener("pointermove",N,{capture:!0,once:!0})},N=()=>y.current=!1;return document.addEventListener("keydown",S,{capture:!0}),()=>{document.removeEventListener("keydown",S,{capture:!0}),document.removeEventListener("pointerdown",N,{capture:!0}),document.removeEventListener("pointermove",N,{capture:!0})}},[]),o.jsx(vl,{...m,children:o.jsx(T0,{scope:r,open:s,onOpenChange:x,content:h,onContentChange:v,children:o.jsx(NN,{scope:r,onClose:f.useCallback(()=>x(!1),[x]),isUsingKeyboardRef:y,dir:b,modal:p,children:a})})})};M0.displayName=vi;var jN="MenuAnchor",Hu=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n,c=xi(s);return o.jsx(Lu,{...c,...a,ref:r})});Hu.displayName=jN;var Bu="MenuPortal",[PN,I0]=ms(Bu,{forceMount:void 0}),_0=n=>{const{__scopeMenu:r,forceMount:s,children:a,container:c}=n,d=Lr(Bu,r);return o.jsx(PN,{scope:r,forceMount:s,children:o.jsx(It,{present:s||d.open,children:o.jsx(gi,{asChild:!0,container:c,children:a})})})};_0.displayName=Bu;var yn="MenuContent",[EN,Wu]=ms(yn),D0=f.forwardRef((n,r)=>{const s=I0(yn,n.__scopeMenu),{forceMount:a=s.forceMount,...c}=n,d=Lr(yn,n.__scopeMenu),p=yi(yn,n.__scopeMenu);return o.jsx(ni.Provider,{scope:n.__scopeMenu,children:o.jsx(It,{present:a||d.open,children:o.jsx(ni.Slot,{scope:n.__scopeMenu,children:p.modal?o.jsx(RN,{...c,ref:r}):o.jsx(AN,{...c,ref:r})})})})}),RN=f.forwardRef((n,r)=>{const s=Lr(yn,n.__scopeMenu),a=f.useRef(null),c=ze(r,a);return f.useEffect(()=>{const d=a.current;if(d)return $u(d)},[]),o.jsx(Vu,{...n,ref:c,trapFocus:s.open,disableOutsidePointerEvents:s.open,disableOutsideScroll:!0,onFocusOutside:ge(n.onFocusOutside,d=>d.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>s.onOpenChange(!1)})}),AN=f.forwardRef((n,r)=>{const s=Lr(yn,n.__scopeMenu);return o.jsx(Vu,{...n,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>s.onOpenChange(!1)})}),TN=Ek("MenuContent.ScrollLock"),Vu=f.forwardRef((n,r)=>{const{__scopeMenu:s,loop:a=!1,trapFocus:c,onOpenAutoFocus:d,onCloseAutoFocus:p,disableOutsidePointerEvents:m,onEntryFocus:h,onEscapeKeyDown:v,onPointerDownOutside:y,onFocusOutside:x,onInteractOutside:b,onDismiss:S,disableOutsideScroll:N,...C}=n,k=Lr(yn,s),P=yi(yn,s),j=xi(s),M=A0(s),R=CN(s),[I,W]=f.useState(null),z=f.useRef(null),V=ze(r,z,k.onContentChange),re=f.useRef(0),Q=f.useRef(""),de=f.useRef(0),ie=f.useRef(null),me=f.useRef("right"),ue=f.useRef(0),fe=N?bl:f.Fragment,ee=N?{as:TN,allowPinchZoom:!0}:void 0,Y=H=>{const J=Q.current+H,A=R().filter(O=>!O.disabled),U=document.activeElement,B=A.find(O=>O.ref.current===U)?.textValue,q=A.map(O=>O.textValue),oe=WN(q,J,B),K=A.find(O=>O.textValue===oe)?.ref.current;(function O(X){Q.current=X,window.clearTimeout(re.current),X!==""&&(re.current=window.setTimeout(()=>O(""),1e3))})(J),K&&setTimeout(()=>K.focus())};f.useEffect(()=>()=>window.clearTimeout(re.current),[]),Pu();const _=f.useCallback(H=>me.current===ie.current?.side&&UN(H,ie.current?.area),[]);return o.jsx(EN,{scope:s,searchRef:Q,onItemEnter:f.useCallback(H=>{_(H)&&H.preventDefault()},[_]),onItemLeave:f.useCallback(H=>{_(H)||(z.current?.focus(),W(null))},[_]),onTriggerLeave:f.useCallback(H=>{_(H)&&H.preventDefault()},[_]),pointerGraceTimerRef:de,onPointerGraceIntentChange:f.useCallback(H=>{ie.current=H},[]),children:o.jsx(fe,{...ee,children:o.jsx(pl,{asChild:!0,trapped:c,onMountAutoFocus:ge(d,H=>{H.preventDefault(),z.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:p,children:o.jsx(fi,{asChild:!0,disableOutsidePointerEvents:m,onEscapeKeyDown:v,onPointerDownOutside:y,onFocusOutside:x,onInteractOutside:b,onDismiss:S,children:o.jsx(x0,{asChild:!0,...M,dir:P.dir,orientation:"vertical",loop:a,currentTabStopId:I,onCurrentTabStopIdChange:W,onEntryFocus:ge(h,H=>{P.isUsingKeyboardRef.current||H.preventDefault()}),preventScrollOnEntryFocus:!0,children:o.jsx(zu,{role:"menu","aria-orientation":"vertical","data-state":J0(k.open),"data-radix-menu-content":"",dir:P.dir,...j,...C,ref:V,style:{outline:"none",...C.style},onKeyDown:ge(C.onKeyDown,H=>{const A=H.target.closest("[data-radix-menu-content]")===H.currentTarget,U=H.ctrlKey||H.altKey||H.metaKey,B=H.key.length===1;A&&(H.key==="Tab"&&H.preventDefault(),!U&&B&&Y(H.key));const q=z.current;if(H.target!==q||!bN.includes(H.key))return;H.preventDefault();const K=R().filter(O=>!O.disabled).map(O=>O.ref.current);E0.includes(H.key)&&K.reverse(),HN(K)}),onBlur:ge(n.onBlur,H=>{H.currentTarget.contains(H.target)||(window.clearTimeout(re.current),Q.current="")}),onPointerMove:ge(n.onPointerMove,ri(H=>{const J=H.target,A=ue.current!==H.clientX;if(H.currentTarget.contains(J)&&A){const U=H.clientX>ue.current?"right":"left";me.current=U,ue.current=H.clientX}}))})})})})})})});D0.displayName=yn;var MN="MenuGroup",Uu=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n;return o.jsx(Me.div,{role:"group",...a,ref:r})});Uu.displayName=MN;var IN="MenuLabel",O0=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n;return o.jsx(Me.div,{...a,ref:r})});O0.displayName=IN;var rl="MenuItem",Vg="menu.itemSelect",wl=f.forwardRef((n,r)=>{const{disabled:s=!1,onSelect:a,...c}=n,d=f.useRef(null),p=yi(rl,n.__scopeMenu),m=Wu(rl,n.__scopeMenu),h=ze(r,d),v=f.useRef(!1),y=()=>{const x=d.current;if(!s&&x){const b=new CustomEvent(Vg,{bubbles:!0,cancelable:!0});x.addEventListener(Vg,S=>a?.(S),{once:!0}),Rh(x,b),b.defaultPrevented?v.current=!1:p.onClose()}};return o.jsx(L0,{...c,ref:h,disabled:s,onClick:ge(n.onClick,y),onPointerDown:x=>{n.onPointerDown?.(x),v.current=!0},onPointerUp:ge(n.onPointerUp,x=>{v.current||x.currentTarget?.click()}),onKeyDown:ge(n.onKeyDown,x=>{const b=m.searchRef.current!=="";s||b&&x.key===" "||lu.includes(x.key)&&(x.currentTarget.click(),x.preventDefault())})})});wl.displayName=rl;var L0=f.forwardRef((n,r)=>{const{__scopeMenu:s,disabled:a=!1,textValue:c,...d}=n,p=Wu(rl,s),m=A0(s),h=f.useRef(null),v=ze(r,h),[y,x]=f.useState(!1),[b,S]=f.useState("");return f.useEffect(()=>{const N=h.current;N&&S((N.textContent??"").trim())},[d.children]),o.jsx(ni.ItemSlot,{scope:s,disabled:a,textValue:c??b,children:o.jsx(y0,{asChild:!0,...m,focusable:!a,children:o.jsx(Me.div,{role:"menuitem","data-highlighted":y?"":void 0,"aria-disabled":a||void 0,"data-disabled":a?"":void 0,...d,ref:v,onPointerMove:ge(n.onPointerMove,ri(N=>{a?p.onItemLeave(N):(p.onItemEnter(N),N.defaultPrevented||N.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:ge(n.onPointerLeave,ri(N=>p.onItemLeave(N))),onFocus:ge(n.onFocus,()=>x(!0)),onBlur:ge(n.onBlur,()=>x(!1))})})})}),_N="MenuCheckboxItem",z0=f.forwardRef((n,r)=>{const{checked:s=!1,onCheckedChange:a,...c}=n;return o.jsx(W0,{scope:n.__scopeMenu,checked:s,children:o.jsx(wl,{role:"menuitemcheckbox","aria-checked":sl(s)?"mixed":s,...c,ref:r,"data-state":qu(s),onSelect:ge(c.onSelect,()=>a?.(sl(s)?!0:!s),{checkForDefaultPrevented:!1})})})});z0.displayName=_N;var F0="MenuRadioGroup",[DN,ON]=ms(F0,{value:void 0,onValueChange:()=>{}}),$0=f.forwardRef((n,r)=>{const{value:s,onValueChange:a,...c}=n,d=Et(a);return o.jsx(DN,{scope:n.__scopeMenu,value:s,onValueChange:d,children:o.jsx(Uu,{...c,ref:r})})});$0.displayName=F0;var H0="MenuRadioItem",B0=f.forwardRef((n,r)=>{const{value:s,...a}=n,c=ON(H0,n.__scopeMenu),d=s===c.value;return o.jsx(W0,{scope:n.__scopeMenu,checked:d,children:o.jsx(wl,{role:"menuitemradio","aria-checked":d,...a,ref:r,"data-state":qu(d),onSelect:ge(a.onSelect,()=>c.onValueChange?.(s),{checkForDefaultPrevented:!1})})})});B0.displayName=H0;var Gu="MenuItemIndicator",[W0,LN]=ms(Gu,{checked:!1}),V0=f.forwardRef((n,r)=>{const{__scopeMenu:s,forceMount:a,...c}=n,d=LN(Gu,s);return o.jsx(It,{present:a||sl(d.checked)||d.checked===!0,children:o.jsx(Me.span,{...c,ref:r,"data-state":qu(d.checked)})})});V0.displayName=Gu;var zN="MenuSeparator",U0=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n;return o.jsx(Me.div,{role:"separator","aria-orientation":"horizontal",...a,ref:r})});U0.displayName=zN;var FN="MenuArrow",G0=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n,c=xi(s);return o.jsx(Fu,{...c,...a,ref:r})});G0.displayName=FN;var Qu="MenuSub",[$N,Q0]=ms(Qu),q0=n=>{const{__scopeMenu:r,children:s,open:a=!1,onOpenChange:c}=n,d=Lr(Qu,r),p=xi(r),[m,h]=f.useState(null),[v,y]=f.useState(null),x=Et(c);return f.useEffect(()=>(d.open===!1&&x(!1),()=>x(!1)),[d.open,x]),o.jsx(vl,{...p,children:o.jsx(T0,{scope:r,open:a,onOpenChange:x,content:v,onContentChange:y,children:o.jsx($N,{scope:r,contentId:Jt(),triggerId:Jt(),trigger:m,onTriggerChange:h,children:s})})})};q0.displayName=Qu;var qo="MenuSubTrigger",K0=f.forwardRef((n,r)=>{const s=Lr(qo,n.__scopeMenu),a=yi(qo,n.__scopeMenu),c=Q0(qo,n.__scopeMenu),d=Wu(qo,n.__scopeMenu),p=f.useRef(null),{pointerGraceTimerRef:m,onPointerGraceIntentChange:h}=d,v={__scopeMenu:n.__scopeMenu},y=f.useCallback(()=>{p.current&&window.clearTimeout(p.current),p.current=null},[]);return f.useEffect(()=>y,[y]),f.useEffect(()=>{const x=m.current;return()=>{window.clearTimeout(x),h(null)}},[m,h]),o.jsx(Hu,{asChild:!0,...v,children:o.jsx(L0,{id:c.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":c.contentId,"data-state":J0(s.open),...n,ref:dr(r,c.onTriggerChange),onClick:x=>{n.onClick?.(x),!(n.disabled||x.defaultPrevented)&&(x.currentTarget.focus(),s.open||s.onOpenChange(!0))},onPointerMove:ge(n.onPointerMove,ri(x=>{d.onItemEnter(x),!x.defaultPrevented&&!n.disabled&&!s.open&&!p.current&&(d.onPointerGraceIntentChange(null),p.current=window.setTimeout(()=>{s.onOpenChange(!0),y()},100))})),onPointerLeave:ge(n.onPointerLeave,ri(x=>{y();const b=s.content?.getBoundingClientRect();if(b){const S=s.content?.dataset.side,N=S==="right",C=N?-5:5,k=b[N?"left":"right"],P=b[N?"right":"left"];d.onPointerGraceIntentChange({area:[{x:x.clientX+C,y:x.clientY},{x:k,y:b.top},{x:P,y:b.top},{x:P,y:b.bottom},{x:k,y:b.bottom}],side:S}),window.clearTimeout(m.current),m.current=window.setTimeout(()=>d.onPointerGraceIntentChange(null),300)}else{if(d.onTriggerLeave(x),x.defaultPrevented)return;d.onPointerGraceIntentChange(null)}})),onKeyDown:ge(n.onKeyDown,x=>{const b=d.searchRef.current!=="";n.disabled||b&&x.key===" "||wN[a.dir].includes(x.key)&&(s.onOpenChange(!0),s.content?.focus(),x.preventDefault())})})})});K0.displayName=qo;var Y0="MenuSubContent",X0=f.forwardRef((n,r)=>{const s=I0(yn,n.__scopeMenu),{forceMount:a=s.forceMount,...c}=n,d=Lr(yn,n.__scopeMenu),p=yi(yn,n.__scopeMenu),m=Q0(Y0,n.__scopeMenu),h=f.useRef(null),v=ze(r,h);return o.jsx(ni.Provider,{scope:n.__scopeMenu,children:o.jsx(It,{present:a||d.open,children:o.jsx(ni.Slot,{scope:n.__scopeMenu,children:o.jsx(Vu,{id:m.contentId,"aria-labelledby":m.triggerId,...c,ref:v,align:"start",side:p.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:y=>{p.isUsingKeyboardRef.current&&h.current?.focus(),y.preventDefault()},onCloseAutoFocus:y=>y.preventDefault(),onFocusOutside:ge(n.onFocusOutside,y=>{y.target!==m.trigger&&d.onOpenChange(!1)}),onEscapeKeyDown:ge(n.onEscapeKeyDown,y=>{p.onClose(),y.preventDefault()}),onKeyDown:ge(n.onKeyDown,y=>{const x=y.currentTarget.contains(y.target),b=SN[p.dir].includes(y.key);x&&b&&(d.onOpenChange(!1),m.trigger?.focus(),y.preventDefault())})})})})})});X0.displayName=Y0;function J0(n){return n?"open":"closed"}function sl(n){return n==="indeterminate"}function qu(n){return sl(n)?"indeterminate":n?"checked":"unchecked"}function HN(n){const r=document.activeElement;for(const s of n)if(s===r||(s.focus(),document.activeElement!==r))return}function BN(n,r){return n.map((s,a)=>n[(r+a)%n.length])}function WN(n,r,s){const c=r.length>1&&Array.from(r).every(v=>v===r[0])?r[0]:r,d=s?n.indexOf(s):-1;let p=BN(n,Math.max(d,0));c.length===1&&(p=p.filter(v=>v!==s));const h=p.find(v=>v.toLowerCase().startsWith(c.toLowerCase()));return h!==s?h:void 0}function VN(n,r){const{x:s,y:a}=n;let c=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const m=r[d],h=r[p],v=m.x,y=m.y,x=h.x,b=h.y;y>a!=b>a&&s<(x-v)*(a-y)/(b-y)+v&&(c=!c)}return c}function UN(n,r){if(!r)return!1;const s={x:n.clientX,y:n.clientY};return VN(s,r)}function ri(n){return r=>r.pointerType==="mouse"?n(r):void 0}var GN=M0,QN=Hu,qN=_0,KN=D0,YN=Uu,XN=O0,JN=wl,ZN=z0,ej=$0,tj=B0,nj=V0,rj=U0,sj=G0,oj=q0,ij=K0,aj=X0,Sl="DropdownMenu",[lj]=cn(Sl,[R0]),Ft=R0(),[cj,Z0]=lj(Sl),ev=n=>{const{__scopeDropdownMenu:r,children:s,dir:a,open:c,defaultOpen:d,onOpenChange:p,modal:m=!0}=n,h=Ft(r),v=f.useRef(null),[y,x]=An({prop:c,defaultProp:d??!1,onChange:p,caller:Sl});return o.jsx(cj,{scope:r,triggerId:Jt(),triggerRef:v,contentId:Jt(),open:y,onOpenChange:x,onOpenToggle:f.useCallback(()=>x(b=>!b),[x]),modal:m,children:o.jsx(GN,{...h,open:y,onOpenChange:x,dir:a,modal:m,children:s})})};ev.displayName=Sl;var tv="DropdownMenuTrigger",nv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,disabled:a=!1,...c}=n,d=Z0(tv,s),p=Ft(s);return o.jsx(QN,{asChild:!0,...p,children:o.jsx(Me.button,{type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":a?"":void 0,disabled:a,...c,ref:dr(r,d.triggerRef),onPointerDown:ge(n.onPointerDown,m=>{!a&&m.button===0&&m.ctrlKey===!1&&(d.onOpenToggle(),d.open||m.preventDefault())}),onKeyDown:ge(n.onKeyDown,m=>{a||(["Enter"," "].includes(m.key)&&d.onOpenToggle(),m.key==="ArrowDown"&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(m.key)&&m.preventDefault())})})})});nv.displayName=tv;var dj="DropdownMenuPortal",rv=n=>{const{__scopeDropdownMenu:r,...s}=n,a=Ft(r);return o.jsx(qN,{...a,...s})};rv.displayName=dj;var sv="DropdownMenuContent",ov=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Z0(sv,s),d=Ft(s),p=f.useRef(!1);return o.jsx(KN,{id:c.contentId,"aria-labelledby":c.triggerId,...d,...a,ref:r,onCloseAutoFocus:ge(n.onCloseAutoFocus,m=>{p.current||c.triggerRef.current?.focus(),p.current=!1,m.preventDefault()}),onInteractOutside:ge(n.onInteractOutside,m=>{const h=m.detail.originalEvent,v=h.button===0&&h.ctrlKey===!0,y=h.button===2||v;(!c.modal||y)&&(p.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});ov.displayName=sv;var uj="DropdownMenuGroup",pj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(YN,{...c,...a,ref:r})});pj.displayName=uj;var fj="DropdownMenuLabel",mj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(XN,{...c,...a,ref:r})});mj.displayName=fj;var gj="DropdownMenuItem",iv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(JN,{...c,...a,ref:r})});iv.displayName=gj;var hj="DropdownMenuCheckboxItem",vj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(ZN,{...c,...a,ref:r})});vj.displayName=hj;var xj="DropdownMenuRadioGroup",yj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(ej,{...c,...a,ref:r})});yj.displayName=xj;var bj="DropdownMenuRadioItem",wj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(tj,{...c,...a,ref:r})});wj.displayName=bj;var Sj="DropdownMenuItemIndicator",Cj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(nj,{...c,...a,ref:r})});Cj.displayName=Sj;var kj="DropdownMenuSeparator",av=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(rj,{...c,...a,ref:r})});av.displayName=kj;var Nj="DropdownMenuArrow",jj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(sj,{...c,...a,ref:r})});jj.displayName=Nj;var Pj=n=>{const{__scopeDropdownMenu:r,children:s,open:a,onOpenChange:c,defaultOpen:d}=n,p=Ft(r),[m,h]=An({prop:a,defaultProp:d??!1,onChange:c,caller:"DropdownMenuSub"});return o.jsx(oj,{...p,open:m,onOpenChange:h,children:s})},Ej="DropdownMenuSubTrigger",lv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(ij,{...c,...a,ref:r})});lv.displayName=Ej;var Rj="DropdownMenuSubContent",cv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Ft(s);return o.jsx(aj,{...c,...a,ref:r,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});cv.displayName=Rj;var Aj=ev,Tj=nv,Mj=rv,Ij=ov,_j=iv,Dj=av,Oj=Pj,Lj=lv,zj=cv;function Un({...n}){return o.jsx(Aj,{"data-slot":"dropdown-menu",...n})}function Gn({...n}){return o.jsx(Tj,{"data-slot":"dropdown-menu-trigger",...n})}function Qn({className:n,sideOffset:r=4,...s}){return o.jsx(Mj,{children:o.jsx(Ij,{"data-slot":"dropdown-menu-content",sideOffset:r,className:Fe("bg-white text-gray-900 dark:bg-gray-900 dark:text-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border-2 border-gray-900 dark:border-white p-1 shadow-md",n),...s})})}function yt({className:n,inset:r,variant:s="default",...a}){return o.jsx(_j,{"data-slot":"dropdown-menu-item","data-inset":r,"data-variant":s,className:Fe("focus:bg-gray-100 dark:focus:bg-gray-800 focus:text-gray-900 dark:focus:text-white data-[variant=destructive]:text-red-500 data-[variant=destructive]:focus:bg-red-50 dark:data-[variant=destructive]:focus:bg-red-900/20 data-[variant=destructive]:focus:text-red-500 [&_svg:not([class*='text-'])]:text-gray-500 relative flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...a})}function Fj({className:n,...r}){return o.jsx(Dj,{"data-slot":"dropdown-menu-separator",className:Fe("bg-gray-300 dark:bg-gray-700 -mx-1 my-1 h-px",n),...r})}function $j({...n}){return o.jsx(Oj,{"data-slot":"dropdown-menu-sub",...n})}function Hj({className:n,inset:r,children:s,...a}){return o.jsxs(Lj,{"data-slot":"dropdown-menu-sub-trigger","data-inset":r,className:Fe("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",n),...a,children:[s,o.jsx(Xs,{className:"ml-auto size-4"})]})}function Bj({className:n,...r}){return o.jsx(zj,{"data-slot":"dropdown-menu-sub-content",className:Fe("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",n),...r})}var Wj=Symbol("radix.slottable");function Vj(n){const r=({children:s})=>o.jsx(o.Fragment,{children:s});return r.displayName=`${n}.Slottable`,r.__radixId=Wj,r}var dv=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Uj="VisuallyHidden",uv=f.forwardRef((n,r)=>o.jsx(Me.span,{...n,ref:r,style:{...dv,...n.style}}));uv.displayName=Uj;var Gj=uv,[Cl]=cn("Tooltip",[io]),kl=io(),pv="TooltipProvider",Qj=700,cu="tooltip.open",[qj,Ku]=Cl(pv),fv=n=>{const{__scopeTooltip:r,delayDuration:s=Qj,skipDelayDuration:a=300,disableHoverableContent:c=!1,children:d}=n,p=f.useRef(!0),m=f.useRef(!1),h=f.useRef(0);return f.useEffect(()=>{const v=h.current;return()=>window.clearTimeout(v)},[]),o.jsx(qj,{scope:r,isOpenDelayedRef:p,delayDuration:s,onOpen:f.useCallback(()=>{window.clearTimeout(h.current),p.current=!1},[]),onClose:f.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>p.current=!0,a)},[a]),isPointerInTransitRef:m,onPointerInTransitChange:f.useCallback(v=>{m.current=v},[]),disableHoverableContent:c,children:d})};fv.displayName=pv;var si="Tooltip",[Kj,bi]=Cl(si),mv=n=>{const{__scopeTooltip:r,children:s,open:a,defaultOpen:c,onOpenChange:d,disableHoverableContent:p,delayDuration:m}=n,h=Ku(si,n.__scopeTooltip),v=kl(r),[y,x]=f.useState(null),b=Jt(),S=f.useRef(0),N=p??h.disableHoverableContent,C=m??h.delayDuration,k=f.useRef(!1),[P,j]=An({prop:a,defaultProp:c??!1,onChange:z=>{z?(h.onOpen(),document.dispatchEvent(new CustomEvent(cu))):h.onClose(),d?.(z)},caller:si}),M=f.useMemo(()=>P?k.current?"delayed-open":"instant-open":"closed",[P]),R=f.useCallback(()=>{window.clearTimeout(S.current),S.current=0,k.current=!1,j(!0)},[j]),I=f.useCallback(()=>{window.clearTimeout(S.current),S.current=0,j(!1)},[j]),W=f.useCallback(()=>{window.clearTimeout(S.current),S.current=window.setTimeout(()=>{k.current=!0,j(!0),S.current=0},C)},[C,j]);return f.useEffect(()=>()=>{S.current&&(window.clearTimeout(S.current),S.current=0)},[]),o.jsx(vl,{...v,children:o.jsx(Kj,{scope:r,contentId:b,open:P,stateAttribute:M,trigger:y,onTriggerChange:x,onTriggerEnter:f.useCallback(()=>{h.isOpenDelayedRef.current?W():R()},[h.isOpenDelayedRef,W,R]),onTriggerLeave:f.useCallback(()=>{N?I():(window.clearTimeout(S.current),S.current=0)},[I,N]),onOpen:R,onClose:I,disableHoverableContent:N,children:s})})};mv.displayName=si;var du="TooltipTrigger",gv=f.forwardRef((n,r)=>{const{__scopeTooltip:s,...a}=n,c=bi(du,s),d=Ku(du,s),p=kl(s),m=f.useRef(null),h=ze(r,m,c.onTriggerChange),v=f.useRef(!1),y=f.useRef(!1),x=f.useCallback(()=>v.current=!1,[]);return f.useEffect(()=>()=>document.removeEventListener("pointerup",x),[x]),o.jsx(Lu,{asChild:!0,...p,children:o.jsx(Me.button,{"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute,...a,ref:h,onPointerMove:ge(n.onPointerMove,b=>{b.pointerType!=="touch"&&!y.current&&!d.isPointerInTransitRef.current&&(c.onTriggerEnter(),y.current=!0)}),onPointerLeave:ge(n.onPointerLeave,()=>{c.onTriggerLeave(),y.current=!1}),onPointerDown:ge(n.onPointerDown,()=>{c.open&&c.onClose(),v.current=!0,document.addEventListener("pointerup",x,{once:!0})}),onFocus:ge(n.onFocus,()=>{v.current||c.onOpen()}),onBlur:ge(n.onBlur,c.onClose),onClick:ge(n.onClick,c.onClose)})})});gv.displayName=du;var Yu="TooltipPortal",[Yj,Xj]=Cl(Yu,{forceMount:void 0}),hv=n=>{const{__scopeTooltip:r,forceMount:s,children:a,container:c}=n,d=bi(Yu,r);return o.jsx(Yj,{scope:r,forceMount:s,children:o.jsx(It,{present:s||d.open,children:o.jsx(gi,{asChild:!0,container:c,children:a})})})};hv.displayName=Yu;var to="TooltipContent",vv=f.forwardRef((n,r)=>{const s=Xj(to,n.__scopeTooltip),{forceMount:a=s.forceMount,side:c="top",...d}=n,p=bi(to,n.__scopeTooltip);return o.jsx(It,{present:a||p.open,children:p.disableHoverableContent?o.jsx(xv,{side:c,...d,ref:r}):o.jsx(Jj,{side:c,...d,ref:r})})}),Jj=f.forwardRef((n,r)=>{const s=bi(to,n.__scopeTooltip),a=Ku(to,n.__scopeTooltip),c=f.useRef(null),d=ze(r,c),[p,m]=f.useState(null),{trigger:h,onClose:v}=s,y=c.current,{onPointerInTransitChange:x}=a,b=f.useCallback(()=>{m(null),x(!1)},[x]),S=f.useCallback((N,C)=>{const k=N.currentTarget,P={x:N.clientX,y:N.clientY},j=nP(P,k.getBoundingClientRect()),M=rP(P,j),R=sP(C.getBoundingClientRect()),I=iP([...M,...R]);m(I),x(!0)},[x]);return f.useEffect(()=>()=>b(),[b]),f.useEffect(()=>{if(h&&y){const N=k=>S(k,y),C=k=>S(k,h);return h.addEventListener("pointerleave",N),y.addEventListener("pointerleave",C),()=>{h.removeEventListener("pointerleave",N),y.removeEventListener("pointerleave",C)}}},[h,y,S,b]),f.useEffect(()=>{if(p){const N=C=>{const k=C.target,P={x:C.clientX,y:C.clientY},j=h?.contains(k)||y?.contains(k),M=!oP(P,p);j?b():M&&(b(),v())};return document.addEventListener("pointermove",N),()=>document.removeEventListener("pointermove",N)}},[h,y,p,v,b]),o.jsx(xv,{...n,ref:d})}),[Zj,eP]=Cl(si,{isInside:!1}),tP=Vj("TooltipContent"),xv=f.forwardRef((n,r)=>{const{__scopeTooltip:s,children:a,"aria-label":c,onEscapeKeyDown:d,onPointerDownOutside:p,...m}=n,h=bi(to,s),v=kl(s),{onClose:y}=h;return f.useEffect(()=>(document.addEventListener(cu,y),()=>document.removeEventListener(cu,y)),[y]),f.useEffect(()=>{if(h.trigger){const x=b=>{b.target?.contains(h.trigger)&&y()};return window.addEventListener("scroll",x,{capture:!0}),()=>window.removeEventListener("scroll",x,{capture:!0})}},[h.trigger,y]),o.jsx(fi,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:x=>x.preventDefault(),onDismiss:y,children:o.jsxs(zu,{"data-state":h.stateAttribute,...v,...m,ref:r,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[o.jsx(tP,{children:a}),o.jsx(Zj,{scope:s,isInside:!0,children:o.jsx(Gj,{id:h.contentId,role:"tooltip",children:c||a})})]})})});vv.displayName=to;var yv="TooltipArrow",bv=f.forwardRef((n,r)=>{const{__scopeTooltip:s,...a}=n,c=kl(s);return eP(yv,s).isInside?null:o.jsx(Fu,{...c,...a,ref:r})});bv.displayName=yv;function nP(n,r){const s=Math.abs(r.top-n.y),a=Math.abs(r.bottom-n.y),c=Math.abs(r.right-n.x),d=Math.abs(r.left-n.x);switch(Math.min(s,a,c,d)){case d:return"left";case c:return"right";case s:return"top";case a:return"bottom";default:throw new Error("unreachable")}}function rP(n,r,s=5){const a=[];switch(r){case"top":a.push({x:n.x-s,y:n.y+s},{x:n.x+s,y:n.y+s});break;case"bottom":a.push({x:n.x-s,y:n.y-s},{x:n.x+s,y:n.y-s});break;case"left":a.push({x:n.x+s,y:n.y-s},{x:n.x+s,y:n.y+s});break;case"right":a.push({x:n.x-s,y:n.y-s},{x:n.x-s,y:n.y+s});break}return a}function sP(n){const{top:r,right:s,bottom:a,left:c}=n;return[{x:c,y:r},{x:s,y:r},{x:s,y:a},{x:c,y:a}]}function oP(n,r){const{x:s,y:a}=n;let c=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const m=r[d],h=r[p],v=m.x,y=m.y,x=h.x,b=h.y;y>a!=b>a&&s<(x-v)*(a-y)/(b-y)+v&&(c=!c)}return c}function iP(n){const r=n.slice();return r.sort((s,a)=>s.x<a.x?-1:s.x>a.x?1:s.y<a.y?-1:s.y>a.y?1:0),aP(r)}function aP(n){if(n.length<=1)return n.slice();const r=[];for(let a=0;a<n.length;a++){const c=n[a];for(;r.length>=2;){const d=r[r.length-1],p=r[r.length-2];if((d.x-p.x)*(c.y-p.y)>=(d.y-p.y)*(c.x-p.x))r.pop();else break}r.push(c)}r.pop();const s=[];for(let a=n.length-1;a>=0;a--){const c=n[a];for(;s.length>=2;){const d=s[s.length-1],p=s[s.length-2];if((d.x-p.x)*(c.y-p.y)>=(d.y-p.y)*(c.x-p.x))s.pop();else break}s.push(c)}return s.pop(),r.length===1&&s.length===1&&r[0].x===s[0].x&&r[0].y===s[0].y?r:r.concat(s)}var lP=fv,cP=mv,dP=gv,uP=hv,pP=vv,fP=bv;function bt({delayDuration:n=0,...r}){return o.jsx(lP,{"data-slot":"tooltip-provider",delayDuration:n,...r})}function rt({...n}){return o.jsx(bt,{children:o.jsx(cP,{"data-slot":"tooltip",...n})})}function st({...n}){return o.jsx(dP,{"data-slot":"tooltip-trigger",...n})}function ot({className:n,sideOffset:r=0,children:s,...a}){return o.jsx(uP,{children:o.jsxs(pP,{"data-slot":"tooltip-content",sideOffset:r,className:Fe("bg-gray-900 !text-white dark:bg-white dark:!text-gray-900 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-lg px-4 py-2 text-sm text-balance shadow-md [&_p]:text-white",n),...a,children:[s,o.jsx(fP,{className:"bg-gray-900 fill-gray-900 dark:bg-white dark:fill-white z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}var Nl="Collapsible",[mP]=cn(Nl),[gP,Xu]=mP(Nl),wv=f.forwardRef((n,r)=>{const{__scopeCollapsible:s,open:a,defaultOpen:c,disabled:d,onOpenChange:p,...m}=n,[h,v]=An({prop:a,defaultProp:c??!1,onChange:p,caller:Nl});return o.jsx(gP,{scope:s,disabled:d,contentId:Jt(),open:h,onOpenToggle:f.useCallback(()=>v(y=>!y),[v]),children:o.jsx(Me.div,{"data-state":Zu(h),"data-disabled":d?"":void 0,...m,ref:r})})});wv.displayName=Nl;var Sv="CollapsibleTrigger",Cv=f.forwardRef((n,r)=>{const{__scopeCollapsible:s,...a}=n,c=Xu(Sv,s);return o.jsx(Me.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":Zu(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...a,ref:r,onClick:ge(n.onClick,c.onOpenToggle)})});Cv.displayName=Sv;var Ju="CollapsibleContent",kv=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=Xu(Ju,n.__scopeCollapsible);return o.jsx(It,{present:s||c.open,children:({present:d})=>o.jsx(hP,{...a,ref:r,present:d})})});kv.displayName=Ju;var hP=f.forwardRef((n,r)=>{const{__scopeCollapsible:s,present:a,children:c,...d}=n,p=Xu(Ju,s),[m,h]=f.useState(a),v=f.useRef(null),y=ze(r,v),x=f.useRef(0),b=x.current,S=f.useRef(0),N=S.current,C=p.open||m,k=f.useRef(C),P=f.useRef(void 0);return f.useEffect(()=>{const j=requestAnimationFrame(()=>k.current=!1);return()=>cancelAnimationFrame(j)},[]),Rt(()=>{const j=v.current;if(j){P.current=P.current||{transitionDuration:j.style.transitionDuration,animationName:j.style.animationName},j.style.transitionDuration="0s",j.style.animationName="none";const M=j.getBoundingClientRect();x.current=M.height,S.current=M.width,k.current||(j.style.transitionDuration=P.current.transitionDuration,j.style.animationName=P.current.animationName),h(a)}},[p.open,a]),o.jsx(Me.div,{"data-state":Zu(p.open),"data-disabled":p.disabled?"":void 0,id:p.contentId,hidden:!C,...d,ref:y,style:{"--radix-collapsible-content-height":b?`${b}px`:void 0,"--radix-collapsible-content-width":N?`${N}px`:void 0,...n.style},children:C&&c})});function Zu(n){return n?"open":"closed"}var vP=wv;function $d({...n}){return o.jsx(vP,{"data-slot":"collapsible",...n})}function Hd({...n}){return o.jsx(Cv,{"data-slot":"collapsible-trigger",...n})}function Bd({...n}){return o.jsx(kv,{"data-slot":"collapsible-content",...n})}function xP(n){const r=yP(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(wP);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function yP(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=CP(c),m=SP(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var bP=Symbol("radix.slottable");function wP(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===bP}function SP(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function CP(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var jl="Dialog",[Nv]=cn(jl),[kP,In]=Nv(jl),jv=n=>{const{__scopeDialog:r,children:s,open:a,defaultOpen:c,onOpenChange:d,modal:p=!0}=n,m=f.useRef(null),h=f.useRef(null),[v,y]=An({prop:a,defaultProp:c??!1,onChange:d,caller:jl});return o.jsx(kP,{scope:r,triggerRef:m,contentRef:h,contentId:Jt(),titleId:Jt(),descriptionId:Jt(),open:v,onOpenChange:y,onOpenToggle:f.useCallback(()=>y(x=>!x),[y]),modal:p,children:s})};jv.displayName=jl;var Pv="DialogTrigger",NP=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(Pv,s),d=ze(r,c.triggerRef);return o.jsx(Me.button,{type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":np(c.open),...a,ref:d,onClick:ge(n.onClick,c.onOpenToggle)})});NP.displayName=Pv;var ep="DialogPortal",[jP,Ev]=Nv(ep,{forceMount:void 0}),Rv=n=>{const{__scopeDialog:r,forceMount:s,children:a,container:c}=n,d=In(ep,r);return o.jsx(jP,{scope:r,forceMount:s,children:f.Children.map(a,p=>o.jsx(It,{present:s||d.open,children:o.jsx(gi,{asChild:!0,container:c,children:p})}))})};Rv.displayName=ep;var ol="DialogOverlay",Av=f.forwardRef((n,r)=>{const s=Ev(ol,n.__scopeDialog),{forceMount:a=s.forceMount,...c}=n,d=In(ol,n.__scopeDialog);return d.modal?o.jsx(It,{present:a||d.open,children:o.jsx(EP,{...c,ref:r})}):null});Av.displayName=ol;var PP=xP("DialogOverlay.RemoveScroll"),EP=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(ol,s);return o.jsx(bl,{as:PP,allowPinchZoom:!0,shards:[c.contentRef],children:o.jsx(Me.div,{"data-state":np(c.open),...a,ref:r,style:{pointerEvents:"auto",...a.style}})})}),ds="DialogContent",Tv=f.forwardRef((n,r)=>{const s=Ev(ds,n.__scopeDialog),{forceMount:a=s.forceMount,...c}=n,d=In(ds,n.__scopeDialog);return o.jsx(It,{present:a||d.open,children:d.modal?o.jsx(RP,{...c,ref:r}):o.jsx(AP,{...c,ref:r})})});Tv.displayName=ds;var RP=f.forwardRef((n,r)=>{const s=In(ds,n.__scopeDialog),a=f.useRef(null),c=ze(r,s.contentRef,a);return f.useEffect(()=>{const d=a.current;if(d)return $u(d)},[]),o.jsx(Mv,{...n,ref:c,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ge(n.onCloseAutoFocus,d=>{d.preventDefault(),s.triggerRef.current?.focus()}),onPointerDownOutside:ge(n.onPointerDownOutside,d=>{const p=d.detail.originalEvent,m=p.button===0&&p.ctrlKey===!0;(p.button===2||m)&&d.preventDefault()}),onFocusOutside:ge(n.onFocusOutside,d=>d.preventDefault())})}),AP=f.forwardRef((n,r)=>{const s=In(ds,n.__scopeDialog),a=f.useRef(!1),c=f.useRef(!1);return o.jsx(Mv,{...n,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:d=>{n.onCloseAutoFocus?.(d),d.defaultPrevented||(a.current||s.triggerRef.current?.focus(),d.preventDefault()),a.current=!1,c.current=!1},onInteractOutside:d=>{n.onInteractOutside?.(d),d.defaultPrevented||(a.current=!0,d.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const p=d.target;s.triggerRef.current?.contains(p)&&d.preventDefault(),d.detail.originalEvent.type==="focusin"&&c.current&&d.preventDefault()}})}),Mv=f.forwardRef((n,r)=>{const{__scopeDialog:s,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:d,...p}=n,m=In(ds,s),h=f.useRef(null),v=ze(r,h);return Pu(),o.jsxs(o.Fragment,{children:[o.jsx(pl,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:c,onUnmountAutoFocus:d,children:o.jsx(fi,{role:"dialog",id:m.contentId,"aria-describedby":m.descriptionId,"aria-labelledby":m.titleId,"data-state":np(m.open),...p,ref:v,onDismiss:()=>m.onOpenChange(!1)})}),o.jsxs(o.Fragment,{children:[o.jsx(TP,{titleId:m.titleId}),o.jsx(IP,{contentRef:h,descriptionId:m.descriptionId})]})]})}),tp="DialogTitle",Iv=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(tp,s);return o.jsx(Me.h2,{id:c.titleId,...a,ref:r})});Iv.displayName=tp;var _v="DialogDescription",Dv=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(_v,s);return o.jsx(Me.p,{id:c.descriptionId,...a,ref:r})});Dv.displayName=_v;var Ov="DialogClose",Lv=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(Ov,s);return o.jsx(Me.button,{type:"button",...a,ref:r,onClick:ge(n.onClick,()=>c.onOpenChange(!1))})});Lv.displayName=Ov;function np(n){return n?"open":"closed"}var zv="DialogTitleWarning",[uR,Fv]=cS(zv,{contentName:ds,titleName:tp,docsSlug:"dialog"}),TP=({titleId:n})=>{const r=Fv(zv),s=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return f.useEffect(()=>{n&&(document.getElementById(n)||console.error(s))},[s,n]),null},MP="DialogDescriptionWarning",IP=({contentRef:n,descriptionId:r})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Fv(MP).contentName}}.`;return f.useEffect(()=>{const c=n.current?.getAttribute("aria-describedby");r&&c&&(document.getElementById(r)||console.warn(a))},[a,n,r]),null},_P=jv,DP=Rv,$v=Av,OP=Tv,LP=Iv,zP=Dv,FP=Lv;function Pl({...n}){return o.jsx(_P,{"data-slot":"dialog",...n})}function $P({...n}){return o.jsx(DP,{"data-slot":"dialog-portal",...n})}const Hv=f.forwardRef(({className:n,...r},s)=>o.jsx($v,{ref:s,"data-slot":"dialog-overlay",className:Fe("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...r}));Hv.displayName=$v.displayName;function El({className:n,children:r,...s}){return o.jsxs($P,{"data-slot":"dialog-portal",children:[o.jsx(Hv,{}),o.jsxs(OP,{"data-slot":"dialog-content",className:Fe("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",n),...s,children:[r,o.jsxs(FP,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[o.jsx(Js,{}),o.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function oi({className:n,...r}){return o.jsx("div",{"data-slot":"dialog-header",className:Fe("flex flex-col gap-2 text-center sm:text-left",n),...r})}function Bv({className:n,...r}){return o.jsx("div",{"data-slot":"dialog-footer",className:Fe("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",n),...r})}function ii({className:n,...r}){return o.jsx(LP,{"data-slot":"dialog-title",className:Fe("text-lg leading-none font-semibold",n),...r})}function Ug({className:n,...r}){return o.jsx(zP,{"data-slot":"dialog-description",className:Fe("text-muted-foreground text-sm",n),...r})}const zt=f.forwardRef(({className:n,type:r,...s},a)=>o.jsx("input",{type:r,"data-slot":"input",className:Fe("flex h-10 w-full min-w-0 rounded-lg border border-gray-900 bg-white px-3 py-2 text-base text-gray-900 transition-colors placeholder:text-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-semibold dark:border-white dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2","aria-invalid:border-red-500 aria-invalid:ring-red-500/20",n),ref:a,...s}));zt.displayName="Input";const HP=[{id:"marketing-software-aor",title:"Marketing Software AOR"},{id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting"},{id:"pq-response-mnd",title:"PQ Response - MND Housing"},{id:"feature-overview",title:"Feature Overview"},{id:"customer-support",title:"Customer Support"},{id:"feedback-collection",title:"Feedback Collection"},{id:"procurement-rfq",title:"Procurement RFQ to AOR"}];function Gg({open:n,onOpenChange:r,chats:s,onSelectChat:a,onSelectSimulation:c}){const[d,p]=f.useState(""),m=s.filter(x=>x.title.toLowerCase().includes(d.toLowerCase())),h=HP.filter(x=>x.title.toLowerCase().includes(d.toLowerCase())),v=x=>{a(x),r(!1),p("")},y=x=>{c(x),r(!1),p("")};return o.jsx(Pl,{open:n,onOpenChange:r,children:o.jsxs(El,{className:"sm:max-w-lg bg-white border-2 border-gray-900",children:[o.jsx(oi,{children:o.jsx(ii,{className:"text-gray-900",children:"Search Chats"})}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"relative",children:[o.jsx(Ga,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),o.jsx(zt,{placeholder:"Search chats...",value:d,onChange:x=>p(x.target.value),className:"pl-10 bg-white border-gray-300",autoFocus:!0})]}),o.jsxs("div",{className:"max-h-[300px] overflow-y-auto space-y-1",children:[h.map(x=>o.jsxs("button",{onClick:()=>y(x.id),className:"w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left",children:[o.jsx(Gs,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-gray-900 truncate",children:x.title})]},x.id)),m.map(x=>o.jsxs("button",{onClick:()=>v(x.id),className:"w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left",children:[o.jsx(Gs,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-gray-900 truncate",children:x.title})]},x.id)),m.length===0&&h.length===0&&d&&o.jsx("div",{className:"text-center py-8 text-gray-500",children:o.jsxs("p",{className:"text-sm",children:['No chats found matching "',d,'"']})})]})]})]})})}var BP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],WP=BP.reduce((n,r)=>{const s=wu(`Primitive.${r}`),a=f.forwardRef((c,d)=>{const{asChild:p,...m}=c,h=p?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(h,{...m,ref:d})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{}),VP="Label",Wv=f.forwardRef((n,r)=>o.jsx(WP.label,{...n,ref:r,onMouseDown:s=>{s.target.closest("button, input, select, textarea")||(n.onMouseDown?.(s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));Wv.displayName=VP;var UP=Wv;function it({className:n,...r}){return o.jsx(UP,{"data-slot":"label",className:Fe("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...r})}function GP({open:n,onOpenChange:r,onCreateFolder:s}){const[a,c]=f.useState(""),d=m=>{m.preventDefault(),a.trim()&&(s(a.trim()),c(""),r(!1))},p=m=>{m||c(""),r(m)};return o.jsx(Pl,{open:n,onOpenChange:p,children:o.jsxs(El,{className:"sm:max-w-md bg-white border-2 border-gray-900",children:[o.jsx(oi,{children:o.jsx(ii,{className:"text-gray-900",children:"Create New Folder"})}),o.jsxs("form",{onSubmit:d,children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"folder-name",className:"text-gray-700",children:"Folder Name"}),o.jsx(zt,{id:"folder-name",placeholder:"Enter folder name...",value:a,onChange:m=>c(m.target.value),className:"bg-white border-gray-300",autoFocus:!0})]}),o.jsxs("div",{className:"flex items-start gap-2 p-3 bg-gray-100 rounded-lg border border-gray-300",children:[o.jsx(ph,{className:"w-4 h-4 text-gray-700 mt-0.5 flex-shrink-0"}),o.jsx("p",{className:"text-xs text-gray-900",children:"Chats within this folder will only reference files, custom instructions, and memories from within this folder by default. You can change this in folder settings after creation."})]})]}),o.jsxs(Bv,{className:"mt-6",children:[o.jsx(Oe,{type:"button",variant:"outline",onClick:()=>p(!1),children:"Cancel"}),o.jsx(Oe,{type:"submit",disabled:!a.trim(),children:"Create Folder"})]})]})]})})}const qe={emailDrafter:{id:"email-drafter",name:"Email Drafter",description:"Draft professional emails with customizable tone and structure.",owner:"Jennifer Lee",tags:["Communication","Email"],icon:g2,uses:"13.5k",classification:"R/SN",type:"Community",assistantType:"email-drafter"},queryGov:{id:"query-gov",name:"Query@Gov",description:"Ask questions and get answers.",owner:"Ministry of Manpower (MOM)",tags:["Q&A"],icon:xn,uses:"15.2k",classification:"C(CE)/SN",type:"Developer",assistantType:"query"},transcribe:{id:"transcribe",name:"Transcribe Workspace",description:"Creating meeting minutes from your audio file.",owner:"AI Assistant Team",tags:["Meeting","Audio"],icon:x2,uses:"8.3k",classification:"R/SN",type:"Official",assistantType:"transcribe"},deepResearch:{id:"deep-research",name:"Deep Research Assistant",description:"Conduct comprehensive research across multiple sources and synthesize findings.",owner:"AI Assistant Team",tags:["Research","Analysis"],icon:b2,uses:"9.8k",classification:"C(CE)/SN",type:"Official",assistantType:"deep-research-ai"},powerpoint:{id:"powerpoint",name:"Powerpoint Slide Image Generator",description:"Create icons and pictures for your powerpoint slides.",owner:"Suresh",tags:["Slides","Design"],icon:E2,uses:"12.7k",classification:"R/SN",type:"Community",assistantType:"powerpoint"},parliamentaryDrafter:{id:"parliamentary-drafter",name:"Parliamentary Question Drafter",description:"Prepare PQ responses and talking points for Ministers.",owner:"AI Assistant Team",tags:["Parliamentary","Writing"],icon:xn,uses:"11.4k",classification:"C(CE)/SH",type:"Official",assistantType:"parliamentary"},interAgencyMemo:{id:"inter-agency-memo",name:"Inter-Agency Memo Writer",description:"Draft correspondence for whole-of-government initiatives.",owner:"AI Assistant Team",tags:["Communication","Inter-Agency"],icon:ig,uses:"10.3k",classification:"C(CE)/SN",type:"Official",assistantType:"memo"},socialMediaCampaign:{id:"social-media-campaign",name:"Social Media Campaign Planner",description:"Plan and optimize social media campaigns for government communications.",owner:"AI Assistant Team",tags:["Marketing","Social Media"],icon:ig,uses:"6.2k",classification:"R/SN",type:"Official",assistantType:"social-media-campaign"},contentCalendar:{id:"content-calendar",name:"Content Calendar Manager",description:"Organize and schedule content across multiple channels.",owner:"Communications Team",tags:["Marketing","Planning"],icon:$a,uses:"5.8k",classification:"R/SN",type:"Official",assistantType:"content-calendar"},brandGuidelines:{id:"brand-guidelines",name:"Brand Guidelines Assistant",description:"Ensure consistency with government branding and messaging standards.",owner:"AI Assistant Team",tags:["Marketing","Branding"],icon:Bw,uses:"4.9k",classification:"R/SN",type:"Official",assistantType:"brand-guidelines"},marketResearch:{id:"market-research",name:"Market Research Analyzer",description:"Analyze market trends and public sentiment for strategic planning.",owner:"Strategic Planning Unit",tags:["Marketing","Research"],icon:U2,uses:"7.1k",classification:"R/SN",type:"Official",assistantType:"market-research"},workdayShortlister:{id:"workday-shortlister",name:"HR Recruitment Assistant",description:"Analyzes multiple candidate profiles from Workday against job requirements to identify and shortlist the best-fit candidates for open positions.",owner:"AI Assistant Team",tags:["HR","Recruitment"],icon:fh,uses:"8.4k",classification:"C(CE)/SN",type:"Official",assistantType:"workday-shortlister"},interviewQuestions:{id:"interview-questions",name:"Interview Question Generator",description:"Generate relevant interview questions based on job requirements.",owner:"Human Resources Division",tags:["HR","Recruitment"],icon:xn,uses:"6.7k",classification:"R/SN",type:"Official",assistantType:"interview-questions"},onboardingGuide:{id:"onboarding-guide",name:"Employee Onboarding Guide",description:"Create personalized onboarding plans for new hires.",owner:"People Operations",tags:["HR","Onboarding"],icon:ng,uses:"5.3k",classification:"R/SN",type:"Official",assistantType:"onboarding-guide"},performanceReview:{id:"performance-review",name:"Performance Review Assistant",description:"Draft performance reviews and development plans for team members.",owner:"AI Assistant Team",tags:["HR","Performance"],icon:$a,uses:"7.9k",classification:"R/SN",type:"Official",assistantType:"performance-review"},budgetPlanning:{id:"budget-planning",name:"Budget Planning Assistant",description:"Calculate budget allocations and prepare financial reports.",owner:"Ministry of Digital Development and Information (MDDI)",tags:["Finance","Budget"],icon:$a,uses:"7.9k",classification:"C(CE)/SN",type:"Developer",assistantType:"budget"},parliamentaryQA:{id:"parliamentary-qa",name:"Parliamentary Question Assistant",description:"Helps draft responses to parliamentary questions with proper formatting, research from official sources, and talking points for Ministers.",owner:"AI Assistant Team",tags:["Parliamentary","Research"],icon:ng,uses:"7.3k",classification:"C(CE)/SN",type:"Official",assistantType:"parliamentary-question"},policyBrief:{id:"policy-brief",name:"Policy Brief Writer",description:"Draft policy papers and cabinet memos with proper structure.",owner:"AI Assistant Team",tags:["Policy","Writing"],icon:xn,uses:"6.8k",classification:"C(CE)/SH",type:"Official",assistantType:"policy"},procurementHelper:{id:"procurement-helper",name:"Procurement Document Helper",description:"Generate tender documents and evaluation matrices.",owner:"Priya Muthu",tags:["Procurement","Documents"],icon:Mw,uses:"5.6k",classification:"R/SN",type:"Community",assistantType:"procurement"}},Vv=[qe.emailDrafter,qe.queryGov,qe.transcribe],Uv=[qe.queryGov,qe.emailDrafter,qe.powerpoint,qe.parliamentaryDrafter,qe.interAgencyMemo,qe.deepResearch],rp={marketing:[qe.socialMediaCampaign,qe.contentCalendar,qe.brandGuidelines,qe.marketResearch],hr:[qe.workdayShortlister,qe.interviewQuestions,qe.onboardingGuide,qe.performanceReview],"human resources":[qe.workdayShortlister,qe.interviewQuestions,qe.onboardingGuide,qe.performanceReview],policy:[qe.parliamentaryQA,qe.policyBrief,qe.interAgencyMemo],"project manager":[qe.budgetPlanning,qe.policyBrief,qe.procurementHelper],default:[qe.budgetPlanning,qe.policyBrief,qe.procurementHelper]},QP=n=>({"R/SN":"Restricted, Sensitive: Normal","C(CE)/SN":"Cloud Confidential, Sensitive: Normal","C(CE)/SH":"Cloud Confidential, Sensitive: High"})[n]||n;function qP({isOpen:n,onClose:r,chats:s,activeChatId:a,onSelectChat:c,onNewChat:d,onNewCCESNChat:p,onNewSHChat:m,onDeleteChat:h,onPinChat:v,onRenameChat:y,colorTheme:x,fontStyle:b,onColorThemeChange:S,onFontStyleChange:N,onSettingsOpen:C,mode:k,onModeChange:P,activeView:j,onExploreClick:M,onStudioClick:R,onHomeClick:I,onViewChange:W,userProfile:z,onSignOut:V,onSelectSimulation:re,folders:Q=[],onCreateFolder:de,onSelectFolder:ie,onStartAssistantChat:me,onAddChatToFolder:ue,searchModalOpen:fe=!1,onSearchModalChange:ee,onWalkthroughStart:Y,viewedSimulations:_=[]}){const[H,J]=f.useState(!0),[A,U]=f.useState(!1),[B,q]=f.useState(!1),[oe,K]=f.useState(!1),[O,X]=f.useState(null),[le,he]=f.useState(null),[Ee,Re]=f.useState(null),[Z,je]=f.useState(""),pt=Object.values(rp).flat().filter(ce=>ce.assistantType==="parliamentary-question"||ce.assistantType==="workday-shortlister"),vt=Array.from(new Map(pt.map(ce=>[ce.id,ce])).values()),at=(ce,Je)=>{ce.dataTransfer.setData("chatId",Je),ce.dataTransfer.effectAllowed="move"},dn=(ce,Je)=>{ce.preventDefault(),ce.dataTransfer.dropEffect="move",X(Je)},Vt=()=>{X(null)},Xe=(ce,Je)=>{ce.preventDefault();const et=ce.dataTransfer.getData("chatId");et&&ue&&ue(et,Je),X(null)},$t=({label:ce,isOpen:Je,sectionId:et,showInfo:Ke,infoText:Xn})=>{const un=le===et;return o.jsxs("div",{className:"flex items-center gap-1.5 w-full px-2 py-1.5 rounded-lg transition-colors cursor-pointer",onMouseEnter:()=>he(et),onMouseLeave:()=>he(null),children:[o.jsx("span",{className:`text-xs font-semibold uppercase tracking-wide transition-colors ${un?"text-gray-700":"text-gray-500"}`,children:ce}),Ke&&o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("div",{className:"cursor-help text-gray-400 hover:text-gray-600",onClick:ur=>ur.stopPropagation(),children:o.jsx(ph,{className:"w-3 h-3"})})}),o.jsx(ot,{side:"right",children:o.jsx("p",{children:Xn})})]})}),Je?o.jsx(Ys,{className:`w-3 h-3 flex-shrink-0 transition-opacity ${un?"opacity-100 text-gray-800":"opacity-0"}`}):o.jsx(Xs,{className:`w-3 h-3 flex-shrink-0 transition-colors ${un?"text-gray-800":"text-gray-500"}`})]})};return n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex flex-col h-screen w-[280px] border-r border-gray-300 bg-gray-100 flex-shrink-0",children:[o.jsxs("div",{className:"px-4 py-3 flex items-center justify-between",children:[o.jsx("h2",{className:"text-lg font-bold text-gray-900",children:"AI Assistant Desk"}),o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:r,className:"p-1 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700",children:o.jsx(sg,{className:"w-5 h-5"})})}),o.jsx(ot,{side:"right",children:o.jsx("p",{children:"Collapse sidebar"})})]})})]}),o.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:o.jsx(jS,{className:"h-full",children:o.jsx("div",{className:"px-3 py-2",children:k==="desk"?o.jsxs(o.Fragment,{children:[o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsxs(Oe,{"data-tour":"new-chat",className:"w-full justify-start gap-2 px-2 h-9 text-sm group",variant:"ghost",onClick:d,children:[o.jsx(Jo,{className:"w-4 h-4"}),o.jsx("span",{className:"flex-1 text-left",children:"New Chat"}),o.jsx("span",{className:"text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity",children:"⇧⌘O"})]})}),o.jsx(ot,{side:"right",children:o.jsx("p",{children:"Start a new chat (⇧⌘O)"})})]})}),o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsxs(Oe,{onClick:()=>ee(!0),className:"w-full justify-start gap-2 px-2 h-9 text-sm group",variant:"ghost",children:[o.jsx(Ga,{className:"w-4 h-4"}),o.jsx("span",{className:"flex-1 text-left",children:"Search Chats"}),o.jsx("span",{className:"text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity",children:"⌘K"})]})}),o.jsx(ot,{side:"right",children:o.jsx("p",{children:"Search all chats (⌘K)"})})]})}),o.jsxs(Oe,{disabled:!0,className:"w-full justify-start gap-2 px-2 h-9 text-sm opacity-50 cursor-not-allowed",variant:"ghost",children:[o.jsx(Ua,{className:"w-4 h-4"}),o.jsx("span",{className:"flex-1 text-left",children:"Library"}),o.jsx("span",{className:"text-xs text-gray-400",children:"(Coming soon)"})]}),o.jsxs($d,{open:A,onOpenChange:U,className:"mt-3","data-tour":"custom-assistants",children:[o.jsx(Hd,{className:"w-full",children:o.jsx($t,{label:"Custom Assistants",isOpen:A,sectionId:"assistants"})}),o.jsx(Bd,{children:o.jsxs("div",{className:"space-y-0 mt-0.5",children:[vt.map(ce=>{const Je=ce.icon;return o.jsxs("button",{onClick:()=>me?.(ce.name,ce.assistantType),className:"w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-normal hover:bg-gray-200 text-left",children:[o.jsx(Je,{className:"w-4 h-4 text-gray-500"}),o.jsx("span",{className:"truncate",children:ce.name})]},ce.id)}),o.jsxs("button",{onClick:M,className:"w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-semibold hover:bg-gray-200 text-left",children:[o.jsx(Yw,{className:"w-4 h-4 text-gray-500"}),o.jsx("span",{children:"Explore Assistants"})]})]})})]}),o.jsxs($d,{open:B,onOpenChange:q,className:"mt-2","data-tour":"folders",children:[o.jsx(Hd,{className:"w-full",children:o.jsx($t,{label:"Folders",isOpen:B,sectionId:"folders"})}),o.jsx(Bd,{children:o.jsxs("div",{className:"space-y-0 mt-0.5",children:[o.jsxs("button",{onClick:()=>K(!0),className:"w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-semibold hover:bg-gray-200 text-left text-gray-700",children:[o.jsx(uh,{className:"w-4 h-4"}),o.jsx("span",{children:"New Folder"})]}),Q.map(ce=>o.jsxs("button",{onClick:()=>ie?.(ce.id),onDragOver:Je=>dn(Je,ce.id),onDragLeave:Vt,onDrop:Je=>Xe(Je,ce.id),className:`w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-normal hover:bg-gray-200 text-left ${O===ce.id?"bg-gray-300 border-2 border-gray-900 border-dashed":""}`,children:[o.jsx(Xd,{className:"w-4 h-4 text-gray-500"}),o.jsx("span",{className:"truncate flex-1",children:ce.name}),o.jsx("span",{className:"text-xs text-gray-400",children:ce.chatIds.length})]},ce.id))]})})]}),o.jsxs($d,{open:H,onOpenChange:J,className:"mt-2","data-tour":"recent-chats",children:[o.jsx(Hd,{className:"w-full",children:o.jsx($t,{label:"Recent Chats",isOpen:H,sectionId:"recent",showInfo:!0,infoText:"Chats are cleared after 90 days. Drag to folders to organize."})}),o.jsx(Bd,{children:o.jsxs("div",{className:"space-y-0 mt-0.5",children:[[{id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting",classification:"rsn"},{id:"pq-response-mnd",title:"PQ Response - MND Housing",classification:"rsn"},{id:"canvas-demo",title:"Canvas Generation Demo",classification:"rsn"}].filter(ce=>_.includes(ce.id)).map(ce=>{const Je=ce.title.length>24?ce.title.substring(0,24)+"...":ce.title;return o.jsxs("div",{className:`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${a===`sim-${ce.id}`?"bg-gray-200":"hover:bg-gray-200"}`,onClick:()=>re?.(ce.id),title:ce.title,children:[o.jsx("span",{className:"flex-1 truncate text-gray-900",children:Je}),o.jsxs(Un,{children:[o.jsx(Gn,{asChild:!0,children:o.jsx(Oe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0",onClick:et=>et.stopPropagation(),children:o.jsx(as,{className:"w-3 h-3"})})}),o.jsxs(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:[o.jsxs(yt,{onClick:et=>{et.stopPropagation()},className:"hover:bg-gray-100 opacity-50 cursor-not-allowed",disabled:!0,children:[o.jsx(Jd,{className:"w-4 h-4 mr-2"}),"Rename"]}),o.jsxs(yt,{onClick:et=>{et.stopPropagation()},className:"hover:bg-gray-100 opacity-50 cursor-not-allowed",disabled:!0,children:[o.jsx(og,{className:"w-4 h-4 mr-2"}),"Pin"]}),o.jsxs(yt,{onClick:et=>{et.stopPropagation()},className:"text-red-500 hover:bg-gray-100 opacity-50 cursor-not-allowed",disabled:!0,children:[o.jsx(ls,{className:"w-4 h-4 mr-2"}),"Delete"]})]})]})]},ce.id)}),s.filter(ce=>ce.classificationType!=="cce-sn"&&ce.classificationType!=="cce-sh").filter(ce=>!Q?.some(Je=>Je.chatIds.includes(ce.id))).map(ce=>{const Je=ce.title.length>24?ce.title.substring(0,24)+"...":ce.title,et=Ee===ce.id;return o.jsxs("div",{draggable:!et,onDragStart:Ke=>at(Ke,ce.id),className:`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${ce.id===a?"bg-gray-200":"hover:bg-gray-200"}`,onClick:()=>!et&&c(ce.id),title:ce.title,children:[et?o.jsx("input",{type:"text",value:Z,onChange:Ke=>je(Ke.target.value),onBlur:()=>{Z.trim()&&y&&y(ce.id,Z.trim()),Re(null)},onKeyDown:Ke=>{Ke.key==="Enter"?(Z.trim()&&y&&y(ce.id,Z.trim()),Re(null)):Ke.key==="Escape"&&Re(null)},onClick:Ke=>Ke.stopPropagation(),className:"flex-1 bg-white border border-gray-300 rounded px-1 py-0.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400",autoFocus:!0}):o.jsx("span",{className:"flex-1 truncate text-gray-900",onDoubleClick:Ke=>{Ke.stopPropagation(),je(ce.title),Re(ce.id)},title:"Double-click to rename",children:Je}),o.jsxs(Un,{children:[o.jsx(Gn,{asChild:!0,children:o.jsx(Oe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0",onClick:Ke=>Ke.stopPropagation(),children:o.jsx(as,{className:"w-3 h-3"})})}),o.jsxs(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:[o.jsxs(yt,{onClick:Ke=>{Ke.stopPropagation(),je(ce.title),Re(ce.id)},className:"hover:bg-gray-100",children:[o.jsx(Jd,{className:"w-4 h-4 mr-2"}),"Rename"]}),o.jsxs(yt,{onClick:Ke=>{Ke.stopPropagation(),v?.(ce.id)},className:"hover:bg-gray-100",children:[o.jsx(og,{className:"w-4 h-4 mr-2"}),"Pin"]}),o.jsxs(yt,{onClick:Ke=>{Ke.stopPropagation(),h(ce.id)},className:"text-red-500 hover:bg-gray-100",children:[o.jsx(ls,{className:"w-4 h-4 mr-2"}),"Delete"]})]})]})]},ce.id)})]})})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(Oe,{onClick:R,className:`w-full justify-start gap-2 px-2 h-9 text-sm ${j==="studio"?"bg-gray-700":""}`,variant:"outline",children:[o.jsx(Jo,{className:"w-4 h-4"}),"New Assistant"]}),o.jsxs(Oe,{variant:"ghost",className:"w-full justify-start gap-2 px-2 h-9 text-sm",children:[o.jsx(fh,{className:"w-4 h-4"}),"My Assistants"]})]})})})}),o.jsxs("div",{className:"px-3 py-2 border-t border-gray-300 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-7 h-7 rounded-full bg-gray-600 flex-shrink-0"}),o.jsxs("div",{className:"text-left overflow-hidden",children:[o.jsx("div",{className:"text-sm font-medium text-gray-900",children:z.name}),o.jsx("div",{className:"text-xs text-gray-500",children:z.role})]})]}),o.jsxs(Un,{children:[o.jsx(Gn,{asChild:!0,children:o.jsx("button",{"data-tour":"settings",className:"p-1.5 rounded-lg hover:bg-gray-200 transition-colors text-gray-700",children:o.jsx(Zd,{size:16})})}),o.jsxs(Qn,{align:"end",className:"w-48 bg-white border-2 border-gray-900 rounded-lg",children:[o.jsx(yt,{onClick:ce=>{ce.stopPropagation(),C()},className:"hover:bg-gray-100",children:"Settings"}),o.jsx(yt,{onClick:ce=>{ce.stopPropagation(),Y?.()},className:"hover:bg-gray-100",children:"Walkthrough Tour"}),o.jsx(yt,{onClick:ce=>{ce.stopPropagation(),V()},className:"hover:bg-gray-100",children:"Sign Out"}),o.jsx(Fj,{}),o.jsx(yt,{className:"text-xs text-gray-400 hover:bg-gray-100",children:"Privacy Settings"}),o.jsx(yt,{className:"text-xs text-gray-400 hover:bg-gray-100",children:"Terms of Use"}),o.jsx(yt,{className:"text-xs text-gray-400 hover:bg-gray-100",children:"Report Vulnerability"})]})]})]})]}),o.jsx(Gg,{open:fe,onOpenChange:ee,chats:s,onSelectChat:c,onSelectSimulation:re||(()=>{})}),o.jsx(GP,{open:oe,onOpenChange:K,onCreateFolder:de||(()=>{})})]}):o.jsxs("div",{className:"flex flex-col h-screen w-[52px] border-r border-gray-300 bg-gray-100 flex-shrink-0",children:[o.jsx("div",{className:"px-2 py-3 flex justify-center",children:o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700",children:o.jsx(sg,{className:"w-5 h-5"})})}),o.jsx(ot,{side:"right",children:o.jsx("p",{children:"Expand sidebar"})})]})})}),o.jsxs("div",{className:"flex flex-col items-center gap-1 px-2 py-2",children:[o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-700",children:o.jsx(Jo,{className:"w-5 h-5"})})}),o.jsx(ot,{side:"right",children:o.jsx("p",{children:"New Chat (⇧⌘O)"})})]})}),o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>ee(!0),className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-700",children:o.jsx(Ga,{className:"w-5 h-5"})})}),o.jsx(ot,{side:"right",children:o.jsx("p",{children:"Search Chats (⌘K)"})})]})})]}),o.jsx("div",{className:"mt-auto px-2 py-3 border-t border-gray-300 flex justify-center",children:o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:C,className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700",children:o.jsx(Zd,{className:"w-5 h-5"})})}),o.jsx(ot,{side:"right",children:o.jsx("p",{children:"Settings"})})]})})}),o.jsx(Gg,{open:fe,onOpenChange:ee,chats:s,onSelectChat:ce=>{c(ce),ee(!1)},onSelectSimulation:ce=>{re?.(ce),ee(!1)}})]})}function ai({className:n,...r}){return o.jsx("div",{"data-slot":"card",className:Fe("bg-white text-gray-900 flex flex-col gap-6 rounded-lg border-2 border-gray-900 shadow-md dark:bg-gray-900 dark:text-white dark:border-white",n),...r})}function Qg({className:n,...r}){return o.jsx("div",{"data-slot":"card-header",className:Fe("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",n),...r})}function qg({className:n,...r}){return o.jsx("h4",{"data-slot":"card-title",className:Fe("leading-none font-semibold text-gray-900 dark:text-white",n),...r})}function KP({className:n,...r}){return o.jsx("p",{"data-slot":"card-description",className:Fe("text-gray-500",n),...r})}function li({className:n,...r}){return o.jsx("div",{"data-slot":"card-content",className:Fe("px-6 [&:last-child]:pb-6",n),...r})}function Gv(n){return{dark:{sidebar:"bg-gray-950 border-gray-800",mainBg:"bg-gray-900",header:"border-gray-800 bg-gray-950",title:"text-white",newChatBtn:"bg-blue-600 hover:bg-blue-700 text-white border-0",incognitoBtn:"bg-gray-700 hover:bg-gray-600 text-white border-0",navItem:"hover:bg-gray-800 text-gray-300",separator:"bg-gray-800",chatItem:"hover:bg-gray-800",chatItemActive:"bg-indigo-900/30",chatItemText:"text-gray-100",userMessage:"bg-blue-600 text-white",aiMessage:"bg-gray-800 text-gray-100",userAvatar:"bg-blue-600",aiAvatar:"bg-green-600",inputBorder:"border border-gray-700 focus-visible:ring-blue-500",sendButton:"bg-blue-600 hover:bg-blue-700",outputPanel:"bg-gray-950 border border-gray-800",chatArea:"bg-gray-900"},light:{sidebar:"bg-white border-gray-200",mainBg:"bg-gray-50",header:"border-gray-200 bg-white",title:"text-gray-900",newChatBtn:"bg-blue-600 hover:bg-blue-700 text-white border-0",incognitoBtn:"bg-gray-600 hover:bg-gray-700 text-white border-0",navItem:"hover:bg-gray-100 text-gray-700",separator:"bg-gray-200",chatItem:"hover:bg-gray-100",chatItemActive:"bg-indigo-50",chatItemText:"text-gray-900",userMessage:"bg-blue-600 text-white",aiMessage:"bg-white text-gray-900 border border-gray-200",userAvatar:"bg-blue-600",aiAvatar:"bg-green-600",inputBorder:"border border-gray-300 focus-visible:ring-blue-500",sendButton:"bg-blue-600 hover:bg-blue-700",outputPanel:"bg-white border border-gray-200",chatArea:"bg-gray-50"},minimal:{sidebar:"bg-white border-gray-100",mainBg:"bg-white",header:"border-gray-100 bg-white",title:"text-gray-900",newChatBtn:"bg-gray-900 hover:bg-gray-800 text-white border-0",incognitoBtn:"bg-gray-700 hover:bg-gray-600 text-white border-0",navItem:"hover:bg-gray-50 text-gray-600",separator:"bg-gray-100",chatItem:"hover:bg-gray-50",chatItemActive:"bg-indigo-50",chatItemText:"text-gray-900",userMessage:"bg-gray-900 text-white",aiMessage:"bg-gray-50 text-gray-900",userAvatar:"bg-gray-900",aiAvatar:"bg-gray-700",inputBorder:"border border-gray-200 focus-visible:ring-gray-400",sendButton:"bg-gray-900 hover:bg-gray-800",outputPanel:"bg-white border border-gray-100",chatArea:"bg-white"},"singapore-red":{sidebar:"bg-gradient-to-br from-red-50 via-white to-red-50 border-red-200",mainBg:"bg-gradient-to-br from-red-50 via-white to-red-50",header:"border-red-200 bg-gradient-to-r from-red-100 to-white",title:"bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0",incognitoBtn:"bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white border-0",navItem:"hover:bg-red-100 text-red-800",separator:"bg-gradient-to-r from-red-300 to-red-200",chatItem:"hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100",chatItemActive:"bg-gradient-to-r from-red-100 to-red-50",chatItemText:"text-red-900",userMessage:"bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md",aiMessage:"bg-white border border-red-200 text-gray-900 shadow-sm",userAvatar:"bg-gradient-to-br from-red-600 to-red-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-red-400 to-red-300 shadow-lg",inputBorder:"border-2 border-red-300 focus-visible:ring-red-500",sendButton:"bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg",outputPanel:"bg-white border border-red-200",chatArea:"bg-gradient-to-br from-red-50 via-white to-red-50"},"pastel-pink":{sidebar:"bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 border-pink-200",mainBg:"bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100",header:"border-pink-200 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100",title:"bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white border-0",incognitoBtn:"bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0",navItem:"hover:bg-pink-100 text-pink-700",separator:"bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300",chatItem:"hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100",chatItemActive:"bg-gradient-to-r from-pink-100 to-rose-100",chatItemText:"text-pink-900",userMessage:"bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md",aiMessage:"bg-white border border-pink-200 text-gray-900 shadow-sm",userAvatar:"bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-pink-300 to-rose-400 shadow-lg",inputBorder:"border-2 border-pink-300 focus-visible:ring-pink-400",sendButton:"bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 shadow-lg",outputPanel:"bg-white border border-pink-200",chatArea:"bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"},"army-green":{sidebar:"bg-gradient-to-br from-green-900 via-green-800 to-green-900 border-green-700",mainBg:"bg-gradient-to-br from-green-900 via-green-800 to-green-900",header:"border-green-700 bg-gradient-to-r from-green-900 to-green-800",title:"text-green-100",newChatBtn:"bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white border-0",incognitoBtn:"bg-gradient-to-r from-green-800 to-green-700 hover:from-green-900 hover:to-green-800 text-white border-0",navItem:"hover:bg-green-800 text-green-200",separator:"bg-green-700",chatItem:"hover:bg-green-800",chatItemActive:"bg-green-800",chatItemText:"text-green-100",userMessage:"bg-gradient-to-r from-green-700 to-green-600 text-white shadow-md",aiMessage:"bg-green-950 border border-green-800 text-green-100 shadow-sm",userAvatar:"bg-gradient-to-br from-green-600 to-green-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-green-700 to-green-600 shadow-lg",inputBorder:"border-2 border-green-700 focus-visible:ring-green-500",sendButton:"bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 shadow-lg",outputPanel:"bg-green-950 border border-green-800",chatArea:"bg-gradient-to-br from-green-900 via-green-800 to-green-900"},rainbow:{sidebar:"bg-gradient-to-br from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100 border-purple-300",mainBg:"bg-gradient-to-br from-red-50 via-yellow-50 via-green-50 via-blue-50 to-purple-50",header:"border-purple-300 bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100",title:"bg-gradient-to-r from-red-600 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:from-red-600 hover:via-yellow-600 hover:via-green-600 hover:via-blue-600 hover:to-purple-600 text-white border-0",incognitoBtn:"bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 text-white border-0",navItem:"hover:bg-gradient-to-r hover:from-red-100 hover:via-yellow-100 hover:to-green-100 text-purple-700",separator:"bg-gradient-to-r from-red-300 via-yellow-300 via-green-300 via-blue-300 to-purple-300",chatItem:"hover:bg-gradient-to-r hover:from-red-100 hover:via-yellow-100 hover:to-purple-100",chatItemActive:"bg-gradient-to-r from-red-100 via-yellow-100 to-purple-100",chatItemText:"text-purple-900",userMessage:"bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-green-500 text-white shadow-md",aiMessage:"bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border border-purple-200 text-gray-900 shadow-md",userAvatar:"bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg",inputBorder:"border-2 border-purple-300 focus-visible:ring-purple-500",sendButton:"bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:from-red-600 hover:to-purple-600 shadow-lg",outputPanel:"bg-white border border-purple-200",chatArea:"bg-gradient-to-br from-red-50 via-yellow-50 via-green-50 via-blue-50 to-purple-50"},"national-day":{sidebar:"bg-gradient-to-br from-red-600 via-red-500 to-white border-red-400",mainBg:"bg-gradient-to-br from-red-500 via-white to-red-500",header:"border-red-400 bg-gradient-to-r from-red-600 via-white to-red-600",title:"bg-gradient-to-r from-red-700 via-yellow-500 to-red-700 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 hover:from-red-700 hover:via-yellow-500 hover:to-red-700 text-white border-2 border-yellow-400",incognitoBtn:"bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-red-800 hover:to-red-800 text-white border-2 border-white",navItem:"hover:bg-red-100 text-red-900",separator:"bg-gradient-to-r from-red-400 via-yellow-300 to-red-400 h-1",chatItem:"hover:bg-gradient-to-r hover:from-red-50 hover:via-yellow-50 hover:to-red-50",chatItemActive:"bg-gradient-to-r from-red-100 via-yellow-50 to-red-100 border-l-4 border-red-600",chatItemText:"text-red-900",userMessage:"bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg border-2 border-yellow-400",aiMessage:"bg-white border-2 border-red-400 text-gray-900 shadow-lg",userAvatar:"bg-gradient-to-br from-red-600 via-yellow-500 to-red-600 shadow-lg border-2 border-white",aiAvatar:"bg-gradient-to-br from-white via-red-200 to-white shadow-lg border-2 border-red-600",inputBorder:"border-2 border-red-400 focus-visible:ring-red-500 focus-visible:ring-offset-2",sendButton:"bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 hover:from-red-700 hover:via-yellow-500 hover:to-red-700 shadow-lg border-2 border-yellow-500",outputPanel:"bg-gradient-to-br from-white via-red-50 to-white border-2 border-red-400",chatArea:"bg-gradient-to-br from-red-100 via-white via-yellow-50 to-red-100"}}[n]}function Rl(n){return{modern:{base:"",title:"",message:"",input:""},seniors:{base:"text-lg",title:"text-2xl",message:"text-xl",input:"text-lg"},compact:{base:"text-sm",title:"text-base",message:"text-sm",input:"text-sm"}}[n]}function YP({colorTheme:n,fontStyle:r,onStartAssistantChat:s,userRole:a,bookmarkedAssistants:c=[],onToggleBookmark:d}){const p=Rl(r),m=Object.values(rp).flat(),h=[...Uv,...Vv,...m],y=Array.from(new Map(h.map(b=>[b.id,b])).values()).filter(b=>b.assistantType==="parliamentary-question"||b.assistantType==="workday-shortlister"),x=b=>{const S=b.icon,N=c.includes(b.id);return o.jsx(ai,{className:"hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-300 shadow-sm bg-white overflow-hidden relative",onClick:()=>s(b.name,b.assistantType),children:o.jsxs(li,{className:"p-6",children:[o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:P=>{P.stopPropagation(),d?.(b.id)},className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 transition-colors",children:o.jsx(Pw,{className:`w-5 h-5 ${N?"fill-gray-900 text-gray-900":"text-gray-400"}`})})}),o.jsx(ot,{children:o.jsx("p",{children:"Bookmark"})})]})}),o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mb-4",children:o.jsx(S,{className:"w-6 h-6 text-gray-700"})}),o.jsxs("div",{className:"mb-4",children:[o.jsx("h3",{className:"text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors",children:b.name}),o.jsx("p",{className:"text-sm text-gray-500 leading-relaxed",children:b.description})]}),o.jsxs("div",{className:"flex items-center text-xs text-gray-500",children:[o.jsx(dh,{className:"w-3.5 h-3.5 mr-1.5 flex-shrink-0"}),o.jsx("span",{className:"truncate",children:QP(b.classification)})]})]})},b.id)};return o.jsxs("div",{className:`flex-1 flex flex-col bg-gray-100 ${p.base}`,children:[o.jsx("div",{className:"flex items-center gap-2 p-4 bg-gray-100",children:o.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:"Explore Assistants"})}),o.jsx("div",{className:"flex-1 overflow-auto",children:o.jsx("div",{className:"max-w-7xl mx-auto px-4 py-8 space-y-12",children:o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",children:y.map(x)})})})]})}const wi=f.forwardRef(({className:n,...r},s)=>o.jsx("textarea",{ref:s,"data-slot":"textarea",className:Fe("resize-none border-gray-900 dark:border-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 aria-invalid:ring-red-500/20 aria-invalid:border-red-500 flex field-sizing-content min-h-16 w-full rounded-lg border bg-white dark:bg-gray-900 px-3 py-2 text-base text-gray-900 dark:text-white transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50",n),...r}));wi.displayName="Textarea";function XP({colorTheme:n,fontStyle:r}){const s=Gv(n),a=Rl(r);return o.jsxs("div",{className:`flex-1 flex flex-col ${s.mainBg} ${a.base}`,children:[o.jsx("div",{className:`flex items-center gap-2 p-4 border-b ${s.header}`,children:o.jsx("h1",{className:s.title+" "+a.title,children:"Create Your Assistant"})}),o.jsx("div",{className:"flex-1 overflow-auto",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-8",children:[o.jsx("div",{className:"space-y-2",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:`p-3 rounded-lg ${s.userAvatar}`,children:o.jsx(J2,{className:"w-6 h-6 text-white"})}),o.jsxs("div",{children:[o.jsx("h2",{className:`text-xs ${s.chatItemText} ${a.title}`,children:"Assistant Studio"}),o.jsx("p",{className:`${s.navItem} opacity-70 text-xs`,children:"Design and configure your custom AI assistant"})]})]})}),o.jsxs(ai,{children:[o.jsxs(Qg,{children:[o.jsx(qg,{className:"text-xs",children:"Create New Assistant"}),o.jsx(KP,{className:"text-xs",children:"Give your assistant a name and describe what it does"})]}),o.jsxs(li,{className:"space-y-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"assistant-name",className:"text-xs",children:"Assistant Name"}),o.jsx(zt,{id:"assistant-name",placeholder:"e.g., Marketing Expert, Code Reviewer, Transcribe Workspace...",className:`text-xs ${s.inputBorder} ${a.input}`})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"description",className:"text-xs",children:"Description"}),o.jsx(wi,{id:"description",placeholder:"Describe what your assistant does and how it helps users...",className:`${s.inputBorder} ${a.input} min-h-[120px] text-xs`})]}),o.jsxs("div",{className:"flex gap-3 pt-4",children:[o.jsxs(Oe,{className:`${s.sendButton} text-xs`,children:[o.jsx(bu,{className:"w-4 h-4 mr-2"}),"Create Assistant"]}),o.jsx(Oe,{variant:"outline",className:"text-xs",children:"Cancel"})]})]})]}),o.jsxs(ai,{children:[o.jsx(Qg,{children:o.jsxs(qg,{className:"flex items-center gap-2 text-xs",children:[o.jsx(ch,{className:"w-5 h-5"}),"Tips for Creating Great Assistants"]})}),o.jsxs(li,{className:"space-y-3",children:[o.jsxs("div",{className:`${s.navItem} text-xs`,children:[o.jsx("strong",{children:"Be Specific:"})," Give your assistant a clear, descriptive name"]}),o.jsxs("div",{className:`${s.navItem} text-xs`,children:[o.jsx("strong",{children:"Clear Description:"})," Explain what your assistant does and who it's for"]}),o.jsxs("div",{className:`${s.navItem} text-xs`,children:[o.jsx("strong",{children:"Focus on Purpose:"})," Think about the specific tasks your assistant will help with"]}),o.jsxs("div",{className:`${s.navItem} text-xs`,children:[o.jsx("strong",{children:"Keep it Simple:"})," Start with a clear concept, you can always refine it later"]})]})]})]})})]})}function JP(n){const r=ZP(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(t3);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return o.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return o.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function ZP(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=r3(c),m=n3(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var e3=Symbol("radix.slottable");function t3(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===e3}function n3(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function r3(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function sp(n){const r=f.useRef({value:n,previous:n});return f.useMemo(()=>(r.current.value!==n&&(r.current.previous=r.current.value,r.current.value=n),r.current.previous),[n])}var s3=[" ","Enter","ArrowUp","ArrowDown"],o3=[" ","Enter"],us="Select",[Al,Tl,i3]=ju(us),[ao]=cn(us,[i3,io]),Ml=io(),[a3,zr]=ao(us),[l3,c3]=ao(us),Qv=n=>{const{__scopeSelect:r,children:s,open:a,defaultOpen:c,onOpenChange:d,value:p,defaultValue:m,onValueChange:h,dir:v,name:y,autoComplete:x,disabled:b,required:S,form:N}=n,C=Ml(r),[k,P]=f.useState(null),[j,M]=f.useState(null),[R,I]=f.useState(!1),W=pi(v),[z,V]=An({prop:a,defaultProp:c??!1,onChange:d,caller:us}),[re,Q]=An({prop:p,defaultProp:m,onChange:h,caller:us}),de=f.useRef(null),ie=k?N||!!k.closest("form"):!0,[me,ue]=f.useState(new Set),fe=Array.from(me).map(ee=>ee.props.value).join(";");return o.jsx(vl,{...C,children:o.jsxs(a3,{required:S,scope:r,trigger:k,onTriggerChange:P,valueNode:j,onValueNodeChange:M,valueNodeHasChildren:R,onValueNodeHasChildrenChange:I,contentId:Jt(),value:re,onValueChange:Q,open:z,onOpenChange:V,dir:W,triggerPointerDownPosRef:de,disabled:b,children:[o.jsx(Al.Provider,{scope:r,children:o.jsx(l3,{scope:n.__scopeSelect,onNativeOptionAdd:f.useCallback(ee=>{ue(Y=>new Set(Y).add(ee))},[]),onNativeOptionRemove:f.useCallback(ee=>{ue(Y=>{const _=new Set(Y);return _.delete(ee),_})},[]),children:s})}),ie?o.jsxs(gx,{"aria-hidden":!0,required:S,tabIndex:-1,name:y,autoComplete:x,value:re,onChange:ee=>Q(ee.target.value),disabled:b,form:N,children:[re===void 0?o.jsx("option",{value:""}):null,Array.from(me)]},fe):null]})})};Qv.displayName=us;var qv="SelectTrigger",Kv=f.forwardRef((n,r)=>{const{__scopeSelect:s,disabled:a=!1,...c}=n,d=Ml(s),p=zr(qv,s),m=p.disabled||a,h=ze(r,p.onTriggerChange),v=Tl(s),y=f.useRef("touch"),[x,b,S]=vx(C=>{const k=v().filter(M=>!M.disabled),P=k.find(M=>M.value===p.value),j=xx(k,C,P);j!==void 0&&p.onValueChange(j.value)}),N=C=>{m||(p.onOpenChange(!0),S()),C&&(p.triggerPointerDownPosRef.current={x:Math.round(C.pageX),y:Math.round(C.pageY)})};return o.jsx(Lu,{asChild:!0,...d,children:o.jsx(Me.button,{type:"button",role:"combobox","aria-controls":p.contentId,"aria-expanded":p.open,"aria-required":p.required,"aria-autocomplete":"none",dir:p.dir,"data-state":p.open?"open":"closed",disabled:m,"data-disabled":m?"":void 0,"data-placeholder":hx(p.value)?"":void 0,...c,ref:h,onClick:ge(c.onClick,C=>{C.currentTarget.focus(),y.current!=="mouse"&&N(C)}),onPointerDown:ge(c.onPointerDown,C=>{y.current=C.pointerType;const k=C.target;k.hasPointerCapture(C.pointerId)&&k.releasePointerCapture(C.pointerId),C.button===0&&C.ctrlKey===!1&&C.pointerType==="mouse"&&(N(C),C.preventDefault())}),onKeyDown:ge(c.onKeyDown,C=>{const k=x.current!=="";!(C.ctrlKey||C.altKey||C.metaKey)&&C.key.length===1&&b(C.key),!(k&&C.key===" ")&&s3.includes(C.key)&&(N(),C.preventDefault())})})})});Kv.displayName=qv;var Yv="SelectValue",Xv=f.forwardRef((n,r)=>{const{__scopeSelect:s,className:a,style:c,children:d,placeholder:p="",...m}=n,h=zr(Yv,s),{onValueNodeHasChildrenChange:v}=h,y=d!==void 0,x=ze(r,h.onValueNodeChange);return Rt(()=>{v(y)},[v,y]),o.jsx(Me.span,{...m,ref:x,style:{pointerEvents:"none"},children:hx(h.value)?o.jsx(o.Fragment,{children:p}):d})});Xv.displayName=Yv;var d3="SelectIcon",Jv=f.forwardRef((n,r)=>{const{__scopeSelect:s,children:a,...c}=n;return o.jsx(Me.span,{"aria-hidden":!0,...c,ref:r,children:a||"▼"})});Jv.displayName=d3;var u3="SelectPortal",Zv=n=>o.jsx(gi,{asChild:!0,...n});Zv.displayName=u3;var ps="SelectContent",ex=f.forwardRef((n,r)=>{const s=zr(ps,n.__scopeSelect),[a,c]=f.useState();if(Rt(()=>{c(new DocumentFragment)},[]),!s.open){const d=a;return d?ui.createPortal(o.jsx(tx,{scope:n.__scopeSelect,children:o.jsx(Al.Slot,{scope:n.__scopeSelect,children:o.jsx("div",{children:n.children})})}),d):null}return o.jsx(nx,{...n,ref:r})});ex.displayName=ps;var En=10,[tx,Fr]=ao(ps),p3="SelectContentImpl",f3=JP("SelectContent.RemoveScroll"),nx=f.forwardRef((n,r)=>{const{__scopeSelect:s,position:a="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:d,onPointerDownOutside:p,side:m,sideOffset:h,align:v,alignOffset:y,arrowPadding:x,collisionBoundary:b,collisionPadding:S,sticky:N,hideWhenDetached:C,avoidCollisions:k,...P}=n,j=zr(ps,s),[M,R]=f.useState(null),[I,W]=f.useState(null),z=ze(r,O=>R(O)),[V,re]=f.useState(null),[Q,de]=f.useState(null),ie=Tl(s),[me,ue]=f.useState(!1),fe=f.useRef(!1);f.useEffect(()=>{if(M)return $u(M)},[M]),Pu();const ee=f.useCallback(O=>{const[X,...le]=ie().map(Re=>Re.ref.current),[he]=le.slice(-1),Ee=document.activeElement;for(const Re of O)if(Re===Ee||(Re?.scrollIntoView({block:"nearest"}),Re===X&&I&&(I.scrollTop=0),Re===he&&I&&(I.scrollTop=I.scrollHeight),Re?.focus(),document.activeElement!==Ee))return},[ie,I]),Y=f.useCallback(()=>ee([V,M]),[ee,V,M]);f.useEffect(()=>{me&&Y()},[me,Y]);const{onOpenChange:_,triggerPointerDownPosRef:H}=j;f.useEffect(()=>{if(M){let O={x:0,y:0};const X=he=>{O={x:Math.abs(Math.round(he.pageX)-(H.current?.x??0)),y:Math.abs(Math.round(he.pageY)-(H.current?.y??0))}},le=he=>{O.x<=10&&O.y<=10?he.preventDefault():M.contains(he.target)||_(!1),document.removeEventListener("pointermove",X),H.current=null};return H.current!==null&&(document.addEventListener("pointermove",X),document.addEventListener("pointerup",le,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",X),document.removeEventListener("pointerup",le,{capture:!0})}}},[M,_,H]),f.useEffect(()=>{const O=()=>_(!1);return window.addEventListener("blur",O),window.addEventListener("resize",O),()=>{window.removeEventListener("blur",O),window.removeEventListener("resize",O)}},[_]);const[J,A]=vx(O=>{const X=ie().filter(Ee=>!Ee.disabled),le=X.find(Ee=>Ee.ref.current===document.activeElement),he=xx(X,O,le);he&&setTimeout(()=>he.ref.current.focus())}),U=f.useCallback((O,X,le)=>{const he=!fe.current&&!le;(j.value!==void 0&&j.value===X||he)&&(re(O),he&&(fe.current=!0))},[j.value]),B=f.useCallback(()=>M?.focus(),[M]),q=f.useCallback((O,X,le)=>{const he=!fe.current&&!le;(j.value!==void 0&&j.value===X||he)&&de(O)},[j.value]),oe=a==="popper"?uu:rx,K=oe===uu?{side:m,sideOffset:h,align:v,alignOffset:y,arrowPadding:x,collisionBoundary:b,collisionPadding:S,sticky:N,hideWhenDetached:C,avoidCollisions:k}:{};return o.jsx(tx,{scope:s,content:M,viewport:I,onViewportChange:W,itemRefCallback:U,selectedItem:V,onItemLeave:B,itemTextRefCallback:q,focusSelectedItem:Y,selectedItemText:Q,position:a,isPositioned:me,searchRef:J,children:o.jsx(bl,{as:f3,allowPinchZoom:!0,children:o.jsx(pl,{asChild:!0,trapped:j.open,onMountAutoFocus:O=>{O.preventDefault()},onUnmountAutoFocus:ge(c,O=>{j.trigger?.focus({preventScroll:!0}),O.preventDefault()}),children:o.jsx(fi,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:O=>O.preventDefault(),onDismiss:()=>j.onOpenChange(!1),children:o.jsx(oe,{role:"listbox",id:j.contentId,"data-state":j.open?"open":"closed",dir:j.dir,onContextMenu:O=>O.preventDefault(),...P,...K,onPlaced:()=>ue(!0),ref:z,style:{display:"flex",flexDirection:"column",outline:"none",...P.style},onKeyDown:ge(P.onKeyDown,O=>{const X=O.ctrlKey||O.altKey||O.metaKey;if(O.key==="Tab"&&O.preventDefault(),!X&&O.key.length===1&&A(O.key),["ArrowUp","ArrowDown","Home","End"].includes(O.key)){let he=ie().filter(Ee=>!Ee.disabled).map(Ee=>Ee.ref.current);if(["ArrowUp","End"].includes(O.key)&&(he=he.slice().reverse()),["ArrowUp","ArrowDown"].includes(O.key)){const Ee=O.target,Re=he.indexOf(Ee);he=he.slice(Re+1)}setTimeout(()=>ee(he)),O.preventDefault()}})})})})})})});nx.displayName=p3;var m3="SelectItemAlignedPosition",rx=f.forwardRef((n,r)=>{const{__scopeSelect:s,onPlaced:a,...c}=n,d=zr(ps,s),p=Fr(ps,s),[m,h]=f.useState(null),[v,y]=f.useState(null),x=ze(r,z=>y(z)),b=Tl(s),S=f.useRef(!1),N=f.useRef(!0),{viewport:C,selectedItem:k,selectedItemText:P,focusSelectedItem:j}=p,M=f.useCallback(()=>{if(d.trigger&&d.valueNode&&m&&v&&C&&k&&P){const z=d.trigger.getBoundingClientRect(),V=v.getBoundingClientRect(),re=d.valueNode.getBoundingClientRect(),Q=P.getBoundingClientRect();if(d.dir!=="rtl"){const Ee=Q.left-V.left,Re=re.left-Ee,Z=z.left-Re,je=z.width+Z,Ge=Math.max(je,V.width),pt=window.innerWidth-En,vt=tu(Re,[En,Math.max(En,pt-Ge)]);m.style.minWidth=je+"px",m.style.left=vt+"px"}else{const Ee=V.right-Q.right,Re=window.innerWidth-re.right-Ee,Z=window.innerWidth-z.right-Re,je=z.width+Z,Ge=Math.max(je,V.width),pt=window.innerWidth-En,vt=tu(Re,[En,Math.max(En,pt-Ge)]);m.style.minWidth=je+"px",m.style.right=vt+"px"}const de=b(),ie=window.innerHeight-En*2,me=C.scrollHeight,ue=window.getComputedStyle(v),fe=parseInt(ue.borderTopWidth,10),ee=parseInt(ue.paddingTop,10),Y=parseInt(ue.borderBottomWidth,10),_=parseInt(ue.paddingBottom,10),H=fe+ee+me+_+Y,J=Math.min(k.offsetHeight*5,H),A=window.getComputedStyle(C),U=parseInt(A.paddingTop,10),B=parseInt(A.paddingBottom,10),q=z.top+z.height/2-En,oe=ie-q,K=k.offsetHeight/2,O=k.offsetTop+K,X=fe+ee+O,le=H-X;if(X<=q){const Ee=de.length>0&&k===de[de.length-1].ref.current;m.style.bottom="0px";const Re=v.clientHeight-C.offsetTop-C.offsetHeight,Z=Math.max(oe,K+(Ee?B:0)+Re+Y),je=X+Z;m.style.height=je+"px"}else{const Ee=de.length>0&&k===de[0].ref.current;m.style.top="0px";const Z=Math.max(q,fe+C.offsetTop+(Ee?U:0)+K)+le;m.style.height=Z+"px",C.scrollTop=X-q+C.offsetTop}m.style.margin=`${En}px 0`,m.style.minHeight=J+"px",m.style.maxHeight=ie+"px",a?.(),requestAnimationFrame(()=>S.current=!0)}},[b,d.trigger,d.valueNode,m,v,C,k,P,d.dir,a]);Rt(()=>M(),[M]);const[R,I]=f.useState();Rt(()=>{v&&I(window.getComputedStyle(v).zIndex)},[v]);const W=f.useCallback(z=>{z&&N.current===!0&&(M(),j?.(),N.current=!1)},[M,j]);return o.jsx(h3,{scope:s,contentWrapper:m,shouldExpandOnScrollRef:S,onScrollButtonChange:W,children:o.jsx("div",{ref:h,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:R},children:o.jsx(Me.div,{...c,ref:x,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});rx.displayName=m3;var g3="SelectPopperPosition",uu=f.forwardRef((n,r)=>{const{__scopeSelect:s,align:a="start",collisionPadding:c=En,...d}=n,p=Ml(s);return o.jsx(zu,{...p,...d,ref:r,align:a,collisionPadding:c,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});uu.displayName=g3;var[h3,op]=ao(ps,{}),pu="SelectViewport",sx=f.forwardRef((n,r)=>{const{__scopeSelect:s,nonce:a,...c}=n,d=Fr(pu,s),p=op(pu,s),m=ze(r,d.onViewportChange),h=f.useRef(0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),o.jsx(Al.Slot,{scope:s,children:o.jsx(Me.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:m,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:ge(c.onScroll,v=>{const y=v.currentTarget,{contentWrapper:x,shouldExpandOnScrollRef:b}=p;if(b?.current&&x){const S=Math.abs(h.current-y.scrollTop);if(S>0){const N=window.innerHeight-En*2,C=parseFloat(x.style.minHeight),k=parseFloat(x.style.height),P=Math.max(C,k);if(P<N){const j=P+S,M=Math.min(N,j),R=j-M;x.style.height=M+"px",x.style.bottom==="0px"&&(y.scrollTop=R>0?R:0,x.style.justifyContent="flex-end")}}}h.current=y.scrollTop})})})]})});sx.displayName=pu;var ox="SelectGroup",[v3,x3]=ao(ox),y3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n,c=Jt();return o.jsx(v3,{scope:s,id:c,children:o.jsx(Me.div,{role:"group","aria-labelledby":c,...a,ref:r})})});y3.displayName=ox;var ix="SelectLabel",b3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n,c=x3(ix,s);return o.jsx(Me.div,{id:c.id,...a,ref:r})});b3.displayName=ix;var il="SelectItem",[w3,ax]=ao(il),lx=f.forwardRef((n,r)=>{const{__scopeSelect:s,value:a,disabled:c=!1,textValue:d,...p}=n,m=zr(il,s),h=Fr(il,s),v=m.value===a,[y,x]=f.useState(d??""),[b,S]=f.useState(!1),N=ze(r,j=>h.itemRefCallback?.(j,a,c)),C=Jt(),k=f.useRef("touch"),P=()=>{c||(m.onValueChange(a),m.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return o.jsx(w3,{scope:s,value:a,disabled:c,textId:C,isSelected:v,onItemTextChange:f.useCallback(j=>{x(M=>M||(j?.textContent??"").trim())},[]),children:o.jsx(Al.ItemSlot,{scope:s,value:a,disabled:c,textValue:y,children:o.jsx(Me.div,{role:"option","aria-labelledby":C,"data-highlighted":b?"":void 0,"aria-selected":v&&b,"data-state":v?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...p,ref:N,onFocus:ge(p.onFocus,()=>S(!0)),onBlur:ge(p.onBlur,()=>S(!1)),onClick:ge(p.onClick,()=>{k.current!=="mouse"&&P()}),onPointerUp:ge(p.onPointerUp,()=>{k.current==="mouse"&&P()}),onPointerDown:ge(p.onPointerDown,j=>{k.current=j.pointerType}),onPointerMove:ge(p.onPointerMove,j=>{k.current=j.pointerType,c?h.onItemLeave?.():k.current==="mouse"&&j.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ge(p.onPointerLeave,j=>{j.currentTarget===document.activeElement&&h.onItemLeave?.()}),onKeyDown:ge(p.onKeyDown,j=>{h.searchRef?.current!==""&&j.key===" "||(o3.includes(j.key)&&P(),j.key===" "&&j.preventDefault())})})})})});lx.displayName=il;var Ko="SelectItemText",cx=f.forwardRef((n,r)=>{const{__scopeSelect:s,className:a,style:c,...d}=n,p=zr(Ko,s),m=Fr(Ko,s),h=ax(Ko,s),v=c3(Ko,s),[y,x]=f.useState(null),b=ze(r,P=>x(P),h.onItemTextChange,P=>m.itemTextRefCallback?.(P,h.value,h.disabled)),S=y?.textContent,N=f.useMemo(()=>o.jsx("option",{value:h.value,disabled:h.disabled,children:S},h.value),[h.disabled,h.value,S]),{onNativeOptionAdd:C,onNativeOptionRemove:k}=v;return Rt(()=>(C(N),()=>k(N)),[C,k,N]),o.jsxs(o.Fragment,{children:[o.jsx(Me.span,{id:h.textId,...d,ref:b}),h.isSelected&&p.valueNode&&!p.valueNodeHasChildren?ui.createPortal(d.children,p.valueNode):null]})});cx.displayName=Ko;var dx="SelectItemIndicator",ux=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n;return ax(dx,s).isSelected?o.jsx(Me.span,{"aria-hidden":!0,...a,ref:r}):null});ux.displayName=dx;var fu="SelectScrollUpButton",px=f.forwardRef((n,r)=>{const s=Fr(fu,n.__scopeSelect),a=op(fu,n.__scopeSelect),[c,d]=f.useState(!1),p=ze(r,a.onScrollButtonChange);return Rt(()=>{if(s.viewport&&s.isPositioned){let m=function(){const v=h.scrollTop>0;d(v)};const h=s.viewport;return m(),h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[s.viewport,s.isPositioned]),c?o.jsx(mx,{...n,ref:p,onAutoScroll:()=>{const{viewport:m,selectedItem:h}=s;m&&h&&(m.scrollTop=m.scrollTop-h.offsetHeight)}}):null});px.displayName=fu;var mu="SelectScrollDownButton",fx=f.forwardRef((n,r)=>{const s=Fr(mu,n.__scopeSelect),a=op(mu,n.__scopeSelect),[c,d]=f.useState(!1),p=ze(r,a.onScrollButtonChange);return Rt(()=>{if(s.viewport&&s.isPositioned){let m=function(){const v=h.scrollHeight-h.clientHeight,y=Math.ceil(h.scrollTop)<v;d(y)};const h=s.viewport;return m(),h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[s.viewport,s.isPositioned]),c?o.jsx(mx,{...n,ref:p,onAutoScroll:()=>{const{viewport:m,selectedItem:h}=s;m&&h&&(m.scrollTop=m.scrollTop+h.offsetHeight)}}):null});fx.displayName=mu;var mx=f.forwardRef((n,r)=>{const{__scopeSelect:s,onAutoScroll:a,...c}=n,d=Fr("SelectScrollButton",s),p=f.useRef(null),m=Tl(s),h=f.useCallback(()=>{p.current!==null&&(window.clearInterval(p.current),p.current=null)},[]);return f.useEffect(()=>()=>h(),[h]),Rt(()=>{m().find(y=>y.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[m]),o.jsx(Me.div,{"aria-hidden":!0,...c,ref:r,style:{flexShrink:0,...c.style},onPointerDown:ge(c.onPointerDown,()=>{p.current===null&&(p.current=window.setInterval(a,50))}),onPointerMove:ge(c.onPointerMove,()=>{d.onItemLeave?.(),p.current===null&&(p.current=window.setInterval(a,50))}),onPointerLeave:ge(c.onPointerLeave,()=>{h()})})}),S3="SelectSeparator",C3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n;return o.jsx(Me.div,{"aria-hidden":!0,...a,ref:r})});C3.displayName=S3;var gu="SelectArrow",k3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n,c=Ml(s),d=zr(gu,s),p=Fr(gu,s);return d.open&&p.position==="popper"?o.jsx(Fu,{...c,...a,ref:r}):null});k3.displayName=gu;var N3="SelectBubbleInput",gx=f.forwardRef(({__scopeSelect:n,value:r,...s},a)=>{const c=f.useRef(null),d=ze(a,c),p=sp(r);return f.useEffect(()=>{const m=c.current;if(!m)return;const h=window.HTMLSelectElement.prototype,y=Object.getOwnPropertyDescriptor(h,"value").set;if(p!==r&&y){const x=new Event("change",{bubbles:!0});y.call(m,r),m.dispatchEvent(x)}},[p,r]),o.jsx(Me.select,{...s,style:{...dv,...s.style},ref:d,defaultValue:r})});gx.displayName=N3;function hx(n){return n===""||n===void 0}function vx(n){const r=Et(n),s=f.useRef(""),a=f.useRef(0),c=f.useCallback(p=>{const m=s.current+p;r(m),(function h(v){s.current=v,window.clearTimeout(a.current),v!==""&&(a.current=window.setTimeout(()=>h(""),1e3))})(m)},[r]),d=f.useCallback(()=>{s.current="",window.clearTimeout(a.current)},[]);return f.useEffect(()=>()=>window.clearTimeout(a.current),[]),[s,c,d]}function xx(n,r,s){const c=r.length>1&&Array.from(r).every(v=>v===r[0])?r[0]:r,d=s?n.indexOf(s):-1;let p=j3(n,Math.max(d,0));c.length===1&&(p=p.filter(v=>v!==s));const h=p.find(v=>v.textValue.toLowerCase().startsWith(c.toLowerCase()));return h!==s?h:void 0}function j3(n,r){return n.map((s,a)=>n[(r+a)%n.length])}var P3=Qv,E3=Kv,R3=Xv,A3=Jv,T3=Zv,M3=ex,I3=sx,_3=lx,D3=cx,O3=ux,L3=px,z3=fx;function ns({...n}){return o.jsx(P3,{"data-slot":"select",...n})}function Vs({...n}){return o.jsx(R3,{"data-slot":"select-value",...n})}function rs({className:n,size:r="default",children:s,...a}){return o.jsxs(E3,{"data-slot":"select-trigger","data-size":r,className:Fe("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...a,children:[s,o.jsx(A3,{asChild:!0,children:o.jsx(Ys,{className:"size-4 opacity-50"})})]})}function ss({className:n,children:r,position:s="popper",...a}){return o.jsx(T3,{children:o.jsxs(M3,{"data-slot":"select-content",className:Fe("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",s==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:s,...a,children:[o.jsx(F3,{}),o.jsx(I3,{className:Fe("p-1",s==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:r}),o.jsx($3,{})]})})}function Be({className:n,children:r,...s}){return o.jsxs(_3,{"data-slot":"select-item",className:Fe("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",n),...s,children:[o.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:o.jsx(O3,{children:o.jsx(Hn,{className:"size-4"})})}),o.jsx(D3,{children:r})]})}function F3({className:n,...r}){return o.jsx(L3,{"data-slot":"select-scroll-up-button",className:Fe("flex cursor-default items-center justify-center py-1",n),...r,children:o.jsx($w,{className:"size-4"})})}function $3({className:n,...r}){return o.jsx(z3,{"data-slot":"select-scroll-down-button",className:Fe("flex cursor-default items-center justify-center py-1",n),...r,children:o.jsx(Ys,{className:"size-4"})})}function H3({source:n,showDelete:r,onRemove:s,onUpdate:a}){const[c,d]=Xt.useState(!1),[p,m]=Xt.useState(n.name),[h,v]=Xt.useState(n.files||[]),y=Xt.useRef(null),x=Xt.useRef(null),b=()=>{d(!0),m(n.name)},S=()=>{d(!1),p.trim()?a(n.id,"name",p.trim()):m(n.name)},N=R=>{R.key==="Enter"?y.current?.blur():R.key==="Escape"&&(m(n.name),d(!1))},C=R=>{const I=R.target.value;I.length<=30&&m(I)};Xt.useEffect(()=>{c&&y.current&&(y.current.focus(),y.current.select())},[c]);const k=()=>{const R=p.length||1,I=8,W=24;return Math.max(160,Math.min(R*I+W,30*I+W))},P=R=>{const I=R.target.files;if(I){const W=Array.from(I).map(z=>({id:Date.now().toString()+Math.random().toString(),name:z.name,size:z.size,uploadedAt:new Date}));v([...h,...W])}},j=R=>{const I=h.filter(W=>W.id!==R);v(I)},M=R=>R<1024?R+" B":R<1024*1024?(R/1024).toFixed(1)+" KB":(R/(1024*1024)).toFixed(1)+" MB";return o.jsxs("div",{className:"space-y-4 p-6 border border-gray-300 rounded-lg bg-gray-100",children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsx("div",{className:"flex-shrink-0",style:{minWidth:"160px"},children:c?o.jsx(zt,{ref:y,value:p,onChange:C,onBlur:S,onKeyDown:N,maxLength:30,className:"h-8 px-2 bg-white border-gray-300",style:{width:`${k()}px`}}):o.jsxs("button",{onClick:b,className:"flex items-center gap-2 group hover:bg-gray-200 px-2 py-1 rounded transition-colors",style:{minWidth:"160px"},children:[o.jsx(Ua,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsx("span",{className:"truncate",children:n.name}),o.jsx(Jd,{className:"w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]})}),r&&o.jsx(Oe,{variant:"ghost",size:"sm",onClick:()=>s(n.id),className:"ml-2 h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50",children:o.jsx(ls,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"grid grid-cols-10 gap-4",children:[o.jsxs("div",{className:"col-span-3",children:[o.jsx(it,{htmlFor:`type-${n.id}`,className:"text-sm",children:"Type"}),o.jsxs(ns,{value:n.type,onValueChange:R=>a(n.id,"type",R),children:[o.jsx(rs,{className:"mt-2",children:o.jsx(Vs,{})}),o.jsxs(ss,{children:[o.jsx(Be,{value:"sharepoint",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(dh,{className:"w-4 h-4"}),"SharePoint"]})}),o.jsx(Be,{value:"gdrive",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(p2,{className:"w-4 h-4"}),"Google Drive"]})}),o.jsx(Be,{value:"aws",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Gw,{className:"w-4 h-4"}),"AWS S3"]})}),o.jsx(Be,{value:"local",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Ua,{className:"w-4 h-4"}),"Local"]})}),o.jsx(Be,{value:"upload",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(qa,{className:"w-4 h-4"}),"Upload"]})})]})]})]}),o.jsx("div",{className:"col-span-7",children:n.type==="upload"?o.jsxs("div",{children:[o.jsx(it,{className:"text-sm",children:"Files"}),o.jsxs(Oe,{variant:"outline",onClick:()=>x.current?.click(),className:"mt-2 w-full",children:[o.jsx(qa,{className:"w-4 h-4 mr-2"}),"Upload Files"]})]}):o.jsxs(o.Fragment,{children:[o.jsx(it,{htmlFor:`path-${n.id}`,className:"text-sm",children:"URL or Connection"}),o.jsx(zt,{id:`path-${n.id}`,value:n.path,onChange:R=>a(n.id,"path",R.target.value),placeholder:n.type==="sharepoint"?"https://yourorg.sharepoint.com":n.type==="gdrive"?"https://drive.google.com/...":n.type==="aws"?"s3://bucket-name/path":"/Users/username/documents",className:"mt-2 bg-white border-gray-300"})]})})]}),n.type==="upload"&&o.jsxs("div",{className:"mt-4",children:[o.jsx(zt,{ref:x,type:"file",multiple:!0,accept:".pdf,.doc,.docx,.txt",onChange:P,className:"hidden"}),h.length>0?o.jsx("div",{className:"space-y-2",children:h.map(R=>o.jsxs("div",{className:"flex items-center justify-between gap-3 bg-white p-3 rounded border border-gray-300 hover:border-gray-500 transition-colors",children:[o.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[o.jsx(xn,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("div",{className:"text-sm truncate",children:R.name}),o.jsx("div",{className:"text-xs text-gray-500",children:M(R.size)})]})]}),o.jsx(Oe,{variant:"ghost",size:"sm",onClick:()=>j(R.id),className:"h-8 w-8 p-0 text-gray-500 hover:text-red-600 hover:bg-red-50 flex-shrink-0",children:o.jsx(Js,{className:"w-4 h-4"})})]},R.id))}):o.jsx("div",{className:"text-sm text-gray-500 italic py-2",children:"No files uploaded yet"})]})]})}function B3({dataSources:n,onAdd:r,onRemove:s,onUpdate:a,showDescription:c=!0}){return o.jsxs("div",{className:"space-y-6",children:[c&&o.jsx("p",{className:"text-gray-500 text-sm",children:"Create a library to organize documents by topic or project. Your AI assistant will reference these documents to provide contextual responses. You can connect cloud sources or upload files directly."}),o.jsxs("div",{className:"space-y-4",children:[n.map(d=>o.jsx(H3,{source:d,showDelete:n.length>1,onRemove:s,onUpdate:a},d.id)),o.jsxs(Oe,{variant:"outline",onClick:r,className:"w-full border-dashed border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-100 text-gray-500",children:[o.jsx(bu,{className:"w-4 h-4 mr-2"}),"Add Another Library"]})]})]})}function W3({colorTheme:n,fontStyle:r}){const s=Rl(r),[a,c]=f.useState([{id:"1",name:"GovTech branding guidelines",type:"upload",path:"",enabled:!0,files:[{id:"file-1",name:"GovTech_Brand_Guidelines_2024.pdf",size:2458624,uploadedAt:new Date(Date.now()-864e5*3)},{id:"file-2",name:"Logo_Usage_Guidelines.pdf",size:1536e3,uploadedAt:new Date(Date.now()-864e5*7)}]},{id:"2",name:"Procurement Guidelines",type:"sharepoint",path:"",enabled:!0},{id:"3",name:"AI Programme Resources",type:"gdrive",path:"https://drive.google.com/drive/folders/ai-programme",enabled:!0},{id:"4",name:"Policy Documents",type:"aws",path:"s3://gov-docs/policy",enabled:!0}]),d=()=>{c([...a,{id:Date.now().toString(),name:"New Library",type:"sharepoint",path:"",enabled:!0}])},p=h=>{c(a.filter(v=>v.id!==h))},m=(h,v,y)=>{c(a.map(x=>x.id===h?{...x,[v]:y}:x))};return o.jsxs("div",{className:`flex-1 flex flex-col bg-gray-100 ${s.base}`,children:[o.jsx("div",{className:"flex items-center gap-2 p-4 bg-gray-100",children:o.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:"Library"})}),o.jsx("div",{className:"flex-1 overflow-auto",children:o.jsx("div",{className:"max-w-4xl mx-auto px-6 py-8",children:o.jsx(B3,{dataSources:a,onAdd:d,onRemove:p,onUpdate:m,showDescription:!0})})})]})}const V3=[{id:"marketing-software-aor",title:"Marketing Software AOR",preview:"Draft an approval paper for procurement..."},{id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting",preview:"Help me shortlist candidates from Workday..."},{id:"pq-response-mnd",title:"PQ Response - MND Housing",preview:"Draft a parliamentary question response..."},{id:"feature-overview",title:"Feature Overview",preview:"Show me what this AI assistant can do..."},{id:"customer-support",title:"Customer Support",preview:"Help with customer inquiries..."},{id:"feedback-collection",title:"Feedback Collection",preview:"Collect and analyze feedback..."},{id:"procurement-rfq",title:"Procurement RFQ to AOR",preview:"Help with procurement workflow..."}];function U3({colorTheme:n,fontStyle:r,chats:s,onSelectChat:a,onDeleteChat:c,onSelectSimulation:d}){const p=Gv(n),m=Rl(r),[h,v]=f.useState(""),y=s.filter(S=>S.title.toLowerCase().includes(h.toLowerCase())),x=V3.filter(S=>S.title.toLowerCase().includes(h.toLowerCase())),b=S=>{const C=Math.abs(new Date().getTime()-S.getTime()),k=Math.floor(C/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:S.toLocaleDateString()};return o.jsxs("div",{className:`flex-1 flex flex-col bg-gray-100 ${m.base}`,children:[o.jsx("div",{className:"flex items-center gap-2 p-4 bg-gray-100",children:o.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:"Chats"})}),o.jsx("div",{className:"flex-1 overflow-auto",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-8",children:[o.jsxs("div",{className:"relative max-w-2xl mx-auto w-full",children:[o.jsx(Ga,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),o.jsx(zt,{placeholder:"Search chats...",value:h,onChange:S=>v(S.target.value),className:`pl-10 text-sm py-6 rounded-xl ${p.inputBorder} ${m.input} bg-white shadow-sm`})]}),o.jsxs("div",{className:"space-y-2",children:[x.map(S=>o.jsxs("div",{onClick:()=>d(S.id),className:"flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200",children:[o.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:o.jsx(Gs,{className:"w-5 h-5 text-gray-600"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:S.title}),o.jsx("p",{className:"text-sm text-gray-500 truncate",children:S.preview})]}),o.jsx("div",{className:"text-xs text-gray-400 flex-shrink-0",children:"Demo"})]},S.id)),y.map(S=>o.jsxs("div",{onClick:()=>a(S.id),className:"group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200",children:[o.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:o.jsx(Gs,{className:"w-5 h-5 text-gray-600"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:S.title}),o.jsx("p",{className:"text-sm text-gray-500 truncate",children:S.messages.length>0?S.messages[S.messages.length-1].content.slice(0,60)+"...":"No messages yet"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xs text-gray-400 flex-shrink-0",children:b(S.createdAt)}),o.jsxs(Un,{children:[o.jsx(Gn,{asChild:!0,children:o.jsx(Button,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-8 w-8 p-0",onClick:N=>N.stopPropagation(),children:o.jsx(as,{className:"w-4 h-4"})})}),o.jsx(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:o.jsxs(yt,{onClick:N=>{N.stopPropagation(),c(S.id)},className:"text-red-500 hover:bg-gray-100",children:[o.jsx(ls,{className:"w-4 h-4 mr-2"}),"Delete"]})})]})]})]},S.id)),y.length===0&&x.length===0&&o.jsxs("div",{className:"text-center py-12",children:[o.jsx(Gs,{className:"w-12 h-12 text-gray-300 mx-auto mb-4"}),o.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No chats found"}),o.jsx("p",{className:"text-sm text-gray-500",children:h?"Try a different search term":"Start a new chat to get started"})]})]})]})})]})}function hu({onSend:n,colorTheme:r="light",fontStyle:s="modern",showFileUpload:a=!1,autoTypeText:c,showClassification:d=!1,defaultClassification:p="r-sn",value:m,onChange:h,disabled:v=!1,showTypingHint:y=!1,placeholder:x,autoFocus:b=!1,bookmarkedAssistants:S=[],assistantType:N}){const[C,k]=f.useState(""),P=m!==void 0?m:C,j=Z=>{h&&h(Z),k(Z)},[M,R]=f.useState([]),[I,W]=f.useState([]),[z,V]=f.useState([]),[re,Q]=f.useState(!1),[de,ie]=f.useState(!1),[me,ue]=f.useState(!1),[fe,ee]=f.useState(p),[Y,_]=f.useState(0),H=v,J=f.useRef(null),A=f.useRef(null),U=[{id:"r-sn",label:"R/SN",fullName:"Restricted / Sensitive Normal"},{id:"cce-sn",label:"C(CE)/SN",fullName:"Confidential (Cloud-Eligible) / Sensitive Normal"}],B=[{id:"web-search",name:"Web Search",icon:l2},{id:"deep-research",name:"Deep Research",icon:F2},{id:"canvas",name:"Canvas",icon:C2}],q=Object.values(rp).flat(),oe=[...Uv,...Vv,...q],O=Array.from(new Map(oe.map(Z=>[Z.id,Z])).values()).filter(Z=>S.includes(Z.id)).map(Z=>({id:Z.id,name:Z.name})),X=()=>{P.trim()&&(n(P,d?fe:void 0),j(""))},le=Z=>{const je=Z.target.files?.[0];je&&(n(`[Uploaded file: ${je.name}]`),J.current&&(J.current.value=""))},he=Z=>{R(je=>je.includes(Z)?je.filter(Ge=>Ge!==Z):[...je,Z])},Ee=Z=>{W(je=>je.includes(Z)?je.filter(Ge=>Ge!==Z):[...je,Z])};f.useEffect(()=>{(c||b)&&A.current?.focus()},[c,b]);const Re=Z=>{if(!c){Z.key==="Enter"&&!Z.shiftKey&&(Z.preventDefault(),X());return}if(Z.preventDefault(),Z.key==="Enter")j(c),_(c.length),setTimeout(()=>{n(c,d?fe:void 0),j(""),_(0)},100);else if(Z.key==="Backspace"){if(Y>0){const je=Y-1;_(je),j(c.substring(0,je))}}else if(Z.key.length===1&&Y<c.length){const je=Y+1;_(je),j(c.substring(0,je))}};return o.jsxs("div",{className:"rounded-2xl border border-gray-300 p-2 focus-within:ring-2 focus-within:ring-gray-500/20 bg-white",children:[o.jsx("div",{className:"mb-2",children:o.jsx(wi,{ref:A,value:P,onChange:c?void 0:(Z=>j(Z.target.value)),onKeyDown:Re,placeholder:x||(c?"Type to continue...":H?"Waiting for response...":"Ask me anything..."),className:`w-full min-h-[64px] max-h-[200px] resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-gray-900 text-base ${H?"text-gray-400":""}`,rows:1,disabled:H})}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx("input",{ref:J,type:"file",className:"hidden",onChange:le}),o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx(Oe,{onClick:()=>J.current?.click(),size:"icon",variant:"ghost",disabled:H,className:`h-7 w-7 flex-shrink-0 ${H?"opacity-50 cursor-not-allowed":""}`,children:o.jsx(bu,{className:"w-4 h-4"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Add files"})})]})}),!N&&o.jsx(bt,{children:o.jsx(rt,{children:o.jsxs(Un,{open:H?!1:de,onOpenChange:ie,children:[o.jsx(st,{asChild:!0,children:o.jsx(Gn,{asChild:!0,children:o.jsxs(Oe,{type:"button",size:"icon",variant:"ghost",disabled:H,className:`h-7 w-7 flex-shrink-0 relative ${H?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx(L2,{className:"w-3.5 h-3.5"}),M.length+I.length>0&&o.jsx("span",{className:"absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center",children:M.length+I.length})]})})}),o.jsx(ot,{children:o.jsx("p",{children:"Add tools"})}),o.jsxs(Qn,{className:"w-64 p-0 z-50 bg-white dark:bg-gray-900 overflow-visible",align:"start",side:"top",sideOffset:8,children:[o.jsxs("div",{className:"p-3 border-b bg-white dark:bg-gray-900",children:[o.jsx("h3",{className:"font-medium text-xs",children:"Available Tools"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:"Select tools to enable"})]}),o.jsxs("div",{className:"p-2 bg-white dark:bg-gray-900",children:[B.map(Z=>{const je=Z.icon,Ge=M.includes(Z.id);return o.jsxs("button",{type:"button",onClick:pt=>{pt.preventDefault(),pt.stopPropagation(),he(Z.id)},className:"w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",children:[o.jsx(je,{className:"w-5 h-5 flex-shrink-0 text-gray-700"}),o.jsx("span",{className:"flex-1 text-left text-xs text-gray-900",children:Z.name}),Ge&&o.jsx(Hn,{className:"w-4 h-4 text-gray-900"})]},Z.id)}),o.jsxs("div",{className:"relative group/assistants mt-1 border-t border-gray-200 pt-1",children:[o.jsxs("button",{type:"button",className:"w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",children:[o.jsx(ch,{className:"w-5 h-5 flex-shrink-0 text-gray-700"}),o.jsx("span",{className:"flex-1 text-left text-xs text-gray-900",children:"Custom Assistants"}),o.jsx(Xs,{className:"w-4 h-4 text-gray-400"})]}),o.jsx("div",{className:"absolute left-full top-0 ml-1 w-56 bg-white border-2 border-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover/assistants:opacity-100 group-hover/assistants:visible transition-all z-[100]",children:o.jsx("div",{className:"p-2",children:O.length===0?o.jsx("div",{className:"px-3 py-4 text-center",children:o.jsx("p",{className:"text-xs text-gray-500",children:"Bookmark a custom assistant for it to appear here"})}):O.map(Z=>{const je=I.includes(Z.id);return o.jsxs("button",{type:"button",onClick:Ge=>{Ge.preventDefault(),Ge.stopPropagation(),Ee(Z.id)},className:"w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left",children:[o.jsx("span",{className:"flex-1 text-xs text-gray-900",children:Z.name}),je&&o.jsx(Hn,{className:"w-4 h-4 text-gray-900"})]},Z.id)})})})]})]})]})]})})}),o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx(Oe,{type:"button",size:"icon",variant:"ghost",disabled:!0,className:"h-7 w-7 flex-shrink-0 relative opacity-50 cursor-not-allowed",children:o.jsx(Ua,{className:"w-3.5 h-3.5"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Coming soon"})})]})})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[d&&o.jsx(bt,{children:o.jsxs(Un,{open:me,onOpenChange:ue,children:[o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx(Gn,{asChild:!0,children:o.jsxs(Oe,{type:"button",size:"sm",variant:"ghost",className:"h-7 px-2 flex-shrink-0 gap-1 text-xs",children:[o.jsx(Qa,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:U.find(Z=>Z.id===fe)?.label}),o.jsx(Ys,{className:"w-3 h-3 opacity-50"})]})})}),o.jsx(ot,{side:"top",children:o.jsx("p",{children:U.find(Z=>Z.id===fe)?.fullName})})]}),o.jsxs(Qn,{className:"w-64 p-0 z-50 bg-white dark:bg-gray-900",align:"end",side:"top",sideOffset:8,children:[o.jsxs("div",{className:"p-3 border-b bg-white dark:bg-gray-900",children:[o.jsx("h3",{className:"font-medium text-xs",children:"Data Classification"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:"Select the classification level"})]}),o.jsx("div",{className:"p-2 bg-white dark:bg-gray-900",children:U.map(Z=>{const je=fe===Z.id;return o.jsxs(yt,{onClick:()=>ee(Z.id),className:`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${je?"bg-gray-200":""}`,children:[o.jsx(Qa,{className:"w-4 h-4 flex-shrink-0 text-gray-700"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"text-xs font-medium text-gray-900",children:Z.label}),o.jsx("div",{className:"text-[10px] text-gray-500",children:Z.fullName})]}),je&&o.jsx("div",{className:"w-2 h-2 rounded-full bg-gray-900"})]},Z.id)})})]})]})}),o.jsx(Oe,{onClick:X,disabled:!P.trim()||H,size:"icon",className:`h-7 w-7 flex-shrink-0 rounded-full ${H?"bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300":""}`,children:o.jsx(Sw,{className:"w-3.5 h-3.5"})})]})]})]})}var G3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Q3=G3.reduce((n,r)=>{const s=wu(`Primitive.${r}`),a=f.forwardRef((c,d)=>{const{asChild:p,...m}=c,h=p?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(h,{...m,ref:d})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{}),q3="Separator",Kg="horizontal",K3=["horizontal","vertical"],yx=f.forwardRef((n,r)=>{const{decorative:s,orientation:a=Kg,...c}=n,d=Y3(a)?a:Kg,m=s?{role:"none"}:{"aria-orientation":d==="vertical"?d:void 0,role:"separator"};return o.jsx(Q3.div,{"data-orientation":d,...m,...c,ref:r})});yx.displayName=q3;function Y3(n){return K3.includes(n)}var X3=yx;function os({className:n,orientation:r="horizontal",decorative:s=!0,...a}){return o.jsx(X3,{"data-slot":"separator-root",decorative:s,orientation:r,className:Fe("bg-gray-300 dark:bg-gray-700 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",n),...a})}function vu({className:n}){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[o.jsx("path",{d:"M4 10c0-1.5 1.5-3 4-3h8c2.5 0 4 1.5 4 3"}),o.jsx("ellipse",{cx:"12",cy:"10",rx:"8",ry:"2"}),o.jsx("path",{d:"M6 10v1c0 1 1 2 2 2h8c1 0 2-1 2-2v-1"}),o.jsx("circle",{cx:"8",cy:"18",r:"2.5"}),o.jsx("circle",{cx:"16",cy:"18",r:"2.5"}),o.jsx("path",{d:"M10.5 18h3"}),o.jsx("path",{d:"M8 15.5v-1"}),o.jsx("path",{d:"M16 15.5v-1"})]})}const J3=n=>{switch(n){case"HR Officer":return["Help me draft a job description","Shortlist candidates for a position","Create interview questions","Review leave policy updates"];case"Policy Officer":return["Draft a parliamentary question response","Summarize this policy document","Create a policy brief","Analyze regulatory impact"];case"Marketing Officer":return["Draft a marketing campaign brief","Create social media content plan","Analyze campaign performance","Help with procurement AOR"];default:return["Help me draft a document","Summarize this content","Create a project plan","Analyze data trends"]}};function Z3({colorTheme:n,fontStyle:r,onSelectChat:s,onNewChat:a,isSidebarOpen:c,userProfile:d,onSelectSimulation:p,onStartChat:m,bookmarkedAssistants:h=[]}){const[v,y]=f.useState(""),[x,b]=f.useState("rsn"),[S,N]=f.useState(!1),C=new Date,k=J3(d.role),P=j=>{y(j)};return o.jsxs("div",{className:"flex-1 h-full flex flex-col bg-gray-100",children:[o.jsx("div",{className:"absolute top-4 right-6",children:o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>N(!S),className:`p-2 rounded-lg transition-colors ${S?"bg-gray-200 text-gray-700":"text-gray-500 hover:text-gray-700 hover:bg-gray-200"}`,children:o.jsx(vu,{className:"w-5 h-5"})})}),o.jsx(ot,{children:o.jsx("p",{children:S?"Exit incognito mode":"Enable incognito mode"})})]})})}),o.jsx("div",{className:"flex-1 overflow-auto flex items-center",children:o.jsxs("div",{className:"flex flex-col w-full max-w-chat mx-auto px-6",children:[o.jsx("div",{className:"pb-8",children:S?o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl mb-1 tracking-tight font-semibold text-gray-900",style:{fontSize:"2rem"},children:"Incognito chat"}),o.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[o.jsx(vu,{className:"w-4 h-4 text-gray-500"}),o.jsx("p",{className:"text-sm text-gray-500",children:"Incognito chat does not reference memories or save to chat history"})]})]}):o.jsxs("h1",{className:"text-2xl mb-1 tracking-tight font-semibold text-gray-900",style:{fontSize:"2rem"},children:["Good ",C.getHours()<12?"Morning":C.getHours()<18?"Afternoon":"Evening",", ",d.name.split(" ")[0]]})}),o.jsxs("div",{className:"mb-2 flex items-center gap-4",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-sm font-medium text-gray-900",children:"Data classification"}),o.jsxs(ns,{value:x,onValueChange:j=>b(j),children:[o.jsx(rs,{className:"w-auto h-9 bg-white border-gray-300 px-3",children:o.jsxs("div",{className:"flex items-center gap-2",children:[x==="rsn"?o.jsx(Qa,{className:"w-4 h-4"}):o.jsx(ag,{className:"w-4 h-4"}),o.jsxs("span",{className:"whitespace-nowrap",children:["Up to ",x==="rsn"?"R/SN":"C(CE)/SN"]})]})}),o.jsxs(ss,{className:"w-[400px]",children:[o.jsxs("div",{className:"p-3",children:[o.jsx("h3",{className:"font-semibold text-gray-900",children:"Data Classification"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Select the highest classification level allowed"})]}),o.jsx(os,{}),o.jsxs("div",{className:"p-2",children:[o.jsx(Be,{value:"rsn",className:"cursor-pointer",children:o.jsxs("div",{className:"flex items-start gap-3 py-2",children:[o.jsx(Qa,{className:"w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-semibold text-gray-900",children:"R/SN"}),o.jsx("div",{className:"text-sm text-gray-500",children:"Restricted / Sensitive Normal"})]})]})}),o.jsx(Be,{value:"cce-sn",className:"cursor-pointer",children:o.jsxs("div",{className:"flex items-start gap-3 py-2",children:[o.jsx(ag,{className:"w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-semibold text-gray-900",children:"C(CE)/SN"}),o.jsx("div",{className:"text-sm text-gray-500",children:"Confidential (Cloud-Eligible) / Sensitive Normal"}),o.jsx("div",{className:"text-sm font-bold text-gray-900 mt-1",children:"CCE/SN chats will not be saved."})]})]})})]})]})]})]}),o.jsx("p",{className:"text-xs text-gray-500",children:"This setting cannot be changed once the chat begins."})]}),o.jsxs("div",{"data-tour":"chat-interface",children:[o.jsx("div",{className:"rounded-2xl border bg-white border-gray-300",children:o.jsx(hu,{onSend:j=>{m&&m(j,x,S)},colorTheme:n,fontStyle:r,showFileUpload:!0,showClassification:!1,value:v,onChange:y,autoFocus:!0,bookmarkedAssistants:h})}),o.jsx("div",{className:`mt-8 flex flex-wrap gap-2 transition-opacity ${v?"opacity-0 pointer-events-none":"opacity-100"}`,children:k.map((j,M)=>o.jsx("button",{onClick:()=>P(j),className:"px-3 py-2 text-sm rounded-full transition-colors bg-white border border-gray-900 text-gray-900 hover:bg-gray-100",children:j},M))})]})]})})]})}function eE({onLogin:n}){const r=()=>{n({name:"John Doe",email:"john.doe@tech.gov.sg",role:"Product Manager",agency:"GovTech"},!1)};return o.jsx("div",{className:"min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4",children:o.jsx(ai,{className:"w-full max-w-md",children:o.jsxs(li,{className:"p-8 pb-10 space-y-6 text-center",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("p",{className:"text-gray-500 text-sm",children:"Welcome to the"}),o.jsx("h1",{className:"text-gray-900 text-2xl font-bold leading-tight",children:"AI Assistant Desk"})]}),o.jsx(Oe,{className:"w-full h-12",onClick:r,children:"Log In with TechPass"}),o.jsxs("p",{className:"text-sm text-gray-500",children:["Having trouble logging in?"," ",o.jsx("a",{href:"#",className:"text-gray-900 hover:text-gray-700 underline",onClick:s=>s.preventDefault(),children:"Contact support"})]})]})})})}var Il="Checkbox",[tE]=cn(Il),[nE,ip]=tE(Il);function rE(n){const{__scopeCheckbox:r,checked:s,children:a,defaultChecked:c,disabled:d,form:p,name:m,onCheckedChange:h,required:v,value:y="on",internal_do_not_use_render:x}=n,[b,S]=An({prop:s,defaultProp:c??!1,onChange:h,caller:Il}),[N,C]=f.useState(null),[k,P]=f.useState(null),j=f.useRef(!1),M=N?!!p||!!N.closest("form"):!0,R={checked:b,disabled:d,setChecked:S,control:N,setControl:C,name:m,form:p,value:y,hasConsumerStoppedPropagationRef:j,required:v,defaultChecked:_r(c)?!1:c,isFormControl:M,bubbleInput:k,setBubbleInput:P};return o.jsx(nE,{scope:r,...R,children:sE(x)?x(R):a})}var bx="CheckboxTrigger",wx=f.forwardRef(({__scopeCheckbox:n,onKeyDown:r,onClick:s,...a},c)=>{const{control:d,value:p,disabled:m,checked:h,required:v,setControl:y,setChecked:x,hasConsumerStoppedPropagationRef:b,isFormControl:S,bubbleInput:N}=ip(bx,n),C=ze(c,y),k=f.useRef(h);return f.useEffect(()=>{const P=d?.form;if(P){const j=()=>x(k.current);return P.addEventListener("reset",j),()=>P.removeEventListener("reset",j)}},[d,x]),o.jsx(Me.button,{type:"button",role:"checkbox","aria-checked":_r(h)?"mixed":h,"aria-required":v,"data-state":Px(h),"data-disabled":m?"":void 0,disabled:m,value:p,...a,ref:C,onKeyDown:ge(r,P=>{P.key==="Enter"&&P.preventDefault()}),onClick:ge(s,P=>{x(j=>_r(j)?!0:!j),N&&S&&(b.current=P.isPropagationStopped(),b.current||P.stopPropagation())})})});wx.displayName=bx;var Sx=f.forwardRef((n,r)=>{const{__scopeCheckbox:s,name:a,checked:c,defaultChecked:d,required:p,disabled:m,value:h,onCheckedChange:v,form:y,...x}=n;return o.jsx(rE,{__scopeCheckbox:s,checked:c,defaultChecked:d,disabled:m,required:p,onCheckedChange:v,name:a,form:y,value:h,internal_do_not_use_render:({isFormControl:b})=>o.jsxs(o.Fragment,{children:[o.jsx(wx,{...x,ref:r,__scopeCheckbox:s}),b&&o.jsx(jx,{__scopeCheckbox:s})]})})});Sx.displayName=Il;var Cx="CheckboxIndicator",kx=f.forwardRef((n,r)=>{const{__scopeCheckbox:s,forceMount:a,...c}=n,d=ip(Cx,s);return o.jsx(It,{present:a||_r(d.checked)||d.checked===!0,children:o.jsx(Me.span,{"data-state":Px(d.checked),"data-disabled":d.disabled?"":void 0,...c,ref:r,style:{pointerEvents:"none",...n.style}})})});kx.displayName=Cx;var Nx="CheckboxBubbleInput",jx=f.forwardRef(({__scopeCheckbox:n,...r},s)=>{const{control:a,hasConsumerStoppedPropagationRef:c,checked:d,defaultChecked:p,required:m,disabled:h,name:v,value:y,form:x,bubbleInput:b,setBubbleInput:S}=ip(Nx,n),N=ze(s,S),C=sp(d),k=_u(a);f.useEffect(()=>{const j=b;if(!j)return;const M=window.HTMLInputElement.prototype,I=Object.getOwnPropertyDescriptor(M,"checked").set,W=!c.current;if(C!==d&&I){const z=new Event("click",{bubbles:W});j.indeterminate=_r(d),I.call(j,_r(d)?!1:d),j.dispatchEvent(z)}},[b,C,d,c]);const P=f.useRef(_r(d)?!1:d);return o.jsx(Me.input,{type:"checkbox","aria-hidden":!0,defaultChecked:p??P.current,required:m,disabled:h,name:v,value:y,form:x,...r,tabIndex:-1,ref:N,style:{...r.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});jx.displayName=Nx;function sE(n){return typeof n=="function"}function _r(n){return n==="indeterminate"}function Px(n){return _r(n)?"indeterminate":n?"checked":"unchecked"}function Ex({className:n,...r}){return o.jsx(Sx,{"data-slot":"checkbox",className:Fe("peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...r,children:o.jsx(kx,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:o.jsx(Hn,{className:"size-3.5"})})})}const oE=[{id:"Concise",label:"Concise",description:"Brief and to the point"},{id:"Professional",label:"Professional",description:"Formal business tone"},{id:"Academic",label:"Academic",description:"Scholarly and detailed"},{id:"Creative",label:"Creative",description:"Imaginative and expressive"},{id:"Others",label:"Others",description:"Describe your own style"}];function iE({userProfile:n,onUpdateProfile:r,onComplete:s}){const[a,c]=f.useState(1),[d,p]=f.useState("Concise"),[m,h]=f.useState(""),[v,y]=f.useState(n.name),[x,b]=f.useState(""),[S,N]=f.useState(""),[C,k]=f.useState([]),P=()=>{r({...n,name:v.trim()||n.name,role:x==="other"?S:x,aiStyle:d==="other"?m:d,workActivities:C}),s()},j=()=>{a===1?c(2):P()},M=()=>{a===2&&c(1)},R=I=>{k(W=>W.includes(I)?W.filter(z=>z!==I):[...W,I])};return o.jsx("div",{className:"min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4",children:o.jsxs(ai,{className:"w-full max-w-2xl shadow-lg border-gray-300 bg-white",children:[o.jsxs(li,{className:"p-8",children:[a===1&&o.jsxs("div",{className:"space-y-6 animate-in fade-in duration-300",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-xs text-gray-500 mb-2",children:"Step 1 of 2"}),o.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Choose Your AI Style"}),o.jsx("p",{className:"text-gray-500",children:"Select how you'd like your AI Assistant to communicate with you"})]}),o.jsx("div",{className:"grid grid-cols-2 gap-3",children:oE.map(I=>o.jsxs("button",{onClick:()=>p(I.id),className:Fe("relative p-4 rounded-lg border-2 text-left transition-all",d===I.id?"border-gray-900 bg-gray-50":"border-gray-300 hover:border-gray-400"),children:[d===I.id&&o.jsx("div",{className:"absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center",children:o.jsx(Hn,{className:"w-3 h-3 text-white"})}),o.jsx("div",{className:"font-semibold text-gray-900 mb-1",children:I.label}),o.jsx("div",{className:"text-xs text-gray-500",children:I.description})]},I.id))}),d==="Others"&&o.jsx("div",{className:"mt-4",children:o.jsx(zt,{placeholder:"Describe your preferred style...",value:m,onChange:I=>h(I.target.value),className:"bg-white border-gray-300"})})]}),a===2&&o.jsxs("div",{className:"space-y-6 animate-in fade-in duration-300",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-xs text-gray-500 mb-2",children:"Step 2 of 2"}),o.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Tell Us About Yourself"}),o.jsx("p",{className:"text-gray-500",children:"Help us personalize your experience"})]}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx(it,{htmlFor:"name",children:"What would you like us to call you?"}),o.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-2",children:"Choose something you're comfortable with—your first name, nickname, or preferred title."}),o.jsx(zt,{id:"name",value:v,onChange:I=>y(I.target.value),placeholder:"e.g., Jayden, Jay, Mr. Tan",className:"bg-white border-gray-300"})]}),o.jsx(os,{className:"bg-gray-300"}),o.jsxs("div",{children:[o.jsx(it,{htmlFor:"job-role",children:"Which best describes your primary job role?"}),o.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-2",children:"This helps the AI understand your professional context."}),o.jsxs(ns,{value:x,onValueChange:b,children:[o.jsx(rs,{id:"job-role",className:"bg-white border-gray-300",children:o.jsx(Vs,{placeholder:"Select your job role"})}),o.jsxs(ss,{children:[o.jsx(Be,{value:"policy-strategy",children:"Policy / Strategy"}),o.jsx(Be,{value:"operations",children:"Operations"}),o.jsx(Be,{value:"hr-people",children:"HR / People"}),o.jsx(Be,{value:"finance-procurement",children:"Finance / Procurement"}),o.jsx(Be,{value:"legal-compliance",children:"Legal / Compliance"}),o.jsx(Be,{value:"communications",children:"Communications"}),o.jsx(Be,{value:"data-tech",children:"Data / Tech"}),o.jsx(Be,{value:"other",children:"Other"})]})]}),x==="other"&&o.jsx(zt,{placeholder:"Describe your job role...",value:S,onChange:I=>N(I.target.value),className:"mt-2 bg-white border-gray-300"})]}),o.jsx(os,{className:"bg-gray-300"}),o.jsxs("div",{children:[o.jsx(it,{children:"What do you spend most of your time doing?"}),o.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-3",children:"Select all that apply"}),o.jsx("div",{className:"space-y-3",children:[{id:"drafting",label:"Drafting documents"},{id:"reviewing",label:"Reviewing / editing"},{id:"researching",label:"Researching / summarising"},{id:"briefings",label:"Preparing briefings / slides"},{id:"cases",label:"Handling cases"},{id:"queries",label:"Responding to queries"},{id:"analysis",label:"Data analysis"},{id:"planning",label:"Planning / coordination"}].map(I=>o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(Ex,{id:I.id,checked:C.includes(I.id),onCheckedChange:()=>R(I.id)}),o.jsx(it,{htmlFor:I.id,className:"text-sm font-normal cursor-pointer",children:I.label})]},I.id))})]})]})]})]}),o.jsx("div",{className:"p-6 border-t border-gray-300 bg-gray-100",children:o.jsx("div",{className:"flex justify-end items-center gap-4",children:o.jsxs("div",{className:"flex items-center gap-3",children:[a===2&&o.jsxs(Oe,{variant:"outline",onClick:M,className:"gap-2 h-12 text-base border-gray-300 hover:bg-gray-100",children:[o.jsx(Zo,{className:"w-4 h-4"}),"Back"]}),o.jsxs(Oe,{onClick:j,className:"bg-gray-900 hover:bg-gray-800 text-white gap-2 h-12 text-base px-8",children:[a===1?"Next":"Complete Setup",o.jsx(bw,{className:"w-4 h-4"})]})]})})})]})})}var _l="Tabs",[aE]=cn(_l,[xl]),Rx=xl(),[lE,ap]=aE(_l),Ax=f.forwardRef((n,r)=>{const{__scopeTabs:s,value:a,onValueChange:c,defaultValue:d,orientation:p="horizontal",dir:m,activationMode:h="automatic",...v}=n,y=pi(m),[x,b]=An({prop:a,onChange:c,defaultProp:d??"",caller:_l});return o.jsx(lE,{scope:s,baseId:Jt(),value:x,onValueChange:b,orientation:p,dir:y,activationMode:h,children:o.jsx(Me.div,{dir:y,"data-orientation":p,...v,ref:r})})});Ax.displayName=_l;var Tx="TabsList",Mx=f.forwardRef((n,r)=>{const{__scopeTabs:s,loop:a=!0,...c}=n,d=ap(Tx,s),p=Rx(s);return o.jsx(x0,{asChild:!0,...p,orientation:d.orientation,dir:d.dir,loop:a,children:o.jsx(Me.div,{role:"tablist","aria-orientation":d.orientation,...c,ref:r})})});Mx.displayName=Tx;var Ix="TabsTrigger",_x=f.forwardRef((n,r)=>{const{__scopeTabs:s,value:a,disabled:c=!1,...d}=n,p=ap(Ix,s),m=Rx(s),h=Lx(p.baseId,a),v=zx(p.baseId,a),y=a===p.value;return o.jsx(y0,{asChild:!0,...m,focusable:!c,active:y,children:o.jsx(Me.button,{type:"button",role:"tab","aria-selected":y,"aria-controls":v,"data-state":y?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:h,...d,ref:r,onMouseDown:ge(n.onMouseDown,x=>{!c&&x.button===0&&x.ctrlKey===!1?p.onValueChange(a):x.preventDefault()}),onKeyDown:ge(n.onKeyDown,x=>{[" ","Enter"].includes(x.key)&&p.onValueChange(a)}),onFocus:ge(n.onFocus,()=>{const x=p.activationMode!=="manual";!y&&!c&&x&&p.onValueChange(a)})})})});_x.displayName=Ix;var Dx="TabsContent",Ox=f.forwardRef((n,r)=>{const{__scopeTabs:s,value:a,forceMount:c,children:d,...p}=n,m=ap(Dx,s),h=Lx(m.baseId,a),v=zx(m.baseId,a),y=a===m.value,x=f.useRef(y);return f.useEffect(()=>{const b=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(b)},[]),o.jsx(It,{present:c||y,children:({present:b})=>o.jsx(Me.div,{"data-state":y?"active":"inactive","data-orientation":m.orientation,role:"tabpanel","aria-labelledby":h,hidden:!b,id:v,tabIndex:0,...p,ref:r,style:{...n.style,animationDuration:x.current?"0s":void 0},children:b&&d})})});Ox.displayName=Dx;function Lx(n,r){return`${n}-trigger-${r}`}function zx(n,r){return`${n}-content-${r}`}var cE=Ax,dE=Mx,uE=_x,pE=Ox;function fE({className:n,...r}){return o.jsx(cE,{"data-slot":"tabs",className:Fe("flex flex-col gap-2",n),...r})}function mE({className:n,...r}){return o.jsx(dE,{"data-slot":"tabs-list",className:Fe("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",n),...r})}function Wd({className:n,...r}){return o.jsx(uE,{"data-slot":"tabs-trigger",className:Fe("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...r})}function Vd({className:n,...r}){return o.jsx(pE,{"data-slot":"tabs-content",className:Fe("flex-1 outline-none",n),...r})}var Dl="Switch",[gE]=cn(Dl),[hE,vE]=gE(Dl),Fx=f.forwardRef((n,r)=>{const{__scopeSwitch:s,name:a,checked:c,defaultChecked:d,required:p,disabled:m,value:h="on",onCheckedChange:v,form:y,...x}=n,[b,S]=f.useState(null),N=ze(r,M=>S(M)),C=f.useRef(!1),k=b?y||!!b.closest("form"):!0,[P,j]=An({prop:c,defaultProp:d??!1,onChange:v,caller:Dl});return o.jsxs(hE,{scope:s,checked:P,disabled:m,children:[o.jsx(Me.button,{type:"button",role:"switch","aria-checked":P,"aria-required":p,"data-state":Wx(P),"data-disabled":m?"":void 0,disabled:m,value:h,...x,ref:N,onClick:ge(n.onClick,M=>{j(R=>!R),k&&(C.current=M.isPropagationStopped(),C.current||M.stopPropagation())})}),k&&o.jsx(Bx,{control:b,bubbles:!C.current,name:a,value:h,checked:P,required:p,disabled:m,form:y,style:{transform:"translateX(-100%)"}})]})});Fx.displayName=Dl;var $x="SwitchThumb",Hx=f.forwardRef((n,r)=>{const{__scopeSwitch:s,...a}=n,c=vE($x,s);return o.jsx(Me.span,{"data-state":Wx(c.checked),"data-disabled":c.disabled?"":void 0,...a,ref:r})});Hx.displayName=$x;var xE="SwitchBubbleInput",Bx=f.forwardRef(({__scopeSwitch:n,control:r,checked:s,bubbles:a=!0,...c},d)=>{const p=f.useRef(null),m=ze(p,d),h=sp(s),v=_u(r);return f.useEffect(()=>{const y=p.current;if(!y)return;const x=window.HTMLInputElement.prototype,S=Object.getOwnPropertyDescriptor(x,"checked").set;if(h!==s&&S){const N=new Event("click",{bubbles:a});S.call(y,s),y.dispatchEvent(N)}},[h,s,a]),o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...c,tabIndex:-1,ref:m,style:{...c.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});Bx.displayName=xE;function Wx(n){return n?"checked":"unchecked"}var yE=Fx,bE=Hx;function Ud({className:n,...r}){return o.jsx(yE,{"data-slot":"switch",className:Fe("peer data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-300 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...r,children:o.jsx(bE,{"data-slot":"switch-thumb",className:Fe("bg-white pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")})})}const wE=["Marketing Officer","HR Officer","Product Manager","Software Engineer","Data Scientist","UX Designer","Policy Officer","Solution Architect","DevOps Engineer","Cyber Security Specialist"];function SE({colorTheme:n,fontStyle:r,onColorThemeChange:s,onFontStyleChange:a,userProfile:c,onUpdateProfile:d,open:p,onOpenChange:m}){const[h,v]=f.useState(c.customInstructions||""),[y,x]=f.useState(c.aiStyle||"Concise"),[b,S]=f.useState(""),[N,C]=f.useState(c.name||""),[k,P]=f.useState(c.role||""),[j,M]=f.useState(""),[R,I]=f.useState(c.workActivities||[]),[W,z]=f.useState(!0),[V,re]=f.useState(!1);return o.jsx(o.Fragment,{children:o.jsx(Pl,{open:p,onOpenChange:Q=>{Q||re(!1),m?.(Q)},children:o.jsx(El,{className:"max-w-2xl max-h-[90vh] overflow-y-auto",children:V?o.jsxs(o.Fragment,{children:[o.jsxs(oi,{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>re(!1),className:"p-1 rounded-lg hover:bg-gray-200 transition-colors",children:o.jsx(Zo,{className:"w-5 h-5"})}),o.jsx(ii,{children:"Saved Memories"})]}),o.jsx(Ug,{children:"Things AI Assistant has learned about you"})]}),o.jsx("div",{className:"space-y-3 mt-4",children:[{id:"1",text:"Works at GovTech as a Marketing Officer",date:"Jan 15, 2026"},{id:"2",text:"Prefers concise, bullet-point responses",date:"Jan 18, 2026"},{id:"3",text:"Often works on marketing campaigns and content",date:"Jan 20, 2026"}].map(Q=>o.jsxs("div",{className:"flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"text-sm text-gray-900",children:Q.text}),o.jsx("p",{className:"text-xs text-gray-500 mt-1",children:Q.date})]}),o.jsxs(Un,{children:[o.jsx(Gn,{asChild:!0,children:o.jsx(Oe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-8 w-8 p-0",children:o.jsx(as,{className:"w-4 h-4"})})}),o.jsx(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:o.jsxs(yt,{onClick:()=>{},className:"text-red-500 hover:bg-gray-100",children:[o.jsx(ls,{className:"w-4 h-4 mr-2"}),"Remove memory"]})})]})]},Q.id))})]}):o.jsxs(o.Fragment,{children:[o.jsxs(oi,{children:[o.jsx(ii,{children:"Settings"}),o.jsx(Ug,{children:"Customize your AI Assistant experience"})]}),o.jsxs(fE,{defaultValue:"accounts",className:"w-full",children:[o.jsxs(mE,{className:"grid w-full grid-cols-3",children:[o.jsxs(Wd,{value:"accounts",className:"flex items-center gap-2",children:[o.jsx(dg,{className:"w-4 h-4"}),"Accounts"]}),o.jsxs(Wd,{value:"memories",className:"flex items-center gap-2",children:[o.jsx(Aw,{className:"w-4 h-4"}),"Personalisation"]}),o.jsxs(Wd,{value:"notifications",className:"flex items-center gap-2",children:[o.jsx(kw,{className:"w-4 h-4"}),"Notifications"]})]}),o.jsxs(Vd,{value:"accounts",className:"space-y-6 mt-6",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"font-semibold",children:"Profile Information"}),o.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gray-50 rounded-lg",children:[o.jsx("div",{className:"w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center",children:o.jsx(dg,{className:"w-8 h-8 text-white"})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h4",{className:"font-medium text-gray-900",children:c.name}),o.jsx("p",{className:"text-sm text-gray-500",children:c.email}),o.jsxs("p",{className:"text-sm text-gray-500",children:[c.agency," • ",c.role]})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"display-name",children:"Display Name"}),o.jsx(zt,{id:"display-name",defaultValue:c.name})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"agency",children:"Agency"}),o.jsxs(ns,{value:c.agency,onValueChange:Q=>{d({...c,agency:Q})},children:[o.jsx(rs,{id:"agency",children:o.jsx(Vs,{placeholder:"Select your agency"})}),o.jsxs(ss,{children:[o.jsx(Be,{value:"GovTech",children:"GovTech"}),o.jsx(Be,{value:"Ministry of Education (MOE)",children:"Ministry of Education (MOE)"}),o.jsx(Be,{value:"Ministry of Manpower (MOM)",children:"Ministry of Manpower (MOM)"}),o.jsx(Be,{value:"Ministry of Trade and Industry (MTI)",children:"Ministry of Trade and Industry (MTI)"}),o.jsx(Be,{value:"Ministry of Home Affairs (MHA)",children:"Ministry of Home Affairs (MHA)"}),o.jsx(Be,{value:"Ministry of Finance (MOF)",children:"Ministry of Finance (MOF)"}),o.jsx(Be,{value:"Ministry of Health (MOH)",children:"Ministry of Health (MOH)"}),o.jsx(Be,{value:"Ministry of National Development (MND)",children:"Ministry of National Development (MND)"})]})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"job-role",children:"Job Role"}),o.jsxs(ns,{value:c.role,onValueChange:Q=>{d({...c,role:Q})},children:[o.jsx(rs,{id:"job-role",children:o.jsx(Vs,{placeholder:"Select your job role"})}),o.jsx(ss,{children:wE.map(Q=>o.jsx(Be,{value:Q,children:Q},Q))})]})]})]}),o.jsx("div",{className:"flex justify-end pt-4",children:o.jsx(Oe,{onClick:()=>{m?.(!1)},children:"Save Changes"})})]}),o.jsxs(Vd,{value:"memories",className:"space-y-6 mt-6",children:[o.jsx("div",{children:o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"AI personalisation"})}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"ai-style",children:"Preferred AI style and tone"}),o.jsx("p",{className:"text-sm text-gray-500",children:"Set the style and tone of how your AI Assistant responds to you."}),o.jsxs(ns,{value:y,onValueChange:x,children:[o.jsx(rs,{id:"ai-style",children:o.jsx(Vs,{})}),o.jsxs(ss,{children:[o.jsx(Be,{value:"Concise",children:"Concise"}),o.jsx(Be,{value:"Professional",children:"Professional"}),o.jsx(Be,{value:"Academic",children:"Academic"}),o.jsx(Be,{value:"Creative",children:"Creative"}),o.jsx(Be,{value:"Others",children:"Others"})]})]}),y==="Others"&&o.jsx(zt,{placeholder:"Describe your preferred style...",value:b,onChange:Q=>S(Q.target.value),className:"mt-2"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"custom-instructions",children:"Custom Instructions"}),o.jsx(wi,{id:"custom-instructions",placeholder:"e.g., Always provide sources, use Singapore English spelling, include relevant policy references...",className:"min-h-[100px]",value:h,onChange:Q=>v(Q.target.value)})]}),o.jsx(os,{}),o.jsxs("div",{className:"space-y-6",children:[o.jsx("h3",{className:"font-semibold",children:"About You"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"call-me",children:"What would you like us to call you?"}),o.jsx(zt,{id:"call-me",value:N,onChange:Q=>C(Q.target.value),placeholder:"Enter your preferred name"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"primary-job-role",children:"Which best describes your primary job role?"}),o.jsxs(ns,{value:k,onValueChange:P,children:[o.jsx(rs,{id:"primary-job-role",children:o.jsx(Vs,{placeholder:"Select your job role"})}),o.jsxs(ss,{children:[o.jsx(Be,{value:"policy-strategy",children:"Policy / Strategy"}),o.jsx(Be,{value:"operations",children:"Operations"}),o.jsx(Be,{value:"hr-people",children:"HR / People"}),o.jsx(Be,{value:"finance-procurement",children:"Finance / Procurement"}),o.jsx(Be,{value:"legal-compliance",children:"Legal / Compliance"}),o.jsx(Be,{value:"communications",children:"Communications"}),o.jsx(Be,{value:"data-tech",children:"Data / Tech"}),o.jsx(Be,{value:"other",children:"Other"})]})]}),k==="other"&&o.jsx(zt,{placeholder:"Describe your job role...",value:j,onChange:Q=>M(Q.target.value),className:"mt-2"})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsx(it,{children:"What do you spend most of your time doing?"}),o.jsx("div",{className:"space-y-2",children:[{id:"drafting",label:"Drafting documents"},{id:"reviewing",label:"Reviewing / editing"},{id:"researching",label:"Researching / summarising"},{id:"briefings",label:"Preparing briefings / slides"},{id:"cases",label:"Handling cases"},{id:"queries",label:"Responding to queries"},{id:"analysis",label:"Data analysis"},{id:"planning",label:"Planning / coordination"}].map(Q=>o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(Ex,{id:Q.id,checked:R.includes(Q.id),onCheckedChange:de=>{I(de?[...R,Q.id]:R.filter(ie=>ie!==Q.id))}}),o.jsx(it,{htmlFor:Q.id,className:"text-sm font-normal cursor-pointer",children:Q.label})]},Q.id))})]})]}),o.jsx(os,{}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("h3",{className:"font-semibold",children:"Memories"}),o.jsx(Oe,{variant:"outline",size:"sm",onClick:()=>re(!0),children:"Manage"})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"text-sm text-gray-900",children:"Reference saved memories"}),o.jsx("p",{className:"text-xs text-gray-500",children:"AI Assistant save and use memories when responding."})]}),o.jsx(Ud,{checked:W,onCheckedChange:z})]})]}),o.jsx("div",{className:"flex justify-end pt-4",children:o.jsx(Oe,{onClick:()=>{d({...c,customInstructions:h,name:N,aiStyle:y==="Others"?b:y,workActivities:R}),m?.(!1)},children:"Save Changes"})})]}),o.jsxs(Vd,{value:"notifications",className:"space-y-4 mt-6",children:[o.jsxs("div",{className:"flex items-center justify-between py-3",children:[o.jsxs("div",{className:"space-y-0.5",children:[o.jsx(it,{htmlFor:"notify-complete",className:"text-sm",children:"Task Completion"}),o.jsx("p",{className:"text-muted-foreground text-xs",children:"Notify me by email when long-running tasks complete"})]}),o.jsx(Ud,{id:"notify-complete",defaultChecked:!0})]}),o.jsx(os,{}),o.jsxs("div",{className:"flex items-center justify-between py-3",children:[o.jsxs("div",{className:"space-y-0.5",children:[o.jsx(it,{htmlFor:"email-updates",className:"text-sm",children:"Product Updates"}),o.jsx("p",{className:"text-muted-foreground text-xs",children:"Receive emails about new features and improvements"})]}),o.jsx(Ud,{id:"email-updates",defaultChecked:!0})]})]})]})]})})})})}const Ol=f.createContext(null);Ol.displayName="PanelGroupContext";const mt={group:"data-panel-group",groupDirection:"data-panel-group-direction",groupId:"data-panel-group-id",panel:"data-panel",panelCollapsible:"data-panel-collapsible",panelId:"data-panel-id",panelSize:"data-panel-size",resizeHandle:"data-resize-handle",resizeHandleActive:"data-resize-handle-active",resizeHandleEnabled:"data-panel-resize-handle-enabled",resizeHandleId:"data-panel-resize-handle-id",resizeHandleState:"data-resize-handle-state"},lp=10,is=f.useLayoutEffect,Yg=cl.useId,CE=typeof Yg=="function"?Yg:()=>null;let kE=0;function cp(n=null){const r=CE(),s=f.useRef(n||r||null);return s.current===null&&(s.current=""+kE++),n??s.current}function Vx({children:n,className:r="",collapsedSize:s,collapsible:a,defaultSize:c,forwardedRef:d,id:p,maxSize:m,minSize:h,onCollapse:v,onExpand:y,onResize:x,order:b,style:S,tagName:N="div",...C}){const k=f.useContext(Ol);if(k===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:P,expandPanel:j,getPanelSize:M,getPanelStyle:R,groupId:I,isPanelCollapsed:W,reevaluatePanelConstraints:z,registerPanel:V,resizePanel:re,unregisterPanel:Q}=k,de=cp(p),ie=f.useRef({callbacks:{onCollapse:v,onExpand:y,onResize:x},constraints:{collapsedSize:s,collapsible:a,defaultSize:c,maxSize:m,minSize:h},id:de,idIsFromProps:p!==void 0,order:b});f.useRef({didLogMissingDefaultSizeWarning:!1}),is(()=>{const{callbacks:ue,constraints:fe}=ie.current,ee={...fe};ie.current.id=de,ie.current.idIsFromProps=p!==void 0,ie.current.order=b,ue.onCollapse=v,ue.onExpand=y,ue.onResize=x,fe.collapsedSize=s,fe.collapsible=a,fe.defaultSize=c,fe.maxSize=m,fe.minSize=h,(ee.collapsedSize!==fe.collapsedSize||ee.collapsible!==fe.collapsible||ee.maxSize!==fe.maxSize||ee.minSize!==fe.minSize)&&z(ie.current,ee)}),is(()=>{const ue=ie.current;return V(ue),()=>{Q(ue)}},[b,de,V,Q]),f.useImperativeHandle(d,()=>({collapse:()=>{P(ie.current)},expand:ue=>{j(ie.current,ue)},getId(){return de},getSize(){return M(ie.current)},isCollapsed(){return W(ie.current)},isExpanded(){return!W(ie.current)},resize:ue=>{re(ie.current,ue)}}),[P,j,M,W,de,re]);const me=R(ie.current,c);return f.createElement(N,{...C,children:n,className:r,id:de,style:{...me,...S},[mt.groupId]:I,[mt.panel]:"",[mt.panelCollapsible]:a||void 0,[mt.panelId]:de,[mt.panelSize]:parseFloat(""+me.flexGrow).toFixed(1)})}const Ux=f.forwardRef((n,r)=>f.createElement(Vx,{...n,forwardedRef:r}));Vx.displayName="Panel";Ux.displayName="forwardRef(Panel)";let xu=null,Va=-1,Ir=null;function NE(n,r){if(r){const s=(r&Yx)!==0,a=(r&Xx)!==0,c=(r&Jx)!==0,d=(r&Zx)!==0;if(s)return c?"se-resize":d?"ne-resize":"e-resize";if(a)return c?"sw-resize":d?"nw-resize":"w-resize";if(c)return"s-resize";if(d)return"n-resize"}switch(n){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function jE(){Ir!==null&&(document.head.removeChild(Ir),xu=null,Ir=null,Va=-1)}function Gd(n,r){var s,a;const c=NE(n,r);if(xu!==c){if(xu=c,Ir===null&&(Ir=document.createElement("style"),document.head.appendChild(Ir)),Va>=0){var d;(d=Ir.sheet)===null||d===void 0||d.removeRule(Va)}Va=(s=(a=Ir.sheet)===null||a===void 0?void 0:a.insertRule(`*{cursor: ${c} !important;}`))!==null&&s!==void 0?s:-1}}function Gx(n){return n.type==="keydown"}function Qx(n){return n.type.startsWith("pointer")}function qx(n){return n.type.startsWith("mouse")}function Ll(n){if(Qx(n)){if(n.isPrimary)return{x:n.clientX,y:n.clientY}}else if(qx(n))return{x:n.clientX,y:n.clientY};return{x:1/0,y:1/0}}function PE(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function EE(n,r,s){return n.x<r.x+r.width&&n.x+n.width>r.x&&n.y<r.y+r.height&&n.y+n.height>r.y}function RE(n,r){if(n===r)throw new Error("Cannot compare node with itself");const s={a:Zg(n),b:Zg(r)};let a;for(;s.a.at(-1)===s.b.at(-1);)n=s.a.pop(),r=s.b.pop(),a=n;Le(a,"Stacking order can only be calculated for elements with a common ancestor");const c={a:Jg(Xg(s.a)),b:Jg(Xg(s.b))};if(c.a===c.b){const d=a.childNodes,p={a:s.a.at(-1),b:s.b.at(-1)};let m=d.length;for(;m--;){const h=d[m];if(h===p.a)return 1;if(h===p.b)return-1}}return Math.sign(c.a-c.b)}const AE=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function TE(n){var r;const s=getComputedStyle((r=Kx(n))!==null&&r!==void 0?r:n).display;return s==="flex"||s==="inline-flex"}function ME(n){const r=getComputedStyle(n);return!!(r.position==="fixed"||r.zIndex!=="auto"&&(r.position!=="static"||TE(n))||+r.opacity<1||"transform"in r&&r.transform!=="none"||"webkitTransform"in r&&r.webkitTransform!=="none"||"mixBlendMode"in r&&r.mixBlendMode!=="normal"||"filter"in r&&r.filter!=="none"||"webkitFilter"in r&&r.webkitFilter!=="none"||"isolation"in r&&r.isolation==="isolate"||AE.test(r.willChange)||r.webkitOverflowScrolling==="touch")}function Xg(n){let r=n.length;for(;r--;){const s=n[r];if(Le(s,"Missing node"),ME(s))return s}return null}function Jg(n){return n&&Number(getComputedStyle(n).zIndex)||0}function Zg(n){const r=[];for(;n;)r.push(n),n=Kx(n);return r}function Kx(n){const{parentNode:r}=n;return r&&r instanceof ShadowRoot?r.host:r}const Yx=1,Xx=2,Jx=4,Zx=8,IE=PE()==="coarse";let Rn=[],Ks=!1,ts=new Map,zl=new Map;const ci=new Set;function _E(n,r,s,a,c){var d;const{ownerDocument:p}=r,m={direction:s,element:r,hitAreaMargins:a,setResizeHandlerState:c},h=(d=ts.get(p))!==null&&d!==void 0?d:0;return ts.set(p,h+1),ci.add(m),al(),function(){var y;zl.delete(n),ci.delete(m);const x=(y=ts.get(p))!==null&&y!==void 0?y:1;if(ts.set(p,x-1),al(),x===1&&ts.delete(p),Rn.includes(m)){const b=Rn.indexOf(m);b>=0&&Rn.splice(b,1),up(),c("up",!0,null)}}}function DE(n){const{target:r}=n,{x:s,y:a}=Ll(n);Ks=!0,dp({target:r,x:s,y:a}),al(),Rn.length>0&&(ll("down",n),n.preventDefault(),ey(r)||n.stopImmediatePropagation())}function Qd(n){const{x:r,y:s}=Ll(n);if(Ks&&n.buttons===0&&(Ks=!1,ll("up",n)),!Ks){const{target:a}=n;dp({target:a,x:r,y:s})}ll("move",n),up(),Rn.length>0&&n.preventDefault()}function qd(n){const{target:r}=n,{x:s,y:a}=Ll(n);zl.clear(),Ks=!1,Rn.length>0&&(n.preventDefault(),ey(r)||n.stopImmediatePropagation()),ll("up",n),dp({target:r,x:s,y:a}),up(),al()}function ey(n){let r=n;for(;r;){if(r.hasAttribute(mt.resizeHandle))return!0;r=r.parentElement}return!1}function dp({target:n,x:r,y:s}){Rn.splice(0);let a=null;(n instanceof HTMLElement||n instanceof SVGElement)&&(a=n),ci.forEach(c=>{const{element:d,hitAreaMargins:p}=c,m=d.getBoundingClientRect(),{bottom:h,left:v,right:y,top:x}=m,b=IE?p.coarse:p.fine;if(r>=v-b&&r<=y+b&&s>=x-b&&s<=h+b){if(a!==null&&document.contains(a)&&d!==a&&!d.contains(a)&&!a.contains(d)&&RE(a,d)>0){let N=a,C=!1;for(;N&&!N.contains(d);){if(EE(N.getBoundingClientRect(),m)){C=!0;break}N=N.parentElement}if(C)return}Rn.push(c)}})}function Kd(n,r){zl.set(n,r)}function up(){let n=!1,r=!1;Rn.forEach(a=>{const{direction:c}=a;c==="horizontal"?n=!0:r=!0});let s=0;zl.forEach(a=>{s|=a}),n&&r?Gd("intersection",s):n?Gd("horizontal",s):r?Gd("vertical",s):jE()}let Yd=new AbortController;function al(){Yd.abort(),Yd=new AbortController;const n={capture:!0,signal:Yd.signal};ci.size&&(Ks?(Rn.length>0&&ts.forEach((r,s)=>{const{body:a}=s;r>0&&(a.addEventListener("contextmenu",qd,n),a.addEventListener("pointerleave",Qd,n),a.addEventListener("pointermove",Qd,n))}),window.addEventListener("pointerup",qd,n),window.addEventListener("pointercancel",qd,n)):ts.forEach((r,s)=>{const{body:a}=s;r>0&&(a.addEventListener("pointerdown",DE,n),a.addEventListener("pointermove",Qd,n))}))}function ll(n,r){ci.forEach(s=>{const{setResizeHandlerState:a}=s,c=Rn.includes(s);a(n,c,r)})}function OE(){const[n,r]=f.useState(0);return f.useCallback(()=>r(s=>s+1),[])}function Le(n,r){if(!n)throw console.error(r),Error(r)}function fs(n,r,s=lp){return n.toFixed(s)===r.toFixed(s)?0:n>r?1:-1}function ar(n,r,s=lp){return fs(n,r,s)===0}function on(n,r,s){return fs(n,r,s)===0}function LE(n,r,s){if(n.length!==r.length)return!1;for(let a=0;a<n.length;a++){const c=n[a],d=r[a];if(!on(c,d,s))return!1}return!0}function Us({panelConstraints:n,panelIndex:r,size:s}){const a=n[r];Le(a!=null,`Panel constraints not found for index ${r}`);let{collapsedSize:c=0,collapsible:d,maxSize:p=100,minSize:m=0}=a;if(fs(s,m)<0)if(d){const h=(c+m)/2;fs(s,h)<0?s=c:s=m}else s=m;return s=Math.min(p,s),s=parseFloat(s.toFixed(lp)),s}function Yo({delta:n,initialLayout:r,panelConstraints:s,pivotIndices:a,prevLayout:c,trigger:d}){if(on(n,0))return r;const p=[...r],[m,h]=a;Le(m!=null,"Invalid first pivot index"),Le(h!=null,"Invalid second pivot index");let v=0;if(d==="keyboard"){{const x=n<0?h:m,b=s[x];Le(b,`Panel constraints not found for index ${x}`);const{collapsedSize:S=0,collapsible:N,minSize:C=0}=b;if(N){const k=r[x];if(Le(k!=null,`Previous layout not found for panel index ${x}`),on(k,S)){const P=C-k;fs(P,Math.abs(n))>0&&(n=n<0?0-P:P)}}}{const x=n<0?m:h,b=s[x];Le(b,`No panel constraints found for index ${x}`);const{collapsedSize:S=0,collapsible:N,minSize:C=0}=b;if(N){const k=r[x];if(Le(k!=null,`Previous layout not found for panel index ${x}`),on(k,C)){const P=k-S;fs(P,Math.abs(n))>0&&(n=n<0?0-P:P)}}}}{const x=n<0?1:-1;let b=n<0?h:m,S=0;for(;;){const C=r[b];Le(C!=null,`Previous layout not found for panel index ${b}`);const P=Us({panelConstraints:s,panelIndex:b,size:100})-C;if(S+=P,b+=x,b<0||b>=s.length)break}const N=Math.min(Math.abs(n),Math.abs(S));n=n<0?0-N:N}{let b=n<0?m:h;for(;b>=0&&b<s.length;){const S=Math.abs(n)-Math.abs(v),N=r[b];Le(N!=null,`Previous layout not found for panel index ${b}`);const C=N-S,k=Us({panelConstraints:s,panelIndex:b,size:C});if(!on(N,k)&&(v+=N-k,p[b]=k,v.toPrecision(3).localeCompare(Math.abs(n).toPrecision(3),void 0,{numeric:!0})>=0))break;n<0?b--:b++}}if(LE(c,p))return c;{const x=n<0?h:m,b=r[x];Le(b!=null,`Previous layout not found for panel index ${x}`);const S=b+v,N=Us({panelConstraints:s,panelIndex:x,size:S});if(p[x]=N,!on(N,S)){let C=S-N,P=n<0?h:m;for(;P>=0&&P<s.length;){const j=p[P];Le(j!=null,`Previous layout not found for panel index ${P}`);const M=j+C,R=Us({panelConstraints:s,panelIndex:P,size:M});if(on(j,R)||(C-=R-j,p[P]=R),on(C,0))break;n>0?P--:P++}}}const y=p.reduce((x,b)=>b+x,0);return on(y,100)?p:c}function zE({layout:n,panelsArray:r,pivotIndices:s}){let a=0,c=100,d=0,p=0;const m=s[0];Le(m!=null,"No pivot index found"),r.forEach((x,b)=>{const{constraints:S}=x,{maxSize:N=100,minSize:C=0}=S;b===m?(a=C,c=N):(d+=C,p+=N)});const h=Math.min(c,100-d),v=Math.max(a,100-p),y=n[m];return{valueMax:h,valueMin:v,valueNow:y}}function di(n,r=document){return Array.from(r.querySelectorAll(`[${mt.resizeHandleId}][data-panel-group-id="${n}"]`))}function ty(n,r,s=document){const c=di(n,s).findIndex(d=>d.getAttribute(mt.resizeHandleId)===r);return c??null}function ny(n,r,s){const a=ty(n,r,s);return a!=null?[a,a+1]:[-1,-1]}function ry(n,r=document){var s;if(r instanceof HTMLElement&&(r==null||(s=r.dataset)===null||s===void 0?void 0:s.panelGroupId)==n)return r;const a=r.querySelector(`[data-panel-group][data-panel-group-id="${n}"]`);return a||null}function Fl(n,r=document){const s=r.querySelector(`[${mt.resizeHandleId}="${n}"]`);return s||null}function FE(n,r,s,a=document){var c,d,p,m;const h=Fl(r,a),v=di(n,a),y=h?v.indexOf(h):-1,x=(c=(d=s[y])===null||d===void 0?void 0:d.id)!==null&&c!==void 0?c:null,b=(p=(m=s[y+1])===null||m===void 0?void 0:m.id)!==null&&p!==void 0?p:null;return[x,b]}function $E({committedValuesRef:n,eagerValuesRef:r,groupId:s,layout:a,panelDataArray:c,panelGroupElement:d,setLayout:p}){f.useRef({didWarnAboutMissingResizeHandle:!1}),is(()=>{if(!d)return;const m=di(s,d);for(let h=0;h<c.length-1;h++){const{valueMax:v,valueMin:y,valueNow:x}=zE({layout:a,panelsArray:c,pivotIndices:[h,h+1]}),b=m[h];if(b!=null){const S=c[h];Le(S,`No panel data found for index "${h}"`),b.setAttribute("aria-controls",S.id),b.setAttribute("aria-valuemax",""+Math.round(v)),b.setAttribute("aria-valuemin",""+Math.round(y)),b.setAttribute("aria-valuenow",x!=null?""+Math.round(x):"")}}return()=>{m.forEach((h,v)=>{h.removeAttribute("aria-controls"),h.removeAttribute("aria-valuemax"),h.removeAttribute("aria-valuemin"),h.removeAttribute("aria-valuenow")})}},[s,a,c,d]),f.useEffect(()=>{if(!d)return;const m=r.current;Le(m,"Eager values not found");const{panelDataArray:h}=m,v=ry(s,d);Le(v!=null,`No group found for id "${s}"`);const y=di(s,d);Le(y,`No resize handles found for group id "${s}"`);const x=y.map(b=>{const S=b.getAttribute(mt.resizeHandleId);Le(S,"Resize handle element has no handle id attribute");const[N,C]=FE(s,S,h,d);if(N==null||C==null)return()=>{};const k=P=>{if(!P.defaultPrevented)switch(P.key){case"Enter":{P.preventDefault();const j=h.findIndex(M=>M.id===N);if(j>=0){const M=h[j];Le(M,`No panel data found for index ${j}`);const R=a[j],{collapsedSize:I=0,collapsible:W,minSize:z=0}=M.constraints;if(R!=null&&W){const V=Yo({delta:on(R,I)?z-I:I-R,initialLayout:a,panelConstraints:h.map(re=>re.constraints),pivotIndices:ny(s,S,d),prevLayout:a,trigger:"keyboard"});a!==V&&p(V)}}break}}};return b.addEventListener("keydown",k),()=>{b.removeEventListener("keydown",k)}});return()=>{x.forEach(b=>b())}},[d,n,r,s,a,c,p])}function eh(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!==r[s])return!1;return!0}function sy(n,r){const s=n==="horizontal",{x:a,y:c}=Ll(r);return s?a:c}function HE(n,r,s,a,c){const d=s==="horizontal",p=Fl(r,c);Le(p,`No resize handle element found for id "${r}"`);const m=p.getAttribute(mt.groupId);Le(m,"Resize handle element has no group id attribute");let{initialCursorPosition:h}=a;const v=sy(s,n),y=ry(m,c);Le(y,`No group element found for id "${m}"`);const x=y.getBoundingClientRect(),b=d?x.width:x.height;return(v-h)/b*100}function BE(n,r,s,a,c,d){if(Gx(n)){const p=s==="horizontal";let m=0;n.shiftKey?m=100:c!=null?m=c:m=10;let h=0;switch(n.key){case"ArrowDown":h=p?0:m;break;case"ArrowLeft":h=p?-m:0;break;case"ArrowRight":h=p?m:0;break;case"ArrowUp":h=p?0:-m;break;case"End":h=100;break;case"Home":h=-100;break}return h}else return a==null?0:HE(n,r,s,a,d)}function WE({panelDataArray:n}){const r=Array(n.length),s=n.map(d=>d.constraints);let a=0,c=100;for(let d=0;d<n.length;d++){const p=s[d];Le(p,`Panel constraints not found for index ${d}`);const{defaultSize:m}=p;m!=null&&(a++,r[d]=m,c-=m)}for(let d=0;d<n.length;d++){const p=s[d];Le(p,`Panel constraints not found for index ${d}`);const{defaultSize:m}=p;if(m!=null)continue;const h=n.length-a,v=c/h;a++,r[d]=v,c-=v}return r}function Bs(n,r,s){r.forEach((a,c)=>{const d=n[c];Le(d,`Panel data not found for index ${c}`);const{callbacks:p,constraints:m,id:h}=d,{collapsedSize:v=0,collapsible:y}=m,x=s[h];if(x==null||a!==x){s[h]=a;const{onCollapse:b,onExpand:S,onResize:N}=p;N&&N(a,x),y&&(b||S)&&(S&&(x==null||ar(x,v))&&!ar(a,v)&&S(),b&&(x==null||!ar(x,v))&&ar(a,v)&&b())}})}function za(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!=r[s])return!1;return!0}function VE({defaultSize:n,dragState:r,layout:s,panelData:a,panelIndex:c,precision:d=3}){const p=s[c];let m;return p==null?m=n!=null?n.toPrecision(d):"1":a.length===1?m="1":m=p.toPrecision(d),{flexBasis:0,flexGrow:m,flexShrink:1,overflow:"hidden",pointerEvents:r!==null?"none":void 0}}function UE(n,r=10){let s=null;return(...c)=>{s!==null&&clearTimeout(s),s=setTimeout(()=>{n(...c)},r)}}function th(n){try{if(typeof localStorage<"u")n.getItem=r=>localStorage.getItem(r),n.setItem=(r,s)=>{localStorage.setItem(r,s)};else throw new Error("localStorage not supported in this environment")}catch(r){console.error(r),n.getItem=()=>null,n.setItem=()=>{}}}function oy(n){return`react-resizable-panels:${n}`}function iy(n){return n.map(r=>{const{constraints:s,id:a,idIsFromProps:c,order:d}=r;return c?a:d?`${d}:${JSON.stringify(s)}`:JSON.stringify(s)}).sort((r,s)=>r.localeCompare(s)).join(",")}function ay(n,r){try{const s=oy(n),a=r.getItem(s);if(a){const c=JSON.parse(a);if(typeof c=="object"&&c!=null)return c}}catch{}return null}function GE(n,r,s){var a,c;const d=(a=ay(n,s))!==null&&a!==void 0?a:{},p=iy(r);return(c=d[p])!==null&&c!==void 0?c:null}function QE(n,r,s,a,c){var d;const p=oy(n),m=iy(r),h=(d=ay(n,c))!==null&&d!==void 0?d:{};h[m]={expandToSizes:Object.fromEntries(s.entries()),layout:a};try{c.setItem(p,JSON.stringify(h))}catch(v){console.error(v)}}function nh({layout:n,panelConstraints:r}){const s=[...n],a=s.reduce((d,p)=>d+p,0);if(s.length!==r.length)throw Error(`Invalid ${r.length} panel layout: ${s.map(d=>`${d}%`).join(", ")}`);if(!on(a,100)&&s.length>0)for(let d=0;d<r.length;d++){const p=s[d];Le(p!=null,`No layout data found for index ${d}`);const m=100/a*p;s[d]=m}let c=0;for(let d=0;d<r.length;d++){const p=s[d];Le(p!=null,`No layout data found for index ${d}`);const m=Us({panelConstraints:r,panelIndex:d,size:p});p!=m&&(c+=p-m,s[d]=m)}if(!on(c,0))for(let d=0;d<r.length;d++){const p=s[d];Le(p!=null,`No layout data found for index ${d}`);const m=p+c,h=Us({panelConstraints:r,panelIndex:d,size:m});if(p!==h&&(c-=h-p,s[d]=h,on(c,0)))break}return s}const qE=100,Xo={getItem:n=>(th(Xo),Xo.getItem(n)),setItem:(n,r)=>{th(Xo),Xo.setItem(n,r)}},rh={};function ly({autoSaveId:n=null,children:r,className:s="",direction:a,forwardedRef:c,id:d=null,onLayout:p=null,keyboardResizeBy:m=null,storage:h=Xo,style:v,tagName:y="div",...x}){const b=cp(d),S=f.useRef(null),[N,C]=f.useState(null),[k,P]=f.useState([]),j=OE(),M=f.useRef({}),R=f.useRef(new Map),I=f.useRef(0),W=f.useRef({autoSaveId:n,direction:a,dragState:N,id:b,keyboardResizeBy:m,onLayout:p,storage:h}),z=f.useRef({layout:k,panelDataArray:[],panelDataArrayChanged:!1});f.useRef({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),f.useImperativeHandle(c,()=>({getId:()=>W.current.id,getLayout:()=>{const{layout:B}=z.current;return B},setLayout:B=>{const{onLayout:q}=W.current,{layout:oe,panelDataArray:K}=z.current,O=nh({layout:B,panelConstraints:K.map(X=>X.constraints)});eh(oe,O)||(P(O),z.current.layout=O,q&&q(O),Bs(K,O,M.current))}}),[]),is(()=>{W.current.autoSaveId=n,W.current.direction=a,W.current.dragState=N,W.current.id=b,W.current.onLayout=p,W.current.storage=h}),$E({committedValuesRef:W,eagerValuesRef:z,groupId:b,layout:k,panelDataArray:z.current.panelDataArray,setLayout:P,panelGroupElement:S.current}),f.useEffect(()=>{const{panelDataArray:B}=z.current;if(n){if(k.length===0||k.length!==B.length)return;let q=rh[n];q==null&&(q=UE(QE,qE),rh[n]=q);const oe=[...B],K=new Map(R.current);q(n,oe,K,k,h)}},[n,k,h]),f.useEffect(()=>{});const V=f.useCallback(B=>{const{onLayout:q}=W.current,{layout:oe,panelDataArray:K}=z.current;if(B.constraints.collapsible){const O=K.map(Ee=>Ee.constraints),{collapsedSize:X=0,panelSize:le,pivotIndices:he}=es(K,B,oe);if(Le(le!=null,`Panel size not found for panel "${B.id}"`),!ar(le,X)){R.current.set(B.id,le);const Re=Ws(K,B)===K.length-1?le-X:X-le,Z=Yo({delta:Re,initialLayout:oe,panelConstraints:O,pivotIndices:he,prevLayout:oe,trigger:"imperative-api"});za(oe,Z)||(P(Z),z.current.layout=Z,q&&q(Z),Bs(K,Z,M.current))}}},[]),re=f.useCallback((B,q)=>{const{onLayout:oe}=W.current,{layout:K,panelDataArray:O}=z.current;if(B.constraints.collapsible){const X=O.map(je=>je.constraints),{collapsedSize:le=0,panelSize:he=0,minSize:Ee=0,pivotIndices:Re}=es(O,B,K),Z=q??Ee;if(ar(he,le)){const je=R.current.get(B.id),Ge=je!=null&&je>=Z?je:Z,vt=Ws(O,B)===O.length-1?he-Ge:Ge-he,at=Yo({delta:vt,initialLayout:K,panelConstraints:X,pivotIndices:Re,prevLayout:K,trigger:"imperative-api"});za(K,at)||(P(at),z.current.layout=at,oe&&oe(at),Bs(O,at,M.current))}}},[]),Q=f.useCallback(B=>{const{layout:q,panelDataArray:oe}=z.current,{panelSize:K}=es(oe,B,q);return Le(K!=null,`Panel size not found for panel "${B.id}"`),K},[]),de=f.useCallback((B,q)=>{const{panelDataArray:oe}=z.current,K=Ws(oe,B);return VE({defaultSize:q,dragState:N,layout:k,panelData:oe,panelIndex:K})},[N,k]),ie=f.useCallback(B=>{const{layout:q,panelDataArray:oe}=z.current,{collapsedSize:K=0,collapsible:O,panelSize:X}=es(oe,B,q);return Le(X!=null,`Panel size not found for panel "${B.id}"`),O===!0&&ar(X,K)},[]),me=f.useCallback(B=>{const{layout:q,panelDataArray:oe}=z.current,{collapsedSize:K=0,collapsible:O,panelSize:X}=es(oe,B,q);return Le(X!=null,`Panel size not found for panel "${B.id}"`),!O||fs(X,K)>0},[]),ue=f.useCallback(B=>{const{panelDataArray:q}=z.current;q.push(B),q.sort((oe,K)=>{const O=oe.order,X=K.order;return O==null&&X==null?0:O==null?-1:X==null?1:O-X}),z.current.panelDataArrayChanged=!0,j()},[j]);is(()=>{if(z.current.panelDataArrayChanged){z.current.panelDataArrayChanged=!1;const{autoSaveId:B,onLayout:q,storage:oe}=W.current,{layout:K,panelDataArray:O}=z.current;let X=null;if(B){const he=GE(B,O,oe);he&&(R.current=new Map(Object.entries(he.expandToSizes)),X=he.layout)}X==null&&(X=WE({panelDataArray:O}));const le=nh({layout:X,panelConstraints:O.map(he=>he.constraints)});eh(K,le)||(P(le),z.current.layout=le,q&&q(le),Bs(O,le,M.current))}}),is(()=>{const B=z.current;return()=>{B.layout=[]}},[]);const fe=f.useCallback(B=>{let q=!1;const oe=S.current;return oe&&window.getComputedStyle(oe,null).getPropertyValue("direction")==="rtl"&&(q=!0),function(O){O.preventDefault();const X=S.current;if(!X)return()=>null;const{direction:le,dragState:he,id:Ee,keyboardResizeBy:Re,onLayout:Z}=W.current,{layout:je,panelDataArray:Ge}=z.current,{initialLayout:pt}=he??{},vt=ny(Ee,B,X);let at=BE(O,B,le,he,Re,X);const dn=le==="horizontal";dn&&q&&(at=-at);const Vt=Ge.map(ce=>ce.constraints),Xe=Yo({delta:at,initialLayout:pt??je,panelConstraints:Vt,pivotIndices:vt,prevLayout:je,trigger:Gx(O)?"keyboard":"mouse-or-touch"}),$t=!za(je,Xe);(Qx(O)||qx(O))&&I.current!=at&&(I.current=at,!$t&&at!==0?dn?Kd(B,at<0?Yx:Xx):Kd(B,at<0?Jx:Zx):Kd(B,0)),$t&&(P(Xe),z.current.layout=Xe,Z&&Z(Xe),Bs(Ge,Xe,M.current))}},[]),ee=f.useCallback((B,q)=>{const{onLayout:oe}=W.current,{layout:K,panelDataArray:O}=z.current,X=O.map(je=>je.constraints),{panelSize:le,pivotIndices:he}=es(O,B,K);Le(le!=null,`Panel size not found for panel "${B.id}"`);const Re=Ws(O,B)===O.length-1?le-q:q-le,Z=Yo({delta:Re,initialLayout:K,panelConstraints:X,pivotIndices:he,prevLayout:K,trigger:"imperative-api"});za(K,Z)||(P(Z),z.current.layout=Z,oe&&oe(Z),Bs(O,Z,M.current))},[]),Y=f.useCallback((B,q)=>{const{layout:oe,panelDataArray:K}=z.current,{collapsedSize:O=0,collapsible:X}=q,{collapsedSize:le=0,collapsible:he,maxSize:Ee=100,minSize:Re=0}=B.constraints,{panelSize:Z}=es(K,B,oe);Z!=null&&(X&&he&&ar(Z,O)?ar(O,le)||ee(B,le):Z<Re?ee(B,Re):Z>Ee&&ee(B,Ee))},[ee]),_=f.useCallback((B,q)=>{const{direction:oe}=W.current,{layout:K}=z.current;if(!S.current)return;const O=Fl(B,S.current);Le(O,`Drag handle element not found for id "${B}"`);const X=sy(oe,q);C({dragHandleId:B,dragHandleRect:O.getBoundingClientRect(),initialCursorPosition:X,initialLayout:K})},[]),H=f.useCallback(()=>{C(null)},[]),J=f.useCallback(B=>{const{panelDataArray:q}=z.current,oe=Ws(q,B);oe>=0&&(q.splice(oe,1),delete M.current[B.id],z.current.panelDataArrayChanged=!0,j())},[j]),A=f.useMemo(()=>({collapsePanel:V,direction:a,dragState:N,expandPanel:re,getPanelSize:Q,getPanelStyle:de,groupId:b,isPanelCollapsed:ie,isPanelExpanded:me,reevaluatePanelConstraints:Y,registerPanel:ue,registerResizeHandle:fe,resizePanel:ee,startDragging:_,stopDragging:H,unregisterPanel:J,panelGroupElement:S.current}),[V,N,a,re,Q,de,b,ie,me,Y,ue,fe,ee,_,H,J]),U={display:"flex",flexDirection:a==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return f.createElement(Ol.Provider,{value:A},f.createElement(y,{...x,children:r,className:s,id:d,ref:S,style:{...U,...v},[mt.group]:"",[mt.groupDirection]:a,[mt.groupId]:b}))}const cy=f.forwardRef((n,r)=>f.createElement(ly,{...n,forwardedRef:r}));ly.displayName="PanelGroup";cy.displayName="forwardRef(PanelGroup)";function Ws(n,r){return n.findIndex(s=>s===r||s.id===r.id)}function es(n,r,s){const a=Ws(n,r),d=a===n.length-1?[a-1,a]:[a,a+1],p=s[a];return{...r.constraints,panelSize:p,pivotIndices:d}}function KE({disabled:n,handleId:r,resizeHandler:s,panelGroupElement:a}){f.useEffect(()=>{if(n||s==null||a==null)return;const c=Fl(r,a);if(c==null)return;const d=p=>{if(!p.defaultPrevented)switch(p.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{p.preventDefault(),s(p);break}case"F6":{p.preventDefault();const m=c.getAttribute(mt.groupId);Le(m,`No group element found for id "${m}"`);const h=di(m,a),v=ty(m,r,a);Le(v!==null,`No resize element found for id "${r}"`);const y=p.shiftKey?v>0?v-1:h.length-1:v+1<h.length?v+1:0;h[y].focus();break}}};return c.addEventListener("keydown",d),()=>{c.removeEventListener("keydown",d)}},[a,n,r,s])}function dy({children:n=null,className:r="",disabled:s=!1,hitAreaMargins:a,id:c,onBlur:d,onClick:p,onDragging:m,onFocus:h,onPointerDown:v,onPointerUp:y,style:x={},tabIndex:b=0,tagName:S="div",...N}){var C,k;const P=f.useRef(null),j=f.useRef({onClick:p,onDragging:m,onPointerDown:v,onPointerUp:y});f.useEffect(()=>{j.current.onClick=p,j.current.onDragging=m,j.current.onPointerDown=v,j.current.onPointerUp=y});const M=f.useContext(Ol);if(M===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:R,groupId:I,registerResizeHandle:W,startDragging:z,stopDragging:V,panelGroupElement:re}=M,Q=cp(c),[de,ie]=f.useState("inactive"),[me,ue]=f.useState(!1),[fe,ee]=f.useState(null),Y=f.useRef({state:de});is(()=>{Y.current.state=de}),f.useEffect(()=>{if(s)ee(null);else{const A=W(Q);ee(()=>A)}},[s,Q,W]);const _=(C=a?.coarse)!==null&&C!==void 0?C:15,H=(k=a?.fine)!==null&&k!==void 0?k:5;f.useEffect(()=>{if(s||fe==null)return;const A=P.current;Le(A,"Element ref not attached");let U=!1;return _E(Q,A,R,{coarse:_,fine:H},(q,oe,K)=>{if(!oe){ie("inactive");return}switch(q){case"down":{ie("drag"),U=!1,Le(K,'Expected event to be defined for "down" action'),z(Q,K);const{onDragging:O,onPointerDown:X}=j.current;O?.(!0),X?.();break}case"move":{const{state:O}=Y.current;U=!0,O!=="drag"&&ie("hover"),Le(K,'Expected event to be defined for "move" action'),fe(K);break}case"up":{ie("hover"),V();const{onClick:O,onDragging:X,onPointerUp:le}=j.current;X?.(!1),le?.(),U||O?.();break}}})},[_,R,s,H,W,Q,fe,z,V]),KE({disabled:s,handleId:Q,resizeHandler:fe,panelGroupElement:re});const J={touchAction:"none",userSelect:"none"};return f.createElement(S,{...N,children:n,className:r,id:c,onBlur:()=>{ue(!1),d?.()},onFocus:()=>{ue(!0),h?.()},ref:P,role:"separator",style:{...J,...x},tabIndex:b,[mt.groupDirection]:R,[mt.groupId]:I,[mt.resizeHandle]:"",[mt.resizeHandleActive]:de==="drag"?"pointer":me?"keyboard":void 0,[mt.resizeHandleEnabled]:!s,[mt.resizeHandleId]:Q,[mt.resizeHandleState]:de})}dy.displayName="PanelResizeHandle";function YE({className:n,...r}){return o.jsx(cy,{"data-slot":"resizable-panel-group",className:Fe("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",n),...r})}function sh({...n}){return o.jsx(Ux,{"data-slot":"resizable-panel",...n})}function XE({withHandle:n,className:r,...s}){return o.jsx(dy,{"data-slot":"resizable-handle",className:Fe("bg-gray-300 focus-visible:ring-gray-500 relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",r),...s,children:n&&o.jsx("div",{className:"bg-white z-10 flex h-6 w-3 items-center justify-center rounded-lg border border-gray-300 shadow-sm",children:o.jsx(d2,{className:"size-3 text-gray-500"})})})}const oh=({data:n,onFormSubmit:r,onComplete:s,onToggleSidebar:a,onBack:c,mode:d="simulator",interactiveMessages:p=[],onSendMessage:m,title:h,classificationType:v,chatId:y,onRenameChat:x,isNewChat:b=!1,isIncognito:S=!1,folders:N=[],onMoveToFolder:C,bookmarkedAssistants:k=[],assistantType:P})=>{const j=d==="interactive",[M,R]=f.useState([]),[I,W]=f.useState(0),[z,V]=f.useState(!1),[re,Q]=f.useState(""),[de,ie]=f.useState(""),[me,ue]=f.useState([]),[fe,ee]=f.useState(!1),[Y,_]=f.useState(null),[H,J]=f.useState(!1),[A,U]=f.useState(""),[B,q]=f.useState(!1),[oe,K]=f.useState(!1),[O,X]=f.useState(""),[le,he]=f.useState(!1),[Ee,Re]=f.useState(!1),[Z,je]=f.useState(!1),[Ge,pt]=f.useState(new Set),[vt,at]=f.useState({}),[dn,Vt]=f.useState(!1),[Xe,$t]=f.useState(null),[ce,Je]=f.useState({}),et=f.useRef(null),Ke=f.useRef(null);f.useEffect(()=>{et.current?.scrollIntoView({behavior:"smooth"})},[M,de,p]),f.useEffect(()=>{j||Y&&Y.interactive&&setTimeout(()=>{document.querySelectorAll("form").forEach(pe=>{pe.onsubmit=De=>{De.preventDefault();const ct=new FormData(pe),gs=Object.fromEntries(ct);Xn(gs,Y.title)}})},100)},[Y,j]),f.useEffect(()=>{j||n&&I>=n.messages.length&&!le&&(he(!0),s?.())},[I,n?.messages?.length,le,s,j]),f.useEffect(()=>{Y&&Ke.current&&Ke.current.scrollTo({top:0,behavior:"smooth"})},[Y]);const Xn=(G,pe)=>{_(null),R(De=>[...De,{role:"user",text:"Form submitted ✓"}]),r?r(G,pe):setTimeout(async()=>{ee(!0),await Zt(1333),ee(!1),R(De=>[...De,{type:"text",content:"Thank you for submitting the form! I've received your information and will process it accordingly."}]),W(De=>De+1)},333)},un=G=>{if(!n||I>=n.messages.length)return;const pe=n.messages[I];if(pe.role!=="user")return;const De=pe.content.text;V(!1),R(ct=>[...ct,{role:"user",text:De}]),Q(""),W(ct=>ct+1)},ur=()=>{if(j||!n||I>=n.messages.length)return;const G=n.messages[I];if(G.role==="user")return G.content.text};f.useEffect(()=>{if(j||!n||I>=n.messages.length)return;const G=n.messages[I];if(G.role==="user"){const pe=G.content;pe.autoSend&&pe.text?setTimeout(()=>{R(De=>[...De,{role:"user",text:pe.text}]),W(De=>De+1)},500):pe.formSubmission?W(De=>De+1):V(!0)}else{const pe=G.content;_n(pe)}},[I,j,n]);const _n=async G=>{ee(!0),await Zt(1e3),ee(!1);for(const pe of G)pe.type==="thinking"?await Dn(pe):pe.type==="assistantSwitch"?(Re(!0),await Zt(1333),Re(!1),R(De=>[...De,{type:"assistantSwitch",message:pe.message}]),await Zt(333)):pe.type==="text"?(await Zt(pe.delayMs?pe.delayMs/1.5:667),R(De=>[...De,{type:"text",content:pe.content}])):pe.type==="artifact"&&(await Zt(pe.delayMs?pe.delayMs/1.5:667),R(De=>[...De,{type:"artifact",data:pe}]),_(pe),je(!0));W(pe=>pe+1)},Dn=async G=>{const pe=(G.timingMs||1500)/1.5,De=G.reasoning||[];for(let ct=0;ct<De.length;ct++)ue(gs=>[...gs,De[ct]]),await Zt(pe/De.length);G.thought&&(ie(G.thought),await Zt(500)),R(ct=>[...ct,{type:"thinking",thought:G.thought||"",reasoning:De}]),ie(""),ue([])},Zt=G=>new Promise(pe=>setTimeout(pe,G)),xe=G=>{switch(G.toLowerCase()){case"document":return o.jsx(xn,{className:"w-5 h-5"});case"code":return o.jsx(qw,{className:"w-5 h-5"});case"chart":return o.jsx($a,{className:"w-5 h-5"});case"form":return o.jsx(Vw,{className:"w-5 h-5"});default:return o.jsx(xn,{className:"w-5 h-5"})}},Pe=G=>{pt(pe=>{const De=new Set(pe);return De.has(G)?De.delete(G):De.add(G),De})},_e=async()=>{if(Y){const G=document.createElement("div");G.innerHTML=Y.content;const pe=G.textContent||G.innerText||"";await navigator.clipboard.writeText(pe),Vt(!0),setTimeout(()=>Vt(!1),2e3)}},Qe=async(G,pe)=>{await navigator.clipboard.writeText(pe),$t(G),setTimeout(()=>$t(null),2e3)},Ve=(G,pe)=>{Je(De=>({...De,[G]:De[G]===pe?null:pe}))},At=()=>{if(Y){const G=`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${Y.title}</title>
        </head>
        <body>
          <h1>${Y.title}</h1>
          ${Y.content}
        </body>
        </html>
      `,pe=new Blob([G],{type:"application/msword"}),De=URL.createObjectURL(pe),ct=document.createElement("a");ct.href=De,ct.download=`${Y.title.replace(/\s+/g,"_")}.doc`,document.body.appendChild(ct),ct.click(),document.body.removeChild(ct),URL.revokeObjectURL(De)}},Ht=()=>Y&&vt[Y.title]||1,en=()=>{Y&&Ht()>1&&at(G=>({...G,[Y.title]:(G[Y.title]||1)-1}))},wt=()=>{if(Y){const G=Ht();G<3&&at(pe=>({...pe,[Y.title]:G+1}))}};return o.jsxs(YE,{direction:"horizontal",className:"h-full bg-gray-50",children:[o.jsx(sh,{defaultSize:Z?50:100,minSize:30,children:o.jsxs("div",{className:"flex-1 flex flex-col h-full",children:[o.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200",children:[o.jsxs("div",{className:`flex items-center gap-3 flex-1 ${S?"justify-center":""}`,children:[S?o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(vu,{className:"w-4 h-4 text-gray-600"}),o.jsx("span",{className:"text-sm font-medium text-gray-900",children:"Incognito chat"})]}):H&&j?o.jsx("input",{type:"text",value:A,onChange:G=>U(G.target.value),onBlur:()=>{A.trim()&&y&&x&&x(y,A.trim()),J(!1)},onKeyDown:G=>{G.key==="Enter"?(A.trim()&&y&&x&&x(y,A.trim()),J(!1)):G.key==="Escape"&&J(!1)},className:"text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400",autoFocus:!0}):o.jsx("div",{className:"flex items-center gap-2 group/title",children:o.jsx("span",{className:"text-sm font-medium text-gray-900 cursor-pointer",onDoubleClick:()=>{j&&x&&(U(h||"New Chat"),J(!0))},title:"Double-click to rename",children:j?h||"New Chat":n?.title})}),j?v&&o.jsx("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300",children:v==="cce-sn"?"C(CE) + SN":v==="cce-sh"?"C(CE) + SH":"RSN"}):n?.classificationType&&o.jsx("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300",children:n.classificationType==="cce-sn"?"C(CE) + SN":n.classificationType==="cce-sh"?"C(CE) + SH":"RSN"})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[j&&b&&p.length===0&&o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>q(!B),className:`p-1.5 rounded-lg transition-colors ${B?"bg-gray-100 text-gray-900":"text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`,children:o.jsx(rg,{className:"w-4 h-4"})})}),o.jsx(ot,{children:o.jsx("p",{children:B?"Temporary chat enabled - no memory, not saved":"Enable temporary chat"})})]})}),B&&p.length>0&&o.jsxs("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg flex items-center gap-1",children:[o.jsx(rg,{className:"w-3 h-3"}),"Temporary"]}),j&&!b&&y&&o.jsxs(Un,{children:[o.jsx(Gn,{asChild:!0,children:o.jsx("button",{className:"p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700",children:o.jsx(as,{className:"w-5 h-5"})})}),o.jsx(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:!S&&v!=="cce-sn"&&v!=="cce-sh"&&o.jsxs($j,{children:[o.jsxs(Hj,{className:"hover:bg-gray-100",children:[o.jsx(uh,{className:"w-4 h-4 mr-2"}),"Move to folder"]}),o.jsx(Bj,{className:"bg-white border-2 border-gray-900 rounded-lg",children:N.length===0?o.jsx(yt,{disabled:!0,className:"text-gray-400 text-sm",children:"No folders available"}):N.map(G=>o.jsx(yt,{onClick:()=>C?.(y,G.id),className:"hover:bg-gray-100",children:G.name},G.id))})]})})]}),!Z&&o.jsx(bt,{children:o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>je(!0),className:"text-gray-700 hover:text-gray-900 rounded-lg p-1 transition-colors",children:o.jsx(xn,{className:"w-5 h-5"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Expand canvas"})})]})})]})]}),o.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-4 bg-gray-50",children:o.jsxs("div",{className:"max-w-chat mx-auto space-y-8",children:[j?p.map(G=>o.jsx("div",{className:"group",children:G.role==="user"?o.jsxs("div",{className:"flex justify-end items-start gap-2 ml-24 mb-12",children:[o.jsx("button",{onClick:()=>Qe(G.id,G.content),className:"opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded mt-1",title:"Copy message",children:Xe===G.id?o.jsx(Hn,{className:"w-4 h-4 text-green-600"}):o.jsx(Go,{className:"w-4 h-4 text-gray-400"})}),o.jsx("div",{className:"bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl",style:{fontSize:"16px",lineHeight:"1.7"},children:G.content})]}):o.jsxs("div",{className:"flex flex-col gap-1 mb-2",children:[o.jsx("div",{className:"w-full whitespace-pre-wrap text-gray-900",style:{fontSize:"16px",lineHeight:"1.7"},children:G.content}),o.jsx("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:o.jsxs(bt,{children:[o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>Qe(G.id,G.content),className:"p-1.5 hover:bg-gray-100 rounded",children:Xe===G.id?o.jsx(Hn,{className:"w-4 h-4 text-green-600"}):o.jsx(Go,{className:"w-4 h-4 text-gray-400"})})}),o.jsx(ot,{children:o.jsx("p",{children:Xe===G.id?"Copied":"Copy"})})]}),o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>Ve(G.id,"up"),className:`p-1.5 hover:bg-gray-100 rounded ${ce[G.id]==="up"?"text-green-600":"text-gray-400"}`,children:o.jsx(cg,{className:"w-4 h-4"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Good response"})})]}),o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>Ve(G.id,"down"),className:`p-1.5 hover:bg-gray-100 rounded ${ce[G.id]==="down"?"text-red-600":"text-gray-400"}`,children:o.jsx(lg,{className:"w-4 h-4"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Bad response"})})]})]})})]})},G.id)):M.map((G,pe)=>o.jsxs("div",{className:"group",children:[G.role==="user"&&o.jsxs("div",{className:"flex justify-end items-start gap-2 ml-24 mb-12",children:[o.jsx("button",{onClick:()=>Qe(`sim-${pe}`,G.text),className:"opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded mt-1",title:"Copy message",children:Xe===`sim-${pe}`?o.jsx(Hn,{className:"w-4 h-4 text-green-600"}):o.jsx(Go,{className:"w-4 h-4 text-gray-400"})}),o.jsx("div",{className:"bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl",style:{fontSize:"16px",lineHeight:"1.7"},children:G.text})]}),G.type==="thinking"&&o.jsxs("div",{className:"flex flex-col gap-1 mb-4 p-3 bg-white rounded-lg border border-gray-200",children:[o.jsxs("button",{onClick:()=>Pe(pe),className:"flex items-center justify-between w-full text-left hover:opacity-80 transition-opacity",children:[o.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Reasoning"}),o.jsx("div",{className:"text-gray-600",children:Ge.has(pe)?o.jsx(Ys,{className:"w-4 h-4"}):o.jsx(Xs,{className:"w-4 h-4"})})]}),Ge.has(pe)&&G.reasoning&&o.jsx("div",{className:"mt-2 space-y-2",children:G.reasoning.map((De,ct)=>o.jsxs("div",{className:"flex items-start gap-2 text-sm text-gray-600",children:[o.jsxs("span",{className:"text-gray-400 font-mono text-xs mt-0.5",children:[ct+1,"."]}),o.jsx("span",{children:De})]},ct))})]}),G.type==="assistantSwitch"&&o.jsx("div",{className:"flex justify-center",children:o.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300",children:[o.jsx("span",{className:"text-gray-500",children:"Switched to"}),o.jsx("svg",{className:"w-4 h-4 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),o.jsx("span",{className:"font-semibold text-gray-900",children:G.message})]})}),G.type==="text"&&o.jsxs("div",{className:"flex flex-col gap-1 mb-2",children:[o.jsx("div",{className:"w-full whitespace-pre-wrap text-gray-900",style:{fontSize:"16px",lineHeight:"1.7"},children:G.content}),o.jsx("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:o.jsxs(bt,{children:[o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>Qe(`sim-text-${pe}`,G.content),className:"p-1.5 hover:bg-gray-100 rounded",children:Xe===`sim-text-${pe}`?o.jsx(Hn,{className:"w-4 h-4 text-green-600"}):o.jsx(Go,{className:"w-4 h-4 text-gray-400"})})}),o.jsx(ot,{children:o.jsx("p",{children:Xe===`sim-text-${pe}`?"Copied":"Copy"})})]}),o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>Ve(`sim-text-${pe}`,"up"),className:`p-1.5 hover:bg-gray-100 rounded ${ce[`sim-text-${pe}`]==="up"?"text-green-600":"text-gray-400"}`,children:o.jsx(cg,{className:"w-4 h-4"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Good response"})})]}),o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx("button",{onClick:()=>Ve(`sim-text-${pe}`,"down"),className:`p-1.5 hover:bg-gray-100 rounded ${ce[`sim-text-${pe}`]==="down"?"text-red-600":"text-gray-400"}`,children:o.jsx(lg,{className:"w-4 h-4"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Bad response"})})]})]})})]}),G.type==="artifact"&&o.jsx("div",{children:o.jsx("button",{onClick:()=>{_(G.data),je(!0)},className:"inline-flex bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 hover:border-gray-400 transition-colors text-left",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"text-gray-500",children:xe(G.data.fileType)}),o.jsxs("div",{children:[o.jsx("div",{className:"font-medium text-gray-900 text-sm",children:G.data.title}),o.jsx("div",{className:"text-xs text-gray-500 mt-0.5",children:G.data.description})]})]})})})]},pe)),!j&&o.jsxs(o.Fragment,{children:[(de||me.length>0)&&o.jsxs("div",{className:"flex flex-col gap-1 mb-4 p-3 bg-white rounded-lg border border-gray-200",children:[o.jsxs("button",{onClick:()=>pt(G=>{const pe=new Set(G);return pe.has(-1)?pe.delete(-1):pe.add(-1),pe}),className:"flex items-center justify-between w-full text-left hover:opacity-80 transition-opacity",children:[o.jsx("span",{className:"text-sm font-medium text-gray-600",children:me.length>0?me[me.length-1]:de||"Processing..."}),o.jsx("div",{className:"text-gray-600",children:Ge.has(-1)?o.jsx(Ys,{className:"w-4 h-4"}):o.jsx(Xs,{className:"w-4 h-4"})})]}),Ge.has(-1)&&me.length>0&&o.jsx("div",{className:"mt-2 space-y-2",children:me.map((G,pe)=>o.jsxs("div",{className:"flex items-start gap-2 text-sm text-gray-600",children:[o.jsxs("span",{className:"text-gray-400 font-mono text-xs mt-0.5",children:[pe+1,"."]}),o.jsx("span",{className:pe===me.length-1?"shimmer-text":"",children:G})]},pe))})]}),Ee&&o.jsx("div",{className:"flex justify-center",children:o.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300",children:[o.jsx("svg",{className:"w-4 h-4 animate-spin",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),o.jsx("span",{children:"Searching assistants..."})]})}),fe&&o.jsx("div",{className:"flex justify-start",children:o.jsxs("div",{className:"max-w-[80%] space-y-3 py-3",children:[o.jsx("div",{className:"h-4 bg-gray-100 rounded animate-pulse w-3/4"}),o.jsx("div",{className:"h-4 bg-gray-100 rounded animate-pulse w-full"}),o.jsx("div",{className:"h-4 bg-gray-100 rounded animate-pulse w-5/6"})]})})]}),o.jsx("div",{ref:et})]})}),o.jsx("div",{className:"px-6 py-4 bg-gray-50",children:o.jsxs("div",{className:"max-w-chat mx-auto",children:[j?o.jsx(hu,{onSend:G=>m?.(G),autoFocus:!0,bookmarkedAssistants:k,assistantType:P}):o.jsx(hu,{onSend:un,value:re,onChange:Q,autoTypeText:ur(),disabled:!z,assistantType:P}),(j&&p.length>0||!j&&M.length>0)&&o.jsx("p",{className:"text-xs text-gray-400 mt-3 text-center",children:"AI can make mistakes. Check important info."})]})})]})}),Z&&o.jsxs(o.Fragment,{children:[o.jsx(XE,{withHandle:!0,className:"bg-gray-100 hover:bg-gray-100 transition-colors"}),o.jsx(sh,{defaultSize:50,minSize:20,children:o.jsxs("div",{className:"flex flex-col h-full bg-white",children:[o.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-white h-[52px]",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[Y&&o.jsx("button",{onClick:()=>_(null),className:"mr-2 flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors",children:o.jsx(Zo,{className:"w-4 h-4"})}),oe&&Y?o.jsx("input",{type:"text",value:O,onChange:G=>X(G.target.value),onBlur:()=>{K(!1)},onKeyDown:G=>{(G.key==="Enter"||G.key==="Escape")&&K(!1)},className:"text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400",autoFocus:!0}):o.jsx("h2",{className:"text-sm font-semibold text-gray-900 cursor-pointer",onDoubleClick:()=>{Y&&(X(Y.title),K(!0))},title:Y?"Double-click to rename":void 0,children:Y?Y.title:"Canvas"})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[Y&&o.jsx(bt,{children:o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx(Oe,{variant:"ghost",size:"sm",onClick:_e,className:"h-8 w-8 p-0",children:dn?o.jsx(Hn,{className:"w-4 h-4 text-green-600"}):o.jsx(Go,{className:"w-4 h-4"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Copy content"})})]}),o.jsx("div",{className:"h-5 w-px bg-gray-100 mx-1"}),o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx(Oe,{variant:"ghost",size:"sm",onClick:en,disabled:Ht()<=1,className:"h-8 w-8 p-0",children:o.jsx(Q2,{className:"w-4 h-4"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Undo"})})]}),o.jsxs(rt,{children:[o.jsx(st,{asChild:!0,children:o.jsx(Oe,{variant:"ghost",size:"sm",onClick:wt,disabled:Ht()>=3,className:"h-8 w-8 p-0",children:o.jsx(A2,{className:"w-4 h-4"})})}),o.jsx(ot,{children:o.jsx("p",{children:"Redo"})})]}),o.jsx("div",{className:"h-5 w-px bg-gray-100 mx-1"}),o.jsxs(Oe,{variant:"outline",size:"sm",onClick:At,className:"h-8 px-3 gap-2 border-gray-300",children:[o.jsx(e2,{className:"w-4 h-4"}),o.jsx("span",{className:"text-xs",children:"Download as .docx"})]})]})}),o.jsx("button",{onClick:()=>je(!1),className:"text-gray-500 hover:text-gray-900 transition-colors ml-2",children:o.jsx(Js,{className:"w-5 h-5"})})]})]}),o.jsx("div",{className:"flex-1 overflow-auto",ref:Ke,children:j?o.jsx("div",{className:"h-full flex items-center justify-center",children:o.jsxs("div",{className:"text-center py-12 text-gray-500",children:[o.jsx(xn,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),o.jsx("p",{className:"text-sm",children:"No output canvas generated yet"}),o.jsx("p",{className:"text-xs mt-1",children:"Canvases created during the chat will appear here"})]})}):Y?o.jsx("div",{className:"h-full bg-white",children:o.jsxs("div",{className:"p-8 max-w-4xl mx-auto",children:[o.jsxs("div",{className:"mb-6 flex items-start gap-3",children:[o.jsx("div",{className:"text-gray-700 mt-1",children:xe(Y.fileType)}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-semibold text-gray-900 mb-1",children:Y.title}),o.jsx("p",{className:"text-xs text-gray-500",children:Y.description})]})]}),o.jsx("div",{className:"prose prose-sm max-w-none prose-lofi",dangerouslySetInnerHTML:{__html:Y.content}})]})}):o.jsx("div",{className:"h-full p-4",children:o.jsxs("div",{className:"mb-4",children:[o.jsx("h3",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",children:"List of Canvas"}),M.filter(G=>G.type==="artifact").length>0?o.jsx("div",{className:"space-y-2",children:M.filter(G=>G.type==="artifact").map((G,pe)=>o.jsxs("button",{onClick:()=>_(G.data),className:"w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-300 hover:border-gray-900 hover:shadow-sm transition-all text-left",children:[o.jsx("div",{className:"p-2 rounded-lg bg-gray-100 text-gray-700",children:xe(G.data.fileType)}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"text-sm font-medium text-gray-900",children:G.data.title}),o.jsx("div",{className:"text-xs text-gray-500 mt-0.5 line-clamp-1",children:G.data.description})]}),o.jsx("div",{className:"text-gray-500",children:o.jsx(Zo,{className:"w-4 h-4 rotate-180"})})]},pe))}):o.jsxs("div",{className:"text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300",children:[o.jsx(xn,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),o.jsx("p",{className:"text-sm",children:"No output canvas generated yet"}),o.jsx("p",{className:"text-xs mt-1",children:"Canvases created during the chat will appear here"})]})]})})})]})})]})]})};function JE({folder:n,chats:r,onBack:s,onSelectChat:a,onDeleteFolder:c,onRemoveChatFromFolder:d,onStartNewChatInFolder:p,onUpdateFolder:m}){const[h,v]=f.useState(!1),[y,x]=f.useState(n.name),[b,S]=f.useState(n.customInstructions||""),[N,C]=f.useState(n.memoriesScope),k=r.filter(R=>n.chatIds.includes(R.id)),P=()=>{m&&m(n.id,{name:y.trim()||n.name,customInstructions:b.trim(),memoriesScope:N}),v(!1)},j=()=>{const R={id:Date.now().toString(),name:"document.pdf",size:102400,uploadedAt:new Date};m&&m(n.id,{files:[...n.files||[],R]})},M=R=>{m&&m(n.id,{files:(n.files||[]).filter(I=>I.id!==R)})};return o.jsxs("div",{className:"flex-1 flex flex-col bg-gray-100",children:[o.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200",children:[o.jsx("button",{onClick:s,className:"p-1 rounded-lg hover:bg-gray-200 transition-colors text-gray-600",children:o.jsx(Zo,{className:"w-5 h-5"})}),o.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[o.jsx(Xd,{className:"w-5 h-5 text-gray-600"}),o.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:n.name})]}),o.jsxs(Oe,{variant:"ghost",size:"sm",onClick:()=>p?.(n.id),className:"gap-2",children:[o.jsx(Jo,{className:"w-4 h-4"}),"New Chat"]}),o.jsxs(Un,{children:[o.jsx(Gn,{asChild:!0,children:o.jsx(Oe,{variant:"ghost",size:"sm",children:o.jsx(as,{className:"w-4 h-4"})})}),o.jsxs(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:[o.jsxs(yt,{onClick:()=>v(!0),className:"hover:bg-gray-100",children:[o.jsx(Zd,{className:"w-4 h-4 mr-1"}),"Settings"]}),o.jsxs(yt,{onClick:()=>c(n.id),className:"text-red-500 hover:bg-gray-100",children:[o.jsx(ls,{className:"w-4 h-4 mr-1"}),"Delete Folder"]})]})]})]}),o.jsxs("div",{className:"flex-1 overflow-auto flex",children:[o.jsx("div",{className:"flex-1 px-4 py-8",children:o.jsxs("div",{className:"max-w-3xl mx-auto space-y-4",children:[o.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6",children:o.jsx("p",{className:"text-sm text-gray-700",children:"Chats within this folder will only reference files, custom instructions, and memories from within this folder."})}),k.length>0?k.map(R=>o.jsxs("div",{onClick:()=>a(R.id),className:"group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200",children:[o.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:o.jsx(Gs,{className:"w-5 h-5 text-gray-600"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:R.title}),o.jsx("p",{className:"text-sm text-gray-500 truncate",children:R.messages.length>0?R.messages[R.messages.length-1].content.slice(0,60)+"...":"No messages yet"})]}),o.jsxs(Un,{children:[o.jsx(Gn,{asChild:!0,children:o.jsx(Oe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-8 w-8 p-0",onClick:I=>I.stopPropagation(),children:o.jsx(as,{className:"w-4 h-4"})})}),o.jsx(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:o.jsxs(yt,{onClick:I=>{I.stopPropagation(),d(n.id,R.id)},className:"hover:bg-gray-100",children:[o.jsx(ls,{className:"w-4 h-4 mr-1"}),"Remove from folder"]})})]})]},R.id)):o.jsxs("div",{className:"text-center py-12",children:[o.jsx(Xd,{className:"w-12 h-12 text-gray-300 mx-auto mb-4"}),o.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"This folder is empty"}),o.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"Start a new chat or drag existing chats here to organize them"}),o.jsxs(Oe,{onClick:()=>p?.(n.id),className:"gap-2",children:[o.jsx(Jo,{className:"w-4 h-4"}),"Start New Chat"]})]})]})}),o.jsxs("div",{className:"w-80 border-l border-gray-200 bg-white px-4 py-8 space-y-6 overflow-y-auto",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-900",children:"Custom instructions"}),o.jsx("button",{onClick:()=>v(!0),className:"text-xs text-gray-600 hover:text-gray-900 underline",children:"Edit"})]}),n.customInstructions?o.jsx("button",{onClick:()=>v(!0),className:"w-full text-left text-sm text-gray-700 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors",children:o.jsx("div",{className:"line-clamp-3",children:n.customInstructions})}):o.jsx("button",{onClick:()=>v(!0),className:"w-full text-left text-sm text-gray-500 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors",children:"No custom instructions set. Click to add."})]}),o.jsx(os,{}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-900",children:"Files"}),o.jsxs("div",{className:"space-y-2",children:[(n.files||[]).length>0?(n.files||[]).map(R=>o.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded-lg group",children:[o.jsx(xn,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-gray-700 flex-1 truncate",children:R.name}),o.jsx("button",{onClick:()=>M(R.id),className:"p-1 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity",children:o.jsx(Js,{className:"w-3 h-3 text-gray-500"})})]},R.id)):o.jsx("p",{className:"text-sm text-gray-500 text-center py-4",children:"No files uploaded"}),o.jsxs(Oe,{variant:"outline",size:"sm",className:"w-full gap-2 mt-2",onClick:j,children:[o.jsx(qa,{className:"w-4 h-4"}),"Upload File"]})]})]})]})]}),o.jsx(Pl,{open:h,onOpenChange:v,children:o.jsxs(El,{className:"sm:max-w-lg bg-white border-2 border-gray-900",children:[o.jsx(oi,{children:o.jsx(ii,{className:"text-gray-900",children:"Folder Settings"})}),o.jsxs("div",{className:"space-y-6 py-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"folder-name",className:"text-gray-700",children:"Folder Name"}),o.jsx(zt,{id:"folder-name",value:y,onChange:R=>x(R.target.value),className:"bg-white border-gray-300"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{htmlFor:"custom-instructions",className:"text-gray-700",children:"Custom Instructions"}),o.jsx(wi,{id:"custom-instructions",placeholder:"Add custom instructions for chats in this folder...",value:b,onChange:R=>S(R.target.value),className:"bg-white border-gray-300 min-h-[100px]"}),o.jsx("p",{className:"text-xs text-gray-500",children:"These instructions will apply to all chats within this folder."})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{className:"text-gray-700",children:"Files"}),o.jsxs("div",{className:"border border-gray-200 rounded-lg p-3 space-y-2",children:[(n.files||[]).length>0?(n.files||[]).map(R=>o.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded",children:[o.jsx(xn,{className:"w-4 h-4 text-gray-500"}),o.jsx("span",{className:"text-sm text-gray-700 flex-1 truncate",children:R.name}),o.jsx("button",{onClick:()=>M(R.id),className:"p-1 hover:bg-gray-200 rounded",children:o.jsx(Js,{className:"w-3 h-3 text-gray-500"})})]},R.id)):o.jsx("p",{className:"text-sm text-gray-500 text-center py-2",children:"No files uploaded"}),o.jsxs(Oe,{variant:"outline",size:"sm",className:"w-full gap-2",onClick:j,children:[o.jsx(qa,{className:"w-4 h-4"}),"Upload File"]})]}),o.jsx("p",{className:"text-xs text-gray-500",children:"Files uploaded here will be referenced by chats in this folder."})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(it,{className:"text-gray-700",children:"Memories Scope"}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",children:[o.jsx("input",{type:"radio",name:"memories-scope",checked:N==="folder-only",onChange:()=>C("folder-only"),className:"mt-0.5"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-sm font-medium text-gray-900",children:"Folder only"}),o.jsx("div",{className:"text-xs text-gray-500",children:"Chats will only reference files and memories from within this folder"})]})]}),o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",children:[o.jsx("input",{type:"radio",name:"memories-scope",checked:N==="include-external",onChange:()=>C("include-external"),className:"mt-0.5"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-sm font-medium text-gray-900",children:"Include external"}),o.jsx("div",{className:"text-xs text-gray-500",children:"Chats can also reference memories and files from outside this folder"})]})]})]})]})]}),o.jsxs(Bv,{children:[o.jsx(Oe,{variant:"outline",onClick:()=>v(!1),children:"Cancel"}),o.jsx(Oe,{onClick:P,children:"Save Changes"})]})]})})]})}const Fa=[{target:'[data-tour="new-chat"]',title:"Start a New Chat",content:"Click here to start a fresh conversation with your personal assistant.",position:"right"},{target:'[data-tour="custom-assistants"]',title:"Custom Assistants",content:"Access specialised assistants tailored for specific tasks like PQ responses, procurement, and HR recruitment.",position:"right"},{target:'[data-tour="folders"]',title:"Organize with Folders",content:"Create folders to organize your chats by project or topic.",position:"right"},{target:'[data-tour="recent-chats"]',title:"Recent Chats",content:"Quickly access your chat history and continue where you left off.",position:"right"},{target:'[data-tour="chat-interface"]',title:"Chat Interface",content:"This is where you interact with your personal assistant — ask questions, upload files, and use tools.",position:"left"},{target:'[data-tour="settings"]',title:"Access Walkthrough Anytime",content:'You can access this walkthrough tour anytime by clicking the settings icon and selecting "Walkthrough Tour".',position:"top"}];function ZE({isOpen:n,onClose:r}){const[s,a]=f.useState(0),[c,d]=f.useState(null),[p,m]=f.useState({top:0,left:0}),h=()=>{localStorage.setItem("hasSeenWalkthrough","true"),r()};if(f.useEffect(()=>{if(!n){a(0);return}const N=Fa[s],C=document.querySelector(N.target);if(C){d(C);const k=C.getBoundingClientRect();let P=0,j=0;switch(N.position){case"right":P=k.top+k.height/2-80,j=k.right+20;break;case"left":P=k.top+k.height/2-80,j=k.left-320-20;break;case"top":P=k.top-250,j=k.left+k.width/2-160;break;case"bottom":P=k.bottom+20,j=k.left+k.width/2-160;break}m({top:P,left:j}),C.scrollIntoView({behavior:"smooth",block:"center"})}},[s,n]),!n)return null;const v=Fa[s],y=s===0,x=s===Fa.length-1,b=()=>{x?h():a(s+1)},S=()=>{y||a(s-1)};return o.jsxs(o.Fragment,{children:[c&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed inset-0 z-[9998]",onClick:h}),o.jsx("div",{className:"fixed z-[9999] pointer-events-none",style:{top:c.getBoundingClientRect().top-4,left:c.getBoundingClientRect().left-4,width:c.getBoundingClientRect().width+8,height:c.getBoundingClientRect().height+8,border:"3px solid white",borderRadius:"8px",boxShadow:"0 0 0 9999px rgba(0, 0, 0, 0.6)"}})]}),o.jsxs("div",{className:"fixed z-[10000] bg-white border-2 border-gray-900 rounded-lg shadow-xl p-6 w-80",style:{top:p.top,left:p.left},children:[o.jsxs("div",{className:"flex items-start justify-between mb-3",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:["Step ",s+1," of ",Fa.length]}),o.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:v.title})]}),o.jsx("button",{onClick:h,className:"p-1 rounded-lg hover:bg-gray-100 transition-colors",children:o.jsx(Js,{className:"w-4 h-4 text-gray-500"})})]}),o.jsx("p",{className:"text-sm text-gray-700 mb-6",children:v.content}),o.jsxs("div",{className:"flex items-center justify-end gap-2",children:[!y&&o.jsxs(Oe,{variant:"ghost",size:"sm",onClick:S,className:"gap-1",children:[o.jsx(Lw,{className:"w-4 h-4"}),"Previous"]}),o.jsxs(Oe,{size:"sm",onClick:b,className:"bg-gray-900 hover:bg-gray-800 text-white gap-1",children:[x?"Finish":"Next",!x&&o.jsx(Xs,{className:"w-4 h-4"})]})]})]})]})}const eR={id:"feature-overview",title:"Feature Overview Demo",description:"Showcasing platform capabilities and documentation",colorScheme:"indigo",messages:[{role:"user",content:{text:"What are the latest features in the platform?"}},{role:"bot",content:[{type:"thinking",thoughts:["Analyzing your question...","Checking latest updates...","Preparing comprehensive overview..."],timingMs:1500},{type:"text",content:"I'll provide you with an overview of our latest features. Let me gather the most up-to-date information for you."},{type:"assistantSwitch",message:"Documentation Assistant"},{type:"text",content:`Here's a detailed breakdown of our new capabilities:

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
</div>`}]}]},tR={id:"customer-support",title:"Customer Support Demo",description:"Handling customer inquiries and troubleshooting",colorScheme:"indigo",messages:[{role:"bot",content:[{type:"text",content:"Hello! I'm your Customer Support Assistant. I'm here to help you with any issues or questions you may have. How can I assist you today?"}]},{role:"user",content:{text:"I'm having trouble logging into my account"}},{role:"bot",content:[{type:"thinking",thoughts:["Identifying the issue...","Checking common login problems...","Preparing troubleshooting steps..."],timingMs:1500},{type:"text",content:"I understand you're having trouble logging in. Let me help you resolve this quickly."},{type:"text",content:`Here are some common solutions:

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
</div>`}]}]},nR={id:"feedback-collection",title:"Feedback Collection Demo",description:"Gathering user feedback and suggestions",colorScheme:"indigo",messages:[{role:"user",content:{text:"I'd like to provide feedback about the platform"}},{role:"bot",content:[{type:"thinking",thoughts:["Great! Preparing feedback form...","Setting up survey questions..."],timingMs:1200},{type:"text",content:"Thank you for wanting to share your feedback! Your input is invaluable in helping us improve our platform. Please take a moment to fill out this survey."},{type:"artifact",title:"User Feedback Survey",fileType:"form",description:"Share your experience and suggestions",interactive:!0,content:`<div class="p-6">
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
</div>`}]}]},rR={id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting Demo",description:"AI-assisted candidate screening and shortlisting for government recruitment with system integrations",colorScheme:"indigo",messages:[{role:"bot",content:[{type:"text",content:"Hello! I'm the Workday Candidate Shortlister Assistant. I can help you efficiently screen and shortlist candidates from your Workday HCM system using AI-powered analysis. What can I do for you today?"}]},{role:"user",content:{text:"Hi! I just received 127 applications for our Senior Software Engineer position (Req ID: GTA-2024-SE-089). I need to shortlist about 10 candidates by end of day tomorrow. Can you help me get started?"}},{role:"bot",content:[{type:"thinking",thoughts:["Analyzing job requisition GTA-2024-SE-089...","Connecting to Workday HCM system...","Retrieving candidate applications...","Preparing shortlisting workflow..."],timingMs:1e3},{type:"text",content:"Good morning, Michelle! I'd be happy to help you with this shortlisting. Let me pull up the candidate data from Workday."},{type:"artifact",title:"Workday System Integration - Data Retrieval",fileType:"document",description:"Connecting to Workday HCM to retrieve candidate profiles",interactive:!1,content:`<div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-300">
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
</div>`},{type:"text",content:"Have a productive day! 🎯",delayMs:800}]}]},sR={id:"procurement-rfq",title:"Procurement RFQ to AOR Demo",description:"Request for Quotation process leading to Approval of Requirement",colorScheme:"indigo",messages:[{role:"user",content:{text:"I want to create a RFQ for buying creative software for my team",autoSend:!0}},{role:"bot",content:[{type:"thinking",thoughts:["Understanding procurement request...","Preparing RFQ template...","Checking procurement guidelines..."],timingMs:1200},{type:"text",content:"I'll help you create a Request for Quotation (RFQ) for creative software. Let me prepare the RFQ form with the necessary details to obtain quotes from at least 3 vendors."},{type:"artifact",title:"Request for Quotation (RFQ) Form",fileType:"form",description:"RFQ for Creative Software Purchase",interactive:!0,content:`<div class="p-6">
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
</div>`}]},{role:"user",content:{formSubmission:!0},delayMs:1300},{role:"bot",content:[{type:"thinking",thoughts:["Processing RFQ details...","Generating quotation requests...","Contacting vendor database..."],timingMs:1500},{type:"text",content:"Perfect! I've generated your RFQ and sent it to 3 qualified vendors. Here's the summary of quotes received:"},{type:"assistantSwitch",message:"Procurement Officer Assistant"},{type:"artifact",title:"Vendor Quotations Comparison",fileType:"document",description:"3 Quotes Received for Creative Software",interactive:!1,content:`<div class="p-6">
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
</div>`},{type:"text",content:"Would you like to proceed with Vendor A and generate the Approval of Requirement (AOR) document?"}]},{role:"user",content:{text:"Yes, proceed with Vendor A and generate the AOR"}},{role:"bot",content:[{type:"thinking",thoughts:["Preparing AOR document...","Compiling procurement justification...","Generating approval workflow..."],timingMs:1500},{type:"text",content:"Excellent! I'm generating your Approval of Requirement (AOR) document with all the necessary justifications and supporting documentation."},{type:"artifact",title:"Approval of Requirement (AOR)",fileType:"document",description:"Procurement Approval Document",interactive:!1,content:`<div class="p-6">
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
• Current status: Pending Department Head review`}]}]},oR={id:"marketing-software-aor",title:"Marketing Software AOR Demo",description:"AI-assisted AOR drafting for marketing automation software procurement",colorScheme:"blue",messages:[{role:"user",content:{text:`I need help drafting an AOR (Approval of Requirement) to procure marketing software for my 15-person team. Our budget is $30,000-$35,000. We need software to create marketing materials for campaigns.

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
</div>`}]},{role:"user",content:{text:"This was so much easier than I expected. Thanks!"}},{role:"bot",content:[{type:"text",content:"You're welcome! Good luck with the approval - I'll be here if you need help with future procurements."}]}]},iR={id:"pq-response-mnd-v3",title:"PQ Response - MND Housing",description:"AI-assisted PQ response research and drafting for policy officer",colorScheme:"purple",messages:[{role:"bot",content:[{type:"text",content:`Good morning, Sarah! 👋

Welcome! I'm your Parliamentary Question Assistant, here to help you with your PQ response drafting.

What would you like help with today?`}]},{role:"user",content:{text:`Hi, I need to respond to this PQ:

"To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers."`}},{role:"bot",content:[{type:"text",content:`Got it. This is a two-part question on BTO waiting times and policy measures. Let me start by doing comprehensive research across multiple sources to help you draft a strong response. This will take a few minutes.

I'll search:
1. Past similar PQs from Hansard
2. Your department's internal knowledge base
3. Recent news coverage and ministerial statements on housing policy
4. Relevant statistics on BTO waiting times

Let's begin:`},{type:"assistantSwitch",message:"Deep Research Assistant"},{type:"thinking",thoughts:["Searching Hansard for past PQs on BTO waiting times...","Analyzing previous ministerial responses on housing policies...","Searching internal MND knowledge base for policy positions...","Retrieving latest BTO statistics by town and flat type...","Scanning recent news coverage on housing announcements...","Cross-referencing Minister's public statements...","Identifying policy measures and initiatives...","Compiling data on waiting time trends..."],timingMs:1e3},{type:"artifact",title:"Research Summary",fileType:"document",description:"Comprehensive research findings on BTO waiting times",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
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

Are you satisfied with the research findings? Would you like me to proceed with creating a structured outline for the PQ response?`}]},{role:"user",content:{text:"Okay. Please proceed with the outline."}},{role:"bot",content:[{type:"assistantSwitch",message:"Parliamentary Question Assistant"},{type:"text",content:"Great! Let me create a structured outline showing how I'll draft the response, with references to the sources I'll be using."},{type:"thinking",thoughts:["Creating response outline based on research findings...","Mapping statistics to response sections...","Identifying source references for each point...","Structuring according to PQ format..."],timingMs:1e3},{type:"artifact",title:"Response Outline with Source References",fileType:"document",description:"Structured outline showing how the response will be built",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
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
</div>`},{type:"text",content:"Here's the outline showing exactly how I'll structure the response. Each point is backed by specific sources from our research. Does this structure look good to you? Would you like me to proceed with drafting the full response?"}]},{role:"user",content:{text:"It looks good but 4. Prime Location Public Housing (PLH) Model seems to be irrelevant. Remove that point from the outline and let me see how it looks"}},{role:"bot",content:[{type:"text",content:"Good catch! You're right - PLH is more about providing housing options rather than directly reducing waiting times. Let me remove that point and update the outline."},{type:"thinking",thoughts:["Removing PLH point from Part (b)...","Renumbering remaining measures...","Ensuring flow remains coherent...","Updating quality assurance checklist..."],timingMs:800},{type:"artifact",title:"Revised Response Outline (Updated)",fileType:"document",description:"Updated outline with PLH removed",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
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
</div>`},{type:"text",content:"Much better! Now the outline is more focused on measures that directly address waiting times. Part (b) now has 3 concrete policy measures plus the closing statement. Ready to proceed with drafting?"}]},{role:"user",content:{text:"Yes please. Can you draft a response following our usual format?"}},{role:"bot",content:[{type:"text",content:"Absolutely! Let me draft the PQ response for you. I'll follow MND's standard format and ensure consistency with past responses."},{type:"thinking",thoughts:["Loading MND PQ response template...","Structuring two-part answer format...","Incorporating statistics from research...","Aligning language with past ministerial responses...","Ensuring formal parliamentary tone...","Including policy measures and initiatives...","Cross-checking against internal guidelines...","Formatting for parliamentary submission..."],timingMs:1e3},{type:"artifact",title:"Draft PQ Response",fileType:"document",description:"Initial draft of Parliamentary Question response",interactive:!0,content:`<div class="p-8 bg-white max-w-4xl mx-auto">
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
</div>`},{type:"text",content:"Would you like me to adjust anything?"}]},{role:"user",content:{text:"This is good, but can you make it more formal and succinct? PQ responses need to be quite formal and to the point."}},{role:"bot",content:[{type:"text",content:"Absolutely, let me tighten this up and make it more formal."},{type:"thinking",thoughts:["Adjusting to formal parliamentary tone...","Making response more succinct...","Removing unnecessary phrases...","Tightening language..."],timingMs:1e3},{type:"artifact",title:"Revised PQ Response (Final)",fileType:"document",description:"Final formal and succinct PQ response",interactive:!0,content:`<div class="p-8 bg-white max-w-4xl mx-auto">
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
</div>`},{type:"text",content:"Much better! That's the right tone and length."}]},{role:"user",content:{text:"Looks good. Can you also add a brief cover note I can send to my director when I submit this for review?"}},{role:"bot",content:[{type:"text",content:"Of course! Let me draft a concise cover note for your director."},{type:"thinking",thoughts:["Drafting cover note for director review...","Highlighting key points and sources...","Including clearance timeline...","Professional but concise format..."],timingMs:800},{type:"artifact",title:"Cover Note to Director",fileType:"document",description:"Submission cover note for director review",interactive:!0,content:`<div class="p-8 bg-white max-w-4xl mx-auto">
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
</div>`},{type:"text",content:"This gives your director everything they need for a quick review!"}]},{role:"user",content:{text:"Can you now package everything - the PQ response, cover note, and all the supporting annexes?"}},{role:"bot",content:[{type:"text",content:"Absolutely! Let me compile everything for you."},{type:"thinking",thoughts:["Generating final PQ response document (.docx)...","Creating cover note (.docx)...","Compiling Annex A: Past PQ references with links...","Compiling Annex B: Statistics documentation...","Creating Annex C: News coverage summary...","Formatting all documents to MND standards...","Preparing submission package..."],timingMs:1e3},{type:"artifact",title:"Complete Submission Package",fileType:"document",description:"All documents ready for download",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
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

For CC, it's common to include your team lead or any colleagues working on housing policy. Would you like to add anyone?`}]},{role:"user",content:{text:"Can you send it now? Just CC jenny.lim@mnd.gov.sg (my team lead)."}},{role:"bot",content:[{type:"text",content:"Of course! Let me send the email now with all the attachments."},{type:"thinking",thoughts:["Composing email to michael.tan@mnd.gov.sg...","Adding CC to jenny.lim@mnd.gov.sg...","Attaching all 6 documents from submission package...","Verifying attachments are properly formatted...","Sending email..."],timingMs:1e3},{type:"artifact",title:"Email Sent Confirmation",fileType:"document",description:"Email delivery confirmation",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
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

Feel free to come back if you need help with any revisions or have other PQs to work on. Good luck with the clearance process!`}]}]},aR={id:"pq-response-mnd-v2",title:"PQ Response - MND Housing (V2)",description:"Enhanced PQ response workflow with contextual assistance and form-based inputs",colorScheme:"purple",messages:[{role:"bot",content:[{type:"text",content:`Good morning! 👋

Welcome to the PQ AI Assistant. I'm here to help you draft Parliamentary Question responses efficiently.

Do you have the Q&A text ready, or would you like to start from scratch?`}]},{role:"user",content:{text:"Yes, I have the PQ text ready."}},{role:"bot",content:[{type:"text",content:"Great! Please paste your PQ text below, and I'll help you draft a comprehensive response."},{type:"artifact",title:"PQ Input Form",fileType:"form",description:"Enter your Parliamentary Question details",interactive:!0,content:`<div class="p-6">
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
</div>`}]},{role:"user",content:{text:"[Form submitted with PQ details]"}},{role:"bot",content:[{type:"text",content:"Perfect! I've received your PQ. Let me analyze the question structure and identify what we need to address."},{type:"thinking",thoughts:["Analyzing PQ format and structure...","Identifying question components: (a) and (b)...","Checking classification requirements...","Determining research scope..."],timingMs:2e3},{type:"text",content:`✅ **PQ Analysis Complete**

**Question Type:** Two-part question
- Part (a): Statistical data request (BTO waiting times by town)
- Part (b): Policy measures inquiry

**Classification:** Unclassified
**Ministry:** MND - Housing Policy Division

I'll now search for relevant data and past responses. Would you like me to:
1. **Search for similar past PQs** (Recommended - helps maintain consistency)
2. **Skip to data search** (Faster, but may miss important precedents)`}]},{role:"user",content:{text:"Yes, please search for similar past PQs first."}},{role:"bot",content:[{type:"text",content:"Excellent choice. Let me search our Hansard database and internal knowledge base for similar questions."},{type:"thinking",thoughts:["Searching Hansard database for BTO-related PQs...","Filtering by ministry (MND) and topic (housing)...","Analyzing past ministerial responses...","Cross-referencing policy positions...","Identifying response patterns and language..."],timingMs:3e3},{type:"assistantSwitch",message:"Deep Research Assistant"},{type:"text",content:"Research complete! I found relevant precedents and data. Here's what I discovered:"},{type:"artifact",title:"Past PQ Analysis Report",fileType:"document",description:"Similar PQs and response patterns",interactive:!1,content:`<div class="p-6 bg-white">
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
**Option 3:** Search for additional data/evidence before drafting`}]},{role:"user",content:{text:"Option 1 - Please draft a complete response."}},{role:"bot",content:[{type:"text",content:"Excellent! I'll now draft your PQ response, incorporating all the research findings and following MND's standard format."},{type:"thinking",thoughts:["Loading MND PQ response template...","Structuring two-part answer format...","Incorporating verified statistics (3.9 years average)...","Aligning language with past ministerial responses...","Ensuring empathetic tone for waiting time concerns...","Including all four policy measures...","Cross-checking against internal guidelines...","Formatting for parliamentary submission..."],timingMs:2500},{type:"text",content:"Your draft PQ response is ready! I've created multiple versions for you to choose from:"},{type:"artifact",title:"Draft PQ Response - Version 1 (Recommended)",fileType:"document",description:"Formal, concise parliamentary response",interactive:!1,content:`<div class="p-8 bg-white max-w-5xl mx-auto">
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

Which version would you like to proceed with, or would you like me to create a hybrid version?`}]},{role:"user",content:{text:"Version 1 looks good. Can you now help me prepare the submission package?"}},{role:"bot",content:[{type:"text",content:"Excellent choice! Let me prepare the complete submission package with all supporting documents."},{type:"thinking",thoughts:["Generating final PQ response document (.docx)...","Creating cover note for director...","Compiling Annex A: Past PQ references with Hansard links...","Compiling Annex B: Statistical documentation...","Creating Annex C: Policy alignment checklist...","Formatting all documents to MND standards...","Preparing submission package..."],timingMs:2e3},{type:"artifact",title:"Complete Submission Package",fileType:"document",description:"Ready-to-submit PQ response package",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
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
3. **Make final edits** before submission`}]},{role:"user",content:{text:"Option 1 - Please send it via email to my director."}},{role:"bot",content:[{type:"text",content:"Perfect! Let me draft a professional email for your submission."},{type:"thinking",thoughts:["Composing professional email...","Summarizing key points for director...","Preparing attachment list..."],timingMs:1200},{type:"text",content:"I've drafted your submission email. Please review it below:"},{type:"artifact",title:"Email Drafted",fileType:"document",description:"Submission email to director",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
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
</div>`},{type:"text",content:"The email draft is ready! Would you like to review it before sending?"}]},{role:"user",content:{text:"This email is too long. Can you just attach the documents instead and keep the email brief?"}},{role:"bot",content:[{type:"text",content:"Great suggestion! Let me create a much shorter email that simply attaches the documents. The detailed information will be in the attached files."},{type:"thinking",thoughts:["Drafting concise cover email...","Moving details to attachments...","Preparing brief professional message..."],timingMs:1e3},{type:"artifact",title:"Revised Email (Brief Version)",fileType:"document",description:"Concise submission email with attachments",interactive:!1,content:`<div class="p-6 bg-white max-w-4xl mx-auto">
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
- CC recipients (optional)`}]},{role:"user",content:{text:"Michael Tan, michael.tan@mnd.gov.sg, CC rachel.lim@mnd.gov.sg"}},{role:"bot",content:[{type:"text",content:"Perfect! Sending your PQ submission now..."},{type:"thinking",thoughts:["Attaching all 5 documents (349 KB total)...","Verifying recipients: michael.tan@mnd.gov.sg, rachel.lim@mnd.gov.sg...","Formatting professional email...","Sending email..."],timingMs:1500},{type:"text",content:`✅ **Email sent successfully!**

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

Feel free to come back anytime you need help with future PQs. Good luck! 😊`}]}]},lR={id:"canvas-demo",title:"Canvas Generation Demo",description:"Demonstrating canvas creation and versioning",colorScheme:"blue",classificationType:"rsn",messages:[{role:"user",content:{text:"Help me generate a 1 pager plan for launching a new government digital service",autoSend:!0}},{role:"bot",content:[{type:"thinking",thought:"Analyzing requirements for the 1-pager plan...",reasoning:["Analyzing the user's request and identifying key requirements...","Breaking down the components needed for a government digital service launch plan...","Considering stakeholder engagement, timeline, and governance requirements...","Structuring the plan into clear, actionable sections...","Preparing to create a comprehensive yet concise 1-pager document..."],timingMs:4500},{type:"text",content:"I'll create a comprehensive 1-pager plan for your government digital service launch. This will include key sections covering objectives, timeline, stakeholders, and success metrics."},{type:"artifact",title:"Digital Service Launch Plan",fileType:"document",description:"1-pager plan for government digital service launch",interactive:!0,version:1,content:`<div class="p-6 space-y-4">
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
</div>`}]}]};function cR(){const[n,r]=f.useState(!1),[s,a]=f.useState(!1),[c,d]=f.useState({name:"John Doe",email:"john.doe@tech.gov.sg",role:"Product Manager",agency:"GovTech"}),[p,m]=f.useState([]),[h,v]=f.useState(null),[y,x]=f.useState(null),[b,S]=f.useState("new-rsn"),[N,C]=f.useState(!0),[k,P]=f.useState("light"),[j,M]=f.useState("modern"),[R,I]=f.useState("home"),[W,z]=f.useState("desk"),[V,re]=f.useState(!1),[Q,de]=f.useState(0),[ie,me]=f.useState([]),[ue,fe]=f.useState(null),[ee,Y]=f.useState([]),[_,H]=f.useState([]),[J,A]=f.useState(!1),[U,B]=f.useState(!1),[q,oe]=f.useState(()=>localStorage.getItem("hasSeenWalkthrough")==="true");f.useEffect(()=>{const xe=Pe=>{Pe.shiftKey&&Pe.metaKey&&Pe.key==="o"&&(Pe.preventDefault(),le()),Pe.metaKey&&Pe.key==="k"&&(Pe.preventDefault(),A(!0))};return window.addEventListener("keydown",xe),()=>window.removeEventListener("keydown",xe)},[]),f.useEffect(()=>{n&&window.history.pushState({authenticated:!0},"");const xe=()=>{r(!1),a(!1)};return window.addEventListener("popstate",xe),()=>window.removeEventListener("popstate",xe)},[n]);const K=y&&b===y.id?y:h&&b===h.id?h:b.startsWith("new-")?{id:b,title:b==="new-cce-sn"?"C(CE) Chat":b==="new-cce-sh"?"SH Chat":"New Chat",messages:[],createdAt:new Date,classificationType:b==="new-cce-sn"?"cce-sn":b==="new-cce-sh"?"cce-sh":"rsn"}:p.find(xe=>xe.id===b),O=N,X=async xe=>{if(!K)return;let Pe=p,_e=b;const Qe={id:Date.now().toString(),role:"user",content:xe,timestamp:new Date};if(y&&b===y.id)x({...y,messages:[...y.messages,Qe]});else if(b.startsWith("preview-")&&h){const Ve=Date.now().toString();Pe=[{...h,id:Ve,messages:[...h.messages,Qe],classificationType:"rsn"},...p],m(Pe),v(null),S(Ve),_e=Ve}else if(b.startsWith("new-")){const Ve=Date.now().toString(),At={...K,id:Ve,title:xe.slice(0,30),messages:[Qe],classificationType:K.classificationType};K.classificationType==="cce-sn"||K.classificationType==="cce-sh"?(x(At),_e=Ve,S(Ve)):(Pe=[At,...p],m(Pe),S(Ve),_e=Ve)}else Pe=p.map(Ve=>{if(Ve.id===b){const At=[...Ve.messages,Qe];return{...Ve,messages:At,title:Ve.messages.length===0?xe.slice(0,30):Ve.title}}return Ve}),m(Pe);setTimeout(()=>{const Ve=y&&_e===y.id?y:Pe.find(G=>G.id===_e);if(!Ve)return;let At=dR(xe,Ve.assistantType,c),Ht=!1,en="";Ve.assistantType==="transcribe"&&xe.includes("[Uploaded file:")&&(At="I've transcribed your audio file and generated the meeting minutes.",Ht=!0,en="Meeting_Minutes_"+new Date().toLocaleDateString().replace(/\//g,"-")+".doc");const wt={id:(Date.now()+1).toString(),role:"assistant",content:At,timestamp:new Date,hasFile:Ht,fileName:en};y&&_e===y.id?x(G=>G&&{...G,messages:[...G.messages,wt]}):m(G=>G.map(pe=>pe.id===_e?{...pe,messages:[...pe.messages,wt]}:pe))},500)},le=()=>{v(null),x(null),S("new-rsn"),I("home"),de(xe=>xe+1)},he=(xe,Pe,_e)=>{if(xe.toLowerCase().includes("generate")){Xe("canvas-demo");return}const Qe=Date.now().toString(),Ve={id:Qe,role:"user",content:xe,timestamp:new Date},At={id:Qe,title:xe.slice(0,30),messages:[Ve],createdAt:new Date,classificationType:Pe||"rsn",isIncognito:_e||!1},Ht=Pe==="cce-sn"||Pe==="cce-sh";if(_e||Ht)x(At);else{const en=[At,...p];m(en)}S(Qe),I("chat"),setTimeout(()=>{const en={id:(Date.now()+1).toString(),role:"assistant",content:"This is a simulated response for demonstration purposes.",timestamp:new Date};_e||Ht?x(wt=>wt&&wt.id===Qe?{...wt,messages:[...wt.messages,en]}:wt):m(wt=>wt.map(G=>G.id===Qe?{...G,messages:[...G.messages,en]}:G))},500)},Ee=()=>{S("new-cce-sn"),I("chat")},Re=()=>{S("new-cce-sh"),I("chat")},Z=xe=>({"email-drafter":"I'll help you draft professional emails. What kind of email would you like to write?",query:"Ask me anything! I can help you find information and answer your questions.",transcribe:"Upload an audio file to generate meeting minutes.","deep-research-ai":"I can conduct comprehensive research for you. What topic would you like me to explore?",powerpoint:"I can help you create icons and pictures for your PowerPoint slides. What would you like me to generate?",parliamentary:"I'll help you prepare PQ responses and talking points. What do you need assistance with?",memo:"I can draft inter-agency correspondence for whole-of-government initiatives. What memo do you need?","social-media-campaign":"I'll help you plan and optimize social media campaigns. What's your campaign about?","content-calendar":"I can help you organize and schedule content across channels. What's your timeline?","brand-guidelines":"I'll ensure your content aligns with government branding standards. What do you need to review?","market-research":"I can analyze market trends and public sentiment. What would you like to research?","interview-questions":"I'll generate relevant interview questions. What position are you hiring for?","onboarding-guide":"I can create personalized onboarding plans. Tell me about your new hire.","performance-review":"I'll help you draft performance reviews and development plans. Who are you reviewing?",budget:"I can help with budget allocations and financial reports. What's your budget planning needs?",policy:"I'll help you draft policy papers and cabinet memos. What policy document do you need?",procurement:"I can generate tender documents and evaluation matrices. What procurement need do you have?"})[xe]||"Hello! How can I assist you today?",je=(xe,Pe)=>{if(Pe==="workday-shortlister"){Xe("hr-candidate-shortlisting");return}if(Pe==="parliamentary-question"){Xe("pq-response-mnd");return}const _e=`preview-${Date.now()}`,Qe={id:Date.now().toString(),role:"assistant",content:Z(Pe),timestamp:new Date};v({id:_e,title:xe,messages:[Qe],createdAt:new Date,assistantType:Pe}),S(_e),I("chat")},Ge=xe=>{const Pe=p.filter(_e=>_e.id!==xe);m(Pe),me(ie.map(_e=>({..._e,chatIds:_e.chatIds.filter(Qe=>Qe!==xe)}))),b===xe&&(Pe.length>0?S(Pe[0].id):le())},pt=(xe,Pe)=>{m(p.map(_e=>_e.id===xe?{..._e,title:Pe}:_e))},vt=xe=>{v(null),x(null),S(xe),I("chat")},at=()=>{a(!0),q||setTimeout(()=>{B(!0)},500)},dn=()=>{r(!1),a(!1),d({name:"John Doe",email:"john.doe@tech.gov.sg",role:"Product Manager",agency:"GovTech"}),m([]),I("home"),S("new-rsn")},Vt=(xe,Pe)=>{d(xe),r(!0),Pe&&(a(!0),m([]))},Xe=xe=>{_.includes(xe)||H([..._,xe]),S(`sim-${xe}`),I("chat")},$t=xe=>{const Pe={id:Date.now().toString(),name:xe,createdAt:new Date,chatIds:[],memoriesScope:"folder-only"};me([...ie,Pe]),fe(Pe.id),I("folder")},ce=xe=>{Y(Pe=>Pe.includes(xe)?Pe.filter(_e=>_e!==xe):[...Pe,xe])},Je=(xe,Pe)=>{me(ie.map(_e=>_e.id===Pe&&!_e.chatIds.includes(xe)?{..._e,chatIds:[..._e.chatIds,xe]}:_e))},et=xe=>{const Pe=Date.now().toString();m([{id:Pe,title:"New Chat",messages:[],createdAt:new Date},...p]),me(ie.map(Qe=>Qe.id===xe?{...Qe,chatIds:[...Qe.chatIds,Pe]}:Qe)),S(Pe),I("chat")},Ke=(xe,Pe)=>{me(ie.map(_e=>_e.id===xe?{..._e,...Pe}:_e))},Xn=xe=>{fe(xe),I("folder")},un=xe=>{me(ie.filter(Pe=>Pe.id!==xe)),ue===xe&&(fe(null),I("home"))},ur=(xe,Pe)=>{me(ie.map(_e=>_e.id===xe?{..._e,chatIds:_e.chatIds.filter(Qe=>Qe!==Pe)}:_e))},_n=ue?ie.find(xe=>xe.id===ue):null,Dn=b.startsWith("sim-"),Zt=Dn?b==="sim-feature-overview"?eR:b==="sim-customer-support"?tR:b==="sim-feedback-collection"?nR:b==="sim-hr-candidate-shortlisting"?rR:b==="sim-procurement-rfq"?sR:b==="sim-marketing-software-aor"?oR:b==="sim-pq-response-mnd"?iR:b==="sim-pq-response-mnd-v2"?aR:b==="sim-canvas-demo"?lR:null:null;return n?s?o.jsxs("div",{className:"flex h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-950 dark:to-blue-950",children:[o.jsx(qP,{isOpen:O,onClose:()=>C(!N),chats:p,activeChatId:b,onSelectChat:vt,onNewChat:le,onNewCCESNChat:Ee,onNewSHChat:Re,onDeleteChat:Ge,onRenameChat:pt,colorTheme:k,fontStyle:j,onColorThemeChange:P,onFontStyleChange:M,onSettingsOpen:()=>re(!0),mode:W,onModeChange:z,activeView:R,onExploreClick:()=>{I("explore"),S("new-rsn")},onStudioClick:()=>I("studio"),onHomeClick:()=>{I("home"),S("new-rsn")},onViewChange:xe=>{I(xe),xe!=="chat"&&S("new-rsn")},userProfile:c,onSignOut:dn,onSelectSimulation:Xe,folders:ie,onCreateFolder:$t,onSelectFolder:Xn,onStartAssistantChat:je,onAddChatToFolder:Je,searchModalOpen:J,onSearchModalChange:A,onWalkthroughStart:()=>B(!0),viewedSimulations:_}),R==="chat"?Dn&&Zt?o.jsx("div",{className:"flex-1 flex flex-col",children:o.jsx(oh,{mode:"simulator",data:Zt},b)}):o.jsx("div",{className:"flex-1 flex flex-col",children:o.jsx(oh,{mode:"interactive",title:K?.title,classificationType:K?.classificationType,interactiveMessages:K?.messages||[],onSendMessage:X,chatId:K?.id,onRenameChat:pt,isNewChat:b.startsWith("new-"),isIncognito:K?.isIncognito,folders:ie,onMoveToFolder:Je,bookmarkedAssistants:ee,assistantType:K?.assistantType},b)}):R==="explore"?o.jsx(YP,{colorTheme:k,fontStyle:j,onStartAssistantChat:je,userRole:c?.role,bookmarkedAssistants:ee,onToggleBookmark:ce}):R==="studio"?o.jsx(XP,{colorTheme:k,fontStyle:j}):R==="library"?o.jsx(W3,{colorTheme:k,fontStyle:j}):R==="chats"?o.jsx(U3,{colorTheme:k,fontStyle:j,chats:p,onSelectChat:vt,onDeleteChat:Ge,onSelectSimulation:Xe}):R==="folder"&&_n?o.jsx(JE,{folder:_n,chats:p,onBack:()=>I("home"),onSelectChat:vt,onDeleteFolder:un,onRemoveChatFromFolder:ur,onStartNewChatInFolder:et,onUpdateFolder:Ke}):o.jsx(Z3,{colorTheme:k,fontStyle:j,onSelectChat:vt,onNewChat:le,onStartChat:he,isSidebarOpen:N,userProfile:c,onSelectSimulation:Xe,bookmarkedAssistants:ee},Q),o.jsx(SE,{colorTheme:k,fontStyle:j,onColorThemeChange:P,onFontStyleChange:M,userProfile:c,onUpdateProfile:d,open:V,onOpenChange:re}),o.jsx(ZE,{isOpen:U,onClose:()=>B(!1)})]}):o.jsx(iE,{userProfile:c,onUpdateProfile:d,onComplete:at}):o.jsx(eE,{onLogin:Vt})}function dR(n,r,s){if(r==="transcribe"&&(n.toLowerCase().includes("what was the follow up")||n.toLowerCase().includes("follow-up")||n.toLowerCase().includes("action")))return`Based on the meeting minutes, here are the follow-up actions:

1. **John** - Prepare Q3 budget proposal by Friday
2. **Sarah** - Schedule follow-up meeting with design team
3. **Mike** - Review and approve the marketing materials by EOW
4. **Team** - Complete customer feedback survey analysis by next Monday
5. **Lisa** - Send out meeting notes to all stakeholders

All action items have been assigned with clear deadlines.`;const a=s?`Hi ${s.name}! `:"",c=s?.role?` As a ${s.role}, `:"",d=[`${a}I'm a demo AI assistant. In a real implementation, this would connect to an AI API like OpenAI's GPT model to generate responses.${c}you might find this helpful for your work.`,`${a}This is a mock response. To get real AI responses, you would need to integrate with an AI service.`,`${a}I understand you said: "`+n+'". This is a simulated response for demonstration purposes.',`Thanks for your message${s?", "+s.name:""}! This interface mimics ChatGPT, but the responses are pre-generated for demo purposes.`];return d[Math.floor(Math.random()*d.length)]}fw.createRoot(document.getElementById("root")).render(o.jsx(cR,{}));
