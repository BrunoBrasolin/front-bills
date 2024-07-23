import*as l from"@angular/cdk/tree";import{CdkTreeNode as c,CdkTreeNodeDef as f,CdkNestedTreeNode as h,CDK_TREE_NODE_OUTLET_NODE as b,CdkTreeNodePadding as p,CdkTreeNodeOutlet as _,CdkTree as v,CdkTreeNodeToggle as g,CdkTreeModule as w}from"@angular/cdk/tree";import*as e from"@angular/core";import{booleanAttribute as F,numberAttribute as T}from"@angular/core";import{MatCommonModule as m}from"@angular/material/core";import{DataSource as C}from"@angular/cdk/collections";import{BehaviorSubject as u,merge as N}from"rxjs";import{take as M,map as E}from"rxjs/operators";var G=(()=>{class t extends c{constructor(i,n,r){super(i,n),this.disabled=!1,this.tabIndex=Number(r)||0}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy()}static{this.ɵfac=function(n){return new(n||t)(e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(l.CdkTree),e.ɵɵinjectAttribute("tabindex"))}}static{this.ɵdir=e.ɵɵdefineDirective({type:t,selectors:[["mat-tree-node"]],hostAttrs:[1,"mat-tree-node"],inputs:{disabled:[2,"disabled","disabled",F],tabIndex:[2,"tabIndex","tabIndex",i=>i==null?0:T(i)]},exportAs:["matTreeNode"],standalone:!0,features:[e.ɵɵProvidersFeature([{provide:c,useExisting:t}]),e.ɵɵInputTransformsFeature,e.ɵɵInheritDefinitionFeature]})}}return t})(),H=(()=>{class t extends f{static{this.ɵfac=(()=>{let i;return function(r){return(i||(i=e.ɵɵgetInheritedFactory(t)))(r||t)}})()}static{this.ɵdir=e.ɵɵdefineDirective({type:t,selectors:[["","matTreeNodeDef",""]],inputs:{when:[0,"matTreeNodeDefWhen","when"],data:[0,"matTreeNode","data"]},standalone:!0,features:[e.ɵɵProvidersFeature([{provide:f,useExisting:t}]),e.ɵɵInheritDefinitionFeature]})}}return t})(),J=(()=>{class t extends h{get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(i){this._tabIndex=i??0}constructor(i,n,r,a){super(i,n,r),this.disabled=!1,this.tabIndex=Number(a)||0}ngOnInit(){super.ngOnInit()}ngAfterContentInit(){super.ngAfterContentInit()}ngOnDestroy(){super.ngOnDestroy()}static{this.ɵfac=function(n){return new(n||t)(e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(l.CdkTree),e.ɵɵdirectiveInject(e.IterableDiffers),e.ɵɵinjectAttribute("tabindex"))}}static{this.ɵdir=e.ɵɵdefineDirective({type:t,selectors:[["mat-nested-tree-node"]],hostAttrs:[1,"mat-nested-tree-node"],inputs:{node:[0,"matNestedTreeNode","node"],disabled:[2,"disabled","disabled",F],tabIndex:"tabIndex"},exportAs:["matNestedTreeNode"],standalone:!0,features:[e.ɵɵProvidersFeature([{provide:h,useExisting:t},{provide:c,useExisting:t},{provide:b,useExisting:t}]),e.ɵɵInputTransformsFeature,e.ɵɵInheritDefinitionFeature]})}}return t})(),X=(()=>{class t extends p{get level(){return this._level}set level(i){this._setLevelInput(i)}get indent(){return this._indent}set indent(i){this._setIndentInput(i)}static{this.ɵfac=(()=>{let i;return function(r){return(i||(i=e.ɵɵgetInheritedFactory(t)))(r||t)}})()}static{this.ɵdir=e.ɵɵdefineDirective({type:t,selectors:[["","matTreeNodePadding",""]],inputs:{level:[2,"matTreeNodePadding","level",T],indent:[0,"matTreeNodePaddingIndent","indent"]},standalone:!0,features:[e.ɵɵProvidersFeature([{provide:p,useExisting:t}]),e.ɵɵInputTransformsFeature,e.ɵɵInheritDefinitionFeature]})}}return t})(),x=(()=>{class t{constructor(i,n){this.viewContainer=i,this._node=n}static{this.ɵfac=function(n){return new(n||t)(e.ɵɵdirectiveInject(e.ViewContainerRef),e.ɵɵdirectiveInject(b,8))}}static{this.ɵdir=e.ɵɵdefineDirective({type:t,selectors:[["","matTreeNodeOutlet",""]],standalone:!0,features:[e.ɵɵProvidersFeature([{provide:_,useExisting:t}])]})}}return t})(),Y=(()=>{class t extends v{constructor(){super(...arguments),this._nodeOutlet=void 0}static{this.ɵfac=(()=>{let i;return function(r){return(i||(i=e.ɵɵgetInheritedFactory(t)))(r||t)}})()}static{this.ɵcmp=e.ɵɵdefineComponent({type:t,selectors:[["mat-tree"]],viewQuery:function(n,r){if(n&1&&e.ɵɵviewQuery(x,7),n&2){let a;e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(r._nodeOutlet=a.first)}},hostAttrs:["role","tree",1,"mat-tree"],exportAs:["matTree"],standalone:!0,features:[e.ɵɵProvidersFeature([{provide:v,useExisting:t}]),e.ɵɵInheritDefinitionFeature,e.ɵɵStandaloneFeature],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(n,r){n&1&&e.ɵɵelementContainer(0,0)},dependencies:[x],styles:[".mat-tree{display:block;background-color:var(--mat-tree-container-background-color)}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color);font-family:var(--mat-tree-node-text-font);font-size:var(--mat-tree-node-text-size);font-weight:var(--mat-tree-node-text-weight)}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height)}.mat-nested-tree-node{border-bottom-width:0}"],encapsulation:2})}}return t})(),Z=(()=>{class t extends g{static{this.ɵfac=(()=>{let i;return function(r){return(i||(i=e.ɵɵgetInheritedFactory(t)))(r||t)}})()}static{this.ɵdir=e.ɵɵdefineDirective({type:t,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:[0,"matTreeNodeToggleRecursive","recursive"]},standalone:!0,features:[e.ɵɵProvidersFeature([{provide:g,useExisting:t}]),e.ɵɵInheritDefinitionFeature]})}}return t})();var $=(()=>{class t{static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵmod=e.ɵɵdefineNgModule({type:t})}static{this.ɵinj=e.ɵɵdefineInjector({imports:[w,m,m]})}}return t})(),y=class{constructor(s,i,n,r){this.transformFunction=s,this.getLevel=i,this.isExpandable=n,this.getChildren=r}_flattenNode(s,i,n,r){let a=this.transformFunction(s,i);if(n.push(a),this.isExpandable(a)){let d=this.getChildren(s);d&&(Array.isArray(d)?this._flattenChildren(d,i,n,r):d.pipe(M(1)).subscribe(o=>{this._flattenChildren(o,i,n,r)}))}return n}_flattenChildren(s,i,n,r){s.forEach((a,d)=>{let o=r.slice();o.push(d!=s.length-1),this._flattenNode(a,i+1,n,o)})}flattenNodes(s){let i=[];return s.forEach(n=>this._flattenNode(n,0,i,[])),i}expandFlattenedNodes(s,i){let n=[],r=[];return r[0]=!0,s.forEach(a=>{let d=!0;for(let o=0;o<=this.getLevel(a);o++)d=d&&r[o];d&&n.push(a),this.isExpandable(a)&&(r[this.getLevel(a)+1]=i.isExpanded(a))}),n}},D=class extends C{get data(){return this._data.value}set data(s){this._data.next(s),this._flattenedData.next(this._treeFlattener.flattenNodes(this.data)),this._treeControl.dataNodes=this._flattenedData.value}constructor(s,i,n){super(),this._treeControl=s,this._treeFlattener=i,this._flattenedData=new u([]),this._expandedData=new u([]),this._data=new u([]),n&&(this.data=n)}connect(s){return N(s.viewChange,this._treeControl.expansionModel.changed,this._flattenedData).pipe(E(()=>(this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value,this._treeControl)),this._expandedData.value)))}disconnect(){}},I=class extends C{constructor(){super(...arguments),this._data=new u([])}get data(){return this._data.value}set data(s){this._data.next(s)}connect(s){return N(s.viewChange,this._data).pipe(E(()=>this.data))}disconnect(){}};export{J as MatNestedTreeNode,Y as MatTree,D as MatTreeFlatDataSource,y as MatTreeFlattener,$ as MatTreeModule,I as MatTreeNestedDataSource,G as MatTreeNode,H as MatTreeNodeDef,x as MatTreeNodeOutlet,X as MatTreeNodePadding,Z as MatTreeNodeToggle};