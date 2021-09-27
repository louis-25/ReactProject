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

  return (
    <>
      <Navbar scrollY={scrollY} setScrollY={setScrollY}/>
      <Home setScrollY={setScrollY} ref={home}/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </>
  );
}

export default App;
