const FoodCardSkeleton = () => {
  return (
    <div className="w-80 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div className="h-56 w-full animate-pulse rounded-[2rem] bg-white/10" />
      
      <div className="mt-5 space-y-4">
        <div className="flex justify-between">
          <div className="h-3 w-1/4 animate-pulse rounded-full bg-white/10" />
          <div className="h-3 w-12 animate-pulse rounded-full bg-white/10" />
        </div>
        
        <div className="h-7 w-2/3 animate-pulse rounded-lg bg-white/10" />
        <div className="h-6 w-1/3 animate-pulse rounded-md bg-white/5" />

        {/* Action Buttons Placeholder */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-12 flex-1 animate-pulse rounded-2xl bg-white/5 border border-white/10" />
          <div className="h-12 w-12 animate-pulse rounded-2xl bg-white/20" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton