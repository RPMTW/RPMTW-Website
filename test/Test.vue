<template>
  <div></div>
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
}
</style>