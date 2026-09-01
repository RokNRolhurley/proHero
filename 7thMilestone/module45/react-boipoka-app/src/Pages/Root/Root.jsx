import React from 'react';
import Navbar from '../../Componenets/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Componenets/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;