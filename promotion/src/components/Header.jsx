import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import Logo from '../images/logo.svg'
import Berger from '../images/berger.svg'
import Exit from '../images/x.png'
import { throttle } from 'lodash'
import classNames from 'classnames'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

function Header({featureRef, promotionRef, aboutRef, downloadRef}) {  
  const [scroll, setScroll] = useState(0)
  const [sidebar, setSidebar] = useState(false)  
  const topRef = useRef()    
  const history = useHistory()

  const { t, i18n } = useTranslation()

  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const throttledScroll = useMemo(() =>
  throttle(() => {      
      setScroll(window.scrollY)
    },300),
  );

  useEffect(() => { //스크롤 이벤트 발생
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  },[]);

  useEffect(()=>{    
    if(history.location.pathname='/'){
      if(history.location.state) { //state가 있는경우        
        switch(history.location.state.scroll){ //페이지 이동 시 보여줄 스크롤 위치
          case 'top':
            window.scrollTo(0, 0)
            history.replace("",null) //history 초기화
            break;
          case 'feature':
            if(isDesktop) {
              window.scrollTo(0, featureRef.current.getBoundingClientRect().y)
            }else {
              window.scrollTo(0, featureRef.current.getBoundingClientRect().y + 1)
            }
            history.replace("",null)
            break;
          case 'promotion':
            promotionRef.current.scrollIntoView({
              behavior: 'auto',
              block: 'start',
              inline: 'nearest'
            })
            history.replace("",null)
            break;
          case 'download':            
            downloadRef.current.scrollIntoView({
              behavior: 'auto',
              block: 'start',
              inline: 'nearest'
            })
            history.replace("",null)
            break;
          case 'about':            
            if(isDesktop) {              
              window.scrollTo(0, aboutRef.current.getBoundingClientRect().y)
            }else {
              window.scrollTo(0, aboutRef.current.getBoundingClientRect().y + 1)
            }            
            history.replace("",null)
            break;
        }
      }else {      
        // state가 undefined인 경우
        window.scrollTo(0, 0)
      }
    }
  },[history])

  const goToFeature = (e) => {
    e.preventDefault()
    if(sidebar) setSidebar(false)        
    if(window.location.pathname == '/'){
      featureRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }else{
      history.push({
        pathname:'/',
        state:{scroll: "feature"}
      })
    }      
  }
  const goToPromotion = (e) => {
    e.preventDefault()
    if(sidebar) setSidebar(false)    
    if(window.location.pathname == '/'){
      promotionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })            
    }else{
      history.push({
        pathname:'/',
        state:{scroll: "promotion"}
      })
    }     
  }
  const goToDownload = (e) => {
    e.preventDefault()
    if(sidebar) setSidebar(false)    
    if(window.location.pathname == '/'){
      downloadRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }else{
      history.push({
        pathname:'/',
        state:{scroll: "download"}
      })
    }     
  }
  const goToAbout = (e) => {
    e.preventDefault()
    if(sidebar) setSidebar(false)    
    if(window.location.pathname == '/'){
      aboutRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }else{
      history.push({
        pathname:'/',
        state:{scroll: "about"}
      })
    }
  }

  const goToCompany = (e) => {
    e.preventDefault()
    if(sidebar) setSidebar(false)
    if(i18n.language=='ko') {
      window.open("https://www.fasoo.com/about-us")
    }else if(i18n.language=='en') {
      window.open("https://en.fasoo.com/company/")
    }
  }

  const goToLogin = () => {
    if(sidebar) setSidebar(false)    
    window.open("https://portal.wrapsodyeco.com/join?type=trial")
  }    

  const goToTop = () => {
    if(sidebar) setSidebar(false)
    window.scrollTo(0, 0)
  }  

  const sidebarToggle = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
    <div className="header-box inner">
      <header ref={topRef} className={`header inner`}>
        <div>
        <Link to={{pathname:"/"}}><img src={Logo} onClick={goToTop}/></Link>          
        </div>
        <nav>
          <ul className="nav-menu">
            <li>                            
              <a href="#" onClick={goToFeature}>{t("header_menu1")}</a>
            </li>
            <li>              
              <a href="#" onClick={goToDownload} >{t("header_menu2")}</a>
            </li>
            <li>
              <a href="#" onClick={goToCompany} target="_blank">{t("header_menu3")}</a>
            </li>           
            <li>
              {/* <a className="loginBtn" href="https://portal.wrapsodyeco.com/join?type=trial" target="_blank">{t("header_menu4")}</a> */}
              <Link className="loginBtn" to={{pathname:"/free-trial"}} onClick={goToTop}>{t("header_menu4")}</Link>
            </li> 
          </ul>
          <div className="berger">
            <img onClick={sidebarToggle} src={Berger}/>
          </div>
        </nav>
      </header>
      <div className={classNames("sidebar", sidebar ? "sidebar-on" : "sidebar-off", "inner")}>
        <div className="sidebar-header">
          <div>
            <img src={Logo} />
          </div>
          <div className="sidebar-exit">      
            <img src={Exit} onClick={sidebarToggle} style={{cursor:"pointer"}}/>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li onClick={goToFeature}>{t("header_menu1")}</li>
          <li onClick={goToDownload}>{t("header_menu2")}</li>
          <li onClick={goToCompany}>{t("header_menu3")}</li>
          {/* <li onClick={goToLogin}>{t("header_menu4")}</li> */}
          <Link className="loginBtn" to={{pathname:"/free-trial"}} onClick={goToTop}>{t("header_menu4")}</Link>
        </ul>
        {/* <div className="sidebar-login-box">
          <input className="sidebar-login-btn" onClick={goToLogin} type="submit" value={t("header_menu4")}/>
        </div> */}
      </div>
    </div>
    <div className={classNames('header-cover',isMobile&&'inner',  scroll>0 && 'header-active')}></div>
    </>
  );
}

export default Header;