import React from 'react';
import paper from '../images/Brochure.svg'
import down from '../images/phonedownload.svg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import aboutbadge from '../images/aboutbadge.svg'
import mobile_badge from '../images/mobile_badge.svg'

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
            <Link to="#" target="_blank" className="brochure-icon-download">iOS</Link>
            <Link to="#" target="_blank" className="brochure-icon-download"> Android</Link>          
          </div>
        </div>      
      </div>
      { isDesktop &&
      <div className="brochure-about-badge inner">
        <div className="badge-contents">
        <div className="brochure-about-contents">
          <div className="brochure-about-title">데이터 보안 전문기업 Fasoo의 특별한 서비스를 만나보세요</div>
          <div className="brochure-about-sub">Fasoo는 데이터 보안, 애플리케이션 보안, 디지털 문서 플랫폼, 빅데이터, 생산성 서비스 영역에서<br/> 
          디지털 비즈니스를 위한 인텔리전스 전략을 제공합니다. </div>
        </div>
        <img src={aboutbadge} />                  
        <a href="https://www.fasoo.com/" target="_blank" className="brochure-about-btn"></a>          
        </div>
      </div>
      }
      {
        isMobile && 
        <div className="brochure-badge-box">
          <img src={mobile_badge} />          
          <a href="https://www.fasoo.com/" target="_blank" className="brochure-about-btn"></a>          
        </div>
      }
    </>
  );
}

export default Brochure;