import React from 'react';
import style from './Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCampground } from "@fortawesome/free-solid-svg-icons";

function Header({onLogout}) {  

  return (
    <div className={style.main}>              
      <ul className={style.leftBtn}>
          <li onClick={onLogout} title="Logout"><FontAwesomeIcon icon={faSignOutAlt}/></li>
      </ul>
      <ul className={style.rightBtn}>
        <FontAwesomeIcon icon={faCampground}/>
      </ul>      
    </div> 
    
  );
}

export default Header;