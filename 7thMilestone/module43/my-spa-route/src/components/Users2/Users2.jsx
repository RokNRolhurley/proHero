import React, { use } from 'react';


const Users2 = ({ userPromise }) => {
    const users = use(userPromise);  
    console.log('user 2 data:', users);
    return (
        <div>
            <h3>User2 Data</h3>
            <div>
                {users.map(user => (
                    <div key={user.id}>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users2;