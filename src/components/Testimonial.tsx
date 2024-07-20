import React from 'react';
import Slider from 'react-slick';

const Testimonial: React.FC = () => {
    return (
        <div className='Testimonials'>
            <h1>Testimonials</h1>
            <div className="slider">
                <Slider swipeToSlide={true} touchMove={true} focusOnSelect={true} infinite={true} slidesToShow={3} slidesToScroll={1} autoplay={true} autoplaySpeed={5000} dots={true}
                adaptiveHeight={true} waitForAnimate={true}
                    arrows={true} speed={1000} className='main-banner'>
                    <div>
                        <h3><img src='/src/assets/sliders/1.png' /></h3>
                    </div>
                    <div>
                        <h3><img src='/src/assets/sliders/2.png' /></h3>
                    </div>
                    <div>
                        <h3><img src='/src/assets/sliders/3.png' /></h3>
                    </div>
                    <div>
                        <h3><img src='/src/assets/sliders/4.png' /></h3>
                    </div>
                    <div>
                        <h3><img src='/src/assets/sliders/5.png' /></h3>
                    </div>
                    <div>
                        <h3><img src='/src/assets/sliders/6.png' /></h3>
                    </div>
                    <div>
                        <h3><img src='/src/assets/sliders/7.png' /></h3>
                    </div>
                    <div>
                        <h3><img src='/src/assets/sliders/8.png' /></h3>
                    </div>
                    <div>
                        <h3><img src='/src/assets/sliders/9.png' /></h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;