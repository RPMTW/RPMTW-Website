<template>
  <div id="Test" class="setList">
    <Gate :nowLen="nowLen" okLen="1" class="nowLenData setVersion">
      <p class="txt-title">請選擇版本:</p>
      <div
        v-for="(value, key) in datas.versions"
        :key="(value, key)"
        :version="key"
        :class="{
          select: value.select,
        }"
        class="div-button"
        @click="versionSetSelect"
      >
        {{ key }}
      </div>
    </Gate>
    <Gate :nowLen="nowLen" okLen="2" class="nowLenData">
      <p class="txt-title">請選擇模組平台:</p>
      <div
        v-for="key in datas.versions[finish.version] &&
        datas.versions[finish.version].platform"
        :key="key"
        :platform="key"
        :class="{
          select: datas.versions[finish.version].platformSelect === key,
        }"
        class="div-button"
        @click="platformSetSelect"
      >
        {{ key }}
      </div>
      <strong style="text-align: center">
        <a v-if="!finish.platform && finish.version">
          Q:&ensp;<span style="color: red"
            >什麼是模組平台 (Mod Loader)<br
          /></span>
          A:&ensp;模組平台就類似蘋果手機與安卓手機的概念，不同的架構製作而成，可以依據你需要的平台來下載。
        </a>
      </strong>
    </Gate>
    <Gate :nowLen="nowLen" okLen="3" class="nowLenData output">
      <div
        target="_blank"
        v-show="
          datas.versions[finish.version] &&
          datas.versions[finish.version][finish.platform]
        "
        @click="download(finish.version, finish.platform)"
        class="div-button"
        style="--styleMode-background-color: rgb(45, 212, 191); color: black"
      >
        點我下載: {{ `${finish.version} (${finish.platform})` }}
      </div>
      <div class="txt-description" v-if="finish.platform === 'Fabric'">
        <p style="color: red">
          RPMTW 需要以下前置模組，請務必記得安裝，否則無法啟動遊戲!<br />
          (點擊下方圖片即可下載)
          <br />
          <br />
          <a
            target="_blank"
            style="color: var(--strong-color)"
            class="flex flex-down flex-item-center"
            :href="
              {
                '1.16.x':
                  'https://cdn.modrinth.com/data/P7dR8mSH/versions/0.36.0+1.16/fabric-api-0.36.0+1.16.jar',
                '1.17.x':
                  'https://cdn.modrinth.com/data/P7dR8mSH/versions/0.40.8+1.17/fabric-api-0.40.8+1.17.jar',
                '1.18.x':
                  'https://cdn.modrinth.com/data/P7dR8mSH/versions/0.42.8+1.18/fabric-api-0.42.8+1.18.jar',
              }[finish.version]
            "
          >
            <img
              src="@/assets/images/fabric_api_requires.png"
              style="width: 35em"
              alt=""
            />
          </a>
          <a
            target="_blank"
            v-if="finish.version !== '1.18.x'"
            style="color: var(--strong-color)"
            class="flex flex-down flex-item-center"
            href="https://maven.fabricmc.net/net/fabricmc/fabric-language-kotlin/1.6.5%2Bkotlin.1.5.31/fabric-language-kotlin-1.6.5%2Bkotlin.1.5.31.jar"
          >
            <img
              src="@/assets/images/fabric_kotlin_language_requires.png"
              style="width: 35em"
              alt=""
            />
          </a>
        </p>
      </div>
      <div class="txt-des" v-if="finish.platform">
        <p style="font-size: 18pt">
          模組下載完成後，請確定你已經安裝了
          {{ finish.platform }}
          ，接著將這些檔案放入 mods 資料夾裡面即可！
        </p>
      </div>
    </Gate>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-components */
import Gate from "@/components/Gate.vue";
import modDatas from "@/data/Versions.json";

/* setUp */
for (let i in modDatas) {
  modDatas[i].select = !1;
  modDatas[i].platformSelect = !1;
}

export default {
  name: "Test",
  data() {
    return {
      nowLen: 1,
      datas: {
        versions: modDatas,
      },
      finish: {
        version: null,
        platform: null,
      },
    };
  },
  components: {
    Gate,
  },
  methods: {
    addLen(_this) {
      this.nowLen <= parseInt(_this.parent(".nowLenData").attr("okLen"))
        ? (this.nowLen += 1)
        : null;
    },

    download(version, platform) {
      if (platform == "Fabric" && version !== "1.18.x") {
        alert(
          "模組下載完成後，請確定你已經安裝了 Fabric ，並且你已經安裝 Fabric API 與 Fabric Kotlin 這兩個前置模組 ，接著將這些檔案放入 mods 資料夾裡面即可！\n\n請務必安裝前置模組！\n請務必安裝前置模組！\n請務必安裝前置模組！\n\n很重要所以說三次！"
        );
      } else if (platform == "Fabric") {
        alert(
          "模組下載完成後，請確定你已經安裝了 Fabric ，並且你已經安裝 Fabric API 前置模組 ，接著將這些檔案放入 mods 資料夾裡面即可！\n\n請務必安裝前置模組！\n請務必安裝前置模組！\n請務必安裝前置模組！\n\n很重要所以說三次！"
        );
      } else if (platform == "Forge") {
        alert(
          "模組下載完成後，請確定你已經安裝了 Forge ，接著將 RPMTW 放入 mods 資料夾裡面即可！"
        );
      }

      let url =
        this.datas.versions[version] && this.datas.versions[version][platform];
      window.open(url);
    },

    versionSetSelect(_this) {
      let versions = this.datas.versions;
      _this = $(_this.target);

      Object.keys(versions).forEach((value) => {
        versions[value].select = false;
      });
      versions[_this.attr("version")].select = true;
      this.finish.platform = null;
      this.finish.version = _this.attr("version");

      this.addLen(_this);
    },
    platformSetSelect(_this) {
      let versions = this.datas.versions;
      _this = $(_this.target);

      Object.keys(versions).forEach((value) => {
        versions[value].platformSelect = null;
      });
      versions[this.finish.version].platformSelect = _this.attr("platform");
      this.finish.platform = null;
      this.finish.platform = _this.attr("platform");

      this.addLen(_this);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  background-color: rgb(45, 212, 191) !important;
  color: black;
}
.div-button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 9em;
  background-color: var(--styleMode-background-color);
  border: 1px solid var(--styleMode-webkit-scrollbar);
  padding: 5px;
  margin: 10px;
}
.setList {
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .txt-title {
    padding: 20px;
    font-weight: 700;
    font-size: 1.25rem;
  }
  .txt-description {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .txt-des {
    text-align: center;
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
