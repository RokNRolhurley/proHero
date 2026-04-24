import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from './Link/Link';

const navigationData = [
  {
    "id": "nav-01",
    "name": "Home",
    "path": "/home"
  },
  {
    "id": "nav-02",
    "name": "Support",
    "path": "/tickets/all"
  },
  {
    "id": "nav-03",
    "name": "Customer",
    "path": "/customers/list"
  },
  {
    "id": "nav-04",
    "name": "Reports",
    "path": "/reports/performance"
  },
  {
    "id": "nav-05",
    "name": "Configuration",
    "path": "/admin/settings"
  },
  {
    "id": "nav-06",
    "name": "Base",
    "path": "/docs/articles"
  },
  {
    "id": "nav-07",
    "name": "Billing",
    "path": "/account/billing"
  }
]

const Navbar = () => {
const [open, setOpen] = useState(false);
const Links =  navigationData.map(route => <Link key={route.id} route={route}></Link>);
     
    return (
    
        <nav>
        
            <div className=''>
            <span className='flex ml-4' onClick={() =>setOpen(!open)}>
                {
                    open ? 
                        <X className='md:hidden'></X> : 
                        <Menu className='md:hidden'></Menu>}
            
                <ul className={`md:hidden absolute bg-amber-200 text-black
                ${open ? 'top-7' : '-top-60'}`}>
                    {Links}
                </ul>

                <h3 className='ml-4'>My Navbar</h3>
            </span>
            
            <ul className='md:flex hidden justify-center gap-4  '>
                {Links}
            </ul>

            </div>
        

          {/* <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md sm:hidden">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="btn btn-ghost text-xl">daisyUI</button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><button>Item 1</button></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2 bg-base-100 w-40 z-1">
              <li><button>Submenu 1</button></li>
              <li><button>Submenu 2</button></li>
            </ul>
          </details>
        </li>
        <li><button>Item 3</button></li>
      </ul>
    </div>
    <div className="navbar-end">
      <input type="text" placeholder="Search" className="input input-bordered w-64 lg:w-auto" />
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
      <li><button>Item 1</button></li>
      <li>
        <button>Parent</button>
        <ul>
          <li><button>Submenu 1</button></li>
          <li><button>Submenu 2</button></li>
        </ul>
      </li>
      <li><button>Item 3</button></li>
    </ul>
  </div>
           </div>
            */}
        </nav>


        

    


        
    );
};

export default Navbar;
