import { prisma } from "@/lib/prisma";
import ProductCard from "../components/ProductCard";

interface SearchProps {
  searchParams: { query: string };
}

export default async function Search({ searchParams }: SearchProps) {
  const product = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: searchParams.query, mode: "insensitive" } },
        { description: { contains: searchParams.query, mode: "insensitive" } },
        {
          category: {
            equals: searchParams.query,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: {
      id: "desc",
    },
  });

  if (product.length === 0) {
    return <div className="text-center">No products found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
      {product.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
