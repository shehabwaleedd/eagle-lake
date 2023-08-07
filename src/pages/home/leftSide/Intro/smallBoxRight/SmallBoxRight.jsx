import React from 'react'
import './SmallBoxRight.css'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const SmallBoxRight = () => {
    return (
        <section className='smallRight'>
            <div className="smallRight__container">
                <div className="smallRight__cards">
                    <div className="smallRight__card">
                        <h1>Call</h1>
                        <div className="smallRight__card-end">
                            <Link to="tel:+33 4 94 97 00 90">+33 4 94 97 00 90</Link>
                            <FiArrowUpRight style={{ color: "var(--accent-color)" }} />
                        </div>
                    </div>
                    <div className="smallRight__card">
                        <h1>Mail</h1>
                        <div className="smallRight__card-end">
                            <Link to="mailto: hello@eaglelake.com">hello@eaglelake.com</Link>
                            <FiArrowUpRight style={{ color: "var(--accent-color)" }} />
                        </div>
                    </div>
                    <div className="smallRight__card">
                        <h1>IG</h1>
                        <div className="smallRight__card-end">
                            <Link to="https://www.instagram.com/the.eagle.lake/">@eaglelake</Link>
                            <FiArrowUpRight style={{ color: "var(--accent-color)" }} />
                        </div>
                    </div>
                </div>
                <p></p>
            </div>
        </section>
    )
}

export default SmallBoxRight