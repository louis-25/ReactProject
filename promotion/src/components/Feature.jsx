import React from 'react';
/* svg안먹음 */
import Folder from '../images/folder.png'
import Group from '../images/group.png'
import Balloon from '../images/textballoon.png'
import Menu1 from '../images/menu1.svg' 
import Menu2 from '../images/menu2.svg'
import Menu3 from '../images/menu3.svg'
import Slider from './Slider/Slider';
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

function Feature(props) {
  const { t, i18n } = useTranslation()
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  return (
    // <div className="inner">
    <>
    <div className={`feature inner`}>      
      <div className="feature-title-box">
        <div className="feature-sub-title">{t("feature_title1-1")}</div>        
        <h1 className="feature-title">{t("feature_title1-2")}</h1>        
      </div>      
      </div>    
      <Slider></Slider> 
      {/* <div className="feature-contents-box">
        <div className="feature-content-wrap">
          <div className="feature-content">
            <div className="feature-content-title">{t("feature_sub_title1")}</div>          
            <p className="feature-content-text" >
              {t("feature_sub_title1_content1")}<br/>
              {t("feature_sub_title1_content2")}<br/>
              {t("feature_sub_title1_content3")}<br/>
              {t("feature_sub_title1_content4")}
            </p>
          </div>
          <div className="feature-content-img"><img src={Menu1}/></div>
        </div>
        <div className="feature-content-wrap">
          <div className="feature-content">
            <div className="feature-content-title">{t("feature_sub_title2")}</div>
            <p className="feature-content-text">
              {t("feature_sub_title2_content1")}<br/>
              {t("feature_sub_title2_content2")}<br/>
              {t("feature_sub_title2_content3")}<br/>
              {t("feature_sub_title2_content4")}
            </p>                    
          </div>        
          <div className="feature-content-img"><img src={Menu2}/></div>
        </div>
        <div className="feature-content-wrap">
          <div className="feature-content">
            <div className="feature-content-title">{t("feature_sub_title3")}</div>
            <p className="feature-content-text">
              {t("feature_sub_title3_content1")}<br/>
              {t("feature_sub_title3_content2")}<br/>
              {t("feature_sub_title3_content3")}<br/>
              {i18n.language=='en' ?
                t("feature_sub_title3_content4")
                : <br/>
              }
            </p>
          </div>
          <div className="feature-content-img"><img src={Menu3}/></div>  
        </div>
      </div>       */}
    
    </>
  );
}

export default Feature;