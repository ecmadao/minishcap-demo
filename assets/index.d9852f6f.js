var E=Object.defineProperty,N=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,d=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&S(e,s,t[s]);if($)for(var s of $(t))R.call(t,s)&&S(e,s,t[s]);return e},f=(e,t)=>N(e,w(t));import{d as i,o as u,c as _,a,r as U,b as T,e as c,w as p,f as v,g as O,h as A,v as x,i as C,j as H,k as D,n as B,p as j,l as K,m as L,t as g,T as F,q as G,s as b,u as P,x as Y,y as M,F as V}from"./vendor.e93127e8.js";const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}};q();var h=(e,t)=>{for(const[s,o]of t)e[s]=o;return e};const z=i({name:"Button"}),J={class:"relative flex justify-center items-center cursor-pointer"},Q={class:"border-4 border-gray-500 bg-white custom-button"},W=a("div",{class:"w-full h-full button-shadow"},null,-1);function X(e,t,s,o,r,n){return u(),_("div",J,[a("button",Q,[U(e.$slots,"default")]),W])}var y=h(z,[["render",X]]);const Z={class:"absolute w-full top-0 left-0 flex justify-between"},ee=a("p",{class:"text-6xl"},"minishcap",-1),te={href:"https://github.com/ecmadao/minishcap-service",class:"text-xl inline-flex p-2 justify-center items-center"},se=v(" \xA0 GitHub ");function oe(e){return(t,s)=>{const o=T("font-awesome-icon");return u(),_("div",Z,[ee,a("div",null,[c(y,null,{default:p(()=>[a("a",te,[c(o,{icon:["fab","github"]}),se])]),_:1})])])}}const re=i({name:"Header"}),ne=i(f(d({},re),{setup:oe})),ae={}.VITE_API,ie=async e=>O.post(`${ae}/urls`,{urls:[e]}).then(t=>t.data),l={SET_SHORT_LINK:"setShortLink",SET_URL:"setUrl",SET_LOADING:"setLoading"},k={SHORTEN:"shorten"},ce=A({state:{url:"",loading:!1},actions:{async[k.SHORTEN]({state:e,commit:t}){var s;if(!e.loading&&!!x.isURL(e.url)){t(l.SET_LOADING,!0);try{const o=await ie({url:e.url,ttlInSeconds:Number("-1")});t(l.SET_SHORT_LINK,(s=o.result)==null?void 0:s.pop()),t(l.SET_URL,"")}catch(o){console.error(o)}finally{t(l.SET_LOADING,!1)}}}},mutations:{[l.SET_SHORT_LINK](e,t){e.shortUrl=t},[l.SET_URL](e,t){e.url=t},[l.SET_LOADING](e,t){e.loading=t}},getters:{shortLink:e=>{var t;return(t=e.shortUrl)==null?void 0:t.short}}});const le=e=>(j("data-v-f7dd784e"),e=e(),K(),e),ue={class:"flex"},_e=le(()=>a("div",{class:"p-4 text-6xl"}," Shorten it ",-1));function de(e){return(t,s)=>(u(),_("div",ue,[a("div",{class:B([{error:t.error},"border-b-4 border-gray-400 py-2 mr-8 text-6xl"])},[C(a("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.url=o),class:"input appearance-none bg-transparent border-none placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none",type:"url",placeholder:"Put your link here",onKeyup:s[1]||(s[1]=D((...o)=>t.convertToShortURL&&t.convertToShortURL(...o),["enter"]))},null,544),[[H,t.url]])],2),c(y,{onClick:t.convertToShortURL},{default:p(()=>[_e]),_:1},8,["onClick"])]))}const fe=i({name:"Form",data(){return{error:!1}},computed:{url:{get(){return this.$store.state.url},set(e){this.$store.commit(l.SET_URL,e)}}},methods:{convertToShortURL(){if(!x.isURL(this.$store.state.url)){this.setStatus(!0);return}this.$store.dispatch(k.SHORTEN)},setStatus(e){this.$data.error=e}},watch:{error:function(e){e&&setTimeout(()=>this.setStatus(!1),500)}}}),pe=i(f(d({},fe),{setup:de}));var he=h(pe,[["__scopeId","data-v-f7dd784e"]]);L.locale("zh-cn");const me=e=>L(e).format("YYYY-MM-DD HH:mm:ss"),ve=i({name:"ShortLink",data(){return{expireTime:function(e){var s;const t=(s=e.$store.state.shortUrl)==null?void 0:s.expiredAt;return t?`Expire at ${me(t)}`:"Never expire"}(this)}}}),ye={class:"flex flex-col items-baseline"},$e=["href"],Se=v(" \xA0\xA0 "),Te={class:"text-gray-400"};function xe(e,t,s,o,r,n){return u(),_("div",ye,[a("a",{class:"text-6xl",href:e.$store.getters.shortLink},g(e.$store.getters.shortLink),9,$e),Se,a("span",Te,g(e.expireTime),1)])}var Le=h(ve,[["render",xe]]);const ge={class:"container"},be={key:1,class:"flex flex-col"},ke={class:"mr-auto mb-6"},Ee={class:"p-2 text-xl inline-flex justify-center items-center"},Ne=v(" \xA0 Back ");function we(e){return(t,s)=>{const o=T("font-awesome-icon");return u(),_("div",ge,[c(F,{appear:"",name:"slide-fade",mode:"out-in"},{default:p(()=>[t.$store.getters.shortLink?(u(),_("div",be,[a("div",ke,[c(y,{onClick:t.reset},{default:p(()=>[a("div",Ee,[c(o,{icon:["fas","chevron-circle-left"]}),Ne])]),_:1},8,["onClick"])]),c(Le)])):(u(),G(he,{key:0}))]),_:1})])}}const Ie=i({name:"Content",methods:{reset(){this.$store.commit(l.SET_SHORT_LINK,null)}}}),Re=i(f(d({},Ie),{setup:we}));var Ue=h(Re,[["__scopeId","data-v-0fa8174b"]]);const Oe={class:"relative w-full h-full flex justify-center items-center font-alata text-gray-600"},Ae=i({setup(e){return(t,s)=>(u(),_("div",Oe,[c(ne),c(Ue)]))}});b.add(P);b.add(Y);M(Ae).use(ce).component("font-awesome-icon",V).mount("#app");