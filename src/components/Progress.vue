<template>
  <div class="ProgressEx">
    <div class="child">
      <h1 :ref="'version-txt-' + version" class="version-txt"></h1>
      <div :ref="'process-' + version" class="process-animate">
        <h1 :ref="'txt-' + version">正在載入資料中，請稍後...</h1>
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
  mounted() {
    let version = this.version;
    let Title = this.Title;
    let text = $(this.$refs[`txt-${version}`]);
    let process = $(this.$refs[`process-${version}`]);

    $(this.$refs[`version-txt-${version}`]).html(Title || version);
    $(function () {
      let loop = () => {
        $.getJSON(
          "https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/progress.json",
          (data) => {
            $(text).html(data[version]);
            $(process).animate(
              { right: `${100 - parseInt(data[version])}%` },
              { speed: 10e3, step: (now) => $(process).css("right", now) }
            );
          }
        ).fail((error) => {
          $(text).html("<h1>錯誤，請稍後在試</h1>");
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
    }
  }
}
</style>
