import React, { useEffect, useState } from 'react';
import style from './navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from 'classnames';

function Navbar({setScrollY}) {       

    const [toggle, setToggle] = useState(false)

    const goHome = () => {
        // console.log(window.pageYOffset)
        setScrollY(0)
    }

    const goAbout = () => {
        setScrollY(567)
    }

    const goSkills = () => {
        setScrollY(1200)
    }

    const goWork = () => {
        setScrollY(2866)
    }

    const goContact = () => {
        setScrollY(3658)
    }    

    const onToggle = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return (
        <>
    <nav className={classNames(style.navbar)}>
        <div className={style.logo}>            
            <Icon className={style.icon}></Icon>
            <a href="/">Louis</a>
        </div>
        <div className={style.menu}>            
            <ul className={classNames(style.menu, toggle ? style.open : style.close)}>
                {/* data-link는 section id를 불러온다 */}                
                <li className={style.item} onClick={goHome}>Home</li>
                <li className={style.item} onClick={goAbout}>About</li>
                <li className={style.item} onClick={goSkills}>Skills</li>
                <li className={style.item} onClick={goWork}>My work</li>                
                <li className={style.item} onClick={goContact}>Contact</li>                
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