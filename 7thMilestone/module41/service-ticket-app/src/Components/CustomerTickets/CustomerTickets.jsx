import React, { use } from 'react';

const CustomerTickets = ({ ticketPromise }) => {
    
    const ticketInfo = use(ticketPromise);
    console.log(ticketInfo);
    return (
        <div className='max-w-[1200px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>

                {ticketInfo.map((ticket) => (
                    <div key={ticket.id} className="card card-border bg-base-100 w-96 mb-4">
                        <div className="card-body">
                            <h2 className="card-title">{ticket.title}</h2>
                                <span>{ticket.status}</span>    
                            <span>{ticket.description}</span>
                            <div className="card-actions justify-between mt-4">
                                <span>{ticket.id}</span>    
                                <span>{ticket.priority}</span>
                                <span>{ticket.customer}</span>   
                            </div>

                            
                    </div>
        </div>
                            )
                        )
                    }

        </div>
    );
};

export default CustomerTickets;