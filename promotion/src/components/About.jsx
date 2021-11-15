import React from 'react';
import { useMediaQuery } from 'react-responsive'

function About(props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const goToCompany = () => {
    window.open("https://www.fasoo.com/about-us")
  }
  return (
    <>
      { isDesktop &&
      <div className="about">
        <div className="about-title">
          데이터 보안 전문 기업 Fasoo의<br/>
          특별한 서비스를 만나보세요
        </div>
        <p className="about-text">
          Fasoo는 데이터 보안, 애플리케이션 보안, 디지털 문서 플랫폼, 빅데이터,<br/>
          생산성 서비스 영역에서 디지털 비즈니스를 위한<br/>
          인텔리전스 전략을 제공합니다.
        </p>      
        <input className="about-btn" type="button" onClick={goToCompany} value="회사 소개"/>
      </div>    
      }
      { isMobile &&
        <div className="about">          
          <div className="about-title">
          데이터 보안 전문 기업<br/> 
          Fasoo의 특별한 서비스를<br/>만나보세요
        </div>
        <p className="about-text">
          Fasoo는 데이터 보안, 애플리케이션 보안, 디지털<br/>
          문서 플랫폼, 빅데이터,생산성 서비스 영역에서 디<br/>
          지털 비즈니스를 위한 인텔리전스 전략을<br/>
          제공합니다.
        </p>        
        <input className="about-btn" type="button" onClick={goToCompany} value="회사 소개"/>
        </div>
      }
    </>
  );
}

export default About;