import React from 'react';
import twt from '../../assets/twt.png'
import insta from '../../assets/Insta.png'
import fb from '../../assets/fb.png'
import email from '../../assets/email.png'


const Footer = () => {
    return (
        <section className='mt-20 bg-black'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-20 text-white gap-3'>
                <div>
                    <h3 className='font-bold text-xl mb-8'>CS — Ticket System</h3>
                    <p className=" text-[#A1A1AA] text-justify mr-4">Customer Support Zone empowers teams to manage tickets, respond quickly, and enhance customer satisfaction through organized, streamlined, and efficient support services.</p>
                </div>
                <div>
                    <h3 className='font-medium text-xl mb-8'>Company</h3>
                    <div className="space-y-3 text-[#A1A1AA]">
                        <p>About Us</p>
                    <p>Our Mission</p>
                    <p>Contact Saled</p>
                    </div>
                </div>
                <div>
                    <h3 className=' font-medium text-xl mb-8'>Service</h3>
                  <div className="space-y-3 text-[#A1A1AA]">
                      <p>Products & Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                  </div>
                </div>
                <div>
                    <h3 className='font-medium text-xl mb-8'>Information</h3>
                    <div className="space-y-3 text-[#A1A1AA]">
                        <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                    </div>
                </div>
                <div>
                    <h3 className='font-medium text-xl mb-8'>Social Links</h3>
                    <div className="space-y-3 text-[#A1A1AA]">
                        <div className='flex gap-2'>
                        <img src={twt} alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={insta} alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={fb} alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={email} alt="" />
                        <p>support@cst.com</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='px-20'>
                <hr className=' text-gray-700' />
                <p className='text-white text-center py-8'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>

        </section>
    );
};

export default Footer;