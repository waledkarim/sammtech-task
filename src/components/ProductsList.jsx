import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  const filteredProducts = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  return (
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
  );
}
