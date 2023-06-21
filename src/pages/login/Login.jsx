import React from 'react'
import "./login.scss";
import { signInWithGoogle } from '../../firebaseConfig';
const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <div className="container">
            <div className="left">
                <input type="email" className='email' placeholder='Email' />
                <input type="password" name="" id="" className='pass' placeholder='Password' />
                <button className='submit'>Submit</button>
            </div>
            <div className="line"></div>
            <span className="or">or</span>
            <div className="right">
                <button className='google' onClick={signInWithGoogle}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="google" />
                    <span>Google</span>
                </button>
               
            </div>
        </div>
    </div>
  )
}

export default Login