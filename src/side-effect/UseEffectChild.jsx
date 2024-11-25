import React, { useEffect } from 'react'

const UseEffectChild = () => {

    useEffect(() => {
        return () => {
            console.log("child componentWillunmount")
        }
    })

  return (
    <>
        <h1>i am a child</h1>
    </>
  )
}

export default UseEffectChild