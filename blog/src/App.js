/* eslint-disable */
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
    
  let posts = '맛집';
  let [글제목, 글제목변경] = useState(['BBQ', '교촌치킨', '푸라닭']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    let newArray = [...글제목]; //복사할때는 spread operator를 사용하자
    newArray[0] = 'BHC';
    글제목변경( newArray )
  }

  return (    
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
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
    
      <Modal></Modal>
    
    </div>

    
  );
}

function Modal(){
  return (    
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>    
    </>
  )
}

export default App;
