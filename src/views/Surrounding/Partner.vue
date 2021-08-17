<template>
  <div id="Partner" class="flex">
    <h1>合作夥伴</h1>
    <div class="flex partner">
      <div class="unit flex">
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/877091919207997481/877092255926738964/2020_small.png"
            alt=""
          />
          <h3>夢都 - 夢想之都工作室</h3>
        </div>
        <div>
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
  }
  .partner {
    width: 80%;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    .unit {
      background-color: #aba499;
      color: black;
      padding: 25px;
      margin: 5px;
      border-radius: 20px;
      flex-direction: column;
      width: 9cm;
    }
  }
}
</style>