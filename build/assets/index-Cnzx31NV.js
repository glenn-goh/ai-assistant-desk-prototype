function ow(n,r){for(var s=0;s<r.length;s++){const a=r[s];if(typeof a!="string"&&!Array.isArray(a)){for(const c in a)if(c!=="default"&&!(c in n)){const d=Object.getOwnPropertyDescriptor(a,c);d&&Object.defineProperty(n,c,d.get?d:{enumerable:!0,get:()=>a[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function ih(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Cd={exports:{}},Vo={},kd={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function iw(){if(Gm)return He;Gm=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,C={};function k(A,U,B){this.props=A,this.context=U,this.refs=C,this.updater=B||S}k.prototype.isReactComponent={},k.prototype.setState=function(A,U){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,U,"setState")},k.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function P(){}P.prototype=k.prototype;function j(A,U,B){this.props=A,this.context=U,this.refs=C,this.updater=B||S}var M=j.prototype=new P;M.constructor=j,N(M,k.prototype),M.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,W={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function V(A,U,B){var Q,oe={},q=null,O=null;if(U!=null)for(Q in U.ref!==void 0&&(O=U.ref),U.key!==void 0&&(q=""+U.key),U)I.call(U,Q)&&!z.hasOwnProperty(Q)&&(oe[Q]=U[Q]);var X=arguments.length-2;if(X===1)oe.children=B;else if(1<X){for(var le=Array(X),he=0;he<X;he++)le[he]=arguments[he+2];oe.children=le}if(A&&A.defaultProps)for(Q in X=A.defaultProps,X)oe[Q]===void 0&&(oe[Q]=X[Q]);return{$$typeof:n,type:A,key:q,ref:O,props:oe,_owner:W.current}}function re(A,U){return{$$typeof:n,type:A.type,key:U,ref:A.ref,props:A.props,_owner:A._owner}}function K(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function de(A){var U={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(B){return U[B]})}var ie=/\/+/g;function me(A,U){return typeof A=="object"&&A!==null&&A.key!=null?de(""+A.key):U.toString(36)}function ue(A,U,B,Q,oe){var q=typeof A;(q==="undefined"||q==="boolean")&&(A=null);var O=!1;if(A===null)O=!0;else switch(q){case"string":case"number":O=!0;break;case"object":switch(A.$$typeof){case n:case r:O=!0}}if(O)return O=A,oe=oe(O),A=Q===""?"."+me(O,0):Q,R(oe)?(B="",A!=null&&(B=A.replace(ie,"$&/")+"/"),ue(oe,U,B,"",function(he){return he})):oe!=null&&(K(oe)&&(oe=re(oe,B+(!oe.key||O&&O.key===oe.key?"":(""+oe.key).replace(ie,"$&/")+"/")+A)),U.push(oe)),1;if(O=0,Q=Q===""?".":Q+":",R(A))for(var X=0;X<A.length;X++){q=A[X];var le=Q+me(q,X);O+=ue(q,U,B,le,oe)}else if(le=b(A),typeof le=="function")for(A=le.call(A),X=0;!(q=A.next()).done;)q=q.value,le=Q+me(q,X++),O+=ue(q,U,B,le,oe);else if(q==="object")throw U=String(A),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return O}function fe(A,U,B){if(A==null)return A;var Q=[],oe=0;return ue(A,Q,"","",function(q){return U.call(B,q,oe++)}),Q}function ee(A){if(A._status===-1){var U=A._result;U=U(),U.then(function(B){(A._status===0||A._status===-1)&&(A._status=1,A._result=B)},function(B){(A._status===0||A._status===-1)&&(A._status=2,A._result=B)}),A._status===-1&&(A._status=0,A._result=U)}if(A._status===1)return A._result.default;throw A._result}var Y={current:null},_={transition:null},H={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:_,ReactCurrentOwner:W};function J(){throw Error("act(...) is not supported in production builds of React.")}return He.Children={map:fe,forEach:function(A,U,B){fe(A,function(){U.apply(this,arguments)},B)},count:function(A){var U=0;return fe(A,function(){U++}),U},toArray:function(A){return fe(A,function(U){return U})||[]},only:function(A){if(!K(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},He.Component=k,He.Fragment=s,He.Profiler=c,He.PureComponent=j,He.StrictMode=a,He.Suspense=h,He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,He.act=J,He.cloneElement=function(A,U,B){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var Q=N({},A.props),oe=A.key,q=A.ref,O=A._owner;if(U!=null){if(U.ref!==void 0&&(q=U.ref,O=W.current),U.key!==void 0&&(oe=""+U.key),A.type&&A.type.defaultProps)var X=A.type.defaultProps;for(le in U)I.call(U,le)&&!z.hasOwnProperty(le)&&(Q[le]=U[le]===void 0&&X!==void 0?X[le]:U[le])}var le=arguments.length-2;if(le===1)Q.children=B;else if(1<le){X=Array(le);for(var he=0;he<le;he++)X[he]=arguments[he+2];Q.children=X}return{$$typeof:n,type:A.type,key:oe,ref:q,props:Q,_owner:O}},He.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:d,_context:A},A.Consumer=A},He.createElement=V,He.createFactory=function(A){var U=V.bind(null,A);return U.type=A,U},He.createRef=function(){return{current:null}},He.forwardRef=function(A){return{$$typeof:m,render:A}},He.isValidElement=K,He.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:ee}},He.memo=function(A,U){return{$$typeof:v,type:A,compare:U===void 0?null:U}},He.startTransition=function(A){var U=_.transition;_.transition={};try{A()}finally{_.transition=U}},He.unstable_act=J,He.useCallback=function(A,U){return Y.current.useCallback(A,U)},He.useContext=function(A){return Y.current.useContext(A)},He.useDebugValue=function(){},He.useDeferredValue=function(A){return Y.current.useDeferredValue(A)},He.useEffect=function(A,U){return Y.current.useEffect(A,U)},He.useId=function(){return Y.current.useId()},He.useImperativeHandle=function(A,U,B){return Y.current.useImperativeHandle(A,U,B)},He.useInsertionEffect=function(A,U){return Y.current.useInsertionEffect(A,U)},He.useLayoutEffect=function(A,U){return Y.current.useLayoutEffect(A,U)},He.useMemo=function(A,U){return Y.current.useMemo(A,U)},He.useReducer=function(A,U,B){return Y.current.useReducer(A,U,B)},He.useRef=function(A){return Y.current.useRef(A)},He.useState=function(A){return Y.current.useState(A)},He.useSyncExternalStore=function(A,U,B){return Y.current.useSyncExternalStore(A,U,B)},He.useTransition=function(){return Y.current.useTransition()},He.version="18.3.1",He}var Qm;function yu(){return Qm||(Qm=1,kd.exports=iw()),kd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function aw(){if(qm)return Vo;qm=1;var n=yu(),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(m,h,v){var y,x={},b=null,S=null;v!==void 0&&(b=""+v),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(S=h.ref);for(y in h)a.call(h,y)&&!d.hasOwnProperty(y)&&(x[y]=h[y]);if(m&&m.defaultProps)for(y in h=m.defaultProps,h)x[y]===void 0&&(x[y]=h[y]);return{$$typeof:r,type:m,key:b,ref:S,props:x,_owner:c.current}}return Vo.Fragment=s,Vo.jsx=p,Vo.jsxs=p,Vo}var Km;function lw(){return Km||(Km=1,Cd.exports=aw()),Cd.exports}var i=lw(),Ra={},Nd={exports:{}},Yt={},jd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function cw(){return Ym||(Ym=1,(function(n){function r(_,H){var J=_.length;_.push(H);e:for(;0<J;){var A=J-1>>>1,U=_[A];if(0<c(U,H))_[A]=H,_[J]=U,J=A;else break e}}function s(_){return _.length===0?null:_[0]}function a(_){if(_.length===0)return null;var H=_[0],J=_.pop();if(J!==H){_[0]=J;e:for(var A=0,U=_.length,B=U>>>1;A<B;){var Q=2*(A+1)-1,oe=_[Q],q=Q+1,O=_[q];if(0>c(oe,J))q<U&&0>c(O,oe)?(_[A]=O,_[q]=J,A=q):(_[A]=oe,_[Q]=J,A=Q);else if(q<U&&0>c(O,J))_[A]=O,_[q]=J,A=q;else break e}}return H}function c(_,H){var J=_.sortIndex-H.sortIndex;return J!==0?J:_.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var p=Date,m=p.now();n.unstable_now=function(){return p.now()-m}}var h=[],v=[],y=1,x=null,b=3,S=!1,N=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(_){for(var H=s(v);H!==null;){if(H.callback===null)a(v);else if(H.startTime<=_)a(v),H.sortIndex=H.expirationTime,r(h,H);else break;H=s(v)}}function R(_){if(C=!1,M(_),!N)if(s(h)!==null)N=!0,ee(I);else{var H=s(v);H!==null&&Y(R,H.startTime-_)}}function I(_,H){N=!1,C&&(C=!1,P(V),V=-1),S=!0;var J=b;try{for(M(H),x=s(h);x!==null&&(!(x.expirationTime>H)||_&&!de());){var A=x.callback;if(typeof A=="function"){x.callback=null,b=x.priorityLevel;var U=A(x.expirationTime<=H);H=n.unstable_now(),typeof U=="function"?x.callback=U:x===s(h)&&a(h),M(H)}else a(h);x=s(h)}if(x!==null)var B=!0;else{var Q=s(v);Q!==null&&Y(R,Q.startTime-H),B=!1}return B}finally{x=null,b=J,S=!1}}var W=!1,z=null,V=-1,re=5,K=-1;function de(){return!(n.unstable_now()-K<re)}function ie(){if(z!==null){var _=n.unstable_now();K=_;var H=!0;try{H=z(!0,_)}finally{H?me():(W=!1,z=null)}}else W=!1}var me;if(typeof j=="function")me=function(){j(ie)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=ie,me=function(){fe.postMessage(null)}}else me=function(){k(ie,0)};function ee(_){z=_,W||(W=!0,me())}function Y(_,H){V=k(function(){_(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(_){_.callback=null},n.unstable_continueExecution=function(){N||S||(N=!0,ee(I))},n.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<_?Math.floor(1e3/_):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return s(h)},n.unstable_next=function(_){switch(b){case 1:case 2:case 3:var H=3;break;default:H=b}var J=b;b=H;try{return _()}finally{b=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(_,H){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var J=b;b=_;try{return H()}finally{b=J}},n.unstable_scheduleCallback=function(_,H,J){var A=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?A+J:A):J=A,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=J+U,_={id:y++,callback:H,priorityLevel:_,startTime:J,expirationTime:U,sortIndex:-1},J>A?(_.sortIndex=J,r(v,_),s(h)===null&&_===s(v)&&(C?(P(V),V=-1):C=!0,Y(R,J-A))):(_.sortIndex=U,r(h,_),N||S||(N=!0,ee(I))),_},n.unstable_shouldYield=de,n.unstable_wrapCallback=function(_){var H=b;return function(){var J=b;b=H;try{return _.apply(this,arguments)}finally{b=J}}}})(Pd)),Pd}var Xm;function dw(){return Xm||(Xm=1,jd.exports=cw()),jd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function uw(){if(Jm)return Yt;Jm=1;var n=yu(),r=dw();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function d(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(c[e]=t,e=0;e<t.length;e++)a.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function b(e){return h.call(x,e)?!0:h.call(y,e)?!1:v.test(e)?x[e]=!0:(y[e]=!0,!1)}function S(e,t,o,l){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,t,o,l){if(t===null||typeof t>"u"||S(e,t,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,o,l,u,g,w){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=g,this.removeEmptyString=w}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function j(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,j);k[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,j);k[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,j);k[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,t,o,l){var u=k.hasOwnProperty(t)?k[t]:null;(u!==null?u.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N(t,o,u,l)&&(o=null),l||u===null?b(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(t=u.attributeName,l=u.attributeNamespace,o===null?e.removeAttribute(t):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?e.setAttributeNS(l,t,o):e.setAttribute(t,o))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),W=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),de=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),_=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,A;function U(e){if(A===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var B=!1;function Q(e,t){if(!e||B)return"";B=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch($){var l=$}Reflect.construct(e,[],t)}else{try{t.call()}catch($){l=$}e.call(t.prototype)}else{try{throw Error()}catch($){l=$}e()}}catch($){if($&&l&&typeof $.stack=="string"){for(var u=$.stack.split(`
`),g=l.stack.split(`
`),w=u.length-1,E=g.length-1;1<=w&&0<=E&&u[w]!==g[E];)E--;for(;1<=w&&0<=E;w--,E--)if(u[w]!==g[E]){if(w!==1||E!==1)do if(w--,E--,0>E||u[w]!==g[E]){var T=`
`+u[w].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=w&&0<=E);break}}}finally{B=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?U(e):""}function oe(e){switch(e.tag){case 5:return U(e.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case W:return"Portal";case re:return"Profiler";case V:return"StrictMode";case me:return"Suspense";case ue:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case de:return(e.displayName||"Context")+".Consumer";case K:return(e._context.displayName||"Context")+".Provider";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fe:return t=e.displayName||null,t!==null?t:q(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return q(e(t))}catch{}}return null}function O(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function X(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function he(e){var t=le(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,g=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,g.call(this,w)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ee(e){e._valueTracker||(e._valueTracker=he(e))}function Re(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),l="";return e&&(l=le(e)?e.checked?"true":"false":e.value),e=l,e!==o?(t.setValue(e),!0):!1}function Z(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function je(e,t){var o=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ge(e,t){var o=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;o=X(t.value!=null?t.value:o),e._wrapperState={initialChecked:l,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pt(e,t){t=t.checked,t!=null&&M(e,"checked",t,!1)}function vt(e,t){pt(e,t);var o=X(t.value),l=t.type;if(o!=null)l==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dn(e,t.type,o):t.hasOwnProperty("defaultValue")&&dn(e,t.type,X(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function it(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function dn(e,t,o){(t!=="number"||Z(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Vt=Array.isArray;function Xe(e,t,o,l){if(e=e.options,t){t={};for(var u=0;u<o.length;u++)t["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=t.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&l&&(e[o].defaultSelected=!0)}else{for(o=""+X(o),t=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Ht(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ce(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(s(92));if(Vt(o)){if(1<o.length)throw Error(s(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:X(o)}}function Je(e,t){var o=X(t.value),l=X(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),l!=null&&(e.defaultValue=""+l)}function et(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qe(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var un,ur=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,l,u){MSApp.execUnsafeLocalFunction(function(){return e(t,o,l,u)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(un=un||document.createElement("div"),un.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=un.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _n(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zt=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Zt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function xe(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Pe(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=xe(o,t[o],l);o==="float"&&(o="cssFloat"),l?e.setProperty(o,u):e[o]=u}}var _e=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(e,t){if(t){if(_e[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Ue(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function _t(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var en=null,wt=null,G=null;function pe(e){if(e=Ro(e)){if(typeof en!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Vi(t),en(e.stateNode,e.type,t))}}function De(e){wt?G?G.push(e):G=[e]:wt=e}function ct(){if(wt){var e=wt,t=G;if(G=wt=null,pe(e),t)for(e=0;e<t.length;e++)pe(t[e])}}function ps(e,t){return e(t)}function pp(){}var $l=!1;function fp(e,t,o){if($l)return e(t,o);$l=!0;try{return ps(e,t,o)}finally{$l=!1,(wt!==null||G!==null)&&(pp(),ct())}}function ao(e,t){var o=e.stateNode;if(o===null)return null;var l=Vi(o);if(l===null)return null;o=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(s(231,t,typeof o));return o}var Hl=!1;if(m)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Hl=!1}function uy(e,t,o,l,u,g,w,E,T){var $=Array.prototype.slice.call(arguments,3);try{t.apply(o,$)}catch(ne){this.onError(ne)}}var co=!1,Si=null,Ci=!1,Bl=null,py={onError:function(e){co=!0,Si=e}};function fy(e,t,o,l,u,g,w,E,T){co=!1,Si=null,uy.apply(py,arguments)}function my(e,t,o,l,u,g,w,E,T){if(fy.apply(this,arguments),co){if(co){var $=Si;co=!1,Si=null}else throw Error(s(198));Ci||(Ci=!0,Bl=$)}}function $r(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function mp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gp(e){if($r(e)!==e)throw Error(s(188))}function gy(e){var t=e.alternate;if(!t){if(t=$r(e),t===null)throw Error(s(188));return t!==e?null:e}for(var o=e,l=t;;){var u=o.return;if(u===null)break;var g=u.alternate;if(g===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===g.child){for(g=u.child;g;){if(g===o)return gp(u),e;if(g===l)return gp(u),t;g=g.sibling}throw Error(s(188))}if(o.return!==l.return)o=u,l=g;else{for(var w=!1,E=u.child;E;){if(E===o){w=!0,o=u,l=g;break}if(E===l){w=!0,l=u,o=g;break}E=E.sibling}if(!w){for(E=g.child;E;){if(E===o){w=!0,o=g,l=u;break}if(E===l){w=!0,l=g,o=u;break}E=E.sibling}if(!w)throw Error(s(189))}}if(o.alternate!==l)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?e:t}function hp(e){return e=gy(e),e!==null?vp(e):null}function vp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vp(e);if(t!==null)return t;e=e.sibling}return null}var xp=r.unstable_scheduleCallback,yp=r.unstable_cancelCallback,hy=r.unstable_shouldYield,vy=r.unstable_requestPaint,gt=r.unstable_now,xy=r.unstable_getCurrentPriorityLevel,Wl=r.unstable_ImmediatePriority,bp=r.unstable_UserBlockingPriority,ki=r.unstable_NormalPriority,yy=r.unstable_LowPriority,wp=r.unstable_IdlePriority,Ni=null,On=null;function by(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:Cy,wy=Math.log,Sy=Math.LN2;function Cy(e){return e>>>=0,e===0?32:31-(wy(e)/Sy|0)|0}var ji=64,Pi=4194304;function uo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ei(e,t){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,g=e.pingedLanes,w=o&268435455;if(w!==0){var E=w&~u;E!==0?l=uo(E):(g&=w,g!==0&&(l=uo(g)))}else w=o&~u,w!==0?l=uo(w):g!==0&&(l=uo(g));if(l===0)return 0;if(t!==0&&t!==l&&(t&u)===0&&(u=l&-l,g=t&-t,u>=g||u===16&&(g&4194240)!==0))return t;if((l&4)!==0&&(l|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)o=31-wn(t),u=1<<o,l|=e[o],t&=~u;return l}function ky(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ny(e,t){for(var o=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,g=e.pendingLanes;0<g;){var w=31-wn(g),E=1<<w,T=u[w];T===-1?((E&o)===0||(E&l)!==0)&&(u[w]=ky(E,t)):T<=t&&(e.expiredLanes|=E),g&=~E}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sp(){var e=ji;return ji<<=1,(ji&4194240)===0&&(ji=64),e}function Ul(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function po(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wn(t),e[t]=o}function jy(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-wn(o),g=1<<u;t[u]=0,l[u]=-1,e[u]=-1,o&=~g}}function Gl(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var l=31-wn(o),u=1<<l;u&t|e[l]&t&&(e[l]|=t),o&=~u}}var Ye=0;function Cp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var kp,Ql,Np,jp,Pp,ql=!1,Ri=[],pr=null,fr=null,mr=null,fo=new Map,mo=new Map,gr=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(e,t){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":fo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(t.pointerId)}}function go(e,t,o,l,u,g){return e===null||e.nativeEvent!==g?(e={blockedOn:t,domEventName:o,eventSystemFlags:l,nativeEvent:g,targetContainers:[u]},t!==null&&(t=Ro(t),t!==null&&Ql(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Ey(e,t,o,l,u){switch(t){case"focusin":return pr=go(pr,e,t,o,l,u),!0;case"dragenter":return fr=go(fr,e,t,o,l,u),!0;case"mouseover":return mr=go(mr,e,t,o,l,u),!0;case"pointerover":var g=u.pointerId;return fo.set(g,go(fo.get(g)||null,e,t,o,l,u)),!0;case"gotpointercapture":return g=u.pointerId,mo.set(g,go(mo.get(g)||null,e,t,o,l,u)),!0}return!1}function Rp(e){var t=Hr(e.target);if(t!==null){var o=$r(t);if(o!==null){if(t=o.tag,t===13){if(t=mp(o),t!==null){e.blockedOn=t,Pp(e.priority,function(){Np(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);Nt=l,o.target.dispatchEvent(l),Nt=null}else return t=Ro(o),t!==null&&Ql(t),e.blockedOn=o,!1;t.shift()}return!0}function Ap(e,t,o){Ai(e)&&o.delete(t)}function Ry(){ql=!1,pr!==null&&Ai(pr)&&(pr=null),fr!==null&&Ai(fr)&&(fr=null),mr!==null&&Ai(mr)&&(mr=null),fo.forEach(Ap),mo.forEach(Ap)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ry)))}function vo(e){function t(u){return ho(u,e)}if(0<Ri.length){ho(Ri[0],e);for(var o=1;o<Ri.length;o++){var l=Ri[o];l.blockedOn===e&&(l.blockedOn=null)}}for(pr!==null&&ho(pr,e),fr!==null&&ho(fr,e),mr!==null&&ho(mr,e),fo.forEach(t),mo.forEach(t),o=0;o<gr.length;o++)l=gr[o],l.blockedOn===e&&(l.blockedOn=null);for(;0<gr.length&&(o=gr[0],o.blockedOn===null);)Rp(o),o.blockedOn===null&&gr.shift()}var fs=R.ReactCurrentBatchConfig,Ti=!0;function Ay(e,t,o,l){var u=Ye,g=fs.transition;fs.transition=null;try{Ye=1,Kl(e,t,o,l)}finally{Ye=u,fs.transition=g}}function Ty(e,t,o,l){var u=Ye,g=fs.transition;fs.transition=null;try{Ye=4,Kl(e,t,o,l)}finally{Ye=u,fs.transition=g}}function Kl(e,t,o,l){if(Ti){var u=Yl(e,t,o,l);if(u===null)fc(e,t,l,Mi,o),Ep(e,l);else if(Ey(u,e,t,o,l))l.stopPropagation();else if(Ep(e,l),t&4&&-1<Py.indexOf(e)){for(;u!==null;){var g=Ro(u);if(g!==null&&kp(g),g=Yl(e,t,o,l),g===null&&fc(e,t,l,Mi,o),g===u)break;u=g}u!==null&&l.stopPropagation()}else fc(e,t,l,null,o)}}var Mi=null;function Yl(e,t,o,l){if(Mi=null,e=_t(l),e=Hr(e),e!==null)if(t=$r(e),t===null)e=null;else if(o=t.tag,o===13){if(e=mp(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function Tp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xy()){case Wl:return 1;case bp:return 4;case ki:case yy:return 16;case wp:return 536870912;default:return 16}default:return 16}}var hr=null,Xl=null,Ii=null;function Mp(){if(Ii)return Ii;var e,t=Xl,o=t.length,l,u="value"in hr?hr.value:hr.textContent,g=u.length;for(e=0;e<o&&t[e]===u[e];e++);var w=o-e;for(l=1;l<=w&&t[o-l]===u[g-l];l++);return Ii=u.slice(e,1<l?1-l:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function Ip(){return!1}function tn(e){function t(o,l,u,g,w){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(g):g[E]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Di:Ip,this.isPropagationStopped=Ip,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=tn(ms),xo=J({},ms,{view:0,detail:0}),My=tn(xo),Zl,ec,yo,Oi=J({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yo&&(yo&&e.type==="mousemove"?(Zl=e.screenX-yo.screenX,ec=e.screenY-yo.screenY):ec=Zl=0,yo=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:ec}}),_p=tn(Oi),Iy=J({},Oi,{dataTransfer:0}),_y=tn(Iy),Dy=J({},xo,{relatedTarget:0}),tc=tn(Dy),Oy=J({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=tn(Oy),zy=J({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fy=tn(zy),$y=J({},ms,{data:0}),Dp=tn($y),Hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},By={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wy[e])?!!t[e]:!1}function nc(){return Vy}var Uy=J({},xo,{key:function(e){if(e.key){var t=Hy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?By[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gy=tn(Uy),Qy=J({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=tn(Qy),qy=J({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),Ky=tn(qy),Yy=J({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=tn(Yy),Jy=J({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=tn(Jy),eb=[9,13,27,32],rc=m&&"CompositionEvent"in window,bo=null;m&&"documentMode"in document&&(bo=document.documentMode);var tb=m&&"TextEvent"in window&&!bo,Lp=m&&(!rc||bo&&8<bo&&11>=bo),zp=" ",Fp=!1;function $p(e,t){switch(e){case"keyup":return eb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gs=!1;function nb(e,t){switch(e){case"compositionend":return Hp(t);case"keypress":return t.which!==32?null:(Fp=!0,zp);case"textInput":return e=t.data,e===zp&&Fp?null:e;default:return null}}function rb(e,t){if(gs)return e==="compositionend"||!rc&&$p(e,t)?(e=Mp(),Ii=Xl=hr=null,gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lp&&t.locale!=="ko"?null:t.data;default:return null}}var sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sb[e.type]:t==="textarea"}function Wp(e,t,o,l){De(l),t=Hi(t,"onChange"),0<t.length&&(o=new Jl("onChange","change",null,o,l),e.push({event:o,listeners:t}))}var wo=null,So=null;function ob(e){lf(e,0)}function Li(e){var t=bs(e);if(Re(t))return e}function ib(e,t){if(e==="change")return t}var Vp=!1;if(m){var sc;if(m){var oc="oninput"in document;if(!oc){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),oc=typeof Up.oninput=="function"}sc=oc}else sc=!1;Vp=sc&&(!document.documentMode||9<document.documentMode)}function Gp(){wo&&(wo.detachEvent("onpropertychange",Qp),So=wo=null)}function Qp(e){if(e.propertyName==="value"&&Li(So)){var t=[];Wp(t,So,e,_t(e)),fp(ob,t)}}function ab(e,t,o){e==="focusin"?(Gp(),wo=t,So=o,wo.attachEvent("onpropertychange",Qp)):e==="focusout"&&Gp()}function lb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(So)}function cb(e,t){if(e==="click")return Li(t)}function db(e,t){if(e==="input"||e==="change")return Li(t)}function ub(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Sn=typeof Object.is=="function"?Object.is:ub;function Co(e,t){if(Sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!h.call(t,u)||!Sn(e[u],t[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kp(e,t){var o=qp(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=t&&l>=t)return{node:o,offset:t-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=qp(o)}}function Yp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xp(){for(var e=window,t=Z();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=Z(e.document)}return t}function ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pb(e){var t=Xp(),o=e.focusedElem,l=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&Yp(o.ownerDocument.documentElement,o)){if(l!==null&&ic(o)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,g=Math.min(l.start,u);l=l.end===void 0?g:Math.min(l.end,u),!e.extend&&g>l&&(u=l,l=g,g=u),u=Kp(o,g);var w=Kp(o,l);u&&w&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==w.node||e.focusOffset!==w.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),g>l?(e.addRange(t),e.extend(w.node,w.offset)):(t.setEnd(w.node,w.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fb=m&&"documentMode"in document&&11>=document.documentMode,hs=null,ac=null,ko=null,lc=!1;function Jp(e,t,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lc||hs==null||hs!==Z(l)||(l=hs,"selectionStart"in l&&ic(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ko&&Co(ko,l)||(ko=l,l=Hi(ac,"onSelect"),0<l.length&&(t=new Jl("onSelect","select",null,t,o),e.push({event:t,listeners:l}),t.target=hs)))}function zi(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var vs={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},cc={},Zp={};m&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Fi(e){if(cc[e])return cc[e];if(!vs[e])return e;var t=vs[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in Zp)return cc[e]=t[o];return e}var ef=Fi("animationend"),tf=Fi("animationiteration"),nf=Fi("animationstart"),rf=Fi("transitionend"),sf=new Map,of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(e,t){sf.set(e,t),d(t,[e])}for(var dc=0;dc<of.length;dc++){var uc=of[dc],mb=uc.toLowerCase(),gb=uc[0].toUpperCase()+uc.slice(1);vr(mb,"on"+gb)}vr(ef,"onAnimationEnd"),vr(tf,"onAnimationIteration"),vr(nf,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(rf,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hb=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function af(e,t,o){var l=e.type||"unknown-event";e.currentTarget=o,my(l,t,void 0,e),e.currentTarget=null}function lf(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],u=l.event;l=l.listeners;e:{var g=void 0;if(t)for(var w=l.length-1;0<=w;w--){var E=l[w],T=E.instance,$=E.currentTarget;if(E=E.listener,T!==g&&u.isPropagationStopped())break e;af(u,E,$),g=T}else for(w=0;w<l.length;w++){if(E=l[w],T=E.instance,$=E.currentTarget,E=E.listener,T!==g&&u.isPropagationStopped())break e;af(u,E,$),g=T}}}if(Ci)throw e=Bl,Ci=!1,Bl=null,e}function tt(e,t){var o=t[yc];o===void 0&&(o=t[yc]=new Set);var l=e+"__bubble";o.has(l)||(cf(t,e,2,!1),o.add(l))}function pc(e,t,o){var l=0;t&&(l|=4),cf(o,e,l,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function jo(e){if(!e[$i]){e[$i]=!0,a.forEach(function(o){o!=="selectionchange"&&(hb.has(o)||pc(o,!1,e),pc(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,pc("selectionchange",!1,t))}}function cf(e,t,o,l){switch(Tp(t)){case 1:var u=Ay;break;case 4:u=Ty;break;default:u=Kl}o=u.bind(null,t,o,e),u=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,o,{capture:!0,passive:u}):e.addEventListener(t,o,!0):u!==void 0?e.addEventListener(t,o,{passive:u}):e.addEventListener(t,o,!1)}function fc(e,t,o,l,u){var g=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var E=l.stateNode.containerInfo;if(E===u||E.nodeType===8&&E.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var T=w.tag;if((T===3||T===4)&&(T=w.stateNode.containerInfo,T===u||T.nodeType===8&&T.parentNode===u))return;w=w.return}for(;E!==null;){if(w=Hr(E),w===null)return;if(T=w.tag,T===5||T===6){l=g=w;continue e}E=E.parentNode}}l=l.return}fp(function(){var $=g,ne=_t(o),se=[];e:{var te=sf.get(e);if(te!==void 0){var ve=Jl,be=e;switch(e){case"keypress":if(_i(o)===0)break e;case"keydown":case"keyup":ve=Gy;break;case"focusin":be="focus",ve=tc;break;case"focusout":be="blur",ve=tc;break;case"beforeblur":case"afterblur":ve=tc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=Ky;break;case ef:case tf:case nf:ve=Ly;break;case rf:ve=Xy;break;case"scroll":ve=My;break;case"wheel":ve=Zy;break;case"copy":case"cut":case"paste":ve=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=Op}var Ce=(t&4)!==0,ht=!Ce&&e==="scroll",L=Ce?te!==null?te+"Capture":null:te;Ce=[];for(var D=$,F;D!==null;){F=D;var ae=F.stateNode;if(F.tag===5&&ae!==null&&(F=ae,L!==null&&(ae=ao(D,L),ae!=null&&Ce.push(Po(D,ae,F)))),ht)break;D=D.return}0<Ce.length&&(te=new ve(te,be,null,o,ne),se.push({event:te,listeners:Ce}))}}if((t&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",te&&o!==Nt&&(be=o.relatedTarget||o.fromElement)&&(Hr(be)||be[Jn]))break e;if((ve||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,ve?(be=o.relatedTarget||o.toElement,ve=$,be=be?Hr(be):null,be!==null&&(ht=$r(be),be!==ht||be.tag!==5&&be.tag!==6)&&(be=null)):(ve=null,be=$),ve!==be)){if(Ce=_p,ae="onMouseLeave",L="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=Op,ae="onPointerLeave",L="onPointerEnter",D="pointer"),ht=ve==null?te:bs(ve),F=be==null?te:bs(be),te=new Ce(ae,D+"leave",ve,o,ne),te.target=ht,te.relatedTarget=F,ae=null,Hr(ne)===$&&(Ce=new Ce(L,D+"enter",be,o,ne),Ce.target=F,Ce.relatedTarget=ht,ae=Ce),ht=ae,ve&&be)t:{for(Ce=ve,L=be,D=0,F=Ce;F;F=xs(F))D++;for(F=0,ae=L;ae;ae=xs(ae))F++;for(;0<D-F;)Ce=xs(Ce),D--;for(;0<F-D;)L=xs(L),F--;for(;D--;){if(Ce===L||L!==null&&Ce===L.alternate)break t;Ce=xs(Ce),L=xs(L)}Ce=null}else Ce=null;ve!==null&&df(se,te,ve,Ce,!1),be!==null&&ht!==null&&df(se,ht,be,Ce,!0)}}e:{if(te=$?bs($):window,ve=te.nodeName&&te.nodeName.toLowerCase(),ve==="select"||ve==="input"&&te.type==="file")var Ne=ib;else if(Bp(te))if(Vp)Ne=db;else{Ne=lb;var Ae=ab}else(ve=te.nodeName)&&ve.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(Ne=cb);if(Ne&&(Ne=Ne(e,$))){Wp(se,Ne,o,ne);break e}Ae&&Ae(e,te,$),e==="focusout"&&(Ae=te._wrapperState)&&Ae.controlled&&te.type==="number"&&dn(te,"number",te.value)}switch(Ae=$?bs($):window,e){case"focusin":(Bp(Ae)||Ae.contentEditable==="true")&&(hs=Ae,ac=$,ko=null);break;case"focusout":ko=ac=hs=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,Jp(se,o,ne);break;case"selectionchange":if(fb)break;case"keydown":case"keyup":Jp(se,o,ne)}var Te;if(rc)e:{switch(e){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else gs?$p(e,o)&&(Ie="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(Lp&&o.locale!=="ko"&&(gs||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&gs&&(Te=Mp()):(hr=ne,Xl="value"in hr?hr.value:hr.textContent,gs=!0)),Ae=Hi($,Ie),0<Ae.length&&(Ie=new Dp(Ie,e,null,o,ne),se.push({event:Ie,listeners:Ae}),Te?Ie.data=Te:(Te=Hp(o),Te!==null&&(Ie.data=Te)))),(Te=tb?nb(e,o):rb(e,o))&&($=Hi($,"onBeforeInput"),0<$.length&&(ne=new Dp("onBeforeInput","beforeinput",null,o,ne),se.push({event:ne,listeners:$}),ne.data=Te))}lf(se,t)})}function Po(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Hi(e,t){for(var o=t+"Capture",l=[];e!==null;){var u=e,g=u.stateNode;u.tag===5&&g!==null&&(u=g,g=ao(e,o),g!=null&&l.unshift(Po(e,g,u)),g=ao(e,t),g!=null&&l.push(Po(e,g,u))),e=e.return}return l}function xs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function df(e,t,o,l,u){for(var g=t._reactName,w=[];o!==null&&o!==l;){var E=o,T=E.alternate,$=E.stateNode;if(T!==null&&T===l)break;E.tag===5&&$!==null&&(E=$,u?(T=ao(o,g),T!=null&&w.unshift(Po(o,T,E))):u||(T=ao(o,g),T!=null&&w.push(Po(o,T,E)))),o=o.return}w.length!==0&&e.push({event:t,listeners:w})}var vb=/\r\n?/g,xb=/\u0000|\uFFFD/g;function uf(e){return(typeof e=="string"?e:""+e).replace(vb,`
`).replace(xb,"")}function Bi(e,t,o){if(t=uf(t),uf(e)!==t&&o)throw Error(s(425))}function Wi(){}var mc=null,gc=null;function hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=typeof setTimeout=="function"?setTimeout:void 0,yb=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,bb=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(e){return pf.resolve(null).then(e).catch(wb)}:vc;function wb(e){setTimeout(function(){throw e})}function xc(e,t){var o=t,l=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){e.removeChild(u),vo(t);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);vo(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Ln="__reactFiber$"+ys,Eo="__reactProps$"+ys,Jn="__reactContainer$"+ys,yc="__reactEvents$"+ys,Sb="__reactListeners$"+ys,Cb="__reactHandles$"+ys;function Hr(e){var t=e[Ln];if(t)return t;for(var o=e.parentNode;o;){if(t=o[Jn]||o[Ln]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=ff(e);e!==null;){if(o=e[Ln])return o;e=ff(e)}return t}e=o,o=e.parentNode}return null}function Ro(e){return e=e[Ln]||e[Jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Vi(e){return e[Eo]||null}var bc=[],ws=-1;function yr(e){return{current:e}}function nt(e){0>ws||(e.current=bc[ws],bc[ws]=null,ws--)}function Ze(e,t){ws++,bc[ws]=e.current,e.current=t}var br={},Dt=yr(br),Ut=yr(!1),Br=br;function Ss(e,t){var o=e.type.contextTypes;if(!o)return br;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var u={},g;for(g in o)u[g]=t[g];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function Gt(e){return e=e.childContextTypes,e!=null}function Ui(){nt(Ut),nt(Dt)}function mf(e,t,o){if(Dt.current!==br)throw Error(s(168));Ze(Dt,t),Ze(Ut,o)}function gf(e,t,o){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in t))throw Error(s(108,O(e)||"Unknown",u));return J({},o,l)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||br,Br=Dt.current,Ze(Dt,e),Ze(Ut,Ut.current),!0}function hf(e,t,o){var l=e.stateNode;if(!l)throw Error(s(169));o?(e=gf(e,t,Br),l.__reactInternalMemoizedMergedChildContext=e,nt(Ut),nt(Dt),Ze(Dt,e)):nt(Ut),Ze(Ut,o)}var Zn=null,Qi=!1,wc=!1;function vf(e){Zn===null?Zn=[e]:Zn.push(e)}function kb(e){Qi=!0,vf(e)}function wr(){if(!wc&&Zn!==null){wc=!0;var e=0,t=Ye;try{var o=Zn;for(Ye=1;e<o.length;e++){var l=o[e];do l=l(!0);while(l!==null)}Zn=null,Qi=!1}catch(u){throw Zn!==null&&(Zn=Zn.slice(e+1)),xp(Wl,wr),u}finally{Ye=t,wc=!1}}return null}var Cs=[],ks=0,qi=null,Ki=0,pn=[],fn=0,Wr=null,er=1,tr="";function Vr(e,t){Cs[ks++]=Ki,Cs[ks++]=qi,qi=e,Ki=t}function xf(e,t,o){pn[fn++]=er,pn[fn++]=tr,pn[fn++]=Wr,Wr=e;var l=er;e=tr;var u=32-wn(l)-1;l&=~(1<<u),o+=1;var g=32-wn(t)+u;if(30<g){var w=u-u%5;g=(l&(1<<w)-1).toString(32),l>>=w,u-=w,er=1<<32-wn(t)+u|o<<u|l,tr=g+e}else er=1<<g|o<<u|l,tr=e}function Sc(e){e.return!==null&&(Vr(e,1),xf(e,1,0))}function Cc(e){for(;e===qi;)qi=Cs[--ks],Cs[ks]=null,Ki=Cs[--ks],Cs[ks]=null;for(;e===Wr;)Wr=pn[--fn],pn[fn]=null,tr=pn[--fn],pn[fn]=null,er=pn[--fn],pn[fn]=null}var nn=null,rn=null,at=!1,Cn=null;function yf(e,t){var o=vn(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function bf(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nn=e,rn=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nn=e,rn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=Wr!==null?{id:er,overflow:tr}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=vn(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,nn=e,rn=null,!0):!1;default:return!1}}function kc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nc(e){if(at){var t=rn;if(t){var o=t;if(!bf(e,t)){if(kc(e))throw Error(s(418));t=xr(o.nextSibling);var l=nn;t&&bf(e,t)?yf(l,o):(e.flags=e.flags&-4097|2,at=!1,nn=e)}}else{if(kc(e))throw Error(s(418));e.flags=e.flags&-4097|2,at=!1,nn=e}}}function wf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nn=e}function Yi(e){if(e!==nn)return!1;if(!at)return wf(e),at=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hc(e.type,e.memoizedProps)),t&&(t=rn)){if(kc(e))throw Sf(),Error(s(418));for(;t;)yf(e,t),t=xr(t.nextSibling)}if(wf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){rn=xr(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}rn=null}}else rn=nn?xr(e.stateNode.nextSibling):null;return!0}function Sf(){for(var e=rn;e;)e=xr(e.nextSibling)}function Ns(){rn=nn=null,at=!1}function jc(e){Cn===null?Cn=[e]:Cn.push(e)}var Nb=R.ReactCurrentBatchConfig;function Ao(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(s(309));var l=o.stateNode}if(!l)throw Error(s(147,e));var u=l,g=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===g?t.ref:(t=function(w){var E=u.refs;w===null?delete E[g]:E[g]=w},t._stringRef=g,t)}if(typeof e!="string")throw Error(s(284));if(!o._owner)throw Error(s(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cf(e){var t=e._init;return t(e._payload)}function kf(e){function t(L,D){if(e){var F=L.deletions;F===null?(L.deletions=[D],L.flags|=16):F.push(D)}}function o(L,D){if(!e)return null;for(;D!==null;)t(L,D),D=D.sibling;return null}function l(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function u(L,D){return L=Rr(L,D),L.index=0,L.sibling=null,L}function g(L,D,F){return L.index=F,e?(F=L.alternate,F!==null?(F=F.index,F<D?(L.flags|=2,D):F):(L.flags|=2,D)):(L.flags|=1048576,D)}function w(L){return e&&L.alternate===null&&(L.flags|=2),L}function E(L,D,F,ae){return D===null||D.tag!==6?(D=vd(F,L.mode,ae),D.return=L,D):(D=u(D,F),D.return=L,D)}function T(L,D,F,ae){var Ne=F.type;return Ne===z?ne(L,D,F.props.children,ae,F.key):D!==null&&(D.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ee&&Cf(Ne)===D.type)?(ae=u(D,F.props),ae.ref=Ao(L,D,F),ae.return=L,ae):(ae=wa(F.type,F.key,F.props,null,L.mode,ae),ae.ref=Ao(L,D,F),ae.return=L,ae)}function $(L,D,F,ae){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=xd(F,L.mode,ae),D.return=L,D):(D=u(D,F.children||[]),D.return=L,D)}function ne(L,D,F,ae,Ne){return D===null||D.tag!==7?(D=Jr(F,L.mode,ae,Ne),D.return=L,D):(D=u(D,F),D.return=L,D)}function se(L,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=vd(""+D,L.mode,F),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case I:return F=wa(D.type,D.key,D.props,null,L.mode,F),F.ref=Ao(L,null,D),F.return=L,F;case W:return D=xd(D,L.mode,F),D.return=L,D;case ee:var ae=D._init;return se(L,ae(D._payload),F)}if(Vt(D)||H(D))return D=Jr(D,L.mode,F,null),D.return=L,D;Xi(L,D)}return null}function te(L,D,F,ae){var Ne=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return Ne!==null?null:E(L,D,""+F,ae);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case I:return F.key===Ne?T(L,D,F,ae):null;case W:return F.key===Ne?$(L,D,F,ae):null;case ee:return Ne=F._init,te(L,D,Ne(F._payload),ae)}if(Vt(F)||H(F))return Ne!==null?null:ne(L,D,F,ae,null);Xi(L,F)}return null}function ve(L,D,F,ae,Ne){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return L=L.get(F)||null,E(D,L,""+ae,Ne);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:return L=L.get(ae.key===null?F:ae.key)||null,T(D,L,ae,Ne);case W:return L=L.get(ae.key===null?F:ae.key)||null,$(D,L,ae,Ne);case ee:var Ae=ae._init;return ve(L,D,F,Ae(ae._payload),Ne)}if(Vt(ae)||H(ae))return L=L.get(F)||null,ne(D,L,ae,Ne,null);Xi(D,ae)}return null}function be(L,D,F,ae){for(var Ne=null,Ae=null,Te=D,Ie=D=0,Et=null;Te!==null&&Ie<F.length;Ie++){Te.index>Ie?(Et=Te,Te=null):Et=Te.sibling;var Ve=te(L,Te,F[Ie],ae);if(Ve===null){Te===null&&(Te=Et);break}e&&Te&&Ve.alternate===null&&t(L,Te),D=g(Ve,D,Ie),Ae===null?Ne=Ve:Ae.sibling=Ve,Ae=Ve,Te=Et}if(Ie===F.length)return o(L,Te),at&&Vr(L,Ie),Ne;if(Te===null){for(;Ie<F.length;Ie++)Te=se(L,F[Ie],ae),Te!==null&&(D=g(Te,D,Ie),Ae===null?Ne=Te:Ae.sibling=Te,Ae=Te);return at&&Vr(L,Ie),Ne}for(Te=l(L,Te);Ie<F.length;Ie++)Et=ve(Te,L,Ie,F[Ie],ae),Et!==null&&(e&&Et.alternate!==null&&Te.delete(Et.key===null?Ie:Et.key),D=g(Et,D,Ie),Ae===null?Ne=Et:Ae.sibling=Et,Ae=Et);return e&&Te.forEach(function(Ar){return t(L,Ar)}),at&&Vr(L,Ie),Ne}function Ce(L,D,F,ae){var Ne=H(F);if(typeof Ne!="function")throw Error(s(150));if(F=Ne.call(F),F==null)throw Error(s(151));for(var Ae=Ne=null,Te=D,Ie=D=0,Et=null,Ve=F.next();Te!==null&&!Ve.done;Ie++,Ve=F.next()){Te.index>Ie?(Et=Te,Te=null):Et=Te.sibling;var Ar=te(L,Te,Ve.value,ae);if(Ar===null){Te===null&&(Te=Et);break}e&&Te&&Ar.alternate===null&&t(L,Te),D=g(Ar,D,Ie),Ae===null?Ne=Ar:Ae.sibling=Ar,Ae=Ar,Te=Et}if(Ve.done)return o(L,Te),at&&Vr(L,Ie),Ne;if(Te===null){for(;!Ve.done;Ie++,Ve=F.next())Ve=se(L,Ve.value,ae),Ve!==null&&(D=g(Ve,D,Ie),Ae===null?Ne=Ve:Ae.sibling=Ve,Ae=Ve);return at&&Vr(L,Ie),Ne}for(Te=l(L,Te);!Ve.done;Ie++,Ve=F.next())Ve=ve(Te,L,Ie,Ve.value,ae),Ve!==null&&(e&&Ve.alternate!==null&&Te.delete(Ve.key===null?Ie:Ve.key),D=g(Ve,D,Ie),Ae===null?Ne=Ve:Ae.sibling=Ve,Ae=Ve);return e&&Te.forEach(function(sw){return t(L,sw)}),at&&Vr(L,Ie),Ne}function ht(L,D,F,ae){if(typeof F=="object"&&F!==null&&F.type===z&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case I:e:{for(var Ne=F.key,Ae=D;Ae!==null;){if(Ae.key===Ne){if(Ne=F.type,Ne===z){if(Ae.tag===7){o(L,Ae.sibling),D=u(Ae,F.props.children),D.return=L,L=D;break e}}else if(Ae.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ee&&Cf(Ne)===Ae.type){o(L,Ae.sibling),D=u(Ae,F.props),D.ref=Ao(L,Ae,F),D.return=L,L=D;break e}o(L,Ae);break}else t(L,Ae);Ae=Ae.sibling}F.type===z?(D=Jr(F.props.children,L.mode,ae,F.key),D.return=L,L=D):(ae=wa(F.type,F.key,F.props,null,L.mode,ae),ae.ref=Ao(L,D,F),ae.return=L,L=ae)}return w(L);case W:e:{for(Ae=F.key;D!==null;){if(D.key===Ae)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){o(L,D.sibling),D=u(D,F.children||[]),D.return=L,L=D;break e}else{o(L,D);break}else t(L,D);D=D.sibling}D=xd(F,L.mode,ae),D.return=L,L=D}return w(L);case ee:return Ae=F._init,ht(L,D,Ae(F._payload),ae)}if(Vt(F))return be(L,D,F,ae);if(H(F))return Ce(L,D,F,ae);Xi(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(o(L,D.sibling),D=u(D,F),D.return=L,L=D):(o(L,D),D=vd(F,L.mode,ae),D.return=L,L=D),w(L)):o(L,D)}return ht}var js=kf(!0),Nf=kf(!1),Ji=yr(null),Zi=null,Ps=null,Pc=null;function Ec(){Pc=Ps=Zi=null}function Rc(e){var t=Ji.current;nt(Ji),e._currentValue=t}function Ac(e,t,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===o)break;e=e.return}}function Es(e,t){Zi=e,Pc=Ps=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qt=!0),e.firstContext=null)}function mn(e){var t=e._currentValue;if(Pc!==e)if(e={context:e,memoizedValue:t,next:null},Ps===null){if(Zi===null)throw Error(s(308));Ps=e,Zi.dependencies={lanes:0,firstContext:e}}else Ps=Ps.next=e;return t}var Ur=null;function Tc(e){Ur===null?Ur=[e]:Ur.push(e)}function jf(e,t,o,l){var u=t.interleaved;return u===null?(o.next=o,Tc(t)):(o.next=u.next,u.next=o),t.interleaved=o,nr(e,l)}function nr(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Sr=!1;function Mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(e,t,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(We&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,nr(e,o)}return u=l.interleaved,u===null?(t.next=t,Tc(l)):(t.next=u.next,u.next=t),l.interleaved=t,nr(e,o)}function ea(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,o|=l,t.lanes=o,Gl(e,o)}}function Ef(e,t){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?u=g=w:g=g.next=w,o=o.next}while(o!==null);g===null?u=g=t:g=g.next=t}else u=g=t;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:g,shared:l.shared,effects:l.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function ta(e,t,o,l){var u=e.updateQueue;Sr=!1;var g=u.firstBaseUpdate,w=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var T=E,$=T.next;T.next=null,w===null?g=$:w.next=$,w=T;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,E=ne.lastBaseUpdate,E!==w&&(E===null?ne.firstBaseUpdate=$:E.next=$,ne.lastBaseUpdate=T))}if(g!==null){var se=u.baseState;w=0,ne=$=T=null,E=g;do{var te=E.lane,ve=E.eventTime;if((l&te)===te){ne!==null&&(ne=ne.next={eventTime:ve,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var be=e,Ce=E;switch(te=t,ve=o,Ce.tag){case 1:if(be=Ce.payload,typeof be=="function"){se=be.call(ve,se,te);break e}se=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Ce.payload,te=typeof be=="function"?be.call(ve,se,te):be,te==null)break e;se=J({},se,te);break e;case 2:Sr=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,te=u.effects,te===null?u.effects=[E]:te.push(E))}else ve={eventTime:ve,lane:te,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ne===null?($=ne=ve,T=se):ne=ne.next=ve,w|=te;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;te=E,E=te.next,te.next=null,u.lastBaseUpdate=te,u.shared.pending=null}}while(!0);if(ne===null&&(T=se),u.baseState=T,u.firstBaseUpdate=$,u.lastBaseUpdate=ne,t=u.shared.interleaved,t!==null){u=t;do w|=u.lane,u=u.next;while(u!==t)}else g===null&&(u.shared.lanes=0);qr|=w,e.lanes=w,e.memoizedState=se}}function Rf(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(s(191,u));u.call(l)}}}var To={},zn=yr(To),Mo=yr(To),Io=yr(To);function Gr(e){if(e===To)throw Error(s(174));return e}function Ic(e,t){switch(Ze(Io,t),Ze(Mo,e),Ze(zn,To),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xn(t,e)}nt(zn),Ze(zn,t)}function Rs(){nt(zn),nt(Mo),nt(Io)}function Af(e){Gr(Io.current);var t=Gr(zn.current),o=Xn(t,e.type);t!==o&&(Ze(Mo,e),Ze(zn,o))}function _c(e){Mo.current===e&&(nt(zn),nt(Mo))}var dt=yr(0);function na(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dc=[];function Oc(){for(var e=0;e<Dc.length;e++)Dc[e]._workInProgressVersionPrimary=null;Dc.length=0}var ra=R.ReactCurrentDispatcher,Lc=R.ReactCurrentBatchConfig,Qr=0,ut=null,St=null,jt=null,sa=!1,_o=!1,Do=0,jb=0;function Ot(){throw Error(s(321))}function zc(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!Sn(e[o],t[o]))return!1;return!0}function Fc(e,t,o,l,u,g){if(Qr=g,ut=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ra.current=e===null||e.memoizedState===null?Ab:Tb,e=o(l,u),_o){g=0;do{if(_o=!1,Do=0,25<=g)throw Error(s(301));g+=1,jt=St=null,t.updateQueue=null,ra.current=Mb,e=o(l,u)}while(_o)}if(ra.current=aa,t=St!==null&&St.next!==null,Qr=0,jt=St=ut=null,sa=!1,t)throw Error(s(300));return e}function $c(){var e=Do!==0;return Do=0,e}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?ut.memoizedState=jt=e:jt=jt.next=e,jt}function gn(){if(St===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=jt===null?ut.memoizedState:jt.next;if(t!==null)jt=t,St=e;else{if(e===null)throw Error(s(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},jt===null?ut.memoizedState=jt=e:jt=jt.next=e}return jt}function Oo(e,t){return typeof t=="function"?t(e):t}function Hc(e){var t=gn(),o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=e;var l=St,u=l.baseQueue,g=o.pending;if(g!==null){if(u!==null){var w=u.next;u.next=g.next,g.next=w}l.baseQueue=u=g,o.pending=null}if(u!==null){g=u.next,l=l.baseState;var E=w=null,T=null,$=g;do{var ne=$.lane;if((Qr&ne)===ne)T!==null&&(T=T.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),l=$.hasEagerState?$.eagerState:e(l,$.action);else{var se={lane:ne,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};T===null?(E=T=se,w=l):T=T.next=se,ut.lanes|=ne,qr|=ne}$=$.next}while($!==null&&$!==g);T===null?w=l:T.next=E,Sn(l,t.memoizedState)||(Qt=!0),t.memoizedState=l,t.baseState=w,t.baseQueue=T,o.lastRenderedState=l}if(e=o.interleaved,e!==null){u=e;do g=u.lane,ut.lanes|=g,qr|=g,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function Bc(e){var t=gn(),o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=e;var l=o.dispatch,u=o.pending,g=t.memoizedState;if(u!==null){o.pending=null;var w=u=u.next;do g=e(g,w.action),w=w.next;while(w!==u);Sn(g,t.memoizedState)||(Qt=!0),t.memoizedState=g,t.baseQueue===null&&(t.baseState=g),o.lastRenderedState=g}return[g,l]}function Tf(){}function Mf(e,t){var o=ut,l=gn(),u=t(),g=!Sn(l.memoizedState,u);if(g&&(l.memoizedState=u,Qt=!0),l=l.queue,Wc(Df.bind(null,o,l,e),[e]),l.getSnapshot!==t||g||jt!==null&&jt.memoizedState.tag&1){if(o.flags|=2048,Lo(9,_f.bind(null,o,l,u,t),void 0,null),Pt===null)throw Error(s(349));(Qr&30)!==0||If(o,t,u)}return u}function If(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=ut.updateQueue,t===null?(t={lastEffect:null,stores:null},ut.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function _f(e,t,o,l){t.value=o,t.getSnapshot=l,Of(t)&&Lf(e)}function Df(e,t,o){return o(function(){Of(t)&&Lf(e)})}function Of(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!Sn(e,o)}catch{return!0}}function Lf(e){var t=nr(e,1);t!==null&&Pn(t,e,1,-1)}function zf(e){var t=Fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t.queue=e,e=e.dispatch=Rb.bind(null,ut,e),[t.memoizedState,e]}function Lo(e,t,o,l){return e={tag:e,create:t,destroy:o,deps:l,next:null},t=ut.updateQueue,t===null?(t={lastEffect:null,stores:null},ut.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,t.lastEffect=e)),e}function Ff(){return gn().memoizedState}function oa(e,t,o,l){var u=Fn();ut.flags|=e,u.memoizedState=Lo(1|t,o,void 0,l===void 0?null:l)}function ia(e,t,o,l){var u=gn();l=l===void 0?null:l;var g=void 0;if(St!==null){var w=St.memoizedState;if(g=w.destroy,l!==null&&zc(l,w.deps)){u.memoizedState=Lo(t,o,g,l);return}}ut.flags|=e,u.memoizedState=Lo(1|t,o,g,l)}function $f(e,t){return oa(8390656,8,e,t)}function Wc(e,t){return ia(2048,8,e,t)}function Hf(e,t){return ia(4,2,e,t)}function Bf(e,t){return ia(4,4,e,t)}function Wf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vf(e,t,o){return o=o!=null?o.concat([e]):null,ia(4,4,Wf.bind(null,t,e),o)}function Vc(){}function Uf(e,t){var o=gn();t=t===void 0?null:t;var l=o.memoizedState;return l!==null&&t!==null&&zc(t,l[1])?l[0]:(o.memoizedState=[e,t],e)}function Gf(e,t){var o=gn();t=t===void 0?null:t;var l=o.memoizedState;return l!==null&&t!==null&&zc(t,l[1])?l[0]:(e=e(),o.memoizedState=[e,t],e)}function Qf(e,t,o){return(Qr&21)===0?(e.baseState&&(e.baseState=!1,Qt=!0),e.memoizedState=o):(Sn(o,t)||(o=Sp(),ut.lanes|=o,qr|=o,e.baseState=!0),t)}function Pb(e,t){var o=Ye;Ye=o!==0&&4>o?o:4,e(!0);var l=Lc.transition;Lc.transition={};try{e(!1),t()}finally{Ye=o,Lc.transition=l}}function qf(){return gn().memoizedState}function Eb(e,t,o){var l=Pr(e);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Kf(e))Yf(t,o);else if(o=jf(e,t,o,l),o!==null){var u=Wt();Pn(o,e,l,u),Xf(o,t,l)}}function Rb(e,t,o){var l=Pr(e),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Yf(t,u);else{var g=e.alternate;if(e.lanes===0&&(g===null||g.lanes===0)&&(g=t.lastRenderedReducer,g!==null))try{var w=t.lastRenderedState,E=g(w,o);if(u.hasEagerState=!0,u.eagerState=E,Sn(E,w)){var T=t.interleaved;T===null?(u.next=u,Tc(t)):(u.next=T.next,T.next=u),t.interleaved=u;return}}catch{}finally{}o=jf(e,t,u,l),o!==null&&(u=Wt(),Pn(o,e,l,u),Xf(o,t,l))}}function Kf(e){var t=e.alternate;return e===ut||t!==null&&t===ut}function Yf(e,t){_o=sa=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function Xf(e,t,o){if((o&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,o|=l,t.lanes=o,Gl(e,o)}}var aa={readContext:mn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},Ab={readContext:mn,useCallback:function(e,t){return Fn().memoizedState=[e,t===void 0?null:t],e},useContext:mn,useEffect:$f,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,oa(4194308,4,Wf.bind(null,t,e),o)},useLayoutEffect:function(e,t){return oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return oa(4,2,e,t)},useMemo:function(e,t){var o=Fn();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var l=Fn();return t=o!==void 0?o(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Eb.bind(null,ut,e),[l.memoizedState,e]},useRef:function(e){var t=Fn();return e={current:e},t.memoizedState=e},useState:zf,useDebugValue:Vc,useDeferredValue:function(e){return Fn().memoizedState=e},useTransition:function(){var e=zf(!1),t=e[0];return e=Pb.bind(null,e[1]),Fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var l=ut,u=Fn();if(at){if(o===void 0)throw Error(s(407));o=o()}else{if(o=t(),Pt===null)throw Error(s(349));(Qr&30)!==0||If(l,t,o)}u.memoizedState=o;var g={value:o,getSnapshot:t};return u.queue=g,$f(Df.bind(null,l,g,e),[e]),l.flags|=2048,Lo(9,_f.bind(null,l,g,o,t),void 0,null),o},useId:function(){var e=Fn(),t=Pt.identifierPrefix;if(at){var o=tr,l=er;o=(l&~(1<<32-wn(l)-1)).toString(32)+o,t=":"+t+"R"+o,o=Do++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=jb++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tb={readContext:mn,useCallback:Uf,useContext:mn,useEffect:Wc,useImperativeHandle:Vf,useInsertionEffect:Hf,useLayoutEffect:Bf,useMemo:Gf,useReducer:Hc,useRef:Ff,useState:function(){return Hc(Oo)},useDebugValue:Vc,useDeferredValue:function(e){var t=gn();return Qf(t,St.memoizedState,e)},useTransition:function(){var e=Hc(Oo)[0],t=gn().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Mf,useId:qf,unstable_isNewReconciler:!1},Mb={readContext:mn,useCallback:Uf,useContext:mn,useEffect:Wc,useImperativeHandle:Vf,useInsertionEffect:Hf,useLayoutEffect:Bf,useMemo:Gf,useReducer:Bc,useRef:Ff,useState:function(){return Bc(Oo)},useDebugValue:Vc,useDeferredValue:function(e){var t=gn();return St===null?t.memoizedState=e:Qf(t,St.memoizedState,e)},useTransition:function(){var e=Bc(Oo)[0],t=gn().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Mf,useId:qf,unstable_isNewReconciler:!1};function kn(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function Uc(e,t,o,l){t=e.memoizedState,o=o(l,t),o=o==null?t:J({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var la={isMounted:function(e){return(e=e._reactInternals)?$r(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var l=Wt(),u=Pr(e),g=rr(l,u);g.payload=t,o!=null&&(g.callback=o),t=Cr(e,g,u),t!==null&&(Pn(t,e,u,l),ea(t,e,u))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var l=Wt(),u=Pr(e),g=rr(l,u);g.tag=1,g.payload=t,o!=null&&(g.callback=o),t=Cr(e,g,u),t!==null&&(Pn(t,e,u,l),ea(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=Wt(),l=Pr(e),u=rr(o,l);u.tag=2,t!=null&&(u.callback=t),t=Cr(e,u,l),t!==null&&(Pn(t,e,l,o),ea(t,e,l))}};function Jf(e,t,o,l,u,g,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,g,w):t.prototype&&t.prototype.isPureReactComponent?!Co(o,l)||!Co(u,g):!0}function Zf(e,t,o){var l=!1,u=br,g=t.contextType;return typeof g=="object"&&g!==null?g=mn(g):(u=Gt(t)?Br:Dt.current,l=t.contextTypes,g=(l=l!=null)?Ss(e,u):br),t=new t(o,g),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=la,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=g),t}function em(e,t,o,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,l),t.state!==e&&la.enqueueReplaceState(t,t.state,null)}function Gc(e,t,o,l){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},Mc(e);var g=t.contextType;typeof g=="object"&&g!==null?u.context=mn(g):(g=Gt(t)?Br:Dt.current,u.context=Ss(e,g)),u.state=e.memoizedState,g=t.getDerivedStateFromProps,typeof g=="function"&&(Uc(e,t,g,o),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&la.enqueueReplaceState(u,u.state,null),ta(e,o,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function As(e,t){try{var o="",l=t;do o+=oe(l),l=l.return;while(l);var u=o}catch(g){u=`
Error generating stack: `+g.message+`
`+g.stack}return{value:e,source:t,stack:u,digest:null}}function Qc(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function qc(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var Ib=typeof WeakMap=="function"?WeakMap:Map;function tm(e,t,o){o=rr(-1,o),o.tag=3,o.payload={element:null};var l=t.value;return o.callback=function(){ga||(ga=!0,cd=l),qc(e,t)},o}function nm(e,t,o){o=rr(-1,o),o.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=t.value;o.payload=function(){return l(u)},o.callback=function(){qc(e,t)}}var g=e.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){qc(e,t),typeof l!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var w=t.stack;this.componentDidCatch(t.value,{componentStack:w!==null?w:""})}),o}function rm(e,t,o){var l=e.pingCache;if(l===null){l=e.pingCache=new Ib;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(o)||(u.add(o),e=Qb.bind(null,e,t,o),t.then(e,e))}function sm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function om(e,t,o,l,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=rr(-1,1),t.tag=2,Cr(o,t,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var _b=R.ReactCurrentOwner,Qt=!1;function Bt(e,t,o,l){t.child=e===null?Nf(t,null,o,l):js(t,e.child,o,l)}function im(e,t,o,l,u){o=o.render;var g=t.ref;return Es(t,u),l=Fc(e,t,o,l,g,u),o=$c(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,sr(e,t,u)):(at&&o&&Sc(t),t.flags|=1,Bt(e,t,l,u),t.child)}function am(e,t,o,l,u){if(e===null){var g=o.type;return typeof g=="function"&&!hd(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=g,lm(e,t,g,l,u)):(e=wa(o.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(g=e.child,(e.lanes&u)===0){var w=g.memoizedProps;if(o=o.compare,o=o!==null?o:Co,o(w,l)&&e.ref===t.ref)return sr(e,t,u)}return t.flags|=1,e=Rr(g,l),e.ref=t.ref,e.return=t,t.child=e}function lm(e,t,o,l,u){if(e!==null){var g=e.memoizedProps;if(Co(g,l)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=l=g,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Qt=!0);else return t.lanes=e.lanes,sr(e,t,u)}return Kc(e,t,o,l,u)}function cm(e,t,o){var l=t.pendingProps,u=l.children,g=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Ms,sn),sn|=o;else{if((o&1073741824)===0)return e=g!==null?g.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(Ms,sn),sn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:o,Ze(Ms,sn),sn|=l}else g!==null?(l=g.baseLanes|o,t.memoizedState=null):l=o,Ze(Ms,sn),sn|=l;return Bt(e,t,u,o),t.child}function dm(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function Kc(e,t,o,l,u){var g=Gt(o)?Br:Dt.current;return g=Ss(t,g),Es(t,u),o=Fc(e,t,o,l,g,u),l=$c(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,sr(e,t,u)):(at&&l&&Sc(t),t.flags|=1,Bt(e,t,o,u),t.child)}function um(e,t,o,l,u){if(Gt(o)){var g=!0;Gi(t)}else g=!1;if(Es(t,u),t.stateNode===null)da(e,t),Zf(t,o,l),Gc(t,o,l,u),l=!0;else if(e===null){var w=t.stateNode,E=t.memoizedProps;w.props=E;var T=w.context,$=o.contextType;typeof $=="object"&&$!==null?$=mn($):($=Gt(o)?Br:Dt.current,$=Ss(t,$));var ne=o.getDerivedStateFromProps,se=typeof ne=="function"||typeof w.getSnapshotBeforeUpdate=="function";se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(E!==l||T!==$)&&em(t,w,l,$),Sr=!1;var te=t.memoizedState;w.state=te,ta(t,l,w,u),T=t.memoizedState,E!==l||te!==T||Ut.current||Sr?(typeof ne=="function"&&(Uc(t,o,ne,l),T=t.memoizedState),(E=Sr||Jf(t,o,E,l,te,T,$))?(se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(t.flags|=4194308)):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),w.props=l,w.state=T,w.context=$,l=E):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{w=t.stateNode,Pf(e,t),E=t.memoizedProps,$=t.type===t.elementType?E:kn(t.type,E),w.props=$,se=t.pendingProps,te=w.context,T=o.contextType,typeof T=="object"&&T!==null?T=mn(T):(T=Gt(o)?Br:Dt.current,T=Ss(t,T));var ve=o.getDerivedStateFromProps;(ne=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(E!==se||te!==T)&&em(t,w,l,T),Sr=!1,te=t.memoizedState,w.state=te,ta(t,l,w,u);var be=t.memoizedState;E!==se||te!==be||Ut.current||Sr?(typeof ve=="function"&&(Uc(t,o,ve,l),be=t.memoizedState),($=Sr||Jf(t,o,$,l,te,be,T)||!1)?(ne||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,be,T),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,be,T)),typeof w.componentDidUpdate=="function"&&(t.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof w.componentDidUpdate!="function"||E===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=be),w.props=l,w.state=be,w.context=T,l=$):(typeof w.componentDidUpdate!="function"||E===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),l=!1)}return Yc(e,t,o,l,g,u)}function Yc(e,t,o,l,u,g){dm(e,t);var w=(t.flags&128)!==0;if(!l&&!w)return u&&hf(t,o,!1),sr(e,t,g);l=t.stateNode,_b.current=t;var E=w&&typeof o.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&w?(t.child=js(t,e.child,null,g),t.child=js(t,null,E,g)):Bt(e,t,E,g),t.memoizedState=l.state,u&&hf(t,o,!0),t.child}function pm(e){var t=e.stateNode;t.pendingContext?mf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mf(e,t.context,!1),Ic(e,t.containerInfo)}function fm(e,t,o,l,u){return Ns(),jc(u),t.flags|=256,Bt(e,t,o,l),t.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function Jc(e){return{baseLanes:e,cachePool:null,transitions:null}}function mm(e,t,o){var l=t.pendingProps,u=dt.current,g=!1,w=(t.flags&128)!==0,E;if((E=w)||(E=e!==null&&e.memoizedState===null?!1:(u&2)!==0),E?(g=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Ze(dt,u&1),e===null)return Nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(w=l.children,e=l.fallback,g?(l=t.mode,g=t.child,w={mode:"hidden",children:w},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Sa(w,l,0,null),e=Jr(e,l,o,null),g.return=t,e.return=t,g.sibling=e,t.child=g,t.child.memoizedState=Jc(o),t.memoizedState=Xc,e):Zc(t,w));if(u=e.memoizedState,u!==null&&(E=u.dehydrated,E!==null))return Db(e,t,w,l,E,u,o);if(g){g=l.fallback,w=t.mode,u=e.child,E=u.sibling;var T={mode:"hidden",children:l.children};return(w&1)===0&&t.child!==u?(l=t.child,l.childLanes=0,l.pendingProps=T,t.deletions=null):(l=Rr(u,T),l.subtreeFlags=u.subtreeFlags&14680064),E!==null?g=Rr(E,g):(g=Jr(g,w,o,null),g.flags|=2),g.return=t,l.return=t,l.sibling=g,t.child=l,l=g,g=t.child,w=e.child.memoizedState,w=w===null?Jc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=e.childLanes&~o,t.memoizedState=Xc,l}return g=e.child,e=g.sibling,l=Rr(g,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=o),l.return=t,l.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=l,t.memoizedState=null,l}function Zc(e,t){return t=Sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ca(e,t,o,l){return l!==null&&jc(l),js(t,e.child,null,o),e=Zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Db(e,t,o,l,u,g,w){if(o)return t.flags&256?(t.flags&=-257,l=Qc(Error(s(422))),ca(e,t,w,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(g=l.fallback,u=t.mode,l=Sa({mode:"visible",children:l.children},u,0,null),g=Jr(g,u,w,null),g.flags|=2,l.return=t,g.return=t,l.sibling=g,t.child=l,(t.mode&1)!==0&&js(t,e.child,null,w),t.child.memoizedState=Jc(w),t.memoizedState=Xc,g);if((t.mode&1)===0)return ca(e,t,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var E=l.dgst;return l=E,g=Error(s(419)),l=Qc(g,l,void 0),ca(e,t,w,l)}if(E=(w&e.childLanes)!==0,Qt||E){if(l=Pt,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==g.retryLane&&(g.retryLane=u,nr(e,u),Pn(l,e,u,-1))}return gd(),l=Qc(Error(s(421))),ca(e,t,w,l)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=qb.bind(null,e),u._reactRetry=t,null):(e=g.treeContext,rn=xr(u.nextSibling),nn=t,at=!0,Cn=null,e!==null&&(pn[fn++]=er,pn[fn++]=tr,pn[fn++]=Wr,er=e.id,tr=e.overflow,Wr=t),t=Zc(t,l.children),t.flags|=4096,t)}function gm(e,t,o){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ac(e.return,t,o)}function ed(e,t,o,l,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=o,g.tailMode=u)}function hm(e,t,o){var l=t.pendingProps,u=l.revealOrder,g=l.tail;if(Bt(e,t,l.children,o),l=dt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gm(e,o,t);else if(e.tag===19)gm(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ze(dt,l),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(o=t.child,u=null;o!==null;)e=o.alternate,e!==null&&na(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=t.child,t.child=null):(u=o.sibling,o.sibling=null),ed(t,!1,u,o,g);break;case"backwards":for(o=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&na(e)===null){t.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}ed(t,!0,o,null,g);break;case"together":ed(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function da(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sr(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),qr|=t.lanes,(o&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,o=Rr(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=Rr(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function Ob(e,t,o){switch(t.tag){case 3:pm(t),Ns();break;case 5:Af(t);break;case 1:Gt(t.type)&&Gi(t);break;case 4:Ic(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,u=t.memoizedProps.value;Ze(Ji,l._currentValue),l._currentValue=u;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Ze(dt,dt.current&1),t.flags|=128,null):(o&t.child.childLanes)!==0?mm(e,t,o):(Ze(dt,dt.current&1),e=sr(e,t,o),e!==null?e.sibling:null);Ze(dt,dt.current&1);break;case 19:if(l=(o&t.childLanes)!==0,(e.flags&128)!==0){if(l)return hm(e,t,o);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ze(dt,dt.current),l)break;return null;case 22:case 23:return t.lanes=0,cm(e,t,o)}return sr(e,t,o)}var vm,td,xm,ym;vm=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},td=function(){},xm=function(e,t,o,l){var u=e.memoizedProps;if(u!==l){e=t.stateNode,Gr(zn.current);var g=null;switch(o){case"input":u=je(e,u),l=je(e,l),g=[];break;case"select":u=J({},u,{value:void 0}),l=J({},l,{value:void 0}),g=[];break;case"textarea":u=Ht(e,u),l=Ht(e,l),g=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Wi)}Ke(o,l);var w;o=null;for($ in u)if(!l.hasOwnProperty($)&&u.hasOwnProperty($)&&u[$]!=null)if($==="style"){var E=u[$];for(w in E)E.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(c.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in l){var T=l[$];if(E=u?.[$],l.hasOwnProperty($)&&T!==E&&(T!=null||E!=null))if($==="style")if(E){for(w in E)!E.hasOwnProperty(w)||T&&T.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in T)T.hasOwnProperty(w)&&E[w]!==T[w]&&(o||(o={}),o[w]=T[w])}else o||(g||(g=[]),g.push($,o)),o=T;else $==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,E=E?E.__html:void 0,T!=null&&E!==T&&(g=g||[]).push($,T)):$==="children"?typeof T!="string"&&typeof T!="number"||(g=g||[]).push($,""+T):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(c.hasOwnProperty($)?(T!=null&&$==="onScroll"&&tt("scroll",e),g||E===T||(g=[])):(g=g||[]).push($,T))}o&&(g=g||[]).push("style",o);var $=g;(t.updateQueue=$)&&(t.flags|=4)}},ym=function(e,t,o,l){o!==l&&(t.flags|=4)};function zo(e,t){if(!at)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(t)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=o,t}function Lb(e,t,o){var l=t.pendingProps;switch(Cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return Gt(t.type)&&Ui(),Lt(t),null;case 3:return l=t.stateNode,Rs(),nt(Ut),nt(Dt),Oc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cn!==null&&(pd(Cn),Cn=null))),td(e,t),Lt(t),null;case 5:_c(t);var u=Gr(Io.current);if(o=t.type,e!==null&&t.stateNode!=null)xm(e,t,o,l,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Lt(t),null}if(e=Gr(zn.current),Yi(t)){l=t.stateNode,o=t.type;var g=t.memoizedProps;switch(l[Ln]=t,l[Eo]=g,e=(t.mode&1)!==0,o){case"dialog":tt("cancel",l),tt("close",l);break;case"iframe":case"object":case"embed":tt("load",l);break;case"video":case"audio":for(u=0;u<No.length;u++)tt(No[u],l);break;case"source":tt("error",l);break;case"img":case"image":case"link":tt("error",l),tt("load",l);break;case"details":tt("toggle",l);break;case"input":Ge(l,g),tt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},tt("invalid",l);break;case"textarea":ce(l,g),tt("invalid",l)}Ke(o,g),u=null;for(var w in g)if(g.hasOwnProperty(w)){var E=g[w];w==="children"?typeof E=="string"?l.textContent!==E&&(g.suppressHydrationWarning!==!0&&Bi(l.textContent,E,e),u=["children",E]):typeof E=="number"&&l.textContent!==""+E&&(g.suppressHydrationWarning!==!0&&Bi(l.textContent,E,e),u=["children",""+E]):c.hasOwnProperty(w)&&E!=null&&w==="onScroll"&&tt("scroll",l)}switch(o){case"input":Ee(l),it(l,g,!0);break;case"textarea":Ee(l),et(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=Wi)}l=u,t.updateQueue=l,l!==null&&(t.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qe(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=w.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=w.createElement(o,{is:l.is}):(e=w.createElement(o),o==="select"&&(w=e,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):e=w.createElementNS(e,o),e[Ln]=t,e[Eo]=l,vm(e,t,!1,!1),t.stateNode=e;e:{switch(w=Ue(o,l),o){case"dialog":tt("cancel",e),tt("close",e),u=l;break;case"iframe":case"object":case"embed":tt("load",e),u=l;break;case"video":case"audio":for(u=0;u<No.length;u++)tt(No[u],e);u=l;break;case"source":tt("error",e),u=l;break;case"img":case"image":case"link":tt("error",e),tt("load",e),u=l;break;case"details":tt("toggle",e),u=l;break;case"input":Ge(e,l),u=je(e,l),tt("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=J({},l,{value:void 0}),tt("invalid",e);break;case"textarea":ce(e,l),u=Ht(e,l),tt("invalid",e);break;default:u=l}Ke(o,u),E=u;for(g in E)if(E.hasOwnProperty(g)){var T=E[g];g==="style"?Pe(e,T):g==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&ur(e,T)):g==="children"?typeof T=="string"?(o!=="textarea"||T!=="")&&_n(e,T):typeof T=="number"&&_n(e,""+T):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(c.hasOwnProperty(g)?T!=null&&g==="onScroll"&&tt("scroll",e):T!=null&&M(e,g,T,w))}switch(o){case"input":Ee(e),it(e,l,!1);break;case"textarea":Ee(e),et(e);break;case"option":l.value!=null&&e.setAttribute("value",""+X(l.value));break;case"select":e.multiple=!!l.multiple,g=l.value,g!=null?Xe(e,!!l.multiple,g,!1):l.defaultValue!=null&&Xe(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Wi)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Lt(t),null;case 6:if(e&&t.stateNode!=null)ym(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(o=Gr(Io.current),Gr(zn.current),Yi(t)){if(l=t.stateNode,o=t.memoizedProps,l[Ln]=t,(g=l.nodeValue!==o)&&(e=nn,e!==null))switch(e.tag){case 3:Bi(l.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bi(l.nodeValue,o,(e.mode&1)!==0)}g&&(t.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Ln]=t,t.stateNode=l}return Lt(t),null;case 13:if(nt(dt),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(at&&rn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Sf(),Ns(),t.flags|=98560,g=!1;else if(g=Yi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!g)throw Error(s(318));if(g=t.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(s(317));g[Ln]=t}else Ns(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Lt(t),g=!1}else Cn!==null&&(pd(Cn),Cn=null),g=!0;if(!g)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=o,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(dt.current&1)!==0?Ct===0&&(Ct=3):gd())),t.updateQueue!==null&&(t.flags|=4),Lt(t),null);case 4:return Rs(),td(e,t),e===null&&jo(t.stateNode.containerInfo),Lt(t),null;case 10:return Rc(t.type._context),Lt(t),null;case 17:return Gt(t.type)&&Ui(),Lt(t),null;case 19:if(nt(dt),g=t.memoizedState,g===null)return Lt(t),null;if(l=(t.flags&128)!==0,w=g.rendering,w===null)if(l)zo(g,!1);else{if(Ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(w=na(e),w!==null){for(t.flags|=128,zo(g,!1),l=w.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=o,o=t.child;o!==null;)g=o,e=l,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=e,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,e=w.dependencies,g.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Ze(dt,dt.current&1|2),t.child}e=e.sibling}g.tail!==null&&gt()>Is&&(t.flags|=128,l=!0,zo(g,!1),t.lanes=4194304)}else{if(!l)if(e=na(w),e!==null){if(t.flags|=128,l=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),zo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!at)return Lt(t),null}else 2*gt()-g.renderingStartTime>Is&&o!==1073741824&&(t.flags|=128,l=!0,zo(g,!1),t.lanes=4194304);g.isBackwards?(w.sibling=t.child,t.child=w):(o=g.last,o!==null?o.sibling=w:t.child=w,g.last=w)}return g.tail!==null?(t=g.tail,g.rendering=t,g.tail=t.sibling,g.renderingStartTime=gt(),t.sibling=null,o=dt.current,Ze(dt,l?o&1|2:o&1),t):(Lt(t),null);case 22:case 23:return md(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(sn&1073741824)!==0&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function zb(e,t){switch(Cc(t),t.tag){case 1:return Gt(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rs(),nt(Ut),nt(Dt),Oc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return _c(t),null;case 13:if(nt(dt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ns()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return nt(dt),null;case 4:return Rs(),null;case 10:return Rc(t.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var ua=!1,zt=!1,Fb=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Ts(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){ft(e,t,l)}else o.current=null}function nd(e,t,o){try{o()}catch(l){ft(e,t,l)}}var bm=!1;function $b(e,t){if(mc=Ti,e=Xp(),ic(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var w=0,E=-1,T=-1,$=0,ne=0,se=e,te=null;t:for(;;){for(var ve;se!==o||u!==0&&se.nodeType!==3||(E=w+u),se!==g||l!==0&&se.nodeType!==3||(T=w+l),se.nodeType===3&&(w+=se.nodeValue.length),(ve=se.firstChild)!==null;)te=se,se=ve;for(;;){if(se===e)break t;if(te===o&&++$===u&&(E=w),te===g&&++ne===l&&(T=w),(ve=se.nextSibling)!==null)break;se=te,te=se.parentNode}se=ve}o=E===-1||T===-1?null:{start:E,end:T}}else o=null}o=o||{start:0,end:0}}else o=null;for(gc={focusedElem:e,selectionRange:o},Ti=!1,ye=t;ye!==null;)if(t=ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ye=e;else for(;ye!==null;){t=ye;try{var be=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(be!==null){var Ce=be.memoizedProps,ht=be.memoizedState,L=t.stateNode,D=L.getSnapshotBeforeUpdate(t.elementType===t.type?Ce:kn(t.type,Ce),ht);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=t.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(ae){ft(t,t.return,ae)}if(e=t.sibling,e!==null){e.return=t.return,ye=e;break}ye=t.return}return be=bm,bm=!1,be}function Fo(e,t,o){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var g=u.destroy;u.destroy=void 0,g!==void 0&&nd(t,o,g)}u=u.next}while(u!==l)}}function pa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var l=o.create;o.destroy=l()}o=o.next}while(o!==t)}}function rd(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function wm(e){var t=e.alternate;t!==null&&(e.alternate=null,wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ln],delete t[Eo],delete t[yc],delete t[Sb],delete t[Cb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sm(e){return e.tag===5||e.tag===3||e.tag===4}function Cm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sd(e,t,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Wi));else if(l!==4&&(e=e.child,e!==null))for(sd(e,t,o),e=e.sibling;e!==null;)sd(e,t,o),e=e.sibling}function od(e,t,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(od(e,t,o),e=e.sibling;e!==null;)od(e,t,o),e=e.sibling}var Tt=null,Nn=!1;function kr(e,t,o){for(o=o.child;o!==null;)km(e,t,o),o=o.sibling}function km(e,t,o){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Ni,o)}catch{}switch(o.tag){case 5:zt||Ts(o,t);case 6:var l=Tt,u=Nn;Tt=null,kr(e,t,o),Tt=l,Nn=u,Tt!==null&&(Nn?(e=Tt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Tt.removeChild(o.stateNode));break;case 18:Tt!==null&&(Nn?(e=Tt,o=o.stateNode,e.nodeType===8?xc(e.parentNode,o):e.nodeType===1&&xc(e,o),vo(e)):xc(Tt,o.stateNode));break;case 4:l=Tt,u=Nn,Tt=o.stateNode.containerInfo,Nn=!0,kr(e,t,o),Tt=l,Nn=u;break;case 0:case 11:case 14:case 15:if(!zt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var g=u,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&nd(o,t,w),u=u.next}while(u!==l)}kr(e,t,o);break;case 1:if(!zt&&(Ts(o,t),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(E){ft(o,t,E)}kr(e,t,o);break;case 21:kr(e,t,o);break;case 22:o.mode&1?(zt=(l=zt)||o.memoizedState!==null,kr(e,t,o),zt=l):kr(e,t,o);break;default:kr(e,t,o)}}function Nm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Fb),t.forEach(function(l){var u=Kb.bind(null,e,l);o.has(l)||(o.add(l),l.then(u,u))})}}function jn(e,t){var o=t.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var g=e,w=t,E=w;e:for(;E!==null;){switch(E.tag){case 5:Tt=E.stateNode,Nn=!1;break e;case 3:Tt=E.stateNode.containerInfo,Nn=!0;break e;case 4:Tt=E.stateNode.containerInfo,Nn=!0;break e}E=E.return}if(Tt===null)throw Error(s(160));km(g,w,u),Tt=null,Nn=!1;var T=u.alternate;T!==null&&(T.return=null),u.return=null}catch($){ft(u,t,$)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jm(t,e),t=t.sibling}function jm(e,t){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jn(t,e),$n(e),l&4){try{Fo(3,e,e.return),pa(3,e)}catch(Ce){ft(e,e.return,Ce)}try{Fo(5,e,e.return)}catch(Ce){ft(e,e.return,Ce)}}break;case 1:jn(t,e),$n(e),l&512&&o!==null&&Ts(o,o.return);break;case 5:if(jn(t,e),$n(e),l&512&&o!==null&&Ts(o,o.return),e.flags&32){var u=e.stateNode;try{_n(u,"")}catch(Ce){ft(e,e.return,Ce)}}if(l&4&&(u=e.stateNode,u!=null)){var g=e.memoizedProps,w=o!==null?o.memoizedProps:g,E=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{E==="input"&&g.type==="radio"&&g.name!=null&&pt(u,g),Ue(E,w);var $=Ue(E,g);for(w=0;w<T.length;w+=2){var ne=T[w],se=T[w+1];ne==="style"?Pe(u,se):ne==="dangerouslySetInnerHTML"?ur(u,se):ne==="children"?_n(u,se):M(u,ne,se,$)}switch(E){case"input":vt(u,g);break;case"textarea":Je(u,g);break;case"select":var te=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!g.multiple;var ve=g.value;ve!=null?Xe(u,!!g.multiple,ve,!1):te!==!!g.multiple&&(g.defaultValue!=null?Xe(u,!!g.multiple,g.defaultValue,!0):Xe(u,!!g.multiple,g.multiple?[]:"",!1))}u[Eo]=g}catch(Ce){ft(e,e.return,Ce)}}break;case 6:if(jn(t,e),$n(e),l&4){if(e.stateNode===null)throw Error(s(162));u=e.stateNode,g=e.memoizedProps;try{u.nodeValue=g}catch(Ce){ft(e,e.return,Ce)}}break;case 3:if(jn(t,e),$n(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(Ce){ft(e,e.return,Ce)}break;case 4:jn(t,e),$n(e);break;case 13:jn(t,e),$n(e),u=e.child,u.flags&8192&&(g=u.memoizedState!==null,u.stateNode.isHidden=g,!g||u.alternate!==null&&u.alternate.memoizedState!==null||(ld=gt())),l&4&&Nm(e);break;case 22:if(ne=o!==null&&o.memoizedState!==null,e.mode&1?(zt=($=zt)||ne,jn(t,e),zt=$):jn(t,e),$n(e),l&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!ne&&(e.mode&1)!==0)for(ye=e,ne=e.child;ne!==null;){for(se=ye=ne;ye!==null;){switch(te=ye,ve=te.child,te.tag){case 0:case 11:case 14:case 15:Fo(4,te,te.return);break;case 1:Ts(te,te.return);var be=te.stateNode;if(typeof be.componentWillUnmount=="function"){l=te,o=te.return;try{t=l,be.props=t.memoizedProps,be.state=t.memoizedState,be.componentWillUnmount()}catch(Ce){ft(l,o,Ce)}}break;case 5:Ts(te,te.return);break;case 22:if(te.memoizedState!==null){Rm(se);continue}}ve!==null?(ve.return=te,ye=ve):Rm(se)}ne=ne.sibling}e:for(ne=null,se=e;;){if(se.tag===5){if(ne===null){ne=se;try{u=se.stateNode,$?(g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(E=se.stateNode,T=se.memoizedProps.style,w=T!=null&&T.hasOwnProperty("display")?T.display:null,E.style.display=xe("display",w))}catch(Ce){ft(e,e.return,Ce)}}}else if(se.tag===6){if(ne===null)try{se.stateNode.nodeValue=$?"":se.memoizedProps}catch(Ce){ft(e,e.return,Ce)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===e)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===e)break e;for(;se.sibling===null;){if(se.return===null||se.return===e)break e;ne===se&&(ne=null),se=se.return}ne===se&&(ne=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:jn(t,e),$n(e),l&4&&Nm(e);break;case 21:break;default:jn(t,e),$n(e)}}function $n(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(Sm(o)){var l=o;break e}o=o.return}throw Error(s(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(_n(u,""),l.flags&=-33);var g=Cm(e);od(e,g,u);break;case 3:case 4:var w=l.stateNode.containerInfo,E=Cm(e);sd(e,E,w);break;default:throw Error(s(161))}}catch(T){ft(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hb(e,t,o){ye=e,Pm(e)}function Pm(e,t,o){for(var l=(e.mode&1)!==0;ye!==null;){var u=ye,g=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||ua;if(!w){var E=u.alternate,T=E!==null&&E.memoizedState!==null||zt;E=ua;var $=zt;if(ua=w,(zt=T)&&!$)for(ye=u;ye!==null;)w=ye,T=w.child,w.tag===22&&w.memoizedState!==null?Am(u):T!==null?(T.return=w,ye=T):Am(u);for(;g!==null;)ye=g,Pm(g),g=g.sibling;ye=u,ua=E,zt=$}Em(e)}else(u.subtreeFlags&8772)!==0&&g!==null?(g.return=u,ye=g):Em(e)}}function Em(e){for(;ye!==null;){var t=ye;if((t.flags&8772)!==0){var o=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:zt||pa(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!zt)if(o===null)l.componentDidMount();else{var u=t.elementType===t.type?o.memoizedProps:kn(t.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=t.updateQueue;g!==null&&Rf(t,g,l);break;case 3:var w=t.updateQueue;if(w!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}Rf(t,w,o)}break;case 5:var E=t.stateNode;if(o===null&&t.flags&4){o=E;var T=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&o.focus();break;case"img":T.src&&(o.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var $=t.alternate;if($!==null){var ne=$.memoizedState;if(ne!==null){var se=ne.dehydrated;se!==null&&vo(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}zt||t.flags&512&&rd(t)}catch(te){ft(t,t.return,te)}}if(t===e){ye=null;break}if(o=t.sibling,o!==null){o.return=t.return,ye=o;break}ye=t.return}}function Rm(e){for(;ye!==null;){var t=ye;if(t===e){ye=null;break}var o=t.sibling;if(o!==null){o.return=t.return,ye=o;break}ye=t.return}}function Am(e){for(;ye!==null;){var t=ye;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{pa(4,t)}catch(T){ft(t,o,T)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var u=t.return;try{l.componentDidMount()}catch(T){ft(t,u,T)}}var g=t.return;try{rd(t)}catch(T){ft(t,g,T)}break;case 5:var w=t.return;try{rd(t)}catch(T){ft(t,w,T)}}}catch(T){ft(t,t.return,T)}if(t===e){ye=null;break}var E=t.sibling;if(E!==null){E.return=t.return,ye=E;break}ye=t.return}}var Bb=Math.ceil,fa=R.ReactCurrentDispatcher,id=R.ReactCurrentOwner,hn=R.ReactCurrentBatchConfig,We=0,Pt=null,xt=null,Mt=0,sn=0,Ms=yr(0),Ct=0,$o=null,qr=0,ma=0,ad=0,Ho=null,qt=null,ld=0,Is=1/0,or=null,ga=!1,cd=null,Nr=null,ha=!1,jr=null,va=0,Bo=0,dd=null,xa=-1,ya=0;function Wt(){return(We&6)!==0?gt():xa!==-1?xa:xa=gt()}function Pr(e){return(e.mode&1)===0?1:(We&2)!==0&&Mt!==0?Mt&-Mt:Nb.transition!==null?(ya===0&&(ya=Sp()),ya):(e=Ye,e!==0||(e=window.event,e=e===void 0?16:Tp(e.type)),e)}function Pn(e,t,o,l){if(50<Bo)throw Bo=0,dd=null,Error(s(185));po(e,o,l),((We&2)===0||e!==Pt)&&(e===Pt&&((We&2)===0&&(ma|=o),Ct===4&&Er(e,Mt)),Kt(e,l),o===1&&We===0&&(t.mode&1)===0&&(Is=gt()+500,Qi&&wr()))}function Kt(e,t){var o=e.callbackNode;Ny(e,t);var l=Ei(e,e===Pt?Mt:0);if(l===0)o!==null&&yp(o),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(o!=null&&yp(o),t===1)e.tag===0?kb(Mm.bind(null,e)):vf(Mm.bind(null,e)),bb(function(){(We&6)===0&&wr()}),o=null;else{switch(Cp(l)){case 1:o=Wl;break;case 4:o=bp;break;case 16:o=ki;break;case 536870912:o=wp;break;default:o=ki}o=$m(o,Tm.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function Tm(e,t){if(xa=-1,ya=0,(We&6)!==0)throw Error(s(327));var o=e.callbackNode;if(_s()&&e.callbackNode!==o)return null;var l=Ei(e,e===Pt?Mt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=ba(e,l);else{t=l;var u=We;We|=2;var g=_m();(Pt!==e||Mt!==t)&&(or=null,Is=gt()+500,Yr(e,t));do try{Ub();break}catch(E){Im(e,E)}while(!0);Ec(),fa.current=g,We=u,xt!==null?t=0:(Pt=null,Mt=0,t=Ct)}if(t!==0){if(t===2&&(u=Vl(e),u!==0&&(l=u,t=ud(e,u))),t===1)throw o=$o,Yr(e,0),Er(e,l),Kt(e,gt()),o;if(t===6)Er(e,l);else{if(u=e.current.alternate,(l&30)===0&&!Wb(u)&&(t=ba(e,l),t===2&&(g=Vl(e),g!==0&&(l=g,t=ud(e,g))),t===1))throw o=$o,Yr(e,0),Er(e,l),Kt(e,gt()),o;switch(e.finishedWork=u,e.finishedLanes=l,t){case 0:case 1:throw Error(s(345));case 2:Xr(e,qt,or);break;case 3:if(Er(e,l),(l&130023424)===l&&(t=ld+500-gt(),10<t)){if(Ei(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){Wt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=vc(Xr.bind(null,e,qt,or),t);break}Xr(e,qt,or);break;case 4:if(Er(e,l),(l&4194240)===l)break;for(t=e.eventTimes,u=-1;0<l;){var w=31-wn(l);g=1<<w,w=t[w],w>u&&(u=w),l&=~g}if(l=u,l=gt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Bb(l/1960))-l,10<l){e.timeoutHandle=vc(Xr.bind(null,e,qt,or),l);break}Xr(e,qt,or);break;case 5:Xr(e,qt,or);break;default:throw Error(s(329))}}}return Kt(e,gt()),e.callbackNode===o?Tm.bind(null,e):null}function ud(e,t){var o=Ho;return e.current.memoizedState.isDehydrated&&(Yr(e,t).flags|=256),e=ba(e,t),e!==2&&(t=qt,qt=o,t!==null&&pd(t)),e}function pd(e){qt===null?qt=e:qt.push.apply(qt,e)}function Wb(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],g=u.getSnapshot;u=u.value;try{if(!Sn(g(),u))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Er(e,t){for(t&=~ad,t&=~ma,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-wn(t),l=1<<o;e[o]=-1,t&=~l}}function Mm(e){if((We&6)!==0)throw Error(s(327));_s();var t=Ei(e,0);if((t&1)===0)return Kt(e,gt()),null;var o=ba(e,t);if(e.tag!==0&&o===2){var l=Vl(e);l!==0&&(t=l,o=ud(e,l))}if(o===1)throw o=$o,Yr(e,0),Er(e,t),Kt(e,gt()),o;if(o===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xr(e,qt,or),Kt(e,gt()),null}function fd(e,t){var o=We;We|=1;try{return e(t)}finally{We=o,We===0&&(Is=gt()+500,Qi&&wr())}}function Kr(e){jr!==null&&jr.tag===0&&(We&6)===0&&_s();var t=We;We|=1;var o=hn.transition,l=Ye;try{if(hn.transition=null,Ye=1,e)return e()}finally{Ye=l,hn.transition=o,We=t,(We&6)===0&&wr()}}function md(){sn=Ms.current,nt(Ms)}function Yr(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,yb(o)),xt!==null)for(o=xt.return;o!==null;){var l=o;switch(Cc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ui();break;case 3:Rs(),nt(Ut),nt(Dt),Oc();break;case 5:_c(l);break;case 4:Rs();break;case 13:nt(dt);break;case 19:nt(dt);break;case 10:Rc(l.type._context);break;case 22:case 23:md()}o=o.return}if(Pt=e,xt=e=Rr(e.current,null),Mt=sn=t,Ct=0,$o=null,ad=ma=qr=0,qt=Ho=null,Ur!==null){for(t=0;t<Ur.length;t++)if(o=Ur[t],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,g=o.pending;if(g!==null){var w=g.next;g.next=u,l.next=w}o.pending=l}Ur=null}return e}function Im(e,t){do{var o=xt;try{if(Ec(),ra.current=aa,sa){for(var l=ut.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}sa=!1}if(Qr=0,jt=St=ut=null,_o=!1,Do=0,id.current=null,o===null||o.return===null){Ct=1,$o=t,xt=null;break}e:{var g=e,w=o.return,E=o,T=t;if(t=Mt,E.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var $=T,ne=E,se=ne.tag;if((ne.mode&1)===0&&(se===0||se===11||se===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var ve=sm(w);if(ve!==null){ve.flags&=-257,om(ve,w,E,g,t),ve.mode&1&&rm(g,$,t),t=ve,T=$;var be=t.updateQueue;if(be===null){var Ce=new Set;Ce.add(T),t.updateQueue=Ce}else be.add(T);break e}else{if((t&1)===0){rm(g,$,t),gd();break e}T=Error(s(426))}}else if(at&&E.mode&1){var ht=sm(w);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),om(ht,w,E,g,t),jc(As(T,E));break e}}g=T=As(T,E),Ct!==4&&(Ct=2),Ho===null?Ho=[g]:Ho.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,t&=-t,g.lanes|=t;var L=tm(g,T,t);Ef(g,L);break e;case 1:E=T;var D=g.type,F=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Nr===null||!Nr.has(F)))){g.flags|=65536,t&=-t,g.lanes|=t;var ae=nm(g,E,t);Ef(g,ae);break e}}g=g.return}while(g!==null)}Om(o)}catch(Ne){t=Ne,xt===o&&o!==null&&(xt=o=o.return);continue}break}while(!0)}function _m(){var e=fa.current;return fa.current=aa,e===null?aa:e}function gd(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Pt===null||(qr&268435455)===0&&(ma&268435455)===0||Er(Pt,Mt)}function ba(e,t){var o=We;We|=2;var l=_m();(Pt!==e||Mt!==t)&&(or=null,Yr(e,t));do try{Vb();break}catch(u){Im(e,u)}while(!0);if(Ec(),We=o,fa.current=l,xt!==null)throw Error(s(261));return Pt=null,Mt=0,Ct}function Vb(){for(;xt!==null;)Dm(xt)}function Ub(){for(;xt!==null&&!hy();)Dm(xt)}function Dm(e){var t=Fm(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?Om(e):xt=t,id.current=null}function Om(e){var t=e;do{var o=t.alternate;if(e=t.return,(t.flags&32768)===0){if(o=Lb(o,t,sn),o!==null){xt=o;return}}else{if(o=zb(o,t),o!==null){o.flags&=32767,xt=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ct=6,xt=null;return}}if(t=t.sibling,t!==null){xt=t;return}xt=t=e}while(t!==null);Ct===0&&(Ct=5)}function Xr(e,t,o){var l=Ye,u=hn.transition;try{hn.transition=null,Ye=1,Gb(e,t,o,l)}finally{hn.transition=u,Ye=l}return null}function Gb(e,t,o,l){do _s();while(jr!==null);if((We&6)!==0)throw Error(s(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var g=o.lanes|o.childLanes;if(jy(e,g),e===Pt&&(xt=Pt=null,Mt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ha||(ha=!0,$m(ki,function(){return _s(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=hn.transition,hn.transition=null;var w=Ye;Ye=1;var E=We;We|=4,id.current=null,$b(e,o),jm(o,e),pb(gc),Ti=!!mc,gc=mc=null,e.current=o,Hb(o),vy(),We=E,Ye=w,hn.transition=g}else e.current=o;if(ha&&(ha=!1,jr=e,va=u),g=e.pendingLanes,g===0&&(Nr=null),by(o.stateNode),Kt(e,gt()),t!==null)for(l=e.onRecoverableError,o=0;o<t.length;o++)u=t[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(ga)throw ga=!1,e=cd,cd=null,e;return(va&1)!==0&&e.tag!==0&&_s(),g=e.pendingLanes,(g&1)!==0?e===dd?Bo++:(Bo=0,dd=e):Bo=0,wr(),null}function _s(){if(jr!==null){var e=Cp(va),t=hn.transition,o=Ye;try{if(hn.transition=null,Ye=16>e?16:e,jr===null)var l=!1;else{if(e=jr,jr=null,va=0,(We&6)!==0)throw Error(s(331));var u=We;for(We|=4,ye=e.current;ye!==null;){var g=ye,w=g.child;if((ye.flags&16)!==0){var E=g.deletions;if(E!==null){for(var T=0;T<E.length;T++){var $=E[T];for(ye=$;ye!==null;){var ne=ye;switch(ne.tag){case 0:case 11:case 15:Fo(8,ne,g)}var se=ne.child;if(se!==null)se.return=ne,ye=se;else for(;ye!==null;){ne=ye;var te=ne.sibling,ve=ne.return;if(wm(ne),ne===$){ye=null;break}if(te!==null){te.return=ve,ye=te;break}ye=ve}}}var be=g.alternate;if(be!==null){var Ce=be.child;if(Ce!==null){be.child=null;do{var ht=Ce.sibling;Ce.sibling=null,Ce=ht}while(Ce!==null)}}ye=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ye=w;else e:for(;ye!==null;){if(g=ye,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Fo(9,g,g.return)}var L=g.sibling;if(L!==null){L.return=g.return,ye=L;break e}ye=g.return}}var D=e.current;for(ye=D;ye!==null;){w=ye;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,ye=F;else e:for(w=D;ye!==null;){if(E=ye,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:pa(9,E)}}catch(Ne){ft(E,E.return,Ne)}if(E===w){ye=null;break e}var ae=E.sibling;if(ae!==null){ae.return=E.return,ye=ae;break e}ye=E.return}}if(We=u,wr(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Ni,e)}catch{}l=!0}return l}finally{Ye=o,hn.transition=t}}return!1}function Lm(e,t,o){t=As(o,t),t=tm(e,t,1),e=Cr(e,t,1),t=Wt(),e!==null&&(po(e,1,t),Kt(e,t))}function ft(e,t,o){if(e.tag===3)Lm(e,e,o);else for(;t!==null;){if(t.tag===3){Lm(t,e,o);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Nr===null||!Nr.has(l))){e=As(o,e),e=nm(t,e,1),t=Cr(t,e,1),e=Wt(),t!==null&&(po(t,1,e),Kt(t,e));break}}t=t.return}}function Qb(e,t,o){var l=e.pingCache;l!==null&&l.delete(t),t=Wt(),e.pingedLanes|=e.suspendedLanes&o,Pt===e&&(Mt&o)===o&&(Ct===4||Ct===3&&(Mt&130023424)===Mt&&500>gt()-ld?Yr(e,0):ad|=o),Kt(e,t)}function zm(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pi,Pi<<=1,(Pi&130023424)===0&&(Pi=4194304)));var o=Wt();e=nr(e,t),e!==null&&(po(e,t,o),Kt(e,o))}function qb(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),zm(e,o)}function Kb(e,t){var o=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(s(314))}l!==null&&l.delete(t),zm(e,o)}var Fm;Fm=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ut.current)Qt=!0;else{if((e.lanes&o)===0&&(t.flags&128)===0)return Qt=!1,Ob(e,t,o);Qt=(e.flags&131072)!==0}else Qt=!1,at&&(t.flags&1048576)!==0&&xf(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;da(e,t),e=t.pendingProps;var u=Ss(t,Dt.current);Es(t,o),u=Fc(null,t,l,e,u,o);var g=$c();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Gt(l)?(g=!0,Gi(t)):g=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Mc(t),u.updater=la,t.stateNode=u,u._reactInternals=t,Gc(t,l,e,o),t=Yc(null,t,l,!0,g,o)):(t.tag=0,at&&g&&Sc(t),Bt(null,t,u,o),t=t.child),t;case 16:l=t.elementType;e:{switch(da(e,t),e=t.pendingProps,u=l._init,l=u(l._payload),t.type=l,u=t.tag=Xb(l),e=kn(l,e),u){case 0:t=Kc(null,t,l,e,o);break e;case 1:t=um(null,t,l,e,o);break e;case 11:t=im(null,t,l,e,o);break e;case 14:t=am(null,t,l,kn(l.type,e),o);break e}throw Error(s(306,l,""))}return t;case 0:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:kn(l,u),Kc(e,t,l,u,o);case 1:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:kn(l,u),um(e,t,l,u,o);case 3:e:{if(pm(t),e===null)throw Error(s(387));l=t.pendingProps,g=t.memoizedState,u=g.element,Pf(e,t),ta(t,l,null,o);var w=t.memoizedState;if(l=w.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},t.updateQueue.baseState=g,t.memoizedState=g,t.flags&256){u=As(Error(s(423)),t),t=fm(e,t,l,o,u);break e}else if(l!==u){u=As(Error(s(424)),t),t=fm(e,t,l,o,u);break e}else for(rn=xr(t.stateNode.containerInfo.firstChild),nn=t,at=!0,Cn=null,o=Nf(t,null,l,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ns(),l===u){t=sr(e,t,o);break e}Bt(e,t,l,o)}t=t.child}return t;case 5:return Af(t),e===null&&Nc(t),l=t.type,u=t.pendingProps,g=e!==null?e.memoizedProps:null,w=u.children,hc(l,u)?w=null:g!==null&&hc(l,g)&&(t.flags|=32),dm(e,t),Bt(e,t,w,o),t.child;case 6:return e===null&&Nc(t),null;case 13:return mm(e,t,o);case 4:return Ic(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=js(t,null,l,o):Bt(e,t,l,o),t.child;case 11:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:kn(l,u),im(e,t,l,u,o);case 7:return Bt(e,t,t.pendingProps,o),t.child;case 8:return Bt(e,t,t.pendingProps.children,o),t.child;case 12:return Bt(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(l=t.type._context,u=t.pendingProps,g=t.memoizedProps,w=u.value,Ze(Ji,l._currentValue),l._currentValue=w,g!==null)if(Sn(g.value,w)){if(g.children===u.children&&!Ut.current){t=sr(e,t,o);break e}}else for(g=t.child,g!==null&&(g.return=t);g!==null;){var E=g.dependencies;if(E!==null){w=g.child;for(var T=E.firstContext;T!==null;){if(T.context===l){if(g.tag===1){T=rr(-1,o&-o),T.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var ne=$.pending;ne===null?T.next=T:(T.next=ne.next,ne.next=T),$.pending=T}}g.lanes|=o,T=g.alternate,T!==null&&(T.lanes|=o),Ac(g.return,o,t),E.lanes|=o;break}T=T.next}}else if(g.tag===10)w=g.type===t.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(s(341));w.lanes|=o,E=w.alternate,E!==null&&(E.lanes|=o),Ac(w,o,t),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===t){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Bt(e,t,u.children,o),t=t.child}return t;case 9:return u=t.type,l=t.pendingProps.children,Es(t,o),u=mn(u),l=l(u),t.flags|=1,Bt(e,t,l,o),t.child;case 14:return l=t.type,u=kn(l,t.pendingProps),u=kn(l.type,u),am(e,t,l,u,o);case 15:return lm(e,t,t.type,t.pendingProps,o);case 17:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:kn(l,u),da(e,t),t.tag=1,Gt(l)?(e=!0,Gi(t)):e=!1,Es(t,o),Zf(t,l,u),Gc(t,l,u,o),Yc(null,t,l,!0,e,o);case 19:return hm(e,t,o);case 22:return cm(e,t,o)}throw Error(s(156,t.tag))};function $m(e,t){return xp(e,t)}function Yb(e,t,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,t,o,l){return new Yb(e,t,o,l)}function hd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xb(e){if(typeof e=="function")return hd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ie)return 11;if(e===fe)return 14}return 2}function Rr(e,t){var o=e.alternate;return o===null?(o=vn(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function wa(e,t,o,l,u,g){var w=2;if(l=e,typeof e=="function")hd(e)&&(w=1);else if(typeof e=="string")w=5;else e:switch(e){case z:return Jr(o.children,u,g,t);case V:w=8,u|=8;break;case re:return e=vn(12,o,t,u|2),e.elementType=re,e.lanes=g,e;case me:return e=vn(13,o,t,u),e.elementType=me,e.lanes=g,e;case ue:return e=vn(19,o,t,u),e.elementType=ue,e.lanes=g,e;case Y:return Sa(o,u,g,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:w=10;break e;case de:w=9;break e;case ie:w=11;break e;case fe:w=14;break e;case ee:w=16,l=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=vn(w,o,t,u),t.elementType=e,t.type=l,t.lanes=g,t}function Jr(e,t,o,l){return e=vn(7,e,l,t),e.lanes=o,e}function Sa(e,t,o,l){return e=vn(22,e,l,t),e.elementType=Y,e.lanes=o,e.stateNode={isHidden:!1},e}function vd(e,t,o){return e=vn(6,e,null,t),e.lanes=o,e}function xd(e,t,o){return t=vn(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jb(e,t,o,l,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function yd(e,t,o,l,u,g,w,E,T){return e=new Jb(e,t,o,E,T),t===1?(t=1,g===!0&&(t|=8)):t=0,g=vn(3,null,null,t),e.current=g,g.stateNode=e,g.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(g),e}function Zb(e,t,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:l==null?null:""+l,children:e,containerInfo:t,implementation:o}}function Hm(e){if(!e)return br;e=e._reactInternals;e:{if($r(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var o=e.type;if(Gt(o))return gf(e,o,t)}return t}function Bm(e,t,o,l,u,g,w,E,T){return e=yd(o,l,!0,e,u,g,w,E,T),e.context=Hm(null),o=e.current,l=Wt(),u=Pr(o),g=rr(l,u),g.callback=t??null,Cr(o,g,u),e.current.lanes=u,po(e,u,l),Kt(e,l),e}function Ca(e,t,o,l){var u=t.current,g=Wt(),w=Pr(u);return o=Hm(o),t.context===null?t.context=o:t.pendingContext=o,t=rr(g,w),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Cr(u,t,w),e!==null&&(Pn(e,u,w,g),ea(e,u,w)),w}function ka(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function bd(e,t){Wm(e,t),(e=e.alternate)&&Wm(e,t)}function ew(){return null}var Vm=typeof reportError=="function"?reportError:function(e){console.error(e)};function wd(e){this._internalRoot=e}Na.prototype.render=wd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ca(e,t,null,null)},Na.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){Ca(null,e,null,null)}),t[Jn]=null}};function Na(e){this._internalRoot=e}Na.prototype.unstable_scheduleHydration=function(e){if(e){var t=jp();e={blockedOn:null,target:e,priority:t};for(var o=0;o<gr.length&&t!==0&&t<gr[o].priority;o++);gr.splice(o,0,e),o===0&&Rp(e)}};function Sd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Um(){}function tw(e,t,o,l,u){if(u){if(typeof l=="function"){var g=l;l=function(){var $=ka(w);g.call($)}}var w=Bm(t,l,e,0,null,!1,!1,"",Um);return e._reactRootContainer=w,e[Jn]=w.current,jo(e.nodeType===8?e.parentNode:e),Kr(),w}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var E=l;l=function(){var $=ka(T);E.call($)}}var T=yd(e,0,!1,null,null,!1,!1,"",Um);return e._reactRootContainer=T,e[Jn]=T.current,jo(e.nodeType===8?e.parentNode:e),Kr(function(){Ca(t,T,o,l)}),T}function Pa(e,t,o,l,u){var g=o._reactRootContainer;if(g){var w=g;if(typeof u=="function"){var E=u;u=function(){var T=ka(w);E.call(T)}}Ca(t,w,e,u)}else w=tw(o,t,e,u,l);return ka(w)}kp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=uo(t.pendingLanes);o!==0&&(Gl(t,o|1),Kt(t,gt()),(We&6)===0&&(Is=gt()+500,wr()))}break;case 13:Kr(function(){var l=nr(e,1);if(l!==null){var u=Wt();Pn(l,e,1,u)}}),bd(e,1)}},Ql=function(e){if(e.tag===13){var t=nr(e,134217728);if(t!==null){var o=Wt();Pn(t,e,134217728,o)}bd(e,134217728)}},Np=function(e){if(e.tag===13){var t=Pr(e),o=nr(e,t);if(o!==null){var l=Wt();Pn(o,e,t,l)}bd(e,t)}},jp=function(){return Ye},Pp=function(e,t){var o=Ye;try{return Ye=e,t()}finally{Ye=o}},en=function(e,t,o){switch(t){case"input":if(vt(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var l=o[t];if(l!==e&&l.form===e.form){var u=Vi(l);if(!u)throw Error(s(90));Re(l),vt(l,u)}}}break;case"textarea":Je(e,o);break;case"select":t=o.value,t!=null&&Xe(e,!!o.multiple,t,!1)}},ps=fd,pp=Kr;var nw={usingClientEntryPoint:!1,Events:[Ro,bs,Vi,De,ct,fd]},Wo={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rw={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hp(e),e===null?null:e.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||ew,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Ni=Ea.inject(rw),On=Ea}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw,Yt.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(t))throw Error(s(200));return Zb(e,t,null,o)},Yt.createRoot=function(e,t){if(!Sd(e))throw Error(s(299));var o=!1,l="",u=Vm;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=yd(e,1,!1,null,null,o,!1,l,u),e[Jn]=t.current,jo(e.nodeType===8?e.parentNode:e),new wd(t)},Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=hp(t),e=e===null?null:e.stateNode,e},Yt.flushSync=function(e){return Kr(e)},Yt.hydrate=function(e,t,o){if(!ja(t))throw Error(s(200));return Pa(null,e,t,!0,o)},Yt.hydrateRoot=function(e,t,o){if(!Sd(e))throw Error(s(405));var l=o!=null&&o.hydratedSources||null,u=!1,g="",w=Vm;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),t=Bm(t,null,e,1,o??null,u,!1,g,w),e[Jn]=t.current,jo(e),l)for(e=0;e<l.length;e++)o=l[e],u=o._getVersion,u=u(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,u]:t.mutableSourceEagerHydrationData.push(o,u);return new Na(t)},Yt.render=function(e,t,o){if(!ja(t))throw Error(s(200));return Pa(null,e,t,!1,o)},Yt.unmountComponentAtNode=function(e){if(!ja(e))throw Error(s(40));return e._reactRootContainer?(Kr(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[Jn]=null})}),!0):!1},Yt.unstable_batchedUpdates=fd,Yt.unstable_renderSubtreeIntoContainer=function(e,t,o,l){if(!ja(o))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Pa(e,t,o,!1,l)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Zm;function ah(){if(Zm)return Nd.exports;Zm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Nd.exports=uw(),Nd.exports}var eg;function pw(){if(eg)return Ra;eg=1;var n=ah();return Ra.createRoot=n.createRoot,Ra.hydrateRoot=n.hydrateRoot,Ra}var fw=pw(),f=yu();const Xt=ih(f),cl=ow({__proto__:null,default:Xt},[f]);/**
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
 */const Dw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ks=ke("chevron-down",Dw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Lw=ke("chevron-left",Ow);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ys=ke("chevron-right",zw);/**
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
 */const Xw=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Uo=ke("copy",Xw);/**
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
 */const t2=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],ss=ke("ellipsis",t2);/**
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
 */const h2=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Bs=ke("message-square",h2);/**
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
 */const $2=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Xo=ke("square-pen",$2);/**
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
 */const W2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],os=ke("trash-2",W2);/**
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
 */const Z2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Xs=ke("x",Z2);function ug(n,r){if(typeof n=="function")return n(r);n!=null&&(n.current=r)}function dr(...n){return r=>{let s=!1;const a=n.map(c=>{const d=ug(c,r);return!s&&typeof d=="function"&&(s=!0),d});if(s)return()=>{for(let c=0;c<a.length;c++){const d=a[c];typeof d=="function"?d():ug(n[c],null)}}}}function ze(...n){return f.useCallback(dr(...n),n)}var e1=Symbol.for("react.lazy"),Ka=cl[" use ".trim().toString()];function t1(n){return typeof n=="object"&&n!==null&&"then"in n}function mh(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===e1&&"_payload"in n&&t1(n._payload)}function wu(n){const r=r1(n),s=f.forwardRef((a,c)=>{let{children:d,...p}=a;mh(d)&&typeof Ka=="function"&&(d=Ka(d._payload));const m=f.Children.toArray(d),h=m.find(o1);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return i.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return i.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}var n1=wu("Slot");function r1(n){const r=f.forwardRef((s,a)=>{let{children:c,...d}=s;if(mh(c)&&typeof Ka=="function"&&(c=Ka(c._payload)),f.isValidElement(c)){const p=a1(c),m=i1(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var s1=Symbol("radix.slottable");function o1(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===s1}function i1(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function a1(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function gh(n){var r,s,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(r=0;r<c;r++)n[r]&&(s=gh(n[r]))&&(a&&(a+=" "),a+=s)}else for(s in n)n[s]&&(a&&(a+=" "),a+=s);return a}function hh(){for(var n,r,s=0,a="",c=arguments.length;s<c;s++)(n=arguments[s])&&(r=gh(n))&&(a&&(a+=" "),a+=r);return a}const pg=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,fg=hh,l1=(n,r)=>s=>{var a;if(r?.variants==null)return fg(n,s?.class,s?.className);const{variants:c,defaultVariants:d}=r,p=Object.keys(c).map(v=>{const y=s?.[v],x=d?.[v];if(y===null)return null;const b=pg(y)||pg(x);return c[v][b]}),m=s&&Object.entries(s).reduce((v,y)=>{let[x,b]=y;return b===void 0||(v[x]=b),v},{}),h=r==null||(a=r.compoundVariants)===null||a===void 0?void 0:a.reduce((v,y)=>{let{class:x,className:b,...S}=y;return Object.entries(S).every(N=>{let[C,k]=N;return Array.isArray(k)?k.includes({...d,...m}[C]):{...d,...m}[C]===k})?[...v,x,b]:v},[]);return fg(n,p,h,s?.class,s?.className)},c1=(n,r)=>{const s=new Array(n.length+r.length);for(let a=0;a<n.length;a++)s[a]=n[a];for(let a=0;a<r.length;a++)s[n.length+a]=r[a];return s},d1=(n,r)=>({classGroupId:n,validator:r}),vh=(n=new Map,r=null,s)=>({nextPart:n,validators:r,classGroupId:s}),Ya="-",mg=[],u1="arbitrary..",p1=n=>{const r=m1(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:a}=n;return{getClassGroupId:p=>{if(p.startsWith("[")&&p.endsWith("]"))return f1(p);const m=p.split(Ya),h=m[0]===""&&m.length>1?1:0;return xh(m,h,r)},getConflictingClassGroupIds:(p,m)=>{if(m){const h=a[p],v=s[p];return h?v?c1(v,h):h:v||mg}return s[p]||mg}}},xh=(n,r,s)=>{if(n.length-r===0)return s.classGroupId;const c=n[r],d=s.nextPart.get(c);if(d){const v=xh(n,r+1,d);if(v)return v}const p=s.validators;if(p===null)return;const m=r===0?n.join(Ya):n.slice(r).join(Ya),h=p.length;for(let v=0;v<h;v++){const y=p[v];if(y.validator(m))return y.classGroupId}},f1=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=n.slice(1,-1),s=r.indexOf(":"),a=r.slice(0,s);return a?u1+a:void 0})(),m1=n=>{const{theme:r,classGroups:s}=n;return g1(s,r)},g1=(n,r)=>{const s=vh();for(const a in n){const c=n[a];Su(c,s,a,r)}return s},Su=(n,r,s,a)=>{const c=n.length;for(let d=0;d<c;d++){const p=n[d];h1(p,r,s,a)}},h1=(n,r,s,a)=>{if(typeof n=="string"){v1(n,r,s);return}if(typeof n=="function"){x1(n,r,s,a);return}y1(n,r,s,a)},v1=(n,r,s)=>{const a=n===""?r:yh(r,n);a.classGroupId=s},x1=(n,r,s,a)=>{if(b1(n)){Su(n(a),r,s,a);return}r.validators===null&&(r.validators=[]),r.validators.push(d1(s,n))},y1=(n,r,s,a)=>{const c=Object.entries(n),d=c.length;for(let p=0;p<d;p++){const[m,h]=c[p];Su(h,yh(r,m),s,a)}},yh=(n,r)=>{let s=n;const a=r.split(Ya),c=a.length;for(let d=0;d<c;d++){const p=a[d];let m=s.nextPart.get(p);m||(m=vh(),s.nextPart.set(p,m)),s=m}return s},b1=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,w1=n=>{if(n<1)return{get:()=>{},set:()=>{}};let r=0,s=Object.create(null),a=Object.create(null);const c=(d,p)=>{s[d]=p,r++,r>n&&(r=0,a=s,s=Object.create(null))};return{get(d){let p=s[d];if(p!==void 0)return p;if((p=a[d])!==void 0)return c(d,p),p},set(d,p){d in s?s[d]=p:c(d,p)}}},eu="!",gg=":",S1=[],hg=(n,r,s,a,c)=>({modifiers:n,hasImportantModifier:r,baseClassName:s,maybePostfixModifierPosition:a,isExternal:c}),C1=n=>{const{prefix:r,experimentalParseClassName:s}=n;let a=c=>{const d=[];let p=0,m=0,h=0,v;const y=c.length;for(let C=0;C<y;C++){const k=c[C];if(p===0&&m===0){if(k===gg){d.push(c.slice(h,C)),h=C+1;continue}if(k==="/"){v=C;continue}}k==="["?p++:k==="]"?p--:k==="("?m++:k===")"&&m--}const x=d.length===0?c:c.slice(h);let b=x,S=!1;x.endsWith(eu)?(b=x.slice(0,-1),S=!0):x.startsWith(eu)&&(b=x.slice(1),S=!0);const N=v&&v>h?v-h:void 0;return hg(d,S,b,N)};if(r){const c=r+gg,d=a;a=p=>p.startsWith(c)?d(p.slice(c.length)):hg(S1,!1,p,void 0,!0)}if(s){const c=a;a=d=>s({className:d,parseClassName:c})}return a},k1=n=>{const r=new Map;return n.orderSensitiveModifiers.forEach((s,a)=>{r.set(s,1e6+a)}),s=>{const a=[];let c=[];for(let d=0;d<s.length;d++){const p=s[d],m=p[0]==="[",h=r.has(p);m||h?(c.length>0&&(c.sort(),a.push(...c),c=[]),a.push(p)):c.push(p)}return c.length>0&&(c.sort(),a.push(...c)),a}},N1=n=>({cache:w1(n.cacheSize),parseClassName:C1(n),sortModifiers:k1(n),...p1(n)}),j1=/\s+/,P1=(n,r)=>{const{parseClassName:s,getClassGroupId:a,getConflictingClassGroupIds:c,sortModifiers:d}=r,p=[],m=n.trim().split(j1);let h="";for(let v=m.length-1;v>=0;v-=1){const y=m[v],{isExternal:x,modifiers:b,hasImportantModifier:S,baseClassName:N,maybePostfixModifierPosition:C}=s(y);if(x){h=y+(h.length>0?" "+h:h);continue}let k=!!C,P=a(k?N.substring(0,C):N);if(!P){if(!k){h=y+(h.length>0?" "+h:h);continue}if(P=a(N),!P){h=y+(h.length>0?" "+h:h);continue}k=!1}const j=b.length===0?"":b.length===1?b[0]:d(b).join(":"),M=S?j+eu:j,R=M+P;if(p.indexOf(R)>-1)continue;p.push(R);const I=c(P,k);for(let W=0;W<I.length;++W){const z=I[W];p.push(M+z)}h=y+(h.length>0?" "+h:h)}return h},E1=(...n)=>{let r=0,s,a,c="";for(;r<n.length;)(s=n[r++])&&(a=bh(s))&&(c&&(c+=" "),c+=a);return c},bh=n=>{if(typeof n=="string")return n;let r,s="";for(let a=0;a<n.length;a++)n[a]&&(r=bh(n[a]))&&(s&&(s+=" "),s+=r);return s},R1=(n,...r)=>{let s,a,c,d;const p=h=>{const v=r.reduce((y,x)=>x(y),n());return s=N1(v),a=s.cache.get,c=s.cache.set,d=m,m(h)},m=h=>{const v=a(h);if(v)return v;const y=P1(h,s);return c(h,y),y};return d=p,(...h)=>d(E1(...h))},A1=[],kt=n=>{const r=s=>s[n]||A1;return r.isThemeGetter=!0,r},wh=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Sh=/^\((?:(\w[\w-]*):)?(.+)\)$/i,T1=/^\d+\/\d+$/,M1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,I1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,D1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,O1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ds=n=>T1.test(n),$e=n=>!!n&&!Number.isNaN(Number(n)),Tr=n=>!!n&&Number.isInteger(Number(n)),Ed=n=>n.endsWith("%")&&$e(n.slice(0,-1)),ir=n=>M1.test(n),L1=()=>!0,z1=n=>I1.test(n)&&!_1.test(n),Ch=()=>!1,F1=n=>D1.test(n),$1=n=>O1.test(n),H1=n=>!we(n)&&!Se(n),B1=n=>to(n,jh,Ch),we=n=>wh.test(n),Zr=n=>to(n,Ph,z1),Rd=n=>to(n,Q1,$e),vg=n=>to(n,kh,Ch),W1=n=>to(n,Nh,$1),Aa=n=>to(n,Eh,F1),Se=n=>Sh.test(n),Go=n=>no(n,Ph),V1=n=>no(n,q1),xg=n=>no(n,kh),U1=n=>no(n,jh),G1=n=>no(n,Nh),Ta=n=>no(n,Eh,!0),to=(n,r,s)=>{const a=wh.exec(n);return a?a[1]?r(a[1]):s(a[2]):!1},no=(n,r,s=!1)=>{const a=Sh.exec(n);return a?a[1]?r(a[1]):s:!1},kh=n=>n==="position"||n==="percentage",Nh=n=>n==="image"||n==="url",jh=n=>n==="length"||n==="size"||n==="bg-size",Ph=n=>n==="length",Q1=n=>n==="number",q1=n=>n==="family-name",Eh=n=>n==="shadow",K1=()=>{const n=kt("color"),r=kt("font"),s=kt("text"),a=kt("font-weight"),c=kt("tracking"),d=kt("leading"),p=kt("breakpoint"),m=kt("container"),h=kt("spacing"),v=kt("radius"),y=kt("shadow"),x=kt("inset-shadow"),b=kt("text-shadow"),S=kt("drop-shadow"),N=kt("blur"),C=kt("perspective"),k=kt("aspect"),P=kt("ease"),j=kt("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],I=()=>[...R(),Se,we],W=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],V=()=>[Se,we,h],re=()=>[Ds,"full","auto",...V()],K=()=>[Tr,"none","subgrid",Se,we],de=()=>["auto",{span:["full",Tr,Se,we]},Tr,Se,we],ie=()=>[Tr,"auto",Se,we],me=()=>["auto","min","max","fr",Se,we],ue=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],fe=()=>["start","end","center","stretch","center-safe","end-safe"],ee=()=>["auto",...V()],Y=()=>[Ds,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...V()],_=()=>[n,Se,we],H=()=>[...R(),xg,vg,{position:[Se,we]}],J=()=>["no-repeat",{repeat:["","x","y","space","round"]}],A=()=>["auto","cover","contain",U1,B1,{size:[Se,we]}],U=()=>[Ed,Go,Zr],B=()=>["","none","full",v,Se,we],Q=()=>["",$e,Go,Zr],oe=()=>["solid","dashed","dotted","double"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],O=()=>[$e,Ed,xg,vg],X=()=>["","none",N,Se,we],le=()=>["none",$e,Se,we],he=()=>["none",$e,Se,we],Ee=()=>[$e,Se,we],Re=()=>[Ds,"full",...V()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ir],breakpoint:[ir],color:[L1],container:[ir],"drop-shadow":[ir],ease:["in","out","in-out"],font:[H1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ir],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ir],shadow:[ir],spacing:["px",$e],text:[ir],"text-shadow":[ir],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ds,we,Se,k]}],container:["container"],columns:[{columns:[$e,we,Se,m]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:I()}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:re()}],"inset-x":[{"inset-x":re()}],"inset-y":[{"inset-y":re()}],start:[{start:re()}],end:[{end:re()}],top:[{top:re()}],right:[{right:re()}],bottom:[{bottom:re()}],left:[{left:re()}],visibility:["visible","invisible","collapse"],z:[{z:[Tr,"auto",Se,we]}],basis:[{basis:[Ds,"full","auto",m,...V()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Ds,"auto","initial","none",we]}],grow:[{grow:["",$e,Se,we]}],shrink:[{shrink:["",$e,Se,we]}],order:[{order:[Tr,"first","last","none",Se,we]}],"grid-cols":[{"grid-cols":K()}],"col-start-end":[{col:de()}],"col-start":[{"col-start":ie()}],"col-end":[{"col-end":ie()}],"grid-rows":[{"grid-rows":K()}],"row-start-end":[{row:de()}],"row-start":[{"row-start":ie()}],"row-end":[{"row-end":ie()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":me()}],"auto-rows":[{"auto-rows":me()}],gap:[{gap:V()}],"gap-x":[{"gap-x":V()}],"gap-y":[{"gap-y":V()}],"justify-content":[{justify:[...ue(),"normal"]}],"justify-items":[{"justify-items":[...fe(),"normal"]}],"justify-self":[{"justify-self":["auto",...fe()]}],"align-content":[{content:["normal",...ue()]}],"align-items":[{items:[...fe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...fe(),{baseline:["","last"]}]}],"place-content":[{"place-content":ue()}],"place-items":[{"place-items":[...fe(),"baseline"]}],"place-self":[{"place-self":["auto",...fe()]}],p:[{p:V()}],px:[{px:V()}],py:[{py:V()}],ps:[{ps:V()}],pe:[{pe:V()}],pt:[{pt:V()}],pr:[{pr:V()}],pb:[{pb:V()}],pl:[{pl:V()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":V()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":V()}],"space-y-reverse":["space-y-reverse"],size:[{size:Y()}],w:[{w:[m,"screen",...Y()]}],"min-w":[{"min-w":[m,"screen","none",...Y()]}],"max-w":[{"max-w":[m,"screen","none","prose",{screen:[p]},...Y()]}],h:[{h:["screen","lh",...Y()]}],"min-h":[{"min-h":["screen","lh","none",...Y()]}],"max-h":[{"max-h":["screen","lh",...Y()]}],"font-size":[{text:["base",s,Go,Zr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,Se,Rd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ed,we]}],"font-family":[{font:[V1,we,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,Se,we]}],"line-clamp":[{"line-clamp":[$e,"none",Se,Rd]}],leading:[{leading:[d,...V()]}],"list-image":[{"list-image":["none",Se,we]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Se,we]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:_()}],"text-color":[{text:_()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...oe(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",Se,Zr]}],"text-decoration-color":[{decoration:_()}],"underline-offset":[{"underline-offset":[$e,"auto",Se,we]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Se,we]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Se,we]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:H()}],"bg-repeat":[{bg:J()}],"bg-size":[{bg:A()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Tr,Se,we],radial:["",Se,we],conic:[Tr,Se,we]},G1,W1]}],"bg-color":[{bg:_()}],"gradient-from-pos":[{from:U()}],"gradient-via-pos":[{via:U()}],"gradient-to-pos":[{to:U()}],"gradient-from":[{from:_()}],"gradient-via":[{via:_()}],"gradient-to":[{to:_()}],rounded:[{rounded:B()}],"rounded-s":[{"rounded-s":B()}],"rounded-e":[{"rounded-e":B()}],"rounded-t":[{"rounded-t":B()}],"rounded-r":[{"rounded-r":B()}],"rounded-b":[{"rounded-b":B()}],"rounded-l":[{"rounded-l":B()}],"rounded-ss":[{"rounded-ss":B()}],"rounded-se":[{"rounded-se":B()}],"rounded-ee":[{"rounded-ee":B()}],"rounded-es":[{"rounded-es":B()}],"rounded-tl":[{"rounded-tl":B()}],"rounded-tr":[{"rounded-tr":B()}],"rounded-br":[{"rounded-br":B()}],"rounded-bl":[{"rounded-bl":B()}],"border-w":[{border:Q()}],"border-w-x":[{"border-x":Q()}],"border-w-y":[{"border-y":Q()}],"border-w-s":[{"border-s":Q()}],"border-w-e":[{"border-e":Q()}],"border-w-t":[{"border-t":Q()}],"border-w-r":[{"border-r":Q()}],"border-w-b":[{"border-b":Q()}],"border-w-l":[{"border-l":Q()}],"divide-x":[{"divide-x":Q()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Q()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...oe(),"hidden","none"]}],"divide-style":[{divide:[...oe(),"hidden","none"]}],"border-color":[{border:_()}],"border-color-x":[{"border-x":_()}],"border-color-y":[{"border-y":_()}],"border-color-s":[{"border-s":_()}],"border-color-e":[{"border-e":_()}],"border-color-t":[{"border-t":_()}],"border-color-r":[{"border-r":_()}],"border-color-b":[{"border-b":_()}],"border-color-l":[{"border-l":_()}],"divide-color":[{divide:_()}],"outline-style":[{outline:[...oe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,Se,we]}],"outline-w":[{outline:["",$e,Go,Zr]}],"outline-color":[{outline:_()}],shadow:[{shadow:["","none",y,Ta,Aa]}],"shadow-color":[{shadow:_()}],"inset-shadow":[{"inset-shadow":["none",x,Ta,Aa]}],"inset-shadow-color":[{"inset-shadow":_()}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:_()}],"ring-offset-w":[{"ring-offset":[$e,Zr]}],"ring-offset-color":[{"ring-offset":_()}],"inset-ring-w":[{"inset-ring":Q()}],"inset-ring-color":[{"inset-ring":_()}],"text-shadow":[{"text-shadow":["none",b,Ta,Aa]}],"text-shadow-color":[{"text-shadow":_()}],opacity:[{opacity:[$e,Se,we]}],"mix-blend":[{"mix-blend":[...q(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":q()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":O()}],"mask-image-linear-to-pos":[{"mask-linear-to":O()}],"mask-image-linear-from-color":[{"mask-linear-from":_()}],"mask-image-linear-to-color":[{"mask-linear-to":_()}],"mask-image-t-from-pos":[{"mask-t-from":O()}],"mask-image-t-to-pos":[{"mask-t-to":O()}],"mask-image-t-from-color":[{"mask-t-from":_()}],"mask-image-t-to-color":[{"mask-t-to":_()}],"mask-image-r-from-pos":[{"mask-r-from":O()}],"mask-image-r-to-pos":[{"mask-r-to":O()}],"mask-image-r-from-color":[{"mask-r-from":_()}],"mask-image-r-to-color":[{"mask-r-to":_()}],"mask-image-b-from-pos":[{"mask-b-from":O()}],"mask-image-b-to-pos":[{"mask-b-to":O()}],"mask-image-b-from-color":[{"mask-b-from":_()}],"mask-image-b-to-color":[{"mask-b-to":_()}],"mask-image-l-from-pos":[{"mask-l-from":O()}],"mask-image-l-to-pos":[{"mask-l-to":O()}],"mask-image-l-from-color":[{"mask-l-from":_()}],"mask-image-l-to-color":[{"mask-l-to":_()}],"mask-image-x-from-pos":[{"mask-x-from":O()}],"mask-image-x-to-pos":[{"mask-x-to":O()}],"mask-image-x-from-color":[{"mask-x-from":_()}],"mask-image-x-to-color":[{"mask-x-to":_()}],"mask-image-y-from-pos":[{"mask-y-from":O()}],"mask-image-y-to-pos":[{"mask-y-to":O()}],"mask-image-y-from-color":[{"mask-y-from":_()}],"mask-image-y-to-color":[{"mask-y-to":_()}],"mask-image-radial":[{"mask-radial":[Se,we]}],"mask-image-radial-from-pos":[{"mask-radial-from":O()}],"mask-image-radial-to-pos":[{"mask-radial-to":O()}],"mask-image-radial-from-color":[{"mask-radial-from":_()}],"mask-image-radial-to-color":[{"mask-radial-to":_()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":R()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":O()}],"mask-image-conic-to-pos":[{"mask-conic-to":O()}],"mask-image-conic-from-color":[{"mask-conic-from":_()}],"mask-image-conic-to-color":[{"mask-conic-to":_()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:H()}],"mask-repeat":[{mask:J()}],"mask-size":[{mask:A()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Se,we]}],filter:[{filter:["","none",Se,we]}],blur:[{blur:X()}],brightness:[{brightness:[$e,Se,we]}],contrast:[{contrast:[$e,Se,we]}],"drop-shadow":[{"drop-shadow":["","none",S,Ta,Aa]}],"drop-shadow-color":[{"drop-shadow":_()}],grayscale:[{grayscale:["",$e,Se,we]}],"hue-rotate":[{"hue-rotate":[$e,Se,we]}],invert:[{invert:["",$e,Se,we]}],saturate:[{saturate:[$e,Se,we]}],sepia:[{sepia:["",$e,Se,we]}],"backdrop-filter":[{"backdrop-filter":["","none",Se,we]}],"backdrop-blur":[{"backdrop-blur":X()}],"backdrop-brightness":[{"backdrop-brightness":[$e,Se,we]}],"backdrop-contrast":[{"backdrop-contrast":[$e,Se,we]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,Se,we]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,Se,we]}],"backdrop-invert":[{"backdrop-invert":["",$e,Se,we]}],"backdrop-opacity":[{"backdrop-opacity":[$e,Se,we]}],"backdrop-saturate":[{"backdrop-saturate":[$e,Se,we]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,Se,we]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":V()}],"border-spacing-x":[{"border-spacing-x":V()}],"border-spacing-y":[{"border-spacing-y":V()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Se,we]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",Se,we]}],ease:[{ease:["linear","initial",P,Se,we]}],delay:[{delay:[$e,Se,we]}],animate:[{animate:["none",j,Se,we]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,Se,we]}],"perspective-origin":[{"perspective-origin":I()}],rotate:[{rotate:le()}],"rotate-x":[{"rotate-x":le()}],"rotate-y":[{"rotate-y":le()}],"rotate-z":[{"rotate-z":le()}],scale:[{scale:he()}],"scale-x":[{"scale-x":he()}],"scale-y":[{"scale-y":he()}],"scale-z":[{"scale-z":he()}],"scale-3d":["scale-3d"],skew:[{skew:Ee()}],"skew-x":[{"skew-x":Ee()}],"skew-y":[{"skew-y":Ee()}],transform:[{transform:[Se,we,"","none","gpu","cpu"]}],"transform-origin":[{origin:I()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Re()}],"translate-x":[{"translate-x":Re()}],"translate-y":[{"translate-y":Re()}],"translate-z":[{"translate-z":Re()}],"translate-none":["translate-none"],accent:[{accent:_()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:_()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Se,we]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Se,we]}],fill:[{fill:["none",..._()]}],"stroke-w":[{stroke:[$e,Go,Zr,Rd]}],stroke:[{stroke:["none",..._()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Y1=R1(K1);function Fe(...n){return Y1(hh(n))}const X1=l1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",{variants:{variant:{default:"bg-gray-900 text-white border-2 border-gray-900 hover:bg-gray-700 hover:border-gray-700 dark:bg-white dark:text-gray-900 dark:border-white dark:hover:bg-gray-100",outline:"bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-white dark:hover:bg-gray-800",destructive:"bg-red-500 text-white border-2 border-red-500 hover:bg-red-600 hover:border-red-600",secondary:"bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",ghost:"hover:bg-gray-200 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",link:"text-gray-900 underline-offset-4 hover:underline dark:text-white"},size:{default:"h-10 px-4 py-2",sm:"h-8 rounded-lg gap-1.5 px-3 text-xs",lg:"h-12 rounded-lg px-6",icon:"h-10 w-10 rounded-lg"}},defaultVariants:{variant:"default",size:"default"}}),Oe=f.forwardRef(({className:n,variant:r,size:s,asChild:a=!1,...c},d)=>{const p=a?n1:"button";return i.jsx(p,{"data-slot":"button",className:Fe(X1({variant:r,size:s,className:n})),ref:d,...c})});Oe.displayName="Button";var ui=ah();const J1=ih(ui);function Z1(n){const r=eS(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(nS);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return i.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return i.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function eS(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=sS(c),m=rS(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var tS=Symbol("radix.slottable");function nS(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===tS}function rS(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function sS(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var oS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Me=oS.reduce((n,r)=>{const s=Z1(`Primitive.${r}`),a=f.forwardRef((c,d)=>{const{asChild:p,...m}=c,h=p?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),i.jsx(h,{...m,ref:d})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{});function Rh(n,r){n&&ui.flushSync(()=>n.dispatchEvent(r))}var At=globalThis?.document?f.useLayoutEffect:()=>{};function iS(n,r){return f.useReducer((s,a)=>r[s][a]??s,n)}var It=n=>{const{present:r,children:s}=n,a=aS(r),c=typeof s=="function"?s({present:a.isPresent}):f.Children.only(s),d=ze(a.ref,lS(c));return typeof s=="function"||a.isPresent?f.cloneElement(c,{ref:d}):null};It.displayName="Presence";function aS(n){const[r,s]=f.useState(),a=f.useRef(null),c=f.useRef(n),d=f.useRef("none"),p=n?"mounted":"unmounted",[m,h]=iS(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.useEffect(()=>{const v=Ma(a.current);d.current=m==="mounted"?v:"none"},[m]),At(()=>{const v=a.current,y=c.current;if(y!==n){const b=d.current,S=Ma(v);n?h("MOUNT"):S==="none"||v?.display==="none"?h("UNMOUNT"):h(y&&b!==S?"ANIMATION_OUT":"UNMOUNT"),c.current=n}},[n,h]),At(()=>{if(r){let v;const y=r.ownerDocument.defaultView??window,x=S=>{const C=Ma(a.current).includes(CSS.escape(S.animationName));if(S.target===r&&C&&(h("ANIMATION_END"),!c.current)){const k=r.style.animationFillMode;r.style.animationFillMode="forwards",v=y.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=k)})}},b=S=>{S.target===r&&(d.current=Ma(a.current))};return r.addEventListener("animationstart",b),r.addEventListener("animationcancel",x),r.addEventListener("animationend",x),()=>{y.clearTimeout(v),r.removeEventListener("animationstart",b),r.removeEventListener("animationcancel",x),r.removeEventListener("animationend",x)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:f.useCallback(v=>{a.current=v?getComputedStyle(v):null,s(v)},[])}}function Ma(n){return n?.animationName||"none"}function lS(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function cS(n,r){const s=f.createContext(r),a=d=>{const{children:p,...m}=d,h=f.useMemo(()=>m,Object.values(m));return i.jsx(s.Provider,{value:h,children:p})};a.displayName=n+"Provider";function c(d){const p=f.useContext(s);if(p)return p;if(r!==void 0)return r;throw new Error(`\`${d}\` must be used within \`${n}\``)}return[a,c]}function cn(n,r=[]){let s=[];function a(d,p){const m=f.createContext(p),h=s.length;s=[...s,p];const v=x=>{const{scope:b,children:S,...N}=x,C=b?.[n]?.[h]||m,k=f.useMemo(()=>N,Object.values(N));return i.jsx(C.Provider,{value:k,children:S})};v.displayName=d+"Provider";function y(x,b){const S=b?.[n]?.[h]||m,N=f.useContext(S);if(N)return N;if(p!==void 0)return p;throw new Error(`\`${x}\` must be used within \`${d}\``)}return[v,y]}const c=()=>{const d=s.map(p=>f.createContext(p));return function(m){const h=m?.[n]||d;return f.useMemo(()=>({[`__scope${n}`]:{...m,[n]:h}}),[m,h])}};return c.scopeName=n,[a,dS(c,...r)]}function dS(...n){const r=n[0];if(n.length===1)return r;const s=()=>{const a=n.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(d){const p=a.reduce((m,{useScope:h,scopeName:v})=>{const x=h(d)[`__scope${v}`];return{...m,...x}},{});return f.useMemo(()=>({[`__scope${r.scopeName}`]:p}),[p])}};return s.scopeName=r.scopeName,s}function Rt(n){const r=f.useRef(n);return f.useEffect(()=>{r.current=n}),f.useMemo(()=>(...s)=>r.current?.(...s),[])}var uS=f.createContext(void 0);function pi(n){const r=f.useContext(uS);return n||r||"ltr"}function tu(n,[r,s]){return Math.min(s,Math.max(r,n))}function ge(n,r,{checkForDefaultPrevented:s=!0}={}){return function(c){if(n?.(c),s===!1||!c.defaultPrevented)return r?.(c)}}function pS(n,r){return f.useReducer((s,a)=>r[s][a]??s,n)}var Cu="ScrollArea",[Ah]=cn(Cu),[fS,bn]=Ah(Cu),Th=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,type:a="hover",dir:c,scrollHideDelay:d=600,...p}=n,[m,h]=f.useState(null),[v,y]=f.useState(null),[x,b]=f.useState(null),[S,N]=f.useState(null),[C,k]=f.useState(null),[P,j]=f.useState(0),[M,R]=f.useState(0),[I,W]=f.useState(!1),[z,V]=f.useState(!1),re=ze(r,de=>h(de)),K=pi(c);return i.jsx(fS,{scope:s,type:a,dir:K,scrollHideDelay:d,scrollArea:m,viewport:v,onViewportChange:y,content:x,onContentChange:b,scrollbarX:S,onScrollbarXChange:N,scrollbarXEnabled:I,onScrollbarXEnabledChange:W,scrollbarY:C,onScrollbarYChange:k,scrollbarYEnabled:z,onScrollbarYEnabledChange:V,onCornerWidthChange:j,onCornerHeightChange:R,children:i.jsx(Me.div,{dir:K,...p,ref:re,style:{position:"relative","--radix-scroll-area-corner-width":P+"px","--radix-scroll-area-corner-height":M+"px",...n.style}})})});Th.displayName=Cu;var Mh="ScrollAreaViewport",Ih=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,children:a,nonce:c,...d}=n,p=bn(Mh,s),m=f.useRef(null),h=ze(r,m,p.onViewportChange);return i.jsxs(i.Fragment,{children:[i.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:c}),i.jsx(Me.div,{"data-radix-scroll-area-viewport":"",...d,ref:h,style:{overflowX:p.scrollbarXEnabled?"scroll":"hidden",overflowY:p.scrollbarYEnabled?"scroll":"hidden",...n.style},children:i.jsx("div",{ref:p.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});Ih.displayName=Mh;var Kn="ScrollAreaScrollbar",_h=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=bn(Kn,n.__scopeScrollArea),{onScrollbarXEnabledChange:d,onScrollbarYEnabledChange:p}=c,m=n.orientation==="horizontal";return f.useEffect(()=>(m?d(!0):p(!0),()=>{m?d(!1):p(!1)}),[m,d,p]),c.type==="hover"?i.jsx(mS,{...a,ref:r,forceMount:s}):c.type==="scroll"?i.jsx(gS,{...a,ref:r,forceMount:s}):c.type==="auto"?i.jsx(Dh,{...a,ref:r,forceMount:s}):c.type==="always"?i.jsx(ku,{...a,ref:r}):null});_h.displayName=Kn;var mS=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=bn(Kn,n.__scopeScrollArea),[d,p]=f.useState(!1);return f.useEffect(()=>{const m=c.scrollArea;let h=0;if(m){const v=()=>{window.clearTimeout(h),p(!0)},y=()=>{h=window.setTimeout(()=>p(!1),c.scrollHideDelay)};return m.addEventListener("pointerenter",v),m.addEventListener("pointerleave",y),()=>{window.clearTimeout(h),m.removeEventListener("pointerenter",v),m.removeEventListener("pointerleave",y)}}},[c.scrollArea,c.scrollHideDelay]),i.jsx(It,{present:s||d,children:i.jsx(Dh,{"data-state":d?"visible":"hidden",...a,ref:r})})}),gS=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=bn(Kn,n.__scopeScrollArea),d=n.orientation==="horizontal",p=ul(()=>h("SCROLL_END"),100),[m,h]=pS("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return f.useEffect(()=>{if(m==="idle"){const v=window.setTimeout(()=>h("HIDE"),c.scrollHideDelay);return()=>window.clearTimeout(v)}},[m,c.scrollHideDelay,h]),f.useEffect(()=>{const v=c.viewport,y=d?"scrollLeft":"scrollTop";if(v){let x=v[y];const b=()=>{const S=v[y];x!==S&&(h("SCROLL"),p()),x=S};return v.addEventListener("scroll",b),()=>v.removeEventListener("scroll",b)}},[c.viewport,d,h,p]),i.jsx(It,{present:s||m!=="hidden",children:i.jsx(ku,{"data-state":m==="hidden"?"hidden":"visible",...a,ref:r,onPointerEnter:ge(n.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:ge(n.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),Dh=f.forwardRef((n,r)=>{const s=bn(Kn,n.__scopeScrollArea),{forceMount:a,...c}=n,[d,p]=f.useState(!1),m=n.orientation==="horizontal",h=ul(()=>{if(s.viewport){const v=s.viewport.offsetWidth<s.viewport.scrollWidth,y=s.viewport.offsetHeight<s.viewport.scrollHeight;p(m?v:y)}},10);return Js(s.viewport,h),Js(s.content,h),i.jsx(It,{present:a||d,children:i.jsx(ku,{"data-state":d?"visible":"hidden",...c,ref:r})})}),ku=f.forwardRef((n,r)=>{const{orientation:s="vertical",...a}=n,c=bn(Kn,n.__scopeScrollArea),d=f.useRef(null),p=f.useRef(0),[m,h]=f.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),v=$h(m.viewport,m.content),y={...a,sizes:m,onSizesChange:h,hasThumb:v>0&&v<1,onThumbChange:b=>d.current=b,onThumbPointerUp:()=>p.current=0,onThumbPointerDown:b=>p.current=b};function x(b,S){return wS(b,p.current,m,S)}return s==="horizontal"?i.jsx(hS,{...y,ref:r,onThumbPositionChange:()=>{if(c.viewport&&d.current){const b=c.viewport.scrollLeft,S=yg(b,m,c.dir);d.current.style.transform=`translate3d(${S}px, 0, 0)`}},onWheelScroll:b=>{c.viewport&&(c.viewport.scrollLeft=b)},onDragScroll:b=>{c.viewport&&(c.viewport.scrollLeft=x(b,c.dir))}}):s==="vertical"?i.jsx(vS,{...y,ref:r,onThumbPositionChange:()=>{if(c.viewport&&d.current){const b=c.viewport.scrollTop,S=yg(b,m);d.current.style.transform=`translate3d(0, ${S}px, 0)`}},onWheelScroll:b=>{c.viewport&&(c.viewport.scrollTop=b)},onDragScroll:b=>{c.viewport&&(c.viewport.scrollTop=x(b))}}):null}),hS=f.forwardRef((n,r)=>{const{sizes:s,onSizesChange:a,...c}=n,d=bn(Kn,n.__scopeScrollArea),[p,m]=f.useState(),h=f.useRef(null),v=ze(r,h,d.onScrollbarXChange);return f.useEffect(()=>{h.current&&m(getComputedStyle(h.current))},[h]),i.jsx(Lh,{"data-orientation":"horizontal",...c,ref:v,sizes:s,style:{bottom:0,left:d.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:d.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":dl(s)+"px",...n.style},onThumbPointerDown:y=>n.onThumbPointerDown(y.x),onDragScroll:y=>n.onDragScroll(y.x),onWheelScroll:(y,x)=>{if(d.viewport){const b=d.viewport.scrollLeft+y.deltaX;n.onWheelScroll(b),Bh(b,x)&&y.preventDefault()}},onResize:()=>{h.current&&d.viewport&&p&&a({content:d.viewport.scrollWidth,viewport:d.viewport.offsetWidth,scrollbar:{size:h.current.clientWidth,paddingStart:Ja(p.paddingLeft),paddingEnd:Ja(p.paddingRight)}})}})}),vS=f.forwardRef((n,r)=>{const{sizes:s,onSizesChange:a,...c}=n,d=bn(Kn,n.__scopeScrollArea),[p,m]=f.useState(),h=f.useRef(null),v=ze(r,h,d.onScrollbarYChange);return f.useEffect(()=>{h.current&&m(getComputedStyle(h.current))},[h]),i.jsx(Lh,{"data-orientation":"vertical",...c,ref:v,sizes:s,style:{top:0,right:d.dir==="ltr"?0:void 0,left:d.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":dl(s)+"px",...n.style},onThumbPointerDown:y=>n.onThumbPointerDown(y.y),onDragScroll:y=>n.onDragScroll(y.y),onWheelScroll:(y,x)=>{if(d.viewport){const b=d.viewport.scrollTop+y.deltaY;n.onWheelScroll(b),Bh(b,x)&&y.preventDefault()}},onResize:()=>{h.current&&d.viewport&&p&&a({content:d.viewport.scrollHeight,viewport:d.viewport.offsetHeight,scrollbar:{size:h.current.clientHeight,paddingStart:Ja(p.paddingTop),paddingEnd:Ja(p.paddingBottom)}})}})}),[xS,Oh]=Ah(Kn),Lh=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,sizes:a,hasThumb:c,onThumbChange:d,onThumbPointerUp:p,onThumbPointerDown:m,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:y,onResize:x,...b}=n,S=bn(Kn,s),[N,C]=f.useState(null),k=ze(r,re=>C(re)),P=f.useRef(null),j=f.useRef(""),M=S.viewport,R=a.content-a.viewport,I=Rt(y),W=Rt(h),z=ul(x,10);function V(re){if(P.current){const K=re.clientX-P.current.left,de=re.clientY-P.current.top;v({x:K,y:de})}}return f.useEffect(()=>{const re=K=>{const de=K.target;N?.contains(de)&&I(K,R)};return document.addEventListener("wheel",re,{passive:!1}),()=>document.removeEventListener("wheel",re,{passive:!1})},[M,N,R,I]),f.useEffect(W,[a,W]),Js(N,z),Js(S.content,z),i.jsx(xS,{scope:s,scrollbar:N,hasThumb:c,onThumbChange:Rt(d),onThumbPointerUp:Rt(p),onThumbPositionChange:W,onThumbPointerDown:Rt(m),children:i.jsx(Me.div,{...b,ref:k,style:{position:"absolute",...b.style},onPointerDown:ge(n.onPointerDown,re=>{re.button===0&&(re.target.setPointerCapture(re.pointerId),P.current=N.getBoundingClientRect(),j.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),V(re))}),onPointerMove:ge(n.onPointerMove,V),onPointerUp:ge(n.onPointerUp,re=>{const K=re.target;K.hasPointerCapture(re.pointerId)&&K.releasePointerCapture(re.pointerId),document.body.style.webkitUserSelect=j.current,S.viewport&&(S.viewport.style.scrollBehavior=""),P.current=null})})})}),Xa="ScrollAreaThumb",zh=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=Oh(Xa,n.__scopeScrollArea);return i.jsx(It,{present:s||c.hasThumb,children:i.jsx(yS,{ref:r,...a})})}),yS=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,style:a,...c}=n,d=bn(Xa,s),p=Oh(Xa,s),{onThumbPositionChange:m}=p,h=ze(r,x=>p.onThumbChange(x)),v=f.useRef(void 0),y=ul(()=>{v.current&&(v.current(),v.current=void 0)},100);return f.useEffect(()=>{const x=d.viewport;if(x){const b=()=>{if(y(),!v.current){const S=SS(x,m);v.current=S,m()}};return m(),x.addEventListener("scroll",b),()=>x.removeEventListener("scroll",b)}},[d.viewport,y,m]),i.jsx(Me.div,{"data-state":p.hasThumb?"visible":"hidden",...c,ref:h,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:ge(n.onPointerDownCapture,x=>{const S=x.target.getBoundingClientRect(),N=x.clientX-S.left,C=x.clientY-S.top;p.onThumbPointerDown({x:N,y:C})}),onPointerUp:ge(n.onPointerUp,p.onThumbPointerUp)})});zh.displayName=Xa;var Nu="ScrollAreaCorner",Fh=f.forwardRef((n,r)=>{const s=bn(Nu,n.__scopeScrollArea),a=!!(s.scrollbarX&&s.scrollbarY);return s.type!=="scroll"&&a?i.jsx(bS,{...n,ref:r}):null});Fh.displayName=Nu;var bS=f.forwardRef((n,r)=>{const{__scopeScrollArea:s,...a}=n,c=bn(Nu,s),[d,p]=f.useState(0),[m,h]=f.useState(0),v=!!(d&&m);return Js(c.scrollbarX,()=>{const y=c.scrollbarX?.offsetHeight||0;c.onCornerHeightChange(y),h(y)}),Js(c.scrollbarY,()=>{const y=c.scrollbarY?.offsetWidth||0;c.onCornerWidthChange(y),p(y)}),v?i.jsx(Me.div,{...a,ref:r,style:{width:d,height:m,position:"absolute",right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:0,...n.style}}):null});function Ja(n){return n?parseInt(n,10):0}function $h(n,r){const s=n/r;return isNaN(s)?0:s}function dl(n){const r=$h(n.viewport,n.content),s=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,a=(n.scrollbar.size-s)*r;return Math.max(a,18)}function wS(n,r,s,a="ltr"){const c=dl(s),d=c/2,p=r||d,m=c-p,h=s.scrollbar.paddingStart+p,v=s.scrollbar.size-s.scrollbar.paddingEnd-m,y=s.content-s.viewport,x=a==="ltr"?[0,y]:[y*-1,0];return Hh([h,v],x)(n)}function yg(n,r,s="ltr"){const a=dl(r),c=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,d=r.scrollbar.size-c,p=r.content-r.viewport,m=d-a,h=s==="ltr"?[0,p]:[p*-1,0],v=tu(n,h);return Hh([0,p],[0,m])(v)}function Hh(n,r){return s=>{if(n[0]===n[1]||r[0]===r[1])return r[0];const a=(r[1]-r[0])/(n[1]-n[0]);return r[0]+a*(s-n[0])}}function Bh(n,r){return n>0&&n<r}var SS=(n,r=()=>{})=>{let s={left:n.scrollLeft,top:n.scrollTop},a=0;return(function c(){const d={left:n.scrollLeft,top:n.scrollTop},p=s.left!==d.left,m=s.top!==d.top;(p||m)&&r(),s=d,a=window.requestAnimationFrame(c)})(),()=>window.cancelAnimationFrame(a)};function ul(n,r){const s=Rt(n),a=f.useRef(0);return f.useEffect(()=>()=>window.clearTimeout(a.current),[]),f.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(s,r)},[s,r])}function Js(n,r){const s=Rt(r);At(()=>{let a=0;if(n){const c=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(s)});return c.observe(n),()=>{window.cancelAnimationFrame(a),c.unobserve(n)}}},[n,s])}var CS=Th,kS=Ih,NS=Fh;function jS({className:n,children:r,...s}){return i.jsxs(CS,{"data-slot":"scroll-area",className:Fe("relative",n),...s,children:[i.jsx(kS,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 h-full w-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 overflow-x-hidden",children:r}),i.jsx(PS,{}),i.jsx(NS,{})]})}function PS({className:n,orientation:r="vertical",...s}){return i.jsx(_h,{"data-slot":"scroll-area-scrollbar",orientation:r,className:Fe("flex touch-none p-px transition-colors select-none",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",n),...s,children:i.jsx(zh,{"data-slot":"scroll-area-thumb",className:"bg-gray-300 hover:bg-gray-500 relative flex-1 rounded-full transition-colors"})})}var ES=cl[" useInsertionEffect ".trim().toString()]||At;function An({prop:n,defaultProp:r,onChange:s=()=>{},caller:a}){const[c,d,p]=RS({defaultProp:r,onChange:s}),m=n!==void 0,h=m?n:c;{const y=f.useRef(n!==void 0);f.useEffect(()=>{const x=y.current;x!==m&&console.warn(`${a} is changing from ${x?"controlled":"uncontrolled"} to ${m?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=m},[m,a])}const v=f.useCallback(y=>{if(m){const x=AS(y)?y(n):y;x!==n&&p.current?.(x)}else d(y)},[m,n,d,p]);return[h,v]}function RS({defaultProp:n,onChange:r}){const[s,a]=f.useState(n),c=f.useRef(s),d=f.useRef(r);return ES(()=>{d.current=r},[r]),f.useEffect(()=>{c.current!==s&&(d.current?.(s),c.current=s)},[s,c]),[s,a,d]}function AS(n){return typeof n=="function"}function bg(n){const r=TS(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(IS);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return i.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return i.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function TS(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=DS(c),m=_S(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var MS=Symbol("radix.slottable");function IS(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===MS}function _S(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function DS(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function ju(n){const r=n+"CollectionProvider",[s,a]=cn(r),[c,d]=s(r,{collectionRef:{current:null},itemMap:new Map}),p=C=>{const{scope:k,children:P}=C,j=Xt.useRef(null),M=Xt.useRef(new Map).current;return i.jsx(c,{scope:k,itemMap:M,collectionRef:j,children:P})};p.displayName=r;const m=n+"CollectionSlot",h=bg(m),v=Xt.forwardRef((C,k)=>{const{scope:P,children:j}=C,M=d(m,P),R=ze(k,M.collectionRef);return i.jsx(h,{ref:R,children:j})});v.displayName=m;const y=n+"CollectionItemSlot",x="data-radix-collection-item",b=bg(y),S=Xt.forwardRef((C,k)=>{const{scope:P,children:j,...M}=C,R=Xt.useRef(null),I=ze(k,R),W=d(y,P);return Xt.useEffect(()=>(W.itemMap.set(R,{ref:R,...M}),()=>void W.itemMap.delete(R))),i.jsx(b,{[x]:"",ref:I,children:j})});S.displayName=y;function N(C){const k=d(n+"CollectionConsumer",C);return Xt.useCallback(()=>{const j=k.collectionRef.current;if(!j)return[];const M=Array.from(j.querySelectorAll(`[${x}]`));return Array.from(k.itemMap.values()).sort((W,z)=>M.indexOf(W.ref.current)-M.indexOf(z.ref.current))},[k.collectionRef,k.itemMap])}return[{Provider:p,Slot:v,ItemSlot:S},N,a]}function OS(n,r=globalThis?.document){const s=Rt(n);f.useEffect(()=>{const a=c=>{c.key==="Escape"&&s(c)};return r.addEventListener("keydown",a,{capture:!0}),()=>r.removeEventListener("keydown",a,{capture:!0})},[s,r])}var LS="DismissableLayer",nu="dismissableLayer.update",zS="dismissableLayer.pointerDownOutside",FS="dismissableLayer.focusOutside",wg,Wh=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),fi=f.forwardRef((n,r)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:p,onDismiss:m,...h}=n,v=f.useContext(Wh),[y,x]=f.useState(null),b=y?.ownerDocument??globalThis?.document,[,S]=f.useState({}),N=ze(r,z=>x(z)),C=Array.from(v.layers),[k]=[...v.layersWithOutsidePointerEventsDisabled].slice(-1),P=C.indexOf(k),j=y?C.indexOf(y):-1,M=v.layersWithOutsidePointerEventsDisabled.size>0,R=j>=P,I=BS(z=>{const V=z.target,re=[...v.branches].some(K=>K.contains(V));!R||re||(c?.(z),p?.(z),z.defaultPrevented||m?.())},b),W=WS(z=>{const V=z.target;[...v.branches].some(K=>K.contains(V))||(d?.(z),p?.(z),z.defaultPrevented||m?.())},b);return OS(z=>{j===v.layers.size-1&&(a?.(z),!z.defaultPrevented&&m&&(z.preventDefault(),m()))},b),f.useEffect(()=>{if(y)return s&&(v.layersWithOutsidePointerEventsDisabled.size===0&&(wg=b.body.style.pointerEvents,b.body.style.pointerEvents="none"),v.layersWithOutsidePointerEventsDisabled.add(y)),v.layers.add(y),Sg(),()=>{s&&v.layersWithOutsidePointerEventsDisabled.size===1&&(b.body.style.pointerEvents=wg)}},[y,b,s,v]),f.useEffect(()=>()=>{y&&(v.layers.delete(y),v.layersWithOutsidePointerEventsDisabled.delete(y),Sg())},[y,v]),f.useEffect(()=>{const z=()=>S({});return document.addEventListener(nu,z),()=>document.removeEventListener(nu,z)},[]),i.jsx(Me.div,{...h,ref:N,style:{pointerEvents:M?R?"auto":"none":void 0,...n.style},onFocusCapture:ge(n.onFocusCapture,W.onFocusCapture),onBlurCapture:ge(n.onBlurCapture,W.onBlurCapture),onPointerDownCapture:ge(n.onPointerDownCapture,I.onPointerDownCapture)})});fi.displayName=LS;var $S="DismissableLayerBranch",HS=f.forwardRef((n,r)=>{const s=f.useContext(Wh),a=f.useRef(null),c=ze(r,a);return f.useEffect(()=>{const d=a.current;if(d)return s.branches.add(d),()=>{s.branches.delete(d)}},[s.branches]),i.jsx(Me.div,{...n,ref:c})});HS.displayName=$S;function BS(n,r=globalThis?.document){const s=Rt(n),a=f.useRef(!1),c=f.useRef(()=>{});return f.useEffect(()=>{const d=m=>{if(m.target&&!a.current){let h=function(){Vh(zS,s,v,{discrete:!0})};const v={originalEvent:m};m.pointerType==="touch"?(r.removeEventListener("click",c.current),c.current=h,r.addEventListener("click",c.current,{once:!0})):h()}else r.removeEventListener("click",c.current);a.current=!1},p=window.setTimeout(()=>{r.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(p),r.removeEventListener("pointerdown",d),r.removeEventListener("click",c.current)}},[r,s]),{onPointerDownCapture:()=>a.current=!0}}function WS(n,r=globalThis?.document){const s=Rt(n),a=f.useRef(!1);return f.useEffect(()=>{const c=d=>{d.target&&!a.current&&Vh(FS,s,{originalEvent:d},{discrete:!1})};return r.addEventListener("focusin",c),()=>r.removeEventListener("focusin",c)},[r,s]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}function Sg(){const n=new CustomEvent(nu);document.dispatchEvent(n)}function Vh(n,r,s,{discrete:a}){const c=s.originalEvent.target,d=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:s});r&&c.addEventListener(n,r,{once:!0}),a?Rh(c,d):c.dispatchEvent(d)}var Ad=0;function Pu(){f.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??Cg()),document.body.insertAdjacentElement("beforeend",n[1]??Cg()),Ad++,()=>{Ad===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Ad--}},[])}function Cg(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var Td="focusScope.autoFocusOnMount",Md="focusScope.autoFocusOnUnmount",kg={bubbles:!1,cancelable:!0},VS="FocusScope",pl=f.forwardRef((n,r)=>{const{loop:s=!1,trapped:a=!1,onMountAutoFocus:c,onUnmountAutoFocus:d,...p}=n,[m,h]=f.useState(null),v=Rt(c),y=Rt(d),x=f.useRef(null),b=ze(r,C=>h(C)),S=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(a){let C=function(M){if(S.paused||!m)return;const R=M.target;m.contains(R)?x.current=R:Mr(x.current,{select:!0})},k=function(M){if(S.paused||!m)return;const R=M.relatedTarget;R!==null&&(m.contains(R)||Mr(x.current,{select:!0}))},P=function(M){if(document.activeElement===document.body)for(const I of M)I.removedNodes.length>0&&Mr(m)};document.addEventListener("focusin",C),document.addEventListener("focusout",k);const j=new MutationObserver(P);return m&&j.observe(m,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",C),document.removeEventListener("focusout",k),j.disconnect()}}},[a,m,S.paused]),f.useEffect(()=>{if(m){jg.add(S);const C=document.activeElement;if(!m.contains(C)){const P=new CustomEvent(Td,kg);m.addEventListener(Td,v),m.dispatchEvent(P),P.defaultPrevented||(US(YS(Uh(m)),{select:!0}),document.activeElement===C&&Mr(m))}return()=>{m.removeEventListener(Td,v),setTimeout(()=>{const P=new CustomEvent(Md,kg);m.addEventListener(Md,y),m.dispatchEvent(P),P.defaultPrevented||Mr(C??document.body,{select:!0}),m.removeEventListener(Md,y),jg.remove(S)},0)}}},[m,v,y,S]);const N=f.useCallback(C=>{if(!s&&!a||S.paused)return;const k=C.key==="Tab"&&!C.altKey&&!C.ctrlKey&&!C.metaKey,P=document.activeElement;if(k&&P){const j=C.currentTarget,[M,R]=GS(j);M&&R?!C.shiftKey&&P===R?(C.preventDefault(),s&&Mr(M,{select:!0})):C.shiftKey&&P===M&&(C.preventDefault(),s&&Mr(R,{select:!0})):P===j&&C.preventDefault()}},[s,a,S.paused]);return i.jsx(Me.div,{tabIndex:-1,...p,ref:b,onKeyDown:N})});pl.displayName=VS;function US(n,{select:r=!1}={}){const s=document.activeElement;for(const a of n)if(Mr(a,{select:r}),document.activeElement!==s)return}function GS(n){const r=Uh(n),s=Ng(r,n),a=Ng(r.reverse(),n);return[s,a]}function Uh(n){const r=[],s=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const c=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||c?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)r.push(s.currentNode);return r}function Ng(n,r){for(const s of n)if(!QS(s,{upTo:r}))return s}function QS(n,{upTo:r}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(r!==void 0&&n===r)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function qS(n){return n instanceof HTMLInputElement&&"select"in n}function Mr(n,{select:r=!1}={}){if(n&&n.focus){const s=document.activeElement;n.focus({preventScroll:!0}),n!==s&&qS(n)&&r&&n.select()}}var jg=KS();function KS(){let n=[];return{add(r){const s=n[0];r!==s&&s?.pause(),n=Pg(n,r),n.unshift(r)},remove(r){n=Pg(n,r),n[0]?.resume()}}}function Pg(n,r){const s=[...n],a=s.indexOf(r);return a!==-1&&s.splice(a,1),s}function YS(n){return n.filter(r=>r.tagName!=="A")}var XS=cl[" useId ".trim().toString()]||(()=>{}),JS=0;function Jt(n){const[r,s]=f.useState(XS());return At(()=>{s(a=>a??String(JS++))},[n]),n||(r?`radix-${r}`:"")}const ZS=["top","right","bottom","left"],Dr=Math.min,an=Math.max,Za=Math.round,Ia=Math.floor,Vn=n=>({x:n,y:n}),eC={left:"right",right:"left",bottom:"top",top:"bottom"},tC={start:"end",end:"start"};function ru(n,r,s){return an(n,Dr(r,s))}function lr(n,r){return typeof n=="function"?n(r):n}function cr(n){return n.split("-")[0]}function ro(n){return n.split("-")[1]}function Eu(n){return n==="x"?"y":"x"}function Ru(n){return n==="y"?"height":"width"}const nC=new Set(["top","bottom"]);function Wn(n){return nC.has(cr(n))?"y":"x"}function Au(n){return Eu(Wn(n))}function rC(n,r,s){s===void 0&&(s=!1);const a=ro(n),c=Au(n),d=Ru(c);let p=c==="x"?a===(s?"end":"start")?"right":"left":a==="start"?"bottom":"top";return r.reference[d]>r.floating[d]&&(p=el(p)),[p,el(p)]}function sC(n){const r=el(n);return[su(n),r,su(r)]}function su(n){return n.replace(/start|end/g,r=>tC[r])}const Eg=["left","right"],Rg=["right","left"],oC=["top","bottom"],iC=["bottom","top"];function aC(n,r,s){switch(n){case"top":case"bottom":return s?r?Rg:Eg:r?Eg:Rg;case"left":case"right":return r?oC:iC;default:return[]}}function lC(n,r,s,a){const c=ro(n);let d=aC(cr(n),s==="start",a);return c&&(d=d.map(p=>p+"-"+c),r&&(d=d.concat(d.map(su)))),d}function el(n){return n.replace(/left|right|bottom|top/g,r=>eC[r])}function cC(n){return{top:0,right:0,bottom:0,left:0,...n}}function Gh(n){return typeof n!="number"?cC(n):{top:n,right:n,bottom:n,left:n}}function tl(n){const{x:r,y:s,width:a,height:c}=n;return{width:a,height:c,top:s,left:r,right:r+a,bottom:s+c,x:r,y:s}}function Ag(n,r,s){let{reference:a,floating:c}=n;const d=Wn(r),p=Au(r),m=Ru(p),h=cr(r),v=d==="y",y=a.x+a.width/2-c.width/2,x=a.y+a.height/2-c.height/2,b=a[m]/2-c[m]/2;let S;switch(h){case"top":S={x:y,y:a.y-c.height};break;case"bottom":S={x:y,y:a.y+a.height};break;case"right":S={x:a.x+a.width,y:x};break;case"left":S={x:a.x-c.width,y:x};break;default:S={x:a.x,y:a.y}}switch(ro(r)){case"start":S[p]-=b*(s&&v?-1:1);break;case"end":S[p]+=b*(s&&v?-1:1);break}return S}const dC=async(n,r,s)=>{const{placement:a="bottom",strategy:c="absolute",middleware:d=[],platform:p}=s,m=d.filter(Boolean),h=await(p.isRTL==null?void 0:p.isRTL(r));let v=await p.getElementRects({reference:n,floating:r,strategy:c}),{x:y,y:x}=Ag(v,a,h),b=a,S={},N=0;for(let C=0;C<m.length;C++){const{name:k,fn:P}=m[C],{x:j,y:M,data:R,reset:I}=await P({x:y,y:x,initialPlacement:a,placement:b,strategy:c,middlewareData:S,rects:v,platform:p,elements:{reference:n,floating:r}});y=j??y,x=M??x,S={...S,[k]:{...S[k],...R}},I&&N<=50&&(N++,typeof I=="object"&&(I.placement&&(b=I.placement),I.rects&&(v=I.rects===!0?await p.getElementRects({reference:n,floating:r,strategy:c}):I.rects),{x:y,y:x}=Ag(v,b,h)),C=-1)}return{x:y,y:x,placement:b,strategy:c,middlewareData:S}};async function ei(n,r){var s;r===void 0&&(r={});const{x:a,y:c,platform:d,rects:p,elements:m,strategy:h}=n,{boundary:v="clippingAncestors",rootBoundary:y="viewport",elementContext:x="floating",altBoundary:b=!1,padding:S=0}=lr(r,n),N=Gh(S),k=m[b?x==="floating"?"reference":"floating":x],P=tl(await d.getClippingRect({element:(s=await(d.isElement==null?void 0:d.isElement(k)))==null||s?k:k.contextElement||await(d.getDocumentElement==null?void 0:d.getDocumentElement(m.floating)),boundary:v,rootBoundary:y,strategy:h})),j=x==="floating"?{x:a,y:c,width:p.floating.width,height:p.floating.height}:p.reference,M=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m.floating)),R=await(d.isElement==null?void 0:d.isElement(M))?await(d.getScale==null?void 0:d.getScale(M))||{x:1,y:1}:{x:1,y:1},I=tl(d.convertOffsetParentRelativeRectToViewportRelativeRect?await d.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:j,offsetParent:M,strategy:h}):j);return{top:(P.top-I.top+N.top)/R.y,bottom:(I.bottom-P.bottom+N.bottom)/R.y,left:(P.left-I.left+N.left)/R.x,right:(I.right-P.right+N.right)/R.x}}const uC=n=>({name:"arrow",options:n,async fn(r){const{x:s,y:a,placement:c,rects:d,platform:p,elements:m,middlewareData:h}=r,{element:v,padding:y=0}=lr(n,r)||{};if(v==null)return{};const x=Gh(y),b={x:s,y:a},S=Au(c),N=Ru(S),C=await p.getDimensions(v),k=S==="y",P=k?"top":"left",j=k?"bottom":"right",M=k?"clientHeight":"clientWidth",R=d.reference[N]+d.reference[S]-b[S]-d.floating[N],I=b[S]-d.reference[S],W=await(p.getOffsetParent==null?void 0:p.getOffsetParent(v));let z=W?W[M]:0;(!z||!await(p.isElement==null?void 0:p.isElement(W)))&&(z=m.floating[M]||d.floating[N]);const V=R/2-I/2,re=z/2-C[N]/2-1,K=Dr(x[P],re),de=Dr(x[j],re),ie=K,me=z-C[N]-de,ue=z/2-C[N]/2+V,fe=ru(ie,ue,me),ee=!h.arrow&&ro(c)!=null&&ue!==fe&&d.reference[N]/2-(ue<ie?K:de)-C[N]/2<0,Y=ee?ue<ie?ue-ie:ue-me:0;return{[S]:b[S]+Y,data:{[S]:fe,centerOffset:ue-fe-Y,...ee&&{alignmentOffset:Y}},reset:ee}}}),pC=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(r){var s,a;const{placement:c,middlewareData:d,rects:p,initialPlacement:m,platform:h,elements:v}=r,{mainAxis:y=!0,crossAxis:x=!0,fallbackPlacements:b,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:N="none",flipAlignment:C=!0,...k}=lr(n,r);if((s=d.arrow)!=null&&s.alignmentOffset)return{};const P=cr(c),j=Wn(m),M=cr(m)===m,R=await(h.isRTL==null?void 0:h.isRTL(v.floating)),I=b||(M||!C?[el(m)]:sC(m)),W=N!=="none";!b&&W&&I.push(...lC(m,C,N,R));const z=[m,...I],V=await ei(r,k),re=[];let K=((a=d.flip)==null?void 0:a.overflows)||[];if(y&&re.push(V[P]),x){const ue=rC(c,p,R);re.push(V[ue[0]],V[ue[1]])}if(K=[...K,{placement:c,overflows:re}],!re.every(ue=>ue<=0)){var de,ie;const ue=(((de=d.flip)==null?void 0:de.index)||0)+1,fe=z[ue];if(fe&&(!(x==="alignment"?j!==Wn(fe):!1)||K.every(_=>Wn(_.placement)===j?_.overflows[0]>0:!0)))return{data:{index:ue,overflows:K},reset:{placement:fe}};let ee=(ie=K.filter(Y=>Y.overflows[0]<=0).sort((Y,_)=>Y.overflows[1]-_.overflows[1])[0])==null?void 0:ie.placement;if(!ee)switch(S){case"bestFit":{var me;const Y=(me=K.filter(_=>{if(W){const H=Wn(_.placement);return H===j||H==="y"}return!0}).map(_=>[_.placement,_.overflows.filter(H=>H>0).reduce((H,J)=>H+J,0)]).sort((_,H)=>_[1]-H[1])[0])==null?void 0:me[0];Y&&(ee=Y);break}case"initialPlacement":ee=m;break}if(c!==ee)return{reset:{placement:ee}}}return{}}}};function Tg(n,r){return{top:n.top-r.height,right:n.right-r.width,bottom:n.bottom-r.height,left:n.left-r.width}}function Mg(n){return ZS.some(r=>n[r]>=0)}const fC=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(r){const{rects:s}=r,{strategy:a="referenceHidden",...c}=lr(n,r);switch(a){case"referenceHidden":{const d=await ei(r,{...c,elementContext:"reference"}),p=Tg(d,s.reference);return{data:{referenceHiddenOffsets:p,referenceHidden:Mg(p)}}}case"escaped":{const d=await ei(r,{...c,altBoundary:!0}),p=Tg(d,s.floating);return{data:{escapedOffsets:p,escaped:Mg(p)}}}default:return{}}}}},Qh=new Set(["left","top"]);async function mC(n,r){const{placement:s,platform:a,elements:c}=n,d=await(a.isRTL==null?void 0:a.isRTL(c.floating)),p=cr(s),m=ro(s),h=Wn(s)==="y",v=Qh.has(p)?-1:1,y=d&&h?-1:1,x=lr(r,n);let{mainAxis:b,crossAxis:S,alignmentAxis:N}=typeof x=="number"?{mainAxis:x,crossAxis:0,alignmentAxis:null}:{mainAxis:x.mainAxis||0,crossAxis:x.crossAxis||0,alignmentAxis:x.alignmentAxis};return m&&typeof N=="number"&&(S=m==="end"?N*-1:N),h?{x:S*y,y:b*v}:{x:b*v,y:S*y}}const gC=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(r){var s,a;const{x:c,y:d,placement:p,middlewareData:m}=r,h=await mC(r,n);return p===((s=m.offset)==null?void 0:s.placement)&&(a=m.arrow)!=null&&a.alignmentOffset?{}:{x:c+h.x,y:d+h.y,data:{...h,placement:p}}}}},hC=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(r){const{x:s,y:a,placement:c}=r,{mainAxis:d=!0,crossAxis:p=!1,limiter:m={fn:k=>{let{x:P,y:j}=k;return{x:P,y:j}}},...h}=lr(n,r),v={x:s,y:a},y=await ei(r,h),x=Wn(cr(c)),b=Eu(x);let S=v[b],N=v[x];if(d){const k=b==="y"?"top":"left",P=b==="y"?"bottom":"right",j=S+y[k],M=S-y[P];S=ru(j,S,M)}if(p){const k=x==="y"?"top":"left",P=x==="y"?"bottom":"right",j=N+y[k],M=N-y[P];N=ru(j,N,M)}const C=m.fn({...r,[b]:S,[x]:N});return{...C,data:{x:C.x-s,y:C.y-a,enabled:{[b]:d,[x]:p}}}}}},vC=function(n){return n===void 0&&(n={}),{options:n,fn(r){const{x:s,y:a,placement:c,rects:d,middlewareData:p}=r,{offset:m=0,mainAxis:h=!0,crossAxis:v=!0}=lr(n,r),y={x:s,y:a},x=Wn(c),b=Eu(x);let S=y[b],N=y[x];const C=lr(m,r),k=typeof C=="number"?{mainAxis:C,crossAxis:0}:{mainAxis:0,crossAxis:0,...C};if(h){const M=b==="y"?"height":"width",R=d.reference[b]-d.floating[M]+k.mainAxis,I=d.reference[b]+d.reference[M]-k.mainAxis;S<R?S=R:S>I&&(S=I)}if(v){var P,j;const M=b==="y"?"width":"height",R=Qh.has(cr(c)),I=d.reference[x]-d.floating[M]+(R&&((P=p.offset)==null?void 0:P[x])||0)+(R?0:k.crossAxis),W=d.reference[x]+d.reference[M]+(R?0:((j=p.offset)==null?void 0:j[x])||0)-(R?k.crossAxis:0);N<I?N=I:N>W&&(N=W)}return{[b]:S,[x]:N}}}},xC=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(r){var s,a;const{placement:c,rects:d,platform:p,elements:m}=r,{apply:h=()=>{},...v}=lr(n,r),y=await ei(r,v),x=cr(c),b=ro(c),S=Wn(c)==="y",{width:N,height:C}=d.floating;let k,P;x==="top"||x==="bottom"?(k=x,P=b===(await(p.isRTL==null?void 0:p.isRTL(m.floating))?"start":"end")?"left":"right"):(P=x,k=b==="end"?"top":"bottom");const j=C-y.top-y.bottom,M=N-y.left-y.right,R=Dr(C-y[k],j),I=Dr(N-y[P],M),W=!r.middlewareData.shift;let z=R,V=I;if((s=r.middlewareData.shift)!=null&&s.enabled.x&&(V=M),(a=r.middlewareData.shift)!=null&&a.enabled.y&&(z=j),W&&!b){const K=an(y.left,0),de=an(y.right,0),ie=an(y.top,0),me=an(y.bottom,0);S?V=N-2*(K!==0||de!==0?K+de:an(y.left,y.right)):z=C-2*(ie!==0||me!==0?ie+me:an(y.top,y.bottom))}await h({...r,availableWidth:V,availableHeight:z});const re=await p.getDimensions(m.floating);return N!==re.width||C!==re.height?{reset:{rects:!0}}:{}}}};function fl(){return typeof window<"u"}function so(n){return qh(n)?(n.nodeName||"").toLowerCase():"#document"}function ln(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function Yn(n){var r;return(r=(qh(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function qh(n){return fl()?n instanceof Node||n instanceof ln(n).Node:!1}function Tn(n){return fl()?n instanceof Element||n instanceof ln(n).Element:!1}function qn(n){return fl()?n instanceof HTMLElement||n instanceof ln(n).HTMLElement:!1}function Ig(n){return!fl()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof ln(n).ShadowRoot}const yC=new Set(["inline","contents"]);function mi(n){const{overflow:r,overflowX:s,overflowY:a,display:c}=Mn(n);return/auto|scroll|overlay|hidden|clip/.test(r+a+s)&&!yC.has(c)}const bC=new Set(["table","td","th"]);function wC(n){return bC.has(so(n))}const SC=[":popover-open",":modal"];function ml(n){return SC.some(r=>{try{return n.matches(r)}catch{return!1}})}const CC=["transform","translate","scale","rotate","perspective"],kC=["transform","translate","scale","rotate","perspective","filter"],NC=["paint","layout","strict","content"];function Tu(n){const r=Mu(),s=Tn(n)?Mn(n):n;return CC.some(a=>s[a]?s[a]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!r&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!r&&(s.filter?s.filter!=="none":!1)||kC.some(a=>(s.willChange||"").includes(a))||NC.some(a=>(s.contain||"").includes(a))}function jC(n){let r=Or(n);for(;qn(r)&&!Zs(r);){if(Tu(r))return r;if(ml(r))return null;r=Or(r)}return null}function Mu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const PC=new Set(["html","body","#document"]);function Zs(n){return PC.has(so(n))}function Mn(n){return ln(n).getComputedStyle(n)}function gl(n){return Tn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Or(n){if(so(n)==="html")return n;const r=n.assignedSlot||n.parentNode||Ig(n)&&n.host||Yn(n);return Ig(r)?r.host:r}function Kh(n){const r=Or(n);return Zs(r)?n.ownerDocument?n.ownerDocument.body:n.body:qn(r)&&mi(r)?r:Kh(r)}function ti(n,r,s){var a;r===void 0&&(r=[]),s===void 0&&(s=!0);const c=Kh(n),d=c===((a=n.ownerDocument)==null?void 0:a.body),p=ln(c);if(d){const m=ou(p);return r.concat(p,p.visualViewport||[],mi(c)?c:[],m&&s?ti(m):[])}return r.concat(c,ti(c,[],s))}function ou(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function Yh(n){const r=Mn(n);let s=parseFloat(r.width)||0,a=parseFloat(r.height)||0;const c=qn(n),d=c?n.offsetWidth:s,p=c?n.offsetHeight:a,m=Za(s)!==d||Za(a)!==p;return m&&(s=d,a=p),{width:s,height:a,$:m}}function Iu(n){return Tn(n)?n:n.contextElement}function Ws(n){const r=Iu(n);if(!qn(r))return Vn(1);const s=r.getBoundingClientRect(),{width:a,height:c,$:d}=Yh(r);let p=(d?Za(s.width):s.width)/a,m=(d?Za(s.height):s.height)/c;return(!p||!Number.isFinite(p))&&(p=1),(!m||!Number.isFinite(m))&&(m=1),{x:p,y:m}}const EC=Vn(0);function Xh(n){const r=ln(n);return!Mu()||!r.visualViewport?EC:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function RC(n,r,s){return r===void 0&&(r=!1),!s||r&&s!==ln(n)?!1:r}function is(n,r,s,a){r===void 0&&(r=!1),s===void 0&&(s=!1);const c=n.getBoundingClientRect(),d=Iu(n);let p=Vn(1);r&&(a?Tn(a)&&(p=Ws(a)):p=Ws(n));const m=RC(d,s,a)?Xh(d):Vn(0);let h=(c.left+m.x)/p.x,v=(c.top+m.y)/p.y,y=c.width/p.x,x=c.height/p.y;if(d){const b=ln(d),S=a&&Tn(a)?ln(a):a;let N=b,C=ou(N);for(;C&&a&&S!==N;){const k=Ws(C),P=C.getBoundingClientRect(),j=Mn(C),M=P.left+(C.clientLeft+parseFloat(j.paddingLeft))*k.x,R=P.top+(C.clientTop+parseFloat(j.paddingTop))*k.y;h*=k.x,v*=k.y,y*=k.x,x*=k.y,h+=M,v+=R,N=ln(C),C=ou(N)}}return tl({width:y,height:x,x:h,y:v})}function hl(n,r){const s=gl(n).scrollLeft;return r?r.left+s:is(Yn(n)).left+s}function Jh(n,r){const s=n.getBoundingClientRect(),a=s.left+r.scrollLeft-hl(n,s),c=s.top+r.scrollTop;return{x:a,y:c}}function AC(n){let{elements:r,rect:s,offsetParent:a,strategy:c}=n;const d=c==="fixed",p=Yn(a),m=r?ml(r.floating):!1;if(a===p||m&&d)return s;let h={scrollLeft:0,scrollTop:0},v=Vn(1);const y=Vn(0),x=qn(a);if((x||!x&&!d)&&((so(a)!=="body"||mi(p))&&(h=gl(a)),qn(a))){const S=is(a);v=Ws(a),y.x=S.x+a.clientLeft,y.y=S.y+a.clientTop}const b=p&&!x&&!d?Jh(p,h):Vn(0);return{width:s.width*v.x,height:s.height*v.y,x:s.x*v.x-h.scrollLeft*v.x+y.x+b.x,y:s.y*v.y-h.scrollTop*v.y+y.y+b.y}}function TC(n){return Array.from(n.getClientRects())}function MC(n){const r=Yn(n),s=gl(n),a=n.ownerDocument.body,c=an(r.scrollWidth,r.clientWidth,a.scrollWidth,a.clientWidth),d=an(r.scrollHeight,r.clientHeight,a.scrollHeight,a.clientHeight);let p=-s.scrollLeft+hl(n);const m=-s.scrollTop;return Mn(a).direction==="rtl"&&(p+=an(r.clientWidth,a.clientWidth)-c),{width:c,height:d,x:p,y:m}}const _g=25;function IC(n,r){const s=ln(n),a=Yn(n),c=s.visualViewport;let d=a.clientWidth,p=a.clientHeight,m=0,h=0;if(c){d=c.width,p=c.height;const y=Mu();(!y||y&&r==="fixed")&&(m=c.offsetLeft,h=c.offsetTop)}const v=hl(a);if(v<=0){const y=a.ownerDocument,x=y.body,b=getComputedStyle(x),S=y.compatMode==="CSS1Compat"&&parseFloat(b.marginLeft)+parseFloat(b.marginRight)||0,N=Math.abs(a.clientWidth-x.clientWidth-S);N<=_g&&(d-=N)}else v<=_g&&(d+=v);return{width:d,height:p,x:m,y:h}}const _C=new Set(["absolute","fixed"]);function DC(n,r){const s=is(n,!0,r==="fixed"),a=s.top+n.clientTop,c=s.left+n.clientLeft,d=qn(n)?Ws(n):Vn(1),p=n.clientWidth*d.x,m=n.clientHeight*d.y,h=c*d.x,v=a*d.y;return{width:p,height:m,x:h,y:v}}function Dg(n,r,s){let a;if(r==="viewport")a=IC(n,s);else if(r==="document")a=MC(Yn(n));else if(Tn(r))a=DC(r,s);else{const c=Xh(n);a={x:r.x-c.x,y:r.y-c.y,width:r.width,height:r.height}}return tl(a)}function Zh(n,r){const s=Or(n);return s===r||!Tn(s)||Zs(s)?!1:Mn(s).position==="fixed"||Zh(s,r)}function OC(n,r){const s=r.get(n);if(s)return s;let a=ti(n,[],!1).filter(m=>Tn(m)&&so(m)!=="body"),c=null;const d=Mn(n).position==="fixed";let p=d?Or(n):n;for(;Tn(p)&&!Zs(p);){const m=Mn(p),h=Tu(p);!h&&m.position==="fixed"&&(c=null),(d?!h&&!c:!h&&m.position==="static"&&!!c&&_C.has(c.position)||mi(p)&&!h&&Zh(n,p))?a=a.filter(y=>y!==p):c=m,p=Or(p)}return r.set(n,a),a}function LC(n){let{element:r,boundary:s,rootBoundary:a,strategy:c}=n;const p=[...s==="clippingAncestors"?ml(r)?[]:OC(r,this._c):[].concat(s),a],m=p[0],h=p.reduce((v,y)=>{const x=Dg(r,y,c);return v.top=an(x.top,v.top),v.right=Dr(x.right,v.right),v.bottom=Dr(x.bottom,v.bottom),v.left=an(x.left,v.left),v},Dg(r,m,c));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function zC(n){const{width:r,height:s}=Yh(n);return{width:r,height:s}}function FC(n,r,s){const a=qn(r),c=Yn(r),d=s==="fixed",p=is(n,!0,d,r);let m={scrollLeft:0,scrollTop:0};const h=Vn(0);function v(){h.x=hl(c)}if(a||!a&&!d)if((so(r)!=="body"||mi(c))&&(m=gl(r)),a){const S=is(r,!0,d,r);h.x=S.x+r.clientLeft,h.y=S.y+r.clientTop}else c&&v();d&&!a&&c&&v();const y=c&&!a&&!d?Jh(c,m):Vn(0),x=p.left+m.scrollLeft-h.x-y.x,b=p.top+m.scrollTop-h.y-y.y;return{x,y:b,width:p.width,height:p.height}}function Id(n){return Mn(n).position==="static"}function Og(n,r){if(!qn(n)||Mn(n).position==="fixed")return null;if(r)return r(n);let s=n.offsetParent;return Yn(n)===s&&(s=s.ownerDocument.body),s}function e0(n,r){const s=ln(n);if(ml(n))return s;if(!qn(n)){let c=Or(n);for(;c&&!Zs(c);){if(Tn(c)&&!Id(c))return c;c=Or(c)}return s}let a=Og(n,r);for(;a&&wC(a)&&Id(a);)a=Og(a,r);return a&&Zs(a)&&Id(a)&&!Tu(a)?s:a||jC(n)||s}const $C=async function(n){const r=this.getOffsetParent||e0,s=this.getDimensions,a=await s(n.floating);return{reference:FC(n.reference,await r(n.floating),n.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function HC(n){return Mn(n).direction==="rtl"}const BC={convertOffsetParentRelativeRectToViewportRelativeRect:AC,getDocumentElement:Yn,getClippingRect:LC,getOffsetParent:e0,getElementRects:$C,getClientRects:TC,getDimensions:zC,getScale:Ws,isElement:Tn,isRTL:HC};function t0(n,r){return n.x===r.x&&n.y===r.y&&n.width===r.width&&n.height===r.height}function WC(n,r){let s=null,a;const c=Yn(n);function d(){var m;clearTimeout(a),(m=s)==null||m.disconnect(),s=null}function p(m,h){m===void 0&&(m=!1),h===void 0&&(h=1),d();const v=n.getBoundingClientRect(),{left:y,top:x,width:b,height:S}=v;if(m||r(),!b||!S)return;const N=Ia(x),C=Ia(c.clientWidth-(y+b)),k=Ia(c.clientHeight-(x+S)),P=Ia(y),M={rootMargin:-N+"px "+-C+"px "+-k+"px "+-P+"px",threshold:an(0,Dr(1,h))||1};let R=!0;function I(W){const z=W[0].intersectionRatio;if(z!==h){if(!R)return p();z?p(!1,z):a=setTimeout(()=>{p(!1,1e-7)},1e3)}z===1&&!t0(v,n.getBoundingClientRect())&&p(),R=!1}try{s=new IntersectionObserver(I,{...M,root:c.ownerDocument})}catch{s=new IntersectionObserver(I,M)}s.observe(n)}return p(!0),d}function VC(n,r,s,a){a===void 0&&(a={});const{ancestorScroll:c=!0,ancestorResize:d=!0,elementResize:p=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:h=!1}=a,v=Iu(n),y=c||d?[...v?ti(v):[],...ti(r)]:[];y.forEach(P=>{c&&P.addEventListener("scroll",s,{passive:!0}),d&&P.addEventListener("resize",s)});const x=v&&m?WC(v,s):null;let b=-1,S=null;p&&(S=new ResizeObserver(P=>{let[j]=P;j&&j.target===v&&S&&(S.unobserve(r),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var M;(M=S)==null||M.observe(r)})),s()}),v&&!h&&S.observe(v),S.observe(r));let N,C=h?is(n):null;h&&k();function k(){const P=is(n);C&&!t0(C,P)&&s(),C=P,N=requestAnimationFrame(k)}return s(),()=>{var P;y.forEach(j=>{c&&j.removeEventListener("scroll",s),d&&j.removeEventListener("resize",s)}),x?.(),(P=S)==null||P.disconnect(),S=null,h&&cancelAnimationFrame(N)}}const UC=gC,GC=hC,QC=pC,qC=xC,KC=fC,Lg=uC,YC=vC,XC=(n,r,s)=>{const a=new Map,c={platform:BC,...s},d={...c.platform,_c:a};return dC(n,r,{...c,platform:d})};var JC=typeof document<"u",ZC=function(){},Ha=JC?f.useLayoutEffect:ZC;function nl(n,r){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(typeof n=="function"&&n.toString()===r.toString())return!0;let s,a,c;if(n&&r&&typeof n=="object"){if(Array.isArray(n)){if(s=n.length,s!==r.length)return!1;for(a=s;a--!==0;)if(!nl(n[a],r[a]))return!1;return!0}if(c=Object.keys(n),s=c.length,s!==Object.keys(r).length)return!1;for(a=s;a--!==0;)if(!{}.hasOwnProperty.call(r,c[a]))return!1;for(a=s;a--!==0;){const d=c[a];if(!(d==="_owner"&&n.$$typeof)&&!nl(n[d],r[d]))return!1}return!0}return n!==n&&r!==r}function n0(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function zg(n,r){const s=n0(n);return Math.round(r*s)/s}function _d(n){const r=f.useRef(n);return Ha(()=>{r.current=n}),r}function ek(n){n===void 0&&(n={});const{placement:r="bottom",strategy:s="absolute",middleware:a=[],platform:c,elements:{reference:d,floating:p}={},transform:m=!0,whileElementsMounted:h,open:v}=n,[y,x]=f.useState({x:0,y:0,strategy:s,placement:r,middlewareData:{},isPositioned:!1}),[b,S]=f.useState(a);nl(b,a)||S(a);const[N,C]=f.useState(null),[k,P]=f.useState(null),j=f.useCallback(_=>{_!==W.current&&(W.current=_,C(_))},[]),M=f.useCallback(_=>{_!==z.current&&(z.current=_,P(_))},[]),R=d||N,I=p||k,W=f.useRef(null),z=f.useRef(null),V=f.useRef(y),re=h!=null,K=_d(h),de=_d(c),ie=_d(v),me=f.useCallback(()=>{if(!W.current||!z.current)return;const _={placement:r,strategy:s,middleware:b};de.current&&(_.platform=de.current),XC(W.current,z.current,_).then(H=>{const J={...H,isPositioned:ie.current!==!1};ue.current&&!nl(V.current,J)&&(V.current=J,ui.flushSync(()=>{x(J)}))})},[b,r,s,de,ie]);Ha(()=>{v===!1&&V.current.isPositioned&&(V.current.isPositioned=!1,x(_=>({..._,isPositioned:!1})))},[v]);const ue=f.useRef(!1);Ha(()=>(ue.current=!0,()=>{ue.current=!1}),[]),Ha(()=>{if(R&&(W.current=R),I&&(z.current=I),R&&I){if(K.current)return K.current(R,I,me);me()}},[R,I,me,K,re]);const fe=f.useMemo(()=>({reference:W,floating:z,setReference:j,setFloating:M}),[j,M]),ee=f.useMemo(()=>({reference:R,floating:I}),[R,I]),Y=f.useMemo(()=>{const _={position:s,left:0,top:0};if(!ee.floating)return _;const H=zg(ee.floating,y.x),J=zg(ee.floating,y.y);return m?{..._,transform:"translate("+H+"px, "+J+"px)",...n0(ee.floating)>=1.5&&{willChange:"transform"}}:{position:s,left:H,top:J}},[s,m,ee.floating,y.x,y.y]);return f.useMemo(()=>({...y,update:me,refs:fe,elements:ee,floatingStyles:Y}),[y,me,fe,ee,Y])}const tk=n=>{function r(s){return{}.hasOwnProperty.call(s,"current")}return{name:"arrow",options:n,fn(s){const{element:a,padding:c}=typeof n=="function"?n(s):n;return a&&r(a)?a.current!=null?Lg({element:a.current,padding:c}).fn(s):{}:a?Lg({element:a,padding:c}).fn(s):{}}}},nk=(n,r)=>({...UC(n),options:[n,r]}),rk=(n,r)=>({...GC(n),options:[n,r]}),sk=(n,r)=>({...YC(n),options:[n,r]}),ok=(n,r)=>({...QC(n),options:[n,r]}),ik=(n,r)=>({...qC(n),options:[n,r]}),ak=(n,r)=>({...KC(n),options:[n,r]}),lk=(n,r)=>({...tk(n),options:[n,r]});var ck="Arrow",r0=f.forwardRef((n,r)=>{const{children:s,width:a=10,height:c=5,...d}=n;return i.jsx(Me.svg,{...d,ref:r,width:a,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?s:i.jsx("polygon",{points:"0,0 30,0 15,10"})})});r0.displayName=ck;var dk=r0;function _u(n){const[r,s]=f.useState(void 0);return At(()=>{if(n){s({width:n.offsetWidth,height:n.offsetHeight});const a=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const d=c[0];let p,m;if("borderBoxSize"in d){const h=d.borderBoxSize,v=Array.isArray(h)?h[0]:h;p=v.inlineSize,m=v.blockSize}else p=n.offsetWidth,m=n.offsetHeight;s({width:p,height:m})});return a.observe(n,{box:"border-box"}),()=>a.unobserve(n)}else s(void 0)},[n]),r}var Du="Popper",[s0,oo]=cn(Du),[uk,o0]=s0(Du),i0=n=>{const{__scopePopper:r,children:s}=n,[a,c]=f.useState(null);return i.jsx(uk,{scope:r,anchor:a,onAnchorChange:c,children:s})};i0.displayName=Du;var a0="PopperAnchor",l0=f.forwardRef((n,r)=>{const{__scopePopper:s,virtualRef:a,...c}=n,d=o0(a0,s),p=f.useRef(null),m=ze(r,p),h=f.useRef(null);return f.useEffect(()=>{const v=h.current;h.current=a?.current||p.current,v!==h.current&&d.onAnchorChange(h.current)}),a?null:i.jsx(Me.div,{...c,ref:m})});l0.displayName=a0;var Ou="PopperContent",[pk,fk]=s0(Ou),c0=f.forwardRef((n,r)=>{const{__scopePopper:s,side:a="bottom",sideOffset:c=0,align:d="center",alignOffset:p=0,arrowPadding:m=0,avoidCollisions:h=!0,collisionBoundary:v=[],collisionPadding:y=0,sticky:x="partial",hideWhenDetached:b=!1,updatePositionStrategy:S="optimized",onPlaced:N,...C}=n,k=o0(Ou,s),[P,j]=f.useState(null),M=ze(r,O=>j(O)),[R,I]=f.useState(null),W=_u(R),z=W?.width??0,V=W?.height??0,re=a+(d!=="center"?"-"+d:""),K=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},de=Array.isArray(v)?v:[v],ie=de.length>0,me={padding:K,boundary:de.filter(gk),altBoundary:ie},{refs:ue,floatingStyles:fe,placement:ee,isPositioned:Y,middlewareData:_}=ek({strategy:"fixed",placement:re,whileElementsMounted:(...O)=>VC(...O,{animationFrame:S==="always"}),elements:{reference:k.anchor},middleware:[nk({mainAxis:c+V,alignmentAxis:p}),h&&rk({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?sk():void 0,...me}),h&&ok({...me}),ik({...me,apply:({elements:O,rects:X,availableWidth:le,availableHeight:he})=>{const{width:Ee,height:Re}=X.reference,Z=O.floating.style;Z.setProperty("--radix-popper-available-width",`${le}px`),Z.setProperty("--radix-popper-available-height",`${he}px`),Z.setProperty("--radix-popper-anchor-width",`${Ee}px`),Z.setProperty("--radix-popper-anchor-height",`${Re}px`)}}),R&&lk({element:R,padding:m}),hk({arrowWidth:z,arrowHeight:V}),b&&ak({strategy:"referenceHidden",...me})]}),[H,J]=p0(ee),A=Rt(N);At(()=>{Y&&A?.()},[Y,A]);const U=_.arrow?.x,B=_.arrow?.y,Q=_.arrow?.centerOffset!==0,[oe,q]=f.useState();return At(()=>{P&&q(window.getComputedStyle(P).zIndex)},[P]),i.jsx("div",{ref:ue.setFloating,"data-radix-popper-content-wrapper":"",style:{...fe,transform:Y?fe.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:oe,"--radix-popper-transform-origin":[_.transformOrigin?.x,_.transformOrigin?.y].join(" "),..._.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:i.jsx(pk,{scope:s,placedSide:H,onArrowChange:I,arrowX:U,arrowY:B,shouldHideArrow:Q,children:i.jsx(Me.div,{"data-side":H,"data-align":J,...C,ref:M,style:{...C.style,animation:Y?void 0:"none"}})})})});c0.displayName=Ou;var d0="PopperArrow",mk={top:"bottom",right:"left",bottom:"top",left:"right"},u0=f.forwardRef(function(r,s){const{__scopePopper:a,...c}=r,d=fk(d0,a),p=mk[d.placedSide];return i.jsx("span",{ref:d.onArrowChange,style:{position:"absolute",left:d.arrowX,top:d.arrowY,[p]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[d.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[d.placedSide],visibility:d.shouldHideArrow?"hidden":void 0},children:i.jsx(dk,{...c,ref:s,style:{...c.style,display:"block"}})})});u0.displayName=d0;function gk(n){return n!==null}var hk=n=>({name:"transformOrigin",options:n,fn(r){const{placement:s,rects:a,middlewareData:c}=r,p=c.arrow?.centerOffset!==0,m=p?0:n.arrowWidth,h=p?0:n.arrowHeight,[v,y]=p0(s),x={start:"0%",center:"50%",end:"100%"}[y],b=(c.arrow?.x??0)+m/2,S=(c.arrow?.y??0)+h/2;let N="",C="";return v==="bottom"?(N=p?x:`${b}px`,C=`${-h}px`):v==="top"?(N=p?x:`${b}px`,C=`${a.floating.height+h}px`):v==="right"?(N=`${-h}px`,C=p?x:`${S}px`):v==="left"&&(N=`${a.floating.width+h}px`,C=p?x:`${S}px`),{data:{x:N,y:C}}}});function p0(n){const[r,s="center"]=n.split("-");return[r,s]}var vl=i0,Lu=l0,zu=c0,Fu=u0,vk="Portal",gi=f.forwardRef((n,r)=>{const{container:s,...a}=n,[c,d]=f.useState(!1);At(()=>d(!0),[]);const p=s||c&&globalThis?.document?.body;return p?J1.createPortal(i.jsx(Me.div,{...a,ref:r}),p):null});gi.displayName=vk;var Dd="rovingFocusGroup.onEntryFocus",xk={bubbles:!1,cancelable:!0},hi="RovingFocusGroup",[iu,f0,yk]=ju(hi),[bk,xl]=cn(hi,[yk]),[wk,Sk]=bk(hi),m0=f.forwardRef((n,r)=>i.jsx(iu.Provider,{scope:n.__scopeRovingFocusGroup,children:i.jsx(iu.Slot,{scope:n.__scopeRovingFocusGroup,children:i.jsx(Ck,{...n,ref:r})})}));m0.displayName=hi;var Ck=f.forwardRef((n,r)=>{const{__scopeRovingFocusGroup:s,orientation:a,loop:c=!1,dir:d,currentTabStopId:p,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:h,onEntryFocus:v,preventScrollOnEntryFocus:y=!1,...x}=n,b=f.useRef(null),S=ze(r,b),N=pi(d),[C,k]=An({prop:p,defaultProp:m??null,onChange:h,caller:hi}),[P,j]=f.useState(!1),M=Rt(v),R=f0(s),I=f.useRef(!1),[W,z]=f.useState(0);return f.useEffect(()=>{const V=b.current;if(V)return V.addEventListener(Dd,M),()=>V.removeEventListener(Dd,M)},[M]),i.jsx(wk,{scope:s,orientation:a,dir:N,loop:c,currentTabStopId:C,onItemFocus:f.useCallback(V=>k(V),[k]),onItemShiftTab:f.useCallback(()=>j(!0),[]),onFocusableItemAdd:f.useCallback(()=>z(V=>V+1),[]),onFocusableItemRemove:f.useCallback(()=>z(V=>V-1),[]),children:i.jsx(Me.div,{tabIndex:P||W===0?-1:0,"data-orientation":a,...x,ref:S,style:{outline:"none",...n.style},onMouseDown:ge(n.onMouseDown,()=>{I.current=!0}),onFocus:ge(n.onFocus,V=>{const re=!I.current;if(V.target===V.currentTarget&&re&&!P){const K=new CustomEvent(Dd,xk);if(V.currentTarget.dispatchEvent(K),!K.defaultPrevented){const de=R().filter(ee=>ee.focusable),ie=de.find(ee=>ee.active),me=de.find(ee=>ee.id===C),fe=[ie,me,...de].filter(Boolean).map(ee=>ee.ref.current);v0(fe,y)}}I.current=!1}),onBlur:ge(n.onBlur,()=>j(!1))})})}),g0="RovingFocusGroupItem",h0=f.forwardRef((n,r)=>{const{__scopeRovingFocusGroup:s,focusable:a=!0,active:c=!1,tabStopId:d,children:p,...m}=n,h=Jt(),v=d||h,y=Sk(g0,s),x=y.currentTabStopId===v,b=f0(s),{onFocusableItemAdd:S,onFocusableItemRemove:N,currentTabStopId:C}=y;return f.useEffect(()=>{if(a)return S(),()=>N()},[a,S,N]),i.jsx(iu.ItemSlot,{scope:s,id:v,focusable:a,active:c,children:i.jsx(Me.span,{tabIndex:x?0:-1,"data-orientation":y.orientation,...m,ref:r,onMouseDown:ge(n.onMouseDown,k=>{a?y.onItemFocus(v):k.preventDefault()}),onFocus:ge(n.onFocus,()=>y.onItemFocus(v)),onKeyDown:ge(n.onKeyDown,k=>{if(k.key==="Tab"&&k.shiftKey){y.onItemShiftTab();return}if(k.target!==k.currentTarget)return;const P=jk(k,y.orientation,y.dir);if(P!==void 0){if(k.metaKey||k.ctrlKey||k.altKey||k.shiftKey)return;k.preventDefault();let M=b().filter(R=>R.focusable).map(R=>R.ref.current);if(P==="last")M.reverse();else if(P==="prev"||P==="next"){P==="prev"&&M.reverse();const R=M.indexOf(k.currentTarget);M=y.loop?Pk(M,R+1):M.slice(R+1)}setTimeout(()=>v0(M))}}),children:typeof p=="function"?p({isCurrentTabStop:x,hasTabStop:C!=null}):p})})});h0.displayName=g0;var kk={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Nk(n,r){return r!=="rtl"?n:n==="ArrowLeft"?"ArrowRight":n==="ArrowRight"?"ArrowLeft":n}function jk(n,r,s){const a=Nk(n.key,s);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return kk[a]}function v0(n,r=!1){const s=document.activeElement;for(const a of n)if(a===s||(a.focus({preventScroll:r}),document.activeElement!==s))return}function Pk(n,r){return n.map((s,a)=>n[(r+a)%n.length])}var x0=m0,y0=h0;function Ek(n){const r=Rk(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(Tk);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return i.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return i.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function Rk(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=Ik(c),m=Mk(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var Ak=Symbol("radix.slottable");function Tk(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Ak}function Mk(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function Ik(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var _k=function(n){if(typeof document>"u")return null;var r=Array.isArray(n)?n[0]:n;return r.ownerDocument.body},Os=new WeakMap,_a=new WeakMap,Da={},Od=0,b0=function(n){return n&&(n.host||b0(n.parentNode))},Dk=function(n,r){return r.map(function(s){if(n.contains(s))return s;var a=b0(s);return a&&n.contains(a)?a:(console.error("aria-hidden",s,"in not contained inside",n,". Doing nothing"),null)}).filter(function(s){return!!s})},Ok=function(n,r,s,a){var c=Dk(r,Array.isArray(n)?n:[n]);Da[s]||(Da[s]=new WeakMap);var d=Da[s],p=[],m=new Set,h=new Set(c),v=function(x){!x||m.has(x)||(m.add(x),v(x.parentNode))};c.forEach(v);var y=function(x){!x||h.has(x)||Array.prototype.forEach.call(x.children,function(b){if(m.has(b))y(b);else try{var S=b.getAttribute(a),N=S!==null&&S!=="false",C=(Os.get(b)||0)+1,k=(d.get(b)||0)+1;Os.set(b,C),d.set(b,k),p.push(b),C===1&&N&&_a.set(b,!0),k===1&&b.setAttribute(s,"true"),N||b.setAttribute(a,"true")}catch(P){console.error("aria-hidden: cannot operate on ",b,P)}})};return y(r),m.clear(),Od++,function(){p.forEach(function(x){var b=Os.get(x)-1,S=d.get(x)-1;Os.set(x,b),d.set(x,S),b||(_a.has(x)||x.removeAttribute(a),_a.delete(x)),S||x.removeAttribute(s)}),Od--,Od||(Os=new WeakMap,Os=new WeakMap,_a=new WeakMap,Da={})}},$u=function(n,r,s){s===void 0&&(s="data-aria-hidden");var a=Array.from(Array.isArray(n)?n:[n]),c=_k(n);return c?(a.push.apply(a,Array.from(c.querySelectorAll("[aria-live], script"))),Ok(a,c,s,"aria-hidden")):function(){return null}},Bn=function(){return Bn=Object.assign||function(r){for(var s,a=1,c=arguments.length;a<c;a++){s=arguments[a];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(r[d]=s[d])}return r},Bn.apply(this,arguments)};function w0(n,r){var s={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.indexOf(a)<0&&(s[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(n);c<a.length;c++)r.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(n,a[c])&&(s[a[c]]=n[a[c]]);return s}function Lk(n,r,s){if(s||arguments.length===2)for(var a=0,c=r.length,d;a<c;a++)(d||!(a in r))&&(d||(d=Array.prototype.slice.call(r,0,a)),d[a]=r[a]);return n.concat(d||Array.prototype.slice.call(r))}var Ba="right-scroll-bar-position",Wa="width-before-scroll-bar",zk="with-scroll-bars-hidden",Fk="--removed-body-scroll-bar-size";function Ld(n,r){return typeof n=="function"?n(r):n&&(n.current=r),n}function $k(n,r){var s=f.useState(function(){return{value:n,callback:r,facade:{get current(){return s.value},set current(a){var c=s.value;c!==a&&(s.value=a,s.callback(a,c))}}}})[0];return s.callback=r,s.facade}var Hk=typeof window<"u"?f.useLayoutEffect:f.useEffect,Fg=new WeakMap;function Bk(n,r){var s=$k(null,function(a){return n.forEach(function(c){return Ld(c,a)})});return Hk(function(){var a=Fg.get(s);if(a){var c=new Set(a),d=new Set(n),p=s.current;c.forEach(function(m){d.has(m)||Ld(m,null)}),d.forEach(function(m){c.has(m)||Ld(m,p)})}Fg.set(s,n)},[n]),s}function Wk(n){return n}function Vk(n,r){r===void 0&&(r=Wk);var s=[],a=!1,c={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return s.length?s[s.length-1]:n},useMedium:function(d){var p=r(d,a);return s.push(p),function(){s=s.filter(function(m){return m!==p})}},assignSyncMedium:function(d){for(a=!0;s.length;){var p=s;s=[],p.forEach(d)}s={push:function(m){return d(m)},filter:function(){return s}}},assignMedium:function(d){a=!0;var p=[];if(s.length){var m=s;s=[],m.forEach(d),p=s}var h=function(){var y=p;p=[],y.forEach(d)},v=function(){return Promise.resolve().then(h)};v(),s={push:function(y){p.push(y),v()},filter:function(y){return p=p.filter(y),s}}}};return c}function Uk(n){n===void 0&&(n={});var r=Vk(null);return r.options=Bn({async:!0,ssr:!1},n),r}var S0=function(n){var r=n.sideCar,s=w0(n,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=r.read();if(!a)throw new Error("Sidecar medium not found");return f.createElement(a,Bn({},s))};S0.isSideCarExport=!0;function Gk(n,r){return n.useMedium(r),S0}var C0=Uk(),zd=function(){},yl=f.forwardRef(function(n,r){var s=f.useRef(null),a=f.useState({onScrollCapture:zd,onWheelCapture:zd,onTouchMoveCapture:zd}),c=a[0],d=a[1],p=n.forwardProps,m=n.children,h=n.className,v=n.removeScrollBar,y=n.enabled,x=n.shards,b=n.sideCar,S=n.noRelative,N=n.noIsolation,C=n.inert,k=n.allowPinchZoom,P=n.as,j=P===void 0?"div":P,M=n.gapMode,R=w0(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=b,W=Bk([s,r]),z=Bn(Bn({},R),c);return f.createElement(f.Fragment,null,y&&f.createElement(I,{sideCar:C0,removeScrollBar:v,shards:x,noRelative:S,noIsolation:N,inert:C,setCallbacks:d,allowPinchZoom:!!k,lockRef:s,gapMode:M}),p?f.cloneElement(f.Children.only(m),Bn(Bn({},z),{ref:W})):f.createElement(j,Bn({},z,{className:h,ref:W}),m))});yl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};yl.classNames={fullWidth:Wa,zeroRight:Ba};var Qk=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function qk(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var r=Qk();return r&&n.setAttribute("nonce",r),n}function Kk(n,r){n.styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r))}function Yk(n){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(n)}var Xk=function(){var n=0,r=null;return{add:function(s){n==0&&(r=qk())&&(Kk(r,s),Yk(r)),n++},remove:function(){n--,!n&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},Jk=function(){var n=Xk();return function(r,s){f.useEffect(function(){return n.add(r),function(){n.remove()}},[r&&s])}},k0=function(){var n=Jk(),r=function(s){var a=s.styles,c=s.dynamic;return n(a,c),null};return r},Zk={left:0,top:0,right:0,gap:0},Fd=function(n){return parseInt(n||"",10)||0},eN=function(n){var r=window.getComputedStyle(document.body),s=r[n==="padding"?"paddingLeft":"marginLeft"],a=r[n==="padding"?"paddingTop":"marginTop"],c=r[n==="padding"?"paddingRight":"marginRight"];return[Fd(s),Fd(a),Fd(c)]},tN=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return Zk;var r=eN(n),s=document.documentElement.clientWidth,a=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,a-s+r[2]-r[0])}},nN=k0(),Vs="data-scroll-locked",rN=function(n,r,s,a){var c=n.left,d=n.top,p=n.right,m=n.gap;return s===void 0&&(s="margin"),`
  .`.concat(zk,` {
   overflow: hidden `).concat(a,`;
   padding-right: `).concat(m,"px ").concat(a,`;
  }
  body[`).concat(Vs,`] {
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
  
  body[`).concat(Vs,`] {
    `).concat(Fk,": ").concat(m,`px;
  }
`)},$g=function(){var n=parseInt(document.body.getAttribute(Vs)||"0",10);return isFinite(n)?n:0},sN=function(){f.useEffect(function(){return document.body.setAttribute(Vs,($g()+1).toString()),function(){var n=$g()-1;n<=0?document.body.removeAttribute(Vs):document.body.setAttribute(Vs,n.toString())}},[])},oN=function(n){var r=n.noRelative,s=n.noImportant,a=n.gapMode,c=a===void 0?"margin":a;sN();var d=f.useMemo(function(){return tN(c)},[c]);return f.createElement(nN,{styles:rN(d,!r,c,s?"":"!important")})},au=!1;if(typeof window<"u")try{var Oa=Object.defineProperty({},"passive",{get:function(){return au=!0,!0}});window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{au=!1}var Ls=au?{passive:!1}:!1,iN=function(n){return n.tagName==="TEXTAREA"},N0=function(n,r){if(!(n instanceof Element))return!1;var s=window.getComputedStyle(n);return s[r]!=="hidden"&&!(s.overflowY===s.overflowX&&!iN(n)&&s[r]==="visible")},aN=function(n){return N0(n,"overflowY")},lN=function(n){return N0(n,"overflowX")},Hg=function(n,r){var s=r.ownerDocument,a=r;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var c=j0(n,a);if(c){var d=P0(n,a),p=d[1],m=d[2];if(p>m)return!0}a=a.parentNode}while(a&&a!==s.body);return!1},cN=function(n){var r=n.scrollTop,s=n.scrollHeight,a=n.clientHeight;return[r,s,a]},dN=function(n){var r=n.scrollLeft,s=n.scrollWidth,a=n.clientWidth;return[r,s,a]},j0=function(n,r){return n==="v"?aN(r):lN(r)},P0=function(n,r){return n==="v"?cN(r):dN(r)},uN=function(n,r){return n==="h"&&r==="rtl"?-1:1},pN=function(n,r,s,a,c){var d=uN(n,window.getComputedStyle(r).direction),p=d*a,m=s.target,h=r.contains(m),v=!1,y=p>0,x=0,b=0;do{if(!m)break;var S=P0(n,m),N=S[0],C=S[1],k=S[2],P=C-k-d*N;(N||P)&&j0(n,m)&&(x+=P,b+=N);var j=m.parentNode;m=j&&j.nodeType===Node.DOCUMENT_FRAGMENT_NODE?j.host:j}while(!h&&m!==document.body||h&&(r.contains(m)||r===m));return(y&&Math.abs(x)<1||!y&&Math.abs(b)<1)&&(v=!0),v},La=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},Bg=function(n){return[n.deltaX,n.deltaY]},Wg=function(n){return n&&"current"in n?n.current:n},fN=function(n,r){return n[0]===r[0]&&n[1]===r[1]},mN=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},gN=0,zs=[];function hN(n){var r=f.useRef([]),s=f.useRef([0,0]),a=f.useRef(),c=f.useState(gN++)[0],d=f.useState(k0)[0],p=f.useRef(n);f.useEffect(function(){p.current=n},[n]),f.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(c));var C=Lk([n.lockRef.current],(n.shards||[]).map(Wg),!0).filter(Boolean);return C.forEach(function(k){return k.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),C.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(c))})}}},[n.inert,n.lockRef.current,n.shards]);var m=f.useCallback(function(C,k){if("touches"in C&&C.touches.length===2||C.type==="wheel"&&C.ctrlKey)return!p.current.allowPinchZoom;var P=La(C),j=s.current,M="deltaX"in C?C.deltaX:j[0]-P[0],R="deltaY"in C?C.deltaY:j[1]-P[1],I,W=C.target,z=Math.abs(M)>Math.abs(R)?"h":"v";if("touches"in C&&z==="h"&&W.type==="range")return!1;var V=window.getSelection(),re=V&&V.anchorNode,K=re?re===W||re.contains(W):!1;if(K)return!1;var de=Hg(z,W);if(!de)return!0;if(de?I=z:(I=z==="v"?"h":"v",de=Hg(z,W)),!de)return!1;if(!a.current&&"changedTouches"in C&&(M||R)&&(a.current=I),!I)return!0;var ie=a.current||I;return pN(ie,k,C,ie==="h"?M:R)},[]),h=f.useCallback(function(C){var k=C;if(!(!zs.length||zs[zs.length-1]!==d)){var P="deltaY"in k?Bg(k):La(k),j=r.current.filter(function(I){return I.name===k.type&&(I.target===k.target||k.target===I.shadowParent)&&fN(I.delta,P)})[0];if(j&&j.should){k.cancelable&&k.preventDefault();return}if(!j){var M=(p.current.shards||[]).map(Wg).filter(Boolean).filter(function(I){return I.contains(k.target)}),R=M.length>0?m(k,M[0]):!p.current.noIsolation;R&&k.cancelable&&k.preventDefault()}}},[]),v=f.useCallback(function(C,k,P,j){var M={name:C,delta:k,target:P,should:j,shadowParent:vN(P)};r.current.push(M),setTimeout(function(){r.current=r.current.filter(function(R){return R!==M})},1)},[]),y=f.useCallback(function(C){s.current=La(C),a.current=void 0},[]),x=f.useCallback(function(C){v(C.type,Bg(C),C.target,m(C,n.lockRef.current))},[]),b=f.useCallback(function(C){v(C.type,La(C),C.target,m(C,n.lockRef.current))},[]);f.useEffect(function(){return zs.push(d),n.setCallbacks({onScrollCapture:x,onWheelCapture:x,onTouchMoveCapture:b}),document.addEventListener("wheel",h,Ls),document.addEventListener("touchmove",h,Ls),document.addEventListener("touchstart",y,Ls),function(){zs=zs.filter(function(C){return C!==d}),document.removeEventListener("wheel",h,Ls),document.removeEventListener("touchmove",h,Ls),document.removeEventListener("touchstart",y,Ls)}},[]);var S=n.removeScrollBar,N=n.inert;return f.createElement(f.Fragment,null,N?f.createElement(d,{styles:mN(c)}):null,S?f.createElement(oN,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function vN(n){for(var r=null;n!==null;)n instanceof ShadowRoot&&(r=n.host,n=n.host),n=n.parentNode;return r}const xN=Gk(C0,hN);var bl=f.forwardRef(function(n,r){return f.createElement(yl,Bn({},n,{ref:r,sideCar:xN}))});bl.classNames=yl.classNames;var lu=["Enter"," "],yN=["ArrowDown","PageUp","Home"],E0=["ArrowUp","PageDown","End"],bN=[...yN,...E0],wN={ltr:[...lu,"ArrowRight"],rtl:[...lu,"ArrowLeft"]},SN={ltr:["ArrowLeft"],rtl:["ArrowRight"]},vi="Menu",[ni,CN,kN]=ju(vi),[us,R0]=cn(vi,[kN,oo,xl]),xi=oo(),A0=xl(),[T0,Lr]=us(vi),[NN,yi]=us(vi),M0=n=>{const{__scopeMenu:r,open:s=!1,children:a,dir:c,onOpenChange:d,modal:p=!0}=n,m=xi(r),[h,v]=f.useState(null),y=f.useRef(!1),x=Rt(d),b=pi(c);return f.useEffect(()=>{const S=()=>{y.current=!0,document.addEventListener("pointerdown",N,{capture:!0,once:!0}),document.addEventListener("pointermove",N,{capture:!0,once:!0})},N=()=>y.current=!1;return document.addEventListener("keydown",S,{capture:!0}),()=>{document.removeEventListener("keydown",S,{capture:!0}),document.removeEventListener("pointerdown",N,{capture:!0}),document.removeEventListener("pointermove",N,{capture:!0})}},[]),i.jsx(vl,{...m,children:i.jsx(T0,{scope:r,open:s,onOpenChange:x,content:h,onContentChange:v,children:i.jsx(NN,{scope:r,onClose:f.useCallback(()=>x(!1),[x]),isUsingKeyboardRef:y,dir:b,modal:p,children:a})})})};M0.displayName=vi;var jN="MenuAnchor",Hu=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n,c=xi(s);return i.jsx(Lu,{...c,...a,ref:r})});Hu.displayName=jN;var Bu="MenuPortal",[PN,I0]=us(Bu,{forceMount:void 0}),_0=n=>{const{__scopeMenu:r,forceMount:s,children:a,container:c}=n,d=Lr(Bu,r);return i.jsx(PN,{scope:r,forceMount:s,children:i.jsx(It,{present:s||d.open,children:i.jsx(gi,{asChild:!0,container:c,children:a})})})};_0.displayName=Bu;var yn="MenuContent",[EN,Wu]=us(yn),D0=f.forwardRef((n,r)=>{const s=I0(yn,n.__scopeMenu),{forceMount:a=s.forceMount,...c}=n,d=Lr(yn,n.__scopeMenu),p=yi(yn,n.__scopeMenu);return i.jsx(ni.Provider,{scope:n.__scopeMenu,children:i.jsx(It,{present:a||d.open,children:i.jsx(ni.Slot,{scope:n.__scopeMenu,children:p.modal?i.jsx(RN,{...c,ref:r}):i.jsx(AN,{...c,ref:r})})})})}),RN=f.forwardRef((n,r)=>{const s=Lr(yn,n.__scopeMenu),a=f.useRef(null),c=ze(r,a);return f.useEffect(()=>{const d=a.current;if(d)return $u(d)},[]),i.jsx(Vu,{...n,ref:c,trapFocus:s.open,disableOutsidePointerEvents:s.open,disableOutsideScroll:!0,onFocusOutside:ge(n.onFocusOutside,d=>d.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>s.onOpenChange(!1)})}),AN=f.forwardRef((n,r)=>{const s=Lr(yn,n.__scopeMenu);return i.jsx(Vu,{...n,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>s.onOpenChange(!1)})}),TN=Ek("MenuContent.ScrollLock"),Vu=f.forwardRef((n,r)=>{const{__scopeMenu:s,loop:a=!1,trapFocus:c,onOpenAutoFocus:d,onCloseAutoFocus:p,disableOutsidePointerEvents:m,onEntryFocus:h,onEscapeKeyDown:v,onPointerDownOutside:y,onFocusOutside:x,onInteractOutside:b,onDismiss:S,disableOutsideScroll:N,...C}=n,k=Lr(yn,s),P=yi(yn,s),j=xi(s),M=A0(s),R=CN(s),[I,W]=f.useState(null),z=f.useRef(null),V=ze(r,z,k.onContentChange),re=f.useRef(0),K=f.useRef(""),de=f.useRef(0),ie=f.useRef(null),me=f.useRef("right"),ue=f.useRef(0),fe=N?bl:f.Fragment,ee=N?{as:TN,allowPinchZoom:!0}:void 0,Y=H=>{const J=K.current+H,A=R().filter(O=>!O.disabled),U=document.activeElement,B=A.find(O=>O.ref.current===U)?.textValue,Q=A.map(O=>O.textValue),oe=WN(Q,J,B),q=A.find(O=>O.textValue===oe)?.ref.current;(function O(X){K.current=X,window.clearTimeout(re.current),X!==""&&(re.current=window.setTimeout(()=>O(""),1e3))})(J),q&&setTimeout(()=>q.focus())};f.useEffect(()=>()=>window.clearTimeout(re.current),[]),Pu();const _=f.useCallback(H=>me.current===ie.current?.side&&UN(H,ie.current?.area),[]);return i.jsx(EN,{scope:s,searchRef:K,onItemEnter:f.useCallback(H=>{_(H)&&H.preventDefault()},[_]),onItemLeave:f.useCallback(H=>{_(H)||(z.current?.focus(),W(null))},[_]),onTriggerLeave:f.useCallback(H=>{_(H)&&H.preventDefault()},[_]),pointerGraceTimerRef:de,onPointerGraceIntentChange:f.useCallback(H=>{ie.current=H},[]),children:i.jsx(fe,{...ee,children:i.jsx(pl,{asChild:!0,trapped:c,onMountAutoFocus:ge(d,H=>{H.preventDefault(),z.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:p,children:i.jsx(fi,{asChild:!0,disableOutsidePointerEvents:m,onEscapeKeyDown:v,onPointerDownOutside:y,onFocusOutside:x,onInteractOutside:b,onDismiss:S,children:i.jsx(x0,{asChild:!0,...M,dir:P.dir,orientation:"vertical",loop:a,currentTabStopId:I,onCurrentTabStopIdChange:W,onEntryFocus:ge(h,H=>{P.isUsingKeyboardRef.current||H.preventDefault()}),preventScrollOnEntryFocus:!0,children:i.jsx(zu,{role:"menu","aria-orientation":"vertical","data-state":J0(k.open),"data-radix-menu-content":"",dir:P.dir,...j,...C,ref:V,style:{outline:"none",...C.style},onKeyDown:ge(C.onKeyDown,H=>{const A=H.target.closest("[data-radix-menu-content]")===H.currentTarget,U=H.ctrlKey||H.altKey||H.metaKey,B=H.key.length===1;A&&(H.key==="Tab"&&H.preventDefault(),!U&&B&&Y(H.key));const Q=z.current;if(H.target!==Q||!bN.includes(H.key))return;H.preventDefault();const q=R().filter(O=>!O.disabled).map(O=>O.ref.current);E0.includes(H.key)&&q.reverse(),HN(q)}),onBlur:ge(n.onBlur,H=>{H.currentTarget.contains(H.target)||(window.clearTimeout(re.current),K.current="")}),onPointerMove:ge(n.onPointerMove,ri(H=>{const J=H.target,A=ue.current!==H.clientX;if(H.currentTarget.contains(J)&&A){const U=H.clientX>ue.current?"right":"left";me.current=U,ue.current=H.clientX}}))})})})})})})});D0.displayName=yn;var MN="MenuGroup",Uu=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n;return i.jsx(Me.div,{role:"group",...a,ref:r})});Uu.displayName=MN;var IN="MenuLabel",O0=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n;return i.jsx(Me.div,{...a,ref:r})});O0.displayName=IN;var rl="MenuItem",Vg="menu.itemSelect",wl=f.forwardRef((n,r)=>{const{disabled:s=!1,onSelect:a,...c}=n,d=f.useRef(null),p=yi(rl,n.__scopeMenu),m=Wu(rl,n.__scopeMenu),h=ze(r,d),v=f.useRef(!1),y=()=>{const x=d.current;if(!s&&x){const b=new CustomEvent(Vg,{bubbles:!0,cancelable:!0});x.addEventListener(Vg,S=>a?.(S),{once:!0}),Rh(x,b),b.defaultPrevented?v.current=!1:p.onClose()}};return i.jsx(L0,{...c,ref:h,disabled:s,onClick:ge(n.onClick,y),onPointerDown:x=>{n.onPointerDown?.(x),v.current=!0},onPointerUp:ge(n.onPointerUp,x=>{v.current||x.currentTarget?.click()}),onKeyDown:ge(n.onKeyDown,x=>{const b=m.searchRef.current!=="";s||b&&x.key===" "||lu.includes(x.key)&&(x.currentTarget.click(),x.preventDefault())})})});wl.displayName=rl;var L0=f.forwardRef((n,r)=>{const{__scopeMenu:s,disabled:a=!1,textValue:c,...d}=n,p=Wu(rl,s),m=A0(s),h=f.useRef(null),v=ze(r,h),[y,x]=f.useState(!1),[b,S]=f.useState("");return f.useEffect(()=>{const N=h.current;N&&S((N.textContent??"").trim())},[d.children]),i.jsx(ni.ItemSlot,{scope:s,disabled:a,textValue:c??b,children:i.jsx(y0,{asChild:!0,...m,focusable:!a,children:i.jsx(Me.div,{role:"menuitem","data-highlighted":y?"":void 0,"aria-disabled":a||void 0,"data-disabled":a?"":void 0,...d,ref:v,onPointerMove:ge(n.onPointerMove,ri(N=>{a?p.onItemLeave(N):(p.onItemEnter(N),N.defaultPrevented||N.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:ge(n.onPointerLeave,ri(N=>p.onItemLeave(N))),onFocus:ge(n.onFocus,()=>x(!0)),onBlur:ge(n.onBlur,()=>x(!1))})})})}),_N="MenuCheckboxItem",z0=f.forwardRef((n,r)=>{const{checked:s=!1,onCheckedChange:a,...c}=n;return i.jsx(W0,{scope:n.__scopeMenu,checked:s,children:i.jsx(wl,{role:"menuitemcheckbox","aria-checked":sl(s)?"mixed":s,...c,ref:r,"data-state":qu(s),onSelect:ge(c.onSelect,()=>a?.(sl(s)?!0:!s),{checkForDefaultPrevented:!1})})})});z0.displayName=_N;var F0="MenuRadioGroup",[DN,ON]=us(F0,{value:void 0,onValueChange:()=>{}}),$0=f.forwardRef((n,r)=>{const{value:s,onValueChange:a,...c}=n,d=Rt(a);return i.jsx(DN,{scope:n.__scopeMenu,value:s,onValueChange:d,children:i.jsx(Uu,{...c,ref:r})})});$0.displayName=F0;var H0="MenuRadioItem",B0=f.forwardRef((n,r)=>{const{value:s,...a}=n,c=ON(H0,n.__scopeMenu),d=s===c.value;return i.jsx(W0,{scope:n.__scopeMenu,checked:d,children:i.jsx(wl,{role:"menuitemradio","aria-checked":d,...a,ref:r,"data-state":qu(d),onSelect:ge(a.onSelect,()=>c.onValueChange?.(s),{checkForDefaultPrevented:!1})})})});B0.displayName=H0;var Gu="MenuItemIndicator",[W0,LN]=us(Gu,{checked:!1}),V0=f.forwardRef((n,r)=>{const{__scopeMenu:s,forceMount:a,...c}=n,d=LN(Gu,s);return i.jsx(It,{present:a||sl(d.checked)||d.checked===!0,children:i.jsx(Me.span,{...c,ref:r,"data-state":qu(d.checked)})})});V0.displayName=Gu;var zN="MenuSeparator",U0=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n;return i.jsx(Me.div,{role:"separator","aria-orientation":"horizontal",...a,ref:r})});U0.displayName=zN;var FN="MenuArrow",G0=f.forwardRef((n,r)=>{const{__scopeMenu:s,...a}=n,c=xi(s);return i.jsx(Fu,{...c,...a,ref:r})});G0.displayName=FN;var Qu="MenuSub",[$N,Q0]=us(Qu),q0=n=>{const{__scopeMenu:r,children:s,open:a=!1,onOpenChange:c}=n,d=Lr(Qu,r),p=xi(r),[m,h]=f.useState(null),[v,y]=f.useState(null),x=Rt(c);return f.useEffect(()=>(d.open===!1&&x(!1),()=>x(!1)),[d.open,x]),i.jsx(vl,{...p,children:i.jsx(T0,{scope:r,open:a,onOpenChange:x,content:v,onContentChange:y,children:i.jsx($N,{scope:r,contentId:Jt(),triggerId:Jt(),trigger:m,onTriggerChange:h,children:s})})})};q0.displayName=Qu;var Qo="MenuSubTrigger",K0=f.forwardRef((n,r)=>{const s=Lr(Qo,n.__scopeMenu),a=yi(Qo,n.__scopeMenu),c=Q0(Qo,n.__scopeMenu),d=Wu(Qo,n.__scopeMenu),p=f.useRef(null),{pointerGraceTimerRef:m,onPointerGraceIntentChange:h}=d,v={__scopeMenu:n.__scopeMenu},y=f.useCallback(()=>{p.current&&window.clearTimeout(p.current),p.current=null},[]);return f.useEffect(()=>y,[y]),f.useEffect(()=>{const x=m.current;return()=>{window.clearTimeout(x),h(null)}},[m,h]),i.jsx(Hu,{asChild:!0,...v,children:i.jsx(L0,{id:c.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":c.contentId,"data-state":J0(s.open),...n,ref:dr(r,c.onTriggerChange),onClick:x=>{n.onClick?.(x),!(n.disabled||x.defaultPrevented)&&(x.currentTarget.focus(),s.open||s.onOpenChange(!0))},onPointerMove:ge(n.onPointerMove,ri(x=>{d.onItemEnter(x),!x.defaultPrevented&&!n.disabled&&!s.open&&!p.current&&(d.onPointerGraceIntentChange(null),p.current=window.setTimeout(()=>{s.onOpenChange(!0),y()},100))})),onPointerLeave:ge(n.onPointerLeave,ri(x=>{y();const b=s.content?.getBoundingClientRect();if(b){const S=s.content?.dataset.side,N=S==="right",C=N?-5:5,k=b[N?"left":"right"],P=b[N?"right":"left"];d.onPointerGraceIntentChange({area:[{x:x.clientX+C,y:x.clientY},{x:k,y:b.top},{x:P,y:b.top},{x:P,y:b.bottom},{x:k,y:b.bottom}],side:S}),window.clearTimeout(m.current),m.current=window.setTimeout(()=>d.onPointerGraceIntentChange(null),300)}else{if(d.onTriggerLeave(x),x.defaultPrevented)return;d.onPointerGraceIntentChange(null)}})),onKeyDown:ge(n.onKeyDown,x=>{const b=d.searchRef.current!=="";n.disabled||b&&x.key===" "||wN[a.dir].includes(x.key)&&(s.onOpenChange(!0),s.content?.focus(),x.preventDefault())})})})});K0.displayName=Qo;var Y0="MenuSubContent",X0=f.forwardRef((n,r)=>{const s=I0(yn,n.__scopeMenu),{forceMount:a=s.forceMount,...c}=n,d=Lr(yn,n.__scopeMenu),p=yi(yn,n.__scopeMenu),m=Q0(Y0,n.__scopeMenu),h=f.useRef(null),v=ze(r,h);return i.jsx(ni.Provider,{scope:n.__scopeMenu,children:i.jsx(It,{present:a||d.open,children:i.jsx(ni.Slot,{scope:n.__scopeMenu,children:i.jsx(Vu,{id:m.contentId,"aria-labelledby":m.triggerId,...c,ref:v,align:"start",side:p.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:y=>{p.isUsingKeyboardRef.current&&h.current?.focus(),y.preventDefault()},onCloseAutoFocus:y=>y.preventDefault(),onFocusOutside:ge(n.onFocusOutside,y=>{y.target!==m.trigger&&d.onOpenChange(!1)}),onEscapeKeyDown:ge(n.onEscapeKeyDown,y=>{p.onClose(),y.preventDefault()}),onKeyDown:ge(n.onKeyDown,y=>{const x=y.currentTarget.contains(y.target),b=SN[p.dir].includes(y.key);x&&b&&(d.onOpenChange(!1),m.trigger?.focus(),y.preventDefault())})})})})})});X0.displayName=Y0;function J0(n){return n?"open":"closed"}function sl(n){return n==="indeterminate"}function qu(n){return sl(n)?"indeterminate":n?"checked":"unchecked"}function HN(n){const r=document.activeElement;for(const s of n)if(s===r||(s.focus(),document.activeElement!==r))return}function BN(n,r){return n.map((s,a)=>n[(r+a)%n.length])}function WN(n,r,s){const c=r.length>1&&Array.from(r).every(v=>v===r[0])?r[0]:r,d=s?n.indexOf(s):-1;let p=BN(n,Math.max(d,0));c.length===1&&(p=p.filter(v=>v!==s));const h=p.find(v=>v.toLowerCase().startsWith(c.toLowerCase()));return h!==s?h:void 0}function VN(n,r){const{x:s,y:a}=n;let c=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const m=r[d],h=r[p],v=m.x,y=m.y,x=h.x,b=h.y;y>a!=b>a&&s<(x-v)*(a-y)/(b-y)+v&&(c=!c)}return c}function UN(n,r){if(!r)return!1;const s={x:n.clientX,y:n.clientY};return VN(s,r)}function ri(n){return r=>r.pointerType==="mouse"?n(r):void 0}var GN=M0,QN=Hu,qN=_0,KN=D0,YN=Uu,XN=O0,JN=wl,ZN=z0,ej=$0,tj=B0,nj=V0,rj=U0,sj=G0,oj=q0,ij=K0,aj=X0,Sl="DropdownMenu",[lj]=cn(Sl,[R0]),$t=R0(),[cj,Z0]=lj(Sl),ev=n=>{const{__scopeDropdownMenu:r,children:s,dir:a,open:c,defaultOpen:d,onOpenChange:p,modal:m=!0}=n,h=$t(r),v=f.useRef(null),[y,x]=An({prop:c,defaultProp:d??!1,onChange:p,caller:Sl});return i.jsx(cj,{scope:r,triggerId:Jt(),triggerRef:v,contentId:Jt(),open:y,onOpenChange:x,onOpenToggle:f.useCallback(()=>x(b=>!b),[x]),modal:m,children:i.jsx(GN,{...h,open:y,onOpenChange:x,dir:a,modal:m,children:s})})};ev.displayName=Sl;var tv="DropdownMenuTrigger",nv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,disabled:a=!1,...c}=n,d=Z0(tv,s),p=$t(s);return i.jsx(QN,{asChild:!0,...p,children:i.jsx(Me.button,{type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":a?"":void 0,disabled:a,...c,ref:dr(r,d.triggerRef),onPointerDown:ge(n.onPointerDown,m=>{!a&&m.button===0&&m.ctrlKey===!1&&(d.onOpenToggle(),d.open||m.preventDefault())}),onKeyDown:ge(n.onKeyDown,m=>{a||(["Enter"," "].includes(m.key)&&d.onOpenToggle(),m.key==="ArrowDown"&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(m.key)&&m.preventDefault())})})})});nv.displayName=tv;var dj="DropdownMenuPortal",rv=n=>{const{__scopeDropdownMenu:r,...s}=n,a=$t(r);return i.jsx(qN,{...a,...s})};rv.displayName=dj;var sv="DropdownMenuContent",ov=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=Z0(sv,s),d=$t(s),p=f.useRef(!1);return i.jsx(KN,{id:c.contentId,"aria-labelledby":c.triggerId,...d,...a,ref:r,onCloseAutoFocus:ge(n.onCloseAutoFocus,m=>{p.current||c.triggerRef.current?.focus(),p.current=!1,m.preventDefault()}),onInteractOutside:ge(n.onInteractOutside,m=>{const h=m.detail.originalEvent,v=h.button===0&&h.ctrlKey===!0,y=h.button===2||v;(!c.modal||y)&&(p.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});ov.displayName=sv;var uj="DropdownMenuGroup",pj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(YN,{...c,...a,ref:r})});pj.displayName=uj;var fj="DropdownMenuLabel",mj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(XN,{...c,...a,ref:r})});mj.displayName=fj;var gj="DropdownMenuItem",iv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(JN,{...c,...a,ref:r})});iv.displayName=gj;var hj="DropdownMenuCheckboxItem",vj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(ZN,{...c,...a,ref:r})});vj.displayName=hj;var xj="DropdownMenuRadioGroup",yj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(ej,{...c,...a,ref:r})});yj.displayName=xj;var bj="DropdownMenuRadioItem",wj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(tj,{...c,...a,ref:r})});wj.displayName=bj;var Sj="DropdownMenuItemIndicator",Cj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(nj,{...c,...a,ref:r})});Cj.displayName=Sj;var kj="DropdownMenuSeparator",av=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(rj,{...c,...a,ref:r})});av.displayName=kj;var Nj="DropdownMenuArrow",jj=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(sj,{...c,...a,ref:r})});jj.displayName=Nj;var Pj=n=>{const{__scopeDropdownMenu:r,children:s,open:a,onOpenChange:c,defaultOpen:d}=n,p=$t(r),[m,h]=An({prop:a,defaultProp:d??!1,onChange:c,caller:"DropdownMenuSub"});return i.jsx(oj,{...p,open:m,onOpenChange:h,children:s})},Ej="DropdownMenuSubTrigger",lv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(ij,{...c,...a,ref:r})});lv.displayName=Ej;var Rj="DropdownMenuSubContent",cv=f.forwardRef((n,r)=>{const{__scopeDropdownMenu:s,...a}=n,c=$t(s);return i.jsx(aj,{...c,...a,ref:r,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});cv.displayName=Rj;var Aj=ev,Tj=nv,Mj=rv,Ij=ov,_j=iv,Dj=av,Oj=Pj,Lj=lv,zj=cv;function Un({...n}){return i.jsx(Aj,{"data-slot":"dropdown-menu",...n})}function Gn({...n}){return i.jsx(Tj,{"data-slot":"dropdown-menu-trigger",...n})}function Qn({className:n,sideOffset:r=4,...s}){return i.jsx(Mj,{children:i.jsx(Ij,{"data-slot":"dropdown-menu-content",sideOffset:r,className:Fe("bg-white text-gray-900 dark:bg-gray-900 dark:text-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border-2 border-gray-900 dark:border-white p-1 shadow-md",n),...s})})}function yt({className:n,inset:r,variant:s="default",...a}){return i.jsx(_j,{"data-slot":"dropdown-menu-item","data-inset":r,"data-variant":s,className:Fe("focus:bg-gray-100 dark:focus:bg-gray-800 focus:text-gray-900 dark:focus:text-white data-[variant=destructive]:text-red-500 data-[variant=destructive]:focus:bg-red-50 dark:data-[variant=destructive]:focus:bg-red-900/20 data-[variant=destructive]:focus:text-red-500 [&_svg:not([class*='text-'])]:text-gray-500 relative flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...a})}function Fj({className:n,...r}){return i.jsx(Dj,{"data-slot":"dropdown-menu-separator",className:Fe("bg-gray-300 dark:bg-gray-700 -mx-1 my-1 h-px",n),...r})}function $j({...n}){return i.jsx(Oj,{"data-slot":"dropdown-menu-sub",...n})}function Hj({className:n,inset:r,children:s,...a}){return i.jsxs(Lj,{"data-slot":"dropdown-menu-sub-trigger","data-inset":r,className:Fe("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",n),...a,children:[s,i.jsx(Ys,{className:"ml-auto size-4"})]})}function Bj({className:n,...r}){return i.jsx(zj,{"data-slot":"dropdown-menu-sub-content",className:Fe("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",n),...r})}var Wj=Symbol("radix.slottable");function Vj(n){const r=({children:s})=>i.jsx(i.Fragment,{children:s});return r.displayName=`${n}.Slottable`,r.__radixId=Wj,r}var dv=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Uj="VisuallyHidden",uv=f.forwardRef((n,r)=>i.jsx(Me.span,{...n,ref:r,style:{...dv,...n.style}}));uv.displayName=Uj;var Gj=uv,[Cl]=cn("Tooltip",[oo]),kl=oo(),pv="TooltipProvider",Qj=700,cu="tooltip.open",[qj,Ku]=Cl(pv),fv=n=>{const{__scopeTooltip:r,delayDuration:s=Qj,skipDelayDuration:a=300,disableHoverableContent:c=!1,children:d}=n,p=f.useRef(!0),m=f.useRef(!1),h=f.useRef(0);return f.useEffect(()=>{const v=h.current;return()=>window.clearTimeout(v)},[]),i.jsx(qj,{scope:r,isOpenDelayedRef:p,delayDuration:s,onOpen:f.useCallback(()=>{window.clearTimeout(h.current),p.current=!1},[]),onClose:f.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>p.current=!0,a)},[a]),isPointerInTransitRef:m,onPointerInTransitChange:f.useCallback(v=>{m.current=v},[]),disableHoverableContent:c,children:d})};fv.displayName=pv;var si="Tooltip",[Kj,bi]=Cl(si),mv=n=>{const{__scopeTooltip:r,children:s,open:a,defaultOpen:c,onOpenChange:d,disableHoverableContent:p,delayDuration:m}=n,h=Ku(si,n.__scopeTooltip),v=kl(r),[y,x]=f.useState(null),b=Jt(),S=f.useRef(0),N=p??h.disableHoverableContent,C=m??h.delayDuration,k=f.useRef(!1),[P,j]=An({prop:a,defaultProp:c??!1,onChange:z=>{z?(h.onOpen(),document.dispatchEvent(new CustomEvent(cu))):h.onClose(),d?.(z)},caller:si}),M=f.useMemo(()=>P?k.current?"delayed-open":"instant-open":"closed",[P]),R=f.useCallback(()=>{window.clearTimeout(S.current),S.current=0,k.current=!1,j(!0)},[j]),I=f.useCallback(()=>{window.clearTimeout(S.current),S.current=0,j(!1)},[j]),W=f.useCallback(()=>{window.clearTimeout(S.current),S.current=window.setTimeout(()=>{k.current=!0,j(!0),S.current=0},C)},[C,j]);return f.useEffect(()=>()=>{S.current&&(window.clearTimeout(S.current),S.current=0)},[]),i.jsx(vl,{...v,children:i.jsx(Kj,{scope:r,contentId:b,open:P,stateAttribute:M,trigger:y,onTriggerChange:x,onTriggerEnter:f.useCallback(()=>{h.isOpenDelayedRef.current?W():R()},[h.isOpenDelayedRef,W,R]),onTriggerLeave:f.useCallback(()=>{N?I():(window.clearTimeout(S.current),S.current=0)},[I,N]),onOpen:R,onClose:I,disableHoverableContent:N,children:s})})};mv.displayName=si;var du="TooltipTrigger",gv=f.forwardRef((n,r)=>{const{__scopeTooltip:s,...a}=n,c=bi(du,s),d=Ku(du,s),p=kl(s),m=f.useRef(null),h=ze(r,m,c.onTriggerChange),v=f.useRef(!1),y=f.useRef(!1),x=f.useCallback(()=>v.current=!1,[]);return f.useEffect(()=>()=>document.removeEventListener("pointerup",x),[x]),i.jsx(Lu,{asChild:!0,...p,children:i.jsx(Me.button,{"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute,...a,ref:h,onPointerMove:ge(n.onPointerMove,b=>{b.pointerType!=="touch"&&!y.current&&!d.isPointerInTransitRef.current&&(c.onTriggerEnter(),y.current=!0)}),onPointerLeave:ge(n.onPointerLeave,()=>{c.onTriggerLeave(),y.current=!1}),onPointerDown:ge(n.onPointerDown,()=>{c.open&&c.onClose(),v.current=!0,document.addEventListener("pointerup",x,{once:!0})}),onFocus:ge(n.onFocus,()=>{v.current||c.onOpen()}),onBlur:ge(n.onBlur,c.onClose),onClick:ge(n.onClick,c.onClose)})})});gv.displayName=du;var Yu="TooltipPortal",[Yj,Xj]=Cl(Yu,{forceMount:void 0}),hv=n=>{const{__scopeTooltip:r,forceMount:s,children:a,container:c}=n,d=bi(Yu,r);return i.jsx(Yj,{scope:r,forceMount:s,children:i.jsx(It,{present:s||d.open,children:i.jsx(gi,{asChild:!0,container:c,children:a})})})};hv.displayName=Yu;var eo="TooltipContent",vv=f.forwardRef((n,r)=>{const s=Xj(eo,n.__scopeTooltip),{forceMount:a=s.forceMount,side:c="top",...d}=n,p=bi(eo,n.__scopeTooltip);return i.jsx(It,{present:a||p.open,children:p.disableHoverableContent?i.jsx(xv,{side:c,...d,ref:r}):i.jsx(Jj,{side:c,...d,ref:r})})}),Jj=f.forwardRef((n,r)=>{const s=bi(eo,n.__scopeTooltip),a=Ku(eo,n.__scopeTooltip),c=f.useRef(null),d=ze(r,c),[p,m]=f.useState(null),{trigger:h,onClose:v}=s,y=c.current,{onPointerInTransitChange:x}=a,b=f.useCallback(()=>{m(null),x(!1)},[x]),S=f.useCallback((N,C)=>{const k=N.currentTarget,P={x:N.clientX,y:N.clientY},j=nP(P,k.getBoundingClientRect()),M=rP(P,j),R=sP(C.getBoundingClientRect()),I=iP([...M,...R]);m(I),x(!0)},[x]);return f.useEffect(()=>()=>b(),[b]),f.useEffect(()=>{if(h&&y){const N=k=>S(k,y),C=k=>S(k,h);return h.addEventListener("pointerleave",N),y.addEventListener("pointerleave",C),()=>{h.removeEventListener("pointerleave",N),y.removeEventListener("pointerleave",C)}}},[h,y,S,b]),f.useEffect(()=>{if(p){const N=C=>{const k=C.target,P={x:C.clientX,y:C.clientY},j=h?.contains(k)||y?.contains(k),M=!oP(P,p);j?b():M&&(b(),v())};return document.addEventListener("pointermove",N),()=>document.removeEventListener("pointermove",N)}},[h,y,p,v,b]),i.jsx(xv,{...n,ref:d})}),[Zj,eP]=Cl(si,{isInside:!1}),tP=Vj("TooltipContent"),xv=f.forwardRef((n,r)=>{const{__scopeTooltip:s,children:a,"aria-label":c,onEscapeKeyDown:d,onPointerDownOutside:p,...m}=n,h=bi(eo,s),v=kl(s),{onClose:y}=h;return f.useEffect(()=>(document.addEventListener(cu,y),()=>document.removeEventListener(cu,y)),[y]),f.useEffect(()=>{if(h.trigger){const x=b=>{b.target?.contains(h.trigger)&&y()};return window.addEventListener("scroll",x,{capture:!0}),()=>window.removeEventListener("scroll",x,{capture:!0})}},[h.trigger,y]),i.jsx(fi,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:x=>x.preventDefault(),onDismiss:y,children:i.jsxs(zu,{"data-state":h.stateAttribute,...v,...m,ref:r,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[i.jsx(tP,{children:a}),i.jsx(Zj,{scope:s,isInside:!0,children:i.jsx(Gj,{id:h.contentId,role:"tooltip",children:c||a})})]})})});vv.displayName=eo;var yv="TooltipArrow",bv=f.forwardRef((n,r)=>{const{__scopeTooltip:s,...a}=n,c=kl(s);return eP(yv,s).isInside?null:i.jsx(Fu,{...c,...a,ref:r})});bv.displayName=yv;function nP(n,r){const s=Math.abs(r.top-n.y),a=Math.abs(r.bottom-n.y),c=Math.abs(r.right-n.x),d=Math.abs(r.left-n.x);switch(Math.min(s,a,c,d)){case d:return"left";case c:return"right";case s:return"top";case a:return"bottom";default:throw new Error("unreachable")}}function rP(n,r,s=5){const a=[];switch(r){case"top":a.push({x:n.x-s,y:n.y+s},{x:n.x+s,y:n.y+s});break;case"bottom":a.push({x:n.x-s,y:n.y-s},{x:n.x+s,y:n.y-s});break;case"left":a.push({x:n.x+s,y:n.y-s},{x:n.x+s,y:n.y+s});break;case"right":a.push({x:n.x-s,y:n.y-s},{x:n.x-s,y:n.y+s});break}return a}function sP(n){const{top:r,right:s,bottom:a,left:c}=n;return[{x:c,y:r},{x:s,y:r},{x:s,y:a},{x:c,y:a}]}function oP(n,r){const{x:s,y:a}=n;let c=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const m=r[d],h=r[p],v=m.x,y=m.y,x=h.x,b=h.y;y>a!=b>a&&s<(x-v)*(a-y)/(b-y)+v&&(c=!c)}return c}function iP(n){const r=n.slice();return r.sort((s,a)=>s.x<a.x?-1:s.x>a.x?1:s.y<a.y?-1:s.y>a.y?1:0),aP(r)}function aP(n){if(n.length<=1)return n.slice();const r=[];for(let a=0;a<n.length;a++){const c=n[a];for(;r.length>=2;){const d=r[r.length-1],p=r[r.length-2];if((d.x-p.x)*(c.y-p.y)>=(d.y-p.y)*(c.x-p.x))r.pop();else break}r.push(c)}r.pop();const s=[];for(let a=n.length-1;a>=0;a--){const c=n[a];for(;s.length>=2;){const d=s[s.length-1],p=s[s.length-2];if((d.x-p.x)*(c.y-p.y)>=(d.y-p.y)*(c.x-p.x))s.pop();else break}s.push(c)}return s.pop(),r.length===1&&s.length===1&&r[0].x===s[0].x&&r[0].y===s[0].y?r:r.concat(s)}var lP=fv,cP=mv,dP=gv,uP=hv,pP=vv,fP=bv;function bt({delayDuration:n=0,...r}){return i.jsx(lP,{"data-slot":"tooltip-provider",delayDuration:n,...r})}function rt({...n}){return i.jsx(bt,{children:i.jsx(cP,{"data-slot":"tooltip",...n})})}function st({...n}){return i.jsx(dP,{"data-slot":"tooltip-trigger",...n})}function ot({className:n,sideOffset:r=0,children:s,...a}){return i.jsx(uP,{children:i.jsxs(pP,{"data-slot":"tooltip-content",sideOffset:r,className:Fe("bg-gray-900 !text-white dark:bg-white dark:!text-gray-900 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-lg px-4 py-2 text-sm text-balance shadow-md [&_p]:text-white",n),...a,children:[s,i.jsx(fP,{className:"bg-gray-900 fill-gray-900 dark:bg-white dark:fill-white z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}var Nl="Collapsible",[mP]=cn(Nl),[gP,Xu]=mP(Nl),wv=f.forwardRef((n,r)=>{const{__scopeCollapsible:s,open:a,defaultOpen:c,disabled:d,onOpenChange:p,...m}=n,[h,v]=An({prop:a,defaultProp:c??!1,onChange:p,caller:Nl});return i.jsx(gP,{scope:s,disabled:d,contentId:Jt(),open:h,onOpenToggle:f.useCallback(()=>v(y=>!y),[v]),children:i.jsx(Me.div,{"data-state":Zu(h),"data-disabled":d?"":void 0,...m,ref:r})})});wv.displayName=Nl;var Sv="CollapsibleTrigger",Cv=f.forwardRef((n,r)=>{const{__scopeCollapsible:s,...a}=n,c=Xu(Sv,s);return i.jsx(Me.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":Zu(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...a,ref:r,onClick:ge(n.onClick,c.onOpenToggle)})});Cv.displayName=Sv;var Ju="CollapsibleContent",kv=f.forwardRef((n,r)=>{const{forceMount:s,...a}=n,c=Xu(Ju,n.__scopeCollapsible);return i.jsx(It,{present:s||c.open,children:({present:d})=>i.jsx(hP,{...a,ref:r,present:d})})});kv.displayName=Ju;var hP=f.forwardRef((n,r)=>{const{__scopeCollapsible:s,present:a,children:c,...d}=n,p=Xu(Ju,s),[m,h]=f.useState(a),v=f.useRef(null),y=ze(r,v),x=f.useRef(0),b=x.current,S=f.useRef(0),N=S.current,C=p.open||m,k=f.useRef(C),P=f.useRef(void 0);return f.useEffect(()=>{const j=requestAnimationFrame(()=>k.current=!1);return()=>cancelAnimationFrame(j)},[]),At(()=>{const j=v.current;if(j){P.current=P.current||{transitionDuration:j.style.transitionDuration,animationName:j.style.animationName},j.style.transitionDuration="0s",j.style.animationName="none";const M=j.getBoundingClientRect();x.current=M.height,S.current=M.width,k.current||(j.style.transitionDuration=P.current.transitionDuration,j.style.animationName=P.current.animationName),h(a)}},[p.open,a]),i.jsx(Me.div,{"data-state":Zu(p.open),"data-disabled":p.disabled?"":void 0,id:p.contentId,hidden:!C,...d,ref:y,style:{"--radix-collapsible-content-height":b?`${b}px`:void 0,"--radix-collapsible-content-width":N?`${N}px`:void 0,...n.style},children:C&&c})});function Zu(n){return n?"open":"closed"}var vP=wv;function $d({...n}){return i.jsx(vP,{"data-slot":"collapsible",...n})}function Hd({...n}){return i.jsx(Cv,{"data-slot":"collapsible-trigger",...n})}function Bd({...n}){return i.jsx(kv,{"data-slot":"collapsible-content",...n})}function xP(n){const r=yP(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(wP);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return i.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return i.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function yP(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=CP(c),m=SP(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var bP=Symbol("radix.slottable");function wP(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===bP}function SP(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function CP(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var jl="Dialog",[Nv]=cn(jl),[kP,In]=Nv(jl),jv=n=>{const{__scopeDialog:r,children:s,open:a,defaultOpen:c,onOpenChange:d,modal:p=!0}=n,m=f.useRef(null),h=f.useRef(null),[v,y]=An({prop:a,defaultProp:c??!1,onChange:d,caller:jl});return i.jsx(kP,{scope:r,triggerRef:m,contentRef:h,contentId:Jt(),titleId:Jt(),descriptionId:Jt(),open:v,onOpenChange:y,onOpenToggle:f.useCallback(()=>y(x=>!x),[y]),modal:p,children:s})};jv.displayName=jl;var Pv="DialogTrigger",NP=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(Pv,s),d=ze(r,c.triggerRef);return i.jsx(Me.button,{type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":np(c.open),...a,ref:d,onClick:ge(n.onClick,c.onOpenToggle)})});NP.displayName=Pv;var ep="DialogPortal",[jP,Ev]=Nv(ep,{forceMount:void 0}),Rv=n=>{const{__scopeDialog:r,forceMount:s,children:a,container:c}=n,d=In(ep,r);return i.jsx(jP,{scope:r,forceMount:s,children:f.Children.map(a,p=>i.jsx(It,{present:s||d.open,children:i.jsx(gi,{asChild:!0,container:c,children:p})}))})};Rv.displayName=ep;var ol="DialogOverlay",Av=f.forwardRef((n,r)=>{const s=Ev(ol,n.__scopeDialog),{forceMount:a=s.forceMount,...c}=n,d=In(ol,n.__scopeDialog);return d.modal?i.jsx(It,{present:a||d.open,children:i.jsx(EP,{...c,ref:r})}):null});Av.displayName=ol;var PP=xP("DialogOverlay.RemoveScroll"),EP=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(ol,s);return i.jsx(bl,{as:PP,allowPinchZoom:!0,shards:[c.contentRef],children:i.jsx(Me.div,{"data-state":np(c.open),...a,ref:r,style:{pointerEvents:"auto",...a.style}})})}),as="DialogContent",Tv=f.forwardRef((n,r)=>{const s=Ev(as,n.__scopeDialog),{forceMount:a=s.forceMount,...c}=n,d=In(as,n.__scopeDialog);return i.jsx(It,{present:a||d.open,children:d.modal?i.jsx(RP,{...c,ref:r}):i.jsx(AP,{...c,ref:r})})});Tv.displayName=as;var RP=f.forwardRef((n,r)=>{const s=In(as,n.__scopeDialog),a=f.useRef(null),c=ze(r,s.contentRef,a);return f.useEffect(()=>{const d=a.current;if(d)return $u(d)},[]),i.jsx(Mv,{...n,ref:c,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ge(n.onCloseAutoFocus,d=>{d.preventDefault(),s.triggerRef.current?.focus()}),onPointerDownOutside:ge(n.onPointerDownOutside,d=>{const p=d.detail.originalEvent,m=p.button===0&&p.ctrlKey===!0;(p.button===2||m)&&d.preventDefault()}),onFocusOutside:ge(n.onFocusOutside,d=>d.preventDefault())})}),AP=f.forwardRef((n,r)=>{const s=In(as,n.__scopeDialog),a=f.useRef(!1),c=f.useRef(!1);return i.jsx(Mv,{...n,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:d=>{n.onCloseAutoFocus?.(d),d.defaultPrevented||(a.current||s.triggerRef.current?.focus(),d.preventDefault()),a.current=!1,c.current=!1},onInteractOutside:d=>{n.onInteractOutside?.(d),d.defaultPrevented||(a.current=!0,d.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const p=d.target;s.triggerRef.current?.contains(p)&&d.preventDefault(),d.detail.originalEvent.type==="focusin"&&c.current&&d.preventDefault()}})}),Mv=f.forwardRef((n,r)=>{const{__scopeDialog:s,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:d,...p}=n,m=In(as,s),h=f.useRef(null),v=ze(r,h);return Pu(),i.jsxs(i.Fragment,{children:[i.jsx(pl,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:c,onUnmountAutoFocus:d,children:i.jsx(fi,{role:"dialog",id:m.contentId,"aria-describedby":m.descriptionId,"aria-labelledby":m.titleId,"data-state":np(m.open),...p,ref:v,onDismiss:()=>m.onOpenChange(!1)})}),i.jsxs(i.Fragment,{children:[i.jsx(TP,{titleId:m.titleId}),i.jsx(IP,{contentRef:h,descriptionId:m.descriptionId})]})]})}),tp="DialogTitle",Iv=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(tp,s);return i.jsx(Me.h2,{id:c.titleId,...a,ref:r})});Iv.displayName=tp;var _v="DialogDescription",Dv=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(_v,s);return i.jsx(Me.p,{id:c.descriptionId,...a,ref:r})});Dv.displayName=_v;var Ov="DialogClose",Lv=f.forwardRef((n,r)=>{const{__scopeDialog:s,...a}=n,c=In(Ov,s);return i.jsx(Me.button,{type:"button",...a,ref:r,onClick:ge(n.onClick,()=>c.onOpenChange(!1))})});Lv.displayName=Ov;function np(n){return n?"open":"closed"}var zv="DialogTitleWarning",[dR,Fv]=cS(zv,{contentName:as,titleName:tp,docsSlug:"dialog"}),TP=({titleId:n})=>{const r=Fv(zv),s=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return f.useEffect(()=>{n&&(document.getElementById(n)||console.error(s))},[s,n]),null},MP="DialogDescriptionWarning",IP=({contentRef:n,descriptionId:r})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Fv(MP).contentName}}.`;return f.useEffect(()=>{const c=n.current?.getAttribute("aria-describedby");r&&c&&(document.getElementById(r)||console.warn(a))},[a,n,r]),null},_P=jv,DP=Rv,$v=Av,OP=Tv,LP=Iv,zP=Dv,FP=Lv;function Pl({...n}){return i.jsx(_P,{"data-slot":"dialog",...n})}function $P({...n}){return i.jsx(DP,{"data-slot":"dialog-portal",...n})}const Hv=f.forwardRef(({className:n,...r},s)=>i.jsx($v,{ref:s,"data-slot":"dialog-overlay",className:Fe("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...r}));Hv.displayName=$v.displayName;function El({className:n,children:r,...s}){return i.jsxs($P,{"data-slot":"dialog-portal",children:[i.jsx(Hv,{}),i.jsxs(OP,{"data-slot":"dialog-content",className:Fe("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",n),...s,children:[r,i.jsxs(FP,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[i.jsx(Xs,{}),i.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function oi({className:n,...r}){return i.jsx("div",{"data-slot":"dialog-header",className:Fe("flex flex-col gap-2 text-center sm:text-left",n),...r})}function Bv({className:n,...r}){return i.jsx("div",{"data-slot":"dialog-footer",className:Fe("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",n),...r})}function ii({className:n,...r}){return i.jsx(LP,{"data-slot":"dialog-title",className:Fe("text-lg leading-none font-semibold",n),...r})}function Ug({className:n,...r}){return i.jsx(zP,{"data-slot":"dialog-description",className:Fe("text-muted-foreground text-sm",n),...r})}const Ft=f.forwardRef(({className:n,type:r,...s},a)=>i.jsx("input",{type:r,"data-slot":"input",className:Fe("flex h-10 w-full min-w-0 rounded-lg border border-gray-900 bg-white px-3 py-2 text-base text-gray-900 transition-colors placeholder:text-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-semibold dark:border-white dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2","aria-invalid:border-red-500 aria-invalid:ring-red-500/20",n),ref:a,...s}));Ft.displayName="Input";const HP=[{id:"marketing-software-aor",title:"Marketing Software AOR"},{id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting"},{id:"pq-response-mnd",title:"PQ Response - MND Housing"},{id:"feature-overview",title:"Feature Overview"},{id:"customer-support",title:"Customer Support"},{id:"feedback-collection",title:"Feedback Collection"},{id:"procurement-rfq",title:"Procurement RFQ to AOR"}];function Gg({open:n,onOpenChange:r,chats:s,onSelectChat:a,onSelectSimulation:c}){const[d,p]=f.useState(""),m=s.filter(x=>x.title.toLowerCase().includes(d.toLowerCase())),h=HP.filter(x=>x.title.toLowerCase().includes(d.toLowerCase())),v=x=>{a(x),r(!1),p("")},y=x=>{c(x),r(!1),p("")};return i.jsx(Pl,{open:n,onOpenChange:r,children:i.jsxs(El,{className:"sm:max-w-lg bg-white border-2 border-gray-900",children:[i.jsx(oi,{children:i.jsx(ii,{className:"text-gray-900",children:"Search Chats"})}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"relative",children:[i.jsx(Ga,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),i.jsx(Ft,{placeholder:"Search chats...",value:d,onChange:x=>p(x.target.value),className:"pl-10 bg-white border-gray-300",autoFocus:!0})]}),i.jsxs("div",{className:"max-h-[300px] overflow-y-auto space-y-1",children:[h.map(x=>i.jsxs("button",{onClick:()=>y(x.id),className:"w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left",children:[i.jsx(Bs,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),i.jsx("span",{className:"text-sm text-gray-900 truncate",children:x.title})]},x.id)),m.map(x=>i.jsxs("button",{onClick:()=>v(x.id),className:"w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left",children:[i.jsx(Bs,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),i.jsx("span",{className:"text-sm text-gray-900 truncate",children:x.title})]},x.id)),m.length===0&&h.length===0&&d&&i.jsx("div",{className:"text-center py-8 text-gray-500",children:i.jsxs("p",{className:"text-sm",children:['No chats found matching "',d,'"']})})]})]})]})})}var BP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],WP=BP.reduce((n,r)=>{const s=wu(`Primitive.${r}`),a=f.forwardRef((c,d)=>{const{asChild:p,...m}=c,h=p?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),i.jsx(h,{...m,ref:d})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{}),VP="Label",Wv=f.forwardRef((n,r)=>i.jsx(WP.label,{...n,ref:r,onMouseDown:s=>{s.target.closest("button, input, select, textarea")||(n.onMouseDown?.(s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));Wv.displayName=VP;var UP=Wv;function lt({className:n,...r}){return i.jsx(UP,{"data-slot":"label",className:Fe("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...r})}function GP({open:n,onOpenChange:r,onCreateFolder:s}){const[a,c]=f.useState(""),d=m=>{m.preventDefault(),a.trim()&&(s(a.trim()),c(""),r(!1))},p=m=>{m||c(""),r(m)};return i.jsx(Pl,{open:n,onOpenChange:p,children:i.jsxs(El,{className:"sm:max-w-md bg-white border-2 border-gray-900",children:[i.jsx(oi,{children:i.jsx(ii,{className:"text-gray-900",children:"Create New Folder"})}),i.jsxs("form",{onSubmit:d,children:[i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"folder-name",className:"text-gray-700",children:"Folder Name"}),i.jsx(Ft,{id:"folder-name",placeholder:"Enter folder name...",value:a,onChange:m=>c(m.target.value),className:"bg-white border-gray-300",autoFocus:!0})]}),i.jsxs("div",{className:"flex items-start gap-2 p-3 bg-gray-100 rounded-lg border border-gray-300",children:[i.jsx(ph,{className:"w-4 h-4 text-gray-700 mt-0.5 flex-shrink-0"}),i.jsx("p",{className:"text-xs text-gray-900",children:"Chats within this folder will only reference files, custom instructions, and memories from within this folder by default. You can change this in folder settings after creation."})]})]}),i.jsxs(Bv,{className:"mt-6",children:[i.jsx(Oe,{type:"button",variant:"outline",onClick:()=>p(!1),children:"Cancel"}),i.jsx(Oe,{type:"submit",disabled:!a.trim(),children:"Create Folder"})]})]})]})})}const Qe={emailDrafter:{id:"email-drafter",name:"Email Drafter",description:"Draft professional emails with customizable tone and structure.",owner:"Jennifer Lee",tags:["Communication","Email"],icon:g2,uses:"13.5k",classification:"R/SN",type:"Community",assistantType:"email-drafter"},queryGov:{id:"query-gov",name:"Query@Gov",description:"Ask questions and get answers.",owner:"Ministry of Manpower (MOM)",tags:["Q&A"],icon:xn,uses:"15.2k",classification:"C(CE)/SN",type:"Developer",assistantType:"query"},transcribe:{id:"transcribe",name:"Transcribe Workspace",description:"Creating meeting minutes from your audio file.",owner:"AI Assistant Team",tags:["Meeting","Audio"],icon:x2,uses:"8.3k",classification:"R/SN",type:"Official",assistantType:"transcribe"},deepResearch:{id:"deep-research",name:"Deep Research Assistant",description:"Conduct comprehensive research across multiple sources and synthesize findings.",owner:"AI Assistant Team",tags:["Research","Analysis"],icon:b2,uses:"9.8k",classification:"C(CE)/SN",type:"Official",assistantType:"deep-research-ai"},powerpoint:{id:"powerpoint",name:"Powerpoint Slide Image Generator",description:"Create icons and pictures for your powerpoint slides.",owner:"Suresh",tags:["Slides","Design"],icon:E2,uses:"12.7k",classification:"R/SN",type:"Community",assistantType:"powerpoint"},parliamentaryDrafter:{id:"parliamentary-drafter",name:"Parliamentary Question Drafter",description:"Prepare PQ responses and talking points for Ministers.",owner:"AI Assistant Team",tags:["Parliamentary","Writing"],icon:xn,uses:"11.4k",classification:"C(CE)/SH",type:"Official",assistantType:"parliamentary"},interAgencyMemo:{id:"inter-agency-memo",name:"Inter-Agency Memo Writer",description:"Draft correspondence for whole-of-government initiatives.",owner:"AI Assistant Team",tags:["Communication","Inter-Agency"],icon:ig,uses:"10.3k",classification:"C(CE)/SN",type:"Official",assistantType:"memo"},socialMediaCampaign:{id:"social-media-campaign",name:"Social Media Campaign Planner",description:"Plan and optimize social media campaigns for government communications.",owner:"AI Assistant Team",tags:["Marketing","Social Media"],icon:ig,uses:"6.2k",classification:"R/SN",type:"Official",assistantType:"social-media-campaign"},contentCalendar:{id:"content-calendar",name:"Content Calendar Manager",description:"Organize and schedule content across multiple channels.",owner:"Communications Team",tags:["Marketing","Planning"],icon:$a,uses:"5.8k",classification:"R/SN",type:"Official",assistantType:"content-calendar"},brandGuidelines:{id:"brand-guidelines",name:"Brand Guidelines Assistant",description:"Ensure consistency with government branding and messaging standards.",owner:"AI Assistant Team",tags:["Marketing","Branding"],icon:Bw,uses:"4.9k",classification:"R/SN",type:"Official",assistantType:"brand-guidelines"},marketResearch:{id:"market-research",name:"Market Research Analyzer",description:"Analyze market trends and public sentiment for strategic planning.",owner:"Strategic Planning Unit",tags:["Marketing","Research"],icon:U2,uses:"7.1k",classification:"R/SN",type:"Official",assistantType:"market-research"},workdayShortlister:{id:"workday-shortlister",name:"HR Recruitment Assistant",description:"Analyzes multiple candidate profiles from Workday against job requirements to identify and shortlist the best-fit candidates for open positions.",owner:"AI Assistant Team",tags:["HR","Recruitment"],icon:fh,uses:"8.4k",classification:"C(CE)/SN",type:"Official",assistantType:"workday-shortlister"},interviewQuestions:{id:"interview-questions",name:"Interview Question Generator",description:"Generate relevant interview questions based on job requirements.",owner:"Human Resources Division",tags:["HR","Recruitment"],icon:xn,uses:"6.7k",classification:"R/SN",type:"Official",assistantType:"interview-questions"},onboardingGuide:{id:"onboarding-guide",name:"Employee Onboarding Guide",description:"Create personalized onboarding plans for new hires.",owner:"People Operations",tags:["HR","Onboarding"],icon:ng,uses:"5.3k",classification:"R/SN",type:"Official",assistantType:"onboarding-guide"},performanceReview:{id:"performance-review",name:"Performance Review Assistant",description:"Draft performance reviews and development plans for team members.",owner:"AI Assistant Team",tags:["HR","Performance"],icon:$a,uses:"7.9k",classification:"R/SN",type:"Official",assistantType:"performance-review"},budgetPlanning:{id:"budget-planning",name:"Budget Planning Assistant",description:"Calculate budget allocations and prepare financial reports.",owner:"Ministry of Digital Development and Information (MDDI)",tags:["Finance","Budget"],icon:$a,uses:"7.9k",classification:"C(CE)/SN",type:"Developer",assistantType:"budget"},parliamentaryQA:{id:"parliamentary-qa",name:"Parliamentary Question Assistant",description:"Helps draft responses to parliamentary questions with proper formatting, research from official sources, and talking points for Ministers.",owner:"AI Assistant Team",tags:["Parliamentary","Research"],icon:ng,uses:"7.3k",classification:"C(CE)/SN",type:"Official",assistantType:"parliamentary-question"},policyBrief:{id:"policy-brief",name:"Policy Brief Writer",description:"Draft policy papers and cabinet memos with proper structure.",owner:"AI Assistant Team",tags:["Policy","Writing"],icon:xn,uses:"6.8k",classification:"C(CE)/SH",type:"Official",assistantType:"policy"},procurementHelper:{id:"procurement-helper",name:"Procurement Document Helper",description:"Generate tender documents and evaluation matrices.",owner:"Priya Muthu",tags:["Procurement","Documents"],icon:Mw,uses:"5.6k",classification:"R/SN",type:"Community",assistantType:"procurement"}},Vv=[Qe.emailDrafter,Qe.queryGov,Qe.transcribe],Uv=[Qe.queryGov,Qe.emailDrafter,Qe.powerpoint,Qe.parliamentaryDrafter,Qe.interAgencyMemo,Qe.deepResearch],rp={marketing:[Qe.socialMediaCampaign,Qe.contentCalendar,Qe.brandGuidelines,Qe.marketResearch],hr:[Qe.workdayShortlister,Qe.interviewQuestions,Qe.onboardingGuide,Qe.performanceReview],"human resources":[Qe.workdayShortlister,Qe.interviewQuestions,Qe.onboardingGuide,Qe.performanceReview],policy:[Qe.parliamentaryQA,Qe.policyBrief,Qe.interAgencyMemo],"project manager":[Qe.budgetPlanning,Qe.policyBrief,Qe.procurementHelper],default:[Qe.budgetPlanning,Qe.policyBrief,Qe.procurementHelper]},QP=n=>({"R/SN":"Restricted, Sensitive: Normal","C(CE)/SN":"Cloud Confidential, Sensitive: Normal","C(CE)/SH":"Cloud Confidential, Sensitive: High"})[n]||n;function qP({isOpen:n,onClose:r,chats:s,activeChatId:a,onSelectChat:c,onNewChat:d,onNewCCESNChat:p,onNewSHChat:m,onDeleteChat:h,onPinChat:v,onRenameChat:y,colorTheme:x,fontStyle:b,onColorThemeChange:S,onFontStyleChange:N,onSettingsOpen:C,mode:k,onModeChange:P,activeView:j,onExploreClick:M,onStudioClick:R,onHomeClick:I,onViewChange:W,userProfile:z,onSignOut:V,onSelectSimulation:re,folders:K=[],onCreateFolder:de,onSelectFolder:ie,onStartAssistantChat:me,onAddChatToFolder:ue,searchModalOpen:fe=!1,onSearchModalChange:ee,onWalkthroughStart:Y,viewedSimulations:_=[]}){const[H,J]=f.useState(!0),[A,U]=f.useState(!1),[B,Q]=f.useState(!1),[oe,q]=f.useState(!1),[O,X]=f.useState(null),[le,he]=f.useState(null),[Ee,Re]=f.useState(null),[Z,je]=f.useState(""),pt=Object.values(rp).flat().filter(ce=>ce.assistantType==="parliamentary-question"||ce.assistantType==="workday-shortlister"),vt=Array.from(new Map(pt.map(ce=>[ce.id,ce])).values()),it=(ce,Je)=>{ce.dataTransfer.setData("chatId",Je),ce.dataTransfer.effectAllowed="move"},dn=(ce,Je)=>{ce.preventDefault(),ce.dataTransfer.dropEffect="move",X(Je)},Vt=()=>{X(null)},Xe=(ce,Je)=>{ce.preventDefault();const et=ce.dataTransfer.getData("chatId");et&&ue&&ue(et,Je),X(null)},Ht=({label:ce,isOpen:Je,sectionId:et,showInfo:qe,infoText:Xn})=>{const un=le===et;return i.jsxs("div",{className:"flex items-center gap-1.5 w-full px-2 py-1.5 rounded-lg transition-colors cursor-pointer",onMouseEnter:()=>he(et),onMouseLeave:()=>he(null),children:[i.jsx("span",{className:`text-xs font-semibold uppercase tracking-wide transition-colors ${un?"text-gray-700":"text-gray-500"}`,children:ce}),qe&&i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("div",{className:"cursor-help text-gray-400 hover:text-gray-600",onClick:ur=>ur.stopPropagation(),children:i.jsx(ph,{className:"w-3 h-3"})})}),i.jsx(ot,{side:"right",children:i.jsx("p",{children:Xn})})]})}),Je?i.jsx(Ks,{className:`w-3 h-3 flex-shrink-0 transition-opacity ${un?"opacity-100 text-gray-800":"opacity-0"}`}):i.jsx(Ys,{className:`w-3 h-3 flex-shrink-0 transition-colors ${un?"text-gray-800":"text-gray-500"}`})]})};return n?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"flex flex-col h-screen w-[280px] border-r border-gray-300 bg-gray-100 flex-shrink-0",children:[i.jsxs("div",{className:"px-4 py-3 flex items-center justify-between",children:[i.jsx("h2",{className:"text-lg font-bold text-gray-900",children:"AI Assistant Desk"}),i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:r,className:"p-1 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700",children:i.jsx(sg,{className:"w-5 h-5"})})}),i.jsx(ot,{side:"right",children:i.jsx("p",{children:"Collapse sidebar"})})]})})]}),i.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:i.jsx(jS,{className:"h-full",children:i.jsx("div",{className:"px-3 py-2",children:k==="desk"?i.jsxs(i.Fragment,{children:[i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsxs(Oe,{"data-tour":"new-chat",className:"w-full justify-start gap-2 px-2 h-9 text-sm group",variant:"ghost",onClick:d,children:[i.jsx(Xo,{className:"w-4 h-4"}),i.jsx("span",{className:"flex-1 text-left",children:"New Chat"}),i.jsx("span",{className:"text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity",children:"⇧⌘O"})]})}),i.jsx(ot,{side:"right",children:i.jsx("p",{children:"Start a new chat (⇧⌘O)"})})]})}),i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsxs(Oe,{onClick:()=>ee(!0),className:"w-full justify-start gap-2 px-2 h-9 text-sm group",variant:"ghost",children:[i.jsx(Ga,{className:"w-4 h-4"}),i.jsx("span",{className:"flex-1 text-left",children:"Search Chats"}),i.jsx("span",{className:"text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity",children:"⌘K"})]})}),i.jsx(ot,{side:"right",children:i.jsx("p",{children:"Search all chats (⌘K)"})})]})}),i.jsxs(Oe,{disabled:!0,className:"w-full justify-start gap-2 px-2 h-9 text-sm opacity-50 cursor-not-allowed",variant:"ghost",children:[i.jsx(Ua,{className:"w-4 h-4"}),i.jsx("span",{className:"flex-1 text-left",children:"Library"}),i.jsx("span",{className:"text-xs text-gray-400",children:"(Coming soon)"})]}),i.jsxs($d,{open:A,onOpenChange:U,className:"mt-3","data-tour":"custom-assistants",children:[i.jsx(Hd,{className:"w-full",children:i.jsx(Ht,{label:"Custom Assistants",isOpen:A,sectionId:"assistants"})}),i.jsx(Bd,{children:i.jsxs("div",{className:"space-y-0 mt-0.5",children:[vt.map(ce=>{const Je=ce.icon;return i.jsxs("button",{onClick:()=>me?.(ce.name,ce.assistantType),className:"w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-normal hover:bg-gray-200 text-left",children:[i.jsx(Je,{className:"w-4 h-4 text-gray-500"}),i.jsx("span",{className:"truncate",children:ce.name})]},ce.id)}),i.jsxs("button",{onClick:M,className:"w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-semibold hover:bg-gray-200 text-left",children:[i.jsx(Yw,{className:"w-4 h-4 text-gray-500"}),i.jsx("span",{children:"Explore Assistants"})]})]})})]}),i.jsxs($d,{open:B,onOpenChange:Q,className:"mt-2","data-tour":"folders",children:[i.jsx(Hd,{className:"w-full",children:i.jsx(Ht,{label:"Folders",isOpen:B,sectionId:"folders"})}),i.jsx(Bd,{children:i.jsxs("div",{className:"space-y-0 mt-0.5",children:[i.jsxs("button",{onClick:()=>q(!0),className:"w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-semibold hover:bg-gray-200 text-left text-gray-700",children:[i.jsx(uh,{className:"w-4 h-4"}),i.jsx("span",{children:"New Folder"})]}),K.map(ce=>i.jsxs("button",{onClick:()=>ie?.(ce.id),onDragOver:Je=>dn(Je,ce.id),onDragLeave:Vt,onDrop:Je=>Xe(Je,ce.id),className:`w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-normal hover:bg-gray-200 text-left ${O===ce.id?"bg-gray-300 border-2 border-gray-900 border-dashed":""}`,children:[i.jsx(Xd,{className:"w-4 h-4 text-gray-500"}),i.jsx("span",{className:"truncate flex-1",children:ce.name}),i.jsx("span",{className:"text-xs text-gray-400",children:ce.chatIds.length})]},ce.id))]})})]}),i.jsxs($d,{open:H,onOpenChange:J,className:"mt-2","data-tour":"recent-chats",children:[i.jsx(Hd,{className:"w-full",children:i.jsx(Ht,{label:"Recent Chats",isOpen:H,sectionId:"recent",showInfo:!0,infoText:"Chats are cleared after 90 days. Drag to folders to organize."})}),i.jsx(Bd,{children:i.jsxs("div",{className:"space-y-0 mt-0.5",children:[[{id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting",classification:"rsn"},{id:"pq-response-mnd",title:"PQ Response - MND Housing",classification:"rsn"},{id:"canvas-demo",title:"Canvas Generation Demo",classification:"rsn"}].filter(ce=>_.includes(ce.id)).map(ce=>{const Je=ce.title.length>24?ce.title.substring(0,24)+"...":ce.title;return i.jsxs("div",{className:`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${a===`sim-${ce.id}`?"bg-gray-200":"hover:bg-gray-200"}`,onClick:()=>re?.(ce.id),title:ce.title,children:[i.jsx("span",{className:"flex-1 truncate text-gray-900",children:Je}),i.jsxs(Un,{children:[i.jsx(Gn,{asChild:!0,children:i.jsx(Oe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0",onClick:et=>et.stopPropagation(),children:i.jsx(ss,{className:"w-3 h-3"})})}),i.jsxs(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:[i.jsxs(yt,{onClick:et=>{et.stopPropagation()},className:"hover:bg-gray-100 opacity-50 cursor-not-allowed",disabled:!0,children:[i.jsx(Jd,{className:"w-4 h-4 mr-2"}),"Rename"]}),i.jsxs(yt,{onClick:et=>{et.stopPropagation()},className:"hover:bg-gray-100 opacity-50 cursor-not-allowed",disabled:!0,children:[i.jsx(og,{className:"w-4 h-4 mr-2"}),"Pin"]}),i.jsxs(yt,{onClick:et=>{et.stopPropagation()},className:"text-red-500 hover:bg-gray-100 opacity-50 cursor-not-allowed",disabled:!0,children:[i.jsx(os,{className:"w-4 h-4 mr-2"}),"Delete"]})]})]})]},ce.id)}),s.filter(ce=>ce.classificationType!=="cce-sn"&&ce.classificationType!=="cce-sh").filter(ce=>!K?.some(Je=>Je.chatIds.includes(ce.id))).map(ce=>{const Je=ce.title.length>24?ce.title.substring(0,24)+"...":ce.title,et=Ee===ce.id;return i.jsxs("div",{draggable:!et,onDragStart:qe=>it(qe,ce.id),className:`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${ce.id===a?"bg-gray-200":"hover:bg-gray-200"}`,onClick:()=>!et&&c(ce.id),title:ce.title,children:[et?i.jsx("input",{type:"text",value:Z,onChange:qe=>je(qe.target.value),onBlur:()=>{Z.trim()&&y&&y(ce.id,Z.trim()),Re(null)},onKeyDown:qe=>{qe.key==="Enter"?(Z.trim()&&y&&y(ce.id,Z.trim()),Re(null)):qe.key==="Escape"&&Re(null)},onClick:qe=>qe.stopPropagation(),className:"flex-1 bg-white border border-gray-300 rounded px-1 py-0.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400",autoFocus:!0}):i.jsx("span",{className:"flex-1 truncate text-gray-900",onDoubleClick:qe=>{qe.stopPropagation(),je(ce.title),Re(ce.id)},title:"Double-click to rename",children:Je}),i.jsxs(Un,{children:[i.jsx(Gn,{asChild:!0,children:i.jsx(Oe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0",onClick:qe=>qe.stopPropagation(),children:i.jsx(ss,{className:"w-3 h-3"})})}),i.jsxs(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:[i.jsxs(yt,{onClick:qe=>{qe.stopPropagation(),je(ce.title),Re(ce.id)},className:"hover:bg-gray-100",children:[i.jsx(Jd,{className:"w-4 h-4 mr-2"}),"Rename"]}),i.jsxs(yt,{onClick:qe=>{qe.stopPropagation(),v?.(ce.id)},className:"hover:bg-gray-100",children:[i.jsx(og,{className:"w-4 h-4 mr-2"}),"Pin"]}),i.jsxs(yt,{onClick:qe=>{qe.stopPropagation(),h(ce.id)},className:"text-red-500 hover:bg-gray-100",children:[i.jsx(os,{className:"w-4 h-4 mr-2"}),"Delete"]})]})]})]},ce.id)})]})})]})]}):i.jsxs(i.Fragment,{children:[i.jsxs(Oe,{onClick:R,className:`w-full justify-start gap-2 px-2 h-9 text-sm ${j==="studio"?"bg-gray-700":""}`,variant:"outline",children:[i.jsx(Xo,{className:"w-4 h-4"}),"New Assistant"]}),i.jsxs(Oe,{variant:"ghost",className:"w-full justify-start gap-2 px-2 h-9 text-sm",children:[i.jsx(fh,{className:"w-4 h-4"}),"My Assistants"]})]})})})}),i.jsxs("div",{className:"px-3 py-2 border-t border-gray-300 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"w-7 h-7 rounded-full bg-gray-600 flex-shrink-0"}),i.jsxs("div",{className:"text-left overflow-hidden",children:[i.jsx("div",{className:"text-sm font-medium text-gray-900",children:z.name}),i.jsx("div",{className:"text-xs text-gray-500",children:z.role})]})]}),i.jsxs(Un,{children:[i.jsx(Gn,{asChild:!0,children:i.jsx("button",{"data-tour":"settings",className:"p-1.5 rounded-lg hover:bg-gray-200 transition-colors text-gray-700",children:i.jsx(Zd,{size:16})})}),i.jsxs(Qn,{align:"end",className:"w-48 bg-white border-2 border-gray-900 rounded-lg",children:[i.jsx(yt,{onClick:ce=>{ce.stopPropagation(),C()},className:"hover:bg-gray-100",children:"Settings"}),i.jsx(yt,{onClick:ce=>{ce.stopPropagation(),Y?.()},className:"hover:bg-gray-100",children:"Walkthrough Tour"}),i.jsx(yt,{onClick:ce=>{ce.stopPropagation(),V()},className:"hover:bg-gray-100",children:"Sign Out"}),i.jsx(Fj,{}),i.jsx(yt,{className:"text-xs text-gray-400 hover:bg-gray-100",children:"Privacy Settings"}),i.jsx(yt,{className:"text-xs text-gray-400 hover:bg-gray-100",children:"Terms of Use"}),i.jsx(yt,{className:"text-xs text-gray-400 hover:bg-gray-100",children:"Report Vulnerability"})]})]})]})]}),i.jsx(Gg,{open:fe,onOpenChange:ee,chats:s,onSelectChat:c,onSelectSimulation:re||(()=>{})}),i.jsx(GP,{open:oe,onOpenChange:q,onCreateFolder:de||(()=>{})})]}):i.jsxs("div",{className:"flex flex-col h-screen w-[52px] border-r border-gray-300 bg-gray-100 flex-shrink-0",children:[i.jsx("div",{className:"px-2 py-3 flex justify-center",children:i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700",children:i.jsx(sg,{className:"w-5 h-5"})})}),i.jsx(ot,{side:"right",children:i.jsx("p",{children:"Expand sidebar"})})]})})}),i.jsxs("div",{className:"flex flex-col items-center gap-1 px-2 py-2",children:[i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-700",children:i.jsx(Xo,{className:"w-5 h-5"})})}),i.jsx(ot,{side:"right",children:i.jsx("p",{children:"New Chat (⇧⌘O)"})})]})}),i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>ee(!0),className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-700",children:i.jsx(Ga,{className:"w-5 h-5"})})}),i.jsx(ot,{side:"right",children:i.jsx("p",{children:"Search Chats (⌘K)"})})]})})]}),i.jsx("div",{className:"mt-auto px-2 py-3 border-t border-gray-300 flex justify-center",children:i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:C,className:"p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700",children:i.jsx(Zd,{className:"w-5 h-5"})})}),i.jsx(ot,{side:"right",children:i.jsx("p",{children:"Settings"})})]})})}),i.jsx(Gg,{open:fe,onOpenChange:ee,chats:s,onSelectChat:ce=>{c(ce),ee(!1)},onSelectSimulation:ce=>{re?.(ce),ee(!1)}})]})}function ai({className:n,...r}){return i.jsx("div",{"data-slot":"card",className:Fe("bg-white text-gray-900 flex flex-col gap-6 rounded-lg border-2 border-gray-900 shadow-md dark:bg-gray-900 dark:text-white dark:border-white",n),...r})}function Qg({className:n,...r}){return i.jsx("div",{"data-slot":"card-header",className:Fe("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",n),...r})}function qg({className:n,...r}){return i.jsx("h4",{"data-slot":"card-title",className:Fe("leading-none font-semibold text-gray-900 dark:text-white",n),...r})}function KP({className:n,...r}){return i.jsx("p",{"data-slot":"card-description",className:Fe("text-gray-500",n),...r})}function li({className:n,...r}){return i.jsx("div",{"data-slot":"card-content",className:Fe("px-6 [&:last-child]:pb-6",n),...r})}function Gv(n){return{dark:{sidebar:"bg-gray-950 border-gray-800",mainBg:"bg-gray-900",header:"border-gray-800 bg-gray-950",title:"text-white",newChatBtn:"bg-blue-600 hover:bg-blue-700 text-white border-0",incognitoBtn:"bg-gray-700 hover:bg-gray-600 text-white border-0",navItem:"hover:bg-gray-800 text-gray-300",separator:"bg-gray-800",chatItem:"hover:bg-gray-800",chatItemActive:"bg-indigo-900/30",chatItemText:"text-gray-100",userMessage:"bg-blue-600 text-white",aiMessage:"bg-gray-800 text-gray-100",userAvatar:"bg-blue-600",aiAvatar:"bg-green-600",inputBorder:"border border-gray-700 focus-visible:ring-blue-500",sendButton:"bg-blue-600 hover:bg-blue-700",outputPanel:"bg-gray-950 border border-gray-800",chatArea:"bg-gray-900"},light:{sidebar:"bg-white border-gray-200",mainBg:"bg-gray-50",header:"border-gray-200 bg-white",title:"text-gray-900",newChatBtn:"bg-blue-600 hover:bg-blue-700 text-white border-0",incognitoBtn:"bg-gray-600 hover:bg-gray-700 text-white border-0",navItem:"hover:bg-gray-100 text-gray-700",separator:"bg-gray-200",chatItem:"hover:bg-gray-100",chatItemActive:"bg-indigo-50",chatItemText:"text-gray-900",userMessage:"bg-blue-600 text-white",aiMessage:"bg-white text-gray-900 border border-gray-200",userAvatar:"bg-blue-600",aiAvatar:"bg-green-600",inputBorder:"border border-gray-300 focus-visible:ring-blue-500",sendButton:"bg-blue-600 hover:bg-blue-700",outputPanel:"bg-white border border-gray-200",chatArea:"bg-gray-50"},minimal:{sidebar:"bg-white border-gray-100",mainBg:"bg-white",header:"border-gray-100 bg-white",title:"text-gray-900",newChatBtn:"bg-gray-900 hover:bg-gray-800 text-white border-0",incognitoBtn:"bg-gray-700 hover:bg-gray-600 text-white border-0",navItem:"hover:bg-gray-50 text-gray-600",separator:"bg-gray-100",chatItem:"hover:bg-gray-50",chatItemActive:"bg-indigo-50",chatItemText:"text-gray-900",userMessage:"bg-gray-900 text-white",aiMessage:"bg-gray-50 text-gray-900",userAvatar:"bg-gray-900",aiAvatar:"bg-gray-700",inputBorder:"border border-gray-200 focus-visible:ring-gray-400",sendButton:"bg-gray-900 hover:bg-gray-800",outputPanel:"bg-white border border-gray-100",chatArea:"bg-white"},"singapore-red":{sidebar:"bg-gradient-to-br from-red-50 via-white to-red-50 border-red-200",mainBg:"bg-gradient-to-br from-red-50 via-white to-red-50",header:"border-red-200 bg-gradient-to-r from-red-100 to-white",title:"bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0",incognitoBtn:"bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white border-0",navItem:"hover:bg-red-100 text-red-800",separator:"bg-gradient-to-r from-red-300 to-red-200",chatItem:"hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100",chatItemActive:"bg-gradient-to-r from-red-100 to-red-50",chatItemText:"text-red-900",userMessage:"bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md",aiMessage:"bg-white border border-red-200 text-gray-900 shadow-sm",userAvatar:"bg-gradient-to-br from-red-600 to-red-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-red-400 to-red-300 shadow-lg",inputBorder:"border-2 border-red-300 focus-visible:ring-red-500",sendButton:"bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg",outputPanel:"bg-white border border-red-200",chatArea:"bg-gradient-to-br from-red-50 via-white to-red-50"},"pastel-pink":{sidebar:"bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 border-pink-200",mainBg:"bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100",header:"border-pink-200 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100",title:"bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white border-0",incognitoBtn:"bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0",navItem:"hover:bg-pink-100 text-pink-700",separator:"bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300",chatItem:"hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100",chatItemActive:"bg-gradient-to-r from-pink-100 to-rose-100",chatItemText:"text-pink-900",userMessage:"bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md",aiMessage:"bg-white border border-pink-200 text-gray-900 shadow-sm",userAvatar:"bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-pink-300 to-rose-400 shadow-lg",inputBorder:"border-2 border-pink-300 focus-visible:ring-pink-400",sendButton:"bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 shadow-lg",outputPanel:"bg-white border border-pink-200",chatArea:"bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"},"army-green":{sidebar:"bg-gradient-to-br from-green-900 via-green-800 to-green-900 border-green-700",mainBg:"bg-gradient-to-br from-green-900 via-green-800 to-green-900",header:"border-green-700 bg-gradient-to-r from-green-900 to-green-800",title:"text-green-100",newChatBtn:"bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white border-0",incognitoBtn:"bg-gradient-to-r from-green-800 to-green-700 hover:from-green-900 hover:to-green-800 text-white border-0",navItem:"hover:bg-green-800 text-green-200",separator:"bg-green-700",chatItem:"hover:bg-green-800",chatItemActive:"bg-green-800",chatItemText:"text-green-100",userMessage:"bg-gradient-to-r from-green-700 to-green-600 text-white shadow-md",aiMessage:"bg-green-950 border border-green-800 text-green-100 shadow-sm",userAvatar:"bg-gradient-to-br from-green-600 to-green-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-green-700 to-green-600 shadow-lg",inputBorder:"border-2 border-green-700 focus-visible:ring-green-500",sendButton:"bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 shadow-lg",outputPanel:"bg-green-950 border border-green-800",chatArea:"bg-gradient-to-br from-green-900 via-green-800 to-green-900"},rainbow:{sidebar:"bg-gradient-to-br from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100 border-purple-300",mainBg:"bg-gradient-to-br from-red-50 via-yellow-50 via-green-50 via-blue-50 to-purple-50",header:"border-purple-300 bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100",title:"bg-gradient-to-r from-red-600 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:from-red-600 hover:via-yellow-600 hover:via-green-600 hover:via-blue-600 hover:to-purple-600 text-white border-0",incognitoBtn:"bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 text-white border-0",navItem:"hover:bg-gradient-to-r hover:from-red-100 hover:via-yellow-100 hover:to-green-100 text-purple-700",separator:"bg-gradient-to-r from-red-300 via-yellow-300 via-green-300 via-blue-300 to-purple-300",chatItem:"hover:bg-gradient-to-r hover:from-red-100 hover:via-yellow-100 hover:to-purple-100",chatItemActive:"bg-gradient-to-r from-red-100 via-yellow-100 to-purple-100",chatItemText:"text-purple-900",userMessage:"bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-green-500 text-white shadow-md",aiMessage:"bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border border-purple-200 text-gray-900 shadow-md",userAvatar:"bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 shadow-lg",aiAvatar:"bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg",inputBorder:"border-2 border-purple-300 focus-visible:ring-purple-500",sendButton:"bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:from-red-600 hover:to-purple-600 shadow-lg",outputPanel:"bg-white border border-purple-200",chatArea:"bg-gradient-to-br from-red-50 via-yellow-50 via-green-50 via-blue-50 to-purple-50"},"national-day":{sidebar:"bg-gradient-to-br from-red-600 via-red-500 to-white border-red-400",mainBg:"bg-gradient-to-br from-red-500 via-white to-red-500",header:"border-red-400 bg-gradient-to-r from-red-600 via-white to-red-600",title:"bg-gradient-to-r from-red-700 via-yellow-500 to-red-700 bg-clip-text text-transparent",newChatBtn:"bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 hover:from-red-700 hover:via-yellow-500 hover:to-red-700 text-white border-2 border-yellow-400",incognitoBtn:"bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-red-800 hover:to-red-800 text-white border-2 border-white",navItem:"hover:bg-red-100 text-red-900",separator:"bg-gradient-to-r from-red-400 via-yellow-300 to-red-400 h-1",chatItem:"hover:bg-gradient-to-r hover:from-red-50 hover:via-yellow-50 hover:to-red-50",chatItemActive:"bg-gradient-to-r from-red-100 via-yellow-50 to-red-100 border-l-4 border-red-600",chatItemText:"text-red-900",userMessage:"bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg border-2 border-yellow-400",aiMessage:"bg-white border-2 border-red-400 text-gray-900 shadow-lg",userAvatar:"bg-gradient-to-br from-red-600 via-yellow-500 to-red-600 shadow-lg border-2 border-white",aiAvatar:"bg-gradient-to-br from-white via-red-200 to-white shadow-lg border-2 border-red-600",inputBorder:"border-2 border-red-400 focus-visible:ring-red-500 focus-visible:ring-offset-2",sendButton:"bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 hover:from-red-700 hover:via-yellow-500 hover:to-red-700 shadow-lg border-2 border-yellow-500",outputPanel:"bg-gradient-to-br from-white via-red-50 to-white border-2 border-red-400",chatArea:"bg-gradient-to-br from-red-100 via-white via-yellow-50 to-red-100"}}[n]}function Rl(n){return{modern:{base:"",title:"",message:"",input:""},seniors:{base:"text-lg",title:"text-2xl",message:"text-xl",input:"text-lg"},compact:{base:"text-sm",title:"text-base",message:"text-sm",input:"text-sm"}}[n]}function YP({colorTheme:n,fontStyle:r,onStartAssistantChat:s,userRole:a,bookmarkedAssistants:c=[],onToggleBookmark:d}){const p=Rl(r),m=Object.values(rp).flat(),h=[...Uv,...Vv,...m],y=Array.from(new Map(h.map(b=>[b.id,b])).values()).filter(b=>b.assistantType==="parliamentary-question"||b.assistantType==="workday-shortlister"),x=b=>{const S=b.icon,N=c.includes(b.id);return i.jsx(ai,{className:"hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-300 shadow-sm bg-white overflow-hidden relative",onClick:()=>s(b.name,b.assistantType),children:i.jsxs(li,{className:"p-6",children:[i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:P=>{P.stopPropagation(),d?.(b.id)},className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 transition-colors",children:i.jsx(Pw,{className:`w-5 h-5 ${N?"fill-gray-900 text-gray-900":"text-gray-400"}`})})}),i.jsx(ot,{children:i.jsx("p",{children:"Bookmark"})})]})}),i.jsx("div",{className:"w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mb-4",children:i.jsx(S,{className:"w-6 h-6 text-gray-700"})}),i.jsxs("div",{className:"mb-4",children:[i.jsx("h3",{className:"text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors",children:b.name}),i.jsx("p",{className:"text-sm text-gray-500 leading-relaxed",children:b.description})]}),i.jsxs("div",{className:"flex items-center text-xs text-gray-500",children:[i.jsx(dh,{className:"w-3.5 h-3.5 mr-1.5 flex-shrink-0"}),i.jsx("span",{className:"truncate",children:QP(b.classification)})]})]})},b.id)};return i.jsxs("div",{className:`flex-1 flex flex-col bg-gray-100 ${p.base}`,children:[i.jsx("div",{className:"flex items-center gap-2 p-4 bg-gray-100",children:i.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:"Explore Assistants"})}),i.jsx("div",{className:"flex-1 overflow-auto",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 py-8 space-y-12",children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",children:y.map(x)})})})]})}const wi=f.forwardRef(({className:n,...r},s)=>i.jsx("textarea",{ref:s,"data-slot":"textarea",className:Fe("resize-none border-gray-900 dark:border-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 aria-invalid:ring-red-500/20 aria-invalid:border-red-500 flex field-sizing-content min-h-16 w-full rounded-lg border bg-white dark:bg-gray-900 px-3 py-2 text-base text-gray-900 dark:text-white transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50",n),...r}));wi.displayName="Textarea";function XP({colorTheme:n,fontStyle:r}){const s=Gv(n),a=Rl(r);return i.jsxs("div",{className:`flex-1 flex flex-col ${s.mainBg} ${a.base}`,children:[i.jsx("div",{className:`flex items-center gap-2 p-4 border-b ${s.header}`,children:i.jsx("h1",{className:s.title+" "+a.title,children:"Create Your Assistant"})}),i.jsx("div",{className:"flex-1 overflow-auto",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-8",children:[i.jsx("div",{className:"space-y-2",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:`p-3 rounded-lg ${s.userAvatar}`,children:i.jsx(J2,{className:"w-6 h-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h2",{className:`text-xs ${s.chatItemText} ${a.title}`,children:"Assistant Studio"}),i.jsx("p",{className:`${s.navItem} opacity-70 text-xs`,children:"Design and configure your custom AI assistant"})]})]})}),i.jsxs(ai,{children:[i.jsxs(Qg,{children:[i.jsx(qg,{className:"text-xs",children:"Create New Assistant"}),i.jsx(KP,{className:"text-xs",children:"Give your assistant a name and describe what it does"})]}),i.jsxs(li,{className:"space-y-6",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"assistant-name",className:"text-xs",children:"Assistant Name"}),i.jsx(Ft,{id:"assistant-name",placeholder:"e.g., Marketing Expert, Code Reviewer, Transcribe Workspace...",className:`text-xs ${s.inputBorder} ${a.input}`})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"description",className:"text-xs",children:"Description"}),i.jsx(wi,{id:"description",placeholder:"Describe what your assistant does and how it helps users...",className:`${s.inputBorder} ${a.input} min-h-[120px] text-xs`})]}),i.jsxs("div",{className:"flex gap-3 pt-4",children:[i.jsxs(Oe,{className:`${s.sendButton} text-xs`,children:[i.jsx(bu,{className:"w-4 h-4 mr-2"}),"Create Assistant"]}),i.jsx(Oe,{variant:"outline",className:"text-xs",children:"Cancel"})]})]})]}),i.jsxs(ai,{children:[i.jsx(Qg,{children:i.jsxs(qg,{className:"flex items-center gap-2 text-xs",children:[i.jsx(ch,{className:"w-5 h-5"}),"Tips for Creating Great Assistants"]})}),i.jsxs(li,{className:"space-y-3",children:[i.jsxs("div",{className:`${s.navItem} text-xs`,children:[i.jsx("strong",{children:"Be Specific:"})," Give your assistant a clear, descriptive name"]}),i.jsxs("div",{className:`${s.navItem} text-xs`,children:[i.jsx("strong",{children:"Clear Description:"})," Explain what your assistant does and who it's for"]}),i.jsxs("div",{className:`${s.navItem} text-xs`,children:[i.jsx("strong",{children:"Focus on Purpose:"})," Think about the specific tasks your assistant will help with"]}),i.jsxs("div",{className:`${s.navItem} text-xs`,children:[i.jsx("strong",{children:"Keep it Simple:"})," Start with a clear concept, you can always refine it later"]})]})]})]})})]})}function JP(n){const r=ZP(n),s=f.forwardRef((a,c)=>{const{children:d,...p}=a,m=f.Children.toArray(d),h=m.find(t3);if(h){const v=h.props.children,y=m.map(x=>x===h?f.Children.count(v)>1?f.Children.only(null):f.isValidElement(v)?v.props.children:null:x);return i.jsx(r,{...p,ref:c,children:f.isValidElement(v)?f.cloneElement(v,void 0,y):null})}return i.jsx(r,{...p,ref:c,children:d})});return s.displayName=`${n}.Slot`,s}function ZP(n){const r=f.forwardRef((s,a)=>{const{children:c,...d}=s;if(f.isValidElement(c)){const p=r3(c),m=n3(d,c.props);return c.type!==f.Fragment&&(m.ref=a?dr(a,p):p),f.cloneElement(c,m)}return f.Children.count(c)>1?f.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var e3=Symbol("radix.slottable");function t3(n){return f.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===e3}function n3(n,r){const s={...r};for(const a in r){const c=n[a],d=r[a];/^on[A-Z]/.test(a)?c&&d?s[a]=(...m)=>{const h=d(...m);return c(...m),h}:c&&(s[a]=c):a==="style"?s[a]={...c,...d}:a==="className"&&(s[a]=[c,d].filter(Boolean).join(" "))}return{...n,...s}}function r3(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function sp(n){const r=f.useRef({value:n,previous:n});return f.useMemo(()=>(r.current.value!==n&&(r.current.previous=r.current.value,r.current.value=n),r.current.previous),[n])}var s3=[" ","Enter","ArrowUp","ArrowDown"],o3=[" ","Enter"],ls="Select",[Al,Tl,i3]=ju(ls),[io]=cn(ls,[i3,oo]),Ml=oo(),[a3,zr]=io(ls),[l3,c3]=io(ls),Qv=n=>{const{__scopeSelect:r,children:s,open:a,defaultOpen:c,onOpenChange:d,value:p,defaultValue:m,onValueChange:h,dir:v,name:y,autoComplete:x,disabled:b,required:S,form:N}=n,C=Ml(r),[k,P]=f.useState(null),[j,M]=f.useState(null),[R,I]=f.useState(!1),W=pi(v),[z,V]=An({prop:a,defaultProp:c??!1,onChange:d,caller:ls}),[re,K]=An({prop:p,defaultProp:m,onChange:h,caller:ls}),de=f.useRef(null),ie=k?N||!!k.closest("form"):!0,[me,ue]=f.useState(new Set),fe=Array.from(me).map(ee=>ee.props.value).join(";");return i.jsx(vl,{...C,children:i.jsxs(a3,{required:S,scope:r,trigger:k,onTriggerChange:P,valueNode:j,onValueNodeChange:M,valueNodeHasChildren:R,onValueNodeHasChildrenChange:I,contentId:Jt(),value:re,onValueChange:K,open:z,onOpenChange:V,dir:W,triggerPointerDownPosRef:de,disabled:b,children:[i.jsx(Al.Provider,{scope:r,children:i.jsx(l3,{scope:n.__scopeSelect,onNativeOptionAdd:f.useCallback(ee=>{ue(Y=>new Set(Y).add(ee))},[]),onNativeOptionRemove:f.useCallback(ee=>{ue(Y=>{const _=new Set(Y);return _.delete(ee),_})},[]),children:s})}),ie?i.jsxs(gx,{"aria-hidden":!0,required:S,tabIndex:-1,name:y,autoComplete:x,value:re,onChange:ee=>K(ee.target.value),disabled:b,form:N,children:[re===void 0?i.jsx("option",{value:""}):null,Array.from(me)]},fe):null]})})};Qv.displayName=ls;var qv="SelectTrigger",Kv=f.forwardRef((n,r)=>{const{__scopeSelect:s,disabled:a=!1,...c}=n,d=Ml(s),p=zr(qv,s),m=p.disabled||a,h=ze(r,p.onTriggerChange),v=Tl(s),y=f.useRef("touch"),[x,b,S]=vx(C=>{const k=v().filter(M=>!M.disabled),P=k.find(M=>M.value===p.value),j=xx(k,C,P);j!==void 0&&p.onValueChange(j.value)}),N=C=>{m||(p.onOpenChange(!0),S()),C&&(p.triggerPointerDownPosRef.current={x:Math.round(C.pageX),y:Math.round(C.pageY)})};return i.jsx(Lu,{asChild:!0,...d,children:i.jsx(Me.button,{type:"button",role:"combobox","aria-controls":p.contentId,"aria-expanded":p.open,"aria-required":p.required,"aria-autocomplete":"none",dir:p.dir,"data-state":p.open?"open":"closed",disabled:m,"data-disabled":m?"":void 0,"data-placeholder":hx(p.value)?"":void 0,...c,ref:h,onClick:ge(c.onClick,C=>{C.currentTarget.focus(),y.current!=="mouse"&&N(C)}),onPointerDown:ge(c.onPointerDown,C=>{y.current=C.pointerType;const k=C.target;k.hasPointerCapture(C.pointerId)&&k.releasePointerCapture(C.pointerId),C.button===0&&C.ctrlKey===!1&&C.pointerType==="mouse"&&(N(C),C.preventDefault())}),onKeyDown:ge(c.onKeyDown,C=>{const k=x.current!=="";!(C.ctrlKey||C.altKey||C.metaKey)&&C.key.length===1&&b(C.key),!(k&&C.key===" ")&&s3.includes(C.key)&&(N(),C.preventDefault())})})})});Kv.displayName=qv;var Yv="SelectValue",Xv=f.forwardRef((n,r)=>{const{__scopeSelect:s,className:a,style:c,children:d,placeholder:p="",...m}=n,h=zr(Yv,s),{onValueNodeHasChildrenChange:v}=h,y=d!==void 0,x=ze(r,h.onValueNodeChange);return At(()=>{v(y)},[v,y]),i.jsx(Me.span,{...m,ref:x,style:{pointerEvents:"none"},children:hx(h.value)?i.jsx(i.Fragment,{children:p}):d})});Xv.displayName=Yv;var d3="SelectIcon",Jv=f.forwardRef((n,r)=>{const{__scopeSelect:s,children:a,...c}=n;return i.jsx(Me.span,{"aria-hidden":!0,...c,ref:r,children:a||"▼"})});Jv.displayName=d3;var u3="SelectPortal",Zv=n=>i.jsx(gi,{asChild:!0,...n});Zv.displayName=u3;var cs="SelectContent",ex=f.forwardRef((n,r)=>{const s=zr(cs,n.__scopeSelect),[a,c]=f.useState();if(At(()=>{c(new DocumentFragment)},[]),!s.open){const d=a;return d?ui.createPortal(i.jsx(tx,{scope:n.__scopeSelect,children:i.jsx(Al.Slot,{scope:n.__scopeSelect,children:i.jsx("div",{children:n.children})})}),d):null}return i.jsx(nx,{...n,ref:r})});ex.displayName=cs;var En=10,[tx,Fr]=io(cs),p3="SelectContentImpl",f3=JP("SelectContent.RemoveScroll"),nx=f.forwardRef((n,r)=>{const{__scopeSelect:s,position:a="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:d,onPointerDownOutside:p,side:m,sideOffset:h,align:v,alignOffset:y,arrowPadding:x,collisionBoundary:b,collisionPadding:S,sticky:N,hideWhenDetached:C,avoidCollisions:k,...P}=n,j=zr(cs,s),[M,R]=f.useState(null),[I,W]=f.useState(null),z=ze(r,O=>R(O)),[V,re]=f.useState(null),[K,de]=f.useState(null),ie=Tl(s),[me,ue]=f.useState(!1),fe=f.useRef(!1);f.useEffect(()=>{if(M)return $u(M)},[M]),Pu();const ee=f.useCallback(O=>{const[X,...le]=ie().map(Re=>Re.ref.current),[he]=le.slice(-1),Ee=document.activeElement;for(const Re of O)if(Re===Ee||(Re?.scrollIntoView({block:"nearest"}),Re===X&&I&&(I.scrollTop=0),Re===he&&I&&(I.scrollTop=I.scrollHeight),Re?.focus(),document.activeElement!==Ee))return},[ie,I]),Y=f.useCallback(()=>ee([V,M]),[ee,V,M]);f.useEffect(()=>{me&&Y()},[me,Y]);const{onOpenChange:_,triggerPointerDownPosRef:H}=j;f.useEffect(()=>{if(M){let O={x:0,y:0};const X=he=>{O={x:Math.abs(Math.round(he.pageX)-(H.current?.x??0)),y:Math.abs(Math.round(he.pageY)-(H.current?.y??0))}},le=he=>{O.x<=10&&O.y<=10?he.preventDefault():M.contains(he.target)||_(!1),document.removeEventListener("pointermove",X),H.current=null};return H.current!==null&&(document.addEventListener("pointermove",X),document.addEventListener("pointerup",le,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",X),document.removeEventListener("pointerup",le,{capture:!0})}}},[M,_,H]),f.useEffect(()=>{const O=()=>_(!1);return window.addEventListener("blur",O),window.addEventListener("resize",O),()=>{window.removeEventListener("blur",O),window.removeEventListener("resize",O)}},[_]);const[J,A]=vx(O=>{const X=ie().filter(Ee=>!Ee.disabled),le=X.find(Ee=>Ee.ref.current===document.activeElement),he=xx(X,O,le);he&&setTimeout(()=>he.ref.current.focus())}),U=f.useCallback((O,X,le)=>{const he=!fe.current&&!le;(j.value!==void 0&&j.value===X||he)&&(re(O),he&&(fe.current=!0))},[j.value]),B=f.useCallback(()=>M?.focus(),[M]),Q=f.useCallback((O,X,le)=>{const he=!fe.current&&!le;(j.value!==void 0&&j.value===X||he)&&de(O)},[j.value]),oe=a==="popper"?uu:rx,q=oe===uu?{side:m,sideOffset:h,align:v,alignOffset:y,arrowPadding:x,collisionBoundary:b,collisionPadding:S,sticky:N,hideWhenDetached:C,avoidCollisions:k}:{};return i.jsx(tx,{scope:s,content:M,viewport:I,onViewportChange:W,itemRefCallback:U,selectedItem:V,onItemLeave:B,itemTextRefCallback:Q,focusSelectedItem:Y,selectedItemText:K,position:a,isPositioned:me,searchRef:J,children:i.jsx(bl,{as:f3,allowPinchZoom:!0,children:i.jsx(pl,{asChild:!0,trapped:j.open,onMountAutoFocus:O=>{O.preventDefault()},onUnmountAutoFocus:ge(c,O=>{j.trigger?.focus({preventScroll:!0}),O.preventDefault()}),children:i.jsx(fi,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:O=>O.preventDefault(),onDismiss:()=>j.onOpenChange(!1),children:i.jsx(oe,{role:"listbox",id:j.contentId,"data-state":j.open?"open":"closed",dir:j.dir,onContextMenu:O=>O.preventDefault(),...P,...q,onPlaced:()=>ue(!0),ref:z,style:{display:"flex",flexDirection:"column",outline:"none",...P.style},onKeyDown:ge(P.onKeyDown,O=>{const X=O.ctrlKey||O.altKey||O.metaKey;if(O.key==="Tab"&&O.preventDefault(),!X&&O.key.length===1&&A(O.key),["ArrowUp","ArrowDown","Home","End"].includes(O.key)){let he=ie().filter(Ee=>!Ee.disabled).map(Ee=>Ee.ref.current);if(["ArrowUp","End"].includes(O.key)&&(he=he.slice().reverse()),["ArrowUp","ArrowDown"].includes(O.key)){const Ee=O.target,Re=he.indexOf(Ee);he=he.slice(Re+1)}setTimeout(()=>ee(he)),O.preventDefault()}})})})})})})});nx.displayName=p3;var m3="SelectItemAlignedPosition",rx=f.forwardRef((n,r)=>{const{__scopeSelect:s,onPlaced:a,...c}=n,d=zr(cs,s),p=Fr(cs,s),[m,h]=f.useState(null),[v,y]=f.useState(null),x=ze(r,z=>y(z)),b=Tl(s),S=f.useRef(!1),N=f.useRef(!0),{viewport:C,selectedItem:k,selectedItemText:P,focusSelectedItem:j}=p,M=f.useCallback(()=>{if(d.trigger&&d.valueNode&&m&&v&&C&&k&&P){const z=d.trigger.getBoundingClientRect(),V=v.getBoundingClientRect(),re=d.valueNode.getBoundingClientRect(),K=P.getBoundingClientRect();if(d.dir!=="rtl"){const Ee=K.left-V.left,Re=re.left-Ee,Z=z.left-Re,je=z.width+Z,Ge=Math.max(je,V.width),pt=window.innerWidth-En,vt=tu(Re,[En,Math.max(En,pt-Ge)]);m.style.minWidth=je+"px",m.style.left=vt+"px"}else{const Ee=V.right-K.right,Re=window.innerWidth-re.right-Ee,Z=window.innerWidth-z.right-Re,je=z.width+Z,Ge=Math.max(je,V.width),pt=window.innerWidth-En,vt=tu(Re,[En,Math.max(En,pt-Ge)]);m.style.minWidth=je+"px",m.style.right=vt+"px"}const de=b(),ie=window.innerHeight-En*2,me=C.scrollHeight,ue=window.getComputedStyle(v),fe=parseInt(ue.borderTopWidth,10),ee=parseInt(ue.paddingTop,10),Y=parseInt(ue.borderBottomWidth,10),_=parseInt(ue.paddingBottom,10),H=fe+ee+me+_+Y,J=Math.min(k.offsetHeight*5,H),A=window.getComputedStyle(C),U=parseInt(A.paddingTop,10),B=parseInt(A.paddingBottom,10),Q=z.top+z.height/2-En,oe=ie-Q,q=k.offsetHeight/2,O=k.offsetTop+q,X=fe+ee+O,le=H-X;if(X<=Q){const Ee=de.length>0&&k===de[de.length-1].ref.current;m.style.bottom="0px";const Re=v.clientHeight-C.offsetTop-C.offsetHeight,Z=Math.max(oe,q+(Ee?B:0)+Re+Y),je=X+Z;m.style.height=je+"px"}else{const Ee=de.length>0&&k===de[0].ref.current;m.style.top="0px";const Z=Math.max(Q,fe+C.offsetTop+(Ee?U:0)+q)+le;m.style.height=Z+"px",C.scrollTop=X-Q+C.offsetTop}m.style.margin=`${En}px 0`,m.style.minHeight=J+"px",m.style.maxHeight=ie+"px",a?.(),requestAnimationFrame(()=>S.current=!0)}},[b,d.trigger,d.valueNode,m,v,C,k,P,d.dir,a]);At(()=>M(),[M]);const[R,I]=f.useState();At(()=>{v&&I(window.getComputedStyle(v).zIndex)},[v]);const W=f.useCallback(z=>{z&&N.current===!0&&(M(),j?.(),N.current=!1)},[M,j]);return i.jsx(h3,{scope:s,contentWrapper:m,shouldExpandOnScrollRef:S,onScrollButtonChange:W,children:i.jsx("div",{ref:h,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:R},children:i.jsx(Me.div,{...c,ref:x,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});rx.displayName=m3;var g3="SelectPopperPosition",uu=f.forwardRef((n,r)=>{const{__scopeSelect:s,align:a="start",collisionPadding:c=En,...d}=n,p=Ml(s);return i.jsx(zu,{...p,...d,ref:r,align:a,collisionPadding:c,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});uu.displayName=g3;var[h3,op]=io(cs,{}),pu="SelectViewport",sx=f.forwardRef((n,r)=>{const{__scopeSelect:s,nonce:a,...c}=n,d=Fr(pu,s),p=op(pu,s),m=ze(r,d.onViewportChange),h=f.useRef(0);return i.jsxs(i.Fragment,{children:[i.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),i.jsx(Al.Slot,{scope:s,children:i.jsx(Me.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:m,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:ge(c.onScroll,v=>{const y=v.currentTarget,{contentWrapper:x,shouldExpandOnScrollRef:b}=p;if(b?.current&&x){const S=Math.abs(h.current-y.scrollTop);if(S>0){const N=window.innerHeight-En*2,C=parseFloat(x.style.minHeight),k=parseFloat(x.style.height),P=Math.max(C,k);if(P<N){const j=P+S,M=Math.min(N,j),R=j-M;x.style.height=M+"px",x.style.bottom==="0px"&&(y.scrollTop=R>0?R:0,x.style.justifyContent="flex-end")}}}h.current=y.scrollTop})})})]})});sx.displayName=pu;var ox="SelectGroup",[v3,x3]=io(ox),y3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n,c=Jt();return i.jsx(v3,{scope:s,id:c,children:i.jsx(Me.div,{role:"group","aria-labelledby":c,...a,ref:r})})});y3.displayName=ox;var ix="SelectLabel",b3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n,c=x3(ix,s);return i.jsx(Me.div,{id:c.id,...a,ref:r})});b3.displayName=ix;var il="SelectItem",[w3,ax]=io(il),lx=f.forwardRef((n,r)=>{const{__scopeSelect:s,value:a,disabled:c=!1,textValue:d,...p}=n,m=zr(il,s),h=Fr(il,s),v=m.value===a,[y,x]=f.useState(d??""),[b,S]=f.useState(!1),N=ze(r,j=>h.itemRefCallback?.(j,a,c)),C=Jt(),k=f.useRef("touch"),P=()=>{c||(m.onValueChange(a),m.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return i.jsx(w3,{scope:s,value:a,disabled:c,textId:C,isSelected:v,onItemTextChange:f.useCallback(j=>{x(M=>M||(j?.textContent??"").trim())},[]),children:i.jsx(Al.ItemSlot,{scope:s,value:a,disabled:c,textValue:y,children:i.jsx(Me.div,{role:"option","aria-labelledby":C,"data-highlighted":b?"":void 0,"aria-selected":v&&b,"data-state":v?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...p,ref:N,onFocus:ge(p.onFocus,()=>S(!0)),onBlur:ge(p.onBlur,()=>S(!1)),onClick:ge(p.onClick,()=>{k.current!=="mouse"&&P()}),onPointerUp:ge(p.onPointerUp,()=>{k.current==="mouse"&&P()}),onPointerDown:ge(p.onPointerDown,j=>{k.current=j.pointerType}),onPointerMove:ge(p.onPointerMove,j=>{k.current=j.pointerType,c?h.onItemLeave?.():k.current==="mouse"&&j.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ge(p.onPointerLeave,j=>{j.currentTarget===document.activeElement&&h.onItemLeave?.()}),onKeyDown:ge(p.onKeyDown,j=>{h.searchRef?.current!==""&&j.key===" "||(o3.includes(j.key)&&P(),j.key===" "&&j.preventDefault())})})})})});lx.displayName=il;var qo="SelectItemText",cx=f.forwardRef((n,r)=>{const{__scopeSelect:s,className:a,style:c,...d}=n,p=zr(qo,s),m=Fr(qo,s),h=ax(qo,s),v=c3(qo,s),[y,x]=f.useState(null),b=ze(r,P=>x(P),h.onItemTextChange,P=>m.itemTextRefCallback?.(P,h.value,h.disabled)),S=y?.textContent,N=f.useMemo(()=>i.jsx("option",{value:h.value,disabled:h.disabled,children:S},h.value),[h.disabled,h.value,S]),{onNativeOptionAdd:C,onNativeOptionRemove:k}=v;return At(()=>(C(N),()=>k(N)),[C,k,N]),i.jsxs(i.Fragment,{children:[i.jsx(Me.span,{id:h.textId,...d,ref:b}),h.isSelected&&p.valueNode&&!p.valueNodeHasChildren?ui.createPortal(d.children,p.valueNode):null]})});cx.displayName=qo;var dx="SelectItemIndicator",ux=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n;return ax(dx,s).isSelected?i.jsx(Me.span,{"aria-hidden":!0,...a,ref:r}):null});ux.displayName=dx;var fu="SelectScrollUpButton",px=f.forwardRef((n,r)=>{const s=Fr(fu,n.__scopeSelect),a=op(fu,n.__scopeSelect),[c,d]=f.useState(!1),p=ze(r,a.onScrollButtonChange);return At(()=>{if(s.viewport&&s.isPositioned){let m=function(){const v=h.scrollTop>0;d(v)};const h=s.viewport;return m(),h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[s.viewport,s.isPositioned]),c?i.jsx(mx,{...n,ref:p,onAutoScroll:()=>{const{viewport:m,selectedItem:h}=s;m&&h&&(m.scrollTop=m.scrollTop-h.offsetHeight)}}):null});px.displayName=fu;var mu="SelectScrollDownButton",fx=f.forwardRef((n,r)=>{const s=Fr(mu,n.__scopeSelect),a=op(mu,n.__scopeSelect),[c,d]=f.useState(!1),p=ze(r,a.onScrollButtonChange);return At(()=>{if(s.viewport&&s.isPositioned){let m=function(){const v=h.scrollHeight-h.clientHeight,y=Math.ceil(h.scrollTop)<v;d(y)};const h=s.viewport;return m(),h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[s.viewport,s.isPositioned]),c?i.jsx(mx,{...n,ref:p,onAutoScroll:()=>{const{viewport:m,selectedItem:h}=s;m&&h&&(m.scrollTop=m.scrollTop+h.offsetHeight)}}):null});fx.displayName=mu;var mx=f.forwardRef((n,r)=>{const{__scopeSelect:s,onAutoScroll:a,...c}=n,d=Fr("SelectScrollButton",s),p=f.useRef(null),m=Tl(s),h=f.useCallback(()=>{p.current!==null&&(window.clearInterval(p.current),p.current=null)},[]);return f.useEffect(()=>()=>h(),[h]),At(()=>{m().find(y=>y.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[m]),i.jsx(Me.div,{"aria-hidden":!0,...c,ref:r,style:{flexShrink:0,...c.style},onPointerDown:ge(c.onPointerDown,()=>{p.current===null&&(p.current=window.setInterval(a,50))}),onPointerMove:ge(c.onPointerMove,()=>{d.onItemLeave?.(),p.current===null&&(p.current=window.setInterval(a,50))}),onPointerLeave:ge(c.onPointerLeave,()=>{h()})})}),S3="SelectSeparator",C3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n;return i.jsx(Me.div,{"aria-hidden":!0,...a,ref:r})});C3.displayName=S3;var gu="SelectArrow",k3=f.forwardRef((n,r)=>{const{__scopeSelect:s,...a}=n,c=Ml(s),d=zr(gu,s),p=Fr(gu,s);return d.open&&p.position==="popper"?i.jsx(Fu,{...c,...a,ref:r}):null});k3.displayName=gu;var N3="SelectBubbleInput",gx=f.forwardRef(({__scopeSelect:n,value:r,...s},a)=>{const c=f.useRef(null),d=ze(a,c),p=sp(r);return f.useEffect(()=>{const m=c.current;if(!m)return;const h=window.HTMLSelectElement.prototype,y=Object.getOwnPropertyDescriptor(h,"value").set;if(p!==r&&y){const x=new Event("change",{bubbles:!0});y.call(m,r),m.dispatchEvent(x)}},[p,r]),i.jsx(Me.select,{...s,style:{...dv,...s.style},ref:d,defaultValue:r})});gx.displayName=N3;function hx(n){return n===""||n===void 0}function vx(n){const r=Rt(n),s=f.useRef(""),a=f.useRef(0),c=f.useCallback(p=>{const m=s.current+p;r(m),(function h(v){s.current=v,window.clearTimeout(a.current),v!==""&&(a.current=window.setTimeout(()=>h(""),1e3))})(m)},[r]),d=f.useCallback(()=>{s.current="",window.clearTimeout(a.current)},[]);return f.useEffect(()=>()=>window.clearTimeout(a.current),[]),[s,c,d]}function xx(n,r,s){const c=r.length>1&&Array.from(r).every(v=>v===r[0])?r[0]:r,d=s?n.indexOf(s):-1;let p=j3(n,Math.max(d,0));c.length===1&&(p=p.filter(v=>v!==s));const h=p.find(v=>v.textValue.toLowerCase().startsWith(c.toLowerCase()));return h!==s?h:void 0}function j3(n,r){return n.map((s,a)=>n[(r+a)%n.length])}var P3=Qv,E3=Kv,R3=Xv,A3=Jv,T3=Zv,M3=ex,I3=sx,_3=lx,D3=cx,O3=ux,L3=px,z3=fx;function Us({...n}){return i.jsx(P3,{"data-slot":"select",...n})}function Jo({...n}){return i.jsx(R3,{"data-slot":"select-value",...n})}function Gs({className:n,size:r="default",children:s,...a}){return i.jsxs(E3,{"data-slot":"select-trigger","data-size":r,className:Fe("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...a,children:[s,i.jsx(A3,{asChild:!0,children:i.jsx(Ks,{className:"size-4 opacity-50"})})]})}function Qs({className:n,children:r,position:s="popper",...a}){return i.jsx(T3,{children:i.jsxs(M3,{"data-slot":"select-content",className:Fe("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",s==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:s,...a,children:[i.jsx(F3,{}),i.jsx(I3,{className:Fe("p-1",s==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:r}),i.jsx($3,{})]})})}function Be({className:n,children:r,...s}){return i.jsxs(_3,{"data-slot":"select-item",className:Fe("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",n),...s,children:[i.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:i.jsx(O3,{children:i.jsx(Hn,{className:"size-4"})})}),i.jsx(D3,{children:r})]})}function F3({className:n,...r}){return i.jsx(L3,{"data-slot":"select-scroll-up-button",className:Fe("flex cursor-default items-center justify-center py-1",n),...r,children:i.jsx($w,{className:"size-4"})})}function $3({className:n,...r}){return i.jsx(z3,{"data-slot":"select-scroll-down-button",className:Fe("flex cursor-default items-center justify-center py-1",n),...r,children:i.jsx(Ks,{className:"size-4"})})}function H3({source:n,showDelete:r,onRemove:s,onUpdate:a}){const[c,d]=Xt.useState(!1),[p,m]=Xt.useState(n.name),[h,v]=Xt.useState(n.files||[]),y=Xt.useRef(null),x=Xt.useRef(null),b=()=>{d(!0),m(n.name)},S=()=>{d(!1),p.trim()?a(n.id,"name",p.trim()):m(n.name)},N=R=>{R.key==="Enter"?y.current?.blur():R.key==="Escape"&&(m(n.name),d(!1))},C=R=>{const I=R.target.value;I.length<=30&&m(I)};Xt.useEffect(()=>{c&&y.current&&(y.current.focus(),y.current.select())},[c]);const k=()=>{const R=p.length||1,I=8,W=24;return Math.max(160,Math.min(R*I+W,30*I+W))},P=R=>{const I=R.target.files;if(I){const W=Array.from(I).map(z=>({id:Date.now().toString()+Math.random().toString(),name:z.name,size:z.size,uploadedAt:new Date}));v([...h,...W])}},j=R=>{const I=h.filter(W=>W.id!==R);v(I)},M=R=>R<1024?R+" B":R<1024*1024?(R/1024).toFixed(1)+" KB":(R/(1024*1024)).toFixed(1)+" MB";return i.jsxs("div",{className:"space-y-4 p-6 border border-gray-300 rounded-lg bg-gray-100",children:[i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsx("div",{className:"flex-shrink-0",style:{minWidth:"160px"},children:c?i.jsx(Ft,{ref:y,value:p,onChange:C,onBlur:S,onKeyDown:N,maxLength:30,className:"h-8 px-2 bg-white border-gray-300",style:{width:`${k()}px`}}):i.jsxs("button",{onClick:b,className:"flex items-center gap-2 group hover:bg-gray-200 px-2 py-1 rounded transition-colors",style:{minWidth:"160px"},children:[i.jsx(Ua,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),i.jsx("span",{className:"truncate",children:n.name}),i.jsx(Jd,{className:"w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]})}),r&&i.jsx(Oe,{variant:"ghost",size:"sm",onClick:()=>s(n.id),className:"ml-2 h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50",children:i.jsx(os,{className:"w-4 h-4"})})]}),i.jsxs("div",{className:"grid grid-cols-10 gap-4",children:[i.jsxs("div",{className:"col-span-3",children:[i.jsx(lt,{htmlFor:`type-${n.id}`,className:"text-sm",children:"Type"}),i.jsxs(Us,{value:n.type,onValueChange:R=>a(n.id,"type",R),children:[i.jsx(Gs,{className:"mt-2",children:i.jsx(Jo,{})}),i.jsxs(Qs,{children:[i.jsx(Be,{value:"sharepoint",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(dh,{className:"w-4 h-4"}),"SharePoint"]})}),i.jsx(Be,{value:"gdrive",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(p2,{className:"w-4 h-4"}),"Google Drive"]})}),i.jsx(Be,{value:"aws",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Gw,{className:"w-4 h-4"}),"AWS S3"]})}),i.jsx(Be,{value:"local",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Ua,{className:"w-4 h-4"}),"Local"]})}),i.jsx(Be,{value:"upload",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(qa,{className:"w-4 h-4"}),"Upload"]})})]})]})]}),i.jsx("div",{className:"col-span-7",children:n.type==="upload"?i.jsxs("div",{children:[i.jsx(lt,{className:"text-sm",children:"Files"}),i.jsxs(Oe,{variant:"outline",onClick:()=>x.current?.click(),className:"mt-2 w-full",children:[i.jsx(qa,{className:"w-4 h-4 mr-2"}),"Upload Files"]})]}):i.jsxs(i.Fragment,{children:[i.jsx(lt,{htmlFor:`path-${n.id}`,className:"text-sm",children:"URL or Connection"}),i.jsx(Ft,{id:`path-${n.id}`,value:n.path,onChange:R=>a(n.id,"path",R.target.value),placeholder:n.type==="sharepoint"?"https://yourorg.sharepoint.com":n.type==="gdrive"?"https://drive.google.com/...":n.type==="aws"?"s3://bucket-name/path":"/Users/username/documents",className:"mt-2 bg-white border-gray-300"})]})})]}),n.type==="upload"&&i.jsxs("div",{className:"mt-4",children:[i.jsx(Ft,{ref:x,type:"file",multiple:!0,accept:".pdf,.doc,.docx,.txt",onChange:P,className:"hidden"}),h.length>0?i.jsx("div",{className:"space-y-2",children:h.map(R=>i.jsxs("div",{className:"flex items-center justify-between gap-3 bg-white p-3 rounded border border-gray-300 hover:border-gray-500 transition-colors",children:[i.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[i.jsx(xn,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("div",{className:"text-sm truncate",children:R.name}),i.jsx("div",{className:"text-xs text-gray-500",children:M(R.size)})]})]}),i.jsx(Oe,{variant:"ghost",size:"sm",onClick:()=>j(R.id),className:"h-8 w-8 p-0 text-gray-500 hover:text-red-600 hover:bg-red-50 flex-shrink-0",children:i.jsx(Xs,{className:"w-4 h-4"})})]},R.id))}):i.jsx("div",{className:"text-sm text-gray-500 italic py-2",children:"No files uploaded yet"})]})]})}function B3({dataSources:n,onAdd:r,onRemove:s,onUpdate:a,showDescription:c=!0}){return i.jsxs("div",{className:"space-y-6",children:[c&&i.jsx("p",{className:"text-gray-500 text-sm",children:"Create a library to organize documents by topic or project. Your AI assistant will reference these documents to provide contextual responses. You can connect cloud sources or upload files directly."}),i.jsxs("div",{className:"space-y-4",children:[n.map(d=>i.jsx(H3,{source:d,showDelete:n.length>1,onRemove:s,onUpdate:a},d.id)),i.jsxs(Oe,{variant:"outline",onClick:r,className:"w-full border-dashed border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-100 text-gray-500",children:[i.jsx(bu,{className:"w-4 h-4 mr-2"}),"Add Another Library"]})]})]})}function W3({colorTheme:n,fontStyle:r}){const s=Rl(r),[a,c]=f.useState([{id:"1",name:"GovTech branding guidelines",type:"upload",path:"",enabled:!0,files:[{id:"file-1",name:"GovTech_Brand_Guidelines_2024.pdf",size:2458624,uploadedAt:new Date(Date.now()-864e5*3)},{id:"file-2",name:"Logo_Usage_Guidelines.pdf",size:1536e3,uploadedAt:new Date(Date.now()-864e5*7)}]},{id:"2",name:"Procurement Guidelines",type:"sharepoint",path:"",enabled:!0},{id:"3",name:"AI Programme Resources",type:"gdrive",path:"https://drive.google.com/drive/folders/ai-programme",enabled:!0},{id:"4",name:"Policy Documents",type:"aws",path:"s3://gov-docs/policy",enabled:!0}]),d=()=>{c([...a,{id:Date.now().toString(),name:"New Library",type:"sharepoint",path:"",enabled:!0}])},p=h=>{c(a.filter(v=>v.id!==h))},m=(h,v,y)=>{c(a.map(x=>x.id===h?{...x,[v]:y}:x))};return i.jsxs("div",{className:`flex-1 flex flex-col bg-gray-100 ${s.base}`,children:[i.jsx("div",{className:"flex items-center gap-2 p-4 bg-gray-100",children:i.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:"Library"})}),i.jsx("div",{className:"flex-1 overflow-auto",children:i.jsx("div",{className:"max-w-4xl mx-auto px-6 py-8",children:i.jsx(B3,{dataSources:a,onAdd:d,onRemove:p,onUpdate:m,showDescription:!0})})})]})}const V3=[{id:"marketing-software-aor",title:"Marketing Software AOR",preview:"Draft an approval paper for procurement..."},{id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting",preview:"Help me shortlist candidates from Workday..."},{id:"pq-response-mnd",title:"PQ Response - MND Housing",preview:"Draft a parliamentary question response..."},{id:"feature-overview",title:"Feature Overview",preview:"Show me what this AI assistant can do..."},{id:"customer-support",title:"Customer Support",preview:"Help with customer inquiries..."},{id:"feedback-collection",title:"Feedback Collection",preview:"Collect and analyze feedback..."},{id:"procurement-rfq",title:"Procurement RFQ to AOR",preview:"Help with procurement workflow..."}];function U3({colorTheme:n,fontStyle:r,chats:s,onSelectChat:a,onDeleteChat:c,onSelectSimulation:d}){const p=Gv(n),m=Rl(r),[h,v]=f.useState(""),y=s.filter(S=>S.title.toLowerCase().includes(h.toLowerCase())),x=V3.filter(S=>S.title.toLowerCase().includes(h.toLowerCase())),b=S=>{const C=Math.abs(new Date().getTime()-S.getTime()),k=Math.floor(C/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:S.toLocaleDateString()};return i.jsxs("div",{className:`flex-1 flex flex-col bg-gray-100 ${m.base}`,children:[i.jsx("div",{className:"flex items-center gap-2 p-4 bg-gray-100",children:i.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:"Chats"})}),i.jsx("div",{className:"flex-1 overflow-auto",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-8",children:[i.jsxs("div",{className:"relative max-w-2xl mx-auto w-full",children:[i.jsx(Ga,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),i.jsx(Ft,{placeholder:"Search chats...",value:h,onChange:S=>v(S.target.value),className:`pl-10 text-sm py-6 rounded-xl ${p.inputBorder} ${m.input} bg-white shadow-sm`})]}),i.jsxs("div",{className:"space-y-2",children:[x.map(S=>i.jsxs("div",{onClick:()=>d(S.id),className:"flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:i.jsx(Bs,{className:"w-5 h-5 text-gray-600"})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:S.title}),i.jsx("p",{className:"text-sm text-gray-500 truncate",children:S.preview})]}),i.jsx("div",{className:"text-xs text-gray-400 flex-shrink-0",children:"Demo"})]},S.id)),y.map(S=>i.jsxs("div",{onClick:()=>a(S.id),className:"group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:i.jsx(Bs,{className:"w-5 h-5 text-gray-600"})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:S.title}),i.jsx("p",{className:"text-sm text-gray-500 truncate",children:S.messages.length>0?S.messages[S.messages.length-1].content.slice(0,60)+"...":"No messages yet"})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-xs text-gray-400 flex-shrink-0",children:b(S.createdAt)}),i.jsxs(Un,{children:[i.jsx(Gn,{asChild:!0,children:i.jsx(Button,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-8 w-8 p-0",onClick:N=>N.stopPropagation(),children:i.jsx(ss,{className:"w-4 h-4"})})}),i.jsx(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:i.jsxs(yt,{onClick:N=>{N.stopPropagation(),c(S.id)},className:"text-red-500 hover:bg-gray-100",children:[i.jsx(os,{className:"w-4 h-4 mr-2"}),"Delete"]})})]})]})]},S.id)),y.length===0&&x.length===0&&i.jsxs("div",{className:"text-center py-12",children:[i.jsx(Bs,{className:"w-12 h-12 text-gray-300 mx-auto mb-4"}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No chats found"}),i.jsx("p",{className:"text-sm text-gray-500",children:h?"Try a different search term":"Start a new chat to get started"})]})]})]})})]})}function hu({onSend:n,colorTheme:r="light",fontStyle:s="modern",showFileUpload:a=!1,autoTypeText:c,showClassification:d=!1,defaultClassification:p="r-sn",value:m,onChange:h,disabled:v=!1,showTypingHint:y=!1,placeholder:x,autoFocus:b=!1,bookmarkedAssistants:S=[],assistantType:N}){const[C,k]=f.useState(""),P=m!==void 0?m:C,j=Z=>{h&&h(Z),k(Z)},[M,R]=f.useState([]),[I,W]=f.useState([]),[z,V]=f.useState([]),[re,K]=f.useState(!1),[de,ie]=f.useState(!1),[me,ue]=f.useState(!1),[fe,ee]=f.useState(p),[Y,_]=f.useState(0),H=v,J=f.useRef(null),A=f.useRef(null),U=[{id:"r-sn",label:"R/SN",fullName:"Restricted / Sensitive Normal"},{id:"cce-sn",label:"C(CE)/SN",fullName:"Confidential (Cloud-Eligible) / Sensitive Normal"}],B=[{id:"web-search",name:"Web Search",icon:l2},{id:"deep-research",name:"Deep Research",icon:F2},{id:"canvas",name:"Canvas",icon:C2}],Q=Object.values(rp).flat(),oe=[...Uv,...Vv,...Q],O=Array.from(new Map(oe.map(Z=>[Z.id,Z])).values()).filter(Z=>S.includes(Z.id)).map(Z=>({id:Z.id,name:Z.name})),X=()=>{P.trim()&&(n(P,d?fe:void 0),j(""))},le=Z=>{const je=Z.target.files?.[0];je&&(n(`[Uploaded file: ${je.name}]`),J.current&&(J.current.value=""))},he=Z=>{R(je=>je.includes(Z)?je.filter(Ge=>Ge!==Z):[...je,Z])},Ee=Z=>{W(je=>je.includes(Z)?je.filter(Ge=>Ge!==Z):[...je,Z])};f.useEffect(()=>{(c||b)&&A.current?.focus()},[c,b]);const Re=Z=>{if(!c){Z.key==="Enter"&&!Z.shiftKey&&(Z.preventDefault(),X());return}if(Z.preventDefault(),Z.key==="Enter")j(c),_(c.length),setTimeout(()=>{n(c,d?fe:void 0),j(""),_(0)},100);else if(Z.key==="Backspace"){if(Y>0){const je=Y-1;_(je),j(c.substring(0,je))}}else if(Z.key.length===1&&Y<c.length){const je=Y+1;_(je),j(c.substring(0,je))}};return i.jsxs("div",{className:"rounded-2xl border border-gray-300 p-2 focus-within:ring-2 focus-within:ring-gray-500/20 bg-white",children:[i.jsx("div",{className:"mb-2",children:i.jsx(wi,{ref:A,value:P,onChange:c?void 0:(Z=>j(Z.target.value)),onKeyDown:Re,placeholder:x||(c?"Type to continue...":H?"Waiting for response...":"Ask me anything..."),className:`w-full min-h-[64px] max-h-[200px] resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-gray-900 text-base ${H?"text-gray-400":""}`,rows:1,disabled:H})}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx("input",{ref:J,type:"file",className:"hidden",onChange:le}),i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx(Oe,{onClick:()=>J.current?.click(),size:"icon",variant:"ghost",disabled:H,className:`h-7 w-7 flex-shrink-0 ${H?"opacity-50 cursor-not-allowed":""}`,children:i.jsx(bu,{className:"w-4 h-4"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Add files"})})]})}),!N&&i.jsx(bt,{children:i.jsx(rt,{children:i.jsxs(Un,{open:H?!1:de,onOpenChange:ie,children:[i.jsx(st,{asChild:!0,children:i.jsx(Gn,{asChild:!0,children:i.jsxs(Oe,{type:"button",size:"icon",variant:"ghost",disabled:H,className:`h-7 w-7 flex-shrink-0 relative ${H?"opacity-50 cursor-not-allowed":""}`,children:[i.jsx(L2,{className:"w-3.5 h-3.5"}),M.length+I.length>0&&i.jsx("span",{className:"absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center",children:M.length+I.length})]})})}),i.jsx(ot,{children:i.jsx("p",{children:"Add tools"})}),i.jsxs(Qn,{className:"w-64 p-0 z-50 bg-white dark:bg-gray-900 overflow-visible",align:"start",side:"top",sideOffset:8,children:[i.jsxs("div",{className:"p-3 border-b bg-white dark:bg-gray-900",children:[i.jsx("h3",{className:"font-medium text-xs",children:"Available Tools"}),i.jsx("p",{className:"text-xs text-muted-foreground",children:"Select tools to enable"})]}),i.jsxs("div",{className:"p-2 bg-white dark:bg-gray-900",children:[B.map(Z=>{const je=Z.icon,Ge=M.includes(Z.id);return i.jsxs("button",{type:"button",onClick:pt=>{pt.preventDefault(),pt.stopPropagation(),he(Z.id)},className:"w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx(je,{className:"w-5 h-5 flex-shrink-0 text-gray-700"}),i.jsx("span",{className:"flex-1 text-left text-xs text-gray-900",children:Z.name}),Ge&&i.jsx(Hn,{className:"w-4 h-4 text-gray-900"})]},Z.id)}),i.jsxs("div",{className:"relative group/assistants mt-1 border-t border-gray-200 pt-1",children:[i.jsxs("button",{type:"button",className:"w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx(ch,{className:"w-5 h-5 flex-shrink-0 text-gray-700"}),i.jsx("span",{className:"flex-1 text-left text-xs text-gray-900",children:"Custom Assistants"}),i.jsx(Ys,{className:"w-4 h-4 text-gray-400"})]}),i.jsx("div",{className:"absolute left-full top-0 ml-1 w-56 bg-white border-2 border-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover/assistants:opacity-100 group-hover/assistants:visible transition-all z-[100]",children:i.jsx("div",{className:"p-2",children:O.length===0?i.jsx("div",{className:"px-3 py-4 text-center",children:i.jsx("p",{className:"text-xs text-gray-500",children:"Bookmark a custom assistant for it to appear here"})}):O.map(Z=>{const je=I.includes(Z.id);return i.jsxs("button",{type:"button",onClick:Ge=>{Ge.preventDefault(),Ge.stopPropagation(),Ee(Z.id)},className:"w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left",children:[i.jsx("span",{className:"flex-1 text-xs text-gray-900",children:Z.name}),je&&i.jsx(Hn,{className:"w-4 h-4 text-gray-900"})]},Z.id)})})})]})]})]})]})})}),i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx(Oe,{type:"button",size:"icon",variant:"ghost",disabled:!0,className:"h-7 w-7 flex-shrink-0 relative opacity-50 cursor-not-allowed",children:i.jsx(Ua,{className:"w-3.5 h-3.5"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Coming soon"})})]})})]}),i.jsxs("div",{className:"flex items-center gap-1",children:[d&&i.jsx(bt,{children:i.jsxs(Un,{open:me,onOpenChange:ue,children:[i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx(Gn,{asChild:!0,children:i.jsxs(Oe,{type:"button",size:"sm",variant:"ghost",className:"h-7 px-2 flex-shrink-0 gap-1 text-xs",children:[i.jsx(Qa,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:U.find(Z=>Z.id===fe)?.label}),i.jsx(Ks,{className:"w-3 h-3 opacity-50"})]})})}),i.jsx(ot,{side:"top",children:i.jsx("p",{children:U.find(Z=>Z.id===fe)?.fullName})})]}),i.jsxs(Qn,{className:"w-64 p-0 z-50 bg-white dark:bg-gray-900",align:"end",side:"top",sideOffset:8,children:[i.jsxs("div",{className:"p-3 border-b bg-white dark:bg-gray-900",children:[i.jsx("h3",{className:"font-medium text-xs",children:"Data Classification"}),i.jsx("p",{className:"text-xs text-muted-foreground",children:"Select the classification level"})]}),i.jsx("div",{className:"p-2 bg-white dark:bg-gray-900",children:U.map(Z=>{const je=fe===Z.id;return i.jsxs(yt,{onClick:()=>ee(Z.id),className:`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${je?"bg-gray-200":""}`,children:[i.jsx(Qa,{className:"w-4 h-4 flex-shrink-0 text-gray-700"}),i.jsxs("div",{className:"flex-1",children:[i.jsx("div",{className:"text-xs font-medium text-gray-900",children:Z.label}),i.jsx("div",{className:"text-[10px] text-gray-500",children:Z.fullName})]}),je&&i.jsx("div",{className:"w-2 h-2 rounded-full bg-gray-900"})]},Z.id)})})]})]})}),i.jsx(Oe,{onClick:X,disabled:!P.trim()||H,size:"icon",className:`h-7 w-7 flex-shrink-0 rounded-full ${H?"bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300":""}`,children:i.jsx(Sw,{className:"w-3.5 h-3.5"})})]})]})]})}var G3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Q3=G3.reduce((n,r)=>{const s=wu(`Primitive.${r}`),a=f.forwardRef((c,d)=>{const{asChild:p,...m}=c,h=p?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),i.jsx(h,{...m,ref:d})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{}),q3="Separator",Kg="horizontal",K3=["horizontal","vertical"],yx=f.forwardRef((n,r)=>{const{decorative:s,orientation:a=Kg,...c}=n,d=Y3(a)?a:Kg,m=s?{role:"none"}:{"aria-orientation":d==="vertical"?d:void 0,role:"separator"};return i.jsx(Q3.div,{"data-orientation":d,...m,...c,ref:r})});yx.displayName=q3;function Y3(n){return K3.includes(n)}var X3=yx;function ns({className:n,orientation:r="horizontal",decorative:s=!0,...a}){return i.jsx(X3,{"data-slot":"separator-root",decorative:s,orientation:r,className:Fe("bg-gray-300 dark:bg-gray-700 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",n),...a})}function vu({className:n}){return i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[i.jsx("path",{d:"M4 10c0-1.5 1.5-3 4-3h8c2.5 0 4 1.5 4 3"}),i.jsx("ellipse",{cx:"12",cy:"10",rx:"8",ry:"2"}),i.jsx("path",{d:"M6 10v1c0 1 1 2 2 2h8c1 0 2-1 2-2v-1"}),i.jsx("circle",{cx:"8",cy:"18",r:"2.5"}),i.jsx("circle",{cx:"16",cy:"18",r:"2.5"}),i.jsx("path",{d:"M10.5 18h3"}),i.jsx("path",{d:"M8 15.5v-1"}),i.jsx("path",{d:"M16 15.5v-1"})]})}const J3=n=>{switch(n){case"HR Officer":return["Help me draft a job description","Shortlist candidates for a position","Create interview questions","Review leave policy updates"];case"Policy Officer":return["Draft a parliamentary question response","Summarize this policy document","Create a policy brief","Analyze regulatory impact"];case"Marketing Officer":return["Draft a marketing campaign brief","Create social media content plan","Analyze campaign performance","Help with procurement AOR"];default:return["Help me draft a document","Summarize this content","Create a project plan","Analyze data trends"]}};function Z3({colorTheme:n,fontStyle:r,onSelectChat:s,onNewChat:a,isSidebarOpen:c,userProfile:d,onSelectSimulation:p,onStartChat:m,bookmarkedAssistants:h=[]}){const[v,y]=f.useState(""),[x,b]=f.useState("rsn"),[S,N]=f.useState(!1),C=new Date,k=J3(d.role),P=j=>{y(j)};return i.jsxs("div",{className:"flex-1 h-full flex flex-col bg-gray-100",children:[i.jsx("div",{className:"absolute top-4 right-6",children:i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>N(!S),className:`p-2 rounded-lg transition-colors ${S?"bg-gray-200 text-gray-700":"text-gray-500 hover:text-gray-700 hover:bg-gray-200"}`,children:i.jsx(vu,{className:"w-5 h-5"})})}),i.jsx(ot,{children:i.jsx("p",{children:S?"Exit incognito mode":"Enable incognito mode"})})]})})}),i.jsx("div",{className:"flex-1 overflow-auto flex items-center",children:i.jsxs("div",{className:"flex flex-col w-full max-w-chat mx-auto px-6",children:[i.jsx("div",{className:"pb-8",children:S?i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl mb-1 tracking-tight font-semibold text-gray-900",style:{fontSize:"2rem"},children:"Incognito chat"}),i.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[i.jsx(vu,{className:"w-4 h-4 text-gray-500"}),i.jsx("p",{className:"text-sm text-gray-500",children:"Incognito chat does not reference memories or save to chat history"})]})]}):i.jsxs("h1",{className:"text-2xl mb-1 tracking-tight font-semibold text-gray-900",style:{fontSize:"2rem"},children:["Good ",C.getHours()<12?"Morning":C.getHours()<18?"Afternoon":"Evening",", ",d.name.split(" ")[0]]})}),i.jsxs("div",{className:"mb-2 flex items-center gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-sm font-medium text-gray-900",children:"Data classification"}),i.jsxs(Us,{value:x,onValueChange:j=>b(j),children:[i.jsx(Gs,{className:"w-auto h-9 bg-white border-gray-300 px-3",children:i.jsxs("div",{className:"flex items-center gap-2",children:[x==="rsn"?i.jsx(Qa,{className:"w-4 h-4"}):i.jsx(ag,{className:"w-4 h-4"}),i.jsxs("span",{className:"whitespace-nowrap",children:["Up to ",x==="rsn"?"R/SN":"C(CE)/SN"]})]})}),i.jsxs(Qs,{className:"w-[400px]",children:[i.jsxs("div",{className:"p-3",children:[i.jsx("h3",{className:"font-semibold text-gray-900",children:"Data Classification"}),i.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Select the highest classification level allowed"})]}),i.jsx(ns,{}),i.jsxs("div",{className:"p-2",children:[i.jsx(Be,{value:"rsn",className:"cursor-pointer",children:i.jsxs("div",{className:"flex items-start gap-3 py-2",children:[i.jsx(Qa,{className:"w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0"}),i.jsxs("div",{className:"flex-1",children:[i.jsx("div",{className:"font-semibold text-gray-900",children:"R/SN"}),i.jsx("div",{className:"text-sm text-gray-500",children:"Restricted / Sensitive Normal"})]})]})}),i.jsx(Be,{value:"cce-sn",className:"cursor-pointer",children:i.jsxs("div",{className:"flex items-start gap-3 py-2",children:[i.jsx(ag,{className:"w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0"}),i.jsxs("div",{className:"flex-1",children:[i.jsx("div",{className:"font-semibold text-gray-900",children:"C(CE)/SN"}),i.jsx("div",{className:"text-sm text-gray-500",children:"Confidential (Cloud-Eligible) / Sensitive Normal"}),i.jsx("div",{className:"text-sm font-bold text-gray-900 mt-1",children:"CCE/SN chats will not be saved."})]})]})})]})]})]})]}),i.jsx("p",{className:"text-xs text-gray-500",children:"This setting cannot be changed once the chat begins."})]}),i.jsxs("div",{"data-tour":"chat-interface",children:[i.jsx("div",{className:"rounded-2xl border bg-white border-gray-300",children:i.jsx(hu,{onSend:j=>{m&&m(j,x,S)},colorTheme:n,fontStyle:r,showFileUpload:!0,showClassification:!1,value:v,onChange:y,autoFocus:!0,bookmarkedAssistants:h})}),i.jsx("div",{className:`mt-8 flex flex-wrap gap-2 transition-opacity ${v?"opacity-0 pointer-events-none":"opacity-100"}`,children:k.map((j,M)=>i.jsx("button",{onClick:()=>P(j),className:"px-3 py-2 text-sm rounded-full transition-colors bg-white border border-gray-900 text-gray-900 hover:bg-gray-100",children:j},M))})]})]})})]})}function eE({onLogin:n}){const r=()=>{n({name:"John Doe",email:"john.doe@tech.gov.sg",role:"Product Manager",agency:"GovTech"},!1)};return i.jsx("div",{className:"min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4",children:i.jsx(ai,{className:"w-full max-w-md",children:i.jsxs(li,{className:"p-8 pb-10 space-y-6 text-center",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsx("p",{className:"text-gray-500 text-sm",children:"Welcome to the"}),i.jsx("h1",{className:"text-gray-900 text-2xl font-bold leading-tight",children:"AI Assistant Desk"})]}),i.jsx(Oe,{className:"w-full h-12",onClick:r,children:"Log In with TechPass"}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Having trouble logging in?"," ",i.jsx("a",{href:"#",className:"text-gray-900 hover:text-gray-700 underline",onClick:s=>s.preventDefault(),children:"Contact support"})]})]})})})}var Il="Checkbox",[tE]=cn(Il),[nE,ip]=tE(Il);function rE(n){const{__scopeCheckbox:r,checked:s,children:a,defaultChecked:c,disabled:d,form:p,name:m,onCheckedChange:h,required:v,value:y="on",internal_do_not_use_render:x}=n,[b,S]=An({prop:s,defaultProp:c??!1,onChange:h,caller:Il}),[N,C]=f.useState(null),[k,P]=f.useState(null),j=f.useRef(!1),M=N?!!p||!!N.closest("form"):!0,R={checked:b,disabled:d,setChecked:S,control:N,setControl:C,name:m,form:p,value:y,hasConsumerStoppedPropagationRef:j,required:v,defaultChecked:_r(c)?!1:c,isFormControl:M,bubbleInput:k,setBubbleInput:P};return i.jsx(nE,{scope:r,...R,children:sE(x)?x(R):a})}var bx="CheckboxTrigger",wx=f.forwardRef(({__scopeCheckbox:n,onKeyDown:r,onClick:s,...a},c)=>{const{control:d,value:p,disabled:m,checked:h,required:v,setControl:y,setChecked:x,hasConsumerStoppedPropagationRef:b,isFormControl:S,bubbleInput:N}=ip(bx,n),C=ze(c,y),k=f.useRef(h);return f.useEffect(()=>{const P=d?.form;if(P){const j=()=>x(k.current);return P.addEventListener("reset",j),()=>P.removeEventListener("reset",j)}},[d,x]),i.jsx(Me.button,{type:"button",role:"checkbox","aria-checked":_r(h)?"mixed":h,"aria-required":v,"data-state":Px(h),"data-disabled":m?"":void 0,disabled:m,value:p,...a,ref:C,onKeyDown:ge(r,P=>{P.key==="Enter"&&P.preventDefault()}),onClick:ge(s,P=>{x(j=>_r(j)?!0:!j),N&&S&&(b.current=P.isPropagationStopped(),b.current||P.stopPropagation())})})});wx.displayName=bx;var Sx=f.forwardRef((n,r)=>{const{__scopeCheckbox:s,name:a,checked:c,defaultChecked:d,required:p,disabled:m,value:h,onCheckedChange:v,form:y,...x}=n;return i.jsx(rE,{__scopeCheckbox:s,checked:c,defaultChecked:d,disabled:m,required:p,onCheckedChange:v,name:a,form:y,value:h,internal_do_not_use_render:({isFormControl:b})=>i.jsxs(i.Fragment,{children:[i.jsx(wx,{...x,ref:r,__scopeCheckbox:s}),b&&i.jsx(jx,{__scopeCheckbox:s})]})})});Sx.displayName=Il;var Cx="CheckboxIndicator",kx=f.forwardRef((n,r)=>{const{__scopeCheckbox:s,forceMount:a,...c}=n,d=ip(Cx,s);return i.jsx(It,{present:a||_r(d.checked)||d.checked===!0,children:i.jsx(Me.span,{"data-state":Px(d.checked),"data-disabled":d.disabled?"":void 0,...c,ref:r,style:{pointerEvents:"none",...n.style}})})});kx.displayName=Cx;var Nx="CheckboxBubbleInput",jx=f.forwardRef(({__scopeCheckbox:n,...r},s)=>{const{control:a,hasConsumerStoppedPropagationRef:c,checked:d,defaultChecked:p,required:m,disabled:h,name:v,value:y,form:x,bubbleInput:b,setBubbleInput:S}=ip(Nx,n),N=ze(s,S),C=sp(d),k=_u(a);f.useEffect(()=>{const j=b;if(!j)return;const M=window.HTMLInputElement.prototype,I=Object.getOwnPropertyDescriptor(M,"checked").set,W=!c.current;if(C!==d&&I){const z=new Event("click",{bubbles:W});j.indeterminate=_r(d),I.call(j,_r(d)?!1:d),j.dispatchEvent(z)}},[b,C,d,c]);const P=f.useRef(_r(d)?!1:d);return i.jsx(Me.input,{type:"checkbox","aria-hidden":!0,defaultChecked:p??P.current,required:m,disabled:h,name:v,value:y,form:x,...r,tabIndex:-1,ref:N,style:{...r.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});jx.displayName=Nx;function sE(n){return typeof n=="function"}function _r(n){return n==="indeterminate"}function Px(n){return _r(n)?"indeterminate":n?"checked":"unchecked"}function Ex({className:n,...r}){return i.jsx(Sx,{"data-slot":"checkbox",className:Fe("peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...r,children:i.jsx(kx,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:i.jsx(Hn,{className:"size-3.5"})})})}const oE=[{id:"Concise",label:"Concise",description:"Brief and to the point"},{id:"Professional",label:"Professional",description:"Formal business tone"},{id:"Academic",label:"Academic",description:"Scholarly and detailed"},{id:"Creative",label:"Creative",description:"Imaginative and expressive"},{id:"Others",label:"Others",description:"Describe your own style"}];function iE({userProfile:n,onUpdateProfile:r,onComplete:s}){const[a,c]=f.useState(1),[d,p]=f.useState("Concise"),[m,h]=f.useState(""),[v,y]=f.useState(n.name),[x,b]=f.useState(""),[S,N]=f.useState(""),[C,k]=f.useState([]),P=()=>{r({...n,name:v.trim()||n.name,role:x==="other"?S:x,aiStyle:d==="other"?m:d,workActivities:C}),s()},j=()=>{a===1?c(2):P()},M=()=>{a===2&&c(1)},R=I=>{k(W=>W.includes(I)?W.filter(z=>z!==I):[...W,I])};return i.jsx("div",{className:"min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4",children:i.jsxs(ai,{className:"w-full max-w-2xl shadow-lg border-gray-300 bg-white",children:[i.jsxs(li,{className:"p-8",children:[a===1&&i.jsxs("div",{className:"space-y-6 animate-in fade-in duration-300",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-gray-500 mb-2",children:"Step 1 of 2"}),i.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Tell Us About Yourself"}),i.jsx("p",{className:"text-gray-500",children:"Help us personalize your experience"})]}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx(lt,{htmlFor:"name",children:"What would you like us to call you?"}),i.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-2",children:"Choose something you're comfortable with—your first name, nickname, or preferred title."}),i.jsx(Ft,{id:"name",value:v,onChange:I=>y(I.target.value),placeholder:"e.g., Jayden, Jay, Mr. Tan",className:"bg-white border-gray-300"})]}),i.jsx(ns,{className:"bg-gray-300"}),i.jsxs("div",{children:[i.jsx(lt,{htmlFor:"job-role",children:"Which best describes your primary job role?"}),i.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-2",children:"This helps the AI understand your professional context."}),i.jsxs(Us,{value:x,onValueChange:b,children:[i.jsx(Gs,{id:"job-role",className:"bg-white border-gray-300",children:i.jsx(Jo,{placeholder:"Select your job role"})}),i.jsxs(Qs,{children:[i.jsx(Be,{value:"policy-strategy",children:"Policy / Strategy"}),i.jsx(Be,{value:"operations",children:"Operations"}),i.jsx(Be,{value:"hr-people",children:"HR / People"}),i.jsx(Be,{value:"finance-procurement",children:"Finance / Procurement"}),i.jsx(Be,{value:"legal-compliance",children:"Legal / Compliance"}),i.jsx(Be,{value:"communications",children:"Communications"}),i.jsx(Be,{value:"data-tech",children:"Data / Tech"}),i.jsx(Be,{value:"other",children:"Other"})]})]}),x==="other"&&i.jsx(Ft,{placeholder:"Describe your job role...",value:S,onChange:I=>N(I.target.value),className:"mt-2 bg-white border-gray-300"})]}),i.jsx(ns,{className:"bg-gray-300"}),i.jsxs("div",{children:[i.jsx(lt,{children:"What do you spend most of your time doing?"}),i.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-3",children:"Select all that apply"}),i.jsx("div",{className:"space-y-3",children:[{id:"drafting",label:"Drafting documents"},{id:"reviewing",label:"Reviewing / editing"},{id:"researching",label:"Researching / summarising"},{id:"briefings",label:"Preparing briefings / slides"},{id:"cases",label:"Handling cases"},{id:"queries",label:"Responding to queries"},{id:"analysis",label:"Data analysis"},{id:"planning",label:"Planning / coordination"}].map(I=>i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Ex,{id:I.id,checked:C.includes(I.id),onCheckedChange:()=>R(I.id)}),i.jsx(lt,{htmlFor:I.id,className:"text-sm font-normal cursor-pointer",children:I.label})]},I.id))})]})]})]}),a===2&&i.jsxs("div",{className:"space-y-6 animate-in fade-in duration-300",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-gray-500 mb-2",children:"Step 2 of 2"}),i.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Choose Your AI Style"}),i.jsx("p",{className:"text-gray-500",children:"Select how you'd like your AI Assistant to communicate with you"})]}),i.jsx("div",{className:"grid grid-cols-2 gap-3",children:oE.map(I=>i.jsxs("button",{onClick:()=>p(I.id),className:Fe("relative p-4 rounded-lg border-2 text-left transition-all",d===I.id?"border-gray-900 bg-gray-50":"border-gray-300 hover:border-gray-400"),children:[d===I.id&&i.jsx("div",{className:"absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center",children:i.jsx(Hn,{className:"w-3 h-3 text-white"})}),i.jsx("div",{className:"font-semibold text-gray-900 mb-1",children:I.label}),i.jsx("div",{className:"text-xs text-gray-500",children:I.description})]},I.id))}),d==="Others"&&i.jsx("div",{className:"mt-4",children:i.jsx(Ft,{placeholder:"Describe your preferred style...",value:m,onChange:I=>h(I.target.value),className:"bg-white border-gray-300"})})]})]}),i.jsx("div",{className:"p-6 border-t border-gray-300 bg-gray-100",children:i.jsx("div",{className:"flex justify-end items-center gap-4",children:i.jsxs("div",{className:"flex items-center gap-3",children:[a===2&&i.jsxs(Oe,{variant:"outline",onClick:M,className:"gap-2 h-12 text-base border-gray-300 hover:bg-gray-100",children:[i.jsx(Zo,{className:"w-4 h-4"}),"Back"]}),i.jsxs(Oe,{onClick:j,className:"bg-gray-900 hover:bg-gray-800 text-white gap-2 h-12 text-base px-8",children:[a===1?"Next":"Complete Setup",i.jsx(bw,{className:"w-4 h-4"})]})]})})})]})})}var _l="Tabs",[aE]=cn(_l,[xl]),Rx=xl(),[lE,ap]=aE(_l),Ax=f.forwardRef((n,r)=>{const{__scopeTabs:s,value:a,onValueChange:c,defaultValue:d,orientation:p="horizontal",dir:m,activationMode:h="automatic",...v}=n,y=pi(m),[x,b]=An({prop:a,onChange:c,defaultProp:d??"",caller:_l});return i.jsx(lE,{scope:s,baseId:Jt(),value:x,onValueChange:b,orientation:p,dir:y,activationMode:h,children:i.jsx(Me.div,{dir:y,"data-orientation":p,...v,ref:r})})});Ax.displayName=_l;var Tx="TabsList",Mx=f.forwardRef((n,r)=>{const{__scopeTabs:s,loop:a=!0,...c}=n,d=ap(Tx,s),p=Rx(s);return i.jsx(x0,{asChild:!0,...p,orientation:d.orientation,dir:d.dir,loop:a,children:i.jsx(Me.div,{role:"tablist","aria-orientation":d.orientation,...c,ref:r})})});Mx.displayName=Tx;var Ix="TabsTrigger",_x=f.forwardRef((n,r)=>{const{__scopeTabs:s,value:a,disabled:c=!1,...d}=n,p=ap(Ix,s),m=Rx(s),h=Lx(p.baseId,a),v=zx(p.baseId,a),y=a===p.value;return i.jsx(y0,{asChild:!0,...m,focusable:!c,active:y,children:i.jsx(Me.button,{type:"button",role:"tab","aria-selected":y,"aria-controls":v,"data-state":y?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:h,...d,ref:r,onMouseDown:ge(n.onMouseDown,x=>{!c&&x.button===0&&x.ctrlKey===!1?p.onValueChange(a):x.preventDefault()}),onKeyDown:ge(n.onKeyDown,x=>{[" ","Enter"].includes(x.key)&&p.onValueChange(a)}),onFocus:ge(n.onFocus,()=>{const x=p.activationMode!=="manual";!y&&!c&&x&&p.onValueChange(a)})})})});_x.displayName=Ix;var Dx="TabsContent",Ox=f.forwardRef((n,r)=>{const{__scopeTabs:s,value:a,forceMount:c,children:d,...p}=n,m=ap(Dx,s),h=Lx(m.baseId,a),v=zx(m.baseId,a),y=a===m.value,x=f.useRef(y);return f.useEffect(()=>{const b=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(b)},[]),i.jsx(It,{present:c||y,children:({present:b})=>i.jsx(Me.div,{"data-state":y?"active":"inactive","data-orientation":m.orientation,role:"tabpanel","aria-labelledby":h,hidden:!b,id:v,tabIndex:0,...p,ref:r,style:{...n.style,animationDuration:x.current?"0s":void 0},children:b&&d})})});Ox.displayName=Dx;function Lx(n,r){return`${n}-trigger-${r}`}function zx(n,r){return`${n}-content-${r}`}var cE=Ax,dE=Mx,uE=_x,pE=Ox;function fE({className:n,...r}){return i.jsx(cE,{"data-slot":"tabs",className:Fe("flex flex-col gap-2",n),...r})}function mE({className:n,...r}){return i.jsx(dE,{"data-slot":"tabs-list",className:Fe("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",n),...r})}function Wd({className:n,...r}){return i.jsx(uE,{"data-slot":"tabs-trigger",className:Fe("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...r})}function Vd({className:n,...r}){return i.jsx(pE,{"data-slot":"tabs-content",className:Fe("flex-1 outline-none",n),...r})}var Dl="Switch",[gE]=cn(Dl),[hE,vE]=gE(Dl),Fx=f.forwardRef((n,r)=>{const{__scopeSwitch:s,name:a,checked:c,defaultChecked:d,required:p,disabled:m,value:h="on",onCheckedChange:v,form:y,...x}=n,[b,S]=f.useState(null),N=ze(r,M=>S(M)),C=f.useRef(!1),k=b?y||!!b.closest("form"):!0,[P,j]=An({prop:c,defaultProp:d??!1,onChange:v,caller:Dl});return i.jsxs(hE,{scope:s,checked:P,disabled:m,children:[i.jsx(Me.button,{type:"button",role:"switch","aria-checked":P,"aria-required":p,"data-state":Wx(P),"data-disabled":m?"":void 0,disabled:m,value:h,...x,ref:N,onClick:ge(n.onClick,M=>{j(R=>!R),k&&(C.current=M.isPropagationStopped(),C.current||M.stopPropagation())})}),k&&i.jsx(Bx,{control:b,bubbles:!C.current,name:a,value:h,checked:P,required:p,disabled:m,form:y,style:{transform:"translateX(-100%)"}})]})});Fx.displayName=Dl;var $x="SwitchThumb",Hx=f.forwardRef((n,r)=>{const{__scopeSwitch:s,...a}=n,c=vE($x,s);return i.jsx(Me.span,{"data-state":Wx(c.checked),"data-disabled":c.disabled?"":void 0,...a,ref:r})});Hx.displayName=$x;var xE="SwitchBubbleInput",Bx=f.forwardRef(({__scopeSwitch:n,control:r,checked:s,bubbles:a=!0,...c},d)=>{const p=f.useRef(null),m=ze(p,d),h=sp(s),v=_u(r);return f.useEffect(()=>{const y=p.current;if(!y)return;const x=window.HTMLInputElement.prototype,S=Object.getOwnPropertyDescriptor(x,"checked").set;if(h!==s&&S){const N=new Event("click",{bubbles:a});S.call(y,s),y.dispatchEvent(N)}},[h,s,a]),i.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...c,tabIndex:-1,ref:m,style:{...c.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});Bx.displayName=xE;function Wx(n){return n?"checked":"unchecked"}var yE=Fx,bE=Hx;function Ud({className:n,...r}){return i.jsx(yE,{"data-slot":"switch",className:Fe("peer data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-300 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...r,children:i.jsx(bE,{"data-slot":"switch-thumb",className:Fe("bg-white pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")})})}function wE({colorTheme:n,fontStyle:r,onColorThemeChange:s,onFontStyleChange:a,userProfile:c,onUpdateProfile:d,open:p,onOpenChange:m}){const[h,v]=f.useState(c.customInstructions||""),[y,x]=f.useState(c.aiStyle||"Concise"),[b,S]=f.useState(""),[N,C]=f.useState(c.name||""),[k,P]=f.useState(c.role||""),[j,M]=f.useState(""),[R,I]=f.useState(c.workActivities||[]),[W,z]=f.useState(!0),[V,re]=f.useState(!1);return i.jsx(i.Fragment,{children:i.jsx(Pl,{open:p,onOpenChange:K=>{K||re(!1),m?.(K)},children:i.jsx(El,{className:"max-w-2xl max-h-[90vh] overflow-y-auto",children:V?i.jsxs(i.Fragment,{children:[i.jsxs(oi,{children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("button",{onClick:()=>re(!1),className:"p-1 rounded-lg hover:bg-gray-200 transition-colors",children:i.jsx(Zo,{className:"w-5 h-5"})}),i.jsx(ii,{children:"Saved Memories"})]}),i.jsx(Ug,{children:"Things AI Assistant has learned about you"})]}),i.jsx("div",{className:"space-y-3 mt-4",children:[{id:"1",text:"Works at GovTech as a Marketing Officer",date:"Jan 15, 2026"},{id:"2",text:"Prefers concise, bullet-point responses",date:"Jan 18, 2026"},{id:"3",text:"Often works on marketing campaigns and content",date:"Jan 20, 2026"}].map(K=>i.jsxs("div",{className:"flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("p",{className:"text-sm text-gray-900",children:K.text}),i.jsx("p",{className:"text-xs text-gray-500 mt-1",children:K.date})]}),i.jsxs(Un,{children:[i.jsx(Gn,{asChild:!0,children:i.jsx(Oe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-8 w-8 p-0",children:i.jsx(ss,{className:"w-4 h-4"})})}),i.jsx(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:i.jsxs(yt,{onClick:()=>{},className:"text-red-500 hover:bg-gray-100",children:[i.jsx(os,{className:"w-4 h-4 mr-2"}),"Remove memory"]})})]})]},K.id))})]}):i.jsxs(i.Fragment,{children:[i.jsxs(oi,{children:[i.jsx(ii,{children:"Settings"}),i.jsx(Ug,{children:"Customize your AI Assistant experience"})]}),i.jsxs(fE,{defaultValue:"accounts",className:"w-full",children:[i.jsxs(mE,{className:"grid w-full grid-cols-3",children:[i.jsxs(Wd,{value:"accounts",className:"flex items-center gap-2",children:[i.jsx(dg,{className:"w-4 h-4"}),"Accounts"]}),i.jsxs(Wd,{value:"memories",className:"flex items-center gap-2",children:[i.jsx(Aw,{className:"w-4 h-4"}),"Personalisation"]}),i.jsxs(Wd,{value:"notifications",className:"flex items-center gap-2",children:[i.jsx(kw,{className:"w-4 h-4"}),"Notifications"]})]}),i.jsxs(Vd,{value:"accounts",className:"space-y-6 mt-6",children:[i.jsxs("div",{className:"space-y-4",children:[i.jsx("h3",{className:"font-semibold",children:"Profile Information"}),i.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gray-50 rounded-lg",children:[i.jsx("div",{className:"w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center",children:i.jsx(dg,{className:"w-8 h-8 text-white"})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h4",{className:"font-medium text-gray-900",children:c.name}),i.jsx("p",{className:"text-sm text-gray-500",children:c.email}),i.jsx("p",{className:"text-sm text-gray-500",children:c.agency})]})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"display-name",children:"Display Name"}),i.jsx(Ft,{id:"display-name",defaultValue:c.name})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"agency",children:"Agency"}),i.jsxs(Us,{value:c.agency,onValueChange:K=>{d({...c,agency:K})},children:[i.jsx(Gs,{id:"agency",children:i.jsx(Jo,{placeholder:"Select your agency"})}),i.jsxs(Qs,{children:[i.jsx(Be,{value:"GovTech",children:"GovTech"}),i.jsx(Be,{value:"Ministry of Education (MOE)",children:"Ministry of Education (MOE)"}),i.jsx(Be,{value:"Ministry of Manpower (MOM)",children:"Ministry of Manpower (MOM)"}),i.jsx(Be,{value:"Ministry of Trade and Industry (MTI)",children:"Ministry of Trade and Industry (MTI)"}),i.jsx(Be,{value:"Ministry of Home Affairs (MHA)",children:"Ministry of Home Affairs (MHA)"}),i.jsx(Be,{value:"Ministry of Finance (MOF)",children:"Ministry of Finance (MOF)"}),i.jsx(Be,{value:"Ministry of Health (MOH)",children:"Ministry of Health (MOH)"}),i.jsx(Be,{value:"Ministry of National Development (MND)",children:"Ministry of National Development (MND)"})]})]})]})]}),i.jsx("div",{className:"flex justify-end pt-4",children:i.jsx(Oe,{onClick:()=>{m?.(!1)},children:"Save Changes"})})]}),i.jsxs(Vd,{value:"memories",className:"space-y-6 mt-6",children:[i.jsx("div",{children:i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"AI personalisation"})}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"ai-style",children:"Preferred AI style and tone"}),i.jsx("p",{className:"text-sm text-gray-500",children:"Set the style and tone of how your AI Assistant responds to you."}),i.jsxs(Us,{value:y,onValueChange:x,children:[i.jsx(Gs,{id:"ai-style",children:i.jsx(Jo,{})}),i.jsxs(Qs,{children:[i.jsx(Be,{value:"Concise",children:"Concise"}),i.jsx(Be,{value:"Professional",children:"Professional"}),i.jsx(Be,{value:"Academic",children:"Academic"}),i.jsx(Be,{value:"Creative",children:"Creative"}),i.jsx(Be,{value:"Others",children:"Others"})]})]}),y==="Others"&&i.jsx(Ft,{placeholder:"Describe your preferred style...",value:b,onChange:K=>S(K.target.value),className:"mt-2"})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"custom-instructions",children:"Custom Instructions"}),i.jsx(wi,{id:"custom-instructions",placeholder:"e.g., Always provide sources, use Singapore English spelling, include relevant policy references...",className:"min-h-[100px]",value:h,onChange:K=>v(K.target.value)})]}),i.jsx(ns,{}),i.jsxs("div",{className:"space-y-6",children:[i.jsx("h3",{className:"font-semibold",children:"About You"}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"call-me",children:"What would you like us to call you?"}),i.jsx(Ft,{id:"call-me",value:N,onChange:K=>C(K.target.value),placeholder:"Enter your preferred name"})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"primary-job-role",children:"Which best describes your primary job role?"}),i.jsxs(Us,{value:k,onValueChange:P,children:[i.jsx(Gs,{id:"primary-job-role",children:i.jsx(Jo,{placeholder:"Select your job role"})}),i.jsxs(Qs,{children:[i.jsx(Be,{value:"policy-strategy",children:"Policy / Strategy"}),i.jsx(Be,{value:"operations",children:"Operations"}),i.jsx(Be,{value:"hr-people",children:"HR / People"}),i.jsx(Be,{value:"finance-procurement",children:"Finance / Procurement"}),i.jsx(Be,{value:"legal-compliance",children:"Legal / Compliance"}),i.jsx(Be,{value:"communications",children:"Communications"}),i.jsx(Be,{value:"data-tech",children:"Data / Tech"}),i.jsx(Be,{value:"other",children:"Other"})]})]}),k==="other"&&i.jsx(Ft,{placeholder:"Describe your job role...",value:j,onChange:K=>M(K.target.value),className:"mt-2"})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsx(lt,{children:"What do you spend most of your time doing?"}),i.jsx("div",{className:"space-y-2",children:[{id:"drafting",label:"Drafting documents"},{id:"reviewing",label:"Reviewing / editing"},{id:"researching",label:"Researching / summarising"},{id:"briefings",label:"Preparing briefings / slides"},{id:"cases",label:"Handling cases"},{id:"queries",label:"Responding to queries"},{id:"analysis",label:"Data analysis"},{id:"planning",label:"Planning / coordination"}].map(K=>i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Ex,{id:K.id,checked:R.includes(K.id),onCheckedChange:de=>{I(de?[...R,K.id]:R.filter(ie=>ie!==K.id))}}),i.jsx(lt,{htmlFor:K.id,className:"text-sm font-normal cursor-pointer",children:K.label})]},K.id))})]})]}),i.jsx(ns,{}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h3",{className:"font-semibold",children:"Memories"}),i.jsx(Oe,{variant:"outline",size:"sm",onClick:()=>re(!0),children:"Manage"})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("p",{className:"text-sm text-gray-900",children:"Reference saved memories"}),i.jsx("p",{className:"text-xs text-gray-500",children:"AI Assistant save and use memories when responding."})]}),i.jsx(Ud,{checked:W,onCheckedChange:z})]})]}),i.jsx("div",{className:"flex justify-end pt-4",children:i.jsx(Oe,{onClick:()=>{d({...c,customInstructions:h,name:N,aiStyle:y==="Others"?b:y,workActivities:R}),m?.(!1)},children:"Save Changes"})})]}),i.jsxs(Vd,{value:"notifications",className:"space-y-4 mt-6",children:[i.jsxs("div",{className:"flex items-center justify-between py-3",children:[i.jsxs("div",{className:"space-y-0.5",children:[i.jsx(lt,{htmlFor:"notify-complete",className:"text-sm",children:"Task Completion"}),i.jsx("p",{className:"text-muted-foreground text-xs",children:"Notify me by email when long-running tasks complete"})]}),i.jsx(Ud,{id:"notify-complete",defaultChecked:!0})]}),i.jsx(ns,{}),i.jsxs("div",{className:"flex items-center justify-between py-3",children:[i.jsxs("div",{className:"space-y-0.5",children:[i.jsx(lt,{htmlFor:"email-updates",className:"text-sm",children:"Product Updates"}),i.jsx("p",{className:"text-muted-foreground text-xs",children:"Receive emails about new features and improvements"})]}),i.jsx(Ud,{id:"email-updates",defaultChecked:!0})]})]})]})]})})})})}const Ol=f.createContext(null);Ol.displayName="PanelGroupContext";const mt={group:"data-panel-group",groupDirection:"data-panel-group-direction",groupId:"data-panel-group-id",panel:"data-panel",panelCollapsible:"data-panel-collapsible",panelId:"data-panel-id",panelSize:"data-panel-size",resizeHandle:"data-resize-handle",resizeHandleActive:"data-resize-handle-active",resizeHandleEnabled:"data-panel-resize-handle-enabled",resizeHandleId:"data-panel-resize-handle-id",resizeHandleState:"data-resize-handle-state"},lp=10,rs=f.useLayoutEffect,Yg=cl.useId,SE=typeof Yg=="function"?Yg:()=>null;let CE=0;function cp(n=null){const r=SE(),s=f.useRef(n||r||null);return s.current===null&&(s.current=""+CE++),n??s.current}function Vx({children:n,className:r="",collapsedSize:s,collapsible:a,defaultSize:c,forwardedRef:d,id:p,maxSize:m,minSize:h,onCollapse:v,onExpand:y,onResize:x,order:b,style:S,tagName:N="div",...C}){const k=f.useContext(Ol);if(k===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:P,expandPanel:j,getPanelSize:M,getPanelStyle:R,groupId:I,isPanelCollapsed:W,reevaluatePanelConstraints:z,registerPanel:V,resizePanel:re,unregisterPanel:K}=k,de=cp(p),ie=f.useRef({callbacks:{onCollapse:v,onExpand:y,onResize:x},constraints:{collapsedSize:s,collapsible:a,defaultSize:c,maxSize:m,minSize:h},id:de,idIsFromProps:p!==void 0,order:b});f.useRef({didLogMissingDefaultSizeWarning:!1}),rs(()=>{const{callbacks:ue,constraints:fe}=ie.current,ee={...fe};ie.current.id=de,ie.current.idIsFromProps=p!==void 0,ie.current.order=b,ue.onCollapse=v,ue.onExpand=y,ue.onResize=x,fe.collapsedSize=s,fe.collapsible=a,fe.defaultSize=c,fe.maxSize=m,fe.minSize=h,(ee.collapsedSize!==fe.collapsedSize||ee.collapsible!==fe.collapsible||ee.maxSize!==fe.maxSize||ee.minSize!==fe.minSize)&&z(ie.current,ee)}),rs(()=>{const ue=ie.current;return V(ue),()=>{K(ue)}},[b,de,V,K]),f.useImperativeHandle(d,()=>({collapse:()=>{P(ie.current)},expand:ue=>{j(ie.current,ue)},getId(){return de},getSize(){return M(ie.current)},isCollapsed(){return W(ie.current)},isExpanded(){return!W(ie.current)},resize:ue=>{re(ie.current,ue)}}),[P,j,M,W,de,re]);const me=R(ie.current,c);return f.createElement(N,{...C,children:n,className:r,id:de,style:{...me,...S},[mt.groupId]:I,[mt.panel]:"",[mt.panelCollapsible]:a||void 0,[mt.panelId]:de,[mt.panelSize]:parseFloat(""+me.flexGrow).toFixed(1)})}const Ux=f.forwardRef((n,r)=>f.createElement(Vx,{...n,forwardedRef:r}));Vx.displayName="Panel";Ux.displayName="forwardRef(Panel)";let xu=null,Va=-1,Ir=null;function kE(n,r){if(r){const s=(r&Yx)!==0,a=(r&Xx)!==0,c=(r&Jx)!==0,d=(r&Zx)!==0;if(s)return c?"se-resize":d?"ne-resize":"e-resize";if(a)return c?"sw-resize":d?"nw-resize":"w-resize";if(c)return"s-resize";if(d)return"n-resize"}switch(n){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function NE(){Ir!==null&&(document.head.removeChild(Ir),xu=null,Ir=null,Va=-1)}function Gd(n,r){var s,a;const c=kE(n,r);if(xu!==c){if(xu=c,Ir===null&&(Ir=document.createElement("style"),document.head.appendChild(Ir)),Va>=0){var d;(d=Ir.sheet)===null||d===void 0||d.removeRule(Va)}Va=(s=(a=Ir.sheet)===null||a===void 0?void 0:a.insertRule(`*{cursor: ${c} !important;}`))!==null&&s!==void 0?s:-1}}function Gx(n){return n.type==="keydown"}function Qx(n){return n.type.startsWith("pointer")}function qx(n){return n.type.startsWith("mouse")}function Ll(n){if(Qx(n)){if(n.isPrimary)return{x:n.clientX,y:n.clientY}}else if(qx(n))return{x:n.clientX,y:n.clientY};return{x:1/0,y:1/0}}function jE(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function PE(n,r,s){return n.x<r.x+r.width&&n.x+n.width>r.x&&n.y<r.y+r.height&&n.y+n.height>r.y}function EE(n,r){if(n===r)throw new Error("Cannot compare node with itself");const s={a:Zg(n),b:Zg(r)};let a;for(;s.a.at(-1)===s.b.at(-1);)n=s.a.pop(),r=s.b.pop(),a=n;Le(a,"Stacking order can only be calculated for elements with a common ancestor");const c={a:Jg(Xg(s.a)),b:Jg(Xg(s.b))};if(c.a===c.b){const d=a.childNodes,p={a:s.a.at(-1),b:s.b.at(-1)};let m=d.length;for(;m--;){const h=d[m];if(h===p.a)return 1;if(h===p.b)return-1}}return Math.sign(c.a-c.b)}const RE=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function AE(n){var r;const s=getComputedStyle((r=Kx(n))!==null&&r!==void 0?r:n).display;return s==="flex"||s==="inline-flex"}function TE(n){const r=getComputedStyle(n);return!!(r.position==="fixed"||r.zIndex!=="auto"&&(r.position!=="static"||AE(n))||+r.opacity<1||"transform"in r&&r.transform!=="none"||"webkitTransform"in r&&r.webkitTransform!=="none"||"mixBlendMode"in r&&r.mixBlendMode!=="normal"||"filter"in r&&r.filter!=="none"||"webkitFilter"in r&&r.webkitFilter!=="none"||"isolation"in r&&r.isolation==="isolate"||RE.test(r.willChange)||r.webkitOverflowScrolling==="touch")}function Xg(n){let r=n.length;for(;r--;){const s=n[r];if(Le(s,"Missing node"),TE(s))return s}return null}function Jg(n){return n&&Number(getComputedStyle(n).zIndex)||0}function Zg(n){const r=[];for(;n;)r.push(n),n=Kx(n);return r}function Kx(n){const{parentNode:r}=n;return r&&r instanceof ShadowRoot?r.host:r}const Yx=1,Xx=2,Jx=4,Zx=8,ME=jE()==="coarse";let Rn=[],qs=!1,ts=new Map,zl=new Map;const ci=new Set;function IE(n,r,s,a,c){var d;const{ownerDocument:p}=r,m={direction:s,element:r,hitAreaMargins:a,setResizeHandlerState:c},h=(d=ts.get(p))!==null&&d!==void 0?d:0;return ts.set(p,h+1),ci.add(m),al(),function(){var y;zl.delete(n),ci.delete(m);const x=(y=ts.get(p))!==null&&y!==void 0?y:1;if(ts.set(p,x-1),al(),x===1&&ts.delete(p),Rn.includes(m)){const b=Rn.indexOf(m);b>=0&&Rn.splice(b,1),up(),c("up",!0,null)}}}function _E(n){const{target:r}=n,{x:s,y:a}=Ll(n);qs=!0,dp({target:r,x:s,y:a}),al(),Rn.length>0&&(ll("down",n),n.preventDefault(),ey(r)||n.stopImmediatePropagation())}function Qd(n){const{x:r,y:s}=Ll(n);if(qs&&n.buttons===0&&(qs=!1,ll("up",n)),!qs){const{target:a}=n;dp({target:a,x:r,y:s})}ll("move",n),up(),Rn.length>0&&n.preventDefault()}function qd(n){const{target:r}=n,{x:s,y:a}=Ll(n);zl.clear(),qs=!1,Rn.length>0&&(n.preventDefault(),ey(r)||n.stopImmediatePropagation()),ll("up",n),dp({target:r,x:s,y:a}),up(),al()}function ey(n){let r=n;for(;r;){if(r.hasAttribute(mt.resizeHandle))return!0;r=r.parentElement}return!1}function dp({target:n,x:r,y:s}){Rn.splice(0);let a=null;(n instanceof HTMLElement||n instanceof SVGElement)&&(a=n),ci.forEach(c=>{const{element:d,hitAreaMargins:p}=c,m=d.getBoundingClientRect(),{bottom:h,left:v,right:y,top:x}=m,b=ME?p.coarse:p.fine;if(r>=v-b&&r<=y+b&&s>=x-b&&s<=h+b){if(a!==null&&document.contains(a)&&d!==a&&!d.contains(a)&&!a.contains(d)&&EE(a,d)>0){let N=a,C=!1;for(;N&&!N.contains(d);){if(PE(N.getBoundingClientRect(),m)){C=!0;break}N=N.parentElement}if(C)return}Rn.push(c)}})}function Kd(n,r){zl.set(n,r)}function up(){let n=!1,r=!1;Rn.forEach(a=>{const{direction:c}=a;c==="horizontal"?n=!0:r=!0});let s=0;zl.forEach(a=>{s|=a}),n&&r?Gd("intersection",s):n?Gd("horizontal",s):r?Gd("vertical",s):NE()}let Yd=new AbortController;function al(){Yd.abort(),Yd=new AbortController;const n={capture:!0,signal:Yd.signal};ci.size&&(qs?(Rn.length>0&&ts.forEach((r,s)=>{const{body:a}=s;r>0&&(a.addEventListener("contextmenu",qd,n),a.addEventListener("pointerleave",Qd,n),a.addEventListener("pointermove",Qd,n))}),window.addEventListener("pointerup",qd,n),window.addEventListener("pointercancel",qd,n)):ts.forEach((r,s)=>{const{body:a}=s;r>0&&(a.addEventListener("pointerdown",_E,n),a.addEventListener("pointermove",Qd,n))}))}function ll(n,r){ci.forEach(s=>{const{setResizeHandlerState:a}=s,c=Rn.includes(s);a(n,c,r)})}function DE(){const[n,r]=f.useState(0);return f.useCallback(()=>r(s=>s+1),[])}function Le(n,r){if(!n)throw console.error(r),Error(r)}function ds(n,r,s=lp){return n.toFixed(s)===r.toFixed(s)?0:n>r?1:-1}function ar(n,r,s=lp){return ds(n,r,s)===0}function on(n,r,s){return ds(n,r,s)===0}function OE(n,r,s){if(n.length!==r.length)return!1;for(let a=0;a<n.length;a++){const c=n[a],d=r[a];if(!on(c,d,s))return!1}return!0}function Hs({panelConstraints:n,panelIndex:r,size:s}){const a=n[r];Le(a!=null,`Panel constraints not found for index ${r}`);let{collapsedSize:c=0,collapsible:d,maxSize:p=100,minSize:m=0}=a;if(ds(s,m)<0)if(d){const h=(c+m)/2;ds(s,h)<0?s=c:s=m}else s=m;return s=Math.min(p,s),s=parseFloat(s.toFixed(lp)),s}function Ko({delta:n,initialLayout:r,panelConstraints:s,pivotIndices:a,prevLayout:c,trigger:d}){if(on(n,0))return r;const p=[...r],[m,h]=a;Le(m!=null,"Invalid first pivot index"),Le(h!=null,"Invalid second pivot index");let v=0;if(d==="keyboard"){{const x=n<0?h:m,b=s[x];Le(b,`Panel constraints not found for index ${x}`);const{collapsedSize:S=0,collapsible:N,minSize:C=0}=b;if(N){const k=r[x];if(Le(k!=null,`Previous layout not found for panel index ${x}`),on(k,S)){const P=C-k;ds(P,Math.abs(n))>0&&(n=n<0?0-P:P)}}}{const x=n<0?m:h,b=s[x];Le(b,`No panel constraints found for index ${x}`);const{collapsedSize:S=0,collapsible:N,minSize:C=0}=b;if(N){const k=r[x];if(Le(k!=null,`Previous layout not found for panel index ${x}`),on(k,C)){const P=k-S;ds(P,Math.abs(n))>0&&(n=n<0?0-P:P)}}}}{const x=n<0?1:-1;let b=n<0?h:m,S=0;for(;;){const C=r[b];Le(C!=null,`Previous layout not found for panel index ${b}`);const P=Hs({panelConstraints:s,panelIndex:b,size:100})-C;if(S+=P,b+=x,b<0||b>=s.length)break}const N=Math.min(Math.abs(n),Math.abs(S));n=n<0?0-N:N}{let b=n<0?m:h;for(;b>=0&&b<s.length;){const S=Math.abs(n)-Math.abs(v),N=r[b];Le(N!=null,`Previous layout not found for panel index ${b}`);const C=N-S,k=Hs({panelConstraints:s,panelIndex:b,size:C});if(!on(N,k)&&(v+=N-k,p[b]=k,v.toPrecision(3).localeCompare(Math.abs(n).toPrecision(3),void 0,{numeric:!0})>=0))break;n<0?b--:b++}}if(OE(c,p))return c;{const x=n<0?h:m,b=r[x];Le(b!=null,`Previous layout not found for panel index ${x}`);const S=b+v,N=Hs({panelConstraints:s,panelIndex:x,size:S});if(p[x]=N,!on(N,S)){let C=S-N,P=n<0?h:m;for(;P>=0&&P<s.length;){const j=p[P];Le(j!=null,`Previous layout not found for panel index ${P}`);const M=j+C,R=Hs({panelConstraints:s,panelIndex:P,size:M});if(on(j,R)||(C-=R-j,p[P]=R),on(C,0))break;n>0?P--:P++}}}const y=p.reduce((x,b)=>b+x,0);return on(y,100)?p:c}function LE({layout:n,panelsArray:r,pivotIndices:s}){let a=0,c=100,d=0,p=0;const m=s[0];Le(m!=null,"No pivot index found"),r.forEach((x,b)=>{const{constraints:S}=x,{maxSize:N=100,minSize:C=0}=S;b===m?(a=C,c=N):(d+=C,p+=N)});const h=Math.min(c,100-d),v=Math.max(a,100-p),y=n[m];return{valueMax:h,valueMin:v,valueNow:y}}function di(n,r=document){return Array.from(r.querySelectorAll(`[${mt.resizeHandleId}][data-panel-group-id="${n}"]`))}function ty(n,r,s=document){const c=di(n,s).findIndex(d=>d.getAttribute(mt.resizeHandleId)===r);return c??null}function ny(n,r,s){const a=ty(n,r,s);return a!=null?[a,a+1]:[-1,-1]}function ry(n,r=document){var s;if(r instanceof HTMLElement&&(r==null||(s=r.dataset)===null||s===void 0?void 0:s.panelGroupId)==n)return r;const a=r.querySelector(`[data-panel-group][data-panel-group-id="${n}"]`);return a||null}function Fl(n,r=document){const s=r.querySelector(`[${mt.resizeHandleId}="${n}"]`);return s||null}function zE(n,r,s,a=document){var c,d,p,m;const h=Fl(r,a),v=di(n,a),y=h?v.indexOf(h):-1,x=(c=(d=s[y])===null||d===void 0?void 0:d.id)!==null&&c!==void 0?c:null,b=(p=(m=s[y+1])===null||m===void 0?void 0:m.id)!==null&&p!==void 0?p:null;return[x,b]}function FE({committedValuesRef:n,eagerValuesRef:r,groupId:s,layout:a,panelDataArray:c,panelGroupElement:d,setLayout:p}){f.useRef({didWarnAboutMissingResizeHandle:!1}),rs(()=>{if(!d)return;const m=di(s,d);for(let h=0;h<c.length-1;h++){const{valueMax:v,valueMin:y,valueNow:x}=LE({layout:a,panelsArray:c,pivotIndices:[h,h+1]}),b=m[h];if(b!=null){const S=c[h];Le(S,`No panel data found for index "${h}"`),b.setAttribute("aria-controls",S.id),b.setAttribute("aria-valuemax",""+Math.round(v)),b.setAttribute("aria-valuemin",""+Math.round(y)),b.setAttribute("aria-valuenow",x!=null?""+Math.round(x):"")}}return()=>{m.forEach((h,v)=>{h.removeAttribute("aria-controls"),h.removeAttribute("aria-valuemax"),h.removeAttribute("aria-valuemin"),h.removeAttribute("aria-valuenow")})}},[s,a,c,d]),f.useEffect(()=>{if(!d)return;const m=r.current;Le(m,"Eager values not found");const{panelDataArray:h}=m,v=ry(s,d);Le(v!=null,`No group found for id "${s}"`);const y=di(s,d);Le(y,`No resize handles found for group id "${s}"`);const x=y.map(b=>{const S=b.getAttribute(mt.resizeHandleId);Le(S,"Resize handle element has no handle id attribute");const[N,C]=zE(s,S,h,d);if(N==null||C==null)return()=>{};const k=P=>{if(!P.defaultPrevented)switch(P.key){case"Enter":{P.preventDefault();const j=h.findIndex(M=>M.id===N);if(j>=0){const M=h[j];Le(M,`No panel data found for index ${j}`);const R=a[j],{collapsedSize:I=0,collapsible:W,minSize:z=0}=M.constraints;if(R!=null&&W){const V=Ko({delta:on(R,I)?z-I:I-R,initialLayout:a,panelConstraints:h.map(re=>re.constraints),pivotIndices:ny(s,S,d),prevLayout:a,trigger:"keyboard"});a!==V&&p(V)}}break}}};return b.addEventListener("keydown",k),()=>{b.removeEventListener("keydown",k)}});return()=>{x.forEach(b=>b())}},[d,n,r,s,a,c,p])}function eh(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!==r[s])return!1;return!0}function sy(n,r){const s=n==="horizontal",{x:a,y:c}=Ll(r);return s?a:c}function $E(n,r,s,a,c){const d=s==="horizontal",p=Fl(r,c);Le(p,`No resize handle element found for id "${r}"`);const m=p.getAttribute(mt.groupId);Le(m,"Resize handle element has no group id attribute");let{initialCursorPosition:h}=a;const v=sy(s,n),y=ry(m,c);Le(y,`No group element found for id "${m}"`);const x=y.getBoundingClientRect(),b=d?x.width:x.height;return(v-h)/b*100}function HE(n,r,s,a,c,d){if(Gx(n)){const p=s==="horizontal";let m=0;n.shiftKey?m=100:c!=null?m=c:m=10;let h=0;switch(n.key){case"ArrowDown":h=p?0:m;break;case"ArrowLeft":h=p?-m:0;break;case"ArrowRight":h=p?m:0;break;case"ArrowUp":h=p?0:-m;break;case"End":h=100;break;case"Home":h=-100;break}return h}else return a==null?0:$E(n,r,s,a,d)}function BE({panelDataArray:n}){const r=Array(n.length),s=n.map(d=>d.constraints);let a=0,c=100;for(let d=0;d<n.length;d++){const p=s[d];Le(p,`Panel constraints not found for index ${d}`);const{defaultSize:m}=p;m!=null&&(a++,r[d]=m,c-=m)}for(let d=0;d<n.length;d++){const p=s[d];Le(p,`Panel constraints not found for index ${d}`);const{defaultSize:m}=p;if(m!=null)continue;const h=n.length-a,v=c/h;a++,r[d]=v,c-=v}return r}function Fs(n,r,s){r.forEach((a,c)=>{const d=n[c];Le(d,`Panel data not found for index ${c}`);const{callbacks:p,constraints:m,id:h}=d,{collapsedSize:v=0,collapsible:y}=m,x=s[h];if(x==null||a!==x){s[h]=a;const{onCollapse:b,onExpand:S,onResize:N}=p;N&&N(a,x),y&&(b||S)&&(S&&(x==null||ar(x,v))&&!ar(a,v)&&S(),b&&(x==null||!ar(x,v))&&ar(a,v)&&b())}})}function za(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!=r[s])return!1;return!0}function WE({defaultSize:n,dragState:r,layout:s,panelData:a,panelIndex:c,precision:d=3}){const p=s[c];let m;return p==null?m=n!=null?n.toPrecision(d):"1":a.length===1?m="1":m=p.toPrecision(d),{flexBasis:0,flexGrow:m,flexShrink:1,overflow:"hidden",pointerEvents:r!==null?"none":void 0}}function VE(n,r=10){let s=null;return(...c)=>{s!==null&&clearTimeout(s),s=setTimeout(()=>{n(...c)},r)}}function th(n){try{if(typeof localStorage<"u")n.getItem=r=>localStorage.getItem(r),n.setItem=(r,s)=>{localStorage.setItem(r,s)};else throw new Error("localStorage not supported in this environment")}catch(r){console.error(r),n.getItem=()=>null,n.setItem=()=>{}}}function oy(n){return`react-resizable-panels:${n}`}function iy(n){return n.map(r=>{const{constraints:s,id:a,idIsFromProps:c,order:d}=r;return c?a:d?`${d}:${JSON.stringify(s)}`:JSON.stringify(s)}).sort((r,s)=>r.localeCompare(s)).join(",")}function ay(n,r){try{const s=oy(n),a=r.getItem(s);if(a){const c=JSON.parse(a);if(typeof c=="object"&&c!=null)return c}}catch{}return null}function UE(n,r,s){var a,c;const d=(a=ay(n,s))!==null&&a!==void 0?a:{},p=iy(r);return(c=d[p])!==null&&c!==void 0?c:null}function GE(n,r,s,a,c){var d;const p=oy(n),m=iy(r),h=(d=ay(n,c))!==null&&d!==void 0?d:{};h[m]={expandToSizes:Object.fromEntries(s.entries()),layout:a};try{c.setItem(p,JSON.stringify(h))}catch(v){console.error(v)}}function nh({layout:n,panelConstraints:r}){const s=[...n],a=s.reduce((d,p)=>d+p,0);if(s.length!==r.length)throw Error(`Invalid ${r.length} panel layout: ${s.map(d=>`${d}%`).join(", ")}`);if(!on(a,100)&&s.length>0)for(let d=0;d<r.length;d++){const p=s[d];Le(p!=null,`No layout data found for index ${d}`);const m=100/a*p;s[d]=m}let c=0;for(let d=0;d<r.length;d++){const p=s[d];Le(p!=null,`No layout data found for index ${d}`);const m=Hs({panelConstraints:r,panelIndex:d,size:p});p!=m&&(c+=p-m,s[d]=m)}if(!on(c,0))for(let d=0;d<r.length;d++){const p=s[d];Le(p!=null,`No layout data found for index ${d}`);const m=p+c,h=Hs({panelConstraints:r,panelIndex:d,size:m});if(p!==h&&(c-=h-p,s[d]=h,on(c,0)))break}return s}const QE=100,Yo={getItem:n=>(th(Yo),Yo.getItem(n)),setItem:(n,r)=>{th(Yo),Yo.setItem(n,r)}},rh={};function ly({autoSaveId:n=null,children:r,className:s="",direction:a,forwardedRef:c,id:d=null,onLayout:p=null,keyboardResizeBy:m=null,storage:h=Yo,style:v,tagName:y="div",...x}){const b=cp(d),S=f.useRef(null),[N,C]=f.useState(null),[k,P]=f.useState([]),j=DE(),M=f.useRef({}),R=f.useRef(new Map),I=f.useRef(0),W=f.useRef({autoSaveId:n,direction:a,dragState:N,id:b,keyboardResizeBy:m,onLayout:p,storage:h}),z=f.useRef({layout:k,panelDataArray:[],panelDataArrayChanged:!1});f.useRef({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),f.useImperativeHandle(c,()=>({getId:()=>W.current.id,getLayout:()=>{const{layout:B}=z.current;return B},setLayout:B=>{const{onLayout:Q}=W.current,{layout:oe,panelDataArray:q}=z.current,O=nh({layout:B,panelConstraints:q.map(X=>X.constraints)});eh(oe,O)||(P(O),z.current.layout=O,Q&&Q(O),Fs(q,O,M.current))}}),[]),rs(()=>{W.current.autoSaveId=n,W.current.direction=a,W.current.dragState=N,W.current.id=b,W.current.onLayout=p,W.current.storage=h}),FE({committedValuesRef:W,eagerValuesRef:z,groupId:b,layout:k,panelDataArray:z.current.panelDataArray,setLayout:P,panelGroupElement:S.current}),f.useEffect(()=>{const{panelDataArray:B}=z.current;if(n){if(k.length===0||k.length!==B.length)return;let Q=rh[n];Q==null&&(Q=VE(GE,QE),rh[n]=Q);const oe=[...B],q=new Map(R.current);Q(n,oe,q,k,h)}},[n,k,h]),f.useEffect(()=>{});const V=f.useCallback(B=>{const{onLayout:Q}=W.current,{layout:oe,panelDataArray:q}=z.current;if(B.constraints.collapsible){const O=q.map(Ee=>Ee.constraints),{collapsedSize:X=0,panelSize:le,pivotIndices:he}=es(q,B,oe);if(Le(le!=null,`Panel size not found for panel "${B.id}"`),!ar(le,X)){R.current.set(B.id,le);const Re=$s(q,B)===q.length-1?le-X:X-le,Z=Ko({delta:Re,initialLayout:oe,panelConstraints:O,pivotIndices:he,prevLayout:oe,trigger:"imperative-api"});za(oe,Z)||(P(Z),z.current.layout=Z,Q&&Q(Z),Fs(q,Z,M.current))}}},[]),re=f.useCallback((B,Q)=>{const{onLayout:oe}=W.current,{layout:q,panelDataArray:O}=z.current;if(B.constraints.collapsible){const X=O.map(je=>je.constraints),{collapsedSize:le=0,panelSize:he=0,minSize:Ee=0,pivotIndices:Re}=es(O,B,q),Z=Q??Ee;if(ar(he,le)){const je=R.current.get(B.id),Ge=je!=null&&je>=Z?je:Z,vt=$s(O,B)===O.length-1?he-Ge:Ge-he,it=Ko({delta:vt,initialLayout:q,panelConstraints:X,pivotIndices:Re,prevLayout:q,trigger:"imperative-api"});za(q,it)||(P(it),z.current.layout=it,oe&&oe(it),Fs(O,it,M.current))}}},[]),K=f.useCallback(B=>{const{layout:Q,panelDataArray:oe}=z.current,{panelSize:q}=es(oe,B,Q);return Le(q!=null,`Panel size not found for panel "${B.id}"`),q},[]),de=f.useCallback((B,Q)=>{const{panelDataArray:oe}=z.current,q=$s(oe,B);return WE({defaultSize:Q,dragState:N,layout:k,panelData:oe,panelIndex:q})},[N,k]),ie=f.useCallback(B=>{const{layout:Q,panelDataArray:oe}=z.current,{collapsedSize:q=0,collapsible:O,panelSize:X}=es(oe,B,Q);return Le(X!=null,`Panel size not found for panel "${B.id}"`),O===!0&&ar(X,q)},[]),me=f.useCallback(B=>{const{layout:Q,panelDataArray:oe}=z.current,{collapsedSize:q=0,collapsible:O,panelSize:X}=es(oe,B,Q);return Le(X!=null,`Panel size not found for panel "${B.id}"`),!O||ds(X,q)>0},[]),ue=f.useCallback(B=>{const{panelDataArray:Q}=z.current;Q.push(B),Q.sort((oe,q)=>{const O=oe.order,X=q.order;return O==null&&X==null?0:O==null?-1:X==null?1:O-X}),z.current.panelDataArrayChanged=!0,j()},[j]);rs(()=>{if(z.current.panelDataArrayChanged){z.current.panelDataArrayChanged=!1;const{autoSaveId:B,onLayout:Q,storage:oe}=W.current,{layout:q,panelDataArray:O}=z.current;let X=null;if(B){const he=UE(B,O,oe);he&&(R.current=new Map(Object.entries(he.expandToSizes)),X=he.layout)}X==null&&(X=BE({panelDataArray:O}));const le=nh({layout:X,panelConstraints:O.map(he=>he.constraints)});eh(q,le)||(P(le),z.current.layout=le,Q&&Q(le),Fs(O,le,M.current))}}),rs(()=>{const B=z.current;return()=>{B.layout=[]}},[]);const fe=f.useCallback(B=>{let Q=!1;const oe=S.current;return oe&&window.getComputedStyle(oe,null).getPropertyValue("direction")==="rtl"&&(Q=!0),function(O){O.preventDefault();const X=S.current;if(!X)return()=>null;const{direction:le,dragState:he,id:Ee,keyboardResizeBy:Re,onLayout:Z}=W.current,{layout:je,panelDataArray:Ge}=z.current,{initialLayout:pt}=he??{},vt=ny(Ee,B,X);let it=HE(O,B,le,he,Re,X);const dn=le==="horizontal";dn&&Q&&(it=-it);const Vt=Ge.map(ce=>ce.constraints),Xe=Ko({delta:it,initialLayout:pt??je,panelConstraints:Vt,pivotIndices:vt,prevLayout:je,trigger:Gx(O)?"keyboard":"mouse-or-touch"}),Ht=!za(je,Xe);(Qx(O)||qx(O))&&I.current!=it&&(I.current=it,!Ht&&it!==0?dn?Kd(B,it<0?Yx:Xx):Kd(B,it<0?Jx:Zx):Kd(B,0)),Ht&&(P(Xe),z.current.layout=Xe,Z&&Z(Xe),Fs(Ge,Xe,M.current))}},[]),ee=f.useCallback((B,Q)=>{const{onLayout:oe}=W.current,{layout:q,panelDataArray:O}=z.current,X=O.map(je=>je.constraints),{panelSize:le,pivotIndices:he}=es(O,B,q);Le(le!=null,`Panel size not found for panel "${B.id}"`);const Re=$s(O,B)===O.length-1?le-Q:Q-le,Z=Ko({delta:Re,initialLayout:q,panelConstraints:X,pivotIndices:he,prevLayout:q,trigger:"imperative-api"});za(q,Z)||(P(Z),z.current.layout=Z,oe&&oe(Z),Fs(O,Z,M.current))},[]),Y=f.useCallback((B,Q)=>{const{layout:oe,panelDataArray:q}=z.current,{collapsedSize:O=0,collapsible:X}=Q,{collapsedSize:le=0,collapsible:he,maxSize:Ee=100,minSize:Re=0}=B.constraints,{panelSize:Z}=es(q,B,oe);Z!=null&&(X&&he&&ar(Z,O)?ar(O,le)||ee(B,le):Z<Re?ee(B,Re):Z>Ee&&ee(B,Ee))},[ee]),_=f.useCallback((B,Q)=>{const{direction:oe}=W.current,{layout:q}=z.current;if(!S.current)return;const O=Fl(B,S.current);Le(O,`Drag handle element not found for id "${B}"`);const X=sy(oe,Q);C({dragHandleId:B,dragHandleRect:O.getBoundingClientRect(),initialCursorPosition:X,initialLayout:q})},[]),H=f.useCallback(()=>{C(null)},[]),J=f.useCallback(B=>{const{panelDataArray:Q}=z.current,oe=$s(Q,B);oe>=0&&(Q.splice(oe,1),delete M.current[B.id],z.current.panelDataArrayChanged=!0,j())},[j]),A=f.useMemo(()=>({collapsePanel:V,direction:a,dragState:N,expandPanel:re,getPanelSize:K,getPanelStyle:de,groupId:b,isPanelCollapsed:ie,isPanelExpanded:me,reevaluatePanelConstraints:Y,registerPanel:ue,registerResizeHandle:fe,resizePanel:ee,startDragging:_,stopDragging:H,unregisterPanel:J,panelGroupElement:S.current}),[V,N,a,re,K,de,b,ie,me,Y,ue,fe,ee,_,H,J]),U={display:"flex",flexDirection:a==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return f.createElement(Ol.Provider,{value:A},f.createElement(y,{...x,children:r,className:s,id:d,ref:S,style:{...U,...v},[mt.group]:"",[mt.groupDirection]:a,[mt.groupId]:b}))}const cy=f.forwardRef((n,r)=>f.createElement(ly,{...n,forwardedRef:r}));ly.displayName="PanelGroup";cy.displayName="forwardRef(PanelGroup)";function $s(n,r){return n.findIndex(s=>s===r||s.id===r.id)}function es(n,r,s){const a=$s(n,r),d=a===n.length-1?[a-1,a]:[a,a+1],p=s[a];return{...r.constraints,panelSize:p,pivotIndices:d}}function qE({disabled:n,handleId:r,resizeHandler:s,panelGroupElement:a}){f.useEffect(()=>{if(n||s==null||a==null)return;const c=Fl(r,a);if(c==null)return;const d=p=>{if(!p.defaultPrevented)switch(p.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{p.preventDefault(),s(p);break}case"F6":{p.preventDefault();const m=c.getAttribute(mt.groupId);Le(m,`No group element found for id "${m}"`);const h=di(m,a),v=ty(m,r,a);Le(v!==null,`No resize element found for id "${r}"`);const y=p.shiftKey?v>0?v-1:h.length-1:v+1<h.length?v+1:0;h[y].focus();break}}};return c.addEventListener("keydown",d),()=>{c.removeEventListener("keydown",d)}},[a,n,r,s])}function dy({children:n=null,className:r="",disabled:s=!1,hitAreaMargins:a,id:c,onBlur:d,onClick:p,onDragging:m,onFocus:h,onPointerDown:v,onPointerUp:y,style:x={},tabIndex:b=0,tagName:S="div",...N}){var C,k;const P=f.useRef(null),j=f.useRef({onClick:p,onDragging:m,onPointerDown:v,onPointerUp:y});f.useEffect(()=>{j.current.onClick=p,j.current.onDragging=m,j.current.onPointerDown=v,j.current.onPointerUp=y});const M=f.useContext(Ol);if(M===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:R,groupId:I,registerResizeHandle:W,startDragging:z,stopDragging:V,panelGroupElement:re}=M,K=cp(c),[de,ie]=f.useState("inactive"),[me,ue]=f.useState(!1),[fe,ee]=f.useState(null),Y=f.useRef({state:de});rs(()=>{Y.current.state=de}),f.useEffect(()=>{if(s)ee(null);else{const A=W(K);ee(()=>A)}},[s,K,W]);const _=(C=a?.coarse)!==null&&C!==void 0?C:15,H=(k=a?.fine)!==null&&k!==void 0?k:5;f.useEffect(()=>{if(s||fe==null)return;const A=P.current;Le(A,"Element ref not attached");let U=!1;return IE(K,A,R,{coarse:_,fine:H},(Q,oe,q)=>{if(!oe){ie("inactive");return}switch(Q){case"down":{ie("drag"),U=!1,Le(q,'Expected event to be defined for "down" action'),z(K,q);const{onDragging:O,onPointerDown:X}=j.current;O?.(!0),X?.();break}case"move":{const{state:O}=Y.current;U=!0,O!=="drag"&&ie("hover"),Le(q,'Expected event to be defined for "move" action'),fe(q);break}case"up":{ie("hover"),V();const{onClick:O,onDragging:X,onPointerUp:le}=j.current;X?.(!1),le?.(),U||O?.();break}}})},[_,R,s,H,W,K,fe,z,V]),qE({disabled:s,handleId:K,resizeHandler:fe,panelGroupElement:re});const J={touchAction:"none",userSelect:"none"};return f.createElement(S,{...N,children:n,className:r,id:c,onBlur:()=>{ue(!1),d?.()},onFocus:()=>{ue(!0),h?.()},ref:P,role:"separator",style:{...J,...x},tabIndex:b,[mt.groupDirection]:R,[mt.groupId]:I,[mt.resizeHandle]:"",[mt.resizeHandleActive]:de==="drag"?"pointer":me?"keyboard":void 0,[mt.resizeHandleEnabled]:!s,[mt.resizeHandleId]:K,[mt.resizeHandleState]:de})}dy.displayName="PanelResizeHandle";function KE({className:n,...r}){return i.jsx(cy,{"data-slot":"resizable-panel-group",className:Fe("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",n),...r})}function sh({...n}){return i.jsx(Ux,{"data-slot":"resizable-panel",...n})}function YE({withHandle:n,className:r,...s}){return i.jsx(dy,{"data-slot":"resizable-handle",className:Fe("bg-gray-300 focus-visible:ring-gray-500 relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",r),...s,children:n&&i.jsx("div",{className:"bg-white z-10 flex h-6 w-3 items-center justify-center rounded-lg border border-gray-300 shadow-sm",children:i.jsx(d2,{className:"size-3 text-gray-500"})})})}const oh=({data:n,onFormSubmit:r,onComplete:s,onToggleSidebar:a,onBack:c,mode:d="simulator",interactiveMessages:p=[],onSendMessage:m,title:h,classificationType:v,chatId:y,onRenameChat:x,isNewChat:b=!1,isIncognito:S=!1,folders:N=[],onMoveToFolder:C,bookmarkedAssistants:k=[],assistantType:P})=>{const j=d==="interactive",[M,R]=f.useState([]),[I,W]=f.useState(0),[z,V]=f.useState(!1),[re,K]=f.useState(""),[de,ie]=f.useState(""),[me,ue]=f.useState([]),[fe,ee]=f.useState(!1),[Y,_]=f.useState(null),[H,J]=f.useState(!1),[A,U]=f.useState(""),[B,Q]=f.useState(!1),[oe,q]=f.useState(!1),[O,X]=f.useState(""),[le,he]=f.useState(!1),[Ee,Re]=f.useState(!1),[Z,je]=f.useState(!1),[Ge,pt]=f.useState(new Set),[vt,it]=f.useState({}),[dn,Vt]=f.useState(!1),[Xe,Ht]=f.useState(null),[ce,Je]=f.useState({}),et=f.useRef(null),qe=f.useRef(null);f.useEffect(()=>{et.current?.scrollIntoView({behavior:"smooth"})},[M,de,p]),f.useEffect(()=>{j||Y&&Y.interactive&&setTimeout(()=>{document.querySelectorAll("form").forEach(pe=>{pe.onsubmit=De=>{De.preventDefault();const ct=new FormData(pe),ps=Object.fromEntries(ct);Xn(ps,Y.title)}})},100)},[Y,j]),f.useEffect(()=>{j||n&&I>=n.messages.length&&!le&&(he(!0),s?.())},[I,n?.messages?.length,le,s,j]),f.useEffect(()=>{Y&&qe.current&&qe.current.scrollTo({top:0,behavior:"smooth"})},[Y]);const Xn=(G,pe)=>{_(null),R(De=>[...De,{role:"user",text:"Form submitted ✓"}]),r?r(G,pe):setTimeout(async()=>{ee(!0),await Zt(1333),ee(!1),R(De=>[...De,{type:"text",content:"Thank you for submitting the form! I've received your information and will process it accordingly."}]),W(De=>De+1)},333)},un=G=>{if(!n||I>=n.messages.length)return;const pe=n.messages[I];if(pe.role!=="user")return;const De=pe.content.text;V(!1),R(ct=>[...ct,{role:"user",text:De}]),K(""),W(ct=>ct+1)},ur=()=>{if(j||!n||I>=n.messages.length)return;const G=n.messages[I];if(G.role==="user")return G.content.text};f.useEffect(()=>{if(j||!n||I>=n.messages.length)return;const G=n.messages[I];if(G.role==="user"){const pe=G.content;pe.autoSend&&pe.text?setTimeout(()=>{R(De=>[...De,{role:"user",text:pe.text}]),W(De=>De+1)},500):pe.formSubmission?W(De=>De+1):V(!0)}else{const pe=G.content;_n(pe)}},[I,j,n]);const _n=async G=>{ee(!0),await Zt(1e3),ee(!1);for(const pe of G)pe.type==="thinking"?await Dn(pe):pe.type==="assistantSwitch"?(Re(!0),await Zt(1333),Re(!1),R(De=>[...De,{type:"assistantSwitch",message:pe.message}]),await Zt(333)):pe.type==="text"?(await Zt(pe.delayMs?pe.delayMs/1.5:667),R(De=>[...De,{type:"text",content:pe.content}])):pe.type==="artifact"&&(await Zt(pe.delayMs?pe.delayMs/1.5:667),R(De=>[...De,{type:"artifact",data:pe}]),_(pe),je(!0));W(pe=>pe+1)},Dn=async G=>{const pe=(G.timingMs||1500)/1.5,De=G.reasoning||[];for(let ct=0;ct<De.length;ct++)ue(ps=>[...ps,De[ct]]),await Zt(pe/De.length);G.thought&&(ie(G.thought),await Zt(500)),R(ct=>[...ct,{type:"thinking",thought:G.thought||"",reasoning:De}]),ie(""),ue([])},Zt=G=>new Promise(pe=>setTimeout(pe,G)),xe=G=>{switch(G.toLowerCase()){case"document":return i.jsx(xn,{className:"w-5 h-5"});case"code":return i.jsx(qw,{className:"w-5 h-5"});case"chart":return i.jsx($a,{className:"w-5 h-5"});case"form":return i.jsx(Vw,{className:"w-5 h-5"});default:return i.jsx(xn,{className:"w-5 h-5"})}},Pe=G=>{pt(pe=>{const De=new Set(pe);return De.has(G)?De.delete(G):De.add(G),De})},_e=async()=>{if(Y){const G=document.createElement("div");G.innerHTML=Y.content;const pe=G.textContent||G.innerText||"";await navigator.clipboard.writeText(pe),Vt(!0),setTimeout(()=>Vt(!1),2e3)}},Ke=async(G,pe)=>{await navigator.clipboard.writeText(pe),Ht(G),setTimeout(()=>Ht(null),2e3)},Ue=(G,pe)=>{Je(De=>({...De,[G]:De[G]===pe?null:pe}))},Nt=()=>{if(Y){const G=`
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
      `,pe=new Blob([G],{type:"application/msword"}),De=URL.createObjectURL(pe),ct=document.createElement("a");ct.href=De,ct.download=`${Y.title.replace(/\s+/g,"_")}.doc`,document.body.appendChild(ct),ct.click(),document.body.removeChild(ct),URL.revokeObjectURL(De)}},_t=()=>Y&&vt[Y.title]||1,en=()=>{Y&&_t()>1&&it(G=>({...G,[Y.title]:(G[Y.title]||1)-1}))},wt=()=>{if(Y){const G=_t();G<3&&it(pe=>({...pe,[Y.title]:G+1}))}};return i.jsxs(KE,{direction:"horizontal",className:"h-full bg-gray-50",children:[i.jsx(sh,{defaultSize:Z?50:100,minSize:30,children:i.jsxs("div",{className:"flex-1 flex flex-col h-full",children:[i.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200",children:[i.jsxs("div",{className:`flex items-center gap-3 flex-1 ${S?"justify-center":""}`,children:[S?i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(vu,{className:"w-4 h-4 text-gray-600"}),i.jsx("span",{className:"text-sm font-medium text-gray-900",children:"Incognito chat"})]}):H&&j?i.jsx("input",{type:"text",value:A,onChange:G=>U(G.target.value),onBlur:()=>{A.trim()&&y&&x&&x(y,A.trim()),J(!1)},onKeyDown:G=>{G.key==="Enter"?(A.trim()&&y&&x&&x(y,A.trim()),J(!1)):G.key==="Escape"&&J(!1)},className:"text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400",autoFocus:!0}):i.jsx("div",{className:"flex items-center gap-2 group/title",children:i.jsx("span",{className:"text-sm font-medium text-gray-900 cursor-pointer",onDoubleClick:()=>{j&&x&&(U(h||"New Chat"),J(!0))},title:"Double-click to rename",children:j?h||"New Chat":n?.title})}),j?v&&i.jsx("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300",children:v==="cce-sn"?"C(CE) + SN":v==="cce-sh"?"C(CE) + SH":"RSN"}):n?.classificationType&&i.jsx("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300",children:n.classificationType==="cce-sn"?"C(CE) + SN":n.classificationType==="cce-sh"?"C(CE) + SH":"RSN"})]}),i.jsxs("div",{className:"flex items-center gap-1",children:[j&&b&&p.length===0&&i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>Q(!B),className:`p-1.5 rounded-lg transition-colors ${B?"bg-gray-100 text-gray-900":"text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`,children:i.jsx(rg,{className:"w-4 h-4"})})}),i.jsx(ot,{children:i.jsx("p",{children:B?"Temporary chat enabled - no memory, not saved":"Enable temporary chat"})})]})}),B&&p.length>0&&i.jsxs("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg flex items-center gap-1",children:[i.jsx(rg,{className:"w-3 h-3"}),"Temporary"]}),j&&!b&&y&&!S&&i.jsxs(Un,{children:[i.jsx(Gn,{asChild:!0,children:i.jsx("button",{className:"p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700",children:i.jsx(ss,{className:"w-5 h-5"})})}),i.jsx(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:!S&&v!=="cce-sn"&&v!=="cce-sh"&&i.jsxs($j,{children:[i.jsxs(Hj,{className:"hover:bg-gray-100",children:[i.jsx(uh,{className:"w-4 h-4 mr-2"}),"Move to folder"]}),i.jsx(Bj,{className:"bg-white border-2 border-gray-900 rounded-lg",children:N.length===0?i.jsx(yt,{disabled:!0,className:"text-gray-400 text-sm",children:"No folders available"}):N.map(G=>i.jsx(yt,{onClick:()=>C?.(y,G.id),className:"hover:bg-gray-100",children:G.name},G.id))})]})})]}),!Z&&i.jsx(bt,{children:i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>je(!0),className:"text-gray-700 hover:text-gray-900 rounded-lg p-1 transition-colors",children:i.jsx(xn,{className:"w-5 h-5"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Expand canvas"})})]})})]})]}),i.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-4 bg-gray-50",children:i.jsxs("div",{className:"max-w-chat mx-auto space-y-8",children:[j?p.map(G=>i.jsx("div",{className:"group",children:G.role==="user"?i.jsxs("div",{className:"flex justify-end items-start gap-2 ml-24 mb-12",children:[i.jsx("button",{onClick:()=>Ke(G.id,G.content),className:"opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded mt-1",title:"Copy message",children:Xe===G.id?i.jsx(Hn,{className:"w-4 h-4 text-green-600"}):i.jsx(Uo,{className:"w-4 h-4 text-gray-400"})}),i.jsx("div",{className:"bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl",style:{fontSize:"16px",lineHeight:"1.7"},children:G.content})]}):i.jsxs("div",{className:"flex flex-col gap-1 mb-2",children:[i.jsx("div",{className:"w-full whitespace-pre-wrap text-gray-900",style:{fontSize:"16px",lineHeight:"1.7"},children:G.content}),i.jsx("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:i.jsxs(bt,{children:[i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>Ke(G.id,G.content),className:"p-1.5 hover:bg-gray-100 rounded",children:Xe===G.id?i.jsx(Hn,{className:"w-4 h-4 text-green-600"}):i.jsx(Uo,{className:"w-4 h-4 text-gray-400"})})}),i.jsx(ot,{children:i.jsx("p",{children:Xe===G.id?"Copied":"Copy"})})]}),i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>Ue(G.id,"up"),className:`p-1.5 hover:bg-gray-100 rounded ${ce[G.id]==="up"?"text-green-600":"text-gray-400"}`,children:i.jsx(cg,{className:"w-4 h-4"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Good response"})})]}),i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>Ue(G.id,"down"),className:`p-1.5 hover:bg-gray-100 rounded ${ce[G.id]==="down"?"text-red-600":"text-gray-400"}`,children:i.jsx(lg,{className:"w-4 h-4"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Bad response"})})]})]})})]})},G.id)):M.map((G,pe)=>i.jsxs("div",{className:"group",children:[G.role==="user"&&i.jsxs("div",{className:"flex justify-end items-start gap-2 ml-24 mb-12",children:[i.jsx("button",{onClick:()=>Ke(`sim-${pe}`,G.text),className:"opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded mt-1",title:"Copy message",children:Xe===`sim-${pe}`?i.jsx(Hn,{className:"w-4 h-4 text-green-600"}):i.jsx(Uo,{className:"w-4 h-4 text-gray-400"})}),i.jsx("div",{className:"bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl",style:{fontSize:"16px",lineHeight:"1.7"},children:G.text})]}),G.type==="thinking"&&i.jsxs("div",{className:"flex flex-col gap-1 mb-4 p-3 bg-white rounded-lg border border-gray-200",children:[i.jsxs("button",{onClick:()=>Pe(pe),className:"flex items-center justify-between w-full text-left hover:opacity-80 transition-opacity",children:[i.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Reasoning"}),i.jsx("div",{className:"text-gray-600",children:Ge.has(pe)?i.jsx(Ks,{className:"w-4 h-4"}):i.jsx(Ys,{className:"w-4 h-4"})})]}),Ge.has(pe)&&G.reasoning&&i.jsx("div",{className:"mt-2 space-y-2",children:G.reasoning.map((De,ct)=>i.jsxs("div",{className:"flex items-start gap-2 text-sm text-gray-600",children:[i.jsxs("span",{className:"text-gray-400 font-mono text-xs mt-0.5",children:[ct+1,"."]}),i.jsx("span",{children:De})]},ct))})]}),G.type==="assistantSwitch"&&i.jsx("div",{className:"flex justify-center",children:i.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300",children:[i.jsx("span",{className:"text-gray-500",children:"Switched to"}),i.jsx("svg",{className:"w-4 h-4 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),i.jsx("span",{className:"font-semibold text-gray-900",children:G.message})]})}),G.type==="text"&&i.jsxs("div",{className:"flex flex-col gap-1 mb-2",children:[i.jsx("div",{className:"w-full whitespace-pre-wrap text-gray-900",style:{fontSize:"16px",lineHeight:"1.7"},children:G.content}),i.jsx("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:i.jsxs(bt,{children:[i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>Ke(`sim-text-${pe}`,G.content),className:"p-1.5 hover:bg-gray-100 rounded",children:Xe===`sim-text-${pe}`?i.jsx(Hn,{className:"w-4 h-4 text-green-600"}):i.jsx(Uo,{className:"w-4 h-4 text-gray-400"})})}),i.jsx(ot,{children:i.jsx("p",{children:Xe===`sim-text-${pe}`?"Copied":"Copy"})})]}),i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>Ue(`sim-text-${pe}`,"up"),className:`p-1.5 hover:bg-gray-100 rounded ${ce[`sim-text-${pe}`]==="up"?"text-green-600":"text-gray-400"}`,children:i.jsx(cg,{className:"w-4 h-4"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Good response"})})]}),i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx("button",{onClick:()=>Ue(`sim-text-${pe}`,"down"),className:`p-1.5 hover:bg-gray-100 rounded ${ce[`sim-text-${pe}`]==="down"?"text-red-600":"text-gray-400"}`,children:i.jsx(lg,{className:"w-4 h-4"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Bad response"})})]})]})})]}),G.type==="artifact"&&i.jsx("div",{children:i.jsx("button",{onClick:()=>{_(G.data),je(!0)},className:"inline-flex bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 hover:border-gray-400 transition-colors text-left",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"text-gray-500",children:xe(G.data.fileType)}),i.jsxs("div",{children:[i.jsx("div",{className:"font-medium text-gray-900 text-sm",children:G.data.title}),i.jsx("div",{className:"text-xs text-gray-500 mt-0.5",children:G.data.description})]})]})})})]},pe)),!j&&i.jsxs(i.Fragment,{children:[(de||me.length>0)&&i.jsxs("div",{className:"flex flex-col gap-1 mb-4 p-3 bg-white rounded-lg border border-gray-200",children:[i.jsxs("button",{onClick:()=>pt(G=>{const pe=new Set(G);return pe.has(-1)?pe.delete(-1):pe.add(-1),pe}),className:"flex items-center justify-between w-full text-left hover:opacity-80 transition-opacity",children:[i.jsx("span",{className:"text-sm font-medium text-gray-600",children:me.length>0?me[me.length-1]:de||"Processing..."}),i.jsx("div",{className:"text-gray-600",children:Ge.has(-1)?i.jsx(Ks,{className:"w-4 h-4"}):i.jsx(Ys,{className:"w-4 h-4"})})]}),Ge.has(-1)&&me.length>0&&i.jsx("div",{className:"mt-2 space-y-2",children:me.map((G,pe)=>i.jsxs("div",{className:"flex items-start gap-2 text-sm text-gray-600",children:[i.jsxs("span",{className:"text-gray-400 font-mono text-xs mt-0.5",children:[pe+1,"."]}),i.jsx("span",{className:pe===me.length-1?"shimmer-text":"",children:G})]},pe))})]}),Ee&&i.jsx("div",{className:"flex justify-center",children:i.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300",children:[i.jsx("svg",{className:"w-4 h-4 animate-spin",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),i.jsx("span",{children:"Searching assistants..."})]})}),fe&&i.jsx("div",{className:"flex justify-start",children:i.jsxs("div",{className:"max-w-[80%] space-y-3 py-3",children:[i.jsx("div",{className:"h-4 bg-gray-100 rounded animate-pulse w-3/4"}),i.jsx("div",{className:"h-4 bg-gray-100 rounded animate-pulse w-full"}),i.jsx("div",{className:"h-4 bg-gray-100 rounded animate-pulse w-5/6"})]})})]}),i.jsx("div",{ref:et})]})}),i.jsx("div",{className:"px-6 py-4 bg-gray-50",children:i.jsxs("div",{className:"max-w-chat mx-auto",children:[j?i.jsx(hu,{onSend:G=>m?.(G),autoFocus:!0,bookmarkedAssistants:k,assistantType:P}):i.jsx(hu,{onSend:un,value:re,onChange:K,autoTypeText:ur(),disabled:!z,assistantType:P}),(j&&p.length>0||!j&&M.length>0)&&i.jsx("p",{className:"text-xs text-gray-400 mt-3 text-center",children:"AI can make mistakes. Check important info."})]})})]})}),Z&&i.jsxs(i.Fragment,{children:[i.jsx(YE,{withHandle:!0,className:"bg-gray-100 hover:bg-gray-100 transition-colors"}),i.jsx(sh,{defaultSize:50,minSize:20,children:i.jsxs("div",{className:"flex flex-col h-full bg-white",children:[i.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-white h-[52px]",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[Y&&i.jsx("button",{onClick:()=>_(null),className:"mr-2 flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors",children:i.jsx(Zo,{className:"w-4 h-4"})}),oe&&Y?i.jsx("input",{type:"text",value:O,onChange:G=>X(G.target.value),onBlur:()=>{q(!1)},onKeyDown:G=>{(G.key==="Enter"||G.key==="Escape")&&q(!1)},className:"text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400",autoFocus:!0}):i.jsx("h2",{className:"text-sm font-semibold text-gray-900 cursor-pointer",onDoubleClick:()=>{Y&&(X(Y.title),q(!0))},title:Y?"Double-click to rename":void 0,children:Y?Y.title:"Canvas"})]}),i.jsxs("div",{className:"flex items-center gap-1",children:[Y&&i.jsx(bt,{children:i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx(Oe,{variant:"ghost",size:"sm",onClick:_e,className:"h-8 w-8 p-0",children:dn?i.jsx(Hn,{className:"w-4 h-4 text-green-600"}):i.jsx(Uo,{className:"w-4 h-4"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Copy content"})})]}),i.jsx("div",{className:"h-5 w-px bg-gray-100 mx-1"}),i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx(Oe,{variant:"ghost",size:"sm",onClick:en,disabled:_t()<=1,className:"h-8 w-8 p-0",children:i.jsx(Q2,{className:"w-4 h-4"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Undo"})})]}),i.jsxs(rt,{children:[i.jsx(st,{asChild:!0,children:i.jsx(Oe,{variant:"ghost",size:"sm",onClick:wt,disabled:_t()>=3,className:"h-8 w-8 p-0",children:i.jsx(A2,{className:"w-4 h-4"})})}),i.jsx(ot,{children:i.jsx("p",{children:"Redo"})})]}),i.jsx("div",{className:"h-5 w-px bg-gray-100 mx-1"}),i.jsxs(Oe,{variant:"outline",size:"sm",onClick:Nt,className:"h-8 px-3 gap-2 border-gray-300",children:[i.jsx(e2,{className:"w-4 h-4"}),i.jsx("span",{className:"text-xs",children:"Download as .docx"})]})]})}),i.jsx("button",{onClick:()=>je(!1),className:"text-gray-500 hover:text-gray-900 transition-colors ml-2",children:i.jsx(Xs,{className:"w-5 h-5"})})]})]}),i.jsx("div",{className:"flex-1 overflow-auto",ref:qe,children:j?i.jsx("div",{className:"h-full flex items-center justify-center",children:i.jsxs("div",{className:"text-center py-12 text-gray-500",children:[i.jsx(xn,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),i.jsx("p",{className:"text-sm",children:"No output canvas generated yet"}),i.jsx("p",{className:"text-xs mt-1",children:"Canvases created during the chat will appear here"})]})}):Y?i.jsx("div",{className:"h-full bg-white",children:i.jsxs("div",{className:"p-8 max-w-4xl mx-auto",children:[i.jsxs("div",{className:"mb-6 flex items-start gap-3",children:[i.jsx("div",{className:"text-gray-700 mt-1",children:xe(Y.fileType)}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-semibold text-gray-900 mb-1",children:Y.title}),i.jsx("p",{className:"text-xs text-gray-500",children:Y.description})]})]}),i.jsx("div",{className:"prose prose-sm max-w-none prose-lofi",dangerouslySetInnerHTML:{__html:Y.content}})]})}):i.jsx("div",{className:"h-full p-4",children:i.jsxs("div",{className:"mb-4",children:[i.jsx("h3",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",children:"List of Canvas"}),M.filter(G=>G.type==="artifact").length>0?i.jsx("div",{className:"space-y-2",children:M.filter(G=>G.type==="artifact").map((G,pe)=>i.jsxs("button",{onClick:()=>_(G.data),className:"w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-300 hover:border-gray-900 hover:shadow-sm transition-all text-left",children:[i.jsx("div",{className:"p-2 rounded-lg bg-gray-100 text-gray-700",children:xe(G.data.fileType)}),i.jsxs("div",{className:"flex-1",children:[i.jsx("div",{className:"text-sm font-medium text-gray-900",children:G.data.title}),i.jsx("div",{className:"text-xs text-gray-500 mt-0.5 line-clamp-1",children:G.data.description})]}),i.jsx("div",{className:"text-gray-500",children:i.jsx(Zo,{className:"w-4 h-4 rotate-180"})})]},pe))}):i.jsxs("div",{className:"text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300",children:[i.jsx(xn,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),i.jsx("p",{className:"text-sm",children:"No output canvas generated yet"}),i.jsx("p",{className:"text-xs mt-1",children:"Canvases created during the chat will appear here"})]})]})})})]})})]})]})};function XE({folder:n,chats:r,onBack:s,onSelectChat:a,onDeleteFolder:c,onRemoveChatFromFolder:d,onStartNewChatInFolder:p,onUpdateFolder:m}){const[h,v]=f.useState(!1),[y,x]=f.useState(n.name),[b,S]=f.useState(n.customInstructions||""),[N,C]=f.useState(n.memoriesScope),k=r.filter(R=>n.chatIds.includes(R.id)),P=()=>{m&&m(n.id,{name:y.trim()||n.name,customInstructions:b.trim(),memoriesScope:N}),v(!1)},j=()=>{const R={id:Date.now().toString(),name:"document.pdf",size:102400,uploadedAt:new Date};m&&m(n.id,{files:[...n.files||[],R]})},M=R=>{m&&m(n.id,{files:(n.files||[]).filter(I=>I.id!==R)})};return i.jsxs("div",{className:"flex-1 flex flex-col bg-gray-100",children:[i.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200",children:[i.jsx("button",{onClick:s,className:"p-1 rounded-lg hover:bg-gray-200 transition-colors text-gray-600",children:i.jsx(Zo,{className:"w-5 h-5"})}),i.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[i.jsx(Xd,{className:"w-5 h-5 text-gray-600"}),i.jsx("h1",{className:"font-semibold text-gray-900",style:{fontSize:"18px"},children:n.name})]}),i.jsxs(Oe,{variant:"ghost",size:"sm",onClick:()=>p?.(n.id),className:"gap-2",children:[i.jsx(Xo,{className:"w-4 h-4"}),"New Chat"]}),i.jsxs(Un,{children:[i.jsx(Gn,{asChild:!0,children:i.jsx(Oe,{variant:"ghost",size:"sm",children:i.jsx(ss,{className:"w-4 h-4"})})}),i.jsxs(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:[i.jsxs(yt,{onClick:()=>v(!0),className:"hover:bg-gray-100",children:[i.jsx(Zd,{className:"w-4 h-4 mr-1"}),"Settings"]}),i.jsxs(yt,{onClick:()=>c(n.id),className:"text-red-500 hover:bg-gray-100",children:[i.jsx(os,{className:"w-4 h-4 mr-1"}),"Delete Folder"]})]})]})]}),i.jsxs("div",{className:"flex-1 overflow-auto flex",children:[i.jsx("div",{className:"flex-1 px-4 py-8",children:i.jsxs("div",{className:"max-w-3xl mx-auto space-y-4",children:[i.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6",children:i.jsx("p",{className:"text-sm text-gray-700",children:"Chats within this folder will only reference files, custom instructions, and memories from within this folder."})}),k.length>0?k.map(R=>i.jsxs("div",{onClick:()=>a(R.id),className:"group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0",children:i.jsx(Bs,{className:"w-5 h-5 text-gray-600"})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:R.title}),i.jsx("p",{className:"text-sm text-gray-500 truncate",children:R.messages.length>0?R.messages[R.messages.length-1].content.slice(0,60)+"...":"No messages yet"})]}),i.jsxs(Un,{children:[i.jsx(Gn,{asChild:!0,children:i.jsx(Oe,{variant:"ghost",size:"sm",className:"opacity-0 group-hover:opacity-100 h-8 w-8 p-0",onClick:I=>I.stopPropagation(),children:i.jsx(ss,{className:"w-4 h-4"})})}),i.jsx(Qn,{align:"end",className:"bg-white border-2 border-gray-900 rounded-lg",children:i.jsxs(yt,{onClick:I=>{I.stopPropagation(),d(n.id,R.id)},className:"hover:bg-gray-100",children:[i.jsx(os,{className:"w-4 h-4 mr-1"}),"Remove from folder"]})})]})]},R.id)):i.jsxs("div",{className:"text-center py-12",children:[i.jsx(Xd,{className:"w-12 h-12 text-gray-300 mx-auto mb-4"}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"This folder is empty"}),i.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"Start a new chat or drag existing chats here to organize them"}),i.jsxs(Oe,{onClick:()=>p?.(n.id),className:"gap-2",children:[i.jsx(Xo,{className:"w-4 h-4"}),"Start New Chat"]})]})]})}),i.jsxs("div",{className:"w-80 border-l border-gray-200 bg-white px-4 py-8 space-y-6 overflow-y-auto",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h3",{className:"text-sm font-semibold text-gray-900",children:"Custom instructions"}),i.jsx("button",{onClick:()=>v(!0),className:"text-xs text-gray-600 hover:text-gray-900 underline",children:"Edit"})]}),n.customInstructions?i.jsx("button",{onClick:()=>v(!0),className:"w-full text-left text-sm text-gray-700 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors",children:i.jsx("div",{className:"line-clamp-3",children:n.customInstructions})}):i.jsx("button",{onClick:()=>v(!0),className:"w-full text-left text-sm text-gray-500 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors",children:"No custom instructions set. Click to add."})]}),i.jsx(ns,{}),i.jsxs("div",{className:"space-y-2",children:[i.jsx("h3",{className:"text-sm font-semibold text-gray-900",children:"Files"}),i.jsxs("div",{className:"space-y-2",children:[(n.files||[]).length>0?(n.files||[]).map(R=>i.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded-lg group",children:[i.jsx(xn,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),i.jsx("span",{className:"text-sm text-gray-700 flex-1 truncate",children:R.name}),i.jsx("button",{onClick:()=>M(R.id),className:"p-1 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity",children:i.jsx(Xs,{className:"w-3 h-3 text-gray-500"})})]},R.id)):i.jsx("p",{className:"text-sm text-gray-500 text-center py-4",children:"No files uploaded"}),i.jsxs(Oe,{variant:"outline",size:"sm",className:"w-full gap-2 mt-2",onClick:j,children:[i.jsx(qa,{className:"w-4 h-4"}),"Upload File"]})]})]})]})]}),i.jsx(Pl,{open:h,onOpenChange:v,children:i.jsxs(El,{className:"sm:max-w-lg bg-white border-2 border-gray-900",children:[i.jsx(oi,{children:i.jsx(ii,{className:"text-gray-900",children:"Folder Settings"})}),i.jsxs("div",{className:"space-y-6 py-4",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"folder-name",className:"text-gray-700",children:"Folder Name"}),i.jsx(Ft,{id:"folder-name",value:y,onChange:R=>x(R.target.value),className:"bg-white border-gray-300"})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{htmlFor:"custom-instructions",className:"text-gray-700",children:"Custom Instructions"}),i.jsx(wi,{id:"custom-instructions",placeholder:"Add custom instructions for chats in this folder...",value:b,onChange:R=>S(R.target.value),className:"bg-white border-gray-300 min-h-[100px]"}),i.jsx("p",{className:"text-xs text-gray-500",children:"These instructions will apply to all chats within this folder."})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{className:"text-gray-700",children:"Files"}),i.jsxs("div",{className:"border border-gray-200 rounded-lg p-3 space-y-2",children:[(n.files||[]).length>0?(n.files||[]).map(R=>i.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded",children:[i.jsx(xn,{className:"w-4 h-4 text-gray-500"}),i.jsx("span",{className:"text-sm text-gray-700 flex-1 truncate",children:R.name}),i.jsx("button",{onClick:()=>M(R.id),className:"p-1 hover:bg-gray-200 rounded",children:i.jsx(Xs,{className:"w-3 h-3 text-gray-500"})})]},R.id)):i.jsx("p",{className:"text-sm text-gray-500 text-center py-2",children:"No files uploaded"}),i.jsxs(Oe,{variant:"outline",size:"sm",className:"w-full gap-2",onClick:j,children:[i.jsx(qa,{className:"w-4 h-4"}),"Upload File"]})]}),i.jsx("p",{className:"text-xs text-gray-500",children:"Files uploaded here will be referenced by chats in this folder."})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(lt,{className:"text-gray-700",children:"Memories Scope"}),i.jsxs("div",{className:"space-y-2",children:[i.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",children:[i.jsx("input",{type:"radio",name:"memories-scope",checked:N==="folder-only",onChange:()=>C("folder-only"),className:"mt-0.5"}),i.jsxs("div",{children:[i.jsx("div",{className:"text-sm font-medium text-gray-900",children:"Folder only"}),i.jsx("div",{className:"text-xs text-gray-500",children:"Chats will only reference files and memories from within this folder"})]})]}),i.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",children:[i.jsx("input",{type:"radio",name:"memories-scope",checked:N==="include-external",onChange:()=>C("include-external"),className:"mt-0.5"}),i.jsxs("div",{children:[i.jsx("div",{className:"text-sm font-medium text-gray-900",children:"Include external"}),i.jsx("div",{className:"text-xs text-gray-500",children:"Chats can also reference memories and files from outside this folder"})]})]})]})]})]}),i.jsxs(Bv,{children:[i.jsx(Oe,{variant:"outline",onClick:()=>v(!1),children:"Cancel"}),i.jsx(Oe,{onClick:P,children:"Save Changes"})]})]})})]})}const Fa=[{target:'[data-tour="new-chat"]',title:"Start a New Chat",content:"Click here to start a fresh conversation with your personal assistant.",position:"right"},{target:'[data-tour="custom-assistants"]',title:"Custom Assistants",content:"Access specialised assistants tailored for specific tasks like PQ responses, procurement, and HR recruitment.",position:"right"},{target:'[data-tour="folders"]',title:"Organize with Folders",content:"Create folders to organize your chats by project or topic.",position:"right"},{target:'[data-tour="recent-chats"]',title:"Recent Chats",content:"Quickly access your chat history and continue where you left off.",position:"right"},{target:'[data-tour="chat-interface"]',title:"Chat Interface",content:"This is where you interact with your personal assistant — ask questions, upload files, and use tools.",position:"left"},{target:'[data-tour="settings"]',title:"Access Walkthrough Anytime",content:'You can access this walkthrough tour anytime by clicking the settings icon and selecting "Walkthrough Tour".',position:"top"}];function JE({isOpen:n,onClose:r}){const[s,a]=f.useState(0),[c,d]=f.useState(null),[p,m]=f.useState({top:0,left:0}),h=()=>{localStorage.setItem("hasSeenWalkthrough","true"),r()};if(f.useEffect(()=>{if(!n){a(0);return}const N=Fa[s],C=document.querySelector(N.target);if(C){d(C);const k=C.getBoundingClientRect();let P=0,j=0;switch(N.position){case"right":P=k.top+k.height/2-80,j=k.right+20;break;case"left":P=k.top+k.height/2-80,j=k.left-320-20;break;case"top":P=k.top-250,j=k.left+k.width/2-160;break;case"bottom":P=k.bottom+20,j=k.left+k.width/2-160;break}m({top:P,left:j}),C.scrollIntoView({behavior:"smooth",block:"center"})}},[s,n]),!n)return null;const v=Fa[s],y=s===0,x=s===Fa.length-1,b=()=>{x?h():a(s+1)},S=()=>{y||a(s-1)};return i.jsxs(i.Fragment,{children:[c&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"fixed inset-0 z-[9998]",onClick:h}),i.jsx("div",{className:"fixed z-[9999] pointer-events-none",style:{top:c.getBoundingClientRect().top-4,left:c.getBoundingClientRect().left-4,width:c.getBoundingClientRect().width+8,height:c.getBoundingClientRect().height+8,border:"3px solid white",borderRadius:"8px",boxShadow:"0 0 0 9999px rgba(0, 0, 0, 0.6)"}})]}),i.jsxs("div",{className:"fixed z-[10000] bg-white border-2 border-gray-900 rounded-lg shadow-xl p-6 w-80",style:{top:p.top,left:p.left},children:[i.jsxs("div",{className:"flex items-start justify-between mb-3",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:["Step ",s+1," of ",Fa.length]}),i.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:v.title})]}),i.jsx("button",{onClick:h,className:"p-1 rounded-lg hover:bg-gray-100 transition-colors",children:i.jsx(Xs,{className:"w-4 h-4 text-gray-500"})})]}),i.jsx("p",{className:"text-sm text-gray-700 mb-6",children:v.content}),i.jsxs("div",{className:"flex items-center justify-end gap-2",children:[!y&&i.jsxs(Oe,{variant:"ghost",size:"sm",onClick:S,className:"gap-1",children:[i.jsx(Lw,{className:"w-4 h-4"}),"Previous"]}),i.jsxs(Oe,{size:"sm",onClick:b,className:"bg-gray-900 hover:bg-gray-800 text-white gap-1",children:[x?"Finish":"Next",!x&&i.jsx(Ys,{className:"w-4 h-4"})]})]})]})]})}const ZE={id:"feature-overview",title:"Feature Overview Demo",description:"Showcasing platform capabilities and documentation",colorScheme:"indigo",messages:[{role:"user",content:{text:"What are the latest features in the platform?"}},{role:"bot",content:[{type:"thinking",thoughts:["Analyzing your question...","Checking latest updates...","Preparing comprehensive overview..."],timingMs:1500},{type:"text",content:"I'll provide you with an overview of our latest features. Let me gather the most up-to-date information for you."},{type:"assistantSwitch",message:"Documentation Assistant"},{type:"text",content:`Here's a detailed breakdown of our new capabilities:

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
</div>`}]}]},eR={id:"customer-support",title:"Customer Support Demo",description:"Handling customer inquiries and troubleshooting",colorScheme:"indigo",messages:[{role:"bot",content:[{type:"text",content:"Hello! I'm your Customer Support Assistant. I'm here to help you with any issues or questions you may have. How can I assist you today?"}]},{role:"user",content:{text:"I'm having trouble logging into my account"}},{role:"bot",content:[{type:"thinking",thoughts:["Identifying the issue...","Checking common login problems...","Preparing troubleshooting steps..."],timingMs:1500},{type:"text",content:"I understand you're having trouble logging in. Let me help you resolve this quickly."},{type:"text",content:`Here are some common solutions:

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
</div>`}]}]},tR={id:"feedback-collection",title:"Feedback Collection Demo",description:"Gathering user feedback and suggestions",colorScheme:"indigo",messages:[{role:"user",content:{text:"I'd like to provide feedback about the platform"}},{role:"bot",content:[{type:"thinking",thoughts:["Great! Preparing feedback form...","Setting up survey questions..."],timingMs:1200},{type:"text",content:"Thank you for wanting to share your feedback! Your input is invaluable in helping us improve our platform. Please take a moment to fill out this survey."},{type:"artifact",title:"User Feedback Survey",fileType:"form",description:"Share your experience and suggestions",interactive:!0,content:`<div class="p-6">
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
</div>`}]}]},nR={id:"hr-candidate-shortlisting",title:"HR Candidate Shortlisting Demo",description:"AI-assisted candidate screening and shortlisting for government recruitment with system integrations",colorScheme:"indigo",messages:[{role:"bot",content:[{type:"text",content:"Hello! I'm the Workday Candidate Shortlister Assistant. I can help you efficiently screen and shortlist candidates from your Workday HCM system using AI-powered analysis. What can I do for you today?"}]},{role:"user",content:{text:"Hi! I just received 127 applications for our Senior Software Engineer position (Req ID: GTA-2024-SE-089). I need to shortlist about 10 candidates by end of day tomorrow. Can you help me get started?"}},{role:"bot",content:[{type:"thinking",thoughts:["Analyzing job requisition GTA-2024-SE-089...","Connecting to Workday HCM system...","Retrieving candidate applications...","Preparing shortlisting workflow..."],timingMs:1e3},{type:"text",content:"Good morning, Michelle! I'd be happy to help you with this shortlisting. Let me pull up the candidate data from Workday."},{type:"artifact",title:"Workday System Integration - Data Retrieval",fileType:"document",description:"Connecting to Workday HCM to retrieve candidate profiles",interactive:!1,content:`<div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-300">
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
</div>`},{type:"text",content:"Have a productive day! 🎯",delayMs:800}]}]},rR={id:"procurement-rfq",title:"Procurement RFQ to AOR Demo",description:"Request for Quotation process leading to Approval of Requirement",colorScheme:"indigo",messages:[{role:"user",content:{text:"I want to create a RFQ for buying creative software for my team",autoSend:!0}},{role:"bot",content:[{type:"thinking",thought:"Analyzing procurement request for creative software...",reasoning:["Understanding user's request to create RFQ for creative software...","Identifying procurement type: software licenses for team...","Loading relevant RFQ templates and government procurement guidelines...","Checking vendor database for qualified creative software suppliers...","Preparing standardized quotation request form...","Setting up compliance requirements and evaluation criteria..."],timingMs:3500},{type:"text",content:"I'll help you create a Request for Quotation (RFQ) for creative software. Let me prepare the RFQ form with the necessary details to obtain quotes from at least 3 vendors."},{type:"artifact",title:"Request for Quotation (RFQ) Form",fileType:"form",description:"RFQ for Creative Software Purchase",interactive:!0,content:`<div class="p-6">
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
• Current status: Pending Department Head review`}]}]},sR={id:"marketing-software-aor",title:"Marketing Software AOR Demo",description:"AI-assisted AOR drafting for marketing automation software procurement",colorScheme:"blue",messages:[{role:"user",content:{text:`I need help drafting an AOR (Approval of Requirement) to procure marketing software for my 15-person team. Our budget is $30,000-$35,000. We need software to create marketing materials for campaigns.

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
</div>`}]},{role:"user",content:{text:"This was so much easier than I expected. Thanks!"}},{role:"bot",content:[{type:"text",content:"You're welcome! Good luck with the approval - I'll be here if you need help with future procurements."}]}]},oR={id:"pq-response-mnd-v3",title:"PQ Response - MND Housing",description:"AI-assisted PQ response research and drafting for policy officer",colorScheme:"purple",messages:[{role:"bot",content:[{type:"text",content:`Good morning, Sarah! 👋

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

Feel free to come back if you need help with any revisions or have other PQs to work on. Good luck with the clearance process!`}]}]},iR={id:"pq-response-mnd-v2",title:"PQ Response - MND Housing (V2)",description:"Enhanced PQ response workflow with contextual assistance and form-based inputs",colorScheme:"purple",messages:[{role:"bot",content:[{type:"text",content:`Good morning! 👋

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

Feel free to come back anytime you need help with future PQs. Good luck! 😊`}]}]},aR={id:"canvas-demo",title:"Canvas Generation Demo",description:"Demonstrating canvas creation and versioning",colorScheme:"blue",classificationType:"rsn",messages:[{role:"user",content:{text:"Help me generate a 1 pager plan for launching a new government digital service",autoSend:!0}},{role:"bot",content:[{type:"thinking",thought:"Analyzing requirements for the 1-pager plan...",reasoning:["Analyzing the user's request and identifying key requirements...","Breaking down the components needed for a government digital service launch plan...","Considering stakeholder engagement, timeline, and governance requirements...","Structuring the plan into clear, actionable sections...","Calling Canvas tool to prepare document workspace...","Preparing to create a comprehensive yet concise 1-pager document..."],timingMs:4500},{type:"text",content:"I'll create a comprehensive 1-pager plan for your government digital service launch. This will include key sections covering objectives, timeline, stakeholders, and success metrics."},{type:"artifact",title:"Digital Service Launch Plan",fileType:"document",description:"1-pager plan for government digital service launch",interactive:!0,version:1,content:`<div class="p-6 space-y-4">
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
</div>`}]}]};function lR(){const[n,r]=f.useState(!1),[s,a]=f.useState(!1),[c,d]=f.useState({name:"John Doe",email:"john.doe@tech.gov.sg",role:"Product Manager",agency:"GovTech"}),[p,m]=f.useState([]),[h,v]=f.useState(null),[y,x]=f.useState(null),[b,S]=f.useState("new-rsn"),[N,C]=f.useState(!0),[k,P]=f.useState("light"),[j,M]=f.useState("modern"),[R,I]=f.useState("home"),[W,z]=f.useState("desk"),[V,re]=f.useState(!1),[K,de]=f.useState(0),[ie,me]=f.useState([]),[ue,fe]=f.useState(null),[ee,Y]=f.useState([]),[_,H]=f.useState([]),[J,A]=f.useState(!1),[U,B]=f.useState(!1),[Q,oe]=f.useState(()=>localStorage.getItem("hasSeenWalkthrough")==="true");f.useEffect(()=>{const xe=Pe=>{Pe.shiftKey&&Pe.metaKey&&Pe.key==="o"&&(Pe.preventDefault(),le()),Pe.metaKey&&Pe.key==="k"&&(Pe.preventDefault(),A(!0))};return window.addEventListener("keydown",xe),()=>window.removeEventListener("keydown",xe)},[]),f.useEffect(()=>{n&&window.history.pushState({authenticated:!0},"");const xe=()=>{r(!1),a(!1)};return window.addEventListener("popstate",xe),()=>window.removeEventListener("popstate",xe)},[n]);const q=y&&b===y.id?y:h&&b===h.id?h:b.startsWith("new-")?{id:b,title:b==="new-cce-sn"?"C(CE) Chat":b==="new-cce-sh"?"SH Chat":"New Chat",messages:[],createdAt:new Date,classificationType:b==="new-cce-sn"?"cce-sn":b==="new-cce-sh"?"cce-sh":"rsn"}:p.find(xe=>xe.id===b),O=N,X=async xe=>{if(!q)return;let Pe=p,_e=b;const Ke={id:Date.now().toString(),role:"user",content:xe,timestamp:new Date};if(y&&b===y.id)x({...y,messages:[...y.messages,Ke]});else if(b.startsWith("preview-")&&h){const Ue=Date.now().toString(),Nt={id:(Date.now()-1).toString(),role:"assistant",content:Z(h.assistantType||""),timestamp:new Date};Pe=[{...h,id:Ue,messages:[Nt,Ke],classificationType:"rsn"},...p],m(Pe),v(null),S(Ue),_e=Ue}else if(b.startsWith("new-")){const Ue=Date.now().toString(),Nt={...q,id:Ue,title:xe.slice(0,30),messages:[Ke],classificationType:q.classificationType};q.classificationType==="cce-sn"||q.classificationType==="cce-sh"?(x(Nt),_e=Ue,S(Ue)):(Pe=[Nt,...p],m(Pe),S(Ue),_e=Ue)}else Pe=p.map(Ue=>{if(Ue.id===b){const Nt=[...Ue.messages,Ke];return{...Ue,messages:Nt,title:Ue.messages.length===0?xe.slice(0,30):Ue.title}}return Ue}),m(Pe);setTimeout(()=>{const Ue=y&&_e===y.id?y:Pe.find(G=>G.id===_e);if(!Ue)return;let Nt=cR(xe,Ue.assistantType,c),_t=!1,en="";Ue.assistantType==="transcribe"&&xe.includes("[Uploaded file:")&&(Nt="I've transcribed your audio file and generated the meeting minutes.",_t=!0,en="Meeting_Minutes_"+new Date().toLocaleDateString().replace(/\//g,"-")+".doc");const wt={id:(Date.now()+1).toString(),role:"assistant",content:Nt,timestamp:new Date,hasFile:_t,fileName:en};y&&_e===y.id?x(G=>G&&{...G,messages:[...G.messages,wt]}):m(G=>G.map(pe=>pe.id===_e?{...pe,messages:[...pe.messages,wt]}:pe))},500)},le=()=>{v(null),x(null),S("new-rsn"),I("home"),de(xe=>xe+1)},he=(xe,Pe,_e)=>{if(xe.toLowerCase().includes("generate")){Xe("canvas-demo");return}const Ke=Date.now().toString(),Ue={id:Ke,role:"user",content:xe,timestamp:new Date},Nt={id:Ke,title:xe.slice(0,30),messages:[Ue],createdAt:new Date,classificationType:Pe||"rsn",isIncognito:_e||!1},_t=Pe==="cce-sn"||Pe==="cce-sh";if(_e||_t)x(Nt);else{const en=[Nt,...p];m(en)}S(Ke),I("chat"),setTimeout(()=>{const en={id:(Date.now()+1).toString(),role:"assistant",content:"This is a simulated response for demonstration purposes.",timestamp:new Date};_e||_t?x(wt=>wt&&wt.id===Ke?{...wt,messages:[...wt.messages,en]}:wt):m(wt=>wt.map(G=>G.id===Ke?{...G,messages:[...G.messages,en]}:G))},500)},Ee=()=>{S("new-cce-sn"),I("chat")},Re=()=>{S("new-cce-sh"),I("chat")},Z=xe=>({"email-drafter":"I'll help you draft professional emails. What kind of email would you like to write?",query:"Ask me anything! I can help you find information and answer your questions.",transcribe:"Upload an audio file to generate meeting minutes.","deep-research-ai":"I can conduct comprehensive research for you. What topic would you like me to explore?",powerpoint:"I can help you create icons and pictures for your PowerPoint slides. What would you like me to generate?",parliamentary:"I'll help you prepare PQ responses and talking points. What do you need assistance with?",memo:"I can draft inter-agency correspondence for whole-of-government initiatives. What memo do you need?","social-media-campaign":"I'll help you plan and optimize social media campaigns. What's your campaign about?","content-calendar":"I can help you organize and schedule content across channels. What's your timeline?","brand-guidelines":"I'll ensure your content aligns with government branding standards. What do you need to review?","market-research":"I can analyze market trends and public sentiment. What would you like to research?","interview-questions":"I'll generate relevant interview questions. What position are you hiring for?","onboarding-guide":"I can create personalized onboarding plans. Tell me about your new hire.","performance-review":"I'll help you draft performance reviews and development plans. Who are you reviewing?",budget:"I can help with budget allocations and financial reports. What's your budget planning needs?",policy:"I'll help you draft policy papers and cabinet memos. What policy document do you need?",procurement:"I can generate tender documents and evaluation matrices. What procurement need do you have?"})[xe]||"Hello! How can I assist you today?",je=(xe,Pe)=>{if(Pe==="workday-shortlister"){Xe("hr-candidate-shortlisting");return}if(Pe==="parliamentary-question"){Xe("pq-response-mnd");return}const _e=`preview-${Date.now()}`;v({id:_e,title:xe,messages:[],createdAt:new Date,assistantType:Pe}),S(_e),I("chat")},Ge=xe=>{const Pe=p.filter(_e=>_e.id!==xe);m(Pe),me(ie.map(_e=>({..._e,chatIds:_e.chatIds.filter(Ke=>Ke!==xe)}))),b===xe&&(Pe.length>0?S(Pe[0].id):le())},pt=(xe,Pe)=>{m(p.map(_e=>_e.id===xe?{..._e,title:Pe}:_e))},vt=xe=>{v(null),x(null),S(xe),I("chat")},it=()=>{a(!0),setTimeout(()=>{B(!0)},500)},dn=()=>{r(!1),a(!1),d({name:"John Doe",email:"john.doe@tech.gov.sg",role:"Product Manager",agency:"GovTech"}),m([]),I("home"),S("new-rsn")},Vt=(xe,Pe)=>{d(xe),r(!0),Pe&&(a(!0),m([]))},Xe=xe=>{_.includes(xe)||H([..._,xe]),S(`sim-${xe}`),I("chat")},Ht=xe=>{const Pe={id:Date.now().toString(),name:xe,createdAt:new Date,chatIds:[],memoriesScope:"folder-only"};me([...ie,Pe]),fe(Pe.id),I("folder")},ce=xe=>{Y(Pe=>Pe.includes(xe)?Pe.filter(_e=>_e!==xe):[...Pe,xe])},Je=(xe,Pe)=>{me(ie.map(_e=>_e.id===Pe&&!_e.chatIds.includes(xe)?{..._e,chatIds:[..._e.chatIds,xe]}:_e))},et=xe=>{const Pe=Date.now().toString();m([{id:Pe,title:"New Chat",messages:[],createdAt:new Date},...p]),me(ie.map(Ke=>Ke.id===xe?{...Ke,chatIds:[...Ke.chatIds,Pe]}:Ke)),S(Pe),I("chat")},qe=(xe,Pe)=>{me(ie.map(_e=>_e.id===xe?{..._e,...Pe}:_e))},Xn=xe=>{fe(xe),I("folder")},un=xe=>{me(ie.filter(Pe=>Pe.id!==xe)),ue===xe&&(fe(null),I("home"))},ur=(xe,Pe)=>{me(ie.map(_e=>_e.id===xe?{..._e,chatIds:_e.chatIds.filter(Ke=>Ke!==Pe)}:_e))},_n=ue?ie.find(xe=>xe.id===ue):null,Dn=b.startsWith("sim-"),Zt=Dn?b==="sim-feature-overview"?ZE:b==="sim-customer-support"?eR:b==="sim-feedback-collection"?tR:b==="sim-hr-candidate-shortlisting"?nR:b==="sim-procurement-rfq"?rR:b==="sim-marketing-software-aor"?sR:b==="sim-pq-response-mnd"?oR:b==="sim-pq-response-mnd-v2"?iR:b==="sim-canvas-demo"?aR:null:null;return n?s?i.jsxs("div",{className:"flex h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-950 dark:to-blue-950",children:[i.jsx(qP,{isOpen:O,onClose:()=>C(!N),chats:p,activeChatId:b,onSelectChat:vt,onNewChat:le,onNewCCESNChat:Ee,onNewSHChat:Re,onDeleteChat:Ge,onRenameChat:pt,colorTheme:k,fontStyle:j,onColorThemeChange:P,onFontStyleChange:M,onSettingsOpen:()=>re(!0),mode:W,onModeChange:z,activeView:R,onExploreClick:()=>{I("explore"),S("new-rsn")},onStudioClick:()=>I("studio"),onHomeClick:()=>{I("home"),S("new-rsn")},onViewChange:xe=>{I(xe),xe!=="chat"&&S("new-rsn")},userProfile:c,onSignOut:dn,onSelectSimulation:Xe,folders:ie,onCreateFolder:Ht,onSelectFolder:Xn,onStartAssistantChat:je,onAddChatToFolder:Je,searchModalOpen:J,onSearchModalChange:A,onWalkthroughStart:()=>B(!0),viewedSimulations:_}),R==="chat"?Dn&&Zt?i.jsx("div",{className:"flex-1 flex flex-col",children:i.jsx(oh,{mode:"simulator",data:Zt},b)}):i.jsx("div",{className:"flex-1 flex flex-col",children:i.jsx(oh,{mode:"interactive",title:q?.title,classificationType:q?.classificationType,interactiveMessages:q?.messages||[],onSendMessage:X,chatId:q?.id,onRenameChat:pt,isNewChat:b.startsWith("new-"),isIncognito:q?.isIncognito,folders:ie,onMoveToFolder:Je,bookmarkedAssistants:ee,assistantType:q?.assistantType},b)}):R==="explore"?i.jsx(YP,{colorTheme:k,fontStyle:j,onStartAssistantChat:je,userRole:c?.role,bookmarkedAssistants:ee,onToggleBookmark:ce}):R==="studio"?i.jsx(XP,{colorTheme:k,fontStyle:j}):R==="library"?i.jsx(W3,{colorTheme:k,fontStyle:j}):R==="chats"?i.jsx(U3,{colorTheme:k,fontStyle:j,chats:p,onSelectChat:vt,onDeleteChat:Ge,onSelectSimulation:Xe}):R==="folder"&&_n?i.jsx(XE,{folder:_n,chats:p,onBack:()=>I("home"),onSelectChat:vt,onDeleteFolder:un,onRemoveChatFromFolder:ur,onStartNewChatInFolder:et,onUpdateFolder:qe}):i.jsx(Z3,{colorTheme:k,fontStyle:j,onSelectChat:vt,onNewChat:le,onStartChat:he,isSidebarOpen:N,userProfile:c,onSelectSimulation:Xe,bookmarkedAssistants:ee},K),i.jsx(wE,{colorTheme:k,fontStyle:j,onColorThemeChange:P,onFontStyleChange:M,userProfile:c,onUpdateProfile:d,open:V,onOpenChange:re}),i.jsx(JE,{isOpen:U,onClose:()=>B(!1)})]}):i.jsx(iE,{userProfile:c,onUpdateProfile:d,onComplete:it}):i.jsx(eE,{onLogin:Vt})}function cR(n,r,s){if(r==="transcribe"&&(n.toLowerCase().includes("what was the follow up")||n.toLowerCase().includes("follow-up")||n.toLowerCase().includes("action")))return`Based on the meeting minutes, here are the follow-up actions:

1. **John** - Prepare Q3 budget proposal by Friday
2. **Sarah** - Schedule follow-up meeting with design team
3. **Mike** - Review and approve the marketing materials by EOW
4. **Team** - Complete customer feedback survey analysis by next Monday
5. **Lisa** - Send out meeting notes to all stakeholders

All action items have been assigned with clear deadlines.`;const a=s?`Hi ${s.name}! `:"",c=s?.role?` As a ${s.role}, `:"",d=[`${a}I'm a demo AI assistant. In a real implementation, this would connect to an AI API like OpenAI's GPT model to generate responses.${c}you might find this helpful for your work.`,`${a}This is a mock response. To get real AI responses, you would need to integrate with an AI service.`,`${a}I understand you said: "`+n+'". This is a simulated response for demonstration purposes.',`Thanks for your message${s?", "+s.name:""}! This interface mimics ChatGPT, but the responses are pre-generated for demo purposes.`];return d[Math.floor(Math.random()*d.length)]}fw.createRoot(document.getElementById("root")).render(i.jsx(lR,{}));
