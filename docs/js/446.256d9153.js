"use strict";(self["webpackChunkwheels"]=self["webpackChunkwheels"]||[]).push([[446],{2222:(t,n,e)=>{var r=e(2109),o=e(7293),i=e(3157),c=e(111),u=e(7908),a=e(6244),f=e(7207),d=e(6135),l=e(5417),s=e(1194),v=e(5112),p=e(7392),h=v("isConcatSpreadable"),m=p>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),w=function(t){if(!c(t))return!1;var n=t[h];return void 0!==n?!!n:i(t)},g=!m||!s("concat");r({target:"Array",proto:!0,arity:1,forced:g},{concat:function(t){var n,e,r,o,i,c=u(this),s=l(c,0),v=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],w(i))for(o=a(i),f(v+o),e=0;e<o;e++,v++)e in i&&d(s,v,i[e]);else f(v+1),d(s,v++,i);return s.length=v,s}})},1249:(t,n,e)=>{var r=e(2109),o=e(2092).map,i=e(1194),c=i("map");r({target:"Array",proto:!0,forced:!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5212:(t,n,e)=>{var r=e(2109),o=e(2092).some,i=e(2133),c=i("some");r({target:"Array",proto:!0,forced:!c},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},1446:(t,n,e)=>{e.r(n),e.d(n,{default:()=>l});e(1539),e(8783),e(3948),e(9554),e(4747),e(5212),e(1249),e(2222);var r=e(6252),o=e(2262),i=e(3907),c=e(2201),u={class:"word-block"};const a={__name:"word-block",props:{word:{type:String,required:!0},named:{type:String,required:!0}},emits:["solved"],setup:function(t,n){var a=n.emit,f=t,d=((0,i.oR)(),(0,c.yj)(),(0,r.RC)((function(){return e.e(174).then(e.bind(e,2174))}))),l=(0,o.iH)([]),s=function(t){l.value.forEach((function(n){n.id===t&&(n.active=!0)})),l.value.some((function(t){return!t.active}))||a("solved")},v=function(t){l.value=t.split("").map((function(t){return{id:t,active:!1}}))};return(0,r.wF)((function(){v(f.word)})),(0,r.YP)((function(){return f.named}),(function(t){s(t)})),(0,r.YP)((function(){return f.word}),(function(t){v(t)})),function(t,n){return(0,r.wg)(),(0,r.iD)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.value,(function(t,n){return(0,r.wg)(),(0,r.j4)((0,o.SU)(d),{key:"".concat(t.id,"_").concat(n),letter:t.id,active:t.active,onSelect:function(n){return s(t.id)}},null,8,["letter","active","onSelect"])})),128))])}}};var f=e(3744);const d=(0,f.Z)(a,[["__scopeId","data-v-0fd44f94"]]),l=d}}]);
//# sourceMappingURL=446.256d9153.js.map