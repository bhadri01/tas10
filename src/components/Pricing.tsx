import React from 'react';
import '../styles/pricing.scss';

const Pricing: React.FC = () => {
    return (
        <div className='pricing-main'>
            <h1>The best work solution, for the best price.</h1>
            <div className='para'>
                <p>100% money-back guarantee. No credit card to sign up.</p>
                <p>Choose the plan that works for you</p>
            </div>
            <div className='cards'>
                <div className="card card1">
                    <h2>STARTER</h2>
                    <p>Starter features for your business to grow.</p>
                    <h1>₹439</h1>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button>Free trail</button>
                </div>
                <div className="card card2">
                    <h2>ECONOMY</h2>
                    <p>Professional features for your business to grow.</p>
                    <h1>₹439</h1>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                    </ul>
                    <button>Buy now</button>
                </div>
                <div className="card card3">
                    <h2>DELUXE</h2>
                    <p>Advanced features for your business to grow.</p>
                    <h1>₹439</h1>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                        <li>Feature 5</li>
                    </ul>
                    <button>Buy now</button>
                </div>
                <div className="card card4">
                    <h2>ULTIMATE</h2>
                    <p>Advanced features for your business to grow.</p>
                    <h1>₹439</h1>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                        <li>Feature 5</li>
                    </ul>
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;