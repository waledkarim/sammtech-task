"use client";

import { CircleX, Funnel } from "lucide-react";
import { useMemo, useState } from "react";

export default function ProductsFilter(props) {
  const [openModal, setOpenModal] = useState(false);
  const categories = useMemo(() => {
    return [
      "all",
      ...new Set(props.products.map((product) => product.category)),
    ];
  }, [props.products]);
  const maxPrice = useMemo(() => {
    return props.products.reduce((acc, curr) => Math.max(acc, curr.price), 0);
  }, [props.products]);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="fixed right-5 bottom-15 rounded-full bg-black p-3 border border-gray-300"
      >
        <Funnel size={30} color="white" />
      </button>
      {openModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[1px] z-50">
          <div className="absolute top-1/4 right-0 left-0 mx-auto bg-white rounded-md p-3 max-w-130">
            <div className="flex justify-end">
              <button onClick={() => setOpenModal(false)}>
                <CircleX size={30} color="red" />
              </button>
            </div>
            <div className="my-5">
              <h3 className="my-2">Filter by Category:</h3>
              <div className="flex gap-2 items-center overflow-x-scroll">
                {categories.map((category, i) => (
                  <label
                    key={i}
                    className="has-checked:bg-black has-checked:text-white p-2 rounded-[100vw] border border-gray-200 cursor-pointer inline-block whitespace-nowrap w-fit"
                  >
                    {category.toUpperCase()}
                    <input
                      className="hidden"
                      type="radio"
                      name="category"
                      id={category}
                      value={category}
                      checked={props.category === category}
                      onChange={(e) => props.setCategory(e.target.value)}
                    />
                  </label>
                ))}
              </div>
            </div>
            <div className="my-5">
              <h3 className="my-2">Filter by Price:</h3>
              <input
                type="range"
                min={0}
                max={maxPrice}
                className="slider"
                name="price"
                id="price"
                value={props.price}
                onChange={(e) => props.setPrice(e.target.value)}
              />
              <p className="text-center font-medium border rounded-md py-1 px-2">
                <span className="text-base">
                  {props.price === 0 ? `Select a price` : `BDT ${props.price}`}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
