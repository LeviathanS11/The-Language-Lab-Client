import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Top from '../Top/Top';

const TopSliderSection = () => {
    const[top,setTop]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/top")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setTop(data)
        })
    },[])
    return (
            <Carousel showThumbs={false}>
               
                {
                    top.map(item=><Top key={item.id}item={item}></Top>)
                }
            
            </Carousel>
    );
};

export default TopSliderSection;