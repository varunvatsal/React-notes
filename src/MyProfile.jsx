import React from 'react'
import types from 'prop-types'
const MyProfile = (props) => {
    console.log(props)
    let {info:{iname, mode, fees, course, photo, rating}, children} = props
  return (
    <>
        {children}
        <h1>{iname}</h1>
        <h3>mode: {mode}</h3>
        <h3>fees: {fees}</h3>
        <h3>course: {course}</h3>
        <img src="photo" alt="institute photo" />
        <h3>rating : {rating}</h3>
    </>
  )
}

export default MyProfile

MyProfile.propTypes = {
    info: types.shape({
        iname: types.string,
        mode: types.string,
        fees: types.number,
        course: types.string,
        photo: types.string,
        rating: types.number
    })
}