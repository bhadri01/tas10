import React from 'react';
import MainBanner from './MainBanner';
import Cards from './Cards';
import Flower from './flower';
import ImageSlider from './Slider';
import Tiles from './Tiles';

const Home: React.FC = () => {
    return (
        <>
            <MainBanner />
            <ImageSlider />
            <Flower />
            <Cards />
            <Tiles />
        </>
    );
};

export default Home;