import React from 'react';
import Navbar from './Navbar';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
import LatestNewsNav from './LatestNewsNav';

const Header = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-12 flex-col '>
                <img className='w-lg ' src={logo} alt="" />
                <p className='text-accent '> Journalism Without Fear or Favour</p>
                <p className=' text-accent text-lg'>{format(new Date(), 'EEEE, MMMM MM, yyyy')}</p>
            </div>
            <LatestNewsNav></LatestNewsNav>
            <Navbar></Navbar>

        </div>
    );
};

export default Header;