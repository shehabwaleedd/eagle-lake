import React from 'react'
import "./AboutComponents.css"
import partner1 from "../../../../../assets/partner1.webp"
import partner1_300px from "../../../../../assets/partner1_300.webp"
import partner2 from "../../../../../assets/partner2.webp"
import partner2_300px from "../../../../../assets/partner2_300.webp"

const AboutUpper = () => {
    return (
        <section className='aboutUpper'>
            <div className="aboutUpper__container">
                <h1>Cafeteria</h1>
                <p>Eagle Lake Breakfast Coffee Shop" is a delightful haven nestled in the heart of Sri Lanka, offering a charming and inviting ambiance for all coffee and breakfast enthusiasts. Located by the tranquil Tinara River in Weligama, this picturesque café is a must-visit destination for locals and travelers alike.</p>
                <div className="aboutUpper__lower">
                    <div className="aboutUpper__lower-imgs">
                        <img src={partner1} alt=""
                            srcSet={[`${partner1_300px}?w=300&format=webp 300w`]}
                        />
                        <img src={partner2} alt=""
                            srcSet={[`${partner2_300px}?w=300&format=webp 300w`]}
                        />
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