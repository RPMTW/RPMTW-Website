<template>
  <div id="Test">
    <div nowLen="1" class="nowLenData">
      <div
        v-for="(value, key, index) in datas.versions"
        :key="(value, key, index)"
        :version="key"
        :class="{
          select: value.select,
        }"
        @click="versionSetSelect"
      >
        {{ key }}
      </div>
    </div>
    <div nowLen="2" class="nowLenData">
      <div
        v-for="key in datas.versions[finish.version] &&
        datas.versions[finish.version].platform"
        :key="key"
        :class="{
          select: datas.versions[finish.version].platformSelect === key,
        }"
        :platform="key"
        @click="platformSetSelect"
      >
        {{ key }}
      </div>
    </div>
    <button @click="addNowLen"></button>
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
      nowLen: 0,
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
      return this.nowLen <
        parseInt($(_this.target).parent(".nowLenData").attr("nowLen"))
        ? this.nowLen++
        : null;
    },

    versionSetSelect(_this) {
      let versions = this.datas.versions;
      _this = $(_this.target);

      Object.keys(versions).forEach((value) => {
        versions[value].select = false;
      });
      versions[_this.attr("version")].select = true;
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
      this.finish.platform = _this.attr("platform");

      this.addLen(_this);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.select {
  color: aqua;
}
</style>