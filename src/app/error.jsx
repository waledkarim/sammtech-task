"use client";

export default function Error({ error, reset }) {
  return (
    <main className="wrapper my-10 space-y-4">
      <h1 className="text-2xl font-semibold text-center">
        Something went wrong
      </h1>
      <p className="text-sm text-gray-600 text-center">
        We couldn’t load the products right now. Please try again.
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => reset()}
          className="rounded-md border px-4 py-2 text-sm font-medium text-white bg-black"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
