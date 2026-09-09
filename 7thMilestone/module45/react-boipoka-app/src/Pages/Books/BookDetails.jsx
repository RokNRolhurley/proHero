import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Book from './Book';

const BookDetails = () => {
    const id = useParams();
    const bookId = parseInt(id);
    // console.log('Param',{id});
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.bookId === bookId);
    console.log(singleBook);
    console.log(id, data);
    return (
        <div>
            <h3>Book Details</h3>
        </div>
    );
};

export default BookDetails;