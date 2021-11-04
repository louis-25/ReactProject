import './App.css';
import Header from './components/Header'
import Visual from './components/Visual'
import Feature from './components/Feature'
import Promotion from './components/Promotion'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Visual></Visual>
      <Feature></Feature>
      <Promotion></Promotion>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
