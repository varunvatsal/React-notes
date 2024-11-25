// import React, {useState} from 'react'
// import style from './myProfile.module.css'
// const MyProfile = () => {
//     let username = "varun vatsal"
//     let [course, setCourse] = useState("webtech")

//     function handleCourse(){
//         course === "webtech" ? setCourse("Reactjs") : setCourse("webtech")
//     }
//   return (
//     <>
//         <div className={style.card}>
//           <h1>My Id card</h1>
//           <h3>{username}</h3>
//           <h3>{course}</h3>
//           <button onClick={handleCourse}>change course</button>
//           <p>Btech</p>
//           <br />
//           <p>2024</p>
//         </div>
//     </>
//   )
// }

// export default MyProfile

// import React, { useState } from 'react'
// import types from 'prop-types'
// import style from './myProfile.module.css'
// const MyProfile = (props) => {
//     console.log(props)
//     let {info:[{iname, mode, fees, course, photo, rating}, handleClick], children} = props
//     let [duration, setDuration] = useState("4 months")
    
//   return (
//     <>
//       <div className={style.card}>
//         {children}
//         <h1>{iname}</h1>
//         <h3>mode: {mode}</h3>
//         <h3>fees: {fees}</h3>
//         <h3>course: {course}</h3>
//         <img src={photo} alt="institute photo" />
//         <h3>rating : {rating}</h3>
//         <h3>duration: {duration}</h3>
//         <button onClick={handleClick}>change value</button>
//       </div>
//     </>
//   )
// }

// export default MyProfile

// MyProfile.propTypes = {
//     info: types.shape({
//         iname: types.string,
//         mode: types.string,
//         fees: types.string,
//         course: types.string,
//         photo: types.string,
//         rating: types.number,
//         handleClick: types.func.isRequired
//     })
// }


import React, { useContext } from 'react'
import { ProfileApi } from '../context/ProfileContext'
const MyProfile = () => {
  let value = useContext(ProfileApi)
  let {emp:{ename}, sal, company, changeEmp} = value
  console.log(value)
  return (
    <>
        <h1>MyProfile</h1>
        <h1>emp: {ename}</h1>
        <h1>sal: {sal}</h1>
        <h1>company: {company}</h1>
        <button onClick={changeEmp}>change emp</button>
    </>
  )
}

export default MyProfile

