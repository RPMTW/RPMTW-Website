<template>
  <div id="AssistTranslation" class="wiki">
    <div class="content">
      <section class="section" id="how-install-mod">
        <h1>如何安裝這個模組?</h1>
        <router-link to="/install/version"
          >&lt;&lt;點我查看教學&gt;&gt;</router-link
        >
      </section>
      <section class="section" id="how-can-set-mod">
        <h1>有些功能我用不到，可以關閉嗎?</h1>
        <p>
          可以，要修改設定只要按下預設快捷鍵 O
          (可自行修改)，就會打開一個設定選單。
        </p>
      </section>
      <section class="section" id="what-is-cosmic-system">
        <h1>什麼是宇宙通訊系統?</h1>
        <p>
          宇宙通訊系統是本模組提供的一個文字聊天系統，將會與RPMTW官方Discord群組進行串連，可以使用本系統在遊戲內外進行交流。
        </p>
      </section>
      <section class="section" id="how-use-cosmic-system">
        <h1>如何使用宇宙通訊系統?</h1>
        <a style="color: red">遊戲內方式:</a><br />
        <p>
          按下預設快捷鍵 G
          (可自行修改)，將會打開一個介面在格子內輸入要發送的文字即可。
        </p>
        <a style="color: red">遊戲內方式:</a><br />
        <p>
          前往RPMTW官方Discord群組，找到<a
            href="https://discord.com/channels/815819580840607807/831494456913428501"
          >
            💫┃宇宙通訊頻道 </a
          >在該頻道內發送訊息即可。
        </p>
      </section>
      <section class="section" id="cosmic-system-agreement">
        <h1>《RPMTW 宇宙通訊系統終端使用者授權合約》</h1>
        <p>
          - 由於此功能與Discord串聯，請遵守《Discord使用者服務條款<br />
          - 訊息內容請不得以任何形式騷擾別人，否則我們有權封禁該帳號<br />
          - 我們將會蒐集您的IP、Minecraft UUID/ID，IP僅用於封禁帳號<br />
          - 我們將有權隨時更改本條款
        </p>
      </section>
      <section class="section" id="crowdin-login-token">
        <h1>Crowdin登入權杖 是什麼，我該如何取得它?</h1>
        <p>
          Crowdin
          登入權杖，簡單來說類似你的帳號密碼生成出來的驗證碼，等同於帳號密碼重要，如果你不是要協助翻譯RPMTW裡的Minecraft模組不會需要此功能，這個功能設計給想要在遊戲內翻譯物品/方塊的人使用，預設快捷鍵為V(可自行修改)，如果想了解如何取得請繼續看下去吧。<br />
          首先你要先有一個Crowdin(RPMTW所使用的翻譯平台)的帳號，<a
            :href="`${
              BASE_URL || '/'
            }Wiki/AssistTranslation#register-crowdin-account`"
            >&lt;&lt;點我查看如何註冊帳號&gt;&gt; </a
          >，登入帳號後右上角應該會有你的頭像點下去，接著點擊 「Settings」(設定)
        </p>
        <img src="@/assets/Wiki/ModInfo/CrowdinSettings.png" />
        <p>
          接下來找到列表中的
          <a href="https://crowdin.com/settings#api-key">「API」</a>，點下去。
        </p>
        <img src="@/assets/Wiki/ModInfo/CrowdinSettingsApi.png" />
        <p>接著點擊「New Token」(新增登入權杖) 這個按鈕。</p>
        <img src="@/assets/Wiki/ModInfo/NewToken.png" />
        <p>在框框內輸入你想要將這個登入權杖取什麼名稱(辨識用)</p>
        <img src="@/assets/Wiki/ModInfo/setName.png" />
        <p>輸入完名稱後，點選 「Create」(建立)。</p>
        <img src="@/assets/Wiki/ModInfo/Create.png" />
        <p>
          接著會跳出這個視窗，要確認密碼，輸入密碼之後按下 「Confirm」(確認)
        </p>
        <img src="@/assets/Wiki/ModInfo/Confirm.png" />
        <p>
          最後就會出現你的登入權杖了，有一個複製按鈕可以把它複製下來，然後請務必保管好這個登入權杖，登入權杖等同於密碼，千萬不要洩漏給其他人，建議可以放在記事本裡保存。
        </p>
        <img src="@/assets/Wiki/ModInfo/copyToken.png" />
        <p>
          取得登入權杖之後我們要將它新增至RPMTW模組的設定中才能使用，先手持一個物品，按下預設快捷鍵（V），如果還沒新增登入權仗就會跳出以下畫面，在框框內輸入上方取得的Crowdin登入權仗之後點擊
          登入 即可。
        </p>
        <img src="@/assets/Wiki/ModInfo/InModUI.png" />
        <p>輸入如果出現下圖的文字就代表成功囉!!!</p>
        <img src="@/assets/Wiki/ModInfo/checkTXT.png" />
      </section>
    </div>
  </div>
</template>

<script>
/* RPM翻譯更新模組 */
/* eslint-disable no-unused-vars */
export default {
  name: "AssistTranslation",
  data() {
    return {
      BASE_URL: process.env.BASE_URL,
    };
  },
};
</script>