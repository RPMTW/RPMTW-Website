<template>
  <div id="Crowdin">
    <Login v-if="go" />
    <div class="CrowdinLogin-blurry"></div>
  </div>
</template>

<script>
import Login from "./Login.vue";
export default {
  name: "Crowdin",
  data() {
    return {
      go: true,
    };
  },
  components: {
    Login,
  },
  methods: {},
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