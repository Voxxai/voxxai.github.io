export function ProjectSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl animate-pulse">
      <div className="h-6 bg-white/10 rounded w-3/4 mb-4" />
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-white/10 rounded" />
        <div className="h-4 bg-white/10 rounded w-5/6" />
      </div>
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-white/10 rounded-full w-16" />
        <div className="h-6 bg-white/10 rounded-full w-16" />
      </div>
      <div className="flex justify-between">
        <div className="h-4 bg-white/10 rounded w-20" />
        <div className="h-4 bg-white/10 rounded w-24" />
      </div>
    </div>
  );
}
