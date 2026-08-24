import React from 'react';
import Cousins from './Cousins';

const Uncles = () => {
    return (
        <div>
            <h3>Uncles</h3>
                <section className='flex'>
                    <Cousins name='Uncle Male'></Cousins>
                    <Cousins name='Uncle Female'></Cousins>
                </section>
        </div>
    );
};

export default Uncles;