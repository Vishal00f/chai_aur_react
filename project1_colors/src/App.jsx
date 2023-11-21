import React, { Children, useState } from 'react'
import Button from './Components/Button';

function App() {
  const [color,setColor]=useState("olive");
  
  const handleClick=(color)=>{
    setColor(color);
  }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <Button handleClick={handleClick}>red</Button>
      <Button handleClick={handleClick}>green</Button>
      <Button handleClick={handleClick}>blue</Button>
      <Button handleClick={handleClick}>pink</Button>
      <Button handleClick={handleClick}>yellow</Button>
      <Button handleClick={handleClick}>orange</Button>
      <Button handleClick={handleClick}>lavender</Button>
      <Button handleClick={handleClick}>purple</Button>
      <Button handleClick={handleClick}>grey</Button>
    </div>
    </div>
 
    </div>
  )
}

export default App