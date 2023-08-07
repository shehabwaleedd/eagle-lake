import React, { useEffect, useState } from 'react';

const ImageSliderAuto = (props) => {
    const SliderProperty = {
        ImageNo: '',
        ImageName: '',
        ImageSrc: ''
    }

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const { ImageNo, ImageName, ImageSrc } = sliderProperty;

    const [countAuto, setCountAuto] = useState(0);

    const NextClick = () => {
        if (countAuto <= props.ImageData.length - 1) {
            setCountAuto(countAuto + 1);
        }

        if (countAuto === props.ImageData.length - 1) {
            setCountAuto(0);
        }

    };

    useEffect(() => {

        setSliderProperty((previous) => ({ ...previous, ImageNo: props.ImageData[countAuto].ImageNo, ImageName: props.ImageData[countAuto].ImageName, ImageSrc: props.ImageData[countAuto].ImageSrc }));

    }, [countAuto]);



    useEffect(() => {

        const interval = setInterval(() => {

            NextClick();

        }, props.SlideInterValTime);

        return () => clearInterval(interval);

    }, [countAuto]);



    return (
        <>
            <img src={ImageSrc} className='imageStyle' alt={ImageName} />
        </>

    );
};

export default ImageSliderAuto;