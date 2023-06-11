import React, { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

import { FaAddressBook, FaBook, FaWallet,FaHouseUser } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {

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
            <li><Link to="/dashboard/manageUsers"> <FaHouseUser></FaHouseUser> Manage Users</Link></li>
            <li><Link to="/dashboard/myclass"><FaAddressBook></FaAddressBook>My Classes</Link></li>
            <li><Link><FaBook></FaBook>My Enrolled Classes</Link></li>
            <li><Link><FaWallet></FaWallet>Payment History</Link></li>

          </ul>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;