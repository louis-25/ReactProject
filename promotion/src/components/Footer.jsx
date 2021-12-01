import React from 'react';
import Internet from '../images/internet.svg'
import Blog from '../images/blog.svg'
import Youtube from '../images/youtube.svg'
import Facebook from '../images/facebook.svg'
import Insta from '../images/insta.svg'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function Footer(props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const history = useHistory()

  const { t, i18n } = useTranslation()
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')  

  const changeLanguage = () => {
    console.log(i18n.language)
    if(i18n.language == 'ko') {
      i18n.changeLanguage('en')
      // changelanguageToEn()      
    }
    else {
      i18n.changeLanguage('ko')
      // changelanguageToKo()
    }
    window.scrollTo(0,0)
  }

  const goToBlog = () => {
    window.open("https://blog.naver.com/fs0608")
  }
  const goToFacebook = () => {
    window.open("https://ko-kr.facebook.com/fasoo.korea/")
  }
  const goToYoutube = () => {
    window.open("https://www.youtube.com/user/FasooMarcom")
  }
  const goToInsta = () => {
    window.open("https://www.instagram.com/fasoo_official/")
  }
  
  return (    
    <footer className="footer">
      {isDesktop &&
      <div className="inner">
      <div className="footer-menu">
        <div className="footer-menu-left">
          <ul>
            <li>© 2021 Fasoo</li>
            {/* <li><a href="/terms">이용약관</a></li> */}
            <li><Link to={{pathname:"/terms"}}>{t("terms_title")}</Link></li>
            <li><Link to={{pathname:"/privacy"}}>{t("privacy_title")}</Link></li>
          </ul>
        </div>
        <div className="footer-menu-right">
          <ul>
            <li><img src={Internet} onClick={changeLanguage}/></li>
            <li><img src={Blog} onClick={goToBlog}/></li>
            <li><img src={Youtube} onClick={goToYoutube}/></li>
            <li><img src={Facebook} onClick={goToFacebook}/></li>
            <li><img src={Insta} onClick={goToInsta}/></li>
          </ul>
        </div>
      </div>
      <div className="footer-text">
        <p>
        {t("footer_content1")}
        </p>
        <p>
          {t("footer_content2")}
        </p>
      </div>
      </div>
      }
      {isMobile &&
      <div className="mFooter">
        <div className="mFooter-menu">
          <ul>          
            <li><Link to={{pathname:"/privacy"}}>{t("privacy_title")}</Link></li>
            <li><Link to={{pathname:"/terms"}}>{t("terms_title")}</Link></li>
            <li><Link to={{pathname:"#"}}>{t("terms_paid")}</Link></li>
          </ul>
        </div>
        <div className="mFooter-icon">
          <ul>
            <li><img src={Internet} onClick={changeLanguage}/></li>
            <li><img src={Blog} onClick={goToBlog}/></li>
            <li><img src={Youtube} onClick={goToYoutube}/></li>
            <li><img src={Facebook} onClick={goToFacebook}/></li>
            <li><img src={Insta} onClick={goToInsta}/></li>
          </ul>
        </div>        
        <li className="mFooter-copyright">© 2021 Fasoo</li>
      </div>
      }
    </footer>
  );
}

export default Footer;