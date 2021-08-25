/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let getCrowdinTemplate = (url, token = null) => $.ajax({
    type: "GET",
    headers: {
        "Authorization": `Bearer ${token || getCookie("crowdinToken")}`,
    },
    url: `${Sets.CrowdinBaseAPI}${url}`,
    success: (res) => res
});
/* TODO: main */
module.exports = {
    CurseForge: {
        CurseForgeIndex: (VersionID) =>
            fetch(`https://raw.githubusercontent.com/RPMTW/ResourcePack-Mod-zh_tw/${{ "1.16": "Original" }[VersionID]
                || "Original-" + Version}/${VersionID}/CurseForgeIndex.json`),
        CurseForgeModInfo: (curseId) => fetch(`${Sets.actingURL}/curseForge/api?url=/addon/${curseId}`)
    },
    getModsByVersion: (DirID, Page, filter = "") => getCrowdinTemplate(`/projects/${Sets.CrowdinID}/directories?directoryId=${DirID}&offset=${Page * 20}&limit=20${"&filter=" + filter}`)
}