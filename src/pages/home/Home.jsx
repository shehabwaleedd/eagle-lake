import React from 'react'
import Navbar from '../../navbar/Navbar'
import RightSide from '../rightSide/RightSide'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="left__side">
                <div className="left__side_container">
                </div>
            </div>
            <div className="right__side">
                <RightSide />
            </div>
        </div>
    )
}

export default Home