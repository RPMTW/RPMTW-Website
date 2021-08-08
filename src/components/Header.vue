<template>
  <header id="header" class="Header">
    <div class="inside-header">
      <div class="header-nav">
        <div class="header-nav-left">
          <div class="menuButton" @click="menuButtonHtmlToggle">
            <a href="#">
              <div class="menuStyle"></div>
            </a>
            <div class="menu" @mouseleave="menuButtonHtmlToggle">
              <div><router-link to="/">首頁</router-link></div>
              <div>
                <router-link to="/Translation-assistance">協助翻譯</router-link>
              </div>
              <div><router-link to="/Wiki">維基百科</router-link></div>
              <div><router-link to="/ProgressQuery">實用工具</router-link></div>
              <div>
                <router-link to="/Contributor">翻譯貢獻者排名</router-link>
              </div>
              <div><router-link to="/About">關於我們</router-link></div>
              <div>
                <router-link to="/install/version">下載本模組</router-link>
              </div>
              <div class="links">
                <div class="list-links">
                  <a href="https://discord.com/invite/5xApZtgV2u">
                    <img
                      src="https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico"
                      alt=""
                    />
                  </a>
                  <a href="https://github.com/RPMTW">
                    <img src="https://github.com/fluidicon.png" alt="" />
                  </a>
                  <a href="https://modrinth.com/mod/rpmtw-update-mod">
                    <img src="https://modrinth.com/favicon.ico" alt="" />
                  </a>
                  <a href="https://www.curseforge.com/minecraft/modpacks/atr1">
                    <img
                      src="https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="div-select">
                <h1
                  class="nowLang notranslate langMenu"
                  @click="showLangOptions"
                >
                  {{ lang }}
                </h1>
                <div
                  class="div-option langMenu notranslate"
                  v-for="(value, key) in langs"
                  :value="key"
                  :key="(value, key)"
                  @click="setChoose"
                >
                  {{ value }}
                </div>
              </div>
            </div>
            <div class="blurry"></div>
          </div>
        </div>
        <div class="header-nav-title user-select">
          <strong class="main-title"
            ><span class="notranslate" style="color: #ff9900">RPM</span
            ><span style="color: #00ffff" class="notranslate">TW</span></strong
          >
        </div>
        <div class="header-nav-right">
          <div class="header-nav-setMode" @click="headerSetMode_click" rod>
            <span class="mode-dark">
              <i class="fas fa-sun"></i>
            </span>
            <span class="mode-bright">
              <i class="fas fa-sun"></i>
            </span>
            <div class="mode-rod"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
/* eslint-disable */
import _i18n from "@/i18n";
function i18n(val, value = "") {
  return (
    _i18n.i18nData[_i18n.getLang()][val] ||
    _i18n.i18nData[_i18n.set.main][val] ||
    value
  );
}
let _ScrollTop = 0;
export default {
  name: "Header",
  data() {
    return {
      langs: _i18n.set.langs,
      lang: `${_i18n.set.langs[_i18n.getLang()]} (${_i18n.getLang()})`,
    };
  },
  methods: {
    i18n: i18n,
    showLangOptions() {
      $("div.div-option.langMenu").toggleClass("block");
    },
    setChoose(e) {
      let select = $(e.target).attr("value");
      this.lang = `${_i18n.set.langs[select]} (${select})`;
      _i18n.setLang(select);
    },
    headerSetMode_click() {
      let nowMode = $("html").toggleClass("bright").attr("class").split(" ");
      /* set coolie check modeType */
      nowMode.includes("bright")
        ? (document.cookie = "mode=bright")
        : (document.cookie = "mode=dark");
    },
    menuButtonHtmlToggle() {
      $("html").toggleClass("is-menu");
    },
  },
  mounted() {
    let _this = this;
    $(function () {
      $(window).on("scroll", () => headerScroll());
      function headerScroll() {
        /* set header top show */
        let scrollTop = Math.floor($(window).scrollTop());
        let header = $("#header");
        let topClass = "slider--up";
        let downClass = "slider--down";

        if (scrollTop === 0) {
          setTimeout(() => {
            header.addClass(topClass);
          }, 250);
          header.removeClass(downClass);
        } else {
          if (_ScrollTop > scrollTop) {
            header.addClass(topClass);
            header.removeClass(downClass);
          } else if (!$("html").hasClass("is-menu")) {
            header.addClass(downClass);
            header.removeClass(topClass);
          }
        }
        _ScrollTop = scrollTop;
      }
      headerScroll();
    });
    /* init check cookie mode */
    let parts = `; ${document.cookie}`.split("; mode=");
    2 === parts.length && "bright" === parts.pop().split(";").shift()
      ? $("html").addClass("bright")
      : (document.cookie = "mode=dark");
    if (document.cookie.length <= 0) alert("建議開啟 cookie 已獲得更好的體驗");
  },
};
</script>

