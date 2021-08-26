<template>
  <div id="GetMods">
    <div>
      <div>
        <label for="modName">請輸入模組名稱:</label>
        <input type="text" id="modName" />
      </div>
    </div>
    <div class="output">
      <MakeMod />
    </div>
  </div>
</template>

<script>
import MakeMod from "./components/MakeMod.vue";
import API from "./API";
export default {
  name: "GetMods",
  data() {
    return {};
  },
  methods: {
    setOk() {
      API.getModsByVersion("");
    },
  },
  components: {
    MakeMod,
  },
};
</script>

<style lang="scss" scoped>
</style>