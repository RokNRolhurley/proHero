import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
 
    const {website, name, email, phone, address, username} = user;

    // console.log('user details data:', user);
   
    const userStyle = {
        
        border: '1px solid grey',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        color:   'purple',
        textAlign: 'left',
    }
   
    return (
        <div style={userStyle}>
            <h3>User Details</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Username: {username}</p>
            <p>Address: {address.street}, {address.city}, {address.zipcode}</p>
            <p>Website: {website}</p>

        </div>
    );
};

export default UserDetails;