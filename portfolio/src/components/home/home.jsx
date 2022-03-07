import React, { useEffect, useState } from 'react';
import style from './home.module.css'
<<<<<<< HEAD
import profile from '../../imgs/profile2.jpg'
import Particles from 'react-particles-js';
=======
import profile from '../../imgs/profile.jpg'
import Particles from 'react-tsparticles';
>>>>>>> f8757f49980dbc4c153f37e653cf17f3453e1d14
import particlesConfig from '../../config/particlesjsConfig.js'
const Home = () => {  

  const Contact = () => {
    // console.log(window.pageYOffset)
    window.scrollTo({
      top: 10000,
      behavior: "smooth"
  })   
  }  

  return (
    <>    
    <div style={{ position: 'absolute'}}>
        <Particles height="660px" width="100vw" params={particlesConfig} />
    </div>
    <section className={style.home}>      
      <div className={style.container}>
          <img src={profile} alt="profile" className={style.avatar} />
          <h1 className={style.title}>Hello <br />I'm Donghyeon</h1>
          <h2 className={style.description}>
            Front-end Engineer
          </h2>
          <button className={style.contact} onClick={Contact}>
            Contact Me
          </button>
        </div>
      
    </section>    
    </>
  )
}

export default Home;