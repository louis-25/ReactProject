import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {ImageContext} from "../context/ImageContext"
import "./ImageList.css"

function ImageList(props) {
  const {
    images,    
    isPublic,
    setIsPublic,
    setImageUrl,    
    imageLoading,
    imageError
  } = useContext(ImageContext)
  const [me] = useContext(AuthContext)
  const elementRef = useRef(null)

  const loaderMoreImages = useCallback(()=>{
    if(images.length === 0 || imageLoading) return;
    const lastImageId = images[images.length - 1]._id;
    setImageUrl(`${isPublic ? "" : "/users/me"}/images?lastid=${lastImageId}`)
  },[images, imageLoading, isPublic, setImageUrl])

  useEffect(()=>{
    if(!elementRef.current) return
    const observer = new IntersectionObserver(([entry])=>{
      console.log('intersection',entry.isIntersecting)
      if(entry.isIntersecting) loaderMoreImages(); //entry값이 발견되면 함수를 실행한다
    })
    observer.observe(elementRef.current) // elementRef요소를 감시한다
    return () => observer.disconnect() //
  }, [loaderMoreImages])

  // isPublic값에 따라 [공개사진 / 비공개사진] 나눠서 보여주기
  const imgList = images.map((image, index) => (      
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

  return (
    <div>
      <h3 style={{display:"inline-block", marginRight: 10}}>
        Image List({isPublic ? "공개" : "개인"} 사진)
      </h3>
      {me && <button onClick={()=> setIsPublic(!isPublic)}>
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