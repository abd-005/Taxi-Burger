import React from 'react';
import { ChevronLeft, Clock, Globe, Tag, PlayCircle, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const getSingleFood = async (id) => {
    try {
        const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, { cache: 'no-store' });
        const data = await res.json();
        return data.details;
    } catch (error) {
        return null;
    }
}

const page = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);

    if (!food) {
        return (
            <div className="flex h-screen items-center justify-center bg-black">
                <h2 className='text-4xl font-black text-yellow-500 tracking-tighter'>FOOD NOT FOUND</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] pb-20 text-white">
            {/* Hero Image Section */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <img 
                    src={food.foodImg} 
                    alt={food.title} 
                    className="h-full w-full object-cover scale-105 blur-[2px]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
                
                {/* Back Button */}
                <Link href="/foods" className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md hover:bg-yellow-500 hover:text-black transition-all">
                    <ChevronLeft size={24} />
                </Link>
            </div>

            {/* Content Container */}
            <div className="relative -mt-32 px-6 lg:px-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    
                    {/* Left Column: Main Info */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-1 text-xs font-black uppercase text-black">
                            <Tag size={14} /> {food.category}
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-white">
                            {food.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 py-4">
                            <div className="flex items-center gap-2 text-white/60">
                                <Globe size={20} className="text-yellow-500" />
                                <span className="font-medium">{food.area} Cuisine</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <Clock size={20} className="text-yellow-500" />
                                <span className="font-medium">25-30 Mins</span>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-white/70 max-w-2xl italic">
                            Experience the juicy and tender perfection of our signature {food.title}. 
                            Crafted with premium ingredients to ensure every bite is delicious.
                        </p>

                        {/* Video Section */}
                        {food.video && (
                            <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                                <div className="group relative aspect-video w-full overflow-hidden rounded-[2rem]">
                                     <iframe 
                                        className="h-full w-full"
                                        src={`https://www.youtube.com/embed/${food.video.split('v=')[1]}`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Order Card */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-10 rounded-[3rem] border border-white/20 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold uppercase tracking-widest text-white/40">Total Price</span>
                                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">In Stock</span>
                            </div>
                            <div className="mt-2 text-6xl font-black text-yellow-500">
                                ${(food.price / 100).toFixed(2)}
                            </div>

                            <div className="mt-8 space-y-4">
                                <button className="flex w-full items-center justify-center gap-3 rounded-[2rem] bg-yellow-500 py-5 text-xl font-black text-black shadow-[0_10px_30px_rgba(234,179,8,0.3)] transition-transform hover:scale-[1.02] active:scale-95">
                                    <ShoppingCart fill="currentColor" />
                                    ADD TO CART
                                </button>
                                <button className="w-full rounded-[2rem] border border-white/10 bg-white/5 py-5 text-lg font-bold text-white transition-all hover:bg-white/10">
                                    Customize Ingredients
                                </button>
                            </div>

                            <p className="mt-6 text-center text-xs text-white/30">
                                ⚡️ Free delivery on orders over $50.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;