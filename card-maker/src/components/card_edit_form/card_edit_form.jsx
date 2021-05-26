import React, { useRef } from 'react'
import styles from './card_edit_form.module.css'
import Button from '../button/button'

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
    const nameRef = useRef()
    const companyRef = useRef()
    const themeRef = useRef()
    const titleRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const { name, company, title, email, message, theme, fileName, fileURL } = card;

    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        })
    }
    //이벤트가 발생하면 함수호출
    const onChange = event => {
        if (event.currentTarget == null) {
            return
        }
        event.preventDefault() //브라우저에서 기본적인 이벤트처리 못하게함
        updateCard({
            ...card, //기존의 내용을 가져와서
            [event.currentTarget.name]: event.currentTarget.value, //name이 key value가 value
        })
    }

    const onSubmit = () => {
        deleteCard(card)
    }

    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                name="name"
                ref={nameRef}
                value={name}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="company"
                ref={companyRef}
                value={company}
                onChange={onChange}
            />
            <select
                className={styles.select}
                name="theme"
                ref={themeRef}
                value={theme}
                onChange={onChange}
            >
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input
                className={styles.input}
                type="text"
                name="title"
                ref={titleRef}
                value={title}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="email"
                ref={emailRef}
                value={email}
                onChange={onChange}
            />
            <textarea
                className={styles.textarea}
                ref={messageRef}
                name="message"
                value={message}
                onChange={onChange}
            />
            <div className={styles.fileInput}>
                <FileInput fileName={name} onFileChange={onFileChange} />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    )
}

export default CardEditForm
