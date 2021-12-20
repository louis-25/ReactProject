import React, { useRef, useState } from 'react';
import style from './Slider.module.css'
/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import menu1 from '../../images/slider/menu1.svg'
import menu2 from '../../images/slider/menu2.svg'
import menu3 from '../../images/slider/menu3.svg'
import menu2_en from '../../images/slider/menu2_en.svg'
import menu3_en from '../../images/slider/menu3_en.svg'
import mobile_menu1 from '../../images/slider/mobile_menu1.svg'
import mobile_menu2 from '../../images/slider/mobile_menu2.svg'
import mobile_menu3 from '../../images/slider/mobile_menu3.svg'
import mobile_menu2_en from '../../images/slider/mobile_menu2_en.svg'
import mobile_menu3_en from '../../images/slider/mobile_menu3_en.svg'
import prev from '../../images/slider/prev.svg'
import next from '../../images/slider/next.svg'

import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'
import ko_data from '../../data/slide/ko_slide.js'
import en_data from '../../data/slide/en_slide.js'
import { toInteger } from 'lodash';

function Slider(props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [swiper, setSwiper] = useState(null)
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const { t, i18n } = useTranslation()

  SwiperCore.use([Navigation, Pagination, Autoplay])
  let contents
  if(i18n.language === "ko") {contents = ko_data}
  else if(i18n.language === "en") {contents = en_data}

  const swiperParams = {
    navigation:true,
    // navigation: {prevEl: prevRef.current, nextEl: nextRef.current},
    // onBeforeInit: (swiper) => {
    //   swiper.params.navigation.prevEl = prevRef.current;
    //   swiper.params.navigation.nextEl = nextRef.current;
    //   swiper.activeIndex = mainImageIndex;
    //   swiper.navigation.update();
    // },
    pagenation: {
      clickable: true
    },
    loop: true,
    spaceBetween:0,
    slidesPerView:1,    
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),    
  };
  return (    
    <div className={`${style.sliderBox}`}>
      {isDesktop &&
      <Swiper 
        {...swiperParams} 
        ref={setSwiper}
        className={style.swiper}
        pagination={{ 
          clickable: true,
        }}
      >                  
      {/* <div className={`${style.buttonBox}`}>
        <div ref={prevRef}></div>
        <div ref={nextRef}></div>  
      </div> */}
      <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
              <div className={style.main}>
                <div className={style.number}>1</div>
                {t("feature_title1")}</div>                          
              <div className={style.sub}>{t("feature_title1_sub")}</div>
            <div className={style.feature}>
              <div className={`${style.feature_content} ${style.menu1}`}>
                <img src={menu1}/>
              </div>
            </div>
          </div>
          {menu(contents[0])}
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
            <div className={style.main}>
              <div className={style.number}>2</div>
              {t("feature_title2")}</div>
            <div className={style.sub}>{t("feature_title2_sub")}</div>
          </div>
          <div className={`${style.feature} ${style.menu2}`}>
            <div className={style.feature_content}>
              { 
                i18n.language == 'ko' ?
                <img src={menu2}/>
                : <img src={menu2_en}/>
              }
            </div>            
          </div>
          {menu(contents[1])}
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
            <div className={style.main}>
              <div className={style.number}>3</div>
              {t("feature_title3")}</div>
            <div className={style.sub}>{t("feature_title3_sub")}</div>          
          <div className={`${style.feature} ${style.menu3}`}>
            <div className={`${style.feature_content}`}>
              { 
                i18n.language == 'ko' ?
                <img src={menu3}/>
                : <img src={menu3_en}/>
              }
            </div>            
          </div>
          </div>
          {menu(contents[2])}
        </SwiperSlide>
      </Swiper>
      }
      {
        isMobile &&
        <Swiper
        className={style.swiper}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{delay:1000000, disableOnInteraction: false}}
        pagination={{ 
          clickable: true,
          // bulletClass: `${style.swiper_pagination}`,
          // bulletElement: `${style.swiper_pagination_bullet}`,
          // bulletActiveClass: `${style.swiper_pagination_bullet_active}`
        }}
      >
      <SwiperSlide>
          <div className={`${style.slide_title}`}>
              <div className={style.main}>
                <div className={style.number}>1</div>
                <div dangerouslySetInnerHTML={{__html:t("Mfeature_title1")}}></div>
                </div>
              <div className={style.sub}>{t("Mfeature_title1_sub1")}<br/>{t("Mfeature_title1_sub2")}</div>
            <div className={style.feature}>
              <div className={`${style.menu1}`}>
                <img src={mobile_menu1}/>
              </div>
            </div>
          </div>
          {menu(contents[0])}
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
            <div className={style.main}>
              <div className={style.number}>2</div>
              <div dangerouslySetInnerHTML={{__html:t("Mfeature_title2")}}></div>
              </div> 
              <div className={style.sub}>{t("Mfeature_title2_sub1")}<br/>{t("Mfeature_title2_sub2")}</div>
          </div>
          <div className={`${style.feature} ${style.menu2} inner`}>
            <div className={style.feature_content}>
              {i18n.language === "ko" ? <img src={mobile_menu2}/> : <img src={mobile_menu2_en}/>}
            </div>            
          </div>
          {menu(contents[1])}
        </SwiperSlide>        
        <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
            <div className={style.main}>
              <div className={style.number}>3</div>
              {t("feature_title3")}</div>
              <div className={style.sub}>{t("Mfeature_title3_sub1")}<br/>{t("Mfeature_title3_sub2")}</div>
          <div className={`${style.feature} ${style.menu3}`}>
            <div className={`${style.feature_content}`}>
            {i18n.language === "ko" ? <img src={mobile_menu3}/> : <img src={mobile_menu3_en}/>}
            </div>
          </div>
          </div>
          {menu(contents[2])}
        </SwiperSlide>        
      </Swiper>
      }
    </div>    
  );

  function menu(contents) {
    return(
      <div className={`${style.feature_menu} inner`}>
          {
            contents.map((content)=>{
              return(
                <div className={style.feature_menu_content}>
                  <div className={style.menu_imgBox}><img src={content.img}/></div>
                  <div className={style.menu_title} dangerouslySetInnerHTML={{__html: content.title}}></div>
                  <p className={style.menu_content} dangerouslySetInnerHTML={{__html: content.sub}}></p>
                </div>
              )
            })
          }          
        </div>      
    )
  }
}

export default Slider;