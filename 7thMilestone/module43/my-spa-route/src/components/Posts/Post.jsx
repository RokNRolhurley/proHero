import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div >
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>    
            </Link>
        </div>
    );
};

export default Post;