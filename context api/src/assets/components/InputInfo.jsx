import React, { useContext } from 'react'   
import UserContext from '../context/UserContext'
import { useState } from 'react'
function InputInfo() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUserInfo}= useContext(UserContext);
   const handleClick=(event)=>{
        event.preventDefault();
        setUserInfo({username,password});
   }
  return (
    <div>
        <h1>enter details</h1>
        <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button onClick={handleClick}> submit</button>
    </div>
  )
}

export default InputInfo