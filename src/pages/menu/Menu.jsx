import React, { useState, useEffect } from 'react'
import './Menu.css'
import Data from './Data'
import { motion, AnimatePresence } from 'framer-motion'
import MobileResponsive from './menuResponsive/mobileResponsive./MobileResponsive'
import DesktopResponsive from './menuResponsive/desktopResponsive/DesktopResponsive'

const Menu = ({ isMobile }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState(null);
    const [selectedIngredients, setSelectedIngredients] = useState(null);
    const [selectedName, setSelectedName] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const openPreview = (image, description, ingredients, name, price) => {
        setSelectedImage(image);
        setSelectedDescription(description);
        setSelectedIngredients(ingredients);
        setSelectedName(name);
        setSelectedPrice(price);
    };

    const closeItem = () => {
        setSelectedImage(null)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeItem();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <MobileResponsive
                    Data={Data}
                    selectedImage={selectedImage}
                    closeItem={closeItem}
                    selectedName={selectedName}
                    openPreview={openPreview}
                    selectedDescription={selectedDescription}
                    selectedIngredients={selectedIngredients}
                    selectedPrice={selectedPrice}

                />
            ) : (
                <DesktopResponsive
                    Data={Data}
                    selectedImage={selectedImage}
                    closeItem={closeItem}
                    selectedName={selectedName}
                    openPreview={openPreview}
                    selectedDescription={selectedDescription}
                    selectedIngredients={selectedIngredients}
                    selectedPrice={selectedPrice}
                />
            )}
        </>
    )
}

export default Menu;
