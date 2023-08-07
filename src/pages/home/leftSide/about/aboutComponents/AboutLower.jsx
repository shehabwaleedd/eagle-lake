import React from 'react'
import { Link } from 'react-router-dom'
const AboutLower = () => {
    return (
        <section className='aboutLower'>
            <div className="aboutLower__container">
                <Link className='resv__button_about'>
                    <span>Make A Reservation</span>
                </Link>
            </div>
        </section>
    )
}

export default AboutLower