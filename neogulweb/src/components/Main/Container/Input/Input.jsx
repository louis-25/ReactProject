import React from 'react';
import style from './Input.module.css'

function Input({createOrUpdateCard, user, posts}) {
  let today = new Date();
  let post = {
    no: Object.keys(posts).length, //게시물 길이
    id: user.uid,
    name: user.displayName,
    userImage: user.photoURL,
    content: '',
    date: (today.toLocaleDateString()).slice(0, -1),
    // likes: 43,
    // liked: false,
    // postImage: 'https://placeimg.com/640/480/arch',
    // filter: 'perpetua',
  }

  const handleChange = (e) =>{
    post.content = e.target.value
    console.log(post.content)
  }

  const send = () => {
    if(post.content === ''){
      alert('값을 입력해주세요')
    }else{
      console.log('click post ',post)
      createOrUpdateCard(post)
    }
  }

  return (
    <div className={style.inputBox}>
      <span className={style.formInput}><input className="form-control" type="text" onChange={handleChange}/></span>
      <button onClick={send} className="btn btn-primary" post={post}>전송</button>
    </div>
  );
}

export default Input;