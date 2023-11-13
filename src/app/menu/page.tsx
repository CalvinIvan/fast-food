import { prisma } from "@/lib/prisma";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default async function Menu() {
  // const [category, setCategory] = useState();

  const products = await prisma.product.findMany({
    where: {
      category: {
        equals: "Pizza",
      },
    },
  });
  return (
    <section className="mt-16 flex w-[95%]  flex-col">
      <h1>Select Category:</h1>
      <div className="mb-3 rounded-xl bg-white/75 p-2">
        <label className="font-semibold text-gray-700/90">Category: </label>
        <form>
          <select
            name="category"
            id="category"
            className="rounded-xl bg-white/75 p-2 text-gray-700/90"
          >
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
          </select>
        </form>
      </div>
      <div className="my-4 grid w-[95%] grid-cols-1  gap-2 md:ml-0 lg:mx-16 lg:grid-cols-2 xl:mx-2 xl:grid-cols-3">
        {products.slice().map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
