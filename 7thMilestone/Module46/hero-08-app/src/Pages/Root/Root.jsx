import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            
            
            <section>
                <Navbar></Navbar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>    
            </section>
            
        </div>
    );
};

export default Root;