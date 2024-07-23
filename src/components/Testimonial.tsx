import React from 'react';
import Slider from 'react-slick';

const Testimonial: React.FC = () => {
    return (
        <div className='Testimonials'>
            <h1>AN ASSET MANAGEMENT EXPERIENCE PEOPLE
                LOVE TO TALK ABOUT</h1>
            <div className="slider">
                <Slider swipeToSlide={true} touchMove={true} focusOnSelect={true} infinite={true} slidesToShow={3} slidesToScroll={1} autoplay={true} autoplaySpeed={2000} dots={true}
                    adaptiveHeight={true} waitForAnimate={true}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                initialSlide: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]}
                    arrows={false} speed={1000} className='test-slider'>
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="img-box">
                                <div className="thumb">
                                    <img alt="Image" className="img-fluid" src="/assets/sara.png" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="name"> Christopher Doe <br /> Orlando, Florida </p>
                                    <p>
                                        <img className="comma" src="/assets/comma.png" />
                                    </p>
                                    <div className="text">
                                        <p>
                                            Work from anyplace and on any device. Regardless of wherever they're, your team will keep productive. On-line plus trailing extends your ability to receive and manage critical data concerning your valuable property.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="img-box">
                                <div className="thumb">
                                    <img alt="Image" className="img-fluid" src="/assets/sara.png" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="name"> Christopher Doe <br /> Orlando, Florida </p>
                                    <p>
                                        <img className="comma" src="/assets/comma.png" />
                                    </p>
                                    <div className="text">
                                        <p>
                                            Work from anyplace and on any device. Regardless of wherever they're, your team will keep productive. On-line plus trailing extends your ability to receive and manage critical data concerning your valuable property.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="img-box">
                                <div className="thumb">
                                    <img alt="Image" className="img-fluid" src="/assets/sara.png" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="name"> Christopher Doe <br /> Orlando, Florida </p>
                                    <p>
                                        <img className="comma" src="/assets/comma.png" />
                                    </p>
                                    <div className="text">
                                        <p>
                                            Work from anyplace and on any device. Regardless of wherever they're, your team will keep productive. On-line plus trailing extends your ability to receive and manage critical data concerning your valuable property.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="img-box">
                                <div className="thumb">
                                    <img alt="Image" className="img-fluid" src="/assets/sara.png" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="name"> Christopher Doe <br /> Orlando, Florida </p>
                                    <p>
                                        <img className="comma" src="/assets/comma.png" />
                                    </p>
                                    <div className="text">
                                        <p>
                                            Work from anyplace and on any device. Regardless of wherever they're, your team will keep productive. On-line plus trailing extends your ability to receive and manage critical data concerning your valuable property.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="img-box">
                                <div className="thumb">
                                    <img alt="Image" className="img-fluid" src="/assets/sara.png" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="name"> Christopher Doe <br /> Orlando, Florida </p>
                                    <p>
                                        <img className="comma" src="/assets/comma.png" />
                                    </p>
                                    <div className="text">
                                        <p>
                                            Work from anyplace and on any device. Regardless of wherever they're, your team will keep productive. On-line plus trailing extends your ability to receive and manage critical data concerning your valuable property.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="img-box">
                                <div className="thumb">
                                    <img alt="Image" className="img-fluid" src="/assets/sara.png" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="name"> Christopher Doe <br /> Orlando, Florida </p>
                                    <p>
                                        <img className="comma" src="/assets/comma.png" />
                                    </p>
                                    <div className="text">
                                        <p>
                                            Work from anyplace and on any device. Regardless of wherever they're, your team will keep productive. On-line plus trailing extends your ability to receive and manage critical data concerning your valuable property.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="img-box">
                                <div className="thumb">
                                    <img alt="Image" className="img-fluid" src="/assets/sara.png" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="name"> Christopher Doe <br /> Orlando, Florida </p>
                                    <p>
                                        <img className="comma" src="/assets/comma.png" />
                                    </p>
                                    <div className="text">
                                        <p>
                                            Work from anyplace and on any device. Regardless of wherever they're, your team will keep productive. On-line plus trailing extends your ability to receive and manage critical data concerning your valuable property.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;