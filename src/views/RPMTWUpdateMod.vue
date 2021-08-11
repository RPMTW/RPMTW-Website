<template>
  <div id="ModInfo" class="flex flex-down flex-item-center">
    <div class="videoBox">
      <div class="youtubeIframe">
        <iframe
          sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads"
          frameborder="0"
          aria-label="YouTube Video, 居然有自動幫你翻譯中文的模組!?!?!?還可以修改你覺得不適合的翻譯!!!| Minecraft 模組介紹 27 中文翻譯模組"
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
    <div>
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
          class="moreButton arrow"
          style="--color: var(--styleMode-color)"
          :class="{
            drop: moreShow,
          }"
          aria-label="查看更多"
        ></div>
      </section>
      <section class="flex flex-item-center flex-down">
        <h1 class="sectionTitle">功能介紹</h1>
        <h1>自動更新並載入翻譯包</h1>
        <img src="@/assets/images/modInfo/modInfoAutoUpData.png" alt="" />
        <h1>遊戲內翻譯</h1>
        <img src="@/assets/images/modInfo/inGameIcon.png" alt="" />
        <h1>光速載入翻譯包</h1>
        <img src="@/assets/images/modInfo/SpeedLoading.png" alt="" />
        <h1>圖形化設定界面</h1>
        <img src="@/assets/images/modInfo/gameUI.png" alt="" />
        <h1>公告系統</h1>
        <img src="@/assets/images/modInfo/Announcement.png" alt="" />
        <h1>掛機偵測系統</h1>
        <img src="@/assets/images/modInfo/getAFK.png" alt="" />
        <h1>
          <strong style="color: var(--title-color)"
            >之後會陸續支援更多功能喔，敬啟期待!</strong
          >
        </h1>
      </section>
    </div>
  </div>
</template>

<script>
import main from "@/i18n.js";
import Progress from "@/components/Progress.vue";
function i18n(val, value = "") {
  return (
    main.i18nData[main.getLang()][val] ||
    main.i18nData[main.set.main][val] ||
    value
  );
}
export default {
  name: "ModInfo",
  data() {
    return {
      moreShow: false,
    };
  },
  methods: {
    i18n: i18n,
  },
  components: {
    Progress,
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
}
</style>