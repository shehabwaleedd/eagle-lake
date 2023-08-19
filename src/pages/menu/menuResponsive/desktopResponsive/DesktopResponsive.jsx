import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DesktopResponsive = ({ Data, selectedImage, closeItem, selectedName, openPreview, selectedDescription, selectedIngredients, selectedPrice }) => {
    return (
        <>
            <section className='menu' id='menu'>
                <div className="menu__container">
                    <h1>Taste Our Menu</h1>
                    <div className="menu__items">
                        {Data.map((category, index) => (
                            <div key={index} className={`menu__category`}>
                                <h2>{category.category}</h2>
                                <div className={`menu__category-items`}>
                                    {category.items.map(({ image, name, description, ingredients, price, img_300px }, index) => (
                                        <div
                                            key={index}
                                            className="menu__item"
                                            onMouseEnter={() => openPreview(image, description, ingredients, name, price)}
                                            onMouseLeave={closeItem}
                                            loading='lazy'
                                            srcSet={[`${img_300px}?w=300&format=webp 300w`]}
                                            onClick={() => openPreview(image, description, ingredients, name, price)}
                                        >
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
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, y: 100 }}
                    >
                        <div className='preview__close'>
                            <button onClick={closeItem}>X</button>
                        </div>
                        <motion.div className='preview__content'>
                            <motion.img initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0, y: 100 }} src={selectedImage} alt='Preview' />
                            <div className="preview__description">
                                <div className="description__upper">
                                    <h1>{selectedName}</h1>
                                    <span>{selectedPrice}</span>
                                </div>
                                <div className="prev__description_ingri">
                                    <span>{selectedDescription}</span>
                                    <p>Ingredients: {selectedIngredients.join(', ')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default DesktopResponsive