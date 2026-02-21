export default function Loading() {
  return (
    <main className="wrapper my-8 space-y-6">
      {/* Back link skeleton */}
      <div className="h-4 w-32 rounded bg-gray-200 animate-pulse" />

      <section className="grid gap-6 md:grid-cols-2">
        {/* Image skeleton */}
        <div className="rounded-xl border bg-white p-4">
          <div className="aspect-square w-full rounded bg-gray-200 animate-pulse" />
        </div>

        {/* Details skeleton */}
        <div className="space-y-3">
          {/* Category */}
          <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />

          {/* Title */}
          <div className="h-7 w-3/4 rounded bg-gray-200 animate-pulse" />
          <div className="h-7 w-2/3 rounded bg-gray-200 animate-pulse" />

          {/* Price */}
          <div className="h-6 w-28 rounded bg-gray-200 animate-pulse" />

          {/* Rating */}
          <div className="h-4 w-40 rounded bg-gray-200 animate-pulse" />

          {/* Description lines */}
          <div className="h-40 w-full rounded bg-gray-200 animate-pulse" />

          {/* Button */}
        </div>
      </section>
    </main>
  );
}
