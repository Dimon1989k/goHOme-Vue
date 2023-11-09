"use strict";(self["webpackChunkgohome_vue_project"]=self["webpackChunkgohome_vue_project"]||[]).push([[688],{4769:function(e,r,t){t.d(r,{A:function(){return i},M:function(){return a}});var s=t(6154),o=t(8839);const n=s.Z.create({baseUrl:"https://apt-booking-api.herokuapp.com"});n.interceptors.request.use((e=>{const r=o.h.state.token;return r&&(e.headers.Authorization=`Bearer ${r}`),e}),(e=>Promise.reject(e)));const a=e=>n.post("https://apt-booking-api.herokuapp.com/orders",e),i=()=>n.get("https://apt-booking-api.herokuapp.com/orders")},220:function(e,r,t){t.d(r,{Z:function(){return c}});var s=t(6252);function o(e,r,t,o,n,a){return(0,s.wg)(),(0,s.j4)((0,s.LL)(a.tagName),{class:"main-title"},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}var n={name:"MainTitle",props:{level:{type:Number,default:1}},computed:{tagName(){return`h${this.level}`}}},a=t(3744);const i=(0,a.Z)(n,[["render",o],["__scopeId","data-v-55498f2c"]]);var c=i},6804:function(e,r,t){t.d(r,{Z:function(){return d}});var s=t(6252);const o={class:"section-spacer"};function n(e,r,t,n,a,i){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}var a={name:"SectionSpacer"},i=t(3744);const c=(0,i.Z)(a,[["render",n],["__scopeId","data-v-aeafab26"]]);var d=c},4688:function(e,r,t){t.r(r),t.d(r,{default:function(){return $}});var s=t(6252);const o={class:"my-orders-page"},n={class:"my-orders-page__content"},a=(0,s.Uk)("Orders");function i(e,r,t,i,c,d){const u=(0,s.up)("MainTitle"),p=(0,s.up)("OrdersList"),l=(0,s.up)("ContainerShared"),m=(0,s.up)("SectionSpacer");return(0,s.wg)(),(0,s.iD)("main",o,[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s._)("section",n,[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[a])),_:1}),(0,s.Wm)(p,{items:c.orders},null,8,["items"])])])),_:1})])),_:1})])}var c=t(6804),d=t(607),u=t(220);const p={class:"orders-list"},l={key:0};function m(e,r,t,o,n,a){const i=(0,s.up)("OrdersItem");return(0,s.wg)(),(0,s.iD)("ul",p,[t.items.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)(t.items,(e=>((0,s.wg)(),(0,s.j4)(i,{order:e.apartment,key:e.id},null,8,["order"])))),128)):((0,s.wg)(),(0,s.iD)("p",l,"No orders"))])}var _=t(3577);const v={class:"orders-item"},f=["src"],h={class:"orders-item__details"},g={class:"orders-item__title"},w={class:"orders-item__location"},k={class:"orders-item__cost"},y={class:"orders-item__price"},Z=(0,s.Uk)(" per night ");function b(e,r,t,o,n,a){return(0,s.wg)(),(0,s.iD)("li",v,[(0,s._)("img",{class:"orders-item__photo",src:t.order.imgUrl,alt:"apartaments photo"},null,8,f),(0,s._)("div",h,[(0,s._)("div",null,[(0,s._)("h2",g,(0,_.zw)(t.order.title),1),(0,s._)("p",w,(0,_.zw)(t.order.location.city),1)]),(0,s._)("div",k,[(0,s._)("span",y,"UAH "+(0,_.zw)(t.order.price),1),Z])])])}var I={name:"OrdersItem",props:{order:{type:Object,required:!0}}},O=t(3744);const S=(0,O.Z)(I,[["render",b],["__scopeId","data-v-7a28c0a5"]]);var j=S,D={name:"OrdersList",components:{OrdersItem:j},props:{items:{type:Array,required:!0}}};const W=(0,O.Z)(D,[["render",m],["__scopeId","data-v-642b22d5"]]);var A=W,L=t(4769),M={name:"MyOrdersPage",components:{SectionSpacer:c.Z,ContainerShared:d.Z,MainTitle:u.Z,OrdersList:A},data(){return{orders:[]}},async created(){try{const{data:e}=await(0,L.A)();this.orders=e}catch(e){this.$notify({type:"error",title:"Something went wrong",text:e.message})}}};const U=(0,O.Z)(M,[["render",i],["__scopeId","data-v-67291fe8"]]);var $=U}}]);
//# sourceMappingURL=688.7e5b164b.js.map