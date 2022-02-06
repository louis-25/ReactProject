import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ImageContext } from '../context/ImageContext';

function ImagePage(props) {
  const { imageId } = useParams()
  const { images, myImages } = useContext(ImageContext)
  const image = 
    images.find(image => image._id === imageId) || 
    myImages.find(image => image._id === imageId)
  console.log({image})

  //이미지 로딩중
  if(!image) return <h3>Loding...</h3>
  return (
    <div>
      <h3>Image Page - {imageId}</h3>
      <img src={`http://localhost:5000/uploads/${image.key}`} alt="" />
    </div>
  );
}

export default ImagePage;