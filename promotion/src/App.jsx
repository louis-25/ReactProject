import './App.css';
import Header from './components/Header/Header'
import Visual from './components/Visual/Visual'
import Feature from './components/Feature/Feature';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

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
