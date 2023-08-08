import React from 'react'
import './Reservation.css'
import { Link } from 'react-router-dom'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Reservation = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <section className='reservation'>
            <div className="reservation__container">
                <h1>Book A Table</h1>
                <div className="reservation__table">
                    <div className="reservation__table-left">
                        <div className="reservation__table-left__container">
                            <div className="reservation_vertical_dash"></div>
                            <div className="reservation__table-left__container__input">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" placeholder='Enter your name' />
                            </div>
                            <div className="reservation__table-left__container__input">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" placeholder='Enter your email' />
                            </div>
                            <div className="reservation__table-left__container__input">
                                <label htmlFor="phone">Phone:</label>
                                <input type="text" name="phone" id="phone" placeholder='Enter your phone number' />
                            </div>
                            <div className="reservation__table-left__container__input">
                                <label htmlFor="date">Date:</label>
                                <input type="date" name="date" id="date" placeholder='Enter your date' />
                            </div>
                            <div className="reservation__table-left__container__input">
                                <label htmlFor="time">Time:</label>
                                <input type="time" name="time" id="time" placeholder='Enter your time' />
                            </div>
                            <div className="reservation__table-left__container__input">
                                <label htmlFor="guests">Guests:</label>
                                <input type="number" name="guests" id="guests" placeholder='Enter your guests' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="send__button">
                    <button>Send</button>b
                </div>
            </div>
            <div className="reservation__footer">
                <p>© Eagle Lake 2023</p>
                <span>Developed & Coded by <Link to="https://shehabwaleedd.vercel.app/" target='_blank'>Shehab</Link></span>
                <span onClick={handleScrollToTop}>Scroll to top <AiOutlineArrowUp /></span>
            </div>
        </section>
    )
}

export default Reservation