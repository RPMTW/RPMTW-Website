<template>
  <div id="ModInfo" class="flex-center">
    <div class="youtubeIframe">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/OIE26f1P8dU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="buttons">
      <router-link to="/Translation-assistance" class="button-div">{{
        i18n("RPMTWUpdateMod.buttons.Participate")
      }}</router-link>
      <a href="https://discord.com/invite/5xApZtgV2u" class="button-div">
        {{ i18n("public.goto.discord") }}
      </a>
    </div>
    <div>
      <section class="flex-center">
        <h1 class="sectionTitle">{{ i18n("RPMTWUpdateMod.main.title") }}</h1>
        <Progress
          version="progress"
          :Title="i18n('RPMTWUpdateMod.schedule.Full.version')"
        />
        <div v-show="moreShow" class="more flex-center">
          <Progress version="1.12" />
          <Progress version="1.16" />
          <Progress version="1.17" />
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
      <section class="flex-center">
        <h1 class="sectionTitle mar-0">功能介紹</h1>
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
          <strong style="color: orange"
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
$titleColor: orange;
#ModInfo {
  width: 100%;
  .youtubeIframe {
    width: 80%;
    height: 80%;
    padding: 2.5em 0;
    iframe {
      width: 100%;
    }
  }
  .buttons {
    text-align: center;
    width: 100%;
    .button-div {
      margin: 10px;
      padding: 10px 10%;
    }
  }
  .text-title {
    font-size: 30pt;
    color: $titleColor;
  }
  h1 {
    font-size: 30pt;
    text-align: center;
  }
  .ProgressEx {
    width: 80%;
  }
  img {
    max-width: 80%;
  }
  .sectionTitle {
    color: $titleColor;
    font-size: 40pt;
  }
  .mar-0 {
    margin: 0;
  }
  .more {
    width: 100%;
    .ProgressEx {
      margin-top: 60px !important;
    }
  }
  .moreButton {
    cursor: pointer;
    font-size: 15pt;
  }
  .arrow {
    opacity: 0.8;
    border-width: 20px;
    &.drop {
      transform: rotate(180deg) !important;
    }
    &:not(.drop) {
      margin-top: 15pt;
    }
  }
}
</style>