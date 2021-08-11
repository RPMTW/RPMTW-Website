<template>
  <header id="header" class="flex">
    <div class="header-nav-left">
      <div class="menuButton" @click="menuButtonHtmlToggle">
        <a href="#">
          <div class="menuStyle"></div>
        </a>
        <div class="menu" @mouseleave="menuButtonHtmlToggle">
          <div
            v-for="data in menuList"
            :key="data"
            :class="{
              active: breadcrumb === data.breadcrumb,
            }"
            class="activeBreadcrumb"
          >
            <router-link :to="data.to" class="go-to">
              {{ data.name }}
            </router-link>
          </div>
          <div class="links flex">
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
          <div class="div-select flex flex-down">
            <h1 class="nowLang notranslate langMenu" @click="showLangOptions">
              {{ lang }}
            </h1>
            <div
              class="div-option none langMenu notranslate"
              v-for="(value, key) in langs"
              :value="key"
              :key="(value, key)"
              @click="setChoose"
            >
              {{ value }}
            </div>
          </div>
        </div>
        <div class="blurry" @click="menuButtonHtmlToggle"></div>
      </div>
    </div>
    <div class="txt-logo user-select">
      <strong class="main-title"
        ><span class="notranslate" style="color: #ff9900">RPM</span
        ><span style="color: #00ffff" class="notranslate">TW</span></strong
      >
    </div>
    <div class="header-nav-right">
      <div class="header-nav-setMode" @click="headerSetMode_click" rod>
        <span
          :class="{
            'mode-bright': bright,
            'mode-dark': !bright,
          }"
        >
          <i class="fas fa-sun"></i>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
/* eslint-disable */
import _i18n from "@/i18n.js";
import menuList from "@/data/MenuDatas.json";

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
      menuList: menuList,
      breadcrumb: null,
      bright: false,
    };
  },
  methods: {
    i18n: i18n,
    showLangOptions() {
      $("div.div-option.langMenu").toggleClass("none");
    },
    setChoose(e) {
      let select = $(e.target).attr("value");
      this.lang = `${_i18n.set.langs[select]} (${select})`;
      _i18n.setLang(select);
    },
    headerSetMode_click() {
      let nowMode = $("html")
        .toggleClass("bright")
        .attr("class")
        .split(" ")
        .includes("bright");
      this.bright = nowMode;
      nowMode
        ? (document.cookie = "mode=bright")
        : (document.cookie = "mode=dark");
    },
    menuButtonHtmlToggle() {
      $("html").toggleClass("is-menu");
    },
    setBreadcrumb() {
      this.breadcrumb = this.$route.meta.breadcrumb;
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
    /* init breadcrumb */
    this.setBreadcrumb();
    /* init check cookie mode */
    let parts = `; ${document.cookie}`.split("; mode=");
    2 === parts.length && "bright" === parts.pop().split(";").shift()
      ? $("html").addClass("bright")
      : (document.cookie = "mode=dark");
    if (document.cookie.length <= 0) alert("建議開啟 cookie 已獲得更好的體驗");
    let _html = $("html").attr("class");
    this.bright = _html && _html.split(" ").includes("bright");
  },
  watch: {
    $route() {
      this.setBreadcrumb();
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background-color: rgb(85, 82, 82);
  justify-content: space-between;
  align-items: center;
  &.slider--up {
    transition: 0.8s;
  }
  &.slider--down {
    transition: 0.8s;
    top: -10%;
  }
  .header-nav-left {
    margin-left: 10px;
    .menuButton {
      z-index: 1;
      a {
        display: block;
        padding: 10px 0;
        .menuStyle {
          position: relative;
          background-color: white;
          width: 20px;
          height: 2px;
          margin: 7px 0;
          &:before,
          &:after {
            position: absolute;
            content: "";
            width: 20px;
            height: 2px;
            transition-duration: 0.4s;
          }
          &:before {
            top: -7px;
          }
          &:after {
            top: 7px;
          }
          &::after {
            background-color: white;
          }
          &::before {
            background-color: white;
          }
        }
      }
    }
    .menu {
      overflow: auto;
      margin: 0 10px 10px 0;
      z-index: 99;
      left: 0;
      top: 55px;
      width: 40%;
      flex-direction: column;
      display: none;
      position: absolute;
      background-color: #000 !important;
      > div:not(.links) {
        padding-left: 12px;
        border-bottom: white 1px solid;
        padding: 10px 0;
        > * {
          font-size: 14.5pt;
          color: rgb(226, 224, 220) !important;
        }
      }
      .activeBreadcrumb {
        &.active {
          border-left: solid 5px white;
          border-right: solid 5px white;
        }
      }
      .go-to {
        padding-left: 10px;
      }
      .links {
        justify-content: center;
        img {
          margin: 0 5px;
          width: 50px;
          border-radius: 50%;
        }
      }
      .div-select {
        .langMenu {
          margin-left: 0.5em;
          cursor: pointer;
        }
        .div-option {
          margin-left: 1.5em;
          border-bottom: solid 2px white;
        }
      }
      @media all and (max-width: 480px) {
        width: 90% !important;
      }
    }
  }
  .header-nav-right {
    margin-right: 10px;
    > .header-nav-setMode {
      font-size: 15pt;
      cursor: pointer;
      .mode-bright {
        color: yellow;
      }
      .mode-dark {
        color: rgb(0, 0, 0);
      }
    }
  }
  .txt-logo {
    font-family: "Architects Daughter", cursive;
    font-size: 30px;
  }
}
</style>
<style lang="scss">
.is-menu {
  .menuStyle {
    background-color: transparent !important;
    &:after {
      top: 0 !important;
      transform: translateX(7px) rotate(45deg);
    }
    &:before {
      top: 0 !important;
      transform: translateX(7px) rotate(-45deg);
    }
  }
  .menu {
    display: flex !important;
  }
  .blurry {
    position: fixed;
    display: block;
    opacity: 0.3;
    transform: translateX(-100%);
    z-index: 9;
  }
}
</style>
