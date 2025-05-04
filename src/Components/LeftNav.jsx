import React, { Suspense, use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch('/categories.json').then(res => res.json());

const LeftNav = () => {

    const categories = use(categoryPromise);

    return (
        <div className=' space-y-2 border'>
            <h4 className='font-semibold mb-4'>All Category</h4>

            {
                categories.map(category => <NavLink
                    to={`/category/${category.id}`}
                    className='btn w-full'
                    key={category.id}>
                    {category.name}
                </NavLink>
                )
            }

        </div>
    );
};

export default LeftNav;