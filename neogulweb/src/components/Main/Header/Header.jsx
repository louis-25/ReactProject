import React from 'react';
import style from './Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCampground } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

function Header({authService}) {
  const history = useHistory();  

  const onLogout = () =>{
    authService.logout()
    history.push('/')
  }

  return (
    <div className={style.main}>              
      <ul className={style.leftBtn}>
          <li onClick={onLogout}><FontAwesomeIcon icon={faSignOutAlt}/></li>
      </ul>
      <ul className={style.rightBtn}>
        <FontAwesomeIcon icon={faCampground}/>
      </ul>      
    </div> 
    
  );
}

export default Header;