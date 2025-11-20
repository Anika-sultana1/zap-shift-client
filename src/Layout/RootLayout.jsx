import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div className=' px-5 bg-gray-300'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;