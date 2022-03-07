import React, { useEffect, useState } from 'react';
import style from './work.module.css'
import workData from '../../data/works.js'
import classNames from 'classnames'

function Work(props) {
  const [selectBtn, setSelectBtn] = useState('all')
  const [all, setAll] = useState(0)
  const [front, setFront] = useState(0)
  const [back, setBack] = useState(0)
  const [mobile, setMobile] = useState(0)
  const works = workData;
  
  useEffect(()=>{
    setAll(works.length)
    let count1 = 0
    let count2 = 0
    let count3 = 0
    for(let work in works) {            
      switch(works[work].datatype){
        case 'front-end':
          count1 += 1
          break
        case 'back-end':
          count2 += 1
          break
        case 'mobile':
          count3 += 1
          break      
      }      
    }
    setFront(count1)
    setBack(count2)
    setMobile(count3)    
  },[])
  
  return (
    <section className={style.section}>
      <h1>My work</h1>
      <h3>Projects</h3>
      <div className={style.work__categories}>
        <button className={classNames(style.category__btn , selectBtn == 'all' ? style.selected : null)}
        onClick={()=>{setSelectBtn('all')}}>
          All <span className={style.category__count}>{all}</span>
        </button>
        <button className={classNames(style.category__btn , selectBtn == 'front-end' ? style.selected : null)}
        onClick={()=>{setSelectBtn('front-end')}}>
          Front-end <span className={style.category__count}>{front}</span>
        </button>
        <button className={classNames(style.category__btn , selectBtn == 'back-end' ? style.selected : null)}
        onClick={()=>{setSelectBtn('back-end')}}>
          Back-end <span className={style.category__count}>{back}</span>
        </button>
        <button className={classNames(style.category__btn , selectBtn == 'mobile' ? style.selected : null)}
        onClick={()=>{setSelectBtn('mobile')}}>
          Mobile <span className={style.category__count}>{mobile}</span>
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