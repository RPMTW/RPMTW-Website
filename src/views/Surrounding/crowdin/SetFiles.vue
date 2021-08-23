<template>
  <div id="SetFiles" class="flex flex-down flex-item-center">
    <h1>檔案選則頁面</h1>
    <div>
      <label for="fileName">請輸入檔案名稱: </label>
      <input
        type="text"
        id="fileName"
        v-model="fileName"
        @keyup.enter="getCurseFile"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import API from "./API.js";
export default {
  name: "SetFiles",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let _ = this;
    $(function () {
      API.functions
        .getCurseFile(_.$route.params.id)
        .done((d) => console.log(d));
    });
  },
};
</script>

<style lang="scss" scoped>
</style>