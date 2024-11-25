import React, { useState } from 'react'
import { WiMoonAltFull, WiMoonAltNew } from "react-icons/wi";

const ChangeBackground = () => {
    let [theme, setTheme] = useState(false)

    let toggle = () => {
        setTheme(!theme)
    }

    let ChangeColor = () => {
        if(theme){
            document.body.className = "dark"
        }else {
            document.body.className = 'light'
        }
    }
  return (
    <>
        <ChangeColor />
        <h1>{theme ? "DARK THEME" : "LIGHT THEME"}</h1>
        <button onClick={toggle}>{theme ? <WiMoonAltFull/>: <WiMoonAltNew/>}</button>
    </>
  )
}

export default ChangeBackground