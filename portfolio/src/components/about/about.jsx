import React from 'react';
import style from './about.module.css'
import mediconex from '../../imgs/jobs/mediconex.png'
const About = (props) => {
    return (
      <section id="about" className={`${style.section} ${style.container}`}>
            <h1>About me</h1>
            <p>
                안녕하세요~! 즐겁게 일하고싶은 개발자 정동현입니다.<br />
                컴퓨터공학과 대학 4년과정을 무사히 졸업하였고,<br />
                Web, Android, IoT가 주요 관심분야입니다<br />
            </p>
            <div className={style.majors}>
                <div className={style.major}>
                    <div className={style.major__icon}>
                        <i class="fab fa-html5"></i>
                    </div>
                    <h2 className={style.major__title}>Front-end</h2>
                    <div className={style.major__description}>React, Vue, TypeScript</div>
                </div>
                <div className={style.major}>
                    <div className={style.major__icon}>
                        <i class="fas fa-server"></i>
                    </div>
                    <h2 className={style.major__title}>back-end</h2>
                    <div className={style.major__description}>Django, Spring Boot</div>
                </div>
                <div className={style.major}>
                    <div className={style.major__icon}>
                        <i class="fas fa-mobile"></i>
                    </div>
                    <h2 className={style.major__title}>Mobile</h2>
                    <div className={style.major__description}>Android</div>
                </div>
            </div>
            <div className={`${style.about__jobs} ${style.section}`}>
                <a
                    href="http://www.mediconex.co.kr/"
                    target="_blank"
                    rel="noreferrer"
                    className={style.job}
                >
                    <img
                        src={mediconex}
                        alt="mediconex"
                        className="job__logo"
                        width="150px"
                    />
                    <div className={style.job__description}>
                        <p className={style.job__name}>메디코넥스 IoT개발팀</p>
                        <p className={style.job__period}>2019/12 ~ 2020/02</p>
                    </div>
                </a>
            </div>
        </section>
    )
  }

export default About;