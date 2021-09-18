<template>
  <div id="RWL-Version" class="setList">
    <div class="loadIng"><a>正在載入資料中，請稍後...</a></div>
    <p class="loaded txt-dev">
      注意: RPMLauncher
      目前仍是測試版軟體，目前有許多bug，不建議作為主要軟體使用。
    </p>
    <div class="loaded txt-title">
      最新開發版本: {{ VersionData.dev.latest_version }}.{{
        VersionData.dev.latest_version_code
      }}
    </div>
    <div class="loaded txt-title">
      最新穩定版本:
      {{
        VersionData.stable.latest_version_code == null
          ? "無"
          : `${VersionData.stable.latest_version}.${VersionData.stable.latest_version_code}`
      }}
    </div>
    <div class="loaded txt-title">請選擇您的作業系統後將會開始下載:</div>
    <div class="loaded list">
      <div
        :key="0"
        :class="{
          hover: upHere == 0,
        }"
        class="loaded div-button"
        @click="PlatformSelect(0)"
        @mouseover="upHere = 0"
        @mouseleave="upHere = -1"
      >
        <img
          src="@/assets/images/RPMLauncher/Platform/Windows_10.svg"
          class="loaded svg"
        />
        <div class="loaded text">
          {{ OSList[0] }}
        </div>
      </div>
      <div
        :key="1"
        :class="{
          hover: upHere == 1,
        }"
        class="loaded div-button"
        @click="PlatformSelect(1)"
        @mouseover="upHere = 1"
        @mouseleave="upHere = -1"
      >
        <img
          src="@/assets/images/RPMLauncher/Platform/Windows_7.svg"
          class="loaded svg"
        />
        <div class="loaded text">{{ OSList[1] }}</div>
      </div>
      <div
        :key="2"
        :class="{
          hover: upHere == 2,
        }"
        class="loaded div-button"
        @click="PlatformSelect(2)"
        @mouseover="upHere = 2"
        @mouseleave="upHere = -1"
      >
        <img
          src="@/assets/images/RPMLauncher/Platform/Linux.svg"
          class="loaded svg"
        />
        <div class="loaded text">{{ OSList[2] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-components */

export default {
  name: "RWL-Version",
  data() {
    return {
      OSList: ["Windows 10/11", "Windows 7/8", "Linux"],
      VersionData: {
        dev: {},
        stable: {},
      },
      Platform: -1,
      upHere: -1,
    };
  },
  mounted() {
    $(".loadIng").show();
    $(".loaded").hide();
    $.getJSON(
      "https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/RPMLauncher/update.json",
      (data) => {
        $(".loadIng").hide();
        $(".loaded").show();
        this.VersionData = data;
      }
    ).fail((error) => {
      console.warn(error);
      $(".loadIng").html("<h1>錯誤，請稍後在試</h1>");
    });
  },
  components: {},
  methods: {
    addLen(_this) {
      this.nowLen <= parseInt(_this.parent(".nowLenData").attr("okLen"))
        ? (this.nowLen += 1)
        : null;
    },

    PlatformSelect(key) {
      this.Platform = key;
      let Dev = Object(this.VersionData.dev);
      let LatestVversion = String(Dev.latest_version);
      let LatestVversionCode = parseInt(Dev.latest_version_code);
      let VersionList = Object(this.VersionData.version_list);
      let VersionInfo = VersionList[LatestVversion][LatestVversionCode];

      let DownloadUrl = "";
      switch (this.Platform) {
        case 0:
          DownloadUrl = VersionInfo.download_url.windows_10_11;
          break;
        case 1:
          DownloadUrl = VersionInfo.download_url.windows_7;
          break;
        case 2:
          DownloadUrl = VersionInfo.download_url.linux;
          break;
        default:
          DownloadUrl = VersionInfo.download_url.windows_10_11;
          break;
      }

      window.open(DownloadUrl, "下載檔案", "width=500,height=620");
    },

    PlatformFocus(key) {
      console.log(key);
      this.FocusPlatform = key;
    },
  },
};
</script>

<style lang="scss" scoped>
.hover {
  background-color: rgb(77, 77, 77) !important;
}
.loadIng {
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
}
.loaded {
  display: flex;
  align-items: center;
  justify-content: center;
}
.div-button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 9em;
  background-color: var(--styleMode-background-color);
  border: 4px solid var(--styleMode-webkit-scrollbar);
  border-color: rgb(0, 0, 0);
  border-radius: 0.9em;
  padding: 5px;
  margin: 10px;
}
.setList {
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .text {
    display: flex;
    align-items: center;
  }
  .txt-title {
    font-weight: 700;
    font-size: 1.25rem;
  }
  .txt-dev {
    font-weight: 700;
    font-size: 1.5rem;
    color: rgb(243, 42, 42);
  }
  .svg {
    width: 80px;
    height: 80px;
  }
  p {
    font-size: 15pt;
  }
  @media all and (max-width: 660px) {
    p {
      font-size: 3vw !important;
    }
  }
}
</style>