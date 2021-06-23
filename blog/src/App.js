//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  
  let posts = '맛집';
  let [글제목, 글제목변경] = useState('맛집 추천');


  return (    
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h4> { 글제목 } </h4>
        <p>6월 23일 발행</p>
        <hr/>
      </div>      
    </div>
  );
}

export default App;
