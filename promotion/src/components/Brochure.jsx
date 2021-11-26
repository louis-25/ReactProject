import React from 'react';
import paper from '../images/Brochure.svg'
import down from '../images/phonedownload.svg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Brochure(props) {
  const { t, i18n } = useTranslation()

  return (
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
  );
}

export default Brochure;