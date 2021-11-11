import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en:{
    translation: {
      "terms": "Terms of Service"
    }
  },
  ko: {
    translation: {
      "terms": "이용 약관"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
  });

export default i18n;