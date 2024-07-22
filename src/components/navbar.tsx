import React from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
    return (
        <>
            <nav>
                <div className='left-side'>
                    <Link to="/">
                        <div className='flex justify-center items-center border border-[#eee] rounded-xl p-1 px-2 bg-white shrink-0'>
                            <img src="/logo.png" alt="logo" className='w-28 h-10 object-contain' />
                            <span className='uppercase font-bold '>tas10</span>
                        </div>
                    </Link>
                    <ul>
                        <li className='log-in'><Link to="/">Home</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <ul>
                    <li className='sign-up'><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <MobileMenu />
        </>
    );
};

export default Navbar;