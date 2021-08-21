<template>
  <div id="Crowdin">
    <Login v-if="go" @go="() => (go = false)" />
    <div
      :class="{
        'CrowdinLogin-blurry': go,
      }"
    ></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import Login from "./Login.vue";
export default {
  name: "Crowdin",
  data() {
    return {
      go: null,
    };
  },
  components: {
    Login,
  },
  methods: {},
  mounted() {
    this.go = getCookie("/user");
  },
};
</script>

<style lang="scss" scoped>
#Crowdin {
  .CrowdinLogin-blurry {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    background-color: #000;
  }
}
</style>