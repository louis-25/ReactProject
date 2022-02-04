import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
export const ImageContext = createContext()

export const ImageProvider = (prop) => {
  const [images, setImages] = useState([])
  const [myImages, setMyImages] = useState([])
  const [isPublic, setIsPublic] = useState(true)
  const [me] = useContext(AuthContext); // ImageContext가 AuthContext 하위에 있기때문에 불러올 수 있다

  useEffect(()=>{
    axios
    .get("/images")
    .then(result => setImages(result.data))
    .catch(e => console.log(e))
  },[])
  // 내 이미지 불러오기
  useEffect(()=>{
    if(me) { 
      axios
        .get("/users/me/images")
        .then((result) => setMyImages(result.data)
        .catch(e=> console.error(e)))
    }
  },[me]) //인증정보 바뀔때마다 작동

  return (
  // tip! 괄호로 묶어서 빼면 원하는값만 선택해서 사용할 수 있다
  <ImageContext.Provider value={{images, setImages, myImages, setMyImages, isPublic, setIsPublic}}>
    {prop.children}
  </ImageContext.Provider>
  )
}
