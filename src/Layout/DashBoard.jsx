import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

import { FaAddressBook, FaBook, FaWallet } from "react-icons/fa";

const DashBoard = () => {
  const isAdmin = true;
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">

          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {
              isAdmin ? <>
                <li><Link to="/dashboard/manageClasses">Manage Classes</Link></li>        
                <li><Link to="/dashboard/manageUsers">Manage Users</Link></li>        
              </> : <>
                <li><Link to="/dashboard/myclass"><FaAddressBook></FaAddressBook>My Classes</Link></li>
                <li><Link><FaBook></FaBook>My Enrolled Classes</Link></li>
                <li><Link><FaWallet></FaWallet>Payment History</Link></li>
              </>
            }

          </ul>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;