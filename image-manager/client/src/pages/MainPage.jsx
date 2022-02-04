import React, { useContext } from 'react';
import ImageList from '../components/ImageList';
import UploadForm from '../components/UploadForm';
import { AuthContext } from '../context/AuthContext';

function MainPage(props) {
  // 로그인 세션값 확인용
  const [me] = useContext(AuthContext);

  return (
    <div>
      <h2>사진첩</h2>      
      {me && <UploadForm />}
      <ImageList />
    </div>
  );
}

export default MainPage;