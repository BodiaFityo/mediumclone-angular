"use strict";(self.webpackChunkmediumclone_angular=self.webpackChunkmediumclone_angular||[]).push([[904],{2904:(C,A,i)=>{i.r(A),i.d(A,{article:()=>B});var d={};i.r(d),i.d(d,{articleEffect:()=>z,deleteArticleEffect:()=>W,redirectAfterDeleteArticle:()=>P});var o=i(7483),l=i(4221),g=i(6814);const c=(0,l.R7)({source:"Article",events:{"Load Article":(0,l.Ky)(),"Load Article Success":(0,l.Ky)(),"Load Article Failure":(0,l.uZ)(),"Delete Article":(0,l.Ky)(),"Delete Article Succsess":(0,l.uZ)(),"Delete Article Faulure":(0,l.uZ)()}});var m=i(493);const u={isLoading:!1,article:null,errors:null},p=(0,l.Tz)({name:"article",reducer:(0,l.Lq)(u,(0,l.on)(c.loadArticle,e=>({...e,isLoading:!0})),(0,l.on)(c.loadArticleSuccess,(e,{article:a})=>({...e,article:a,isLoading:!1,errors:null})),(0,l.on)(c.loadArticleFailure,e=>({...e,isLoading:!1,errors:null})),(0,l.on)(m.hn,()=>u))}),{name:f,reducer:b,selectArticle:q,selectIsLoading:E}=p;var t=i(5879);let U=(()=>{var e;class a{constructor(n){this.store=n,this.getArticle$=this.store.select(q),this.isLoading$=this.store.select(E)}loadArticle(n){this.store.dispatch(c.loadArticle({slug:n}))}deleteArticle(n){this.store.dispatch(c.deleteArticle({slug:n}))}}return(e=a).\u0275fac=function(n){return new(n||e)(t.LFG(l.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),a})();var Z=i(8281),O=i(2572),h=i(7398),D=i(9185),S=i(6470),I=i(2023);function J(e,a){1&e&&t._UZ(0,"mc-loader")}const M=function(e){return["/article",e,"edit"]};function Q(e,a){if(1&e){const r=t.EpF();t.TgZ(0,"span")(1,"a",40),t._UZ(2,"i",23),t._uU(3," Edit Article1 "),t.qZA(),t.TgZ(4,"button",41),t.NdJ("click",function(){t.CHM(r);const s=t.oxw(3);return t.KtG(s.deleteArticle())}),t._UZ(5,"i",25),t._uU(6," Delete Article "),t.qZA()()}if(2&e){const r=t.oxw().ngIf;t.xp6(1),t.Q6J("routerLink",t.VKq(1,M,r.slug))}}const T=function(e){return["/profiles",e]};function K(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"h1"),t._uU(4),t.qZA(),t.TgZ(5,"div",4)(6,"a",5),t._UZ(7,"img",6),t.qZA(),t.TgZ(8,"div",7)(9,"a",8),t._uU(10),t.qZA(),t.TgZ(11,"span",9),t._uU(12),t.ALo(13,"date"),t.qZA()(),t.YNc(14,Q,7,3,"span",0),t.qZA()()(),t.TgZ(15,"div",10)(16,"div",11)(17,"div",12)(18,"p"),t._uU(19),t.qZA(),t._UZ(20,"mc-feed-tag-list",13),t.qZA()(),t._UZ(21,"hr"),t.TgZ(22,"div",14)(23,"div",4)(24,"a",15),t._UZ(25,"img",16),t.qZA(),t.TgZ(26,"div",7)(27,"a",17),t._uU(28,"Eric Simons"),t.qZA(),t.TgZ(29,"span",9),t._uU(30,"January 20th"),t.qZA()(),t.TgZ(31,"button",18),t._UZ(32,"i",19),t._uU(33," \xa0 Follow Eric Simons "),t.qZA(),t._uU(34," \xa0 "),t.TgZ(35,"button",20),t._UZ(36,"i",21),t._uU(37," \xa0 Favorite Article "),t.TgZ(38,"span",22),t._uU(39,"(29)"),t.qZA()(),t.TgZ(40,"button",18),t._UZ(41,"i",23),t._uU(42," Edit Article "),t.qZA(),t.TgZ(43,"button",24),t._UZ(44,"i",25),t._uU(45," Delete Article "),t.qZA()()(),t.TgZ(46,"div",26)(47,"div",27)(48,"form",28)(49,"div",29),t._UZ(50,"textarea",30),t.qZA(),t.TgZ(51,"div",31),t._UZ(52,"img",32),t.TgZ(53,"button",33),t._uU(54," Post Comment "),t.qZA()()(),t.TgZ(55,"div",34)(56,"div",29)(57,"p",35),t._uU(58," With supporting text below as a natural lead-in to additional content. "),t.qZA()(),t.TgZ(59,"div",31)(60,"a",36),t._UZ(61,"img",32),t.qZA(),t._uU(62," \xa0 "),t.TgZ(63,"a",37),t._uU(64,"Jacob Schmidt"),t.qZA(),t.TgZ(65,"span",38),t._uU(66,"Dec 29th"),t.qZA()()(),t.TgZ(67,"div",34)(68,"div",29)(69,"p",35),t._uU(70," With supporting text below as a natural lead-in to additional content. "),t.qZA()(),t.TgZ(71,"div",31)(72,"a",36),t._UZ(73,"img",32),t.qZA(),t._uU(74," \xa0 "),t.TgZ(75,"a",37),t._uU(76,"Jacob Schmidt"),t.qZA(),t.TgZ(77,"span",38),t._uU(78,"Dec 29th"),t.qZA(),t.TgZ(79,"span",39),t._UZ(80,"i",25),t.qZA()()()()()(),t.BQk()),2&e){const r=a.ngIf,n=t.oxw().ngIf;t.xp6(4),t.Oqu(r.title),t.xp6(2),t.Q6J("routerLink",t.VKq(11,T,r.author.username)),t.xp6(1),t.Q6J("src",r.author.image,t.LSH),t.xp6(2),t.Q6J("routerLink",t.VKq(13,T,r.author.username)),t.xp6(1),t.Oqu(r.author.username),t.xp6(2),t.Oqu(t.lcZ(13,9,r.createdAt)),t.xp6(2),t.Q6J("ngIf",n.isAuthor),t.xp6(5),t.hij(" ",r.body," "),t.xp6(1),t.Q6J("tagList",r.tagList)}}function Y(e,a){if(1&e&&(t.ynx(0),t.YNc(1,J,1,0,"mc-loader",0),t.TgZ(2,"div",1),t.YNc(3,K,81,15,"ng-container",0),t.qZA(),t.BQk()),2&e){const r=a.ngIf;t.xp6(1),t.Q6J("ngIf",r.isLoading),t.xp6(2),t.Q6J("ngIf",r.article)}}let $=(()=>{var e;class a{constructor(n,s,G){this.articleFacade=n,this.route=s,this.authFacade=G,this.slug="",this.data$=(0,O.a)({article:this.articleFacade.getArticle$,isLoading:this.articleFacade.isLoading$,currentUser:this.authFacade.currentUser$}).pipe((0,h.U)(v=>({...v,isAuthor:v.currentUser?.username===v.article?.author.username})))}ngOnInit(){this.route.params.subscribe(n=>{this.slug=n.slug,this.articleFacade.loadArticle(this.slug)})}deleteArticle(){this.articleFacade.deleteArticle(this.slug)}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(U),t.Y36(Z.gz),t.Y36(I.j))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mc-article"]],standalone:!0,features:[t._Bn([U]),t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"article-page"],[1,"banner"],[1,"container"],[1,"article-meta"],[3,"routerLink"],["alt","image",3,"src"],[1,"info"],[1,"author",3,"routerLink"],[1,"date"],[1,"container","page"],[1,"row","article-content"],[1,"col-md-12"],[3,"tagList"],[1,"article-actions"],["href","profile.html"],["src","http://i.imgur.com/Qr71crq.jpg","alt","image"],["href","",1,"author"],[1,"btn","btn-sm","btn-outline-secondary"],[1,"ion-plus-round"],[1,"btn","btn-sm","btn-outline-primary"],[1,"ion-heart"],[1,"counter"],[1,"ion-edit"],[1,"btn","btn-sm","btn-outline-danger"],[1,"ion-trash-a"],[1,"row"],[1,"col-xs-12","col-md-8","offset-md-2"],[1,"card","comment-form"],[1,"card-block"],["placeholder","Write a comment...","rows","3",1,"form-control"],[1,"card-footer"],["src","http://i.imgur.com/Qr71crq.jpg","alt","image",1,"comment-author-img"],[1,"btn","btn-sm","btn-primary"],[1,"card"],[1,"card-text"],["href","/profile/author",1,"comment-author"],["href","/profile/jacob-schmidt",1,"comment-author"],[1,"date-posted"],[1,"mod-options"],[1,"btn","btn-sm","btn-outline-primary",3,"routerLink"],[1,"btn","btn-sm","btn-outline-danger",3,"click"]],template:function(n,s){1&n&&(t.YNc(0,Y,4,2,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,s.data$))},dependencies:[g.ez,g.O5,g.Ov,g.uU,D.R,Z.rH,S.c],styles:[".article-page[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{background:#333}"]}),a})();var L=i(5516),N=i(9862);let F=(()=>{var e;class a{constructor(n){this.http=n}getArticle(n){return this.http.get(L.N.apiUrl+`/articles/${n}`)}deleteArticle(n){return this.http.delete(L.N.apiUrl+`/articles/${n}`)}}return(e=a).\u0275fac=function(n){return new(n||e)(t.LFG(N.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();var _=i(4664),x=i(6306),y=i(2096),j=i(9397);const z=(0,o.GW)((e=(0,t.f3M)(o.eX),a=(0,t.f3M)(F))=>e.pipe((0,o.l4)(c.loadArticle),(0,_.w)(({slug:r})=>a.getArticle(r).pipe((0,h.U)(n=>c.loadArticleSuccess(n)),(0,x.K)(()=>(0,y.of)(c.loadArticleFailure()))))),{functional:!0}),W=(0,o.GW)((e=(0,t.f3M)(o.eX),a=(0,t.f3M)(F))=>e.pipe((0,o.l4)(c.deleteArticle),(0,_.w)(({slug:r})=>a.deleteArticle(r).pipe((0,h.U)(()=>c.deleteArticleSuccsess()),(0,x.K)(()=>(0,y.of)(c.deleteArticleFaulure()))))),{functional:!0}),P=(0,o.GW)((e=(0,t.f3M)(o.eX),a=(0,t.f3M)(Z.F0))=>e.pipe((0,o.l4)(c.deleteArticleSuccsess),(0,j.b)(()=>a.navigateByUrl("/"))),{functional:!0,dispatch:!1}),B=[{path:"",component:$,providers:[(0,l.oY)(f,b),(0,o.y3)(d)]}]},6470:(C,A,i)=>{i.d(A,{c:()=>g});var d=i(6814),o=i(5879);function l(c,m){if(1&c&&(o.TgZ(0,"ul",1)(1,"li",2),o._uU(2),o.qZA()()),2&c){const u=m.$implicit;o.xp6(2),o.Oqu(u)}}let g=(()=>{var c;class m{constructor(){this.tagList=[]}}return(c=m).\u0275fac=function(p){return new(p||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["mc-feed-tag-list"]],inputs:{tagList:"tagList"},standalone:!0,features:[o.jDz],decls:1,vars:1,consts:[["class","tag-list",4,"ngFor","ngForOf"],[1,"tag-list"],[1,"tag-default","tag-pill","tag-outline"]],template:function(p,f){1&p&&o.YNc(0,l,3,1,"ul",0),2&p&&o.Q6J("ngForOf",f.tagList)},dependencies:[d.ez,d.sg]}),m})()}}]);