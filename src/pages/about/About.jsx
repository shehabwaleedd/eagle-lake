import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../navbar/Navbar'
import LeftSideAbout from './leftSideAbout/LeftSideAbout'
import RightSideAbout from './rightSideAbout/RightSideAbout'
import './About.css'

const About = ({ navOpen, setNavOpen, isMobile, setIsMobile, setIsTablet, isTablet }) => {
    return (
        <motion.section className='about' initial={{ opacity: 0, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] }, }} animate={{ opacity: 1, transition: { delay: 0.2, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }, }} exit={{ opacity: 0, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] }, }}>
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} isMobile={isMobile} setIsMobile={setIsMobile} setIsTablet={setIsTablet} isTablet={isTablet} />
            <motion.div className="left__side-about" initial={{ opacity: 0, x: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] }, }} animate={{ opacity: 1, x: 0, transition: { delay: 0.2, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }, }} exit={{ opacity: 0, x: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] }, }}>
                <LeftSideAbout />
            </motion.div>
            <motion.div className="right__side-about" initial={{ opacity: 0, x: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] }, }} animate={{ opacity: 1, x: 0, transition: { delay: 0.2, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }, }} exit={{ opacity: 0, x: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] }, }}>
                <RightSideAbout />
            </motion.div>
        </motion.section>
    )
}

export default About