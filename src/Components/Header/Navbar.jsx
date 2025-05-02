import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Navbar = () => {
    return (
        <div className='flex justify-center items-center mt-12 flex-col '>
            <img className='w-lg ' src={logo} alt="" />
            <p className='text-accent '> Journalism Without Fear or Favour</p>
            <p className=' text-accent text-lg'>{format(new Date(), 'EEEE, MMMM MM, yyyy')}</p>
        </div>
    );
};

export default Navbar;