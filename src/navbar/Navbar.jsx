import React from 'react'
import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };
    return (
        <nav className='nav'>
            <div className="nav__container">
                <div className="nav__left">
                    <svg className={`ham hamRotate ham1 ${isActive ? 'active' : ''}`} viewBox="0 0 100 100" width="80" height="40" onClick={handleToggle}>
                        <path
                            className="line top"
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path
                            className="line middle"
                            d="m 30,50 h 40" />
                        <path
                            className="line bottom"
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                    </svg>
                </div>
                <div className="nav__logo">
                    <h1>Eagle Lake</h1>
                </div>
                <div className="nav__right">
                    <h1>Menu</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar