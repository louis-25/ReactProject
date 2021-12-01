import React, { useState } from 'react';
import style from './work.module.css'
import DHtube from '../../imgs/jobs/DHtube.PNG'
import corona from '../../imgs/jobs/114_logo.png'
import TodoList from '../../imgs/jobs/TodoList.PNG'
import github from '../../imgs/jobs/github_clone.PNG'
import Django from '../../imgs/jobs/Django.png'
import 자취꿀팁 from '../../imgs/jobs/자취꿀팁.png'
import 너굴앱 from '../../imgs/jobs/너굴앱.png'
import classNames from 'classnames'

function Work(props) {
  const [selectBtn, setSelectBtn] = useState('all')
  const works = [
    {
      href:'https://dhtube.netlify.app/',
      datatype: 'front-end',
      src: DHtube,
      h3: 'React',
      span: 'DHtube'
    },
    {
      href:'http://124.5.187.217:9090/',
      datatype: 'back-end',
      src: corona,
      h3: 'Spring Boot',
      span: 'Corona-114'
    },
    {
      href:'https://github.com/louis-25/FinalProject-raspberry',
      datatype: 'back-end',
      src: "https://github.com/louis-25/FinalProject-raspberry/raw/main/md-images/image-20210615104043936.png",
      h3: 'Python',
      span: 'GiGA Genie'
    },
    {
      href:'https://louis-25.github.io/React.js_Study/',
      datatype: 'front-end',
      src: TodoList,
      h3: 'React.js',
      span: 'TodoList'
    },
    {
      href:'https://louis-25.github.io/Clone_Coding/',
      datatype: 'front-end',
      src: github,
      h3: 'HTML',
      span: 'GitHub clone-coding'
    },
    {
      href:'https://github.com/louis-25/Django_Practice/tree/django_shopping',
      datatype: 'back-end',
      src: Django,
      h3: 'Django',
      span: '쇼핑몰 관리자페이지'
    },
    {
      href:'https://github.com/louis-25/TIL/tree/main/spring/SemiProject',
      datatype: 'back-end',
      src: 자취꿀팁,
      h3: 'Spring',
      span: '게시판'
    },
    {
      href:'https://drive.google.com/file/d/1SC4T2m8gadtkg33AoS_5UI04_95urheK/view?usp=sharing',
      datatype: 'mobile',
      src: 너굴앱,
      h3: 'Android',
      span: '너굴앱'
    },
  ]

  return (
    <section className={style.section}>
      <h1>My work</h1>
      <h3>Projects</h3>
      <div className={style.work__categories}>
        <button className={classNames(style.category__btn , selectBtn == 'all' ? style.selected : null)}
        onClick={()=>{setSelectBtn('all')}}>
          All <span className={style.category__count}>8</span>
        </button>
        <button className={classNames(style.category__btn , selectBtn == 'front-end' ? style.selected : null)}
        onClick={()=>{setSelectBtn('front-end')}}>
          Front-end <span className={style.category__count}>3</span>
        </button>
        <button className={classNames(style.category__btn , selectBtn == 'back-end' ? style.selected : null)}
        onClick={()=>{setSelectBtn('back-end')}}>
          Back-end <span className={style.category__count}>4</span>
        </button>
        <button className={classNames(style.category__btn , selectBtn == 'mobile' ? style.selected : null)}
        onClick={()=>{setSelectBtn('mobile')}}>
          Mobile <span className={style.category__count}>1</span>
        </button>
      </div>

      <div className={style.work__section}>
      <div className={style.work__projects}>
        { works.map((work)=>{
            if(selectBtn == work.datatype || selectBtn == 'all') {
              return(
                <WorkList work={work}></WorkList>
              )
            }
          })        
        }
      </div>
      </div>
    </section>
  );
}

function WorkList({work}) {  
  return (
    <>     
      <a
        href={work.href}
        target="_blank"
        className={style.project}
        data-type={work.datatype}        
      >
        <img
          src={work.src}
          alt=""
          className={style.project__img}
          width="300rem"
        />
        <div className={style.project__description}>
          <h3>{work.h3}</h3>
          <span>{work.span}</span>
        </div>
      </a>      
    </>
  )
}

export default Work;