/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-undef */

module.exports = {
    getData: (url, token = null) => $.ajax({
        type: "GET",
        headers: {
            "Authorization": `Bearer ${token || getCookie("crowdinToken")}`,
        },
        url: `${Apis.CrowdinBaseAPI}${url}`,
        success: (res) => res
    })
}