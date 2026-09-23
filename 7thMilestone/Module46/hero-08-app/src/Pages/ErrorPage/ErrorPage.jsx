import React from 'react';
import errImage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='hero bg-base-200 min-h-screen'>
            <h3>This is an Error</h3>
            <div>
                <img className='hero-content flex-col lg:flex-row' src={errImage}/>
            </div>
            
        </div>
    );
};

export default ErrorPage;