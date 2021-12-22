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
  const isGalaxyFold = useMediaQuery({ query: '(max-width: 281px)' })

  return (    
    <section className="visual">      
      <div className={`visual-contents-box `}>
        <div className="visual-contents-left">
          <h1 className="visual-main-title">
            {isDesktop &&
              (i18n.language === "ko" ?
              <p>{t("visual_title1_content1")}<br/>{t("visual_title1_content2")}</p>
              :<p>{t("visual_title1_content1")}</p>)
            }
            {isMobile &&
              <p>{t("Mvisual_title1_content1")}<br/>{t("Mvisual_title1_content2")}</p>
            }
          </h1>
          {isDesktop &&
            <p className="visual-text-contents">
              { 
                i18n.language === 'ko' ?
                // <img src={visual_ko}/>
                <article>
                  <p>
                    기존 사내 시스템 및 웹 기반 App과 연동 불가...<br/>
                    협업 콘텐츠의 정보 파편화...<br/>
                    메신저 내 메시지 및 파일의 낮은 보안 수준...<br/>
                  </p>
                  <br/>
                  <p>
                    사내 메신저 및 다양한 협업툴을 도입하면서<br/>
                    하이브리드 워크 플레이스를 구축하며 업무 생산성은 높아졌지만,<br/>
                    많은 기업 및 기관에서 실제로 위와 같은 어려움들을 겪고 있습니다.<br/>
                  </p>
                  <br/>
                  <p>
                    이제 업무 생산성을 높이면서도<br/>
                    위와 같은 문제들을 해결하는 <b>차세대 메신저</b>가 필요합니다.
                  </p>
                </article>
                : 
                <p>
                  Looking for a messaging app that connects with enterprise applications and systems?<br/>
                  Dealing with redundant, obsolete and trivial (ROT) data issues?<br/>
                  Facing security challenges and risks relating to messaging app?<br/>
                  <br/>
                  Enterprise messaging is the backbone of collaboration and no doubt messaging apps enhance productivity and help build a hybrid workplace.  However, organizations face various challenges as the business environment's diversity and complexity grow, including the issues mentioned above.<br/>
                  <br/>
                  The next generation of enterprise messaging is now available, virtualizing messaging across business applications and systems, allowing organizations to consolidate communication channels, simplify collaboration and enable the highest level of security.<br/>
                </p>
              }              
            </p>
          } 
          {isMobile &&
            <p className="visual-text-contents">              
              { 
                i18n.language == 'ko' ?                
                <article>
                  <p>
                    기존 사내 시스템 및 웹 기반 App과 연동 불가...<br/>
                    협업 콘텐츠의 정보 파편화...<br/>
                    메신저 내 메시지 및 파일의 낮은 보안 수준...<br/>
                  </p>
                  <br/>
                  <p>
                    사내 메신저 및 다양한 협업툴을 도입하면서<br/>
                    하이브리드 워크 플레이스를 구축하며<br/>
                    업무 생산성은 높아졌지만, 많은 기업 및 기관에<br/>
                    서 실제로 위와 같은 어려움들을 겪고 있습니다.<br/>
                  </p>
                  <br/>
                  <p>
                    이제 업무 생산성을 높이면서도<br/>
                    위와 같은 문제들을 해결하는 <b>차세대 메신저</b>가 필요합니다.
                  </p>
                </article>
                :
                <p>
                  Looking for a messaging app that connects with enterprise applications and systems?<br/>
                  Dealing with redundant, obsolete and trivial (ROT) data issues?<br/>
                  Facing security challenges and risks relating to messaging app?<br/>
                  <br/>
                  Enterprise messaging is the backbone of collaboration and no doubt messaging apps enhance productivity and help build a hybrid workplace.  However, organizations face various challenges as the business environment's diversity and complexity grow, including the issues mentioned above.<br/>
                  <br/>
                  The next generation of enterprise messaging is now available, virtualizing messaging across business applications and systems, allowing organizations to consolidate communication channels, simplify collaboration and enable the highest level of security.<br/>
                </p>
              }
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