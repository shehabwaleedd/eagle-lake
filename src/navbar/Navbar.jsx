import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
const Navbar = ({ setNavOpen, navOpen, setIsMobile, setIsTablet, isTablet, isMobile }) => {
    const location = useLocation();
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 468);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMobile]);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth <= 935);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsTablet]);
    return (
        <>
            <nav className={`${navOpen ? "nav open" : "nav"}`} style={{ transitionDuration: navOpen ? "1s" : "0.5s" }}>
                <div className="nav__container">
                    <div className="nav__left">
                        <svg className={`ham hamRotate ham1 ${navOpen ? 'active' : ''}`} viewBox="0 0 100 100" width="80" height="40" onClick={() => setNavOpen(!navOpen)}>
                            <path
                                className={`${navOpen ? "line open" : "line"} top`}
                                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                            <path
                                className={`${navOpen ? "line open" : "line"} middle`}
                                d="m 30,50 h 40" />
                            <path
                                className={`${navOpen ? "line open" : "line"} bottom`}
                                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>
                    </div>
                    <div className="nav__logo">
                        <h1 style={{ color: navOpen ? "" : "" }}>Eagle Lake</h1>
                    </div>
                    <a href="#menu" className="nav__right">
                        <h1 style={{ color: navOpen ? "var(--container-color)" : "var(--title-color)", transitionDuration: navOpen ? "1s" : "1.5s" }}>Menu</h1>
                    </a>
                </div>
                <div className="nav-overlay" style={{ top: navOpen ? "-1rem" : "-200rem", transitionDuration: navOpen ? "1s" : "1.5s" }}></div>
            </nav>
        </>
    )
}

export default Navbar