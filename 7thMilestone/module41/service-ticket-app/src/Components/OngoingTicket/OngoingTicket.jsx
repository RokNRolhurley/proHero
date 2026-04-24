import React, { use } from 'react';

const OngoingTicket = ({ ticketPromise }) => {

    const ticketData = use(ticketPromise);
    // console.log(ticketData);
    const ongoingCount = ticketData.filter(ticket => ticket.status === 'In Progress' ).length;
    const resolvedCount = ticketData.filter(ticket => ticket.status === 'Closed').length;

    return (
       <div className='max-w-[1200px] mx-auto flex flex-wrap lg:flex-nowrap justify-between items-center px-8 py-8 gap-6'>
    
    {/* Ongoing Tickets Card */}
    <div className='bg-[#422AD5] p-4 rounded-lg shadow-md h-[250px] w-full md:w-[550px] flex flex-col justify-center items-center text-white overflow-hidden bg-cover bg-center'
    style={{ backgroundImage: `linear-gradient(rgba(66, 42, 213, 0.8), url('/vector1.png')` 
  }} > 
       
        <h1 className='text-2xl font-bold mb-4'>Ongoing Tickets</h1>
        <span className='text-6xl font-bold'>{ongoingCount}</span>
    </div>

    {/* Resolved Tickets Card */}
    <div className='bg-[#422AD5] p-4 rounded-lg shadow-md h-[250px] w-full md:w-[550px] flex flex-col justify-center items-center text-white overflow-hidden bg-cover bg-center'
    style={{ backgroundImage: `linear-gradient(rgba(66, 42, 213, 0.8), url('/vector1.png')` 
  }}> 
        <h1 className='text-2xl font-bold mb-4'>Resolved Tickets</h1>
        <span className='text-6xl font-bold'>{resolvedCount}</span>  
    </div>

</div>
    
    );
};

export default OngoingTicket;