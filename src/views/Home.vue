<template>
  <div id="Home">
    <section class="home-main flex flex-item-center flex-down">
      <img
        class="user-select"
        src="https://cdn.discordapp.com/attachments/815819581440262146/877059900776267776/RPM------.gif"
        style="width: 128px; height: 128px"
      />
      <h1 class="v-rpm-text user-select"></h1>
    </section>
    <section
      class="img-description flex flex-item-center flex-down flex-center"
    >
      <div
        class="unit flex-center flex flex-item-center item-none"
        v-for="i in img_descriptor"
        :key="i"
      >
        <div class="flex flex-down flex-item-center flex-center img">
          <img
            v-for="icon in i.icons"
            :key="icon"
            :class="[
              icon.class || 'px400',
              {
                showEl: !icon.notShowEl || false,
              },
            ]"
            :data="icon.src"
            :src="icon.src || require(`@/${icon.router_link}`)"
            :alt="icon.alt"
          />
        </div>
        <div class="description flex flex-item-center flex-down">
          <h1
            class="HanyiSentyChalk"
            v-html="i18n(i.description.i18nTitle, i.description.Title)"
          ></h1>
          <strong
            v-html="
              i18n(i.description.i18nDescription, i.description.description)
            "
          ></strong>
          <a
            class="btn"
            v-for="button in i.description.buttons"
            :key="button"
            :aria-label="i18n(button.i18n_aria_label, aria_label) || false"
            :href="
              (button.router_link && `${BASE_URL}${button.router_link}`) ||
              button.url
            "
          >
            {{ i18n(button.i18nTitle, button.Title) }}
          </a>
        </div>
      </div>
    </section>
    <section class="translation-C-rank flex flex-down flex-item-center">
      <h1 class="HanyiSentyChalk">{{ i18n("Home.top12.title") }}</h1>
      <iframe
        src="https://rpmtw.github.io/Contributor-Website/Top/12"
        ref="iframe"
        frameborder="0"
      ></iframe>
      <router-link class="btn" to="/Contributor">
        {{ i18n("Home.top12.show-more") }}
      </router-link>
    </section>
    <section class="announcement flex flex-item-center flex-down">
      <h1 class="HanyiSentyChalk">{{ i18n("Home.announcement.title") }}</h1>
      <div class="marquee">
        <ul>
          <li v-for="text in announcementText" :key="text">
            {{ text }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import main from "../i18n.js";
import img_descriptor from "@/data/Home-img-description.json";

function i18n(val, value = "") {
  return (
    main.i18nData[main.getLang()][val] ||
    main.i18nData[main.set.main][val] ||
    value
  );
}
export default {
  name: "Home",
  methods: {
    i18n: i18n,
  },
  data() {
    return {
      announcementText: i18n("Home.announcement.datas"),
      img_descriptor: img_descriptor,
      BASE_URL: process.env.BASE_URL,
    };
  },
  beforeUnmount() {
    clearTimeout(this._setTimeout);
    clearInterval(this._setInterval);
  },
  mounted() {
    let _ = this;
    document.cookie = `path=${this.BASE_URL}`;
    $(function () {
      let text = i18n("Home.scroll.texts");
      let nowList = 0;
      let nowStr = 0;
      let setText = (t) => {
        _._setTimeout = setTimeout(() => {
          $(".v-rpm-text").html(`${text[t].substring(0, ++nowStr)}`);
          nowStr <= text[t].length && setText(t);
        }, 199);
      };
      _._setInterval = setInterval(() => {
        nowStr = 1;
        nowList < text.length - 1 ? setText(++nowList) : (nowList = 0);
      }, 199 * text[nowList].length + 1e3);
      setText(nowList);

      for (let i of $(".item-none"))
        new IntersectionObserver((e) =>
          e.map((e) =>
            e.isIntersecting
              ? e.target.classList.add("active")
              : e.target.classList.remove("active")
          )
        ).observe(i);
    });
  },
};
</script>

<style lang="scss" scoped>
#Home {
  section:not(.home-main) {
    margin: 1.5em 0;
    > h1 {
      text-align: center;
      font-size: 35pt;
    }
  }
  .btn {
    font-weight: 800;
    background-color: var(--styleMode-color);
    color: var(--styleMode-background-color);
  }
  .home-main {
    background-image: url(~@/assets/images/back-img.png);
    background-size: cover;
    width: 100%;
    height: 65vh;
    justify-content: center;
    img {
      box-shadow: 10px 10px 20px #000;
      border-radius: 50%;
      margin-bottom: 5vh;
    }
    h1 {
      font-size: 5em;
      color: white;
    }
    @media all and (max-width: 480px) {
      h1 {
        font-size: 15vw !important;
        text-align: center;
        height: 70px;
      }
    }
    @media all and (min-width: 760px) and (max-width: 959px) {
      h1 {
        font-size: 10vw !important;
        text-align: center;
        height: 70px;
      }
    }
  }
  .img-description {
    .unit {
      width: 80%;
      margin: 10px;
      > div {
        text-align: center;
        margin-left: 30px;
        h1 {
          margin-top: 0;
          text-align: center;
          margin-bottom: 30px;
          font-size: 35pt;
        }
        strong {
          font-size: 18pt;
        }
        .btn {
          margin-top: 5px;
          width: 80%;
        }
      }
      .description {
        max-width: 600px;
      }
      .img {
        max-width: 400px;
        .px400 {
          width: 400px;
          height: 200px;
        }
      }
    }
    @media all and (max-width: 900px) {
      .unit {
        flex-direction: column;
        > div {
          margin-left: 0 !important;
          img {
            &.px128 {
              width: 30vw !important;
              height: auto !important;
            }
            &.RWL-icon {
              height: auto !important;
            }
            width: 80vw !important;
            height: 40vw !important;
          }
        }
      }
    }
  }
  .translation-C-rank {
    iframe {
      width: 80%;
      height: 300px;
    }
    .btn {
      margin-top: 2em;
      min-width: 20%;
    }
  }
  .announcement {
    .marquee {
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      height: 40px;
      border-radius: 8px;
      background: var(--styleMode-color);
      width: 80%;
      > ul {
        display: flex;
        padding: 0;
        position: absolute;
        list-style-type: none;
        margin: 3px 0;
        animation: marquee 35s linear infinite;
        > li {
          list-style-type: upper-roman;
          margin-right: 10em;
          white-space: nowrap;
          font-weight: 900;
          font-size: 20pt;
          color: var(--styleMode-background-color);
          user-select: none;
          a {
            margin: 0;
          }
        }
      }

      @keyframes marquee {
        0% {
          left: 100%;
          transform: translateX(0%);
        }
        100% {
          left: 0%;
          transform: translateX(-100%);
        }
      }
    }
  }
  .v-rpm-text {
    text-align: center;
    &::after {
      content: "";
      border-right: solid 6px rgb(56, 44, 218);
      animation: block 1s infinite;
      @keyframes block {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  @media all and (max-width: 600px) {
    h1 {
      text-align: center;
      font-size: 7.8vw !important;
    }
    strong {
      text-align: center;
      font-size: 4vw !important;
    }
    .btn {
      font-size: 2.7vw !important;
    }
  }
}
</style>
