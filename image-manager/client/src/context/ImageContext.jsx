import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
export const ImageContext = createContext()

export const ImageProvider = (prop) => {
  const [images, setImages] = useState([])
  const [myImages, setMyImages] = useState([])
  const [isPublic, setIsPublic] = useState(true)  
  const [imageUrl, setImageUrl] = useState("/images")
  const [me] = useContext(AuthContext); // ImageContext가 AuthContext 하위에 있기때문에 불러올 수 있다
  
  useEffect(()=>{ // 모든 사진정보 불러오기
    axios
    .get(imageUrl) // imageUrl상태가 변경될때마다 API호출
    .then(result => setImages(prevData => [...prevData, ...result.data])) // 기존의 이미지 + 불러온 이미지
    .catch(e => console.log(e))    
  },[imageUrl])

  // 내 이미지 불러오기
  useEffect(()=>{
    if(me) { 
      setTimeout(()=>{ //이벤트 루프 내에서 실행 순서를 바꾸기위해 사용(1.프론트에서 요청 2. 백엔드에서 데이터 전송 3. 프론트에서 전달받은 데이터 사용)
        axios
          .get("/users/me/images")
          .then(result => setMyImages(result.data))
          .catch(e=> console.error(e))          
      }, 0)
      console.log('myImages', myImages)
    } else { // 인증정보가 없으면
      setMyImages([]); // 내 이미지 정보 초기화
      setIsPublic(true) // 공개사진만 보여주기
    }    
  }, [me]); //인증정보 바뀔때마다 작동

  const loaderMoreImages = () => {
    if(images.length === 0) return; // 이미지가 없을때
    const lastImageId = images[images.length-1]._id
    setImageUrl(`/images?lastid=${lastImageId}`)
  }

  return (
  // tip! 괄호로 묶어서 빼면 원하는값만 선택해서 사용할 수 있다
  <ImageContext.Provider value={{images, setImages, myImages, setMyImages, isPublic, setIsPublic, loaderMoreImages}}>
    {prop.children}
  </ImageContext.Provider>
  )
}
