<template>
    <div id="AssistTranslation">
        <div class="content">
            <section class="section" id="register-crowdin-account">
                <h1>如何註冊Crowdin的帳號?</h1>
                <p>首先請先連到 <a href="https://crowdin.com/">crowdin(點我)</a> 網站 <br>
                    前往網站之後找到右上角的按鈕(如下圖)，選擇 「SING UP」(註冊)
                </p>
                <img src="@/assets/Wiki/AssistTranslation/logIn-logOut.png" alt="登入/註冊按鈕">
                <p>
                    點選後會出現類似下方的畫面，請照著上方的格式輸入 Email(電子郵件)、Username(使用者名稱)、Password(密碼)，輸入完成後勾選 「 I agree to the Terms and Conditions and Privacy Policy 」(我同意條款和條件以及隱私權政策)，最後按下 「Create account」(建立帳號) 即可，如果是自己或家用電腦可以勾選 「Remember Me」(記住我)，就不用每次打開網頁都要登入一次。也可以與其它社群帳號連動，比較快登入。<br>
                    通常註冊完帳號會叫你到電子郵件信箱裡收驗證信，完成步驟之後，就可以拿到Crowdin的帳號可以登入囉。
                </p>
                <img src="@/assets/Wiki/AssistTranslation/create-account.png" alt="註冊畫面">
            </section>
            <section class="section" id="upload-translated">
                <h1>如何直接上傳翻譯過的檔案到RPMTW?</h1>
                <p>
                    首先請先確保你有註冊Crowdin帳號以及加入 <a href="https://crowdin.com/project/resourcepack-mod-zhtw">RPMTW的翻譯專案</a> ，詳情請見 <router-link to="">&lt;&lt;這裡&gt;&gt;</router-link> ，到專案首頁後選擇要翻譯的語言
                </p>
                <img src="@/assets/Wiki/AssistTranslation/translations.png" alt="選擇要翻譯的語言">
                <p>
                    接下來你會看到左上角有一個搜尋框，在裡面搜尋你想上傳翻譯的模組ID
                </p>
                <img src="@/assets/Wiki/AssistTranslation/search-you-mod.png" alt="搜尋你想上傳翻譯的模組ID">
                <p>
                    假設我要上傳 「xaeroworldmap 」這個模組的翻譯檔案，那我就搜尋它，接著找到那個模組的原始語系檔案，並且點擊 「有三個點的按鈕」。
                </p>
                <img src="@/assets/Wiki/AssistTranslation/xaeroworldmap-3button.png" alt="原始語系檔案裡的有三個點的按鈕">
                <p>接下來會出現一個選單，點擊 「Upload Translations」(上傳譯文)</p>
                <img src="@/assets/Wiki/AssistTranslation/menu-upload-translations.png" alt="上傳譯文">
                <p>直接點擊 「Select File」(選擇檔案)，就會彈出一個視窗，選擇你要上傳的翻譯檔案，就等待它上傳一下就完成囉!!</p>
                <img src="@/assets/Wiki/AssistTranslation/Finish.png" alt="完成~~">
            </section>
        </div>
    </div>
</template>

<script>
/* 協助翻譯 */
export default {
    name: "AssistTranslation",
    data() {
        return {};
    }, 
    components: {}
};
</script>
<style lang="scss">
#Footer {
    display: none;
}
</style>
<style lang="scss" scoped>
.content {
    margin-bottom: 100px;
    a[href] {
        color: rgb(36, 146, 236);
    }
    .bright a[href] {
        color: rgb(179, 85, 223)!important;
    }
    .section {
        * {
            font-weight: 900;
        }
        h1 {
            font-size: 25pt;
        }
        p {
            font-size: 1.1em;
        }
        img {
            text-align: center;
            max-width: 80%;
        }
    }
}

</style>