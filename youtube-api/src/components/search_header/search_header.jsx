import styles from './search_header.module.css'
import React, { useRef } from 'react'

const Search_Header = ({onSearch, Main}) => { /*onSearch는 app에서 보낸 props*/
    const inputRef = useRef() //input을 가리켜 내용을 가져올 수 있다
    const handleSearch = () => {
        const value = inputRef.current.value; /*input의 값 긁어오기*/
        onSearch(value)
    }
    const onClick = () => {
        handleSearch();
    }

    const home = () => {
        Main();
    }

    const onKeyPress = (event) => {
        if(event.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={home}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>DHtube</h1>
            </div>
            <input
                ref={inputRef}
                className={styles.input}
                type="search"
                placeholder="Search..."
                onKeyPress={onKeyPress}
            />
            <button className={styles.button} type="submit" onClick={onClick}>
                <img
                    className={styles.buttonImg}
                    src="/images/search.png"
                    alt="search"
                />
            </button>
        </header>
    )
}

export default Search_Header
