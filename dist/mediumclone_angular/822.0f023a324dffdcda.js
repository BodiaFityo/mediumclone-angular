"use strict";(self.webpackChunkmediumclone_angular=self.webpackChunkmediumclone_angular||[]).push([[822],{1822:($,p,o)=>{o.r(p),o.d(p,{settings:()=>O});var c=o(4221),m=o(6814),g=o(8682),S=o(493);const h={isSubmitting:!1,errors:null},Z=(0,c.Tz)({name:"settings",reducer:(0,c.Lq)(h,(0,c.on)(g.Y.updateUser,e=>({...e,isSubmitting:!0})),(0,c.on)(g.Y.updateUserSuccess,e=>({...e,isSubmitting:!1})),(0,c.on)(g.Y.updateUserFailure,(e,{error:s})=>({...e,isSubmitting:!1,errors:s})),(0,c.on)(S.tr,()=>h))}),{name:x,reducer:U,selectIsSubmitting:v,selectErrors:F}=Z;var t=o(5879);let u=(()=>{var e;class s{constructor(n){this.store=n,this.isSubmitting$=this.store.select(v),this.errors$=this.store.select(F)}}return(e=s).\u0275fac=function(n){return new(n||e)(t.LFG(c.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),s})();var C=o(7815),T=o(9185),b=o(2572),Y=o(2181),y=o(7398),i=o(95),_=o(2023);function N(e,s){1&e&&t._UZ(0,"mc-loader")}function I(e,s){1&e&&t._UZ(0,"mc-error-messages",17),2&e&&t.Q6J("errors","That name is required")}function J(e,s){if(1&e){const r=t.EpF();t.ynx(0),t.TgZ(1,"div",3)(2,"div",4)(3,"div",5)(4,"h1",6),t._uU(5,"Your Settings"),t.qZA(),t.YNc(6,I,1,1,"mc-error-messages",7),t.TgZ(7,"form",8),t.NdJ("ngSubmit",function(){t.CHM(r);const a=t.oxw(2);return t.KtG(a.onSubmit())}),t.TgZ(8,"fieldset")(9,"fieldset",9),t._UZ(10,"input",10),t.qZA(),t.TgZ(11,"fieldset",9),t._UZ(12,"input",11),t.qZA(),t.TgZ(13,"fieldset",9),t._UZ(14,"textarea",12),t.qZA(),t.TgZ(15,"fieldset",9),t._UZ(16,"input",13),t.qZA(),t.TgZ(17,"fieldset",9),t._UZ(18,"input",14),t.qZA(),t.TgZ(19,"button",15),t._uU(20," Update Settings "),t.qZA()()(),t._UZ(21,"hr"),t.TgZ(22,"button",16),t.NdJ("click",function(){t.CHM(r);const a=t.oxw(2);return t.KtG(a.logOut())}),t._uU(23," Or click here to logout. "),t.qZA()()()(),t.BQk()}if(2&e){const r=t.oxw().ngIf,n=t.oxw();t.xp6(6),t.Q6J("ngIf",r.errors),t.xp6(1),t.Q6J("formGroup",n.form)}}function A(e,s){if(1&e&&(t.TgZ(0,"section",1),t.YNc(1,N,1,0,"mc-loader",2),t.YNc(2,J,24,2,"ng-container",2),t.qZA()),2&e){const r=s.ngIf;t.xp6(1),t.Q6J("ngIf",!r.currentUser),t.xp6(1),t.Q6J("ngIf",r.currentUser)}}const O=[{path:"",component:(()=>{var e;class s{constructor(n,a,f){this.settingsFacade=n,this.authFacade=a,this.fb=f,this.data$=(0,b.a)([this.settingsFacade.isSubmitting$,this.settingsFacade.errors$,this.authFacade.currentUser$]).pipe((0,Y.h)(([,,l])=>!!l),(0,y.U)(([l,Q,d])=>(this.initForm(d),this.currentUser=d,{isSubmitting:l,errors:Q,currentUser:d}))),this.form=this.fb.nonNullable.group({image:[""],username:[""],bio:[""],email:["",i.kI.email],password:[""]})}initForm({image:n,username:a,bio:f,email:l}){this.form.patchValue({image:n||"",username:a,bio:f||"",email:l})}onSubmit(){if(this.currentUser){const n={user:{...this.currentUser,...this.form.getRawValue()}};this.authFacade.updateUser(n)}}logOut(){this.authFacade.logOut()}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(u),t.Y36(_.j),t.Y36(i.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mc-settings"]],standalone:!0,features:[t._Bn([u]),t.jDz],decls:2,vars:3,consts:[["class","settings-page",4,"ngIf"],[1,"settings-page"],[4,"ngIf"],[1,"container","page"],[1,"row"],[1,"col-md-6","offset-md-3","col-xs-12"],[1,"text-xs-center"],[3,"errors",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","image","type","text","placeholder","URL of profile picture",1,"form-control"],["formControlName","username","type","text","placeholder","Your Name",1,"form-control","form-control-lg"],["formControlName","bio","rows","8","placeholder","Short bio about you",1,"form-control","form-control-lg"],["formControlName","email","type","text","placeholder","Email",1,"form-control","form-control-lg"],["type","password","placeholder","New Password",1,"form-control","form-control-lg"],[1,"btn","btn-lg","btn-primary","pull-xs-right"],[1,"btn","btn-outline-danger",3,"click"],[3,"errors"]],template:function(n,a){1&n&&(t.YNc(0,A,3,2,"section",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,a.data$))},dependencies:[m.ez,m.O5,m.Ov,C.O,T.R,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]}),s})(),providers:[u,(0,c.oY)(x,U)]}]}}]);