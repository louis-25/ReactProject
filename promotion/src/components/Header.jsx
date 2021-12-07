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

function Header({featureRef, promotionRef, aboutRef}) {  
  const [scroll, setScroll] = useState(0)
  const [sidebar, setSidebar] = useState(false)  
  const topRef = useRef()    
  const history = useHistory()

  const { t, i18n } = useTranslation()

  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const throttledScroll = useMemo(() =>
  throttle(() => {
      // console.log('scroll ',window.scrollY)
      setScroll(window.scrollY)
    },300),
  );

  useEffect(() => { //스크롤 이벤트 발생
    window.addEventListener('scroll', throttledScroll);
    // console.log('scroll ',scroll)
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  },[]);

  useEffect(()=>{
    console.log(history)
    if(history.location.pathname='/'){
      if(history.location.state) { //state가 있는경우
        console.log('history ',history.location.state.scroll)
        switch(history.location.state.scroll){
          case 'top':
            window.scrollTo(0, 0)
            history.replace("",null)
            break;
          case 'feature':
            if(isDesktop) {
              console.log(featureRef.current.getBoundingClientRect().y)
              window.scrollTo(0, featureRef.current.getBoundingClientRect().y)
            }else {
              window.scrollTo(0, featureRef.current.getBoundingClientRect().y + 1)
            }            
            history.replace("",null)
            break;
          case 'promotion':
            console.log(promotionRef.current.getBoundingClientRect().y)
            promotionRef.current.scrollIntoView({
              behavior: 'auto',
              block: 'start',
              inline: 'nearest'
            })
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
      console.log('goToFeature ',history.location.pathname, featureRef.current.getBoundingClientRect().y)
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
      console.log('goToPromotion ',history.location.pathname,promotionRef.current.getBoundingClientRect().y )
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
    window.open("https://firesidedemo.fasoo.com/wrapmsgr/admin")
  }    

  const goToTop = () => {
    window.scrollTo(0, 0)
  }  

  const sidebarToggle = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
    <div className="header-box">
      <header ref={topRef} className={`header inner`}>
        <div>
        <Link to={{pathname:"/"}}><img src={Logo} onClick={goToTop}/></Link>
          {/* <a href="/"><img src={Logo}/></a> */}
        </div>
        <nav>
          <ul className="nav-menu">
            <li>                            
              <a href="/index.html#feature" onClick={goToFeature}>{t("header_menu1")}</a>
            </li>
            <li>              
              <a href="/index.html#price" onClick={goToPromotion}>{t("header_menu2")}</a>
            </li>
            <li>
              <a href="/index.html#company" onClick={goToCompany} target="_blank">{t("header_menu3")}</a>
            </li>           
            <div>
              <a className="loginBtn" href="https://firesidedemo.fasoo.com/wrapmsgr/admin" target="_blank">{t("header_menu4")}</a>
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
          <li onClick={goToFeature}>{t("header_menu1")}</li>
          <li onClick={goToPromotion}>{t("header_menu2")}</li>
          <li onClick={goToCompany}>{t("header_menu3")}</li>
        </ul>
        <div className="sidebar-login-box">
          <input className="sidebar-login-btn" onClick={goToLogin} type="submit" value={t("header_menu4")}/>
        </div>
      </div>
    </div>
    <div className={classNames('header-cover',  scroll>0 && 'header-active')}></div>
    </>
  );
}

export default Header;