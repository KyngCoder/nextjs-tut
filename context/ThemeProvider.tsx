"use client"

import React, {useState, useEffect, useContext, createContext} from 'react'


interface themeContextType {
    mode: string,
    setMode: (mode: string) => void
}

const ThemeContext = createContext<themeContextType | undefined>(undefined)

export function ThemeProvider({children}:{children:React.ReactNode}){
    const [mode, setMode] = useState(" ")

    const handleThemeChange = () => {
        if(mode === "light"){
            setMode("dark")
            document.documentElement.classList.add("dark")
        }else{
            setMode("light")
            document.documentElement.classList.add("light")
        }
    }


    useEffect(() => {
        handleThemeChange()
    }, [mode])

    return (
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    )


}

export function useTheme() {
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error('usetheme must be used within a provider')
    }

    return context

}