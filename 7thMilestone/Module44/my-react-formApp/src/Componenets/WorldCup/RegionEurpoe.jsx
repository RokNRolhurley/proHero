import React from 'react';
import CapeVarde from './CapeVarde';
import England from './England';
import France from './France';
import Norway from './Norway';
import Spain from './Spain';

const RegionEurope = () => {
    return (
        <div>
            <h3>Region Europe</h3>
           <div className='flex'>
                <CapeVarde></CapeVarde>
                <England></England>
                <France></France>
                <Norway></Norway>
                <Spain></Spain>
           </div>
            
            
        </div>
    );
};

export default RegionEurope;