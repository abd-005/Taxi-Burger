'use client';

import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';

export default function ReviewCard({ review }) {
  const [likesCount, setLikesCount] = useState(review.likesCount || 0);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikesCount((prev) => prev - 1);
      setHasLiked(false);
      // Backend API Call: decrease like
    } else {
      setLikesCount((prev) => prev + 1);
      setHasLiked(true);
      // Backend API Call: increase like
    }
  };

  const formattedDate = new Date(review.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:bg-white/15">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-lg font-black text-black shadow-md">
            {review.user ? review.user.charAt(0).toUpperCase() : 'G'}
          </div>
          <div>
            <h4 className="text-lg font-black tracking-tight text-white">
              {review.user || "Guest Foodie"}
            </h4>
            <p className="text-xs font-medium text-white/40">{formattedDate}</p>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="flex items-center gap-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1">
          <Star size={14} fill="#eab308" className="text-yellow-500" />
          <span className="text-xs font-bold text-yellow-500">
            {review.rating}.0
          </span>
        </div>
      </div>

      {/* Review Content */}
      <p className="mt-5 text-sm leading-relaxed text-white/80">
        {review.review}
      </p>

      {/* Footer / Like */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-bold transition-all active:scale-95 ${
            hasLiked
              ? 'border-red-500/50 bg-red-500/20 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
              : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Heart
            size={16}
            className={hasLiked ? 'fill-red-500 text-red-500' : 'text-white/60'}
          />
          <span>{likesCount} {likesCount === 1 ? 'Like' : 'Likes'}</span>
        </button>

        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
          Customer Review
        </span>
      </div>
    </div>
  );
}