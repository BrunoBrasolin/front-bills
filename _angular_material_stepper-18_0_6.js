import{TemplatePortal as A,CdkPortalOutlet as j,PortalModule as H}from"@angular/cdk/portal";import{CdkStepLabel as V,CdkStepHeader as N,CdkStep as h,STEPPER_GLOBAL_OPTIONS as Q,CdkStepper as u,CdkStepperNext as $,CdkStepperPrevious as B,CdkStepperModule as q}from"@angular/cdk/stepper";import{NgTemplateOutlet as M,CommonModule as U}from"@angular/common";import*as e from"@angular/core";import{Optional as G,SkipSelf as Y,forwardRef as K,QueryList as W,EventEmitter as Z,inject as J}from"@angular/core";import*as T from"@angular/material/core";import{MatRipple as X,ErrorStateMatcher as D,MatCommonModule as f,MatRippleModule as ee}from"@angular/material/core";import{MatIcon as te,MatIconModule as ie}from"@angular/material/icon";import*as I from"@angular/cdk/a11y";import{Subject as z,Subscription as ae}from"rxjs";import*as w from"@angular/cdk/bidi";import{switchMap as ne,map as re,startWith as oe,takeUntil as _,distinctUntilChanged as se}from"rxjs/operators";import{trigger as v,state as p,style as l,transition as b,group as g,animate as x,query as S,animateChild as y}from"@angular/animations";import{Platform as pe}from"@angular/cdk/platform";function le(i,o){if(i&1&&e.ɵɵelementContainer(0,2),i&2){let t=e.ɵɵnextContext();e.ɵɵproperty("ngTemplateOutlet",t.iconOverrides[t.state])("ngTemplateOutletContext",t._getIconContext())}}function ce(i,o){if(i&1&&(e.ɵɵelementStart(0,"span",7),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(2);e.ɵɵadvance(),e.ɵɵtextInterpolate(t._getDefaultTextForState(t.state))}}function de(i,o){if(i&1&&(e.ɵɵelementStart(0,"span",8),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(3);e.ɵɵadvance(),e.ɵɵtextInterpolate(t._intl.completedLabel)}}function me(i,o){if(i&1&&(e.ɵɵelementStart(0,"span",8),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(3);e.ɵɵadvance(),e.ɵɵtextInterpolate(t._intl.editableLabel)}}function he(i,o){if(i&1&&(e.ɵɵtemplate(0,de,2,1,"span",8)(1,me,2,1,"span",8),e.ɵɵelementStart(2,"mat-icon",7),e.ɵɵtext(3),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(2);e.ɵɵconditional(t.state==="done"?0:t.state==="edit"?1:-1),e.ɵɵadvance(3),e.ɵɵtextInterpolate(t._getDefaultTextForState(t.state))}}function ue(i,o){if(i&1&&e.ɵɵtemplate(0,ce,2,1,"span",7)(1,he,4,2,"mat-icon",7),i&2){let t,a=e.ɵɵnextContext();e.ɵɵconditional((t=a.state)==="number"?0:1)}}function fe(i,o){i&1&&(e.ɵɵelementStart(0,"div",4),e.ɵɵelementContainer(1,9),e.ɵɵelementEnd()),i&2&&(e.ɵɵadvance(),e.ɵɵproperty("ngTemplateOutlet",o.template))}function _e(i,o){if(i&1&&(e.ɵɵelementStart(0,"div",4),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext();e.ɵɵadvance(),e.ɵɵtextInterpolate(t.label)}}function ve(i,o){if(i&1&&(e.ɵɵelementStart(0,"div",5),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext();e.ɵɵadvance(),e.ɵɵtextInterpolate(t._intl.optionalLabel)}}function be(i,o){if(i&1&&(e.ɵɵelementStart(0,"div",6),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext();e.ɵɵadvance(),e.ɵɵtextInterpolate(t.errorMessage)}}var k=["*"];function ge(i,o){}function xe(i,o){if(i&1&&(e.ɵɵprojection(0),e.ɵɵtemplate(1,ge,0,0,"ng-template",0)),i&2){let t=e.ɵɵnextContext();e.ɵɵadvance(),e.ɵɵproperty("cdkPortalOutlet",t._portal)}}var E=(i,o)=>({step:i,i:o}),F=i=>({animationDuration:i}),R=(i,o)=>({value:i,params:o});function Se(i,o){i&1&&e.ɵɵprojection(0)}function ye(i,o){i&1&&e.ɵɵelement(0,"div",6)}function Ce(i,o){if(i&1&&(e.ɵɵelementContainer(0,5),e.ɵɵtemplate(1,ye,1,0,"div",6)),i&2){let t=o.$implicit,a=o.$index,n=o.$count;e.ɵɵnextContext(2);let r=e.ɵɵreference(4);e.ɵɵproperty("ngTemplateOutlet",r)("ngTemplateOutletContext",e.ɵɵpureFunction2(3,E,t,a)),e.ɵɵadvance(),e.ɵɵconditional(a!==n-1?1:-1)}}function Me(i,o){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"div",7),e.ɵɵlistener("@horizontalStepTransition.done",function(n){e.ɵɵrestoreView(t);let r=e.ɵɵnextContext(2);return e.ɵɵresetView(r._animationDone.next(n))}),e.ɵɵelementContainer(1,8),e.ɵɵelementEnd()}if(i&2){let t=o.$implicit,a=o.$index,n=e.ɵɵnextContext(2);e.ɵɵclassProp("mat-horizontal-stepper-content-inactive",n.selectedIndex!==a),e.ɵɵproperty("@horizontalStepTransition",e.ɵɵpureFunction2(8,R,n._getAnimationDirection(a),e.ɵɵpureFunction1(6,F,n._getAnimationDuration())))("id",n._getStepContentId(a)),e.ɵɵattribute("aria-labelledby",n._getStepLabelId(a)),e.ɵɵadvance(),e.ɵɵproperty("ngTemplateOutlet",t.content)}}function Te(i,o){if(i&1&&(e.ɵɵelementStart(0,"div",1)(1,"div",2),e.ɵɵrepeaterCreate(2,Ce,2,6,null,null,e.ɵɵrepeaterTrackByIdentity),e.ɵɵelementEnd(),e.ɵɵelementStart(4,"div",3),e.ɵɵrepeaterCreate(5,Me,2,11,"div",4,e.ɵɵrepeaterTrackByIdentity),e.ɵɵelementEnd()()),i&2){let t=e.ɵɵnextContext();e.ɵɵadvance(2),e.ɵɵrepeater(t.steps),e.ɵɵadvance(3),e.ɵɵrepeater(t.steps)}}function De(i,o){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"div",9),e.ɵɵelementContainer(1,5),e.ɵɵelementStart(2,"div",10)(3,"div",11),e.ɵɵlistener("@verticalStepTransition.done",function(n){e.ɵɵrestoreView(t);let r=e.ɵɵnextContext(2);return e.ɵɵresetView(r._animationDone.next(n))}),e.ɵɵelementStart(4,"div",12),e.ɵɵelementContainer(5,8),e.ɵɵelementEnd()()()()}if(i&2){let t=o.$implicit,a=o.$index,n=o.$count,r=e.ɵɵnextContext(2),s=e.ɵɵreference(4);e.ɵɵadvance(),e.ɵɵproperty("ngTemplateOutlet",s)("ngTemplateOutletContext",e.ɵɵpureFunction2(10,E,t,a)),e.ɵɵadvance(),e.ɵɵclassProp("mat-stepper-vertical-line",a!==n-1),e.ɵɵadvance(),e.ɵɵclassProp("mat-vertical-stepper-content-inactive",r.selectedIndex!==a),e.ɵɵproperty("@verticalStepTransition",e.ɵɵpureFunction2(15,R,r._getAnimationDirection(a),e.ɵɵpureFunction1(13,F,r._getAnimationDuration())))("id",r._getStepContentId(a)),e.ɵɵattribute("aria-labelledby",r._getStepLabelId(a)),e.ɵɵadvance(2),e.ɵɵproperty("ngTemplateOutlet",t.content)}}function Ie(i,o){if(i&1&&e.ɵɵrepeaterCreate(0,De,6,18,"div",9,e.ɵɵrepeaterTrackByIdentity),i&2){let t=e.ɵɵnextContext();e.ɵɵrepeater(t.steps)}}function ze(i,o){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"mat-step-header",13),e.ɵɵlistener("click",function(){let n=e.ɵɵrestoreView(t).step;return e.ɵɵresetView(n.select())})("keydown",function(n){e.ɵɵrestoreView(t);let r=e.ɵɵnextContext();return e.ɵɵresetView(r._onKeydown(n))}),e.ɵɵelementEnd()}if(i&2){let t=o.step,a=o.i,n=e.ɵɵnextContext();e.ɵɵclassProp("mat-horizontal-stepper-header",n.orientation==="horizontal")("mat-vertical-stepper-header",n.orientation==="vertical"),e.ɵɵproperty("tabIndex",n._getFocusIndex()===a?0:-1)("id",n._getStepLabelId(a))("index",a)("state",n._getIndicatorType(a,t.state))("label",t.stepLabel||t.label)("selected",n.selectedIndex===a)("active",n._stepIsNavigable(a,t))("optional",t.optional)("errorMessage",t.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!n._stepIsNavigable(a,t))("color",t.color||n.color),e.ɵɵattribute("aria-posinset",a+1)("aria-setsize",n.steps.length)("aria-controls",n._getStepContentId(a))("aria-selected",n.selectedIndex==a)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null)("aria-disabled",n._stepIsNavigable(a,t)?null:!0)}}var d=(()=>{class i extends V{static{this.ɵfac=(()=>{let t;return function(n){return(t||(t=e.ɵɵgetInheritedFactory(i)))(n||i)}})()}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["","matStepLabel",""]],standalone:!0,features:[e.ɵɵInheritDefinitionFeature]})}}return i})(),c=(()=>{class i{constructor(){this.changes=new z,this.optionalLabel="Optional",this.completedLabel="Completed",this.editableLabel="Editable"}static{this.ɵfac=function(a){return new(a||i)}}static{this.ɵprov=e.ɵɵdefineInjectable({token:i,factory:i.ɵfac,providedIn:"root"})}}return i})();function we(i){return i||new c}var ke={provide:c,deps:[[new G,new Y,c]],useFactory:we},m=(()=>{class i extends N{constructor(t,a,n,r){super(n),this._intl=t,this._focusMonitor=a,this._intlSubscription=t.changes.subscribe(()=>r.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(t,a){t?this._focusMonitor.focusVia(this._elementRef,t,a):this._elementRef.nativeElement.focus(a)}_stringLabel(){return this.label instanceof d?null:this.label}_templateLabel(){return this.label instanceof d?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getIconContext(){return{index:this.index,active:this.active,optional:this.optional}}_getDefaultTextForState(t){return t=="number"?`${this.index+1}`:t=="edit"?"create":t=="error"?"warning":t}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(c),e.ɵɵdirectiveInject(I.FocusMonitor),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.ChangeDetectorRef))}}static{this.ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["mat-step-header"]],hostAttrs:["role","tab",1,"mat-step-header"],hostVars:2,hostBindings:function(a,n){a&2&&e.ɵɵclassMap("mat-"+(n.color||"primary"))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},standalone:!0,features:[e.ɵɵInheritDefinitionFeature,e.ɵɵStandaloneFeature],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(a,n){if(a&1&&(e.ɵɵelement(0,"div",0),e.ɵɵelementStart(1,"div")(2,"div",1),e.ɵɵtemplate(3,le,1,2,"ng-container",2)(4,ue,2,1),e.ɵɵelementEnd()(),e.ɵɵelementStart(5,"div",3),e.ɵɵtemplate(6,fe,2,1,"div",4)(7,_e,2,1,"div",4)(8,ve,2,1,"div",5)(9,be,2,1,"div",6),e.ɵɵelementEnd()),a&2){let r;e.ɵɵproperty("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disableRipple),e.ɵɵadvance(),e.ɵɵclassMapInterpolate1("mat-step-icon-state-",n.state," mat-step-icon"),e.ɵɵclassProp("mat-step-icon-selected",n.selected),e.ɵɵadvance(2),e.ɵɵconditional(n.iconOverrides&&n.iconOverrides[n.state]?3:4),e.ɵɵadvance(2),e.ɵɵclassProp("mat-step-label-active",n.active)("mat-step-label-selected",n.selected)("mat-step-label-error",n.state=="error"),e.ɵɵadvance(),e.ɵɵconditional((r=n._templateLabel())?6:n._stringLabel()?7:-1,r),e.ɵɵadvance(2),e.ɵɵconditional(n.optional&&n.state!="error"?8:-1),e.ɵɵadvance(),e.ɵɵconditional(n.state==="error"?9:-1)}},dependencies:[X,M,te],styles:[".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:\"\"}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}"],encapsulation:2,changeDetection:0})}}return i})(),O="500ms",P="225ms",C={horizontalStepTransition:v("horizontalStepTransition",[p("previous",l({transform:"translate3d(-100%, 0, 0)",visibility:"hidden"})),p("current",l({transform:"none",visibility:"inherit"})),p("next",l({transform:"translate3d(100%, 0, 0)",visibility:"hidden"})),b("* => *",g([x("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"),S("@*",y(),{optional:!0})]),{params:{animationDuration:O}})]),verticalStepTransition:v("verticalStepTransition",[p("previous",l({height:"0px",visibility:"hidden"})),p("next",l({height:"0px",visibility:"hidden"})),p("current",l({height:"*",visibility:"inherit"})),b("* <=> current",g([x("{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)"),S("@*",y(),{optional:!0})]),{params:{animationDuration:P}})])},Ee=(()=>{class i{constructor(t){this.templateRef=t}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(e.TemplateRef))}}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]},standalone:!0})}}return i})(),Fe=(()=>{class i{constructor(t){this._template=t}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(e.TemplateRef))}}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["ng-template","matStepContent",""]],standalone:!0})}}return i})(),Re=(()=>{class i extends h{constructor(t,a,n,r){super(t,r),this._errorStateMatcher=a,this._viewContainerRef=n,this._isSelected=ae.EMPTY,this.stepLabel=void 0}ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(ne(()=>this._stepper.selectionChange.pipe(re(t=>t.selectedStep===this),oe(this._stepper.selected===this)))).subscribe(t=>{t&&this._lazyContent&&!this._portal&&(this._portal=new A(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(t,a){let n=this._errorStateMatcher.isErrorState(t,a),r=!!(t&&t.invalid&&this.interacted);return n||r}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(K(()=>L)),e.ɵɵdirectiveInject(T.ErrorStateMatcher,4),e.ɵɵdirectiveInject(e.ViewContainerRef),e.ɵɵdirectiveInject(Q,8))}}static{this.ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["mat-step"]],contentQueries:function(a,n,r){if(a&1&&(e.ɵɵcontentQuery(r,d,5),e.ɵɵcontentQuery(r,Fe,5)),a&2){let s;e.ɵɵqueryRefresh(s=e.ɵɵloadQuery())&&(n.stepLabel=s.first),e.ɵɵqueryRefresh(s=e.ɵɵloadQuery())&&(n._lazyContent=s.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],standalone:!0,features:[e.ɵɵProvidersFeature([{provide:D,useExisting:i},{provide:h,useExisting:i}]),e.ɵɵInheritDefinitionFeature,e.ɵɵStandaloneFeature],ngContentSelectors:k,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(a,n){a&1&&(e.ɵɵprojectionDef(),e.ɵɵtemplate(0,xe,2,1,"ng-template"))},dependencies:[j],encapsulation:2,changeDetection:0})}}return i})(),L=(()=>{class i extends u{get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}constructor(t,a,n){super(t,a,n),this._stepHeader=void 0,this._steps=void 0,this.steps=new W,this.animationDone=new Z,this.labelPosition="end",this.headerPosition="top",this._iconOverrides={},this._animationDone=new z,this._animationDuration="",this._isServer=!J(pe).isBrowser;let r=n.nativeElement.nodeName.toLowerCase();this.orientation=r==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:t,templateRef:a})=>this._iconOverrides[t]=a),this.steps.changes.pipe(_(this._destroyed)).subscribe(()=>{this._stateChanged()}),this._animationDone.pipe(se((t,a)=>t.fromState===a.fromState&&t.toState===a.toState),_(this._destroyed)).subscribe(t=>{t.toState==="current"&&this.animationDone.emit()})}_stepIsNavigable(t,a){return a.completed||this.selectedIndex===t||!this.linear}_getAnimationDuration(){return this.animationDuration?this.animationDuration:this.orientation==="horizontal"?O:P}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(w.Directionality,8),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(e.ElementRef))}}static{this.ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(a,n,r){if(a&1&&(e.ɵɵcontentQuery(r,Re,5),e.ɵɵcontentQuery(r,Ee,5)),a&2){let s;e.ɵɵqueryRefresh(s=e.ɵɵloadQuery())&&(n._steps=s),e.ɵɵqueryRefresh(s=e.ɵɵloadQuery())&&(n._icons=s)}},viewQuery:function(a,n){if(a&1&&e.ɵɵviewQuery(m,5),a&2){let r;e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(n._stepHeader=r)}},hostAttrs:["role","tablist"],hostVars:11,hostBindings:function(a,n){a&2&&(e.ɵɵattribute("aria-orientation",n.orientation),e.ɵɵclassProp("mat-stepper-horizontal",n.orientation==="horizontal")("mat-stepper-vertical",n.orientation==="vertical")("mat-stepper-label-position-end",n.orientation==="horizontal"&&n.labelPosition=="end")("mat-stepper-label-position-bottom",n.orientation==="horizontal"&&n.labelPosition=="bottom")("mat-stepper-header-position-bottom",n.headerPosition==="bottom"))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],standalone:!0,features:[e.ɵɵProvidersFeature([{provide:u,useExisting:i}]),e.ɵɵInheritDefinitionFeature,e.ɵɵStandaloneFeature],ngContentSelectors:k,decls:5,vars:2,consts:[["stepTemplate",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-horizontal-stepper-header-container"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","mat-horizontal-stepper-content-inactive"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-stepper-horizontal-line"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[3,"ngTemplateOutlet"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","tabpanel",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"]],template:function(a,n){if(a&1&&(e.ɵɵprojectionDef(),e.ɵɵtemplate(0,Se,1,0)(1,Te,7,0,"div",1)(2,Ie,2,0)(3,ze,1,23,"ng-template",null,0,e.ɵɵtemplateRefExtractor)),a&2){let r;e.ɵɵconditional(n._isServer?0:-1),e.ɵɵadvance(),e.ɵɵconditional((r=n.orientation)==="horizontal"?1:r==="vertical"?2:-1)}},dependencies:[M,m],styles:[".mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],encapsulation:2,data:{animation:[C.horizontalStepTransition,C.verticalStepTransition]},changeDetection:0})}}return i})(),it=(()=>{class i extends ${static{this.ɵfac=(()=>{let t;return function(n){return(t||(t=e.ɵɵgetInheritedFactory(i)))(n||i)}})()}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(a,n){a&2&&e.ɵɵhostProperty("type",n.type)},standalone:!0,features:[e.ɵɵInheritDefinitionFeature]})}}return i})(),at=(()=>{class i extends B{static{this.ɵfac=(()=>{let t;return function(n){return(t||(t=e.ɵɵgetInheritedFactory(i)))(n||i)}})()}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(a,n){a&2&&e.ɵɵhostProperty("type",n.type)},standalone:!0,features:[e.ɵɵInheritDefinitionFeature]})}}return i})(),nt=(()=>{class i{static{this.ɵfac=function(a){return new(a||i)}}static{this.ɵmod=e.ɵɵdefineNgModule({type:i})}static{this.ɵinj=e.ɵɵdefineInjector({providers:[ke,D],imports:[f,U,H,q,ie,ee,L,m,f]})}}return i})();export{ke as MAT_STEPPER_INTL_PROVIDER,we as MAT_STEPPER_INTL_PROVIDER_FACTORY,Re as MatStep,Fe as MatStepContent,m as MatStepHeader,d as MatStepLabel,L as MatStepper,Ee as MatStepperIcon,c as MatStepperIntl,nt as MatStepperModule,it as MatStepperNext,at as MatStepperPrevious,C as matStepperAnimations};