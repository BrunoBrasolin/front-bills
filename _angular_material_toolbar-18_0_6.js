import*as t from"@angular/core";import"@angular/core";import{MatCommonModule as l}from"@angular/material/core";import*as n from"@angular/cdk/platform";import{DOCUMENT as s}from"@angular/common";var c=["*",[["mat-toolbar-row"]]],d=["*","mat-toolbar-row"],b=(()=>{class e{static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵdir=t.ɵɵdefineDirective({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0})}}return e})(),T=(()=>{class e{constructor(r,o,a){this._elementRef=r,this._platform=o,this._document=a}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static{this.ɵfac=function(o){return new(o||e)(t.ɵɵdirectiveInject(t.ElementRef),t.ɵɵdirectiveInject(n.Platform),t.ɵɵdirectiveInject(s))}}static{this.ɵcmp=t.ɵɵdefineComponent({type:e,selectors:[["mat-toolbar"]],contentQueries:function(o,a,m){if(o&1&&t.ɵɵcontentQuery(m,b,5),o&2){let i;t.ɵɵqueryRefresh(i=t.ɵɵloadQuery())&&(a._toolbarRows=i)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,a){o&2&&(t.ɵɵclassMap(a.color?"mat-"+a.color:""),t.ɵɵclassProp("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[t.ɵɵStandaloneFeature],ngContentSelectors:d,decls:2,vars:0,template:function(o,a){o&1&&(t.ɵɵprojectionDef(c),t.ɵɵprojection(0),t.ɵɵprojection(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0})}}return e})();function C(){throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.")}var D=(()=>{class e{static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵmod=t.ɵɵdefineNgModule({type:e})}static{this.ɵinj=t.ɵɵdefineInjector({imports:[l,l]})}}return e})();export{T as MatToolbar,D as MatToolbarModule,b as MatToolbarRow,C as throwToolbarMixedModesError};