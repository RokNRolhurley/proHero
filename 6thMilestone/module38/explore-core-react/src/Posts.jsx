import { use } from "react"
import Post from "./Post";

export default function  Posts({postsPromise}){
    const posts = use(postsPromise);
    console.log(posts);

    return (
        <div className="card">
            <h2>All the Posts: {posts.length}</h2>
            {posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}