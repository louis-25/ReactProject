import './app.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Work from './components/work/work';
import Contact from './components/contact/contact'
import { throttle } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive'

function App() {
  const [scrollY, setScrollY] = useState() //스크롤 변수
  const [toggle, setToggle] = useState(false)
  const home = useRef();
  const about = useRef();
  const skill = useRef();
  const work = useRef();  
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const throttledScroll = useMemo(() =>
      throttle(() => {
        // console.log('스크롤 이벤트');
        // console.log('y ',window.scrollY);
        setScrollY(window.scrollY)
      }, 300),
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  const scrollToAbout = () => {
    if(toggle) setToggle(false)
    goScroll(about.current.offsetTop);
  }

  const scrollToSkills = () => {
    if(toggle) setToggle(false)
    goScroll(skill.current.offsetTop);    
  }

  const scrollToWork = () => {
    if(toggle) setToggle(false)
    goScroll(work.current.offsetTop);
  }
  
  function goScroll(top) {
    if(isDesktop) {
      window.scrollTo({
          top: top-83,
          behavior: "smooth"
      })             
    }else if(isMobile) {
      window.scrollTo({
        top: top,
        behavior: "smooth"
    })             
    }
}    

  return (
    <>
      <Navbar
        about={scrollToAbout}
        skill={scrollToSkills}
        work={scrollToWork}
        scrollY={scrollY} setScrollY={setScrollY}
        toggle={toggle}        
        setToggle={setToggle}
        />
      <div><Home setScrollY={setScrollY} ref={home}/></div>
      <div ref={about}><About/></div>
      <div ref={skill}><Skills/></div>
      <div ref={work}><Work/></div>
      <div><Contact/></div>
    </>
  );
}

export default App;
