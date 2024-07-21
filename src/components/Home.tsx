import React from 'react';
import MainBanner from './MainBanner';
import Cards from './Cards';
import Flower from './flower';
import ImageSlider from './Slider';
import Testimonial from './Testimonial';
import PlanBanner from './PlanBanner';

const Home: React.FC = () => {
    return (
        <>
            <MainBanner />
            <ImageSlider />
            <Flower />
            <Cards />
            <PlanBanner />
            <Testimonial />
        </>
    );
};

export default Home;