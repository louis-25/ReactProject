import React from 'react';
import Folder from '../images/folder.png'
import Group from '../images/group.png'
import Balloon from '../images/textballoon.png'

function Feature(props) {
  return (
    // <div className="inner">
    <div className={`feature inner`}>      
      <div className="feature-title-box">
        <div className="feature-sub-title">주요기능</div>
        <h1 className="feature-title">콘텐츠 중심 업무 메신저</h1>
      </div>
      <div className="feature-contents-box">
        <div className="feature-content">
          <div className="feature-content-title">안전한 콘텐츠 공유</div>          
          <p className="feature-content-text">
            문서자산화 플랫폼 Wrapsody와 연동해<br/>
            협업 데이터를 암호화함으로써<br/>
            안정적으로 협업 콘텐츠를 송수신하고<br/>
            관리할 수 있습니다.
          </p>
          <div className="feature-content-img"><img src={Folder}/></div>
        </div>
        <div className="feature-content">
          <div className="feature-content-title">콘텐츠 중심 협업</div>
          <p className="feature-content-text">
            문서, 이미지/디자인 시안, CAD 파일 등<br/>
            협업의 중심인 콘텐츠를 기반으로<br/>
            커뮤니케이션할 수 있어 협업 효율성이<br/>
            극대화됩니다.
          </p>
          <div className="feature-content-img"><img src={Group}/></div>
        </div>
        <div className="feature-content">
          <div className="feature-content-title">직관적인 채팅 환경</div>
          <p className="feature-content-text">
            Fasoo Fireside를 처음 접하는 사람도<br/>
            빠르게 적응할 수 있는 채팅 환경으로<br/>
            높은 업무 편의성을 제공합니다.
          </p>
          <div className="feature-content-img"><img src={Balloon}/></div>
        </div>
      </div>
      
    </div>
    // </div>
  );
}

export default Feature;