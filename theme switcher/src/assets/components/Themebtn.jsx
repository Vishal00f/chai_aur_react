import React, { useEffect, useState } from 'react'
import useThemeContext from '../contexts/useThemeContext'
import { FaMoon  } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";

function Themebtn() {
 const {theme,setTheme}= useThemeContext()
 const [darkMode,setDarkMode]=useState(false);
 const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setDarkMode(!darkMode);
};

if(darkMode===false){
   return <button onClick={handleThemeChange}>
         <FaMoon className='text-3xl icon'/>
    </button>
}
else{
    return <button onClick={handleThemeChange}>
     <TiWeatherSunny className='text-3xl icon'/>
</button>
}



}

export default Themebtn