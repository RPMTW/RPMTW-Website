<template>
  <div id="ModTranslation">
    <div class="sets">
      <label for="modId">搜尋模組</label>
      <input
        type="text"
        id="modId"
        placeholder="請輸入模組ID"
        v-model="data.modId"
        @keyup.enter="setAll"
      />
      <div class="btn" @click="setAll">搜尋</div>
      <select id="version" @click="setAll">
        <option
          :key="(value = Object.keys(Sets.VersionDirID)[0])"
          :value="value"
        >
          {{ value }}
        </option>
        <option
          v-for="value in Object.keys(Sets.VersionDirID).slice(1)"
          :key="value"
          :value="value"
        >
          {{ value }}
        </option>
      </select>
    </div>
    <div class="output">
      <div v-for="mod in mods" :key="mod">{{ mod }}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import API from "./API.js";
export default {
  name: "ModTranslation",
  data() {
    return {
      Sets: window.Sets,
      data: {
        version: null,
        modId: null,
      },
      mods: null,
      page: 0,
      resource: null,
    };
  },
  methods: {
    setAll() {
      let _ = this;
      _.data.version = Array.from($("#version option:checked")).map(
        (el) => el.value
      )[0];
      API.functions.getAllModIndex(this);
      API.functions
        .getDirectories(_.data.version, _.data.modId, _.page)
        .done((data) => {
          _.mods = data.data.map((value) => {
            value = value.data;
            return {
              img: value,
            };
          });
        });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>