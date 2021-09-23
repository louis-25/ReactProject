import React, { useEffect, useState } from 'react';
import style from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar({setScrollY}) {       

    const Home = () => {
        // console.log(window.pageYOffset)
        setScrollY(0)
    }

    const About = () => {
        setScrollY(567)
    }

    const Skills = () => {
        setScrollY(1200)
    }

    const Work = () => {
        setScrollY(2866)
    }

    const Contact = () => {
        setScrollY(3658)
    }

    return (
        <>
    <nav className={style.navbar}>
        <div className={style.logo}>
            {/* <i className="fas fa-at"></i> */}
            <Icon></Icon>
            <a href="/">Louis</a>
        </div>
        <div className={style.menu}>
            <ul className={style.menu}>
                {/* data-link는 section id를 불러온다 */}
                <li className={style.item} onClick={Home}>Home</li>
                <li className={style.item} onClick={About}>About</li>
                <li className={style.item} onClick={Skills}>Skills</li>
                <li className={style.item} onClick={Work}>My work</li>                
                <li className={style.item} onClick={Contact}>Contact</li>
            </ul>
        </div>
        {/* Toggle button - 햄버거 */}
        {/* <button className={`${styles.navbar__toggle_btn}`}>
            <i className="fas fa-bars"></i>
        </button> */}
    </nav>
    </>
)
};

function Icon() {
    return(
        <div>
            <FontAwesomeIcon icon={["fab", "apple"]} />
        </div>
    )

}

export default Navbar;