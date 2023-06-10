import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Title from '../Tite/Title';

const PopularClassedSection = () => {
    const[info,setInfo]=useState([])
    useEffect(()=>{
        fetch(`https://assignment-12-server-jade.vercel.app/classes?limit=${6}`)
        .then(res=>res.json())
        .then(data=>{
            setInfo(data)
        })
    },[])
    return (
        <section>
            <Title heading="Popular Classes Among The Students"></Title>
            <div className='grid md:grid-cols-3 gap-5'>
            {
                info.map((item)=> <Card key={item.id}item={item}></Card>)
            }
            </div>
        </section>
    );
};

export default PopularClassedSection;