<template>
  <div id="ModVersion"></div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Versions from "@/data/Versions.json";
export default {
  name: "ModVersion",
  data() {
    return {
      versions: Versions,
    };
  },
  mounted() {
    let version = this.version;
    $(function () {
      console.log("");
    });
  },
};
</script>

<style lang="scss" scoped>
</style>