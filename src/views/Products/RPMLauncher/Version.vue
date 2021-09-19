<template>
  <div id="RWL-Version" class="setList">
    <div class="loadIng"><a>正在載入資料中，請稍後...</a></div>
    <p class="loaded txt-dev">
      注意: RPMLauncher
      目前仍是測試版軟體，目前有許多bug，不建議作為主要軟體使用。
    </p>
    <div class="loaded txt">
      最新開發版本: {{ VersionData.dev.latest_version }}.{{
        VersionData.dev.latest_version_code
      }}
    </div>
    <div class="loaded txt">
      最新穩定版本:
      {{
        VersionData.stable.latest_version_code == null
          ? "無"
          : `${VersionData.stable.latest_version}.${VersionData.stable.latest_version_code}`
      }}
    </div>
    <p class="loaded txt">請選擇您的作業系統後將會開始下載:</p>
    <div class="loaded list">
      <div :key="0" class="loaded div-button" @click="PlatformSelect(0)">
        <img
          src="@/assets/images/RPMLauncher/Platform/Windows_10.svg"
          class="loaded svg"
        />
        <div class="text-hover">
          {{ OSList[0] }}
        </div>
      </div>
      <div :key="1" class="loaded div-button" @click="PlatformSelect(1)">
        <img
          src="@/assets/images/RPMLauncher/Platform/Windows_7.svg"
          class="loaded svg"
        />
        <div class="text-hover">{{ OSList[1] }}</div>
      </div>
      <div :key="2" class="loaded div-button" @click="PlatformSelect(2)">
        <img
          src="@/assets/images/RPMLauncher/Platform/Linux.svg"
          class="loaded svg"
        />
        <div class="text-hover">{{ OSList[2] }}</div>
      </div>
    </div>
    <div :key="3" class="loaded div-button" @click="PlatformSelect(3)">
      <img
        src="@/assets/images/RPMLauncher/Platform/MacOS.svg"
        class="loaded svg"
      />
      <div class="text-hover">{{ OSList[3] }}</div>
    </div>
    <div class="loaded txt-title">更新日誌</div>
    <div class="changelogs">
      <div v-for="(val, key) in VersionList" :key="key">
        <div class="changelog">
          <div
            :class="{
              'changelog-type-dev': val.type == 'dev',
              'changelog-type-stable': val.type == 'stable',
            }"
          >
            {{ val.version }}
          </div>
          <li class="changelog-message">{{ val.changelog }}</li>
          <!-- <div
            :class="{
              'changelog-type-dev': val.type == 'dev',
              'changelog-type-stable': val.type == 'stable',
            }"
          >
            {{ val.type == "stable" ? "穩定版" : "開發版" }}
          </div> -->
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
      OSList: ["Windows 10/11", "Windows 7/8", "Linux", "MacOS"],
      VersionData: {
        dev: {},
        stable: {},
      },
      VersionList: [],
      Platform: -1,
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

        Object.keys(data.version_list).forEach((_MainVersionID) => {
          Object.keys(data.version_list[_MainVersionID]).forEach(
            (_VersionCode) => {
              data.version_list[_MainVersionID][_VersionCode]["version"] =
                _MainVersionID + "." + _VersionCode;
              this.VersionList.push(
                data.version_list[_MainVersionID][_VersionCode]
              );
            }
          );
        });
        this.VersionList.reverse();
      }
    ).fail((error) => {
      console.warn(error);
      $(".loadIng").html("<h1>錯誤，請稍後在試</h1>");
    });
  },
  components: {},
  methods: {
    PlatformSelect(key) {
      this.Platform = key;
      let Dev = Object(this.VersionData.dev);
      let LatestVversion = String(Dev.latest_version);
      let LatestVversionCode = parseInt(Dev.latest_version_code);
      let VersionList = Object(this.VersionData.version_list);
      let VersionInfo = VersionList[LatestVversion][LatestVversionCode];

      let DownloadUrl = "";
      switch (this.Platform) {
        case 0: // Windows 10/11
          alert(
            "下載檔案完成後請解壓縮，並且執行 Install.bat 即可開始安裝 RPMLauncher"
          );
          DownloadUrl = VersionInfo.download_url.windows_10_11;
          break;
        case 1:
          alert(
            "下載檔案完成後請解壓縮，並且執行 rpmlauncher.exe 即可開啟 RPMLauncher"
          );
          DownloadUrl = VersionInfo.download_url.windows_7;
          break;
        case 2:
          alert(
            "下載檔案完成後請解壓縮，並且執行 rpmlauncher (如無法開啟記得先給權限) 即可開啟 RPMLauncher"
          );
          DownloadUrl = VersionInfo.download_url.linux;
          break;
        case 3:
          alert(
            "下載檔案完成後請解壓縮，並且執行 rpmlauncher.app (如無法開啟記得先給權限) 即可開啟 RPMLauncher"
          );
          DownloadUrl = VersionInfo.download_url.macos;
          break;
        default:
          alert(
            "下載檔案完成後請解壓縮，並且執行 Install.bat 即可開始安裝 RPMLauncher"
          );
          DownloadUrl = VersionInfo.download_url.windows_10_11;
          break;
      }

      window.open(DownloadUrl, "下載檔案");
    },
  },
};
</script>

<style lang="scss" scoped>
.div-button:hover {
  background-color: rgb(77, 77, 77);
}

.div-button:hover .text-hover {
  display: block;
}
.text-hover {
  display: none;
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
  border-color: rgba(95, 178, 246, 0.616);
  border-radius: 0.9em;
  padding: 40px;
  margin: 10px;
}

.changelogs {
  align-items: center;
  text-align: center;
  margin-top: 30px;
  padding-left: 50px;
  padding-right: 50px;
  border: 4px solid var(--styleMode-webkit-scrollbar);
  border-color: rgba(95, 178, 246, 0.616);
  border-radius: 0.9em;

  .changelog {
    align-items: center;

    &:hover {
      background-color: rgb(38, 39, 39);
    }
    .changelog-message {
      font-size: 1.25rem;
      color: rgb(93, 181, 253);
    }
    .changelog-type-dev {
      font-weight: 700;
      margin: 10px;
      font-size: 1.5rem;
      color: rgb(246, 102, 102);
    }
    .changelog-type-stable {
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
    width: 80px;
    height: 80px;
    margin-left: 30px;
    margin-right: 30px;
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