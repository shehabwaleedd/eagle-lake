import React, { useEffect, useState } from 'react';
import { TbNorthStar } from "react-icons/tb";

const TextSliderAuto = ({ TextData, SlideInterValTime }) => {
    const SliderProperty = {
        TextContainer: ''
    };

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);
    const { TextContainer } = sliderProperty;
    const [countAuto, setCountAuto] = useState(0);

    const NextClick = () => {
        if (countAuto <= TextData - 1) {
            setCountAuto(countAuto + 1);
        }

        if (countAuto === TextData - 1) {
            setCountAuto(0);
        }
    };

    useEffect(() => {
        setSliderProperty((previous) => ({
            ...previous,
            TextContainer: TextData[countAuto].TextContainer,
        }));
    }, [countAuto, TextData]);

    useEffect(() => {
        const interval = setInterval(() => {
            NextClick();
        }, SlideInterValTime);
        return () => clearInterval(interval);
    }, [countAuto, SlideInterValTime]);

    return (
        <>
            <TbNorthStar style={{ color: "var(--container-color)" }} />
            <h1>{TextContainer}</h1>
            <TbNorthStar style={{ color: "var(--container-color)" }} />
        </>
    );
};

export default TextSliderAuto;