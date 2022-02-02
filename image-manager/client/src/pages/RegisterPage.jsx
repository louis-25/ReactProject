import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';

function RegisterPage(props) {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  return (
    <div>
      <div style={{
        marginTop: 100,
        maxWidth: 350,
        marginLeft: "auto",
        marginRight: "auto"
      }}></div>
      <h3>회원가입</h3>
      <form>
        <CustomInput label="이름" value={name} setValue={setName}></CustomInput>
        <CustomInput label="회원ID" value={username} setValue={setUsername}></CustomInput>
        <CustomInput label="비밀번호" value={password} setValue={setPassword}></CustomInput>
        <CustomInput 
          label="비밀번호 확인" 
          value={passwordCheck} 
          setValue={setPasswordCheck}
          type="password"
        ></CustomInput>
      </form>
    </div>
  );
}

export default RegisterPage;