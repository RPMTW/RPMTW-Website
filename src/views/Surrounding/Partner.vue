<template>
  <div id="Partner" class="flex">
    <h1>合作夥伴</h1>
    <div class="flex partner">
      <div class="unit flex">
        <div class="flex name">
          <img src="https://www.dreamcity.studio/images/logo_0218.png" alt="" />
          <h2 class="partner-Name">夢都 - 夢想之都工作室</h2>
        </div>
        <div class="description">
          <h4>簡介:</h4>
          <p>
            2015年，來自臺灣、香港與澳門，擁有相同志向的學生們，組成了夢想之都工作室。我們深耕於<br />
            Minecraft 地圖製作，致力於創作並推廣<br />
            Minecraft。夢都集結了各方設計、美術、資訊人才，在創作的過程中，也藉此磨練專長與團隊共同成長。期望廣大玩家能在我們的地圖中獲得良好的遊戲體驗。<br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partner",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#Partner {
  flex-direction: column;
  align-items: center;
  align-content: center;
  img {
    max-width: 25%;
    max-height: 25%;
  }
  .partner {
    width: 80%;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    img {
      border-radius: 5px;
    }
    .unit {
      background-color: #aba499;
      color: black;
      padding: 25px;
      margin: 5px;
      border-radius: 20px;
      flex-direction: column;
      width: 9cm;
      .name {
        .partner-Name {
          margin-left: 10px;
        }
      }
      .description {
        margin-left: 5px;
        p {
          font-size: 13pt;
          margin-left: 10px;
        }
        h4 {
          margin-bottom: 0;
        }
      }
    }
  }
  @media all and (max-width: 500px) {
    .unit {
      h2 {
        font-size: 4.4vw;
      }
      h4 {
        font-size: 3.2vw;
      }
      p {
        font-size: 3.4vw !important;
      }
      .name {
        flex-direction: column;
        .partner-Name {
          margin-left: 0;
        }
      }
    }
  }
}
</style>