import React, { Suspense, useEffect, useState } from 'react';
import App from './App';
import { data, useLoaderData } from 'react-router';

const Apps = () => {
   
    const data = useLoaderData();
    // const dataPromise = fetch('data.json').then(res =>res.json());
    //  console.log(data)
    
    // const {} = data;
    const [allApps, setAllApps] =  useState([]);

    // useEffect(() =>{
    //     fetch('data.json').then(res =>res.json()).
    //     then(data => {
    //         setAllApps(data)
    //         // console.log(data);
    //     })
    // })

    

    return (
        <div className='bg-white'>
            <h1>This is the Apps Page</h1>  
            <Suspense fallback={<span>Loading...</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 m-4'>
                {
                data.map((singleApp)=><App key={singleApp.id} singleApp={singleApp}></App>)
                }
            </div>
            
                
            </Suspense>
        </div>
    );
};

export default Apps;    <h1>THis is the Apps Page</h1>