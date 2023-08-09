import React, { useEffect, useState } from 'react';
import Img5 from '../../../../assets/nathan-dumlao-JLPoB3Gahcc-unsplash.webp';
import Img6 from '../../../../assets/celine-ylmz-L2ost-ZEmK8-unsplash.webp';
import Img7 from '../../../../assets/klara-kulikova-yjQDnOhGE34-unsplash.webp';

const ImageSliderAuto = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [countAuto, setCountAuto] = useState(0);
    const [isImageVisible, setIsImageVisible] = useState(false);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    const handleAutoSlider = () => {
        const interval = setInterval(() => {
            setIsImageVisible(false); // Hide the image
            setTimeout(() => {
                setCountAuto((prevCount) => (prevCount + 1) % props.ImageData.length);
                setIsImageVisible(true); // Show the image after changing count
            }, 200); // Wait for the exit animation to finish
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
        <img
            src={finalImageSrc}
            className={`imageStyle ${isImageVisible ? 'visible' : 'hidden'}`}
            alt={props.ImageData[countAuto].ImageName}
        />
    );
};

export default ImageSliderAuto;