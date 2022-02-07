import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ImageContext } from '../context/ImageContext';
import { toast } from "react-toastify"

function ImagePage(props) {
  const { imageId } = useParams()
  const { images, myImages, setImages, setMyImages } = useContext(ImageContext)
  const [hasLiked, setHasLiked] = useState(false);
  const [me] = useContext(AuthContext)
  const navigate = useNavigate();

  const image = 
    images.find((image) => image._id === imageId) || 
    myImages.find((image) => image._id === imageId);
  console.log({image})

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
    console.log('result',result)
    if(result.data.public) setImages(updateImage(images, result.data));
    else setMyImages(updateImage(myImages, result.data))

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
      setImages(images.filter(image => image._id !== imageId))
      setMyImages(myImages.filter(image => image._id !== imageId))
      navigate("/")
    } catch(e) {
      toast.error(e.message)
    }
  }

  //이미지 로딩중
  if(!image) return <h3>Loding...</h3>
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