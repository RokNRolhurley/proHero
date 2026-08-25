import React from 'react';
import Teams from './Teams';
import './WorldCup.css'


const WorldCup = () => {
    return (
        <div className='worldcup-tree'>
            <h3>FIFA World Cup</h3>
            <Teams></Teams>
        </div>
    );
};

export default WorldCup;