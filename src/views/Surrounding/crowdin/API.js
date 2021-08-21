/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-undef */

let getData = (url, token = null) => $.ajax({
    type: "GET",
    headers: {
        "Authorization": `Bearer ${token || getCookie("crowdinToken")}`,
    },
    url: `${Sets.CrowdinBaseAPI}${url}`,
    success: (res) => res
});


module.exports = {
    getData: getData,
    functions: {
        /* 抓取目錄 */
        getDirectories: (Version = "1.17", filter = "", page = 1,) =>
            getData(`/projects/${Sets.CrowdinID}/directories?directoryId=${Sets.VersionDirID[Version]}&offset=${page * 30}&limit=${30}${(filter && ("&filter=" + "filter")) || ''}`),
        /* 抓取模組資料 */
        getCurseForgeModInfo: (modId) =>
            getData(`${Sets.CurseForgeAPI}/addon/${modId}`),
        /* 抓取模組資源模組 */
        getAllModIndex: (Version = "1.17") =>
            $.getJSON(`https://raw.githubusercontent.com/RPMTW/ResourcePack-Mod-zh_tw/${{ "1.16": "Original" }[Version] || "Original-" + Version}/${Version}/CurseForgeIndex.json`)
    }
}