import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrapper my-10 space-y-4">
      <h1 className="text-2xl font-semibold text-center">Product not found</h1>

      <p className="text-gray-600 text-center">
        The product you’re looking for doesn’t exist or may have been removed.
      </p>

      <div className="flex justify-center">
        <Link
          href="/"
          className="inline-block font-medium rounded-md border px-4 py-2 bg-black text-white"
        >
          Back to products
        </Link>
      </div>
    </main>
  );
}
