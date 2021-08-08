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
        v-for="(value, key) in modDatas[finish.version]"
        :key="(value, key)"
        :class="{
          select: value.platformSelect,
        }"
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
      modDatas: require("@/data/Versions.json"),
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
      _this = $(_this.target).attr("version");

      Object.keys(versions).forEach((value) => {
        versions[value].select = false;
      });
      versions[_this].select = true;
      this.finish.version = _this;

      console.log(this.modDatas);
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