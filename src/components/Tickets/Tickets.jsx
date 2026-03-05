import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ customersPromise, handleInProgress, selectedTicket, handleResolved,resolvedTicket }) => {

   
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
                            handleInProgress={handleInProgress}
                        ></Ticket>)
                    }
                </div>
            </div>
            <div className='border-2 border-b-fuchsia-900 w-1/4'>
                <div className='mb-10'>
                    <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Task Status</h1>
                    {
                        selectedTicket.length === 0 ? (
                            <p className='text-[#627382]'>Select a Task to add to Task Status</p>
                        ) : (
                            selectedTicket.map(ticket => (
                                <div key={ticket.id} className='p-4 shadow-lg border-2 border-amber-300 my-5 space-y-3 rounded-lg'>
                                    <h3 className='font-semibold'>{ticket.title}</h3>
                                    <button onClick={()=>handleResolved(ticket)} className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                                </div>
                            ))
                        )



                    }

                </div>
                <div>
                    <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Resolved Task</h1>
                    {
                        resolvedTicket.length===0?(
                            <p className='text-[#627382]'>No Resolved Task yet</p>
                        ): (
                            resolvedTicket.map(ticket=>(
                                <div key={ticket.id} className='bg-[#E0E7FF] p-4 mb-4'>
                                    <h3 className='font-semibold'>{ticket.title}</h3>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>


        </div>

    );
};

export default Tickets;