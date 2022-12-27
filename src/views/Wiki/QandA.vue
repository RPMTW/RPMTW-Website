<template>
  <div id="AssistTranslation" class="wiki">
    <div class="content">
      <section class="section" id="what-is-RPMTW">
        <h1>什麼是 RPMTW Platform Mod?</h1>
        <p>
          此模組是一個Minecraft模組繁體中文化的新興模組，主打「方便、快速、簡單、合作」，希望能夠打破傳統翻譯模組的方式，以及解決許多新/老手想翻譯模組但卻覺得很難/遊玩模組時被看不懂的文字困惑。
        </p>
      </section>
      <section class="section" id="install-method">
        <h1>這模組要如何安裝?</h1>
        <router-link to="/install/version"
          >&lt;&lt;點我查看教學&gt;&gt;</router-link
        >
      </section>
      <section class="section" id="server-need-install">
        <h1>伺服器端需要安裝嗎?</h1>
        <p>
          伺服器不用安裝，因為伺服器端不會顯示內容並不需要安裝此模組，只需客戶端安裝就能享受翻譯體驗。
        </p>
      </section>
      <section class="section" id="RPMTW-version">
        <h1>RPMTW 支援 1.12.2 以下的版本嗎? RPMTW支援那些Minecraft版本?</h1>
        <p>
          RPMTW 「不打算」支援 1.12.2 以下的Minecraft版本。<br />
          目前RPMTW支援的版本有 1.12、1.16、1.17、1.18、1.19，未來有新版本釋出也會盡快更新。
        </p>
      </section>
      <section class="section" id="support-forge-or-fabric">
        <h1>RPMTW 支援 Forge 嗎? 支援 Fabric 嗎?</h1>
        <p>
          <span style="text-decoration: line-through"
            >小孩子才做選擇，RPMTW 全都要</span
          >
          (Forge/Fabric/Quilt 三平台都支援)。
        </p>
      </section>
      <section class="section" id="discord-or-line">
        <h1>
          有Discord或Line嗎? 我想詢問相關問題或者建議又或者想與大家一起聊天
        </h1>
        <a
          target="_blank"
          href="https://discord.com/invite/5xApZtgV2u"
          class="go-discord btn"
          >前往 Discord 群組</a
        >
      </section>
      <section class="section" id="translation-process">
        <h1>這什麼原理，可以全自動化的翻譯流程?</h1>
        <p>下方有一張簡易的示意圖喔w</p>
        <br />
        <img
          src="@/assets/images/Wiki/QandA/autoTranslation.png"
          alt="簡易的示意圖"
        />
      </section>
    </div>
  </div>
</template>

<script>
/* 常見問題 */
/* eslint-disable no-unused-vars */
export default {
  name: "QandA",
  data() {
    return {};
  },
};
</script>
