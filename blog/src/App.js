/* eslint-disable */
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
    
  let posts = '맛집';
  let [글제목, 글제목변경] = useState(['BBQ', '교촌치킨', '푸라닭']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false)
  let [누른제목, 누른제목변경] = useState(0)
  let [추가글, 추가글제목] = useState('없음')

  function 제목바꾸기() {
    let newArray = [...글제목]; //복사할때는 spread operator를 사용하자
    newArray[0] = 'BHC';
    글제목변경( newArray )
  }

  function 게시물추가() {
    let newArray = [...글제목]; //복사할때는 spread operator를 사용하자
    let newArray2 = [...따봉];
    newArray.unshift( 추가글 )
    newArray2.unshift(0)
    글제목변경( newArray )
    따봉변경(newArray2)
  }
  return (    
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      {/* <div className="list">
        <h4> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>6월 23일 발행</p>
        <hr/>
      </div>       */}
    
      {
        글제목.map((글, i)=>{
          return (
          <div className="list">            
            <h4 onClick={ () => 누른제목변경(i) }> { 글 } <span onClick={ ()=>{  let copy = [...따봉]; copy[i]++; 따봉변경(copy) }}>👍</span> {따봉[i]}</h4>
            <p>6월 23일 발행</p>
            <hr/>
          </div> 
          )
        })
      }

      <div className="publish">
        <input onChange={(e)=>{추가글제목(e.target.value)}}/>
        <button onClick={게시물추가}>저장</button>
      </div>

      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는버튼 </button>
      { 
        modal === true 
        ? <Modal 글제목={글제목} 누른제목={누른제목} />
        : null
      }
    </div>

    
  );
}

function Modal({글제목, 누른제목}){
  return (    
    <>
      <div className="modal">
        <h2>제목 {글제목[누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>    
    </>
  )
}

export default App;
