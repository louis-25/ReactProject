import React from 'react';
import style from './About.module.css'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'
import Wrapsody from '../../images/wrapsody.svg'
import WrapsodyEco from '../../images/wrapsodyeco.svg'
import Drm from '../../images/drm.svg'
import { Link } from 'react-router-dom';

function About(props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const { t, i18n } = useTranslation()

  const goToCompany = () => {
    if(i18n.language == 'ko'){
      window.open("https://www.fasoo.com/about-us")
    }else if(i18n.language == 'en') {
      window.open("https://en.fasoo.com/company/")
    }
  }
  return (    
    <div className={style.about}>      
      <div className={`${style.titleBox} inner`}>
        <div className={style.subTitle}>회사 소개</div>
        <h1 className={style.title}>Fasoo 솔루션과 함께하면 Next Level의 보안성과 효율성 확보!</h1>
      </div>    
      <div className={`${style.contentBox} inner`}>
        <div className={style.content}>
        <div className={style.imgBox}><img src={Wrapsody} /></div>
          <div className={style.contentTitle}>콘텐츠 기반 채팅 제공</div>
          <p>
            문서 자산화 플랫폼 Wrapsdoy와 연동해
            협업 데이터 암호화와 Wrapping 된 
            콘텐츠 기반 채팅 제공
          </p>
          <a href="https://www.fasoo.com/products/wrapsody" target="_blank" className={style.moreBtn}>더 알아보기</a>
        </div>
        <div className={style.content}>
        <div className={style.imgBox}><img src={WrapsodyEco} /></div>
          <div className={style.contentTitle}>콘텐츠 기반 채팅 제공</div>
          <p>
            문서 자산화 플랫폼 Wrapsdoy와 연동해
            협업 데이터 암호화와 Wrapping 된 
            콘텐츠 기반 채팅 제공
          </p>
          <a href="https://www.fasoo.com/products/wrapsody-eco" target="_blank" className={style.moreBtn}>더 알아보기</a>
        </div>
        <div className={style.content}>
          <div className={style.imgBox}><img src={Drm} /></div>
          <div className={style.contentTitle}>콘텐츠 기반 채팅 제공</div>
          <p>
            문서 자산화 플랫폼 Wrapsdoy와 연동해
            협업 데이터 암호화와 Wrapping 된 
            콘텐츠 기반 채팅 제공
          </p>
          <a href="https://www.fasoo.com/products/fasoo-enterprise-drm" target="_blank" className={style.moreBtn}>더 알아보기</a>
        </div>
      </div>
    </div>     
  );
}

export default About;