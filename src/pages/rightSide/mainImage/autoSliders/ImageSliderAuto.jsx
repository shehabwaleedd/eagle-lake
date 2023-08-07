import React, { useEffect, useState } from 'react';
import Img5 from "../../../../assets/nathan-dumlao-zUNs99PGDg0-unsplash.jpg"
import Img6 from "../../../../assets/celine-ylmz-L2ost-ZEmK8-unsplash.jpg"
import Img7 from "../../../../assets/klara-kulikova-yjQDnOhGE34-unsplash.jpg"

const ImageSliderAuto = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [countAuto, setCountAuto] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    const handleAutoSlider = () => {
        const interval = setInterval(() => {
            setCountAuto((prevCount) => (prevCount + 1) % props.ImageData.length);
        }, props.SlideInterValTime);

        return () => clearInterval(interval);
    };

    useEffect(handleAutoSlider, []);

    const sectionOffsets = [0, 500, 1200]; // Adjust these offsets accordingly

    let imageSrc = Img5;

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
            imageSrc = [Img5, Img6, Img7][i];
            break;
        }
    }

    const autoSliderImage = props.ImageData[countAuto].ImageSrc;

    const finalImageSrc = scrollPosition > 1200 ? autoSliderImage : imageSrc;

    return (
        <img src={finalImageSrc} className='imageStyle visible' alt={props.ImageData[countAuto].ImageName} />
    );
};

export default ImageSliderAuto;
