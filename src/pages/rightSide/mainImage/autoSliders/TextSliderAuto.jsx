import React, { useEffect, useState } from 'react';
import { TbNorthStar } from 'react-icons/tb';


const TextSliderAuto = ({ TextData, SlideInterValTime }) => {
    const [sliderProperty, setSliderProperty] = useState({
        TextContainer: TextData[0].TextContainer,
        isHidden: false,
    });
    const { TextContainer, isHidden } = sliderProperty;
    const [countAuto, setCountAuto] = useState(0);

    const NextClick = () => {
        if (countAuto === TextData.length - 1) {
            setCountAuto(0);
        } else {
            setCountAuto(countAuto + 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSliderProperty({ ...sliderProperty, isHidden: true });
            setTimeout(() => {
                NextClick();
                setSliderProperty({
                    TextContainer: TextData[countAuto].TextContainer,
                    isHidden: false,
                });
            }, 500); // Wait for the exit animation to finish
        }, SlideInterValTime);
        return () => clearInterval(interval);
    }, [countAuto, SlideInterValTime, sliderProperty]);

    return (
        <div className={`text-container ${isHidden ? 'hidden' : ''}`}>
            <TbNorthStar style={{ color: 'var(--container-color)' }} />
            <h1>{TextContainer}</h1>
            <TbNorthStar style={{ color: 'var(--container-color)' }} />
        </div>
    );
};

export default TextSliderAuto;
