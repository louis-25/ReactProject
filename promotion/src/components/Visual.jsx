import React, { useContext } from 'react';
import Contents from '../images/contents.png'
import {ScrollContext} from '../context/ScrollContext'
import { useMediaQuery } from 'react-responsive'

function Visual({promotionRef}) {
  const [scroll, setScroll] = useContext(ScrollContext)

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
          <h1 className="visual-main-title">안전한 콘텐츠 공유<br/>업무 메신저</h1>
          {isDesktop &&
            <p className="visual-text-contents">
              우리는 이제 협업 과정에서 중요 자료를 안전하게 보호<br/>
              하면서 효율적인 협업 환경을 만들 수 있는 사내 메신저<br/>
              가 반드시 필요합니다
            </p>
          } 
          {isMobile &&
            <p className="visual-text-contents">
              우리는 이제 협업 과정에서 중요 자료를 안전하<br/>
              게 보호 하면서 효율적인 협업 환경을 만들 수 있<br/>
              는 사내 메신저가 반드시 필요합니다
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