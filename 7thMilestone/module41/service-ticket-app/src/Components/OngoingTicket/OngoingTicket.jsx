import React, { use } from 'react';

const OngoingTicket = ({ ticketPromise }) => {

    const ticketData = use(ticketPromise);
    // console.log(ticketData);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 '>
        
            <div className='bg-[#422AD5] p-4 rounded-lg shadow-md'> 
                <h1 className='text-2xl font-bold mb-4 '>Ongoing Tickets</h1>
                <span className='text-2xl font-bold mb-4'>0</span>
            </div>
            <div className='bg-[#422AD5] p-4 rounded-lg shadow-md'> 
                <h1 className='text-2xl font-bold mb-4'>Resolved Tickets</h1>
                <span className='text-2xl font-bold mb-4'>0</span>  
            </div>
        </div>
             

        
    );
};

export default OngoingTicket;