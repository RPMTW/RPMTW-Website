<template>
  <div id="MakeMod" class="flex" v-if="info">
    <div style="width: 15%">
      <img
        :src="(info.error && fake_website) || info.attachments[0].thumbnailUrl"
        class="modIcon"
        alt=""
      />
    </div>
    <div class="modeName">
      <h1 class="auto-overflow">
        {{ (info.error && modId) || info.name }}
      </h1>
    </div>
    <div>
      <a
        :href="info.websiteUrl"
        v-if="info.websiteUrl"
        aria-label="在CurseForge中查看此模組"
      >
        <img class="goBtn" src="@/assets/images/icons/go-left.svg" alt="" />
      </a>
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
    return {
      info: null,
      fake_website: require("@/assets/images/icons/fake-website.svg"),
    };
  },
  methods: {},
  mounted() {
    let _ = this;
    $(function () {
      API.functions
        .getCurseForgeModInfo(_.modId)
        .then((data) => (_.info = data));
    });
  },
  props: {
    modId: String,
  },
};
</script>

<style lang="scss" scoped>
#MakeMod {
  cursor: pointer;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  background-color: #aba499;
  padding: 20px;
  margin: 5px 0;
  border-radius: 10px;
  .modeName {
    width: 60%;
    text-align: left;
    .auto-overflow {
      width: 100%;
    }
  }
  &:hover {
    opacity: 0.8;
  }
  .modIcon {
    width: 128px;
    border-radius: 10px;
  }
  .goBtn {
    width: 32px;
    background-color: rgb(29, 29, 29);
    padding: 10px;
    border-radius: 50%;
    transform: rotate(90deg);
  }
}
</style>