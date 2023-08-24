import React from 'react'
import { Link } from 'react-router-dom'
import bars from '../burger-bar.png'
import 'animate.css';

function Navbar() {
  return (
    <>
    
    <div className='navbar left'>
        <h1 className='animate__animated animate__lightSpeedInLeft'>Logo</h1>
        <div className='tabs animate__animated animate__lightSpeedInLeft'>
            <Link to='/'>Home</Link>
            <Link to="/about">About</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
        </div>
        <img  src={bars} alt='' />
    </div>
    </>
  )
}

export default Navbar