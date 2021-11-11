import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import Logo from '../images/logo.png'
import Berger from '../images/berger.png'
import Exit from '../images/x.png'
import { throttle, debounce, times } from 'lodash'
import classNames from 'classnames'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Feature from './Feature'

function Header({featureRef, promotionRef, aboutRef}) {  
  const [scroll, setScroll] = useState(0)
  const [sidebar, setSidebar] = useState(false)  
  const topRef = useRef()    
  const history = useHistory()

  const throttledScroll = useMemo(() =>
  throttle(() => {
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

  useEffect(()=>{
    console.log(history)
    if(history.location.pathname='/'){      
      if(history.location.state) {
        console.log('history ',history.location.state.scroll)
        switch(history.location.state.scroll){
          case 'top':
            window.scrollTo(0, 0)
            break;
          case 'feature':
            featureRef.current.scrollIntoView({
              behavior: 'auto',
              block: 'start',
              inline: 'nearest'
            })
          case 'promotion':
            promotionRef.current.scrollIntoView({
              behavior: 'auto',
              block: 'start',
              inline: 'nearest'
            })
            break;
        }
      }else {      
        console.log('state가 없어 ',history.location.state)
        window.scrollTo(0, 0)
      }
    }
  },[history])

  const goToFeature = (e) => {
    e.preventDefault()
    if(sidebar) setSidebar(false)
    console.log('feature ',history.location.pathname)
    if(history.location.pathname=='/terms'){
      history.push({
        pathname:'/',
        state:{scroll: "feature"}
      })
      featureRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
    else if(history.location.pathname=='/'){
      featureRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }
  const goToPromotion = (e) => {
    e.preventDefault()
    if(sidebar) setSidebar(false)
    if(history.location.pathname=='/terms'){
      history.push({
        pathname:'/',
        state:{scroll: "promotion"}
      })
    }
    else if(history.location.pathname=='/'){
      promotionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  const goToCompany = () => {
    if(sidebar) setSidebar(false)
    window.open("https://www.fasoo.com/about-us")
  }

  const goToLogin = () => {
    if(sidebar) setSidebar(false)
    window.open("https://portal.wrapsody.com/login")
  }    

  const sidebarToggle = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
    <div className="header-box">
      <header ref={topRef} className={`header inner`}>
        <div>
          { 
            history.location.pathname == "/terms" 
            ? <Link to={{pathname:"/",state:{scroll:"top"}}}><img src={Logo}/></Link>
            : <a href="/"><img src={Logo}/></a>
          }
        </div>
        <nav>
          <ul className="nav-menu">
            <li>
              {/* <Link to={{pathname:"/",state:{scroll:"feature"}}}>주요 기능</Link> */}
              <a href="/index.html#feature" onClick={goToFeature}>주요 기능</a>
            </li>
            <li>
              {/* <Link to={{pathname:"/",state:{scroll:"promotion"}}}>체험 신청</Link> */}
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
          <div className="sidebar-exit">      
            <img src={Exit} onClick={sidebarToggle} style={{cursor:"pointer"}}/>
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