// import React, { Fragment, useEffect, useState } from 'react'

// const ApiCall = () => {

//     let [data, setData] = useState([])
//     let [loading, setLoading] = useState(true)
//     let fetchData = async () => {
//         let responseObj = await fetch('https://fakestoreapi.com/products')
//         let data = await responseObj.json()
//         setData(data)
//     }

//     useEffect(() => {
//         try {
//             fetchData()
//             setLoading(false)
//         } catch (error) {
//             console.log(error)
//             setLoading(false)
//         }
//     }, [])

//     if(loading) return <p>Loading........</p>

//   return (
//     <>
//         <section>
//             {
//                 data.map((val) => {
//                     console.log(val)
//                     return (
//                         <Fragment key = {val.id}>
//                             <h1>Title: {val.title}</h1>
//                             <h2>Category: {val.category}</h2>
//                             <h4>Price: {val.price}</h4>
//                             <h4>Rating: {val.rating.rate} || Count: {val.rating.count}</h4>
//                             <h3>Description: {val.description}</h3>
//                             <img src={val.image} height="500px" width="500px"/>
//                             <hr />
//                             <br />
//                         </Fragment>
//                     )
//                 })
//             }
//         </section>
//     </>
//   )
// }

// export default ApiCall


import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'

const ApiCall = () => {

    let [data, setData] = useState([])

    let getData = async () => {
        let response = await axios.get('https://fakestoreapi.com/products')
        let {data} = response
        console.log(response)
        console.log(data)
        setData(data)
    }

    useEffect(() => {
        try {
            getData()
        } catch (error) {
            console.log(error)
        }
    }, [])

  return (
    <>
      <table>
        <thead>
            <tr>
                <th>TITLE</th>
                <th>ID</th>
                <th>IMAGE</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>COUNT</th>
                <th>RATING</th>
                <th>DESCRIPTION</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((val) => {
                    return(
                        <Fragment key={val.id}>
                            <tr>
                                <td>{val.title}</td>
                                <td>{val.id}</td>
                                <td><img src={val.image} alt="" height="50px" width="50px" loading='lazy'/></td>
                                <td>{val.category}</td>
                                <td>Rs.{val.price}</td>
                                <td>{val.rating.count}</td>
                                <td>{val.rating.rate}</td>
                                <td>{val.description}</td>
                            </tr>
                        </Fragment>
                    )
                })
            }
        </tbody>
      </table>  
    </>
  )
}

export default ApiCall