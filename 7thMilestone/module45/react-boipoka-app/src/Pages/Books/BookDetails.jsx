import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Book from './Book';
import { addToStoredDB } from '../../Utility/addToDB';


const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    // console.log('Param',{id});
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.bookId === bookId);
    // console.log(singleBook);
    // console.log(id, data);
    const {bookName, category,rating, image, review, publisher, yearOfPublishing} = singleBook;
    
    const handleMarkAsRead = id => {
        //Store with Id
        //Where to store
        //array or collection
        //if book already exist then show an alert
        //push in the 3rd step if book dosen't exist
        addToStoredDB(id);
    }
    //For show the ReadList 
    // const handleReadList = id =>{
    //     getListFromDB(id);
    // }
    
    
    
    return (
        <div className='flex flex m-2 gap-2'>
            <div className='mx-auto'>
                <img className='h-130 w-650 gap-2' src={image}/>
            </div>        
            <div>
                <h5 >{bookName}</h5>
                <br/>
                <span >{review}</span>
                <br/>
                <span>Categoty: {category}</span>
                <br/>
                <span>Rating: {rating} </span>
                <br/>
                <span >Publisher: {publisher}</span>
                <br/>
                <span >Year: {yearOfPublishing} </span>
                <br/>
                <button onClick={()=>handleMarkAsRead(id)} className='btn btn-accent m-2'>Mark as Read</button>
                <button className='btn btn-info m-2'>Add to Wishlist</button>
                {/* button to show ReadList
                <button onClick={() =>handleReadList(id)} className='btn btn-info m-2'>Show ReadList</button>*/}
            </div>
        </div>



    );
};

export default BookDetails;