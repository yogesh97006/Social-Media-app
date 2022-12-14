import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
              <img  className='loginLogo'/>
              <span>
              Connect with friends and the world around you on Lamasocial.
              </span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                <input placeholder="Username" className="loginInput" />
                 <input placeholder="Email" className="loginInput" />
               <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
                    <button className='loginButton'>Sign Up</button>
                    <button className='loginRegisterButton'>Logging Into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register