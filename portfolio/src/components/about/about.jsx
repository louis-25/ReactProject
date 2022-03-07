import React from 'react';
import style from './about.module.css'
import mediconex from '../../imgs/jobs/mediconex.png'
import fasoo from '../../imgs/jobs/fasoo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const About = (props) => {
    return (
        <section className={`${style.section} ${style.container} ${style.about}`}>
            <h1>About me</h1>
            <h3 style={{lineHeight:"30px"}}>
                안녕하세요~! <br/>
                배움이 즐거운 개발자<br/>
                정동현입니다.<br/>                
            </h3>
            <div className={style.majors}>
                <div className={style.major}>
                    <div className={style.major__icon}>
                        <div className={style.icon} style={{color: "var(--color-blue-light)"}}><FontAwesomeIcon icon={faReact}/></div>
                    </div>
                    <h2 className={style.major__title}>Front-end</h2>
                    <div className={style.major__description}>React / Vue / TypeScript</div>
                </div>
                <div className={style.major}>
                    <div className={style.major__icon}>
                        <div className={style.icon} style={{color: "var(--color-green)"}}><FontAwesomeIcon icon={faNodeJs}/></div>
                    </div>
                    <h2 className={style.major__title}>Back-end</h2>
                    <div className={style.major__description}>Node.js / Spring Boot</div>
                </div>
                <div className={style.major}>
                    <div className={style.major__icon}>
                        <div className={style.icon}><FontAwesomeIcon icon={faMobile}/></div>
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
                        className={style.job__logo}
                        width="150px"
                    />
                    <div className={style.job__description}>
                        <p className={style.job__name}>메디코넥스 IoT개발팀</p>
                        <p className={style.job__period}>2019/12 ~ 2020/02</p>
                    </div>
                </a>
                <a
                    href="https://www.fasoo.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={style.job}
                >
                    <img
                        src={fasoo}
                        alt="mediconex"
                        className={style.job__logo}
                        width="130px"                        
                    />
                    <div className={style.job__description}>
                        <p className={style.job__name}>Fasoo 랩소디개발팀</p>
                        <p className={style.job__period}>2021/07 ~ 재직중</p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default About;