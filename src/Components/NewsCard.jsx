import { Suspense } from 'react';
import { FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const {
        title,
        thumbnail_url,
        author,
        rating,
        total_view,
        details,
        tags,
    } = news;

    return (

        <div className="card bg-base-100 shadow-md border rounded-lg p-4 space-y-3">
            {/* Author Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author.name}</h2>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                    <FaShareAlt />
                </button>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold leading-snug">{title}</h2>

            {/* Image */}
            <img
                src={thumbnail_url}
                alt={title}
                className="w-full rounded-md object-cover h-52"
            />

            {/* Date & Tags */}
            <p className="text-xs text-gray-500">
                {new Date(author.published_date).toDateString()} | Tag Cloud Tags:{' '}
                {tags.map((tag, i) => (
                    <span key={i} className="mr-1 text-gray-700 font-medium">{tag}{i < tags.length - 1 && ','} </span>
                ))}
            </p>

            {/* Details Snippet */}
            <p className="text-sm text-gray-700">
                {details.length > 120 ? `${details.slice(0, 120)}...` : details}
                <span className="text-orange-500 font-semibold cursor-pointer ml-1">Read More</span>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center pt-2">
                <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(Math.floor(rating.number))].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-black font-semibold ml-1">{rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500 gap-1 text-sm">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>

    );
};

export default NewsCard;
