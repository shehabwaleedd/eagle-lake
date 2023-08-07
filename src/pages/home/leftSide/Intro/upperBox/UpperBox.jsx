import React from 'react'
import "./UpperBox.css"
import { Link } from 'react-router-dom'
const UpperBox = () => {
    return (
        <section className='upperBox'>
            <div className="upperBox__container">
                <h1>All Day Breakfast Coffee Shop</h1>
                <Link className='resv__button'>
                    <span>Make A Reservation</span>
                </Link>
            </div>
        </section>
    )
}

export default UpperBox