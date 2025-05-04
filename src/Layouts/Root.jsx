import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Header/Navbar';
import Header from '../Components/Header/Header';
import LeftNav from '../Components/LeftNav';
import RightNav from '../Components/RightNav';

const Root = () => {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main className='w-10/12 mx-auto grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftNav></LeftNav>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </>
    );
};

export default Root;