/* eslint-disable */
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
    
  let posts = '맛집';
  let [글제목, 글제목변경] = useState(['BBQ', '교촌치킨', '푸라닭']);
  let [따봉, 따봉변경] = useState(0);

  return (    
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h4> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>6월 23일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { 글제목[1] } </h4>
        <p>6월 23일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { 글제목[2] } </h4>
        <p>6월 23일 발행</p>
        <hr/>
      </div>      
    </div>
  );
}

export default App;
