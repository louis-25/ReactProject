import React from 'react';
/* svg안먹음 */
import Folder from '../images/folder.png'
import Group from '../images/group.png'
import Balloon from '../images/textballoon.png'
import { useMediaQuery } from 'react-responsive'

function Feature(props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    // <div className="inner">
    <div className={`feature inner`}>
      <div className="feature-title-box">
        <div className="feature-sub-title">주요기능</div>
        <h1 className="feature-title">왜 Fireside인가요?</h1>
      </div>
      <div className="feature-contents-box">
        <div className="feature-content">
          <div className="feature-content-title">안전한 콘텐츠 공유</div>          
          <p className="feature-content-text">
            사내 기밀문서, 비공개문서, 개인 정보 등<br/>
            민감 정보가 포함된 중요 문서들을 암호화<br/>
            기반으로 공유함으로써 권한을 보유한 구<br/>
            성원들만 협업할 수 있습니다.
          </p>
          <div className="feature-content-img"><img src={Folder}/></div>
        </div>
        <div className="feature-content">
          <div className="feature-content-title">콘텐츠 중심 협업</div>
          <p className="feature-content-text">
            협업의 중심이 되는  문서, PPT, 디자인<br/>
            시안, CAD 파일을 기준으로 채팅방이 자<br/>
            동 성생되어 프로젝트구성원과 편리하<br/>
            게 커뮤니케이션할 수 있습니다.
          </p>
          <div className="feature-content-img"><img src={Group}/></div>
        </div>
        <div className="feature-content">
          <div className="feature-content-title">직관적인 채팅 환경</div>
          <p className="feature-content-text">
            전체/문서/사용자 채팅으로 구분되어 채<br/>
            팅 목록을 개별적으로 확인할 수 있으며,<br/>
            직관적인 환경 구성으로 누구나 쉽게 사용<br/>
            할 수 있습니다.
          </p>
          <div className="feature-content-img"><img src={Balloon}/></div>
        </div>
      </div>
      
    </div>    
  );
}

export default Feature;