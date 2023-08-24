import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home serviceBox'>
        <div className='texthome'>
            <h2 className='left'>Tour By Travellers</h2>
            <h1 className='right'>
            Grecian Odyssey <br/><span className='left'>A Journey through Myth & Beauty</span>
            </h1>
            <Link to='/about'><button className='btn left'>Read More</button></Link>
        </div>
    </div>
  )
}

export default Home