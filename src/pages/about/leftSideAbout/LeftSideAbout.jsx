import React, { useState } from 'react'
import './LeftSideAbout.css'
import Data from './Data'
import { AnimatePresence, motion } from 'framer-motion';

const LeftSideAbout = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState(null);
    const [selectedName, setSelectedName] = useState(null);

    const openPreview = (image, description, name) => {
        setSelectedImage(image);
        setSelectedDescription(description);
        setSelectedName(name);
    };
    const closeItem = () => {
        setSelectedImage(null)
    }
    return (
        <section className='about__left'>
            <div className="about__left__container">
                <h1>Our Story</h1>
                <p>In the picturesque countryside of Sri Lanka, a captivating breakfast coffee shop emerged, co-founded by a Jordanian chef and his Sri Lankan partner. Their unique backgrounds fused Jordanian and Sri Lankan flavors, resulting in a menu that beautifully blended their culinary heritages. Amidst the serene surroundings, their café became a cultural crossroads, inviting locals and travelers to savor delicious dishes while fostering connections that transcended borders. This partnership symbolized unity, friendship, and the enchanting possibilities born from the collaboration of diverse talents.</p>
            </div>
            <div className="about__left-lower">
                <div className="about__left-lower__imgs">
                    {Data.map(({ id, img, img_300px, alt, desc, name }, index) => (
                        <div onMouseEnter={() => openPreview(img, desc, name)} onMouseLeave={closeItem}>
                            <img src={img}
                                loading='lazy'
                                srcSet={[`${img_300px}?w=300&format=webp 300w`]}
                                alt={alt}
                                key={index}

                            />
                        </div>
                    ))}
                </div>
            </div>
            <AnimatePresence mode='wait'>
                {selectedImage && (
                    <motion.div className="about__left-lower__preview"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={selectedImage} alt={selectedDescription} />
                        <div className="about__left_description">
                            <h1>{selectedName}</h1>
                            <p>{selectedDescription}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default LeftSideAbout