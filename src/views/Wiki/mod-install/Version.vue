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
            >什麼是模組平台(Mod Loader)<br
          /></span>
          A:&ensp;模組平台就類似蘋果手機與安卓手機的概念，不同的架構製作而成，可以依據你需要的平台來下載。
        </a>
      </strong>
    </Gate>
    <Gate :nowLen="nowLen" okLen="3" class="nowLenData output">
      <a
        target="_blank"
        v-show="
          datas.versions[finish.version] &&
          datas.versions[finish.version][finish.platform]
        "
        :href="
          datas.versions[finish.version] &&
          datas.versions[finish.version][finish.platform]
        "
        class="div-button"
      >
        點我下載: {{ `${finish.version} (${finish.platform})` }}
      </a>
      <div class="txt-des" v-if="finish.platform">
        <p>
          按下上方下載按鈕後 將會進入一個網頁 找到
          <span style="color: red"> Download </span>
          按鈕即可下載
        </p>
        <img src="@/assets/images/download.png" alt="" />
      </div>
      <div class="txt-description" v-if="finish.platform === 'fabric'">
        <p style="color: red">
          如果您沒有安裝 RPMTW 的前置模組 Fabric API，請務必記得安裝歐!!<br />
          <a
            target="_blank"
            style="color: var(--strong-color)"
            :href="
              {
                '1.16.x':
                  'https://cdn.modrinth.com/data/P7dR8mSH/versions/0.36.0+1.16/fabric-api-0.36.0+1.16.jar',
                '1.17.x':
                  'https://cdn.modrinth.com/data/P7dR8mSH/versions/0.37.0+1.17/fabric-api-0.37.0+1.17.jar',
              }[finish.version]
            "
          >
            點我安裝 Fabric API
          </a>
        </p>
      </div>
      <div class="txt-des" v-if="finish.platform">
        <p style="foot-size: 18pt">
          模組下載完成後，請確定你已經安裝了
          {{ finish.platform }}
          ，並且沒有修改預設模組儲存位置，<br />
          那麼請將此檔案放入該資料夾下的 mods 資料夾裡面即可！
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