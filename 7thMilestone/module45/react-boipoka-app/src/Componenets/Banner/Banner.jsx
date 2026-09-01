import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-15'>
           <div>
                <h1>This is Boi Poka</h1>
                <button>Test Button</button>
           </div>
           <div>
                <img className='w-3/12' src={bookImage} alt=""></img>
           </div>

        </div>
    );
};

export default Banner;