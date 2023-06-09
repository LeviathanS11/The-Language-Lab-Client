import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error,setError]=useState("");
    const navigate=useNavigate();

    const onSubmit = data => {
        if(data.password !== data.confirmPassword){
            setError("password does not match")
            return;
        }
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setError("")
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet><title>The Language Lab || Sign Up</title></Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp Now</h1>
                    </div>
                    <div className="card md:w-1/2  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} name="name" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email",{required:true})} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email?.type === 'required'&& <p  className='text-red-600'>email required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    maxLength: 20,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>password must be six character</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>password must be less than 20 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one Uppercase and one special character.</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm-Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword",{required:true})} name="confirmPassword" placeholder="Confirm-password" className="input input-bordered" />
                                {errors.confirmPassword?.type ==='required' && <p  className='text-red-600'>confirm password required</p>}
                                <p className='text-red-600'>{error}</p>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" />
                            </div>

                            

                            <div className="form-control mt-6">
                                <input className="btn bg-orange-400" type="submit" value="Register" />
                            </div>
                        </form>
                        <div className="text-center">
                            <p>Already have an account!!! <small className='text-orange-400 font-bold'><Link to='/login'>Login Now</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;