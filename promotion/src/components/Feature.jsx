import React from 'react';
import Slider from './Slider/Slider';
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

function Feature(props) {
  const { t, i18n } = useTranslation()
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  return (
    <>
      <div className={`feature inner`}>
        <div className="feature-title-box">
          <span className="feature-sub-title">{t("feature_title1-1")}</span>  
          {isDesktop ? <div className="feature-title" dangerouslySetInnerHTML={{__html:t("feature_main_title")}}></div>
          :<div className="feature-title" dangerouslySetInnerHTML={{__html:t("Mfeature_main_title")}}></div>
          }
        </div>
      </div>
      <Slider></Slider>
    </>
  );
}

export default Feature;