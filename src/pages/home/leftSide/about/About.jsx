import React from 'react'
import AboutUpper from './aboutComponents/AboutUpper'
import AboutLower from './aboutComponents/AboutLower'
import './About.css'
const About = () => {
    return (
        <section className='about_home'>
            <div className="about__container_home">
                <AboutUpper />
                <AboutLower />
            </div>
        </section>
    )
}

export default About