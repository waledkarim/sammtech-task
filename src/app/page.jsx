import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  console.log(products.length);

  return (
    <main className="wrapper">
      <h1 className="border-b-2 border-b-gray-300 p-2">Products</h1>
      <section className="products-grid-container my-3">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            id={product.id}
            title={product.title}
            description={product.description}
            category={product.category}
            image={product.image}
            price={product.price}
          />
        ))}
      </section>
    </main>
  );
}
