import './App.css';
import Header from './components/Header'
import Visual from './components/Visual'
import Feature from './components/Feature'
import Promotion from './components/Promotion'
import About from './components/About/About'
import Brochure from './components/Brochure';
import Footer from './components/Footer'
import Terms from './components/Terms/Terms'
import Privacy from './components/Privacy/Privacy'
import NotFound from './components/NotFound';
import Slider from './components/Slider/Slider';
import { useRef } from 'react'
import {ScrollContext} from './context/ScrollContext'
import { HashRouter, Router ,Route, Switch } from 'react-router-dom'

function App() {
  const featureRef = useRef()
  const promotionRef = useRef()
  const aboutRef = useRef()
  const downloadRef = useRef()
  
  return (
    <div className="App">      
      <Switch>
        <Route exact path="/">
        <Header
          featureRef={featureRef}
          promotionRef={promotionRef}
          aboutRef={aboutRef}
          downloadRef={downloadRef}
        ></Header>
        <Visual promotionRef={promotionRef}></Visual>
        <div ref={featureRef}><Feature></Feature></div>
        {/* <div ref={promotionRef}><Promotion></Promotion></div> */}
        <div ref={aboutRef}><About></About></div>
        <div ref={downloadRef}><Brochure></Brochure></div>
        <Footer></Footer>
        </Route>
        <Route exact path="/terms">
          <Terms></Terms>
        </Route>
        <Route exact path="/privacy">
          <Privacy></Privacy>
        </Route>
        <Route exact path="/free-trial">
          <Promotion></Promotion>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
