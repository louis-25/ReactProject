import React, { useState, useContext } from 'react';
import axios from 'axios';
import "./UploadForm.css"
import { toast } from "react-toastify"
import ProgressBar from './ProgressBar';
import {ImageContext} from "../context/ImageContext"

function UploadForm(props) {
  const { images, setImages, myImages, setMyImages, isPublic, setIsPublic } = useContext(ImageContext)
  const defaultFileName = '이미지 파일을 업로드 해주세요.'
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(defaultFileName);
  const [percent, setPercent] = useState(0); // progress
  const [imgSrc, setImgSrc] = useState(null); // 이미지 미리보기
  // const [isPublic, setIsPublic] = useState(true); // 이미지공개 여부

  const imageSelectHandler = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile)
    setFileName(imageFile.name)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile) // 임시 url생성
    fileReader.onload = e => setImgSrc(e.target.result);
  }

  //서버로 이미지 전송
  const onSubmit = async (e) => {
    e.preventDefault(); // 새로고침 방지
    const formData = new FormData() // key-value
    formData.append("image", file)
    formData.append("public", isPublic)
    try {
      const res = await axios.post("/images", formData, {
        headers: {"Content-Type":"multipart/form-data"},
        onUploadProgress: (e) => {
          setPercent(Math.round((100 * e.loaded) / e.total));
        }
      })
      if(isPublic) setImages([...images, res.data]) // 이미지 바로 보이게하기      
      else setMyImages([...myImages, res.data])
      toast.success("success!!");
      setTimeout(()=>{ // 3초 후 초기화
        setPercent(0);
        setFileName(defaultFileName)
        setImgSrc(null)
      }, 3000)      
      console.log('res ',res)
    } catch(e) {      
      toast.error(e.response.data.message) // 백엔드에서 보낸 에러메세지 출력
      // 나머지 세팅값 초기화
      setPercent(0);
      setFileName(defaultFileName);
      setImgSrc(null)
      console.error(e)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <img src={imgSrc} className={`image-preview ${imgSrc && "image-preview-show"}`}/>
      <ProgressBar percent={percent}/>
      <div className="file-dropper">
        {fileName}
        {/* 이미지 파일만 받겠다 */}
        <input id="image" type="file" accept="image/*" onChange={imageSelectHandler}/> 
      </div>
      <input type="checkbox" id="public-check" value={!isPublic} onChange={()=> {setIsPublic(!isPublic); console.log(isPublic)}}/>
      <label htmlFor='public-check'>비공개</label>
      <button className="file-button" type="submit">제출</button>
    </form>
  );
}

export default UploadForm;