import React from 'react';
import vector1 from '../../assets/vector1.png'
import vector2 from '../../assets/vector2.png'

const Banner = ({inProgress, resolved}) => {
    
    return (
        <div className='flex flex-col md:flex-row justify-between gap-5 w-11/12 mx-auto my-20 text-white '>

            <div className="relative flex justify-center items-center h-52 w-full md:w-1/2 rounded-lg py-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] overflow-hidden" >

             <img src={vector1} alt="" className='absolute left-0 bottom-0' />
            <img src={vector1} alt="" className='absolute right-0 top-0 scale-x-[-1]' />

                <div className='text-center z-10'>
                    <h3 className='text-xl'>In-Progress</h3>
                    <h1 className='text-4xl font-medium'>{inProgress}</h1>
                </div>
            </div>
            <div className="relative right-card flex justify-center items-center h-52 w-full md:w-1/2  rounded-lg py-10 bg-gradient-to-r from-[#54CF68] to-[#00827A] overflow-hidden">

            <img src={vector1} alt="" className='absolute left-0 bottom-0' />
            <img src={vector1} alt="" className='absolute right-0 top-0 scale-x-[-1]' />
            
             
                <div className='text-center'>
                    <h3 className='text-xl z-10'>Resolved</h3>
                    <h1 className='text-4xl font-medium'>{resolved}</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;