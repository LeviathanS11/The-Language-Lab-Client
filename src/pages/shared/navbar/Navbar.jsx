import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

   
    const navOption = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructor" >Instructor</Link></li>
        <li><Link to="/all">Classes</Link></li>
        {
            user ? <li><Link onClick={logOut}>Logout</Link></li> : <li><Link to="/login">Login</Link></li>
        }
        <li><Link to="/dashboard/myclass">Dashboard</Link></li>
        
    </>
    return (
        <>
            <Helmet>The Language Lab || Login</Helmet>
            <div className="navbar bg-orange-400 max-w-screen-lg">
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">The Language Lab</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <img title={user.displayName} src={user.photoURL} style={{ width: '40px' }} /> : <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;