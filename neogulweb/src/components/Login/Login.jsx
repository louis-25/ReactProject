import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Login.module.css'

function Login({authService}) {
  const history = useHistory();

  const goToMain = (userId) => {    
    history.push({
      pathname: '/main',
      state: {id: userId}, //로그인하면서 상태정보도 저장
    })
  }

  const onLogin = event => {
    console.log(event.currentTarget.textContent);
    authService
        .login(event.currentTarget.textContent)
        .then(data => goToMain(data.user.uid));
  }

  useEffect(()=> {
    //파이어베이스의 인증정보가 변경되면 실행
    authService
    .onAuthChange(user => {
        //로그인한 사용자정보가 있다면
        user && goToMain(user.id);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default Login;