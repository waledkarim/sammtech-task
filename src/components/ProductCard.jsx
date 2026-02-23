import Link from "next/link";

export default function ProductCard(props) {
  return (
    <article className="border-3 border-gray-200 rounded-md px-3 py-4 grid grid-rows-subgrid row-span-3 gap-0">
      <img
        className="w-full h-40 object-contain border border-gray-200 p-3 rounded-md"
        src={props.images[0]}
        alt="Product Image"
      />
      <h3 className="py-3">{props.title}</h3>
      <div className="flex justify-between items-center">
        <p className="text-xl font-black text-gray-500">
          <span className="text-base">BDT</span> {""}
          {props.price}
        </p>
        <Link
          href={`products/${props.id}`}
          className="px-3 py-1.5 bg-black text-white font-semibold rounded-md"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
