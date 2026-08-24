import React from 'react';
import Special from './Special';
import Friends from './Friends';

const Cousins = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Aunt Male' && <Special asset={asset}></Special>
            }
            {
                name === 'Aunt Female' && <Friends></Friends>
            }
        </div>
    );
};

export default Cousins;