import ProductsList from "@/components/ProductsList";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  return (
    <main className="wrapper">
      <h1 className="border-b-2 border-b-gray-300 p-2">Products</h1>
      <Suspense fallback={<Loading />}>
        <ProductsList />
      </Suspense>
    </main>
  );
}
