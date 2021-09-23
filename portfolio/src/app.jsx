import './app.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Work from './components/work/work';
import Contact from './components/contact/contact'
import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState() //스크롤 변수

  useEffect(() => {
    window.scrollTo({
      top: scrollY,
      behavior: "smooth"
    })
    console.log('y ', window.pageYOffset)
  }, [scrollY])

  return (
    <>
      <Navbar setScrollY={setScrollY}/>
      <Home setScrollY={setScrollY}/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </>

  );
}

export default App;
