(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-068d5822"],{"09c0":function(t,e,o){"use strict";o.r(e);var n=o("7a23");Object(n["w"])("data-v-b688a0ca");const c={id:"Crowdin",class:"flex flex-down flex-item-center"},s={key:0,class:"userInfo flex flex-item-center"},a=["src"],l=["textContent"];function u(t,e,o,u,i,d){const r=Object(n["B"])("Login"),b=Object(n["B"])("Translation");return Object(n["t"])(),Object(n["f"])("div",c,[Object(n["g"])("div",{class:Object(n["p"])({"CrowdinLogin-blurry":i.go})},null,2),Object(n["K"])(Object(n["g"])("div",{class:Object(n["p"])(["output",{isOk:t.isOK}])},[Object(n["g"])("div",{class:"close icon x",onClick:e[0]||(e[0]=t=>i.output=null)}),Object.keys(i.output||{}).length>0?(Object(n["t"])(),Object(n["f"])("div",s,[Object(n["g"])("img",{src:i.output.avatarUrl,alt:""},null,8,a),Object(n["g"])("p",{textContent:Object(n["D"])(`${i.output.fullName}(${i.output.username}) 登入成功!!`)},null,8,l)])):Object(n["e"])("",!0)],2),[[n["H"],i.output]]),i.go?(Object(n["t"])(),Object(n["d"])(r,{key:0,onGo:e[1]||(e[1]=t=>i.go=!1)})):(Object(n["t"])(),Object(n["d"])(b,{key:1}))])}Object(n["u"])();var i=o("3529"),d=o.n(i),r=o("c455"),b=o("4eba"),O={name:"Crowdin",data(){return{go:null,output:null}},components:{Login:r["default"],Translation:b["default"]},methods:{},mounted(){d.a.getData("/user").done(t=>{this.go=!Object.keys(t).length>0,this.output=t.data,setTimeout(()=>this.output=null,3e3)}).catch(t=>{this.go=!0,401===t.status&&(this.go=!0)})}};o("9c87");O.render=u,O.__scopeId="data-v-b688a0ca";e["default"]=O},"18f4":function(t,e,o){"use strict";o("7e8b")},3529:function(t,e){let o=(t,e=null)=>$.ajax({type:"GET",headers:{Authorization:"Bearer "+(e||getCookie("crowdinToken"))},url:`${Sets.CrowdinBaseAPI}${t}`,success:t=>t});t.exports={getData:o,functions:{getDirectories:(t="1.17",e="",n=1)=>o(`/projects/${Sets.CrowdinID}/directories?directoryId=${Sets.VersionDirID[t]}&offset=${30*n}&limit=30${e?"&filter=filter":""}`)}}},"4eba":function(t,e,o){"use strict";o.r(e);var n=o("7a23");const c={id:"ModTranslation"},s={class:"sets"},a=Object(n["g"])("label",{for:"modId"},"搜尋模組",-1),l=["value"],u=["value"],i={class:"output"};function d(t,e,o,d,r,b){const O=Object(n["B"])("MakeModInfo");return Object(n["t"])(),Object(n["f"])("div",c,[Object(n["g"])("div",s,[a,Object(n["K"])(Object(n["g"])("input",{type:"text",id:"modId",placeholder:"請輸入模組ID","onUpdate:modelValue":e[0]||(e[0]=t=>r.data.modId=t),onKeyup:e[1]||(e[1]=Object(n["L"])((...t)=>b.setAll&&b.setAll(...t),["enter"]))},null,544),[[n["G"],r.data.modId]]),Object(n["g"])("div",{class:"btn",onClick:e[2]||(e[2]=(...t)=>b.setAll&&b.setAll(...t))},"搜尋"),Object(n["g"])("select",{id:"version",onClick:e[3]||(e[3]=(...t)=>b.setAll&&b.setAll(...t))},[(Object(n["t"])(),Object(n["f"])("option",{key:t.value=Object.keys(r.Sets.VersionDirID)[0],value:t.value},Object(n["D"])(t.value),9,l)),(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(Object.keys(r.Sets.VersionDirID).slice(1),t=>(Object(n["t"])(),Object(n["f"])("option",{key:t,value:t},Object(n["D"])(t),9,u))),128))])]),Object(n["g"])("div",i,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(r.mods,t=>(Object(n["t"])(),Object(n["d"])(O,{key:t,modData:t},null,8,["modData"]))),128))])])}var r=o("3529"),b=o.n(r),O=o("f4d9"),j={name:"ModTranslation",data(){return{Sets:window.Sets,data:{version:null,modId:null},mods:null,page:0,resource:{}}},components:{MakeModInfo:O["default"]},methods:{setAll(){let t=this;t.data.version=Array.from($("#version option:checked")).map(t=>t.value)[0],b.a.functions.getDirectories(t.data.version,t.data.modId,t.page).done(e=>t.mods=e.data.map(t=>t.data))}},mounted(){let t=this;for(let e in Sets.VersionDirID)$.getJSON(`https://raw.githubusercontent.com/RPMTW/ResourcePack-Mod-zh_tw/${{1.16:"Original"}[e]||"Original-"+e}/${e}/CurseForgeIndex.json`,o=>t.resource[e]=o)}};j.render=d;e["default"]=j},5562:function(t,e,o){},"7e8b":function(t,e,o){},"9c87":function(t,e,o){"use strict";o("5562")},c263:function(t,e,o){t.exports=o.p+"img/login.73ed354b.svg"},c455:function(t,e,o){"use strict";o.r(e);var n=o("7a23"),c=o("c263"),s=o.n(c);Object(n["w"])("data-v-fcf4d60c");const a={id:"CrowdinLogin"},l={class:"data flex flex-down"},u=Object(n["g"])("h2",{class:"title"},"登入 Crowdin 帳號",-1),i={class:"input-token-div"},d=["type","value"],r=Object(n["g"])("label",null,"請輸入登入權杖",-1),b=["href"],O={key:0,class:"userInfo flex flex-item-center"},j=["src"],f=["textContent"],p=["textContent"];function g(t,e,o,c,g,v){return Object(n["t"])(),Object(n["f"])("div",a,[Object(n["g"])("div",l,[u,Object(n["g"])("div",null,[Object(n["g"])("div",i,[Object(n["K"])(Object(n["g"])("input",{id:"inputToken","onUpdate:modelValue":e[0]||(e[0]=t=>g.value=t),type:g.showToken?"text":"password",class:Object(n["p"])({value:g.value}),value:g.value,onKeyup:e[1]||(e[1]=Object(n["L"])((...t)=>v.check&&v.check(...t),["enter"]))},null,42,d),[[n["F"],g.value]]),r]),Object(n["g"])("p",{onClick:e[2]||(e[2]=t=>g.showToken=!g.showToken),class:"showToken-btn user-select text-center"},Object(n["D"])(g.showToken?"隱藏":"顯示")+"登入權杖 ",1)]),Object(n["g"])("img",{class:"icon-login",src:s.a,alt:"登入",onClick:e[3]||(e[3]=(...t)=>v.check&&v.check(...t))}),Object(n["g"])("div",null,[Object(n["g"])("a",{class:"user-select",href:g.Sets.CrowdinAPI},"使用其它方式",8,b)])]),Object(n["K"])(Object(n["g"])("div",{class:Object(n["p"])(["output",{isOk:g.isOK}])},[Object(n["g"])("div",{class:"close icon x",onClick:e[4]||(e[4]=t=>g.output=null)}),Object.keys(g.output||{}).length>0&&g.output.avatarUrl?(Object(n["t"])(),Object(n["f"])("div",O,[Object(n["g"])("img",{src:g.output.avatarUrl,alt:""},null,8,j),Object(n["g"])("p",{textContent:Object(n["D"])(`${g.output.fullName}(${g.output.username}) 登入成功!!`)},null,8,f)])):(Object(n["t"])(),Object(n["f"])("h2",{key:1,textContent:Object(n["D"])(g.output)},null,8,p))],2),[[n["H"],g.output]])])}Object(n["u"])();var v=o("3529"),h=o.n(v),m={name:"CrowdinLogin",data(){return{showToken:!1,value:null,output:null,isOK:!0,Sets:window.Sets}},components:{},methods:{check(t){this.value?(this.isOK=!0,this.output="登入中...",h.a.getData("/user",this.value).done(t=>{this.output=t.data,this.isOK=!0,setTimeout(()=>{document.cookie="crowdinToken="+this.value,this.$emit("go",this.value)},3e3)}).catch(t=>{401===t.status&&(this.isOK=!1,this.output="登入權杖錯誤!!")})):$("#inputToken").addClass("value-isNull")}},mounted(){this.value=getCookie("crowdinToken")}};o("18f4");m.render=g,m.__scopeId="data-v-fcf4d60c";e["default"]=m},f4d9:function(t,e,o){"use strict";o.r(e);var n=o("7a23");const c={id:"MakeMod"},s=Object(n["g"])("div",{class:"flex"},[Object(n["g"])("img",{src:"",alt:""})],-1),a=[s];function l(t,e,o,s,l,u){return Object(n["t"])(),Object(n["f"])("div",c,a)}var u=o("3529"),i=o.n(u),d={name:"MakeMod",data(){return{}},methods:{},mounted(){let t=this;$((function(){i.a.functions.getCurseForgeModInfo(t.modData.id).done(e=>t.modData=e)}))},props:{modData:Object}};d.render=l;e["default"]=d}}]);
//# sourceMappingURL=chunk-068d5822.a05d51e3.js.map