import React from 'react';
import errImage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='hero bg-base-200 min-h-screen'>
            
            <div>
                <div>
                    <h1 className='hero-content flex-col lg:flex-row xxl'>Data or Path doesn't exist.</h1>
                </div>
                <img className='hero-content flex-col lg:flex-row' src={errImage}/>
            </div>
            
        </div>
    );
};

export default ErrorPage;