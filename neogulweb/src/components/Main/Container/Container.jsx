import React from 'react';
import Post from './Post/Post'
import Input from './Input/Input'
import style from './Container.module.css'

function Container({posts, createOrUpdateCard, deletePost}) {
  console.log('posts ',posts)
  return (
    <div className={style.container}>
      <Input createOrUpdateCard={createOrUpdateCard}></Input>
      {
        posts && posts.map((post, i)=>{
          console.log(`${i}번째 post `,post);
          return(
            <Post post={post}></Post>
          )
        })
      }
    </div>
  );
}

export default Container;