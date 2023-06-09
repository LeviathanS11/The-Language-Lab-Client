import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';
import Title from '../Tite/Title';



const PopularInstructor = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/PInstructor?limit=${6}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [])
    return (
        <>
            <Title heading="popular instructors"></Title>

            <div className='grid md:grid-cols-3 gap-5'>

        {
            items.map(item => <PopularCard key={item.id} item={item}></PopularCard>)
        }
            </div>
        </>
        
    )
};

export default PopularInstructor;