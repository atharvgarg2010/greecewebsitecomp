import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';
const MenuOpen=()=> {
  const menubar=document.querySelector('.menu');
  console.log(menubar.style.top);
  if (menubar.style.top==='-5000px') {
      menubar.style.top="100px"
  }
  else{
    menubar.style.top="-5000px"
  }

}
function Navbar() {
  return (
    <>
    <>

      <div className='navbar left'>
        <h1 className='animate__animated animate__lightSpeedInLeft'>Logo</h1>
        <div className='tabs animate__animated animate__lightSpeedInLeft'>
          <Link to='/'>Home</Link>
          <Link to="/about">About</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <button onClick={MenuOpen} className='btn' style={{textAlign:"center"}}>Menu</button>
      </div>
      <div className="menu" id='menu' style={{top:'-5000px' ,transition:'linear 500ms all'}}>
        <div><Link to='/'>Home</Link></div>
        <br />
        <div><Link to="/about">About</Link></div>
        <br />
        <div><Link to='/gallery'>Gallery</Link></div>
        <br />
        <div><Link to='/contact'>Contact</Link></div>
        <br />
      </div>
      </>
      <>

      </>
      </>
  )
}

export default Navbar