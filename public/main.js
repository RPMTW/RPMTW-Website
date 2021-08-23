/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-undef */
let version = "2.2.1";
let awa = {
    keys: "rpmtw",
    keyCount: 0
}

$(function () {
    console.log(
        `%c Version: ${version} %c\n%chttps://github.com/RPMTW/RPMTW-Website\nhttps://github.com/RPMTW`,
        `color: white; background: ${$("html").css(
            "--strong-color"
        )}; padding:5px 0;`,
        `padding: none;border: none;`,
        `padding: 4px;border:1px solid ${$("html").css("--strong-color")};`
    );
    let t = document.title;
    $(document).on("visibilitychange", () => {
        switch (document.visibilityState) {
            case "hidden":
                document.title = "你看不到我";
                setTimeout(
                    () => "hidden" === document.visibilityState && (document.title = t),
                    1e3
                );
                break;
            case "visible":
                document.title = "歡迎回來";
                setTimeout(
                    () => "visible" === document.visibilityState && (document.title = t),
                    1e3
                );
                break;
        }
    });
    $(window).on("keydown", (e) => {
        e.code.toLocaleUpperCase() === `key${awa.keys[awa.keyCount]}`.toLocaleUpperCase() ? (awa.keyCount++, awa.keyCount >= awa.keys.length && (alert("Emm\u622a\u5716\u4e00\u4e0b\u5230dc\u5b98\u65b9\u793e\u7fa4\u5427!!( \u4e0d\u8981\u548c\u5225\u4eba\u8aaa\u89e3\u6cd5\u6b50~~"), awa.keyCount = 0)) : awa.keyCount = 0;
    })
});

/* functions */
let random = (max, min) => Math.random() * (max - min) + min;

/* data */
window.checkCookie = function () {
    return navigator.userAgent.indexOf("MSIE") === -1
        ? navigator.cookieEnabled
        : ((document.cookie = "cookieActived=true"), -1 !== document.cookie.indexOf("cookieActived"))
}()
window.getCookie = name => {
    if (checkCookie) {
        let i = `; ${document.cookie}`.split(`; ${name}=`);
        return 2 === i.length && i.pop().split(";").shift() || void 0
    }
};

/* test 用 */
window.dc = () => localStorage.removeItem("discordLink");

window.Sets = {
    CrowdinOauthAPI: "https://accounts.crowdin.com/oauth/authorize?client_id=8HpxK2jINouRXTrVq6gf&redirect_uri=https://rear-end.a102009102009.repl.co/crowdin/oauth/auth/web&response_type=code&scope=project",
    RPMTWProgressAPI: "https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/progress.json",
    CrowdinBaseAPI: "https://api.crowdin.com/api/v2",
    actingURL: "https://rear-end.a102009102009.repl.co",
    CrowdinID: 442446,
    VersionDirID: {
        "1.17": 33894,
        "1.16": 14698,
        "1.12": 37104,
    }
}
/*
    此專案使用 vue cli 前端框架建置 github: https://github.com/RPMTW/RPMTW-Website
    我不知道你是誰 但你竟然點進來了 就交個朋友吧~~ DC: 猴子#3807
    恭喜你發現彩蛋嘞 XDD
*/
/*
    This project is built using the vue cli front-end framework github: https://github.com/RPMTW/RPMTW-Website
    I don't know who you are, but you clicked here, so let's make friends~~ DC: 猴子#3807
    Congratulations on finding the egg XDD
*/
