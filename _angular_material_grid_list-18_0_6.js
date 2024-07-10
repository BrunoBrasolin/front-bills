import*as r from"@angular/core";import{InjectionToken as M}from"@angular/core";import{setLines as T,MatLine as b,MatLineModule as _,MatCommonModule as w}from"@angular/material/core";import{coerceNumberProperty as g}from"@angular/cdk/coercion";import*as y from"@angular/cdk/bidi";var x=["*"],z=[[["","mat-grid-avatar",""],["","matGridAvatar",""]],[["","mat-line",""],["","matLine",""]],"*"],I=["[mat-grid-avatar], [matGridAvatar]","[mat-line], [matLine]","*"],k=".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}",h=class{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(i=>this._trackTile(i))}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new c(this.rowIndex,t)}_findMatchingGap(e){e>this.tracker.length;let t=-1,i=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}i=this._findGapEndIndex(t),this.columnIndex=t+1}while(i-t<e||i==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let i=0;i<t.colspan;i++)this.tracker[e+i]=t.rowspan}},c=class{constructor(e,t){this.row=e,this.col=t}},v=new M("MAT_GRID_LIST"),D=(()=>{class n{constructor(t,i){this._element=t,this._gridList=i,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(g(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(g(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}static{this.ɵfac=function(i){return new(i||n)(r.ɵɵdirectiveInject(r.ElementRef),r.ɵɵdirectiveInject(v,8))}}static{this.ɵcmp=r.ɵɵdefineComponent({type:n,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(i,s){i&2&&r.ɵɵattribute("rowspan",s.rowspan)("colspan",s.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],standalone:!0,features:[r.ɵɵStandaloneFeature],ngContentSelectors:x,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(i,s){i&1&&(r.ɵɵprojectionDef(),r.ɵɵelementStart(0,"div",0),r.ɵɵprojection(1),r.ɵɵelementEnd())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0})}}return n})(),V=(()=>{class n{constructor(t){this._element=t}ngAfterContentInit(){T(this._lines,this._element)}static{this.ɵfac=function(i){return new(i||n)(r.ɵɵdirectiveInject(r.ElementRef))}}static{this.ɵcmp=r.ɵɵdefineComponent({type:n,selectors:[["mat-grid-tile-header"],["mat-grid-tile-footer"]],contentQueries:function(i,s,o){if(i&1&&r.ɵɵcontentQuery(o,b,5),i&2){let a;r.ɵɵqueryRefresh(a=r.ɵɵloadQuery())&&(s._lines=a)}},standalone:!0,features:[r.ɵɵStandaloneFeature],ngContentSelectors:I,decls:4,vars:0,consts:[[1,"mat-grid-list-text"]],template:function(i,s){i&1&&(r.ɵɵprojectionDef(z),r.ɵɵprojection(0),r.ɵɵelementStart(1,"div",0),r.ɵɵprojection(2,1),r.ɵɵelementEnd(),r.ɵɵprojection(3,2))},encapsulation:2,changeDetection:0})}}return n})(),N=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵdir=r.ɵɵdefineDirective({type:n,selectors:[["","mat-grid-avatar",""],["","matGridAvatar",""]],hostAttrs:[1,"mat-grid-avatar"],standalone:!0})}}return n})(),W=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵdir=r.ɵɵdefineDirective({type:n,selectors:[["mat-grid-tile-header"]],hostAttrs:[1,"mat-grid-tile-header"],standalone:!0})}}return n})(),q=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵdir=r.ɵɵdefineDirective({type:n,selectors:[["mat-grid-tile-footer"]],hostAttrs:[1,"mat-grid-tile-footer"],standalone:!0})}}return n})(),C=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,d=class{constructor(){this._rows=0,this._rowspan=0}init(e,t,i,s){this._gutterSize=S(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=i,this._direction=s}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?"0":l(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,i){let s=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(e,i,s,o),this.setRowStyles(e,t,s,o)}setColStyles(e,t,i,s){let o=this.getBaseTileSize(i,s),a=this._direction==="rtl"?"right":"left";e._setStyle(a,this.getTilePosition(o,t)),e._setStyle("width",l(this.getTileSize(o,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}},m=class extends d{constructor(e){super(),this.fixedRowHeight=e}init(e,t,i,s){super.init(e,t,i,s),this.fixedRowHeight=S(this.fixedRowHeight),C.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),e._setStyle("height",l(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return["height",l(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["height",null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}},p=class extends d{constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,i,s){let o=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,s),e._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),e._setStyle("paddingTop",l(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return["paddingBottom",l(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["paddingBottom",null]),e._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(e){let t=e.split(":");t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}},f=class extends d{setRowStyles(e,t){let i=100/this._rowspan,s=(this._rows-1)/this._rows,o=this.getBaseTileSize(i,s);e._setStyle("top",this.getTilePosition(o,t)),e._setStyle("height",l(this.getTileSize(o,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}};function l(n){return`calc(${n})`}function S(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var H="fit",Z=(()=>{class n{constructor(t,i){this._element=t,this._dir=i,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(g(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let i=`${t??""}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===H?this._tileStyler=new f:t&&t.indexOf(":")>-1?this._tileStyler=new p(t):this._tileStyler=new m(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new h);let t=this._tileCoordinator,i=this._tiles.filter(o=>!o._gridList||o._gridList===this),s=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,s),i.forEach((o,a)=>{let u=t.positions[a];this._tileStyler.setStyle(o,u.row,u.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static{this.ɵfac=function(i){return new(i||n)(r.ɵɵdirectiveInject(r.ElementRef),r.ɵɵdirectiveInject(y.Directionality,8))}}static{this.ɵcmp=r.ɵɵdefineComponent({type:n,selectors:[["mat-grid-list"]],contentQueries:function(i,s,o){if(i&1&&r.ɵɵcontentQuery(o,D,5),i&2){let a;r.ɵɵqueryRefresh(a=r.ɵɵloadQuery())&&(s._tiles=a)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(i,s){i&2&&r.ɵɵattribute("cols",s.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],standalone:!0,features:[r.ɵɵProvidersFeature([{provide:v,useExisting:n}]),r.ɵɵStandaloneFeature],ngContentSelectors:x,decls:2,vars:0,template:function(i,s){i&1&&(r.ɵɵprojectionDef(),r.ɵɵelementStart(0,"div"),r.ɵɵprojection(1),r.ɵɵelementEnd())},styles:[k],encapsulation:2,changeDetection:0})}}return n})(),U=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵmod=r.ɵɵdefineNgModule({type:n})}static{this.ɵinj=r.ɵɵdefineInjector({imports:[_,w,_,w]})}}return n})(),J=h;export{N as MatGridAvatarCssMatStyler,Z as MatGridList,U as MatGridListModule,D as MatGridTile,q as MatGridTileFooterCssMatStyler,W as MatGridTileHeaderCssMatStyler,V as MatGridTileText,J as ɵTileCoordinator};