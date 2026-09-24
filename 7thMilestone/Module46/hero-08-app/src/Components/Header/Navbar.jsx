import React from 'react';
import heroIcon from '../../assets/logo.png'
import { Link } from 'react-router';

const Navbar = () => {
    
    
        const links = <>
                <Link to='/'><li style={{fontSize: 20}}>Home</li></Link>
                <Link to='/Apps'><li style={{fontSize: 20}}>Apps</li></Link>
                <Link to='/Installation'><li style={{fontSize: 20}}>Installation</li></Link>
        </>
    
    
    
    return (
        <div>   
            <div className="navbar bg-base-100 shadow-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                             <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div> 
                         <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        {links}
                        
                         </ul>
                    </div>
                    <div className='flex'>
                        <img src={heroIcon} className='h-15 w-15'/>
                        <span className="text-xl mt-4 ">HERO.IO</span>
                        {/* <a className="btn btn-ghost text-xl mt-2 text-black ">HERO.IO</a> */}
                    </div>
                 </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3 xl">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Contribute</a>
                </div>
            </div>       
        </div>
    );
};

export default Navbar;