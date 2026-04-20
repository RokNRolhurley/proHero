import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar max-w-[1200px] mx-auto bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">CS-Ticket System</a>
                </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Ongoing</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <li>
                        <details>
                            <summary className="bg-[#422AD5] text-white">New Ticket</summary>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;