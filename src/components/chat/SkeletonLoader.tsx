export function SkeletonLoader() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] space-y-3 py-3">
        <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded animate-pulse w-full"></div>
        <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6"></div>
      </div>
    </div>
  );
}
