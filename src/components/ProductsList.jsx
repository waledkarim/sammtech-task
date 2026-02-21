"use client";

import ProductCard from "./ProductCard";
import { useMemo, useState } from "react";
import ProductsFilter from "./ProductsFilter";

export default function ProductsList({ products }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [price, setPrice] = useState(0);

  const maxPrice = useMemo(() => {
    () => products.reduce((acc, curr) => Math.max(acc, curr.price), 0);
  }, [products]);
  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);
  const filteredProducts = useMemo(() => {
    const predicates = [];

    if (selectedCategory !== "all") {
      predicates.push((product) => product.category === selectedCategory);
    }

    if (price !== 0) {
      predicates.push((product) => product.price <= price);
    }

    return products.filter((product) => predicates.every((fn) => fn(product)));
  }, [products, selectedCategory, price]);

  return (
    <>
      {filteredProducts.length === 0 ? (
        <h1 className="font- text-center my-14">Could not find any products</h1>
      ) : (
        <section className="products-grid-container my-3">
          {filteredProducts.map((product, i) => (
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
      )}
      <ProductsFilter
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        price={price}
        setPrice={setPrice}
        maxPrice={maxPrice}
        categories={categories}
      />
    </>
  );
}
