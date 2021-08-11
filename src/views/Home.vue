<template>
  <div id="Home">
    <section class="home-main flex flex-center flex-down">
      <img
        class="user-select"
        src="https://cdn.discordapp.com/emojis/853163865696763926.png?v=1"
        alt=""
      />
      <h1 class="v-rpm-text user-select"></h1>
    </section>
    <section class="img-description flex flex-center flex-down">
      <div class="unit flex flex-center item-none">
        <div>
          <img
            style="width: 400px; height: 200px"
            src="https://cdn.discordapp.com/banners/815819580840607807/bf8aec260c17d5483a18e27d8e99a52b.jpg?size=512"
            alt=""
          />
        </div>
        <div class="flex flex-center flex-down">
          <h1 class="HanyiSentyChalk">{{ i18n("Home.include.mod.name") }}</h1>
          <strong>{{ i18n("Home.include.mod.description") }}</strong>
          <router-link
            class="btn"
            :aria-label="i18n('Home.include.public.DL-STAT')"
            to="/install/version"
          >
            {{ i18n("Home.include.public.DL-STAT") }}
          </router-link>
          <router-link
            class="btn"
            :aria-label="i18n('Home.include.public.read-more')"
            to="/RPMTWUpdateMod"
          >
            {{ i18n("Home.include.public.read-more") }}
          </router-link>
        </div>
      </div>
      <div class="unit flex flex-center item-none">
        <div>
          <img
            style="width: 400px; height: 200px"
            src="https://media.discordapp.net/attachments/793138981750571008/854976912228089906/unknown.png"
            alt=""
          />
        </div>
        <div class="flex flex-center flex-down">
          <h1 class="HanyiSentyChalk">
            {{ i18n("Home.include.atr.name.0") }}<br />
            {{ i18n("Home.include.atr.name.1") }}
          </h1>
          <strong>{{ i18n("Home.include.atr.description") }}</strong>
          <a
            class="btn"
            :aria-label="i18n('Home.include.public.DL-STAT')"
            href="https://www.curseforge.com/minecraft/modpacks/atr1"
          >
            {{ i18n("Home.include.public.DL-STAT") }}
          </a>
          <router-link
            class="btn"
            :aria-label="i18n('Home.include.public.read-more')"
            to="/atr1"
          >
            {{ i18n("Home.include.public.read-more") }}
          </router-link>
        </div>
      </div>
    </section>
    <section class="translation-C-rank flex flex-down flex-center">
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
    <section class="announcement flex flex-center flex-down">
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
/* eslint-disable-next-line no-unused-vars */
import main from "../i18n.js";

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
    };
  },
  components: {},
  mounted() {
    $(function () {
      var t = i18n("Home.scroll.texts");
      let n = 1;
      let e = (u = 0) => {
        setTimeout(function () {
          n >= t.length && (n = 0),
            (function (u) {
              let s = 0;
              let i = () => {
                setTimeout(function () {
                  ++s <= t[u].length
                    ? ($(".v-rpm-text").html(
                        `${t[u].substring(
                          0,
                          s
                        )}<span class="mouse" aria-hidden="true"></span>`
                      ),
                      i())
                    : e(n++);
                }, 150);
              };
              i();
            })(u);
        }, 2e3);
      };
      e();
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
    margin-top: 4em;
    > h1 {
      text-align: center;
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
      margin: 10px;
      > div {
        text-align: center;
        margin-left: 30px;
        h1 {
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
    }
    @media all and (max-width: 900px) {
      .unit {
        flex-direction: column;
        > div {
          margin-left: 0 !important;
          img {
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
        animation: marquee 15s linear infinite;
        > li {
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
          left: 0;
          transform: translateX(-100%);
        }
      }
    }
  }
}
</style>