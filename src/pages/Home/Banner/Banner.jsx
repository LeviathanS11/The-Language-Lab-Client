import React from 'react';
import bg from '../../../assets/2581476_370681-PBPNVG-337.jpg'
import { Parallax } from 'react-parallax';

const Banner = () => {
    return (
        <div className='mt-10'> 
            <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bg}
            strength={-300}
        >
            <div className="hero h-[400px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"></h1>
                        <p className="mb-5 text-white font-extrabold text-2xl">"Language is the road map of a culture. It tells you where its people come from and where they are going."</p>
                    </div>
                </div>
            </div>

        </Parallax>
        </div>
    );
};

export default Banner;