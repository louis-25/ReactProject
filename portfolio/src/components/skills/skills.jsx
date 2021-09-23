import React from 'react';
import style from './skills.module.css'
import 정보처리기사 from '../../imgs/jobs/정보처리기사.jpg'

const Skills = (props) => {
    return (
        <section className={`${style.skill__main} ${style.section}`}>
            <div className={style.section__container}>
                <h1>Skills</h1>
                <h2>Skills {"&"} Attributes</h2>
                <p>
                    전체적인 소프트웨어 라이프 사이클에 대해서 이해하고있고,
                    새로운 기술을 배우는걸 좋아합니다<br />
                </p>
                <div className={style.certificate}>
                    <img
                        src={정보처리기사}
                        alt="정보처리기사"
                        width="500px"
                    />
                    <div className={style.skillset}>
                        <div className={style.skillset__left}>
                            <h2 className={style.skillset__title}>Skills</h2>
                            <div className={style.skill}>
                                <div className={style.skill__description}>
                                    <span>HTML</span>
                                    <span>80%</span>
                                </div>
                                <div className={style.skill__bar}>
                                    <div
                                        className={style.skill__value}
                                        style={{ width: "80%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className={style.skill}>
                                <div className={style.skill__description}>
                                    <span>CSS</span>
                                    <span>60%</span>
                                </div>
                                <div className={style.skill__bar}>
                                    <div
                                        className={style.skill__value}
                                        style={{ width: "60%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className={style.skill}>
                                <div className={style.skill__description}>
                                    <span>JavaScript</span>
                                    <span>60%</span>
                                </div>
                                <div className={style.skill__bar}>
                                    <div
                                        className={style.skill__value}
                                        style={{ width: "60%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className={style.skill}>
                                <div className={style.skill__description}>
                                    <span>C Language</span>
                                    <span>80%</span>
                                </div>
                                <div className={style.skill__bar}>
                                    <div
                                        className={style.skill__value}
                                        style={{ width: "80%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className={style.skill}>
                                <div className={style.skill__description}>
                                    <span>Java</span>
                                    <span>80%</span>
                                </div>
                                <div className={style.skill__bar}>
                                    <div
                                        className={style.skill__value}
                                        style={{ width: "80%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className={style.skill}>
                                <div className={style.skill__description}>
                                    <span>Python</span>
                                    <span>60%</span>
                                </div>
                                <div className={style.skill__bar}>
                                    <div
                                        className={style.skill__value}
                                        style={{ width: "60%" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.skillset__right}>
                            <div className={style.tools}>
                                <h2 className={style.skillset__title}>Tools</h2>
                                <ul className={style.tools__list}>
                                    <li><span>Visual Studio Code</span></li>
                                    <li><span>Visual Studio</span></li>
                                    <li><span>Spring Tool Suite</span></li>
                                    <li><span>Android Studio</span></li>
                                    <li><span>Fill Zilla</span></li>
                                    <li><span>Putty</span></li>
                                    <li><span>Vim</span></li>
                                </ul>
                            </div>
                            <div className={style.platform}>
                                <h2 className={style.skillset__title}>platform</h2>
                                <ul className={style.platform__list}>
                                    <li><span>AWS</span></li>
                                    <li><span>GCP</span></li>
                                    <li><span>NCP</span></li>
                                    <li><span>GitHub</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Skills;