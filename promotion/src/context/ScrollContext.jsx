import React, { createContext, useRef } from 'react';
export const ScrollContext = createContext()

export const ScrollProvider = (prop) => {  
  const featureRef = useRef()
  const promotionRef = useRef()
  const aboutRef = useRef()

  return (
    <ScrollContext.Provider value={featureRef, promotionRef, aboutRef}>
      {prop.children}
    </ScrollContext.Provider>
  )
}