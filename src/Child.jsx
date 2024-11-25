// import React from 'react'

// const Child = (props) => {
//     let [s1, s2, s3, s4, s5, s6] = props.props[0]
//     let {iname, courses: {frontend: {webtech: {w1, w2, w3}, library}, backend: [b1, b2]}} = props.props[1];

//     console.log(s1)
//     console.log(s2)
//     console.log(s3)
//     console.log(s4)
//     console.log(s5)
//     console.log(s6)

//     console.log(iname)
//     console.log(w1)
//     console.log(w2)
//     console.log(w3)
//     console.log(library)
//     console.log(b1)
//     console.log(b2)
//     return (
//     <div>Child</div>
//   )
// }

// export default Child


// const Child = (props) => {

//    // let {actor="srk", income= 10} = props
//     console.log(props)
//     let {actor, income} = props

//   return (
//     <>
//         <h1>Actor: {actor || "chris hemsworth"}</h1>
//         <h1>income: {income || 1}/day</h1>
//     </>
//   )
// }

// export default Child

// Child.defaultProps = {
//     actor: "srk",
//     income: "10"
// }

// import React from 'react'
// import types from 'prop-types'
// const Child = (props) => {
//     let {stu, sid, hobby} = props

//   return (
//     <>
//         <h1>student id of {stu} is {sid}, his hobby is {hobby[0]} and {hobby[1]} </h1>
//     </>
//   )
// }

// export default Child
// //if two props are not validating, you will get warning for only top most one 
// Child.propTypes = {
//     stu: types.string,
//     sid: types.string,
//     hobby: types.object

// }

// import React from 'react'
// import types from "prop-types"
// const Child = (props) => {
  
//   let {player:{pname, nation, jerseyNum, spouse, photo, matches=1000}, children} = props

//   pname = "varun vatsal"
//   return (
//     <>
//         <section>
//           <h1>Profile of {pname}</h1>
//           <img src={photo} alt={pname} height="350px" width="400px" />
//           <h2>{nation}</h2>
//           <h2>jersey number is {jerseyNum}</h2>
//           <h2>spouse is {spouse}</h2>
//           <h2>mathces played: {matches}</h2>
//           {children}
//         </section>
//     </>
//   )
// }

// export default Child

// Child.propTypes = {
//   player: types.shape(
//     {
//       pname: types.string,
//       nation: types.string,
//       jerseyNum: types.number,
//       spouse: types.string,
//       photo: types.string,
//       matches: types.number
//     }
//   )
// }

import React from 'react'
import types from 'prop-types'
const Child = (props) => {
  console.log(props)

  let {tech, changeState} = props.info;
  return (
    <>
      <h1>{tech}</h1>
      <button onClick={changeState}>CHANGE</button>
    </>
  )
}

export default Child

Child.propTypes = {
  info: types.shape(
    {
      tech: types.string,
      changeState: types.function
    }
  )
}