import React, { useState } from "react";

const ControlledField = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState();

    const handleSubmit = (e) =>{
        console.log(email, name, password);
        e.preventDefault();
    }
    
    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length <3){
            setError('Password should more then 3 charecters longer.')
        }
        else {
            setError('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder="Name" onChange={handleNameChange} value={name} required/>
                <br/>
                
                <input type="email" name="email" id="" placeholder="Email" required/>
                <br/>
                <input type="password" name="password" id="" placeholder="Password" onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br/>
                <input type="submit" name="Submit"></input>
            </form>
            <p style={{color: 'red'}}> 
                <small>{error}</small>
            </p>
        </div>
    );
};

export  default ControlledField;