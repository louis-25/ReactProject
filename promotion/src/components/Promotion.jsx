import React, { useEffect, useRef, useState } from 'react';
import { useForm, useWatch } from "react-hook-form";
import classNames from 'classnames';
import Service from '../service/promotion.js'
import { useMediaQuery } from 'react-responsive'

function Promotion(props) {
  const {register, handleSubmit, getValues, setError, clearErrors, watch, formState: { errors }} = useForm();  
  // const [error, setError] = useState(true)  
  const [check, setCheck] = useState()
  const checkRef = useRef()
  const pfSubmit = useRef()
  const password = watch('password')
  const password2 = watch('password2')
  const service = new Service()

  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const onSubmit = async (data, e) => {
    console.log('data ',data)    
    if(getValues("password") !== getValues("password2")){      
      alert('비밀번호가 다릅니다')
      setError('password')
      setError('password2', { type: "focus" }, { shouldFocus: true })
    }
    else {
      await service.submit(data).then((res)=>{
        console.log('res ',res)
        if(res.status == 200){
          alert('성공적으로 등록되었습니다~!!')
          window.scrollTo(0, 0)
        }      
        if(res.status == 409){
          alert('이미 존재하는 ID입니다',res.status)
        }
      }).catch((e)=>{
        console.log('e ',e)
      })
      e.target.reset() // reset after form submit
      setCheck(false)
      pfSubmit.current.disabled=check
    }
  }
  const isCheck = () => {
    console.log('checked ',checkRef.current.checked)    
    setCheck(checkRef.current.checked)
    pfSubmit.current.disabled=check
  }

  useEffect(()=>{
    if(!checkSpecial(getValues('password')) && getValues('password').length > 0) {
      setError('password')
    }else {
      clearErrors('password')
    }

    if(getValues('password') != getValues('password2') && getValues('password2').length > 0){
      setError('password2')
    }else {
      clearErrors('password2')
    }
  },[password, password2])

  function checkSpecial(str) {     
    // 대소문자 숫자 특수문자 1개이상 넣어야하고 
    // 대소문자 숫자 특수문자로 이루어진 문자로 6~16자리로 구성됨
    let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,16}$/;
    if(check.test(str)) {
      return true;
    }
    else{
      return false;
    }
  }

  return (  
    <section className="promotion">
      <div className="inner">
      <div className="promotion-title-box">
        <div className="promotion-title">체험 신청</div>
        {isDesktop && 
        <>
          <div className="promotion-main-title">Fireside를 무료로 이용하세요</div>
          <div className="promotion-sub-title">아래 정보를 입력하고 Fireside를 바로 체험해보세요.</div>
        </>
        }
        {isMobile && 
        <>
          <div className="promotion-main-title">Fireside를<br/> 무료로 이용하세요</div>
          <div className="promotion-sub-title">아래 정보를 입력하고 Fireside를<br/> 바로 체험해보세요.</div>
        </>
        }
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
                <option value="0">30인 이하</option>
                <option value="1">50인 이하</option>
                <option value="2">100인 이하</option>
                <option value="3">300인 이하</option>
                <option value="4">300인 +</option>
              </select>
              <p className={classNames(errors.companyScale ? "pf-error" : "pf-valid")}>회사 규모를 선택해주세요.</p>
            </div>
          </div>

          <div className="pf-input-box-long">
            <label className="pf-label">신청 사유<span> *</span></label>
            <input {...register("reason", { required: true })} type="text" className={classNames("pf-input-long", errors.reason ? "pf-error-input" : null)} placeholder="신청 사유"/>
            <p className={classNames(errors.reason ? "pf-error" : "pf-valid")}>신청 사유를 입력해주세요.</p>
          </div>
          
          <div className="pf-input-box-long">
            <label className="pf-label">회원 가입 이메일 주소<span> *</span></label>
            <input {...register("email", { required: true })} type="email" className={classNames("pf-input-long", errors.email ? "pf-error-input" : null)} placeholder="이메일 주소"/>
            <p className={classNames(errors.email ? "pf-error" : "pf-valid")}>이메일을 입력해주세요.</p>
          </div>

          <div className="pf-row">
            <div className="pf-input-box">
              <label className="pf-label">회원 가입 비밀 번호<span> *</span></label>
              <input {...register("password", { required: true })} type="password" className={classNames("pf-input-middle", errors.password ? "pf-error-input" : null)} placeholder="비밀 번호"/>
              <p className={classNames(errors.password ? "pf-error" : "pf-valid")}>6자~16자, 대소문자, 숫자, 특수문자를 포함해야 합니다.</p>
            </div>
            <div className="pf-input-box">
              <label className="pf-label">비밀 번호 확인<span> *</span></label>
              <input {...register("password2", { required: true })} type="password" className={classNames("pf-input-middle", errors.password2 ? "pf-error-input" : null)} placeholder="비밀 번호 확인"/>              
              <p className={classNames(errors.password2 ? "pf-error" : "pf-valid")}>비밀 번호가 일치하지 않습니다</p>
            </div>
          </div>
          <div className="pf-check">
            <div className="pf-check-line">              
              <input ref={checkRef} onClick={isCheck} type="checkbox" ></input>              
              <p><b>이용 약관</b> 및 <b>개인정보처리방침</b>에 동의합니다.</p><br/>
            </div>
            <p className={classNames(errors.check ? "pf-error" : "pf-valid")}>체크박스를 선택해주세요.</p>
          </div>
          
          <input ref={pfSubmit} className="pf-submit" type="submit" disabled value="메일로 프로모션 코드 받기"/>          
        </form>
      </div>
      </div>
    </section>
  );
}

export default Promotion;