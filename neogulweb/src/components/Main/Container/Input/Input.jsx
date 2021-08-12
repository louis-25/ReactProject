import React from 'react';
import { useRef } from 'react';
import style from './Input.module.css'

function Input({createOrUpdateCard, user, posts}) {
  let today = new Date();
  const inputText = useRef();
  let post = {
    no: Object.keys(posts).length, //게시물 길이
    id: user.uid,
    name: user.displayName,
    userImage: user.photoURL,
    content: '',
    date: (today.toLocaleDateString()).slice(0, -1) +" / "+ today.getHours() +":"+today.getMinutes(),
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
      // let no = Object.keys(posts).length
      createOrUpdateCard(post)
      inputText.current.value=""
      inputText.current.focus()
    }
  }

  return (
    <div className={style.inputBox}>
      <span className={style.formInput}><input ref={inputText} onKeyPress={(e)=>{if(e.key === 'Enter'){send(); e.target.value=""}}} className="form-control" type="text" onChange={handleChange}/></span>
      <button onClick={send} className="btn btn-primary" post={post}>전송</button>
    </div>
  );
}

export default Input;