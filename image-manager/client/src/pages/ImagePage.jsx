import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ImageContext } from '../context/ImageContext';
import { toast } from "react-toastify"

function ImagePage(props) {
  const { imageId } = useParams()
  const { images, setImages, setMyImages } = useContext(ImageContext)
  const [hasLiked, setHasLiked] = useState(false);
  const [me] = useContext(AuthContext)
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [error, setError] = useState(false);  

  useEffect(()=>{ // imageId가 바뀔때만 실행
    const img = images.find((image) => image._id === imageId)      
    if(img) setImage(img)
  },[images, imageId])

  useEffect(()=>{
    if(image && image._id === imageId) return
    axios
      .get(`/images/${imageId}`)
      .then(({data}) => {
        setError(false)
        setImage(data)
      })
      .catch((e) => {
        setError(true)
        toast.error(e.response.data.message)
      })    
  },[imageId, image])

  useEffect(()=>{
    if(me && image && image.likes.includes(me.userId)) setHasLiked(true)
  },[me, image])

  const updateImage = (images, image) => [
    ...images.filter((image) => image._id !== imageId), 
    image,
  ].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  const onSubmit = async () =>{
    try{
    const result = await axios.patch(
      `/images/${imageId}/${hasLiked ? "unlike" : "like"}`
    );    
    if(result.data.public) 
      setImages((prevData) => updateImage(prevData, result.data));
    setMyImages((prevData) => updateImage(prevData, result.data));

    setHasLiked(!hasLiked);
    console.log('hasLiked',hasLiked)
    } catch (e) {
      console.log('e',e.response.data.message)
    }
  }  

  const deleteHandler = async() => {
    try {
      if(!window.confirm("정말 해당 이미지를 삭제하시겠습니까?")) return;
      const result = await axios.delete(`/images/${imageId}`)
      toast.success(result.data.message)
      setImages((prevData) => prevData.filter(image => image._id !== imageId))      
      setMyImages((prevData) => prevData.filter(image => image._id !== imageId))      
      navigate("/")
    } catch(e) {
      toast.error(e.message)
    }
  }

  
  if(error) return <h3>Error...</h3> //
  else if(!image) return <h3>Loding...</h3> //이미지 로딩중

  return (
    <div>
      <h3>Image Page - {imageId}</h3>
      <img 
        style={{width:'100%'}}
        src={`/uploads/${image.key}`} 
        alt={imageId}
      />
      <span>좋아요 {image.likes.length}</span>
      <button style={{float:"right", marginLeft: 10}} onClick={deleteHandler}>삭제</button>
      <button style={{float:"right"}} onClick={onSubmit}>
        {hasLiked ? "좋아요 취소" : "좋아요"}
      </button>
    </div>
  );
}

export default ImagePage;