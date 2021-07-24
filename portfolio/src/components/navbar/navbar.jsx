import React from 'react';
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <>
    <nav className={`${styles.navbar}`}>
        <div className={`${styles.logo}`}>
            {/* <i className="fas fa-at"></i> */}
            <Icon></Icon>
            <a href="/">Louis</a>
        </div>
        <div className={`${styles.menu}`}>
            <ul className={`${styles.menu}`}>
                {/* data-link는 section id를 불러온다 */}
                <li className={`${styles.item}`} >Home</li>
                <li className={`${styles.item}`}>About</li>
                <li className={`${styles.item}`}>Skills</li>
                <li className={`${styles.item}`}>My work</li>
                {/* <li class="navbar__menu__item" data-link='#testimonials'>Testimonial</li> */}
                <li className={`${styles.item}`}>Contact</li>
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