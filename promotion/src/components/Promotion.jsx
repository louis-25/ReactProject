import React from 'react';

function Promotion(props) {
  return (
    
      <section className="promotion">
        <div className="inner">
        <div className="promotion-title-box">
          <div className="promotion-title">체험 신청</div>
          <div className="promotion-main-title">Fireside를 무료로 이용하세요</div>
          <div className="promotion-sub-title">아래 정보를 입력하고 Fireside를 바로 체험해보세요.</div>
        </div>
        <div className="promotion-contents-box">
          <form className="promotion-form">

              <div className="pf-row">
                <div className="pf-input-box">
                  <label className="pf-label">이름*</label>
                  <input type="text" className="pf-input-middle" placeholder="이름"/>
                  <p className="pf-valid">이름을 입력하세요.</p>
                </div>
                <div className="pf-input-box">
                  <label className="pf-label">전화 번호*</label>
                  <input type="text" className="pf-input-middle" placeholder="전화번호"/>
                  <p className="pf-valid">전화 번호를 입력하세요.</p>
                </div>
              </div>

              <div className="pf-row">
                <div className="pf-input-box">
                  <label className="pf-label">회사 이름*</label>
                  <input type="text" className="pf-input-middle" placeholder="회사 이름"/>
                  <p className="pf-valid">회사 이름을 입력하세요.</p>
                </div>
                <div className="pf-input-box">
                  <label className="pf-label">회사 규모*</label>
                  <input type="text" className="pf-input-middle" placeholder="이름"/>
                  <p className="pf-valid">회사 규모를 선택해주세요.</p>
                </div>
              </div>

              <div className="pf-input-box-long">
                <label className="pf-label">신청 사유*</label>
                <input type="text" className="pf-input-long" placeholder="신청 사유"/>
                <p className="pf-valid">신청 사유를 입력해주세요.</p>
              </div>
              
              <div className="pf-input-box-long">
                <label className="pf-label">회원 가입 이메일 주소*</label>
                <input type="text" className="pf-input-long" placeholder="이메일 주소"/>
                <p className="pf-valid">신청 사유를 입력해주세요.</p>
              </div>

              <div className="pf-row">
                <div className="pf-input-box">
                  <label className="pf-label">회원 가입 비밀 번호*</label>
                  <input type="text" className="pf-input-middle" placeholder="비밀 번호"/>
                  <p className="pf-valid">6자~16자, 대소문자, 숫자, 특수문자를 포함해야 합니다.</p>
                </div>
                <div className="pf-input-box">
                  <label className="pf-label">비밀 번호 확인*</label>
                  <input type="text" className="pf-input-middle" placeholder="비밀 번호 확인"/>
                  <p className="pf-valid">비밀 번호가 일치하지 않습니다.</p>
                </div>
              </div>
              <div className="pf-check">
                <input type="checkbox" ></input>                
                <p><b>이용 약관</b> 및 <b>개인정보처리방침</b>에 동의합니다.</p>
              </div>

              <input className="pf-submit" type="submit" value="메일로 프로모션 코드 받기"/>
          </form>
        </div>
        </div>
      </section>
    
  );
}

export default Promotion;