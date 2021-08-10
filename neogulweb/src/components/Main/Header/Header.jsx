import React from 'react';
import style from './Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCampground } from "@fortawesome/free-solid-svg-icons";

function Header({onLogout, user}) {  

  return (
    <div className={style.main}>              
      <ul className={style.leftBtn}>
          <li onClick={onLogout} title="Logout"><FontAwesomeIcon icon={faSignOutAlt}/></li>
      </ul>
      <div className={style.userImage} style={{backgroundImage:`url(${user.photoURL})`}}></div>
      <ul className={style.rightBtn}>
        <FontAwesomeIcon icon={faCampground}/>
      </ul>      
    </div> 
    
  );
}

export default Header;