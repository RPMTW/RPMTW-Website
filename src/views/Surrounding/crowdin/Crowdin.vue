<template>
  <div id="Crowdin" class="flex flex-down flex-item-center">
    <div
      :class="{
        'CrowdinLogin-blurry': go,
      }"
    ></div>
    <div
      class="output"
      v-show="output"
      :class="{
        isOk: isOK,
      }"
    >
      <div class="close icon x" @click="output = null"></div>
      <div
        v-if="Object.keys(output || {}).length > 0"
        class="userInfo flex flex-item-center"
      >
        <img :src="output.avatarUrl" alt="" />
        <p v-text="`${output.fullName}(${output.username}) 登入成功!!`"></p>
      </div>
    </div>
    <Login v-if="go" @go="go = false" />
    <Translation v-else />
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import API from "./API.js";
import Login from "./Login.vue";
import Translation from "./Translation.vue";
export default {
  name: "Crowdin",
  data() {
    return {
      go: null,
      output: null,
    };
  },
  components: {
    Login,
    Translation,
  },
  methods: {},
  mounted() {
    API.getData("/user")
      .done((data) => {
        this.go = !Object.keys(data).length > 0;
        this.output = data.data;
        setTimeout(() => (this.output = null), 3e3);
      })
      .catch((error) => {
        this.go = true;
        if (error.status === 401) this.go = true;
      });
    /* API.functions.getDirectories().done((data) => {
      console.log(data);
    }); */
  },
};
</script>

<style lang="scss" scoped>
#Crowdin {
  position: relative;
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
  .output {
    padding: 0.5% 4%;
    border-radius: 5px;
    background-color: #49b66e;
    position: absolute;
    top: 2%;
    .close {
      cursor: pointer;
      position: absolute;
      top: 8px;
      right: 8px;
    }
    .userInfo {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
  }
}
</style>