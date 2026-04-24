import React from 'react';
    

const Link = ({ route }) => {
    return (
        <li className='px-4 lg:mr-10 hover:bg-white-400'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;