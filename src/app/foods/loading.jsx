import React from 'react';
import FoodCardSkeleton from '@/components/skeletons/FoodCardSkeleton';

const loading = () => {
    return (
        <div className='grid grid-cols-1  lg:grid-cols-3 gap-3 my-5'>
            {[...Array(12)].map((_, index) => <FoodCardSkeleton key={index}></FoodCardSkeleton>)} 
            {/* creating 12 empty array; '_' for empty element; */}
        </div>
    );
};

export default loading;