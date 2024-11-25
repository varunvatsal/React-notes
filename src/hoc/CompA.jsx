// import React from 'react'
// import HOC from './HOC'

// const CompA = (props) => {
//   return (
//     <>
//         <h1>CompA - {props.tech} is one of the frontend libraries</h1>
//     </>
//   )
// }

// export default HOC(CompA)

import React from 'react'
import HOC from './HOC'
const CompA = ({counter}) => {
  return (
    <>
        <h1>CompA -- {counter.count}</h1>
        <button onClick={counter.increment}>INCREMENT</button>
        <span>{" "}</span>
        <button onClick={counter.decrement}>DECREMENT</button>
        <span>{" "}</span>
        <button onClick={counter.reset}>RESET</button>
        
    </>
  )
}

export default HOC(CompA)