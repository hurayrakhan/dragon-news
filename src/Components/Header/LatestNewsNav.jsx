import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNewsNav = () => {
    return (
        <div className='flex items-center p-3 bg-base-200 w-10/12 mx-auto gap-4'>
            <p className='py-2 px-3 bg-secondary  text-white'>Latest</p>
            <Marquee className='flex gap-5'>
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened !</p>

                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened !</p>
                
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened !</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNewsNav;