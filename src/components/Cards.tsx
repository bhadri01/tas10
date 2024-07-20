import React from 'react';



const Cards: React.FC = () => {
    return (
        <section className='Cards-main'>
            <div className='flower-background'>
                <h2>How is Web Asset management deployed ?</h2>
                <p>TAS10 product is available in online or self-hosted, Internet primarily based Asset management can deliver what you wish - from up-to-the-minute accurate Purchasing, Manufacturer and asset history data, to remote access through the cloud-based inventory management system for anyone who wish access.</p>
            </div>

            <div className='cards'>
                <div className='card1 card'>
                    <h3>Server Side</h3>
                    <p>TAS10 web-based asset management solution runs on the Cloud hosted services platform, selected for both its adherence to industry-leading security practices and experience running some of largest cloud applications in the world. We also offer a self-hosted option of the web-based asset tracking software.</p>
                </div>
                <div className='card2 card'>
                    <h3>Browser Client</h3>
                    <p>TAS10 Web Asset Management provides internet primarily based inventory control with a click away from services. Gain access directly to login with URL (web address) from any device independently. Android and iOS apps are available making access simple, fast and easy. As long as you're in a connected environment, you can conduct online asset management activities from anyplace.</p>
                </div>
                <div className='card3 card'>
                    <h3>Mobile Client</h3>
                    <p>The Mobile device client enables you to view asset information in real time, with the added ability to store-and-forward for those times you are in a connected environment.</p>
                </div>
            </div>
            <div className='svg-image'>
                <img src='/src/assets/background-for-cards.svg' alt='background' />
            </div>
        </section>
    );
};



export default Cards;;