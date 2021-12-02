import React, { useEffect, useRef, useState } from 'react';
import { useForm, useWatch } from "react-hook-form";
import classNames from 'classnames';
import Service from '../service/promotion.js'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Triangle from '../images/Triangle.svg'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function Promotion(props) {
  const { register, handleSubmit, getValues, setValue, setError, clearErrors, watch, formState: { errors } } = useForm();  
  const [check, setCheck] = useState()
  const [option, setOption] = useState('none')
  const [passwordType, setPasswordType] = useState('password')
  const checkRef = useRef()
  const pfSubmit = useRef()    
  const selectRef = useRef() 
  const optionRef = useRef()   
  const userName = watch('userName')
  const password = watch('password')
  const password2 = watch('password2')
  const service = new Service()

  const { t, i18n } = useTranslation()  
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const onSubmit = async (data, e) => {    
    // console.log('data ', data)
    pfSubmit.current.disabled = false
    if (getValues("password") !== getValues("password2")) {
      alert('비밀번호가 다릅니다')
      setError('password')
      setError('password2', { type: "focus" }, { shouldFocus: true })
    }
    else {
      await service.submit(data).then((res) => {
        console.log('res ', res)                
        if (res.status == 200) {
          pfSubmit.current.disabled = true
          if(i18n.language=='ko') {
            alert('무료 체험 신청이 접수되었습니다')
          }
          else if(i18n.language=='en'){
            alert('Your request has been successfully submitted.')
          }
          window.scrollTo(0, 0)
          e.target.reset() // reset after form submit
        }
        else if (res.status) {
          isCheck()
          if(res.status == 409) {
            alert('이미 사용하고있는 이메일주소 입니다')
            setError('email', { type: "focus" }, { shouldFocus: true })
          }else if(res.status == 403) {
            alert('403 Forbidden')
          }else if(res.status == 404) {
            alert('404 Not Found')
          }else if(res.status == 500) {
            alert('500 서버오류')
          }else {
            alert(res.status+'error')
          }
          pfSubmit.current.disabled = false
        }
        else {
          alert('모르는예외')
        }
      }).catch((e) => {
        console.log('e ', e)
      })
      // e.target.reset() // reset after form submit
    }
  }
  const isCheck = () => {
    console.log('checked ', checkRef.current.checked)
    setCheck(checkRef.current.checked)
    pfSubmit.current.disabled = check
  }

  useEffect(()=>{
    let userName = getValues('userName')
    if(userName.length > 128) {      
      setError('userName')
    }else {      
      clearErrors('userName')
    }
  },[userName])
  
  useEffect(() => {
    let password = getValues('password')
    let password2 = getValues('password2')

    // 값이 입력된경우
    if (password.length > 0) {
      // 입력시 조건충족 안된경우
      if (!checkSpecial(password)) {
        console.log('setError password')
        setError('password')
      } else { // 조건 충족
        console.log('clearError password')
        clearErrors('password')
      }
      if(password == password2) {
        clearErrors('password2')
      }      
    }
    else if (password.length == 0) {
      clearErrors('password')
    }
  },[password])

  useEffect(() => {
    let password = getValues('password')
    let password2 = getValues('password2')

    if (password2.length > 0) {
      // 비밀번호가 서로 다른경우
      if (password != password2) {
        console.log('setError password2')
        // if(!errors.password2)
        setError('password2')
      }
      else if (password == password2) { // 비밀번호가 서로 같을때
        console.log('clearError password2')
        clearErrors('password2')
      }
    }
    else if (password2.length == 0) {
      clearErrors('password2')
    }

  }, [password2])

  function checkSpecial(str) {
    // 대소문자 숫자 특수문자 1개이상 넣어야하고 
    // 대소문자 숫자 특수문자로 이루어진 문자로 6~16자리로 구성됨
    let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!?@#$%^&*_:;()+~`<>"'{}=\|\\\[\]\,\.\/])[A-Za-z\d!?@#$%^&*_:;()+~`<>"'{}=\|\\\[\]\,\.\/]{6,16}$/g;
    if (check.test(str)) {
        return true
    }
    else {
      return false;
    }
  }  
  const phoneValidator = (e) => {    
    const value = e.target.value    
    const kor = /[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g; //한글 검사 정규식
    const special = /[`.,()=~!@#$%^&*|\[\]\\\'\";:\/?]/gi; //특수문자 검사 정규식
            
    setValue('phoneNumber',value.replace(/[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣`.,()=~!@#$%^&*|\[\]\\\'\";:\/?]/gi,""))    
    clearErrors('phoneNumber')    
  }  

  const selectClick = (e) => {
    e.preventDefault()
    console.log('width ',e.target.offsetWidth)
    if(option === 'none') {
      setOption('block')       
    }
    else {
      setOption('none')      
    }
    // console.log('select ', selectRef.current.style.)
    // console.log('option ', optionRef.current.style.display)
    selectRef.current.style.width = 326
    console.log('select ', selectRef.current.style.width)
  }

  return (
    <section className="promotion">
      <div className="inner">
        <div className="promotion-title-box">
          <div className="promotion-title">{t("promotion_title1-1")}</div>
          {isDesktop &&
            <>
              <div className="promotion-main-title">{t("promotion_title1-2")}</div>
              <div className="promotion-sub-title">{t("promotion_title1-3")}</div>
            </>
          }
          {isMobile &&
            <>
              <div className="promotion-main-title">{t("Mpromotion_title1-2-1")}<br />{t("Mpromotion_title1-2-2")}</div>
              <div className="promotion-sub-title">{t("Mpromotion_title1-3-1")}<br />{t("Mpromotion_title1-3-2")}</div>
            </>
          }
        </div>
        <div className="promotion-contents-box">
          <form onSubmit={handleSubmit(onSubmit)} className="promotion-form">
            <div className="pf-row">
              <div className="pf-input-box">
                <label className="pf-label">{t("promotion_input1")}<span> *</span></label>
                <input {...register("userName", { required: true})} type="text" maxLength="128" className={classNames("pf-input-middle", errors.userName ? "pf-error-input" : null)} placeholder={t("promotion_input1")} />
                <p className={classNames(errors.userName ? "pf-error" : "pf-valid")}>{t('promotion_input1_e')}</p>
              </div>
              <div className="pf-input-box">
                <label className="pf-label">{t("promotion_input2")}<span> *</span></label>
                <input {...register("phoneNumber", { required: true })} onChange={phoneValidator} maxLength="32" type="text" className={classNames("pf-input-middle", errors.phoneNumber ? "pf-error-input" : null)} placeholder={t("promotion_input2")} />
                <p className={classNames(errors.phoneNumber ? "pf-error" : "pf-valid")}>{t('promotion_input2_e')}</p>
              </div>
            </div>

            <div className="pf-row">
              <div className="pf-input-box">
                <label className="pf-label">{t("promotion_input3")}<span> *</span></label>
                <input {...register("companyName", { required: true })} maxLength="64" type="text" className={classNames("pf-input-middle", errors.companyName ? "pf-error-input" : null)} placeholder={t("promotion_input3")} />
                <p className={classNames(errors.companyName ? "pf-error" : "pf-valid")}>{t('promotion_input3_e')}</p>
              </div>              
              <div className="pf-input-box">
                <label className="pf-label">{t("promotion_input4")}<span> *</span></label>
                <select style={{textIndent:"0px"}} {...register("companyScale", { required: true })} className={classNames("pf-input-middle", errors.companyScale ? "pf-error-input" : null)} placeholder={t("promotion_input4")}>
                  <option value="">&nbsp;&nbsp;{t("promotion_input4-default")}</option>
                  <option value="0">&nbsp;&nbsp;{t("promotion_input4-0")}</option>
                  <option value="1">&nbsp;&nbsp;{t("promotion_input4-1")}</option>
                  <option value="2">&nbsp;&nbsp;{t("promotion_input4-2")}</option>
                  <option value="3">&nbsp;&nbsp;{t("promotion_input4-3")}</option>
                  <option value="4">&nbsp;&nbsp;{t("promotion_input4-4")}</option>
                </select>
                {/* <div class="selectBox" ref={selectRef} onClick={selectClick}>
                  <div class="label">선택 🍊</div>
                  <ul class="optionList" style={{display:option, width}} ref={optionRef}>
                    <li class="optionItem">apple</li>
                    <li class="optionItem">orange</li>
                    <li class="optionItem">grape</li>
                    <li class="optionItem">melon</li>
                  </ul>
                </div> */}
                <p className={classNames(errors.companyScale ? "pf-error" : "pf-valid")}>{t('promotion_input4_e')}</p>
              </div>                            
            </div>            
            <div className="pf-input-box-long">
              <label className="pf-label">{t("promotion_input5")}<span> *</span></label>
              <input {...register("reason", { required: true })} maxLength="255" type="text" className={classNames("pf-input-long", errors.reason ? "pf-error-input" : null)} placeholder={t("promotion_input5")} />
              <p className={classNames(errors.reason ? "pf-error" : "pf-valid")}>{t('promotion_input5_e')}</p>
            </div>

            <div className="pf-input-box-long">
              <label className="pf-label">{t("promotion_input6")}<span> *</span></label>
              <input {...register("email", { required: true })} maxLength="128" type="email" className={classNames("pf-input-long", errors.email ? "pf-error-input" : null)} placeholder={t("promotion_input6")} />
              <p className={classNames(errors.email ? "pf-error" : "pf-valid")}>{t("promotion_input6")}</p>
            </div>

            <div className="pf-row">
              <div className="pf-input-box">
                <label className="pf-label">{t("promotion_input7-1")}<span> *</span></label>
                <input {...register("password", { required: true ,pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!?@#$%^&*_:;()-+~`<>"'{}\|\\\[\]\,\.\/])[A-Za-z\d!?@#$%^&*_:;()-+~`<>"'{}\|\\\[\]\,\.\/]{6,16}$/g })} maxLength="128" type={passwordType} className={classNames("pf-input-middle",errors.password ? "pf-error-input" : null)} placeholder={t("promotion_input7-2")} ></input>
                <FontAwesomeIcon onMouseDown={()=>setPasswordType('text')} onMouseUp={()=>setPasswordType('password')} icon={faEye} className="password-preview"/>
                <p className={classNames(errors.password ? "pf-error" : "pf-valid")}>{t("promotion_input7_e")}</p>
              </div>
              <div className={classNames("pf-input-box",isMobile && "pf-input-box2")}>
                <label className="pf-label">{t("promotion_input8")}<span> *</span></label>
                <input {...register("password2", { required: true, validate: value => value == getValues('password')})} maxLength="128" type="password" className={classNames("pf-input-middle", errors.password2 ? "pf-error-input" : null)} placeholder={t("promotion_input8")} />
                <p className={classNames(errors.password2 ? "pf-error" : "pf-valid")}>{t("promotion_input8_e")}</p>
              </div>
            </div>
            <div className="pf-check">
              <div className="pf-check-line">
                <input ref={checkRef} onClick={isCheck} type="checkbox" id="check"></input>
                <label htmlFor="check">
                  <div></div>
                </label>
                {
                i18n.language == "ko" ? isDesktop ?
                  <p><Link to="/terms" target="_blank"><b>{t("terms_title")}</b></Link> 및 <Link to="/privacy" target="_blank"><b>{t("privacy_title")}</b></Link>에 동의합니다.</p>
                  : <p><Link to="/terms" target="_blank"><b>{t("terms_title")}</b></Link> 및 <Link to="/privacy" target="_blank"><b>{t("privacy_title")}</b></Link>에 <br/>동의합니다.</p>
                  :  isDesktop ? <p>I agree to the<Link to={{pathname:"/terms", state:{language:"en"}}} target="_blank"><b>{t("terms_title")}</b></Link> and <Link to={{pathname:"/terms", state:{language:"en"}}} target="_blank"><b>{t("privacy_title")}</b></Link></p>
                  : <p>I agree to the <Link to={{pathname:"/terms", state:{language:"en"}}} target="_blank"><b>{t("terms_title")}</b></Link><br/> and <Link to={{pathname:"/privacy", state:{language:"en"}}} target="_blank"><b>{t("privacy_title")}</b></Link></p>
                }
              </div>
              <p className={classNames(errors.check ? "pf-error" : "pf-valid")}>{t("promotion_check_e")}</p>
            </div>

            <input ref={pfSubmit} className="pf-submit" type="submit" disabled value={t("promotion_submit_btn")} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Promotion;