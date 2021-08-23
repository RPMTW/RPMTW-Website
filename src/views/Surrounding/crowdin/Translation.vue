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
      <select id="version">
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
    <div class="output flex flex-down flex-item-center">
      <MakeModInfo v-for="data in mods" :key="data" :modId="data" :a="data" />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import API from "./API.js";
import MakeModInfo from "./components/MakeMod.vue";
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
      resource: {},
    };
  },
  components: {
    MakeModInfo,
  },
  methods: {
    setAll() {
      let _ = this;
      _.data.version = Array.from($("#version option:checked")).map(
        (el) => el.value
      )[0];
      API.functions
        .getDirectories(_.data.version, _.data.modId, _.page)
        .done((data) => {
          _.mods = data.data.map(
            (value) =>
              (value = _.resource[_.data.version][value.data.name] || value.data.name)
          );
          console.log(_.mods);
        });
    },
  },
  mounted() {
    let _ = this;
    /* GET: 所有支援模組 */
    for (let version in Sets.VersionDirID) {
      API.functions
        .getCurseForgeIndex(version)
        .done((data) => (_.resource[version] = data));
    }
  },
};
</script>

<style lang="scss" scoped>
#ModTranslation {
  width: 80%;
  .output {
  }
}
</style>