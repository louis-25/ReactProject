import React from 'react';
import style from './Slider.module.css'
/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import document from '../../images/slider/documentFile.svg'
import special from '../../images/slider/specialFile.svg'
import ppt from '../../images/slider/pptFile.svg'
import design from '../../images/slider/designFile.svg'
import chat from '../../images/slider/chat.svg'
import document2 from '../../images/slider/document2.svg'
import search from '../../images/slider/search.svg'

function Slider(props) {
  SwiperCore.use([Navigation, Pagination])
  
  return (    
    <div>
      <Swiper
        className={style.swiper}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={`${style.slide_title} inner`}>
            <div className={style.main}>
              <div className={style.number}>2</div>
              콘텐츠 중심 커뮤니케이션</div>
            <div className={style.sub}>협업콘텐츠에 집중할 수 있는 콘텐츠 중심 커뮤니케이션을 실현합니다.</div>
          </div>
          <div className={style.feature}>
            <div className={style.feature_content}>
              <div className={style.imgBox}><img src={document}/></div>
              <div>일반 문서</div>
            </div>
            <div className={style.feature_content}>
              <div className={style.imgBox}><img src={ppt}/></div>
              <div>일반 문서</div>
            </div>
            <div className={style.feature_content}>
            <div className={style.imgBox}><img src={design}/></div>
              <div>일반 문서</div>
            </div>
            <div className={style.feature_content}>
            <div className={style.imgBox}><img src={special}/></div>
              <div>일반 문서</div>
            </div>
          </div>
          <div className={style.feature_menu}>
            <div className={style.feature_menu_content}>
            <div className={style.menu_imgBox}><img src={chat}/></div>            
              <div className={style.menu_title}>협업 콘텐츠 기반 채팅</div>              
              <p className={style.menu_content}>협업 콘텐츠를 중심으로 채팅방이 자동 생성돼 협업 참여 인원과의 효율적인 커뮤니케이션</p>
            </div>
            <div className={style.feature_menu_content}>
            <div className={style.menu_imgBox}><img src={document2}/></div>
              <div className={style.menu_title}>협업 콘텐츠 기반 채팅</div>              
              <p className={style.menu_content}>협업 콘텐츠를 중심으로 채팅방이 자동 생성돼 협업 참여 인원과의 효율적인 커뮤니케이션</p>
            </div>
            <div className={style.feature_menu_content}>
              <div className={style.menu_imgBox}><img src={search}/></div>
              <div className={style.menu_title}>협업 콘텐츠 기반 채팅</div>              
              <p className={style.menu_content}>협업 콘텐츠를 중심으로 채팅방이 자동 생성돼 협업 참여 인원과의 효율적인 커뮤니케이션</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;