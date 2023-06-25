/*! For license information please see chunk.656.b2177bc326882af69fb2.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[656],{953:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{afterMain:()=>A,afterRead:()=>y,afterWrite:()=>O,applyStyles:()=>N,arrow:()=>Q,auto:()=>s,basePlacements:()=>u,beforeMain:()=>E,beforeRead:()=>g,beforeWrite:()=>_,bottom:()=>i,clippingParents:()=>h,computeStyles:()=>re,createPopper:()=>Le,createPopperBase:()=>Ce,createPopperLite:()=>Ne,detectOverflow:()=>ge,end:()=>l,eventListeners:()=>ie,flip:()=>be,hide:()=>we,left:()=>a,main:()=>w,modifierPhases:()=>S,offset:()=>Ae,placements:()=>v,popper:()=>p,popperGenerator:()=>Pe,popperOffsets:()=>_e,preventOverflow:()=>Te,read:()=>b,reference:()=>d,right:()=>o,start:()=>c,top:()=>n,variationPlacements:()=>m,viewport:()=>f,write:()=>T})
var n="top",i="bottom",o="right",a="left",s="auto",u=[n,i,o,a],c="start",l="end",h="clippingParents",f="viewport",p="popper",d="reference",m=u.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+l])}),[]),v=[].concat(u,[s]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+l])}),[]),g="beforeRead",b="read",y="afterRead",E="beforeMain",w="main",A="afterMain",_="beforeWrite",T="write",O="afterWrite",S=[g,b,y,E,w,A,_,T,O]
function B(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function P(e){return e instanceof H(e).Element||e instanceof Element}function C(e){return e instanceof H(e).HTMLElement||e instanceof HTMLElement}function L(e){return"undefined"!=typeof ShadowRoot&&(e instanceof H(e).ShadowRoot||e instanceof ShadowRoot)}const N={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},i=t.elements[e]
C(i)&&B(i)&&(Object.assign(i.style,r),Object.keys(n).forEach((function(e){var t=n[e]
!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{})
C(n)&&B(n)&&(Object.assign(n.style,o),Object.keys(i).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function R(e){return e.split("-")[0]}var I=Math.max,x=Math.min,D=Math.round
function M(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function F(){return!/^((?!chrome|android).)*safari/i.test(M())}function k(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1)
var n=e.getBoundingClientRect(),i=1,o=1
t&&C(e)&&(i=e.offsetWidth>0&&D(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&D(n.height)/e.offsetHeight||1)
var a=(P(e)?H(e):window).visualViewport,s=!F()&&r,u=(n.left+(s&&a?a.offsetLeft:0))/i,c=(n.top+(s&&a?a.offsetTop:0))/o,l=n.width/i,h=n.height/o
return{width:l,height:h,top:c,right:u+l,bottom:c+h,left:u,x:u,y:c}}function U(e){var t=k(e),r=e.offsetWidth,n=e.offsetHeight
return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function G(e,t){var r=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(r&&L(r)){var n=t
do{if(n&&e.isSameNode(n))return!0
n=n.parentNode||n.host}while(n)}return!1}function j(e){return H(e).getComputedStyle(e)}function V(e){return["table","td","th"].indexOf(B(e))>=0}function X(e){return((P(e)?e.ownerDocument:e.document)||window.document).documentElement}function K(e){return"html"===B(e)?e:e.assignedSlot||e.parentNode||(L(e)?e.host:null)||X(e)}function W(e){return C(e)&&"fixed"!==j(e).position?e.offsetParent:null}function Z(e){for(var t=H(e),r=W(e);r&&V(r)&&"static"===j(r).position;)r=W(r)
return r&&("html"===B(r)||"body"===B(r)&&"static"===j(r).position)?t:r||function(e){var t=/firefox/i.test(M())
if(/Trident/i.test(M())&&C(e)&&"fixed"===j(e).position)return null
var r=K(e)
for(L(r)&&(r=r.host);C(r)&&["html","body"].indexOf(B(r))<0;){var n=j(r)
if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r
r=r.parentNode}return null}(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z(e,t,r){return I(e,x(t,r))}function q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function $(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}const Q={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,s=e.name,c=e.options,l=r.elements.arrow,h=r.modifiersData.popperOffsets,f=R(r.placement),p=Y(f),d=[a,o].indexOf(f)>=0?"height":"width"
if(l&&h){var m=function(e,t){return q("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:$(e,u))}(c.padding,r),v=U(l),g="y"===p?n:a,b="y"===p?i:o,y=r.rects.reference[d]+r.rects.reference[p]-h[p]-r.rects.popper[d],E=h[p]-r.rects.reference[p],w=Z(l),A=w?"y"===p?w.clientHeight||0:w.clientWidth||0:0,_=y/2-E/2,T=m[g],O=A-v[d]-m[b],S=A/2-v[d]/2+_,B=z(T,S,O),H=p
r.modifiersData[s]=((t={})[H]=B,t.centerOffset=B-S,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r
null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&G(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function J(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function te(e){var t,r=e.popper,s=e.popperRect,u=e.placement,c=e.variation,h=e.offsets,f=e.position,p=e.gpuAcceleration,d=e.adaptive,m=e.roundOffsets,v=e.isFixed,g=h.x,b=void 0===g?0:g,y=h.y,E=void 0===y?0:y,w="function"==typeof m?m({x:b,y:E}):{x:b,y:E}
b=w.x,E=w.y
var A=h.hasOwnProperty("x"),_=h.hasOwnProperty("y"),T=a,O=n,S=window
if(d){var B=Z(r),P="clientHeight",C="clientWidth"
B===H(r)&&"static"!==j(B=X(r)).position&&"absolute"===f&&(P="scrollHeight",C="scrollWidth"),(u===n||(u===a||u===o)&&c===l)&&(O=i,E-=(v&&B===S&&S.visualViewport?S.visualViewport.height:B[P])-s.height,E*=p?1:-1),u!==a&&(u!==n&&u!==i||c!==l)||(T=o,b-=(v&&B===S&&S.visualViewport?S.visualViewport.width:B[C])-s.width,b*=p?1:-1)}var L,N=Object.assign({position:f},d&&ee),R=!0===m?function(e,t){var r=e.x,n=e.y,i=t.devicePixelRatio||1
return{x:D(r*i)/i||0,y:D(n*i)/i||0}}({x:b,y:E},H(r)):{x:b,y:E}
return b=R.x,E=R.y,p?Object.assign({},N,((L={})[O]=_?"0":"",L[T]=A?"0":"",L.transform=(S.devicePixelRatio||1)<=1?"translate("+b+"px, "+E+"px)":"translate3d("+b+"px, "+E+"px, 0)",L)):Object.assign({},N,((t={})[O]=_?E+"px":"",t[T]=A?b+"px":"",t.transform="",t))}const re={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=void 0===n||n,o=r.adaptive,a=void 0===o||o,s=r.roundOffsets,u=void 0===s||s,c={placement:R(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var ne={passive:!0}
const ie={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,o=void 0===i||i,a=n.resize,s=void 0===a||a,u=H(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return o&&c.forEach((function(e){e.addEventListener("scroll",r.update,ne)})),s&&u.addEventListener("resize",r.update,ne),function(){o&&c.forEach((function(e){e.removeEventListener("scroll",r.update,ne)})),s&&u.removeEventListener("resize",r.update,ne)}},data:{}}
var oe={left:"right",right:"left",bottom:"top",top:"bottom"}
function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var se={start:"end",end:"start"}
function ue(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function ce(e){var t=H(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function le(e){return k(X(e)).left+ce(e).scrollLeft}function he(e){var t=j(e),r=t.overflow,n=t.overflowX,i=t.overflowY
return/auto|scroll|overlay|hidden/.test(r+i+n)}function fe(e){return["html","body","#document"].indexOf(B(e))>=0?e.ownerDocument.body:C(e)&&he(e)?e:fe(K(e))}function pe(e,t){var r
void 0===t&&(t=[])
var n=fe(e),i=n===(null==(r=e.ownerDocument)?void 0:r.body),o=H(n),a=i?[o].concat(o.visualViewport||[],he(n)?n:[]):n,s=t.concat(a)
return i?s:s.concat(pe(K(a)))}function de(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function me(e,t,r){return t===f?de(function(e,t){var r=H(e),n=X(e),i=r.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,u=0
if(i){o=i.width,a=i.height
var c=F();(c||!c&&"fixed"===t)&&(s=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:s+le(e),y:u}}(e,r)):P(t)?function(e,t){var r=k(e,!1,"fixed"===t)
return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):de(function(e){var t,r=X(e),n=ce(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=I(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=I(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-n.scrollLeft+le(e),u=-n.scrollTop
return"rtl"===j(i||r).direction&&(s+=I(r.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:s,y:u}}(X(e)))}function ve(e){var t,r=e.reference,s=e.element,u=e.placement,h=u?R(u):null,f=u?J(u):null,p=r.x+r.width/2-s.width/2,d=r.y+r.height/2-s.height/2
switch(h){case n:t={x:p,y:r.y-s.height}
break
case i:t={x:p,y:r.y+r.height}
break
case o:t={x:r.x+r.width,y:d}
break
case a:t={x:r.x-s.width,y:d}
break
default:t={x:r.x,y:r.y}}var m=h?Y(h):null
if(null!=m){var v="y"===m?"height":"width"
switch(f){case c:t[m]=t[m]-(r[v]/2-s[v]/2)
break
case l:t[m]=t[m]+(r[v]/2-s[v]/2)}}return t}function ge(e,t){void 0===t&&(t={})
var r=t,a=r.placement,s=void 0===a?e.placement:a,c=r.strategy,l=void 0===c?e.strategy:c,m=r.boundary,v=void 0===m?h:m,g=r.rootBoundary,b=void 0===g?f:g,y=r.elementContext,E=void 0===y?p:y,w=r.altBoundary,A=void 0!==w&&w,_=r.padding,T=void 0===_?0:_,O=q("number"!=typeof T?T:$(T,u)),S=E===p?d:p,H=e.rects.popper,L=e.elements[A?S:E],N=function(e,t,r,n){var i="clippingParents"===t?function(e){var t=pe(K(e)),r=["absolute","fixed"].indexOf(j(e).position)>=0&&C(e)?Z(e):e
return P(r)?t.filter((function(e){return P(e)&&G(e,r)&&"body"!==B(e)})):[]}(e):[].concat(t),o=[].concat(i,[r]),a=o[0],s=o.reduce((function(t,r){var i=me(e,r,n)
return t.top=I(i.top,t.top),t.right=x(i.right,t.right),t.bottom=x(i.bottom,t.bottom),t.left=I(i.left,t.left),t}),me(e,a,n))
return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(P(L)?L:L.contextElement||X(e.elements.popper),v,b,l),R=k(e.elements.reference),D=ve({reference:R,element:H,strategy:"absolute",placement:s}),M=de(Object.assign({},H,D)),F=E===p?M:R,U={top:N.top-F.top+O.top,bottom:F.bottom-N.bottom+O.bottom,left:N.left-F.left+O.left,right:F.right-N.right+O.right},V=e.modifiersData.offset
if(E===p&&V){var W=V[s]
Object.keys(U).forEach((function(e){var t=[o,i].indexOf(e)>=0?1:-1,r=[n,i].indexOf(e)>=0?"y":"x"
U[e]+=W[r]*t}))}return U}const be={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,l=e.name
if(!t.modifiersData[l]._skip){for(var h=r.mainAxis,f=void 0===h||h,p=r.altAxis,d=void 0===p||p,g=r.fallbackPlacements,b=r.padding,y=r.boundary,E=r.rootBoundary,w=r.altBoundary,A=r.flipVariations,_=void 0===A||A,T=r.allowedAutoPlacements,O=t.options.placement,S=R(O),B=g||(S!==O&&_?function(e){if(R(e)===s)return[]
var t=ae(e)
return[ue(e),t,ue(t)]}(O):[ae(O)]),H=[O].concat(B).reduce((function(e,r){return e.concat(R(r)===s?function(e,t){void 0===t&&(t={})
var r=t,n=r.placement,i=r.boundary,o=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,l=void 0===c?v:c,h=J(n),f=h?s?m:m.filter((function(e){return J(e)===h})):u,p=f.filter((function(e){return l.indexOf(e)>=0}))
0===p.length&&(p=f)
var d=p.reduce((function(t,r){return t[r]=ge(e,{placement:r,boundary:i,rootBoundary:o,padding:a})[R(r)],t}),{})
return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:y,rootBoundary:E,padding:b,flipVariations:_,allowedAutoPlacements:T}):r)}),[]),P=t.rects.reference,C=t.rects.popper,L=new Map,N=!0,I=H[0],x=0;x<H.length;x++){var D=H[x],M=R(D),F=J(D)===c,k=[n,i].indexOf(M)>=0,U=k?"width":"height",G=ge(t,{placement:D,boundary:y,rootBoundary:E,altBoundary:w,padding:b}),j=k?F?o:a:F?i:n
P[U]>C[U]&&(j=ae(j))
var V=ae(j),X=[]
if(f&&X.push(G[M]<=0),d&&X.push(G[j]<=0,G[V]<=0),X.every((function(e){return e}))){I=D,N=!1
break}L.set(D,X)}if(N)for(var K=function(e){var t=H.find((function(t){var r=L.get(t)
if(r)return r.slice(0,e).every((function(e){return e}))}))
if(t)return I=t,"break"},W=_?3:1;W>0&&"break"!==K(W);W--);t.placement!==I&&(t.modifiersData[l]._skip=!0,t.placement=I,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function ye(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ee(e){return[n,o,i,a].some((function(t){return e[t]>=0}))}const we={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=ge(t,{elementContext:"reference"}),s=ge(t,{altBoundary:!0}),u=ye(a,n),c=ye(s,i,o),l=Ee(u),h=Ee(c)
t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}},Ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,i=e.name,s=r.offset,u=void 0===s?[0,0]:s,c=v.reduce((function(e,r){return e[r]=function(e,t,r){var i=R(e),s=[a,n].indexOf(i)>=0?-1:1,u="function"==typeof r?r(Object.assign({},t,{placement:e})):r,c=u[0],l=u[1]
return c=c||0,l=(l||0)*s,[a,o].indexOf(i)>=0?{x:l,y:c}:{x:c,y:l}}(r,t.rects,u),e}),{}),l=c[t.placement],h=l.x,f=l.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=f),t.modifiersData[i]=c}},_e={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name
t.modifiersData[r]=ve({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Te={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,s=e.name,u=r.mainAxis,l=void 0===u||u,h=r.altAxis,f=void 0!==h&&h,p=r.boundary,d=r.rootBoundary,m=r.altBoundary,v=r.padding,g=r.tether,b=void 0===g||g,y=r.tetherOffset,E=void 0===y?0:y,w=ge(t,{boundary:p,rootBoundary:d,padding:v,altBoundary:m}),A=R(t.placement),_=J(t.placement),T=!_,O=Y(A),S="x"===O?"y":"x",B=t.modifiersData.popperOffsets,H=t.rects.reference,P=t.rects.popper,C="function"==typeof E?E(Object.assign({},t.rects,{placement:t.placement})):E,L="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0}
if(B){if(l){var M,F="y"===O?n:a,k="y"===O?i:o,G="y"===O?"height":"width",j=B[O],V=j+w[F],X=j-w[k],K=b?-P[G]/2:0,W=_===c?H[G]:P[G],q=_===c?-P[G]:-H[G],$=t.elements.arrow,Q=b&&$?U($):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[F],re=ee[k],ne=z(0,H[G],Q[G]),ie=T?H[G]/2-K-ne-te-L.mainAxis:W-ne-te-L.mainAxis,oe=T?-H[G]/2+K+ne+re+L.mainAxis:q+ne+re+L.mainAxis,ae=t.elements.arrow&&Z(t.elements.arrow),se=ae?"y"===O?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=(M=null==N?void 0:N[O])?M:0,ce=j+oe-ue,le=z(b?x(V,j+ie-ue-se):V,j,b?I(X,ce):X)
B[O]=le,D[O]=le-j}if(f){var he,fe="x"===O?n:a,pe="x"===O?i:o,de=B[S],me="y"===S?"height":"width",ve=de+w[fe],be=de-w[pe],ye=-1!==[n,a].indexOf(A),Ee=null!=(he=null==N?void 0:N[S])?he:0,we=ye?ve:de-H[me]-P[me]-Ee+L.altAxis,Ae=ye?de+H[me]+P[me]-Ee-L.altAxis:be,_e=b&&ye?function(e,t,r){var n=z(e,t,r)
return n>r?r:n}(we,de,Ae):z(b?we:ve,de,b?Ae:be)
B[S]=_e,D[S]=_e-de}t.modifiersData[s]=D}},requiresIfExists:["offset"]}
function Oe(e,t,r){void 0===r&&(r=!1)
var n,i,o=C(t),a=C(t)&&function(e){var t=e.getBoundingClientRect(),r=D(t.width)/e.offsetWidth||1,n=D(t.height)/e.offsetHeight||1
return 1!==r||1!==n}(t),s=X(t),u=k(e,a,r),c={scrollLeft:0,scrollTop:0},l={x:0,y:0}
return(o||!o&&!r)&&(("body"!==B(t)||he(s))&&(c=(n=t)!==H(n)&&C(n)?{scrollLeft:(i=n).scrollLeft,scrollTop:i.scrollTop}:ce(n)),C(t)?((l=k(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=le(s))),{x:u.left+c.scrollLeft-l.x,y:u.top+c.scrollTop-l.y,width:u.width,height:u.height}}function Se(e){var t=new Map,r=new Set,n=[]
function i(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e)
n&&i(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||i(e)})),n}var Be={placement:"bottom",modifiers:[],strategy:"absolute"}
function He(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Pe(e){void 0===e&&(e={})
var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,i=t.defaultOptions,o=void 0===i?Be:i
return function(e,t,r){void 0===r&&(r=o)
var i,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Be,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],c=!1,l={state:s,setOptions:function(r){var i="function"==typeof r?r(s.options):r
h(),s.options=Object.assign({},o,s.options,i),s.scrollParents={reference:P(e)?pe(e):e.contextElement?pe(e.contextElement):[],popper:pe(t)}
var a,c,f=function(e){var t=Se(e)
return S.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((a=[].concat(n,s.options.modifiers),c=a.reduce((function(e,t){var r=e[t.name]
return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))))
return s.orderedModifiers=f.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect
if("function"==typeof i){var o=i({state:s,name:t,instance:l,options:n})
u.push(o||function(){})}})),l.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,r=e.popper
if(He(t,r)){s.rects={reference:Oe(t,Z(r),"fixed"===s.options.strategy),popper:U(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}))
for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var i=s.orderedModifiers[n],o=i.fn,a=i.options,u=void 0===a?{}:a,h=i.name
"function"==typeof o&&(s=o({state:s,options:u,name:h,instance:l})||s)}else s.reset=!1,n=-1}}},update:(i=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){h(),c=!0}}
if(!He(e,t))return l
function h(){u.forEach((function(e){return e()})),u=[]}return l.setOptions(r).then((function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}var Ce=Pe(),Le=Pe({defaultModifiers:[ie,_e,re,N,Ae,be,Te,Q,we]}),Ne=Pe({defaultModifiers:[ie,_e,re,N]})},613:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(866),i=(0,r(831).modifier)((function(e,t,r){let[i,o]=t
const a="animate__"
e.classList.add(`${a}animated`,`${a}${i}`),(0,n.isPresent)(o)&&e.classList.add(`${a}${o}`),(0,n.isPresent)(r.delay)&&e.classList.add(`${a}delay-${r.delay}s`),(0,n.isPresent)(r.repeat)&&("infinite"===r.repeat?e.classList.add(`${a}${r.repeat}`):e.classList.add(`${a}repeat-${r.repeat}`))}))},969:(e,t,r)=>{"use strict"
function n(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}r.r(t),r.d(t,{EventTarget:()=>i,Promise:()=>N,all:()=>M,allSettled:()=>k,asap:()=>re,async:()=>ye,cast:()=>be,configure:()=>a,default:()=>Te,defer:()=>W,denodeify:()=>I,filter:()=>J,hash:()=>j,hashSettled:()=>X,map:()=>Y,off:()=>we,on:()=>Ee,race:()=>U,reject:()=>q,resolve:()=>z,rethrow:()=>K})
var i={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var r=n(this),i=r[e]
i||(i=r[e]=[]),-1===i.indexOf(t)&&i.push(t)},off:function(e,t){var r=n(this)
if(t){var i=r[e],o=i.indexOf(t);-1!==o&&i.splice(o,1)}else r[e]=[]},trigger:function(e,t,r){var i=n(this)[e]
if(i)for(var o=0;o<i.length;o++)(0,i[o])(t,r)}},o={instrument:!1}
function a(e,t){if(2!==arguments.length)return o[e]
o[e]=t}i.mixin(o)
var s=[]
function u(e,t,r){1===s.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:r&&r._id,label:t._label,timeStamp:Date.now(),error:o["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<s.length;e++){var t=s[e],r=t.payload
r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),o.trigger(t.name,t.payload)}s.length=0}),50)}function c(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var r=new this(l,t)
return E(r,e),r}function l(){}var h=void 0,f=1,p=2,d={error:null}
function m(e){try{return e.then}catch(e){return d.error=e,d}}var v=void 0
function g(){try{var e=v
return v=null,e.apply(this,arguments)}catch(e){return d.error=e,d}}function b(e){return v=e,g}function y(e,t,r){if(t.constructor===e.constructor&&r===B&&e.constructor.resolve===c)!function(e,t){t._state===f?A(e,t._result):t._state===p?(t._onError=null,_(e,t._result)):T(t,void 0,(function(r){t===r?A(e,r):E(e,r)}),(function(t){return _(e,t)}))}(e,t)
else if(r===d){var n=d.error
d.error=null,_(e,n)}else"function"==typeof r?function(e,t,r){o.async((function(e){var n=!1,i=b(r).call(t,(function(r){n||(n=!0,t===r?A(e,r):E(e,r))}),(function(t){n||(n=!0,_(e,t))}),"Settle: "+(e._label||" unknown promise"))
if(!n&&i===d){n=!0
var o=d.error
d.error=null,_(e,o)}}),e)}(e,t,r):A(e,t)}function E(e,t){var r,n
e===t?A(e,t):(n=typeof(r=t),null===r||"object"!==n&&"function"!==n?A(e,t):y(e,t,m(t)))}function w(e){e._onError&&e._onError(e._result),O(e)}function A(e,t){e._state===h&&(e._result=t,e._state=f,0===e._subscribers.length?o.instrument&&u("fulfilled",e):o.async(O,e))}function _(e,t){e._state===h&&(e._state=p,e._result=t,o.async(w,e))}function T(e,t,r,n){var i=e._subscribers,a=i.length
e._onError=null,i[a]=t,i[a+f]=r,i[a+p]=n,0===a&&e._state&&o.async(O,e)}function O(e){var t=e._subscribers,r=e._state
if(o.instrument&&u(r===f?"fulfilled":"rejected",e),0!==t.length){for(var n=void 0,i=void 0,a=e._result,s=0;s<t.length;s+=3)n=t[s],i=t[s+r],n?S(r,n,i,a):i(a)
e._subscribers.length=0}}function S(e,t,r,n){var i,o="function"==typeof r
if(i=o?b(r)(n):n,t._state!==h);else if(i===t)_(t,new TypeError("A promises callback cannot return that same promise."))
else if(i===d){var a=d.error
d.error=null,_(t,a)}else o?E(t,i):e===f?A(t,i):e===p&&_(t,i)}function B(e,t,r){var n=this,i=n._state
if(i===f&&!e||i===p&&!t)return o.instrument&&u("chained",n,n),n
n._onError=null
var a=new n.constructor(l,r),s=n._result
if(o.instrument&&u("chained",n,a),i===h)T(n,a,e,t)
else{var c=i===f?e:t
o.async((function(){return S(i,a,c,s)}))}return a}var H=function(){function e(e,t,r,n){this._instanceConstructor=e,this.promise=new e(l,n),this._abortOnReject=r,this._isUsingOwnPromise=e===N,this._isUsingOwnResolve=e.resolve===c,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var r=t.length||0
this.length=r,this._remaining=r,this._result=new Array(r),this._enumerate(t)},e.prototype._enumerate=function(e){for(var t=this.length,r=this.promise,n=0;r._state===h&&n<t;n++)this._eachEntry(e[n],n,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){if(0===this._remaining){var e=this._result
A(this.promise,e),this._result=null}},e.prototype._settleMaybeThenable=function(e,t,r){var n=this._instanceConstructor
if(this._isUsingOwnResolve){var i=m(e)
if(i===B&&e._state!==h)e._onError=null,this._settledAt(e._state,t,e._result,r)
else if("function"!=typeof i)this._settledAt(f,t,e,r)
else if(this._isUsingOwnPromise){var o=new n(l)
y(o,e,i),this._willSettleAt(o,t,r)}else this._willSettleAt(new n((function(t){return t(e)})),t,r)}else this._willSettleAt(n.resolve(e),t,r)},e.prototype._eachEntry=function(e,t,r){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,r):this._setResultAt(f,t,e,r)},e.prototype._settledAt=function(e,t,r,n){var i=this.promise
i._state===h&&(this._abortOnReject&&e===p?_(i,r):(this._setResultAt(e,t,r,n),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,r,n){this._remaining--,this._result[t]=r},e.prototype._willSettleAt=function(e,t,r){var n=this
T(e,void 0,(function(e){return n._settledAt(f,t,e,r)}),(function(e){return n._settledAt(p,t,e,r)}))},e}()
function P(e,t,r){this._remaining--,this._result[t]=e===f?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}var C="rsvp_"+Date.now()+"-",L=0,N=function(){function e(t,r){this._id=L++,this._label=r,this._state=void 0,this._result=void 0,this._subscribers=[],o.instrument&&u("created",this),l!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var r=!1
try{t((function(t){r||(r=!0,E(e,t))}),(function(t){r||(r=!0,_(e,t))}))}catch(t){_(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
o.after((function(){t._onError&&o.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var r=this,n=r.constructor
return"function"==typeof e?r.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){throw t}))})):r.then(e,e)},e}()
function R(e,t){return{then:function(r,n){return e.call(t,r,n)}}}function I(e,t){var r=function(){for(var r=arguments.length,n=new Array(r+1),i=!1,o=0;o<r;++o){var a=arguments[o]
if(!i){if((i=D(a))===d){var s=d.error
d.error=null
var u=new N(l)
return _(u,s),u}i&&!0!==i&&(a=R(i,a))}n[o]=a}var c=new N(l)
return n[r]=function(e,r){e?_(c,e):void 0===t?E(c,r):!0===t?E(c,function(e){for(var t=e.length,r=new Array(t-1),n=1;n<t;n++)r[n-1]=e[n]
return r}(arguments)):Array.isArray(t)?E(c,function(e,t){for(var r={},n=e.length,i=new Array(n),o=0;o<n;o++)i[o]=e[o]
for(var a=0;a<t.length;a++)r[t[a]]=i[a+1]
return r}(arguments,t)):E(c,r)},i?function(e,t,r,n){return N.all(t).then((function(t){return x(e,t,r,n)}))}(c,n,e,this):x(c,n,e,this)}
return r.__proto__=e,r}function x(e,t,r,n){if(b(r).apply(n,t)===d){var i=d.error
d.error=null,_(e,i)}return e}function D(e){return null!==e&&"object"==typeof e&&(e.constructor===N||m(e))}function M(e,t){return N.all(e,t)}N.cast=c,N.all=function(e,t){return Array.isArray(e)?new H(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},N.race=function(e,t){var r=new this(l,t)
if(!Array.isArray(e))return _(r,new TypeError("Promise.race must be called with an array")),r
for(var n=0;r._state===h&&n<e.length;n++)T(this.resolve(e[n]),void 0,(function(e){return E(r,e)}),(function(e){return _(r,e)}))
return r},N.resolve=c,N.reject=function(e,t){var r=new this(l,t)
return _(r,e),r},N.prototype._guidKey=C,N.prototype.then=B
var F=function(e){function t(t,r,n){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(H)
function k(e,t){return Array.isArray(e)?new F(N,e,t).promise:N.reject(new TypeError("Promise.allSettled must be called with an array"),t)}function U(e,t){return N.race(e,t)}F.prototype._setResultAt=P
var G=function(e){function t(t,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3]
return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,n,i))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t)},t.prototype._enumerate=function(e){var t=Object.keys(e),r=t.length,n=this.promise
this._remaining=r
for(var i=void 0,o=void 0,a=0;n._state===h&&a<r;a++)o=e[i=t[a]],this._eachEntry(o,i,!0)
this._checkFullfillment()},t}(H)
function j(e,t){return N.resolve(e,t).then((function(e){if(null===e||"object"!=typeof e)throw new TypeError("Promise.hash must be called with an object")
return new G(N,e,t).promise}))}var V=function(e){function t(t,r,n){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(G)
function X(e,t){return N.resolve(e,t).then((function(e){if(null===e||"object"!=typeof e)throw new TypeError("hashSettled must be called with an object")
return new V(N,e,!1,t).promise}))}function K(e){throw setTimeout((function(){throw e})),e}function W(e){var t={resolve:void 0,reject:void 0}
return t.promise=new N((function(e,r){t.resolve=e,t.reject=r}),e),t}V.prototype._setResultAt=P
var Z=function(e){function t(t,r,n,i){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!0,i,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t,r,n,i){var o=t.length||0
this.length=o,this._remaining=o,this._result=new Array(o),this._mapFn=i,this._enumerate(t)},t.prototype._setResultAt=function(e,t,r,n){if(n){var i=b(this._mapFn)(r,t)
i===d?this._settledAt(p,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,this._result[t]=r},t}(H)
function Y(e,t,r){return"function"!=typeof t?N.reject(new TypeError("map expects a function as a second argument"),r):N.resolve(e,r).then((function(e){if(!Array.isArray(e))throw new TypeError("map must be called with an array")
return new Z(N,e,t,r).promise}))}function z(e,t){return N.resolve(e,t)}function q(e,t){return N.reject(e,t)}var $={},Q=function(e){function t(){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._checkFullfillment=function(){if(0===this._remaining&&null!==this._result){var e=this._result.filter((function(e){return e!==$}))
A(this.promise,e),this._result=null}},t.prototype._setResultAt=function(e,t,r,n){if(n){this._result[t]=r
var i=b(this._mapFn)(r,t)
i===d?this._settledAt(p,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,r||(this._result[t]=$)},t}(Z)
function J(e,t,r){return"function"!=typeof t?N.reject(new TypeError("filter expects function as a second argument"),r):N.resolve(e,r).then((function(e){if(!Array.isArray(e))throw new TypeError("filter must be called with an array")
return new Q(N,e,t,r).promise}))}var ee=0,te=void 0
function re(e,t){ce[ee]=e,ce[ee+1]=t,2===(ee+=2)&&ge()}var ne="undefined"!=typeof window?window:void 0,ie=ne||{},oe=ie.MutationObserver||ie.WebKitMutationObserver,ae="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),se="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function ue(){return function(){return setTimeout(le,1)}}var ce=new Array(1e3)
function le(){for(var e=0;e<ee;e+=2)(0,ce[e])(ce[e+1]),ce[e]=void 0,ce[e+1]=void 0
ee=0}var he,fe,pe,de,me,ve,ge=void 0
ae?(me=process.nextTick,ve=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(ve)&&"0"===ve[1]&&"10"===ve[2]&&(me=setImmediate),ge=function(){return me(le)}):oe?(fe=0,pe=new oe(le),de=document.createTextNode(""),pe.observe(de,{characterData:!0}),ge=function(){return de.data=fe=++fe%2}):se?((he=new MessageChannel).port1.onmessage=le,ge=function(){return he.port2.postMessage(0)}):ge=void 0===ne?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(te=e.runOnLoop||e.runOnContext)?function(){te(le)}:ue()}catch(e){return ue()}}():ue(),o.async=re,o.after=function(e){return setTimeout(e,0)}
var be=z,ye=function(e,t){return o.async(e,t)}
function Ee(){o.on.apply(o,arguments)}function we(){o.off.apply(o,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Ae=window.__PROMISE_INSTRUMENTATION__
for(var _e in a("instrument",!0),Ae)Ae.hasOwnProperty(_e)&&Ee(_e,Ae[_e])}const Te={asap:re,cast:be,Promise:N,EventTarget:i,all:M,allSettled:k,race:U,hash:j,hashSettled:X,rethrow:K,defer:W,denodeify:I,configure:a,on:Ee,off:we,resolve:z,reject:q,map:Y,async:ye,filter:J}},836:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>I})
var n=r(927),i=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=i.join(","),a="undefined"==typeof Element,s=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!a&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},c=function(e,t,r){var n=Array.prototype.slice.apply(e.querySelectorAll(o))
return t&&s.call(e,o)&&n.unshift(e),n.filter(r)},l=function e(t,r,n){for(var i=[],a=Array.from(t);a.length;){var u=a.shift()
if("SLOT"===u.tagName){var c=u.assignedElements(),l=e(c.length?c:u.children,!0,n)
n.flatten?i.push.apply(i,l):i.push({scope:u,candidates:l})}else{s.call(u,o)&&n.filter(u)&&(r||!t.includes(u))&&i.push(u)
var h=u.shadowRoot||"function"==typeof n.getShadowRoot&&n.getShadowRoot(u),f=!n.shadowRootFilter||n.shadowRootFilter(u)
if(h&&f){var p=e(!0===h?u.children:h.children,!0,n)
n.flatten?i.push.apply(i,p):i.push({scope:u,candidates:p})}else a.unshift.apply(a,u.children)}}return i},h=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},f=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},d=function(e){var t=e.getBoundingClientRect(),r=t.width,n=t.height
return 0===r&&0===n},m=function(e,t){return!(t.disabled||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){var r=t.displayCheck,n=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var i=s.call(e,"details>summary:first-of-type")?e.parentElement:e
if(s.call(i,"details:not([open]) *"))return!0
var o=u(e).host,a=(null==o?void 0:o.ownerDocument.contains(o))||e.ownerDocument.contains(e)
if(r&&"full"!==r){if("non-zero-area"===r)return d(e)}else{if("function"==typeof n){for(var c=e;e;){var l=e.parentElement,h=u(e)
if(l&&!l.shadowRoot&&!0===n(l))return d(e)
e=e.assignedSlot?e.assignedSlot:l||h===e.ownerDocument?l:h.host}e=c}if(a)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var n=t.children.item(r)
if("LEGEND"===n.tagName)return!!s.call(t,"fieldset[disabled] *")||!n.contains(e)}return!0}t=t.parentElement}return!1}(t))},v=function(e,t){return!(function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,r=e.form||u(e),n=function(e){return r.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=n(window.CSS.escape(e.name))
else try{t=n(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}(t,e.form)
return!i||i===e}(e)}(t)||h(t)<0||!m(e,t))},g=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},b=function e(t){var r=[],n=[]
return t.forEach((function(t,i){var o=!!t.scope,a=o?t.scope:t,s=h(a,o),u=o?e(t.candidates):a
0===s?o?r.push.apply(r,u):r.push(a):n.push({documentOrder:i,tabIndex:s,item:t,isScope:o,content:u})})),n.sort(f).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(r)},y=function(e,t){var r
return r=(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:v.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:g}):c(e,t.includeContainer,v.bind(null,t)),b(r)},E=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,o)&&v(t,e)},w=i.concat("iframe").join(","),A=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,w)&&m(t,e)}
function _(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?_(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S,B=(S=[],{activateTrap:function(e){if(S.length>0){var t=S[S.length-1]
t!==e&&t.pause()}var r=S.indexOf(e);-1===r||S.splice(r,1),S.push(e)},deactivateTrap:function(e){var t=S.indexOf(e);-1!==t&&S.splice(t,1),S.length>0&&S[S.length-1].unpause()}}),H=function(e){return setTimeout(e,0)},P=function(e,t){var r=-1
return e.every((function(e,n){return!t(e)||(r=n,!1)})),r},C=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return"function"==typeof e?e.apply(void 0,r):e},L=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},N=function(e,t){var r,n=(null==t?void 0:t.document)||document,i=T({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(e,t,r){return e&&void 0!==e[t]?e[t]:i[r||t]},s=function(e){return o.containerGroups.findIndex((function(t){var r=t.container,n=t.tabbableNodes
return r.contains(e)||n.find((function(t){return t===e}))}))},u=function(e){var t=i[e]
if("function"==typeof t){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a]
t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t
if("string"==typeof t&&!(s=n.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return s},h=function(){var e=u("initialFocus")
if(!1===e)return!1
if(void 0===e)if(s(n.activeElement)>=0)e=n.activeElement
else{var t=o.tabbableGroups[0]
e=t&&t.firstTabbableNode||u("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},f=function(){if(o.containerGroups=o.containers.map((function(e){var t,r,n=y(e,i.tabbableOptions),o=(t=e,(r=(r=i.tabbableOptions)||{}).getShadowRoot?l([t],r.includeContainer,{filter:m.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):c(t,r.includeContainer,m.bind(null,r)))
return{container:e,tabbableNodes:n,focusableNodes:o,firstTabbableNode:n.length>0?n[0]:null,lastTabbableNode:n.length>0?n[n.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=o.findIndex((function(t){return t===e}))
if(!(r<0))return t?o.slice(r+1).find((function(e){return E(e,i.tabbableOptions)})):o.slice(0,r).reverse().find((function(e){return E(e,i.tabbableOptions)}))}}})),o.tabbableGroups=o.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),o.tabbableGroups.length<=0&&!u("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function e(t){!1!==t&&t!==n.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),o.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(h()))},d=function(e){var t=u("setReturnFocus",e)
return t||!1!==t&&e},v=function(e){var t=L(e)
s(t)>=0||(C(i.clickOutsideDeactivates,e)?r.deactivate({returnFocus:i.returnFocusOnDeactivate&&!A(t,i.tabbableOptions)}):C(i.allowOutsideClick,e)||e.preventDefault())},g=function(e){var t=L(e),r=s(t)>=0
r||t instanceof Document?r&&(o.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),p(o.mostRecentlyFocusedNode||h()))},b=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==C(i.escapeDeactivates,e))return e.preventDefault(),void r.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=L(e)
f()
var r=null
if(o.tabbableGroups.length>0){var n=s(t),a=n>=0?o.containerGroups[n]:void 0
if(n<0)r=e.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var c=P(o.tabbableGroups,(function(e){var r=e.firstTabbableNode
return t===r}))
if(c<0&&(a.container===t||A(t,i.tabbableOptions)&&!E(t,i.tabbableOptions)&&!a.nextTabbableNode(t,!1))&&(c=n),c>=0){var l=0===c?o.tabbableGroups.length-1:c-1
r=o.tabbableGroups[l].lastTabbableNode}}else{var h=P(o.tabbableGroups,(function(e){var r=e.lastTabbableNode
return t===r}))
if(h<0&&(a.container===t||A(t,i.tabbableOptions)&&!E(t,i.tabbableOptions)&&!a.nextTabbableNode(t))&&(h=n),h>=0){var d=h===o.tabbableGroups.length-1?0:h+1
r=o.tabbableGroups[d].firstTabbableNode}}}else r=u("fallbackFocus")
r&&(e.preventDefault(),p(r))}(e)},w=function(e){var t=L(e)
s(t)>=0||C(i.clickOutsideDeactivates,e)||C(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},_=function(){if(o.active)return B.activateTrap(r),o.delayInitialFocusTimer=i.delayInitialFocus?H((function(){p(h())})):p(h()),n.addEventListener("focusin",g,!0),n.addEventListener("mousedown",v,{capture:!0,passive:!1}),n.addEventListener("touchstart",v,{capture:!0,passive:!1}),n.addEventListener("click",w,{capture:!0,passive:!1}),n.addEventListener("keydown",b,{capture:!0,passive:!1}),r},O=function(){if(o.active)return n.removeEventListener("focusin",g,!0),n.removeEventListener("mousedown",v,!0),n.removeEventListener("touchstart",v,!0),n.removeEventListener("click",w,!0),n.removeEventListener("keydown",b,!0),r}
return(r={get active(){return o.active},get paused(){return o.paused},activate:function(e){if(o.active)return this
var t=a(e,"onActivate"),r=a(e,"onPostActivate"),i=a(e,"checkCanFocusTrap")
i||f(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,t&&t()
var s=function(){i&&f(),_(),r&&r()}
return i?(i(o.containers.concat()).then(s,s),this):(s(),this)},deactivate:function(e){if(!o.active)return this
var t=T({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e)
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,O(),o.active=!1,o.paused=!1,B.deactivateTrap(r)
var n=a(t,"onDeactivate"),s=a(t,"onPostDeactivate"),u=a(t,"checkCanReturnFocus"),c=a(t,"returnFocus","returnFocusOnDeactivate")
n&&n()
var l=function(){H((function(){c&&p(d(o.nodeFocusedBeforeActivation)),s&&s()}))}
return c&&u?(u(d(o.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,O()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,f(),_(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return o.containers=t.map((function(e){return"string"==typeof e?n.querySelector(e):e})),o.active&&f(),this}}).updateContainerElements(e),r}
let R
try{R=(0,n.capabilities)("3.22")}catch{R=(0,n.capabilities)("3.13")}var I=(0,n.setModifierManager)((()=>({capabilities:R,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,r){let{named:{isActive:n,isPaused:i,shouldSelfFocus:o,focusTrapOptions:a,additionalElements:s,_createFocusTrap:u}}=r
e.focusTrapOptions={...a}||{},void 0!==n&&(e.isActive=n),void 0!==i&&(e.isPaused=i),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&o&&(e.focusTrapOptions.initialFocus=t)
let c=N
u&&(c=u),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=c(void 0!==s?[t,...s]:t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,t){let{named:r}=t
const n=r.focusTrapOptions||{}
if(e.isActive&&!r.isActive){const{returnFocusOnDeactivate:t}=n,r=void 0===t
e.focusTrap.deactivate({returnFocus:r})}else!e.isActive&&r.isActive&&e.focusTrap.activate()
e.isPaused&&!r.isPaused?e.focusTrap.unpause():!e.isPaused&&r.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=n,void 0!==r.isActive&&(e.isActive=r.isActive),void 0!==r.isPaused&&(e.isPaused=r.isPaused)},destroyModifier(e){let{focusTrap:t}=e
t.deactivate()}})),class{})},721:e=>{function t(e,t,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=t.get(o)
return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function r(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=t.get(i)
return void 0===o&&(o=e.apply(this,n),t.set(i,o)),o}function n(e,t,r,n,i){return r.bind(t,e,n,i)}function i(e,i){return n(e,this,1===e.length?t:r,i.cache.create(),i.serializer)}function o(){return JSON.stringify(arguments)}function a(){this.cache=Object.create(null)}a.prototype.has=function(e){return e in this.cache},a.prototype.get=function(e){return this.cache[e]},a.prototype.set=function(e,t){this.cache[e]=t}
var s={create:function(){return new a}}
e.exports=function(e,t){var r=t&&t.cache?t.cache:s,n=t&&t.serializer?t.serializer:o
return(t&&t.strategy?t.strategy:i)(e,{cache:r,serializer:n})},e.exports.strategies={variadic:function(e,t){return n(e,this,r,t.cache.create(),t.serializer)},monadic:function(e,r){return n(e,this,t,r.cache.create(),r.serializer)}}},173:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{SKELETON_TYPE:()=>i,SyntaxError:()=>P,TYPE:()=>n,createLiteralElement:()=>g,createNumberElement:()=>b,isArgumentElement:()=>s,isDateElement:()=>c,isDateTimeSkeleton:()=>v,isLiteralElement:()=>a,isNumberElement:()=>u,isNumberSkeleton:()=>m,isPluralElement:()=>f,isPoundElement:()=>p,isSelectElement:()=>h,isTagElement:()=>d,isTimeElement:()=>l,parse:()=>R,pegParse:()=>C})
var n,i,o=r(582)
function a(e){return e.type===n.literal}function s(e){return e.type===n.argument}function u(e){return e.type===n.number}function c(e){return e.type===n.date}function l(e){return e.type===n.time}function h(e){return e.type===n.select}function f(e){return e.type===n.plural}function p(e){return e.type===n.pound}function d(e){return e.type===n.tag}function m(e){return!(!e||"object"!=typeof e||e.type!==i.number)}function v(e){return!(!e||"object"!=typeof e||e.type!==i.dateTime)}function g(e){return{type:n.literal,value:e}}function b(e,t){return{type:n.number,value:e,style:t}}!function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(n||(n={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(i||(i={}))
var y=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,E=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,w=/^(@+)?(\+|#+)?$/g,A=/(\*)(0+)|(#+)(0+)|(0+)/g,_=/^(0+)$/
function T(e){var t={}
return e.replace(w,(function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),t}function O(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function S(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2)
if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!_.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function B(e){return O(e)||{}}function H(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r]
switch(i.stem){case"percent":case"%":t.style="percent"
continue
case"%x100":t.style="percent",t.scale=100
continue
case"currency":t.style="currency",t.currency=i.options[0]
continue
case"group-off":case",_":t.useGrouping=!1
continue
case"precision-integer":case".":t.maximumFractionDigits=0
continue
case"measure-unit":case"unit":t.style="unit",t.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":t.notation="compact",t.compactDisplay="short"
continue
case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long"
continue
case"scientific":t=(0,o.pi)((0,o.pi)((0,o.pi)({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return(0,o.pi)((0,o.pi)({},e),B(t))}),{}))
continue
case"engineering":t=(0,o.pi)((0,o.pi)((0,o.pi)({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return(0,o.pi)((0,o.pi)({},e),B(t))}),{}))
continue
case"notation-simple":t.notation="standard"
continue
case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow"
continue
case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short"
continue
case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long"
continue
case"unit-width-iso-code":t.currencyDisplay="symbol"
continue
case"scale":t.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(A,(function(e,r,n,i,o,a){if(r)t.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(_.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(E.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(E,(function(e,r,n,i,o,a){return"*"===n?t.minimumFractionDigits=r.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""})),i.options.length&&(t=(0,o.pi)((0,o.pi)({},t),T(i.options[0])))}else if(w.test(i.stem))t=(0,o.pi)((0,o.pi)({},t),T(i.stem))
else{var a=O(i.stem)
a&&(t=(0,o.pi)((0,o.pi)({},t),a))
var s=S(i.stem)
s&&(t=(0,o.pi)((0,o.pi)({},t),s))}}return t}var P=function(e){function t(r,n,i,o){var a=e.call(this)||this
return a.message=r,a.expected=n,a.found=i,a.location=o,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return(0,o.ZT)(t,e),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function o(e){switch(e.type){case"literal":return'"'+n(e.text)+'"'
case"class":var t=e.parts.map((function(e){return Array.isArray(e)?i(e[0])+"-"+i(e[1]):i(e)}))
return"["+(e.inverted?"^":"")+t+"]"
case"any":return"any character"
case"end":return"end of input"
case"other":return e.description}}return"Expected "+function(e){var t,r,n=e.map(o)
if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++)
n.length=r}switch(n.length){case 1:return n[0]
case 2:return n[0]+" or "+n[1]
default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+((a=t)?'"'+n(a)+'"':"end of input")+" found."
var a},t}(Error),C=function(e,t){t=void 0!==t?t:{}
var r,a={},s={start:Ct},u=Ct,c=function(){return!ur},l=function(e){return e},h=function(){return ur},f="<",p=Tt("<",!1),d=function(e){return e.join("")},m=function(){return"<"},v=function(e){return(0,o.pi)({type:n.literal,value:e},ir())},g="#",b=Tt("#",!1),E=function(){return(0,o.pi)({type:n.pound},ir())},w=St("tagElement"),A=function(e,t,r){return e!==r&&_t('Mismatch tag "'+e+'" !== "'+r+'"',At()),(0,o.pi)({type:n.tag,value:e,children:t},ir())},_="/>",T=Tt("/>",!1),O=function(e){return(0,o.pi)({type:n.literal,value:e.join("")},ir())},S=">",B=Tt(">",!1),C=function(e){return e},L="</",N=Tt("</",!1),R=St("argumentElement"),I="{",x=Tt("{",!1),D="}",M=Tt("}",!1),F=function(e){return(0,o.pi)({type:n.argument,value:e},ir())},k=St("numberSkeletonId"),U=/^['\/{}]/,G=Ot(["'","/","{","}"],!1,!1),j={type:"any"},V=St("numberSkeletonTokenOption"),X="/",K=Tt("/",!1),W=function(e){return e},Z=St("numberSkeletonToken"),Y=function(e,t){return{stem:e,options:t}},z=function(e){return(0,o.pi)({type:i.number,tokens:e,parsedOptions:cr?H(e):{}},ir())},q="::",$=Tt("::",!1),Q=function(e){return e},J=function(){return rr.push("numberArgStyle"),!0},ee=function(e){return rr.pop(),e.replace(/\s*$/,"")},te=",",re=Tt(",",!1),ne="number",ie=Tt("number",!1),oe=function(e,t,r){return(0,o.pi)({type:"number"===t?n.number:"date"===t?n.date:n.time,style:r&&r[2],value:e},ir())},ae="'",se=Tt("'",!1),ue=/^[^']/,ce=Ot(["'"],!0,!1),le=/^[^a-zA-Z'{}]/,he=Ot([["a","z"],["A","Z"],"'","{","}"],!0,!1),fe=/^[a-zA-Z]/,pe=Ot([["a","z"],["A","Z"]],!1,!1),de=function(e){return(0,o.pi)({type:i.dateTime,pattern:e,parsedOptions:cr?(t=e,r={},t.replace(y,(function(e){var t=e.length
switch(e[0]){case"G":r.era=4===t?"long":5===t?"narrow":"short"
break
case"y":r.year=2===t?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][t-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":r.day=["numeric","2-digit"][t-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":r.weekday=4===t?"short":5===t?"narrow":"short"
break
case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
r.weekday=["short","long","narrow","short"][t-4]
break
case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
r.weekday=["short","long","narrow","short"][t-4]
break
case"a":r.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][t-1]
break
case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][t-1]
break
case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][t-1]
break
case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][t-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":r.minute=["numeric","2-digit"][t-1]
break
case"s":r.second=["numeric","2-digit"][t-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":r.timeZoneName=t<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),r):{}},ir())
var t,r},me=function(){return rr.push("dateOrTimeArgStyle"),!0},ve="date",ge=Tt("date",!1),be="time",ye=Tt("time",!1),Ee="plural",we=Tt("plural",!1),Ae="selectordinal",_e=Tt("selectordinal",!1),Te="offset:",Oe=Tt("offset:",!1),Se=function(e,t,r,i){return(0,o.pi)({type:n.plural,pluralType:"plural"===t?"cardinal":"ordinal",value:e,offset:r?r[2]:0,options:i.reduce((function(e,t){var r=t.id,n=t.value,i=t.location
return r in e&&_t('Duplicate option "'+r+'" in plural element: "'+wt()+'"',At()),e[r]={value:n,location:i},e}),{})},ir())},Be="select",He=Tt("select",!1),Pe=function(e,t){return(0,o.pi)({type:n.select,value:e,options:t.reduce((function(e,t){var r=t.id,n=t.value,i=t.location
return r in e&&_t('Duplicate option "'+r+'" in select element: "'+wt()+'"',At()),e[r]={value:n,location:i},e}),{})},ir())},Ce="=",Le=Tt("=",!1),Ne=function(e){return rr.push("select"),!0},Re=function(e,t){return rr.pop(),(0,o.pi)({id:e,value:t},ir())},Ie=function(e){return rr.push("plural"),!0},xe=function(e,t){return rr.pop(),(0,o.pi)({id:e,value:t},ir())},De=St("whitespace"),Me=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Fe=Ot([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),ke=St("syntax pattern"),Ue=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,Ge=Ot([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),je=St("optional whitespace"),Ve=St("number"),Xe="-",Ke=Tt("-",!1),We=function(e,t){return t?e?-t:t:0},Ze=(St("apostrophe"),St("double apostrophes")),Ye="''",ze=Tt("''",!1),qe=function(){return"'"},$e=function(e,t){return e+t.replace("''","'")},Qe=function(e){return!("<"===e||"{"===e||nr()&&"#"===e||rr.length>1&&"}"===e)},Je="\n",et=Tt("\n",!1),tt=function(e){return"<"===e||">"===e||"{"===e||"}"===e||nr()&&"#"===e},rt=St("argNameOrNumber"),nt=St("validTag"),it=St("argNumber"),ot="0",at=Tt("0",!1),st=function(){return 0},ut=/^[1-9]/,ct=Ot([["1","9"]],!1,!1),lt=/^[0-9]/,ht=Ot([["0","9"]],!1,!1),ft=function(e){return parseInt(e.join(""),10)},pt=St("argName"),dt=St("tagName"),mt=0,vt=0,gt=[{line:1,column:1}],bt=0,yt=[],Et=0
if(void 0!==t.startRule){if(!(t.startRule in s))throw new Error("Can't start parsing from rule \""+t.startRule+'".')
u=s[t.startRule]}function wt(){return e.substring(vt,mt)}function At(){return Ht(vt,mt)}function _t(e,t){throw function(e,t){return new P(e,[],"",t)}(e,t=void 0!==t?t:Ht(vt,mt))}function Tt(e,t){return{type:"literal",text:e,ignoreCase:t}}function Ot(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function St(e){return{type:"other",description:e}}function Bt(t){var r,n=gt[t]
if(n)return n
for(r=t-1;!gt[r];)r--
for(n={line:(n=gt[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++
return gt[t]=n,n}function Ht(e,t){var r=Bt(e),n=Bt(t)
return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function Pt(e){mt<bt||(mt>bt&&(bt=mt,yt=[]),yt.push(e))}function Ct(){return Lt()}function Lt(){var e,t
for(e=[],t=Nt();t!==a;)e.push(t),t=Nt()
return e}function Nt(){var t,r
return t=mt,vt=mt,(c()?void 0:a)!==a?(r=function(){var e,t,r,n
return Et++,(e=xt())===a&&(e=mt,(t=Dt())!==a&&(r=Lt())!==a&&(n=Mt())!==a?(vt=e,e=t=A(t,r,n)):(mt=e,e=a)),Et--,e===a&&(t=a,0===Et&&Pt(w)),e}(),r!==a?(vt=t,t=l(r)):(mt=t,t=a)):(mt=t,t=a),t===a&&(t=function(){var e,t
return e=mt,(t=Rt())!==a&&(vt=e,t=v(t)),t}())===a&&(t=function(){var t,r,n,i
return Et++,t=mt,123===e.charCodeAt(mt)?(r=I,mt++):(r=a,0===Et&&Pt(x)),r!==a&&Zt()!==a&&(n=Qt())!==a&&Zt()!==a?(125===e.charCodeAt(mt)?(i=D,mt++):(i=a,0===Et&&Pt(M)),i!==a?(vt=t,t=r=F(n)):(mt=t,t=a)):(mt=t,t=a),Et--,t===a&&(r=a,0===Et&&Pt(R)),t}())===a&&(t=function(){var t
return t=function(){var t,r,n,i,o,s,u,c,l
return t=mt,123===e.charCodeAt(mt)?(r=I,mt++):(r=a,0===Et&&Pt(x)),r!==a&&Zt()!==a&&(n=Qt())!==a&&Zt()!==a?(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===Et&&Pt(re)),i!==a&&Zt()!==a?(e.substr(mt,6)===ne?(o=ne,mt+=6):(o=a,0===Et&&Pt(ie)),o!==a&&Zt()!==a?(s=mt,44===e.charCodeAt(mt)?(u=te,mt++):(u=a,0===Et&&Pt(re)),u!==a&&(c=Zt())!==a?(l=function(){var t,r,n
return t=mt,e.substr(mt,2)===q?(r=q,mt+=2):(r=a,0===Et&&Pt($)),r!==a?(n=function(){var e,t,r
if(e=mt,t=[],(r=Ut())!==a)for(;r!==a;)t.push(r),r=Ut()
else t=a
return t!==a&&(vt=e,t=z(t)),t}(),n!==a?(vt=t,t=r=Q(n)):(mt=t,t=a)):(mt=t,t=a),t===a&&(t=mt,vt=mt,(r=(r=J())?void 0:a)!==a&&(n=Rt())!==a?(vt=t,t=r=ee(n)):(mt=t,t=a)),t}(),l!==a?s=u=[u,c,l]:(mt=s,s=a)):(mt=s,s=a),s===a&&(s=null),s!==a&&(u=Zt())!==a?(125===e.charCodeAt(mt)?(c=D,mt++):(c=a,0===Et&&Pt(M)),c!==a?(vt=t,t=r=oe(n,o,s)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}(),t===a&&(t=function(){var t,r,n,i,o,s,u,c,l
return t=mt,123===e.charCodeAt(mt)?(r=I,mt++):(r=a,0===Et&&Pt(x)),r!==a&&Zt()!==a&&(n=Qt())!==a&&Zt()!==a?(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===Et&&Pt(re)),i!==a&&Zt()!==a?(e.substr(mt,4)===ve?(o=ve,mt+=4):(o=a,0===Et&&Pt(ge)),o===a&&(e.substr(mt,4)===be?(o=be,mt+=4):(o=a,0===Et&&Pt(ye))),o!==a&&Zt()!==a?(s=mt,44===e.charCodeAt(mt)?(u=te,mt++):(u=a,0===Et&&Pt(re)),u!==a&&(c=Zt())!==a?(l=function(){var t,r,n
return t=mt,e.substr(mt,2)===q?(r=q,mt+=2):(r=a,0===Et&&Pt($)),r!==a?(n=function(){var t,r,n,i
if(t=mt,r=mt,n=[],(i=Gt())===a&&(i=jt()),i!==a)for(;i!==a;)n.push(i),(i=Gt())===a&&(i=jt())
else n=a
return(r=n!==a?e.substring(r,mt):n)!==a&&(vt=t,r=de(r)),r}(),n!==a?(vt=t,t=r=Q(n)):(mt=t,t=a)):(mt=t,t=a),t===a&&(t=mt,vt=mt,(r=(r=me())?void 0:a)!==a&&(n=Rt())!==a?(vt=t,t=r=ee(n)):(mt=t,t=a)),t}(),l!==a?s=u=[u,c,l]:(mt=s,s=a)):(mt=s,s=a),s===a&&(s=null),s!==a&&(u=Zt())!==a?(125===e.charCodeAt(mt)?(c=D,mt++):(c=a,0===Et&&Pt(M)),c!==a?(vt=t,t=r=oe(n,o,s)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}()),t}(),t===a&&(t=function(){var t,r,n,i,o,s,u,c,l,h,f
if(t=mt,123===e.charCodeAt(mt)?(r=I,mt++):(r=a,0===Et&&Pt(x)),r!==a)if(Zt()!==a)if((n=Qt())!==a)if(Zt()!==a)if(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===Et&&Pt(re)),i!==a)if(Zt()!==a)if(e.substr(mt,6)===Ee?(o=Ee,mt+=6):(o=a,0===Et&&Pt(we)),o===a&&(e.substr(mt,13)===Ae?(o=Ae,mt+=13):(o=a,0===Et&&Pt(_e))),o!==a)if(Zt()!==a)if(44===e.charCodeAt(mt)?(s=te,mt++):(s=a,0===Et&&Pt(re)),s!==a)if(Zt()!==a)if(u=mt,e.substr(mt,7)===Te?(c=Te,mt+=7):(c=a,0===Et&&Pt(Oe)),c!==a&&(l=Zt())!==a&&(h=Yt())!==a?u=c=[c,l,h]:(mt=u,u=a),u===a&&(u=null),u!==a)if((c=Zt())!==a){if(l=[],(h=Xt())!==a)for(;h!==a;)l.push(h),h=Xt()
else l=a
l!==a&&(h=Zt())!==a?(125===e.charCodeAt(mt)?(f=D,mt++):(f=a,0===Et&&Pt(M)),f!==a?(vt=t,t=r=Se(n,o,u,l)):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
return t}())===a&&(t=function(){var t,r,n,i,o,s,u,c,l
if(t=mt,123===e.charCodeAt(mt)?(r=I,mt++):(r=a,0===Et&&Pt(x)),r!==a)if(Zt()!==a)if((n=Qt())!==a)if(Zt()!==a)if(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===Et&&Pt(re)),i!==a)if(Zt()!==a)if(e.substr(mt,6)===Be?(o=Be,mt+=6):(o=a,0===Et&&Pt(He)),o!==a)if(Zt()!==a)if(44===e.charCodeAt(mt)?(s=te,mt++):(s=a,0===Et&&Pt(re)),s!==a)if(Zt()!==a){if(u=[],(c=Vt())!==a)for(;c!==a;)u.push(c),c=Vt()
else u=a
u!==a&&(c=Zt())!==a?(125===e.charCodeAt(mt)?(l=D,mt++):(l=a,0===Et&&Pt(M)),l!==a?(vt=t,t=r=Pe(n,u)):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
return t}())===a&&(t=function(){var t,r
return t=mt,35===e.charCodeAt(mt)?(r=g,mt++):(r=a,0===Et&&Pt(b)),r!==a&&(vt=t,r=E()),r}())),t}function Rt(){var t,r,n,i
if(t=mt,vt=mt,(r=(r=h())?void 0:a)!==a){if(n=[],(i=zt())===a&&(i=qt())===a&&(i=$t())===a&&(60===e.charCodeAt(mt)?(i=f,mt++):(i=a,0===Et&&Pt(p))),i!==a)for(;i!==a;)n.push(i),(i=zt())===a&&(i=qt())===a&&(i=$t())===a&&(60===e.charCodeAt(mt)?(i=f,mt++):(i=a,0===Et&&Pt(p)))
else n=a
n!==a?(vt=t,t=r=d(n)):(mt=t,t=a)}else mt=t,t=a
if(t===a){if(t=mt,r=[],(n=zt())===a&&(n=qt())===a&&(n=$t())===a&&(n=It()),n!==a)for(;n!==a;)r.push(n),(n=zt())===a&&(n=qt())===a&&(n=$t())===a&&(n=It())
else r=a
r!==a&&(vt=t,r=d(r)),t=r}return t}function It(){var t,r,n
return t=mt,r=mt,Et++,(n=Dt())===a&&(n=Mt())===a&&(n=xt()),Et--,n===a?r=void 0:(mt=r,r=a),r!==a?(60===e.charCodeAt(mt)?(n=f,mt++):(n=a,0===Et&&Pt(p)),n!==a?(vt=t,t=r=m()):(mt=t,t=a)):(mt=t,t=a),t}function xt(){var t,r,n,i,o,s
return t=mt,r=mt,60===e.charCodeAt(mt)?(n=f,mt++):(n=a,0===Et&&Pt(p)),n!==a&&(i=Jt())!==a&&(o=Zt())!==a?(e.substr(mt,2)===_?(s=_,mt+=2):(s=a,0===Et&&Pt(T)),s!==a?r=n=[n,i,o,s]:(mt=r,r=a)):(mt=r,r=a),r!==a&&(vt=t,r=O(r)),r}function Dt(){var t,r,n,i
return t=mt,60===e.charCodeAt(mt)?(r=f,mt++):(r=a,0===Et&&Pt(p)),r!==a&&(n=Jt())!==a?(62===e.charCodeAt(mt)?(i=S,mt++):(i=a,0===Et&&Pt(B)),i!==a?(vt=t,t=r=C(n)):(mt=t,t=a)):(mt=t,t=a),t}function Mt(){var t,r,n,i
return t=mt,e.substr(mt,2)===L?(r=L,mt+=2):(r=a,0===Et&&Pt(N)),r!==a&&(n=Jt())!==a?(62===e.charCodeAt(mt)?(i=S,mt++):(i=a,0===Et&&Pt(B)),i!==a?(vt=t,t=r=C(n)):(mt=t,t=a)):(mt=t,t=a),t}function Ft(){var t,r,n,i,o
if(Et++,t=mt,r=[],n=mt,i=mt,Et++,(o=Kt())===a&&(U.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(G))),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a),n!==a)for(;n!==a;)r.push(n),n=mt,i=mt,Et++,(o=Kt())===a&&(U.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(G))),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a)
else r=a
return t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(k)),t}function kt(){var t,r,n
return Et++,t=mt,47===e.charCodeAt(mt)?(r=X,mt++):(r=a,0===Et&&Pt(K)),r!==a&&(n=Ft())!==a?(vt=t,t=r=W(n)):(mt=t,t=a),Et--,t===a&&(r=a,0===Et&&Pt(V)),t}function Ut(){var e,t,r,n
if(Et++,e=mt,Zt()!==a)if((t=Ft())!==a){for(r=[],n=kt();n!==a;)r.push(n),n=kt()
r!==a?(vt=e,e=Y(t,r)):(mt=e,e=a)}else mt=e,e=a
else mt=e,e=a
return Et--,e===a&&0===Et&&Pt(Z),e}function Gt(){var t,r,n,i
if(t=mt,39===e.charCodeAt(mt)?(r=ae,mt++):(r=a,0===Et&&Pt(se)),r!==a){if(n=[],(i=zt())===a&&(ue.test(e.charAt(mt))?(i=e.charAt(mt),mt++):(i=a,0===Et&&Pt(ce))),i!==a)for(;i!==a;)n.push(i),(i=zt())===a&&(ue.test(e.charAt(mt))?(i=e.charAt(mt),mt++):(i=a,0===Et&&Pt(ce)))
else n=a
n!==a?(39===e.charCodeAt(mt)?(i=ae,mt++):(i=a,0===Et&&Pt(se)),i!==a?t=r=[r,n,i]:(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
if(t===a)if(t=[],(r=zt())===a&&(le.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&Pt(he))),r!==a)for(;r!==a;)t.push(r),(r=zt())===a&&(le.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&Pt(he)))
else t=a
return t}function jt(){var t,r
if(t=[],fe.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&Pt(pe)),r!==a)for(;r!==a;)t.push(r),fe.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&Pt(pe))
else t=a
return t}function Vt(){var t,r,n,i,o
return t=mt,Zt()!==a&&(r=tr())!==a&&Zt()!==a?(123===e.charCodeAt(mt)?(n=I,mt++):(n=a,0===Et&&Pt(x)),n!==a?(vt=mt,(Ne(r)?void 0:a)!==a&&(i=Lt())!==a?(125===e.charCodeAt(mt)?(o=D,mt++):(o=a,0===Et&&Pt(M)),o!==a?(vt=t,t=Re(r,i)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}function Xt(){var t,r,n,i,o
return t=mt,Zt()!==a?(r=function(){var t,r,n,i
return t=mt,r=mt,61===e.charCodeAt(mt)?(n=Ce,mt++):(n=a,0===Et&&Pt(Le)),n!==a&&(i=Yt())!==a?r=n=[n,i]:(mt=r,r=a),(t=r!==a?e.substring(t,mt):r)===a&&(t=tr()),t}(),r!==a&&Zt()!==a?(123===e.charCodeAt(mt)?(n=I,mt++):(n=a,0===Et&&Pt(x)),n!==a?(vt=mt,(Ie(r)?void 0:a)!==a&&(i=Lt())!==a?(125===e.charCodeAt(mt)?(o=D,mt++):(o=a,0===Et&&Pt(M)),o!==a?(vt=t,t=xe(r,i)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}function Kt(){var t
return Et++,Me.test(e.charAt(mt))?(t=e.charAt(mt),mt++):(t=a,0===Et&&Pt(Fe)),Et--,t===a&&0===Et&&Pt(De),t}function Wt(){var t
return Et++,Ue.test(e.charAt(mt))?(t=e.charAt(mt),mt++):(t=a,0===Et&&Pt(Ge)),Et--,t===a&&0===Et&&Pt(ke),t}function Zt(){var t,r,n
for(Et++,t=mt,r=[],n=Kt();n!==a;)r.push(n),n=Kt()
return t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(je)),t}function Yt(){var t,r,n
return Et++,t=mt,45===e.charCodeAt(mt)?(r=Xe,mt++):(r=a,0===Et&&Pt(Ke)),r===a&&(r=null),r!==a&&(n=er())!==a?(vt=t,t=r=We(r,n)):(mt=t,t=a),Et--,t===a&&(r=a,0===Et&&Pt(Ve)),t}function zt(){var t,r
return Et++,t=mt,e.substr(mt,2)===Ye?(r=Ye,mt+=2):(r=a,0===Et&&Pt(ze)),r!==a&&(vt=t,r=qe()),Et--,(t=r)===a&&(r=a,0===Et&&Pt(Ze)),t}function qt(){var t,r,n,i,o,s
if(t=mt,39===e.charCodeAt(mt)?(r=ae,mt++):(r=a,0===Et&&Pt(se)),r!==a)if(n=function(){var t,r,n,i
return t=mt,r=mt,e.length>mt?(n=e.charAt(mt),mt++):(n=a,0===Et&&Pt(j)),n!==a?(vt=mt,(i=(i=tt(n))?void 0:a)!==a?r=n=[n,i]:(mt=r,r=a)):(mt=r,r=a),r!==a?e.substring(t,mt):r}(),n!==a){for(i=mt,o=[],e.substr(mt,2)===Ye?(s=Ye,mt+=2):(s=a,0===Et&&Pt(ze)),s===a&&(ue.test(e.charAt(mt))?(s=e.charAt(mt),mt++):(s=a,0===Et&&Pt(ce)));s!==a;)o.push(s),e.substr(mt,2)===Ye?(s=Ye,mt+=2):(s=a,0===Et&&Pt(ze)),s===a&&(ue.test(e.charAt(mt))?(s=e.charAt(mt),mt++):(s=a,0===Et&&Pt(ce)));(i=o!==a?e.substring(i,mt):o)!==a?(39===e.charCodeAt(mt)?(o=ae,mt++):(o=a,0===Et&&Pt(se)),o===a&&(o=null),o!==a?(vt=t,t=r=$e(n,i)):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
else mt=t,t=a
return t}function $t(){var t,r,n,i
return t=mt,r=mt,e.length>mt?(n=e.charAt(mt),mt++):(n=a,0===Et&&Pt(j)),n!==a?(vt=mt,(i=(i=Qe(n))?void 0:a)!==a?r=n=[n,i]:(mt=r,r=a)):(mt=r,r=a),r===a&&(10===e.charCodeAt(mt)?(r=Je,mt++):(r=a,0===Et&&Pt(et))),r!==a?e.substring(t,mt):r}function Qt(){var t,r
return Et++,t=mt,(r=er())===a&&(r=tr()),t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(rt)),t}function Jt(){var t,r
return Et++,t=mt,(r=er())===a&&(r=function(){var t,r,n,i,o
if(Et++,t=mt,r=[],45===e.charCodeAt(mt)?(n=Xe,mt++):(n=a,0===Et&&Pt(Ke)),n===a&&(n=mt,i=mt,Et++,(o=Kt())===a&&(o=Wt()),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a)),n!==a)for(;n!==a;)r.push(n),45===e.charCodeAt(mt)?(n=Xe,mt++):(n=a,0===Et&&Pt(Ke)),n===a&&(n=mt,i=mt,Et++,(o=Kt())===a&&(o=Wt()),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a))
else r=a
return t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(dt)),t}()),t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(nt)),t}function er(){var t,r,n,i,o
if(Et++,t=mt,48===e.charCodeAt(mt)?(r=ot,mt++):(r=a,0===Et&&Pt(at)),r!==a&&(vt=t,r=st()),(t=r)===a){if(t=mt,r=mt,ut.test(e.charAt(mt))?(n=e.charAt(mt),mt++):(n=a,0===Et&&Pt(ct)),n!==a){for(i=[],lt.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(ht));o!==a;)i.push(o),lt.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(ht))
i!==a?r=n=[n,i]:(mt=r,r=a)}else mt=r,r=a
r!==a&&(vt=t,r=ft(r)),t=r}return Et--,t===a&&(r=a,0===Et&&Pt(it)),t}function tr(){var t,r,n,i,o
if(Et++,t=mt,r=[],n=mt,i=mt,Et++,(o=Kt())===a&&(o=Wt()),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a),n!==a)for(;n!==a;)r.push(n),n=mt,i=mt,Et++,(o=Kt())===a&&(o=Wt()),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a)
else r=a
return t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(pt)),t}var rr=["root"]
function nr(){return"plural"===rr[rr.length-1]}function ir(){return t&&t.captureLocation?{location:At()}:{}}var or,ar,sr,ur=t&&t.ignoreTag,cr=t&&t.shouldParseSkeleton
if((r=u())!==a&&mt===e.length)return r
throw r!==a&&mt<e.length&&Pt({type:"end"}),or=yt,ar=bt<e.length?e.charAt(bt):null,sr=bt<e.length?Ht(bt,bt+1):Ht(bt,bt),new P(P.buildMessage(or,ar),or,ar,sr)},L=/(^|[^\\])#/g
function N(e){e.forEach((function(e){(f(e)||h(e))&&Object.keys(e.options).forEach((function(t){for(var r,n=e.options[t],i=-1,s=void 0,u=0;u<n.value.length;u++){var c=n.value[u]
if(a(c)&&L.test(c.value)){i=u,s=c
break}}if(s){var l=s.value.replace(L,"$1{"+e.value+", number}"),h=C(l);(r=n.value).splice.apply(r,(0,o.ev)([i,1],h))}N(n.value)}))}))}function R(e,t){t=(0,o.pi)({normalizeHashtagInPlural:!0,shouldParseSkeleton:!0},t||{})
var r=C(e,t)
return t.normalizeHashtagInPlural&&N(r),r}},543:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{ErrorCode:()=>pe,FormatError:()=>ge,IntlMessageFormat:()=>Te,InvalidValueError:()=>be,InvalidValueTypeError:()=>ye,MissingValueError:()=>Ee,PART_TYPE:()=>ve,default:()=>Oe,formatToParts:()=>Ae,isFormatXMLElementFn:()=>we})
var n,i,o,a=r(582)
function s(e){return e.type===i.literal}function u(e){return e.type===i.argument}function c(e){return e.type===i.number}function l(e){return e.type===i.date}function h(e){return e.type===i.time}function f(e){return e.type===i.select}function p(e){return e.type===i.plural}function d(e){return e.type===i.pound}function m(e){return e.type===i.tag}function v(e){return!(!e||"object"!=typeof e||e.type!==o.number)}function g(e){return!(!e||"object"!=typeof e||e.type!==o.dateTime)}!function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(n||(n={})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(i||(i={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(o||(o={}))
var b=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,y=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function E(e){var t={}
return e.replace(y,(function(e){var r=e.length
switch(e[0]){case"G":t.era=4===r?"long":5===r?"narrow":"short"
break
case"y":t.year=2===r?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":t.day=["numeric","2-digit"][r-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":t.weekday=4===r?"short":5===r?"narrow":"short"
break
case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
t.weekday=["short","long","narrow","short"][r-4]
break
case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
t.weekday=["short","long","narrow","short"][r-4]
break
case"a":t.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1]
break
case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1]
break
case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1]
break
case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":t.minute=["numeric","2-digit"][r-1]
break
case"s":t.second=["numeric","2-digit"][r-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":t.timeZoneName=r<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}var w=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,A=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,_=/^(@+)?(\+|#+)?[rs]?$/g,T=/(\*)(0+)|(#+)(0+)|(0+)/g,O=/^(0+)$/
function S(e){var t={}
return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(_,(function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),t}function B(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function H(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2)
if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!O.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function P(e){return B(e)||{}}function C(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r]
switch(i.stem){case"percent":case"%":t.style="percent"
continue
case"%x100":t.style="percent",t.scale=100
continue
case"currency":t.style="currency",t.currency=i.options[0]
continue
case"group-off":case",_":t.useGrouping=!1
continue
case"precision-integer":case".":t.maximumFractionDigits=0
continue
case"measure-unit":case"unit":t.style="unit",t.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":t.notation="compact",t.compactDisplay="short"
continue
case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long"
continue
case"scientific":t=(0,a.pi)((0,a.pi)((0,a.pi)({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return(0,a.pi)((0,a.pi)({},e),P(t))}),{}))
continue
case"engineering":t=(0,a.pi)((0,a.pi)((0,a.pi)({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return(0,a.pi)((0,a.pi)({},e),P(t))}),{}))
continue
case"notation-simple":t.notation="standard"
continue
case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow"
continue
case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short"
continue
case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long"
continue
case"unit-width-iso-code":t.currencyDisplay="symbol"
continue
case"scale":t.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(T,(function(e,r,n,i,o,a){if(r)t.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(O.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(A.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(A,(function(e,r,n,i,o,a){return"*"===n?t.minimumFractionDigits=r.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""}))
var o=i.options[0]
"w"===o?t=(0,a.pi)((0,a.pi)({},t),{trailingZeroDisplay:"stripIfInteger"}):o&&(t=(0,a.pi)((0,a.pi)({},t),S(o)))}else if(_.test(i.stem))t=(0,a.pi)((0,a.pi)({},t),S(i.stem))
else{var s=B(i.stem)
s&&(t=(0,a.pi)((0,a.pi)({},t),s))
var u=H(i.stem)
u&&(t=(0,a.pi)((0,a.pi)({},t),u))}}return t}var L,N={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]}
function R(e){var t=e.hourCycle
if(void 0===t&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k"
case"h23":return"H"
case"h12":return"h"
case"h11":return"K"
default:throw new Error("Invalid hourCycle")}var r,n=e.language
return"root"!==n&&(r=e.maximize().region),(N[r||""]||N[n||""]||N["".concat(n,"-001")]||N["001"])[0]}var I=new RegExp("^".concat(b.source,"*")),x=new RegExp("".concat(b.source,"*$"))
function D(e,t){return{start:e,end:t}}var M=!!String.prototype.startsWith,F=!!String.fromCodePoint,k=!!Object.fromEntries,U=!!String.prototype.codePointAt,G=!!String.prototype.trimStart,j=!!String.prototype.trimEnd,V=Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},X=!0
try{X="a"===(null===(L=Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===L?void 0:L[0])}catch(e){X=!1}var K,W=M?function(e,t,r){return e.startsWith(t,r)}:function(e,t,r){return e.slice(r,r+t.length)===t},Z=F?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r,n="",i=e.length,o=0;i>o;){if((r=e[o++])>1114111)throw RangeError(r+" is not a valid code point")
n+=r<65536?String.fromCharCode(r):String.fromCharCode(55296+((r-=65536)>>10),r%1024+56320)}return n},Y=k?Object.fromEntries:function(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r],o=i[0],a=i[1]
t[o]=a}return t},z=U?function(e,t){return e.codePointAt(t)}:function(e,t){var r=e.length
if(!(t<0||t>=r)){var n,i=e.charCodeAt(t)
return i<55296||i>56319||t+1===r||(n=e.charCodeAt(t+1))<56320||n>57343?i:n-56320+(i-55296<<10)+65536}},q=G?function(e){return e.trimStart()}:function(e){return e.replace(I,"")},$=j?function(e){return e.trimEnd()}:function(e){return e.replace(x,"")}
function Q(e,t){return new RegExp(e,t)}if(X){var J=Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu")
K=function(e,t){var r
return J.lastIndex=t,null!==(r=J.exec(e)[1])&&void 0!==r?r:""}}else K=function(e,t){for(var r=[];;){var n=z(e,t)
if(void 0===n||re(n)||ne(n))break
r.push(n),t+=n>=65536?2:1}return Z.apply(void 0,r)}
var ee=function(){function e(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once")
return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(e,t,r){for(var o=[];!this.isEOF();){var a=this.char()
if(123===a){if((s=this.parseArgument(e,r)).err)return s
o.push(s.val)}else{if(125===a&&e>0)break
if(35!==a||"plural"!==t&&"selectordinal"!==t){if(60===a&&!this.ignoreTag&&47===this.peek()){if(r)break
return this.error(n.UNMATCHED_CLOSING_TAG,D(this.clonePosition(),this.clonePosition()))}if(60===a&&!this.ignoreTag&&te(this.peek()||0)){if((s=this.parseTag(e,t)).err)return s
o.push(s.val)}else{var s
if((s=this.parseLiteral(e,t)).err)return s
o.push(s.val)}}else{var u=this.clonePosition()
this.bump(),o.push({type:i.pound,location:D(u,this.clonePosition())})}}}return{val:o,err:null}},e.prototype.parseTag=function(e,t){var r=this.clonePosition()
this.bump()
var o=this.parseTagName()
if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:i.literal,value:"<".concat(o,"/>"),location:D(r,this.clonePosition())},err:null}
if(this.bumpIf(">")){var a=this.parseMessage(e+1,t,!0)
if(a.err)return a
var s=a.val,u=this.clonePosition()
if(this.bumpIf("</")){if(this.isEOF()||!te(this.char()))return this.error(n.INVALID_TAG,D(u,this.clonePosition()))
var c=this.clonePosition()
return o!==this.parseTagName()?this.error(n.UNMATCHED_CLOSING_TAG,D(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:i.tag,value:o,children:s,location:D(r,this.clonePosition())},err:null}:this.error(n.INVALID_TAG,D(u,this.clonePosition())))}return this.error(n.UNCLOSED_TAG,D(r,this.clonePosition()))}return this.error(n.INVALID_TAG,D(r,this.clonePosition()))},e.prototype.parseTagName=function(){var e,t=this.offset()
for(this.bump();!this.isEOF()&&(45===(e=this.char())||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039);)this.bump()
return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(e,t){for(var r=this.clonePosition(),n="";;){var o=this.tryParseQuote(t)
if(o)n+=o
else{var a=this.tryParseUnquoted(e,t)
if(a)n+=a
else{var s=this.tryParseLeftAngleBracket()
if(!s)break
n+=s}}}var u=D(r,this.clonePosition())
return{val:{type:i.literal,value:n,location:u},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(te(e=this.peek()||0)||47===e)?null:(this.bump(),"<")
var e},e.prototype.tryParseQuote=function(e){if(this.isEOF()||39!==this.char())return null
switch(this.peek()){case 39:return this.bump(),this.bump(),"'"
case 123:case 60:case 62:case 125:break
case 35:if("plural"===e||"selectordinal"===e)break
return null
default:return null}this.bump()
var t=[this.char()]
for(this.bump();!this.isEOF();){var r=this.char()
if(39===r){if(39!==this.peek()){this.bump()
break}t.push(39),this.bump()}else t.push(r)
this.bump()}return Z.apply(void 0,t)},e.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null
var r=this.char()
return 60===r||123===r||35===r&&("plural"===t||"selectordinal"===t)||125===r&&e>0?null:(this.bump(),Z(r))},e.prototype.parseArgument=function(e,t){var r=this.clonePosition()
if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,D(r,this.clonePosition()))
if(125===this.char())return this.bump(),this.error(n.EMPTY_ARGUMENT,D(r,this.clonePosition()))
var o=this.parseIdentifierIfPossible().value
if(!o)return this.error(n.MALFORMED_ARGUMENT,D(r,this.clonePosition()))
if(this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,D(r,this.clonePosition()))
switch(this.char()){case 125:return this.bump(),{val:{type:i.argument,value:o,location:D(r,this.clonePosition())},err:null}
case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,D(r,this.clonePosition())):this.parseArgumentOptions(e,t,o,r)
default:return this.error(n.MALFORMED_ARGUMENT,D(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),r=K(this.message,t),n=t+r.length
return this.bumpTo(n),{value:r,location:D(e,this.clonePosition())}},e.prototype.parseArgumentOptions=function(e,t,r,s){var u,c=this.clonePosition(),l=this.parseIdentifierIfPossible().value,h=this.clonePosition()
switch(l){case"":return this.error(n.EXPECT_ARGUMENT_TYPE,D(c,h))
case"number":case"date":case"time":this.bumpSpace()
var f=null
if(this.bumpIf(",")){this.bumpSpace()
var p=this.clonePosition()
if((A=this.parseSimpleArgStyleIfPossible()).err)return A
if(0===(g=$(A.val)).length)return this.error(n.EXPECT_ARGUMENT_STYLE,D(this.clonePosition(),this.clonePosition()))
f={style:g,styleLocation:D(p,this.clonePosition())}}if((_=this.tryParseArgumentClose(s)).err)return _
var d=D(s,this.clonePosition())
if(f&&W(null==f?void 0:f.style,"::",0)){var m=q(f.style.slice(2))
if("number"===l)return(A=this.parseNumberSkeletonFromString(m,f.styleLocation)).err?A:{val:{type:i.number,value:r,location:d,style:A.val},err:null}
if(0===m.length)return this.error(n.EXPECT_DATE_TIME_SKELETON,d)
var v=m
this.locale&&(v=function(e,t){for(var r="",n=0;n<e.length;n++){var i=e.charAt(n)
if("j"===i){for(var o=0;n+1<e.length&&e.charAt(n+1)===i;)o++,n++
var a=1+(1&o),s=o<2?1:3+(o>>1),u=R(t)
for("H"!=u&&"k"!=u||(s=0);s-- >0;)r+="a"
for(;a-- >0;)r=u+r}else r+="J"===i?"H":i}return r}(m,this.locale))
var g={type:o.dateTime,pattern:v,location:f.styleLocation,parsedOptions:this.shouldParseSkeletons?E(v):{}}
return{val:{type:"date"===l?i.date:i.time,value:r,location:d,style:g},err:null}}return{val:{type:"number"===l?i.number:"date"===l?i.date:i.time,value:r,location:d,style:null!==(u=null==f?void 0:f.style)&&void 0!==u?u:null},err:null}
case"plural":case"selectordinal":case"select":var b=this.clonePosition()
if(this.bumpSpace(),!this.bumpIf(","))return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS,D(b,(0,a.pi)({},b)))
this.bumpSpace()
var y=this.parseIdentifierIfPossible(),w=0
if("select"!==l&&"offset"===y.value){if(!this.bumpIf(":"))return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,D(this.clonePosition(),this.clonePosition()))
var A
if(this.bumpSpace(),(A=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return A
this.bumpSpace(),y=this.parseIdentifierIfPossible(),w=A.val}var _,T=this.tryParsePluralOrSelectOptions(e,l,t,y)
if(T.err)return T
if((_=this.tryParseArgumentClose(s)).err)return _
var O=D(s,this.clonePosition())
return"select"===l?{val:{type:i.select,value:r,options:Y(T.val),location:O},err:null}:{val:{type:i.plural,value:r,options:Y(T.val),offset:w,pluralType:"plural"===l?"cardinal":"ordinal",location:O},err:null}
default:return this.error(n.INVALID_ARGUMENT_TYPE,D(c,h))}},e.prototype.tryParseArgumentClose=function(e){return this.isEOF()||125!==this.char()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,D(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump()
var r=this.clonePosition()
if(!this.bumpUntil("'"))return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,D(r,this.clonePosition()))
this.bump()
break
case 123:e+=1,this.bump()
break
case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null}
e-=1
break
default:this.bump()}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(e,t){var r=[]
try{r=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty")
for(var t=[],r=0,n=e.split(w).filter((function(e){return e.length>0}));r<n.length;r++){var i=n[r].split("/")
if(0===i.length)throw new Error("Invalid number skeleton")
for(var o=i[0],a=i.slice(1),s=0,u=a;s<u.length;s++)if(0===u[s].length)throw new Error("Invalid number skeleton")
t.push({stem:o,options:a})}return t}(e)}catch(e){return this.error(n.INVALID_NUMBER_SKELETON,t)}return{val:{type:o.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?C(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(e,t,r,i){for(var o,a=!1,s=[],u=new Set,c=i.value,l=i.location;;){if(0===c.length){var h=this.clonePosition()
if("select"===t||!this.bumpIf("="))break
var f=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR,n.INVALID_PLURAL_ARGUMENT_SELECTOR)
if(f.err)return f
l=D(h,this.clonePosition()),c=this.message.slice(h.offset,this.offset())}if(u.has(c))return this.error("select"===t?n.DUPLICATE_SELECT_ARGUMENT_SELECTOR:n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,l)
"other"===c&&(a=!0),this.bumpSpace()
var p=this.clonePosition()
if(!this.bumpIf("{"))return this.error("select"===t?n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,D(this.clonePosition(),this.clonePosition()))
var d=this.parseMessage(e+1,t,r)
if(d.err)return d
var m=this.tryParseArgumentClose(p)
if(m.err)return m
s.push([c,{value:d.val,location:D(p,this.clonePosition())}]),u.add(c),this.bumpSpace(),c=(o=this.parseIdentifierIfPossible()).value,l=o.location}return 0===s.length?this.error("select"===t?n.EXPECT_SELECT_ARGUMENT_SELECTOR:n.EXPECT_PLURAL_ARGUMENT_SELECTOR,D(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(n.MISSING_OTHER_CLAUSE,D(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(e,t){var r=1,n=this.clonePosition()
this.bumpIf("+")||this.bumpIf("-")&&(r=-1)
for(var i=!1,o=0;!this.isEOF();){var a=this.char()
if(!(a>=48&&a<=57))break
i=!0,o=10*o+(a-48),this.bump()}var s=D(n,this.clonePosition())
return i?V(o*=r)?{val:o,err:null}:this.error(t,s):this.error(e,s)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var e=this.position.offset
if(e>=this.message.length)throw Error("out of bound")
var t=z(this.message,e)
if(void 0===t)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"))
return t},e.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var e=this.char()
10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},e.prototype.bumpIf=function(e){if(W(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump()
return!0}return!1},e.prototype.bumpUntil=function(e){var t=this.offset(),r=this.message.indexOf(e,t)
return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()))
for(e=Math.min(e,this.message.length);;){var t=this.offset()
if(t===e)break
if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"))
if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&re(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null
var e=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(e>=65536?2:1))
return null!=r?r:null},e}()
function te(e){return e>=97&&e<=122||e>=65&&e<=90}function re(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function ne(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function ie(e){e.forEach((function(e){if(delete e.location,f(e)||p(e))for(var t in e.options)delete e.options[t].location,ie(e.options[t].value)
else c(e)&&v(e.style)||(l(e)||h(e))&&g(e.style)?delete e.style.location:m(e)&&ie(e.children)}))}function oe(e,t){void 0===t&&(t={}),t=(0,a.pi)({shouldParseSkeletons:!0,requiresOtherClause:!0},t)
var r=new ee(e,t).parse()
if(r.err){var i=SyntaxError(n[r.err.kind])
throw i.location=r.err.location,i.originalMessage=r.err.message,i}return(null==t?void 0:t.captureLocation)||ie(r.val),r.val}function ae(e,t){var r=t&&t.cache?t.cache:de,n=t&&t.serializer?t.serializer:he
return(t&&t.strategy?t.strategy:le)(e,{cache:r,serializer:n})}function se(e,t,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=t.get(o)
return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function ue(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=t.get(i)
return void 0===o&&(o=e.apply(this,n),t.set(i,o)),o}function ce(e,t,r,n,i){return r.bind(t,e,n,i)}function le(e,t){return ce(e,this,1===e.length?se:ue,t.cache.create(),t.serializer)}var he=function(){return JSON.stringify(arguments)}
function fe(){this.cache=Object.create(null)}fe.prototype.get=function(e){return this.cache[e]},fe.prototype.set=function(e,t){this.cache[e]=t}
var pe,de={create:function(){return new fe}},me={variadic:function(e,t){return ce(e,this,ue,t.cache.create(),t.serializer)},monadic:function(e,t){return ce(e,this,se,t.cache.create(),t.serializer)}}
!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(pe||(pe={}))
var ve,ge=function(e){function t(t,r,n){var i=e.call(this,t)||this
return i.code=r,i.originalMessage=n,i}return(0,a.ZT)(t,e),t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),be=function(e){function t(t,r,n,i){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(r,'". Options are "').concat(Object.keys(n).join('", "'),'"'),pe.INVALID_VALUE,i)||this}return(0,a.ZT)(t,e),t}(ge),ye=function(e){function t(t,r,n){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(r),pe.INVALID_VALUE,n)||this}return(0,a.ZT)(t,e),t}(ge),Ee=function(e){function t(t,r){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(r,'"'),pe.MISSING_VALUE,r)||this}return(0,a.ZT)(t,e),t}(ge)
function we(e){return"function"==typeof e}function Ae(e,t,r,n,i,o,a){if(1===e.length&&s(e[0]))return[{type:ve.literal,value:e[0].value}]
for(var b=[],y=0,E=e;y<E.length;y++){var w=E[y]
if(s(w))b.push({type:ve.literal,value:w.value})
else if(d(w))"number"==typeof o&&b.push({type:ve.literal,value:r.getNumberFormat(t).format(o)})
else{var A=w.value
if(!i||!(A in i))throw new Ee(A,a)
var _=i[A]
if(u(w))_&&"string"!=typeof _&&"number"!=typeof _||(_="string"==typeof _||"number"==typeof _?String(_):""),b.push({type:"string"==typeof _?ve.literal:ve.object,value:_})
else if(l(w)){var T="string"==typeof w.style?n.date[w.style]:g(w.style)?w.style.parsedOptions:void 0
b.push({type:ve.literal,value:r.getDateTimeFormat(t,T).format(_)})}else if(h(w))T="string"==typeof w.style?n.time[w.style]:g(w.style)?w.style.parsedOptions:n.time.medium,b.push({type:ve.literal,value:r.getDateTimeFormat(t,T).format(_)})
else if(c(w))(T="string"==typeof w.style?n.number[w.style]:v(w.style)?w.style.parsedOptions:void 0)&&T.scale&&(_*=T.scale||1),b.push({type:ve.literal,value:r.getNumberFormat(t,T).format(_)})
else{if(m(w)){var O=w.children,S=w.value,B=i[S]
if(!we(B))throw new ye(S,"function",a)
var H=B(Ae(O,t,r,n,i,o).map((function(e){return e.value})))
Array.isArray(H)||(H=[H]),b.push.apply(b,H.map((function(e){return{type:"string"==typeof e?ve.literal:ve.object,value:e}})))}if(f(w)){if(!(P=w.options[_]||w.options.other))throw new be(w.value,_,Object.keys(w.options),a)
b.push.apply(b,Ae(P.value,t,r,n,i))}else if(p(w)){var P
if(!(P=w.options["=".concat(_)])){if(!Intl.PluralRules)throw new ge('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',pe.MISSING_INTL_API,a)
var C=r.getPluralRules(t,{type:w.pluralType}).select(_-(w.offset||0))
P=w.options[C]||w.options.other}if(!P)throw new be(w.value,_,Object.keys(w.options),a)
b.push.apply(b,Ae(P.value,t,r,n,i,_-(w.offset||0)))}}}}return(L=b).length<2?L:L.reduce((function(e,t){var r=e[e.length-1]
return r&&r.type===ve.literal&&t.type===ve.literal?r.value+=t.value:e.push(t),e}),[])
var L}function _e(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(ve||(ve={}))
var Te=function(){function e(t,r,n,i){var o,s,u,c=this
if(void 0===r&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=c.formatToParts(e)
if(1===t.length)return t[0].value
var r=t.reduce((function(e,t){return e.length&&t.type===ve.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[])
return r.length<=1?r[0]||"":r},this.formatToParts=function(e){return Ae(c.ast,c.locales,c.formatters,c.formats,e,void 0,c.message)},this.resolvedOptions=function(){return{locale:c.resolvedLocale.toString()}},this.getAst=function(){return c.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
this.ast=e.__parse(t,{ignoreTag:null==i?void 0:i.ignoreTag,locale:this.resolvedLocale})}else this.ast=t
if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.")
this.formats=(s=e.formats,(u=n)?Object.keys(s).reduce((function(e,t){var r,n
return e[t]=(r=s[t],(n=u[t])?(0,a.pi)((0,a.pi)((0,a.pi)({},r||{}),n||{}),Object.keys(r).reduce((function(e,t){return e[t]=(0,a.pi)((0,a.pi)({},r[t]),n[t]||{}),e}),{})):r),e}),(0,a.pi)({},s)):s),this.formatters=i&&i.formatters||(void 0===(o=this.formatterCache)&&(o={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ae((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.NumberFormat).bind.apply(e,(0,a.ev)([void 0],t,!1)))}),{cache:_e(o.number),strategy:me.variadic}),getDateTimeFormat:ae((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.DateTimeFormat).bind.apply(e,(0,a.ev)([void 0],t,!1)))}),{cache:_e(o.dateTime),strategy:me.variadic}),getPluralRules:ae((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.PluralRules).bind.apply(e,(0,a.ev)([void 0],t,!1)))}),{cache:_e(o.pluralRules),strategy:me.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(e){var t=Intl.NumberFormat.supportedLocalesOf(e)
return t.length>0?new Intl.Locale(t[0]):new Intl.Locale("string"==typeof e?e:e[0])},e.__parse=oe,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}()
const Oe=Te},582:(e,t,r)=>{"use strict"
r.d(t,{ZT:()=>i,ev:()=>a,pi:()=>o})
var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)}
function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function a(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create}}])
