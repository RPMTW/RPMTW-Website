(function(e){function t(t){for(var c,a,s=t[0],i=t[1],l=t[2],d=0,u=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-118ac152":"4b2c380a","chunk-16a6a149":"82250753","chunk-22ea8d4c":"fd6f773a","chunk-2d0da7d0":"58291a5b","chunk-2d0daa96":"e1e9b7db","chunk-2d2105d0":"39724036","chunk-2d225de6":"c0fd1723","chunk-40f28e5b":"413acf73","chunk-477b98da":"f3f64e1a","chunk-4bf2bc4a":"e30e404c","chunk-539539c6":"aa9027f3","chunk-568e325e":"c446f051","chunk-692a4620":"0771ff45","chunk-6b2e78d2":"672519c7","chunk-6e703488":"e8905152","chunk-7cfed818":"3600d269","chunk-8464edc8":"c36d782f","chunk-89bf007e":"beb3aa69","chunk-8eb4d2dc":"28175613","chunk-d989b56a":"7fec3fef"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-118ac152":1,"chunk-16a6a149":1,"chunk-22ea8d4c":1,"chunk-40f28e5b":1,"chunk-477b98da":1,"chunk-4bf2bc4a":1,"chunk-539539c6":1,"chunk-692a4620":1,"chunk-6b2e78d2":1,"chunk-6e703488":1,"chunk-7cfed818":1,"chunk-8464edc8":1,"chunk-89bf007e":1,"chunk-8eb4d2dc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-118ac152":"d8109ca1","chunk-16a6a149":"058f84f2","chunk-22ea8d4c":"56c334ab","chunk-2d0da7d0":"31d6cfe0","chunk-2d0daa96":"31d6cfe0","chunk-2d2105d0":"31d6cfe0","chunk-2d225de6":"31d6cfe0","chunk-40f28e5b":"198d57b1","chunk-477b98da":"8aaff74e","chunk-4bf2bc4a":"b56e6ab2","chunk-539539c6":"6fde3ce6","chunk-568e325e":"31d6cfe0","chunk-692a4620":"30a9ee2f","chunk-6b2e78d2":"3e5d7460","chunk-6e703488":"4cabb673","chunk-7cfed818":"4ac87a00","chunk-8464edc8":"ab5c8c52","chunk-89bf007e":"c6c006c8","chunk-8eb4d2dc":"3077142f","chunk-d989b56a":"31d6cfe0"}[e]+".css",o=i.p+c,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===c||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===c||d===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],h.parentNode.removeChild(h),n(r)},h.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",u.name="ChunkLoadError",u.type=c,u.request=a,n[1](u)}o[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var h=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=n("7911"),o=n.n(a);Object(c["v"])("data-v-064edc0c");const r={id:"header",class:"flex flex-down"},s={key:0,class:"discord-top-link flex",style:{width:"100%"}},i=Object(c["f"])("div",null,null,-1),l=Object(c["f"])("div",{class:"flex",style:{width:"80%"}},[Object(c["f"])("p",null," 遇到問題了?有建議要提供?想一起聊天?讓我們一起壯大 Minecraft 社群吧!! "),Object(c["f"])("a",{target:"_blank",class:"btn",href:"https://discord.com/invite/5xApZtgV2u",style:{"--thisColor":"rgb(173, 173, 173)"}},"加入 RPMTW 官方 Discord 伺服器")],-1),d={class:"flex else-discord"},u={class:"header-nav-left"},h={class:"menuButton"},b=Object(c["f"])("div",{class:"menuStyle"},null,-1),m=[b],f=Object(c["f"])("div",{class:"links flex"},[Object(c["f"])("a",{target:"_blank",href:"https://discord.com/invite/5xApZtgV2u"},[Object(c["f"])("img",{src:o.a,alt:""})]),Object(c["f"])("a",{target:"_blank",href:"https://github.com/RPMTW"},[Object(c["f"])("img",{src:"https://github.com/fluidicon.png",alt:""})]),Object(c["f"])("a",{target:"_blank",href:"https://modrinth.com/mod/rpmtw-update-mod"},[Object(c["f"])("img",{src:"https://modrinth.com/favicon.ico",alt:""})]),Object(c["f"])("a",{target:"_blank",href:"https://www.curseforge.com/minecraft/modpacks/atr1"},[Object(c["f"])("img",{src:"https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png",alt:""})]),Object(c["f"])("a",{target:"_blank",href:"https://crowdin.com/project/resourcepack-mod-zhtw?already_accepted=14797842"},[Object(c["f"])("img",{src:"https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",alt:""})])],-1),p={class:"div-select flex flex-down"},g=["value"],O=Object(c["f"])("div",{class:"txt-logo user-select"},[Object(c["f"])("strong",{class:"main-title"},[Object(c["f"])("span",{class:"notranslate",style:{color:"#ff9900"}},"RPM"),Object(c["f"])("span",{style:{color:"#00ffff"},class:"notranslate"},"TW")])],-1),k={class:"header-nav-right"},j=Object(c["f"])("i",{class:"fas fa-sun"},null,-1),v=[j];function w(e,t,n,a,o,b){const j=Object(c["A"])("router-link");return Object(c["s"])(),Object(c["e"])("header",r,[o.discordLinkShow?(Object(c["s"])(),Object(c["e"])("div",s,[i,l,Object(c["f"])("div",{class:"icon x",onClick:t[0]||(t[0]=(...e)=>b.noDiscordLink&&b.noDiscordLink(...e))})])):Object(c["d"])("",!0),Object(c["f"])("div",d,[Object(c["f"])("div",u,[Object(c["f"])("div",h,[Object(c["f"])("div",{class:"menuStyleButton",href:"#",onClick:t[1]||(t[1]=(...e)=>b.menuButtonHtmlToggle&&b.menuButtonHtmlToggle(...e))},m),Object(c["f"])("div",{class:"menu",onMouseleave:t[4]||(t[4]=(...e)=>b.menuButtonHtmlRemove&&b.menuButtonHtmlRemove(...e))},[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(o.menuList,e=>(Object(c["s"])(),Object(c["e"])("div",{key:e,class:Object(c["o"])([{active:o.breadcrumb===e.breadcrumb},"activeBreadcrumb"])},[Object(c["i"])(j,{class:"go-to",to:e.to,onClick:[b.goTop,b.menuButtonHtmlRemove]},{default:Object(c["H"])(()=>[Object(c["h"])(Object(c["C"])(e.name),1)]),_:2},1032,["to","onClick"])],2))),128)),f,Object(c["f"])("div",p,[Object(c["f"])("h1",{class:"nowLang notranslate langMenu",onClick:t[2]||(t[2]=(...e)=>b.showLangOptions&&b.showLangOptions(...e))},Object(c["C"])(o.lang),1),(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(o.langs,(e,n)=>(Object(c["s"])(),Object(c["e"])("div",{class:"div-option none langMenu notranslate",value:n,key:n,onClick:t[3]||(t[3]=(...e)=>b.setChoose&&b.setChoose(...e))},Object(c["C"])(e),9,g))),128))])],32)]),Object(c["f"])("div",{class:"blurry",onClick:t[5]||(t[5]=(...e)=>b.menuButtonHtmlRemove&&b.menuButtonHtmlRemove(...e))})]),O,Object(c["f"])("div",k,[Object(c["f"])("div",{class:"header-nav-setMode",onClick:t[6]||(t[6]=(...e)=>b.headerSetMode_click&&b.headerSetMode_click(...e)),rod:""},[Object(c["f"])("span",{class:Object(c["o"])({"mode-bright":o.bright,"mode-dark":!o.bright})},v,2)])])])])}Object(c["t"])();var T=n("9225"),y=n("8b64");function C(e,t=""){return T["default"].i18nData[T["default"].getLang()][e]||T["default"].i18nData[T["default"].set.main][e]||t}let M=0;var P={name:"Header",data(){return{langs:T["default"].set.langs,lang:`${T["default"].set.langs[T["default"].getLang()]} (${T["default"].getLang()})`,menuList:y,breadcrumb:null,bright:!1,discordLinkShow:!0,notHeader:!1}},components:{},methods:{i18n:C,showLangOptions(){$("div.div-option.langMenu").toggleClass("none")},setChoose(e){let t=$(e.target).attr("value");this.lang=`${T["default"].set.langs[t]} (${t})`,T["default"].setLang(t)},headerSetMode_click(){let e=$("html").toggleClass("bright").attr("class").split(" ").includes("bright");this.bright=e,document.cookie="mode="+(e?"bright":"dark")},menuButtonHtmlToggle(){$("html").toggleClass("is-menu")},menuButtonHtmlRemove(){$("html").removeClass("is-menu")},goTop(){$("html").animate({scrollTop:0},400)},setBreadcrumb(){this.breadcrumb=this.$route.meta.breadcrumb},noDiscordLink(){localStorage.setItem("discordLink",0),this.discordLinkShow=!1,this.discordLinkShow&&$(":root").css("--html-margin-top","95px")||$(":root").css("--html-margin-top","45px")},checkHeader(){this.notHeader=this.$route.query.notHeader,this.notHeader?$("html").addClass("not-header"):$("html").removeClass("not-header")}},mounted(){let e=this;this.discordLinkShow=0!==parseInt(localStorage.getItem("discordLink")),$((function(){function t(){let e=Math.floor($(window).scrollTop()),t=$("#header"),n="slider--up",c="slider--down";0===e?(setTimeout(()=>{t.addClass(n)},250),t.removeClass(c)):M>e?(t.addClass(n),t.removeClass(c)):$("html").hasClass("is-menu")||(t.addClass(c),t.removeClass(n)),M=e}e.discordLinkShow&&$("html").css("--html-margin-top","95px")||$("html").css("--html-margin-top","45px"),$(window).on("scroll",()=>t()),t()})),this.setBreadcrumb(),"bright"==getCookie("mode")?$("html").addClass("bright"):document.cookie="mode=dark",document.cookie.length<=0&&alert("建議開啟 cookie 已獲得更好的體驗");let t=$("html").attr("class");this.bright=t&&t.split(" ").includes("bright")},watch:{$route(){this.setBreadcrumb(),this.checkHeader()}}};n("c877"),n("b9cb");P.render=w,P.__scopeId="data-v-064edc0c";t["default"]=P},"0750":function(e,t,n){},"10ee":function(e){e.exports=JSON.parse('{"public.Game.version":"遊戲版本","public.goto.discord":"加入官方社群 (Discord)","plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name":"ATR 1 - All The RPMTW<br />模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.title":"公告","Home.announcement.datas":["文言文：菘之幻界->白話文：白菜的幻想世界!?!?","RPMTW 官方模組啟動器製作中...","ATR官方伺服器目前為關閉狀態","較安全的模組下載平台/授權平台: Modrinth、CurseForge 黑名單模組下載平台：9Minecraft","Emm 偷偷說~~又有新坑了!!诶等等官方模組啟動器不適還沒做完嗎Emmmmmmm"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"],"ProgressQuery.please.enter.CurseForgeID":"請輸入CurseForgeID","ProgressQuery.title":"RPMTW 模組個別翻譯進度查詢器","ProgressQuery.description.0":"不知道自己喜歡的模組有沒有被翻譯呢?或者想了解模組的翻譯進度，那用這個工具就對了","ProgressQuery.description.1":"(目前仍處測試版狀態，資料庫尚未齊全，因此部分模組查無資料屬正常現象)","ProgressQuery.Filter.condition":"過濾條件","RPMTWUpdateMod.buttons.Participate":"參與模組翻譯","RPMTWUpdateMod.main.title":"體驗前所未見的模組繁中化","RPMTWUpdateMod.schedule.Full.version":"全版本模組翻譯進度"}')},2210:function(e,t,n){"use strict";n("9b16")},"291a":function(e,t,n){"use strict";n.r(t);var c=n("7a23");Object(c["v"])("data-v-3521c806");const a={id:"Enlarge"},o={key:0,class:"showImg scaleDraw"},r={class:"ImgDescription flex flex-center flex-down flex-item-center"},s=["src","alt","hover"],i=["href"];function l(e,t,n,l,d,u){return Object(c["I"])((Object(c["s"])(),Object(c["e"])("div",a,[d.showImg?(Object(c["s"])(),Object(c["e"])("div",o,[Object(c["f"])("div",r,[Object(c["f"])("img",{class:"not-enlarge",src:d.showImg,alt:d.description,hover:d.description},null,8,s),d.imgLink?(Object(c["s"])(),Object(c["e"])("a",{key:0,href:d.imgLink,class:"open-original line"},"開啟原尺寸圖片",8,i)):Object(c["d"])("",!0)])])):Object(c["d"])("",!0),Object(c["f"])("div",{class:"EnlargeImg-blurry",onClick:t[0]||(t[0]=e=>d.showImg=!1)})],512)),[[c["F"],d.showImg]])}Object(c["t"])();var d={name:"EnlargeImg",data(){return{showImg:null,description:null,imgLink:null}},methods:{},mounted(){let e=this;$((function(){$("html").on("click","img.showEl",(function(t){e.showImg=$(this).attr("src")||null,e.description=$(this).attr("alt")||null,e.imgLink=$(this).attr("src")||null,$("html").addClass("enlarge"),$("#EnlargeImg.not-enlarge").css({width:$(this).css("width"),height:$(this).css("height")})}))}))}};n("c53f"),n("2210");d.render=l,d.__scopeId="data-v-3521c806";t["default"]=d},"3dfd":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const a=Object(c["f"])("div",{class:"flex flex-down"},[Object(c["f"])("img",{src:"https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128",alt:""})],-1),o=[a];function r(e,t,n,a,r,s){const i=Object(c["A"])("Header"),l=Object(c["A"])("router-view"),d=Object(c["A"])("Footer"),u=Object(c["A"])("EnlargeImg");return Object(c["s"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(i),Object(c["i"])(l,{class:"wrapper"}),Object(c["i"])(d,{class:"footer"}),Object(c["f"])("div",{class:Object(c["o"])(["goTop",{showGoTop:r.showGoTop}]),onClick:t[0]||(t[0]=(...e)=>s.goTop&&s.goTop(...e))},o,2),Object(c["i"])(u)],64)}var s=n("0418"),i=n("fd2d"),l=n("291a"),d=(n("a0f1"),n("c1c3"),{name:"Main",components:{Header:s["default"],Footer:i["default"],EnlargeImg:l["default"]},methods:{goTop(){$("html").animate({scrollTop:0},400)}},data(){return{showGoTop:!1}},mounted(){let e=this;$((function(){$(window).on("scroll",()=>e.showGoTop=$(window).scrollTop()>=600)}))}});n("e056");d.render=r;t["default"]=d},4360:function(e,t,n){"use strict";n.r(t);var c=n("5502");t["default"]=Object(c["a"])({state:{},mutations:{},actions:{},modules:{}})},"48cc":function(e,t,n){"use strict";n("e77d")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=n("3dfd"),o=n("a18c"),r=n("4360");Object(c["c"])(a["default"]).use(r["default"]).use(o["default"]).mount("main")},"5aad":function(e){e.exports=JSON.parse('{"plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.datas":["Classical Chinese: The Illusionary World of Siong -> Vernacular Chinese: The Fantasy World of Cabbage!?!?"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"]}')},6742:function(e){e.exports=JSON.parse("{}")},7911:function(e,t,n){e.exports=n.p+"img/discord.84754150.png"},"8b64":function(e){e.exports=JSON.parse('[{"to":"/","name":"首頁","breadcrumb":"Home"},{"to":"/Translation-assistance","name":"協助翻譯","breadcrumb":"Assistance"},{"to":"/Wiki","name":"維基百科","breadcrumb":"Wiki"},{"to":"/ProgressQuery","name":"實用工具","breadcrumb":"ProgressQuery"},{"to":"/Contributor","name":"翻譯貢獻者排名","breadcrumb":"Contributor"},{"to":"/Partner","name":"合作夥伴","breadcrumb":"Partner"},{"to":"/Translator","name":"線上模組翻譯系統","breadcrumb":"Translator"},{"to":"/About","name":"關於我們","breadcrumb":"About"}]')},9225:function(e,t,n){"use strict";n.r(t);var c=n("10ee"),a=n("6742"),o=n("5aad");t["default"]={set:{main:"zh_tw",langs:{zh_tw:"繁體中文",zh_cn:"简体中文",en_us:"English"}},getLang(){return localStorage.getItem("lang")||this.set.main},setLang(e){return localStorage.setItem("lang",e),window.location.reload()},i18nData:{zh_tw:c,zh_cn:a,en_us:o}}},9334:function(e,t,n){},"9b16":function(e,t,n){},a0f1:function(e,t,n){},a18c:function(e,t,n){"use strict";n.r(t);var c=n("6c02"),a=n("c601");const o=[{path:"/",name:"Home",component:()=>n.e("chunk-89bf007e").then(n.bind(null,"bb51")),meta:{breadcrumb:"Home"}},{path:"/about",name:"About",component:()=>n.e("chunk-6e703488").then(n.bind(null,"f820")),meta:{breadcrumb:"About"}},{path:"/Contributor",name:"Contributor",component:()=>n.e("chunk-22ea8d4c").then(n.bind(null,"dd86")),meta:{breadcrumb:"Contributor"}},{path:"/Translation-assistance",name:"Assistance",component:()=>n.e("chunk-539539c6").then(n.bind(null,"f74e")),meta:{breadcrumb:"Assistance"}},{path:"/Translation-assistance/Translation-Tutorials",name:"Tutorials",component:()=>n.e("chunk-40f28e5b").then(n.bind(null,"2d34"))},{path:"/ProgressQuery",name:"ProgressQuery",component:()=>n.e("chunk-8eb4d2dc").then(n.bind(null,"964f")),meta:{breadcrumb:"ProgressQuery"}},{path:"/Wiki",name:"WikiMenuList",meta:{breadcrumb:"Wiki",notFooter:!0},component:()=>n.e("chunk-118ac152").then(n.bind(null,"c89e")),children:[{path:"",components:{data:a["default"]}},{path:"QandA",components:{data:a["default"]}},{path:"AssistTranslation",components:{data:()=>n.e("chunk-568e325e").then(n.bind(null,"1b8e"))}},{path:"InstallAndUse",components:{data:()=>n.e("chunk-2d225de6").then(n.bind(null,"e5dd"))}},{path:"ModInfo",components:{data:()=>n.e("chunk-d989b56a").then(n.bind(null,"38c0"))}},{path:"OtherInfo",components:{data:()=>n.e("chunk-2d0da7d0").then(n.bind(null,"6c8e"))}}]},{path:"/RPMTWUpdateMod",name:"RPMTWUpdateMod",component:()=>n.e("chunk-16a6a149").then(n.bind(null,"752c"))},{path:"/install/version",name:"version",component:()=>n.e("chunk-6b2e78d2").then(n.bind(null,"733e")),meta:{breadcrumb:"Version"}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e("chunk-4bf2bc4a").then(n.bind(null,"4b62")),meta:{breadcrumb:"ProgressQuery"}},{path:"/atr1",name:"ATR1",component:()=>n.e("chunk-692a4620").then(n.bind(null,"a951"))},{path:"/test",name:"TEST",component:()=>n.e("chunk-2d0daa96").then(n.bind(null,"6d0b"))},{path:"/Partner",name:"Partner",component:()=>n.e("chunk-8464edc8").then(n.bind(null,"2764")),meta:{breadcrumb:"Partner"}},{path:"/RWL",name:"RWL",component:()=>n.e("chunk-7cfed818").then(n.bind(null,"0818"))},{path:"/Translator",name:"Translator",component:()=>n.e("chunk-477b98da").then(n.bind(null,"09c0"))},{path:"/CosmicChat",name:"CosmicChat",component:()=>n.e("chunk-2d2105d0").then(n.bind(null,"b826"))}],r=Object(c["a"])({history:Object(c["b"])("/"),routes:o});r.beforeEach((e,t,n)=>{document.title=e.meta.title||document.title,n()}),t["default"]=r},b9ac:function(e,t,n){e.exports=n.p+"img/autoTranslation.1a4e811f.png"},b9cb:function(e,t,n){"use strict";n("9334")},c1c3:function(e,t,n){},c53f:function(e,t,n){"use strict";n("fdc5")},c601:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=n("b9ac"),o=n.n(a);const r={id:"AssistTranslation",class:"wiki"},s={class:"content"},i=Object(c["f"])("section",{class:"section",id:"what-is-RPMTW"},[Object(c["f"])("h1",null,"什麼是 RPMTW 自動中文化更新模組?"),Object(c["f"])("p",null," 此模組是一個Minecraft模組繁體中文化的新興模組，主打「方便、快速、簡單、合作」，希望能夠打破傳統翻譯模組的方式，以及解決許多新/老手想翻譯模組但卻覺得很難/遊玩模組時被看不懂的文字困惑。 ")],-1),l={class:"section",id:"install-method"},d=Object(c["f"])("h1",null,"這模組要如何安裝?",-1),u=Object(c["h"])("<<點我查看教學>>"),h=Object(c["f"])("section",{class:"section",id:"server-need-install"},[Object(c["f"])("h1",null,"伺服器端需要安裝嗎?"),Object(c["f"])("p",null," 伺服器不用安裝，因為伺服器端不會顯示內容並不需要安裝此模組，只需客戶端安裝就能享受翻譯體驗。 ")],-1),b=Object(c["f"])("section",{class:"section",id:"RPMTW-version"},[Object(c["f"])("h1",null,"RPMTW 支援 1.12.2 以下的版本嗎? RPMTW支援那些Minecraft版本?"),Object(c["f"])("p",null,[Object(c["h"])(" RPMTW 「不打算」支援 1.12.2 以下的Minecraft版本。"),Object(c["f"])("br"),Object(c["h"])(" 目前RPMTW支援的版本有 1.12、1.16、1.17，未來有新版本釋出也會盡快更新。 ")])],-1),m=Object(c["f"])("section",{class:"section",id:"support-forge-or-fabric"},[Object(c["f"])("h1",null,"RPMTW 支援Forge嗎? 支援Fabric嗎?"),Object(c["f"])("p",null,[Object(c["f"])("span",{style:{"text-decoration":"line-through"}},"小孩子才做選擇，RPMTW 全都要"),Object(c["h"])(" (Forge/Fabric雙平台都支援)。 ")])],-1),f=Object(c["f"])("section",{class:"section",id:"discord-or-line"},[Object(c["f"])("h1",null," 有Discord或Line嗎? 我想詢問相關問題或者建議又或者想與大家一起聊天 "),Object(c["f"])("a",{target:"_blank",href:"https://discord.com/invite/5xApZtgV2u",class:"go-discord btn"},"前往 Discord 群組")],-1),p=Object(c["f"])("section",{class:"section",id:"translation-process"},[Object(c["f"])("h1",null,"這什麼原理，可以全自動化的翻譯流程?"),Object(c["f"])("p",null,"下方有一張簡易的示意圖喔w"),Object(c["f"])("br"),Object(c["f"])("img",{src:o.a,alt:"簡易的示意圖"})],-1);function g(e,t,n,a,o,g){const O=Object(c["A"])("router-link");return Object(c["s"])(),Object(c["e"])("div",r,[Object(c["f"])("div",s,[i,Object(c["f"])("section",l,[d,Object(c["i"])(O,{to:"/install/version"},{default:Object(c["H"])(()=>[u]),_:1})]),h,b,m,f,p])])}var O={name:"QandA",data(){return{}}};O.render=g;t["default"]=O},c877:function(e,t,n){"use strict";n("e438")},e056:function(e,t,n){"use strict";n("0750")},e438:function(e,t,n){},e77d:function(e,t,n){},fd2d:function(e,t,n){"use strict";n.r(t);var c=n("7a23");Object(c["v"])("data-v-36b75416");const a={key:0,class:"Footer"},o={class:"flex flex-down"},r=Object(c["f"])("a",{target:"_blank",href:"https://github.com/RPMTW"},"RPMTW Team",-1),s=Object(c["h"])(" and "),i=Object(c["f"])("a",{target:"_blank",href:"https://github.com/a3510377"},"猴子#3807",-1);function l(e,t,n,l,d,u){return d.notFooter?(Object(c["s"])(),Object(c["e"])("div",a,[Object(c["f"])("footer",o,[Object(c["f"])("p",null,[Object(c["h"])(" Copyright © RPMTW "+Object(c["C"])(d.newYear)+" Powered by The ",1),r,s,i])])])):Object(c["d"])("",!0)}Object(c["t"])();var d={name:"Footer",data(){return{notFooter:!0,newYear:(new Date).getFullYear()}},watch:{$route(){this.notFooter=!(this.$route.meta.notFooter||this.$route.query.notFooter)}}};n("48cc");d.render=l,d.__scopeId="data-v-36b75416";t["default"]=d},fdc5:function(e,t,n){}});
//# sourceMappingURL=app.917603d9.js.map