import React, { createContext, useEffect, useRef, useState } from 'react';
export const ScrollContext = createContext()

export const ScrollProvider = (prop) => {
  // 스크롤 위치값
  const [scroll, setScroll] = useState()
  const feature = useRef()  

  useEffect(()=>{
    window.scrollTo({
      top: scroll,
      behavior: "smooth"
    })
  },[scroll])

  return (
    <ScrollContext.Provider value={[scroll,setScroll]}>
      {prop.children}
    </ScrollContext.Provider>
  )
}