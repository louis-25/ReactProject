import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Main({authService}) {
  const history = useHistory();  

  const onLogout = () =>{
    authService.logout()    
    history.push('/')
  }

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
      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Main;