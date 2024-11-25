// import React from 'react'
// import HOC from './HOC'

// const CompB = (props) => {
//   return (
//     <>
//         <h1>CompB - we are learning {props.tech}</h1>
//     </>
//   )
// }

// export default HOC(CompB)

import React from 'react'
import HOC from './HOC'
const CompB = ({counter}) => {
  return (
    <>
        <h1>CompB -- {counter.count}</h1>
        <button onClick={counter.increment}>INCREMENT</button>
        <span>{" "}</span>
        <button onClick={counter.decrement}>DECREMENT</button>
        <span>{" "}</span>
        <button onClick={counter.reset}>RESET</button>
    </>
  )
}

export default HOC(CompB)