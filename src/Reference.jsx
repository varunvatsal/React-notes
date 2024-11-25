import React, { useRef } from 'react'



const Reference = () => {
    //step 1 : create a reference variable
    let inputRef = useRef()
    console.log(inputRef)
    let changeInput = () => {
        inputRef.current.placeholder = "Enter the data"
        inputRef.current.focus()
        inputRef.current.style.background = "yellow"
        inputRef.current.style.padding = "20px"
        
    }
    //step 2: targetting particular element by connecting it with reference-variable
  return (
    <>
        
        <input type="text" ref={inputRef}/>
        <button onClick={changeInput}>CHANGE</button>
    </>
  )
}

export default Reference

// SQL grooming Date:14th Nov (Thursday) Time:5.00 pm Link :https://student.qspiders.com/stream/QCO-GROGRD-E99