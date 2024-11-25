// import React, { useState } from 'react'

// const Controlled = (e) => {
//     let [username, setUsername] = useState("")
//     let [useremail, setUseremail] = useState("")

//     let handleName = (e) => {
//         setUsername(e.target.value)
//     }

//     let handleEmail = (e) => {
//         setUseremail(e.target.value)
//     }
 
//     let handleSubmit = (e) => {
//         e.preventDefault()
//         console.log({username, useremail})
//     }

//   return (
//     <>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="username">username: </label>
//                 <input type="text" id='username' value={username} onChange={handleName} placeholder='enter your name'/>
//             </div>

//             <div>
//                 <label htmlFor="email">useremail: </label>
//                 <input type="email"  id="email" value={useremail} onChange={handleEmail} placeholder='enter your email'/>
//             </div>
//             <div>
//                 <button type="submit">SUBMIT</button>
//             </div>
//         </form>
//     </>
//   )
// }

// export default Controlled


import React, { useState } from 'react'

const Controlled = () => {
    let [userData, setUserData] = useState({
        username: "",
        useremail: "",
        gender: "",
        degree: ""
    });

    let [skill, setSkill] = useState([])

    let handleSkillChange = (e) => {
        setSkill((prev) => {
            if(e.target.checked){
                return [...prev, e.target.value]
            }else{
                return prev.filter((ele) => e.target.value != ele)
            }
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(userData)
        console.log(skill)
    }

    let handleChange = (e) => {
        setUserData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    
  return (
    <>
        <form onSubmit={handleSubmit}>
            <h1>CONTROLLED FORM</h1>
            <div>
                <label htmlFor="username">username: </label>
                <input type="text" id='username' value={userData.username} onChange={handleChange} name='username'/>
            </div>
            <div>
                <label htmlFor="useremail">useremail: </label>
                <input type="text" id='useremail' value={userData.useremail} onChange={handleChange} name='useremail'/>
            </div>
            <div value={userData.gender} onChange={handleChange}>
                <label htmlFor="gender">GENDER: </label>
                <input type="radio" name='gender' value='MALE'/> MALE
                <input type="radio" name='gender' value='FEMALE'/> FEMALE
                <input type="radio" name='gender' value='OTHERS'/> OTHERS
            </div>
            <div>
                <label htmlFor="deg">DEGREE: </label>
                <select name="degree" id="deg" value={userData.degree} onChange={handleChange}>
                    <option value="B.E">B.E</option>
                    <option value="BSC">BSC</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.TECH">B.TECH</option>
                </select>
            </div>
            <div value={skill} onChange={handleSkillChange}>
                <label htmlFor="">SKILLS: </label>
                <input type="checkbox" value='HTML'/>HTML
                <input type="checkbox" value='CSS'/>CSS
                <input type="checkbox" value='JAVASCRIPT'/>JAVASCRIPT
                <input type="checkbox" value='JAVA'/>JAVA
            </div>
            <div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    </>
  )
}

export default Controlled

//write onChange in the immediate parent tag of options