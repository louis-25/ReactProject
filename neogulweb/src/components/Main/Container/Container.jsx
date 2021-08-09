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
      <Input createOrUpdateCard={createOrUpdateCard} user={user} posts={posts}></Input>
      {
        posts && posts.reverse().map((post, i)=>{
          console.log(`${i}번째 post `,post);
          return(
            <Post post={post} key={i}></Post>
          )
        })
      }
    </div>
  );
}

export default Container;