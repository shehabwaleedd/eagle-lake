import React from 'react'
import './Contact.css'
import LeftSideContact from './leftSideContact/LeftSideContact'
import Navbar from '../../navbar/Navbar'
import { motion } from 'framer-motion'

const Contact = ({ navOpen, setNavOpen, isMobile, setIsMobile, setIsTablet, isTablet }) => {
    return (
        <motion.section className='contact' initial={{ opacity: 0, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] },}} animate={{ opacity: 1, transition: { delay: 0.2, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] },}} exit={{opacity: 0, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] },}}>
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} isMobile={isMobile} setIsMobile={setIsMobile} setIsTablet={setIsTablet} isTablet={isTablet} />
            <motion.div className="left__side-contact"initial={{opacity: 0,x: -100,transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] },}}animate={{opacity: 1,x: 0,transition: { delay: 0.2, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] },}}exit={{opacity: 0,x: -500,transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] },}}>
                <LeftSideContact />
            </motion.div>
            <motion.div className="right__side-contact" initial={{opacity: 0,x: 100,transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] },}}animate={{opacity: 1,x: 0,transition: { delay: 0.2, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] },}} exit={{ opacity: 0, x: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] }, }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15872.53176808049!2d80.442011!3d5.976425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1156f7250d59f%3A0xbfa04fa5aa9a5c8f!2sThe%20Eagle%20Lake!5e0!3m2!1sen!2sae!4v1691513377016!5m2!1sen!2sae" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>
        </motion.section>
    )
}

export default Contact