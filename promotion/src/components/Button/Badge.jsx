import React from 'react';
import style from './Badge.module.css'
import badgeCircle from './badgeCircle.svg'

function Badge(props) {
  return (
    <div className={`${style.badgeBox}`}>
      <div className={style.contents}>
        <div className={style.text}>
          {/* <div className={style.circle}></div> */}
          <p className={style.main}>
            데이터 보안 전문기업 Fasoo의 특별한 서비스를 만나보세요
          </p>
          <p className={style.sub}>
            Fasoo는 데이터 보안, 애플리케이션 보안, 디지털 문서 플랫폼, 빅데이터, 생산성 서비스 영역에서 디지털 비즈니스를 위한 인텔리전스 전략을 제공합니다.
          </p>
        </div>
        <div className={style.buttonBox}>
          <a href="https://www.fasoo.com/" className={style.button}>홈페이지 방문</a>
        </div>
      </div>
    </div>
  );
}

export default Badge;