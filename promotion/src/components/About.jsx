import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

function About(props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const { t, i18n } = useTranslation()

  const goToCompany = () => {
    window.open("https://www.fasoo.com/about-us")
  }
  return (
    <>
      { isDesktop &&
      <div className="about">
        <div className="about-title">
          {t("about_title1-1")}<br/>
          {t("about_title1-2")}
        </div>
        <p className="about-text">
          {t("about_content1")}<br/>
          {t("about_content2")}<br/>
          {i18n.language=="ko" && <>{t("about_content3")}</>}
        </p>
        <input className="about-btn" type="button" onClick={goToCompany} value={t("about_btn")}/>
      </div>
      }
      { isMobile &&
        <div className="about">
          <div className="about-title">
            {t("Mabout_title1-1")}<br/>
            {t("Mabout_title1-2")}<br/>{t("Mabout_title1-3")}
        </div>
        <p className="about-text">
          {t("Mabout_content1")}<br/>
          {t("Mabout_content2")}<br/>
          {t("Mabout_content3")}<br/>
          {i18n.language=="ko" && <>{t("Mabout_content4")}</>}          
        </p>
        <input className="about-btn" type="button" onClick={goToCompany} value={t("about_btn")}/>
        </div>
      }
    </>
  );
}

export default About;