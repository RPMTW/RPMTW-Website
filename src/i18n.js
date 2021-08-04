import zh_tw from '@/i18n/zh_tw.json'
import zh_cn from '@/i18n/zh_cn.json'
import en_us from '@/i18n/en_us.json'

export default {
    set: {
        main: "zh_tw",
        langs: {
            "zh_tw": "繁體中文",
            "zh_cn": "簡體中文",
            "en_us": "美國",
        }
    },
    getLang() {
        return localStorage.getItem("lang") || this.set.main
    },
    setLang(value) {
        localStorage.setItem("lang", value)
        return window.location.reload()
    },
    i18nData: {
        "zh_tw": zh_tw,
        "zh_cn": zh_cn,
        "en_us": en_us,
    }
}