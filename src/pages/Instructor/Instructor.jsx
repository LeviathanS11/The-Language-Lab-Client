import React, { useEffect, useState } from 'react';
import useInstructor from '../../hooks/useInstructor';
import Title from '../Home/Tite/Title';
import InstructorCard from './InstructorCard';

const Instructor = () => {
    const[instructor]=useInstructor();
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