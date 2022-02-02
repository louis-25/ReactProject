import React, { useContext, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { toast } from "react-toastify"
import axios from "axios"
import {AuthContext} from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setMe] = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = async(e) => {
    try{
      e.preventDefault();     
      if(username.length < 3 || password.length < 6) throw new Error("입력하신 정보가 올바르지 않습니다");
      const result = await axios.patch("/users/login", {username, password});      
      setMe({
        userId: result.data.userId,
        sessionId: result.data.sessionId,
        name: result.data.name,
      })
      navigate("/")
      toast.success("로그인!")
    } catch(e) {
      console.error(e)
      toast.error(e.message)
    }    
  }

  return (
    <div style={{
      marginTop: 100,
      maxWidth: 350,
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <h3>Login</h3>
      <form onSubmit={loginHandler}>
        <CustomInput label="회원ID" value={username} setValue={setUsername}/>
        <CustomInput 
          label="비밀번호" 
          value={password}
          type="password" 
          setValue={setPassword}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;