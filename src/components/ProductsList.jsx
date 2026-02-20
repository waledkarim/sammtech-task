"use client";

import { CircleX, Funnel } from "lucide-react";
import ProductCard from "./ProductCard";
import { useMemo, useState } from "react";

export default function ProductsList({ products }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
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
      <button
        onClick={() => setOpenModal(true)}
        className="fixed right-5 bottom-5 rounded-full bg-black p-3 border border-gray-300"
      >
        <Funnel size={30} color="white" />
      </button>
      {openModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[1px] z-50">
          <div className="absolute right-0 left-0 top-1/3 mx-auto bg-white rounded-md p-3 max-w-96">
            <div className="flex justify-end">
              <button onClick={() => setOpenModal(false)}>
                <CircleX size={30} color="red" />
              </button>
            </div>
            <div className="my-5">
              <h3 className="my-2">Filter by Category:</h3>
              <div className="flex gap-2 flex-wrap items-center">
                {categories.map((category, i) => (
                  <label
                    key={i}
                    className="has-checked:bg-black has-checked:text-white p-2 rounded-md border border-gray-200 cursor-pointer"
                  >
                    {category.toUpperCase()}
                    <input
                      className="hidden"
                      type="radio"
                      name="category"
                      id={category}
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="my-2">Filter by Price:</h3>
              <input
                type="range"
                min={0}
                max={100}
                className="slider"
                name="price"
                id="price"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
