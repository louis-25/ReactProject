import React from 'react';
import Internet from '../images/internet.png'
import Blog from '../images/blog.png'
import Youtube from '../images/youtube.png'
import Facebook from '../images/facebook.png'
import Insta from '../images/insta.png'

function Footer(props) {
  return (
    <footer className="footer">
      <div className="inner">
      <div className="footer-menu">
        <div className="footer-menu-left">
          <ul>
            <li>© 2021 Fasoo</li>
            <li><a href="">이용약관</a></li>
            <li><a href="">개인정보처리방침</a></li>
          </ul>
        </div>
        <div className="footer-menu-right">
          <ul>
            <li><img src={Internet}/></li>
            <li><img src={Blog}/></li>
            <li><img src={Youtube}/></li>
            <li><img src={Facebook}/></li>
            <li><img src={Insta}/></li>
          </ul>
        </div>
      </div>
      <div className="footer-text">
        <p>
          주식회사 파수 | 대표이사 조규곤 | 사업자등록번호 1208606582
        </p>
        <p>
          주소 : 서울특별시 마포구 월드컵북로 396 (상암동 1605, 누리꿈스퀘어 비스니스타워 17층) 03925 | 전화번호 : 02-300-9300 | 전자우편주소 : helpdesk@fasoo.com
        </p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;