import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';



const Home = () => {
    const [categoryNews, setCategoryNews] = useState([]);

    const { id } = useParams();
    const news = useLoaderData();


    useEffect(() => {
        const handleCategoryNews = () => {
            const newsID =parseInt(id);
            const categoryData = news.filter(data => data.category_id === newsID);
            setCategoryNews(categoryData);
        }

        handleCategoryNews();
    }, [id, news])




    return (
        <div>
            <h4 className='font-semibold mb-4'>Total <span className='text-red-500'>{news.length}</span> news found</h4>

            <div className='space-y-3'>
                {
                    categoryNews.map(singleNews => <Suspense
                        key={singleNews.id}
                        fallback={<span className="loading loading-dots loading-xl"></span>}
                    >
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