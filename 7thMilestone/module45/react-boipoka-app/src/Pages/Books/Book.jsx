import React, { use } from 'react';
import { Link } from 'react-router';


const Book = ({singleBook}) => {
    // const data = use(singleBook);
        // console.log('bookpromise:', singleBook);
    
        const {bookId, bookName, author, category, review, rating, tags, publisher, image, yearOfPublishing} = singleBook;


    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-90 shadow-sm border p-5      shadow">
            <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
                        <img 
                          className='h-[260px] w-[200px]'
                        src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {bookName}
                <div className="badge badge-secondary">NEW</div>
                </h2>
            <div className="justify-right">
                <span>Author: {author}</span>
                <br/>
                <span>Categoty: {category}</span>
                <br/>
                <span>Rating: {rating} </span>
                <br/>
                <span>Tags: {tags.join(', ')}</span>
                
            </div>   
            
                {/*<div className="card-actions justify-center">
                    <div className="badge badge-outline">Preview</div>
                    <div className="badge badge-outline">Buy</div>
                </div>*/}
            </div>
        </div>
        </Link>
    );
};


export default Book;