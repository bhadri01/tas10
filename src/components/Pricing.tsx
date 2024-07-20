import React from 'react';

const Pricing: React.FC = () => {
    return (
        <div>
            <h1>Pricing</h1>
            <div className="card">
                <h2>Basic</h2>
                <p>$10/month</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
                <button>Choose Plan</button>
            </div>
            <div className="card">
                <h2>Standard</h2>
                <p>$20/month</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                </ul>
                <button>Choose Plan</button>
            </div>
            <div className="card">
                <h2>Premium</h2>
                <p>$30/month</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                    <li>Feature 5</li>
                </ul>
                <button>Choose Plan</button>
            </div>
        </div>
    );
};

export default Pricing;