import React from 'react';
import Dad from './Dad';
import Uncles from './Uncles';
import Aunts from './Aunts';


const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncles></Uncles>
                <Aunts asset={asset}></Aunts>
                
            </section>
        </div>
    );
};

export default Grandpa;
