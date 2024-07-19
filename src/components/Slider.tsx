import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './ImageSlider.css';

export default function ImageSlider() {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const handleSlideChange = (index: any) => {
    if (nav1 && nav2) {
      nav1.slickGoTo(index);
      nav2.slickGoTo(index);
    }
  };

  return (
    <div className="slider-container">
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider
        asNavFor={nav2}
        ref={slider1}
        beforeChange={(oldIndex: any, newIndex: any) => handleSlideChange(newIndex)}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        centerMode={true} // Enable center mode
        centerPadding="0" // Center the selected slide without additional padding
        beforeChange={(oldIndex: any, newIndex: any) => handleSlideChange(newIndex)}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
