import React from 'react';
import Post from './Post/Post'
import postData from './Post/data.js'
import style from './Container.module.css'

function Container(props) {
  return (
    <div className={style.container}>      
      {
        postData.map((post, i)=>{
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