import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ customersPromise }) => {

    const tickets = use(customersPromise)


    return (
        <div className='w-11/12 mx-auto flex gap-3 '>
            <div className='border-2 border-b-fuchsia-900 w-3/4'>
                <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Customer Tickets</h1>

                <div className="grid grid-cols-2 gap-4">
                    {
                        tickets.map(ticket => <Ticket 
                            key={ticket.id}
                            ticket={ticket}
                        ></Ticket>)
                    }
                </div>
            </div>
            <div className='border-2 border-b-fuchsia-900 w-1/4'>
                 <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Task Status</h1>
                <div>

                </div>
            </div>
           

        </div>

    );
};

export default Tickets;