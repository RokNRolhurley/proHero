import React from 'react';
import frontImage from '../../assets/hero-1.png' 

const Banner = () => {
    return (
        <div className='hero bg-base-200 min-h-screen bg-white colum'>
            <div>
                <div>
                    <h1 className='text-black text-xl'>We Build</h1>
                </div>
                <div>
                    <h1 className='text-black '>Productive Apps</h1>
                </div>
                <div>
                    <span className='text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veritatis exercitationem aperiam doloribus, esse enim temporibus, cumque qui id rerum accusamus illum sunt, 
                    error deserunt amet ut inventore est facilis soluta?</span>
                </div>
            </div>
            <div className='hero-content flex-col lg:flex-row'>
                <img src={frontImage} alt="" srcset="" className='rounded-lg shadow 2xl ' />
            </div>
        </div>
    );
};

export default Banner;