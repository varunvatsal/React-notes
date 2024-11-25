// import React from 'react'

// const Cart = (props) => {
//     console.log(props)
//     let {product, cost} = props.addToCart
//   return (
//     <>
//         <h1>PRODUCT: {product} COST: {cost}</h1>
//     </>
//   )
// }

// export default Cart

// import React from 'react'

// const Cart = (props) => {
//     let {addToCart: {addToList: {pname, cost, colors:{c1, c2, c3}}, children}} = props
//   return (
//     <>
//         <section>
//             <h1>PRODUCT: {pname}</h1>
//             <h2>COST: {cost} per {pname}</h2>
//             <h1>colors available: {c1} {c2} {c3}</h1>
//         </section>
//     </>
//   )
// }

// export default Cart

// import React from 'react'

// const Cart = ({info}) => {
//     console.log(info)
//     let {institute, changeInstitute, courses: [c1, c2, c3], mode:{m1, m2}} = info
//   return (
//     <>
//         <button onClick={changeInstitute}>change institute</button>
//     </>
//   )
// }

// export default Cart



import React, { useContext } from 'react'
import { ProductApi } from './context/ProductContext'

const Cart = () => {
  let consumer = useContext(ProductApi)
  return (
    <>
      <h1>{consumer}</h1>
    </>
  )
}

export default Cart