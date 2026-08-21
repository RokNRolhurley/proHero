import React from 'react';

const UncontrolledField = () => {
const emailRef = React.useRef('');
const passWordRef = React.useRef('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:',emailRef.current.value);
    console.log('Submitted password:',passWordRef.current.value);
}

    return (
        <div>
            <h3>Uncontrolled Field</h3>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="text" placeholder="email" />
                <br/>
                <input ref={passWordRef} type="password" placeholder="password" />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UncontrolledField;