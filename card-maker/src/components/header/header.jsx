import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout}) => (
        <header className={styles.header}>
            {onLogout && (
            <button className={styles.logout} onClick={onLogout}>Logout</button>
            )}
            <img className={styles.logo} src="/images/logo.png" alt="logo"></img>
            <h1 className={styles.title}>Buisiness Card Maker</h1>
        </header>
    );

export default Header;