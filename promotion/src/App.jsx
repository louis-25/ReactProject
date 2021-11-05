import './App.css';
import Header from './components/Header'
import Visual from './components/Visual'
import Feature from './components/Feature'
import Promotion from './components/Promotion'
import About from './components/About'
import Footer from './components/Footer'
import { throttle, debounce } from 'lodash';
import { useContext, useEffect, useMemo, useRef } from 'react'
import {ScrollContext} from './context/ScrollContext'

function App() {  
  const [scroll, setScroll] = useContext(ScrollContext)
  const featureRef = useRef()
  const promotionRef = useRef()
  const aboutRef = useRef()
  
  const throttledScroll = useMemo(() =>
      debounce(() => {
        console.log('스크롤 이벤트');
        console.log('y ',window.scrollY);
        setScroll(window.scrollY)
      },150),
  );

  useEffect(() => { //스크롤 이벤트 발생
    window.addEventListener('scroll', throttledScroll);
    console.log('scroll ',scroll)
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  },[scroll]);

  return (
    <div className="App">
      <Header 
        featureRef={featureRef}
        promotionRef={promotionRef}
        aboutRef={aboutRef}
      ></Header>
      <Visual promotionRef={promotionRef}></Visual>
      <div ref={featureRef}><Feature></Feature></div>
      <div ref={promotionRef}><Promotion></Promotion></div>
      <div ref={aboutRef}><About></About></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
