import React, { createContext, useState } from 'react'
import MyProfile from '../module/MyProfile'

export let ProfileApi = createContext()

const ProfileContext = () => {
    let [emp, setEmp] = useState({
        ename: "varun vatsal"
    })
    let sal = 1000
    let company = 'tcs'
    let changeEmp = () => {
        setEmp((preval) => ({ename: preval.ename === "varun vatsal" ? "vivek vishal" : "varun vatsal"}))
    }
   return (
    <ProfileApi.Provider value={{emp, sal, company, changeEmp}}>
        <MyProfile />
    </ProfileApi.Provider>
  )
}

export default ProfileContext