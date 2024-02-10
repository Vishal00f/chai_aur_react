import React from 'react'
import UserContextProvider from './assets/context/UserContextProvider'
import InputInfo from './assets/components/InputInfo'
import Profile from './assets/components/Profile'
import "./App.css"
function App() {
  return (
    <UserContextProvider>
      <h1>hello</h1>
      <InputInfo/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
