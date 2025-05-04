import React from 'react';
import { NavLink } from 'react-router';
import userProfile from '../../assets/user.png'


const Navbar = () => {
    return (
        <div className='flex items-center w-10/12 mx-auto my-4'>
            <div className='flex-1'></div>
            <div className='text-center  flex-1'>
                <div className='space-x-4'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
                </div>
            </div>
            <div className='flex gap-3 flex-1 justify-end'>
                <img className='' src={userProfile} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;