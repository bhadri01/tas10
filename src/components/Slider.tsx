import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  let sliderRef1 = useRef<React.MutableRefObject<Slider | null> | null>(null);
  let sliderRef2 = useRef<React.MutableRefObject<Slider | null> | null>(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <div className="slider-container">
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={8.5}
        focusOnSelect={true}
        centerMode={true}
        arrows={false}
        centerPadding="0px"
        className='nav-slider'
      >
        <div className='parent-box'>
          <img src='/src/assets/sliders/dashboard-logo.svg' />
          <h4 className='box-text'>Forms</h4>
        </div>
        <div className='parent-box'>
          <img src='/src/assets/sliders/dashboard-logo.svg' />
          <h4 className='box-text'>Sprints</h4>
        </div>
        <div className='parent-box'>
          <img src='/src/assets/sliders/dashboard-logo.svg' />
          <h4 className='box-text'>Docs</h4>
        </div>
        <div className='parent-box'>
          <img src='/src/assets/sliders/dashboard-logo.svg' />
          <h4 className='box-text'>Time tracking</h4>
        </div>
        <div className='parent-box'>
          <img src='/src/assets/sliders/dashboard-logo.svg' />
          <h4 className='box-text'>Chat</h4>
        </div>
        <div className='parent-box'>
          <img src='/src/assets/sliders/dashboard-logo.svg' />
          <h4 className='box-text'>Whiteboards</h4>
        </div>
        <div className='parent-box'>
          <img src='/src/assets/sliders/dashboard-logo.svg' />
          <h4 className='box-text'>Projects</h4>
        </div>
        <div className='parent-box'>
          <img src='/src/assets/sliders/dashboard-logo.svg' />
          <h4 className='box-text'>Dashboard</h4>
        </div>
        <div className='parent-box'>
          <img src='/src/assets/sliders/dashboard-logo.svg' />
          <h4 className='box-text'>AI</h4>
        </div>
      </Slider>
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className='main-banner'>
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
  );
}
