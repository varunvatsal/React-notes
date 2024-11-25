// import React from 'react'
// import Child from './Child.jsx'

// const Parent = () => {

//   let students = ["sivaranaiah", "prabhakar", "pratik", "varun", "aman", "manjari"]
//   let institute = {
//     iname: "qspider",
//     courses: {
//         frontend: {
//             webtech: {
//                 w1: "html",
//                 w2: "css",
//                 w3: "js"
//             },
//             library: "ReactJs"
//         },
//         backend: ["node", "java"]
//     }
//   }
//   return (
//     <>
//        {/* <Child actor="yash"/> */}
//        <Child stu="varun vatsal" sid="20105066" hobby={["drawing", "coding"]}/>
       
//     </>
//   )
// }

// export default Parent

// // let {[students: [s1, s2, s3, s4, s5, s6], institute:{iname, courses: {frontend: {webtech: {w1, w2, w3}, library}, backend: [b1, b2]}}]} = props


// import React, {useState} from 'react'
// import Child from "./Child"
// const Parent = () => {
//   let [profile, setProfile] = useState({
//     pname: "virat kohli",
//     nation: "india",
//     jerseyNum: 18,
//     spouse: "anushka sharma",
//     photo: "/src/images/kohli.jpeg",
//     matches: "1000"
//   })
//   return (
//     <>
//         <Child player={profile}>
//           <h1>king kohli</h1>
//           <h3>goat of all time</h3>
//         </Child>
//     </>
//   )
// }

// export default Parent


// import React, {useState} from 'react'
// import Child from "./Child"
// const Parent = () => {
//   let [tech, setTech] = useState("webtech")

//   let changeState = () => {
//     setTech(tech==="webtech" ? "reactJs" : "webtech")
//   }
//   return (
//     <>
//       <Child info={{tech, changeState}}/>
//     </>
//   )
// }

// export default Parent

// import React, {useState} from 'react'
// import MyProfile from './module/MyProfile'
// const Parent = () => {
//   let [institute, setInstitute] = useState({
//     iname: "Qspiders",
//     mode: "online",
//     fees: "5000",
//     course: "FULL STACK",
//     photo: "../src/images/jspider.png",
//     rating: 4.3
//   })

//   let handleClick = () => {
//     setInstitute((prevVal) => ({...prevVal, iname: prevVal.iname === 'Qspider' ? 'Jspider' : 'Qspider'}))
//   }
  
//   return (
//     <>
//       <MyProfile info={[institute, handleClick]}>
//         <h4>OUR MANTRA IS QUALITY</h4>
//         <p>Training to all those Aspiring for successful IT carrer</p>
//       </MyProfile>
//     </>
//   )
// }

// export default Parent


// import React, { useEffect } from 'react'

// const Parent = () => {

//   useEffect(() => {
//     fetch("https://run.mocky.io/v3/a7f83c41-4399-46dc-aff7-690ec7a3d486")
//     .then((response) => {

//     })
//   }, [])
//   return (
//     <div>Parent</div>
//   )
// }

// export default Parent