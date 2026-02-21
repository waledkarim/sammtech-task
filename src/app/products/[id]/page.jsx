import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  if (id > 20) {
    return notFound();
  }
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Could not fetch the product");

  const product = await res.json();

  return (
    <main className="wrapper my-8 space-y-6">
      <Link href="/" className="flex gap-1 underline items-center font-medium">
        <ArrowLeft /> Back to products
      </Link>

      <section className="grid gap-6 md:grid-cols-2">
        {/* Image */}
        <div className="rounded-xl border bg-white p-4">
          <div className="relative aspect-square w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Details */}
        <article className="space-y-3">
          <p className="text-sm text-gray-600">{product.category}</p>

          <h1 className="text-2xl font-semibold">{product.title}</h1>

          <p className="text-lg font-semibold">${product.price}</p>

          {product.rating?.rate != null && (
            <p className="text-sm text-amber-600">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          )}

          <p className="text-base leading-6 text-gray-700">
            {product.description}
          </p>
        </article>
      </section>
    </main>
  );
}
