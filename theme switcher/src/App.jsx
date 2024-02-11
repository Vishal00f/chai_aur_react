import React, { useEffect, useState } from 'react'
import ThemeContextProvider from './assets/contexts/ThemeContext'
import Themebtn from './assets/components/Themebtn'

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light',);
    

    
       document.querySelector('html').classList.add(theme);
    
    

  }, [theme])
  
  return (
    <ThemeContextProvider value={{theme,setTheme}}>
        <div className={`w-96 h-96 `}>
          sajjjjj
        </div>
        <Themebtn/>  
    </ThemeContextProvider>
  )
}

export default App