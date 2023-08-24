import React from 'react'

function GreeceAboutBox() {
    return (
        <>
            <div className="center">
                <div className='greecebox1'>
                    <img className="1 left" style={{ width: 458, height: 654, borderRadius: 52 }} src="https://assets.nicepagecdn.com/fbd9b943/5621202/images/66666666-min.jpg" />
                    <div className="YouRePlanningToVisitSantoriniDuringYourNextTripToGreece right" style={{ width: 269, height: 161, color: '#3663BC', fontSize: 32, fontFamily: 'Inter', fontWeight: '900', wordWrap: 'break-word' }}>You're planning to visit Santorini during your next trip to Greece?</div>
                    <button className="btn left">Explore</button>
                </div>
            </div>
        </>
    )
}

export default GreeceAboutBox