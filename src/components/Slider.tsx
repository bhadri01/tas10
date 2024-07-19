import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  let sliderRef1 = useRef<any>(null);
  let sliderRef2 = useRef<any>(null);

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
        centerPadding="10px"
      >
        <div>
          <h4>Forms</h4>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
          <h4>Docs</h4>
        </div>
        <div>
          <h3>4</h3>
          <h4>Time tracking</h4>
        </div>
        <div>
          <h3>5</h3>
          <h4>Chat</h4>
        </div>
        <div>
          <h3>6</h3>
          <h4>Whiteboards</h4>
        </div>
        <div>
          <h3>7</h3>
          <h4>Projects</h4>
        </div>
        <div>
          <h3>8</h3>
          <h4>Dashboard</h4>
        </div>
        <div>
          <h3>9</h3>
          <h4>AI</h4>
        </div>
      </Slider>
      <h4>First Slider</h4>
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
