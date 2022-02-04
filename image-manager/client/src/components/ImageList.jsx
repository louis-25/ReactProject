import React, { useContext, useState } from 'react';
import {ImageContext} from "../context/ImageContext"

function ImageList(props) {
  const {images, myImages, isPublic, setIsPublic} = useContext(ImageContext)  
  const imgList = (isPublic ? images : myImages).map(image => 
    <img 
      alt=""
      key={image.key} 
      style={{width:"100%"}}
      src={`http://localhost:5000/uploads/${image.key}`}
    />
  )

  return (
    <div>
      <h3 style={{display:"inline-block", marginRight: 10}}>
        Image List({isPublic ? "공개" : "개인"} 사진)
      </h3>
      <button onClick={()=>setIsPublic(!isPublic)}>{(isPublic ? "개인" : "공개")+" 사진 보기"}</button>
      {imgList}
    </div>
  );
}

export default ImageList;