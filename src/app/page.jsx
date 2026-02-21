import ProductsList from "@/components/ProductsList";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/product", {
    cache: "no-store",
  });

  console.log(res);

  if (!res.ok) {
    throw new Error("Oops, Something went wrong when fetching products.");
  }

  const products = await res.json();

  return (
    <main className="wrapper">
      <h1 className="border-b-2 border-b-gray-300 p-2">Products</h1>
      <ProductsList products={products} />
    </main>
  );
}
