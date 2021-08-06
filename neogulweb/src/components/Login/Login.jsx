import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Login.module.css'

function Login({authService}) {
  const history = useHistory();

  const goToMain = (userId) => {
    history.push({
      pathname: '/main',
      state: {id: userId},
    })
  }

  const onLogin = event => {
    console.log(event.currentTarget.textContent);
    authService
        .login(event.currentTarget.textContent)
        .then(data => goToMain(data.user.uid));
  }
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