<template>
  <a
    id="MakeMod"
    class="flex"
    v-if="info"
    :href="`${BASE_URL || '/'}Translator/AssistTranslation/${
      modData.data.directoryId
    }`"
  >
    <div class="flex flex-item-center modDescription">
      <img
        :src="
          ((info.error || !info.attachments[0]) && fake_website) ||
          info.attachments[0].thumbnailUrl
        "
        class="modIcon"
        alt=""
      />
      <div class="modeName">
        <h1 class="auto-overflow">
          {{
            ((info.error || !info.attachments[0]) && modData.modName) ||
            info.name
          }}
        </h1>
      </div>
    </div>
    <a :href="info.websiteUrl" v-show="info.websiteUrl">
      <img
        class="goBtn"
        src="@/assets/images/icons/go-left.svg"
        aria-label="在CurseForge中查看此模組"
        alt=""
      />
    </a>
  </a>
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
      BASE_URL: process.env.BASE_URL,
    };
  },
  methods: {},
  mounted() {
    let _ = this;
    $(function () {
      console.log(_.modData);
      API.functions
        .getCurseForgeModInfo(_.modData.modName)
        .then((data) => (_.info = data));
    });
  },
  props: {
    modData: String,
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
  position: relative;
  .modDescription {
    width: 100%;
    .modeName {
      text-align: left;
      padding-left: 10px;
      width: 100%;
      .auto-overflow {
        max-width: 60%;
      }
    }
  }
  &:hover {
    opacity: 0.8;
  }
  .modIcon {
    width: 128px;
    height: 128px;
    border-radius: 10px;
  }
  .goBtn {
    position: absolute;
    width: 32px;
    background-color: rgb(29, 29, 29);
    padding: 10px;
    top: 60px;
    right: 32px;
    border-radius: 50%;
    transform: rotate(90deg);
  }
}
</style>