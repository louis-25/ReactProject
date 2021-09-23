import './app.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Work from './components/work/work';
import Contact from './components/contact/contact'


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </>

  );
}

export default App;
