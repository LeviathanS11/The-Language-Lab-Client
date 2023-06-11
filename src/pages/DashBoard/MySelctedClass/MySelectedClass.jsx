import React from 'react';
import useClass from '../../../hooks/useClass';
import SelectedClassCard from './SelectedClassCard';

const MySelectedClass = () => {
    const [classes,refetch]=useClass();
    return (
        <div className='grid grid-cols-2 gap-5'>
           {
            classes.map(item=><SelectedClassCard key={item._id}item={item}refetch={refetch}></SelectedClassCard>)
           }
        </div>
    );
};

export default MySelectedClass;