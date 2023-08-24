import React from 'react'
import { Link } from 'react-router-dom'
function PackageBox(props) {
    const {h,p1,p2,p3,p4,i,pr,c} = props
  return (
    <div className={`packageBox ${c}`}>
        <img src={i} alt="" />      
        <div className="contenntt">
            <h1>{h}</h1>

            <h3>{pr}</h3>
            {/* <button className="btn">Join Us Now</button> */}
            <button className='btn left'><Link>Read More</Link></button>

        </div>
    </div>
  )
}

export default PackageBox
