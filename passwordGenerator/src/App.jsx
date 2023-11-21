// import { useState } from 'react'
import { useRef, useState } from "react"
import "./App.css"
import { useCallback } from "react";
import { useEffect } from "react";
function App() {
const [length,setLength]=useState(8);
const [numbersAllowed,setNumbersAllowed]=useState(false);
const [charsAllowed,setCharsAllowed]=useState(false);
const[password,setPassword]=useState(""); 

const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numbersAllowed) str+="0123456789"
  if(charsAllowed) str+="~!#$%^&*`"
  for (let index = 1; index <= length; index++) {
    let charIndex=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(charIndex)
  }
  setPassword(pass);
},[length,numbersAllowed,charsAllowed
,setPassword])

useEffect(()=>{
  passwordGenerator()
},[length,numbersAllowed,charsAllowed,setPassword])
// function to change the password when range bar is moved
  const onRangeChange=(event)=>{
    setLength(event.target.value)
  }
//function to change the password when numbers is ticked

//function to change the password when numbers is ticked
const onCharsTick=()=>{
  setCharsAllowed(!charsAllowed)
   passwordGenerator();
}
//function for reference of password input to show it is copied or selected 
const passwordRef=useRef();
const copyToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <div className="root">
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
   <h1 className="text-white text-center my-3">password generator </h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" 
        className="outline-none w-full py-1 px-3"
        value={password}
        placeholder="password"
        ref={passwordRef}
      />
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
      onClick={copyToClipBoard}
      >copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input type="range"
      min={8} max={100}
        value={length}
        className="cursor pointer"
        onChange={onRangeChange}
      />
      <label>length :{length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input 
        type="checkbox"
        defaultChecked={numbersAllowed}
        id="numberInput"
        onChange={()=>{
          setNumbersAllowed(!numbersAllowed)
        }}
        
      />
      <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input 
        type="checkbox"
        defaultChecked={charsAllowed}
        id="charsInput"
        onChange={()=>{
          setCharsAllowed(!charsAllowed)
        }}
        
      />
      <label htmlFor="charsInput">chars</label>
    </div>

    </div>
   </div>

   </div>
  )
   
  
}

export default App
