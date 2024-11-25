import React, { useState } from 'react'
import './registrationForm.module.css'

const RegistrationForm = () => {
    let [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        experience: "",
        yop: ""
    })

    let [hobbies, setHobbies] = useState([])


    let handleHobbiesChange = (e) => {
        setHobbies((prev) => {
            if(e.target.checked){
                return [...prev, e.target.value]
            }else {
                 return prev.filter((ele) => ele!=e.target.value)
            }
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(userData)
        console.log(hobbies)
    }

    let handleChange = (e) => {
        setUserData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h1>REGISTRATION FORM</h1>
            <div>
                <label htmlFor="firstName">First name: </label>
                <input type="text" id="firstName" value={userData.firstName} onChange={handleChange} name='firstName' />
            </div>
            <br />
            <div>
                <label htmlFor="lastName">Last name: </label>
                <input type="text" id='lastName' value={userData.lastName} onChange={handleChange} name='lastName' />
            </div>
            <br />
            <div>
                <label htmlFor="email">Enter email: </label>
                <input type="email" id='email' value={userData.email} onChange={handleChange} name='email'/>
            </div>
            <br />
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={userData.password} onChange={handleChange}/>
            </div>
            <br />
            <div value={hobbies} onChange={handleHobbiesChange}>
                <label htmlFor="hobbies">Hobbies: </label>
                <input type="checkbox" name="hobbies" value='Coding' /> Coding 
                <input type="checkbox" name="hobbies" value='Reading' /> Reading 
                <input type="checkbox" name="hobbies" value='Writing' /> Writing 
                <input type="checkbox" name="hobbies" value='Dancing' /> Dancing 
                <input type="checkbox" name="hobbies" value='Singing' /> Singing 
                <input type="checkbox" name="hobbies" value='Listening to Music' /> Listening to Music
            </div>
            <br />
            <div>
                <label htmlFor="experience">Experience: </label>
                <select name="experience" id="experience" value={userData.experience} onChange={handleChange} >
                    <option value="Fresher">Fresher</option>
                    <option value="Experienced">Experienced</option>
                </select>
            </div>
            <br />
            <div>
                <label htmlFor="yop">Year of passout: </label>
                <select name="yop" id="yop" value={userData.yop} onChange={handleChange}>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </div>
            <br />
            <div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    </>
  )
}

export default RegistrationForm

// Coding, Reading, Writing, Dancing, Singing, Listening to Music