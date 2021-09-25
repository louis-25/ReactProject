import React from 'react';
import style from './contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact(props) {
  return (
    <section className={`${style.section} ${style.contact}`}>
      <h1 className={style.contact__title}>Let's talk</h1>
      <h2 className={style.contact__email}>20151577@vision.hoseo.edu</h2>
      <div className={style.contact__links}>
        <a href="https://github.com/louis-25" target="_blnk">
          <FontAwesomeIcon icon={faGithub} className={style.icon}/>
        </a>
      </div>
      <p className={style.contact__rights}>
        2021 Louis's Portfolio - All rights reversed
      </p>
    </section>
  );
}

export default Contact;