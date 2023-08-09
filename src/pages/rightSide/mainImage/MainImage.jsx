import React from 'react'
import './MainImage.css'
import Data from './Data';
import ImageSliderAuto from './autoSliders/ImageSliderAuto';
import TextSliderAuto from './autoSliders/TextSliderAuto';
import FindUs from './findUs/FindUs';
const MainImage = () => {
    return (
        <div className='mainImage'>
            <div className="upper__container">
                <TextSliderAuto TextData={Data} SlideInterValTime={5000} />
            <FindUs />
            </div>
            <ImageSliderAuto ImageData={Data} SlideInterValTime={10000} />
        </div>
    )
}

export default MainImage

// open right now! Mo - Fr 7AM - 10PM , Weekends 8AM - 11PM
// Monday - Friday:  7 AM : 10:00 PM
// Join us foor a tase of finest brews and bites at our cafe.