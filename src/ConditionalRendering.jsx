import React, { useState } from 'react'

const ConditionalRendering = () => {
  let age = 25
//   if(age >=18){
//     return <h1>eligible to vote</h1>
//   }else{
//     return <h1>not eligible to vote</h1>
//   }

//   return <h1>{age >= 18 ? "eligible to vote" : "not eligible to vote"}</h1>

// return <h1>{age >= 18 && "eligible to vote"}</h1>

    let [follow, setFollow] = useState(false)

    let changeState = () => {
        setFollow((prev) => !prev)
    }

    return (
        <>
            <h1>{follow === false ? "NOT FOLLOWING" : "FOLLOWING"}</h1>
            <button onClick={changeState}>{follow === false ? "FOLLOW  " : "UNFOLLOW"}</button>
        </>
    )
}

export default ConditionalRendering