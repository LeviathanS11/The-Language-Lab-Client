import React, { useEffect, useState } from 'react';
import useInstructor from '../../hooks/useInstructor';
import Title from '../Home/Tite/Title';
import InstructorCard from './InstructorCard';

const Instructor = () => {
    const[instructor]=useInstructor();
    // const [instructor, setInstructor] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/instructor')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setInstructor(data)
    //     })
    // },[])
    return (
        <section >
            <Title heading="Our honorable instructor"></Title>
            <div className='grid md:grid-cols-2 gap-5'>
            {
                instructor.map(item=><InstructorCard key={item.id}item={item}></InstructorCard>)
            }
            </div>
        </section>
    );
};

export default Instructor;