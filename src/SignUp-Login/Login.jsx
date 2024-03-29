import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import GoogleSignIn from './GoogleSignIn';
import { FaEye } from "react-icons/fa";

const Login = () => {

    const[isVisible,setVisible]=useState(false)

    const handleHideShow=()=>{
        setVisible(!isVisible)
    }

    const{signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    // console.log(location)
    const from=location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <>
            <Helmet><title>The Language Lab || Login</title></Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={isVisible? "text":"password"} name="password" placeholder="password" className="input input-bordered" required/>
                            </div>
                            <button className='relative left-48 bottom-10' onClick={handleHideShow}> <FaEye></FaEye></button>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-400" type="submit" value="Login" />
                            </div>
                        </form>
                       <div className='text-center'>
                       <p>New Here? <small className='text-orange-400'><Link to="/signup">Create an account</Link> </small></p>
                       </div>
                        <GoogleSignIn></GoogleSignIn>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;