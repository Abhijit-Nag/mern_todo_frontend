import React, { useState } from 'react'
import "./navbar.scss";
import { signOutWithGoogle } from '../../firebaseConfig';
import { Link } from 'react-router-dom';
const Navbar = ({ setOpen }) => {

  const handleClick = () => {
    setOpen(true);
  }
  const username = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const profilePic = localStorage.getItem("profilePic");
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="https://play-lh.googleusercontent.com/KNInXD9XRXJPXtWEGWvNf_MnT664xCO3yBr-KP9wmogIPplkyQcZLahhCmf3h1mtldmz" alt="" />
      </div>
      <span className="name">{username} </span>
      <div className="right">
        {email && (
          <>
            <button className="create" onClick={handleClick}>Create New Task +</button>
            <button className="logout" onClick={signOutWithGoogle}>Logout</button>
          </>
        )}
        <img src={profilePic} className='profilePic' alt="" />
        {!email && (
          <>
            <Link to={`/login`}><button className="create">Create New Task +</button></Link>
            <Link to={`/login`}> <button className="logout" >Login</button></Link>
          </>
        )}

      </div>
    </div>
  )
}

export default Navbar