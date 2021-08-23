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
let limit = 30;

module.exports = {
    getData: getData,
    functions: {
        /* 抓取目錄 */
        getDirectories: (Version = "1.17", filter = "", page = 1,) =>
            getData(`/projects/${Sets.CrowdinID}/directories?directoryId=${Sets.VersionDirID[Version]}&offset=${page * limit}&limit=${limit}${(filter && ("&filter=" + "filter")) || ''}`),
        /* 抓取模組所有檔案 */
        getCurseFile: (DirID, filter = "", page = 1,) =>
            getData(`${Sets.CrowdinBaseAPI}/projects/${Sets.CrowdinID}/files?directoryId=${DirID}&recursion&offset=${page * limit}&limit=limit${filter}"${(filter && ("&filter=" + "filter")) || ''}}`),
        /* 抓取模組資料 */
        getCurseForgeModInfo: (modId) =>
            $.getJSON(`${Sets.actingURL}/curseForge/api/?url=addon/${modId}`),
        /* 轉換用: dict */
        getCurseForgeIndex: (Version, Page) =>
            $.getJSON(`https://raw.githubusercontent.com/RPMTW/ResourcePack-Mod-zh_tw/${{ "1.16": "Original" }[Version] || `Original-${Version}`}/${Version}/CurseForgeIndex.json`),
    }
}