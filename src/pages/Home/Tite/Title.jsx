import React from 'react';

const Title = ({heading}) => {
    return (
        <div className='mx-auto md:w-6/12 text-center sm:w-3/5 my-8'>
            <h3 className='text-3xl uppercase border-y-2 py-4 text-orange-400'>{heading}</h3>
        </div>
    );
};

export default Title;