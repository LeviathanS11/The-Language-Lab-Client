import React from 'react';
import TopSliderSection from '../TopSliderSection/TopSliderSection';
import PopularClassedSection from '../PopularClassesSection/PopularClassedSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet><title>The Language Lab || Home</title></Helmet>
            <TopSliderSection></TopSliderSection>
            <PopularClassedSection></PopularClassedSection>
        </div>
    );
};

export default Home;