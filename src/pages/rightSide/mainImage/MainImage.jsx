import React from 'react'
import img1 from "../../../assets/klara-kulikova-yjQDnOhGE34-unsplash.jpg"
import './MainImage.css'
import { TbNorthStar } from "react-icons/tb";
import Data from './Data';
import ImageSliderAuto from './autoSliders/ImageSliderAuto';
import TextSliderAuto from './autoSliders/TextSliderAuto';
const MainImage = () => {
    return (
        <div className='mainImage'>
            <div className="upper__container">
                <TextSliderAuto TextData={Data} SlideInterValTime={1000} />
            </div>
            <ImageSliderAuto ImageData={Data} SlideInterValTime={10000} />
        </div>
    )
}

export default MainImage