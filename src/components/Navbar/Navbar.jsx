import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 cursor-pointer p-2 shadow">
              <li  className='text-base font-medium hover:text-[#422AD5]'>Home</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>FAQ</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>Charging</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>Blog</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>Download</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>Contact</li>
            </ul>
          </div>
          <a className="btn font-bold text-xl">CS — Ticket System</a>
        </div>
        

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-3 space-x-5 cursor-pointer mr-5">
              <li  className='text-base font-medium hover:text-[#422AD5]'>Home</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>FAQ</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>Charging</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>Blog</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>Download</li>
              <li  className='text-base font-medium hover:text-[#422AD5]'>Contact</li>
            </ul>
          </div>
          
          <a className="text-white btn bg-gradient-to-r from-[#422AD5] to-[#9F62F2]">+ New Ticket</a>
        </div>
      </div>
    );
};

export default Navbar;