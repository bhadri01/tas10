import React from 'react';

const MainBanner: React.FC = () => {
    return (
        <div className='main-top-banner'>
            <h1>The everything app, for work</h1>
            <h3>Get everyone working in a single platform <br />designed to manage any type of work.</h3>

            <button>Get Started. It's FREE <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 6L1.5 6M14.5 6L9.66279 1.5M14.5 6L9.66279 10.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
            <p className="paragraph-xs">Free Forever. No Credit Card.</p>
        </div>
    );
};

export default MainBanner;