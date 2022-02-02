import React from 'react';
import ImageList from '../components/ImageList';
import UploadForm from '../components/UploadForm';

function MainPage(props) {
  return (
    <div>
      <h2>사진첩</h2>
      <UploadForm />
      <ImageList />
    </div>
  );
}

export default MainPage;