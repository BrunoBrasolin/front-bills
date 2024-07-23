var G={JSACTION:"jsaction"},S={JSACTION:"__jsaction",OWNER:"__owner"},U={};function M(t){return t[S.JSACTION]}function Pe(t){let e=M(t)??{};return O(t,e),e}function O(t,e){t[S.JSACTION]=e}function x(t){return U[t]}function X(t,e){U[t]=e}var i={AUXCLICK:"auxclick",CHANGE:"change",CLICK:"click",CLICKMOD:"clickmod",CLICKONLY:"clickonly",DBLCLICK:"dblclick",FOCUS:"focus",FOCUSIN:"focusin",BLUR:"blur",FOCUSOUT:"focusout",SUBMIT:"submit",KEYDOWN:"keydown",KEYPRESS:"keypress",KEYUP:"keyup",MOUSEUP:"mouseup",MOUSEDOWN:"mousedown",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",MOUSEMOVE:"mousemove",POINTERUP:"pointerup",POINTERDOWN:"pointerdown",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERMOVE:"pointermove",POINTERCANCEL:"pointercancel",GOTPOINTERCAPTURE:"gotpointercapture",LOSTPOINTERCAPTURE:"lostpointercapture",ERROR:"error",LOAD:"load",UNLOAD:"unload",TOUCHSTART:"touchstart",TOUCHEND:"touchend",TOUCHMOVE:"touchmove",INPUT:"input",SCROLL:"scroll",TOGGLE:"toggle",CUSTOM:"_custom"},W=[i.MOUSEENTER,i.MOUSELEAVE,"pointerenter","pointerleave"],q=[i.CLICK,i.DBLCLICK,i.FOCUSIN,i.FOCUSOUT,i.KEYDOWN,i.KEYUP,i.KEYPRESS,i.MOUSEOVER,i.MOUSEOUT,i.SUBMIT,i.TOUCHSTART,i.TOUCHEND,i.TOUCHMOVE,"touchcancel","auxclick","change","compositionstart","compositionupdate","compositionend","beforeinput","input","select","copy","cut","paste","mousedown","mouseup","wheel","contextmenu","dragover","dragenter","dragleave","drop","dragstart","dragend","pointerdown","pointermove","pointerup","pointercancel","pointerover","pointerout","gotpointercapture","lostpointercapture","ended","loadedmetadata","pagehide","pageshow","visibilitychange","beforematch"],m=[i.FOCUS,i.BLUR,i.ERROR,i.LOAD,i.TOGGLE],j=t=>m.indexOf(t)>=0,J=[...q,...m],Ie=t=>J.indexOf(t)>=0,$=3,z=13,Q=32,a={MAC_ENTER:$,ENTER:z,SPACE:Q};function Z(t){return t===i.MOUSEENTER?i.MOUSEOVER:t===i.MOUSELEAVE?i.MOUSEOUT:t===i.POINTERENTER?i.POINTEROVER:t===i.POINTERLEAVE?i.POINTEROUT:t}function ee(t,e,n){let r=!1;return j(e)&&(r=!0),t.addEventListener(e,n,r),{eventType:e,handler:n,capture:r}}function te(t,e){t.removeEventListener?t.removeEventListener(e.eventType,e.handler,e.capture):t.detachEvent&&t.detachEvent(`on${e.eventType}`,e.handler)}function ne(t){t.preventDefault?t.preventDefault():t.returnValue=!1}var N=typeof navigator<"u"&&/Macintosh/.test(navigator.userAgent);function re(t){return t.which===2||t.which==null&&t.button===4}function ie(t){return N&&t.metaKey||!N&&t.ctrlKey||re(t)||t.shiftKey}var Ue=typeof navigator<"u"&&!/Opera/.test(navigator.userAgent)&&/WebKit/.test(navigator.userAgent),Me=typeof navigator<"u"&&(/MSIE/.test(navigator.userAgent)||/Trident/.test(navigator.userAgent)),me=typeof navigator<"u"&&!/Opera|WebKit/.test(navigator.userAgent)&&/Gecko/.test(navigator.product);function se(t,e,n){let r=t.relatedTarget;return(t.type===i.MOUSEOVER&&e===i.MOUSEENTER||t.type===i.MOUSEOUT&&e===i.MOUSELEAVE||t.type===i.POINTEROVER&&e===i.POINTERENTER||t.type===i.POINTEROUT&&e===i.POINTERLEAVE)&&(!r||r!==n&&!n.contains(r))}function oe(t,e){let n={};for(let r in t){if(r==="srcElement"||r==="target")continue;let s=r,o=t[s];typeof o!="function"&&(n[s]=o)}return t.type===i.MOUSEOVER?n.type=i.MOUSEENTER:t.type===i.MOUSEOUT?n.type=i.MOUSELEAVE:t.type===i.POINTEROVER?n.type=i.POINTERENTER:n.type=i.POINTERLEAVE,n.target=n.srcElement=e,n.bubbles=!1,n}var Le={Enter:a.ENTER," ":a.SPACE},_e={A:a.ENTER,BUTTON:0,CHECKBOX:a.SPACE,COMBOBOX:a.ENTER,FILE:0,GRIDCELL:a.ENTER,LINK:a.ENTER,LISTBOX:a.ENTER,MENU:0,MENUBAR:0,MENUITEM:0,MENUITEMCHECKBOX:0,MENUITEMRADIO:0,OPTION:0,RADIO:a.SPACE,RADIOGROUP:a.SPACE,RESET:0,SUBMIT:0,SWITCH:a.SPACE,TAB:0,TREE:a.ENTER,TREEITEM:a.ENTER};var ce=typeof navigator<"u"&&/iPhone|iPad|iPod/.test(navigator.userAgent),y=class{constructor(e){this.element=e,this.handlerInfos=[]}addEventListener(e,n){ce&&(this.element.style.cursor="pointer"),this.handlerInfos.push(ee(this.element,e,n(this.element)))}cleanUp(){for(let e=0;e<this.handlerInfos.length;e++)te(this.element,this.handlerInfos[e]);this.handlerInfos=[]}},ae={NAMESPACE_ACTION_SEPARATOR:".",EVENT_ACTION_SEPARATOR:":"};function p(t){return t.eventType}function C(t,e){t.eventType=e}function f(t){return t.event}function L(t,e){t.event=e}function _(t){return t.targetElement}function D(t,e){t.targetElement=e}function K(t){return t.eic}function Ee(t,e){t.eic=e}function ue(t){return t.timeStamp}function pe(t,e){t.timeStamp=e}function d(t){return t.eia}function k(t,e,n){t.eia=[e,n]}function A(t){t.eia=void 0}function h(t){return t[1]}function le(t){return t.eirp}function b(t,e){t.eirp=e}function w(t){return t.eir}function V(t,e){t.eir=e}function B(t){return{eventType:t.eventType,event:t.event,targetElement:t.targetElement,eic:t.eic,eia:t.eia,timeStamp:t.timeStamp,eirp:t.eirp,eiack:t.eiack,eir:t.eir}}function Te(t,e,n,r,s,o,c,E){return{eventType:t,event:e,targetElement:n,eic:r,timeStamp:s,eia:o,eirp:c,eiack:E}}var R=class t{constructor(e){this.eventInfo=e}getEventType(){return p(this.eventInfo)}setEventType(e){C(this.eventInfo,e)}getEvent(){return f(this.eventInfo)}setEvent(e){L(this.eventInfo,e)}getTargetElement(){return _(this.eventInfo)}setTargetElement(e){D(this.eventInfo,e)}getContainer(){return K(this.eventInfo)}setContainer(e){Ee(this.eventInfo,e)}getTimestamp(){return ue(this.eventInfo)}setTimestamp(e){pe(this.eventInfo,e)}getAction(){let e=d(this.eventInfo);if(e)return{name:e[0],element:e[1]}}setAction(e){if(!e){A(this.eventInfo);return}k(this.eventInfo,e.name,e.element)}getIsReplay(){return le(this.eventInfo)}setIsReplay(e){b(this.eventInfo,e)}getResolved(){return w(this.eventInfo)}setResolved(e){V(this.eventInfo,e)}clone(){return new t(B(this.eventInfo))}},he={},fe=/\s*;\s*/,de=i.CLICK,g=class{constructor({syntheticMouseEventSupport:e=!1}={}){this.a11yClickSupport=!1,this.updateEventInfoForA11yClick=void 0,this.preventDefaultForA11yClick=void 0,this.populateClickOnlyAction=void 0,this.syntheticMouseEventSupport=e}resolveEventType(e){p(e)===i.CLICK&&ie(f(e))?C(e,i.CLICKMOD):this.a11yClickSupport&&this.updateEventInfoForA11yClick(e)}resolveAction(e){w(e)||(this.populateAction(e,_(e)),V(e,!0))}resolveParentAction(e){let n=d(e),r=n&&h(n);A(e);let s=r&&this.getParentNode(r);s&&this.populateAction(e,s)}populateAction(e,n){let r=n;for(;r&&r!==K(e)&&(r.nodeType===Node.ELEMENT_NODE&&this.populateActionOnElement(r,e),!d(e));)r=this.getParentNode(r);let s=d(e);if(s&&(this.a11yClickSupport&&this.preventDefaultForA11yClick(e),this.syntheticMouseEventSupport&&(p(e)===i.MOUSEENTER||p(e)===i.MOUSELEAVE||p(e)===i.POINTERENTER||p(e)===i.POINTERLEAVE)))if(se(f(e),p(e),h(s))){let o=oe(f(e),h(s));L(e,o),D(e,h(s))}else A(e)}getParentNode(e){let n=e[S.OWNER];if(n)return n;let r=e.parentNode;return r?.nodeName==="#document-fragment"?r?.host??null:r}populateActionOnElement(e,n){let r=this.parseActions(e),s=r[p(n)];s!==void 0&&k(n,s,e),this.a11yClickSupport&&this.populateClickOnlyAction(e,n,r)}parseActions(e){let n=M(e);if(!n){let r=e.getAttribute(G.JSACTION);if(!r)n=he,O(e,n);else{if(n=x(r),!n){n={};let s=r.split(fe);for(let o=0;o<s.length;o++){let c=s[o];if(!c)continue;let E=c.indexOf(ae.EVENT_ACTION_SEPARATOR),u=E!==-1,T=u?c.substr(0,E).trim():de,Y=u?c.substr(E+1).trim():c;n[T]=Y}X(r,n)}O(e,n)}}return n}addA11yClickSupport(e,n,r){this.a11yClickSupport=!0,this.updateEventInfoForA11yClick=e,this.preventDefaultForA11yClick=n,this.populateClickOnlyAction=r}},F=function(t){return t[t.I_AM_THE_JSACTION_FRAMEWORK=0]="I_AM_THE_JSACTION_FRAMEWORK",t}(F||{}),v=class{constructor(e,{actionResolver:n,eventReplayer:r}={}){this.dispatchDelegate=e,this.eventReplayScheduled=!1,this.replayEventInfoWrappers=[],this.actionResolver=n,this.eventReplayer=r}dispatch(e){let n=new R(e);this.actionResolver?.resolveEventType(e),this.actionResolver?.resolveAction(e);let r=n.getAction();if(r&&Oe(r.element,n)&&ne(n.getEvent()),this.eventReplayer&&n.getIsReplay()){this.scheduleEventInfoWrapperReplay(n);return}this.dispatchDelegate(n)}scheduleEventInfoWrapperReplay(e){this.replayEventInfoWrappers.push(e),!this.eventReplayScheduled&&(this.eventReplayScheduled=!0,Promise.resolve().then(()=>{this.eventReplayScheduled=!1,this.eventReplayer(this.replayEventInfoWrappers)}))}};function Oe(t,e){return t.tagName==="A"&&(e.getEventType()===i.CLICK||e.getEventType()===i.CLICKMOD)}var H=Symbol.for("propagationStopped"),Ae={REPLAY:101};var Re="`preventDefault` called during event replay.";var ge="`composedPath` called during event replay.",P=class{constructor(e){this.dispatchDelegate=e,this.actionResolver=new g,this.dispatcher=new v(n=>{this.dispatchToDelegate(n)},{actionResolver:this.actionResolver})}dispatch(e){this.dispatcher.dispatch(e)}dispatchToDelegate(e){for(e.getIsReplay()&&Ce(e),ve(e);e.getAction();){if(Ne(e),this.dispatchDelegate(e.getEvent(),e.getAction().name),Se(e))return;this.actionResolver.resolveParentAction(e.eventInfo)}}};function ve(t){let e=t.getEvent(),n=()=>{e[H]=!0};l(e,"stopPropagation",n),l(e,"stopImmediatePropagation",n)}function Se(t){return!!t.getEvent()[H]}function Ce(t){let e=t.getEvent(),n=t.getTargetElement();l(e,"target",n),l(e,"eventPhase",Ae.REPLAY),l(e,"preventDefault",()=>{throw new Error(Re+"")}),l(e,"composedPath",()=>{throw new Error(ge+"")})}function Ne(t){let e=t.getEvent(),n=t.getAction()?.element;n&&l(e,"currentTarget",n,{configurable:!0})}function l(t,e,n,{configurable:r=!1}={}){Object.defineProperty(t,e,{value:n,configurable:r})}function De(t,e){t.ecrd(n=>{e.dispatch(n)},F.I_AM_THE_JSACTION_FRAMEWORK)}var ye=!1,Ke=(()=>{class t{static{this.MOUSE_SPECIAL_SUPPORT=ye}constructor(n,r){this.useActionResolver=r,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[],this.containerManager=n}handleEvent(n,r,s){let o=Te(n,r,r.target,s,Date.now());this.handleEventInfo(o)}handleEventInfo(n){if(!this.dispatcher){b(n,!0),this.queuedEventInfos?.push(n);return}this.dispatcher(n)}addEvent(n,r){if(n in this.eventHandlers||!this.containerManager||!t.MOUSE_SPECIAL_SUPPORT&&W.indexOf(n)>=0)return;let s=(c,E,u)=>{this.handleEvent(c,E,u)};this.eventHandlers[n]=s;let o=Z(r||n);if(o!==n){let c=this.browserEventTypeToExtraEventTypes[o]||[];c.push(n),this.browserEventTypeToExtraEventTypes[o]=c}this.containerManager.addEventListener(o,c=>E=>{s(n,E,c)})}replayEarlyEvents(n=window._ejsa){if(!n)return;let r=n.q;for(let o=0;o<r.length;o++){let c=r[o],E=this.getEventTypesForBrowserEventType(c.eventType);for(let u=0;u<E.length;u++){let T=B(c);C(T,E[u]),this.handleEventInfo(T)}}let s=n.h;I(n.c,n.et,s),I(n.c,n.etc,s,!0),delete window._ejsa}getEventTypesForBrowserEventType(n){let r=[];return this.eventHandlers[n]&&r.push(n),this.browserEventTypeToExtraEventTypes[n]&&r.push(...this.browserEventTypeToExtraEventTypes[n]),r}handler(n){return this.eventHandlers[n]}cleanUp(){this.containerManager.cleanUp(),this.containerManager=null,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[]}registerDispatcher(n,r){this.ecrd(n,r)}ecrd(n,r){if(this.dispatcher=n,this.queuedEventInfos?.length){for(let s=0;s<this.queuedEventInfos.length;s++)this.handleEventInfo(this.queuedEventInfos[s]);this.queuedEventInfos=null}}addA11yClickSupport(){}exportAddA11yClickSupport(){}}return t})();function I(t,e,n,r){for(let s=0;s<e.length;s++)t.removeEventListener(e[s],n,r)}export{G as Attribute,Ke as EventContract,y as EventContractContainer,P as EventDispatcher,R as EventInfoWrapper,Ae as EventPhase,Pe as getActionCache,j as isCaptureEventType,Ie as isEarlyEventType,De as registerDispatcher};/*! Bundled license information:

@angular/core/fesm2022/primitives/event-dispatch.mjs:
  (**
   * @license Angular v18.1.1
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/