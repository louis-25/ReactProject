import React from 'react';
import style from './modal.module.css'

function modal(props) {
  return (
    <>
      <div className={style.modal}>
        모달창 입니다
      </div>
    </>
  );
}

export default modal;