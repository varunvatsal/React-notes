import React, { useState, useRef } from 'react'
import style from './uncontrolled.module.css'
const Uncontrolled = () => {

    let [user, setUser] = useState({})
    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
        //passing a parameter to function, that function if we pass it as a value for any even, is such case parameter holds-> synthetic based event
    let handleSubmit =  (e) => {
        e.preventDefault()
        let newUser = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        setUser(newUser)

        console.log(newUser)
    }
  return (
    <>
        <form onSubmit={handleSubmit} className={style.formDes}>

            <h1>UNCONTROLLED FORM</h1>
            <div>
                <label htmlFor="username">username: </label>
                <input type="text" id='username' ref={nameRef}/>
            </div>
            <div>
                <label htmlFor="useremail">useremail: </label>
                <input type="email" id='useremail' ref={emailRef}/>
            </div>
            <div>
                <label htmlFor="password">password: </label>
                <input type="password" id='password' ref={passwordRef}/>
            </div>
            <div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    </>
  )
}

export default Uncontrolled