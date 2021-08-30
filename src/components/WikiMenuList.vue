<template>
  <div id="wikiMenuList">
    <div class="scroll" :class="{ phoneOpen: phoneOpen }">
      <div class="wikiMenu">
        <div class="title user-select">
          <strong class="main-title"
            ><span class="notranslate" style="color: #ff9900">RPM</span
            ><span style="color: #00ffff" class="notranslate">TW</span
            ><span style="color: #ff9900"> Wiki</span></strong
          >
        </div>
        <ul v-for="data in menuList" :key="data">
          <router-link class="menuList_" :to="'/Wiki' + data.url">
            <h4>{{ data.title }}</h4>
          </router-link>
          <li v-for="_data in data.names" :key="_data" class="liHref">
            <a
              class="menuList_"
              :href="`${BASE_URL || '/'}Wiki${data.url}#${_data.url}`"
              >{{ _data.title }}</a
            >
          </li>
        </ul>
      </div>
      <div class="slimeMenuWiki flex flex-item-center" v-if="phone">
        <div
          class="openSlimeMenuWiki flex flex-down flex-item-center flex-center"
          @click="phoneOpen = !phoneOpen"
        >
          <div class="icon"></div>
        </div>
      </div>
    </div>
    <router-view class="view wiki-view" name="data" />
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import wikiScss from "@/assets/scss/Wiki.scss";
let menuList = require("@/data/WikiMenu");
require("dotenv").config();

export default {
  name: "apiMenuList",
  data() {
    return {
      menuList: menuList,
      BASE_URL: process.env.BASE_URL,
      phoneOpen: false,
      phone: false,
    };
  },
  methods: {
    showLi(event) {
      console.log($(event.target).parent().parent("ul").find(".liHref"));
    },
    goResize() {
      this.phone = window.innerWidth < 1000 ? true : false;
      if (this.phone) {
        $("html").addClass("wikiPhoneMenu");
      } else {
        $("html").removeClass("wikiPhoneMenu");
      }
    },
  },
  mounted() {
    let _ = this;
    $(function () {
      _.goResize();
      $("#app").on("click", ".menuList_", function () {
        $("header").removeClass("slider--up");
        $("header").addClass("slider--down");
      });
      $(window).on("resize", _.goResize);
    });
  },
};
</script>
<style lang="scss" scoped>
#wikiMenuList {
  height: 100%;
  display: flex;
  .scroll {
    transition: width 1s ease;
    .phonShow {
      transform: translateX(-100%);
    }
    .slimeMenuWiki {
      transition: transform 1s ease;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 35px;
      .openSlimeMenuWiki {
        cursor: pointer;
        width: 100%;
        height: 100px;
        background-color: red;
        border-radius: 0 5px 5px 0;
        &:hover {
          opacity: 0.8;
        }
        .icon {
          position: relative;
          background-color: white;
          width: 2px;
          height: 40%;
          &:after,
          &:before {
            content: "";
            width: 2px;
            height: 100%;
            position: absolute;
            background-color: white;
          }
          &:after {
            left: -7px;
          }
          &:before {
            left: 7px;
          }
        }
      }
    }
    .wikiMenu {
      a {
        color: white;
      }
      .title {
        height: var(--html-margin-top);
        text-align: center;
        font-family: "Architects Daughter", cursive;
        font-size: 30px;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    position: fixed;
    top: 0;
    bottom: 10px;
    /*  */
    width: 25%;
    resize: horizontal;
    padding-right: 10px;
    display: block;
    height: 100%;
    overflow-y: scroll;
  }
  .view {
    width: 70%;
    margin-left: calc(25% + 40px);
  }
  .view.home {
    text-align: center;
    font-size: 200%;
    .hr {
      padding-bottom: 50px;
    }
    a[href] {
      color: rgb(36, 146, 236);
    }
  }
  ul {
    font-weight: 900;
    li {
      font-weight: 500;
      list-style-type: none;
      margin: 15px 0 15px 8%;
    }
  }
}
</style>
<style lang="scss">
html.wikiPhoneMenu #wikiMenuList {
  .scroll {
    width: 0 !important;
    overflow-y: unset !important;
    .wikiMenu {
      display: none !important;
    }
    &.phoneOpen {
      width: 75% !important;
      background-color: rgb(63, 63, 63);
      display: block !important;
      overflow-y: scroll !important;
      .wikiMenu {
        display: block !important;
      }
      .slimeMenuWiki {
        transform: translateX(calc(100vw / 100 * 75 - 2px));
      }
    }
  }
  .wiki-view {
    margin-left: 0 !important;
    width: 100% !important;
    display: flex;
    justify-content: center;
    .content {
      width: 80% !important;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
