/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-undef */
$(function () {
    let t = document.title;
    $(document).on("visibilitychange", () => {
        switch (document.visibilityState) {
            case "hidden":
                (document.title = "你看不到我");
                setTimeout(() => "hidden" === document.visibilityState && (document.title = t), 1e3);
                break;
            case "visible":
                (document.title = "歡迎回來");
                setTimeout(() => "visible" === document.visibilityState && (document.title = t), 1e3);
                break;
        }
    });
});

/* functions */
let random = (max, min) => Math.random() * (max - min) + min;

/* test 用 */
window.dc = () => localStorage.removeItem("discordLink");

/*
    此專案使用 vue cli 前端框架建置 github: https://github.com/RPMTW/RPMTW-Website
    我不知道你是誰 但你竟然點進來了 就交個朋友吧~~ DC: 猴子#3807
    恭喜你發現彩蛋嘞 XDD
*/
