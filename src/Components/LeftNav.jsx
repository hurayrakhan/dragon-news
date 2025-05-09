import React, { Suspense, use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch('/categories.json').then(res => res.json());

const LeftNav = () => {

    const categories = use(categoryPromise);

    return (
        <div className=' space-y-2 sticky h-fit top-3'>
            <h4 className='font-semibold mb-4'>All Category</h4>

            {
                categories.map(category => <Suspense
                    fallback={<span className="loading loading-dots loading-xl"></span>}
                    key={category.id}>
                    <NavLink
                        to={`/category/${category.id}`}
                        className='btn w-full'>
                        {category.name}
                    </NavLink></Suspense>
                )
            }

        </div>
    );
};

export default LeftNav;