import React from 'react';

const AllClassCard = ({ item }) => {
    const { image, name,
        instructor_name ,
        available_seats,price,
        students,_id} = item;

        const handleAddToClass=item=>{
            console.log(item)
        }
    return (
        <div className="card w-80 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img style={{width:"300px",height:"200px"}} src={image} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center ">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Instructor : {instructor_name}</h2>
                <p>${price}</p>
                <p>Available-seats:{available_seats}</p>
                <p>Current Student : {students}</p>
                <div className="card-actions">
                    <button onClick={()=>handleAddToClass(item)} className="btn bg-orange-400">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassCard;