export default function Loading() {
  return (
    <main className="wrapper my-6 space-y-6">
      {/* Page title skeleton */}
      <div className="h-8 w-40 rounded bg-gray-200 animate-pulse" />

      {/* Grid skeleton */}
      <div className="products-grid-container my-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-200 p-4 space-y-4"
          >
            {/* Image */}
            <div className="h-48 w-full rounded bg-gray-200 animate-pulse" />

            {/* Title */}
            <div className="h-5 w-3/4 rounded bg-gray-200 animate-pulse" />
            <div className="h-5 w-1/2 rounded bg-gray-200 animate-pulse" />

            {/* Price + button */}
            <div className="flex items-center justify-between pt-2">
              <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
              <div className="h-10 w-28 rounded bg-gray-200 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
