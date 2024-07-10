import"@angular/core";import{MatSidenavModule as J}from"@angular/material/sidenav";import{MatIconModule as $}from"@angular/material/icon";import{MatDividerModule as q}from"@angular/material/divider";import"@angular/core";import{FormsModule as I}from"@angular/forms";import{MatFormFieldModule as A}from"@angular/material/form-field";import{MatInputModule as z}from"@angular/material/input";import{MatButtonModule as U}from"@angular/material/button";import{MatCardModule as R}from"@angular/material/card";import*as e from"@angular/core";import{HttpHeaders as B}from"@angular/common/http";import"@angular/core";import*as C from"@angular/core";import*as M from"@angular/common/http";var h=(()=>{class a{constructor(o){this.http=o}CalculatePercentage(o){return this.http.get(`https://api.gamidas.dev.br/contas/conta?valor=${o}`)}UpdateSalary(o){let r=new B({"Content-Type":"application/json"});return this.http.put("https://api.gamidas.dev.br/contas/atualizar-salario",JSON.stringify(o),{headers:r})}static{this.\u0275fac=function(r){return new(r||a)(C.\u0275\u0275inject(M.HttpClient))}}static{this.\u0275prov=C.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();import*as c from"@angular/forms";import*as d from"@angular/material/form-field";import*as y from"@angular/material/input";import*as _ from"@angular/material/button";import*as m from"@angular/material/card";var P=(()=>{class a{constructor(o){this.service=o,this.value=null,this.apiReturn=null}onClickCalcular(){if(this.value===null){alert("Favor inserir um valor v\xE1lido para o c\xE1lculo!");return}this.service.CalculatePercentage(this.value).subscribe(o=>this.apiReturn=o)}onClickLimpar(){this.value=null,this.apiReturn=null}static{this.\u0275fac=function(r){return new(r||a)(e.\u0275\u0275directiveInject(h))}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["app-calculate-percentage"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:27,vars:3,consts:[[1,"main"],["matTextPrefix",""],["matInput","","type","number",3,"ngModelChange","ngModel"],[1,"button-row"],["mat-raised-button","","color","primary",3,"click"],["mat-button","","color","primary",3,"click"]],template:function(r,i){r&1&&(e.\u0275\u0275elementStart(0,"main",0)(1,"h1"),e.\u0275\u0275text(2,"Calcular Porcentagem"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"section")(4,"mat-form-field")(5,"mat-label"),e.\u0275\u0275text(6,"Valor"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"span",1),e.\u0275\u0275text(8,"R$ \xA0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"input",2),e.\u0275\u0275twoWayListener("ngModelChange",function(l){return e.\u0275\u0275twoWayBindingSet(i.value,l)||(i.value=l),l}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(10,"br"),e.\u0275\u0275elementStart(11,"div",3)(12,"button",4),e.\u0275\u0275listener("click",function(){return i.onClickCalcular()}),e.\u0275\u0275text(13,"Calcular"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"button",5),e.\u0275\u0275listener("click",function(){return i.onClickLimpar()}),e.\u0275\u0275text(15,"Limpar"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(16,"br")(17,"br"),e.\u0275\u0275elementStart(18,"mat-card")(19,"mat-card-header")(20,"mat-card-title"),e.\u0275\u0275text(21,"Valor de cada um"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(22,"mat-card-content")(23,"p"),e.\u0275\u0275text(24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"p"),e.\u0275\u0275text(26),e.\u0275\u0275elementEnd()()()()),r&2&&(e.\u0275\u0275advance(9),e.\u0275\u0275twoWayProperty("ngModel",i.value),e.\u0275\u0275advance(15),e.\u0275\u0275textInterpolate1("Let\xEDcia: R$",(i.apiReturn==null?null:i.apiReturn.Leticia)||"0,00",""),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Bruno: R$",(i.apiReturn==null?null:i.apiReturn.Bruno)||"0,00",""))},dependencies:[I,c.DefaultValueAccessor,c.NumberValueAccessor,c.NgControlStatus,c.NgModel,A,d.MatFormField,d.MatLabel,d.MatPrefix,z,y.MatInput,U,_.MatButton,R,m.MatCard,m.MatCardContent,m.MatCardHeader,m.MatCardTitle],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.button-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{text-transform:uppercase}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{margin:.5rem 0}"]})}}return a})();import"@angular/core";import{FormsModule as D}from"@angular/forms";import{MatFormFieldModule as L}from"@angular/material/form-field";import{MatInputModule as W}from"@angular/material/input";import{MatButtonModule as j}from"@angular/material/button";import{MatCardModule as N}from"@angular/material/card";import{MatSelectModule as V}from"@angular/material/select";import{MatSnackBarModule as H}from"@angular/material/snack-bar";import*as t from"@angular/core";import*as S from"@angular/material/snack-bar";import*as s from"@angular/forms";import*as u from"@angular/material/form-field";import*as b from"@angular/material/input";import*as O from"@angular/material/button";import*as x from"@angular/material/select";import*as E from"@angular/material/core";var k=(()=>{class a{constructor(o,r){this.service=o,this.snackBar=r,this.salary=null,this.person=null,this.horizontalPosition="center",this.verticalPosition="bottom",this.timer=3e3}onClickAtualizar(){if(this.salary===null||this.person===null){this.snackBar.open("Favor colocar dados v\xE1lidos!","Fechar",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,duration:this.timer});return}let o={salary:this.salary,person:this.person};this.service.UpdateSalary(o).subscribe({next:this.handleSuccess.bind(this),error:this.handleError.bind(this)})}handleSuccess(){this.snackBar.open(`Sal\xE1rio de ${this.person} atualizado para ${this.salary}!`,"Fechar",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,duration:this.timer})}handleError(){this.snackBar.open("Erro, favor contatar o Maggie Hub!","Fechar",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,duration:this.timer})}static{this.\u0275fac=function(r){return new(r||a)(t.\u0275\u0275directiveInject(h),t.\u0275\u0275directiveInject(S.MatSnackBar))}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["app-update-salary"]],standalone:!0,features:[t.\u0275\u0275StandaloneFeature],decls:21,vars:4,consts:[[1,"main"],["matTextPrefix",""],["matInput","","type","number",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["mat-raised-button","","color","primary",3,"click"]],template:function(r,i){r&1&&(t.\u0275\u0275elementStart(0,"main",0)(1,"h1"),t.\u0275\u0275text(2,"Atualizar Sal\xE1rio"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"mat-form-field")(4,"mat-label"),t.\u0275\u0275text(5,"Valor"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"span",1),t.\u0275\u0275text(7,"R$ \xA0"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"input",2),t.\u0275\u0275twoWayListener("ngModelChange",function(l){return t.\u0275\u0275twoWayBindingSet(i.salary,l)||(i.salary=l),l}),t.\u0275\u0275elementEnd()(),t.\u0275\u0275element(9,"br"),t.\u0275\u0275elementStart(10,"mat-form-field")(11,"mat-label"),t.\u0275\u0275text(12,"Pessoa"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(13,"mat-select",3),t.\u0275\u0275twoWayListener("ngModelChange",function(l){return t.\u0275\u0275twoWayBindingSet(i.person,l)||(i.person=l),l}),t.\u0275\u0275elementStart(14,"mat-option",4),t.\u0275\u0275text(15,"Let\xEDcia"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(16,"mat-option",4),t.\u0275\u0275text(17,"Bruno"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275element(18,"br"),t.\u0275\u0275elementStart(19,"button",5),t.\u0275\u0275listener("click",function(){return i.onClickAtualizar()}),t.\u0275\u0275text(20,"Atualizar"),t.\u0275\u0275elementEnd()()),r&2&&(t.\u0275\u0275advance(8),t.\u0275\u0275twoWayProperty("ngModel",i.salary),t.\u0275\u0275advance(5),t.\u0275\u0275twoWayProperty("ngModel",i.person),t.\u0275\u0275advance(),t.\u0275\u0275property("value",0),t.\u0275\u0275advance(2),t.\u0275\u0275property("value",1))},dependencies:[D,s.DefaultValueAccessor,s.NumberValueAccessor,s.NgControlStatus,s.NgModel,L,u.MatFormField,u.MatLabel,u.MatPrefix,W,b.MatInput,j,O.MatButton,N,V,x.MatSelect,E.MatOption,H],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]})}}return a})();import{RouterModule as G}from"@angular/router";import{CommonModule as K}from"@angular/common";import{MatButtonModule as Q}from"@angular/material/button";import*as n from"@angular/core";import*as w from"@angular/common";import*as f from"@angular/material/sidenav";import*as T from"@angular/material/button";function X(a,F){a&1&&n.\u0275\u0275element(0,"app-calculate-percentage")}function Y(a,F){a&1&&n.\u0275\u0275element(0,"app-update-salary")}var g=function(a){return a[a.CalculatePercentage=0]="CalculatePercentage",a[a.UpdateSalary=1]="UpdateSalary",a}(g||{}),Ft=(()=>{class a{constructor(){this.buttonColors={calculatePercentage:"basic",updateSalary:"basic"},this.activeComponent=g.CalculatePercentage,this.ComponentsType=g,this.buttonColors.calculatePercentage="primary",this.buttonColors.updateSalary="basic"}navigateToUpdateSalary(){this.activeComponent=g.UpdateSalary,this.buttonColors.updateSalary="primary",this.buttonColors.calculatePercentage="basic"}navigateToCalculatePercentage(){this.activeComponent=g.CalculatePercentage,this.buttonColors.calculatePercentage="primary",this.buttonColors.updateSalary="basic"}static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275cmp=n.\u0275\u0275defineComponent({type:a,selectors:[["app-root"]],standalone:!0,features:[n.\u0275\u0275StandaloneFeature],decls:11,vars:4,consts:[[1,"sidenav-container"],["mode","side","opened","",1,"sidenav"],["mat-raised-button","",3,"click","color"],[4,"ngIf"]],template:function(r,i){r&1&&(n.\u0275\u0275elementStart(0,"mat-sidenav-container",0)(1,"mat-sidenav",1)(2,"h1"),n.\u0275\u0275text(3,"Contas"),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(4,"button",2),n.\u0275\u0275listener("click",function(){return i.navigateToCalculatePercentage()}),n.\u0275\u0275text(5,"Calcular porcentagem"),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(6,"button",2),n.\u0275\u0275listener("click",function(){return i.navigateToUpdateSalary()}),n.\u0275\u0275text(7,"Atualizar sal\xE1rio"),n.\u0275\u0275elementEnd()(),n.\u0275\u0275elementStart(8,"mat-sidenav-content"),n.\u0275\u0275template(9,X,1,0,"app-calculate-percentage",3)(10,Y,1,0,"app-update-salary",3),n.\u0275\u0275elementEnd()()),r&2&&(n.\u0275\u0275advance(4),n.\u0275\u0275property("color",i.buttonColors.calculatePercentage),n.\u0275\u0275advance(2),n.\u0275\u0275property("color",i.buttonColors.updateSalary),n.\u0275\u0275advance(3),n.\u0275\u0275property("ngIf",i.activeComponent==i.ComponentsType.CalculatePercentage),n.\u0275\u0275advance(),n.\u0275\u0275property("ngIf",i.activeComponent==i.ComponentsType.UpdateSalary))},dependencies:[K,w.NgIf,G,J,f.MatSidenav,f.MatSidenavContainer,f.MatSidenavContent,Q,T.MatButton,q,$,P,k],styles:["body[_ngcontent-%COMP%]{overflow:hidden;height:100vh}.sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav-container[_ngcontent-%COMP%]     .mat-drawer-content{overflow:hidden}.sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{width:300px;display:flex;padding:1rem;align-items:center}.sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container{display:flex;flex-direction:column}.sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container button{margin:0 .25rem 1rem;padding:.5rem 0}@media only screen and (max-width: 768px){.sidenav-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:auto}.sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{position:relative;width:100%;flex-direction:column}.sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]{margin:0!important;height:auto}}"]})}}return a})();export{Ft as AppComponent};