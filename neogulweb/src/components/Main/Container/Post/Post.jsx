import React from 'react';
import style from './Post.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Post({post, user, deletePost}) {  
  return (
    <div className={style.post}>
      {post?
      <div className={style.header}>
        <div className={style.profile} style={{backgroundImage:`url(${post.userImage})`}}></div>
        <div className={style.textBox}>
        <span className={style.name}>{post.name}</span>
          {/* {post.name ===  user.displayName?
          <span className={style.name}>{post.name}<div onClick={()=>{deletePost(post)}} className={style.trash}><FontAwesomeIcon icon={faTrashAlt}/></div></span>
          :<span className={style.name}>{post.name}</span>} */}
          <strong><p className={style.contentText}>{post.content}</p></strong>
          <p className={style.date}>{post.date}</p>
        </div>        
      </div>
      :null}
      {/* <div className={style.body}>
        <div className={style.content}>
          <strong><p className={style.contentText}>{post.content}</p></strong>
          <p className={style.date}>{post.date}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Post;