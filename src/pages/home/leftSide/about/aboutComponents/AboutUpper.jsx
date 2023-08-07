import React from 'react'
import "./AboutComponents.css"
import partner1 from "../../../../../assets/partner1.jpg"
import partner2 from "../../../../../assets/partner2.jpg"

const AboutUpper = () => {
    return (
        <section className='aboutUpper'>
            <div className="aboutUpper__container">
                <h1>Cafeteria</h1>
                <p>Our cafe in Saint Tropez is a great place to meet up with friends over a cup of coffee. We take pride in serving the best coffee in town and strive to create a welcoming atmosphere for all our guests. Our owners believe in running an honest business and serving our customers with care and integrity. Come and experience our humble cafe and enjoy good music.</p>
                <div className="aboutUpper__lower">
                    <div className="aboutUpper__lower-imgs">
                        <img src={partner1} alt="" />
                        <img src={partner2} alt="" />
                    </div>
                    <div className="about__lower_tex">
                        <span>Our founders</span>
                        <p>Anas and Dev</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUpper