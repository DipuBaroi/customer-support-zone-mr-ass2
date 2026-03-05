import React from 'react';
import calanderImg from '../../assets/calendar.png'


const Ticket = ({ticket, handleInProgress}) => {
    // console.log(ticket);
    const {id, title, description, customer, priority, status, createdAt } = ticket
    return (
        <div onClick={()=>handleInProgress(ticket)} className='cursor-pointer p-4 rounded-lg shadow space-y-4 bg-white'>
            <div className='flex justify-between'>
                <h3 className='text-lg font-medium'>{title}</h3>
              <div className='flex gap-2 items-center bg-[#B9F8CF] px-3 py-1 rounded-2xl'>
                  <span className='w-4 h-4 bg-green-600 rounded-full'></span> 
                <h3>{status}</h3>
              </div>
            </div>
            <p className='text-[#627382] text-lg'>{description}</p>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <span className='text-[#627382] font-medium'>{id}</span>
                    <h3 className='text-[#F83044] font-medium'>{priority}</h3>
                </div>
                <div className='flex gap-4'>
                    <h3 className='text-[#627382]'>{customer}</h3>
                    <div className='flex gap-2'>
                        <img src={calanderImg} alt="" />
                        <h3 className='text-[#627382]'>{createdAt}</h3>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Ticket;