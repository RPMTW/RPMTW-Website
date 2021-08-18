<template>
  <div class="ProgressEx">
    <div class="child">
      <h1 :ref="`version-txt-${version}`" class="version-txt auto-overflow">
        {{ version_txt_title }}
      </h1>
      <div :ref="`process-${version}`" class="process-animate">
        <h1
          :ref="`txt-${version}`"
          :more="more"
          class="text-center"
          :class="{
            more: more,
          }"
        >
          {{ text || "正在載入資料中，請稍後..." }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  name: "Progress",
  props: {
    version: String,
    Title: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      version_txt_title: null,
      text: null,
      more: null,
    };
  },
  mounted() {
    let version = this.version;
    let process = $(this.$refs[`process-${version}`]);
    this.version_txt_title = this.Title || version;
    let _ = this;

    $(function () {
      let loop = () => {
        $.getJSON(
          "https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/progress.json",
          (data) => {
            _.text = data[version];
            _.more =
              (data.data[version] &&
                `( ${data.data[version].total} / ${data.data[version].translated} )`) ||
              "";
            $(process).animate(
              { right: `${100 - parseInt(data[version])}%` },
              { speed: 10e3, step: (now) => $(process).css("right", now) }
            );
          }
        ).fail((error) => {
          _.text = "錯誤，請稍後在試";
        });
      };
      loop();
      setInterval(loop, 60e3 * 60 * 5); /* 5hr */
    });
  },
};
</script>

<style lang="scss" scoped>
.ProgressEx {
  .child {
    position: relative;
    height: 100px;
    border: var(--styleMode-color) 2px solid;
    top: 0;
    margin: 0 10%;
    .version-txt {
      text-align: center;
      position: relative;
      top: -2em;
      margin-top: 5px;
    }
    .process-animate {
      color: black;
      background: #6be499;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 100%;
      &:hover h1.more {
        &:after,
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        &:after {
          display: flex;
          flex-direction: column;
          align-items: center;
          content: attr(more);
          top: 70% !important;
        }
        &:before {
          background-color: #000;
          opacity: 0.2;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
