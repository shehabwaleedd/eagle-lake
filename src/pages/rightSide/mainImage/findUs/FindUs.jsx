/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { useState  } from 'react'
import './FindUs.css'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const FindUs = () => {
    const [hovered, setHovered] = useState(false)
    const handleHoverEnter = () => {
        setHovered(true)
    }
    const handleHoverLeave = () => {
        setHovered(false)
    }
    return (
        <motion.div className='findus'
            style={{ height: hovered ? "16.75rem" : "5.75rem" }}
            initial={{ height: "6.75rem", transition: { staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }}
            animate={{ height: hovered ? "16.75rem" : "7.75rem", transition: { staggerChildren: 3.5, duration: 0.4, ease: [0.42, 0, 0.58, 1] } }}
            exit={{ height: "6.75rem", transition: { staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }}
        >
            <Link className="findus__container" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} to="https://www.google.com/maps/place/The+Eagle+Lake/@5.976425,80.442011,15z/data=!4m6!3m5!1s0x3ae1156f7250d59f:0xbfa04fa5aa9a5c8f!8m2!3d5.9764251!4d80.4420112!16s%2Fg%2F11sw0zn8gl?hl=en&entry=ttu" target='_blank'>
                <motion.div className="findus__upper">
                    <div className="findus__upper_info">
                        <span>Find Us</span>
                        <FiArrowUpRight style={{ color: "var(--accent-color)", fontSize: "1.4rem" }} />
                    </div>
                    <AnimatePresence mode='wait'>
                        {hovered && (
                            <motion.div>
                                {<iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.132941295083!2d80.4420112!3d5.9764251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1156f7250d59f%3A0xbfa04fa5aa9a5c8f!2sThe%20Eagle%20Lake!5e0!3m2!1sen!2slb!4v1691413037741!5m2!1sen!2slb"
                                    width="200"
                                    height="150"
                                    style={{ borderRadius: 10, border: "none" }}
                                    loading="lazy"
                                />}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
                <motion.div className="findus__bottom" style={{marginTop: hovered ? "4rem" : "0"}}>
                    <MdLocationOn style={{ color: "var(--accent-color)", fontSize: "2rem" }} />
                    <span>Tinara River, Weligama 81700, Sri Lanka</span>
                </motion.div>
            </Link>
        </motion.div>
    )
}

export default FindUs