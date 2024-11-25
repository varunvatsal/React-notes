import React, { createContext } from 'react'
import WishList from '../WishList'
import Cart from '../Cart'

//step 1
//since createContext method return a component(Context Api) to store it declare variable
export let ProductApi = createContext()



const ProductContext = () => {
    //step 2 wrap the consumer component with context provider
  return (
    <ProductApi.Provider value="Sending the first content through context api">
        <WishList />
        <Cart />
    </ProductApi.Provider>
  )
}

export default ProductContext