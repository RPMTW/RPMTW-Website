<template>
  <div id="RWL-Version" class="setList">
    <div class="loadIng" v-if="!load"><a>正在載入資料中，請稍後...</a></div>
    <div v-if="load" class="flex flex-item-center flex-down">
      <p class="txt-dev">
        注意: RPMLauncher
        目前仍是測試版軟體，目前有許多bug，不建議作為主要軟體使用。
      </p>
      <div
        class="txt"
        v-text="`最新開發版本: ${VersionData.dev.latest_version_full}`"
      ></div>
      <div class="txt">
        最新穩定版本:
        {{
          VersionData.stable.latest_version_full == null
            ? "無"
            : `${VersionData.stable.latest_version_full}`
        }}
      </div>
      <p class="txt">請選擇您的作業系統後將會開始下載:</p>
      <div class="list flex">
        <div
          class="div-button flex flex-down flex-item-center"
          v-for="(os, index) in OSList"
          :key="(os, index)"
          :name="os.name"
          @click="PlatformSelect(index)"
        >
          <img :src="os.icon" class="svg" />
        </div>
      </div>
      <div class="txt-title">更新日誌</div>
      <div class="changelogs">
        <div
          v-for="(val, key) in VersionList.slice(0, 20)"
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
          icon: require("@/assets/images/RPMLauncher/Platform/Linux-Appimage.svg"),
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
    PlatformSelect(key) {
      this.Platform = key;
      let Dev = Object(this.VersionData.dev);
      let VersionInfo = Object(this.VersionData.version_list)[
        String(Dev.latest_version_full)
      ];

      let data = {
        0: {
          alert:
            "下載檔案後請執行 RPMLauncher-Windows-Installer.exe 即可安裝 RPMLauncher",
          DownloadUrl: VersionInfo.download_url.windows,
        },
        2: {
          alert:
            "下載檔案後請解壓縮，並執行 rpmlauncher (如無法開啟記得改為可執行檔案) 即可開啟 RPMLauncher",
          DownloadUrl: VersionInfo.download_url.linux,
        },
        3: {
          alert:
            "執行 RPMLauncher-Linux.AppImage (如無法開啟記得改為可執行檔案) 即可開啟 RPMLauncher",
          DownloadUrl: VersionInfo.download_url["linux-appimage"],
        },
        4: {
          alert:
            "第一次執行 RPMLauncher 時若顯示『Apple 無法檢查是否包含惡意軟體』等內容，請開啟「系統偏好設定」，進入「安全性與隱私權」類別，選擇強制開啟。",
          DownloadUrl: VersionInfo.download_url.macos,
        },
      };
      data = data[this.Platform] || data[0];
      alert(data.alert);
      window.open(data.DownloadUrl, "下載檔案");
    },
  },
};
</script>

<style lang="scss" scoped>
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
  width: 95%;
  justify-content: space-evenly;
  > div {
    width: 20%;
  }
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
