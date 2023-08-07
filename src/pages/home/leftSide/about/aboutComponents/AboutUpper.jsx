import React from 'react'
import "./AboutComponents.css"
import partner1 from "../../../../../assets/partner1.jpg"
import partner2 from "../../../../../assets/partner2.jpg"

const AboutUpper = () => {
    return (
        <section className='aboutUpper'>
            <div className="aboutUpper__container">
                <h1>Cafeteria</h1>
                <p>Eagle Lake Breakfast Coffee Shop" is a delightful haven nestled in the heart of Sri Lanka, offering a charming and inviting ambiance for all coffee and breakfast enthusiasts. Located by the tranquil Tinara River in Weligama, this picturesque café is a must-visit destination for locals and travelers alike.</p>
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