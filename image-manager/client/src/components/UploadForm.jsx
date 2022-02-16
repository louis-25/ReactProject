import React, { useState, useContext } from 'react';
import axios from 'axios';
import "./UploadForm.css"
import { toast } from "react-toastify"
import ProgressBar from './ProgressBar';
import {ImageContext} from "../context/ImageContext"

function UploadForm(props) {
  const { setImages } = useContext(ImageContext)
  const defaultFileName = '이미지 파일을 업로드 해주세요.'
  const [files, setFiles] = useState(null);

  // const [imgSrc, setImgSrc] = useState(null); // 이미지 미리보기
  // const [fileName, setFileName] = useState(defaultFileName);

  const [previews, setPreviews] = useState([]) // 이미지 미리보기(여러개)

  const [percent, setPercent] = useState(0); // progress
  const [isPublic, setIsPublic] = useState(true); // 이미지공개 여부

  const imageSelectHandler = async (e) => {
    const imageFiles = e.target.files;
    setFiles(imageFiles)

    const imagePreviews = await Promise.all(
      [...imageFiles].map(async imageFile => {
        return new Promise((resolve, reject) => {
          try{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile) // 임시 url생성
            fileReader.onload = (e) => 
              resolve({imgSrc: e.target.result, fileName: imageFile.name}); //성공 - resolve
          } catch(e) {
            reject(e) //실패 - reject
          }
        })
      })
    )

    setPreviews(imagePreviews)

    // const imageFile = imageFiles[0]
    // setFileName(imageFile.name)
    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(imageFile) // 임시 url생성
    // fileReader.onload = e => setImgSrc(e.target.result);
  }

  //서버로 이미지 전송
  const onSubmit = async (e) => {
    e.preventDefault(); // 새로고침 방지
    const formData = new FormData() // key-value
    for(let file of files) {
      formData.append("image", file)
    }
    formData.append("public", isPublic)
    try {
      const res = await axios.post("/images", formData, {
        headers: {"Content-Type":"multipart/form-data"},
        onUploadProgress: (e) => {
          setPercent(Math.round((100 * e.loaded) / e.total));
        }
      })
      setImages((prevData) => [...prevData, ...res.data]) // 이미지 바로 보이게하기
      toast.success("이미지 업로드 성공!");
      setTimeout(()=>{ // 3초 후 초기화
        setPercent(0);
        // setFileName(defaultFileName)        
        // setImgSrc(null)
        setPreviews([])
      }, 3000)      
      console.log('res ',res)
    } catch(e) {      
      toast.error(e.response.data.message) // 백엔드에서 보낸 에러메세지 출력
      // 나머지 세팅값 초기화
      setPercent(0);
      // setFileName(defaultFileName);
      // setImgSrc(null)
      console.error(e)
    }
  }

  const previewImages = previews.map((preview, index) => (
  <img 
    key={index}
    style={{width:200, height:200, objectFit:"cover"}}
    src={preview.imgSrc} 
    alt="" 
    className={`image-preview ${preview.imgSrc && "image-preview-show"}`}/>
  ));

  const fileName = 
    previews.length === 0 
      ? "이미지 파일을 업로드 해주세요." 
      : previews.reduce(
          (previous, current) => previous + `${current.fileName}, `,"")

  return (
    <form onSubmit={onSubmit}>      
      <div style={{display:"flex", flexWrap:"wrap"}}>{previewImages}</div>
      <ProgressBar percent={percent}/>
      <div className="file-dropper">
        {fileName}
        
        <input 
          id="image" 
          type="file" 
          multiple // 여러 파일 선택하는 옵션
          accept="image/*" // 이미지 파일만 받겠다
          onChange={imageSelectHandler}
        /> 
      </div>

      <input type="checkbox" id="public-check" value={!isPublic} onChange={()=> {setIsPublic(!isPublic); console.log(isPublic)}}/>
      <label htmlFor='public-check'>비공개</label>
      <button className="file-button" type="submit">제출</button>
    </form>
  );
}

export default UploadForm;