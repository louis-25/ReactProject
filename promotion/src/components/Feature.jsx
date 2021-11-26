import React from 'react';
/* svg안먹음 */
import Folder from '../images/folder.png'
import Group from '../images/group.png'
import Balloon from '../images/textballoon.png'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

function Feature(props) {
  const { t, i18n } = useTranslation()
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    // <div className="inner">
    <div className={`feature inner`}>
      <div className="feature-title-box">
        <div className="feature-sub-title">{t("feature_title1-1")}</div>
        <h1 className="feature-title">{t("feature_title1-2")}</h1>
      </div>
      <div className="feature-contents-box">
        <div className="feature-content">
          <div className="feature-content-title">{t("feature_sub_title1")}</div>          
          <p className="feature-content-text">
            {t("feature_sub_title1_content1")}<br/>
            {t("feature_sub_title1_content2")}<br/>
            {t("feature_sub_title1_content3")}<br/>
            {t("feature_sub_title1_content4")}
          </p>
          <div className="feature-content-img"><img src={Folder}/></div>
        </div>
        <div className="feature-content">
          <div className="feature-content-title">{t("feature_sub_title2")}</div>
          <p className="feature-content-text">
            {t("feature_sub_title2_content1")}<br/>
            {t("feature_sub_title2_content2")}<br/>
            {t("feature_sub_title2_content3")}<br/>
            {t("feature_sub_title2_content4")}
          </p>
          <div className="feature-content-img"><img src={Group}/></div>
        </div>
        <div className="feature-content">
          <div className="feature-content-title">{t("feature_sub_title3")}</div>
          <p className="feature-content-text">
            {t("feature_sub_title3_content1")}<br/>
            {t("feature_sub_title3_content2")}<br/>
            {t("feature_sub_title3_content3")}<br/>
            {t("feature_sub_title3_content4")}
          </p>
          <div className="feature-content-img"><img src={Balloon}/></div>
        </div>
      </div>
      
    </div>    
  );
}

export default Feature;