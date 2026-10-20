'use client';

// import FoodCard from '@/components/cards/FoodCard';
import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './ReviewLoading';



const Review = () => {
   const [reviews, setReviews] = useState([])
   const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://taxi-kitchen-api.vercel.app/api/v1/reviews`)
        .then(res=>res.json())
        .then(data=>{
            if (data) setReviews(data.reviews || []);
            setLoading(false)
        })
    },[])
    if (loading) return <ReviewLoading />
    return (
        <div>
            <h2 className='text-4xl font-bold'>
                Total <span className='text-yellow-500'>{reviews.length}</span> reviews Found
            </h2>
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-3 my-5'>
                {reviews.map(review =>
                    <ReviewCard key={review.id} review={review}></ReviewCard>
                )}
            </div>
        </div>
    );
};

export default Review;