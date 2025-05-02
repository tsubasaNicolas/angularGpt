import{a as y,b as A,c as b,d as P,f as D,j as E}from"./chunk-TB5WSV4B.js";import{C as m,F as _,J as r,L as l,N as d,O as f,P as h,Q as C,R as c,S as g,T as s,V as M,W as u,ka as v,r as T,z as p}from"./chunk-LS2JBXVZ.js";function F(t,o){if(t&1&&s(0,"app-chat-message",5),t&2){let e=u().$implicit;l("text",e.text)}}function $(t,o){if(t&1&&s(0,"app-my-message",5),t&2){let e=u().$implicit;l("text",e.text)}}function S(t,o){if(t&1&&r(0,F,1,1,"app-chat-message",5)(1,$,1,1,"app-my-message",5),t&2){let e=o.$implicit;d(e.isGpt?0:1)}}function q(t,o){t&1&&s(0,"app-typing-loader")}var x=class t{messages=p([]);isloading=p(!1);openAiService=T(E);handleMessageWithFile({prompt:o,file:e}){let i=o??e.name??"Traduce el audio";this.isloading.set(!0),this.messages.update(n=>[...n,{isGpt:!1,text:i}]),this.openAiService.audioToText(e,i).subscribe(n=>this.handleResponse(n))}handleResponse(o){if(this.isloading.set(!1),!o)return;let e=`##Transcripci\xF3n:
__Duraci\xF3n:__ ${Math.round(o.duration)} segundos.join

## El texto es:

  ${o.text}}

`;this.messages.update(i=>[...i,{isGpt:!0,text:e}]);for(let i of o.segments){let n=`
__De ${Math.round(i.start)} a ${Math.round(i.end)} segundos.__
${i.text}
`;this.messages.update(a=>[...a,{isGpt:!0,text:n}])}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-audio-to-text-page"]],decls:8,vars:1,consts:[[1,"chat-container"],[1,"chat-messages"],[1,"grid","gap-y-2"],["text","Escribe el texto que quieres que revise"],["placeholder","Escribe aqu\xED lo que deseas",3,"onMessage"],[3,"text"]],template:function(e,i){e&1&&(c(0,"div",0)(1,"div",1)(2,"div",2),s(3,"app-chat-message",3),h(4,S,2,1,null,null,f),r(6,q,1,0,"app-typing-loader"),g()(),c(7,"app-text-message-box-file",4),M("onMessage",function(a){return i.handleMessageWithFile(a)}),g()()),e&2&&(m(4),C(i.messages()),m(2),d(i.isloading()?6:-1))},dependencies:[v,y,A,b,P,D],encapsulation:2,changeDetection:0})};export{x as default};
