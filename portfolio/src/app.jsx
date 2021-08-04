import './app.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </>

  );
}

export default App;
