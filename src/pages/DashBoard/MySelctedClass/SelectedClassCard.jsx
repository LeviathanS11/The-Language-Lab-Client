import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const SelectedClassCard = ({ item, refetch }) => {
    const { image, name, price, _id } = item;
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-jade.vercel.app/deleteClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Class has been deleted.',
                                'success'
                            )
                        }
                        refetch();
                    })
            }
        })
    }
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img style={{ height: "300px" }} src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title text-orange-400">{name}</h2>
                <p className='font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-400">Buy Now</button>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn bg-orange-400"><FaTrashAlt></FaTrashAlt></button>
                </div>
            </div>
        </div>
    );
};

export default SelectedClassCard;