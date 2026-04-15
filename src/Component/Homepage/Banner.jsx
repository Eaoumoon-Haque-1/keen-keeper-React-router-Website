import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const Banner = () => {
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-5xl font-bold text-center mb-4'>Friends to keep close in your life</h1>
            <p className='text-[#64748bFF] text-center mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.</p>
            <div className='text-center'><button className='btn mb-10 bg-[#244d3fFF] text-white space-x-2 '><IoMdAdd />Add a Friend</button></div>

        </div>
    );
};

export default Banner;