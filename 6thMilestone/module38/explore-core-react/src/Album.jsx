export default function Album({album}){

    return(
        <div className="card">
            <h3>{album.userId}</h3>
            <h3>{album.title}</h3>
        </div>
    )
}