export default async function Product({ params }) {
  const { id } = await params;
  console.log(id);
}
