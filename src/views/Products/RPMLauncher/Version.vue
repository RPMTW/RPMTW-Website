<template>
  <div id="RWL-Version" class="setList">
    <h1 class="text-center">下載 RPMLauncher</h1>
    <div class="loadIng" v-if="!load"><a>正在載入資料中，請稍後...</a></div>
    <div v-if="load" class="flex flex-item-center flex-down">
      <h1 class="channel">穩定版</h1>
      <p class="txt">
        目前穩定版版本:
        {{ VersionData.stable.latest_version_full }}
      </p>
      <div class="list flex">
        <div
          class="div-button flex flex-down flex-item-center"
          v-for="(os, index) in OSList"
          :key="(os, index)"
          :name="os.name"
          @click="PlatformSelect(index, 'stable')"
        >
          <img :src="os.icon" class="svg" />
        </div>
      </div>
      <h1 class="channel">開發人員測試版</h1>
      <p
        class="txt"
        v-text="`目前開發人員版本: ${VersionData.dev.latest_version_full}`"
      ></p>
      <div class="list flex">
        <div
          class="div-button flex flex-down flex-item-center"
          v-for="(os, index) in OSList"
          :key="(os, index)"
          :name="os.name"
          @click="PlatformSelect(index, 'dev')"
        >
          <img :src="os.icon" class="svg" />
        </div>
      </div>
      <div class="txt-title">更新日誌</div>
      (前 25 個版本)
      <div class="changelogs">
        <div
          v-for="(val, key) in VersionList.slice(0, 25)"
          :key="key"
          class="changelog"
          :class="{
            'type-dev': val.type == 'dev',
            'type-stable': val.type == 'stable',
          }"
        >
          {{ val.version }}
          <p
            class="message"
            style="white-space: pre-line"
            v-text="val.changelog"
          ></p>
        </div>
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
      load: false,
      OSList: [
        {
          name: "Windows",
          icon: require("@/assets/images/RPMLauncher/Platform/Windows_10.svg"),
        },
        {
          name: "Linux",
          icon: require("@/assets/images/RPMLauncher/Platform/Linux.svg"),
        },
        {
          name: "Linux (AppImage)",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/App-image-logo.svg/1024px-App-image-logo.svg.png",
        },
        {
          name: "Linux (Deb)",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Application-x-deb.svg/64px-Application-x-deb.svg.png",
        },
        {
          name: "MacOS",
          icon: require("@/assets/images/RPMLauncher/Platform/MacOS.svg"),
        },
      ],
      VersionData: {
        dev: {},
        stable: {},
      },
      VersionList: [],
      Platform: -1,
    };
  },
  mounted() {
    $.getJSON(
      "https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/RPMLauncher/update.json",
      (data) => {
        this.load = true;
        this.VersionData = data;

        Object.keys(data.version_list).forEach((version) => {
          data.version_list[version]["version"] = version;
          this.VersionList.push(data.version_list[version]);
        });
        this.VersionList.reverse();

        console.log(this.VersionList);
      }
    ).fail((error) => {
      console.warn(error);
      $(".loadIng").html("<h1>錯誤，請稍後再試</h1>");
    });
  },
  components: {},
  methods: {
    PlatformSelect(key, channel) {
      this.Platform = key;
      let ChannelMap = Object(this.VersionData[channel]);
      let VersionInfo = Object(this.VersionData.version_list)[
        String(ChannelMap.latest_version_full)
      ];

      let data = {
        0: {
          alert:
            "下載檔案後請執行 RPMLauncher-Windows-Installer.exe 即可安裝 RPMLauncher",
          DownloadUrl: VersionInfo.download_url.windows,
        },
        1: {
          DownloadUrl: VersionInfo.download_url.linux,
        },
        2: {
          DownloadUrl: VersionInfo.download_url["linux-appimage"],
        },
        3: {
          DownloadUrl: VersionInfo.download_url["linux-deb"],
        },
        4: {
          alert:
            "第一次執行 RPMLauncher 時若顯示『Apple 無法檢查是否包含惡意軟體』等內容，請開啟「系統偏好設定」，進入「安全性與隱私權」類別，選擇強制開啟。",
          DownloadUrl: VersionInfo.download_url.macos,
        },
      };
      data = data[this.Platform] || data[0];
      if (data.alert != undefined) {
        alert(data.alert);
      }
      window.open(data.DownloadUrl, "下載檔案");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/SurroundingMain.scss";

.text-hover {
  display: none;
}
.loadIng {
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
}
.div-button {
  margin: 10px;
  border-radius: 10px;
  background-color: var(--styleMode-background-color);
  border: 4px solid var(--styleMode-webkit-scrollbar);
  border-color: rgba(95, 178, 246, 0.616);
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: rgb(77, 77, 77);
    img {
      opacity: 0.5;
    }
    &:before {
      z-index: 10;
      position: absolute;
      content: attr(name);
      text-align: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20pt;
    }
  }
}
.list {
  margin-bottom: 30px;
  width: 130%;
  justify-content: space-evenly;
  > div {
    width: 20%;
  }
}

.channel {
  color: rgb(42, 169, 243);
}

.changelogs {
  width: 80%;
  align-items: center;
  text-align: left;
  margin-top: 30px;
  border: 4px solid var(--styleMode-webkit-scrollbar);
  border-color: rgba(95, 178, 246, 0.616);
  border-radius: 0.9em;

  .changelog {
    align-items: center;
    padding: 5px;
    border-radius: 10px;

    &:hover {
      background-color: rgb(53, 52, 52);
    }
    .message {
      font-size: 1.25rem;
      color: rgb(93, 181, 253);
    }
    &.type-dev {
      font-weight: 700;
      margin: 10px;
      font-size: 1.5rem;
      color: rgb(246, 102, 102);
    }
    &.type-stable {
      font-weight: 700;
      font-size: 1.5rem;
      margin: 10px;
      color: rgb(39, 243, 148);
    }
  }
}

.setList {
  display: flex;
  flex-direction: column;
  align-items: center;

  .txt-title {
    font-weight: 700;
    font-size: 2rem;
  }
  .txt {
    font-weight: 700;
    font-size: 1.25rem;
  }
  .txt-dev {
    font-weight: 700;
    font-size: 1.5rem;
    color: rgb(243, 42, 42);
  }
  .svg {
    width: 50px;
    height: 50px;
    margin: 30px 0;
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
