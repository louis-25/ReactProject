import './app.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Work from './components/work/work';
import Contact from './components/contact/contact'
import { throttle } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState() //스크롤 변수
  const home = useRef();
  const about = useRef();
  const skill = useRef();
  const work = useRef();  

  const throttledScroll = useMemo(() =>
      throttle(() => {
        console.log('스크롤 이벤트');
        console.log('y ',window.scrollY);
        setScrollY(window.scrollY)
      }, 300),
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    console.log('home ',home)
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  const scrollToAbout = () => {
    goScroll(about.current.offsetTop);
  }

  const scrollToSkills = () => {
    goScroll(skill.current.offsetTop);
  }

  const scrollToWork = () => {
    goScroll(work.current.offsetTop);
  }
  
  function goScroll(top) {
    window.scrollTo({
        top: top-70,
        behavior: "smooth"
    })             
}    

  return (
    <>
      <Navbar
        about={scrollToAbout}
        skill={scrollToSkills}
        work={scrollToWork}
        scrollY={scrollY} setScrollY={setScrollY}/>
      <div><Home setScrollY={setScrollY} ref={home}/></div>
      <div ref={about}><About/></div>
      <div ref={skill}><Skills/></div>
      <div ref={work}><Work/></div>
      <div><Contact/></div>
    </>
  );
}

export default App;
