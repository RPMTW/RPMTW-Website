/* eslint-disable no-undef */
/* eslint-disable-next-line no-undef */

$(function () {
    let t = document.title;
    $(document).on("visibilitychange", () => {
        switch (document.visibilityState) {
            case "hidden":
                (document.title = "你看不到我"),
                    setTimeout(() =>
                        "hidden" === document.visibilityState && (document.title = t),
                        1e3
                    );
                break;
            case "visible":
                (document.title = "歡迎回來"),
                    setTimeout(() =>
                        "visible" === document.visibilityState && (document.title = t),
                        1e3
                    );
                break;
        }
    })
});
/* 此專案使用 vue cli 前端框架建置 */
