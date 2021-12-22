import React from 'react';
import style from './About.module.css'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom';
import ko_data from '../../data/about/ko_about.js'
import en_data from '../../data/about/en_about.js'

function About(props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const { t, i18n } = useTranslation()
  let contents
  if(i18n.language === "ko") {contents = ko_data}
  else if(i18n.language === "en") {contents = en_data}

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
        {i18n.language === 'ko' && <div className={style.subTitle}>{t("about_title")}</div>}        
        {isDesktop ? <div className={style.title} dangerouslySetInnerHTML={{__html:t("about_title_sub")}}></div>
        : <div className={style.title} dangerouslySetInnerHTML={{__html:t("Mabout_title_sub")}}></div>}
        
      </div>
      <div className={`${style.contentBox} inner`}>
        {menu(contents[0])}
      </div>
    </div>     
  );

  function menu(contents) {
    return(
      <>
        {
          contents.map((content)=>{
            return(
              <div className={style.content}>
                <div className={style.imgBox}><img src={content.img} /></div>
                <div className={style.contentTitle} dangerouslySetInnerHTML={{__html: content.title}}></div>
                <p dangerouslySetInnerHTML={{__html: content.sub}}></p>
                <a href={content.href} target="_blank" className={style.moreBtn}>{i18n.language=='ko' ? "더 알아보기" : "Learn More"}</a>
              </div>
            )
          })
        }        
      </>
    )
  }
}

export default About;