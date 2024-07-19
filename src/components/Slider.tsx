import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './ImageSlider.css';

export default function ImageSlider() {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(undefined);

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
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={9}
        swipeToSlide={true}
        focusOnSelect={true}
        centerMode={true} // Enable center mode
        centerPadding="0" // Center the selected slide without additional padding
        beforeChange={(_oldIndex: any, newIndex: any) => handleSlideChange(newIndex)}
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
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
      <h4>First Slider</h4>
      <Slider
        asNavFor={nav2}
        ref={slider1}
        beforeChange={(_oldIndex: any, newIndex: any) => handleSlideChange(newIndex)}
      >
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
