import React, { createContext, useState } from 'react'
import SimpleCounter from '../task/SimpleCounter'

export let CounterApi = createContext()

const CounterContext = () => {

    let [count, setCount] = useState(0)

    let increment = () => {
        setCount((prev) => prev+1)
    }

    let decrement = () => {
        setCount((prev) => prev-1)
    }

    let reset = () => {
        setCount(0)
    }
  return (
    <>
        <CounterApi.Provider value={{count, increment, decrement, reset}}>
            <SimpleCounter />
        </CounterApi.Provider>
    </>
  )
}

export default CounterContext