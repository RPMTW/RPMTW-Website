<template>
  <div id="Crowdin">
    <div class="Crowdin-header flex flex-center flex-item-center">
      <h1 v-text="header.headerTitle"></h1>
    </div>
    <div class="Crowdin-content">
      <components :is="nowContent" />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import GetMods from "./GetMods";
export default {
  name: "Crowdin",
  data() {
    return {
      header: {
        headerTitle: "RPMTWTranslator-RPMTW 模組專屬翻譯器-2號",
      },
      newContent: "getMods",
    };
  },
  components: {
    GetMods,
  },
};
</script>

<style lang="scss" scoped>
#Crowdin {
  width: 100%;
  height: 100%;
  .Crowdin-header {
    position: relative;
    top: 0;
  }
  .Crowdin-content {
    position: relative;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}
</style>