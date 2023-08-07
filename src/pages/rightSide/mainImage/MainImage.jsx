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
                <TextSliderAuto TextData={Data} SlideInterValTime={1000} />
            <FindUs />
            </div>
            <ImageSliderAuto ImageData={Data} SlideInterValTime={10000} />
        </div>
    )
}

export default MainImage