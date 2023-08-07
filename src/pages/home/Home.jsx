import React from 'react'
import Navbar from '../../navbar/Navbar'
import RightSide from '../rightSide/RightSide'
import './Home.css'
import Intro from './leftSide/Intro/Intro'
import About from './leftSide/about/About'



const Home = ({navOpen, setNavOpen, isMobile, setIsMobile, setIsTablet, isTablet}) => {
    return (
        <div className='home'>
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} isMobile={isMobile} setIsMobile={setIsMobile} setIsTablet={setIsTablet} isTablet={isTablet}/>
            <div className="left__side">
                <Intro />
                <About />
            </div>
            <div className="right__side">
                <RightSide />
            </div>
        </div>
    )
}

export default Home