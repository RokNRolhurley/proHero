import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Posts/Post';

const Posts = () => {
    const posts = useLoaderData();
     console.log(posts);
    return (
        <div>
            <h3>Posts Data: {posts.length}</h3>
            <div>
                {posts.map(post => <Post key={post.id} post={post}></Post>)}
            </div>
        </div>
    );
};

export default Posts;