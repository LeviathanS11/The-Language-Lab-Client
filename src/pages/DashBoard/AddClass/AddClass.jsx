import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const
            name
                = form.ClassName.value;
        const
            instructor_name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const
            available_seats
                = form.quantity.value;
        const image = form.image.value
        const all = {
            name
            ,
            instructor_name,
            available_seats
            , email, price, image
        }
        console.log(all)

        fetch('https://assignment-12-server-jade.vercel.app/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(all)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class added successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Toy</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleAddClass} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" name='ClassName' required placeholder="Name of your Class" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name='name' required placeholder=" Your Name " className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" defaultValue={user?.email} name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' required placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seat</span>
                                </label>
                                <input type="text" name='quantity' required placeholder="Quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='image' required placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;