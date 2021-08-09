<template>
  <div class="Home">
    <section class="home-main-backImg">
      <img
        class="home-main-img user-select"
        src="https://cdn.discordapp.com/emojis/853163865696763926.png?v=1"
        alt=""
      />
      <h1 class="user-select v-rpm-text"></h1>
    </section>
    <section class="all-publicity">
      <div class="item-none">
        <div class="publicity item-none">
          <div class="publicity-icon">
            <img
              style="width: 400px; height: 200px"
              src="https://cdn.discordapp.com/banners/815819580840607807/bf8aec260c17d5483a18e27d8e99a52b.jpg?size=512"
              alt=""
            />
          </div>
          <div class="publicity-info">
            <h1 class="publicity-title">{{ i18n("Home.include.mod.name") }}</h1>
            <strong class="content">{{
              i18n("Home.include.mod.description")
            }}</strong>
            <router-link
              class="button-div"
              aria-label="立即下載"
              to="/install/version"
            >
              {{ i18n("Home.include.public.DL-STAT") }}
            </router-link>
            <router-link
              class="button-div more"
              aria-label="閱讀更多"
              to="/RPMTWUpdateMod"
            >
              {{ i18n("Home.include.public.read-more") }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="item-none">
        <div class="publicity">
          <div class="publicity-icon">
            <img
              style="width: 400px; height: 200px"
              src="https://media.discordapp.net/attachments/793138981750571008/854976912228089906/unknown.png"
              alt=""
            />
          </div>
          <div class="publicity-info">
            <h1 class="publicity-title">
              {{ i18n("Home.include.atr.name.0") }}<br />{{
                i18n("Home.include.atr.name.1")
              }}
            </h1>
            <strong class="content">{{
              i18n("Home.include.atr.description")
            }}</strong>
            <a
              class="button-div"
              aria-label="立即下載"
              href="https://www.curseforge.com/minecraft/modpacks/atr1"
            >
              {{ i18n("Home.include.public.DL-STAT") }}
            </a>
            <router-link
              class="button-div more"
              aria-label="閱讀更多"
              to="/atr1"
            >
              {{ i18n("Home.include.public.read-more") }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <p></p>
    <section class="translation-C-rank">
      <h1>{{ i18n("Home.top12.title") }}</h1>
      <iframe
        src="https://rpmtw.github.io/Contributor-Website/Top/12"
        ref="iframe"
        frameborder="0"
      ></iframe>
      <router-link class="button-div" to="/Contributor">{{
        i18n("Home.top12.show-more")
      }}</router-link>
    </section>
  </div>
  <div class="flex-center">
    <h1>公告</h1>
    <div class="marquee">
      <ul>
        <li v-for="text in announcementText" :key="text">
          {{ text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable-next-line no-unused-vars */
import main from "../i18n.js";
import announcementText from "@/data/announcement";

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
      announcementText,
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
<style lang="scss">
@charset "UTF-8";

/*  */
.home-main-backImg {
  background-size: cover;
  background-position: center center;
  background-image: url(../assets/back-img.png);
  height: 35em;
  width: 100%;
  text-align: center;
}
.home-main-img {
  box-shadow: 10px 10px 20px black;
  border-radius: 50%;
  width: 128px;
  height: 128px;
  margin-top: 4em;
}
.home-main-backImg h1 {
  font-size: 5em;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
}

/*  */
@keyframes caret {
  50% {
    border-color: transparent;
  }
}
.v-rpm-text {
  font-size: 5em;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  span.mouse {
    border-right: 0.05em solid;
    color: rgb(56, 44, 218);
    animation: caret 1s steps(1) infinite;
  }
}

/* publicity */
.all-publicity {
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    min-width: 690px;
  }
  .publicity {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 20px 0;
    justify-content: space-between;
  }
}
@media only screen and (max-width: 1000px) {
  .publicity .publicity-info {
    margin-left: 0 !important;
  }
  .all-publicity .publicity {
    flex-direction: column;
  }
}
.all-publicity .publicity .publicity-info {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.publicity .publicity-title {
  font-size: 30pt;
  font-weight: bold;
  text-align: center;
  font-family: "Noto Sans TC", sans-serif;
}
.publicity strong.content {
  font-size: 15pt;
}
.publicity-info h1 {
  margin-top: 0;
}
/* translation-C-rank */
.translation-C-rank {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.translation-C-rank iframe {
  width: 80%;
  height: 300px;
}
.translation-C-rank h1 {
  font-size: 2.5em;
}
.translation-C-rank .button-div {
  width: 80%;
  margin-top: 30px;
  padding: 4px 0;
  letter-spacing: 5px;
}
</style>
<style lang="scss" scoped>
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
</style>