import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 5) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isProjectActive = [
        '/project',
        '/shree-shyam-township',
        '/shree-shyam-aerocity',
        '/bliss-valley',
        '/ekakshar-green-woods',
        '/ekakshar-green-farms'
    ].includes(location.pathname);

    const isBlogActive = [
        '/our-blogs',
        '/top-5-real-estate-growth-zones-to-invest-in-delhi-ncr-with-ekakshar-buildtech',
        '/discover-16-way-ai-is-making-real-estate-smarter',
        '/jewar-airport-first-plane-landing-a-milestone-in-aviation-and-infrastructure-development'
    ].includes(location.pathname);

    return (
        <nav>
            <div className={`navbar_above ${showNavbar ? 'hidden' : ''}`}>
                <div className='d-flex  align-items-center'>
                    <p className='nav_text'><CiLocationOn className='nav-icon' />
                        7th Floor, Plot No-59, Riana Perito Tower , Sector-136, Noida 201305</p>
                </div>
                <div className='d-flex align-items-center'>
                    <p className='nav_text'><a href='tel:7042005600'><IoCallOutline className='nav-icon-phone' />+91 - 7042005600</a></p>
                    <p className='nav_text ms-5'><a href='mailto:info@ekaksharbuildtech.com'><IoMailOutline className='nav-icon' />info@ekaksharbuildtech.com</a></p>
                </div>
            </div>


            <div className={`navbar_container ${showNavbar ? 'slide-down' : ''}`}>
                <div className='haumburger_div'>
                    <div>
                        <a href='/'><img src='/bluelogo.webp' alt='logo' className="mobnavbar-logo" loading='lazy' /></a>
                    </div>
                    <div className='hamburger' onClick={toggleNavbar}>
                        <RxHamburgerMenu className='ham_icon' />
                    </div>
                </div>
                <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <div className='wlogo_div'>
                        <img src='/whitelogo.webp' alt='logo' className="whitenavbar-logo" loading='lazy' />
                    </div>
                    <RxCross2 className='white_cross_icon' onClick={toggleNavbar} />
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}
                            onClick={closeNavbar}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/about-us"
                            className={`nav-links ${location.pathname === '/about-us' ? 'active' : ''}`}
                            onClick={closeNavbar}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/project"
                            className={`nav-links ${isProjectActive ? 'active' : ''}`}
                            onClick={closeNavbar}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/our-team"
                            className={`nav-links ${location.pathname === '/our-team' ? 'active' : ''}`}
                            onClick={closeNavbar}
                        >
                            Team
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/our-blogs"
                            className={`nav-links ${isBlogActive ? 'active' : ''}`}
                            onClick={closeNavbar}
                        >
                            Blogs
                        </Link>
                    </li>
                    <button className="nav-item_contact">
                        <Link
                            to="/contact-us"
                            className={`nav-links ${location.pathname === '/contact-us' ? 'active' : ''}`}
                            onClick={closeNavbar}
                        >
                            Contact
                        </Link>
                    </button>
                </div>
                <div>
                    <a href='/'><img src='/bluelogo.webp' alt='logo' className="navbar-logo" loading='lazy' /></a>
                </div>
                <div>
                    <button className='nav_contact_button'><a href='/contact-us'>CONTACT US</a></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;