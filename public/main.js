/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-undef */
$(function () {
    let Version = "2.2.1";
    console.log(
        `%c Version: ${Version} %c\n%chttps://github.com/RPMTW/RPMTW-Website\nhttps://github.com/RPMTW`,
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
    RPMTWProgressAPI: "https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/progress.json",
    CrowdinBaseAPI: "https://api.crowdin.com/api/v2",
    CurseForgeAPI: "https://addons-ecs.forgesvc.net/api/v2",
    CrowdinOauthAPI: "https://accounts.crowdin.com/oauth/authorize?client_id=8HpxK2jINouRXTrVq6gf&redirect_uri=https://rear-end.a102009102009.repl.co/crowdin/oauth/auth/web&response_type=code&scope=project",
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
