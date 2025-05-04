import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch('/categories.json').then(res => res.json());

const LeftNav = () => {


    console.log(categoryPromise)

    const categories = use(categoryPromise)

    return (
        <div className=' space-y-2 border'>
            <h4 className='font-semibold mb-4'>All Category</h4>
            {
                categories.map(category => <NavLink className='btn w-full' key={category.id}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftNav;