import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Step 1: Import useLocation
import '../styles/mobileMenu.scss';

const MobileMenu: React.FC = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef<any>(null);
    const location = useLocation(); // Step 2: Use useLocation to get the location object

    const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (navbarRef.current && !navbarRef.current?.contains(event.target)) {
                setIsNavbarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => { // Step 3: Add useEffect to listen for location changes
        setIsNavbarOpen(false); // Close the menu when the location changes
    }, [location.pathname]); // Depend on location.pathname to trigger the effect

    useEffect(() => {
        if (isNavbarOpen) {
            // Prevent scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Allow scrolling
            document.body.style.overflow = '';
        }
    }, [isNavbarOpen]);

    return (
        <>
            <div className="menu-icon">
                <Link to="/"> <img src="/src/assets/main-office-logo/logo-v3-clickup-light.svg" alt="logo" /></Link>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={toggleNavbar}
                >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </div>
            <nav ref={navbarRef} className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
                <div className="close-btn" >
                    <ul>
                        <li className='sign-up'><Link to="/login">Login</Link></li>
                        {/* Add more links here */}
                    </ul>
                    <img src='/src/assets/close.svg' alt='close' onClick={() => setIsNavbarOpen(false)} />
                </div>

                <ul className='menu-list-items'>
                    <li><Link to="/">Home <img src='/src/assets/right-arrow.svg' alt='right-arrow' /></Link></li>
                    <li><Link to="/pricing">Pricing <img src='/src/assets/right-arrow.svg' alt='right-arrow' /></Link></li>
                    <li><Link to="/contact-us">Contact Us <img src='/src/assets/right-arrow.svg' alt='right-arrow' /></Link></li>
                </ul>
            </nav>
        </>
    );
};

export default MobileMenu;