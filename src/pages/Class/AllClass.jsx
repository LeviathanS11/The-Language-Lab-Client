import React from 'react';
import Title from '../Home/Tite/Title';
import AllClassCard from './AllClassCard';
import useClasses from '../../hooks/useClasses';

const AllClass = () => {
    const[info]=useClasses();
    return (
        <section >
            <Title heading="All Classes"></Title>
            <div className='grid md:grid-cols-3 gap-4 '>
            {
                info.map(item=><AllClassCard key={item.id} item={item}></AllClassCard>)
            }
            </div>
        </section>
    );
};

export default AllClass;