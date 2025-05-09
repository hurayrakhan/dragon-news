import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from './NewsCard';



const Home = () => {
    const [categoryNews, setCategoryNews] = useState([]);

    const news = useLoaderData();




    return (
        <div>
            <h4 className='font-semibold mb-4'>Total <span className='text-red-500'>{news.length}</span> news found</h4>

            <div className='space-y-3'>
            {
                news.map(singleNews => <Suspense
                    key={singleNews.id}
                    fallback={<span className="loading loading-dots loading-xl"></span>}>
                    <NewsCard
                        news={singleNews}></NewsCard>
                </Suspense>
                )
            }
            </div>

        </div>
    );
};

export default Home;