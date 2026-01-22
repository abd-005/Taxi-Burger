import React from 'react';
import { ShoppingCart, Eye, Star, Flame } from 'lucide-react';

const FoodCard = ({ food }) => {
  return (
    <div className="group relative w-80 overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/10 p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:bg-white/15 hover:shadow-yellow-500/10">
      
      {/* Delicious Badge */}
      <div className="absolute left-6 top-6 z-10 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 backdrop-blur-md">
        <Flame size={14} className="text-yellow-500" />
        <span className="text-[10px] font-bold uppercase tracking-tighter text-white">Best Seller</span>
      </div>

      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden rounded-[2rem]">
        <img
          src={food.foodImg}
          alt={food.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="mt-5 px-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
            {food.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={14} fill="#eab308" className="text-yellow-500" />
            <span className="text-xs font-bold text-white">4.9</span>
          </div>
        </div>

        <h3 className="mt-1 text-2xl font-black tracking-tight text-white">
          {food.title}
        </h3>

        {/* Pricing */}
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-2xl font-black text-yellow-500">
            ${(food.price / 100).toFixed(2)}
          </span>
          <span className="text-xs text-white/40 line-through">$12.00</span>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-6 flex items-end gap-3">
          {/* View Details - Ghost Glass Button */}
          <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95">
            <Eye size={18} />
            <span>Details</span>
          </button>
          
          {/* Add to Cart - Primary Yellow Button */}
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105 hover:bg-yellow-400 active:scale-95">
            <ShoppingCart size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;