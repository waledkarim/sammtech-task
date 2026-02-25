"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";

export default function ProductsContainer({ products }) {
  const [page, setPage] = useState(1);
  const numberOfItemsPerPage = 30;
  const totalProducts = products.length;
  const totalNumberOfPages = useMemo(() => {
    const divisions = totalProducts / numberOfItemsPerPage;
    const isExact = Number.isInteger(divisions);
    if (!isExact) {
      return divisions + 1;
    }
    return divisions;
  }, [products]);
  const startIndex = (page - 1) * numberOfItemsPerPage;
  const lastIndex = startIndex + numberOfItemsPerPage;
  const [category, setCatgeory] = useState("all");
  const [price, setPrice] = useState(0);

  const slicedProducts = products.slice(startIndex, lastIndex);
  console.log("Products: ", slicedProducts);

  return (
    <>
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
      <ProductsFilter
        products={products}
        category={category}
        setCatgeory={setCatgeory}
        price={price}
        setPrice={setPrice}
      />
    </>
  );
}
