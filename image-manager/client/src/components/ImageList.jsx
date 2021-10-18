import React, { useContext } from 'react';
import {ImageContext} from "../context/ImageContext"

function ImageList(props) {
  const [images, setImages] = useContext(ImageContext)
  const imgList = images.map(image => 
    <img key={image.key} style={{width:"100%"}}src={`http://localhost:5000/uploads/${image.key}`}/>
  )

  return (
    <div>
      <p>Image</p>
      {imgList}
    </div>
  );
}

export default ImageList;