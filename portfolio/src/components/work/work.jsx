import React from 'react';
import style from './work.module.css'
import DHtube from '../../imgs/jobs/DHtube.PNG'
import corona from '../../imgs/jobs/114_logo.png'
import TodoList from '../../imgs/jobs/TodoList.PNG'
import github from '../../imgs/jobs/github_clone.PNG'
import Django from '../../imgs/jobs/Django.png'
import 자취꿀팁 from '../../imgs/jobs/자취꿀팁.png'
import 너굴앱 from '../../imgs/jobs/너굴앱.png'

function Work(props) {
  return (
    <section className={style.section}>
            <h1>My work</h1>
            <h3>Projects</h3>
            <div className={style.work__categories}>
                <button className={`${style.category__btn} ${style.selected}`}>
                    All <span className={style.category__count}>8</span>
                </button>
                <button className={style.category__btn}>
                    Front-end <span className={style.category__count}>3</span>
                </button>
                <button className={style.category__btn}>
                    Back-end <span className={style.category__count}>4</span>
                </button>
                <button className={style.category__btn}>
                    Mobile <span className={style.category__count}>1</span>
                </button>
            </div>

            <div className={style.work__projects}>
                <a
                    href="https://dhtube.netlify.app/"
                    target="_blank"
                    className={style.project}
                    data-type="front-end"
                >
                    <img
                        src={DHtube}
                        alt=""
                        className={style.project__img}
                        width="300rem"
                    />
                    <div className={style.project__description}>
                        <h3>React</h3>
                        <span>DHtube</span>
                    </div>
                </a>
                <a
                    href="http://124.5.187.217:9090/"
                    target="_blank"
                    className={style.project}
                    data-type="back-end"
                >
                    <img
                        src={corona}
                        alt=""
                        className={style.project__img}
                        width="300rem"
                    />
                    <div className={style.project__description}>
                        <h3>Spring Boot</h3>
                        <span>Corona-114</span>
                    </div>
                </a>
                <a
                    href="https://github.com/louis-25/FinalProject-raspberry"
                    target="_blank"
                    className={style.project}
                    data-type="back-end"
                >
                    <img
                        src="https://github.com/louis-25/FinalProject-raspberry/raw/main/md-images/image-20210615104043936.png"
                        alt="기가지니 이미지"
                        className={style.project__img}
                        width="300rem"
                    />
                    <div className={style.project__description}>
                        <h3>Python</h3>
                        <span>GiGA Genie</span>
                    </div>
                </a>
                <a
                    href="https://louis-25.github.io/React.js_Study/"
                    target="_blank"
                    className={style.project}
                    data-type="front-end"
                >
                    <img
                        src={TodoList}
                        alt=""
                        className={style.project__img}
                        width="300rem"
                    />
                    <div className={style.project__description}>
                        <h3>React.js</h3>
                        <span>TodoList</span>
                    </div>
                </a>
                <a
                    href="https://louis-25.github.io/Clone_Coding/"
                    target="_blank"
                    className={style.project}
                    data-type="front-end"
                >
                    <img
                        src={github}
                        alt=""
                        className={style.project__img}
                        width="300rem"
                    />
                    <div className={style.project__description}>
                        <h3>HTML</h3>
                        <span>GitHub clone-coding</span>
                    </div>
                </a>                
                <a
                    href="https://github.com/louis-25/Django_Practice/tree/django_shopping"
                    target="_blank"
                    className={style.project}
                    data-type="back-end"
                >
                    <img
                        src={Django}
                        alt=""
                        className={style.project__img}
                        width="300rem"
                    />
                    <div className={style.project__description}>
                        <h3>Django</h3>
                        <span>쇼핑몰 관리자페이지</span>
                    </div>
                </a>
                <a
                    href="https://github.com/louis-25/TIL/tree/main/spring/SemiProject"
                    target="_blank"
                    className={style.project}
                    data-type="back-end"
                >
                    <img
                        src={자취꿀팁}
                        alt=""
                        className={style.project__img}
                        width="300rem"
                    />
                    <div className={style.project__description}>
                        <h3>Spring</h3>
                        <span>자취꿀팁</span>
                    </div>
                </a>
                <a
                    href="https://drive.google.com/file/d/1SC4T2m8gadtkg33AoS_5UI04_95urheK/view?usp=sharing"
                    target="_blank"
                    className={style.project}
                    data-type="mobile"
                >
                    <img
                        src={너굴앱}
                        alt=""
                        className={style.project__img}
                        width="300rem"
                    />
                    <div className={style.project__description}>
                        <h3>안드로이드</h3>
                        <span>너굴앱</span>
                    </div>
                </a>
            </div>
        </section>
  );
}

export default Work;