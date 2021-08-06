import React from 'react';
import style from './Post.module.css'


function Post({post}) {
  return (
    <div className={style.post}>
      <div className={style.header}>
        <div className={style.profile}></div>
        <span className={style.name}>{post.name}</span>
      </div>
      <div className={style.body}>
        <div className={style.content}>
          <p>{post.likes} Likes</p>
          <p><strong>{post.name}</strong> {post.content}</p>
          <p className={style.date}>{post.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;