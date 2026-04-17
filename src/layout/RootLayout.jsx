import React from 'react';
import Navbar from '../Component/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            {/* React toastify */}
            <ToastContainer />
        </div>
    );
};

export default RootLayout;