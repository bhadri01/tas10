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
                    <div>
                        <h2>STARTER</h2>
                        <p>Starter features for your business to grow.</p>
                    </div>
                    <h1>Free</h1>
                    <h5>For 10 Assets</h5>
                    <ul>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 1</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 2</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 3</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 4</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 5</li>
                    </ul>
                    <button>Free trail</button>
                </div>
                <div className="card card2">
                    <div>
                        <h2>ECONOMY</h2>
                        <p>Professional features for your business to grow.</p>
                    </div>
                    <h1>₹269</h1>
                    <h5>For 100 Assets</h5>
                    <ul>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 1</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 2</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 3</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 4</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 5</li>
                    </ul>
                    <button>Buy now</button>
                </div>
                <div className="card card3">
                    <div>
                        <h2>DELUXE</h2>
                        <p>Advanced features for your business to grow.</p>
                    </div>
                    <h1>₹439</h1>
                    <h5>For 1000 Assets</h5>
                    <ul>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 1</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 2</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 3</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 4</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 5</li>
                    </ul>
                    <button>Buy now</button>
                </div>
                <div className="card card4">
                    <div>
                        <h2>ULTIMATE</h2>
                        <p>Advanced features for your business to grow.</p>
                    </div>
                    <h1>₹599</h1>
                    <h5>For 10000 Assets</h5>
                    <ul>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 1</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 2</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 3</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 4</li>
                        <li><img src='/src/assets/tick.svg' alt='tick' />Feature 5</li>
                    </ul>
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;