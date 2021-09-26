import React, { useEffect, useState } from 'react';
import style from './navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from 'classnames';

function Navbar({scrollY, setScrollY}) {       

    const [toggle, setToggle] = useState(false)

    function goScroll(top) {
        window.scrollTo({
            top: top,
            behavior: "smooth"
        })             
    }    

    const onToggle = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return (
        <>
    <nav className={classNames(style.navbar, scrollY > 0 ? style.navbarDark : toggle ? style.navbarDark : null)}>
        <div className={style.logo}>            
            <Icon className={style.icon}></Icon>
            <a href="/">Louis</a>
        </div>
        <div className={style.menu}>            
            <ul className={classNames(style.menu, toggle ? style.open : style.close)}>
                {/* data-link는 section id를 불러온다 */}                
                <li className={style.item} onClick={()=>goScroll(0)}>Home</li>
                <li className={style.item} onClick={()=>goScroll(570)}>About</li>
                <li className={style.item} onClick={()=>goScroll(1200)}>Skills</li>
                <li className={style.item} onClick={()=>goScroll(2866)}>My work</li>                
                <li className={style.item} onClick={()=>goScroll(100000)}>Contact</li>                
            </ul>            
        </div>
        {/* Toggle button - 햄버거 */}        
        <button className={`${style.toggle_btn}`} onClick={onToggle}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    </nav>
    </>
)
};

function Icon() {
    return(
        <div>
            <FontAwesomeIcon icon={faAppleAlt} />
        </div>
    )
}

export default Navbar;