<style lang="scss" scoped>
.div-select {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  .div-option {
    display: none;
    width: 50%;
    border-top: 2px solid rgb(119, 119, 119);
    border-bottom: 2px solid rgb(119, 119, 119);
    margin: 5px 0;
    padding: 0 10px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .block {
    display: block;
  }
}
</style>

<style lang="scss">
body {
  margin-top: 52px;
}
/* header */
header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(85, 82, 82);
}
.slider--down {
  top: -10%;
  transition: 0.8s;
}
.slider--up {
  transition: 0.8s;
}
.header-nav {
  margin: 0 15px;
  padding: 5px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
/* header-nav-title */
.header-nav-title {
  margin-left: 35px;
}
.main-title {
  font-family: "Architects Daughter", cursive;
  margin: 0;
  padding: 0;
  font-size: 30px;
}
/* setMode */
.header-nav-setMode {
  position: relative;
  width: 40px;
  padding: 2px 8px 0 8px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: rgb(19, 18, 18);
}
.header-nav-setMode span {
  padding: 5px;
}
.mode-bright {
  color: white;
}
.mode-dark {
  color: rgb(146, 146, 146);
}
.mode-rod {
  position: absolute;
  border-radius: 50%;
  top: 6px;
  left: 9px;
  width: 18px;
  height: 18px;
  box-shadow: rgb(133, 241, 255) 0px 0px 1px 2px;
  background-color: black;
  transition: transform 0.2s ease;
}
.bright .mode-rod {
  transform: translateX(23px);
}

/* menu-button */
.menuButton {
  z-index: 1;
}
.menuButton a {
  display: block;
  padding: 10px 0;
}
.is-menu .menuStyle {
  background-color: transparent;
}
.is-menu .menuStyle:after {
  transform: translateY(-7px) rotate(-45deg);
}
.is-menu .menuStyle:before {
  transform: translateY(7px) rotate(45deg);
}
.menuStyle {
  position: relative;
  background-color: white;
  width: 20px;
  height: 2px;
  margin-top: 7px;
  margin-bottom: 7px;
}
.menuStyle:before,
.menuStyle:after {
  position: absolute;
  content: "";
  width: 20px;
  height: 2px;
  transition-duration: 0.4s;
}
.menuStyle:before {
  content: "";
  position: absolute;
  top: -7px;
}
.menuStyle:after {
  top: 7px;
  content: "";
  position: absolute;
}
.menuStyle::after {
  background-color: white;
}
.menuStyle::before {
  background-color: white;
}

/* menu */
.links img {
  width: 50px;
  border-radius: 50%;
}
.list-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    width: 50px;
    margin: 5px 10px 5px 0;
  }
}
.is-menu .blurry {
  position: fixed;
  display: block;
  opacity: 0.3;
  transform: translateX(-100%);
  z-index: 9;
}
.blurry {
  background: #000;
  height: 100%;
  left: 100%;
  top: 0;
  width: 100%;
}
.is-menu .menu {
  display: flex;
}
.menu {
  margin: 0 10px 10px 0;
  z-index: 99;
  left: 0;
  top: 46px;
  width: 40%;
  flex-direction: column;
  display: none;
  position: absolute;
  background-color: #000;
}
.menu > div:not(.links) {
  padding-left: 15px;
  border-bottom: white 1px solid;
  padding-top: 10px;
  padding-bottom: 10px;
}
.menu > div > * {
  font-size: 14.5pt;
  color: rgb(226, 224, 220) !important;
}
</style>
