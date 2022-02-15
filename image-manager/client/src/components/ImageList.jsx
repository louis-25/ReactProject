import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {ImageContext} from "../context/ImageContext"
import "./ImageList.css"

function ImageList(props) {
  const {
    images,
    myImages,
    isPublic,
    setIsPublic,
    loaderMoreImages,
    imageLoading,
    imageError
  } = useContext(ImageContext)
  const [me] = useContext(AuthContext)
  const elementRef = useRef(null)

  useEffect(()=>{
    if(!elementRef.current) return
    const observer = new IntersectionObserver(([entry])=>{
      console.log('intersection',entry.isIntersecting)
      if(entry.isIntersecting) loaderMoreImages();
    })
    observer.observe(elementRef.current) // elementRef요소를 감시한다
    return () => observer.disconnect() //
  }, [loaderMoreImages])

  // isPublic값에 따라 [공개사진 / 비공개사진] 나눠서 보여주기
  const imgList = isPublic 
    ? images.map((image, index) => (      
      <Link 
        to={`/images/${image._id}`} 
        key={image.key} 
        ref={index+1 === images.length ? elementRef : undefined} //마지막 이미지 요소에 ref 부여하기 (인피니티 스크롤)
      >
        <img 
          alt=""              
          src={`http://localhost:5000/uploads/${image.key}`}      
        />
      </Link>
    ))
    : myImages.map((image, index) => (
      <Link 
        to={`/images/${image._id}`} 
        key={image.key} 
        ref={index+1 === myImages.length ? elementRef : undefined}
      >
        <img 
          alt=""              
          src={`http://localhost:5000/uploads/${image.key}`}      
        />
      </Link>
    ))

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
      {imageError && <div>Error...</div>}
      {imageLoading ? <div>Loading...</div>
      : <button onClick={loaderMoreImages}>Load More Images</button>
      }
    </div>
  );
}

export default ImageList;