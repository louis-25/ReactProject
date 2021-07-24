import React from 'react';
import style from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
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
                <li className={style.item}>Home</li>
                <li className={style.item}>About</li>
                <li className={style.item}>Skills</li>
                <li className={style.item}>My work</li>
                {/* <li class="navbar__menu__item" data-link='#testimonials'>Testimonial</li> */}
                <li className={style.item}>Contact</li>
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