import React from 'react';
import useInputField from '../../hooks/useInputField';

const hookForm = () => {

    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')
    const [password, passwordOnChange] = useInputField('')
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', name, email, password);
    }

    return (
        <div>
            <h3>Hook Form</h3>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} name="name" id="" placeholder="Name" required/>
                <br/>
                <input defaultValue={email} type="email" onChange={emailOnChange} name="email" id="" placeholder="Email" required/>   
                <br/>
                <input defaultValue={password} type="password" onChange={passwordOnChange} name="password" id="" placeholder="Password" required/>
                <br/>
                <input type="submit" name="Submit"></input>
            </form>
        </div>
    );
};

export default hookForm;