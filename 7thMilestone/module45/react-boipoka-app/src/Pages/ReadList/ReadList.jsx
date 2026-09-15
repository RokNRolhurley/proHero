import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import { useState } from 'react';
import Book from '../Books/Book';

const ReadList = () => {
    const [readList,SetReadList] = useState([]);
    const [sort, SetSort]  = useState('');
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedBookData= getStoredBook();
        const convertedStoredBook = storedBookData.map(id=>parseInt(id))
        // console.log(storedBookData);
        console.log(convertedStoredBook);
        const myReadList=data.filter(book=>convertedStoredBook.includes(book.bookId));
        console.log(myReadList);
        SetReadList(myReadList)

    },[]) 

    const handelSort = (type) =>{
        SetSort(type)
        if(type=="pages"){
            const sortedByPage=[...readList].sort((a,b)=> a.totalPages-b.totalPages);
            SetReadList(sortedByPage);
        }

    }

    return (
        <div>
              <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn m-1">Sort by : {sort?sort:""}</div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=>handelSort("pages")}>Pages</a></li>
                            <li><a onClick={()=>handelSort("ratings")}>Ratings</a></li>
                        </ul>
                    </div>


        <Tabs>
            <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
                <h2>Book I Read: {readList.length} </h2>
                {/* {
                    readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
                } */}

            </TabPanel>
            <TabPanel>
                <h2>My Wish List: </h2>
            </TabPanel>
        </Tabs>

        </div>
    );
};

export default ReadList;