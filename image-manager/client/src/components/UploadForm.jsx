import React, { useState } from 'react';
import axios from 'axios';
import "./UploadForm.css"

function UploadForm(props) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("이미지 파일을 업로드 해주세요.");  

  const imageSelectHandler = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile)
    setFileName(imageFile.name)
  }

  const onSubmit = async (e) => {
    e.preventDefault(); // 새로고침 방지
    const formData = new FormData() // key-value
    formData.append("image", file)
    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {"Content-Type":"multipart/form-data"}
      })      
      console.log('res ',res)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="file-dropper">
        {fileName}
        <input id="image" type="file" onChange={imageSelectHandler}/>
      </div>
      <button className="file-button" type="submit">제출</button>
    </form>
  );
}

export default UploadForm;