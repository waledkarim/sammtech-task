import ProductsContainer from "./ProductsContainer";

export default async function ProductsList() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Oops, Something went wrong when fetching products.");
  }

  const { products } = await res.json();

  return <ProductsContainer products={products} />;
}
