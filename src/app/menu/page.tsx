import { prisma } from "@/lib/prisma";
import ProductCard from "../components/ProductCard";

interface ProductProps {
  category: string;
}

export async function products({ category }: ProductProps) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        equals: category,
      },
    },
  });
  return (
    <div className="my-4 grid w-[95%] grid-cols-1  gap-2 md:ml-0 lg:mx-16 lg:grid-cols-2 xl:mx-2 xl:grid-cols-3">
      {products.slice().map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default function Menu() {
  return (
    <section className="mt-16 flex w-[95%] flex-col">
      {products({ category: "Burger" })}
    </section>
  );
}