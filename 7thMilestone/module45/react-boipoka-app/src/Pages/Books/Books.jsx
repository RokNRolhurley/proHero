import React, { Suspense, useEffect, useState } from 'react';
import Book from './Book';

const Books = ({data}) => {
    
    const [allBooks, setallBooks] = useState([]);

    // useEffect(() => {
    //         // fetch('https://raw.githubusercontent.com/RokNRolhurley/proHero/refs/heads/main/7thMilestone/module45/react-boipoka-app/public/booksData.json')
    //         fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data); 
    //             setBooks(data);
                
    //         })
    // },[])
        
    // const bookPromise= fetch('https://raw.githubusercontent.com/RokNRolhurley/proHero/refs/heads/main/7thMilestone/module45/react-boipoka-app/public/booksData.json').then(res=>res.json());


    return (
        <div>
            <h3>JSON Data Source</h3>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {            
                    data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            
                
             </Suspense>

        </div>
    );
};

export default Books;   
