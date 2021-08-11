import React from 'react';
import Post from './Post/Post'
import Input from './Input/Input'
import style from './Container.module.css'
import { useEffect } from 'react';

function Container({posts, user, createOrUpdateCard, deletePost}) {
  useEffect(() => {
    console.log('Container')
  })
  
  return (
    <div className={style.container}>
      <div className={style.inputBox}>
        <div className={style.inputText}>
          <Input createOrUpdateCard={createOrUpdateCard} user={user} posts={posts}/>
        </div>
      </div>
      <div className={style.postList}>
      {
        posts && [...posts].reverse().map((post, i)=>{
          // console.log(`${i}번째 post `,post);          
          return(            
            <div className={style.postBox}>
              <Post post={post} user={user} deletePost={deletePost} key={i}></Post>
            </div>
          )          
        })
      }    
      </div>  
    </div>
  );
}

export default Container;