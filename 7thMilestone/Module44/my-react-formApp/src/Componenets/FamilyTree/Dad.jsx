import React from 'react';
import Myself from './Myself';
import Brothers from './Brothers'
import Sisters from './Sisters'



const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
                <section className='flex'>
                    <Myself asset={asset}></Myself>
                    <Brothers></Brothers>    
                    <Sisters></Sisters>
                    
                </section>
        </div>
    );
};

export default Dad;