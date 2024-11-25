import React, { useContext } from 'react'
import { CounterApi } from '../context/CounterContext'
const SimpleCounter = () => {
    let counter = useContext(CounterApi)
    let {count, increment, decrement, reset} = counter
  return (
    <>
        <h1>count: {count}</h1>
        <button onClick={increment}>INCREMENT</button>
        <span>{" "}</span>
        <button onClick={decrement}>DECREMENT</button>
        <span>{" "}</span>
        <button onClick={reset}>RESET</button>
    </>
  )
}

export default SimpleCounter