export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  console.log(products);

  return <h1>Hello World</h1>;
}
