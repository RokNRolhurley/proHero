import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const   navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/posts/${id}`)
    }

    return (
        <div >
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>    
            </Link>
            <button onClick={handleNavigate}>Go To Details</button>
        </div>
    );
};

export default Post;