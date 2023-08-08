import React, { useState, useEffect } from 'react'
import './Menu.css'
import Data from './Data'
import { motion, AnimatePresence } from 'framer-motion'

const Menu = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedDescription, setSelectedDescription] = useState(null);
    const [selectedIngredients, setSelectedIngredients] = useState(null);
    const [selectedName, setSelectedName] = useState(null);

    const openPreview = (image, index, description, ingredients, name) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setSelectedDescription(description);
        setSelectedIngredients(ingredients);
        setSelectedName(name);
    };

    const closeItem = (e) => {
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
            <section className='menu' id='menu'>
                <div className="menu__container">
                    <h1>Taste Our Menu</h1>
                    <div className="menu__items">
                        {Data.map((category, index) => (
                            <div key={index} className="menu__category">
                                <h2>{category.category}</h2>
                                <div className="menu__category-items">
                                    {category.items.map(({ image, name, description, ingredients }, index) => (
                                        <div key={index} className="menu__item" onClick={() => openPreview(image, index, description, ingredients, name)}>
                                            <img src={image} alt={name} />
                                            <p>{name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <AnimatePresence mode='wait'>
                {selectedImage && (
                    <motion.div className='preview__modal'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, y: 100 }}
                    >
                        <div className='preview__close'>
                            <button onClick={closeItem}>X</button>
                        </div>
                        <motion.div className='preview__content'>
                            <motion.img initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0, y: 100 }} src={selectedImage} alt='Preview' />
                            <div className="preview__description">
                                <h1>{selectedName}</h1>
                                <div className="prev__description_ingri">
                                    <span>{selectedDescription}</span>
                                    <p>Ingredients: {selectedIngredients}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Menu;
