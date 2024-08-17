var Q=Object.defineProperty;var N=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var D=(s,i,e)=>i in s?Q(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e,w=(s,i)=>{for(var e in i||={})J.call(i,e)&&D(s,e,i[e]);if(N)for(var e of N(i))ee.call(i,e)&&D(s,e,i[e]);return s};import{DOCUMENT as h}from"@angular/common";import*as o from"@angular/core";import{inject as b,APP_ID as te,QueryList as R,isSignal as x,effect as ie,afterNextRender as se,Injector as V,booleanAttribute as S,InjectionToken as p,EventEmitter as ne}from"@angular/core";import*as l from"@angular/cdk/platform";import{Platform as re,_getFocusedElementPierceShadowDom as oe,normalizePassiveListenerOptions as Z,_getEventTarget as m,_getShadowRoot as ce}from"@angular/cdk/platform";import{Subject as g,Subscription as ae,BehaviorSubject as he,of as ue}from"rxjs";import{hasModifierKey as de,A as le,Z as _e,ZERO as fe,NINE as me,PAGE_DOWN as ge,PAGE_UP as be,END as pe,HOME as ve,LEFT_ARROW as Ie,RIGHT_ARROW as ye,UP_ARROW as Ae,DOWN_ARROW as Ee,TAB as Te,ALT as we,CONTROL as Ce,MAC_META as ke,META as Le,SHIFT as Me}from"@angular/cdk/keycodes";import{tap as Fe,debounceTime as Oe,filter as Ne,map as De,skip as Re,distinctUntilChanged as xe,takeUntil as Se}from"rxjs/operators";import*as $ from"@angular/cdk/observers";import{ObserversModule as je}from"@angular/cdk/observers";import{coerceElement as C}from"@angular/cdk/coercion";import{BreakpointObserver as Be}from"@angular/cdk/layout";var G=" ";function Pe(s,i,e){let t=A(s,i);e=e.trim(),!t.some(n=>n.trim()===e)&&(t.push(e),s.setAttribute(i,t.join(G)))}function Ke(s,i,e){let t=A(s,i);e=e.trim();let n=t.filter(r=>r!==e);n.length?s.setAttribute(i,n.join(G)):s.removeAttribute(i)}function A(s,i){return s.getAttribute(i)?.match(/\S+/g)??[]}var Ft="cdk-describedby-message-container",Y="cdk-describedby-message",v="cdk-describedby-host",M=0,Ot=(()=>{class s{constructor(e,t){this._platform=t,this._messageRegistry=new Map,this._messagesContainer=null,this._id=`${M++}`,this._document=e,this._id=b(te)+"-"+M++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;let r=k(t,n);typeof t!="string"?(j(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;let r=k(t,n);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let c=this._messageRegistry.get(r);c&&c.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${v}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(v);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let n=this._document.createElement("div");j(n,this._id),n.textContent=e,t&&n.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(k(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let n=this._document.createElement("div");n.style.visibility="hidden",n.classList.add(e),n.classList.add("cdk-visually-hidden"),this._platform&&!this._platform.isBrowser&&n.setAttribute("platform","server"),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){let t=A(e,"aria-describedby").filter(n=>n.indexOf(Y)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let n=this._messageRegistry.get(t);Pe(e,"aria-describedby",n.messageElement.id),e.setAttribute(v,this._id),n.referenceCount++}_removeMessageReference(e,t){let n=this._messageRegistry.get(t);n.referenceCount--,Ke(e,"aria-describedby",n.messageElement.id),e.removeAttribute(v)}_isElementDescribedByMessage(e,t){let n=A(e,"aria-describedby"),r=this._messageRegistry.get(t),c=r&&r.messageElement.id;return!!c&&n.indexOf(c)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let n=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return n?!r||r.trim()!==n:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275inject(h),o.\u0275\u0275inject(l.Platform))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function k(s,i){return typeof s=="string"?`${i||""}/${s}`:s}function j(s,i){s.id||(s.id=`${Y}-${i}-${M++}`)}var E=class{constructor(i,e){this._items=i,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new g,this._typeaheadSubscription=ae.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=t=>t.disabled,this._pressedLetters=[],this.tabOut=new g,this.change=new g,i instanceof R?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):x(i)&&(this._effectRef=ie(()=>this._itemsChanged(i()),{injector:e}))}skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe(Fe(e=>this._pressedLetters.push(e)),Oe(i),Ne(()=>this._pressedLetters.length>0),De(()=>this._pressedLetters.join(""))).subscribe(e=>{let t=this._getItemsArray();for(let n=1;n<t.length+1;n++){let r=(this._activeItemIndex+n)%t.length,c=t[r];if(!this._skipPredicateFn(c)&&c.getLabel().toUpperCase().trim().indexOf(e)===0){this.setActiveItem(r);break}}this._pressedLetters=[]}),this}cancelTypeahead(){return this._pressedLetters=[],this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem;this.updateActiveItem(i),this._activeItem!==e&&this.change.next(this._activeItemIndex)}onKeydown(i){let e=i.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case Te:this.tabOut.next();return;case Ee:if(this._vertical&&n){this.setNextItemActive();break}else return;case Ae:if(this._vertical&&n){this.setPreviousItemActive();break}else return;case ye:if(this._horizontal&&n){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case Ie:if(this._horizontal&&n){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case ve:if(this._homeAndEnd&&n){this.setFirstItemActive();break}else return;case pe:if(this._homeAndEnd&&n){this.setLastItemActive();break}else return;case be:if(this._pageUpAndDown.enabled&&n){let r=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case ge:if(this._pageUpAndDown.enabled&&n){let r=this._activeItemIndex+this._pageUpAndDown.delta,c=this._getItemsArray().length;this._setActiveItemByIndex(r<c?r:c-1,-1);break}else return;default:(n||de(i,"shiftKey"))&&(i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=le&&e<=_e||e>=fe&&e<=me)&&this._letterKeyStream.next(String.fromCharCode(e)));return}this._pressedLetters=[],i.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),n=e[t];this._activeItem=n??null,this._activeItemIndex=t}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._letterKeyStream.complete(),this.tabOut.complete(),this.change.complete(),this._pressedLetters=[]}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let n=(this._activeItemIndex+i*t+e.length)%e.length,r=e[n];if(!this._skipPredicateFn(r)){this.setActiveItem(n);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return x(this._items)?this._items():this._items instanceof R?this._items.toArray():this._items}_itemsChanged(i){if(this._activeItem){let e=i.indexOf(this._activeItem);e>-1&&e!==this._activeItemIndex&&(this._activeItemIndex=e)}}},B=class extends E{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}},P=class extends E{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}},K=class{constructor(){this.ignoreVisibility=!1}},z=(()=>{class s{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return We(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Ue(qe(e));if(t&&(U(t)===-1||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),r=U(e);return e.hasAttribute("contenteditable")?r!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Ye(e)?!1:n==="audio"?e.hasAttribute("controls")?r!==-1:!1:n==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return ze(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275inject(l.Platform))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function Ue(s){try{return s.frameElement}catch{return null}}function We(s){return!!(s.offsetWidth||s.offsetHeight||typeof s.getClientRects=="function"&&s.getClientRects().length)}function He(s){let i=s.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Ve(s){return $e(s)&&s.type=="hidden"}function Ze(s){return Ge(s)&&s.hasAttribute("href")}function $e(s){return s.nodeName.toLowerCase()=="input"}function Ge(s){return s.nodeName.toLowerCase()=="a"}function q(s){if(!s.hasAttribute("tabindex")||s.tabIndex===void 0)return!1;let i=s.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function U(s){if(!q(s))return null;let i=parseInt(s.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Ye(s){let i=s.nodeName.toLowerCase(),e=i==="input"&&s.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function ze(s){return Ve(s)?!1:He(s)||Ze(s)||s.hasAttribute("contenteditable")||q(s)}function qe(s){return s.ownerDocument&&s.ownerDocument.defaultView||window}var T=class{get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}constructor(i,e,t,n,r=!1,c){this._element=i,this._checker=e,this._ngZone=t,this._document=n,this._injector=c,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(n)return n}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(n)return n}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?se(i,{injector:this._injector}):setTimeout(i)}},Xe=(()=>{class s{constructor(e,t,n){this._checker=e,this._ngZone=t,this._injector=b(V),this._document=n}create(e,t=!1){return new T(e,this._checker,this._ngZone,this._document,t,this._injector)}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275inject(z),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(h))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})(),Nt=(()=>{class s{get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}constructor(e,t,n){this._elementRef=e,this._focusTrapFactory=t,this._previouslyFocusedElement=null,b(re).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=oe(),this.focusTrap?.focusInitialElementWhenReady()}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(Xe),o.\u0275\u0275directiveInject(h))}}static{this.\u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",S],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",S]},exportAs:["cdkTrapFocus"],standalone:!0,features:[o.\u0275\u0275InputTransformsFeature,o.\u0275\u0275NgOnChangesFeature]})}}return s})(),F=class extends T{get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._enabled?this._focusTrapManager.register(this):this._focusTrapManager.deregister(this)}constructor(i,e,t,n,r,c,a,_){super(i,e,t,n,a.defer,_),this._focusTrapManager=r,this._inertStrategy=c,this._focusTrapManager.register(this)}destroy(){this._focusTrapManager.deregister(this),super.destroy()}_enable(){this._inertStrategy.preventFocus(this),this.toggleAnchors(!0)}_disable(){this._inertStrategy.allowFocus(this),this.toggleAnchors(!1)}},O=class{constructor(){this._listener=null}preventFocus(i){this._listener&&i._document.removeEventListener("focus",this._listener,!0),this._listener=e=>this._trapFocus(i,e),i._ngZone.runOutsideAngular(()=>{i._document.addEventListener("focus",this._listener,!0)})}allowFocus(i){this._listener&&(i._document.removeEventListener("focus",this._listener,!0),this._listener=null)}_trapFocus(i,e){let t=e.target,n=i._element;t&&!n.contains(t)&&!t.closest?.("div.cdk-overlay-pane")&&setTimeout(()=>{i.enabled&&!n.contains(i._document.activeElement)&&i.focusFirstTabbableElement()})}},Qe=new p("FOCUS_TRAP_INERT_STRATEGY"),Je=(()=>{class s{constructor(){this._focusTrapStack=[]}register(e){this._focusTrapStack=this._focusTrapStack.filter(n=>n!==e);let t=this._focusTrapStack;t.length&&t[t.length-1]._disable(),t.push(e),e._enable()}deregister(e){e._disable();let t=this._focusTrapStack,n=t.indexOf(e);n!==-1&&(t.splice(n,1),t.length&&t[t.length-1]._enable())}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})(),Dt=(()=>{class s{constructor(e,t,n,r,c){this._checker=e,this._ngZone=t,this._focusTrapManager=n,this._injector=b(V),this._document=r,this._inertStrategy=c||new O}create(e,t={defer:!1}){let n;return typeof t=="boolean"?n={defer:t}:n=t,new F(e,this._checker,this._ngZone,this._document,this._focusTrapManager,this._inertStrategy,n,this._injector)}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275inject(z),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(Je),o.\u0275\u0275inject(h),o.\u0275\u0275inject(Qe,8))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function et(s){return s.buttons===0||s.detail===0}function tt(s){let i=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var it=new p("cdk-input-modality-detector-options"),st={ignoreKeys:[we,Ce,ke,Le,Me]},X=650,d=Z({passive:!0,capture:!0}),nt=(()=>{class s{get mostRecentModality(){return this._modality.value}constructor(e,t,n,r){this._platform=e,this._mostRecentTarget=null,this._modality=new he(null),this._lastTouchMs=0,this._onKeydown=c=>{this._options?.ignoreKeys?.some(a=>a===c.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=m(c))},this._onMousedown=c=>{Date.now()-this._lastTouchMs<X||(this._modality.next(et(c)?"keyboard":"mouse"),this._mostRecentTarget=m(c))},this._onTouchstart=c=>{if(tt(c)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=m(c)},this._options=w(w({},st),r),this.modalityDetected=this._modality.pipe(Re(1)),this.modalityChanged=this.modalityDetected.pipe(xe()),e.isBrowser&&t.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,d),n.addEventListener("mousedown",this._onMousedown,d),n.addEventListener("touchstart",this._onTouchstart,d)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,d),document.removeEventListener("mousedown",this._onMousedown,d),document.removeEventListener("touchstart",this._onTouchstart,d))}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275inject(l.Platform),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(h),o.\u0275\u0275inject(it,8))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})(),rt=new p("liveAnnouncerElement",{providedIn:"root",factory:ot});function ot(){return null}var ct=new p("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),at=0,ht=(()=>{class s{constructor(e,t,n,r){this._ngZone=t,this._defaultOptions=r,this._document=n,this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,r,c;return t.length===1&&typeof t[0]=="number"?c=t[0]:[r,c]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=n&&n.politeness?n.politeness:"polite"),c==null&&n&&(c=n.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=e,typeof c=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),c)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),n=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return n.classList.add(e),n.classList.add("cdk-visually-hidden"),n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live","polite"),n.id=`cdk-live-announcer-${at++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let r=t[n],c=r.getAttribute("aria-owns");c?c.indexOf(e)===-1&&r.setAttribute("aria-owns",c+" "+e):r.setAttribute("aria-owns",e)}}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275inject(rt,8),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(h),o.\u0275\u0275inject(ct,8))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})(),Rt=(()=>{class s{get politeness(){return this._politeness}set politeness(e){this._politeness=e==="off"||e==="assertive"?e:"polite",this._politeness==="off"?this._subscription&&(this._subscription.unsubscribe(),this._subscription=null):this._subscription||(this._subscription=this._ngZone.runOutsideAngular(()=>this._contentObserver.observe(this._elementRef).subscribe(()=>{let t=this._elementRef.nativeElement.textContent;t!==this._previousAnnouncedText&&(this._liveAnnouncer.announce(t,this._politeness,this.duration),this._previousAnnouncedText=t)})))}constructor(e,t,n,r){this._elementRef=e,this._liveAnnouncer=t,this._contentObserver=n,this._ngZone=r,this._politeness="polite"}ngOnDestroy(){this._subscription&&this._subscription.unsubscribe()}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(ht),o.\u0275\u0275directiveInject($.ContentObserver),o.\u0275\u0275directiveInject(o.NgZone))}}static{this.\u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkAriaLive",""]],inputs:{politeness:[0,"cdkAriaLive","politeness"],duration:[0,"cdkAriaLiveDuration","duration"]},exportAs:["cdkAriaLive"],standalone:!0})}}return s})(),y=function(s){return s[s.IMMEDIATE=0]="IMMEDIATE",s[s.EVENTUAL=1]="EVENTUAL",s}(y||{}),ut=new p("cdk-focus-monitor-default-options"),I=Z({passive:!0,capture:!0}),dt=(()=>{class s{constructor(e,t,n,r,c){this._ngZone=e,this._platform=t,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new g,this._rootNodeFocusAndBlurListener=a=>{let _=m(a);for(let f=_;f;f=f.parentElement)a.type==="focus"?this._onFocus(a,f):this._onBlur(a,f)},this._document=r,this._detectionMode=c?.detectionMode||y.IMMEDIATE}monitor(e,t=!1){let n=C(e);if(!this._platform.isBrowser||n.nodeType!==1)return ue();let r=ce(n)||this._getDocument(),c=this._elementInfo.get(n);if(c)return t&&(c.checkChildren=!0),c.subject;let a={checkChildren:t,subject:new g,rootNode:r};return this._elementInfo.set(n,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let t=C(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let r=C(e),c=this._getDocument().activeElement;r===c?this._getClosestElementsInfo(r).forEach(([a,_])=>this._originChanged(a,t,_)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===y.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===y.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?X:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),r=m(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,I),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,I)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Se(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,I),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,I),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let c=0;c<r.length;c++)if(r[c].contains(t))return!0}return!1}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(l.Platform),o.\u0275\u0275inject(nt),o.\u0275\u0275inject(h,8),o.\u0275\u0275inject(ut,8))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})(),xt=(()=>{class s{constructor(e,t){this._elementRef=e,this._focusMonitor=t,this._focusOrigin=null,this.cdkFocusChange=new ne}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(dt))}}static{this.\u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"],standalone:!0})}}return s})(),u=function(s){return s[s.NONE=0]="NONE",s[s.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",s[s.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",s}(u||{}),W="cdk-high-contrast-black-on-white",H="cdk-high-contrast-white-on-black",L="cdk-high-contrast-active",lt=(()=>{class s{constructor(e,t){this._platform=e,this._document=t,this._breakpointSubscription=b(Be).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return u.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return u.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return u.BLACK_ON_WHITE}return u.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(L,W,H),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===u.BLACK_ON_WHITE?e.add(L,W):t===u.WHITE_ON_BLACK&&e.add(L,H)}}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275inject(l.Platform),o.\u0275\u0275inject(h))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})(),St=(()=>{class s{constructor(e){e._applyBodyHighContrastModeCssClasses()}static{this.\u0275fac=function(t){return new(t||s)(o.\u0275\u0275inject(lt))}}static{this.\u0275mod=o.\u0275\u0275defineNgModule({type:s})}static{this.\u0275inj=o.\u0275\u0275defineInjector({imports:[je]})}}return s})();export{St as A11yModule,B as ActiveDescendantKeyManager,Ot as AriaDescriber,v as CDK_DESCRIBEDBY_HOST_ATTRIBUTE,Y as CDK_DESCRIBEDBY_ID_PREFIX,Rt as CdkAriaLive,xt as CdkMonitorFocus,Nt as CdkTrapFocus,F as ConfigurableFocusTrap,Dt as ConfigurableFocusTrapFactory,O as EventListenerFocusTrapInertStrategy,ut as FOCUS_MONITOR_DEFAULT_OPTIONS,Qe as FOCUS_TRAP_INERT_STRATEGY,P as FocusKeyManager,dt as FocusMonitor,y as FocusMonitorDetectionMode,T as FocusTrap,Xe as FocusTrapFactory,u as HighContrastMode,lt as HighContrastModeDetector,st as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS,it as INPUT_MODALITY_DETECTOR_OPTIONS,nt as InputModalityDetector,z as InteractivityChecker,K as IsFocusableConfig,ct as LIVE_ANNOUNCER_DEFAULT_OPTIONS,rt as LIVE_ANNOUNCER_ELEMENT_TOKEN,ot as LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,E as ListKeyManager,ht as LiveAnnouncer,Ft as MESSAGES_CONTAINER_ID,Pe as addAriaReferencedId,A as getAriaReferenceIds,et as isFakeMousedownFromScreenReader,tt as isFakeTouchstartFromScreenReader,Ke as removeAriaReferencedId};
