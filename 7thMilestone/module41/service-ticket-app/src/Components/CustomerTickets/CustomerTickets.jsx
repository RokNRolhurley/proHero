import React, { use } from 'react';

const CustomerTickets = ({ ticketPromise }) => {
    
    const ticketInfo = use(ticketPromise);
    console.log(ticketInfo);

    const priorityColors = { High: 'text-red-500', Medium: 'text-yellow-500', Low: 'text-green-500'};
    const statusColors = {Open: 'text-red-500', 'In Progress': 'text-yellow-500', Closed: 'text-green-500'};

    // const date = ticketInfo.createdAt 
    // const dateFt = date.toISOString().split('T')[0];
    return (
        <div className='max-w-[1200px] mx-auto mt-8 '>
            <div className='flex justify-between'>
                <h1>Customer Tickets</h1>
                <h1 className='bold'>Task Status</h1>
            </div>   
                <div className=' flex justify-between '>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        {ticketInfo.map((ticket) => (
                        <div key={ticket.id} className="card card-border bg-base-100 w-96 mb-4">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <h2 className="card-title">{ticket.title}</h2>
                                    <span className={statusColors[ticket.status]}>{ticket.status}</span>    
                                </div>
                                    
                                    <span>{ticket.description}</span>
                                <div className="card-actions justify-between ">
                                    <span>{ticket.id}</span>    
                                    <span className={priorityColors[ticket.priority] || 'text-gray-500'}>
                                    {ticket.priority.toUpperCase()}</span>
                                    <span>{ticket.customer}</span>
                                    {/* <span>{dateFt}</span>    */}
                                </div>
                            </div>
                        </div>
                                )
                            )
                        }
                    </div>
                    
                    <div className='pb-4'>
                            
                        <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                 <div className="card-body">
                                            <h2 className="card-title">Payment Failed- Card Declined</h2>
                                        <div className="justify-end card-actions">
                                            <button className="btn w-full bg-[#422AD5]">Complete</button>
                                        </div>
                                 </div>
                        </div>
                        <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                 <div className="card-body">
                                            <h2 className="card-title">Incorrect billing Address</h2>
                                        <div className="justify-end card-actions">
                                            <button className="btn w-full bg-[#422AD5]">Complete</button>
                                        </div>
                                 </div>
                        </div>
                    
                    </div>
                </div>
                
                
                

        </div>
    );
};

export default CustomerTickets;