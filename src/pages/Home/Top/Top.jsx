import React from 'react';
const Top = ({ item }) => {
    const { image } = item;
    return (
        <div>
            <img src={image} />
        </div>
    );
};

export default Top;