import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Top from '../Top/Top';

const TopSliderSection = () => {
    const [top, setTop] = useState([])
    useEffect(() => {
        fetch("https://assignment-12-server-jade.vercel.app/top")
            .then(res => res.json())
            .then(data => {
                setTop(data)
            })
    }, [])
    return (
        <div>
            <Carousel showThumbs={false}>

                {
                    top.map(item => <Top key={item.id} item={item}></Top>)
                }

            </Carousel>
        </div>
    );
};

export default TopSliderSection;