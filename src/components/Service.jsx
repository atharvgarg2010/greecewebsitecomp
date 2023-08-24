import React from 'react'
import PackageBox from './PackageBox'
import Img5 from './images/img5.jpg'
import Img6 from './images/img6.jpg'
function Service() {
    return (
        <>
        <h1 className='h1' style={{textAlign:'center'}}>
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        &nbsp;
        &nbsp;
        &nbsp;
        <span>G</span>
        <span>O</span>
        <span>D</span>
        </h1>
            <div className='pack'>
                <PackageBox c="bottom" h="Artemis" i={Img5}   pr="Goddess of the hunt, wilderness, animals and the Moon. She is a archery gods. She is the daughter of Zeus and Leto, and twin sister of Apollo." />

                <PackageBox c="top" h="Demeter" i={Img6}  pr="Goddess of grain, agriculture, harvest, growth, and nourishment. Demeter, whose Roman counterpart is Ceres, is a daughter of Cronus and Rhea" />
            </div>
        </>
    )
}

export default Service