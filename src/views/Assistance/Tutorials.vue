<template>
    <div id="Tutorials">
        <h1 class="orange center">基礎教學</h1>
        <div>
            <div>
                <h3 class="center">首先請先到本專案的翻譯平台，然後註冊一個帳號再進行翻譯</h3>
                <div class="flex">
                    <a href="https://crowdin.com/project/resourcepack-mod-zhtw?already_accepted=14797842" class="button-div">
                        前往翻譯平台
                    </a>
                </div>
                <h3 class="center">註冊完帳號並且確認加入RPMTW的翻譯專案後，接下來要選擇你想要翻譯的遊戲版本</h3>
                <div class="flex">
                    <a href="https://crowdin.com/translate/resourcepack-mod-zhtw/37100/en-zhtw?filter=basic&value=0" 
                        class="button-div">1.12</a>
                    <a href="https://crowdin.com/translate/resourcepack-mod-zhtw/14696/en-zhtw?filter=basic&value=0"
                        class="button-div">1.16</a>
                    <a href="https://crowdin.com/translate/resourcepack-mod-zhtw/33890/en-zhtw?filter=basic&value=0"
                        class="button-div">1.17</a>
                </div>
            </div>
            <h3>選擇版本之後應該會出現類似下圖的介面，接下來介紹一下這些功能有什麼用處吧!</h3>
            <div class="img-infos">
                <strong>
                    <li><span class="orange">資料夾選擇：</span>可以選擇你想要翻譯的模組或版本檔案</li>
                    <li><span class="orange">搜尋字串：</span>這裡可以搜尋你想要查詢的字串</li>
                    <li><span class="orange">字串檢視介面：</span>通常預設他會先顯示尚未翻譯的字串，可以從這邊選擇想要翻譯的</li>
                    <li><span class="orange">原始字串：</span>這裡會顯示文字的原文</li>
                    <li><span class="orange">語系鍵：</span>這裡會顯示該文字所屬的位置，可以參考用</li>
                    <li><span class="orange">翻譯後字串：</span>可以將翻譯完成後的文字填寫在這裡</li>
                    <li><span class="orange">儲存按鈕：</span>輸入完成翻譯的文字後，記得按下那個按鈕就會儲存翻譯</li>
                    <li><span class="orange">功能區：</span>裡面有四個按鈕可以方便翻譯使用，分別是 評論區、查詢翻譯紀錄、查詢詞彙/維基百科、雜項功能</li>
                </strong>
            </div>
            <img class="flow-chart" src="../../assets/Tutorials-flow-chart.png" alt="">
            <h2 class="center">
                最後感謝您閱讀那麼長篇的文字，非常感謝，您現在可以開始進行翻譯了!<br>
                <h2>如果遇到任何問題或者想討論翻譯歡迎到我們的Discord群組</h2>
            </h2>
            <a href="https://discord.com/invite/5xApZtgV2u" class="go-discord button-div">前往 Discord 群組</a>
        </div>
    </div>
</template>

<script>

export default {
    name: "Tutorials",
    methods: {}
};
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
}
.center {
    text-align: center;
}
#Tutorials {
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
.button-div[href^="https://crowdin.com"] {
    padding: 5px 10%;
    margin: 10px;
}
.flow-chart {
    margin-top: 50px;
    width: 80%;
}
.img-infos {
    margin-top: 20px;
    margin-left: 8%;
    strong {
        font-size: 14pt;
    }
}
.go-discord {
    width: 70%;
    padding: 5px 0;
}

/* text-style */
.orange {
    color: var(--strong-color);
}
.img-infos li {
    list-style-type: decimal;
}
</style>