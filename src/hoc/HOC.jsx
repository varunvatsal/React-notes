// import React from 'react'

// const HOC = (Wrapper) => {

//     let NewCompo = () => {
//         return <Wrapper tech="ReactJs" />
//     }
//   return NewCompo
// }

// export default HOC


import React, {useState} from 'react'

const HOC = (Wrapper) => {
  
  let newCompo = () => {
    let [count, setCount] = useState(0);
    let increment = () => {
        setCount((prev)=> prev+1);
    }
    let decrement = () => {
      setCount((prev) => prev-1)
    }

    let reset = () => {
      setCount(0)
    }

    return <Wrapper counter={{count, increment, decrement, reset}} />
  }
  return newCompo
}

export default HOC