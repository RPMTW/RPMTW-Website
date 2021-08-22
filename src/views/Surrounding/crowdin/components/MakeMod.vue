<template>
  <div id="MakeMod">
    <div class="flex">
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import API from "../API.js";
export default {
  name: "MakeMod",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let _ = this;
    $(function () {
      API.functions
        .getCurseForgeModInfo(_.modData.id)
        .done((data) => (_.modData = data));
    });
  },
  props: {
    modData: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>