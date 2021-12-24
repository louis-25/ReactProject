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
import Badge from './Button/Badge'

function Brochure(props) {
  const { t, i18n } = useTranslation()
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <>
      <div className="brochure inner">
        <div className='brochure-icon-box'>
          {i18n.language === "ko" &&
            <div className='brochure-icon'>
              <div className='icon-circle'>
                <img src={paper}/>
              </div>
              <div className="brochure-icon-title">{t("brochure_icon1_title")}</div>
              <div className="brochure-icon-content">{t("brochure_icon1_content")}</div>
              {/* <Link to="" target="_blank" className="brochure-icon-download">{t("brochure_icon1_download")}</Link> */}
              <a href="Brochure_Fasoo Fireside.pdf" target="_blank" className="brochure-icon-download">{t("brochure_icon1_download")}</a>
            </div>
          }
          <div className='brochure-icon'>
          <div className='icon-circle'><img src={down}/></div>
            <div className="brochure-icon-title">{t("brochure_icon2_title")}</div>
            <div className="brochure-icon-content">{t("brochure_icon2_content")}</div>
            <a href="https://apps.apple.com/kr/app/fasoo-fireside/id1577112344#?platform=iphone" target="_blank" className="brochure-icon-download">iOS</a>
            <a href="https://play.google.com/store/apps/details?id=com.fasoo.m.chat&hl=ko&gl=US" target="_blank" className="brochure-icon-download"> Android</a>          
          </div>
        </div>      
      </div>      
      <div className="brochure-about-badge inner">
        <div className="badge-contents">
          <div className="badge-contents-left">
            {isDesktop ? <div className='brochure-about-title' dangerouslySetInnerHTML={{__html:t("brochure_badge_title")}}></div>
            : <div className='brochure-about-title' dangerouslySetInnerHTML={{__html:t("Mbrochure_badge_title")}}></div>
            }            
            <div className='brochure-about-sub'>{t("brochure_badge_sub")}</div>
          </div>
          <div className="badge-contents-right">
            <div className="brochure-about-btn-box">
              {i18n.language==="ko" ? 
              <a href="https://www.fasoo.com/" target="_blank" className="brochure-about-btn">{t("brochure_badge_btn")}</a>
              : <a href="https://en.fasoo.com/" target="_blank" className="brochure-about-btn">{t("brochure_badge_btn")}</a>            
            }
            </div>
          </div>        
        </div>
      </div>      
    </>
  );
}

export default Brochure;