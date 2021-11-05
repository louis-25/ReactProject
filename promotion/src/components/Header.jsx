import React, { useContext, useMemo, useRef } from 'react';
import Logo from '../images/logo.png'
import {ScrollContext} from '../context/ScrollContext'
import classNames from 'classnames'

function Header({featureRef, promotionRef, aboutRef}) {
  const [scroll, setScroll] = useContext(ScrollContext)
  const topRef = useRef()
  const goToFeature = (e) => {            
    e.preventDefault()
    // window.scrollTo({
    //   top: featureRef.current.getBoundingClientRect().y + window.pageYOffset,      
    //   behavior: "smooth"
    // })   
    featureRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  const goToPromotion = (e) => {
    e.preventDefault()
    // console.log(promotionRef.current.getBoundingClientRect())
    // window.scrollTo({
    //   top: promotionRef.current.getBoundingClientRect().y + window.pageYOffset,      
    //   behavior: "smooth"
    // })   
    promotionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  const goToTop = async(e) => {        
    window.scrollTo({
      top: 0,      
      behavior: "smooth"
    })    
  }  

  return (        
    <>
    <div className="inner">
      <header ref={topRef} className='header'>
        <div ><a className="logo"><img src={Logo} onClick={goToTop}/></a></div>
        <nav>
          <ul className="nav-menu">
            <li>
              <a href="/index.html#feature" onClick={goToFeature}>주요 기능</a>
            </li>
            <li>
              <a href="/index.html#price" onClick={goToPromotion}>체험 신청</a>
            </li>
            <li>
              <a href="https://www.fasoo.com/about-us" target="_blank">회사소개</a>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li>
              <a className="loginBtn" href="https://portal.wrapsody.com/login" target="_blank">로그인</a>
            </li>
          </ul>
        </div>
      </header>      
    </div>
    <div className={classNames('header-cover',  scroll>0 && 'header-active')}></div>
    </>
  );
}

export default Header;