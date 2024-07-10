import*as h from"@angular/cdk/a11y";import{SelectionModel as y}from"@angular/cdk/collections";import{RIGHT_ARROW as T,DOWN_ARROW as x,LEFT_ARROW as S,UP_ARROW as I,ENTER as M,SPACE as C}from"@angular/cdk/keycodes";import*as e from"@angular/core";import{InjectionToken as p,forwardRef as B,EventEmitter as u,booleanAttribute as s}from"@angular/core";import*as m from"@angular/cdk/bidi";import{NG_VALUE_ACCESSOR as w}from"@angular/forms";import{MatRipple as G,MatPseudoCheckbox as R,MatCommonModule as b,MatRippleModule as A}from"@angular/material/core";var E=["button"],D=["*"];function F(i,c){if(i&1&&e.ɵɵelement(0,"mat-pseudo-checkbox",3),i&2){let t=e.ɵɵnextContext();e.ɵɵproperty("disabled",t.disabled)}}function O(i,c){if(i&1&&e.ɵɵelement(0,"mat-pseudo-checkbox",3),i&2){let t=e.ɵɵnextContext();e.ɵɵproperty("disabled",t.disabled)}}var _=new p("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:V});function V(){return{hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1}}var f=new p("MatButtonToggleGroup"),N={provide:w,useExisting:B(()=>L),multi:!0},v=0,d=class{constructor(c,t){this.source=c,this.value=t}},L=(()=>{class i{get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(a=>a.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}constructor(t,a,o){this._changeDetector=t,this._dir=o,this._multiple=!1,this._disabled=!1,this._controlValueAccessorChangeFn=()=>{},this._onTouched=()=>{},this._name=`mat-button-toggle-group-${v++}`,this.valueChange=new u,this.change=new u,this.appearance=a&&a.appearance?a.appearance:"standard",this.hideSingleSelectionIndicator=a?.hideSingleSelectionIndicator??!1,this.hideMultipleSelectionIndicator=a?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new y(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled)return;let o=t.target.id,n=this._buttonToggles.toArray().findIndex(r=>r.buttonId===o),l=null;switch(t.keyCode){case C:case M:l=this._buttonToggles.get(n)||null;break;case I:l=this._getNextButton(n,-1);break;case S:l=this._getNextButton(n,this.dir==="ltr"?-1:1);break;case x:l=this._getNextButton(n,1);break;case T:l=this._getNextButton(n,this.dir==="ltr"?1:-1);break;default:return}l&&(t.preventDefault(),l._onButtonClick(),l.focus())}_emitChangeEvent(t){let a=new d(t,this.value);this._rawValue=a.value,this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(t,a,o=!1,n=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?a?this._selectionModel.select(t):this._selectionModel.deselect(t):n=!0,n?Promise.resolve().then(()=>this._updateModelValue(t,o)):this._updateModelValue(t,o)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(a=>t.value!=null&&a===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let a=this._buttonToggles.get(t);if(!a.disabled){a.tabIndex=0;break}}this._markButtonsForCheck()}_getNextButton(t,a){let o=this._buttonToggles;for(let n=1;n<=o.length;n++){let l=(t+a*n+o.length)%o.length,r=o.get(l);if(r&&!r.disabled)return r}return null}_setSelectionByValue(t){this._rawValue=t,this._buttonToggles&&(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(a=>this._selectValue(a))):(this._clearSelection(),this._selectValue(t)))}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t){let a=this._buttonToggles.find(o=>o.value!=null&&o.value===t);a&&(a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0))}_updateModelValue(t,a){a&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(_,8),e.ɵɵdirectiveInject(m.Directionality,8))}}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(a,o,n){if(a&1&&e.ɵɵcontentQuery(n,k,5),a&2){let l;e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(o._buttonToggles=l)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(a,o){a&1&&e.ɵɵlistener("keydown",function(l){return o._keydown(l)}),a&2&&(e.ɵɵattribute("role",o.multiple?"group":"radiogroup")("aria-disabled",o.disabled),e.ɵɵclassProp("mat-button-toggle-vertical",o.vertical)("mat-button-toggle-group-appearance-standard",o.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",s],value:"value",multiple:[2,"multiple","multiple",s],disabled:[2,"disabled","disabled",s],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",s],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",s]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],standalone:!0,features:[e.ɵɵProvidersFeature([N,{provide:f,useExisting:i}]),e.ɵɵInputTransformsFeature]})}}return i})(),k=(()=>{class i{get buttonId(){return`${this.id}-button`}get tabIndex(){return this._tabIndex}set tabIndex(t){this._tabIndex=t,this._markForCheck()}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}constructor(t,a,o,n,l,r){this._changeDetectorRef=a,this._elementRef=o,this._focusMonitor=n,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new u;let g=Number(l);this.tabIndex=g||g===0?g:null,this.buttonToggleGroup=t,this.appearance=r&&r.appearance?r.appearance:"standard"}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||`mat-button-toggle-${v++}`,t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new d(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(f,8),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(h.FocusMonitor),e.ɵɵinjectAttribute("tabindex"),e.ɵɵdirectiveInject(_,8))}}static{this.ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(a,o){if(a&1&&e.ɵɵviewQuery(E,5),a&2){let n;e.ɵɵqueryRefresh(n=e.ɵɵloadQuery())&&(o._buttonElement=n.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:12,hostBindings:function(a,o){a&1&&e.ɵɵlistener("focus",function(){return o.focus()}),a&2&&(e.ɵɵattribute("aria-label",null)("aria-labelledby",null)("id",o.id)("name",null),e.ɵɵclassProp("mat-button-toggle-standalone",!o.buttonToggleGroup)("mat-button-toggle-checked",o.checked)("mat-button-toggle-disabled",o.disabled)("mat-button-toggle-appearance-standard",o.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",s],appearance:"appearance",checked:[2,"checked","checked",s],disabled:[2,"disabled","disabled",s]},outputs:{change:"change"},exportAs:["matButtonToggle"],standalone:!0,features:[e.ɵɵInputTransformsFeature,e.ɵɵStandaloneFeature],ngContentSelectors:D,decls:8,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-label-content"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(a,o){if(a&1){let n=e.ɵɵgetCurrentView();e.ɵɵprojectionDef(),e.ɵɵelementStart(0,"button",1,0),e.ɵɵlistener("click",function(){return e.ɵɵrestoreView(n),e.ɵɵresetView(o._onButtonClick())}),e.ɵɵelementStart(2,"span",2),e.ɵɵtemplate(3,F,1,1,"mat-pseudo-checkbox",3)(4,O,1,1,"mat-pseudo-checkbox",3),e.ɵɵprojection(5),e.ɵɵelementEnd()(),e.ɵɵelement(6,"span",4)(7,"span",5)}if(a&2){let n=e.ɵɵreference(1);e.ɵɵproperty("id",o.buttonId)("disabled",o.disabled||null),e.ɵɵattribute("role",o.isSingleSelector()?"radio":"button")("tabindex",o.disabled?-1:o.tabIndex)("aria-pressed",o.isSingleSelector()?null:o.checked)("aria-checked",o.isSingleSelector()?o.checked:null)("name",o._getButtonName())("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby),e.ɵɵadvance(3),e.ɵɵconditional(o.buttonToggleGroup&&o.checked&&!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator?3:-1),e.ɵɵadvance(),e.ɵɵconditional(o.buttonToggleGroup&&o.checked&&o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator?4:-1),e.ɵɵadvance(3),e.ɵɵproperty("matRippleTrigger",n)("matRippleDisabled",o.disableRipple||o.disabled)}},dependencies:[G,R],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape);border:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-standard-button-toggle-selected-state-text-color )}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-legacy-button-toggle-selected-state-text-color )}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-legacy-button-toggle-disabled-state-text-color )}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color);background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font);font-size:var(--mat-standard-button-toggle-label-text-size);line-height:var(--mat-standard-button-toggle-label-text-line-height);font-weight:var(--mat-standard-button-toggle-label-text-weight);letter-spacing:var(--mat-standard-button-toggle-label-text-tracking)}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color);background-color:var(--mat-standard-button-toggle-selected-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-standard-button-toggle-disabled-selected-state-text-color )}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color)}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity)}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity)}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape);border-bottom-right-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape);border-bottom-left-radius:var(--mat-standard-button-toggle-shape)}"],encapsulation:2,changeDetection:0})}}return i})(),at=(()=>{class i{static{this.ɵfac=function(a){return new(a||i)}}static{this.ɵmod=e.ɵɵdefineNgModule({type:i})}static{this.ɵinj=e.ɵɵdefineInjector({imports:[b,A,k,b]})}}return i})();export{_ as MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,f as MAT_BUTTON_TOGGLE_GROUP,V as MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY,N as MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,k as MatButtonToggle,d as MatButtonToggleChange,L as MatButtonToggleGroup,at as MatButtonToggleModule};