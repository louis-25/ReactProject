import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import style from './Main.module.css'
import Header from './Header/Header'
import Container from './Container/Container'
import postData from './data.js'

function Main({ authService, postRepository }) {    
    const historyState = useHistory().state // 로그인 시 저장한 상태정보
    const [posts, setPosts] = useState({}) // 불러온 데이터 담을변수
    const [userId, setUserId] = useState(historyState && historyState.id)
    
    const history = useHistory()

    useEffect(() => {
        if (!userId) {
            //아이디정보 없으면 데이터X
            return
        }
        const stopSync = postRepository.syncPosts(userId, posts => {
            setPosts(posts) // 서버데이터 불러오기
        })
        console.log('불러온데이터 ', posts)
        return () => stopSync()
    }, [userId])

    useEffect(() => {
        //파이어베이스의 인증정보가 변경되면 실행
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid)
                console.log('user', user)
                console.log('userId ', userId)
            } else {
                //로그인한 사용자정보가 없다면
                history.push('/')
            }
        })
    })

    //로그아웃
    const onLogout = () => {
        authService.logout()
        history.push('/')
    }

    //생성 및 업데이트
    const createOrUpdateCard = post => {
        setPosts(posts => {
            const updated = { ...posts }
            updated[post.id] = post
            return updated
        })
        postRepository.savePost(userId, post)
    }

    const deletePost = post => {
        setPosts(posts => {
            const updated = { ...posts }
            delete updated[post.id]
            return updated
        })
        postRepository.removeCard(userId, post)
    }
    return (
        <div>
            <div className={style.main}>
                <Header onLogout={onLogout}></Header>
                <Container
                    posts={postData}
                    createOrUpdateCard={createOrUpdateCard}
                    deletePost={deletePost}
                ></Container>
            </div>
        </div>
    )
}

export default Main
