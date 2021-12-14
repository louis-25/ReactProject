import React from 'react';
import paper from '../images/Brochure.svg'
import down from '../images/phonedownload.svg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import aboutbadge_ko from '../images/aboutbadge_ko.svg'
import aboutbadge_en from '../images/aboutbadge_en.svg'
import mobile_badge from '../images/mobile_badge.svg'
import mobile_badge_en from '../images/mobile_badge_en.svg'

function Brochure(props) {
  const { t, i18n } = useTranslation()
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <>
      <div className="brochure inner">
        <div className='brochure-icon-box'>
          <div className='brochure-icon'>
            <div className='icon-circle'>
              <img src={paper}/>
            </div>
            <div className="brochure-icon-title">{t("brochure_icon1_title")}</div>
            <div className="brochure-icon-content">{t("brochure_icon1_content")}</div>
            {/* <Link to="" target="_blank" className="brochure-icon-download">{t("brochure_icon1_download")}</Link> */}
            <a href="Brochure_Fasoo Fireside.pdf" target="_blank" className="brochure-icon-download">{t("brochure_icon1_download")}</a>
          </div>
          <div className='brochure-icon'>
          <div className='icon-circle'><img src={down}/></div>
            <div className="brochure-icon-title">{t("brochure_icon2_title")}</div>
            <div className="brochure-icon-content">{t("brochure_icon2_content")}</div>
            <a href="https://apps.apple.com/kr/app/fasoo-fireside/id1577112344#?platform=iphone" target="_blank" className="brochure-icon-download">iOS</a>
            <a href="https://play.google.com/store/apps/details?id=com.fasoo.m.chat&hl=ko&gl=US" target="_blank" className="brochure-icon-download"> Android</a>          
          </div>
        </div>      
      </div>
      { isDesktop &&
      <div className="brochure-about-badge inner">
        <div className="badge-contents">
        {i18n.language === 'ko' ? <img src={aboutbadge_ko}/> : <img src={aboutbadge_en}/>}
        {i18n.language === 'ko' ? <a href="https://www.fasoo.com/" target="_blank" className="brochure-about-btn"></a>
        : <a href="https://en.fasoo.com/" target="_blank" className="brochure-about-btn"></a>}
        </div>
      </div>
      }
      {
        isMobile && 
        <div className="brochure-badge-box">
          {i18n.language==='ko' ? <img src={mobile_badge} /> : <img src={mobile_badge_en}/>}
          {i18n.language === 'ko' ? <a href="https://www.fasoo.com/" target="_blank" className="brochure-about-btn"></a>
        : <a href="https://en.fasoo.com/" target="_blank" className="brochure-about-btn"></a>}
        </div>
      }
    </>
  );
}

export default Brochure;