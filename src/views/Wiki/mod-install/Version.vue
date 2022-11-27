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
      <div class="txt-des" v-if="finish.platform">
        <p style="font-size: 18pt">
          模組下載完成後，請確定你已經安裝了
          {{ finish.platform }}
          以及前置模組，接著將這些檔案放入 mods 資料夾裡面即可！
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
      if (version == "1.12.2") {
        alert(
          "模組下載完成後，請確定你已經安裝了 Forge ，接著將 RPMTW 放入 mods 資料夾裡面即可！"
        );
      } else {
        if (platform == "Fabric") {
          alert(
            "模組下載完成後，請確定你已經安裝了 Fabric ，並且你已經安裝 Fabric API、Cloth Config API、Fabric Language Kotlin、Architectury API 前置模組 ，接著將這些檔案放入 mods 資料夾裡面即可！\n\n請務必安裝前置模組！\n請務必安裝前置模組！\n請務必安裝前置模組！\n\n很重要所以說三次！"
          );
        }
        if (platform == "Quilt") {
          alert(
            "模組下載完成後，請確定你已經安裝了 Quilt ，並且你已經安裝 Quilted Fabric API、Cloth Config API、Fabric Language Kotlin、Architectury API 前置模組 ，接著將這些檔案放入 mods 資料夾裡面即可！\n\n請務必安裝前置模組！\n請務必安裝前置模組！\n請務必安裝前置模組！\n\n很重要所以說三次！"
          );
        }
        if (platform == "Forge") {
          alert(
            "模組下載完成後，請確定你已經安裝了 Forge ，並且你已經安裝 Cloth Config API、Kotlin for Forge、Architectury API 前置模組 ，接著將這些檔案放入 mods 資料夾裡面即可！\n\n請務必安裝前置模組！\n請務必安裝前置模組！\n請務必安裝前置模組！\n\n很重要所以說三次！"
          );
        }
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
