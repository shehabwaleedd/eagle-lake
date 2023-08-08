import React from 'react'
import './LeftSideContact.css'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
const LeftSideContact = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <section className='contact_left'>
            <div className="contact_left-container">
                <h1>Contact</h1>
                <span>You can find us at Tinara River, Weligama 81700, Sri Lanka. As we are located in the heart of the city, the best way to get here is by taxi or on foot. If you would like to visit us by car, we recommend using one of the paid parking lots within the city center.</span>
            </div>
            <div className="contact__left-bottom">
                <div className="smallRight__cards-contact">
                    <div className="smallRight__card-contact">
                        <h1>Call</h1>
                        <div className="smallRight__card-end-contact">
                            <Link to="tel:+33 4 94 97 00 90">+33 4 94 97 00 90</Link>
                            <FiArrowUpRight style={{ color: "var(--accent-color)", fontSize: "1.5rem" }} />
                        </div>
                    </div>
                    <div className="smallRight__card">
                        <h1>Mail</h1>
                        <div className="smallRight__card-end-contact">
                            <Link to="mailto: hello@eaglelake.com">hello@eaglelake.com</Link>
                            <FiArrowUpRight style={{ color: "var(--accent-color)", fontSize: "1.5rem" }} />
                        </div>
                    </div>
                    <div className="smallRight__card">
                        <h1>IG</h1>
                        <div className="smallRight__card-end-contact">
                            <Link to="https://www.instagram.com/the.eagle.lake/">@eaglelake</Link>
                            <FiArrowUpRight style={{ color: "var(--accent-color)", fontSize: "1.5rem" }} />
                        </div>
                    </div>
                    <div className="smallRight__card">
                        <h1>Tinara River, Weligama 81700, Sri Lanka</h1>
                        <div className="smallRight__card-end-contact">
                            <Link to="https://www.instagram.com/the.eagle.lake/">Google Maps</Link>
                            <FiArrowUpRight style={{ color: "var(--accent-color)", fontSize: "1.5rem" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__footer">
                <p>© Eagle Lake 2023</p>
                <span>Developed & Designed by <Link to="https://shehabwaleedd.vercel.app/" target='_blank'>Shehab</Link></span>
                <span onClick={handleScrollToTop}>Scroll to top <AiOutlineArrowUp /></span>
            </div>
        </section>
    )
}

export default LeftSideContact