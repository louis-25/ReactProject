import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'


const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Louis',
            company: 'Kakao',
            theme: 'dark',
            title: 'Software Engineer',
            email: '20151577@vision.hoseo.edu',
            message: 'go for it',
            fileName: 'Louis',
            fileUrl: null
        },
        {
            id: '2',
            name: 'Louis',
            company: 'Kakao',
            theme: 'light',
            title: 'Software Engineer',
            email: '20151577@vision.hoseo.edu',
            message: 'go for it',
            fileName: 'Louis',
            fileUrl: null
        },
        {
            id: '3',
            name: 'Louis',
            company: 'Kakao',
            theme: 'colorful',
            title: 'Software Engineer',
            email: '20151577@vision.hoseo.edu',
            message: 'go for it',
            fileName: 'Louis',
            fileUrl: 'www.naver.com'
        }
    ]);

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        //파이어베이스의 인증정보가 변경될때마다 실행
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    })

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
}

export default Maker;