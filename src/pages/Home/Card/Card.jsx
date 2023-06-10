import React from 'react';
import { AttentionSeeker} from "react-awesome-reveal";


const Card = ({ item }) => {
    const { image, name,students,available_seats } = item;
    return (
        
        <AttentionSeeker effect='pulse'><div className="card w-80 glass mx-auto">
        <figure><img style={{width:"300px",height:"300px"}} src={image}  /></figure>
        <div className="card-body">
            <h2 className="card-title text-orange-500">{name}</h2>
            <p>Current-Student : {students}</p>
            <p>Seat remaining : {available_seats}</p>
            <div className="card-actions justify-end">
                <button className="btn bg-orange-400">Learn now!</button>
            </div>
        </div>
    </div></AttentionSeeker>
    );
};

export default Card;