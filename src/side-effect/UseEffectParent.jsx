// import React, {useState, useEffect} from 'react'
// import UseEffectChild from './UseEffectChild'
// const UseEffectParent = () => {
//     let [emp, setEmp] = useState("vivek")

//     let changeState = () => {
//         setEmp("varun")
//     }

//     useEffect(() => {
//         console.log("useEffect1 --> componentDidMount and componentDidUpdate --> render")
//     })

//     useEffect(() => {
//         console.log("useEffect2 --> equal to componentDidMount")
//     }, [])

//     useEffect(() => {
//         console.log("equal to componentDidUpdate")
//     }, [emp])
//   return (
//     <>
//         <h1>Employee -- {emp}</h1>
//         {emp === 'vivek' && <UseEffectChild />}
//         <button onClick={changeState}>CHANGE</button>
//     </>
//   )
// }

// export default UseEffectParent

// import React, { useEffect, useState } from 'react'

// const UseEffectParent = () => {
//     let [toggle, setToggle] = useState(false)

//     useEffect(() => {
//         if(toggle){
//             document.title = "REACTJS"
//         } else {
//             document.title = "WEBTECH"
//         }

//         console.log("useEffect is calling --> by targeting title")
//     })

//   return (
//     <>
//         <button onClick={() => {setToggle(!toggle)}}>TOGGLE</button>
//     </>
//   )
// }

// export default UseEffectParent

import React, { useEffect, useState } from 'react'

const UseEffectParent = () => {
    let [count, setCount] = useState(0)
    let [input, setInput] = useState("")

    useEffect(() => {
        document.title = `clicked ${count} times`
        console.log(" useeffect is calling --> by targeting title") 
    }, [count])

  return (
    <>
        <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
        <button onClick={() => {setCount((prev) => prev+1)}}>increase count</button>
    </>
  )
}

export default UseEffectParent