import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import App from './App';

const AppDetails = () => {

    const {id} = useParams();
    // console.log(id);
    const appId = parseInt(id)   
    const data = useLoaderData();
    // console.log(data);

    const singleApp = data.find(App => App.id === appId)
    // console.log(singleApp)
    // console.log(typeof id, data)
    
    const { title, companyName, image, description, rating, review } = singleApp;

    return (
        <div>
            <h1>App details </h1>
            {/* <h1>Id: {id}</h1> */}
            <img src={image} alt=""  />
            <h1 style={{
                fontSize: '40px',
                fontWeight: '800'
            }}>{title}</h1>
            <h2 style={{
                fontSize: '30px',
                fontWeight: '600'
            }}>{companyName}</h2>
            <h1 style={{
                fontSize: '20px',
                fontWeight: '800'
            }}>{description}</h1>
            <h1 style={{
                fontSize: '40px',
                fontWeight: '800'
            }}>{rating}</h1>
            <h1 style={{
                fontSize: '40px',
                fontWeight: '800'
            }}>{review}</h1>

        </div>
    );
};

export default AppDetails;