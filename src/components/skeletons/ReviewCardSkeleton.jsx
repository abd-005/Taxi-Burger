export default function ReviewSkeleton() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 animate-pulse rounded-2xl bg-white/10" />
          <div className="space-y-2">
            <div className="h-4 w-28 animate-pulse rounded-md bg-white/10" />
            <div className="h-3 w-16 animate-pulse rounded-md bg-white/5" />
          </div>
        </div>
        <div className="h-7 w-14 animate-pulse rounded-full bg-white/10" />
      </div>

      {/* Text Lines Skeleton */}
      <div className="mt-5 space-y-2">
        <div className="h-3 w-full animate-pulse rounded-full bg-white/10" />
        <div className="h-3 w-full animate-pulse rounded-full bg-white/10" />
        <div className="h-3 w-4/5 animate-pulse rounded-full bg-white/5" />
      </div>

      {/* Footer Skeleton */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="h-9 w-24 animate-pulse rounded-xl bg-white/10" />
        <div className="h-3 w-20 animate-pulse rounded-full bg-white/5" />
      </div>
    </div>
  );
}