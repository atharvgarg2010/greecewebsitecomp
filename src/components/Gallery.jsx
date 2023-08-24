import React from 'react'
import GalleryBox from './GalleryBox.jsx'
import Img1 from './images/img1.jpg'
import Img2 from './images/img2.jpg'
import Img3 from './images/img3.jpg'
import Img4 from './images/img4.jpg'
function Gallery() {
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
        <span>C</span>
        <span>I</span>
        <span>T</span>
        <span>I</span>
        <span>E</span>
        <span>S</span>
        </h1>
            <div className="gallery">
                <GalleryBox c="left" i={Img1} q={"Athens, historic city and capital of Greece. Acropolis Museum holds one of the world's most valuable collections of ancient Greek art."}/>
                <GalleryBox c="right" i={Img2} q={"Mandraki is a modern town, with hotels and resorts, cafes, restaurants and impressive sights and attractions, as well as traditional villas called marasiotika."} />
                <GalleryBox c="left" i={Img3} q="Santorini and luxury are synonymous. This is the island of infinity pools that flirt with the edge of the cliff, with the Aegean Sea laid out in front of you in all its glory. " />
                <GalleryBox c="right" q={"The Venetians called Zante Fiore di Levante, the Flower of the East, and its nobility and fertility made it the jewel of their empire. "} i={Img4} />

            </div>
        </>
    )
}

export default Gallery
