import React from 'react';
import Contents from '../images/contents.png'

function Visual(props) {
  return (
    <section className="visual">
      <div className="visual-contents-box">
        <div className="visual-contents-left">
          <h1 className="visual-main-title">안전한 콘텐츠 공유<br/>업무 메신저</h1>
          <p className="visual-text-contents">
            우리는 이제 협업 과정에서 중요 자료를 안정하게 보호<br/>
            하면서 효율적인 협업 환경을 만들 수 있는 사내 메신저<br/>
            가 반드시 필요합니다
          </p>
          <input className="visual-submitBtn" type="button" value="체험 신청"></input>
        </div>
        <div className="visual-contents-right">
          <div className="img-box">
            <img src={Contents}/>          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visual;