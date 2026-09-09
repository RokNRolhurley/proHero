import React from 'react';
import Banner from '../../Componenets/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className='bg-white min-h-screen'>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;