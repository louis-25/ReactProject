import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import Logo from '../images/logo.png'
import Berger from '../images/berger.png'
import Exit from '../images/x.png'
import { throttle, debounce } from 'lodash';
import classNames from 'classnames'

function Header({featureRef, promotionRef, aboutRef}) {  
  const [scroll, setScroll] = useState(0)
  const [sidebar, setSidebar] = useState(false)  
  const topRef = useRef()    

  const throttledScroll = useMemo(() =>
  throttle(() => {
        console.log('스크롤 이벤트');
        console.log('y ',window.scrollY);
        setScroll(window.scrollY)
      },300),
  );

  useEffect(() => { //스크롤 이벤트 발생
    window.addEventListener('scroll', throttledScroll);
    console.log('scroll ',scroll)
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  },[]);
  const goToFeature = (e) => {            
    e.preventDefault()
    setSidebar(!sidebar)
    featureRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  const goToPromotion = (e) => {
    e.preventDefault()
    setSidebar(!sidebar)
    promotionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  const goToCompany = () => {
    sidebarToggle()
    window.open("https://www.fasoo.com/about-us")
  }

  const goToLogin = () => {
    sidebarToggle()
    window.open("https://portal.wrapsody.com/login")
  }

  const goToTop = async(e) => {            
    window.scrollTo({
      top: 0,      
      behavior: "smooth"
    })    
  }  

  const sidebarToggle = () => {
    setSidebar(!sidebar)    
  }  

  return (        
    <>
    <div className="header-box">
      <header ref={topRef} className={`header inner`}>
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
            <div>          
          <a className="loginBtn" href="https://portal.wrapsody.com/login" target="_blank">로그인</a>
        </div> 
          </ul>
          <div className="berger">
            <img onClick={sidebarToggle} src={Berger}/>
          </div>
        </nav>
      </header>   
        <div className={classNames("sidebar", sidebar ? "sidebar-on" : "sidebar-off")}>
          <div className="sidebar-header">
            <div>
              <img src={Logo} />
            </div>
            <div>      
              <img src={Exit} onClick={sidebarToggle} style={{width : '20px'}}/>
            </div>
          </div>
          <ul className="sidebar-menu">
            <li onClick={goToFeature}>주요 기능</li>
            <li onClick={goToPromotion}>체험 신청</li>
            <li onClick={goToCompany}>회사 소개</li>
          </ul>
          <div className="sidebar-login-box">
            <input className="sidebar-login-btn" onClick={goToLogin} type="submit" value="로그인"/>
          </div>
        </div>   
      </div>
    <div className={classNames('header-cover',  scroll>0 && 'header-active')}></div>    
    

    </>
  );
}

export default Header;