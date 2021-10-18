import React, { useEffect, useState } from 'react';
import axios from 'axios'

function ImageList(props) {
  const [images, setImages] = useState([])
  useEffect(()=>{
    axios
    .get("/images")
    .then(result => setImages(result.data))
    .catch(e => console.log(e))
  },[])
  const imgList = images.map(image => 
    <img style={{width:"100%"}}src={`http://localhost:5000/uploads/${image.key}`}/>
  )

  return (
    <div>
      <p>Image</p>
      {imgList}
    </div>
  );
}

export default ImageList;