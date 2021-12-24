import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './translation.en'
import translationKo from './translation.ko'

let initLng
initLng = sessionStorage.getItem('lng')

if(initLng == null) {  
  initLng = 'ko'
}
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
    lng: initLng,
    debug: true,
    keySeparator: false,
  });

export default i18n;