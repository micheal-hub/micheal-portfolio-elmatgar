import{o as d,c as m,t as g,r as u,a as e,F as y,b,n as $,d as x,e as i,w as p,f as S,g as P,h as E,m as L,i as C,j as R,k as U,l as q,p as H,q as B,s as z,u as W,v as K,x as Y,y as G,z as J}from"./vendor-xKBDJvMW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))h(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&h(l)}).observe(document,{childList:!0,subtree:!0});function c(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(a){if(a.ep)return;a.ep=!0;const n=c(a);fetch(a.href,n)}})();const f=(s,t)=>{const c=s.__vccOpts||s;for(const[h,a]of t)c[h]=a;return c},Q={emits:["danger"],props:["btnName"]};function Z(s,t,c,h,a,n){return d(),m("button",{class:"button-danger",role:"button",onClick:t[0]||(t[0]=l=>s.$emit("danger"))},g(c.btnName),1)}const ee=f(Q,[["render",Z],["__scopeId","data-v-f852ab92"]]),te={direction:"",confirm:"Confirm",cancel:"Cancel",search:"Search...",social:"Social Media",contact:"Contact Us",home:"Home",about:"About Us",title:"section",description:"here i will show how the text will appear for the site users here i will show how the text will appear for the site users here i will show how the text will appear for the site users here i will show how the text will appear for the site users ",signup:"Sign Up",login:"Login",username:"Username",email:"Email",password:"Password",or:"Or With",electronic:"Electronic",food:"Food",clothes:"Clothes"},ne={direction:"right-to-left",confirm:"تأكيد",cancel:"إلغاء",search:"بحث...",social:"وسائل التواصل",contact:"اتصل بنا",home:"الرئيسية",about:"من نحن",title:"القسم",description:"هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع هنا سأعرض كيف سيظهر النص لمستخدمي الموقع",signup:"تسجيل",login:"تسجيل دخول",username:"اسم المستخدم",email:"البريد الالكتروني",password:"كلمة المرور",or:"او من خلال",electronic:"الكتروني",food:"طعام",clothes:"ملابس"},_={en:te,ar:ne},se={emits:["confirm"],inject:["emitter"],components:{DangerButton:ee},data(){return{isVisible:!1,language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),callLinks:[{name:"phone",icon:"fa-solid fa-mobile",link:"tel:+79965406181",number:"+7 (996) 540-61-81"},{name:"massenger",icon:"fa-brands fa-facebook-messenger",link:"https://www.messenger.com/t/7995323490533435/"},{name:"instagram",icon:"fa-brands fa-square-instagram",link:"https://www.instagram.com/direct/t/17843074268340093/"},{name:"vkontakte",icon:"fa-brands fa-vk",link:"https://vk.com/im?sel=601321750"},{name:"email",icon:"fa-solid fa-m",link:"mailto:7kk7elmk13@gmail.com"},{name:"whatsapp",icon:"fa-brands fa-square-whatsapp",link:"http://api.whatsapp.com/send?phone=79965906181"},{name:"viber",icon:"fa-brands fa-viber",link:"viber://chat?number=+79965906181"},{name:"telegram",icon:"fa-brands fa-telegram",link:"https://telegram.im/@hakk7elmk13"}],socialLinks:[{name:"github",icon:"fa-brands fa-github",link:"https://github.com/hakk7elmk13"},{name:"facebook",icon:"fa-brands fa-square-facebook",link:"https://t.me/hakk7elmk13"},{name:"instgram",icon:"fa-brands fa-square-instagram",link:"https://t.me/hakk7elmk13"},{name:"vkontakte",icon:"fa-brands fa-vk",link:"https://vk.com/im?sel=601321750"},{name:"x-twitter",icon:"fa-brands fa-x-twitter",link:"https://t.me/hakk7elmk13"},{name:"thread",icon:"fa-brands fa-threads",link:"https://t.me/hakk7elmk13"},{name:"TikTok",icon:"fa-brands fa-tiktok",link:"https://t.me/hakk7elmk13"},{name:"youtube",icon:"fa-brands fa-youtube",link:"https://t.me/hakk7elmk13"}]}},computed:{translate(){return _[this.language]}},methods:{open(){this.isVisible=!0},onCancel(){this.isVisible=!1}},mounted(){this.emitter.on("setLanguage",s=>{this.language=s})}},ae={key:0,class:"alert wow fadeIn"},oe={class:"alert-header"},le={class:"social-container"},ie={class:"title"},re={class:"social"},ce=["href"],ue={class:"every-social"},de={class:"call-container"},me={class:"title"},ge={class:"call"},he=["href"],pe={class:"every-call"},fe={key:0},_e={class:"alert-footer"};function ve(s,t,c,h,a,n){const l=u("danger-button");return a.isVisible?(d(),m("div",ae,[e("div",oe,[e("div",le,[e("div",ie,g(n.translate.social),1),e("div",re,[(d(!0),m(y,null,b(a.socialLinks,r=>(d(),m("span",{key:r.name},[e("a",{href:r.link},[e("div",ue,[e("i",{class:$(r.icon)},null,2),e("span",null,g(r.name),1)])],8,ce)]))),128))])]),e("div",de,[e("div",me,g(n.translate.contact),1),e("div",ge,[(d(!0),m(y,null,b(a.callLinks,r=>(d(),m("span",{key:r.name},[e("a",{href:r.link},[e("div",pe,[e("i",{class:$(r.icon)},null,2),e("span",null,g(r.name),1),r.number?(d(),m("span",fe,g(r.number),1)):x("",!0)])],8,he)]))),128))])])]),e("div",_e,[i(l,{btnName:n.translate.cancel,onDanger:n.onCancel},null,8,["btnName","onDanger"])])])):x("",!0)}const ke=f(se,[["render",ve],["__scopeId","data-v-3df8e81a"]]),ye={data(){return{languages:{en:"English",ar:"العربية"},language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),currentLanguage:localStorage.getItem("currentLanguageName")==null?"English":localStorage.getItem("currentLanguageName"),languageIconStat:!1,languageMenuStat:"close",theme:localStorage.getItem("theme")==null?"light":localStorage.getItem("theme"),dropMenu:""}},inject:["emitter"],components:{SocialComponent:ke},computed:{translate(){return _[this.language]}},methods:{setLanguage(s,t){localStorage.setItem("language",t),this.language=localStorage.getItem("language"),localStorage.setItem("currentLanguageName",s),this.currentLanguage=localStorage.getItem("currentLanguageName"),this.emitter.emit("setLanguage",t)},setTheme(){localStorage.setItem("theme",this.theme==="dark"?"light":"dark"),this.theme=localStorage.getItem("theme"),this.theme==="dark"?(this.$refs.theme_dark.style.opacity=0,this.$refs.theme_light.style.opacity=1):(this.$refs.theme_light.style.opacity=0,this.$refs.theme_dark.style.opacity=1),this.emitter.emit("setTheme",this.theme)},toggleMenu(){this.dropMenu=this.dropMenu===""?"dropMenu":"",this.dropMenu==="dropMenu"?(this.$refs.menu_open.style.display="none",this.$refs.menu_close.style.display="block"):(this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="block")},closeMenuAfterClickLink(){this.dropMenu="",window.innerWidth<=992&&(this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="block")},OpenCloseLang(){this.languageIconStat=!this.languageIconStat,this.languageMenuStat=this.languageIconStat===!0?"open":"close"},openCancelSocialCall(){this.$refs.callSocialSection.isVisible?this.$refs.callSocialSection.onCancel():this.$refs.callSocialSection.open()}},mounted(){this.theme==="dark"?(this.$refs.theme_dark.style.opacity=0,this.$refs.theme_light.style.opacity=1):(this.$refs.theme_light.style.opacity=0,this.$refs.theme_dark.style.opacity=1),(window.onresize=()=>{window.innerWidth>=992?(this.dropMenu="",this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="none"):this.dropMenu==="dropMenu"?this.$refs.menu_open.style.display="none":this.$refs.menu_open.style.display="block"})(),window.innerWidth>=992?(this.dropMenu="",this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="none"):(this.dropMenu="",this.$refs.menu_close.style.display="none",this.$refs.menu_open.style.display="block")}},be={class:"setting-menu-container"},we={class:"search"},$e={class:"search-container"},Se=["placeholder"],Ce={class:"language-container"},Ie={class:"current-language"},Le={class:"language-name"},Me={class:"language-drop-icon"},xe=["onClick"],Fe={class:"theme-toggle"},Ae={class:"mdi mdi-weather-night",ref:"theme_dark"},De={class:"fa-regular fa-sun",ref:"theme_light"},Ne={class:"SocialCallContainer"},Xe={class:"menu"},je={class:"toggle_menu"};function Te(s,t,c,h,a,n){const l=u("router-link"),r=u("SocialComponent");return d(),m("header",null,[t[7]||(t[7]=e("div",{class:"logo"},[e("img",{src:"./assets/logo.jpg",alt:"website-logo"})],-1)),e("nav",{class:$(`${a.dropMenu}`)},[e("ul",null,[e("li",null,[i(l,{to:"/micheal-portfolio-elmatgar/",onClick:n.closeMenuAfterClickLink},{default:p(()=>[S(g(n.translate.home),1)]),_:1},8,["onClick"])]),e("li",null,[e("span",null,g(n.translate.about),1)])])],2),e("div",be,[e("div",{class:$(`setting ${a.dropMenu}`)},[e("div",we,[e("div",$e,[e("input",{type:"text",class:"search-input",placeholder:n.translate.search},null,8,Se),t[5]||(t[5]=e("button",{class:"search-button"},[e("i",{class:"fa-solid fa-magnifying-glass"})],-1))])]),e("div",{class:"language",onClick:t[0]||(t[0]=(...o)=>n.OpenCloseLang&&n.OpenCloseLang(...o))},[e("div",Ce,[e("div",Ie,[e("span",Le,g(a.currentLanguage),1),e("span",Me,g(a.languageIconStat?"▲":"▼"),1)]),e("div",{class:$(`all-languages ${a.languageMenuStat}`)},[(d(!0),m(y,null,b(a.languages,(o,v)=>(d(),m("div",{class:"every-language",key:v,onClick:M=>n.setLanguage(o,v)},g(o),9,xe))),128))],2)])]),e("div",Fe,[e("span",{class:"theme-icon",onClick:t[1]||(t[1]=o=>n.setTheme())},[e("i",Ae,null,512),e("i",De,null,512)])]),e("div",Ne,[e("span",{onClick:t[2]||(t[2]=(...o)=>n.openCancelSocialCall&&n.openCancelSocialCall(...o))},t[6]||(t[6]=[e("i",{class:"fa-solid fa-phone"},null,-1)]))])],2),e("div",Xe,[e("div",je,[e("span",null,[e("i",{class:"fa-solid fa-bars",ref:"menu_open",onClick:t[3]||(t[3]=(...o)=>n.toggleMenu&&n.toggleMenu(...o))},null,512),e("i",{class:"fa-solid fa-xmark",ref:"menu_close",onClick:t[4]||(t[4]=(...o)=>n.toggleMenu&&n.toggleMenu(...o))},null,512)])])])]),i(r,{ref:"callSocialSection"},null,512)])}const Ve=f(ye,[["render",Te],["__scopeId","data-v-9e48b467"]]),Oe={};function Pe(s,t,c,h,a,n){return d(),m("main",null,[e("section",null,[P(s.$slots,"default",{},void 0)])])}const Ee=f(Oe,[["render",Pe],["__scopeId","data-v-ca8b81e8"]]),Re={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),thisYear:new Date().getFullYear()}},inject:["emitter"],computed:{translate(){return _[this.language]}},mounted(){this.emitter.on("setLanguage",s=>{this.language=s})}},Ue={class:"bottom"};function qe(s,t,c,h,a,n){return d(),m("footer",null,[t[2]||(t[2]=e("div",{class:"top"},[e("div",{class:"content"},"con"),e("div",{class:"links"},"link")],-1)),e("div",Ue,[e("span",null,[t[0]||(t[0]=S(" All rights reserved ")),t[1]||(t[1]=e("i",{class:"bx bx-copyright"},null,-1)),S(" "+g(a.thisYear)+" Micheal-Portfolio ",1)])])])}const He=f(Re,[["render",qe],["__scopeId","data-v-97b0defd"]]),Be={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),theme:localStorage.getItem("theme")==null?"light":localStorage.getItem("theme")}},computed:{direction(){return _[this.language].direction}},inject:["emitter"],components:{HeaderComponent:Ve,BodyComponent:Ee,FooterComponent:He},mounted(){this.emitter.on("setTheme",s=>{this.theme=s}),this.emitter.on("setLanguage",s=>{this.language=s})}};function ze(s,t,c,h,a,n){const l=u("HeaderComponent"),r=u("RouterView"),o=u("body-component"),v=u("FooterComponent");return d(),m("div",{class:$(`${a.theme} ${n.direction}`)},[i(l),i(o,null,{default:p(()=>[i(r)]),_:1}),i(v)],2)}const We=f(Be,[["render",ze]]),Ke={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return _[this.language]}},methods:{},components:{},mounted(){this.emitter.on("setLanguage",s=>{this.language=s})}},Ye={class:"section-container"},Ge={class:"content wow fadeInUp"},Je={class:"form-group"},Qe={class:"title"},Ze={class:"username"},et=["placeholder"],tt={class:"email"},nt=["placeholder"],st={class:"password"},at=["placeholder"],ot={class:"submit"},lt=["value"],it={class:"or"},rt={class:"social"};function ct(s,t,c,h,a,n){const l=u("v-tooltip");return d(),m("article",null,[e("div",Ye,[t[1]||(t[1]=e("div",{class:"image wow fadeInDown"},[e("img",{src:"./assets/shop.png",alt:"image"})],-1)),e("div",Ge,[e("form",{action:"",onSubmit:t[0]||(t[0]=E(()=>{},["prevent"]))},[e("div",Je,[e("div",Qe,g(n.translate.signup),1),e("div",Ze,[e("input",{type:"text",placeholder:`${n.translate.username}...`},null,8,et)]),e("div",tt,[e("input",{type:"text",placeholder:`${n.translate.email}...`},null,8,nt)]),e("div",st,[e("input",{type:"password",placeholder:`${n.translate.password}...`},null,8,at)]),e("div",ot,[e("input",{type:"submit",value:n.translate.login},null,8,lt)]),e("div",it,g(n.translate.or),1),e("div",rt,[i(l,{text:"Google"},{activator:p(({props:r})=>[e("span",null,[e("i",L({class:"fa-brands fa-google"},r),null,16)])]),_:1}),i(l,{text:"Facebook"},{activator:p(({props:r})=>[e("span",null,[e("i",L({class:"fa-brands fa-facebook"},r),null,16)])]),_:1}),i(l,{text:"X-twitter"},{activator:p(({props:r})=>[e("span",null,[e("i",L({class:"fa-brands fa-square-x-twitter"},r),null,16)])]),_:1})])])],32)])])])}const ut=f(Ke,[["render",ct],["__scopeId","data-v-852940fa"]]),dt={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),isDragging:!1,startX:0,scrollLeft:0,velocity:0,animationFrameId:null,lastX:0}},inject:["emitter"],computed:{translate(){return _[this.language]}},methods:{hundleMouseDown(s){this.isDragging=!0,this.startX=s.pageX-this.$refs.container.offsetLeft,this.scrollLeft=this.$refs.container.scrollLeft,this.velocity=0,this.lastX=s.pageX,cancelAnimationFrame(this.animationFrameId)},hundleLeft(){this.$refs.container.scrollLeft+=100},hundleRight(){this.$refs.container.scrollLeft-=100},hundleMouseLeaveUp(){this.isDragging&&(this.isDragging=!1,this.momentumScroll())},hundleMouseMove(s){if(!this.isDragging)return;s.preventDefault();const c=s.pageX-this.$refs.container.offsetLeft-this.startX;this.$refs.container.scrollLeft=this.scrollLeft-c,this.velocity=s.pageX-this.lastX,this.lastX=s.pageX},momentumScroll(){Math.abs(this.velocity)<.1||(this.$refs.container.scrollLeft-=this.velocity,this.velocity*=.95,this.animationFrameId=requestAnimationFrame(this.momentumScroll))}},components:{},mounted(){this.emitter.on("setLanguage",s=>{this.language=s})}},mt={class:"section-container"},gt={class:"slider"},ht={class:"sections"},pt={class:"left"},ft={class:"title"};function _t(s,t,c,h,a,n){const l=u("v-carousel-item"),r=u("v-carousel");return d(),m("article",null,[e("div",mt,[e("div",gt,[i(r,{"show-arrows":"hover",width:"100%","min-height":"70vh"},{default:p(()=>[i(l,{src:"https://img.freepik.com/free-photo/discount-sneakers-podium_23-2150165480.jpg",cover:""}),i(l,{src:"https://img.freepik.com/free-psd/black-friday-super-sale-social-media-banner-template_106176-1471.jpg",cover:""}),i(l,{src:"https://img.freepik.com/free-psd/black-friday-mega-sale-social-media-banner-template_120329-1084.jpg",cover:""})]),_:1})]),e("div",ht,[e("div",pt,[e("div",{onClick:t[0]||(t[0]=(...o)=>n.hundleRight&&n.hundleRight(...o))},t[6]||(t[6]=[e("i",{class:"fa-solid fa-chevron-left"},null,-1)]))]),e("div",{class:"main",ref:"container",onMousedown:t[1]||(t[1]=(...o)=>n.hundleMouseDown&&n.hundleMouseDown(...o)),onMouseleave:t[2]||(t[2]=(...o)=>n.hundleMouseLeaveUp&&n.hundleMouseLeaveUp(...o)),onMouseup:t[3]||(t[3]=(...o)=>n.hundleMouseLeaveUp&&n.hundleMouseLeaveUp(...o)),onMousemove:t[4]||(t[4]=(...o)=>n.hundleMouseMove&&n.hundleMouseMove(...o))},[(d(),m(y,null,b(20,o=>e("div",{key:o,class:"every-section"},[t[7]||(t[7]=e("div",{class:"img"},[e("img",{src:"https://www.hqts.com/wp-content/uploads/2023/07/Blog-Image-1-1.png",alt:""})],-1)),e("div",ft,g(n.translate.title)+" "+g(o),1)])),64))],544),e("div",{class:"right",onClick:t[5]||(t[5]=(...o)=>n.hundleLeft&&n.hundleLeft(...o))},t[8]||(t[8]=[e("div",null,[e("i",{class:"fa-solid fa-chevron-right"})],-1)]))])])])}const vt=f(dt,[["render",_t],["__scopeId","data-v-9dea1045"]]),kt={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),tab:null}},inject:["emitter"],computed:{translate(){return _[this.language]}},methods:{},components:{},mounted(){this.emitter.on("setLanguage",s=>{this.language=s})}},yt={class:"section-container"};function bt(s,t,c,h,a,n){const l=u("v-tab"),r=u("v-tabs"),o=u("v-img"),v=u("v-col"),M=u("v-row"),j=u("v-container"),T=u("v-tabs-window-item"),V=u("v-tabs-window"),O=u("v-card");return d(),m("article",null,[e("div",yt,[i(O,{style:{width:"100%",overflow:"auto","box-shadow":"3px 10px 17px -2px"},class:"wow fadeInRight"},{default:p(()=>[i(r,{modelValue:a.tab,"onUpdate:modelValue":t[0]||(t[0]=k=>a.tab=k),"align-tabs":"center",color:"var(--c-secondary-section)"},{default:p(()=>[i(l,{value:1},{default:p(()=>[S(g(n.translate.electronic),1)]),_:1}),i(l,{value:2},{default:p(()=>[S(g(n.translate.food),1)]),_:1}),i(l,{value:3},{default:p(()=>[S(g(n.translate.clothes),1)]),_:1})]),_:1},8,["modelValue"]),i(V,{modelValue:a.tab,"onUpdate:modelValue":t[1]||(t[1]=k=>a.tab=k)},{default:p(()=>[(d(),m(y,null,b(3,k=>i(T,{key:k,value:k},{default:p(()=>[i(j,{fluid:""},{default:p(()=>[i(M,null,{default:p(()=>[(d(),m(y,null,b(6,I=>i(v,{key:I,cols:"12",md:"4"},{default:p(()=>[i(o,{"lazy-src":`https://picsum.photos/10/6?image=${I*k*5+10}`,src:`https://picsum.photos/500/300?image=${I*k*5+10}`,height:"205",cover:""},null,8,["lazy-src","src"])]),_:2},1024)),64))]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})])])}const wt=f(kt,[["render",bt],["__scopeId","data-v-6eadb1f4"]]),F=localStorage.getItem("token");F&&(C.defaults.headers.common.Authorization=F);const A=localStorage.getItem("xsrf-token");A&&(C.defaults.headers.common["X-XSRF-TOKEN"]=A);const D=localStorage.getItem("lang");D&&(C.defaults.headers.common["Accept-Language"]=D);C.defaults.withCredentials=!0;C.defaults.withXSRFToken=!0;C.create({baseURL:"https://dummyjson.com/",timeout:1e4,headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.csrf_token,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",Accept:"application/json"},withCredentials:!0,withXSRFToken:!0});const N=R("productStore",{state:()=>({data:null}),getters:{},actions:{async fetchData(){try{const s=await fetch("https://dummyjson.com/products").then(t=>t.json());this.data=s.products}catch(s){console.error("Error fetching data:",s)}}}}),$t={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language"),products:[]}},inject:["emitter"],computed:{translate(){return _[this.language]},...U(N,["data"])},methods:{...q(N,["fetchData"])},components:{},async beforeMount(){await this.fetchData(),this.products=this.data,console.log(this.products)},mounted(){this.emitter.on("setLanguage",s=>{this.language=s})}},St={class:"section-container"},Ct=["src"];function It(s,t,c,h,a,n){return d(),m("article",null,[e("div",St,[(d(!0),m(y,null,b(a.products,l=>(d(),m("div",{class:"card wow fadeInLeft",key:l.id},[e("img",{src:l.images,width:"200px",alt:"product.name"},null,8,Ct),e("h1",null,g(l.title),1),e("p",null,g(l.price),1),t[0]||(t[0]=e("div",null,[e("span",null,[e("i",{class:"fa-solid fa-cart-plus"})]),e("span",null,[e("i",{class:"fa-regular fa-heart"})]),e("span",null,[e("i",{class:"fa-solid fa-share-from-square"})])],-1))]))),128))])])}const Lt=f($t,[["render",It],["__scopeId","data-v-edeb958c"]]),Mt={data(){return{language:localStorage.getItem("language")==null?"en":localStorage.getItem("language")}},inject:["emitter"],computed:{translate(){return _[this.language]}},methods:{},components:{LandingComponent:ut,ShowComponent:vt,NavigationComponent:wt,ProductComponent:Lt},mounted(){this.emitter.on("setLanguage",s=>{this.language=s})}},xt={class:"view-container"};function Ft(s,t,c,h,a,n){const l=u("LandingComponent"),r=u("ShowComponent"),o=u("NavigationComponent"),v=u("ProductComponent");return d(),m("div",xt,[i(l),i(r),i(o),i(v)])}const At=f(Mt,[["render",Ft],["__scopeId","data-v-edf5ce30"]]),Dt=[{path:"/micheal-portfolio-elmatgar/",name:"home",component:At,meta:{title:"Home"}}],X=H({history:B("/"),routes:Dt});X.beforeEach((s,t,c)=>{document.title=s.meta.title,c()});const Nt=z({components:W,directives:K,theme:{defaultTheme:"light",themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},dark:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),Xt=J(),w=Y(We);w.use(G());w.provide("emitter",Xt);w.use(Nt);w.use(X);w.directive("truncate",{beforeMount(s,t){const c=t.value||100,h=s.textContent;h.length>c&&(s.textContent=h.slice(0,c)+"...")}});w.config.globalProperties.$truncate=function(s,t){return s?s.length<=t?s:s.slice(0,t)+"...":""};w.mount("#app");
