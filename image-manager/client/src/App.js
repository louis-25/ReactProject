import React from 'react';
import UploadForm from './components/UploadForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  return (
    <div>
      <ToastContainer/>
        <h2>사진첩</h2>
        <UploadForm />      
    </div>
  );
}

export default App;