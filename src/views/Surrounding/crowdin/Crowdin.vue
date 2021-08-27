<template>
  <div id="Crowdin">
    <div class="Crowdin-header flex flex-center flex-item-center">
      <h1 v-text="header.headerTitle"></h1>
    </div>
    <router-view class="content" name="content" />
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
document.location.href = "https://translator.rpmtw.ga/index.html";
export default {
  name: "Crowdin",
  data() {
    return {
      header: {
        headerTitle: "",
      },
    };
  },
  computed: {},
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
  .content {
    position: relative;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}
</style>