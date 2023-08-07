import React from 'react'
import './SmallBoxLeft.css'
import { Link } from 'react-router-dom'

const SmallBoxLeft = () => {
    return (
        <section className='smallLeft'>
            <div className="smallLeft__container">
                <span>
                    Experience the refined world of coffee and delectable cuisine, crafted with passion by our expert owner-baristas, in the heart of Saint-Tropez.
                </span>
                <Link to="/about">
                    <p>More About Us</p>
                </Link>
            </div>
        </section>
    )
}

export default SmallBoxLeft