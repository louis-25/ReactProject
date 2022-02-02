import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function Toolbar(props) {
  const [me, setMe] = useContext(AuthContext);
  return (
    <div>
      <Link to="/">
        <span>홈</span>
      </Link>
      {me ? 
        <span style={{float:"right"}}>로그아웃</span>
        :(
        <>
          <Link to="/auth/login">
            <span style={{float:"right"}}>로그인</span>
          </Link>
          <Link to="/auth/register">
            <span style={{float:"right", marginRight: 15}}>회원가입</span>
          </Link>
        </>
      )}
      
    </div>
  );
}

export default Toolbar;