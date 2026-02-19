import Book from './Book'
export default function Library ({books}){
    return (
        <div>
            <h3> National Library </h3>
            <p>book collection: {books.length}</p>
            <p>Address: </p>
            <ul>
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </ul>

        </div>
    )
}