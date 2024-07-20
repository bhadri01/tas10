import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <>
            <nav>
                <div className='left-side'>
                    <img src="/src/assets/main-office-logo/logo-v3-clickup-light.svg" alt="logo" />
                    <ul>
                        <li className='log-in'><Link to="/">Home</Link></li>
                        {/* <li><Link to="/login">Login</Link></li> */}
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <ul>
                    {/* <li><Link to="/login">Login</Link></li> */}
                    <li className='sign-up'><Link to="/signUp">Login</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;