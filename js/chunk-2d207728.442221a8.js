(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207728"],{a124:function(n,e,t){"use strict";t.r(e);var o=t("7a23");const w=["textContent"];function d(n,e,t,d,c,i){return Object(o["s"])(),Object(o["e"])("div",{textContent:Object(o["C"])(c.showTxt)},null,8,w)}var c={name:"callback",data(){return{showTxt:"loadding"}},mounted(){let n=new URLSearchParams(window.location.search),e=n.get("token"),t=n.get("type");e&&["discord","crowdin"].includes(t)&&window.opener?(window.opener.window["token_"+t]=e,window.opener.window.dispatchEvent(new CustomEvent("ok_"+t)),window.close()):(this.showTxt="錯誤!!",setTimeout(()=>window.close(),1e4))}},i=t("6b0d"),s=t.n(i);const a=s()(c,[["render",d]]);e["default"]=a}}]);
//# sourceMappingURL=chunk-2d207728.442221a8.js.map