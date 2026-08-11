import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    const navigate = useNavigate();

    const handleRetrun = () =>{
        navigate(-1)
    }
    
    const postStyle = {
        
        border: '1px solid grey',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        color:   'purple',
        textAlign: 'left',
    }

     return (
        <div style={postStyle}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={handleRetrun}>Return</button> 
        </div>
    );
};

export default PostDetails;