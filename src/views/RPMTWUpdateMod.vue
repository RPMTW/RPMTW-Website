<template>
  <div id="ModInfo" class="flex flex-down flex-item-center">
    <div class="videoBox">
      <div class="youtubeIframe">
        <iframe
          sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads"
          frameborder="0"
          aria-label="居然有自動幫你翻譯中文的模組!?!?!?還可以修改你覺得不適合的翻譯!!!| Minecraft 模組介紹 27 中文翻譯模組"
          src="https://www.youtube.com/embed/OIE26f1P8dU"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>

    <div class="buttons flex flex-center">
      <router-link to="/Translation-assistance" class="btn">{{
        i18n("RPMTWUpdateMod.buttons.Participate")
      }}</router-link>
      <a href="https://discord.com/invite/5xApZtgV2u" class="btn">
        {{ i18n("public.goto.discord") }}
      </a>
    </div>
    <div class="w80">
      <section class="process flex flex-down flex-item-center">
        <h1 class="sectionTitle text-title" style="margin-bottom: 80px">
          {{ i18n("RPMTWUpdateMod.main.title") }}
        </h1>
        <Progress
          version="progress"
          class="progress"
          :Title="i18n('RPMTWUpdateMod.schedule.Full.version')"
        />
        <div v-show="moreShow" class="more">
          <Progress class="progress" version="1.12" />
          <Progress class="progress" version="1.16" />
          <Progress class="progress" version="1.17" />
        </div>
        <div
          @click="moreShow = !moreShow"
          class="moreButton arrow icon"
          style="--color: var(--styleMode-color)"
          :class="{
            drop: moreShow,
          }"
          aria-label="查看更多"
        ></div>
      </section>
      <section class="flex flex-item-center flex-down">
        <h1 class="sectionTitle">功能介紹</h1>
        <h2>自動更新並載入翻譯包</h2>
        <img
          class="showEl"
          src="@/assets/images/modInfo/modInfoAutoUpData.png"
          alt=""
        />
        <h2>遊戲內翻譯</h2>
        <img
          class="showEl"
          src="@/assets/images/modInfo/inGameIcon.png"
          alt=""
        />
        <h2>光速載入翻譯包</h2>
        <img
          class="showEl"
          src="@/assets/images/modInfo/SpeedLoading.png"
          alt=""
        />
        <h2>圖形化設定界面</h2>
        <img class="showEl" src="@/assets/images/modInfo/gameUI.png" alt="" />
        <h2>公告系統</h2>
        <img
          class="showEl"
          src="@/assets/images/modInfo/Announcement.png"
          alt=""
        />
        <h2>掛機偵測系統</h2>
        <img class="showEl" src="@/assets/images/modInfo/getAFK.png" alt="" />
        <h2>
          <strong style="color: var(--title-color)"
            >之後會陸續支援更多功能喔，敬啟期待!</strong
          >
        </h2>
      </section>
      <section class="flex flex-item-center flex-down">
        <h1 class="sectionTitle text-center">模組更新進度:</h1>
        <ul class="commits flex flex-down flex-item-center">
          <li
            v-for="data in commits"
            :key="data"
            v-show="data.committer.login !== ''"
            class="commit flex"
          >
            <div class="commit-message">
              <h2 class="auto-overflow">{{ data.commit.message }}</h2>
            </div>
            <div class="flex" style="width: 30%">
              <div>
                <a :href="data.html_url"
                  ><svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="go-html-url"
                  >
                    <path
                      d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
                    ></path></svg
                ></a>
              </div>
              <div class="flex commit-author">
                <div class="flex">
                  <img :src="data.committer.avatar_url" alt="" />
                  <a :href="data.committer.html_url" class="">
                    {{ data.committer.login }}
                  </a>
                  <p
                    :aria-label="timeString(data.commit.author.date)"
                    class="days"
                  >
                    {{ setTime(data.commit.author.date) }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import main from "@/i18n.js";
import Progress from "@/components/Progress.vue";
function i18n(val, value = "") {
  return (
    main.i18nData[main.getLang()][val] ||
    main.i18nData[main.set.main][val] ||
    value
  );
}

function setTime(dateTimeStamp) {
  let diffValue = new Date().getTime() - new Date(dateTimeStamp).getTime();
  if (diffValue < 0) return;
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let week = day * 7;
  let month = day * 30;
  let minC = diffValue / minute;
  let hourC = diffValue / hour;
  let dayC = diffValue / day;
  let weekC = diffValue / week;
  let monthC = diffValue / month;
  let yearC = diffValue / month / 12;
  if (yearC >= 1) {
    return `${parseInt(yearC)} 年前`;
  } else if (monthC >= 1 && monthC <= 3) {
    return `${parseInt(monthC)} 月前`;
  } else if (weekC >= 3) {
    return `${parseInt(weekC)} 周前`;
  } else if (dayC >= 1) {
    return `${parseInt(dayC)} 天前`;
  } else if (hourC >= 1 && hourC <= 23) {
    return `${parseInt(hourC)} 小時前`;
  } else if (minC >= 1 && minC <= 59) {
    return `${parseInt(minC)} 分鐘前`;
  } else if (diffValue >= 0 && diffValue <= minute) {
    return "剛剛";
  } else {
    return timeString(dateTimeStamp);
  }
}
function timeString(time) {
  time = new Date(time).getTime();
  let datetime = new Date();
  datetime.setTime(time);
  let year = datetime.getFullYear();
  let month =
    datetime.getMonth() + 1 < 10
      ? "0" + (datetime.getMonth() + 1)
      : datetime.getMonth() + 1;
  let date =
    datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
  return `${year} - ${month} - ${date}`;
}
export default {
  name: "ModInfo",
  data() {
    return {
      moreShow: false,
      commits: null,
    };
  },
  methods: {
    i18n: i18n,
    setTime: setTime,
    timeString: timeString,
  },
  components: {
    Progress,
  },
  mounted() {
    let _this = this;
    $(function () {
      $.getJSON(
        "https://api.github.com/repos/RPMTW/RPMTW-Update-Mod/commits",
        (datas) => {
          let out = [];
          for (let [index, data] of datas.entries()) {
            if (data.commit.author.name !== "web-flow" && index < 10)
              out.push(data);
          }
          _this.commits = out;
        }
      );
    });
  },
};
</script>

<style lang="scss" scoped>
#ModInfo {
  margin-top: 20px;
  section {
    > h1 {
      font-size: 35pt;
      text-align: center;
    }
    h2 {
      font-size: 25pt;
      text-align: center;
    }
  }
  .sectionTitle {
    color: var(--title-color);
    width: 75%;
    font-size: 35pt;
    border-bottom: solid 2px var(--styleMode-color);
  }

  .videoBox {
    min-width: 1010px;
    margin-bottom: 5em;
    .youtubeIframe {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    @media all and (max-width: 1290px) {
      min-width: 80%;
      margin-bottom: 4vw;
    }
  }
  .buttons {
    width: 80%;
    .btn {
      width: 80%;
      margin: 20px;
    }
    @media all and (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .process {
    .progress {
      width: 100%;
    }
    .more {
      width: 100%;
      .progress {
        margin-top: 5em;
      }
    }
    .moreButton {
      margin-top: 25px;
      color: var(--styleMode-color);
      border-width: 32px;
      cursor: pointer;
      &.drop {
        transform: rotate(180deg) !important;
      }
    }
  }
  img {
    max-width: 80%;
  }
  @media all and (max-width: 600px) {
    h1 {
      font-size: 8vw !important;
    }
    h2 {
      font-size: 5.4vw !important;
    }
    .btn {
      font-size: 2.5vw;
    }
  }
  .w80 {
    width: 80%;
  }
  .commits {
    color: var(--styleMode-background-color) !important;
    background-color: var(--styleMode-color);
    width: 80%;
    padding: 1em 0;
    border-radius: 4px;
    .commit {
      width: 80%;
      align-items: center;
      justify-content: space-between;
      padding-left: 2%;
      &:not(:nth-child(0n + 1)) {
        border-top: solid 2px var(--styleMode-background-color);
      }
      li {
        list-style-type: upper-roman;
      }
      p,
      h2 {
        width: 100%;
        margin: 0;
      }
      h2 {
        font-size: 18pt;
        text-align: left;
      }
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      &:hover {
        background-color: var(--styleMode-webkit-scrollbar);
      }
      .go-html-url {
        padding: 5px;
        border-radius: 4px;
        fill: var(--styleMode-background-color);
        &:hover {
          background-color: var(--styleMode-webkit-scrollbar-thumb);
          fill: var(--styleMode-color);
        }
      }
      .commit-message {
        width: 60%;
      }
      .commit-author {
        align-items: center;
        justify-content: flex-end;
        line-height: 2;
        > div > * {
          padding-left: 5px;
        }
        > div {
          width: 100%;
          justify-content: flex-end;
        }
        a {
          color: var(--styleMode-background-color) !important;
        }
      }
    }
    @media all and (max-width: 1100px) {
      .commit {
        flex-direction: column;
        > div {
          width: 100% !important;
          &.commit-message {
            padding-left: 10%;
          }
          a,
          p {
            font-size: 1.5vw;
          }
        }
      }
    }
  }
}
</style>