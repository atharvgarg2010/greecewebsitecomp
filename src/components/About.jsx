import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si';
import { FaHiking } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

function About() {
  return (
    <>
    <div className="aboutbox">
        <div className="divboxblue top">
          <SiYourtraveldottv className='icontravel'/>
          <h1>Tours</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className="divboxblue bottom">
          <FaHiking className='icontravel'/>
          <h1>HIKKING</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className="divboxblue top">
          <BiWorld className='icontravel'/>
          <h1>Travel</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
    </div>

    </>
  )
}

export default About