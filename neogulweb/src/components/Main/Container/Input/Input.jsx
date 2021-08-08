import React from 'react';
import style from './Input.module.css'

function Input({createOrUpdateCard}) {
  let today = new Date();
  let post = {
    name: 'donghyeon',
    userImage: 'https://placeimg.com/100/100/arch',
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
    if(post.content == ''){
      alert('값을 입력해주세요')
    }else{
      console.log(post)
      createOrUpdateCard(post)
    }
  }
  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <button onClick={send} post={post}>전송</button>
    </div>
  );
}

export default Input;