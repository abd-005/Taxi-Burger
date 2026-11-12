'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';

const InputSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // বর্তমান সার্চ কুয়েরিটি ইনপুটে ডিফল্ট ভ্যালু হিসেবে রাখার জন্য
  const currentSearch = searchParams.get('search') || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim();

    // বর্তমান প্যারামিটারগুলোর কপি তৈরি করা
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    // পেজ রিফ্রেশ ছাড়াই URL আপডেট এবং সার্ভার কম্পোনেন্ট রি-ফেচ করা
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // সার্চ ক্লিয়ার করার ফাংশন
  const handleClear = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1 max-w-2xl">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" size={20} />
        
        <input
          key={currentSearch} // URL চেঞ্জ হলে ইনপুট ফিল্ড আপডেট রাখার জন্য
          defaultValue={currentSearch}
          name="search"
          type="text"
          placeholder="Search burgers, biryani, desserts..."
          className="w-full rounded-2xl border border-white/20 bg-white/5 py-4 pl-14 pr-12 text-sm text-white placeholder-white/40 backdrop-blur-xl outline-none transition-all focus:border-yellow-500 focus:bg-white/10"
        />

        {/* Clear Button (যদি সার্চ কুয়েরি থাকে) */}
        {currentSearch && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-1 text-white/60 hover:bg-white/20 hover:text-white"
            title="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-8 py-4 text-sm font-black uppercase tracking-wider text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:scale-105 hover:bg-yellow-400 active:scale-95"
      >
        Search
      </button>
    </form>
  );
};

export default InputSearch;