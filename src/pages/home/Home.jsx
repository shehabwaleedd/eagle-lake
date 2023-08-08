import React from 'react';
import Navbar from '../../navbar/Navbar'
import './Home.css'
import Intro from './leftSide/Intro/Intro'
import About from './leftSide/about/About'
import Reservation from './leftSide/reservation/Reservation'
import MainImage from '../rightSide/mainImage/MainImage'
import Menu from '../menu/Menu';
const Home = ({ navOpen, setNavOpen, isMobile, setIsMobile, setIsTablet, isTablet }) => {
    return (
        <div className='home'>
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} isMobile={isMobile} setIsMobile={setIsMobile} setIsTablet={setIsTablet} isTablet={isTablet} />
            <div className="left__side">
                <Intro />
                <About />
                <Menu />
                <Reservation />
            </div>
            <div className="right__side">
                <MainImage />
            </div>
        </div>
    )
}

export default Home