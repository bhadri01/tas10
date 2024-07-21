import React from 'react';
import "../styles/Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer>
            <section className="footer-box">
                <div className="footer-content">
                    <div className="footer-content-box social">
                        <img src="/src/assets/main-office-logo/logo-white.png" alt="logo" />

                        <div className="footer-social">
                            <a href="/"><img src="/src/assets/social-icons/linkedIn.svg" alt="linkedin" /></a>
                            <a href="/"><img src="/src/assets/social-icons/facebook.svg" alt="facebook" /></a>
                            <a href="/"><img src="/src/assets/social-icons/twitter.svg" alt="twitter" /></a>
                            <a href="/"><img src="/src/assets/social-icons/instagram.svg" alt="instagram" /></a>
                        </div>
                    </div>
                    <div className="footer-content-box">
                        <h3>Site Map</h3>
                        <ul>
                            <li><a href="/">Our Product</a></li>
                            <li><a href="/">How to Buy</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-content-box">
                        <h3>Our Links</h3>
                        <ul>
                            <li><a href="/">Terms of Conditions</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-content-box">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><i className="pi pi-map-marker" style={{ color: '#fff', marginRight: '10px' }}></i><a href="/">No: 4/2, 2nd Floor, Balaji Avenue 2nd Street, Thirumalai Pillai Road, T.Nagar, Chennai 600017.</a></li>
                            <li><i className="pi pi-phone" style={{ color: '#fff', marginRight: '10px' }}></i><a href="/">
                                +91-9876544321</a></li>
                            <li><i className="pi pi-envelope" style={{ color: '#fff', marginRight: '10px' }}></i><a href="/">
                                info@tas10.com</a></li>
                        </ul>
                    </div>
                </div>

            </section>
        </footer>
    );
};

export default Footer;