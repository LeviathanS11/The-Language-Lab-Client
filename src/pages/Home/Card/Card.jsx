import React from 'react';

const Card = ({ item }) => {
    const { image, name } = item;
    return (
        <div className="card w-80 glass mx-auto">
            <figure><img style={{width:"300px",height:"300px"}} src={image}  /></figure>
            <div className="card-body">
                <h2 className="card-title text-orange-500">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-400">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default Card;