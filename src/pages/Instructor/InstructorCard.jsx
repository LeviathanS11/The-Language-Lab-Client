import React from 'react';

const InstructorCard = ({ item }) => {
    const { name, image,email } = item;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img style={{width:"400px",height:"300px"}} src={image}  /></figure>
                <div className="card-body text-orange-400">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;