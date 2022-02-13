import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {ImageContext} from "../context/ImageContext"
import "./ImageList.css"

function ImageList(props) {
  const {images, myImages, isPublic, setIsPublic, loaderMoreImages} = useContext(ImageContext)  
  const [me] = useContext(AuthContext)

  // isPublic값에 따라 [공개사진 / 비공개사진] 나눠서 보여주기
  const imgList = (isPublic ? images: myImages).map(image =>
    <Link to={`/images/${image._id}`} key={image.key}>
      <img 
        alt=""              
        src={`http://localhost:5000/uploads/${image.key}`}      
      />
    </Link>
  )

  return (
    <div>
      <h3 style={{display:"inline-block", marginRight: 10}}>
        Image List({isPublic ? "공개" : "개인"} 사진)
      </h3>
      {me && myImages && <button onClick={()=> setIsPublic(!isPublic)}>
        {(isPublic ? "개인" : "공개")+" 사진 보기"}
      </button>}
      <div className="image-list-container">
        {imgList}
      </div>
      <button onClick={loaderMoreImages}>Load More Images</button>
    </div>
  );
}

export default ImageList;