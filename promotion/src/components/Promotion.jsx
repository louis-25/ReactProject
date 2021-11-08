import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import classNames from 'classnames';

function Promotion(props) {

  const {register, handleSubmit, formState: { errors }} = useForm();  
  const [error, setError] = useState(true)
  
  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset(); // reset after form submit
  };

  const handleChange = (data, e) => {
    console.log(data)
  }

  // console.log(errors);
  const userName = useRef()
  const phoneNumber = useRef()
  const companyName = useRef()
  const companyScale = useRef()
  const reason = useRef()
  const email = useRef()
  const password = useRef()
  const password2 = useRef()
  const check = useRef()

  return (  
    <section className="promotion">
      <div className="inner">
      <div className="promotion-title-box">
        <div className="promotion-title">체험 신청</div>
        <div className="promotion-main-title">Fireside를 무료로 이용하세요</div>
        <div className="promotion-sub-title">아래 정보를 입력하고 Fireside를 바로 체험해보세요.</div>
      </div>
      <div className="promotion-contents-box">
        <form onSubmit={handleSubmit(onSubmit)} className="promotion-form">
          <div className="pf-row">
            <div className="pf-input-box">
              <label className="pf-label">이름<span> *</span></label>
              <input {...register("userName", { required: true })} type="text" className={classNames("pf-input-middle", errors.userName ? "pf-error-input" : null)} placeholder="이름"/>
              <p className={classNames(errors.userName ? "pf-error" : "pf-valid")}>이름을 입력하세요.</p>
              {/* <p className={classNames("pf-valid",error ? "pf-error": null)}>이름을 입력하세요.</p> */}
            </div>
            <div className="pf-input-box">
              <label className="pf-label">전화 번호<span> *</span></label>
              <input {...register("phoneNumber", { required: true })} type="tel" className={classNames("pf-input-middle", errors.phoneNumber ? "pf-error-input" : null)} placeholder="전화번호"/>                
              <p className={classNames(errors.phoneNumber ? "pf-error" : "pf-valid")}>전화 번호를 입력하세요.</p>
              {/* <p className="pf-valid">전화 번호를 입력하세요.</p> */}
            </div>
          </div>

          <div className="pf-row">
            <div className="pf-input-box">
              <label className="pf-label">회사 이름<span> *</span></label>
              <input {...register("companyName", { required: true })} type="text" className={classNames("pf-input-middle", errors.companyName ? "pf-error-input" : null)} placeholder="회사 이름"/>
              <p className={classNames(errors.companyName ? "pf-error" : "pf-valid")}>회사 이름을 입력하세요.</p>
              {/* <p className="pf-valid">회사 이름을 입력하세요.</p> */}
            </div>
            <div className="pf-input-box">
              <label className="pf-label">회사 규모<span> *</span></label>
              <select {...register("companyScale", { required: true })} className={classNames("pf-input-middle", errors.companyScale ? "pf-error-input" : null)} placeholder="선택">
                <option value="">선택</option>
                <option value="30인 이하">30인 이하</option>
                <option value="50인 이하">50인 이하</option>
                <option value="100인 이하">100인 이하</option>
                <option value="300인 이하">300인 이하</option>
                <option value="300인 +">300인 +</option>
              </select>
              <p className={classNames(errors.companyScale ? "pf-error" : "pf-valid")}>회사 규모를 선택해주세요.</p>
            </div>
          </div>

          <div className="pf-input-box-long">
            <label className="pf-label">신청 사유<span> *</span></label>
            <input {...register("reason", { required: true })} type="text" className={classNames("pf-input-long", errors.reason ? "pf-error-input" : null)} placeholder="신청 사유"/>
            <p className={classNames(errors.reason ? "pf-error" : "pf-valid")}>회사 규모를 선택해주세요.</p>
          </div>
          
          <div className="pf-input-box-long">
            <label className="pf-label">회원 가입 이메일 주소<span> *</span></label>
            <input {...register("email", { required: true })} type="email" className={classNames("pf-input-long", errors.email ? "pf-error-input" : null)} placeholder="이메일 주소"/>
            <p className={classNames(errors.email ? "pf-error" : "pf-valid")}>이메일을 입력해주세요.</p>
          </div>

          <div className="pf-row">
            <div className="pf-input-box">
              <label className="pf-label">회원 가입 비밀 번호<span> *</span></label>
              <input {...register("password", { required: true })} type="text" className={classNames("pf-input-middle", errors.password ? "pf-error-input" : null)} placeholder="비밀 번호"/>
              <p className={classNames(errors.password ? "pf-error" : "pf-valid")}>6자~16자, 대소문자, 숫자, 특수문자를 포함해야 합니다.</p>
            </div>
            <div className="pf-input-box">
              <label className="pf-label">비밀 번호 확인<span> *</span></label>
              <input {...register("password2", { required: true })} type="text" className={classNames("pf-input-middle", errors.password2 ? "pf-error-input" : null)} placeholder="비밀 번호 확인"/>
              <p className={classNames(errors.password2 ? "pf-error" : "pf-valid")}>비밀 번호가 일치하지 않습니다</p>
            </div>
          </div>
          <div className="pf-check">
            <div className="pf-check-line">
              <input onChange={handleChange} {...register("check", { required: true , pattern: /[A-Za-z]{3}/})} type="checkbox" ></input>
              <p><b>이용 약관</b> 및 <b>개인정보처리방침</b>에 동의합니다.</p><br/>
            </div>
            <p className={classNames(errors.check ? "pf-error" : "pf-valid")}>체크박스를 선택해주세요.</p>
          </div>

          <input className="pf-submit" type="submit" value="메일로 프로모션 코드 받기"/>
        </form>
      </div>
      </div>
    </section>
  );
}

export default Promotion;