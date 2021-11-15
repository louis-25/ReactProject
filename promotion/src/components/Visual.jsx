import React, { useContext } from 'react';
import Contents from '../images/contents.png'
import { useMediaQuery } from 'react-responsive'

function Visual({promotionRef}) {  

  const goToPromotion = (e) => {    
    e.preventDefault()
    promotionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })    
  }

  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (    
    <section className="visual">      
      <div className={`visual-contents-box inner`}>
        <div className="visual-contents-left">
          <h1 className="visual-main-title">
            {isDesktop && 
              <p>중요 문서를 공유하는 메신저는<br/>보안도 달라야합니다.</p>
            }
            {isMobile &&
              <p>중요 문서를 공유하는<br/>메신저는 보안도 달라야합니다.</p>
            }
          </h1>
          {isDesktop &&
            <p className="visual-text-contents">
              업무 효율을 높이기 위한 사내 메신저가 자칫 기업 기밀의<br/>유출 경로가 될 수 있습니다. Fireside를 통해 사내 중요<br/>정보를 안전하게 보호하고, 효율적으로 협업해 보세요.
            </p>
          } 
          {isMobile &&
            <p className="visual-text-contents">
              업무 효율을 높이기 위한 사내 메신저가 자칫<br/>기업 기밀의 유출 경로가 될 수 있습니다.<br/>Fireside를 통해 사내 중요 정보를 안전하게 보<br/>호하고, 효율적으로 협업해 보세요.
            </p>         
          } 
          <div className="visual-btn-box">
            <input className="visual-btn" onClick={goToPromotion} type="button" value="체험 신청"></input>
          </div>
        </div>
        <div className="visual-contents-right">
          <div className="img-box">
            <img src={Contents}/>          
          </div>
        </div>        
        <div className="visual-btn-box2">
          <input className="visual-btn" onClick={goToPromotion} type="button" value="체험 신청"></input>
        </div>
      </div>                          
    </section>                
  );
}

export default Visual;