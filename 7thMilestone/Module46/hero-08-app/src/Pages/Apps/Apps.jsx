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
        <div className='bg-white text-center justify-center min-h[100px]'>
            <div className='' style={{}}>
                <h1 style={{fontSize: '40px',
                            fontWeight: '800',
                            color: 'black',
                            }}>Our All Applications</h1>
                <p style={{
                           fontSize:20, 
                           color: 'black'   
                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </div>
            <Suspense fallback={<span>Loading...</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4'>
                {
                data.map((singleApp)=><App key={singleApp.id} singleApp={singleApp}></App>)
                }
            </div>
            
                
            </Suspense>
        </div>
    );
};

export default Apps;    <h1>THis is the Apps Page</h1>