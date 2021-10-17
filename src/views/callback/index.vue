<template>
  <div v-text="showTxt"></div>
</template>

<script>
export default {
  name: "callback",
  data() {
    return {
      showTxt: "loadding",
    };
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get("token");
    let type = urlParams.get("type");
    if (
      token &&
      ["discord", "crowdin"].includes(type) &&
      window.opener.window
    ) {
      window.opener.window[`token_${type}`] = token;
      window.opener.window.dispatchEvent(new CustomEvent(`ok_${type}`));
      window.close();
    } else {
      this.showTxt = "錯誤!!";
      setTimeout(() => window.close(), 1e3 * 10);
    }
  },
};
</script>

<style>
</style>