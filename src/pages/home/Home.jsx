import React from 'react'
import Navbar from '../../navbar/Navbar'
import RightSide from '../rightSide/RightSide'
import './Home.css'
import Intro from './leftSide/Intro/Intro'
import About from './leftSide/about/About'
import Reservation from './leftSide/reservation/Reservation'



const Home = ({ navOpen, setNavOpen, isMobile, setIsMobile, setIsTablet, isTablet }) => {
    return (
        <div className='home'>
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} isMobile={isMobile} setIsMobile={setIsMobile} setIsTablet={setIsTablet} isTablet={isTablet} />
            <div className="left__side">
                <Intro />
                <About />
                <Reservation />
            </div>
            <div className="right__side">
                <RightSide />
            </div>
        </div>
    )
}

export default Home