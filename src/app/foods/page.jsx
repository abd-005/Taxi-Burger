import FoodCard from '@/components/cards/FoodCard';
import React from 'react';

const getFoods = async () => {
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random',{cache:"no-store"});
    const data = await res.json();
    await new Promise((resolve)=> setTimeout(resolve, 2000)) // Delay 2s
    console.log(data);
    return data.foods || [];
}
const Foods = async () => {
    const foods = await getFoods();
    return (
        <div>
            <h2 className='text-4xl font-bold'>
                Total <span className='text-yellow-500'>{foods.length}</span> Foods Found
            </h2>
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-3 my-5'>
                {foods.map(food =>
                    <FoodCard key={food.id} food={food}></FoodCard>
                )}
            </div>
        </div>
    );
};

export default Foods;