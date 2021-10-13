import React, { useState } from 'react';
import axios from 'axios';
import "./UploadForm.css"
import { toast } from "react-toastify"
import ProgressBar from './ProgressBar';

function UploadForm(props) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("이미지 파일을 업로드 해주세요.");  
  const [percent, setPercent] = useState(0);  
  const imageSelectHandler = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile)
    setFileName(imageFile.name)
  }

  //서버로 이미지 전송
  const onSubmit = async (e) => {
    e.preventDefault(); // 새로고침 방지
    const formData = new FormData() // key-value
    formData.append("image", file)
    try {
      let defaultFileName = '이미지 파일을 업로드 해주세요.'
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {"Content-Type":"multipart/form-data"},
        onUploadProgress: (e) => {
          setPercent(Math.round((100 * e.loaded) / e.total));
        }
      })      
      toast.success("success!!");
      setTimeout(()=>{ // 3초 후 초기화 
        setPercent(0);
        setFileName(defaultFileName)
      }, 3000)      
      console.log('res ',res)
    } catch(e) {
      toast.error('파일 형식이 잘못됐습니다')
      console.error(e)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <ProgressBar percent={percent}/>
      <div className="file-dropper">
        {fileName}
        <input id="image" type="file" onChange={imageSelectHandler}/>
      </div>
      <button className="file-button" type="submit">제출</button>
    </form>
  );
}

export default UploadForm;