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
      <router-link to="/Translation-assistance" class="button-div"
        >參與模組翻譯</router-link
      >
      <a href="https://discord.com/invite/5xApZtgV2u" class="button-div">
        加入官方社群 (Discord)
      </a>
    </div>
    <div>
      <section class="flex-center">
        <h1 class="sectionTitle">體驗前所未見的模組繁中化</h1>
        <Progress version="progress" Title="全版本模組" />
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
        <img src="@/assets/modInfo/modInfoAutoUpData.png" alt="" />
        <h1>遊戲內翻譯</h1>
        <img src="@/assets/modInfo/inGameIcon.png" alt="" />
        <h1>光速載入翻譯包</h1>
        <img src="@/assets/modInfo/SpeedLoading.png" alt="" />
        <h1>圖形化設定界面</h1>
        <img src="@/assets/modInfo/gameUI.png" alt="" />
        <h1>公告系統</h1>
        <img src="@/assets/modInfo/Announcement.png" alt="" />
        <h1>掛機偵測系統</h1>
        <img src="@/assets/modInfo/getAFK.png" alt="" />
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
import Progress from "@/components/Progress.vue";
export default {
  name: "ModInfo",
  data() {
    return {
      moreShow: false,
    };
  },
  methods: {},
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