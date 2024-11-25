// import React from 'react'
// import Cart from './Cart'
// const WishList = (props) => {
//     console.log(props)
//   return (
//     <>
//         <Cart addToCart={props}/>
//     </>
//   )
// }

// export default WishList

// import React from 'react'
// import Cart from './Cart'
// const WishList = (props) => {
//     console.log(props)
//   return (
//     <>
//         <Cart addToCart={props} />
//     </>
//   )
// }

// export default WishList

// import React from 'react'
// import Cart from './Cart'
// const WishList = (props) => {
//     // console.log(props)
//   return (
//     <>
//         <Cart info={{...props.info}}/>
//     </>
//   )
// }

// export default WishList

import React, { useContext } from 'react'
import { ProductApi } from './context/ProductContext'

const WishList = () => {

  let value = useContext(ProductApi)
  console.log(value)
  return (
    <>
        <h1>{value}</h1>
    </>
  )
}

export default WishList