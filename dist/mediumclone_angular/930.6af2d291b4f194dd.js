"use strict";(self.webpackChunkmediumclone_angular=self.webpackChunkmediumclone_angular||[]).push([[930],{7815:(v,_,u)=>{u.d(_,{O:()=>C});var h=u(6814),c=u(5879);let C=(()=>{var g;class a{constructor(){this.errors=""}}return(g=a).\u0275fac=function(d){return new(d||g)},g.\u0275cmp=c.Xpm({type:g,selectors:[["mc-error-messages"]],inputs:{errors:"errors"},standalone:!0,features:[c.jDz],decls:2,vars:1,consts:[[1,"error-messages"]],template:function(d,F){1&d&&(c.TgZ(0,"p",0),c._uU(1),c.qZA()),2&d&&(c.xp6(1),c.Oqu(F.errors))},dependencies:[h.ez]}),a})()},6470:(v,_,u)=>{u.d(_,{c:()=>g});var h=u(6814),c=u(5879);function C(a,m){if(1&a&&(c.TgZ(0,"ul",1)(1,"li",2),c._uU(2),c.qZA()()),2&a){const d=m.$implicit;c.xp6(2),c.Oqu(d)}}let g=(()=>{var a;class m{constructor(){this.tagList=[]}}return(a=m).\u0275fac=function(F){return new(F||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["mc-feed-tag-list"]],inputs:{tagList:"tagList"},standalone:!0,features:[c.jDz],decls:1,vars:1,consts:[["class","tag-list",4,"ngFor","ngForOf"],[1,"tag-list"],[1,"tag-default","tag-pill","tag-outline"]],template:function(F,y){1&F&&c.YNc(0,C,3,1,"ul",0),2&F&&c.Q6J("ngForOf",y.tagList)},dependencies:[h.ez,h.sg]}),m})()},930:(v,_,u)=>{u.d(_,{e:()=>ge});var h={};u.r(h),u.d(h,{exclude:()=>te,extract:()=>T,parse:()=>A,parseUrl:()=>N,pick:()=>D,stringify:()=>j,stringifyUrl:()=>w});var c=u(6814),C=u(5594),g=u(8891),a=u(5879),m=u(4221);let d=(()=>{var e;class n{constructor(t){this.store=t,this.isLoading$=this.store.select(g.xU),this.loadFeed$=this.store.select(g._z),this.isError$=this.store.select(g.zh)}getFeed(t){this.store.dispatch(C.I.getFeed({url:t}))}}return(e=n).\u0275fac=function(t){return new(t||e)(a.LFG(m.yh))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),n})();var F=u(2572),y=u(8281),M=u(7815),R=u(9185);const z=function(e){return{active:e}},Y=function(e){return{page:e}};function K(e,n){if(1&e&&(a.TgZ(0,"li",2)(1,"a",3),a._uU(2),a.qZA()()),2&e){const r=n.$implicit,t=a.oxw();a.Q6J("ngClass",a.VKq(4,z,r===t.currentPage)),a.xp6(1),a.Q6J("routerLink",t.url)("queryParams",a.VKq(6,Y,r)),a.xp6(1),a.Oqu(r)}}let V=(()=>{var e;class n{constructor(){this.url="",this.limit=20,this.total=0,this.currentPage=1,this.pageCount=0,this.pages=[]}ngOnInit(){this.pageCount=Math.ceil(this.total/this.limit),this.pages=this.pageCount>0?this.range(1,this.pageCount):[]}range(t,i){return[...Array(i-t).keys()].map(s=>s+t)}}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["mc-pagination"]],inputs:{url:"url",limit:"limit",total:"total",currentPage:"currentPage"},standalone:!0,features:[a.jDz],decls:2,vars:1,consts:[[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"routerLink","queryParams"]],template:function(t,i){1&t&&(a.TgZ(0,"ul",0),a.YNc(1,K,3,8,"li",1),a.qZA()),2&t&&(a.xp6(1),a.Q6J("ngForOf",i.pages))},dependencies:[c.ez,c.mk,c.sg,y.rH]}),n})();const E="%[a-f0-9]{2}",L=new RegExp("("+E+")|([^%]+?)","gi"),Z=new RegExp("("+E+")+","gi");function x(e,n){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;const r=e.slice(0,n=n||1),t=e.slice(n);return Array.prototype.concat.call([],x(r),x(t))}function B(e){try{return decodeURIComponent(e)}catch{let n=e.match(L)||[];for(let r=1;r<n.length;r++)n=(e=x(n,r).join("")).match(L)||[];return e}}function I(e,n){if("string"!=typeof e||"string"!=typeof n)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===n)return[];const r=e.indexOf(n);return-1===r?[]:[e.slice(0,r),e.slice(r+n.length)]}function O(e,n){const r={};if(Array.isArray(n))for(const t of n){const i=Object.getOwnPropertyDescriptor(e,t);i?.enumerable&&Object.defineProperty(r,t,i)}else for(const t of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,t);i.enumerable&&n(t,e[t],e)&&Object.defineProperty(r,t,i)}return r}const W=e=>null==e,X=e=>encodeURIComponent(e).replace(/[!'()*]/g,n=>`%${n.charCodeAt(0).toString(16).toUpperCase()}`),U=Symbol("encodeFragmentIdentifier");function P(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,n){return n.encode?n.strict?X(e):encodeURIComponent(e):e}function p(e,n){return n.decode?function k(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function H(e){const n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"};let r=Z.exec(e);for(;r;){try{n[r[0]]=decodeURIComponent(r[0])}catch{const i=B(r[0]);i!==r[0]&&(n[r[0]]=i)}r=Z.exec(e)}n["%C2"]="\ufffd";const t=Object.keys(n);for(const i of t)e=e.replace(new RegExp(i,"g"),n[i]);return e}(e)}}(e):e}function S(e){return Array.isArray(e)?e.sort():"object"==typeof e?S(Object.keys(e)).sort((n,r)=>Number(n)-Number(r)).map(n=>e[n]):e}function $(e){const n=e.indexOf("#");return-1!==n&&(e=e.slice(0,n)),e}function b(e,n){return n.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):n.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function T(e){const n=(e=$(e)).indexOf("?");return-1===n?"":e.slice(n+1)}function A(e,n){P((n={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...n}).arrayFormatSeparator);const r=function ee(e){let n;switch(e.arrayFormat){case"index":return(r,t,i)=>{n=/\[(\d*)]$/.exec(r),r=r.replace(/\[\d*]$/,""),n?(void 0===i[r]&&(i[r]={}),i[r][n[1]]=t):i[r]=t};case"bracket":return(r,t,i)=>{n=/(\[])$/.exec(r),i[r=r.replace(/\[]$/,"")]=n?void 0!==i[r]?[...i[r],t]:[t]:t};case"colon-list-separator":return(r,t,i)=>{n=/(:list)$/.exec(r),i[r=r.replace(/:list$/,"")]=n?void 0!==i[r]?[...i[r],t]:[t]:t};case"comma":case"separator":return(r,t,i)=>{const s="string"==typeof t&&t.includes(e.arrayFormatSeparator),o="string"==typeof t&&!s&&p(t,e).includes(e.arrayFormatSeparator);t=o?p(t,e):t;const f=s||o?t.split(e.arrayFormatSeparator).map(me=>p(me,e)):null===t?t:p(t,e);i[r]=f};case"bracket-separator":return(r,t,i)=>{const s=/(\[])$/.test(r);if(r=r.replace(/\[]$/,""),!s)return void(i[r]=t&&p(t,e));const o=null===t?[]:t.split(e.arrayFormatSeparator).map(f=>p(f,e));i[r]=void 0!==i[r]?[...i[r],...o]:o};default:return(r,t,i)=>{i[r]=void 0!==i[r]?[...[i[r]].flat(),t]:t}}}(n),t=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return t;for(const i of e.split("&")){if(""===i)continue;const s=n.decode?i.replace(/\+/g," "):i;let[o,f]=I(s,"=");void 0===o&&(o=s),f=void 0===f?null:["comma","separator","bracket-separator"].includes(n.arrayFormat)?f:p(f,n),r(p(o,n),f,t)}for(const[i,s]of Object.entries(t))if("object"==typeof s&&null!==s)for(const[o,f]of Object.entries(s))s[o]=b(f,n);else t[i]=b(s,n);return!1===n.sort?t:(!0===n.sort?Object.keys(t).sort():Object.keys(t).sort(n.sort)).reduce((i,s)=>{const o=t[s];return i[s]=o&&"object"==typeof o&&!Array.isArray(o)?S(o):o,i},Object.create(null))}function j(e,n){if(!e)return"";P((n={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...n}).arrayFormatSeparator);const r=o=>n.skipNull&&W(e[o])||n.skipEmptyString&&""===e[o],t=function G(e){switch(e.arrayFormat){case"index":return n=>(r,t)=>{const i=r.length;return void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?r:null===t?[...r,[l(n,e),"[",i,"]"].join("")]:[...r,[l(n,e),"[",l(i,e),"]=",l(t,e)].join("")]};case"bracket":return n=>(r,t)=>void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?r:null===t?[...r,[l(n,e),"[]"].join("")]:[...r,[l(n,e),"[]=",l(t,e)].join("")];case"colon-list-separator":return n=>(r,t)=>void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?r:null===t?[...r,[l(n,e),":list="].join("")]:[...r,[l(n,e),":list=",l(t,e)].join("")];case"comma":case"separator":case"bracket-separator":{const n="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(t,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?t:(i=null===i?"":i,0===t.length?[[l(r,e),n,l(i,e)].join("")]:[[t,l(i,e)].join(e.arrayFormatSeparator)])}default:return n=>(r,t)=>void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?r:null===t?[...r,l(n,e)]:[...r,[l(n,e),"=",l(t,e)].join("")]}}(n),i={};for(const[o,f]of Object.entries(e))r(o)||(i[o]=f);const s=Object.keys(i);return!1!==n.sort&&s.sort(n.sort),s.map(o=>{const f=e[o];return void 0===f?"":null===f?l(o,n):Array.isArray(f)?0===f.length&&"bracket-separator"===n.arrayFormat?l(o,n)+"[]":f.reduce(t(o),[]).join("&"):l(o,n)+"="+l(f,n)}).filter(o=>o.length>0).join("&")}function N(e,n){n={decode:!0,...n};let[r,t]=I(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:A(T(e),n),...n&&n.parseFragmentIdentifier&&t?{fragmentIdentifier:p(t,n)}:{}}}function w(e,n){n={encode:!0,strict:!0,[U]:!0,...n};const r=$(e.url).split("?")[0]||"";let s=j({...A(T(e.url),{sort:!1}),...e.query},n);s&&(s=`?${s}`);let o=function re(e){let n="";const r=e.indexOf("#");return-1!==r&&(n=e.slice(r)),n}(e.url);if(e.fragmentIdentifier){const f=new URL(r);f.hash=e.fragmentIdentifier,o=n[U]?f.hash:`#${e.fragmentIdentifier}`}return`${r}${s}${o}`}function D(e,n,r){r={parseFragmentIdentifier:!0,[U]:!1,...r};const{url:t,query:i,fragmentIdentifier:s}=N(e,r);return w({url:t,query:O(i,n),fragmentIdentifier:s},r)}function te(e,n,r){return D(e,Array.isArray(n)?i=>!n.includes(i):(i,s)=>!n(i,s),r)}const q=h;var ne=u(6470),J=u(8309);let ae=(()=>{var e;class n{constructor(t){this.store=t}addToFavorite(t){this.store.dispatch(J.j.addToFavorite({slug:t}))}unfavorite(t){this.store.dispatch(J.j.unfavorite({slug:t}))}}return(e=n).\u0275fac=function(t){return new(t||e)(a.LFG(m.yh))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),n})();const ie=["*"];let se=(()=>{var e;class n{constructor(t){this.favoriteFacade=t,this.favorited=!1,this.favoritesCount=0,this.slug=""}favoriteUnfavoriteToggle(){this.favorited=!this.favorited,this.favorited?(this.favoritesCount=this.favoritesCount+1,this.favoriteFacade.addToFavorite(this.slug)):(this.favoritesCount=this.favoritesCount-1,this.favoriteFacade.unfavorite(this.slug))}}return(e=n).\u0275fac=function(t){return new(t||e)(a.Y36(ae))},e.\u0275cmp=a.Xpm({type:e,selectors:[["mc-favorite"]],inputs:{favorited:"favorited",favoritesCount:"favoritesCount",slug:"slug"},standalone:!0,features:[a.jDz],ngContentSelectors:ie,decls:4,vars:1,consts:[[1,"btn","btn-outline-primary","btn-sm","pull-xs-right",3,"click"],[1,"ion-heart"]],template:function(t,i){1&t&&(a.F$t(),a.TgZ(0,"button",0),a.NdJ("click",function(){return i.favoriteUnfavoriteToggle()}),a._UZ(1,"i",1),a.Hsn(2),a._uU(3),a.qZA()),2&t&&(a.xp6(3),a.hij(" ",i.favoritesCount,"\n"))},dependencies:[c.ez]}),n})();function oe(e,n){1&e&&a._UZ(0,"mc-loader")}function ce(e,n){if(1&e&&a._UZ(0,"mc-error-messages",2),2&e){const r=a.oxw().ngIf;a.Q6J("errors",r.error)}}const Q=function(e){return["/profiles",e]},fe=function(e){return["/article",e]};function ue(e,n){if(1&e&&(a.TgZ(0,"div",5)(1,"div",6)(2,"a",7),a._UZ(3,"img",8),a.qZA(),a.TgZ(4,"div",9)(5,"a",10),a._uU(6),a.qZA(),a.TgZ(7,"span",11),a._uU(8),a.qZA()(),a.TgZ(9,"mc-favorite",12)(10,"span"),a._uU(11,"Test"),a.qZA()()(),a.TgZ(12,"a",13)(13,"h1"),a._uU(14),a.qZA(),a.TgZ(15,"p"),a._uU(16),a.qZA(),a.TgZ(17,"span"),a._uU(18,"Read more..."),a.qZA(),a._UZ(19,"mc-feed-tag-list",14),a.qZA()()),2&e){const r=n.$implicit;a.xp6(2),a.Q6J("routerLink",a.VKq(12,Q,r.author.username)),a.xp6(1),a.Q6J("src",r.author.image,a.LSH),a.xp6(2),a.Q6J("routerLink",a.VKq(14,Q,r.author.username)),a.xp6(1),a.Oqu(r.author.username),a.xp6(2),a.Oqu(r.createdAt),a.xp6(1),a.Q6J("favoritesCount",r.favoritesCount)("favorited",r.favorited)("slug",r.slug),a.xp6(3),a.Q6J("routerLink",a.VKq(16,fe,r.slug)),a.xp6(2),a.Oqu(r.title),a.xp6(2),a.Oqu(r.description),a.xp6(3),a.Q6J("tagList",r.tagList)}}function le(e,n){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,ue,20,18,"div",3),a._UZ(2,"mc-pagination",4),a.qZA()),2&e){const r=a.oxw().ngIf,t=a.oxw();a.xp6(1),a.Q6J("ngForOf",r.feed.articles),a.xp6(1),a.Q6J("url",t.baseUrl)("currentPage",t.currentPage)("total",r.feed.articlesCount)("limit",t.limit)}}function de(e,n){if(1&e&&(a.ynx(0),a.YNc(1,oe,1,0,"mc-loader",0),a.YNc(2,ce,1,1,"mc-error-messages",1),a.YNc(3,le,3,5,"div",0),a.BQk()),2&e){const r=n.ngIf;a.xp6(1),a.Q6J("ngIf",r.isLoading),a.xp6(1),a.Q6J("ngIf",r.error),a.xp6(1),a.Q6J("ngIf",r.feed)}}let ge=(()=>{var e;class n{constructor(t,i,s){this.feedFacade=t,this.router=i,this.route=s,this.apiUrl="",this.baseUrl=this.router.url.split("?")[0],this.limit=20,this.currentPage=0,this.data$=(0,F.a)({isLoading:this.feedFacade.isLoading$,feed:this.feedFacade.loadFeed$,error:this.feedFacade.isError$})}ngOnInit(){this.route.queryParams.subscribe(t=>{this.currentPage=Number(t.page||"1"),this.fetchFeed()})}ngOnChanges(t){const i=t.apiUrl;i.currentValue!=i.previousValue&&this.fetchFeed()}fetchFeed(){const t=this.currentPage*this.limit-this.limit,i=q.parseUrl(this.apiUrl),s=q.stringify({limit:this.limit,offset:t,...i.query});this.feedFacade.getFeed(`${i.url}?${s}`)}}return(e=n).\u0275fac=function(t){return new(t||e)(a.Y36(d),a.Y36(y.F0),a.Y36(y.gz))},e.\u0275cmp=a.Xpm({type:e,selectors:[["mc-feed"]],inputs:{apiUrl:"apiUrl"},standalone:!0,features:[a._Bn([d]),a.TTD,a.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"errors",4,"ngIf"],[3,"errors"],["class","article-preview",4,"ngFor","ngForOf"],[3,"url","currentPage","total","limit"],[1,"article-preview"],[1,"article-meta"],[3,"routerLink"],["alt","image",3,"src"],[1,"info"],[1,"author",3,"routerLink"],[1,"date"],[3,"favoritesCount","favorited","slug"],[1,"preview-link",3,"routerLink"],[3,"tagList"]],template:function(t,i){1&t&&(a.YNc(0,de,4,3,"ng-container",0),a.ALo(1,"async")),2&t&&a.Q6J("ngIf",a.lcZ(1,1,i.data$))},dependencies:[c.ez,c.sg,c.O5,c.Ov,y.rH,M.O,R.R,V,ne.c,se]}),n})()}}]);