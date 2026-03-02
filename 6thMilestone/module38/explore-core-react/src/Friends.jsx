import { use } from "react";
import Friend from "./Friend";

export default function Friends({friendsPromise}) {

    const friends = use(friendsPromise);
    

    return (
        <div className="card" >
            <h2>Friends: {friends.length}</h2>
            {
            friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
    }   
        </div>
    )
}