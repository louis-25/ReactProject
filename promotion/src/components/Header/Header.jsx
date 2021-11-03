import React from 'react';
import './Header.css'
import Logo from '../../images/logo.png'

function Header(props) {
  return (
    <header className="header">
      <a className="logo" href="/"><img src={Logo} /></a>
      <nav>
        <ul className="nav-menu">
          <li>
            <a href="/index.html#feature">주요 기능</a>
          </li>
          <li>
            <a href="/index.html#price">체험 신청</a>
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
  );
}

export default Header;