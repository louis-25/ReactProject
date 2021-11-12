import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './translation.en'
import translationKo from './translation.ko'

const resources = {
  en:{
    translation: translationEn
  },
  ko: {
    translation: translationKo
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
    debug: true,
    keySeparator: false,
  });

export default i18n;