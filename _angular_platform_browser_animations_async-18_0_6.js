import{DOCUMENT as h}from"@angular/common";import*as a from"@angular/core";import{inject as c,ɵChangeDetectionScheduler as u,ɵRuntimeError as g,ɵperformanceMarkFeature as m,makeEnvironmentProviders as p,RendererFactory2 as y,NgZone as f,ANIMATION_MODULE_TYPE as A}from"@angular/core";import{ɵDomRendererFactory2 as v}from"@angular/platform-browser";var R="@",b=(()=>{class i{constructor(t,r,n,s,o){this.doc=t,this.delegate=r,this.zone=n,this.animationType=s,this.moduleImpl=o,this._rendererFactoryPromise=null,this.scheduler=c(u,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("@angular/animations/browser").then(r=>r)).catch(r=>{throw new g(5300,!1)}).then(({ɵcreateEngine:r,ɵAnimationRendererFactory:n})=>{this._engine=r(this.animationType,this.doc);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,r){let n=this.delegate.createRenderer(t,r);if(n.ɵtype===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new l(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let d=o.createRenderer(t,r);s.use(d),this.scheduler?.notify(9)}).catch(o=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.ɵfac=function(r){a.ɵɵinvalidFactory()}}static{this.ɵprov=a.ɵɵdefineInjectable({token:i,factory:i.ɵfac})}}return i})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.ɵtype=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,n){this.delegate.insertBefore(e,t,r,n)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,n){this.delegate.setAttribute(e,t,r,n)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,n){this.delegate.setStyle(e,t,r,n)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(R)}};function C(i="animations"){return m("NgAsyncAnimations"),p([{provide:y,useFactory:(e,t,r)=>new b(e,t,r,i),deps:[h,v,f]},{provide:A,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}export{C as provideAnimationsAsync,b as ɵAsyncAnimationRendererFactory};/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v18.0.6
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/