import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import style from './Main.module.css'
import Header from './Header/Header'
import Container from './Container/Container'

function Main({ authService, postRepository }) {
  const historyState = useHistory().state // 로그인 시 저장한 상태정보
  const [posts, setPosts] = useState({}) // 불러온 데이터 담을변수
  // const [userId, setUserId] = useState(historyState && historyState.id)
  const [user, setUser] = useState()
  
  const history = useHistory()

  useEffect(async() => {
    //파이어베이스의 인증정보가 변경되면 실행
    await authService.onAuthChange(user => {
        if (user) {
          setUser(user)
          console.log('user ',user)          
        } else {
          //로그인한 사용자정보가 없다면
          history.push('/')
        }
    })
  },[user])

  useEffect(async()=>{    
    const stopSync = await postRepository.syncPosts((posts) => {
      setPosts(posts) // 서버데이터 불러오기
      console.log('posts ',posts)
    })
    return () => stopSync() //컴포넌트가 화면에서 사라질때
  },[])

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
    postRepository.savePost(post)
  }

  const deletePost = post => {
    setPosts(posts => {
        const updated = { ...posts }
        delete updated[post.id]
        return updated
    })
    postRepository.removePost(post)
  }

  return (
    <div>
      {((Object.keys(posts).length !== 0) && user) ? (
        <div className={style.main}>
            <Header onLogout={onLogout}></Header>
            <Container
                posts={posts}
                user={user}
                createOrUpdateCard={createOrUpdateCard}
                deletePost={deletePost}
            ></Container>
        </div>
      ):null}
    </div>
  )
}

export default Main
