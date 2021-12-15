import React, { useContext } from 'react';
// import Contents from '../images/contents.png'
// import Contents from '../images/man.svg'
import Contents from '../images/snow.svg'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'
import visual_ko from '../images/lang/visual_ko.svg'
import visual_en from '../images/lang/visual_en.svg'
import Mvisual_ko from '../images/lang/Mvisual_ko.svg'
import Mvisual_en from '../images/lang/Mvisual_en.svg'

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
              i18n.language === "ko" ?
              <p>{t("visual_title1_content1")}<br/>{t("visual_title1_content2")}</p>
              :<p>{t("visual_title1_content1")}</p>
            }
            {isMobile &&
              <p>{t("Mvisual_title1_content1")}<br/>{t("Mvisual_title1_content2")}</p>
            }
          </h1>
          {isDesktop &&
            <p className="visual-text-contents">
              { 
                i18n.language == 'ko' ?
                <img src={visual_ko}/>
                : 
                <p>
                  Looking for a messaging app that connects with enterprise applications and systems…<br/>
                  Dealing with redundant, obsolete and trivial (ROT) data issues…<br/>
                  Facing security challenges and risks relating to messaging app…<br/>
                  <br/>
                  Enterprise messaging is the backbone of collaboration and no doubt messaging apps enhance productivity and help build a hybrid workplace.  However, organizations face various challenges as the business environment's diversity and complexity are growing, including the issues mentioned above.<br/>
                  <br/>
                  The next generation of enterprise messaging is now available, virtualizing messaging across business applications and systems, allowing organizations to consolidate communication channels, simplify collaboration and enable the highest level of security.<br/>

                </p>
              }
              {/* {t("visual_title2_content1")}<br/>
              {t("visual_title2_content2")}<br/>
              {t("visual_title2_content3")}<br/>
              {i18n.language == 'ko' &&
                'Fireside를 지금 바로 만나보세요.'
              }*/}
            </p>
          } 
          {isMobile &&
            <p className="visual-text-contents">
              {i18n.language==='ko' ? <img src={Mvisual_ko}/> : <img src={Mvisual_en}/>}
              {/* {t("Mvisual_title2_content1")} */}
              {/* <br/>
              {t("Mvisual_title2_content2")}<br/>
              {t("Mvisual_title2_content3")}<br/>
              {t("Mvisual_title2_content4")} */}
              {/* {
                i18n.language == 'ko' && <br/>                
              }
              {
                i18n.language == 'ko' && '지금 바로 만나보세요.'
              } */}
            </p>         
          } 
          {/* <div className="visual-btn-box">
            <input className="visual-btn" onClick={goToPromotion} type="button" value={t("visual_promotion_btn")}></input>
          </div> */}
        </div>
        <div className="visual-contents-right">
          <div className="img-box">
            <img src={Contents}/>
          </div>
        </div>
        {/* <div className="visual-btn-box2">
          <input className="visual-btn" onClick={goToPromotion} type="button" value={t("visual_promotion_btn")}></input>
        </div> */}
      </div>
    </section>                
  );
}

export default Visual;