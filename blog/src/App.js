import logo from './logo.svg';
import './App.css';

function App() {
  
  let posts = '맛집';
  // function 함수() {
  //   return 100
  // }
  return (    
    <div className="App">
      <div className="black-nav">
        <div style={{color:'blue', fontSize:'30px'}}>개발 Blog</div>
      </div>
      <img src={logo}></img>
      <h4> {posts} </h4>
    </div>
  );
}

export default App;
