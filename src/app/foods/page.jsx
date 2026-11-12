import FoodCard from '@/components/cards/FoodCard';
import React from 'react';
import CartItems from './CartItems';
import { Sparkles, ShoppingBag } from 'lucide-react';
import InputSearch from '@/components/InputSearch';

const getFoods = async (search) => {
    try {
        const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`, { cache: "no-store" });
        const data = await res.json();
        return data.foods || [];
    } catch (error) {
        return [];
    }
}

const Foods = async ({ searchParams }) => {
    const {search = ""} = await searchParams;
    const foods = await getFoods(search);

    return (
        <div className="min-h-screen bg-[#0a0a0a] px-3 py-12 text-white">
            <div className="mx-auto max-w-360">
                
                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
                    <div>
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-yellow-500">
                            <Sparkles size={14} /> Live Menu
                        </div>
                        <h1 className="text-4xl font-black tracking-tighter md:text-5xl">
                            Explore <span className="text-yellow-500">{foods.length}</span> Delicious Foods
                        </h1>
                    </div>
                    <p className="text-sm font-medium text-white/50 max-w-xs">
                        Freshly prepared, juicy, and delivered straight to your location.
                    </p>
                </div>

                <div className="my-7"><InputSearch/></div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1  gap-8 sm:grid-cols-12">
                    
                    {/* Food Cards Grid (8 Columns on Large Screen) */}
                    <div className="lg:col-span-8 sm:col-span-8">
                        {foods.length === 0 ? (
                            <div className="flex h-64 w-full items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5">
                                <p className="text-white/40 font-bold">No foods found right now.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                {foods.map(food => (
                                    <FoodCard key={food.id} food={food} />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Cart Sidebar (4 Columns on Large Screen) */}
                    <div className="lg:col-span-4 sm:col-span-4">
                        <div className="sticky top-28 rounded-[2.5rem] border border-white/20 bg-white/5 p-6 backdrop-blur-2xl shadow-2xl">
                            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-500 text-black">
                                    <ShoppingBag size={20} />
                                </div>
                                <h3 className="text-xl font-black tracking-tight">Cart Items</h3>
                            </div>
                            
                            <div className="mt-6">
                                <CartItems />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Foods;