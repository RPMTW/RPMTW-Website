<template>
  <div
    id="RPMLauncher"
    class="flex flex-down flex-item-center main Surrounding"
  >
      <img
      src="@/assets/images/RPMLauncher/RWLLog.png"
      alt="特別感謝 嗡嗡#5428 製作圖片"
    />
    <div class="text-center launcher-name">
    RPMLauncher</div>
    <h1 class="text-center main-title">
      輕鬆管理您的遊戲<br />
      跨世代的 Minecraft 啟動器，既保留簡潔設計又支援多個平台和許多功能供您探索！
    </h1>
    <div class="links flex flex-center">
      <a
        target="_blank"
        class="btn"
        href=RWL/Version
      >
        立即下載
      </a>
      <a href="https://github.com/RPMTW/RPMLauncher" class="btn">
      <img src="https://github.com/fluidicon.png" alt="" />
      Github</a
    >
      <a
        target="_blank"
        href="https://discord.com/invite/5xApZtgV2u"
        class="btn"
      >
        Discord
      </a>
    </div>
    <hr />
    <section>
      <h1>特色</h1>
      <div className="ImgFeature">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/HomePage.png"
              alt="modernAndEasyToUse"
            />
            <div class="Features">
                <div>
              <h1>現代化的界面</h1>
              <p>
              界面設計簡潔，操作簡單<br />
              但卻是個功能豐富強大的啟動器
              </p>
            </div>
          </div>
         </div>
         <div className="ImgFeature ImgFeatureLeft">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/AutoJava.png"
              alt="autoJava"
            />
            <div class="Features">
                <div>
              <h1>自動安裝 Java</h1>
              <p>
               您還在煩惱要安裝哪個版本的 Java ?<br />
               別擔心，RPMLauncher 會自動安裝相容版本的 Java！
              </p>
            </div>
          </div>
         </div>
          <div className="ImgFeature">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/VersionSelect.png"
              alt="versionSelect"
            />
            <div class="Features">
                <div>
              <h1>支援眾多版本</h1>
              <p>
               支援 原版/Forge/Fabric 自動安裝<br />
               RPMLauncher 將會為您準備一切，懶人的福音！
              </p>
            </div>
          </div>
         </div>
         <div className="ImgFeature ImgFeatureLeft">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/ModDownload.png"
              alt="modInstall"
            />
            <div class="Features">
                <div>
              <h1>自動安裝模組</h1>
              <p>
               輕鬆從 CurseForge 與 Modrinth 安裝模組<br />
               RPMLauncher 也會自動幫您下載前置模組，不再被錯誤訊息困擾！
              </p>
            </div>
          </div>
         </div>
           <div className="ImgFeature">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/ModPack.png"
              alt="modpack"
            />
            <div class="Features">
                <div>
              <h1>模組包自動安裝</h1>
              <p>
               支援 FTB 與 CurseForge 模組包自動安裝<br />
               在 RPMLauncher 就搞定，不必再煩惱！
              </p>
            </div>
          </div>
          </div>
           <div className="ImgFeature ImgFeatureLeft">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/ModListView.png"
              alt="modListView"
            />
            <div class="Features">
                <div>
              <h1>模組管理器</h1>
              <p>
               瀏覽各式各樣的模組，且可以隨時增減模組
              </p>
            </div>
          </div>
             </div>
           <div className="ImgFeature">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/GameLog.png"
              alt="gameLog"
            />
            <div class="Features">
                <div>
              <h1>即時遊戲日誌監控</h1>
              <p>
               遊戲執行中時，將自動紀錄遊戲日誌<br>
               並自動分類日誌類型也可手動搜尋
              </p>
            </div>
          </div>
                   </div>
           <div className="ImgFeature ImgFeatureLeft">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/MinecraftNews.png"
              alt="news"
            />
            <div class="Features">
                <div>
              <h1>Minecraft 新聞</h1>
              <p>
               閱覽來自 Minecraft 官方網站的新聞<br>
               隨時跟上最新潮流！
              </p>
            </div>
          </div>
         </div>
    </section>
    <hr />
    <section>
      <h1>銘謝</h1>
      <p class="notCenter list">
        <strong>主要維護者: </strong>菘菘#8663<br />
        <strong>專案發起者: </strong>sunny.ayyl#2932、菘菘#8663<br />
        <strong>貢獻者: </strong>sunny.ayyl#2932 、 3X0DUS - ChAoS#6969、KyleUltimate<br />
        <strong>啟動器圖片製作: </strong>嗡嗡#5428<br />
        <strong>Github貢獻者: </strong>
        <a href="https://github.com/RPMTW/RPMLauncher/graphs/contributors"
          >點我查看</a
        ><br />
      </p>
    </section>
    <hr />
  </div>
</template>

<script>
export default {
  name: "RPMLauncher",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/SurroundingMain.scss";

.launcher-name {
  color: rgb(229, 236, 240);
  font-size: 60px;
}

.Features {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Features h1 {
  text-align: center;
}

.ImgFeature {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 50px 0;
}
.ImgFeatureLeft {
  flex-direction: row-reverse;
}
.ImgFeature > div > h1 {
  width: 400px;
  font-family: Inter;
  width: 100%;
  text-align: start;
  font-family: Inter;
  font-style: normal;
  font-weight: bold !important;
  font-size: 30px;
}
.ImgFeature > div > p {
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
}
.ImgFeature > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 600px;
  padding: 20px;
  margin-left: 50px;
}
.ImgFeature > img {
  width: 600px;
}
</style>