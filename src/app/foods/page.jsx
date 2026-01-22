'use-client'
import React from 'react';

const getFoods = async () => {
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random');
    const data = await res.json();
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
        </div>
    );
};

export default Foods;