import React from 'react';

function About(props) {
  return (
    // <div className="inner">
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
    // </div>
  );
}

export default About;