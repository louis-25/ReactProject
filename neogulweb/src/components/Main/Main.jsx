import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Main.module.css'
import Header from './Header/Header'
import Container from './Container/Container'

function Main({authService}) {
  const history = useHistory();    

  useEffect(()=> {
    //파이어베이스의 인증정보가 변경되면 실행
    authService
    .onAuthChange(user => {
        //로그인한 사용자정보가 없다면
        !user && history.push('/');
    });
  });

  return (
    <div>
      <div className={style.main}>
        <Header authService={authService}></Header>
        <Container></Container>
      </div>

      
    </div>
  );
}

export default Main;