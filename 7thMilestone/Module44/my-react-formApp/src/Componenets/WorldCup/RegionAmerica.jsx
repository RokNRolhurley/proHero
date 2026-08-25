import React from 'react';
import Argentina from './Argentina';
import Brazil from './Brazil';
import USA from './USA';

const RegionAmerica = () => {
    return (
        <div>
            <h3>Region America</h3>
            <div className='flex'>
                <Argentina></Argentina>
                <Brazil></Brazil>
                <USA></USA>
            </div>
            
        </div>
    );
};

export default RegionAmerica;