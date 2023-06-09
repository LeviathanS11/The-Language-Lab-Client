import React from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';



const PopularCard = ({ item }) => {
    const { image ,name} = item;
    return (
        <AttentionSeeker effect='swing'>
            <div className="card w-80 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title mx-auto text-orange-400">{name}</h2>
            </div>
            <figure><img style={{height:"300px",width:"300px"}} src={image} /></figure>
        </div>
        </AttentionSeeker>
        
    );
};

export default PopularCard;