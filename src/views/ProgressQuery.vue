<template>
  <div id="ProgressQuery">
    <h1>{{ i18n("ProgressQuery.title") }}</h1>
    <h3 class="pageInfo">
      {{ i18n("ProgressQuery.description.0") }}<br />
      {{ i18n("ProgressQuery.description.1") }}
    </h3>
    <div class="sets flex">
      <div>
        <input
          id="search"
          type="text"
          :placeholder="i18n('ProgressQuery.please.enter.CurseForgeID')"
          :aria-label="i18n('ProgressQuery.please.enter.CurseForgeID')"
          @keyup.enter="generateList"
          @change="generateList"
          v-model="search"
        />
      </div>
      <div class="flex filter">
        <label
          >{{ i18n("ProgressQuery.Filter.condition") }}:
          <div class="dropdown">
            <p class="dropHover">{{ i18n("public.Game.version") }}</p>
            <div class="dropdownContent">
              <p @click="chosen" click-type="1.12" class="chosen">1.12</p>
              <p @click="chosen" click-type="1.16" class="chosen">1.16</p>
              <p @click="chosen" click-type="1.17" class="chosen">1.17</p>
            </div>
          </div>
        </label>
      </div>
    </div>
    <div class="output flex"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import main from "@/i18n.js";
function i18n(val, value = "") {
  return (
    main.i18nData[main.getLang()][val] ||
    main.i18nData[main.set.main][val] ||
    value
  );
}
let setRoundProgress = () => {
  for (let i of $(".circle-bar")) {
    let txt = $(i).find(".mask .percent");
    if (!txt.text().includes("NaN")) {
      let percent = parseInt(txt.text());
      let baseColor = $(i).css("background-color");
      if (percent <= 50) {
        $(i)
          .find(".circle-bar-right")
          .css("transform", `rotate(${percent * 10}deg)`);
      } else {
        $(i).find(".circle-bar-right").css({
          transform: "rotate(0deg)",
          "background-color": baseColor,
        });
        $(i)
          .find(".circle-bar-left")
          .css("transform", `rotate(${(percent - 50) * 3.6}deg)`);
      }
    } else {
      txt.text("0%");
    }
  }
};
let checkInValue = (these) => {
  let _class = these.attr("class");
  return (_class ? _class.split().includes("chosen") : false)
    ? these.attr("click-type")
    : null;
};
export default {
  name: "ProgressQuery",
  data() {
    return {
      search: "",
      datas: [],
    };
  },
  methods: {
    i18n: i18n,
    chosen(e) {
      $(e.target).toggleClass("chosen");
    },
    generateList() {
      let txt = this.search,
        mainData = this.datas;
      let searchData = [
        mainData[checkInValue($(".dropdownContent p[click-type='1.12']"))],
        mainData[checkInValue($(".dropdownContent p[click-type='1.16']"))],
        mainData[checkInValue($(".dropdownContent p[click-type='1.17']"))],
      ];
      $(".output").html("");
      let l = 0;
      if (txt) {
        for (let i of searchData) {
          if (i) {
            Object.keys(i).map((val) => {
              if (++l > 25) return;
              if (val.includes(txt) || i[val].ModID.includes(txt)) {
                /* 有點想用jsx ing */
                $(".output").append(
                  `<div><div><h5>CurseForgeID: ${val}<br>模組ID: ${
                    i[val].ModID
                  }<h5></div><div class="circle-bar"><div class="circle-bar-left"></div><div class="circle-bar-right"></div><div class="mask"><span class="percent">${parseInt(
                    i[val].Progress
                  )}%</span></div></div></div>`
                );
              }
            });
          }
        }
      } else {
        for (let i of searchData) {
          if (i) {
            Object.keys(i).map((val) => {
              if (++l > 10) return;
              $(".output").append(
                `<div><div><h5>CurseForgeID: ${val}<br>模組ID: ${
                  i[val].ModID
                }<h5></div><div class="circle-bar"><div class="circle-bar-left"></div><div class="circle-bar-right"></div><div class="mask"><span class="percent">${parseInt(
                  i[val].Progress
                )}%</span></div></div></div>`
              );
            });
          }
        }
      }
      if ($(".output").html().length < 0) {
        $(".output").html("無");
      }
      setRoundProgress();
    },
  },
  mounted() {
    ["1.12", "1.16", "1.17"].map((item) => {
      $.getJSON(
        `https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/CrowdinIndex-${item}.json`,
        (data) => {
          this.datas[item] = data;
        }
      );
    });
  },
};
</script>

<style lang="scss" >
#ProgressQuery {
  .pageInfo {
    text-align: center;
    color: var(--strong-color);
    font-size: 15pt;
  }
  h1 {
    text-align: center;
    color: var(--styleMode-color);
    font-size: 35pt;
  }
  .circle-bar {
    font-size: 50px;
    width: 40px;
    height: 40px;
    position: relative;
    background-color: #333;
  }

  .circle-bar-left,
  .circle-bar-right {
    width: 40px;
    height: 40px;
    background-color: #eee;
  }

  .circle-bar-right {
    margin: 0;
    clip: rect(0, auto, auto, 20px);
  }

  .circle-bar-left {
    margin: 0;
    clip: rect(0, 20px, auto, 0);
  }

  .mask {
    width: 30px;
    height: 30px;
    background-color: #fff;
    text-align: center;
    line-height: 0.2em;
    color: rgb(253, 15, 15);
  }

  .mask :first-child {
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    display: block;
  }

  .circle-bar * {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .circle-bar,
  .circle-bar > * {
    border-radius: 50%;
  }

  .dropHover {
    color: white;
    padding: 8px;
    background-color: #6345e9;
    text-align: center;
    margin: 0;
  }

  .dropdown {
    width: 100px;
    position: relative;
    display: inline-block;
    margin-left: 8px;
  }

  .dropdownContent {
    text-align: center;
    z-index: 1;
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    padding: 15px;
    margin-left: -15px;
    width: 100px;
  }

  .dropdownContent p {
    margin-top: 5px;
    margin-bottom: 0;
    display: block;
    padding: 5px;
    color: white;
    background-color: rgb(58, 58, 58);
  }

  .dropdownContent p:hover {
    background-color: rgb(102, 101, 101);
  }

  .dropdown:hover .dropdownContent {
    display: block;
    cursor: pointer;
  }

  .dropdown:hover .dropHover {
    background-color: #5f3ef3;
  }

  .dropdownContent :not(.chosen) {
    background-color: rgb(189, 188, 188);
  }

  /*  */
  .flex {
    display: flex;
  }

  /*  */
  .sets .filter {
    flex-direction: column;
    align-items: center;
  }

  .sets {
    align-items: center;
    margin-bottom: 0px;
    width: 100%;
    justify-content: center;
  }

  .sets > * {
    margin-left: 10px;
  }

  .output {
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    > div {
      padding: 2px;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 5px;
      justify-content: space-between;
      margin-bottom: 10px;
      border-bottom-style: solid;
      width: 350px;
    }
  }
  #search {
    height: 30px;
    text-align: center;
  }
  @media all and (max-width: 830px) {
    h1 {
      font-size: 5.65vw !important;
    }
    h3 {
      font-size: 2.4vw !important;
    }
    .sets {
      > div:nth-child(0n + 1) {
        margin-bottom: 10px;
      }
      flex-direction: column;
    }
    label {
      font-size: 2.4vw;
    }
    .output {
      > div {
        width: 80%;
        .circle-bar {
          margin-left: 2vw;
        }
      }
    }
    h5 {
      font-size: 2vw !important;
    }
  }
}
</style> 