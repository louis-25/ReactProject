import React from 'react';
import { useMediaQuery } from 'react-responsive'

function About(props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      { isDesktop &&
      <div className="about">
        <div className="about-title">
          데이터 보안 전문 기업 Fasoo의<br/>
          특별한 서비스를 만나보세요
        </div>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
          Scelerisque diam, facilisi elementum purus tellus. Donec eu<br/>
          pretium euismod quisque sit ridiculus quis.
        </p>      
        <input className="about-btn" type="button" href="https://www.fasoo.com/about-us" value="회사 소개"/>
      </div>    
      }
      { isMobile &&
        <div className="about">          
          <div className="about-title">
          데이터 보안 전문 기업<br/> 
          Fasoo의 특별한 서비스를<br/>만나보세요
        </div>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
          Scelerisque diam, facilisi elementum purus tellus. Donec eu<br/>
          pretium euismod quisque sit ridiculus quis.
        </p>      
        <input className="about-btn" type="button" href="https://www.fasoo.com/about-us" value="회사 소개"/>
        </div>
      }
    </>
  );
}

export default About;