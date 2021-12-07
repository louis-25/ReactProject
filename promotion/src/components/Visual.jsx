import React, { useContext } from 'react';
// import Contents from '../images/contents.png'
// import Contents from '../images/man.svg'
import Contents from '../images/snow.svg'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

function Visual({promotionRef}) {  

  const goToPromotion = (e) => {    
    e.preventDefault()
    promotionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })    
  }
  const { t, i18n } = useTranslation()
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (    
    <section className="visual">      
      <div className={`visual-contents-box inner`}>
        <div className="visual-contents-left">
          <h1 className="visual-main-title">
            {isDesktop && 
              <p style={{width:"610px"}}>{t("visual_title1_content1")}<br/>{t("visual_title1_content2")}</p>
            }
            {isMobile &&
              <p>{t("Mvisual_title1_content1")}<br/>{t("Mvisual_title1_content2")}</p>
            }
          </h1>
          {isDesktop &&
            <p className="visual-text-contents">
              {t("visual_title2_content1")}<br/>
              {t("visual_title2_content2")}<br/>
              {t("visual_title2_content3")}<br/>
              {i18n.language == 'ko' &&
                'Fireside를 지금 바로 만나보세요.'
              }              
            </p>
          } 
          {isMobile &&
            <p className="visual-text-contents">
              {t("Mvisual_title2_content1")}<br/>
              {t("Mvisual_title2_content2")}<br/>
              {t("Mvisual_title2_content3")}<br/>
              {t("Mvisual_title2_content4")}
              {
                i18n.language == 'ko' && <br/>                
              }
              {
                i18n.language == 'ko' && '지금 바로 만나보세요.'
              }
            </p>         
          } 
          <div className="visual-btn-box">
            <input className="visual-btn" onClick={goToPromotion} type="button" value={t("visual_promotion_btn")}></input>
          </div>
        </div>
        <div className="visual-contents-right">
          <div className="img-box">
            <img src={Contents}/>          
          </div>
        </div>        
        <div className="visual-btn-box2">
          <input className="visual-btn" onClick={goToPromotion} type="button" value={t("visual_promotion_btn")}></input>
        </div>
      </div>
    </section>                
  );
}

export default Visual;