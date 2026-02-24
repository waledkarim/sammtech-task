import { CircleX, Funnel } from "lucide-react";

export default function ProductsFilter(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
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
                {props.categories.map((category, i) => (
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
                      checked={props.selectedCategory === category}
                      onChange={(e) =>
                        props.setSelectedCategory(e.target.value)
                      }
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
                max={props.maxPrice}
                className="slider"
                name="price"
                id="price"
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
