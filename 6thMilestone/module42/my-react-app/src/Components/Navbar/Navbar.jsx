import React from 'react';
import navImg from '../../assets/logo.png'   
import coinImg from '../../assets/coin.jpg' 

const Navbar = () => {
    return (
         <div className="navbar max-w-[1200px] mx-auto">
            <div className="flex-1">
                <a className="text-xl">
                    <img src={navImg} alt="" className='w-[60px] h-[60px]' />
                </a>
            </div>
            <div className="flex-3">
                <a className="">Best XI</a>
            </div>
            <div className="flex">
                <button className='mr-2'>Home</button>
                <button className='mr-2'>Fixture</button>
                <button className='mr-2'>Teams</button>
                <button className='mr-2'>Schedules</button>
                
                <div className="flex border-2 border-gray-300 rounded-lg px-2 py-1">
                        <span className="mr-1">$8,000,000 </span>
                        <span className="mr-1"> Coin</span>
                        <img src={coinImg} alt="" className='w-[25px] h-[25px]' />
                </div>
                 
            </div>
        </div>
    );
};
    <div className="navbar max-w-[1200px] mx-auto">
            <div className="flex-1">
                <a className="text-xl">
                    <img src={navImg} alt="" className='w-[60px] h-[60px]' />
                </a>
            </div>
            <div className="flex-3">
                <a className="">Best XI</a>
            </div>
            <div className="flex">
                <span className="mr-1">$8,000,000 </span>
                <span className="mr-1"> Coin</span>
                <img src={coinImg} alt="" className='w-[25px] h-[25px]' />
            </div>
    </div>

    export default Navbar;