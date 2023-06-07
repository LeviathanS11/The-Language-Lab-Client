import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/language1.jpg';
import img2 from '../../../assets/language2.jpg';
import img3 from '../../../assets/language3.jpg';
import img4 from '../../../assets/language4.jpg';

const TopSliderSection = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
                <div className='relative bottom-40 text-2xl'>
                    <p>Don't Think All The <span className='text-red-500'>Time!!!</span></p>
                    <p>Express Your Self <span className='text-red-500'>Freely</span></p>
                    <p>We Are Here To <span className='text-red-500'>Help</span></p>
                </div>
            </div>
            <div>
                <img src={img2} />
                <div className='relative bottom-20 text-3xl text-blue-400'>
                    <p>Learn With Us Effectively</p>
                </div>
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
                <div className='relative bottom-20 text-2xl text-blue-600'>
                    <p>Speak Fluently With Other Language's People</p>
                </div>
            </div>
        </Carousel>
    );
};

export default TopSliderSection;