import React, { useState,useEffect } from 'react'

function Button({children,handleClick}) {
    const [color,setColor]=useState("green");
    
    useEffect(()=>{
      setColor(children);
    },[])


    

  return (
    <button onClick={()=>handleClick(color)} className="text-black font-bold py-2 px-4 rounded-full"  style={{backgroundColor:children}}  >
    {children}
  </button>
  )
}

export default Button