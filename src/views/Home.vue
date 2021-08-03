<template>
    <div class="Home">
        <section class="home-main-backImg">
            <img class="home-main-img user-select"
                src="https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128"
                alt="">
            <h1 class="user-select v-rpm-text"></h1>
        </section>
        <section class="all-publicity">
            <div class="item-none">
                <div class="publicity item-none">
                    <div class="publicity-icon">
                        <img style="width: 400px;height: 200px;"
                            src="https://cdn.discordapp.com/banners/815819580840607807/bf8aec260c17d5483a18e27d8e99a52b.jpg?size=512"
                            alt="">
                    </div>
                    <div class="publicity-info">
                        <h1 class="publicity-title">自動中文化更新模組</h1>
                        <strong class="content">體驗前所未見的模組翻譯，讓你的模組通通變中文吧！</strong>
                        <a class="button-div" aria-label="立即下載" href="https://www.rpmtw.ga/version">立即下載</a>
                        <a class="button-div more" aria-label="閱讀更多" href="https://www.rpmtw.ga/RPMTWUpdateMod">閱讀更多</a>
                    </div>
                </div>
            </div>
            <div class="item-none">
                <div class="publicity">
                    <div class="publicity-icon">
                        <img style="width: 400px;height: 200px;"
                            src="https://media.discordapp.net/attachments/793138981750571008/854976912228089906/unknown.png"
                            alt="">
                    </div>
                    <div class="publicity-info">
                        <h1 class="publicity-title">ATR 1 - All The RPMTW<br>模組包</h1>
                        <strong class="content">1.17 全新模組包，結合各種元素，盡情在織物上探險吧！</strong>
                        <a class="button-div" data-popover="立即下載" href="https://www.rpmtw.ga/version">立即下載</a>
                        <a class="button-div more" data-popover="閱讀更多"
                            href="https://www.rpmtw.ga/RPMTWUpdateMod">閱讀更多</a>
                    </div>
                </div>
            </div>
        </section>
        <p></p>
        <section class="translation-C-rank">
            <h1>翻譯貢獻者前12名 - 感謝你們的貢獻</h1>
            <iframe src="https://rpmtw.github.io/Contributor-Website/Top/12" ref="iframe" frameborder="0"></iframe>
            <router-link class="button-div" to="/Contributor">查看更多翻譯貢獻者</router-link>
        </section>
    </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
    name: 'Home',
    components: {},
    mounted() {
        $(function(){
            var t = ["前所未見的模組繁中化", "社群協力合作", "翻譯全自動更新", "跳脫傳統框架", "遊戲內翻譯模組", "專屬為您設計", "與我們一起當個創世神！"];
            let n = 1;
            let e = (u = 0) => {
                setTimeout((function () {
                    n >= t.length && (n = 0), function (u) {let s = 0;let i = () => {
                        setTimeout(function () {
                            ++s <= t[u].length ? ($(".v-rpm-text").html(`${t[u].substring(0, s)}<span class="mouse" aria-hidden="true"></span>`), i()) : e(n++);
                        }, 150);};i();
                    }(u)
                }), 2e3)
            };
            e();
            for (let i of $(".item-none")) new IntersectionObserver((e =>
                e.map((e => e.isIntersecting ? e.target.classList.add("active") : e.target.classList.remove("active")))
            )).observe(i);
        })
    }
}
</script>
<style lang="scss">
@charset "UTF-8";

/*  */
.home-main-backImg {
    background-size: cover;
    background-position: center center;
    background-image: url(../assets/back-img.png);
    height: 35em;
    width: 100%;
    text-align: center;
}
.home-main-img {
    margin-top: 4em;
    border-radius: 50%;
}
.home-main-backImg h1 {
    font-size: 5em;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
}

/*  */
@keyframes caret {
    50% {
        border-color: transparent;
    }
}
.v-rpm-text {
    font-size: 5em;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    span.mouse {
        border-right: 0.05em solid;
        color: rgb(56, 44, 218);
        animation: caret 1s steps(1) infinite;
    }
}

/* publicity */
.all-publicity {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
        min-width: 690px;
    }
    .publicity {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 20px 0;
        justify-content: space-between;
    }
}
@media only screen and (max-width: 1000px) {
    .publicity .publicity-info {
        margin-left: 0 !important;
    }
    .all-publicity .publicity {
        flex-direction: column;
    }
}
.all-publicity .publicity .publicity-info {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.publicity .publicity-title {
    font-size: 30pt;
    font-weight: bold;
    text-align: center;
    font-family: "Noto Sans TC", sans-serif;
}
.publicity strong.content {
    font-size: 15pt;
}
.publicity-info h1 {
    margin-top: 0;
}
/* translation-C-rank */
.translation-C-rank {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.translation-C-rank iframe {
    width: 80%;
    height: 300px;
}
.translation-C-rank h1 {
    font-size: 2.5em;
}
.translation-C-rank .button-div {
    width: 80%;
    margin-top: 30px;
    padding: 4px 0;
    letter-spacing: 5px;
}
</style>