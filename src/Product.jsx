// import React from 'react'
// import WishList from './WishList'
// const Product = () => {
//   return (
//     <>
//         <WishList product={"mobile"} cost={1000}/>
//     </>
//   )
// }

// export default Product

// import React, {useState} from 'react'
// import WishList from './WishList'
// const Product = () => {
//     let [product, setProduct] = useState(
//         {
//             pname: "pen",
//             cost: 15,
//             colors: {
//                 c1: "red",
//                 c2: "green",
//                 c3: "black"
//             }
//         }
//     )
//   return (
//     <>
//         <WishList addToList={product}>
//             <h1>extram marks for good handwriting</h1>
//             <p>water proof and long lasting</p>
//         </WishList>
//     </>
//   )
// }

// export default Product

import React, {useState} from "react";
import WishList from "./WishList";

const Product = () => {
    let [institute, setInstitute] = useState("Qspider")

    let changeInstitute = () => {
        setInstitute("jSpider")
    }
    
    let courses = ["java full stack", "python full stack", "mern stack"]

    let mode = {
        m1: "offline",
        m2: "online"
    }
  return (
    <>
        <h1>{institute}</h1>
        <WishList info={{institute, changeInstitute, courses, mode}}/>
    </>
  )
}

export default Product