import React from 'react'
import Navbar from '../../navbar/Navbar'
import RightSide from '../rightSide/RightSide'
import './Home.css'
import Intro from './leftSide/Intro/Intro'
import About from './leftSide/about/About'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
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