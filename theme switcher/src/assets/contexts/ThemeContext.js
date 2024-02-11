import React, { createContext } from 'react'

export const ThemeContext = createContext({
    theme:"light",
    setTheme:()=>{}
})

const ThemeContextProvider= ThemeContext.Provider
export default ThemeContextProvider;
