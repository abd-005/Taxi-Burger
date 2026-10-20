import React from 'react';
import ReviewCardSkeleton from '@/components/skeletons/ReviewCardSkeleton';

const ReviewLoading = () => {
    return (
        <div className='grid grid-cols-1  lg:grid-cols-4 gap-3 my-5'>
            {[...Array(12)].map((_, index) => <ReviewCardSkeleton key={index}></ReviewCardSkeleton>)} 
            {/* creating 12 empty array; '_' for empty element; */}
        </div>
    );
};

export default ReviewLoading;