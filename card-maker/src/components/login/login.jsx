import React, { useEffect } from 'react'
import { useHistory } from 'react-router' //원하는 url로 가고싶을때 사용
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './login.module.css'

const Login = ({ authService }) => {
    const history = useHistory();
    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: {id: userId},
        });
    };

    const onLogin = event => {
        authService //
            .login(event.currentTarget.textContent)
            .then(data => goToMaker(data.user.uid));
    }

    useEffect(()=> {
        //파이어베이스의 인증정보가 변경되면 실행
        authService
        .onAuthChange(user => {
            //로그인한 사용자정보가 있다면
            user && goToMaker(user.id);
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
    )
}

export default Login
