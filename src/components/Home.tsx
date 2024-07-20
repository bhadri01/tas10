import React from 'react';
import MainBanner from './MainBanner';
import Cards from './Cards';
import Flower from './flower';
import ImageSlider from './Slider';
import Tiles from './Tiles';
import Testimonial from './Testimonial';

const Home: React.FC = () => {
    return (
        <>
            <MainBanner />
            <ImageSlider />
            <Flower />
            <Cards />
            <Testimonial />
        </>
    );
};

export default Home;