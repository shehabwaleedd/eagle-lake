import React from 'react'
import './LeftSideAbout.css'
import partner1 from "../../../assets/partner1.webp"
import partner1_300px from "../../../assets/partner1_300.webp"
import partner2 from "../../../assets/partner2.webp"
import partner2_300px from "../../../assets/partner2_300.webp"
import { Link } from 'react-router-dom'

const LeftSideAbout = () => {
    return (
        <section className='about__left'>
            <div className="about__left__container">
                <h1>Our Story</h1>
                <p>In the picturesque countryside of Sri Lanka, a captivating breakfast coffee shop emerged, co-founded by a Jordanian chef and his Sri Lankan partner. Their unique backgrounds fused Jordanian and Sri Lankan flavors, resulting in a menu that beautifully blended their culinary heritages. Amidst the serene surroundings, their café became a cultural crossroads, inviting locals and travelers to savor delicious dishes while fostering connections that transcended borders. This partnership symbolized unity, friendship, and the enchanting possibilities born from the collaboration of diverse talents.</p>
            </div>
            <div className="about__left-lower">
                <div className="about__left-lower__imgs">
                    <img src={partner1} alt="" />
                    <img src={partner2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default LeftSideAbout