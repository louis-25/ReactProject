import './App.css';
import Header from './components/Header'
import Visual from './components/Visual'
import Feature from './components/Feature';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Visual></Visual>
      <Feature></Feature>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
