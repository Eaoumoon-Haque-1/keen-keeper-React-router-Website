import React from 'react';
import Navbar from '../Component/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Shared/footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;