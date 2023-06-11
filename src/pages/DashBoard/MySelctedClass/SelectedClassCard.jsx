import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const SelectedClassCard = ({item}) => {
    const{image,name,price}=item;
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img style={{height:"300px"}} src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title text-orange-400">{name}</h2>
                <p className='font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-400">Buy Now</button>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-400"><FaTrashAlt></FaTrashAlt></button>
                </div>
            </div>
        </div>
    );
};

export default SelectedClassCard;