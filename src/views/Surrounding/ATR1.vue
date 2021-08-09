<template>
  <div id="ATRModPackage" class="flex-center">
    <img src="@/assets/Surrounding/ATR1/ATR1MainTitleIcon.png" alt="" />
    <h2>
      1.17 全新模組包，結合了冒險、怪物、魔法、科技...，盡情在織物上探險吧！
    </h2>
    <div class="links flex-center">
      <div>
        <a
          class="button-div"
          href="https://www.curseforge.com/minecraft/modpacks/atr1"
        >
          前往CurseForge下載
        </a>
      </div>
      <div>
        <a href="https://discord.com/invite/5xApZtgV2u" class="button-div">
          加入官方社群 (Discord)
        </a>
      </div>
    </div>
    <hr />
    <section>
      <h1>關於 ATR 1</h1>
      <p>
        ATR1<br />
        模組包是由RPMTW團隊製作的第一款Fabric模組包，主題從世界、科技(輕工業)、魔法、冒險為主，希望能提供最好的Fabric模組與RPMTW。<br />
        此模組包會從平衡性、穩定性和可玩性著手，進行優化，希望能給大家帶來最好的體驗，享受它吧！<br />
      </p>
    </section>
    <hr />
    <section>
      <h1>特徵與功能</h1>
      <p class="notCenter">
        - 更多礦物、方塊、建築材料<br />
        - 更多生態域 <br />
        - 更多維度<br />
        - 自訂配方 <br />
        - 更好的介面<br />
        - 更好的 Fabric 模組<br />
        - 更好的繁體中文翻譯 (RPMTW)
      </p>
    </section>
    <hr />
    <section>
      <h1>遊戲首頁截圖</h1>
      <img src="@/assets/Surrounding/ATR1/screenshot.png" alt="" />
    </section>
    <hr />
    <section>
      <h1>實際遊玩畫面</h1>
      <p>製作中~~~</p>
    </section>
    <hr />
    <section>
      <h1>實況區</h1>
      <p>
        如果有遊玩此模組包歡迎到我們的<a
          href="https://discord.com/invite/5xApZtgV2u"
        >
          Discord </a
        >跟我講，讓我把你加進這裡w
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "ATRModPackage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
$titleColor: orange;
#ATRModPackage {
  display: flex;
  .button-div {
    padding: 5px 20%;
  }
  hr {
    background-color: rgba(85, 109, 223, 1);
    border: none;
    height: 3px;
    width: 80%;
  }
  .links {
    display: inline-block;
    text-align: center;
    width: 100%;
    > div {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  section {
    p {
      font-size: 20pt;
    }
    h1 {
      font-size: 40pt;
      color: $titleColor;
    }
    h1,
    p {
      &:not(.notCenter) {
        text-align: center;
      }
      font-weight: 700;
    }
    img {
      min-width: 80%;
    }
  }
  a[href] {
    color: var(--strong-color);
  }
}
</style>