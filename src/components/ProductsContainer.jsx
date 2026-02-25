"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";

export default function ProductsContainer({ products }) {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(0);
  const numberOfItemsPerPage = 30;

  const filteredProducts = useMemo(() => {
    const predicates = [];

    if (category !== "all") {
      predicates.push((product) => category === product.category);
    }

    if (price !== 0) {
      predicates.push((product) => product.price <= price);
    }

    return products.filter((product) => predicates.every((fn) => fn(product)));
  }, [products, category, price]);

  const startIndex = (page - 1) * numberOfItemsPerPage;
  const lastIndex = startIndex + numberOfItemsPerPage;

  const totalProducts = filteredProducts.length;
  const totalNumberOfPages = useMemo(() => {
    const divisions = totalProducts / numberOfItemsPerPage;
    const isExact = Number.isInteger(divisions);
    if (!isExact) {
      return divisions + 1;
    }
    return divisions;
  }, [filteredProducts]);

  const slicedProducts = filteredProducts.slice(startIndex, lastIndex);

  useEffect(() => {
    setPage(1);
  }, [filteredProducts]);

  return (
    <>
      {filteredProducts.length === 0 ? (
        <h1 className="font-bold text-center my-14">
          Could not find any products
        </h1>
      ) : (
        <div>
          <div className="products-grid-container my-3">
            {slicedProducts.map((product, i) => (
              <ProductCard
                key={i}
                id={product.id}
                title={product.title}
                description={product.description}
                category={product.category}
                images={product.images}
                price={product.price}
              />
            ))}
          </div>
          <div className="p-3 flex justify-center items-center gap-3">
            {Array.from({ length: totalNumberOfPages }, (_, i) => i + 1).map(
              (pageNo, i) => (
                <button
                  key={i}
                  onClick={() => setPage(pageNo)}
                  className={`h-10 w-10 font-bold bg-black text-white rounded-full ${page === pageNo ? "bg-black/50" : ""}`}
                >
                  {pageNo}
                </button>
              ),
            )}
          </div>
        </div>
      )}
      <ProductsFilter
        products={products}
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
      />
    </>
  );
}
