import React from 'react';
import TopSliderSection from '../TopSliderSection/TopSliderSection';
import PopularClassedSection from '../PopularClassesSection/PopularClassedSection';
import { Helmet } from 'react-helmet-async';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PageAnimation from '../../../Animation/PageAnimation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Helmet><title>The Language Lab || Home</title></Helmet>
            <PageAnimation></PageAnimation>
            <TopSliderSection></TopSliderSection>
            <PopularClassedSection></PopularClassedSection>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;