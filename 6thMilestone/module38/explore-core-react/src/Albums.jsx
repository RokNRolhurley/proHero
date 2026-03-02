import { use } from "react";
import Album from "./Album";

export default function Albums({albumsPromise}){ 

    const albums = use(albumsPromise);
    console.log(albums); 

    return (
        <div className="card">
            <h2>All the Albums: {albums.length} </h2>
            {albums.map(album => <Album album={album}></Album>) }

            
        </div>
    )
}   