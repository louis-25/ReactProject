import React from 'react';
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
import mobile_menu1 from '../../images/slider/mobile_menu1.svg'
import mobile_menu2 from '../../images/slider/mobile_menu2.svg'
import mobile_menu3 from '../../images/slider/mobile_menu3.svg'

import { useMediaQuery } from 'react-responsive'
import data from '../../data/slide.js'

function Slider(props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  SwiperCore.use([Navigation, Pagination, Autoplay])
  const contents = data  
  return (    
    <div>      
      {isDesktop &&
      <Swiper
        className={style.swiper}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{delay:10000, disableOnInteraction: false}}
        navigation
        pagination={{ 
          clickable: true,                    
          // bulletClass: `${style.swiper_pagination}`,
          // bulletElement: `${style.swiper_pagination_bullet}`,
          // bulletActiveClass: `${style.swiper_pagination_bullet_active}`
        }}
      >      
      <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
              <div className={style.main}>
                <div className={style.number}>1</div>
                사내 시스템과 완벽 연동</div>
              <div className={style.sub}>사내 시스템과 효율적으로 연동되며 사용자 편의성을 극대화합니다.</div>
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
              콘텐츠 중심 커뮤니케이션</div>
            <div className={style.sub}>협업콘텐츠에 집중할 수 있는 콘텐츠 중심 커뮤니케이션을 실현합니다.</div>
          </div>
          <div className={`${style.feature} ${style.menu2} inner`}>
            <div className={style.feature_content}>
              <img src={menu2}/>
            </div>            
          </div>
          {menu(contents[1])}
        </SwiperSlide>        
        <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
            <div className={style.main}>
              <div className={style.number}>3</div>
              강력한 보안</div>
            <div className={style.sub}>공유 콘텐츠를 보호하는 강력한 보안이 필요합니다.</div>          
          <div className={`${style.feature} ${style.menu3}`}>
            <div className={`${style.feature_content}`}>
              <img src={menu3}/>
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
        autoplay={{delay:100000, disableOnInteraction: false}}
        pagination={{ 
          clickable: true,
          // bulletClass: `${style.swiper_pagination}`,
          // bulletElement: `${style.swiper_pagination_bullet}`,
          // bulletActiveClass: `${style.swiper_pagination_bullet_active}`
        }}
      >      
      <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
              <div className={style.main}>
                <div className={style.number}>1</div>
                사내 시스템과 완벽 연동</div>
              <div className={style.sub}>사내 시스템과 효율적으로 연동되며 사용자 편의성을 극대화합니다.</div>
            <div className={style.feature}>
              <div className={`${style.feature_content} ${style.menu1}`}>
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
              콘텐츠 중심 커뮤니케이션</div>
            <div className={style.sub}>협업콘텐츠에 집중할 수 있는 콘텐츠 중심 커뮤니케이션을 실현합니다.</div>
          </div>
          <div className={`${style.feature} ${style.menu2} inner`}>
            <div className={style.feature_content}>
              <img src={mobile_menu2}/>
            </div>            
          </div>
          {menu(contents[1])}
        </SwiperSlide>        
        <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
            <div className={style.main}>
              <div className={style.number}>3</div>
              강력한 보안</div>
            <div className={style.sub}>공유 콘텐츠를 보호하는 강력한 보안이 필요합니다.</div>          
          <div className={`${style.feature} ${style.menu3}`}>
            <div className={`${style.feature_content}`}>
              <img src={mobile_menu3}/>
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
                  <div className={style.menu_title}>{content.title}</div>
                  <p className={style.menu_content}>{content.sub}</p>
                </div>
              )
            })
          }          
        </div>      
    )
  }
}

export default Slider;